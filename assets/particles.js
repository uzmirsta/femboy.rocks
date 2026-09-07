(function () {
    const canvas = document.getElementById('particles');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    function resize() {
        dpr = window.devicePixelRatio || 1;
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = Math.floor(width * dpr);
        canvas.height = Math.floor(height * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();

    // Soft pastel sparkle colors
    const SPARKLE_COLORS = [
        { r: 255, g: 255, b: 255 }, // Crisp White
        { r: 255, g: 220, b: 245 }, // Soft Pink
        { r: 255, g: 180, b: 230 }, // Rose Sparkle
        { r: 255, g: 150, b: 245 }, // Femboy Lilac
        { r: 255, g: 240, b: 205 }, // Warm Gold Glint
        { r: 215, g: 245, b: 255 }  // Ice Cyan
    ];

    const PARTICLE_COUNT = Math.min(80, Math.max(35, Math.floor((window.innerWidth * window.innerHeight) / 18000)));

    class SparkleParticle {
        constructor(isTrail = false, spawnX, spawnY) {
            this.isTrail = isTrail;
            this.reset(isTrail, spawnX, spawnY);
        }

        reset(isTrail = false, spawnX, spawnY) {
            this.isTrail = isTrail;
            this.x = spawnX !== undefined ? spawnX : Math.random() * width;
            this.y = spawnY !== undefined ? spawnY : Math.random() * height;

            // Types:
            // 0 = Tiny 4-Point Diamond Sparkle
            // 1 = Delicate Micro Cross Glint
            // 2 = Micro Shimmer Speck
            const typeRoll = Math.random();
            if (typeRoll < 0.45) {
                this.type = 0;
                this.baseSize = Math.random() * 0.9 + 1.1; // 1.1px - 2.0px
            } else if (typeRoll < 0.75) {
                this.type = 1;
                this.baseSize = Math.random() * 0.7 + 0.9; // 0.9px - 1.6px
            } else {
                this.type = 2;
                this.baseSize = Math.random() * 0.5 + 0.5; // 0.5px - 1.0px
            }

            if (this.isTrail) {
                this.baseSize = Math.random() * 0.6 + 0.8;
                this.type = Math.random() < 0.7 ? 0 : 1;
                this.life = 1.0;
                this.decay = Math.random() * 0.025 + 0.015;
            }

            this.color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];

            // Slower, calmer floating motion
            this.vx = (Math.random() - 0.5) * 0.08;
            this.vy = -(Math.random() * 0.12 + 0.04); // very gentle upward drift
            this.wobbleSpeed = Math.random() * 0.01 + 0.005;
            this.wobblePhase = Math.random() * Math.PI * 2;
            this.wobbleAmp = Math.random() * 0.25 + 0.08;

            // Slower, peaceful twinkle
            this.twinklePhase = Math.random() * Math.PI * 2;
            this.twinkleSpeed = Math.random() * 0.025 + 0.012;
            this.baseAlpha = Math.random() * 0.35 + 0.2;
            this.twinkleAmp = Math.random() * 0.35 + 0.2;

            // Gentle slow rotation
            this.rotation = Math.random() * Math.PI * 2;
            this.rotSpeed = (Math.random() - 0.5) * 0.008;

            // Occasional micro-flare
            this.burstTimer = Math.random() * 500 + 150;
            this.burstProgress = 0;
        }

        update() {
            this.wobblePhase += this.wobbleSpeed;
            this.x += this.vx + Math.sin(this.wobblePhase) * this.wobbleAmp;
            this.y += this.vy;
            this.rotation += this.rotSpeed;
            this.twinklePhase += this.twinkleSpeed;

            if (!this.isTrail) {
                this.burstTimer--;
                if (this.burstTimer <= 0 && this.burstProgress === 0) {
                    this.burstProgress = 0.01;
                }
                if (this.burstProgress > 0) {
                    this.burstProgress += 0.03;
                    if (this.burstProgress >= Math.PI) {
                        this.burstProgress = 0;
                        this.burstTimer = Math.random() * 600 + 200;
                    }
                }
            }

            if (this.isTrail) {
                this.life -= this.decay;
                return this.life > 0;
            }

            // Screen wrap
            if (this.y < -15) {
                this.y = height + 10;
                this.x = Math.random() * width;
            } else if (this.y > height + 15) {
                this.y = -10;
                this.x = Math.random() * width;
            }
            if (this.x < -15) this.x = width + 10;
            else if (this.x > width + 15) this.x = -10;

            return true;
        }

        draw() {
            let alpha = this.baseAlpha + Math.sin(this.twinklePhase) * this.twinkleAmp;
            let size = this.baseSize;

            if (this.burstProgress > 0) {
                const boost = Math.sin(this.burstProgress);
                alpha += boost * 0.45;
                size += boost * 1.0;
            }

            if (this.isTrail) {
                alpha *= this.life;
            }

            alpha = Math.max(0, Math.min(1, alpha));
            if (alpha <= 0.02) return;

            const { r, g, b } = this.color;

            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);

            if (this.type === 0) {
                // Tiny 4-Point Diamond Sparkle
                const auraGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.5);
                auraGrad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
                auraGrad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = auraGrad;
                ctx.beginPath();
                ctx.arc(0, 0, size * 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Curved diamond
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.95})`;
                ctx.beginPath();
                ctx.moveTo(0, -size);
                ctx.quadraticCurveTo(0, 0, size, 0);
                ctx.quadraticCurveTo(0, 0, 0, size);
                ctx.quadraticCurveTo(0, 0, -size, 0);
                ctx.quadraticCurveTo(0, 0, 0, -size);
                ctx.closePath();
                ctx.fill();

                // Core tint
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.7})`;
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
                ctx.fill();

            } else if (this.type === 1) {
                // Delicate Micro Cross Glint
                const len = size * 1.5;
                const thick = size * 0.28;

                const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.3);
                glow.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`);
                glow.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(0, 0, size * 1.3, 0, Math.PI * 2);
                ctx.fill();

                // Slender needle glints
                ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.9})`;
                ctx.beginPath();
                ctx.ellipse(0, 0, len, thick, 0, 0, Math.PI * 2);
                ctx.ellipse(0, 0, thick, len, 0, 0, Math.PI * 2);
                ctx.fill();

                // Center core
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                ctx.beginPath();
                ctx.arc(0, 0, size * 0.35, 0, Math.PI * 2);
                ctx.fill();

            } else {
                // Micro Shimmer Speck
                const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 1.6);
                grad.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
                grad.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`);
                grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(0, 0, size * 1.6, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }
    }

    // Slow, Graceful Shooting Star
    class ShootingStar {
        constructor() {
            this.reset();
        }

        reset() {
            this.active = false;
            this.waitTime = Math.random() * 320 + 220; // wait between shooting stars
            this.x = 0;
            this.y = 0;
            this.length = 0;
            this.speed = 0;
            this.angle = 0;
            this.opacity = 0;
            this.color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];
        }

        spawn() {
            this.active = true;
            this.x = Math.random() * (width * 0.8) + (width * 0.1);
            this.y = Math.random() * (height * 0.35);
            this.length = Math.random() * 45 + 40; // elegant trailing length
            this.speed = Math.random() * 1.6 + 2.4; // calm, slow glide (~2.4 - 4.0 px/frame)
            this.angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.25; // ~45 deg diagonal
            this.opacity = 0;
            this.maxOpacity = Math.random() * 0.4 + 0.35;
            this.fadingIn = true;
            this.distanceTraveled = 0;
            this.maxDistance = Math.random() * 260 + 200;
        }

        update() {
            if (!this.active) {
                this.waitTime--;
                if (this.waitTime <= 0) {
                    this.spawn();
                }
                return;
            }

            const vx = Math.cos(this.angle) * this.speed;
            const vy = Math.sin(this.angle) * this.speed;
            this.x += vx;
            this.y += vy;
            this.distanceTraveled += this.speed;

            if (this.fadingIn) {
                this.opacity += 0.025;
                if (this.opacity >= this.maxOpacity) {
                    this.opacity = this.maxOpacity;
                    this.fadingIn = false;
                }
            } else if (this.distanceTraveled > this.maxDistance * 0.65) {
                this.opacity -= 0.015;
                if (this.opacity <= 0) {
                    this.reset();
                }
            }

            if (this.x > width + 100 || this.y > height + 100) {
                this.reset();
            }
        }

        draw() {
            if (!this.active || this.opacity <= 0) return;

            const tailX = this.x - Math.cos(this.angle) * this.length;
            const tailY = this.y - Math.sin(this.angle) * this.length;
            const { r, g, b } = this.color;

            const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
            grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, 0)`);
            grad.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${this.opacity * 0.35})`);
            grad.addColorStop(1, `rgba(255, 255, 255, ${this.opacity * 0.9})`);

            ctx.save();
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1.2;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(tailX, tailY);
            ctx.lineTo(this.x, this.y);
            ctx.stroke();

            // Head sparkle glint
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 1.3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    const particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new SparkleParticle());
    }

    const trailParticles = [];
    const shootingStar = new ShootingStar();

    // Subtle micro-sparkle cursor trail
    let lastMouseX = null;
    let lastMouseY = null;
    let mouseThrottle = 0;

    window.addEventListener('mousemove', (e) => {
        mouseThrottle++;
        if (mouseThrottle % 3 !== 0) return;

        const x = e.clientX;
        const y = e.clientY;

        if (lastMouseX !== null) {
            const dist = Math.hypot(x - lastMouseX, y - lastMouseY);
            if (dist > 8 && trailParticles.length < 25) {
                trailParticles.push(new SparkleParticle(true, x, y));
            }
        }
        lastMouseX = x;
        lastMouseY = y;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        // Update & draw background sparkles
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }

        // Update & draw cursor trail sparkles
        for (let i = trailParticles.length - 1; i >= 0; i--) {
            const alive = trailParticles[i].update();
            if (alive) {
                trailParticles[i].draw();
            } else {
                trailParticles.splice(i, 1);
            }
        }

        // Update & draw shooting star
        shootingStar.update();
        shootingStar.draw();

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
        resize();
        particles.forEach(p => {
            p.x = Math.min(p.x, width);
            p.y = Math.min(p.y, height);
        });
    });
})();
