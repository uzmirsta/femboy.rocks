(function () {
'use strict';

const ASTOLFO_FALLBACK = 'data:image/webp;base64,UklGRpqQAQBXRUJQVlA4WAoAAAAQAAAAAAMAgwMAQUxQSDxyAAABHAZtIzlKhj/rLXdfAETEBDD7IElWGSVVWmWZFkCV2cE2S83YzGhG95gtp3dsF8lgpU56LROAkksgQMcBpKrxCLDNPRsWSj3RaE6qfcNGpZB2FQClv5CFkw3LiSRx51Dds/UXvWHbrmpPs237McaY87yuCCHBYkCCJpCid6FIcG6sBYIUa9ECpcVuqBep4lakbri2xa0tVqGkeFJCcQiBQALx5DrnHOPYf+QK1SEsy/0jIibAGv5/iu00v//M7J4bN4JLgkNw9+JOC0WKFWiBIi2lRQuFFqjhhVK0xV1airs7xQkaIBA0JIH4Pbs78/+9uLZnzubm3vMqIibAVyRJtm3btoVjYBuIBogJa9KYf+/ZmvpHLa8aWTIyPyNiAvD/W4q0/AEirX1m9CCIiLTsSYJbb1sKgIiRlr3H+dbhiw8CAGNMK57Dk4H85MpfrL/YYADGShQiYoyxnRprjJEWL/qc5JxXL9953GAA1jTEGGuNNeixGGuNtGgleJLKUOSB5PTL915hIGDLErEGXdq2BRddbtyK2+y844/XXnypgQIAxllpxUrxAJUkNRR1JT88f6MRSKQEsc4AaFtkyZXW2fKQo8/4+12PvvvlRyQ584kXLjplp/XHtAEQ60zLVYJbSCo71SInZ98wDqn0wLhEAAwYs/2F9z3xzpScXWf1el3Zccaz/zhyw8UAwFrTWpXiZio7KjuGQvn2yqh1R1wCAGM3PfSfT8xhx1DPsrwofAgkqd7nmSfJqfefutvyDjCJaaVKcBdJZXe1zmeXhOvCJgZIltntzCenkGReFD4oS9Tg84ykf/H8vVYE4JxplTIy5C0G9rTgfxYU18GlAJbe84pnAskiL5SNDUUWyPzFc7YaALjEtEY5rDipBC147oDEIEmAobv8/amc1KwIyhjV50p+ef2R4wCTOpHWpxRbfEml9oChmHEgXAoscdR/p5HMC2XE6jOS/z9/KwCuZlugDppdBgt+uiGw0llPkswLZfQhD+TEG388EjCJtDaZBA+qskQtuO+A371CahHYnOoLcuqjt5ybIklrtTRNEifSiiQJ7mYpDOHu2wN9oWzikJPkQ+uja1erOWk5Qg1H16lldOrZ7KEoPD+859ij991917VXHAsALk1ty9GRc0oLykosyKz+3bffTBj/1gOn7bwEAOtabKRjI1LsP720ygyeXYev37n/pO1rMNJCY2pp4lyS1lJTVoJxk6qO1I4hhECS2edv7Q2RVhmTWHRtUluOMcM/qL5uqgYl+dFqsK0xkqaoHXLfs8888+Tzpx80ACZNnJRgkwkM84yO6sPszVtkbA3uqHfmsNNi9pt/Hg7AJs70ZCBuZcxaAfQcv5q0wogD9v+gzu76ty89bRUAxjnnrLXWiJjEYf9vqRFVoucLY5CalhdJsNwzdVK7Q6qf9cYlBy2I7goWuKPOea4vHlgcYqy0tFjYE+ay5Oz9mw/Za5uxyy+/wlILL7D+nydxXqx8c98hAIyVVhWxGH27soEh+LzIiynTv/2e8+ww/trDFgBgWlPEYOxzJLVjt8KnF55wV4de49f3/mIoRFpQDOyB1GnP3/KHo4/9zcmPzqj7TuqP7TUUsH/Lm0erh+QnOyawrScYdX7x7omroctkw5NueW3Gq9duC8BawScXKvU/45WVvG40bIuJmLEPvbqdANZ1ag0ArDoCsE4Asdjsz57URCADJ6wHI60kgmXO2xGwiQUAEcC4xFlI5dB/BXPOTE+q/jNMiMopG8G1ksAuDSQOPRVn8AEtMOZnMzwZVPUfedTrUZVbI2klEdhE0FA3oscarH3Z04uZiuonDXKmhQRG0Oj1D6yqAcDAkx59bd78xSlAzj0BaStJw0UGnvYdoKenBjb5zH63ahLwnWHOtM7AYMIr31kBACpgk/uTQNl+EmotNGKww4IHJu2558fckGMXMaQAybdHOds6A1hs+Tcu4rvn/YxsmYTK9lNQa6ERGYBV72cfyRDYv0piXlS+nFrTCiPGVXXtBDVWup6+2yhTIegXGyJteTFVpxL0O3j4GuOPa6hMyewPqLW2iOtYAFh100lHnnnBr+/7/TOzGial8uHUmhYWk6QANvzMd69/eMr7LZM0cMo2krawAFjpyBuf6bJf79u29SExGPQmpNKqYrDcUf/+ax/J0LQ+qDJJPd9aSFzrypifXvHMOySXtExX5Vc7S9qq0rG22oZHXzeTSav+z2hrZem4ygbbXk5Nl8CnFjCudcWkPRWAbX+YMsoZP0WtRUWSxAADJl3ywpwlTFhldjRqIiItJy4xwKB1z3txjjJxVc+3qbXO2SRNksS0iFhngNrOf58wtSWpmjYF78DwGropLSDGClDb4aKPZnmSqkxd5ff/f/ON115584E7/n7aH3+5WdLqYawFzLjTX/leSVKZ1urrxe8spJXDGABLnfjU9MBe+2dLw6Bl0xoAQ/e5b7ay9+551zBIq4YIZMCmF37N3n3OQyGtGWIAt9m549nrz7gbWjFFBGhb40KS2tsLfGdpmJYLMYAM2/MOMih7++qzjSBosTQA6vVOfIL0gelf8J9DxLRUiDHAcuufvZhsAzNQdcYasGihFGOBBQ+4fjFDG5iFOS8fCtNCYSww+sdPkL5VZmLOn0OkZUIcsOjed5Ndr/xXa1PQWT8Qg1ZJa9C228Nk7pmROf+zIGyLhCTAZhdlzArOV2a8ZqCY1gjrsNhR01kUpIZ+NQ9C+GZrWGmFSIDtH6DOLYrcs0vvm7YN/xyNYsEXF4dtfTAJRv56Euey02zarLnvzVrI/vWf0ut2Xpta0+rgEqx+myc5e9KL/7vyjIN222vfSXseeNy3vnXDPffNZUg9rfMwOGlpkDZg9/fJj+/6455brjAc3e5ZecShM0NIPPrimy2QmhYGZ7Hkzfzy8mM2HY2OptaWVnVdV7VzAHALm38DvaHn22sgsS0LBvjl40/9Zu02AC5JnBWgVlcCiIjtxd6vhPBB9F+jLSz4xk9gU2lRwHInnr7HCADWWQGAZO0UgKsNIDWOeIPKDCw47TxBaloRBGN+s8MgwDmDzq3Z5YVz9p1AVJ2qxilzGZiFnnx0c5hUWg9glxsLJFbQtTHD9mxf+Ldf7wsAZy1h4L9eixgCPzulhtS1HoiDMei+AGs8SL7z55M3PlepzEb19C/vBVuzrQaAQY8lxcrvenLx60plTgZy2gUjYROZrxOTpNLHICizhl0Wa0NSmZcayLf3XRAuNXkmxqWps+gTlRqHL1YflNmp5Mzxe7bBOLuUGGszSZIkSZwAQLrdaQtDtgeswx+Yp6rkzNf2WRHGutpa5LBxSeIEHRfb+Ii/Pzzt1Z8mKJ+2xlVLckI77YRUT85++fQxWHr4thMHQXJFRIxzVgBg1J77n37vy1/NmM1JRy9i0fdpU1zA/0TaUqouev57Z/3ikWtPWV+QpQIRdL7wZsedd/7r7XM9Oz49Fn2hkuA74T/iBb1UzjN/ecd9dz0xfvxXX77xxptvPHDRpRdf8cMf/+ycYz85YWAtyFARAYAFRi244V7/ePKLehGUHZUT926DSN+HJPhToEbprevcG9Y5WxvW1jasVnM2aXOVFWMFgCA7RQyAoW6hc/Mv8iKw2xN+MRQw6PuUBIfNojIjc56dwqCbYroWQXYKAAxYYr1nPw7sqU44ahj6REUS7P8dlTnp+chCHaRzzLeKAEA6ZIUj3mRPldRppw2CWOnzEBFAdviCgVkZ9NPlOszXihgAdshC+977MUkNnWkHVfLbC5eAsYI+ThEDYMDix3zHwMysc+f5GhERALLIyie8M4WkV3ZUZUclOf3uNWCtQV+nABiwxC7X5wzK+c1CL08h8yliDADUFl311x+RDEGVJJWdq5Lf3b02xBn0fZqRq+x11SzSF8r5Ti34Q5j5ETFGADN6ub3+/r6SeaFKkqrsXJWccc+mQOrQB1qP/9KU9xexaYIyQ9W/Oh4mN4w1ALDQWic8N5mkL5SdKrvUQM578kCgdiiivf+z1diV9rufgZHm3eh5z/IwOWGsAZAust4xTwQy5F7Z4xDIxZM/XaGuUE7F4UgGjRN5+4ZnOSOZINZZALVlNj/zMU/6PCg7V+0qeHLJ5JMcXC0opabu6cFOLwfPXG15HGwWWGsADF9tv/PeykmfeyWpnXWpoSD7njy5hqsNyupHn2bLbNX2/XEwqSfGWQCLbnrgNZ+R9HmhLFGLgpzx2MnDYTsGBdUNWHHs9o+xy4wN/P1gI0lnnAUwdKuT7p1NMst8IEntSShIfn7vQcOBjkVBFQy54OYH36Snar7Q82y4dDOJA7DAukdcP5lkPQ+qqqSyhyFX+jcu2h5Ax6GoCrYmycB/gpVgG/aCTTOTJAAGb3D0fz4gmRWBpLLn6jMyu/9XqwK2ZlFWRXp+EBb5wH/mWlDfHOlMepkkFWDA+r+8+QOSRR7YpfZAi4ycctPBIwCXGpRWwajJDMxg5ZWwiSVJagG3wS9veZdkKAK71J6EPCOnXLlLCtQSQd+rYONZ+s+yCtoPg98JNqHE1RyADY667T2SIQ/KsosskK/9flsHSS36YkWwF1tmETl1eWcSSVwtAbD+0be+pyTzoCw7ZBlZ3H/UKoAkBn2zIvUlbP5Zy6k8A1USuVoCYOyB/3nfkyyCsmvtSZEX5Edn77IokCQGfbYyfnaruaOqIYSg+vYYZ5PH1VIASx19z2szSBZB2bUqu19kGVnccPjqDnBO0GcrUl1Pz/RWjKElSd/yWlRpY2s1AIsfdf+b7SSLoOxUO+m+z+okPztr05GAWIu+XMH/+pZp7aO2cmbLt6e/+WbDZv7W1qWLrdUEWP74B8bPJum9snSfZUqOv+nnK6eAsQZ9uiIrP09NrAFVZ+yxyfh11l1nk+vZ3IYqUWxaAzDygGs/qJMMQVm6FjnJb8/bccwIANYI+nhFDmcOvbsi+l3+VL67rakSRJLUAEsc9a+3ZpAMQdm59kyL3JMfnbvrsm0AxBr0+QqGzvnj4wz/Cidax5njjDXGWMguvAkdAUxKSJJaYNg+17w3lyRV2bmy56HwZPG/ny5ZA2CMEfQBG3PprNVeov9XLOFSEAAQwa7vjjMOgKSCuMQA9ifXvDuLJFXZtbKnofDKcO8Byw4FIEbQNywYOG3i4L7A/9I6Mb4/GMFnfoYKK4yFSQGxToDa7le9NocdlZ0rlT1V70lO/MtKgwGICPqMLU46DfvS/7fqo+rM1WH6gWDI8Ztj5JEbwEVPrBVg0I/O+6Cd3VeWGJTk22dtO8IBYgR9ygMvtDiRTfb4Zid80M4wHHKNMSZuYiwArHvOp5my0SGQzG7aapgFxAj6lgVbboPOL9n+e9A3NjwMRpZlsP7r30YPYi4GQG2nc9/I2Xgl6Z8+dEkDGEHfs2B4B/VV/y6Deg+JgVpe2MGyDDq/nD4GVbzEADJ4h3PeCOypas+UZP7c4UsBgEXftNSCAY/R/1sp1sXAKSsuy8B9kfc7Y+IkIoAdsv1ZH5CkdktJZQ+V1OyTM9cCIBZ92ILRczX8W/Vcw+INlmGwwpVceDJqxFfEAHDDtj3rHZLKhqoGku0TrtplACBW0Kct2Jo+f9hwNywtBmN+R31jq/iICIBk+NZ/e5NkUPZQe6BKsj7trl0FEGcFfdyCreiZvy2PEgOIYIvX2ccHUElUxAiAtgXWO+sVkj4oG6lKsn3yc8eMBUziBH3fBgdnkef3O4AA2y1kw+YLUiOeYgyAQQuvc8Gbc8jCKztVLUWVpE55+rjlAKSJoE9czLfZZlDg3YNgYE6Y733g82uIi4UYK0Db0ptf+UZOeq+kKqksVUMg+f34i34AmCSx6CsX841MemCQQefL9IEarkEHURRrBcAi6577JcmiCMoGavAk29/59z6DAJdY9KGL+xn9v52WvTQKI85iFqicsbuklSfGWGcALLbBcU/kZF4EZSODD6R+9eAxywC2lgq2urgf/Qd0XHXq0EVvYBZI5csjrKk6Mei42HYnPpaRIQ9saCiU5OeP/3kHA6nVLPraxV6RSZ+tfhfzQCr9b9EGU2XGJcDgIYttcvzDJEPmlY0MviD53f//sVUNsKlDH7zYq/KI37zCguzwzpLGWUAqSmxiAOzz73/f/x1ZZF7ZyOCLQM594aJ9FwVMLRX0xQtWfE3Dv5EDDevoSVIZLsMQg8GDIRUk1jkAy+961iySzAtld7VnPvck373jkMUBpKlFH71gIwb+2/VcPTv7frsE2O/Xw6ypGjGJA7DGwX9+3pN5XgT2sCchL0hOuu+36wJIak7QZy/YLPxb9V/Ja4EVzvz0Z0hRqWKSFMDIjU96g6Tmysaqz0lOeuJ3Ww0HTM0J+vIFmzCzPh/7gwte4r1ITJVIUhMg2eTUuz8kfeGVDVWf5WT25JlbLQkgTQz6+AU75RX1lVMnkt9uiRoq0ySpA8xGJ93+IcnCKxsb8rqSX1y/11gALjXo+xdMzK3pZL39MiRSEZKkFsD6p9z5IclQBDY25BnJGdcdvNlgwCRO0B8o2CG3yIwTlnAWlZjUEgDr/+Y/75PUIigbW+SBnPnQaVsMBZA4QT+hYDuGkFPUoDN3RYqmF+PaUgDrHHv/hJzUIigb67OMzJ89fcvFAVhn0H8oGKdB80qzi5BKs4mrWQBrnHDDBxnJIigb6/NMyQ+v2HWMAOIM+hUF4xmY1b74ZLRxaGpjUwekyx1+2/sZSR+U3dYSiiyQU67Ye4WhgFgr6GcUDF2kIaeU3BeD0jQxPTNG4nCJNcD6v338o5kkNSi7rexx8FlGfv/A4SsNASDGoD+yvoUh/OfoF+9fCZ0biIgYEZckaeoMojRpCtQWOuL/X84mqapscChykq/8cdUFAIgx6KfsOY6B0TWx/NrT//3fGy696+9Lm9R0tAadDx8zSBokSQpgjVMmTJxNUoOywep9ID85feuFHCBW0H8pe9HHZ+Y6V9nxn22DBg4YMGDQ0LS23A/2/s1ZZ/zl1xsMb4i4xABLH3ntZxlJVWWjgw/krOt2WzgBYETQr7kW2xAf8+oyf3/C52+Mf3v8m198/NLXM9pnntfB5/7eL6j7QYkQAAA=';

const GLYPHS = {
  ADAXI: "!\"&'()*,-.0123456789:;?@ABCDEFGHIJKLMNOPQRSTUVWXYZ\\`abcdefghijklmnopqrstuvwxyz\u00a0\u00b4\u00c0\u00c1\u00c8\u00c9\u00cc\u00cd\u00d9\u00da\u00e0\u00e1\u00e8\u00e9\u00ec\u00ed\u00f9\u00fa\u0131\u2042",
  alphalyrae: "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]_`abcdefghijklmnopqrstuvwxyz{}\u00a0\u00a1\u00a2\u00a3\u00a4\u00a5\u00a8\u00ab\u00ae\u00af\u00b1\u00b4\u00b7\u00b8\u00bb\u00bf\u00c0\u00c1\u00c2\u00c3\u00c4\u00c5\u00c6\u00c7\u00c8\u00c9\u00ca\u00cb\u00cc\u00cd\u00ce\u00cf\u00d0\u00d1\u00d2\u00d3\u00d4\u00d5\u00d6\u00d7\u00d8\u00d9\u00da\u00db\u00dc\u00dd\u00de\u00df\u00e0\u00e1\u00e2\u00e3\u00e4\u00e5\u00e6\u00e7\u00e8\u00e9\u00ea\u00eb\u00ec\u00ed\u00ee\u00ef\u00f0\u00f1\u00f2\u00f3\u00f4\u00f5\u00f6\u00f7\u00f8\u00f9\u00fa\u00fb\u00fc\u00fd\u00fe\u00ff\u0100\u0101\u0102\u0103\u0104\u0105\u0106\u0107\u0108\u0109\u010a\u010b\u010c\u010d\u010e\u010f\u0110\u0111\u0112\u0113\u0114\u0115\u0116\u0117\u0118\u0119\u011a\u011b\u011c\u011d\u011e\u011f\u0120\u0121\u0122\u0123\u0124\u0125\u0126\u0127\u0128\u0129\u012a\u012b\u012c\u012d\u012e\u012f\u0130\u0131\u0132\u0133\u0134\u0135\u0136\u0137\u0138\u0139\u013a\u013b\u013c\u013d\u013e\u013f\u0140\u0141\u0142\u0143\u0144\u0145\u0146\u0147\u0148\u0149\u014a\u014b\u014c\u014d\u014e\u014f\u0150\u0151\u0152\u0153\u0154\u0155\u0156\u0157\u0158\u0159\u015a\u015b\u015c\u015d\u015e\u015f\u0160\u0161\u0162\u0163\u0164\u0165\u0166\u0167\u0168\u0169\u016a\u016b\u016c\u016d\u016e\u016f\u0170\u0171\u0172\u0173\u0174\u0175\u0176\u0177\u0178\u0179\u017a\u017b\u017c\u017d\u017e\u0192\u01fc\u01fd\u01fe\u01ff\u0218\u0219\u021a\u021b\u0237\u02c6\u02c7\u02d8\u02d9\u02da\u02db\u02dc\u02dd\u0300\u0301\u0302\u0303\u0304\u0306\u0307\u0308\u030a\u030b\u030c\u0312\u0326\u0327\u0328\u1e80\u1e81\u1e82\u1e83\u1e84\u1e85\u1e9e\u1ef2\u1ef3\u2013\u2014\u2018\u2019\u201a\u201c\u201d\u201e\u2022\u2026\u2030\u2039\u203a\u20ac\u20bd\u20bf\u2122\u2212\u2248\u2260\u2264\u2265"
};
GLYPHS['alpha lyrae'] = GLYPHS.alphalyrae;

const $ = id => document.getElementById(id);
const PRESETS = [
  ['3840x2160', '3840 × 2160 · 4K 16:9'],
  ['1920x1080', '1920 × 1080 · FHD 16:9'],
  ['2560x1440', '2560 × 1440 · QHD 16:9'],
  ['2560x1600', '2560 × 1600 · 16:10'],
  ['3440x1440', '3440 × 1440 · ultrawide 21:9'],
  ['5120x2880', '5120 × 2880 · 5K, crops to anything'],
  ['1080x2400', '1080 × 2400 · phone'],
  ['1290x2796', '1290 × 2796 · iPhone Pro Max'],
  ['1440x3120', '1440 × 3120 · Android flagship'],
  ['custom', 'custom']
];
const SPARKLE_COLORS = [[255, 255, 255], [255, 220, 245], [255, 180, 230], [255, 150, 245], [255, 240, 205], [215, 245, 255]];

const sliderSpecs = {
  bgPanel: [
    ['warp',    'warp',            0, 1.6, 0.01, 0.75],
    ['scale',   'warp size',       0.2, 4, 0.01, 0.7],
    ['detail',  'detail',          0, 1, 0.01, 0.3],
    ['angle',   'gradient angle',  -180, 180, 1, 0, v => v + '°'],
    ['bias',    'more dark ↔ more pink', -0.35, 0.35, 0.01, 0],
    ['vig',     'dark corners',    0, 1, 0.01, 0.35],
    ['grain',   'grain',           0, 0.08, 0.002, 0.02],
    ['spark',   'sparkles',        0, 220, 1, 70],
    ['sparkSz', 'sparkle size',    0.5, 4, 0.05, 1.8]
  ],
  textPanel: [
    ['tsize',   'title size',      2, 30, 0.1, 11, v => v + '%'],
    ['ssize',   'subtitle size',   12, 70, 1, 30, v => v + '%'],
    ['ls',      'letter spacing',  -0.1, 0.1, 0.002, -0.035],
    ['gap',     'line spacing',    0.8, 1.6, 0.01, 1.05],
    ['glow',    'glow',            0, 1, 0.01, 0.35],
    ['cardOp',  'card opacity',    0, 1, 0.01, 0.85],
    ['margin',  'edge margin',     0, 20, 0.1, 6, v => v + '%']
  ],
  imgPanel: [
    ['isize',   'size',            10, 140, 1, 70, v => v + '%'],
    ['iop',     'opacity',         0.02, 1, 0.01, 0.2],
    ['imargin', 'edge margin',     0, 20, 0.1, 0, v => v + '%']
  ]
};
const fmtDefault = v => String(Math.round(v * 1000) / 1000);
const sliderIds = [];

function buildSliders() {
  for (const [panelId, list] of Object.entries(sliderSpecs)) {
    const panel = $(panelId);
    let anchor = null;
    if (panelId === 'textPanel') anchor = $('text-pos-label');
    if (panelId === 'imgPanel') anchor = $('img-pos-label');
    for (const [id, label, min, max, step, val, fmt] of list) {
      const row = document.createElement('div'); row.className = 'row';
      const l = document.createElement('label'); l.htmlFor = id; l.textContent = label;
      const o = document.createElement('output'); o.id = id + 'Out'; o.htmlFor = id;
      const r = document.createElement('input'); r.type = 'range'; r.id = id;
      r.min = min; r.max = max; r.step = step; r.value = val;
      r.setAttribute('aria-valuemin', min);
      r.setAttribute('aria-valuemax', max);
      r.setAttribute('aria-valuenow', val);
      r.dataset.fmt = fmt ? '1' : '';
      r._fmt = fmt || fmtDefault;
      r.setAttribute('aria-valuetext', r._fmt(val));
      row.append(l, o, r);
      if (anchor) panel.insertBefore(row, anchor); else panel.appendChild(row);
      sliderIds.push(id);
    }
  }
}
buildSliders();

for (const [v, label] of PRESETS) {
  const o = document.createElement('option');
  o.value = v;
  o.textContent = label;
  $('preset').appendChild(o);
}

const DEFAULTS = {
  preset: '3840x2160', w: 3840, h: 2160, frame: 'full', guides: false, seed: 4817,
  title: 'femboy.rocks', subtitle: '', font: 'ADAXI', sfont: 'ADAXI', fill: 'site', card: false,
  imgSrc: 'none', fmt: 'png'
};
for (const [panelId, list] of Object.entries(sliderSpecs)) {
  for (const s of list) DEFAULTS[s[0]] = s[5];
}
const GRID_DEFAULTS = { textAnchor: [1, 1], imgAnchor: [0, 2] };
const state = { textAnchor: GRID_DEFAULTS.textAnchor.slice(), imgAnchor: GRID_DEFAULTS.imgAnchor.slice() };

const valueIds = Object.keys(DEFAULTS);
function setControls(obj) {
  for (const id of valueIds) {
    const el = $(id); if (!el || obj[id] === undefined) continue;
    if (el.type === 'checkbox') el.checked = !!obj[id]; else el.value = obj[id];
  }
}
function getVals() {
  const o = {};
  for (const id of valueIds) {
    const el = $(id);
    if (el.type === 'checkbox') o[id] = el.checked;
    else if (el.type === 'range' || el.type === 'number') o[id] = parseFloat(el.value);
    else o[id] = el.value;
  }
  return o;
}
function updateOutputs() {
  for (const id of sliderIds) {
    const r = $(id);
    const num = parseFloat(r.value);
    const text = r._fmt(num);
    $(id + 'Out').textContent = text;
    r.setAttribute('aria-valuenow', num);
    r.setAttribute('aria-valuetext', text);
  }
}

const NAMES_Y = ['top', 'middle', 'bottom'], NAMES_X = ['left', 'center', 'right'];
function makeGrid(el, key) {
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      const b = document.createElement('button');
      b.type = 'button';
      b.dataset.x = x;
      b.dataset.y = y;
      b.setAttribute('aria-label', NAMES_Y[y] + ' ' + NAMES_X[x]);
      b.setAttribute('aria-pressed', (x === state[key][0] && y === state[key][1]) ? 'true' : 'false');
      b.addEventListener('click', () => {
        state[key] = [x, y];
        syncGrids();
        schedule();
      });
      b.addEventListener('keydown', (e) => {
        let nx = x, ny = y;
        if (e.key === 'ArrowRight') nx = Math.min(2, x + 1);
        else if (e.key === 'ArrowLeft') nx = Math.max(0, x - 1);
        else if (e.key === 'ArrowDown') ny = Math.min(2, y + 1);
        else if (e.key === 'ArrowUp') ny = Math.max(0, y - 1);
        else return;

        e.preventDefault();
        const nextBtn = el.querySelector(`button[data-x="${nx}"][data-y="${ny}"]`);
        if (nextBtn) {
          nextBtn.focus();
          state[key] = [nx, ny];
          syncGrids();
          schedule();
        }
      });
      el.appendChild(b);
    }
  }
}

