// ==UserScript==
// @name           Krunker Junker
// @author         The Gaming Gurus
// @description    This script is served by the auto updater, do not use it outside of development.
// @version        1.1
// @license        gpl-3.0
// @namespace      https://greasyfork.org/users/704479
// @icon           https://y9x.github.io/webpack/junker/junker.png
// @grant          GM.setValue
// @grant          GM_getValue
// @match          https://krunker.io/*
// @match          https://*.browserfps.com/*
// @extracted      Wed, 02 Mar 2022 22:55:08 GMT
// @run-at         document-start
// @noframes
// ==/UserScript==
/*! For license information please see junker.user.js.LICENSE.txt */
(() => {
    var t = {
            1878: t => {
                ! function(e) {
                    t.exports = e;
                    var i = {
                        on: function(t, e) {
                            return s(this, t).push(e), this
                        },
                        once: function(t, e) {
                            var i = this;
                            return a.originalListener = e, s(i, t).push(a), i;

                            function a() {
                                r.call(i, t, a), e.apply(this, arguments)
                            }
                        },
                        off: r,
                        emit: function(t, e) {
                            var i = this,
                                a = s(i, t, !0);
                            if (!a) return !1;
                            var r = arguments.length;
                            if (1 === r) a.forEach(o);
                            else if (2 === r) a.forEach(h);
                            else {
                                var n = Array.prototype.slice.call(arguments, 1);
                                a.forEach(c)
                            }
                            return !!a.length;

                            function o(t) {
                                t.call(i)
                            }

                            function h(t) {
                                t.call(i, e)
                            }

                            function c(t) {
                                t.apply(i, n)
                            }
                        }
                    };

                    function a(t) {
                        for (var e in i) t[e] = i[e];
                        return t
                    }

                    function r(t, e) {
                        var i, a = this;
                        if (arguments.length) {
                            if (e) {
                                if (i = s(a, t, !0)) {
                                    if (!(i = i.filter(n)).length) return r.call(a, t);
                                    a.listeners[t] = i
                                }
                            } else if ((i = a.listeners) && (delete i[t], !Object.keys(i).length)) return r.call(a)
                        } else delete a.listeners;
                        return a;

                        function n(t) {
                            return t !== e && t.originalListener !== e
                        }
                    }

                    function s(t, e, i) {
                        if (!i || t.listeners) {
                            var a = t.listeners || (t.listeners = {});
                            return a[e] || (a[e] = [])
                        }
                    }
                    a(e.prototype), e.mixin = a
                }((function t() {
                    if (!(this instanceof t)) return new t
                }))
            },
            2333: (t, e) => {
                e.read = function(t, e, i, a, r) {
                    var s, n, o = 8 * r - a - 1,
                        h = (1 << o) - 1,
                        c = h >> 1,
                        l = -7,
                        d = i ? r - 1 : 0,
                        u = i ? -1 : 1,
                        f = t[e + d];
                    for (d += u, s = f & (1 << -l) - 1, f >>= -l, l += o; l > 0; s = 256 * s + t[e + d], d += u, l -= 8);
                    for (n = s & (1 << -l) - 1, s >>= -l, l += a; l > 0; n = 256 * n + t[e + d], d += u, l -= 8);
                    if (0 === s) s = 1 - c;
                    else {
                        if (s === h) return n ? NaN : 1 / 0 * (f ? -1 : 1);
                        n += Math.pow(2, a), s -= c
                    }
                    return (f ? -1 : 1) * n * Math.pow(2, s - a)
                }, e.write = function(t, e, i, a, r, s) {
                    var n, o, h, c = 8 * s - r - 1,
                        l = (1 << c) - 1,
                        d = l >> 1,
                        u = 23 === r ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                        f = a ? 0 : s - 1,
                        p = a ? 1 : -1,
                        m = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (o = isNaN(e) ? 1 : 0, n = l) : (n = Math.floor(Math.log(e) / Math.LN2), e * (h = Math.pow(2, -n)) < 1 && (n--, h *= 2), (e += n + d >= 1 ? u / h : u * Math.pow(2, 1 - d)) * h >= 2 && (n++, h /= 2), n + d >= l ? (o = 0, n = l) : n + d >= 1 ? (o = (e * h - 1) * Math.pow(2, r), n += d) : (o = e * Math.pow(2, d - 1) * Math.pow(2, r), n = 0)); r >= 8; t[i + f] = 255 & o, f += p, o /= 256, r -= 8);
                    for (n = n << r | o, c += r; c > 0; t[i + f] = 255 & n, f += p, n /= 256, c -= 8);
                    t[i + f - p] |= 128 * m
                }
            },
            7200: function(t, e) {
                ! function(t) {
                    var e, i = 'undefined',
                        a = i !== typeof Buffer && Buffer,
                        r = i !== typeof Uint8Array && Uint8Array,
                        s = i !== typeof ArrayBuffer && ArrayBuffer,
                        n = [0, 0, 0, 0, 0, 0, 0, 0],
                        o = Array.isArray || function(t) {
                            return !!t && '[object Array]' == Object.prototype.toString.call(t)
                        },
                        h = 4294967296;

                    function c(o, c, x) {
                        var b = c ? 0 : 4,
                            _ = c ? 4 : 0,
                            k = c ? 0 : 3,
                            E = c ? 1 : 2,
                            S = c ? 2 : 1,
                            M = c ? 3 : 0,
                            A = c ? y : w,
                            j = c ? g : v,
                            B = U.prototype,
                            T = 'is' + o,
                            z = '_' + T;
                        return B.buffer = void 0, B.offset = 0, B[z] = !0, B.toNumber = P, B.toString = function(t) {
                            var e = this.buffer,
                                i = this.offset,
                                a = N(e, i + b),
                                r = N(e, i + _),
                                s = '',
                                n = !x && 2147483648 & a;
                            n && (a = ~a, r = h - r);
                            t = t || 10;
                            for (;;) {
                                var o = a % t * h + r;
                                if (a = Math.floor(a / t), r = Math.floor(o / t), s = (o % t).toString(t) + s, !a && !r) break
                            }
                            n && (s = '-' + s);
                            return s
                        }, B.toJSON = P, B.toArray = l, a && (B.toBuffer = d), r && (B.toArrayBuffer = u), U[T] = function(t) {
                            return !(!t || !t[z])
                        }, t[o] = U, U;

                        function U(t, a, o, c) {
                            return this instanceof U ? function(t, a, o, c, l) {
                                r && s && (a instanceof s && (a = new r(a)), c instanceof s && (c = new r(c)));
                                if (!(a || o || c || e)) return void(t.buffer = m(n, 0));
                                if (!f(a, o)) {
                                    l = o, c = a, o = 0, a = new(e || Array)(8)
                                }
                                if (t.buffer = a, t.offset = o |= 0, i === typeof c) return;
                                'string' == typeof c ? function(t, e, i, a) {
                                    var r = 0,
                                        s = i.length,
                                        n = 0,
                                        o = 0;
                                    '-' === i[0] && r++;
                                    var c = r;
                                    for (; r < s;) {
                                        var l = parseInt(i[r++], a);
                                        if (!(l >= 0)) break;
                                        o = o * a + l, n = n * a + Math.floor(o / h), o %= h
                                    }
                                    c && (n = ~n, o ? o = h - o : n++);
                                    L(t, e + b, n), L(t, e + _, o)
                                }(a, o, c, l || 10) : f(c, l) ? p(a, o, c, l) : 'number' == typeof l ? (L(a, o + b, c), L(a, o + _, l)) : c > 0 ? A(a, o, c) : c < 0 ? j(a, o, c) : p(a, o, n, 0)
                            }(this, t, a, o, c) : new U(t, a, o, c)
                        }

                        function P() {
                            var t = this.buffer,
                                e = this.offset,
                                i = N(t, e + b),
                                a = N(t, e + _);
                            return x || (i |= 0), i ? i * h + a : a
                        }

                        function L(t, e, i) {
                            t[e + M] = 255 & i, i >>= 8, t[e + S] = 255 & i, i >>= 8, t[e + E] = 255 & i, i >>= 8, t[e + k] = 255 & i
                        }

                        function N(t, e) {
                            return 16777216 * t[e + k] + (t[e + E] << 16) + (t[e + S] << 8) + t[e + M]
                        }
                    }

                    function l(t) {
                        var i = this.buffer,
                            a = this.offset;
                        return e = null, !1 !== t && 0 === a && 8 === i.length && o(i) ? i : m(i, a)
                    }

                    function d(t) {
                        var i = this.buffer,
                            r = this.offset;
                        if (e = a, !1 !== t && 0 === r && 8 === i.length && Buffer.isBuffer(i)) return i;
                        var s = new a(8);
                        return p(s, 0, i, r), s
                    }

                    function u(t) {
                        var i = this.buffer,
                            a = this.offset,
                            n = i.buffer;
                        if (e = r, !1 !== t && 0 === a && n instanceof s && 8 === n.byteLength) return n;
                        var o = new r(8);
                        return p(o, 0, i, a), o.buffer
                    }

                    function f(t, e) {
                        var i = t && t.length;
                        return e |= 0, i && e + 8 <= i && 'string' != typeof t[e]
                    }

                    function p(t, e, i, a) {
                        e |= 0, a |= 0;
                        for (var r = 0; r < 8; r++) t[e++] = 255 & i[a++]
                    }

                    function m(t, e) {
                        return Array.prototype.slice.call(t, e, e + 8)
                    }

                    function y(t, e, i) {
                        for (var a = e + 8; a > e;) t[--a] = 255 & i, i /= 256
                    }

                    function g(t, e, i) {
                        var a = e + 8;
                        for (i++; a > e;) t[--a] = 255 & -i ^ 255, i /= 256
                    }

                    function w(t, e, i) {
                        for (var a = e + 8; e < a;) t[e++] = 255 & i, i /= 256
                    }

                    function v(t, e, i) {
                        var a = e + 8;
                        for (i++; e < a;) t[e++] = 255 & -i ^ 255, i /= 256
                    }
                    c('Uint64BE', !0, !0), c('Int64BE', !0, !1), c('Uint64LE', !1, !0), c('Int64LE', !1, !1)
                }('string' != typeof e.nodeName ? e : this || {})
            },
            7906: t => {
                var e = {}.toString;
                t.exports = Array.isArray || function(t) {
                    return '[object Array]' == e.call(t)
                }
            },
            1550: (t, e, i) => {
                e.encode = i(6193).encode, e.decode = i(7725).decode, e.Encoder = i(3191).Encoder, e.Decoder = i(3973).Decoder, e.createCodec = i(6543).createCodec, e.codec = i(685).codec
            },
            2212: function(t) {
                function e(t) {
                    return t && t.isBuffer && t
                }
                t.exports = e('undefined' != typeof Buffer && Buffer) || e(this.Buffer) || e('undefined' != typeof window && window.Buffer) || this.Buffer
            },
            70: (t, e) => {
                e.copy = function(t, e, i, a) {
                    var r;
                    i || (i = 0);
                    a || 0 === a || (a = this.length);
                    e || (e = 0);
                    var s = a - i;
                    if (t === this && i < e && e < a)
                        for (r = s - 1; r >= 0; r--) t[r + e] = this[r + i];
                    else
                        for (r = 0; r < s; r++) t[r + e] = this[r + i];
                    return s
                }, e.toString = function(t, e, i) {
                    var a = this,
                        r = 0 | e;
                    i || (i = a.length);
                    var s = '',
                        n = 0;
                    for (; r < i;)(n = a[r++]) < 128 ? s += String.fromCharCode(n) : (192 == (224 & n) ? n = (31 & n) << 6 | 63 & a[r++] : 224 == (240 & n) ? n = (15 & n) << 12 | (63 & a[r++]) << 6 | 63 & a[r++] : 240 == (248 & n) && (n = (7 & n) << 18 | (63 & a[r++]) << 12 | (63 & a[r++]) << 6 | 63 & a[r++]), n >= 65536 ? (n -= 65536, s += String.fromCharCode(55296 + (n >>> 10), 56320 + (1023 & n))) : s += String.fromCharCode(n));
                    return s
                }, e.write = function(t, e) {
                    var i = this,
                        a = e || (e |= 0),
                        r = t.length,
                        s = 0,
                        n = 0;
                    for (; n < r;)(s = t.charCodeAt(n++)) < 128 ? i[a++] = s : s < 2048 ? (i[a++] = 192 | s >>> 6, i[a++] = 128 | 63 & s) : s < 55296 || s > 57343 ? (i[a++] = 224 | s >>> 12, i[a++] = 128 | s >>> 6 & 63, i[a++] = 128 | 63 & s) : (s = 65536 + (s - 55296 << 10 | t.charCodeAt(n++) - 56320), i[a++] = 240 | s >>> 18, i[a++] = 128 | s >>> 12 & 63, i[a++] = 128 | s >>> 6 & 63, i[a++] = 128 | 63 & s);
                    return a - e
                }
            },
            6502: (t, e, i) => {
                var a = i(2186),
                    r = t.exports = s(0);

                function s(t) {
                    return new Array(t)
                }
                r.alloc = s, r.concat = a.concat, r.from = function(t) {
                    if (!a.isBuffer(t) && a.isView(t)) t = a.Uint8Array.from(t);
                    else if (a.isArrayBuffer(t)) t = new Uint8Array(t);
                    else {
                        if ('string' == typeof t) return a.from.call(r, t);
                        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number')
                    }
                    return Array.prototype.slice.call(t)
                }
            },
            1779: (t, e, i) => {
                var a = i(2186),
                    r = a.global,
                    s = t.exports = a.hasBuffer ? n(0) : [];

                function n(t) {
                    return new r(t)
                }
                s.alloc = a.hasBuffer && r.alloc || n, s.concat = a.concat, s.from = function(t) {
                    if (!a.isBuffer(t) && a.isView(t)) t = a.Uint8Array.from(t);
                    else if (a.isArrayBuffer(t)) t = new Uint8Array(t);
                    else {
                        if ('string' == typeof t) return a.from.call(s, t);
                        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number')
                    }
                    return r.from && 1 !== r.from.length ? r.from(t) : new r(t)
                }
            },
            2967: (t, e, i) => {
                var a, r = i(70);
                e.copy = c, e.slice = l, e.toString = function(t, e, i) {
                    var a = !o && s.isBuffer(this) ? this.toString : r.toString;
                    return a.apply(this, arguments)
                }, e.write = (a = 'write', function() {
                    return (this[a] || r[a]).apply(this, arguments)
                });
                var s = i(2186),
                    n = s.global,
                    o = s.hasBuffer && 'TYPED_ARRAY_SUPPORT' in n,
                    h = o && !n.TYPED_ARRAY_SUPPORT;

                function c(t, e, i, a) {
                    var n = s.isBuffer(this),
                        o = s.isBuffer(t);
                    if (n && o) return this.copy(t, e, i, a);
                    if (h || n || o || !s.isView(this) || !s.isView(t)) return r.copy.call(this, t, e, i, a);
                    var c = i || null != a ? l.call(this, i, a) : this;
                    return t.set(c, e), c.length
                }

                function l(t, e) {
                    var i = this.slice || !h && this.subarray;
                    if (i) return i.call(this, t, e);
                    var a = s.alloc.call(this, e - t);
                    return c.call(this, a, 0, t, e), a
                }
            },
            8171: (t, e, i) => {
                var a = i(2186),
                    r = t.exports = a.hasArrayBuffer ? s(0) : [];

                function s(t) {
                    return new Uint8Array(t)
                }
                r.alloc = s, r.concat = a.concat, r.from = function(t) {
                    if (a.isView(t)) {
                        var e = t.byteOffset,
                            i = t.byteLength;
                        (t = t.buffer).byteLength !== i && (t.slice ? t = t.slice(e, e + i) : (t = new Uint8Array(t)).byteLength !== i && (t = Array.prototype.slice.call(t, e, e + i)))
                    } else {
                        if ('string' == typeof t) return a.from.call(r, t);
                        if ('number' == typeof t) throw new TypeError('"value" argument must not be a number')
                    }
                    return new Uint8Array(t)
                }
            },
            2186: (t, e, i) => {
                var a = e.global = i(2212),
                    r = e.hasBuffer = a && !!a.isBuffer,
                    s = e.hasArrayBuffer = 'undefined' != typeof ArrayBuffer,
                    n = e.isArray = i(7906);
                e.isArrayBuffer = s ? function(t) {
                    return t instanceof ArrayBuffer || p(t)
                } : g;
                var o = e.isBuffer = r ? a.isBuffer : g,
                    h = e.isView = s ? ArrayBuffer.isView || w('ArrayBuffer', 'buffer') : g;
                e.alloc = f, e.concat = function(t, i) {
                    i || (i = 0, Array.prototype.forEach.call(t, (function(t) {
                        i += t.length
                    })));
                    var a = this !== e && this || t[0],
                        r = f.call(a, i),
                        s = 0;
                    return Array.prototype.forEach.call(t, (function(t) {
                        s += u.copy.call(t, r, s)
                    })), r
                }, e.from = function(t) {
                    return 'string' == typeof t ? m.call(this, t) : y(this).from(t)
                };
                var c = e.Array = i(6502),
                    l = e.Buffer = i(1779),
                    d = e.Uint8Array = i(8171),
                    u = e.prototype = i(2967);

                function f(t) {
                    return y(this).alloc(t)
                }
                var p = w('ArrayBuffer');

                function m(t) {
                    var e = 3 * t.length,
                        i = f.call(this, e),
                        a = u.write.call(i, t);
                    return e !== a && (i = u.slice.call(i, 0, a)), i
                }

                function y(t) {
                    return o(t) ? l : h(t) ? d : n(t) ? c : r ? l : s ? d : c
                }

                function g() {
                    return !1
                }

                function w(t, e) {
                    return t = '[object ' + t + ']',
                        function(i) {
                            return null != i && {}.toString.call(e ? i[e] : i) === t
                        }
                }
            },
            1728: (t, e, i) => {
                var a = i(7906);
                e.createCodec = o, e.install = function(t) {
                    for (var e in t) s.prototype[e] = n(s.prototype[e], t[e])
                }, e.filter = function(t) {
                    return a(t) ? function(t) {
                        return t = t.slice(),
                            function(i) {
                                return t.reduce(e, i)
                            };

                        function e(t, e) {
                            return e(t)
                        }
                    }(t) : t
                };
                var r = i(2186);

                function s(t) {
                    if (!(this instanceof s)) return new s(t);
                    this.options = t, this.init()
                }

                function n(t, e) {
                    return t && e ? function() {
                        return t.apply(this, arguments), e.apply(this, arguments)
                    } : t || e
                }

                function o(t) {
                    return new s(t)
                }
                s.prototype.init = function() {
                    var t = this.options;
                    return t && t.uint8array && (this.bufferish = r.Uint8Array), this
                }, e.preset = o({
                    preset: !0
                })
            },
            685: (t, e, i) => {
                i(1430), i(953), e.codec = {
                    preset: i(1728).preset
                }
            },
            8693: (t, e, i) => {
                e.T = r;
                var a = i(1430).preset;

                function r(t) {
                    if (!(this instanceof r)) return new r(t);
                    if (t && (this.options = t, t.codec)) {
                        var e = this.codec = t.codec;
                        e.bufferish && (this.bufferish = e.bufferish)
                    }
                }
                i(9888).k.mixin(r.prototype), r.prototype.codec = a, r.prototype.fetch = function() {
                    return this.codec.decode(this)
                }
            },
            7725: (t, e, i) => {
                e.decode = function(t, e) {
                    var i = new a(e);
                    return i.write(t), i.read()
                };
                var a = i(8693).T
            },
            3973: (t, e, i) => {
                e.Decoder = s;
                var a = i(1878),
                    r = i(8693).T;

                function s(t) {
                    if (!(this instanceof s)) return new s(t);
                    r.call(this, t)
                }
                s.prototype = new r, a.mixin(s.prototype), s.prototype.decode = function(t) {
                    arguments.length && this.write(t), this.flush()
                }, s.prototype.push = function(t) {
                    this.emit('data', t)
                }, s.prototype.end = function(t) {
                    this.decode(t), this.emit('end')
                }
            },
            6144: (t, e, i) => {
                e.F = r;
                var a = i(953).preset;

                function r(t) {
                    if (!(this instanceof r)) return new r(t);
                    if (t && (this.options = t, t.codec)) {
                        var e = this.codec = t.codec;
                        e.bufferish && (this.bufferish = e.bufferish)
                    }
                }
                i(9888).I.mixin(r.prototype), r.prototype.codec = a, r.prototype.write = function(t) {
                    this.codec.encode(this, t)
                }
            },
            6193: (t, e, i) => {
                e.encode = function(t, e) {
                    var i = new a(e);
                    return i.write(t), i.read()
                };
                var a = i(6144).F
            },
            3191: (t, e, i) => {
                e.Encoder = s;
                var a = i(1878),
                    r = i(6144).F;

                function s(t) {
                    if (!(this instanceof s)) return new s(t);
                    r.call(this, t)
                }
                s.prototype = new r, a.mixin(s.prototype), s.prototype.encode = function(t) {
                    this.write(t), this.emit('data', this.read())
                }, s.prototype.end = function(t) {
                    arguments.length && this.encode(t), this.flush(), this.emit('end')
                }
            },
            9171: (t, e, i) => {
                e.S = function t(e, i) {
                    if (!(this instanceof t)) return new t(e, i);
                    this.buffer = a.from(e), this.type = i
                };
                var a = i(2186)
            },
            7856: (t, e, i) => {
                e.setExtPackers = function(t) {
                    t.addExtPacker(14, Error, [d, h]), t.addExtPacker(1, EvalError, [d, h]), t.addExtPacker(2, RangeError, [d, h]), t.addExtPacker(3, ReferenceError, [d, h]), t.addExtPacker(4, SyntaxError, [d, h]), t.addExtPacker(5, TypeError, [d, h]), t.addExtPacker(6, URIError, [d, h]), t.addExtPacker(10, RegExp, [l, h]), t.addExtPacker(11, Boolean, [c, h]), t.addExtPacker(12, String, [c, h]), t.addExtPacker(13, Date, [Number, h]), t.addExtPacker(15, Number, [c, h]), 'undefined' != typeof Uint8Array && (t.addExtPacker(17, Int8Array, n), t.addExtPacker(18, Uint8Array, n), t.addExtPacker(19, Int16Array, n), t.addExtPacker(20, Uint16Array, n), t.addExtPacker(21, Int32Array, n), t.addExtPacker(22, Uint32Array, n), t.addExtPacker(23, Float32Array, n), 'undefined' != typeof Float64Array && t.addExtPacker(24, Float64Array, n), 'undefined' != typeof Uint8ClampedArray && t.addExtPacker(25, Uint8ClampedArray, n), t.addExtPacker(26, ArrayBuffer, n), t.addExtPacker(29, DataView, n));
                    r.hasBuffer && t.addExtPacker(27, s, r.from)
                };
                var a, r = i(2186),
                    s = r.global,
                    n = r.Uint8Array.from,
                    o = {
                        name: 1,
                        message: 1,
                        stack: 1,
                        columnNumber: 1,
                        fileName: 1,
                        lineNumber: 1
                    };

                function h(t) {
                    return a || (a = i(6193).encode), a(t)
                }

                function c(t) {
                    return t.valueOf()
                }

                function l(t) {
                    (t = RegExp.prototype.toString.call(t).split('/')).shift();
                    var e = [t.pop()];
                    return e.unshift(t.join('/')), e
                }

                function d(t) {
                    var e = {};
                    for (var i in o) e[i] = t[i];
                    return e
                }
            },
            5358: (t, e, i) => {
                e.setExtUnpackers = function(t) {
                    t.addExtUnpacker(14, [o, c(Error)]), t.addExtUnpacker(1, [o, c(EvalError)]), t.addExtUnpacker(2, [o, c(RangeError)]), t.addExtUnpacker(3, [o, c(ReferenceError)]), t.addExtUnpacker(4, [o, c(SyntaxError)]), t.addExtUnpacker(5, [o, c(TypeError)]), t.addExtUnpacker(6, [o, c(URIError)]), t.addExtUnpacker(10, [o, h]), t.addExtUnpacker(11, [o, l(Boolean)]), t.addExtUnpacker(12, [o, l(String)]), t.addExtUnpacker(13, [o, l(Date)]), t.addExtUnpacker(15, [o, l(Number)]), 'undefined' != typeof Uint8Array && (t.addExtUnpacker(17, l(Int8Array)), t.addExtUnpacker(18, l(Uint8Array)), t.addExtUnpacker(19, [d, l(Int16Array)]), t.addExtUnpacker(20, [d, l(Uint16Array)]), t.addExtUnpacker(21, [d, l(Int32Array)]), t.addExtUnpacker(22, [d, l(Uint32Array)]), t.addExtUnpacker(23, [d, l(Float32Array)]), 'undefined' != typeof Float64Array && t.addExtUnpacker(24, [d, l(Float64Array)]), 'undefined' != typeof Uint8ClampedArray && t.addExtUnpacker(25, l(Uint8ClampedArray)), t.addExtUnpacker(26, d), t.addExtUnpacker(29, [d, l(DataView)]));
                    r.hasBuffer && t.addExtUnpacker(27, l(s))
                };
                var a, r = i(2186),
                    s = r.global,
                    n = {
                        name: 1,
                        message: 1,
                        stack: 1,
                        columnNumber: 1,
                        fileName: 1,
                        lineNumber: 1
                    };

                function o(t) {
                    return a || (a = i(7725).decode), a(t)
                }

                function h(t) {
                    return RegExp.apply(null, t)
                }

                function c(t) {
                    return function(e) {
                        var i = new t;
                        for (var a in n) i[a] = e[a];
                        return i
                    }
                }

                function l(t) {
                    return function(e) {
                        return new t(e)
                    }
                }

                function d(t) {
                    return new Uint8Array(t).buffer
                }
            },
            6543: (t, e, i) => {
                i(1430), i(953), e.createCodec = i(1728).createCodec
            },
            9888: (t, e, i) => {
                e.k = s, e.I = n;
                var a = i(2186),
                    r = 'BUFFER_SHORTAGE';

                function s() {
                    if (!(this instanceof s)) return new s
                }

                function n() {
                    if (!(this instanceof n)) return new n
                }

                function o() {
                    throw new Error('method not implemented: write()')
                }

                function h() {
                    throw new Error('method not implemented: fetch()')
                }

                function c() {
                    return this.buffers && this.buffers.length ? (this.flush(), this.pull()) : this.fetch()
                }

                function l(t) {
                    (this.buffers || (this.buffers = [])).push(t)
                }

                function d() {
                    return (this.buffers || (this.buffers = [])).shift()
                }

                function u(t) {
                    return function(e) {
                        for (var i in t) e[i] = t[i];
                        return e
                    }
                }
                s.mixin = u({
                    bufferish: a,
                    write: function(t) {
                        var e = this.offset ? a.prototype.slice.call(this.buffer, this.offset) : this.buffer;
                        this.buffer = e ? t ? this.bufferish.concat([e, t]) : e : t, this.offset = 0
                    },
                    fetch: h,
                    flush: function() {
                        for (; this.offset < this.buffer.length;) {
                            var t, e = this.offset;
                            try {
                                t = this.fetch()
                            } catch (t) {
                                if (t && t.message != r) throw t;
                                this.offset = e;
                                break
                            }
                            this.push(t)
                        }
                    },
                    push: l,
                    pull: d,
                    read: c,
                    reserve: function(t) {
                        var e = this.offset,
                            i = e + t;
                        if (i > this.buffer.length) throw new Error(r);
                        return this.offset = i, e
                    },
                    offset: 0
                }), s.mixin(s.prototype), n.mixin = u({
                    bufferish: a,
                    write: o,
                    fetch: function() {
                        var t = this.start;
                        if (t < this.offset) {
                            var e = this.start = this.offset;
                            return a.prototype.slice.call(this.buffer, t, e)
                        }
                    },
                    flush: function() {
                        for (; this.start < this.offset;) {
                            var t = this.fetch();
                            t && this.push(t)
                        }
                    },
                    push: l,
                    pull: function() {
                        var t = this.buffers || (this.buffers = []),
                            e = t.length > 1 ? this.bufferish.concat(t) : t[0];
                        return t.length = 0, e
                    },
                    read: c,
                    reserve: function(t) {
                        var e = 0 | t;
                        if (this.buffer) {
                            var i = this.buffer.length,
                                a = 0 | this.offset,
                                r = a + e;
                            if (r < i) return this.offset = r, a;
                            this.flush(), t = Math.max(t, Math.min(2 * i, this.maxBufferSize))
                        }
                        return t = Math.max(t, this.minBufferSize), this.buffer = this.bufferish.alloc(t), this.start = 0, this.offset = e, 0
                    },
                    send: function(t) {
                        var e = t.length;
                        if (e > this.minBufferSize) this.flush(), this.push(t);
                        else {
                            var i = this.reserve(e);
                            a.prototype.copy.call(t, this.buffer, i)
                        }
                    },
                    maxBufferSize: 65536,
                    minBufferSize: 2048,
                    offset: 0,
                    start: 0
                }), n.mixin(n.prototype)
            },
            1430: (t, e, i) => {
                var a = i(9171).S,
                    r = i(5358),
                    s = i(8989).readUint8,
                    n = i(6566),
                    o = i(1728);

                function h() {
                    var t = this.options;
                    return this.decode = function(t) {
                        var e = n.getReadToken(t);
                        return function(t) {
                            var i = s(t),
                                a = e[i];
                            if (!a) throw new Error('Invalid type: ' + (i ? '0x' + i.toString(16) : i));
                            return a(t)
                        }
                    }(t), t && t.preset && r.setExtUnpackers(this), this
                }
                o.install({
                    addExtUnpacker: function(t, e) {
                        (this.extUnpackers || (this.extUnpackers = []))[t] = o.filter(e)
                    },
                    getExtUnpacker: function(t) {
                        return (this.extUnpackers || (this.extUnpackers = []))[t] || function(e) {
                            return new a(e, t)
                        }
                    },
                    init: h
                }), e.preset = h.call(o.preset)
            },
            8989: (t, e, i) => {
                var a = i(2333),
                    r = i(7200),
                    s = r.Uint64BE,
                    n = r.Int64BE;
                e.getReadFormat = function(t) {
                    var e = o.hasArrayBuffer && t && t.binarraybuffer,
                        i = t && t.int64;
                    return {
                        map: c && t && t.usemap ? d : l,
                        array: u,
                        str: f,
                        bin: e ? m : p,
                        ext: y,
                        uint8: g,
                        uint16: v,
                        uint32: b,
                        uint64: k(8, i ? M : E),
                        int8: w,
                        int16: x,
                        int32: _,
                        int64: k(8, i ? A : S),
                        float32: k(4, j),
                        float64: k(8, B)
                    }
                }, e.readUint8 = g;
                var o = i(2186),
                    h = i(2967),
                    c = 'undefined' != typeof Map;

                function l(t, e) {
                    var i, a = {},
                        r = new Array(e),
                        s = new Array(e),
                        n = t.codec.decode;
                    for (i = 0; i < e; i++) r[i] = n(t), s[i] = n(t);
                    for (i = 0; i < e; i++) a[r[i]] = s[i];
                    return a
                }

                function d(t, e) {
                    var i, a = new Map,
                        r = new Array(e),
                        s = new Array(e),
                        n = t.codec.decode;
                    for (i = 0; i < e; i++) r[i] = n(t), s[i] = n(t);
                    for (i = 0; i < e; i++) a.set(r[i], s[i]);
                    return a
                }

                function u(t, e) {
                    for (var i = new Array(e), a = t.codec.decode, r = 0; r < e; r++) i[r] = a(t);
                    return i
                }

                function f(t, e) {
                    var i = t.reserve(e),
                        a = i + e;
                    return h.toString.call(t.buffer, 'utf-8', i, a)
                }

                function p(t, e) {
                    var i = t.reserve(e),
                        a = i + e,
                        r = h.slice.call(t.buffer, i, a);
                    return o.from(r)
                }

                function m(t, e) {
                    var i = t.reserve(e),
                        a = i + e,
                        r = h.slice.call(t.buffer, i, a);
                    return o.Uint8Array.from(r).buffer
                }

                function y(t, e) {
                    var i = t.reserve(e + 1),
                        a = t.buffer[i++],
                        r = i + e,
                        s = t.codec.getExtUnpacker(a);
                    if (!s) throw new Error('Invalid ext type: ' + (a ? '0x' + a.toString(16) : a));
                    return s(h.slice.call(t.buffer, i, r))
                }

                function g(t) {
                    var e = t.reserve(1);
                    return t.buffer[e]
                }

                function w(t) {
                    var e = t.reserve(1),
                        i = t.buffer[e];
                    return 128 & i ? i - 256 : i
                }

                function v(t) {
                    var e = t.reserve(2),
                        i = t.buffer;
                    return i[e++] << 8 | i[e]
                }

                function x(t) {
                    var e = t.reserve(2),
                        i = t.buffer,
                        a = i[e++] << 8 | i[e];
                    return 32768 & a ? a - 65536 : a
                }

                function b(t) {
                    var e = t.reserve(4),
                        i = t.buffer;
                    return 16777216 * i[e++] + (i[e++] << 16) + (i[e++] << 8) + i[e]
                }

                function _(t) {
                    var e = t.reserve(4),
                        i = t.buffer;
                    return i[e++] << 24 | i[e++] << 16 | i[e++] << 8 | i[e]
                }

                function k(t, e) {
                    return function(i) {
                        var a = i.reserve(t);
                        return e.call(i.buffer, a, true)
                    }
                }

                function E(t) {
                    return new s(this, t).toNumber()
                }

                function S(t) {
                    return new n(this, t).toNumber()
                }

                function M(t) {
                    return new s(this, t)
                }

                function A(t) {
                    return new n(this, t)
                }

                function j(t) {
                    return a.read(this, t, !1, 23, 4)
                }

                function B(t) {
                    return a.read(this, t, !1, 52, 8)
                }
            },
            6566: (t, e, i) => {
                var a = i(8989);

                function r(t) {
                    var e, i = new Array(256);
                    for (e = 0; e <= 127; e++) i[e] = s(e);
                    for (e = 128; e <= 143; e++) i[e] = o(e - 128, t.map);
                    for (e = 144; e <= 159; e++) i[e] = o(e - 144, t.array);
                    for (e = 160; e <= 191; e++) i[e] = o(e - 160, t.str);
                    for (i[192] = s(null), i[193] = null, i[194] = s(!1), i[195] = s(!0), i[196] = n(t.uint8, t.bin), i[197] = n(t.uint16, t.bin), i[198] = n(t.uint32, t.bin), i[199] = n(t.uint8, t.ext), i[200] = n(t.uint16, t.ext), i[201] = n(t.uint32, t.ext), i[202] = t.float32, i[203] = t.float64, i[204] = t.uint8, i[205] = t.uint16, i[206] = t.uint32, i[207] = t.uint64, i[208] = t.int8, i[209] = t.int16, i[210] = t.int32, i[211] = t.int64, i[212] = o(1, t.ext), i[213] = o(2, t.ext), i[214] = o(4, t.ext), i[215] = o(8, t.ext), i[216] = o(16, t.ext), i[217] = n(t.uint8, t.str), i[218] = n(t.uint16, t.str), i[219] = n(t.uint32, t.str), i[220] = n(t.uint16, t.array), i[221] = n(t.uint32, t.array), i[222] = n(t.uint16, t.map), i[223] = n(t.uint32, t.map), e = 224; e <= 255; e++) i[e] = s(e - 256);
                    return i
                }

                function s(t) {
                    return function() {
                        return t
                    }
                }

                function n(t, e) {
                    return function(i) {
                        var a = t(i);
                        return e(i, a)
                    }
                }

                function o(t, e) {
                    return function(i) {
                        return e(i, t)
                    }
                }
                e.getReadToken = function(t) {
                    var e = a.getReadFormat(t);
                    return t && t.useraw ? function(t) {
                        var e, i = r(t).slice();
                        for (i[217] = i[196], i[218] = i[197], i[219] = i[198], e = 160; e <= 191; e++) i[e] = o(e - 160, t.bin);
                        return i
                    }(e) : r(e)
                }
            },
            953: (t, e, i) => {
                var a = i(9171).S,
                    r = i(7856),
                    s = i(8745),
                    n = i(1728);

                function o() {
                    var t = this.options;
                    return this.encode = function(t) {
                        var e = s.getWriteType(t);
                        return function(t, i) {
                            var a = e[typeof i];
                            if (!a) throw new Error('Unsupported type "' + typeof i + '": ' + i);
                            a(t, i)
                        }
                    }(t), t && t.preset && r.setExtPackers(this), this
                }
                n.install({
                    addExtPacker: function(t, e, i) {
                        i = n.filter(i);
                        var r = e.name;
                        if (r && 'Object' !== r) {
                            (this.extPackers || (this.extPackers = {}))[r] = s
                        } else {
                            (this.extEncoderList || (this.extEncoderList = [])).unshift([e, s])
                        }

                        function s(e) {
                            return i && (e = i(e)), new a(e, t)
                        }
                    },
                    getExtPacker: function(t) {
                        var e = this.extPackers || (this.extPackers = {}),
                            i = t.constructor,
                            a = i && i.name && e[i.name];
                        if (a) return a;
                        for (var r = this.extEncoderList || (this.extEncoderList = []), s = r.length, n = 0; n < s; n++) {
                            var o = r[n];
                            if (i === o[0]) return o[1]
                        }
                    },
                    init: o
                }), e.preset = o.call(n.preset)
            },
            7557: (t, e, i) => {
                var a = i(2333),
                    r = i(7200),
                    s = r.Uint64BE,
                    n = r.Int64BE,
                    o = i(9929).w,
                    h = i(2186),
                    c = h.global,
                    l = h.hasBuffer && 'TYPED_ARRAY_SUPPORT' in c && !c.TYPED_ARRAY_SUPPORT,
                    d = h.hasBuffer && c.prototype || {};

                function u() {
                    var t = o.slice();
                    return t[196] = f(196), t[197] = p(197), t[198] = m(198), t[199] = f(199), t[200] = p(200), t[201] = m(201), t[202] = y(202, 4, d.writeFloatBE || v, !0), t[203] = y(203, 8, d.writeDoubleBE || x, !0), t[204] = f(204), t[205] = p(205), t[206] = m(206), t[207] = y(207, 8, g), t[208] = f(208), t[209] = p(209), t[210] = m(210), t[211] = y(211, 8, w), t[217] = f(217), t[218] = p(218), t[219] = m(219), t[220] = p(220), t[221] = m(221), t[222] = p(222), t[223] = m(223), t
                }

                function f(t) {
                    return function(e, i) {
                        var a = e.reserve(2),
                            r = e.buffer;
                        r[a++] = t, r[a] = i
                    }
                }

                function p(t) {
                    return function(e, i) {
                        var a = e.reserve(3),
                            r = e.buffer;
                        r[a++] = t, r[a++] = i >>> 8, r[a] = i
                    }
                }

                function m(t) {
                    return function(e, i) {
                        var a = e.reserve(5),
                            r = e.buffer;
                        r[a++] = t, r[a++] = i >>> 24, r[a++] = i >>> 16, r[a++] = i >>> 8, r[a] = i
                    }
                }

                function y(t, e, i, a) {
                    return function(r, s) {
                        var n = r.reserve(e + 1);
                        r.buffer[n++] = t, i.call(r.buffer, s, n, a)
                    }
                }

                function g(t, e) {
                    new s(this, e, t)
                }

                function w(t, e) {
                    new n(this, e, t)
                }

                function v(t, e) {
                    a.write(this, t, e, !1, 23, 4)
                }

                function x(t, e) {
                    a.write(this, t, e, !1, 52, 8)
                }
                e.getWriteToken = function(t) {
                    return t && t.uint8array ? ((e = u())[202] = y(202, 4, v), e[203] = y(203, 8, x), e) : l || h.hasBuffer && t && t.safe ? function() {
                        var t = o.slice();
                        return t[196] = y(196, 1, c.prototype.writeUInt8), t[197] = y(197, 2, c.prototype.writeUInt16BE), t[198] = y(198, 4, c.prototype.writeUInt32BE), t[199] = y(199, 1, c.prototype.writeUInt8), t[200] = y(200, 2, c.prototype.writeUInt16BE), t[201] = y(201, 4, c.prototype.writeUInt32BE), t[202] = y(202, 4, c.prototype.writeFloatBE), t[203] = y(203, 8, c.prototype.writeDoubleBE), t[204] = y(204, 1, c.prototype.writeUInt8), t[205] = y(205, 2, c.prototype.writeUInt16BE), t[206] = y(206, 4, c.prototype.writeUInt32BE), t[207] = y(207, 8, g), t[208] = y(208, 1, c.prototype.writeInt8), t[209] = y(209, 2, c.prototype.writeInt16BE), t[210] = y(210, 4, c.prototype.writeInt32BE), t[211] = y(211, 8, w), t[217] = y(217, 1, c.prototype.writeUInt8), t[218] = y(218, 2, c.prototype.writeUInt16BE), t[219] = y(219, 4, c.prototype.writeUInt32BE), t[220] = y(220, 2, c.prototype.writeUInt16BE), t[221] = y(221, 4, c.prototype.writeUInt32BE), t[222] = y(222, 2, c.prototype.writeUInt16BE), t[223] = y(223, 4, c.prototype.writeUInt32BE), t
                    }() : u();
                    var e
                }
            },
            8745: (t, e, i) => {
                var a = i(7906),
                    r = i(7200),
                    s = r.Uint64BE,
                    n = r.Int64BE,
                    o = i(2186),
                    h = i(2967),
                    c = i(7557),
                    l = i(9929).w,
                    d = i(9171).S,
                    u = 'undefined' != typeof Uint8Array,
                    f = 'undefined' != typeof Map,
                    p = [];
                p[1] = 212, p[2] = 213, p[4] = 214, p[8] = 215, p[16] = 216, e.getWriteType = function(t) {
                    var e = c.getWriteToken(t),
                        i = t && t.useraw,
                        r = u && t && t.binarraybuffer,
                        m = r ? o.isArrayBuffer : o.isBuffer,
                        y = r ? function(t, e) {
                            x(t, new Uint8Array(e))
                        } : x,
                        g = f && t && t.usemap ? function(t, i) {
                            if (!(i instanceof Map)) return b(t, i);
                            var a = i.size;
                            e[a < 16 ? 128 + a : a <= 65535 ? 222 : 223](t, a);
                            var r = t.codec.encode;
                            i.forEach((function(e, i, a) {
                                r(t, i), r(t, e)
                            }))
                        } : b;
                    return {
                        boolean: function(t, i) {
                            e[i ? 195 : 194](t, i)
                        },
                        function: v,
                        number: function(t, i) {
                            var a, r = 0 | i;
                            if (i !== r) return void e[a = 203](t, i);
                            a = -32 <= r && r <= 127 ? 255 & r : 0 <= r ? r <= 255 ? 204 : r <= 65535 ? 205 : 206 : -128 <= r ? 208 : -32768 <= r ? 209 : 210;
                            e[a](t, r)
                        },
                        object: i ? function(t, i) {
                            if (m(i)) return function(t, i) {
                                var a = i.length;
                                e[a < 32 ? 160 + a : a <= 65535 ? 218 : 219](t, a), t.send(i)
                            }(t, i);
                            w(t, i)
                        } : w,
                        string: function(t) {
                            return i;

                            function i(i, a) {
                                var r = a.length,
                                    s = 5 + 3 * r;
                                i.offset = i.reserve(s);
                                var n = i.buffer,
                                    o = t(r),
                                    c = i.offset + o;
                                r = h.write.call(n, a, c);
                                var l = t(r);
                                if (o !== l) {
                                    var d = c + l - o,
                                        u = c + r;
                                    h.copy.call(n, n, d, c, u)
                                }
                                e[1 === l ? 160 + r : l <= 3 ? 215 + l : 219](i, r), i.offset += r
                            }
                        }(i ? function(t) {
                            return t < 32 ? 1 : t <= 65535 ? 3 : 5
                        } : function(t) {
                            return t < 32 ? 1 : t <= 255 ? 2 : t <= 65535 ? 3 : 5
                        }),
                        symbol: v,
                        undefined: v
                    };

                    function w(t, i) {
                        if (null === i) return v(t, i);
                        if (m(i)) return y(t, i);
                        if (a(i)) return function(t, i) {
                            var a = i.length;
                            e[a < 16 ? 144 + a : a <= 65535 ? 220 : 221](t, a);
                            for (var r = t.codec.encode, s = 0; s < a; s++) r(t, i[s])
                        }(t, i);
                        if (s.isUint64BE(i)) return function(t, i) {
                            e[207](t, i.toArray())
                        }(t, i);
                        if (n.isInt64BE(i)) return function(t, i) {
                            e[211](t, i.toArray())
                        }(t, i);
                        var r = t.codec.getExtPacker(i);
                        if (r && (i = r(i)), i instanceof d) return function(t, i) {
                            var a = i.buffer,
                                r = a.length,
                                s = p[r] || (r < 255 ? 199 : r <= 65535 ? 200 : 201);
                            e[s](t, r), l[i.type](t), t.send(a)
                        }(t, i);
                        g(t, i)
                    }

                    function v(t, i) {
                        e[192](t, i)
                    }

                    function x(t, i) {
                        var a = i.length;
                        e[a < 255 ? 196 : a <= 65535 ? 197 : 198](t, a), t.send(i)
                    }

                    function b(t, i) {
                        var a = Object.keys(i),
                            r = a.length;
                        e[r < 16 ? 128 + r : r <= 65535 ? 222 : 223](t, r);
                        var s = t.codec.encode;
                        a.forEach((function(e) {
                            s(t, e), s(t, i[e])
                        }))
                    }
                }
            },
            9929: (t, e) => {
                for (var i = e.w = new Array(256), a = 0; a <= 255; a++) i[a] = r(a);

                function r(t) {
                    return function(e) {
                        var i = e.reserve(1);
                        e.buffer[i] = t
                    }
                }
            },
            2220: (t, e, i) => {
                'use strict';
                var {
                    api: a,
                    meta: r,
                    loader: s,
                    frame: n
                } = i(9606), {
                    vars: o
                } = s, h = i(7263), c = i(3363), l = i(4304), d = i(6132), u = i(82), f = i(866);
                (t.exports = new class {
                    constructor() {
                        this.hooked = Symbol(), this.canvas = h.add_ele('canvas', n), this.ctx = this.canvas.getContext('2d'), this.init_interface(), this.utils = new f(this.interface), this.input = new c(this.interface), this.visual = new d(this.interface), window.addEventListener('resize', (() => this.resize_canvas())), this.resize_canvas(), this.skins = [...Array(5e3)].map(((t, e) => ({
                            ind: e,
                            cnt: 1
                        }))), this.menu = i(3847), s.on('instruct', (t => {
                            this.config.game.auto_lobby && t('connection error', 'game is full', 'kicked by vote', 'disconnected') ? location.href = '/' : !this.config.game.auto_start || !t('to play') || this.player && this.player.active || (this.controls.locklessChange(!0), this.controls.locklessChange(!1))
                        }))
                    }
                    get players() {
                        return this.game.players.list.map((t => this.add(t)))
                    }
                    add(t) {
                        return t[this.hooked] || (t[this.hooked] = new l(this.interface, t))
                    }
                    init_interface() {
                        var t = this;
                        this.interface = {
                            get ctx() {
                                return t.ctx
                            }, get utils() {
                                return t.utils
                            }, get visual() {
                                return t.visual
                            }, get game() {
                                return t.game
                            }, get socket() {
                                return t.socket
                            }, get three() {
                                return t.three
                            }, get world() {
                                return t.world
                            }, get force_auto() {
                                return t.config.aim.force_auto
                            }, get force_auto_rate() {
                                return t.config.aim.force_auto_rate
                            }, get color() {
                                return t.config.colors
                            }, get rainbow() {
                                return t.config.esp.rainbow
                            }, get controls() {
                                return t.controls
                            }, get player() {
                                return t.player
                            }, get target() {
                                return t.target
                            }, get players() {
                                return t.players
                            }, get inactivity() {
                                return t.config.game.inactivity
                            }, get esp() {
                                return t.config.esp.status
                            }, get wireframe() {
                                return t.config.player.wireframe
                            }, get walls() {
                                return t.config.esp.walls
                            }, get bhop() {
                                return t.config.player.bhop
                            }, get spinbot() {
                                return t.config.aim.spinbot
                            }, get aim() {
                                return t.config.aim.status
                            }, get aim_offset() {
                                return t.config.aim.offset
                            }, get wallbangs() {
                                return t.config.aim.wallbangs
                            }, get aim_fov() {
                                return t.config.aim.fov
                            }, get aim_smooth() {
                                return t.config.aim.smooth
                            }, get auto_reload() {
                                return t.config.aim.auto_reload
                            }, get unlock_skins() {
                                return t.config.player.skins
                            }, pick_target() {
                                t.target = t.players.filter((t => t.can_target)).sort(((e, i) => t.dist2d(e, i) * (e.frustum ? 1 : .5)))[0]
                            }, get proxy() {
                                return t.config.game.proxy
                            }
                        }
                    }
                    async load() {
                        h.add_ele('style', (() => document.documentElement), {
                            textContent: i(1465)
                        }), await this.menu.load_config(), 'torso' == this.config.aim.offset && (this.config.aim.offset = 'chest');
                        var t = Symbol(),
                            e = this;
                        await s.load({
                            WebSocket: u(this.interface)
                        }, {
                            three: t => this.three = t,
                            game: t => this.game = t,
                            controls: t => this.controls = t,
                            time: t => this.config.game.inactivity ? 1 / 0 : t,
                            world: t => this.world = t,
                            can_see: t => 'full' != this.config.esp.status && (this.config.esp.nametags || t),
                            skins: i => Object.defineProperty(i, 'skins', {
                                get() {
                                    return e.config.player.skins ? e.skins : this[t]
                                }, set(e) {
                                    return this[t] = e
                                }
                            }),
                            input: this.input,
                            socket: t => this.socket = t
                        }), this.process = this.process.bind(this), this.process()
                    }
                    resize_canvas() {
                        this.canvas.width = window.innerWidth, this.canvas.height = window.innerHeight
                    }
                    process() {
                        try {
                            if (this.visual.tick(), this.config.aim.fov_box && this.visual.fov(this.config.aim.fov), this.game && this.world)
                                for (let t of this.game.players.list) {
                                    let e = this.add(t);
                                    e.is_you && (this.player = e), e.active && (e.tick(), e.frustum && !e.is_you && (this.config.esp.tracers && this.visual.tracer(e), ['box', 'box_chams', 'full'].includes(this.config.esp.status) && this.visual.box(e), 'full' == this.config.esp.status && (this.visual.health(e), this.visual.text_clean(e)), this.visual.cham(e)))
                                }
                            this.config.game.auto_nuke && this.player && 25 == this.player.streaks.length && this.socket.send('k', 0)
                        } catch (t) {
                            s.report_error('frame', t)
                        }
                        this.utils.request_frame(this.process)
                    }
                    get config() {
                        return this.menu.config
                    }
                    dist2d(t, e) {
                        return this.utils.dist_center(t.rect) - this.utils.dist_center(e.rect)
                    }
                }).load()
            },
            2871: t => {
                'use strict';
                t.exports = {
                    name: 'Krunker Lunar',
                    author: 'VMOS-Ryzen',
                    description: 'Junk in Your Krunk Guaranteed',
                    version: '1.1',
                    license: 'gpl-3.0',
                    namespace: 'https://greasyfork.org/users/704479',
                    icon: 'https://y9x.github.io/webpack/junker/junker.png',
                    grant: ['GM.setValue', 'GM_getValue'],
                    match: ['https://krunker.io/*', 'https://*.browserfps.com/*']
                }
            },
            3847: (t, e, i) => {
                'use strict';
                localStorage.ssconfig && !localStorage.ssjunkerconfig && (localStorage.ssjunkerconfig = localStorage.ssconfig);
                var a = i(2871),
                    r = i(4447),
                    s = i(9853),
                    n = i(9133),
                    o = i(6492),
                    h = new r('Junk', a.icon, 'junkerconfig'),
                    {
                        meta: a
                    } = i(9606),
                    c = i(7263),
                    l = c.wait_for((() => document.body));
                new o('F1', (() => {
                    document.exitPointerLock(), h.window.show()
                })), h.load_addon(s, fetch(new URL('code.txt', a.discord), {
                    cache: 'no-store'
                }).then((t => t.text()))), h.load_addon(n), h.add_preset('Default', {
                    esp: {
                        status: 'off',
                        tracers: !1,
                        nametags: !1,
                        wireframe: !1,
                        rainbow: !1
                    },
                    colors: {
                        rainbow: !1,
                        risk: '#FF7700',
                        hostile: '#FF0000',
                        friendly: '#00FF00'
                    },
                    aim: {
                        status: 'off',
                        auto_reload: !1,
                        fov: 60,
                        offset: 'random',
                        smooth: 0,
                        wallbangs: !1,
                        force_auto: !1,
                        force_auto_rate: .2,
                        spinbot: !1
                    },
                    player: {
                        bhop: 'off',
                        skins: !1
                    },
                    ui: {
                        show_adverts: !1,
                        show_streams: !0,
                        show_merch: !0,
                        show_news: !0,
                        show_cookie: !0,
                        show_button: !0,
                        css: ''
                    },
                    game: {
                        proxy: !1,
                        auto_nuke: !1,
                        auto_lobby: !1,
                        auto_start: !1,
                        inactivity: !1
                    },
                    radio: {
                        stream: 'off',
                        volume: .5
                    }
                }), h.add_preset('Assist', {
                    aim: {
                        status: 'assist',
                        fov: 70,
                        offset: 'random',
                        smooth: .6
                    },
                    player: {
                        bhop: 'keyslide'
                    }
                }), h.add_preset('Rage', {
                    esp: {
                        status: 'full',
                        tracers: !0
                    },
                    aim: {
                        status: 'auto',
                        fov: 110,
                        smooth: 0,
                        auto_reload: !0,
                        wallbangs: !0,
                        offset: 'multi',
                        spinbot: !0
                    },
                    player: {
                        bhop: 'autoslide'
                    }
                }); {
                    let t = h.window.tab('Render');
                    t.control('Draw FOV box', {
                        type: 'boolean',
                        walk: 'aim.fov_box'
                    }); {
                        let e = t.category('ESP');
                        e.control('Mode', {
                            type: 'dropdown',
                            walk: 'esp.status',
                            value: {
                                Off: 'off',
                                Box: 'box',
                                Chams: 'chams',
                                'Box & Chams': 'box_chams',
                                Full: 'full'
                            }
                        }), e.control('Tracers', {
                            type: 'boolean',
                            walk: 'esp.tracers'
                        }), e.control('Nametags', {
                            type: 'boolean',
                            walk: 'esp.nametags'
                        }), e.control('Wireframe', {
                            type: 'boolean',
                            walk: 'esp.wireframe'
                        }), e.control('Hostile Color', {
                            type: 'color',
                            walk: 'colors.hostile'
                        }), e.control('Risk Color', {
                            type: 'color',
                            walk: 'colors.risk'
                        }), e.control('Friendly Color', {
                            type: 'color',
                            walk: 'colors.friendly'
                        }), e.control('Rainbow Color', {
                            type: 'boolean',
                            walk: 'colors.rainbow'
                        })
                    } {
                        let e = t.category('UI'),
                            i = c.add_ele('link', (() => document.documentElement), {
                                rel: 'stylesheet'
                            });
                        e.control('Custom CSS', {
                            type: 'textbox',
                            walk: 'ui.css',
                            placeholder: 'CSS Url'
                        }).on('change', (t => {
                            '' != t && (i.href = t)
                        })), e.control('Show Menu Button ( [F1] to show )', {
                            type: 'boolean',
                            walk: 'ui.show_button'
                        }).on('change', (t => {
                            t ? h.button.show() : h.button.hide()
                        })), e.control('Show Advertisments', {
                            type: 'boolean',
                            walk: 'ui.show_adverts'
                        }).on('change', (async t => (await l).classList[t ? 'remove' : 'add']('hide-adverts'))), e.control('Show Streams', {
                            type: 'boolean',
                            walk: 'ui.show_streams'
                        }).on('change', (async t => (await l).classList[t ? 'remove' : 'add']('hide-streams'))), e.control('Show Merch', {
                            type: 'boolean',
                            walk: 'ui.show_merch'
                        }).on('change', (async t => (await l).classList[t ? 'remove' : 'add']('hide-merch'))), e.control('Show News Console', {
                            type: 'boolean',
                            walk: 'ui.show_news'
                        }).on('change', (async t => (await l).classList[t ? 'remove' : 'add']('hide-news'))), e.control('Show Security Button', {
                            type: 'boolean',
                            walk: 'ui.show_cookie'
                        }).on('change', (async t => (await l).classList[t ? 'remove' : 'add']('hide-security')))
                    }
                } {
                    let t = h.window.tab('Weapon'); {
                        let e = t.category('Patches');
                        e.control('Auto Reload', {
                            type: 'boolean',
                            walk: 'aim.auto_reload'
                        }), e.control('Force auto-fire', {
                            type: 'boolean',
                            walk: 'aim.force_auto'
                        }), e.control('Auto-fire rate', {
                            type: 'slider',
                            walk: 'aim.force_auto_rate',
                            min: 0,
                            max: 2,
                            step: .1
                        })
                    } {
                        let e = t.category('Aimbot');
                        e.control('Mode', {
                            type: 'dropdown',
                            walk: 'aim.status',
                            value: {
                                Off: 'off',
                                Triggerbot: 'trigger',
                                Correction: 'correction',
                                Assist: 'assist',
                                Automatic: 'auto'
                            }
                        }), e.control('Offset', {
                            type: 'dropdown',
                            walk: 'aim.offset',
                            value: {
                                Head: 'head',
                                Chest: 'chest',
                                Legs: 'legs',
                                Random: 'random',
                                Multi: 'multi'
                            }
                        }), e.control('Smoothness', {
                            type: 'slider',
                            walk: 'aim.smooth',
                            min: 0,
                            max: 1,
                            step: .1
                        }), e.control('FOV', {
                            type: 'slider',
                            walk: 'aim.fov',
                            min: 10,
                            max: 110,
                            step: 10,
                            labels: {
                                110: 'Inf'
                            }
                        }), e.control('Wallbangs', {
                            type: 'boolean',
                            walk: 'aim.wallbangs'
                        }), e.control('Spinbot', {
                            type: 'boolean',
                            walk: 'aim.spinbot'
                        })
                    }
                } {
                    let t = h.window.tab('Player');
                    t.control('Auto Bhop Mode', {
                        type: 'dropdown',
                        walk: 'player.bhop',
                        value: {
                            Off: 'off',
                            'Key Jump': 'keyjump',
                            'Key Slide': 'keyslide',
                            'Auto Slide': 'autoslide',
                            'Auto Jump': 'autojump'
                        }
                    }), t.control('Unlock Skins', {
                        type: 'boolean',
                        walk: 'player.skins'
                    })
                } {
                    let t = h.window.tab('Game');
                    t.control('Proxy', {
                        type: 'boolean',
                        walk: 'game.proxy'
                    }).on('change', ((t, e) => !e && location.assign('/'))), t.control('Auto Activate Nuke', {
                        type: 'boolean',
                        walk: 'game.auto_nuke'
                    }), t.control('Auto Start Match', {
                        type: 'boolean',
                        walk: 'game.auto_start'
                    }), t.control('New Lobby Finder', {
                        type: 'boolean',
                        walk: 'game.auto_lobby'
                    }), t.control('No Inactivity kick', {
                        type: 'boolean',
                        walk: 'game.inactivity'
                    })
                } {
                    let t = h.window.tab('Radio');
                    t.control('Stream', {
                        type: 'select',
                        walk: 'radio.stream',
                        value: {
                            off: 'Off',
                            'http://0n-2000s.radionetz.de/0n-2000s.aac': 'General German/English',
                            'https://stream-mixtape-geo.ntslive.net/mixtape2': 'Hip Hop / RNB',
                            'https://live.wostreaming.net/direct/wboc-waaifmmp3-ibc2': 'Country',
                            'http://streaming.radionomy.com/A-RADIO-TOP-40': 'Dance',
                            'http://bigrradio.cdnstream1.com/5106_128': 'Pop',
                            'http://strm112.1.fm/ajazz_mobile_mp3': 'Jazz',
                            'http://strm112.1.fm/60s_70s_mobile_mp3': 'Golden Oldies',
                            'http://strm112.1.fm/club_mobile_mp3': 'Club',
                            'https://freshgrass.streamguys1.com/irish-128mp3': 'Folk',
                            'http://1a-classicrock.radionetz.de/1a-classicrock.mp3': 'Classic Rock',
                            'http://streams.radiobob.de/metalcore/mp3-192': 'Heavy Metal',
                            'http://stream.laut.fm/beatdownx': 'Death Metal',
                            'http://live-radio01.mediahubaustralia.com/FM2W/aac/': 'Classical',
                            'http://bigrradio.cdnstream1.com/5187_128': 'Alternative',
                            'http://streaming.radionomy.com/R1Dubstep?lang=en': 'DubStep',
                            'http://streams.fluxfm.de/Chillhop/mp3-256': 'LoFi HipHop',
                            'http://streams.90s90s.de/hiphop/mp3-128/': 'Hip Hop Oldskool'
                        }
                    }).on('change', (function(t) {
                        'off' != t ? (this.audio ? this.audio.src = t : (this.audio = new Audio(t), console.log(h.config), this.audio.volume = h.config.radio.volume), this.audio.load(), this.audio.play()) : this.audio && (this.audio.pause(), this.audio.currentTime = 0, delete this.audio)
                    })), t.control('Radio Volume', {
                        type: 'slider',
                        walk: 'radio.volume',
                        min: 0,
                        max: 1,
                        step: .05
                    })
                }
                t.exports = h
            },
            2311: (t, e, i) => {
                'use strict';
                var a = i(4077);
                t.exports = class {
                    ls_prefix = 'ss';
                    gm = 'function' == typeof GM_getValue;
                    get(t, e) {
                        var i = this.get_raw(t);
                        if ('string' == typeof i) try {
                            return JSON.parse(i)
                        } catch (t) {
                            return a.error('DATASTORE ERROR', t, i), i
                        }
                        switch (e) {
                            case 'object':
                                return {};
                            case 'array':
                                return []
                        }
                    }
                    set(t, e) {
                        return e instanceof Set && (e = [...e]), this.set_raw(t, JSON.stringify(e))
                    }
                    get_raw(t) {
                        return this.gm ? GM_getValue(t) : localStorage.getItem(this.ls_prefix + t)
                    }
                    set_raw(t, e) {
                        return this.gm ? GM.setValue(t, e) : localStorage.setItem(this.ls_prefix + t, e)
                    }
                }
            },
            122: t => {
                'use strict';
                class e {
                    static original = Symbol();
                    static events = new WeakMap;
                    static resolve(t) {
                        e.events.has(this) || e.events.set(this, new Map);
                        var i = e.events.get(this),
                            a = i.get(t);
                        return a || (a = new Set, i.set(t, a)), a
                    }
                    on(t, i) {
                        if ('function' != typeof i) throw new TypeError('Callback is not a function.');
                        return e.resolve.call(this, t).add(i), this
                    }
                    once(t, i) {
                        var a = function(...e) {
                            this.off(t, i), i.call(this, ...e)
                        };
                        return i[e.original] = a, this.on(t, a)
                    }
                    off(t, i) {
                        if ('function' != typeof i) throw new TypeError('Callback is not a function.');
                        return i[e.original] && (i = i[e.original]), e.resolve.call(this, t).delete(i)
                    }
                    emit(t, ...i) {
                        var a = e.resolve.call(this, t);
                        if (!a.size) {
                            if ('error' == t) throw i[0];
                            return !1
                        }
                        for (let t of a) try {
                            t.call(this, ...i)
                        } catch (t) {
                            this.emit('error', t)
                        }
                        return !0
                    }
                }
                t.exports = e
            },
            6425: (t, e, i) => {
                'use strict';
                var a = i(7263);
                class r {
                    utf8_dec = new TextDecoder('utf8');
                    constructor(t) {
                        this.data = t, this.name = t.name || '', this.size = t.size || 0
                    }
                    read(t) {
                        var e = new FileReader;
                        return new Promise(((i, a) => {
                            e.addEventListener('load', (() => {
                                switch (t) {
                                    case 'text':
                                    default:
                                        i(this.utf8_dec.decode(e.result));
                                        break;
                                    case 'buffer':
                                        i(e.result)
                                }
                            }), {
                                once: !0
                            }), e.readAsArrayBuffer(this.data)
                        }))
                    }
                    static pick(t = {}) {
                        var e = a.add_ele('input', document.documentElement, {
                            type: 'file',
                            style: {
                                display: 'none'
                            }
                        });
                        return Array.isArray(t.accept) && e.setAttribute('accept', t.accept.join(', ')), t.multipe && e.setAttribute('multiple', ''), new Promise(((i, a) => {
                            e.addEventListener('change', (() => {
                                var a = [];
                                for (let t of e.files) a.push(new r(t));
                                i(t.multiple ? a : a[0])
                            }), {
                                once: !0
                            }), e.click()
                        }))
                    }
                    static save(t = {}) {
                        var e = a.add_ele('a', document.documentElement, {
                            href: URL.createObjectURL(new Blob([t.data])),
                            download: t.name || '',
                            type: 'file'
                        });
                        e.click(), e.remove()
                    }
                }
                t.exports = r
            },
            1191: (t, e, i) => {
                'use strict';
                var a = i(7263);
                t.exports = class {
                    container = a.add_ele('div', (() => document.documentElement), {
                        style: {
                            top: 0,
                            left: 0,
                            'z-index': 9999999999,
                            border: 'none',
                            position: 'absolute',
                            background: '#0000',
                            width: '100vw',
                            height: '100vh',
                            overflow: 'hidden'
                        }
                    });
                    content = this.container.attachShadow({
                        mode: 'open'
                    });
                    constructor() {
                        this.update = this.update.bind(this), window.addEventListener('mousemove', this.update), window.addEventListener('mousedown', this.update), window.addEventListener('mouseup', this.update)
                    }
                    panels = new Set;
                    update(t) {
                        for (let e of this.panels) {
                            if (!e.visible) continue;
                            let i = e.node.getBoundingClientRect();
                            if (t.clientX >= i.x && t.clientY >= i.y && t.clientX - i.x <= i.width && t.clientY - i.y <= i.height) return this.container.style['pointer-events'] = 'all'
                        }
                        if (this.container.style['pointer-events'] = 'none', 'mousedown' == t.type)
                            for (let t of this.panels) t.blur()
                    }
                    added_css = new Set;
                    css(t, e) {
                        return !this.added_css.has(t) && (this.added_css.add(t), a.add_ele('style', this, {
                            textContent: e
                        }), !0)
                    }
                    append(t) {
                        this.content.append(t)
                    }
                }
            },
            6618: (t, e) => {
                'use strict';
                e.playerHeight = 11, e.cameraHeight = 1.5, e.headScale = 2, e.armScale = 1.3, e.armInset = .1, e.chestWidth = 2.6, e.hitBoxPad = 1, e.legHeight = 4.2, e.legScale = 1.3, e.crouchDst = 3, e.recoilMlt = .3, e.nameOffset = .6, e.nameOffsetHat = .8, e.chestHeight = e.playerHeight - e.headScale - e.legHeight
            },
            3363: (t, e, i) => {
                'use strict';
                var a = i(2176),
                    {
                        Vector3: r
                    } = i(4914),
                    {
                        loader: s,
                        api: n
                    } = i(9606),
                    {
                        vars: o
                    } = s,
                    h = i(6618),
                    c = 2 * Math.PI,
                    l = i(4077);
                t.exports = class {
                    smooth_map = {
                        0: 1,
                        .1: .05,
                        .2: .1,
                        .3: .08,
                        .4: .07,
                        .5: .06,
                        .6: .05,
                        .7: .04,
                        .8: .03,
                        .9: .02,
                        1: .01
                    };
                    can_auto_fire = !0;
                    constructor(t) {
                        this.data = t
                    }
                    push(t) {
                        if (this.data.player && this.data.controls) try {
                            var e = new a(t);
                            this.modify(e), this.timers(e), e.done()
                        } catch (t) {
                            s.report_error('input', t)
                        }
                        return t
                    }
                    aim_input(t, e) {
                        e.xdir = t.x, e.ydir = t.y
                    }
                    aim_camera(t, e) {
                        this.data.controls[o.pchObjc].rotation.x = t.x, this.data.controls.object.rotation.y = t.y
                    }
                    correct_aim(t, e) {
                        e.shoot && (e.shoot = !this.data.player.shot), !e.reload && this.data.player.has_ammo && e.shoot && !this.data.player.shot && this.aim_input(t, e)
                    }
                    enemy_sight() {
                        if (!this.data.player.shot) {
                            var t = new this.data.three.Raycaster;
                            return t.setFromCamera({
                                x: 0,
                                y: 0
                            }, this.data.world.camera), !(!this.data.player.aimed || !t.intersectObjects(this.data.players.filter((t => t.can_target)).map((t => t.obj)), !0).length) || void 0
                        }
                    }
                    smooth(t, e, i, a) {
                        var r = this.data.utils.getAngleDst(t.xdir, e.x),
                            s = this.data.utils.getAngleDst(t.ydir, e.y);
                        return {
                            y: t.ydir + s * i,
                            x: t.xdir + r * a
                        }
                    }
                    bhop(t) {
                        if (-1 != t.move) {
                            var e = this.data.bhop,
                                i = e.startsWith('auto'),
                                a = (e.startsWith('key'), e.endsWith('slide')),
                                r = a || e.endsWith('jump');
                            t.focused && (r && (i || t.keys.has('Space')) && (this.data.controls.keys[this.data.controls.binds.jump.val] ^= 1, this.data.controls.keys[this.data.controls.binds.jump.val] && (this.data.controls.didPressed[this.data.controls.binds.jump.val] = 1)), a && (i || t.keys.has('Space')) && this.data.player.velocity.y < -.02 && this.data.player.can_slide && (setTimeout((() => this.data.controls.keys[this.data.controls.binds.crouch.val] = 0), 325), this.data.controls.keys[this.data.controls.binds.crouch.val] = 1))
                        }
                    }
                    spin_count = 0;
                    spinbot(t) {
                        t.xdir = this.data.utils.deg2rad(-90)
                    }
                    spinbot_pre(t) {
                        t.crouch = -1 == t.move, t.scope = t.scope || t.crouch, t.ydir += c * (1e9 * (this.spin_count ^= 1))
                    }
                    anti_offset(t) {
                        t.x -= this.data.world.shakeY, t.x -= this.data.player.entity.recoilAnimY * h.recoilMlt, t.x -= .1 * this.data.player.entity.landBobY
                    }
                    move = 0;
                    timers(t) {
                        this.data.player.can_shoot && t.shoot && !this.data.player.shot ? (this.data.player.shot = !0, setTimeout((() => this.data.player.shot = !1), this.data.player.weapon.rate + 1)) : this.data.spinbot && this.spinbot(t)
                    }
                    move_ticks(t, e, i) {
                        for (; e--;) t.next((t => (t.move = i, t.xdir += .002)))
                    }
                    modify(t) {
                        this.data.inactivity && -1 == t.move && this.move++ % 200 == 0 && (this.move_ticks(t, 4, 1), this.move_ticks(t, 4, 5)), this.data.spinbot && this.spinbot_pre(t), this.bhop(t), this.data.player.has_ammo || 'auto' != this.data.aim && !this.data.auto_reload || (t.reload = !0), t.could_shoot = this.data.player.can_shoot, t.shoot && !this.data.player.did_shoot && (this.can_auto_fire = !1, setTimeout((() => {
                            this.can_auto_fire = !0
                        }), 1e3 * this.data.force_auto_rate)), this.data.force_auto && this.can_auto_fire && this.data.player.did_shoot && t.shoot && (this.can_auto_fire = !1, t.shoot = !1);
                        var e = this.data.player.weapon_auto || this.data.player.weapon.burst || !t.shoot || !t.previous.could_shoot || !t.previous.shoot,
                            i = 'auto' == this.data.aim || t.scope || t.shoot;
                        this.data.player.weapon.burst && (this.data.player.shot = this.data.player.did_shoot);
                        for (let t of this.data.players) t.calc_parts();
                        if (i && this.data.pick_target(), this.data.player.can_shoot)
                            if ('trigger' == this.data.aim) t.shoot = this.enemy_sight() || t.shoot;
                            else if ('off' != this.data.aim && this.data.target && this.data.player.health) {
                            let i = this.data.target.calc_rot();
                            if (this.anti_offset(i), 'correction' == this.data.aim && e ? this.correct_aim(i, t) : 'auto' == this.data.aim && (this.data.player.can_aim && (t.scope = !0), this.data.player.aimed && (t.shoot = !this.data.player.shot), this.correct_aim(i, t)), 'assist' == this.data.aim && this.data.player.aim_press) {
                                let e = this.smooth_map[this.data.aim_smooth] || (l.warn(this.data.aim_smooth, 'not registered'), 1),
                                    a = this.smooth_map[+Math.min(3 * this.data.aim_smooth, 1).toFixed(1)];
                                i = this.smooth(t, i, e, a), this.aim_camera(i, t)
                            }
                        }
                        t.shoot && this.data.player.shot && (t.shoot = !e)
                    }
                }
            },
            2176: t => {
                'use strict';
                var e = new Set,
                    i = {
                        frame: 0,
                        delta: 1,
                        xdir_r: 2,
                        ydir_r: 3,
                        move: 4,
                        shoot: 5,
                        scope: 6,
                        jump: 7,
                        reload: 8,
                        crouch: 9,
                        weapon_scroll: 10,
                        weapon_swap: 11,
                        move_lock: 12,
                        speed_limit: 13,
                        reset: 14,
                        tween_time: 15,
                        tween_progress: 16
                    };
                class a {
                    static next = [];
                    constructor(t) {
                        this.array = t;
                        var e = a.next.shift();
                        'function' == typeof e && e(this)
                    }
                    get previous() {
                        return a.previous
                    }
                    next(t) {
                        a.next.push(t)
                    }
                    done() {
                        a.previous = this
                    }
                    get keys() {
                        return 'INPUT' == document.activeElement.tagName ? new Set : e
                    }
                    get focused() {
                        return null != document.pointerLockElement
                    }
                    get xdir() {
                        return this.xdir_r / 1e3
                    }
                    set xdir(t) {
                        return this.xdir_r = 1e3 * t, t
                    }
                    get ydir() {
                        return this.ydir_r / 1e3
                    }
                    set ydir(t) {
                        return this.ydir_r = 1e3 * t, t
                    }
                }
                document.addEventListener('keydown', (t => e.add(t.code))), document.addEventListener('keyup', (t => e.delete(t.code))), window.addEventListener('blur', (() => e = new Set));
                for (let t in i) {
                    let e = i[t];
                    Object.defineProperty(a.prototype, t, {
                        get() {
                            return this.array[e]
                        }, set(t) {
                            return this.array[e] = 'boolean' == typeof t ? +t : t
                        }
                    })
                }
                t.exports = a
            },
            6492: t => {
                'use strict';
                class e {
                    static keybinds = new Set;
                    constructor(t, i) {
                        this.keys = new Set, this.callbacks = new Set, e.keybinds.add(this), 'string' == typeof t && (this.key(t), t = i), 'function' == typeof t && this.callback(i)
                    }
                    delete() {
                        e.keybinds.delete(this)
                    }
                    set_key(...t) {
                        return this.keys = new Set, this.key(...t)
                    }
                    set_callback(...t) {
                        return this.callbacks = new Set, this.key(...t)
                    }
                    key(...t) {
                        for (let e of t) this.keys.add(e);
                        return this
                    }
                    callback(...t) {
                        for (let e of t) this.callbacks.add(e);
                        return this
                    }
                }
                window.addEventListener('keydown', (t => {
                    if (!t.repeat) {
                        for (let e of[...t.composedPath()])
                            if (e.tagName)
                                for (let t of['INPUT', 'TEXTAREA'])
                                    if (e.tagName.includes(t)) return;
                        for (let i of e.keybinds)
                            if (!t.repeat && i.keys.has(t.code)) {
                                t.preventDefault();
                                for (let e of i.callbacks) e(t)
                            }
                    }
                })), t.exports = e
            },
            866: (t, e, i) => {
                'use strict';
                var {
                    loader: a
                } = i(9606), {
                    vars: r
                } = a, {
                    Vector3: s
                } = i(4914);
                t.exports = class {
                    constructor(t) {
                        this.data = t
                    }
                    rgbToHex(t, e, i) {
                        for (var a = (t << 16 | e << 8 | i).toString(16); 6 > a.length;) a = '0' + a;
                        return '#' + a
                    }
                    hexFromHue(t) {
                        var e = t / 60,
                            i = 255 * (1 - Math.abs(e % 2 - 1)),
                            a = Math.floor(e);
                        return this.rgbToHex(1 > a || 4 < a ? 255 : 1 == a || 4 == a ? i : 0, 0 == a || 3 == a ? i : 1 == a || 2 == a ? 255 : 0, 0 == a || 1 == a ? 0 : 3 == a || 4 == a ? 255 : i)
                    }
                    deg2rad(t) {
                        return t * Math.PI / 180
                    }
                    dist_center(t) {
                        return Math.hypot(window.innerWidth / 2 - t.x, window.innerHeight / 2 - t.y)
                    }
                    distanceTo(t, e) {
                        return Math.hypot(t.x - e.x, t.y - e.y, t.z - e.z)
                    }
                    applyMatrix4(t, e) {
                        var i = t.x,
                            a = t.y,
                            r = t.z,
                            s = e.elements,
                            n = 1 / (s[3] * i + s[7] * a + s[11] * r + s[15]);
                        return t.x = (s[0] * i + s[4] * a + s[8] * r + s[12]) * n, t.y = (s[1] * i + s[5] * a + s[9] * r + s[13]) * n, t.z = (s[2] * i + s[6] * a + s[10] * r + s[14]) * n, t
                    }
                    project3d(t, e) {
                        return this.applyMatrix4(this.applyMatrix4(t, e.matrixWorldInverse), e.projectionMatrix)
                    }
                    update_frustum() {
                        this.data.world.frustum.setFromProjectionMatrix((new this.data.three.Matrix4).multiplyMatrices(this.data.world.camera.projectionMatrix, this.data.world.camera.matrixWorldInverse))
                    }
                    update_camera() {
                        this.data.world.camera.updateMatrix(), this.data.world.camera.updateMatrixWorld()
                    }
                    pos2d(t, e = 0) {
                        return isNaN(t.x) || isNaN(t.y) || isNaN(t.z) ? {
                            x: 0,
                            y: 0
                        } : ((t = {
                            x: t.x,
                            y: t.y,
                            z: t.z
                        }).y += e, this.update_camera(), this.project3d(t, this.data.world.camera), {
                            x: (t.x + 1) / 2 * this.data.ctx.canvas.width,
                            y: (1 - t.y) / 2 * this.data.ctx.canvas.height
                        })
                    }
                    obstructing(t) {
                        var e = this.data.wallbangs && (!this.data.player || this.data.player.weapon && this.data.player.weapon.pierce),
                            i = this.camera_world() || new s,
                            a = this.getD3D(i.x, i.y, i.z, t.x, t.y, t.z),
                            r = this.getDir(i.z, i.x, t.z, t.x),
                            n = this.getDir(this.getDistance(i.x, i.z, t.x, t.z), t.y, 0, i.y),
                            o = 1 / (a * Math.sin(r - Math.PI) * Math.cos(n)),
                            h = 1 / (a * Math.cos(r - Math.PI) * Math.cos(n)),
                            c = 1 / (a * Math.sin(n));
                        for (let t of this.data.game.map.manager.objects)
                            if (!t.noShoot && t.active && (!e || !t.penetrable)) {
                                var l = this.lineInRect(i.x, i.z, i.y, o, h, c, t.x - Math.max(0, t.width), t.z - Math.max(0, t.length), t.y - Math.max(0, t.height), t.x + Math.max(0, t.width), t.z + Math.max(0, t.length), t.y + Math.max(0, t.height));
                                if (l && 1 > l) return l
                            }
                        if (this.data.game.map.terrain) {
                            var d = this.data.game.map.terrain.raycast(i.x, -i.z, i.y, 1 / o, -1 / h, 1 / c);
                            if (d) return this.getD3D(i.x, i.y, i.z, d.x, d.z, -d.y)
                        }
                    }
                    getDistance(t, e, i, a) {
                        return Math.sqrt((i -= t) * i + (a -= e) * a)
                    }
                    getD3D(t, e, i, a, r, s) {
                        var n = t - a,
                            o = e - r,
                            h = i - s;
                        return Math.sqrt(n * n + o * o + h * h)
                    }
                    getXDire(t, e, i, a, r, s) {
                        return Math.asin(Math.abs(e - r) / this.getD3D(t, e, i, a, r, s)) * (e > r ? -1 : 1)
                    }
                    getDir(t, e, i, a) {
                        return Math.atan2(e - a, t - i)
                    }
                    lineInRect(t, e, i, a, r, s, n, o, h, c, l, d) {
                        var u = (n - t) * a,
                            f = (c - t) * a,
                            p = (h - i) * s,
                            m = (d - i) * s,
                            y = (o - e) * r,
                            g = (l - e) * r,
                            w = Math.max(Math.max(Math.min(u, f), Math.min(p, m)), Math.min(y, g)),
                            v = Math.min(Math.min(Math.max(u, f), Math.max(p, m)), Math.max(y, g));
                        return !(v < 0 || w > v) && w
                    }
                    getAngleDst(t, e) {
                        return Math.atan2(Math.sin(e - t), Math.cos(t - e))
                    }
                    contains_point(t) {
                        for (let e of this.data.world.frustum.planes)
                            if (e.distanceToPoint(t) < 0) return !1;
                        return !0
                    }
                    camera_world() {
                        var t = this.data.world.camera.matrixWorld.clone(),
                            e = this.data.world.camera[r.getWorldPosition]();
                        return this.data.world.camera.matrixWorld.copy(t), this.data.world.camera.matrixWorldInverse.copy(t).invert(), e.clone()
                    }
                    request_frame(t) {
                        requestAnimationFrame(t)
                    }
                }
            },
            6947: (t, e, i) => {
                'use strict';
                var a = i(7263),
                    r = i(8144),
                    s = i(122),
                    n = i(4077);
                t.exports = class extends s {
                    api = 'https://api.sys32.dev/v3/';
                    matchmaker = 'https://matchmaker.krunker.io/';
                    badge = '[GameLoader]';
                    vars = {};
                    context = {
                        key: '_' + Math.random().toString().substr(2)
                    };
                    has_instruct = this.has_instruct.bind(this);
                    stacks = new Set;
                    meta = a.promise();
                    patches = new Map;
                    variables = new Map;
                    log(...t) {
                        n.log(this.badge, ...t)
                    }
                    var (t, e, i) {
                        return this.variables.set(t, [e, i]), this
                    }
                    patch(t, e, i) {
                        return this.patches.set(t, [e, i]), this
                    }
                    observe() {
                        this.loadp = new Promise((t => new MutationObserver(((e, i) => e.forEach((e => [...e.addedNodes].forEach((e => {
                            'DIV' == e.tagName && 'instructionHolder' == e.id && (this.instruction_holder = e, new MutationObserver((() => setTimeout((() => this.emit('instruct', this.has_instruct)), 200))).observe(this.instruction_holder, {
                                attributes: !0,
                                attributeFilter: ['style']
                            })), 'SCRIPT' == e.tagName && e.textContent.includes('Yendis Entertainment') && (e.textContent = '', t())
                        })))))).observe(document, {
                            childList: !0,
                            subtree: !0
                        })))
                    }
                    has_instruct(...t) {
                        if (!this.instruction_holder) return !1;
                        var e = this.instruction_holder.textContent.trim().toLowerCase();
                        for (let i of t)
                            if (e.includes(t)) return !0;
                        return !1
                    }
                    async report_error(t, e) {
                        if ('object' == typeof e) {
                            var i = {
                                name: e.name,
                                message: e.message,
                                stack: e.stack,
                                where: t
                            };
                            this.stacks.has(e.stack) || (n.error('Where:', t, '\nUncaught', e), this.stacks.add(e.stack), await r({
                                target: this.api,
                                endpoint: 'error',
                                data: i
                            }))
                        }
                    }
                    async show_error(t, e) {
                        await this.load;
                        var i = await a.wait_for((() => document.querySelector('#instructionHolder'))),
                            r = await a.wait_for((() => document.querySelector('#instructions')));
                        i.style.display = 'block', i.style.pointerEvents = 'all';
                        for (let t of document.querySelectorAll('#loadingBg, #initLoader')) t.style.display = 'none';
                        r.innerHTML = `<div style='color:#FFF9'>${t}</div><div style='margin-top:10px;font-size:20px;color:#FFF6'>${e}</div>`
                    }
                    async token() {
                        return await this.meta, await r({
                            target: this.api,
                            endpoint: 'token',
                            data: await r({
                                target: this.matchmaker,
                                endpoint: 'generate-token',
                                headers: {
                                    'client-key': this.meta.key
                                },
                                result: 'json'
                            }),
                            result: 'json'
                        })
                    }
                    apply_patches(t) {
                        var e;
                        for (var [i, [a, r]] of this.variables) {
                            var s = (t.match(a) || 0)[r];
                            s ? this.vars[i] = s : (e || (e = {}))[i] = [a, r]
                        }
                        for (var [i, [o, h]] of(n.log('Game Variables:'), n.table(this.vars), e && (n.log('Missing:'), n.table(e)), this.patches)) t.match(o) || n.error('Could not patch', i), t = t.replace(o, h);
                        return t
                    }
                    async license(t) {
                        var e;
                        try {
                            e = await r({
                                target: this.api,
                                endpoint: 'meta',
                                data: {...t, needs_key: !0
                                },
                                method: 'POST',
                                result: 'json'
                            })
                        } catch (t) {
                            n.log(t), e = {
                                error: {
                                    title: t.message,
                                    message: 'Post a screenshot of this error on <a href=\'https://forum.sys32.dev/\'>the forums</a> or <a href=\'/\'>click here</a> to try again.'
                                }
                            }
                        }
                        e.error ? (a.add_ele('style', document.documentElement, {
                            textContent: '#initLoader,#instructionsUpdate{display:none!IMPORTANT}'
                        }), this.show_error(e.error.title, e.error.message), this.meta.reject()) : this.meta.resolve(this.meta = e)
                    }
                    async source() {
                        return await this.meta, await r({
                            target: this.api,
                            endpoint: 'source',
                            query: {
                                build: this.meta.build
                            },
                            result: 'text',
                            cache: !0
                        })
                    }
                    async load(t = {}, e = {}, i = (() => {})) {
                        var a = {...t, [this.context.key]: this.context, WP_fetchMMToken: this.token()
                            },
                            r = this.apply_patches(await this.source());
                        Object.assign(this.context, e);
                        try {
                            await this.loadp, i(), new Function(...Object.keys(a), r)(...Object.values(a))
                        } catch (t) {
                            this.report_error('loading', t), this.show_error(t.message, 'Post a screenshot of this error on <a href=\'https://forum.sys32.dev/\'>the forums</a> or <a href=\'/\'>click here</a> to try again.')
                        }
                    }
                }
            },
            2034: (t, e, i) => {
                'use strict';
                var a = i(122),
                    r = i(4077);
                t.exports = class extends a {
                    constructor(t, e) {
                        super(), this.menu = t, this.window = t.window, this.create(...e)
                    }
                    ready() {
                        r.info(this.name, 'loaded'), this.emit('ready')
                    }
                    create() {}
                }
            },
            9969: (t, e, i) => {
                'use strict';
                var a = i(7263),
                    r = i(122),
                    s = i(4077);
                class n extends r {
                    constructor(t, e, i) {
                        super(), this.data = e, this.name = t, this.category = i, this.menu = this.category.tab.window.menu, this.content = a.add_ele('div', this.category.content, {
                            className: 'settName'
                        }), this.label = a.add_ele('text', this.content), this.create(), this.menu.emit('control', this)
                    }
                    label_text(t) {
                        this.label.nodeValue = t
                    }
                    remove() {
                        this.content.remove()
                    }
                    walk(t) {
                        var e, i, a = this.menu.config;
                        for (let r of t.split('.')) a = (e = a)[i = r] || {};
                        return [e, i]
                    }
                    get value() {
                        if ('function' == typeof this.data.value) return this.data.value;
                        var t = this.walk(this.data.walk);
                        return t[0][t[1]]
                    }
                    set value(t) {
                        var e = this.walk(this.data.walk);
                        return e[0][e[1]] = t, this.menu.save_config(), this.emit('change', t), t
                    }
                    create() {}
                    interact() {
                        s.warn('No defined interaction for', this)
                    }
                    update(t) {
                        t && this.emit('change', this.value, !0), this.label_text(this.name)
                    }
                    show_content() {
                        this.content.style.display = 'block'
                    }
                    hide_content() {
                        this.content.style.display = 'none'
                    }
                }
                class o extends n {
                    static id = 'link';
                    create() {
                        this.link = a.add_ele('a', this.content, {
                            href: this.value
                        }), this.link.append(this.label)
                    }
                    interact() {
                        this.link.click()
                    }
                }
                n.Types = {
                    KeybindControl: class extends n {
                        static id = 'keybind';
                        create() {
                            this.input = a.add_ele('input', this.content, {
                                className: 'inputGrey2',
                                placeholder: 'Press a key',
                                style: {
                                    display: 'inline-block',
                                    width: '220px'
                                }
                            }), this.input.addEventListener('focus', (() => {
                                this.input.value = ''
                            })), this.input.addEventListener('keydown', (t => {
                                t.preventDefault(), this.value = 'Escape' == t.code ? null : t.code, this.input.blur()
                            })), this.input.addEventListener('blur', (() => {
                                this.category.update(), this.update()
                            }))
                        }
                        update(t) {
                            super.update(t), this.input.value = a.string_key(this.value)
                        }
                    },
                    SelectControl: class extends n {
                        static id = 'select';
                        create() {
                            this.select = a.add_ele('select', this.content, {
                                className: 'inputGrey2'
                            }), this.select.addEventListener('change', (() => this.value = this.select.value));
                            for (let t in this.data.value) a.add_ele('option', this.select, {
                                value: t,
                                textContent: this.data.value[t]
                            })
                        }
                        update(t) {
                            super.update(t), t && (this.select.value = this.value)
                        }
                    },
                    DropdownControl: class extends n {
                        static id = 'dropdown';
                        create() {
                            this.select = a.add_ele('select', this.content, {
                                className: 'inputGrey2'
                            }), this.select.addEventListener('change', (() => {
                                this.key = this.select.value, this.value = this.data.value[this.select.value]
                            }));
                            for (let t in this.data.value) a.add_ele('option', this.select, {
                                textContent: t,
                                value: t
                            })
                        }
                        update(t) {
                            if (super.update(t), t)
                                for (let [t, e] of Object.entries(this.data.value)) e == this.value && (this.select.value = t, this.key = t)
                        }
                    },
                    BooleanControl: class extends n {
                        static id = 'boolean';
                        create() {
                            this.switch = a.add_ele('label', this.content, {
                                className: 'switch',
                                textContent: 'Run',
                                style: {
                                    'margin-left': '10px'
                                }
                            }), this.input = a.add_ele('input', this.switch, {
                                type: 'checkbox'
                            }), this.input.addEventListener('change', (() => this.value = this.input.checked)), a.add_ele('span', this.switch, {
                                className: 'slider'
                            })
                        }
                        update(t) {
                            super.update(t), t && (this.input.checked = this.value), this.label_text(this.name)
                        }
                    },
                    FunctionControl: class extends n {
                        static id = 'function';
                        create() {
                            a.add_ele('div', this.content, {
                                className: 'settingsBtn',
                                textContent: this.data.text || 'Run',
                                events: {
                                    click: () => this.interact()
                                }
                            })
                        }
                        interact() {
                            this.value()
                        }
                    },
                    LinkControl: o,
                    TextBoxControl: class extends n {
                        static id = 'textbox';
                        create() {
                            this.input = a.add_ele('input', this.content, {
                                className: 'inputGrey2',
                                placeholder: this.data.placeholder || '',
                                style: {
                                    display: 'inline-block',
                                    width: '220px'
                                }
                            }), this.input.addEventListener('change', (() => this.value = this.input.value))
                        }
                        update(t) {
                            super.update(t), t && (this.input.value = this.value)
                        }
                    },
                    SliderControl: class extends n {
                        static id = 'slider';
                        create() {
                            var t = {
                                min: this.data.min,
                                max: this.data.max,
                                step: this.data.step
                            };
                            this.input = a.add_ele('input', this.content, {
                                className: 'sliderVal',
                                type: 'number',
                                ...t
                            }), this.slider = a.add_ele('input', a.add_ele('div', this.content, {
                                className: 'slidecontainer',
                                style: {
                                    'margin-top': '-8px'
                                }
                            }), {
                                className: 'sliderM',
                                type: 'range',
                                ...t
                            }), this.input.addEventListener('focus', (() => (this.input_focused = !0, this.interact()))), this.input.addEventListener('blur', (() => (this.input_focused = !1, this.interact()))), this.slider.addEventListener('input', (() => this.interact(this.value = this.slider.value))), this.input.addEventListener('input', (() => this.interact(this.value = +this.input.value)))
                        }
                        interact() {
                            var t = !this.input_focused && this.data.labels && this.data.labels[this.value] || this.value;
                            this.input.type = 'string' == typeof t ? 'text' : 'number', this.input.value = t, this.slider.value = this.value
                        }
                        update(t) {
                            super.update(t), this.interact()
                        }
                    },
                    ColorControl: class extends n {
                        static id = 'color';
                        create() {
                            this.input = a.add_ele('input', this.content, {
                                name: 'color',
                                type: 'color',
                                style: {
                                    float: 'right'
                                }
                            }), this.input.addEventListener('change', (() => this.value = this.input.value))
                        }
                        update(t) {
                            super.update(t), t && (this.input.value = this.value)
                        }
                    },
                    LinkControl: o,
                    LinkFunctionControl: class extends n {
                        static id = 'linkfunction';
                        create() {
                            this.link = a.add_ele('a', this.content, {
                                href: '#',
                                events: {
                                    click: () => this.interact()
                                }
                            }), this.link.append(this.label)
                        }
                        interact() {
                            this.value()
                        }
                    }
                }, t.exports = n
            },
            3651: (t, e, i) => {
                'use strict';
                var {
                    tick: a,
                    select: r
                } = i(8203), s = i(7263), n = i(122);
                t.exports = class extends n {
                    constructor(t, e) {
                        super(), this.node = s.crt_ele('div', {
                            className: 'menuItem'
                        }), this.icon = s.add_ele('div', this.node, {
                            className: 'menuItemIcon',
                            style: {
                                'background-image': 'url(' + JSON.stringify(e) + ')'
                            }
                        }), this.label = s.add_ele('div', this.node, {
                            className: 'menuItemTitle',
                            textContent: t
                        }), this.node.addEventListener('click', (() => this.emit('click'))), a(this.node), r(this.node), this.hide()
                    }
                    attach(t) {
                        t.append(this.node)
                    }
                    show() {
                        this.node.style.display = 'flex'
                    }
                    hide() {
                        this.node.style.display = 'none'
                    }
                }
            },
            6154: (t, e, i) => {
                'use strict';
                var a = i(7263),
                    r = i(9969);
                t.exports = class {
                    constructor(t, e) {
                        this.tab = t, this.controls = new Set, e && (this.label = e, this.header = a.add_ele('div', this.tab.content, {
                            className: 'setHed'
                        }), this.header_status = a.add_ele('span', this.header, {
                            className: 'material-icons plusOrMinus'
                        }), a.add_ele('text', this.header, {
                            nodeValue: e
                        }), this.header.addEventListener('click', (() => this.toggle()))), this.content = a.add_ele('div', this.tab.content, {
                            className: 'setBodH'
                        }), e && this.expand()
                    }
                    toggle() {
                        this.collapsed ? this.expand() : this.collapse()
                    }
                    collapse() {
                        this.collapsed = !0, this.update()
                    }
                    expand() {
                        this.collapsed = !1, this.update()
                    }
                    update(t) {
                        this.content.style.display = this.collapsed ? 'none' : 'block', this.header && (this.header.style.display = 'block', this.header_status.textContent = 'keyboard_arrow_' + (this.collapsed ? 'right' : 'down'));
                        for (let e of this.controls) e.update(t)
                    }
                    show() {
                        this.expand(), this.header && (this.header.style.display = 'block')
                    }
                    hide() {
                        this.content.style.display = 'none', this.header && (this.header.style.display = 'none')
                    }
                    fix() {
                        this.update();
                        for (let t of this.controls) t.show_content()
                    }
                    control(t, e) {
                        for (let [i, a] of Object.entries(r.Types))
                            if (a.id == e.type) {
                                let i = new a(t, e, this);
                                return this.controls.add(i), i
                            }
                        throw new TypeError('Unknown type: ' + e.type)
                    }
                }
            },
            6760: (t, e, i) => {
                'use strict';
                var {
                    tick: a,
                    select: r
                } = i(8203), s = i(7263), n = i(6154);
                t.exports = class {
                    constructor(t, e) {
                        this.window = t, this.button = s.add_ele('div', this.window.tab_layout, {
                            className: 'settingTab',
                            textContent: e,
                            events: {
                                click: () => this.show()
                            }
                        }), a(this.button), r(this.button), this.categories = new Set, this.content = s.add_ele('div', t.container, {
                            id: 'settHolder'
                        }), this.hide()
                    }
                    category(t) {
                        var e = this.last_category = new n(this, t);
                        return this.categories.add(e), e
                    }
                    control(...t) {
                        var e = this.last_category;
                        return e && e.is_default || ((e = this.category()).is_default = !0), e.control(...t)
                    }
                    update(t) {
                        for (let e of this.categories) e.update(t)
                    }
                    show() {
                        this.visible = !0;
                        for (let t of this.window.tabs) t != this && t.hide();
                        this.button.classList.add('tabANew'), this.show_content(), this.window.menu.emit('tab-shown');
                        for (let t of this.categories) t.fix()
                    }
                    hide() {
                        this.visible = !1, this.button.classList.remove('tabANew'), this.hide_content()
                    }
                    show_content() {
                        this.content.style.display = 'block'
                    }
                    hide_content() {
                        this.content.style.display = 'none'
                    }
                }
            },
            2964: (t, e, i) => {
                'use strict';
                var a = i(6760),
                    r = i(7263),
                    s = i(4077);
                t.exports = class {
                    constructor(t) {
                        this.menu = t, this.content = r.crt_ele('div', {
                            style: {
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                left: 0,
                                top: 0,
                                'z-index': 1e9
                            }
                        }), this.node = this.content.attachShadow({
                            mode: 'closed'
                        }), this.styles = new Set, new MutationObserver(((t, e) => {
                            for (let e of t)
                                for (let t of e.addedNodes)['LINK', 'STYLE'].includes(t.tagName) && this.update_styles()
                        })).observe(document, {
                            childList: !0,
                            subtree: !0
                        }), this.holder = r.add_ele('div', this.node, {
                            id: 'windowHolder',
                            className: 'popupWin',
                            style: {
                                'pointer-events': 'all'
                            }
                        }), this.container = r.add_ele('div', this.holder, {
                            id: 'menuWindow',
                            className: 'stickyHeader dark',
                            style: {
                                'overflow-y': 'auto',
                                width: '1200px',
                                'max-height': 'calc(100% - 250px)',
                                top: '50%',
                                transform: 'translate(-50%, -50%)'
                            }
                        }), this.header = r.add_ele('div', this.container, {
                            className: 'settingsHeader'
                        }), this.holder.addEventListener('click', (t => {
                            t.target == this.holder && this.hide()
                        })), this.tabs = new Set, this.tab_layout = r.add_ele('div', this.header, {
                            id: 'settingsTabLayout'
                        }), this.hide()
                    }
                    update_styles() {
                        for (let t of this.styles) t.remove(), this.styles.delete(t);
                        for (let t of document.styleSheets) {
                            let e = r.add_ele('style', this.node);
                            if (this.styles.add(e), t.href) e.textContent += '@import url(' + JSON.stringify(t.href) + ');\n';
                            else try {
                                for (let i of t.cssRules) e.textContent += i.cssText + '\n'
                            } catch (t) {
                                s.error(t)
                            }
                        }
                    }
                    tab(t) {
                        var e = new a(this, t);
                        return this.tabs.add(e), e
                    }
                    attach(t) {
                        t.appendChild(this.content)
                    }
                    show() {
                        this.content.style.display = 'block'
                    }
                    hide() {
                        this.content.style.display = 'none'
                    }
                    get main_tab() {
                        var t;
                        for (let e of this.tabs)
                            if (t = t || e, e.visible) return e;
                        return t
                    }
                    update(t) {
                        for (let e of this.tabs) e.update(t), e != this.main_tab && e.hide();
                        this.main_tab.show()
                    }
                }
            },
            9853: (t, e, i) => {
                'use strict';
                var a = i(2034),
                    r = i(7263),
                    s = i(4077);
                t.exports = class extends a {
                    invite = /([a-z0-9-]{3,25})\s*?$/i;
                    async create(t) {
                        this.name = 'Discord Invite';
                        var e = (t = await t + '').match(this.invite);
                        if (!e || !e[1]) throw new Error('Invalid invite code: ' + t);
                        var i = e[1];
                        s.log('Discord code:', i), this.data = await(await fetch(`https://discord.com/api/v8/invites/5FYcAaSrPC?with_counts=true`)).json(), this.content = r.crt_ele('div', {
                            style: {
                                'margin-bottom': '15px'
                            }
                        }), this.shadow = this.content.attachShadow({
                            mode: 'closed'
                        }), this.load(this.data, this.shadow), this.ready(), this.menu.window.header.prepend(this.content)
                    }
                    load(t, e) {
                        e.innerHTML = '\n<div class=\'content\'>\n\t<div class=\'icon\'></div>\n\t<div class=\'name\'></div>\n\t<div class=\'online status\'></div>\n\t<div class=\'total status\'></div>\n\t<a draggable=\'false\' class=\'join\'>Join</a>\n</div>', r.add_ele('style', e, {
                            textContent: i(6605)
                        });
                        var a = r.node_tree({
                            container: '^ > .content',
                            icon: '$ > .icon',
                            name: '$ > .name',
                            online: '$ > .online',
                            total: '$ > .total',
                            join: '$ > .join'
                        }, e);
                        10006 == t.code ? (a.container.classList.add('invalid'), a.name.textContent = 'Invalid Invite') : (t.guild.icon ? a.icon.style['background-image'] = 'url(' + JSON.stringify('https://cdn.discordapp.com/icons/' + t.guild.id + '/' + t.guild.icon + '?size=64') + ')' : a.icon.textContent = t.guild.name.split(' ').map((t => t[0])).join(''), a.container.classList.add('valid'), a.name.textContent = t.guild.name, a.online.textContent = t.approximate_presence_count, a.total.textContent = t.approximate_member_count, a.join.href = 'https://discord.com/invite/5FYcAaSrPC')
                    }
                }
            },
            9133: (t, e, i) => {
                'use strict';
                var a = i(2034),
                    r = i(6425),
                    s = i(7263),
                    n = i(4077);
                t.exports = class extends a {
                    async create(t) {
                        this.name = 'Krunker Settings', this.config = s.crt_ele('div', {
                            style: {
                                'text-align': 'right',
                                display: 'inline-block',
                                float: 'right'
                            }
                        }), s.add_ele('div', this.config, {
                            className: 'settingsBtn',
                            textContent: 'Reset',
                            events: {
                                click: () => this.menu.load_preset('Default')
                            }
                        }), s.add_ele('div', this.config, {
                            className: 'settingsBtn',
                            textContent: 'Export',
                            events: {
                                click: () => r.save({
                                    name: 'menu.json',
                                    data: JSON.stringify(this.menu.config)
                                })
                            }
                        }), s.add_ele('div', this.config, {
                            className: 'settingsBtn',
                            textContent: 'Import',
                            events: {
                                click: () => r.pick({
                                    accept: 'menu.json'
                                }).then((async t => {
                                    var e = await t.read();
                                    try {
                                        await this.menu.insert_config(JSON.parse(e), !0)
                                    } catch (t) {
                                        n.error(t), alert('Invalid config')
                                    }
                                }))
                            }
                        }), this.preset = s.add_ele('select', this.config, {
                            id: 'settingsPreset',
                            className: 'inputGrey2',
                            style: {
                                'margin-left': '0px',
                                'font-size': '14px'
                            },
                            events: {
                                change: () => {
                                    'Custom' != this.preset.value && this.menu.load_preset(this.preset.value)
                                }
                            }
                        }), s.add_ele('option', this.preset, {
                            value: 'Custom',
                            textContent: 'Custom'
                        }), this.search = s.crt_ele('input', {
                            id: 'settSearch',
                            type: 'text',
                            placeholder: 'Search',
                            style: {
                                display: 'inline-block',
                                width: '220px'
                            },
                            events: {
                                input: () => {
                                    if (!this.search.value) return [...this.menu.window.tabs][0].show();
                                    for (let t of this.menu.window.tabs) {
                                        t.hide();
                                        for (let e of t.categories) {
                                            e.hide();
                                            for (let i of e.controls) i.hide_content(), i.name.toLowerCase().includes(this.search.value.toLowerCase()) && (i.show_content(), t.show_content(), e.show())
                                        }
                                    }
                                }
                            }
                        }), this.menu.on('preset', (t => s.add_ele('option', this.preset, {
                            value: t,
                            textContent: t
                        }))), this.menu.on('config', (() => this.handle_config())), this.menu.on('control', (t => t.on('change', ((t, e) => {
                            e || this.handle_config()
                        })))), this.menu.on('tab-shown', (() => this.search.value = '')), this.menu.window.header.prepend(this.config), this.menu.window.header.prepend(this.search), this.ready()
                    }
                    handle_config() {
                        var t = JSON.stringify(this.menu.config);
                        for (let [e, i] of this.menu.presets)
                            if (JSON.stringify(s.assign_deep(s.clone_obj(this.menu.presets.get('Default')), i)) == t) return this.preset.value = e;
                        this.preset.value = 'Custom'
                    }
                }
            },
            8203: (t, e) => {
                'use strict';
                e.tick = t => t.addEventListener('mouseenter', (() => {
                    try {
                        playTick()
                    } catch (t) {}
                })), e.select = t => t.addEventListener('click', (() => {
                    try {
                        SOUND.play('select_0', .1)
                    } catch (t) {}
                }))
            },
            4447: (t, e, i) => {
                'use strict';
                var {
                    store: a
                } = i(8203), r = i(2964), s = i(3651), n = i(7263), o = i(2311), h = i(122), c = i(4077);
                t.exports = class extends h {
                    constructor(t, e, i, a = new o) {
                        super(), this.store = a, this.config_key = i, new MutationObserver(((t, e) => {
                            for (let e of t)
                                for (let t of e.addedNodes) 'menuItemContainer' == t.id ? this.button.attach(t) : 'uiBase' == t.id && this.window.attach(t)
                        })).observe(document, {
                            childList: !0,
                            subtree: !0
                        }), this.presets = new Map, this.presets.set('Default', {}), this.config = {}, this.addons = new Set, this.window = new r(this), this.button = new s(t, e), this.button.on('click', (() => {
                            this.window.show()
                        })), this.button.hide()
                    }
                    load_style(t) {
                        n.add_ele('style', this.window.node, {
                            textContent: t
                        })
                    }
                    load_addon(t, ...e) {
                        try {
                            var i = new t(this, e);
                            this.addons.add(i)
                        } catch (e) {
                            c.error('Error loading addon:', t, '\n', e)
                        }
                    }
                    add_preset(t, e) {
                        this.presets.set(t, e), this.emit('preset', t, e)
                    }
                    async insert_config(t, e = !1) {
                        this.config = n.assign_deep(n.clone_obj(this.presets.get('Default')), t), e && await this.save_config(), this.window.update(!0), this.emit('config')
                    }
                    async load_preset(t) {
                        if (!this.presets.has(t)) throw new Error('Invalid preset:', t);
                        this.insert_config(this.presets.get(t), !0)
                    }
                    async save_config() {
                        await this.store.set(this.config_key, this.config)
                    }
                    async load_config() {
                        this.insert_config(await this.store.get(this.config_key, 'object'))
                    }
                }
            },
            4304: (t, e, i) => {
                'use strict';
                var {
                    Vector3: a,
                    Hex3: r,
                    Box3: s
                } = i(4914), {
                    loader: n
                } = i(9606), {
                    vars: o
                } = n, h = i(6618), c = 0;
                setInterval((() => c = Math.random()), 2e3);
                t.exports = class {
                    part_keys = ['head', 'chest', 'legs'];
                    calc_ticks = 2;
                    constructor(t, e) {
                        this.data = t, this.entity = 'object' == typeof e && null != e ? e : {}, this.velocity = new a, this.position = new a, this.esp_hex = new r, this.hp_hex = new r, this.dont_calc = 0, this.hitbox = new s, this.hitbox.head = new s, this.parts = {
                            hitbox_head: new a,
                            head: new a,
                            chest: new a,
                            legs: new a
                        }
                    }
                    get ground() {
                        return this.entity.onGround
                    }
                    calc_rect() {
                        var t = (2 * h.armScale + h.chestWidth + h.armInset) / 2,
                            e = 1 / 0,
                            i = -1 / 0,
                            a = 1 / 0,
                            r = -1 / 0,
                            s = null;
                        this.frustum = !0;
                        for (let n = -1; this.frustum && n < 2; n += 2)
                            for (let o = -1; this.frustum && o < 2; o += 2)
                                for (let h = 0; this.frustum && h < 2; h++)
                                    if (s = this.obj.position.clone()) {
                                        if (s.x += n * t, s.z += o * t, s.y += h * this.height, !this.data.utils.contains_point(s)) return this.frustum = !1;
                                        s.project(this.data.world.camera), e = Math.min(e, s.x), i = Math.max(i, s.x), a = Math.min(a, s.y), r = Math.max(r, s.y)
                                    }
                        e = (e + 1) / 2, i = (i + 1) / 2, a = .5 - ((a = (a + 1) / 2) - .5), r = .5 - ((r = (r + 1) / 2) - .5), e *= this.data.ctx.canvas.width, i *= this.data.ctx.canvas.width, a *= this.data.ctx.canvas.height;
                        var n = {
                            left: e,
                            top: r *= this.data.ctx.canvas.height,
                            right: i,
                            bottom: a,
                            width: i - e,
                            height: a - r
                        };
                        return n.x = n.left + n.width / 2, n.y = n.top + n.height / 2, n
                    }
                    scale_rect(t, e) {
                        var i = {},
                            a = ['y', 'height', 'top', 'bottom'];
                        for (var r in this.rect) i[r] = this.rect[r] / (a.includes(r) ? e : t);
                        return i
                    }
                    calc_in_fov() {
                        if (110 == this.data.aim_fov) return !0;
                        if (!this.frustum) return !1;
                        var t = this.data.world.camera.fov;
                        this.data.world.camera.fov = this.data.aim_fov / t * 100, this.data.world.camera.updateProjectionMatrix(), this.data.utils.update_frustum();
                        var e = this.data.utils.contains_point(this.aim_point);
                        return this.data.world.camera.fov = t, this.data.world.camera.updateProjectionMatrix(), this.data.utils.update_frustum(), e
                    }
                    get ping() {
                        return this.entity.ping
                    }
                    get jump_bob_y() {
                        return this.entity.jumpBobY
                    }
                    get clan() {
                        return this.entity.clan
                    }
                    get alias() {
                        return this.entity.alias
                    }
                    get weapon() {
                        return this.entity.weapon
                    }
                    get weapon_auto() {
                        return !this.weapon.nAuto
                    }
                    get can_slide() {
                        return this.entity.canSlide
                    }
                    get risk() {
                        return this.entity.level >= 30 || this.entity.account && (this.entity.account.featured || this.entity.account.premiumT)
                    }
                    get is_you() {
                        return this.entity[o.isYou]
                    }
                    get target() {
                        return this.data.target && this.entity == this.data.target.entity
                    }
                    get can_melee() {
                        return this.weapon.melee && this.data.target && this.data.target.active && this.position.distance_to(this.data.target) <= 18 || !1
                    }
                    get reloading() {
                        return 0 != this.entity.reloadTimer
                    }
                    get can_aim() {
                        return !this.can_melee
                    }
                    get can_throw() {
                        return this.entity.canThrow && this.weapon.canThrow
                    }
                    get aimed() {
                        var t = this.can_throw ? 1 - this.entity.chargeTime / this.entity.throwCharge : this.weapon.melee ? 1 : this.entity[o.aimVal];
                        return this.weapon.noAim || 0 == t || this.can_melee || !1
                    }
                    get can_shoot() {
                        return !this.reloading && this.has_ammo && (this.can_throw || !this.weapon.melee || this.can_melee)
                    }
                    get hitbox_pad() {
                        return this.data.game.config.hitBoxPad - .2
                    }
                    get hitbox_scale() {
                        return this.entity.scale + this.hitbox_pad - .2
                    }
                    get aim_press() {
                        return this.data.controls[o.adsToggled] || this.data.controls.keys[this.data.controls.binds.aim.val]
                    }
                    get crouch() {
                        return this.entity[o.crouchVal] || 0
                    }
                    get box_scale() {
                        this.data.utils.camera_world();
                        var t = t => Math.min(1, this.rect[t] / this.data.ctx.canvas[t] * 10);
                        return [t('width'), t('height')]
                    }
                    get dist_scale() {
                        var t = this.data.utils.camera_world(),
                            e = Math.max(.65, 1 - this.data.utils.getD3D(t.x, t.y, t.z, this.position.x, this.position.y, this.position.z) / 600);
                        return [e, e]
                    }
                    get distance_camera() {
                        return this.data.utils.camera_world().distanceTo(this.position)
                    }
                    get obj() {
                        return this.is_ai ? this.enity.dat : this.entity[o.objInstances]
                    }
                    get land_bob_y() {
                        return this.entity.landBobY || 0
                    }
                    get recoil_y() {
                        return this.entity[o.recoilAnimY] || 0
                    }
                    get has_ammo() {
                        return this.ammo || this.ammo == this.max_ammo
                    }
                    get ammo() {
                        return this.entity[o.ammos][this.entity[o.weaponIndex]] || 0
                    }
                    get max_ammo() {
                        return this.weapon.ammo || 0
                    }
                    get height() {
                        return this.entity.height - this.crouch * h.crouchDst
                    }
                    get health() {
                        return this.entity.health || 0
                    }
                    get scale() {
                        return this.entity.scale
                    }
                    get max_health() {
                        return this.entity[o.maxHealth] || 100
                    }
                    get active() {
                        return this.entity.active && null != this.entity.x && this.health > 0 && (!!this.is_you || this.leg) && !0
                    }
                    get teammate() {
                        return this.is_you || this.data.player && this.team && this.team == this.data.player.team
                    }
                    get enemy() {
                        return !this.teammate
                    }
                    get team() {
                        return this.entity.team
                    }
                    get streaks() {
                        return Object.keys(this.entity.streaks || {})
                    }
                    get did_shoot() {
                        return this.entity[o.didShoot]
                    }
                    get leg() {
                        for (let t of this.entity.legMeshes)
                            if (t.visible) return t;
                        var t = this.entity.lowerBody;
                        return {
                            getWorldQuaternion: () => t.getWorldQuaternion(),
                            [o.getWorldPosition]: () => (new a).copy(t[o.getWorldPosition]()).translate_quaternion(t.getWorldQuaternion(), (new a).copy({
                                x: h.legScale / 2,
                                y: h.legHeight / 2,
                                z: 0
                            }))
                        }
                    }
                    calc_rot() {
                        var t = this.data.utils.camera_world(),
                            e = this.aim_point;
                        return {
                            x: this.data.utils.getXDire(t.x, t.y, t.z, e.x, e.y - this.data.player.jump_bob_y, e.z) || 0,
                            y: this.data.utils.getDir(t.z, t.x, e.z, e.x) || 0
                        }
                    }
                    calc_parts() {
                        if (!this.active || this.is_you) return this.can_target = !1;
                        if (!this.data.aim_smooth || !this.aim_point || this.dont_calc++ % (this.calc_ticks + 1) == 0) {
                            var t = this.entity.lowerBody.getWorldPosition(),
                                e = this.entity.lowerBody.getWorldQuaternion();
                            this.parts.chest.copy(t).translate_quaternion(e, (new a).copy({
                                x: 0,
                                y: h.chestHeight / 2,
                                z: 0
                            })), this.parts.head.copy(t).translate_quaternion(e, (new a).copy({
                                x: 0,
                                y: h.chestHeight + h.headScale / 2,
                                z: 0
                            }));
                            var i = this.leg[o.getWorldPosition]();
                            this.parts.legs.copy(i).translate_quaternion(this.leg.getWorldQuaternion(), (new a).copy({
                                x: -h.legScale / 2,
                                y: -h.legHeight / 2,
                                z: 0
                            }));
                            var r = 'random' == this.data.aim_offset ? this.part_keys[~~(c * this.part_keys.length)] : this.data.aim_offset;
                            switch (r) {
                                case 'head':
                                case 'head':
                                    this.set_aim_point(this.parts.head);
                                    break;
                                case 'multi':
                                    if (!this.set_aim_point(this.parts.hitbox_head)) {
                                        let t = this.data.utils.camera_world(),
                                            e = this.visible_points(this.hitbox.head.points()).sort(((e, i) => e.distance_to(t) - i.distance_to(t) + (i.y - e.y)));
                                        for (let t of e)
                                            if (this.set_aim_point(t)) break
                                    }
                                    break;
                                case 'chest':
                                    this.set_aim_point(this.parts.chest);
                                    break;
                                case 'legs':
                                    this.set_aim_point(this.parts.legs);
                                    break;
                                default:
                                    throw 'unknown part ' + r
                            }
                            this.in_fov = this.calc_in_fov(), this.can_target = this.can_see && this.enemy && this.in_fov
                        }
                    }
                    visible_points(t) {
                        var e = [];
                        for (let i of[[0, 3], [3, 5], [5, 6], [6, 0]]) {
                            let a = new this.data.three.Box3;
                            for (let e of i) a.expandByPoint(t[e]);
                            let r = a.getSize(),
                                s = a.getCenter();
                            e.push({
                                width: r.x,
                                length: r.z,
                                height: r.y,
                                x: s.x,
                                y: s.y - r.y / 2,
                                z: s.z
                            })
                        }
                        return t.filter((t => !!this.point_obstructing(t, e)))
                    }
                    point_obstructing(t, e) {
                        var i = this.data.utils.camera_world(),
                            a = this.data.utils.getD3D(i.x, i.y, i.z, t.x, t.y, t.z),
                            r = this.data.utils.getDir(i.z, i.x, t.z, t.x),
                            s = this.data.utils.getDir(this.data.utils.getDistance(i.x, i.z, t.x, t.z), t.y, 0, i.y),
                            n = 1 / (a * Math.sin(r - Math.PI) * Math.cos(s)),
                            o = 1 / (a * Math.cos(r - Math.PI) * Math.cos(s)),
                            h = 1 / (a * Math.sin(s));
                        for (let t of e) {
                            var c = this.data.utils.lineInRect(i.x, i.z, i.y, n, o, h, t.x - Math.max(0, t.width), t.z - Math.max(0, t.length), t.y - Math.max(0, t.height), t.x + Math.max(0, t.width), t.z + Math.max(0, t.length), t.y + Math.max(0, t.height));
                            if (c && 1 > c) return c
                        }
                    }
                    set_aim_point(t) {
                        return this.aim_point = t, this.can_see = null == this.data.utils.obstructing(t)
                    }
                    tick() {
                        if (this.position.set(this.entity.x, this.entity.y, this.entity.z), this.velocity.set(this.entity.velocity.x, this.entity.velocity.y, this.entity.velocity.z), this.hitbox.min.set(this.position.x - this.hitbox_scale, this.position.y, this.position.z - this.hitbox_scale), this.hitbox.max.set(this.position.x + this.hitbox_scale, this.position.y + this.height + this.hitbox_pad, this.position.z + this.hitbox_scale), this.hitbox.head.max.copy(this.hitbox.max), this.hitbox.head.min.copy(this.hitbox.min), this.hitbox.head.min.y = this.hitbox.max.y - this.entity.headScale - .5, this.parts.hitbox_head.copy(this.position).y = this.position.y + this.height, !this.is_you) {
                            this.rect = this.calc_rect(), this.esp_hex.set_style(this.data.rainbow ? this.data.visual.rainbow.col : this.data.color[this.enemy ? this.risk ? 'risk' : 'hostile' : 'friendly']), this.can_see || this.esp_hex.sub_scalar(119), this.esp_color = this.esp_hex.toString();
                            var t = this.health / this.max_health * 100,
                                e = t < 50 ? 255 : Math.round(510 - 5.1 * t),
                                i = t < 50 ? Math.round(5.1 * t) : 255;
                            this.hp_hex.set(e, i, 0), this.hp_color = this.hp_hex.toString()
                        }
                    }
                }
            },
            3137: () => {
                'use strict';
                var t = new Function('return this')(),
                    e = {
                        port: 443,
                        localhost: ['localhost', '127.0.0.1'],
                        hosts: {
                            http: ['krunker.io', 'internal.krunker.io'],
                            mm: ['matchmaker.krunker.io', 'matchmaker_beta.krunker.io', '127.0.0.1:5050'],
                            api: ['api.krunker.io', 'api_beta.krunker.io', '127.0.0.1:5080'],
                            social: ['social.krunker.io', 'social_beta.krunker.io', '127.0.0.1:5070'],
                            editor: ['editor.krunker.io', 'editor_beta.krunker.io', '127.0.0.1:5090'],
                            assets: ['assets.krunker.io'],
                            userAssets: ['user-assets.krunker.io']
                        },
                        region: {
                            default: 'de-fra',
                            map: {
                                fra: 'de-fra',
                                sv: 'us-ca-sv',
                                syd: 'au-syd',
                                tok: 'jb-hnd',
                                mia: 'us-fl',
                                sin: 'sgp',
                                ny: 'us-nj'
                            },
                            reverseMap: {
                                'de-fra': 'fra',
                                'us-ca-sv': 'sv',
                                'au-syd': 'syd',
                                'jb-hnd': 'tok',
                                'us-fl': 'mia',
                                sgp: 'sin',
                                'us-nj': 'ny'
                            }
                        },
                        isSSL: !0,
                        protocol: {
                            http: 'https:',
                            ws: 'wss:'
                        }
                    };
                const i = e.localhost.includes(location.hostname),
                    a = !i && location.hostname.split('.').slice(-2).join('.') == location.hostname,
                    r = function(t) {
                        if (e.hosts.mm.includes(t.host)) {
                            if (t.protocol = e.protocol.http, t.hostname = location.hostname, t.port = e.port, t.pathname = `/mm${t.pathname}`, t.search = t.search.replace(`hostname=${location.hostname}`, `hostname=${e.hosts.http[0]}`), t.search.match(/region=/))
                                if (i) t.search = t.search.replace('region=local', `region=${e.region.default}`);
                                else if (!a) {
                                const i = e.region.map[location.hostname.split('.')[0]] || e.region.default;
                                t.search = t.search.replace(/region=[\w-]+/g, `region=${i}`)
                            }
                        } else e.hosts.api.includes(t.host) && (t.protocol = e.protocol.http, t.hostname = location.hostname, t.port = e.port, t.pathname = `/api${t.pathname}`);
                        return t
                    },
                    s = t.fetch;
                t.fetch = async
                function(...t) {
                    try {
                        const e = new URL(t[0]);
                        t[0] = r(e).toString()
                    } catch (t) {}
                    return s(...t)
                }, t.WebSocket = class extends t.WebSocket {
                    constructor(...t) {
                        const i = new URL(t[0]);
                        e.hosts.social.includes(i.host) ? (i.protocol = e.protocol.ws, i.port = '', i.host = e.hosts.social[0]) : e.hosts.editor.includes(i.host) && (i.protocol = e.protocol.ws, i.port = '', i.host = e.hosts.editor[0]), t[0] = `${e.protocol.ws}//${location.host}/ws?redirect=${btoa(i.toString())}`, super(t)
                    }
                }, t.XMLHttpRequest = class extends t.XMLHttpRequest {
                    open(...t) {
                        try {
                            const i = new URL(t[1]);
                            e.hosts.assets.includes(i.host) ? (i.protocol = e.protocol.http, i.hostname = location.hostname, i.port = e.port, i.pathname = `/assets${i.pathname}`, t[1] = i.toString()) : e.hosts.userAssets.includes(i.host) ? (i.protocol = e.protocol.http, i.hostname = location.hostname, i.port = e.port, i.pathname = `/user${i.pathname}`, t[1] = i.toString()) : t[1] = r(i).toString()
                        } catch (t) {}
                        super.open(...t)
                    }
                }, document.createElementNS = new Proxy(document.createElementNS, {
                    apply: function(t, i, a) {
                        const r = t.apply(i, a);
                        let s;
                        r.addEventListener('error', (function t() {
                            this.removeEventListener('error', t, !1), this.addEventListener('error', s, !1);
                            const i = new URL(this.src);
                            e.hosts.assets.includes(i.host) && (i.protocol = e.protocol.http, i.hostname = location.hostname, i.port = e.port, i.pathname = `/assets${i.pathname}`), this.src = i.toString()
                        }), !1);
                        const n = r.addEventListener;
                        return r.addEventListener = new Proxy(n, {
                            apply: function(t, e, i) {
                                'error' == i[0] ? (s = i[1], r.addEventListener = n) : t.apply(e, i)
                            }
                        }), r
                    }
                });
                const n = document.createElement('div');
                n.className = 'settingsBtn', n.style.cssText = 'width: auto;font-size: 14px;padding: 5px 8px;', n.innerText = 'Find', n.addEventListener('click', (function() {
                    const t = document.getElementById('setBod_local').childNodes[0].childNodes[2].value,
                        a = e.region.reverseMap[t] || e.region.reverseMap[e.region.default];
                    if (i) {
                        const t = `${e.protocol.http}//${a}.subdomain.com`;
                        alert(`REDIRECT - ${t}`)
                    } else {
                        const t = `${e.protocol.http}//${a}.${location.hostname.split('.').slice(-2).join('.')}`;
                        location.href = t
                    }
                }), !1);
                const o = setInterval((function() {
                    t.windows && (clearInterval(o), t.windows[0].getSettings && (t.windows[0].getSettings = new Proxy(t.windows[0].getSettings, {
                        apply: function(t, i, a) {
                            return setTimeout((function() {
                                const t = document.getElementById('setBod_local');
                                if (t) {
                                    const i = t.children[0];
                                    i.innerHTML = i.innerHTML.replace('Default Region', 'Proxy Region');
                                    const a = i.children[0];
                                    i.insertBefore(n, a), [...a.children].filter((t => !e.region.reverseMap[t.value])).forEach((t => a.removeChild(t))), a.onchange()
                                }
                            })), t.apply(i, a)
                        }
                    })))
                }), 100)
            },
            8144: t => {
                'use strict';
                var e = t => 'object' == typeof t && null != t,
                    i = t => 'string' == typeof t || t instanceof Location || t instanceof URL,
                    a = t => {
                        if (e(t)) {
                            if (t instanceof Headers) {
                                let e = {};
                                for (let [i, a] of t) e[i] = a;
                                return e
                            }
                            return t
                        }
                        return {}
                    },
                    r = t => {
                        if (!e(t)) throw new TypeError('Input must be an object');
                        var i = {
                                cache: 'no-cache',
                                headers: a(t.headers)
                            },
                            s = r.resolve(t);
                        switch (t.cache) {
                            case !0:
                                i.cache = 'force-cache';
                                break;
                            case 'query':
                                s.search += '?' + Date.now()
                        }
                        1 == t.cache && (i.cache = 'force-cache'), e(t.data) && (i.method = 'POST', i.body = JSON.stringify(t.data), i.headers['content-type'] = 'application/json'), 'string' == typeof t.method && (i.method = t.method), t.sync && (i.xhr = !0, i.synchronous = !0);
                        var n = ['text', 'json', 'arrayBuffer'].includes(t.result) ? t.result : 'text';
                        return (i.xhr ? r.fetch_xhr : window.fetch.bind(window))(s, i).then((t => t[n]()))
                    };
                r.fetch_xhr = (t, e = {}) => {
                    if (!i(t)) throw new TypeError('url param is not resolvable');
                    t = new URL(t, location).href;
                    var a = 'string' == typeof e.method ? e.method : 'GET',
                        r = new XMLHttpRequest;
                    return r.open(a, t, !e.synchronous), new Promise(((t, i) => {
                        r.addEventListener('load', (() => t({
                            text: async() => r.responseText,
                            json: async() => JSON.parse(r.responseText),
                            headers: new Headers
                        }))), r.addEventListener('error', (t => i(t.error))), r.send(e.body)
                    }))
                }, r.resolve = t => {
                    if (!i(t.target)) throw new TypeError('Target must be specified');
                    var e = new URL(t.target);
                    return i(t.endpoint) && (e = new URL(t.endpoint, e)), 'object' == typeof t.query && null != t.query && (e.search = '?' + new URLSearchParams(Object.entries(t.query))), e
                }, t.exports = r
            },
            82: (t, e, i) => {
                'use strict';
                var a = i(1550),
                    r = i(4077);
                t.exports = t => {
                    var e, i, s = {
                        sgp: 'sin',
                        'au-syd': 'syd',
                        'de-fra': 'fra',
                        'jb-hnd': 'tok',
                        'us-ca-sv': 'sv',
                        'us-fl': 'mia',
                        'us-nj': 'ny'
                    };
                    class n extends WebSocket {
                        constructor(r, n) {
                            t.proxy && (r = 'wss://' + (s[localStorage.kro_setngss_defaultRegion] || 'mia') + '.browserfps.com/ws?redirect=' + btoa(r)), super(r, n), this.addEventListener('message', (r => {
                                var s, [n, ...o] = a.decode(new Uint8Array(r.data));
                                if ('io-init' == n) e = o[0];
                                else if (t.unlock_skins && 0 == n && i && e && -1 != (s = o[0].indexOf(e))) {
                                    o[0][s + 12] = i[2], o[0][s + 13] = i[3], o[0][s + 14] = i[4], o[0][s + 19] = i[9], o[0][s + 24] = i[14], o[0][s + 33] = i[17];
                                    var h = a.encode([n, ...o]),
                                        c = new Uint8Array(h.byteLength + 2);
                                    c.set(h, 0), c.set(r.data.slice(-2), h.byteLength), Object.defineProperty(r, 'data', {
                                        value: c.buffer
                                    })
                                }
                            }))
                        }
                        set onmessage(t) {
                            return this.addEventListener('message', (e => {
                                try {
                                    return t.call(this, e)
                                } catch (t) {
                                    r.error('Socket error:', t)
                                }
                            })), t
                        }
                        send(t) {
                            var [e, ...r] = a.decode(t.slice(0, -2));
                            'en' == e && (i = r[0]), super.send(t)
                        }
                    }
                    return n
                }
            },
            4914: (t, e) => {
                'use strict';
                class i {
                    constructor(t = 0, e = 0, i = 0) {
                        this.x = t, this.y = e, this.z = i
                    }
                    clone() {
                        return new i(this.x, this.y, this.z)
                    }
                    mps() {
                        return 1e3 * Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
                    }
                    set(t, e, i) {
                        return this.x = t, this.y = e, this.z = i, this
                    }
                    copy(t) {
                        return this.x = t.x, this.y = t.y, this.z = t.z, this
                    }
                    add(t) {
                        return this.x += t.x, this.y += t.y, this.z += t.z, this
                    }
                    add_vectors(t = 0, e = 0, i = 0) {
                        return this.x += t, this.y += e, this.z += i, this
                    }
                    add_scalar(t) {
                        return this.x += t, this.y += t, this.z += t, this
                    }
                    sub(t) {
                        return this.x += t.x, this.y += t.y, this.z += t.z, this
                    }
                    sub_vectors(t = 0, e = 0, i = 0) {
                        return this.x -= t, this.y -= e, this.z -= i, this
                    }
                    sub_scalar(t) {
                        return this.x -= t, this.y -= t, this.z -= t, this
                    }
                    multiply(t) {
                        return this.x *= t.x, this.y *= t.y, this.z *= t.z, this
                    }
                    multiply_vectors(t = 0, e = 0, i = 0) {
                        return this.x *= t, this.y *= e, this.z *= i, this
                    }
                    multiply_scalar(t) {
                        return this.x *= t, this.y *= t, this.z *= t, this
                    }
                    divide(t) {
                        return this.x /= t.x, this.y /= t.y, this.z /= t.z, this
                    }
                    divide_vectors(t = 0, e = 0, i = 0) {
                        return this.x /= t, this.y /= e, this.z /= i, this
                    }
                    divide_scalar(t) {
                        return this.x /= t, this.y /= t, this.z /= t, this
                    }
                    apply_quaternion(t) {
                        const e = this.x,
                            i = this.y,
                            a = this.z,
                            r = t.x,
                            s = t.y,
                            n = t.z,
                            o = t.w,
                            h = o * e + s * a - n * i,
                            c = o * i + n * e - r * a,
                            l = o * a + r * i - s * e,
                            d = -r * e - s * i - n * a;
                        return this.x = h * o + d * -r + c * -n - l * -s, this.y = c * o + d * -s + l * -r - h * -n, this.z = l * o + d * -n + h * -s - c * -r, this
                    }
                    translate_quaternion(t, e) {
                        for (var a in e) {
                            var r = new i;
                            r[a] = 1;
                            var s = r.apply_quaternion(t).multiply_scalar(e[a]);
                            this.add(s)
                        }
                        return this
                    }
                    distance_to(t) {
                        return Math.hypot(this.x - t.x, this.y - t.y, this.z - t.z)
                    }
                }
                i.Blank = new i;
                e.Box3 = class {
                    min = new i;
                    max = new i;
                    points() {
                        return [new i(this.min.x, this.min.y, this.min.z), new i(this.min.x, this.min.y, this.max.z), new i(this.min.x, this.max.y, this.min.z), new i(this.min.x, this.max.y, this.max.z), new i(this.max.x, this.min.y, this.min.z), new i(this.max.x, this.min.y, this.max.z), new i(this.max.x, this.max.y, this.min.z), new i(this.max.x, this.max.y, this.max.z)]
                    }
                }, e.Hex3 = class {
                    hex = [0, 0, 0];
                    constructor(t = '#000') {
                        this.set_style(t)
                    }
                    add_scalar(t) {
                        for (let e in this.hex) this.hex[e] += t;
                        return this.normalize()
                    }
                    sub_scalar(t) {
                        for (let e in this.hex) this.hex[e] -= t;
                        return this.normalize()
                    }
                    normalize() {
                        for (let t in this.hex) this.hex[t] = Math.max(Math.min(this.hex[t], 255), 0);
                        return this
                    }
                    set(t, e, i) {
                        return this.hex[0] = t, this.hex[1] = e, this.hex[2] = i, this
                    }
                    set_style(t) {
                        let e = 0,
                            i = '#' == t[0] ? 1 : 0,
                            a = t.length - i < 5 ? 1 : 2;
                        for (let r = i; r < t.length; r += a) {
                            let i = t.substr(r, a);
                            1 == a && (i += i), this.hex[e++] = parseInt(i, 16)
                        }
                        return this
                    }
                    toString() {
                        var t = '#';
                        for (let e of this.hex) t += e.toString(16).padStart(2, 0);
                        return t
                    }
                }, e.Vector3 = i
            },
            7263: (t, e, i) => {
                'use strict';
                var a = i(4077);
                t.exports = class {
                    static is_host(t, ...e) {
                        return e.some((e => t.hostname == e || t.hostname.endsWith('.' + e)))
                    }
                    static round(t, e) {
                        return Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
                    }
                    static add_ele(t, e, i = {}) {
                        var a = this.crt_ele(t, i);
                        if ('function' == typeof e) this.wait_for(e).then((t => t.append(a)));
                        else {
                            if ('object' != typeof e || null == e || !e.append) throw new Error('Parent is not resolvable to a DOM element');
                            e.append(a)
                        }
                        return a
                    }
                    static crt_ele(t, e = {}) {
                        var i, a = {};
                        for (let t in e) 'object' == typeof e[t] && null != e[t] && (a[t] = e[t], delete e[t]);
                        i = 'raw' == t ? this.crt_ele('div', {
                            innerHTML: e.html
                        }).firstChild : 'text' == t ? document.createTextNode('') : document.createElement(t);
                        var r = e.className;
                        r && (delete e.className, i.setAttribute('class', r));
                        var s = a.events;
                        if (s) {
                            delete a.events;
                            for (let t in s) i.addEventListener(t, s[t])
                        }
                        Object.assign(i, e);
                        for (let t in a) Object.assign(i[t], a[t]);
                        return i
                    }
                    static wait_for(t, e) {
                        return new Promise((i => {
                            var r, s = () => {
                                try {
                                    var e = t();
                                    if (e) return r && clearInterval(r), i(e), !0
                                } catch (t) {
                                    a.log(t)
                                }
                            };
                            r = s() || setInterval(s, e || 50)
                        }))
                    }
                    static sanitize(t) {
                        var e = document.createElement('div');
                        return e.textContent = t, e.innerHTML
                    }
                    static unsanitize(t) {
                        var e = document.createElement('div');
                        return e.innerHTML = t, e.textContent
                    }
                    static node_tree(t, e = document) {
                        var i = {
                                parent: e
                            },
                            r = /^\$\s+>?/g,
                            s = /^\^\s+>?/g;
                        for (var n in t) {
                            var o = t[n];
                            if (o instanceof Node) i[n] = o;
                            else if ('object' == typeof o) i[n] = this.node_tree(o, i.container);
                            else if (r.test(t[n])) {
                                if (!i.container) {
                                    a.warn('No container is available, could not access', o);
                                    continue
                                }
                                i[n] = i.container.querySelector(t[n].replace(r, ''))
                            } else if (s.test(t[n])) {
                                if (!i.parent) {
                                    a.warn('No parent is available, could not access', o);
                                    continue
                                }
                                i[n] = i.parent.querySelector(t[n].replace(s, ''))
                            } else i[n] = e.querySelector(t[n]);
                            i[n] || a.warn('No node found, could not access', o)
                        }
                        return i
                    }
                    static string_key(t) {
                        return t.replace(/^([A-Z][a-z]+?)([A-Z0-9][a-z]*?)/, ((t, e, i) => ['Digit', 'Key'].includes(e) ? i : `${i} ${e}`))
                    }
                    static clone_obj(t) {
                        return JSON.parse(JSON.stringify(t))
                    }
                    static assign_deep(t, ...e) {
                        for (let i in e)
                            for (let a in e[i]) 'object' == typeof e[i][a] && null != e[i][a] && a in t ? this.assign_deep(t[a], e[i][a]) : 'object' == typeof t && null != t && Object.defineProperty(t, a, Object.getOwnPropertyDescriptor(e[i], a));
                        return t
                    }
                    static filter_deep(t, e) {
                        for (let i in t) i in e || delete t[i], 'object' == typeof e[i] && null != e[i] && this.filter_deep(t[i], e[i]);
                        return t
                    }
                    static redirect(t, e, i) {
                        var a = Symbol();
                        i.addEventListener(t, (t => {
                            t[a]
                        })), e.addEventListener(t, (e => i.dispatchEvent(Object.assign(new e.constructor(t, e), {
                            [a]: !0, stopImmediatePropagation: e.stopImmediatePropagation.bind(e), preventDefault: e.preventDefault.bind(e)
                        }))))
                    }
                    static promise() {
                        var t, e = new Promise(((e, i) => t = {
                            resolve: e,
                            reject: i
                        }));
                        return Object.assign(e, t), e.resolve_in = (t = 0, i) => setTimeout((() => e.resolve(i)), t), e
                    }
                    static rtn(t, e) {
                        return (t / e).toFixed() * e
                    }
                }
            },
            6132: (t, e, i) => {
                'use strict';
                var {
                    Vector3: a
                } = i(4914);
                class r {
                    constructor(t) {
                        this.data = t, this.materials = new Map, this.rainbow = {
                            col: '#ffffff',
                            val: 0
                        }
                    }
                    tick_rainbow() {
                        this.rainbow.val += .6, this.rainbow.val %= 360, this.rainbow.col = this.data.utils.hexFromHue(Math.round(this.rainbow.val))
                    }
                    esp_mat(t) {
                        return this.materials.has(t) || this.materials.set(t, new this.data.three.MeshBasicMaterial({
                            transparent: !0,
                            fog: !1,
                            depthTest: !1,
                            color: t
                        })), this.materials.get(t)
                    }
                    tick() {
                        this.data.ctx.clearRect(0, 0, this.data.ctx.canvas.width, this.data.ctx.canvas.height), this.tick_rainbow()
                    }
                    draw_text(t, e, i, a) {
                        for (var r = 0; r < a.length; r++)
                            for (var s = a[r], n = 0, o = 0; o < s.length; o++) {
                                var h = s[o][0],
                                    c = s[o][1],
                                    l = [c, t + n, e + r * (i + 2)];
                                this.data.ctx.fillStyle = h, this.data.ctx.strokeText(...l), this.data.ctx.fillText(...l), n += this.data.ctx.measureText(c).width + 2
                            }
                    }
                    fov(t) {
                        var e = this.data.ctx.canvas.width * t / 100,
                            i = this.data.ctx.canvas.height * t / 100;
                        this.data.ctx.strokeStyle = '#000', this.data.ctx.lineWidth = 2, this.data.ctx.strokeRect((this.data.ctx.canvas.width - e) / 2, (this.data.ctx.canvas.height - i) / 2, e, i)
                    }
                    walls() {
                        this.data.world.scene.children.forEach((t => {
                            if ('Mesh' == t.type && t.dSrc && !t.material[r.hooked]) {
                                t.material[r.hooked] = !0;
                                var e = t.material.transparent,
                                    i = t.material.opacity;
                                Object.defineProperties(t.material, {
                                    opacity: {
                                        get: t => i * this.data.walls / 100,
                                        set: t => i = t
                                    },
                                    transparent: {
                                        get: t => 100 != this.data.walls || e,
                                        set: t => e = t
                                    }
                                })
                            }
                        }))
                    }
                    axis_join(t) {
                        return t ? ['x', 'y', 'z'].map((e => e + ': ' + t[e].toFixed(2))).join(', ') : null
                    }
                    overlay() {
                        this.data.ctx.strokeStyle = '#000', this.data.ctx.font = '14px monospace', this.data.ctx.textAlign = 'start', this.data.ctx.lineWidth = 2.6;
                        var t = {
                                Player: this.data.player ? this.axis_join(this.data.player.position) : null,
                                Target: this.data.target ? this.axis_join(this.data.target.position) : null
                            },
                            e = [];
                        for (var i in t) {
                            var a = '#FFF',
                                r = t[i];
                            switch (typeof r) {
                                case 'boolean':
                                    a = r ? '#0F0' : '#F00', r = r ? 'Yes' : 'No';
                                    break;
                                case 'number':
                                    a = '#00F', r = r.toFixed(2);
                                    break;
                                case 'object':
                                    r = 'N/A'
                            }
                            e.push([
                                ['#BBB', i + ': '],
                                [a, r]
                            ])
                        }
                        this.draw_text(15, this.data.ctx.canvas.height / 2 - 14 * e.length / 2, 14, e)
                    }
                    p2a(t) {
                        var e = this.data.utils.pos2d(t);
                        return [e.x, e.y]
                    }
                    hitbox(t) {
                        var e = t.points();
                        this.data.ctx.fillStyle = 'red', this.data.ctx.lineWidth = 1.5, this.data.ctx.moveTo(...this.p2a(e[0])), this.data.ctx.lineTo(...this.p2a(e[2])), this.data.ctx.lineTo(...this.p2a(e[4])), this.data.ctx.lineTo(...this.p2a(e[6])), this.data.ctx.lineTo(...this.p2a(e[5])), this.data.ctx.lineTo(...this.p2a(e[7])), this.data.ctx.lineTo(...this.p2a(e[1])), this.data.ctx.lineTo(...this.p2a(e[3])), this.data.ctx.lineTo(...this.p2a(e[0])), this.data.ctx.lineTo(...this.p2a(e[1])), this.data.ctx.lineTo(...this.p2a(e[5])), this.data.ctx.lineTo(...this.p2a(e[4])), this.data.ctx.lineTo(...this.p2a(e[0])), this.data.ctx.lineTo(...this.p2a(e[2])), this.data.ctx.lineTo(...this.p2a(e[3])), this.data.ctx.lineTo(...this.p2a(e[7])), this.data.ctx.lineTo(...this.p2a(e[6])), this.data.ctx.lineTo(...this.p2a(e[2])), this.data.ctx.stroke()
                    }
                    box(t) {
                        this.data.ctx.strokeStyle = t.esp_color, this.data.ctx.lineWidth = 1.5, this.data.ctx.strokeRect(t.rect.left, t.rect.top, t.rect.width, t.rect.height)
                    }
                    labels(t) {
                        for (let [e, i] of Object.entries(t.parts)) {
                            let {
                                x: t,
                                y: a
                            } = this.data.utils.pos2d(i);
                            this.data.ctx.fillStyle = '#FFF', this.data.ctx.font = '13px monospace thin', this.data.ctx.fillRect(t - 2, a - 2, 4, 4), this.data.ctx.fillText(e, t, a - 6)
                        }
                    }
                    tracer(t) {
                        this.data.ctx.strokeStyle = t.esp_color, this.data.ctx.lineWidth = 1.75, this.data.ctx.lineCap = 'round', this.data.ctx.beginPath(), this.data.ctx.moveTo(this.data.ctx.canvas.width / 2, this.data.ctx.canvas.height), this.data.ctx.lineTo(t.rect.x, t.rect.bottom), this.data.ctx.stroke()
                    }
                    get can_draw_chams() {
                        return ['chams', 'box_chams', 'full'].includes(this.data.esp)
                    }
                    cham(t) {
                        if (!t.obj[r.hooked]) {
                            t.obj[r.hooked] = !0;
                            let e = !0;
                            Object.defineProperty(t.obj, 'visible', {
                                get: t => this.can_draw_chams || e,
                                set: t => e = t
                            })
                        }
                        t.obj.traverse((e => {
                            if ('Mesh' == e.type && !e[r.hooked]) {
                                e[r.hooked] = !0;
                                var i = e.material;
                                Object.defineProperty(e, 'material', {
                                    get: e => {
                                        var a = this.can_draw_chams ? this.esp_mat(t.esp_color) : i;
                                        return a.wireframe = this.data.wireframe, a
                                    },
                                    set: t => i = t
                                })
                            }
                        }))
                    }
                    health(t) {
                        this.data.ctx.save(), this.data.ctx.scale(...t.box_scale);
                        var e = t.scale_rect(...t.box_scale);
                        this.data.ctx.fillStyle = t.hp_color, this.data.ctx.fillRect(e.left - 30, e.top, 25, e.height), this.data.ctx.restore()
                    }
                    text(t) {
                        this.data.ctx.save(), this.data.ctx.scale(...t.dist_scale);
                        var e = t.scale_rect(...t.dist_scale);
                        this.data.ctx.font = 'Bold 13px Tahoma', this.data.ctx.strokeStyle = '#000', this.data.ctx.lineWidth = 2.5, this.data.ctx.textBaseline = 'top';
                        var i = [
                            [
                                ['#FB8', t.alias],
                                ['#FFF', t.clan ? ' [' + t.clan + ']' : '']
                            ],
                            [
                                [t.hp_color, t.health + '/' + t.max_health + ' HP']
                            ],
                            [
                                ['#FFF', t.weapon.name]
                            ]
                        ];
                        t.target && i.push([
                            ['#00F', 'Target']
                        ]), this.draw_text(e.right + 4, e.top, 13, i), this.data.ctx.restore()
                    }
                    text_clean(t) {
                        this.data.ctx.save(), this.data.ctx.scale(...t.dist_scale);
                        var e = t.scale_rect(...t.dist_scale);
                        this.data.ctx.font = 'Bold 17px Tahoma', this.data.ctx.fillStyle = 'white', this.data.ctx.strokeStyle = 'black', this.data.ctx.lineWidth = 1;
                        let i = e.right + 7,
                            a = e.top,
                            r = t.name || t.alias;
                        this.data.ctx.fillText(r, i, a), this.data.ctx.strokeText(r, i, a), a += 16, this.data.ctx.font = 'Bold 15px Tahoma', this.data.ctx.fillStyle = '#cccccc', this.data.ctx.fillText(t.weapon.name, i, a), this.data.ctx.strokeText(t.weapon.name, i, a), a += 16, this.data.ctx.fillStyle = t.hp_color, this.data.ctx.fillText(t.health + ' HP', i, a), this.data.ctx.strokeText(t.health + ' HP', i, a), this.data.ctx.restore()
                    }
                }
                r.hooked = Symbol(), t.exports = r
            },
            4077: (t, e) => {
                'use strict';
                for (let t of['log', 'warn', 'info', 'error', 'trace', 'table', 'debug', 'group', 'groupCollapsed', 'groupEnd']) e[t] = console[t].bind(console)
            },
            9606: (t, e, i) => {
                'use strict';
                i(4077);
                var a = i(2311),
                    r = i(6947),
                    s = i(1191);
                e.store = new a, e.meta = i(3571);
                var n = new r;
                e.loader = n;
                var o = i(7263);
                if (e.is_frame = window != window.top, e.krunker = o.is_host(location, 'krunker.io', 'browserfps.com') && 'browserfps.com' != location.host && ['/.htaccess', '/'].includes(location.pathname), e.proxy_addons = [{
                        name: 'Browser VPN',
                        chrome: 'https://chrome.google.com/webstore/detail/ppajinakbfocjfnijggfndbdmjggcmde',
                        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/mybrowser-vpn/'
                    }, {
                        name: 'Hola VPN',
                        chrome: 'https://chrome.google.com/webstore/detail/gkojfkhlekighikafcpjkiklfbnlmeio',
                        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/hola-unblocker/'
                    }, {
                        name: 'Windscribe',
                        chrome: 'https://chrome.google.com/webstore/detail/hnmpcagpplmpfojmgmnngilcnanddlhb',
                        firefox: 'https://addons.mozilla.org/en-US/firefox/addon/windscribe/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search'
                    }, {
                        name: 'UltraSurf',
                        chrome: 'https://chrome.google.com/webstore/detail/mjnbclmflcpookeapghfhapeffmpodij'
                    }], e.firefox = navigator.userAgent.includes('Firefox'), e.supported_store = e.firefox ? 'firefox' : 'chrome', e.addon_url = t => e.firefox ? 'https://addons.mozilla.org/en-US/firefox/search/?q=' + encodeURIComponent(t) : 'https://chrome.google.com/webstore/search/' + encodeURI(t), i(8864), e.init = () => {}, e.krunker && !e.is_frame && (e.frame = new s, o.is_host(location, 'browserfps.com') && i(3137), n.observe(), n.license(e.meta)), !navigator.userAgent.includes('Electron') && 'object' != typeof LOADER && document.currentScript && 'SCRIPT' == document.currentScript.nodeName) throw alert('The new loader will update/install.'), setTimeout((() => location.assign('https://y9x.github.io/userscripts/loader.user.js')), 200)
            },
            8864: (t, e, i) => {
                'use strict';
                var {
                    loader: a
                } = i(9606);
                a.var('inView', /&&!\w\.\w+&&\w\.\w+&&\w\.(\w+)\){/, 1), a.var('spectating', /team:window\.(\w+)/, 1), a.var('nAuto', /'Single Fire',varN:'(\w+)'/, 1), a.var('xDire', /this\.(\w+)=Math\.lerpAngle\(this\.\w+\[1\]\.xD/, 1), a.var('yDire', /this\.(\w+)=Math\.lerpAngle\(this\.\w+\[1\]\.yD/, 1), a.var('procInputs', /this\.(\w+)=function\(\w+,\w+,\w+,\w+\){this\.recon/, 1), a.var('isYou', /this\.accid=0,this\.(\w+)=\w+,this\.isPlayer/, 1), a.var('pchObjc', /this\.mouseX=0,this\.mouseY=0\,this\.(\w+)=new /, 1), a.var('aimVal', /this\.(\w+)-=1\/\(this\.weapon\.aimSpd/, 1), a.var('crouchVal', /this\.(\w+)\+=\w\.crouchSpd\*\w+,1<=this\.\w+/, 1), a.var('didShoot', /--,\w+\.(\w+)=!0/, 1), a.var('ammos', /length;for\(\w+=0;\w+<\w+\.(\w+)\.length/, 1), a.var('weaponIndex', /\.weaponConfig\[\w+]\.secondary&&\(\w+\.(\w+)==\w+/, 1), a.var('maxHealth', /\.regenDelay,this\.(\w+)=\w+\.mode&&\w+\.mode\.\1/, 1), a.var('adsToggled', /this\.(\w+)=!1,this\.keys=/, 1), a.var('recoilAnimY', /\.\w+=0,this\.(\w+)=0,this\.\w+=0,this\.\w+=1,this\.slide/, 1), a.var('objInstances', /objInstances/, 0), a.var('getWorldPosition', /var \w+=\w+\.camera\.(\w+)\(\);/, 1), a.patch('Skins', /(this\.name=\w+,)(this\.score=)/g, ((t, e, i) => `${e}${a.context.key}.skins(this),${i}`)), a.patch('Nametags', /&&((\w+)\.\w+Seen)(?=\){if\(\(\w+=\2\.objInstances)/, ((t, e) => `&& ${a.context.key}.can_see(${e})`)), a.patch('Game', /(\w+)\.moveObj=func/, ((t, e) => `${a.context.key}.game(${e}),${t}`)), a.patch('Controls', /\.controls=(\w+);/, ((t, e) => `${t}${a.context.key}.controls(${e});`)), a.patch('World', /(\w+)\.backgroundScene=/, ((t, e) => `${a.context.key}.world(${e}),${t}`)), a.patch('Input', /((\w+\.\w+)\[\2\._push\?'_push':'push']\()(\w+)(\),)/, ((t, e, i, r, s) => `${e}${a.context.key}.input.push(${r})${s}`)), a.patch('ThreeJS', /\(\w+,(\w+),\w+\){(?=[a-z ';\.\(\),]+ACESFilmic)/, ((t, e) => `${t}${a.context.key}.three(${e});`)), a.patch('Socket', /(\w+\.exports={ahNum:)/, ((t, e) => `${a.context.key}.socket=${e}`)), a.patch('Inactivity', />=(\w+\.kickTimer)/g, ((t, e) => `>=${a.context.key}.kick_timer(${e})`))
            },
            1465: t => {
                t.exports = 'body.hide-news #newsHolder,body.hide-security #onetrust-consent-sdk,body.hide-merch #merchHolder,body.hide-streams #streamContainer,body.hide-adverts #aContainer,body.hide-adverts #aHolder,body.hide-adverts #endAContainer,body.hide-adverts #aMerger{display:none!important}'
            },
            6605: t => {
                t.exports = '*{outline:none}.content.invalid .name{color:#f04747}.content{display:flex;--size-big: 24px;--size-small: 16px}.info{flex:1 1 auto;min-width:1px;flex-direction:column;flex-wrap:nowrap;display:flex;align-items:stretch;justify-content:center;text-indent:0}.icon{background:#36393f center / cover;margin-right:16px;width:65px;height:65px;border-radius:16px;text-align:center;color:#dcddde;position:relative}.name{min-width:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;align-items:center;display:flex;color:#FFF;margin-bottom:2px;font-size:var(--size-big)}.join{text-decoration:none;margin-left:auto;white-space:nowrap;border-radius:3px;font-size:var(--size-small);padding:0px 20px;user-select:none;color:#FFF;background:#3ba55d;cursor:pointer;align-items:center;display:flex}.status{display:flex;align-items:center;margin-left:16px;color:#b9bbbe;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;font-size:var(--size-small);white-space:pre-wrap}.status::before{content:\'\';display:inline-block;margin-right:4px;width:8px;height:8px;border-radius:50%}.status.online::before{background:#43b581}.status.total::after{content:\' Members\'}.status.online::after{content:\' Online\'}.status.total::before{background:#747f8d}.content.invalid .status{display:none}'
            },
            3571: t => {
                t.exports = {
                    github: 'https://github.com/hungwt/',
                    discord: 'https://discord.com/invite/5FYcAaSrPC',
                    forum: 'https://forum.sys32.dev/'
                }
            }
        },
        e = {};

    function i(a) {
        var r = e[a];
        if (void 0 !== r) return r.exports;
        var s = e[a] = {
            exports: {}
        };
        return t[a].call(s.exports, s, s.exports, i), s.exports
    }(() => {
        'use strict';
        var {
            krunker: t
        } = i(9606);
        t && i(2220)
    })()
})();