function syncGrids() {
  for (const [id, key] of [['textGrid', 'textAnchor'], ['imgGrid', 'imgAnchor']]) {
    for (const b of $(id).children) {
      b.setAttribute('aria-pressed', (+b.dataset.x === state[key][0] && +b.dataset.y === state[key][1]) ? 'true' : 'false');
    }
  }
}
makeGrid($('textGrid'), 'textAnchor');
makeGrid($('imgGrid'), 'imgAnchor');

const hex = h => {
  const n = parseInt(h.slice(1), 16);
  return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255].map(x => x.toFixed(4)).join(',');
};
const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes; uniform vec2 uOff;
uniform float uWarp, uScale, uAngle, uBias, uVig, uGrain, uDetail;
const vec3 C0 = vec3(${hex('#1a1016')});
const vec3 C1 = vec3(${hex('#4a2035')});
const vec3 C2 = vec3(${hex('#8f4468')});
const vec3 C3 = vec3(${hex('#ff93dd')});
const vec3 INK = vec3(${hex('#0D0C0E')});
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p); vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5, s = 0.0, g = mix(0.18, 0.55, uDetail);
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) { v += a * noise(p); s += a; p = m * p; a *= g; }
  return v / s;
}
vec3 ramp(float t){
  vec3 c = mix(C0, C1, clamp(t / 0.25, 0.0, 1.0));
  c = mix(c, C2, clamp((t - 0.25) / 0.20, 0.0, 1.0));
  c = mix(c, C3, clamp((t - 0.45) / 0.25, 0.0, 1.0));
  return c;
}
void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float asp = uRes.x / uRes.y;
  vec2 q = (uv - 0.5) * vec2(asp, 1.0);
  vec2 d = vec2(sin(uAngle), -cos(uAngle));
  float ext = abs(d.x) * asp + abs(d.y);
  vec2 p = q * uScale * 2.0 + uOff;
  vec2 a = vec2(fbm(p), fbm(p + vec2(5.2, 1.3)));
  vec2 b = vec2(fbm(p + 4.0 * a + vec2(1.7, 9.2)), fbm(p + 4.0 * a + vec2(8.3, 2.8)));
  float n = fbm(p + 4.0 * b);
  vec2 qq = q + (b - 0.5) * uWarp;
  float t = dot(qq, d) / ext + 0.5 + (n - 0.5) * uWarp * 0.55 + uBias;
  t = clamp(t, 0.0, 1.0);
  vec3 col = ramp(t);
  float hi = smoothstep(0.80, 1.0, t) * smoothstep(0.35, 0.8, n);
  col = mix(col, vec3(1.0, 0.72, 0.97), hi * 0.30);
  vec2 c = (uv - 0.5) * 2.0;
  col = mix(col, INK, uVig * smoothstep(0.45, 1.7, length(c)));
  col += (hash(gl_FragCoord.xy + uOff.x) - 0.5) * uGrain;
  col += (hash(gl_FragCoord.xy * 1.37 + 7.1) - 0.5) / 255.0 * 1.5;
  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;
const VERT = 'attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }';

let GL = null;
function initGL() {
  const c = document.createElement('canvas');
  const gl = c.getContext('webgl', { preserveDrawingBuffer: true, antialias: false });
  if (!gl) return null;
  const sh = (type, src) => {
    const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { console.error(gl.getShaderInfoLog(s)); return null; }
    return s;
  };
  const vs = sh(gl.VERTEX_SHADER, VERT), fs = sh(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;
  const pr = gl.createProgram(); gl.attachShader(pr, vs); gl.attachShader(pr, fs); gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
  gl.useProgram(pr);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const u = {}; for (const n of ['uRes', 'uOff', 'uWarp', 'uScale', 'uAngle', 'uBias', 'uVig', 'uGrain', 'uDetail']) u[n] = gl.getUniformLocation(pr, n);
  const maxRender = gl.getParameter(gl.MAX_RENDERBUFFER_SIZE) || 4096;
  const maxView = (gl.getParameter(gl.MAX_VIEWPORT_DIMS) || [4096, 4096])[0] || 4096;
  return { c, gl, u, max: Math.min(maxRender, maxView) };
}
GL = initGL();

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function drawBg(ctx, W, H, v) {
  if (GL) {
    const { c, gl, u, max } = GL;
    let rw = W, rh = H;
    if (rw > max || rh > max) {
      const scaleDown = max / Math.max(rw, rh);
      rw = Math.max(64, Math.floor(rw * scaleDown));
      rh = Math.max(64, Math.floor(rh * scaleDown));
    }
    c.width = rw; c.height = rh;
    gl.viewport(0, 0, rw, rh);
    const r = mulberry32(v.seed * 7919 + 1);
    gl.uniform2f(u.uRes, rw, rh);
    gl.uniform2f(u.uOff, r() * 40, r() * 40);
    gl.uniform1f(u.uWarp, v.warp);
    gl.uniform1f(u.uScale, v.scale);
    gl.uniform1f(u.uAngle, v.angle * Math.PI / 180);
    gl.uniform1f(u.uBias, v.bias);
    gl.uniform1f(u.uVig, v.vig);
    gl.uniform1f(u.uGrain, v.grain);
    gl.uniform1f(u.uDetail, v.detail);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(c, 0, 0, W, H);
    ctx.restore();
  } else {
    const g = ctx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#1a1016');
    g.addColorStop(0.25, '#4a2035');
    g.addColorStop(0.45, '#8f4468');
    g.addColorStop(0.7, '#ff93dd');
    g.addColorStop(1, '#ff93dd');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, W, H);
  }
}

function drawSparkles(ctx, W, H, v) {
  const n = Math.round(v.spark * (W * H) / (1920 * 1080));
  if (!n) return;
  const r = mulberry32(v.seed * 104729 + 7), k = H / 1080 * v.sparkSz;
  ctx.save();
  for (let i = 0; i < n; i++) {
    const x = r() * W, y = r() * H, roll = r(), col = SPARKLE_COLORS[Math.floor(r() * SPARKLE_COLORS.length)], alpha = 0.3 + r() * 0.65;
    let type, size;
    if (roll < 0.45) { type = 0; size = (1.1 + r() * 0.9) * 2.2 * k; }
    else if (roll < 0.75) { type = 1; size = (0.9 + r() * 0.7) * 2.6 * k; }
    else { type = 2; size = (0.5 + r() * 0.5) * 1.4 * k; }
    const rgb = col.join(',');
    ctx.fillStyle = `rgba(${rgb},${alpha})`;
    ctx.strokeStyle = `rgba(${rgb},${alpha})`;
    ctx.shadowColor = `rgba(${rgb},${alpha * 0.8})`;
    ctx.shadowBlur = size * 3;
    if (type === 0) {
      ctx.beginPath();
      ctx.moveTo(x, y - size);
      ctx.quadraticCurveTo(x, y, x + size, y);
      ctx.quadraticCurveTo(x, y, x, y + size);
      ctx.quadraticCurveTo(x, y, x - size, y);
      ctx.quadraticCurveTo(x, y, x, y - size);
      ctx.fill();
    } else if (type === 1) {
      ctx.lineWidth = Math.max(0.6, size * 0.16);
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(x - size, y);
      ctx.lineTo(x + size, y);
      ctx.moveTo(x, y - size);
      ctx.lineTo(x, y + size);
      ctx.stroke();
    } else {
      ctx.beginPath();
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();
}

function frameRect(W, H, key) {
  if (key === 'full') return { x: 0, y: 0, w: W, h: H };
  const [a, b] = key.split(':').map(Number), ratio = a / b;
  let w = W, h = W / ratio;
  if (h > H) { h = H; w = H * ratio; }
  return { x: (W - w) / 2, y: (H - h) / 2, w, h };
}

let overlayImg = null, overlayKey = '';
let uploadURL = null;

function loadOverlay(v) {
  const key = v.imgSrc === 'astolfo' ? 'astolfo' : (v.imgSrc === 'upload' ? ('upload:' + (uploadURL || '')) : 'none');
  if (key === overlayKey) return;
  overlayKey = key;
  overlayImg = null;

  if (v.imgSrc === 'none') return;

  const im = new Image();
  im.onload = () => {
    if (overlayKey === key) {
      overlayImg = im;
      schedule();
    }
  };

  if (v.imgSrc === 'astolfo') {
    if (window.location.protocol === 'file:') {
      im.src = ASTOLFO_FALLBACK;
    } else {
      im.onerror = () => {
        im.onerror = null;
        im.src = ASTOLFO_FALLBACK;
      };
      im.src = '../../assets/images/astolfo.png';
    }
  } else if (v.imgSrc === 'upload' && uploadURL) {
    im.src = uploadURL;
  }
}

function drawOverlay(ctx, W, H, v) {
  if (v.imgSrc === 'none' || !overlayImg) return;
  const ih = H * v.isize / 100, iw = ih * overlayImg.width / overlayImg.height, m = H * v.imargin / 100;
  const x = m + (W - 2 * m - iw) * state.imgAnchor[0] / 2, y = m + (H - 2 * m - ih) * state.imgAnchor[1] / 2;
  ctx.save();
  ctx.globalAlpha = v.iop;
  ctx.imageSmoothingQuality = 'high';
  ctx.drawImage(overlayImg, x, y, iw, ih);
  ctx.restore();
}

function measureLine(ctx, text, ls) {
  let w = 0; const chars = Array.from(text);
  chars.forEach((ch, i) => { w += ctx.measureText(ch).width + (i < chars.length - 1 ? ls : 0); });
  return w;
}
function drawLine(ctx, text, x, cy, ls) {
  let cx = x; ctx.textBaseline = 'middle'; ctx.textAlign = 'left';
  for (const ch of Array.from(text)) { ctx.fillText(ch, cx, cy); cx += ctx.measureText(ch).width + ls; }
}
function fillFor(ctx, kind, x0, x1) {
  if (kind === 'white') return '#ffffff';
  if (kind === 'lilac') return '#ff8ff9';
  const g = ctx.createLinearGradient(x0, 0, Math.max(x1, x0 + 1), 0);
  if (kind === 'name') {
    g.addColorStop(0, '#f48fb1');
    g.addColorStop(1, '#E792C1');
  } else {
    g.addColorStop(0, '#ffb8b8');
    g.addColorStop(0.5, '#ff8ff9');
    g.addColorStop(1, '#ffb8b8');
  }
  return g;
}
function roundRect(ctx, x, y, w, h, r) {
  r = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function drawText(ctx, W, H, v) {
  const titleLines = v.title.split('\n').filter(s => s.length), subLines = v.subtitle.split('\n').filter(s => s.length);
  if (!titleLines.length && !subLines.length) return;
  const fr = frameRect(W, H, v.frame);
  const tpx = fr.h * v.tsize / 100, spx = tpx * v.ssize / 100;
  const tfont = `${tpx}px ${v.font}, sans-serif`, sfont = `${spx}px ${v.sfont || 'ADAXI'}, sans-serif`;
  const tls = v.ls * tpx, sls = (v.sfont === 'alphalyrae' ? 0 : v.ls * spx), tlh = tpx * v.gap, slh = spx * 1.3, sGap = titleLines.length && subLines.length ? tpx * 0.22 : 0;

  ctx.save();
  ctx.font = tfont; const tw = titleLines.map(l => measureLine(ctx, l, tls));
  ctx.font = sfont; const sw = subLines.map(l => measureLine(ctx, l, sls));
  const bw = Math.max(0, ...tw, ...sw), bh = titleLines.length * tlh + sGap + subLines.length * slh;
  const pad = v.card ? tpx * 0.5 : 0, ow = bw + 2 * pad, oh = bh + 2 * pad;
  const m = fr.h * v.margin / 100;
  const ox = fr.x + m + (fr.w - 2 * m - ow) * state.textAnchor[0] / 2;
  const oy = fr.y + m + (fr.h - 2 * m - oh) * state.textAnchor[1] / 2;
  const ax = state.textAnchor[0] / 2;

  if (v.card && v.cardOp > 0) {
    const lw = Math.max(1.5, H / 1080 * 1.6), rad = Math.max(10 * H / 1080, tpx * 0.2);
    ctx.save();
    ctx.globalAlpha = v.cardOp;
    const bg = ctx.createLinearGradient(ox, oy, ox + ow, oy + oh);
    bg.addColorStop(0, '#151216');
    bg.addColorStop(1, '#271927');
    roundRect(ctx, ox, oy, ow, oh, rad);
    ctx.fillStyle = bg;
    ctx.fill();

    const bd = ctx.createLinearGradient(ox, 0, ox + ow, 0);
    bd.addColorStop(0, '#e7c6c6');
    bd.addColorStop(1, '#E792C1');
    roundRect(ctx, ox + lw / 2, oy + lw / 2, ow - lw, oh - lw, rad);
    ctx.strokeStyle = bd;
    ctx.lineWidth = lw;
    ctx.stroke();
    ctx.restore();
  }

  const ix = ox + pad;
  let y = oy + pad;
  ctx.font = tfont;
  titleLines.forEach((line, i) => {
    const lx = ix + (bw - tw[i]) * ax;
    ctx.fillStyle = fillFor(ctx, v.fill, lx, lx + tw[i]);
    if (v.glow > 0) {
      ctx.shadowColor = 'rgba(255,143,249,' + (0.75 * v.glow) + ')';
      ctx.shadowBlur = tpx * 0.5 * v.glow;
    }
    drawLine(ctx, line, lx, y + tlh / 2, tls);
    y += tlh;
  });
  ctx.shadowBlur = 0;
  ctx.shadowColor = 'transparent';
  y += sGap;
  ctx.font = sfont;
  ctx.fillStyle = '#e0e0e0';
  subLines.forEach((line, i) => {
    drawLine(ctx, line, ix + (bw - sw[i]) * ax, y + slh / 2, sls);
    y += slh;
  });
  ctx.restore();
}

function paint(canvas, W, H, v) {
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');
  drawBg(ctx, W, H, v);
  drawSparkles(ctx, W, H, v);
  drawOverlay(ctx, W, H, v);
  drawText(ctx, W, H, v);
}

const cv = $('cv'), gd = $('guideLayer');

function drawGuides(pw, ph, v) {
  gd.width = pw;
  gd.height = ph;
  const g = gd.getContext('2d');
  g.clearRect(0, 0, pw, ph);
  if (!v.guides) return;

  const list = [['16:9', '16:9'], ['16:10', '16:10'], ['21:9', '21:9'], ['9:19.5', 'phone'], ['1:1', '1:1']];
  g.lineWidth = Math.max(1, ph / 540);
  g.setLineDash([ph / 60, ph / 90]);
  g.font = `${Math.max(11, ph / 45)}px alphalyrae, sans-serif`;
  g.textBaseline = 'top';

  list.forEach(([k, name]) => {
    const f = frameRect(pw, ph, k);
    if (f.w >= pw - 1 && f.h >= ph - 1) return;
    g.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    g.strokeRect(f.x + 0.5, f.y + 0.5, f.w - 1, f.h - 1);
    g.fillStyle = 'rgba(255, 255, 255, 0.9)';
    g.fillText(name, f.x + 6, f.y + 5);
  });
}

let pending = false, running = false;
function schedule() {
  if (pending) return;
  pending = true;
  requestAnimationFrame(() => {
    pending = false;
    render();
  });
}

async function ensureFonts() {
  try {
    await Promise.all([
      document.fonts.load('40px ADAXI'),
      document.fonts.load('40px alphalyrae'),
      document.fonts.load('40px "alpha lyrae"')
    ]);
  } catch (e) {}
}

async function render() {
  if (running) { schedule(); return; }
  running = true;
  try {
    await ensureFonts();
    const v = getVals();
    updateOutputs();
    loadOverlay(v);

    const W = clampDim(v.w), H = clampDim(v.h);
    const s = Math.min(1, 1600 / Math.max(W, H));
    const pw = Math.max(1, Math.round(W * s)), ph = Math.max(1, Math.round(H * s));

    paint(cv, pw, ph, v);
    drawGuides(pw, ph, v);
    $('dims').textContent = W + ' × ' + H + ' px';
    glyphHint(v);
    persist();
  } finally {
    running = false;
  }
}

function clampDim(n) {
  return Math.max(64, Math.min(8192, Math.round(n) || 64));
}

function glyphHint(v) {
  const tSet = GLYPHS[v.font] || '', sSet = GLYPHS[v.sfont || 'ADAXI'] || '', miss = new Set();
  if (v.font === 'ADAXI') {
    for (const ch of v.title) {
      if (/\s/.test(ch)) continue;
      if (!tSet.includes(ch)) miss.add(ch);
    }
  }
  if (v.sfont === 'ADAXI') {
    for (const ch of v.subtitle) {
      if (/\s/.test(ch)) continue;
      if (!sSet.includes(ch)) miss.add(ch);
    }
  }
  const h = $('glyphHint');
  if (miss.size) {
    h.hidden = false;
    h.textContent = 'ADAXI has no glyph for: ' + Array.from(miss).join(' ') + ' (it will fall back). alpha lyrae covers all Latin characters.';
  } else {
    h.hidden = true;
  }
}

function persist() {
  try {
    localStorage.setItem('fr-wallpaper', JSON.stringify({
      vals: getVals(),
      textAnchor: state.textAnchor,
      imgAnchor: state.imgAnchor
    }));
  } catch (e) {}
}

function restore() {
  try {
    const s = JSON.parse(localStorage.getItem('fr-wallpaper') || 'null');
    if (!s) return;
    if (s.vals) {
      if (s.vals.subtitle === 'still cozy to be in') {
        s.vals.subtitle = '';
      }
      if (s.vals.font === 'alphalyrae') {
        s.vals.font = 'ADAXI';
      }
      if (!s.vals.sfont || s.vals.sfont === 'alphalyrae') {
        s.vals.sfont = 'ADAXI';
      }
    }
    setControls(s.vals || {});
    if (Array.isArray(s.textAnchor)) state.textAnchor = s.textAnchor;
    if (Array.isArray(s.imgAnchor)) state.imgAnchor = s.imgAnchor;
    if (s.vals && s.vals.imgSrc === 'upload') $('imgSrc').value = 'none';
  } catch (e) {}
}

function syncPresetFromDims() {
  const k = $('w').value + 'x' + $('h').value;
  $('preset').value = PRESETS.some(p => p[0] === k) ? k : 'custom';
}

$('preset').addEventListener('change', () => {
  const p = $('preset').value;
  if (p !== 'custom') {
    const [w, h] = p.split('x');
    $('w').value = w;
    $('h').value = h;
  }
  schedule();
});

$('w').addEventListener('input', () => { syncPresetFromDims(); schedule(); });
$('h').addEventListener('input', () => { syncPresetFromDims(); schedule(); });
$('roll').addEventListener('click', () => {
  $('seed').value = Math.floor(Math.random() * 1000000);
  schedule();
});

$('imgSrc').addEventListener('change', () => {
  $('uploadField').hidden = $('imgSrc').value !== 'upload';
  schedule();
});

$('imgFile').addEventListener('change', () => {
  const f = $('imgFile').files[0];
  if (!f) return;
  if (uploadURL) URL.revokeObjectURL(uploadURL);
  uploadURL = URL.createObjectURL(f);
  overlayKey = '';
  schedule();
});

for (const id of valueIds) {
  const el = $(id);
  if (!el) continue;
  el.addEventListener('input', schedule);
  el.addEventListener('change', schedule);
}

$('reset').addEventListener('click', () => {
  setControls(DEFAULTS);
  state.textAnchor = GRID_DEFAULTS.textAnchor.slice();
  state.imgAnchor = GRID_DEFAULTS.imgAnchor.slice();
  $('uploadField').hidden = true;
  if (uploadURL) {
    URL.revokeObjectURL(uploadURL);
    uploadURL = null;
  }
  syncGrids();
  $('status').textContent = 'Settings reset to defaults.';
  schedule();
});

const MIME = { png: 'image/png', jpg: 'image/jpeg', webp: 'image/webp' };
function say(t) { $('status').textContent = t; }

$('save').addEventListener('click', async () => {
  const btn = $('save');
  btn.disabled = true;
  try {
    await ensureFonts();
    const v = getVals(), W = clampDim(v.w), H = clampDim(v.h), ext = v.fmt;
    say('Rendering ' + W + ' × ' + H + '…');
    await new Promise(r => setTimeout(r, 40));

    const out = document.createElement('canvas');
    paint(out, W, H, v);

    const blob = await new Promise(res => out.toBlob(res, MIME[ext], 0.95));
    if (!blob) throw new Error('The browser could not encode an image this large, please try a smaller size.');

    const name = `femboy-wallpaper-${W}x${H}-s${v.seed}.${ext}`;

    let dl = null;
    try {
      if (window.claude && window.claude.use) dl = await window.claude.use('downloads');
    } catch (e) {}

    if (dl) {
      try {
        await dl.save({ filename: name, data: blob });
        say('Saved ' + name + '!');
      } catch (e) {
        say(e && e.code === 'declined' ? 'Save cancelled' : 'Could not save: ' + ((e && e.message) || 'unknown error'));
      }
    } else {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = name;
      document.body.appendChild(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      say('Saved ' + name + '!');
    }
  } catch (e) {
    say('Failed: ' + (e.message || e));
  } finally {
    btn.disabled = false;
  }
});

setControls(DEFAULTS);
restore();
syncPresetFromDims();
$('uploadField').hidden = $('imgSrc').value !== 'upload';
syncGrids();
if (!GL) {
  say('WebGL is unavailable; falling back to the site gradient.');
}
ensureFonts().then(render);

})();
