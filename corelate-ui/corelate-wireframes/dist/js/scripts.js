/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a);
    } : b(a);
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.4", n = function(a, b) {
        return new n.fn.init(a, b);
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function(a, b) {
        return b.toUpperCase();
    };
    n.fn = n.prototype = {
        jquery: m,
        constructor: n,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this);
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this);
        },
        pushStack: function(a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return n.each(this, a, b);
        },
        map: function(a) {
            return this.pushStack(n.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, n.extend = n.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), 
        h === i && (g = this, h--); i > h; h++) if (null != (a = arguments[h])) for (b in a) c = g[b], 
        d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, 
        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g;
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a);
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === n.type(a);
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window;
        },
        isNumeric: function(a) {
            return !n.isArray(a) && a - parseFloat(a) + 1 >= 0;
        },
        isPlainObject: function(a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0;
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a;
        },
        globalEval: function(a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), 
            b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a));
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (;f > e; e++) if (d = b.apply(a[e], c), d === !1) break;
                } else for (e in a) if (d = b.apply(a[e], c), d === !1) break;
            } else if (g) {
                for (;f > e; e++) if (d = b.call(a[e], e, a[e]), d === !1) break;
            } else for (e in a) if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a;
        },
        trim: function(a) {
            return null == a ? "" : (a + "").replace(o, "");
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [ a ] : a) : f.call(c, a)), 
            c;
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c);
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e;
        },
        map: function(a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h) for (;g > f; f++) d = b(a[f], f, c), null != d && i.push(d); else for (f in a) d = b(a[f], f, c), 
            null != d && i.push(d);
            return e.apply([], i);
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), 
            f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)));
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0;
        },
        now: Date.now,
        support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase();
    });
    function s(a) {
        var b = "length" in a && a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date(), v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function(a, b) {
            return a === b && (l = !0), 0;
        }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
        }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
        }, ea = function() {
            m();
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType;
        } catch (fa) {
            H = {
                apply: E.length ? function(a, b) {
                    G.apply(a, I.call(b));
                } : function(a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]) ;
                    a.length = c - 1;
                }
            };
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, 
            "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k) return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a))) if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode) return d;
                        if (h.id === j) return d.push(h), d;
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), 
                    d;
                } else {
                    if (f[2]) return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName) return H.apply(d, b.getElementsByClassName(j)), 
                    d;
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), 
                        s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",");
                    }
                    if (x) try {
                        return H.apply(d, w.querySelectorAll(x)), d;
                    } catch (y) {} finally {
                        r || b.removeAttribute("id");
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e);
        }
        function ha() {
            var a = [];
            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
            }
            return b;
        }
        function ia(a) {
            return a[u] = !0, a;
        }
        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--) d.attrHandle[c[e]] = b;
        }
        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d) return d;
            if (c) while (c = c.nextSibling) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function ma(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function na(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function oa(a) {
            return ia(function(b) {
                return b = +b, ia(function(c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a;
        }
        c = ga.support = {}, f = ga.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, m = ga.setDocument = function(a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, 
            e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), 
            p = !f(g), c.attributes = ja(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), c.getElementsByTagName = ja(function(a) {
                return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length;
            }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function(a) {
                return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length;
            }), c.getById ? (d.find.ID = function(a, b) {
                if ("undefined" != typeof b.getElementById && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ca, da);
                return function(a) {
                    var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return p ? b.getElementsByClassName(a) : void 0;
            }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function(a) {
                o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", 
                a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), 
                a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), 
                a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), 
                a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
            }), ja(function(a) {
                var b = g.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), 
                a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                q.push(",.*:");
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function(a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P);
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), 
            b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) while (b = b.parentNode) if (b === a) return !0;
                return !1;
            }, B = b ? function(a, b) {
                if (a === b) return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 
                1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1);
            } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0, e = a.parentNode, f = b.parentNode, h = [ a ], i = [ b ];
                if (!e || !f) return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                if (e === f) return la(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0;
            }, g) : n;
        }, ga.matches = function(a, b) {
            return ga(a, null, null, b);
        }, ga.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return ga(b, n, null, [ a ]).length > 0;
        }, ga.contains = function(a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b);
        }, ga.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
        }, ga.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a);
        }, ga.uniqueSort = function(a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1);
            }
            return k = null, a;
        }, e = ga.getText = function(a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a);
                } else if (3 === f || 4 === f) return a.nodeValue;
            } else while (b = a[d++]) c += e(b);
            return c;
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), 
                    a[2] = c.slice(0, b)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p]) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], 
                                l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ w, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop()) if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [ w, m ]), 
                            l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [ a, a, "", b ], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function(a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--) d = J(a, f[g]), a[d] = !(c[d] = f[g]);
                    }) : function(a) {
                        return e(a, 0, c);
                    }) : e;
                }
            },
            pseudos: {
                not: ia(function(a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function(a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
                    };
                }),
                has: ia(function(a) {
                    return function(b) {
                        return ga(a, b).length > 0;
                    };
                }),
                contains: ia(function(a) {
                    return a = a.replace(ca, da), function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
                    };
                }),
                lang: ia(function(a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === o;
                },
                focus: function(a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !d.pseudos.empty(a);
                },
                header: function(a) {
                    return Z.test(a.nodeName);
                },
                input: function(a) {
                    return Y.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
                },
                first: oa(function() {
                    return [ 0 ];
                }),
                last: oa(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: oa(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: oa(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: oa(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: oa(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b; ) a.push(d);
                    return a;
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) d.pseudos[b] = ma(b);
        for (b in {
            submit: !0,
            reset: !0
        }) d.pseudos[b] = na(b);
        function qa() {}
        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa(), g = ga.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), 
                f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break;
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d]) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j = [ w, f ];
                if (g) {
                    while (b = b[d]) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else while (b = b[d]) if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g)) return !0;
                }
            };
        }
        function ta(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) ga(a, b[d], c);
            return c;
        }
        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function(f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [ h ] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--) (l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--) (l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i);
                        }
                        k = r.length;
                        while (k--) (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r);
            });
        }
        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function(a) {
                return a === b;
            }, h, !0), l = sa(function(a) {
                return J(b, a) > -1;
            }, h, !0), m = [ function(a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e;
            } ]; f > i; i++) if (c = d.relative[a[i].type]) m = [ sa(ta(m), c) ]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++) if (d.relative[a[e].type]) break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({
                        value: " " === a[i - 2].type ? "*" : ""
                    })).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a));
                }
                m.push(c);
            }
            return ta(m);
        }
        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function(f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++]) if (o(l, g, h)) {
                            i.push(l);
                            break;
                        }
                        k && (w = v);
                    }
                    c && ((l = !o && l) && p--, f && r.push(l));
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++]) o(r, s, g, h);
                    if (f) {
                        if (p > 0) while (q--) r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s);
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i);
                }
                return k && (w = v, j = t), r;
            };
            return c ? ia(f) : f;
        }
        return h = ga.compile = function(a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a;
            }
            return f;
        }, i = ga.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length);
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type]) break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a) return H.apply(e, f), e;
                        break;
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e;
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, 
        m(), c.sortDetached = ja(function(a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"));
        }), ja(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || ka("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
        }), c.attributes && ja(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || ka("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
        }), ja(function(a) {
            return null == a.getAttribute("disabled");
        }) || ka(K, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
        }), ga;
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, 
    n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;
    function x(a, b, c) {
        if (n.isFunction(b)) return n.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return n.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (w.test(b)) return n.filter(b, a, c);
            b = n.filter(b, a);
        }
        return n.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c;
        });
    }
    n.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [ d ] : [] : n.find.matches(a, n.grep(b, function(a) {
            return 1 === a.nodeType;
        }));
    }, n.fn.extend({
        find: function(a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a) return this.pushStack(n(a).filter(function() {
                for (b = 0; c > b; b++) if (n.contains(e[b], this)) return !0;
            }));
            for (b = 0; c > b; b++) n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, 
            d;
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1));
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0));
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length;
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
        var c, d;
        if (!a) return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [ null, a, null ] : z.exec(a), 
            !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), 
                v.test(c[1]) && n.isPlainObject(b)) for (c in b) n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this;
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), 
            this.context = l, this.selector = a, this;
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, 
        this.context = a.context), n.makeArray(a, this));
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    n.extend({
        dir: function(a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType) if (1 === a.nodeType) {
                if (e && n(a).is(c)) break;
                d.push(a);
            }
            return d;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    }), n.fn.extend({
        has: function(a) {
            var b = n(a, this), c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++) if (n.contains(this, b[a])) return !0;
            });
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType) ;
        return a;
    }
    n.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return n.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return n.dir(a, "parentNode", c);
        },
        next: function(a) {
            return D(a, "nextSibling");
        },
        prev: function(a) {
            return D(a, "previousSibling");
        },
        nextAll: function(a) {
            return n.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return n.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return n.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return n.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return n.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return n.sibling(a.firstChild);
        },
        contents: function(a) {
            return a.contentDocument || n.merge([], a.childNodes);
        }
    }, function(a, b) {
        n.fn[a] = function(c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), 
            this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e);
        };
    });
    var E = /\S+/g, F = {};
    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    n.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++) if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break;
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable());
        }, k = {
            add: function() {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function(b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c);
                        });
                    }(arguments), d ? f = h.length : b && (e = c, j(b));
                }
                return this;
            },
            remove: function() {
                return h && n.each(arguments, function(a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--);
                }), this;
            },
            has: function(a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length);
            },
            empty: function() {
                return h = [], f = 0, this;
            },
            disable: function() {
                return h = i = b = void 0, this;
            },
            disabled: function() {
                return !h;
            },
            lock: function() {
                return i = void 0, b || k.disable(), this;
            },
            locked: function() {
                return !i;
            },
            fireWith: function(a, b) {
                return !h || c && !i || (b = b || [], b = [ a, b.slice ? b.slice() : b ], d ? i.push(b) : j(b)), 
                this;
            },
            fire: function() {
                return k.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!c;
            }
        };
        return k;
    }, n.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", n.Callbacks("once memory"), "resolved" ], [ "reject", "fail", n.Callbacks("once memory"), "rejected" ], [ "notify", "progress", n.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return n.Deferred(function(c) {
                        n.each(b, function(b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? n.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                return function(e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c);
                };
            }, i, j, k;
            if (e > 1) for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise();
        }
    });
    var H;
    n.fn.ready = function(a) {
        return n.ready.promise().done(a), this;
    }, n.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? n.readyWait++ : n.ready(!0);
        },
        ready: function(a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [ n ]), 
            n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))));
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), 
        n.ready();
    }
    n.ready.promise = function(b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), 
        a.addEventListener("load", I, !1))), H.promise(b);
    }, n.ready.promise();
    var J = n.access = function(a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c) n.access(a, b, h, c[h], !0, f, g);
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), 
        b = null) : (j = b, b = function(a, b, c) {
            return j.call(n(a), c);
        })), b)) for (;i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
    };
    n.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {};
            }
        }), this.expando = n.expando + K.uid++;
    }
    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b);
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b);
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c;
        },
        set: function(a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b) f[b] = c; else if (n.isEmptyObject(f)) n.extend(this.cache[e], b); else for (d in b) f[d] = b[d];
            return f;
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b];
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), 
            void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b);
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b) this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [ b, e ] : (d = e, 
                d = d in g ? [ d ] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]];
            }
        },
        hasData: function(a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {});
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]];
        }
    };
    var L = new K(), M = new K(), N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;
    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(O, "-$1").toLowerCase(), 
        c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c;
            } catch (e) {}
            M.set(a, b, c);
        } else c = void 0;
        return c;
    }
    n.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a);
        },
        data: function(a, b, c) {
            return M.access(a, b, c);
        },
        removeData: function(a, b) {
            M.remove(a, b);
        },
        _data: function(a, b, c) {
            return L.access(a, b, c);
        },
        _removeData: function(a, b) {
            L.remove(a, b);
        }
    }), n.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), 
                    P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0);
                }
                return e;
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a);
            }) : J(this, function(b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c;
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b);
                });
            }, null, b, arguments.length > 1, null, !0);
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a);
            });
        }
    }), n.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), 
            d || []) : void 0;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function() {
                n.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: n.Callbacks("once memory").add(function() {
                    L.remove(a, [ b + "queue", c ]);
                })
            });
        }
    }), n.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                n.dequeue(this, a);
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                --d || e.resolveWith(f, [ f ]);
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b);
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = [ "Top", "Right", "Bottom", "Left" ], S = function(a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a);
    }, T = /^(?:checkbox|radio)$/i;
    !function() {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), 
        b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;
    function Z() {
        return !0;
    }
    function $() {
        return !1;
    }
    function _() {
        try {
            return l.activeElement;
        } catch (a) {}
    }
    n.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), 
                (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0;
                }), b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, 
                l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), 
                l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), 
                n.event.global[o] = !0);
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [ "" ], j = b.length;
                while (j--) if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), 
                o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], 
                    h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), 
                    k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), 
                    delete i[o]);
                } else for (o in i) n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"));
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, m, o, p = [ d || l ], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), 
            q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), 
            b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            b.result = void 0, b.target || (b.target = d), c = null == c ? [ b ] : n.makeArray(c, [ b ]), 
            o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), 
                    h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a);
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : o.bindType || q, 
                m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), 
                m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], 
                h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), 
                b.result;
            }
        },
        dispatch: function(a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped()) (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, 
                    a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), 
                    void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()));
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type)) for (;i !== this; i = i.parentNode || this) if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [ i ]).length), 
                d[e] && d.push(f);
                d.length && g.push({
                    elem: i,
                    handlers: d
                });
            }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, 
                d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), 
                a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), 
                a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a;
            }
        },
        fix: function(a) {
            if (a[n.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            g.filter ? g.filter(a, f) : a;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), 
                    !1) : void 0;
                },
                _default: function(a) {
                    return n.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = n.extend(new n.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, n.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    }, n.Event = function(a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, 
        b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void (this[n.expando] = !0)) : new n.Event(a, b);
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault();
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(a, b) {
        n.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), k.focusinBubbles || n.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0);
        };
        n.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1);
            },
            teardown: function() {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b));
            }
        };
    }), n.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this;
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, 
            c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $; else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return n().off(a), f.apply(this, arguments);
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function() {
                n.event.add(this, a, d, c, b);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), 
            this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this;
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), 
            this.each(function() {
                n.event.remove(this, a, c, b);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                n.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0;
        }
    });
    var aa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = /<([\w:]+)/, ca = /<|&#?\w+;/, da = /<(?:script|style|link)/i, ea = /checked\s*(?:[^=]|=\s*.checked.)/i, fa = /^$|\/(?:java|ecma)script/i, ga = /^true\/(.*)/, ha = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ia = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    ia.optgroup = ia.option, ia.tbody = ia.tfoot = ia.colgroup = ia.caption = ia.thead, 
    ia.th = ia.td;
    function ja(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function ka(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
    }
    function la(a) {
        var b = ga.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function ma(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"));
    }
    function na(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j) for (c = 0, d = j[e].length; d > c; c++) n.event.add(b, e, j[e][c]);
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i));
        }
    }
    function oa(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([ a ], c) : c;
    }
    function pa(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
    }
    n.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a))) for (g = oa(h), 
            f = oa(a), d = 0, e = f.length; e > d; d++) pa(f[d], g[d]);
            if (b) if (c) for (f = f || oa(a), g = g || oa(h), d = 0, e = f.length; e > d; d++) na(f[d], g[d]); else na(a, h);
            return g = oa(h, "script"), g.length > 0 && ma(g, !i && oa(a, "script")), h;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++) if (e = a[m], 
            e || 0 === e) if ("object" === n.type(e)) n.merge(l, e.nodeType ? [ e ] : e); else if (ca.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (ba.exec(e) || [ "", "" ])[1].toLowerCase(), 
                h = ia[g] || ia._default, f.innerHTML = h[1] + e.replace(aa, "<$1></$2>") + h[2], 
                j = h[0];
                while (j--) f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = "";
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++]) if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), 
            f = oa(k.appendChild(e), "script"), i && ma(f), c)) {
                j = 0;
                while (e = f[j++]) fa.test(e.type || "") && c.push(e);
            }
            return k;
        },
        cleanData: function(a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events) for (d in b.events) f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e];
                }
                delete M.cache[c[M.expando]];
            }
        }
    }), n.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? n.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a);
                });
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = ja(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || n.cleanData(oa(c)), 
            c.parentNode && (b && n.contains(c.ownerDocument, c) && ma(oa(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (n.cleanData(oa(a, !1)), 
            a.textContent = "");
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return n.clone(this, a, b);
            });
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !da.test(a) && !ia[(ba.exec(a) || [ "", "" ])[1].toLowerCase()]) {
                    a = a.replace(aa, "<$1></$2>");
                    try {
                        for (;d > c; c++) b = this[c] || {}, 1 === b.nodeType && (n.cleanData(oa(b, !1)), 
                        b.innerHTML = a);
                        b = 0;
                    } catch (e) {}
                }
                b && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, n.cleanData(oa(this)), a && a.replaceChild(b, this);
            }), a && (a.length || a.nodeType) ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && ea.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b);
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 
            1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(oa(c, "script"), ka), g = f.length; l > j; j++) h = c, j !== o && (h = n.clone(h, !0, !0), 
                g && n.merge(f, oa(h, "script"))), b.call(this[j], h, j);
                if (g) for (i = f[f.length - 1].ownerDocument, n.map(f, la), j = 0; g > j; j++) h = f[j], 
                fa.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(ha, "")));
            }
            return this;
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        n.fn[a] = function(a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), 
            n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d);
        };
    });
    var qa, ra = {};
    function sa(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f;
    }
    function ta(a) {
        var b = l, c = ra[a];
        return c || (c = sa(a, b), "none" !== c && c || (qa = (qa || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), 
        b = qa[0].contentDocument, b.write(), b.close(), c = sa(a, b), qa.detach()), ra[a] = c), 
        c;
    }
    var ua = /^margin/, va = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wa = function(b) {
        return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null);
    };
    function xa(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wa(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), 
        va.test(g) && ua.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, 
        g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
    }
    function ya(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments);
            }
        };
    }
    !function() {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", 
            k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", 
            e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", 
                f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e);
            }
            a.getComputedStyle && n.extend(k, {
                pixelPosition: function() {
                    return g(), b;
                },
                boxSizingReliable: function() {
                    return null == c && g(), c;
                },
                reliableMarginRight: function() {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), 
                    b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), f.removeChild(c), 
                    b;
                }
            });
        }
    }(), n.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e;
    };
    var za = /^(none|table(?!-c[ea]).+)/, Aa = new RegExp("^(" + Q + ")(.*)$", "i"), Ba = new RegExp("^([+-])=(" + Q + ")", "i"), Ca = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Da = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Ea = [ "Webkit", "O", "Moz", "ms" ];
    function Fa(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Ea.length;
        while (e--) if (b = Ea[e] + c, b in a) return b;
        return d;
    }
    function Ga(a, b, c) {
        var d = Aa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function Ha(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += n.css(a, c + R[f], !0, e)), 
        d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), 
        "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g;
    }
    function Ia(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wa(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xa(a, b, f), (0 > e || null == e) && (e = a.style[b]), va.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + Ha(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function Ja(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", ta(d.nodeName)))) : (e = S(d), 
        "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    n.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xa(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fa(i, h)), g = n.cssHooks[b] || n.cssHooks[h], 
                void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, 
                "string" === f && (e = Ba.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), 
                f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), 
                k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), 
                g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fa(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], 
            g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xa(a, b, d)), "normal" === e && b in Da && (e = Da[b]), 
            "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e;
        }
    }), n.each([ "height", "width" ], function(a, b) {
        n.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? za.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Ca, function() {
                    return Ia(a, b, d);
                }) : Ia(a, b, d) : void 0;
            },
            set: function(a, c, d) {
                var e = d && wa(a);
                return Ga(a, c, d ? Ha(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), n.cssHooks.marginRight = ya(k.reliableMarginRight, function(a, b) {
        return b ? n.swap(a, {
            display: "inline-block"
        }, xa, [ a, "marginRight" ]) : void 0;
    }), n.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        n.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, ua.test(a) || (n.cssHooks[a + b].set = Ga);
    }), n.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wa(a), e = b.length; e > g; g++) f[b[g]] = n.css(a, b[g], !1, d);
                    return f;
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b);
            }, a, b, arguments.length > 1);
        },
        show: function() {
            return Ja(this, !0);
        },
        hide: function() {
            return Ja(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? n(this).show() : n(this).hide();
            });
        }
    });
    function Ka(a, b, c, d, e) {
        return new Ka.prototype.init(a, b, c, d, e);
    }
    n.Tween = Ka, Ka.prototype = {
        constructor: Ka,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = Ka.propHooks[this.prop];
            return a && a.get ? a.get(this) : Ka.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = Ka.propHooks[this.prop];
            return this.options.duration ? this.pos = b = n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : Ka.propHooks._default.set(this), this;
        }
    }, Ka.prototype.init.prototype = Ka.prototype, Ka.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, Ka.propHooks.scrollTop = Ka.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, n.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, n.fx = Ka.prototype.init, n.fx.step = {};
    var La, Ma, Na = /^(?:toggle|show|hide)$/, Oa = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pa = /queueHooks$/, Qa = [ Va ], Ra = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Oa.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Oa.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    function Sa() {
        return setTimeout(function() {
            La = void 0;
        }), La = n.now();
    }
    function Ta(a, b) {
        var c, d = 0, e = {
            height: a
        };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e;
    }
    function Ua(a, b, c) {
        for (var d, e = (Ra[b] || []).concat(Ra["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function Va(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, 
        h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, l.always(function() {
            l.always(function() {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ o.overflow, o.overflowX, o.overflowY ], 
        j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || ta(a.nodeName) : j, 
        "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), 
        c.overflow && (o.overflow = "hidden", l.always(function() {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], Na.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d]) continue;
                p = !0;
            }
            m[d] = q && q[d] || n.style(a, d);
        } else j = void 0;
        if (n.isEmptyObject(m)) "inline" === ("none" === j ? ta(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), 
            p ? n(a).show() : l.done(function() {
                n(a).hide();
            }), l.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in m) n.style(a, b, m[b]);
            });
            for (d in m) g = Ua(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function Wa(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Xa(a, b, c) {
        var d, e, f = 0, g = Qa.length, h = n.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = La || Sa(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: La || Sa(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (Wa(k, j.opts.specialEasing); g > f; f++) if (d = Qa[f].call(j, a, k, j.opts)) return d;
        return n.map(k, Ua, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    n.Animation = n.extend(Xa, {
        tweener: function(a, b) {
            n.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Ra[c] = Ra[c] || [], Ra[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? Qa.unshift(a) : Qa.push(a);
        }
    }), n.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue);
        }, d;
    }, n.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function() {
                var b = Xa(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, b, c) {
            var d = function(a) {
                var b = a.stop;
                delete a.stop, b(c);
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g) g[e] && g[e].stop && Pa.test(e) && d(g[e]);
                for (e = f.length; e--; ) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), 
                b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), n.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = n.fn[b];
        n.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Ta(b, !0), a, d, e);
        };
    }), n.each({
        slideDown: Ta("show"),
        slideUp: Ta("hide"),
        slideToggle: Ta("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        n.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), n.timers = [], n.fx.tick = function() {
        var a, b = 0, c = n.timers;
        for (La = n.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), La = void 0;
    }, n.fx.timer = function(a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop();
    }, n.fx.interval = 13, n.fx.start = function() {
        Ma || (Ma = setInterval(n.fx.tick, n.fx.interval));
    }, n.fx.stop = function() {
        clearInterval(Ma), Ma = null;
    }, n.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, n.fn.delay = function(a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
            var d = setTimeout(b, a);
            c.stop = function() {
                clearTimeout(d);
            };
        });
    }, function() {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, 
        k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", 
        k.radioValue = "t" === a.value;
    }();
    var Ya, Za, $a = n.expr.attrHandle;
    n.fn.extend({
        attr: function(a, b) {
            return J(this, n.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                n.removeAttr(this, a);
            });
        }
    }), n.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), 
            d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Za : Ya)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), 
            null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), 
            c) : void n.removeAttr(a, b));
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType) while (c = f[e++]) d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), 
            a.removeAttribute(c);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        }
    }), Za = {
        set: function(a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c;
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $a[b] || n.find.attr;
        $a[b] = function(a, b, d) {
            var e, f;
            return d || (f = $a[b], $a[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, 
            $a[b] = f), e;
        };
    });
    var _a = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function(a, b) {
            return J(this, n.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[n.propFix[a] || a];
            });
        }
    }), n.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, 
            e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _a.test(a.nodeName) || a.href ? a.tabIndex : -1;
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null;
        }
    }), n.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        n.propFix[this.toLowerCase()] = this;
    });
    var ab = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).addClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : " ")) {
                f = 0;
                while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a)) return this.each(function(b) {
                n(this).removeClass(a.call(this, b, this.className));
            });
            if (h) for (b = (a || "").match(E) || []; j > i; i++) if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ab, " ") : "")) {
                f = 0;
                while (e = b[f++]) while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g);
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b);
            } : function() {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
                } else (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ab, " ").indexOf(b) >= 0) return !0;
            return !1;
        }
    });
    var bb = /\r/g;
    n.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length) return d = n.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                        return null == a ? "" : a + "";
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
                });
                if (e) return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, 
                "string" == typeof c ? c.replace(bb, "") : null == c ? "" : c);
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a));
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--) d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        }
    }), n.each([ "radio", "checkbox" ], function() {
        n.valHooks[this] = {
            set: function(a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0;
            }
        }, k.checkOn || (n.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        n.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), n.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var cb = n.now(), db = /\?/;
    n.parseJSON = function(a) {
        return JSON.parse(a + "");
    }, n.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser(), b = c.parseFromString(a, "text/xml");
        } catch (d) {
            b = void 0;
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), 
        b;
    };
    var eb = /#.*$/, fb = /([?&])_=[^&]*/, gb = /^(.*?):[ \t]*([^\r\n]*)$/gm, hb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, ib = /^(?:GET|HEAD)$/, jb = /^\/\//, kb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, lb = {}, mb = {}, nb = "*/".concat("*"), ob = a.location.href, pb = kb.exec(ob.toLowerCase()) || [];
    function qb(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c)) while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function rb(a, b, c, d) {
        var e = {}, f = a === mb;
        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), 
                g(j), !1);
            }), i;
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*");
    }
    function sb(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a;
    }
    function tb(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d) for (e in h) if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break;
        }
        if (i[0] in c) f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break;
                }
                g || (g = e);
            }
            f = f || g;
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
    }
    function ub(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f) if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), 
        i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ob,
            type: "GET",
            isLocal: hb.test(pb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": nb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": n.parseJSON,
                "text xml": n.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? sb(sb(a, n.ajaxSettings), b) : sb(n.ajaxSettings, a);
        },
        ajaxPrefilter: qb(lb),
        ajaxTransport: qb(mb),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = gb.exec(e)) f[b[1].toLowerCase()] = b[2];
                        }
                        b = f[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === t ? e : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return t || (k.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > t) for (b in a) q[b] = [ q[b], a[b] ]; else v.always(a[v.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this;
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || ob) + "").replace(eb, "").replace(jb, pb[1] + "//"), 
            k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [ "" ], 
            null == k.crossDomain && (h = kb.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === pb[1] && h[2] === pb[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pb[3] || ("http:" === pb[1] ? "80" : "443")))), 
            k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), 
            rb(lb, k, b, v), 2 === t) return v;
            i = n.event && k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), 
            k.type = k.type.toUpperCase(), k.hasContent = !ib.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (db.test(d) ? "&" : "?") + k.data, 
            delete k.data), k.cache === !1 && (k.url = fb.test(d) ? d.replace(fb, "$1_=" + cb++) : d + (db.test(d) ? "&" : "?") + "_=" + cb++)), 
            k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), 
            n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), 
            v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nb + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                success: 1,
                error: 1,
                complete: 1
            }) v[j](k[j]);
            if (c = rb(mb, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [ v, k ]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout");
                }, k.timeout));
                try {
                    t = 1, c.send(r, x);
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w);
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, 
                j = a >= 200 && 300 > a || 304 === a, f && (u = tb(k, v, f)), u = ub(k, u, v, j), 
                j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), 
                w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, 
                r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [ r, x, v ]) : o.rejectWith(l, [ v, x, s ]), 
                v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [ v, k, j ? r : s ]), 
                p.fireWith(l, [ v, x ]), i && (m.trigger("ajaxComplete", [ v, k ]), --n.active || n.event.trigger("ajaxStop")));
            }
            return v;
        },
        getJSON: function(a, b, c) {
            return n.get(a, b, c, "json");
        },
        getScript: function(a, b) {
            return n.get(a, void 0, b, "script");
        }
    }), n.each([ "get", "post" ], function(a, b) {
        n[b] = function(a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            });
        };
    }), n._evalUrl = function(a) {
        return n.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        });
    }, n.fn.extend({
        wrapAll: function(a) {
            var b;
            return n.isFunction(a) ? this.each(function(b) {
                n(this).wrapAll(a.call(this, b));
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), 
            b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a;
            }).append(this)), this);
        },
        wrapInner: function(a) {
            return this.each(n.isFunction(a) ? function(b) {
                n(this).wrapInner(a.call(this, b));
            } : function() {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = n.isFunction(a);
            return this.each(function(c) {
                n(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes);
            }).end();
        }
    }), n.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0;
    }, n.expr.filters.visible = function(a) {
        return !n.expr.filters.hidden(a);
    };
    var vb = /%20/g, wb = /\[\]$/, xb = /\r?\n/g, yb = /^(?:submit|button|image|reset|file)$/i, zb = /^(?:input|select|textarea|keygen)/i;
    function Ab(a, b, c, d) {
        var e;
        if (n.isArray(b)) n.each(b, function(b, e) {
            c || wb.test(a) ? d(a, e) : Ab(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== n.type(b)) d(a, b); else for (e in b) Ab(a + "[" + e + "]", b[e], c, d);
    }
    n.param = function(a, b) {
        var c, d = [], e = function(a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a)) n.each(a, function() {
            e(this.name, this.value);
        }); else for (c in a) Ab(c, a[c], b, e);
        return d.join("&").replace(vb, "+");
    }, n.fn.extend({
        serialize: function() {
            return n.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && zb.test(this.nodeName) && !yb.test(a) && (this.checked || !T.test(a));
            }).map(function(a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(xb, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(xb, "\r\n")
                };
            }).get();
        }
    }), n.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest();
        } catch (a) {}
    };
    var Bb = 0, Cb = {}, Db = {
        0: 200,
        1223: 204
    }, Eb = n.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function() {
        for (var a in Cb) Cb[a]();
    }), k.cors = !!Eb && "withCredentials" in Eb, k.ajax = Eb = !!Eb, n.ajaxTransport(function(a) {
        var b;
        return k.cors || Eb && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(), g = ++Bb;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields) for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Cb[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Db[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()));
                    };
                }, f.onload = b(), f.onerror = b("error"), b = Cb[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null);
                } catch (h) {
                    if (b) throw h;
                }
            },
            abort: function() {
                b && b();
            }
        } : void 0;
    }), n.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return n.globalEval(a), a;
            }
        }
    }), n.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
    }), n.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type);
                    }), l.head.appendChild(b[0]);
                },
                abort: function() {
                    c && c();
                }
            };
        }
    });
    var Fb = [], Gb = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Fb.pop() || n.expando + "_" + cb++;
            return this[a] = !0, a;
        }
    }), n.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Gb.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gb.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, 
        h ? b[h] = b[h].replace(Gb, "$1" + e) : b.jsonp !== !1 && (b.url += (db.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), 
        b.converters["script json"] = function() {
            return g || n.error(e + " was not called"), g[0];
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments;
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Fb.push(e)), g && n.isFunction(f) && f(g[0]), 
            g = f = void 0;
        }), "script") : void 0;
    }), n.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [ b.createElement(d[1]) ] : (d = n.buildFragment([ a ], b, e), e && e.length && n(e).remove(), 
        n.merge([], d.childNodes));
    };
    var Hb = n.fn.load;
    n.fn.load = function(a, b, c) {
        if ("string" != typeof a && Hb) return Hb.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, 
        b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a);
        }).complete(c && function(a, b) {
            g.each(c, f || [ a.responseText, b, a ]);
        }), this;
    }, n.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        n.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), n.expr.filters.animated = function(a) {
        return n.grep(n.timers, function(b) {
            return a === b.elem;
        }).length;
    };
    var Ib = a.document.documentElement;
    function Jb(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
    }
    n.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), 
            i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, 
            j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), 
            n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), 
            null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
        }
    }, n.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                n.offset.setOffset(this, a, b);
            });
            var b, c, d = this[0], e = {
                top: 0,
                left: 0
            }, f = d && d.ownerDocument;
            if (f) return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), 
            c = Jb(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e;
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0], d = {
                    top: 0,
                    left: 0
                };
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), 
                d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Ib;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position")) a = a.offsetParent;
                return a || Ib;
            });
        }
    }), n.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Jb(b);
                return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f);
            }, b, e, arguments.length, null);
        };
    }), n.each([ "top", "left" ], function(a, b) {
        n.cssHooks[b] = ya(k.pixelPosition, function(a, c) {
            return c ? (c = xa(a, b), va.test(c) ? n(a).position()[b] + "px" : c) : void 0;
        });
    }), n.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        n.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            n.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, 
                    Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g);
                }, b, f ? d : void 0, f, null);
            };
        });
    }), n.fn.size = function() {
        return this.length;
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return n;
    });
    var Kb = a.jQuery, Lb = a.$;
    return n.noConflict = function(b) {
        return a.$ === n && (a.$ = Lb), b && a.jQuery === n && (a.jQuery = Kb), n;
    }, typeof b === U && (a.jQuery = a.$ = n), n;
});

/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if (typeof jQuery === "undefined") {
    throw new Error("Bootstrap's JavaScript requires jQuery");
}

+function($) {
    "use strict";
    var version = $.fn.jquery.split(" ")[0].split(".");
    if (version[0] < 2 && version[1] < 9 || version[0] == 1 && version[1] == 9 && version[2] < 1 || version[0] > 2) {
        throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
    }
}(jQuery);

/* ========================================================================
 * Bootstrap: transition.js v3.3.6
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
    // ============================================================
    function transitionEnd() {
        var el = document.createElement("bootstrap");
        var transEndEventNames = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return {
                    end: transEndEventNames[name]
                };
            }
        }
        return false;
    }
    // http://blog.alexmaccaw.com/css-transitions
    $.fn.emulateTransitionEnd = function(duration) {
        var called = false;
        var $el = this;
        $(this).one("bsTransitionEnd", function() {
            called = true;
        });
        var callback = function() {
            if (!called) $($el).trigger($.support.transition.end);
        };
        setTimeout(callback, duration);
        return this;
    };
    $(function() {
        $.support.transition = transitionEnd();
        if (!$.support.transition) return;
        $.event.special.bsTransitionEnd = {
            bindType: $.support.transition.end,
            delegateType: $.support.transition.end,
            handle: function(e) {
                if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
            }
        };
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: alert.js v3.3.6
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // ALERT CLASS DEFINITION
    // ======================
    var dismiss = '[data-dismiss="alert"]';
    var Alert = function(el) {
        $(el).on("click", dismiss, this.close);
    };
    Alert.VERSION = "3.3.6";
    Alert.TRANSITION_DURATION = 150;
    Alert.prototype.close = function(e) {
        var $this = $(this);
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = $(selector);
        if (e) e.preventDefault();
        if (!$parent.length) {
            $parent = $this.closest(".alert");
        }
        $parent.trigger(e = $.Event("close.bs.alert"));
        if (e.isDefaultPrevented()) return;
        $parent.removeClass("in");
        function removeElement() {
            // detach from parent, fire event then clean up data
            $parent.detach().trigger("closed.bs.alert").remove();
        }
        $.support.transition && $parent.hasClass("fade") ? $parent.one("bsTransitionEnd", removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
    };
    // ALERT PLUGIN DEFINITION
    // =======================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.alert");
            if (!data) $this.data("bs.alert", data = new Alert(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.alert;
    $.fn.alert = Plugin;
    $.fn.alert.Constructor = Alert;
    // ALERT NO CONFLICT
    // =================
    $.fn.alert.noConflict = function() {
        $.fn.alert = old;
        return this;
    };
    // ALERT DATA-API
    // ==============
    $(document).on("click.bs.alert.data-api", dismiss, Alert.prototype.close);
}(jQuery);

/* ========================================================================
 * Bootstrap: button.js v3.3.6
 * http://getbootstrap.com/javascript/#buttons
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // BUTTON PUBLIC CLASS DEFINITION
    // ==============================
    var Button = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Button.DEFAULTS, options);
        this.isLoading = false;
    };
    Button.VERSION = "3.3.6";
    Button.DEFAULTS = {
        loadingText: "loading..."
    };
    Button.prototype.setState = function(state) {
        var d = "disabled";
        var $el = this.$element;
        var val = $el.is("input") ? "val" : "html";
        var data = $el.data();
        state += "Text";
        if (data.resetText == null) $el.data("resetText", $el[val]());
        // push to event loop to allow forms to submit
        setTimeout($.proxy(function() {
            $el[val](data[state] == null ? this.options[state] : data[state]);
            if (state == "loadingText") {
                this.isLoading = true;
                $el.addClass(d).attr(d, d);
            } else if (this.isLoading) {
                this.isLoading = false;
                $el.removeClass(d).removeAttr(d);
            }
        }, this), 0);
    };
    Button.prototype.toggle = function() {
        var changed = true;
        var $parent = this.$element.closest('[data-toggle="buttons"]');
        if ($parent.length) {
            var $input = this.$element.find("input");
            if ($input.prop("type") == "radio") {
                if ($input.prop("checked")) changed = false;
                $parent.find(".active").removeClass("active");
                this.$element.addClass("active");
            } else if ($input.prop("type") == "checkbox") {
                if ($input.prop("checked") !== this.$element.hasClass("active")) changed = false;
                this.$element.toggleClass("active");
            }
            $input.prop("checked", this.$element.hasClass("active"));
            if (changed) $input.trigger("change");
        } else {
            this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
            this.$element.toggleClass("active");
        }
    };
    // BUTTON PLUGIN DEFINITION
    // ========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.button");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.button", data = new Button(this, options));
            if (option == "toggle") data.toggle(); else if (option) data.setState(option);
        });
    }
    var old = $.fn.button;
    $.fn.button = Plugin;
    $.fn.button.Constructor = Button;
    // BUTTON NO CONFLICT
    // ==================
    $.fn.button.noConflict = function() {
        $.fn.button = old;
        return this;
    };
    // BUTTON DATA-API
    // ===============
    $(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        var $btn = $(e.target);
        if (!$btn.hasClass("btn")) $btn = $btn.closest(".btn");
        Plugin.call($btn, "toggle");
        if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) e.preventDefault();
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        $(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type));
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: carousel.js v3.3.6
 * http://getbootstrap.com/javascript/#carousel
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // CAROUSEL CLASS DEFINITION
    // =========================
    var Carousel = function(element, options) {
        this.$element = $(element);
        this.$indicators = this.$element.find(".carousel-indicators");
        this.options = options;
        this.paused = null;
        this.sliding = null;
        this.interval = null;
        this.$active = null;
        this.$items = null;
        this.options.keyboard && this.$element.on("keydown.bs.carousel", $.proxy(this.keydown, this));
        this.options.pause == "hover" && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", $.proxy(this.pause, this)).on("mouseleave.bs.carousel", $.proxy(this.cycle, this));
    };
    Carousel.VERSION = "3.3.6";
    Carousel.TRANSITION_DURATION = 600;
    Carousel.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: true,
        keyboard: true
    };
    Carousel.prototype.keydown = function(e) {
        if (/input|textarea/i.test(e.target.tagName)) return;
        switch (e.which) {
          case 37:
            this.prev();
            break;

          case 39:
            this.next();
            break;

          default:
            return;
        }
        e.preventDefault();
    };
    Carousel.prototype.cycle = function(e) {
        e || (this.paused = false);
        this.interval && clearInterval(this.interval);
        this.options.interval && !this.paused && (this.interval = setInterval($.proxy(this.next, this), this.options.interval));
        return this;
    };
    Carousel.prototype.getItemIndex = function(item) {
        this.$items = item.parent().children(".item");
        return this.$items.index(item || this.$active);
    };
    Carousel.prototype.getItemForDirection = function(direction, active) {
        var activeIndex = this.getItemIndex(active);
        var willWrap = direction == "prev" && activeIndex === 0 || direction == "next" && activeIndex == this.$items.length - 1;
        if (willWrap && !this.options.wrap) return active;
        var delta = direction == "prev" ? -1 : 1;
        var itemIndex = (activeIndex + delta) % this.$items.length;
        return this.$items.eq(itemIndex);
    };
    Carousel.prototype.to = function(pos) {
        var that = this;
        var activeIndex = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (pos > this.$items.length - 1 || pos < 0) return;
        if (this.sliding) return this.$element.one("slid.bs.carousel", function() {
            that.to(pos);
        });
        // yes, "slid"
        if (activeIndex == pos) return this.pause().cycle();
        return this.slide(pos > activeIndex ? "next" : "prev", this.$items.eq(pos));
    };
    Carousel.prototype.pause = function(e) {
        e || (this.paused = true);
        if (this.$element.find(".next, .prev").length && $.support.transition) {
            this.$element.trigger($.support.transition.end);
            this.cycle(true);
        }
        this.interval = clearInterval(this.interval);
        return this;
    };
    Carousel.prototype.next = function() {
        if (this.sliding) return;
        return this.slide("next");
    };
    Carousel.prototype.prev = function() {
        if (this.sliding) return;
        return this.slide("prev");
    };
    Carousel.prototype.slide = function(type, next) {
        var $active = this.$element.find(".item.active");
        var $next = next || this.getItemForDirection(type, $active);
        var isCycling = this.interval;
        var direction = type == "next" ? "left" : "right";
        var that = this;
        if ($next.hasClass("active")) return this.sliding = false;
        var relatedTarget = $next[0];
        var slideEvent = $.Event("slide.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        this.$element.trigger(slideEvent);
        if (slideEvent.isDefaultPrevented()) return;
        this.sliding = true;
        isCycling && this.pause();
        if (this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)]);
            $nextIndicator && $nextIndicator.addClass("active");
        }
        var slidEvent = $.Event("slid.bs.carousel", {
            relatedTarget: relatedTarget,
            direction: direction
        });
        // yes, "slid"
        if ($.support.transition && this.$element.hasClass("slide")) {
            $next.addClass(type);
            $next[0].offsetWidth;
            // force reflow
            $active.addClass(direction);
            $next.addClass(direction);
            $active.one("bsTransitionEnd", function() {
                $next.removeClass([ type, direction ].join(" ")).addClass("active");
                $active.removeClass([ "active", direction ].join(" "));
                that.sliding = false;
                setTimeout(function() {
                    that.$element.trigger(slidEvent);
                }, 0);
            }).emulateTransitionEnd(Carousel.TRANSITION_DURATION);
        } else {
            $active.removeClass("active");
            $next.addClass("active");
            this.sliding = false;
            this.$element.trigger(slidEvent);
        }
        isCycling && this.cycle();
        return this;
    };
    // CAROUSEL PLUGIN DEFINITION
    // ==========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.carousel");
            var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == "object" && option);
            var action = typeof option == "string" ? option : options.slide;
            if (!data) $this.data("bs.carousel", data = new Carousel(this, options));
            if (typeof option == "number") data.to(option); else if (action) data[action](); else if (options.interval) data.pause().cycle();
        });
    }
    var old = $.fn.carousel;
    $.fn.carousel = Plugin;
    $.fn.carousel.Constructor = Carousel;
    // CAROUSEL NO CONFLICT
    // ====================
    $.fn.carousel.noConflict = function() {
        $.fn.carousel = old;
        return this;
    };
    // CAROUSEL DATA-API
    // =================
    var clickHandler = function(e) {
        var href;
        var $this = $(this);
        var $target = $($this.attr("data-target") || (href = $this.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, ""));
        // strip for ie7
        if (!$target.hasClass("carousel")) return;
        var options = $.extend({}, $target.data(), $this.data());
        var slideIndex = $this.attr("data-slide-to");
        if (slideIndex) options.interval = false;
        Plugin.call($target, options);
        if (slideIndex) {
            $target.data("bs.carousel").to(slideIndex);
        }
        e.preventDefault();
    };
    $(document).on("click.bs.carousel.data-api", "[data-slide]", clickHandler).on("click.bs.carousel.data-api", "[data-slide-to]", clickHandler);
    $(window).on("load", function() {
        $('[data-ride="carousel"]').each(function() {
            var $carousel = $(this);
            Plugin.call($carousel, $carousel.data());
        });
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: collapse.js v3.3.6
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // COLLAPSE PUBLIC CLASS DEFINITION
    // ================================
    var Collapse = function(element, options) {
        this.$element = $(element);
        this.options = $.extend({}, Collapse.DEFAULTS, options);
        this.$trigger = $('[data-toggle="collapse"][href="#' + element.id + '"],' + '[data-toggle="collapse"][data-target="#' + element.id + '"]');
        this.transitioning = null;
        if (this.options.parent) {
            this.$parent = this.getParent();
        } else {
            this.addAriaAndCollapsedClass(this.$element, this.$trigger);
        }
        if (this.options.toggle) this.toggle();
    };
    Collapse.VERSION = "3.3.6";
    Collapse.TRANSITION_DURATION = 350;
    Collapse.DEFAULTS = {
        toggle: true
    };
    Collapse.prototype.dimension = function() {
        var hasWidth = this.$element.hasClass("width");
        return hasWidth ? "width" : "height";
    };
    Collapse.prototype.show = function() {
        if (this.transitioning || this.$element.hasClass("in")) return;
        var activesData;
        var actives = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (actives && actives.length) {
            activesData = actives.data("bs.collapse");
            if (activesData && activesData.transitioning) return;
        }
        var startEvent = $.Event("show.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        if (actives && actives.length) {
            Plugin.call(actives, "hide");
            activesData || actives.data("bs.collapse", null);
        }
        var dimension = this.dimension();
        this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded", true);
        this.$trigger.removeClass("collapsed").attr("aria-expanded", true);
        this.transitioning = 1;
        var complete = function() {
            this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");
            this.transitioning = 0;
            this.$element.trigger("shown.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        var scrollSize = $.camelCase([ "scroll", dimension ].join("-"));
        this.$element.one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize]);
    };
    Collapse.prototype.hide = function() {
        if (this.transitioning || !this.$element.hasClass("in")) return;
        var startEvent = $.Event("hide.bs.collapse");
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return;
        var dimension = this.dimension();
        this.$element[dimension](this.$element[dimension]())[0].offsetHeight;
        this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", false);
        this.$trigger.addClass("collapsed").attr("aria-expanded", false);
        this.transitioning = 1;
        var complete = function() {
            this.transitioning = 0;
            this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
        };
        if (!$.support.transition) return complete.call(this);
        this.$element[dimension](0).one("bsTransitionEnd", $.proxy(complete, this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION);
    };
    Collapse.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    Collapse.prototype.getParent = function() {
        return $(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each($.proxy(function(i, element) {
            var $element = $(element);
            this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element);
        }, this)).end();
    };
    Collapse.prototype.addAriaAndCollapsedClass = function($element, $trigger) {
        var isOpen = $element.hasClass("in");
        $element.attr("aria-expanded", isOpen);
        $trigger.toggleClass("collapsed", !isOpen).attr("aria-expanded", isOpen);
    };
    function getTargetFromTrigger($trigger) {
        var href;
        var target = $trigger.attr("data-target") || (href = $trigger.attr("href")) && href.replace(/.*(?=#[^\s]+$)/, "");
        // strip for ie7
        return $(target);
    }
    // COLLAPSE PLUGIN DEFINITION
    // ==========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.collapse");
            var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false;
            if (!data) $this.data("bs.collapse", data = new Collapse(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.collapse;
    $.fn.collapse = Plugin;
    $.fn.collapse.Constructor = Collapse;
    // COLLAPSE NO CONFLICT
    // ====================
    $.fn.collapse.noConflict = function() {
        $.fn.collapse = old;
        return this;
    };
    // COLLAPSE DATA-API
    // =================
    $(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(e) {
        var $this = $(this);
        if (!$this.attr("data-target")) e.preventDefault();
        var $target = getTargetFromTrigger($this);
        var data = $target.data("bs.collapse");
        var option = data ? "toggle" : $this.data();
        Plugin.call($target, option);
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: dropdown.js v3.3.6
 * http://getbootstrap.com/javascript/#dropdowns
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // DROPDOWN CLASS DEFINITION
    // =========================
    var backdrop = ".dropdown-backdrop";
    var toggle = '[data-toggle="dropdown"]';
    var Dropdown = function(element) {
        $(element).on("click.bs.dropdown", this.toggle);
    };
    Dropdown.VERSION = "3.3.6";
    function getParent($this) {
        var selector = $this.attr("data-target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        var $parent = selector && $(selector);
        return $parent && $parent.length ? $parent : $this.parent();
    }
    function clearMenus(e) {
        if (e && e.which === 3) return;
        $(backdrop).remove();
        $(toggle).each(function() {
            var $this = $(this);
            var $parent = getParent($this);
            var relatedTarget = {
                relatedTarget: this
            };
            if (!$parent.hasClass("open")) return;
            if (e && e.type == "click" && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return;
            $parent.trigger(e = $.Event("hide.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.attr("aria-expanded", "false");
            $parent.removeClass("open").trigger($.Event("hidden.bs.dropdown", relatedTarget));
        });
    }
    Dropdown.prototype.toggle = function(e) {
        var $this = $(this);
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        clearMenus();
        if (!isActive) {
            if ("ontouchstart" in document.documentElement && !$parent.closest(".navbar-nav").length) {
                // if mobile we use a backdrop because click events don't delegate
                $(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click", clearMenus);
            }
            var relatedTarget = {
                relatedTarget: this
            };
            $parent.trigger(e = $.Event("show.bs.dropdown", relatedTarget));
            if (e.isDefaultPrevented()) return;
            $this.trigger("focus").attr("aria-expanded", "true");
            $parent.toggleClass("open").trigger($.Event("shown.bs.dropdown", relatedTarget));
        }
        return false;
    };
    Dropdown.prototype.keydown = function(e) {
        if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;
        var $this = $(this);
        e.preventDefault();
        e.stopPropagation();
        if ($this.is(".disabled, :disabled")) return;
        var $parent = getParent($this);
        var isActive = $parent.hasClass("open");
        if (!isActive && e.which != 27 || isActive && e.which == 27) {
            if (e.which == 27) $parent.find(toggle).trigger("focus");
            return $this.trigger("click");
        }
        var desc = " li:not(.disabled):visible a";
        var $items = $parent.find(".dropdown-menu" + desc);
        if (!$items.length) return;
        var index = $items.index(e.target);
        if (e.which == 38 && index > 0) index--;
        // up
        if (e.which == 40 && index < $items.length - 1) index++;
        // down
        if (!~index) index = 0;
        $items.eq(index).trigger("focus");
    };
    // DROPDOWN PLUGIN DEFINITION
    // ==========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.dropdown");
            if (!data) $this.data("bs.dropdown", data = new Dropdown(this));
            if (typeof option == "string") data[option].call($this);
        });
    }
    var old = $.fn.dropdown;
    $.fn.dropdown = Plugin;
    $.fn.dropdown.Constructor = Dropdown;
    // DROPDOWN NO CONFLICT
    // ====================
    $.fn.dropdown.noConflict = function() {
        $.fn.dropdown = old;
        return this;
    };
    // APPLY TO STANDARD DROPDOWN ELEMENTS
    // ===================================
    $(document).on("click.bs.dropdown.data-api", clearMenus).on("click.bs.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation();
    }).on("click.bs.dropdown.data-api", toggle, Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api", toggle, Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", Dropdown.prototype.keydown);
}(jQuery);

/* ========================================================================
 * Bootstrap: modal.js v3.3.6
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // MODAL CLASS DEFINITION
    // ======================
    var Modal = function(element, options) {
        this.options = options;
        this.$body = $(document.body);
        this.$element = $(element);
        this.$dialog = this.$element.find(".modal-dialog");
        this.$backdrop = null;
        this.isShown = null;
        this.originalBodyPad = null;
        this.scrollbarWidth = 0;
        this.ignoreBackdropClick = false;
        if (this.options.remote) {
            this.$element.find(".modal-content").load(this.options.remote, $.proxy(function() {
                this.$element.trigger("loaded.bs.modal");
            }, this));
        }
    };
    Modal.VERSION = "3.3.6";
    Modal.TRANSITION_DURATION = 300;
    Modal.BACKDROP_TRANSITION_DURATION = 150;
    Modal.DEFAULTS = {
        backdrop: true,
        keyboard: true,
        show: true
    };
    Modal.prototype.toggle = function(_relatedTarget) {
        return this.isShown ? this.hide() : this.show(_relatedTarget);
    };
    Modal.prototype.show = function(_relatedTarget) {
        var that = this;
        var e = $.Event("show.bs.modal", {
            relatedTarget: _relatedTarget
        });
        this.$element.trigger(e);
        if (this.isShown || e.isDefaultPrevented()) return;
        this.isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        this.$body.addClass("modal-open");
        this.escape();
        this.resize();
        this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', $.proxy(this.hide, this));
        this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            that.$element.one("mouseup.dismiss.bs.modal", function(e) {
                if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
            });
        });
        this.backdrop(function() {
            var transition = $.support.transition && that.$element.hasClass("fade");
            if (!that.$element.parent().length) {
                that.$element.appendTo(that.$body);
            }
            that.$element.show().scrollTop(0);
            that.adjustDialog();
            if (transition) {
                that.$element[0].offsetWidth;
            }
            that.$element.addClass("in");
            that.enforceFocus();
            var e = $.Event("shown.bs.modal", {
                relatedTarget: _relatedTarget
            });
            transition ? that.$dialog.one("bsTransitionEnd", function() {
                that.$element.trigger("focus").trigger(e);
            }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger("focus").trigger(e);
        });
    };
    Modal.prototype.hide = function(e) {
        if (e) e.preventDefault();
        e = $.Event("hide.bs.modal");
        this.$element.trigger(e);
        if (!this.isShown || e.isDefaultPrevented()) return;
        this.isShown = false;
        this.escape();
        this.resize();
        $(document).off("focusin.bs.modal");
        this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");
        this.$dialog.off("mousedown.dismiss.bs.modal");
        $.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
    };
    Modal.prototype.enforceFocus = function() {
        $(document).off("focusin.bs.modal").on("focusin.bs.modal", $.proxy(function(e) {
            if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
                this.$element.trigger("focus");
            }
        }, this));
    };
    Modal.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) {
            this.$element.on("keydown.dismiss.bs.modal", $.proxy(function(e) {
                e.which == 27 && this.hide();
            }, this));
        } else if (!this.isShown) {
            this.$element.off("keydown.dismiss.bs.modal");
        }
    };
    Modal.prototype.resize = function() {
        if (this.isShown) {
            $(window).on("resize.bs.modal", $.proxy(this.handleUpdate, this));
        } else {
            $(window).off("resize.bs.modal");
        }
    };
    Modal.prototype.hideModal = function() {
        var that = this;
        this.$element.hide();
        this.backdrop(function() {
            that.$body.removeClass("modal-open");
            that.resetAdjustments();
            that.resetScrollbar();
            that.$element.trigger("hidden.bs.modal");
        });
    };
    Modal.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null;
    };
    Modal.prototype.backdrop = function(callback) {
        var that = this;
        var animate = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var doAnimate = $.support.transition && animate;
            this.$backdrop = $(document.createElement("div")).addClass("modal-backdrop " + animate).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", $.proxy(function(e) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = false;
                    return;
                }
                if (e.target !== e.currentTarget) return;
                this.options.backdrop == "static" ? this.$element[0].focus() : this.hide();
            }, this));
            if (doAnimate) this.$backdrop[0].offsetWidth;
            // force reflow
            this.$backdrop.addClass("in");
            if (!callback) return;
            doAnimate ? this.$backdrop.one("bsTransitionEnd", callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var callbackRemove = function() {
                that.removeBackdrop();
                callback && callback();
            };
            $.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
        } else if (callback) {
            callback();
        }
    };
    // these following methods are used to handle overflowing modals
    Modal.prototype.handleUpdate = function() {
        this.adjustDialog();
    };
    Modal.prototype.adjustDialog = function() {
        var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ""
        });
    };
    Modal.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        });
    };
    Modal.prototype.checkScrollbar = function() {
        var fullWindowWidth = window.innerWidth;
        if (!fullWindowWidth) {
            // workaround for missing window.innerWidth in IE8
            var documentElementRect = document.documentElement.getBoundingClientRect();
            fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
        }
        this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
        this.scrollbarWidth = this.measureScrollbar();
    };
    Modal.prototype.setScrollbar = function() {
        var bodyPad = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        if (this.bodyIsOverflowing) this.$body.css("padding-right", bodyPad + this.scrollbarWidth);
    };
    Modal.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad);
    };
    Modal.prototype.measureScrollbar = function() {
        // thx walsh
        var scrollDiv = document.createElement("div");
        scrollDiv.className = "modal-scrollbar-measure";
        this.$body.append(scrollDiv);
        var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.$body[0].removeChild(scrollDiv);
        return scrollbarWidth;
    };
    // MODAL PLUGIN DEFINITION
    // =======================
    function Plugin(option, _relatedTarget) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.modal");
            var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == "object" && option);
            if (!data) $this.data("bs.modal", data = new Modal(this, options));
            if (typeof option == "string") data[option](_relatedTarget); else if (options.show) data.show(_relatedTarget);
        });
    }
    var old = $.fn.modal;
    $.fn.modal = Plugin;
    $.fn.modal.Constructor = Modal;
    // MODAL NO CONFLICT
    // =================
    $.fn.modal.noConflict = function() {
        $.fn.modal = old;
        return this;
    };
    // MODAL DATA-API
    // ==============
    $(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(e) {
        var $this = $(this);
        var href = $this.attr("href");
        var $target = $($this.attr("data-target") || href && href.replace(/.*(?=#[^\s]+$)/, ""));
        // strip for ie7
        var option = $target.data("bs.modal") ? "toggle" : $.extend({
            remote: !/#/.test(href) && href
        }, $target.data(), $this.data());
        if ($this.is("a")) e.preventDefault();
        $target.one("show.bs.modal", function(showEvent) {
            if (showEvent.isDefaultPrevented()) return;
            // only register focus restorer if modal will actually get shown
            $target.one("hidden.bs.modal", function() {
                $this.is(":visible") && $this.trigger("focus");
            });
        });
        Plugin.call($target, option, this);
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: tooltip.js v3.3.6
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // TOOLTIP PUBLIC CLASS DEFINITION
    // ===============================
    var Tooltip = function(element, options) {
        this.type = null;
        this.options = null;
        this.enabled = null;
        this.timeout = null;
        this.hoverState = null;
        this.$element = null;
        this.inState = null;
        this.init("tooltip", element, options);
    };
    Tooltip.VERSION = "3.3.6";
    Tooltip.TRANSITION_DURATION = 150;
    Tooltip.DEFAULTS = {
        animation: true,
        placement: "top",
        selector: false,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: false,
        container: false,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    Tooltip.prototype.init = function(type, element, options) {
        this.enabled = true;
        this.type = type;
        this.$element = $(element);
        this.options = this.getOptions(options);
        this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport);
        this.inState = {
            click: false,
            hover: false,
            focus: false
        };
        if (this.$element[0] instanceof document.constructor && !this.options.selector) {
            throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        }
        var triggers = this.options.trigger.split(" ");
        for (var i = triggers.length; i--; ) {
            var trigger = triggers[i];
            if (trigger == "click") {
                this.$element.on("click." + this.type, this.options.selector, $.proxy(this.toggle, this));
            } else if (trigger != "manual") {
                var eventIn = trigger == "hover" ? "mouseenter" : "focusin";
                var eventOut = trigger == "hover" ? "mouseleave" : "focusout";
                this.$element.on(eventIn + "." + this.type, this.options.selector, $.proxy(this.enter, this));
                this.$element.on(eventOut + "." + this.type, this.options.selector, $.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = $.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    };
    Tooltip.prototype.getDefaults = function() {
        return Tooltip.DEFAULTS;
    };
    Tooltip.prototype.getOptions = function(options) {
        options = $.extend({}, this.getDefaults(), this.$element.data(), options);
        if (options.delay && typeof options.delay == "number") {
            options.delay = {
                show: options.delay,
                hide: options.delay
            };
        }
        return options;
    };
    Tooltip.prototype.getDelegateOptions = function() {
        var options = {};
        var defaults = this.getDefaults();
        this._options && $.each(this._options, function(key, value) {
            if (defaults[key] != value) options[key] = value;
        });
        return options;
    };
    Tooltip.prototype.enter = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusin" ? "focus" : "hover"] = true;
        }
        if (self.tip().hasClass("in") || self.hoverState == "in") {
            self.hoverState = "in";
            return;
        }
        clearTimeout(self.timeout);
        self.hoverState = "in";
        if (!self.options.delay || !self.options.delay.show) return self.show();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "in") self.show();
        }, self.options.delay.show);
    };
    Tooltip.prototype.isInStateTrue = function() {
        for (var key in this.inState) {
            if (this.inState[key]) return true;
        }
        return false;
    };
    Tooltip.prototype.leave = function(obj) {
        var self = obj instanceof this.constructor ? obj : $(obj.currentTarget).data("bs." + this.type);
        if (!self) {
            self = new this.constructor(obj.currentTarget, this.getDelegateOptions());
            $(obj.currentTarget).data("bs." + this.type, self);
        }
        if (obj instanceof $.Event) {
            self.inState[obj.type == "focusout" ? "focus" : "hover"] = false;
        }
        if (self.isInStateTrue()) return;
        clearTimeout(self.timeout);
        self.hoverState = "out";
        if (!self.options.delay || !self.options.delay.hide) return self.hide();
        self.timeout = setTimeout(function() {
            if (self.hoverState == "out") self.hide();
        }, self.options.delay.hide);
    };
    Tooltip.prototype.show = function() {
        var e = $.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !inDom) return;
            var that = this;
            var $tip = this.tip();
            var tipId = this.getUID(this.type);
            this.setContent();
            $tip.attr("id", tipId);
            this.$element.attr("aria-describedby", tipId);
            if (this.options.animation) $tip.addClass("fade");
            var placement = typeof this.options.placement == "function" ? this.options.placement.call(this, $tip[0], this.$element[0]) : this.options.placement;
            var autoToken = /\s?auto?\s?/i;
            var autoPlace = autoToken.test(placement);
            if (autoPlace) placement = placement.replace(autoToken, "") || "top";
            $tip.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(placement).data("bs." + this.type, this);
            this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var pos = this.getPosition();
            var actualWidth = $tip[0].offsetWidth;
            var actualHeight = $tip[0].offsetHeight;
            if (autoPlace) {
                var orgPlacement = placement;
                var viewportDim = this.getPosition(this.$viewport);
                placement = placement == "bottom" && pos.bottom + actualHeight > viewportDim.bottom ? "top" : placement == "top" && pos.top - actualHeight < viewportDim.top ? "bottom" : placement == "right" && pos.right + actualWidth > viewportDim.width ? "left" : placement == "left" && pos.left - actualWidth < viewportDim.left ? "right" : placement;
                $tip.removeClass(orgPlacement).addClass(placement);
            }
            var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight);
            this.applyPlacement(calculatedOffset, placement);
            var complete = function() {
                var prevHoverState = that.hoverState;
                that.$element.trigger("shown.bs." + that.type);
                that.hoverState = null;
                if (prevHoverState == "out") that.leave(that);
            };
            $.support.transition && this.$tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        }
    };
    Tooltip.prototype.applyPlacement = function(offset, placement) {
        var $tip = this.tip();
        var width = $tip[0].offsetWidth;
        var height = $tip[0].offsetHeight;
        // manually read margins because getBoundingClientRect includes difference
        var marginTop = parseInt($tip.css("margin-top"), 10);
        var marginLeft = parseInt($tip.css("margin-left"), 10);
        // we must check for NaN for ie 8/9
        if (isNaN(marginTop)) marginTop = 0;
        if (isNaN(marginLeft)) marginLeft = 0;
        offset.top += marginTop;
        offset.left += marginLeft;
        // $.fn.offset doesn't round pixel values
        // so we use setOffset directly with our own function B-0
        $.offset.setOffset($tip[0], $.extend({
            using: function(props) {
                $tip.css({
                    top: Math.round(props.top),
                    left: Math.round(props.left)
                });
            }
        }, offset), 0);
        $tip.addClass("in");
        // check to see if placing tip in new offset caused the tip to resize itself
        var actualWidth = $tip[0].offsetWidth;
        var actualHeight = $tip[0].offsetHeight;
        if (placement == "top" && actualHeight != height) {
            offset.top = offset.top + height - actualHeight;
        }
        var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight);
        if (delta.left) offset.left += delta.left; else offset.top += delta.top;
        var isVertical = /top|bottom/.test(placement);
        var arrowDelta = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight;
        var arrowOffsetPosition = isVertical ? "offsetWidth" : "offsetHeight";
        $tip.offset(offset);
        this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical);
    };
    Tooltip.prototype.replaceArrow = function(delta, dimension, isVertical) {
        this.arrow().css(isVertical ? "left" : "top", 50 * (1 - delta / dimension) + "%").css(isVertical ? "top" : "left", "");
    };
    Tooltip.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        $tip.find(".tooltip-inner")[this.options.html ? "html" : "text"](title);
        $tip.removeClass("fade in top bottom left right");
    };
    Tooltip.prototype.hide = function(callback) {
        var that = this;
        var $tip = $(this.$tip);
        var e = $.Event("hide.bs." + this.type);
        function complete() {
            if (that.hoverState != "in") $tip.detach();
            that.$element.removeAttr("aria-describedby").trigger("hidden.bs." + that.type);
            callback && callback();
        }
        this.$element.trigger(e);
        if (e.isDefaultPrevented()) return;
        $tip.removeClass("in");
        $.support.transition && $tip.hasClass("fade") ? $tip.one("bsTransitionEnd", complete).emulateTransitionEnd(Tooltip.TRANSITION_DURATION) : complete();
        this.hoverState = null;
        return this;
    };
    Tooltip.prototype.fixTitle = function() {
        var $e = this.$element;
        if ($e.attr("title") || typeof $e.attr("data-original-title") != "string") {
            $e.attr("data-original-title", $e.attr("title") || "").attr("title", "");
        }
    };
    Tooltip.prototype.hasContent = function() {
        return this.getTitle();
    };
    Tooltip.prototype.getPosition = function($element) {
        $element = $element || this.$element;
        var el = $element[0];
        var isBody = el.tagName == "BODY";
        var elRect = el.getBoundingClientRect();
        if (elRect.width == null) {
            // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
            elRect = $.extend({}, elRect, {
                width: elRect.right - elRect.left,
                height: elRect.bottom - elRect.top
            });
        }
        var elOffset = isBody ? {
            top: 0,
            left: 0
        } : $element.offset();
        var scroll = {
            scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop()
        };
        var outerDims = isBody ? {
            width: $(window).width(),
            height: $(window).height()
        } : null;
        return $.extend({}, elRect, scroll, outerDims, elOffset);
    };
    Tooltip.prototype.getCalculatedOffset = function(placement, pos, actualWidth, actualHeight) {
        /* placement == 'right' */
        return placement == "bottom" ? {
            top: pos.top + pos.height,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "top" ? {
            top: pos.top - actualHeight,
            left: pos.left + pos.width / 2 - actualWidth / 2
        } : placement == "left" ? {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left - actualWidth
        } : {
            top: pos.top + pos.height / 2 - actualHeight / 2,
            left: pos.left + pos.width
        };
    };
    Tooltip.prototype.getViewportAdjustedDelta = function(placement, pos, actualWidth, actualHeight) {
        var delta = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return delta;
        var viewportPadding = this.options.viewport && this.options.viewport.padding || 0;
        var viewportDimensions = this.getPosition(this.$viewport);
        if (/right|left/.test(placement)) {
            var topEdgeOffset = pos.top - viewportPadding - viewportDimensions.scroll;
            var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight;
            if (topEdgeOffset < viewportDimensions.top) {
                // top overflow
                delta.top = viewportDimensions.top - topEdgeOffset;
            } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) {
                // bottom overflow
                delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset;
            }
        } else {
            var leftEdgeOffset = pos.left - viewportPadding;
            var rightEdgeOffset = pos.left + viewportPadding + actualWidth;
            if (leftEdgeOffset < viewportDimensions.left) {
                // left overflow
                delta.left = viewportDimensions.left - leftEdgeOffset;
            } else if (rightEdgeOffset > viewportDimensions.right) {
                // right overflow
                delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset;
            }
        }
        return delta;
    };
    Tooltip.prototype.getTitle = function() {
        var title;
        var $e = this.$element;
        var o = this.options;
        title = $e.attr("data-original-title") || (typeof o.title == "function" ? o.title.call($e[0]) : o.title);
        return title;
    };
    Tooltip.prototype.getUID = function(prefix) {
        do prefix += ~~(Math.random() * 1e6); while (document.getElementById(prefix));
        return prefix;
    };
    Tooltip.prototype.tip = function() {
        if (!this.$tip) {
            this.$tip = $(this.options.template);
            if (this.$tip.length != 1) {
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            }
        }
        return this.$tip;
    };
    Tooltip.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    };
    Tooltip.prototype.enable = function() {
        this.enabled = true;
    };
    Tooltip.prototype.disable = function() {
        this.enabled = false;
    };
    Tooltip.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    };
    Tooltip.prototype.toggle = function(e) {
        var self = this;
        if (e) {
            self = $(e.currentTarget).data("bs." + this.type);
            if (!self) {
                self = new this.constructor(e.currentTarget, this.getDelegateOptions());
                $(e.currentTarget).data("bs." + this.type, self);
            }
        }
        if (e) {
            self.inState.click = !self.inState.click;
            if (self.isInStateTrue()) self.enter(self); else self.leave(self);
        } else {
            self.tip().hasClass("in") ? self.leave(self) : self.enter(self);
        }
    };
    Tooltip.prototype.destroy = function() {
        var that = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            that.$element.off("." + that.type).removeData("bs." + that.type);
            if (that.$tip) {
                that.$tip.detach();
            }
            that.$tip = null;
            that.$arrow = null;
            that.$viewport = null;
        });
    };
    // TOOLTIP PLUGIN DEFINITION
    // =========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tooltip");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.tooltip", data = new Tooltip(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tooltip;
    $.fn.tooltip = Plugin;
    $.fn.tooltip.Constructor = Tooltip;
    // TOOLTIP NO CONFLICT
    // ===================
    $.fn.tooltip.noConflict = function() {
        $.fn.tooltip = old;
        return this;
    };
}(jQuery);

/* ========================================================================
 * Bootstrap: popover.js v3.3.6
 * http://getbootstrap.com/javascript/#popovers
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // POPOVER PUBLIC CLASS DEFINITION
    // ===============================
    var Popover = function(element, options) {
        this.init("popover", element, options);
    };
    if (!$.fn.tooltip) throw new Error("Popover requires tooltip.js");
    Popover.VERSION = "3.3.6";
    Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    });
    // NOTE: POPOVER EXTENDS tooltip.js
    // ================================
    Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype);
    Popover.prototype.constructor = Popover;
    Popover.prototype.getDefaults = function() {
        return Popover.DEFAULTS;
    };
    Popover.prototype.setContent = function() {
        var $tip = this.tip();
        var title = this.getTitle();
        var content = this.getContent();
        $tip.find(".popover-title")[this.options.html ? "html" : "text"](title);
        $tip.find(".popover-content").children().detach().end()[// we use append for html objects to maintain js events
        this.options.html ? typeof content == "string" ? "html" : "append" : "text"](content);
        $tip.removeClass("fade top bottom left right in");
        // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
        // this manually by checking the contents.
        if (!$tip.find(".popover-title").html()) $tip.find(".popover-title").hide();
    };
    Popover.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    };
    Popover.prototype.getContent = function() {
        var $e = this.$element;
        var o = this.options;
        return $e.attr("data-content") || (typeof o.content == "function" ? o.content.call($e[0]) : o.content);
    };
    Popover.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    };
    // POPOVER PLUGIN DEFINITION
    // =========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.popover");
            var options = typeof option == "object" && option;
            if (!data && /destroy|hide/.test(option)) return;
            if (!data) $this.data("bs.popover", data = new Popover(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.popover;
    $.fn.popover = Plugin;
    $.fn.popover.Constructor = Popover;
    // POPOVER NO CONFLICT
    // ===================
    $.fn.popover.noConflict = function() {
        $.fn.popover = old;
        return this;
    };
}(jQuery);

/* ========================================================================
 * Bootstrap: scrollspy.js v3.3.6
 * http://getbootstrap.com/javascript/#scrollspy
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // SCROLLSPY CLASS DEFINITION
    // ==========================
    function ScrollSpy(element, options) {
        this.$body = $(document.body);
        this.$scrollElement = $(element).is(document.body) ? $(window) : $(element);
        this.options = $.extend({}, ScrollSpy.DEFAULTS, options);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", $.proxy(this.process, this));
        this.refresh();
        this.process();
    }
    ScrollSpy.VERSION = "3.3.6";
    ScrollSpy.DEFAULTS = {
        offset: 10
    };
    ScrollSpy.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
    };
    ScrollSpy.prototype.refresh = function() {
        var that = this;
        var offsetMethod = "offset";
        var offsetBase = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        if (!$.isWindow(this.$scrollElement[0])) {
            offsetMethod = "position";
            offsetBase = this.$scrollElement.scrollTop();
        }
        this.$body.find(this.selector).map(function() {
            var $el = $(this);
            var href = $el.data("target") || $el.attr("href");
            var $href = /^#./.test(href) && $(href);
            return $href && $href.length && $href.is(":visible") && [ [ $href[offsetMethod]().top + offsetBase, href ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            that.offsets.push(this[0]);
            that.targets.push(this[1]);
        });
    };
    ScrollSpy.prototype.process = function() {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset;
        var scrollHeight = this.getScrollHeight();
        var maxScroll = this.options.offset + scrollHeight - this.$scrollElement.height();
        var offsets = this.offsets;
        var targets = this.targets;
        var activeTarget = this.activeTarget;
        var i;
        if (this.scrollHeight != scrollHeight) {
            this.refresh();
        }
        if (scrollTop >= maxScroll) {
            return activeTarget != (i = targets[targets.length - 1]) && this.activate(i);
        }
        if (activeTarget && scrollTop < offsets[0]) {
            this.activeTarget = null;
            return this.clear();
        }
        for (i = offsets.length; i--; ) {
            activeTarget != targets[i] && scrollTop >= offsets[i] && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1]) && this.activate(targets[i]);
        }
    };
    ScrollSpy.prototype.activate = function(target) {
        this.activeTarget = target;
        this.clear();
        var selector = this.selector + '[data-target="' + target + '"],' + this.selector + '[href="' + target + '"]';
        var active = $(selector).parents("li").addClass("active");
        if (active.parent(".dropdown-menu").length) {
            active = active.closest("li.dropdown").addClass("active");
        }
        active.trigger("activate.bs.scrollspy");
    };
    ScrollSpy.prototype.clear = function() {
        $(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
    };
    // SCROLLSPY PLUGIN DEFINITION
    // ===========================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.scrollspy");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.scrollspy", data = new ScrollSpy(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.scrollspy;
    $.fn.scrollspy = Plugin;
    $.fn.scrollspy.Constructor = ScrollSpy;
    // SCROLLSPY NO CONFLICT
    // =====================
    $.fn.scrollspy.noConflict = function() {
        $.fn.scrollspy = old;
        return this;
    };
    // SCROLLSPY DATA-API
    // ==================
    $(window).on("load.bs.scrollspy.data-api", function() {
        $('[data-spy="scroll"]').each(function() {
            var $spy = $(this);
            Plugin.call($spy, $spy.data());
        });
    });
}(jQuery);

/* ========================================================================
 * Bootstrap: tab.js v3.3.6
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // TAB CLASS DEFINITION
    // ====================
    var Tab = function(element) {
        // jscs:disable requireDollarBeforejQueryAssignment
        this.element = $(element);
    };
    Tab.VERSION = "3.3.6";
    Tab.TRANSITION_DURATION = 150;
    Tab.prototype.show = function() {
        var $this = this.element;
        var $ul = $this.closest("ul:not(.dropdown-menu)");
        var selector = $this.data("target");
        if (!selector) {
            selector = $this.attr("href");
            selector = selector && selector.replace(/.*(?=#[^\s]*$)/, "");
        }
        if ($this.parent("li").hasClass("active")) return;
        var $previous = $ul.find(".active:last a");
        var hideEvent = $.Event("hide.bs.tab", {
            relatedTarget: $this[0]
        });
        var showEvent = $.Event("show.bs.tab", {
            relatedTarget: $previous[0]
        });
        $previous.trigger(hideEvent);
        $this.trigger(showEvent);
        if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return;
        var $target = $(selector);
        this.activate($this.closest("li"), $ul);
        this.activate($target, $target.parent(), function() {
            $previous.trigger({
                type: "hidden.bs.tab",
                relatedTarget: $this[0]
            });
            $this.trigger({
                type: "shown.bs.tab",
                relatedTarget: $previous[0]
            });
        });
    };
    Tab.prototype.activate = function(element, container, callback) {
        var $active = container.find("> .active");
        var transition = callback && $.support.transition && ($active.length && $active.hasClass("fade") || !!container.find("> .fade").length);
        function next() {
            $active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", false);
            element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", true);
            if (transition) {
                element[0].offsetWidth;
                // reflow for transition
                element.addClass("in");
            } else {
                element.removeClass("fade");
            }
            if (element.parent(".dropdown-menu").length) {
                element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", true);
            }
            callback && callback();
        }
        $active.length && transition ? $active.one("bsTransitionEnd", next).emulateTransitionEnd(Tab.TRANSITION_DURATION) : next();
        $active.removeClass("in");
    };
    // TAB PLUGIN DEFINITION
    // =====================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.tab");
            if (!data) $this.data("bs.tab", data = new Tab(this));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.tab;
    $.fn.tab = Plugin;
    $.fn.tab.Constructor = Tab;
    // TAB NO CONFLICT
    // ===============
    $.fn.tab.noConflict = function() {
        $.fn.tab = old;
        return this;
    };
    // TAB DATA-API
    // ============
    var clickHandler = function(e) {
        e.preventDefault();
        Plugin.call($(this), "show");
    };
    $(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', clickHandler).on("click.bs.tab.data-api", '[data-toggle="pill"]', clickHandler);
}(jQuery);

/* ========================================================================
 * Bootstrap: affix.js v3.3.6
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */
+function($) {
    "use strict";
    // AFFIX CLASS DEFINITION
    // ======================
    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options);
        this.$target = $(this.options.target).on("scroll.bs.affix.data-api", $.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", $.proxy(this.checkPositionWithEventLoop, this));
        this.$element = $(element);
        this.affixed = null;
        this.unpin = null;
        this.pinnedOffset = null;
        this.checkPosition();
    };
    Affix.VERSION = "3.3.6";
    Affix.RESET = "affix affix-top affix-bottom";
    Affix.DEFAULTS = {
        offset: 0,
        target: window
    };
    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        var targetHeight = this.$target.height();
        if (offsetTop != null && this.affixed == "top") return scrollTop < offsetTop ? "top" : false;
        if (this.affixed == "bottom") {
            if (offsetTop != null) return scrollTop + this.unpin <= position.top ? false : "bottom";
            return scrollTop + targetHeight <= scrollHeight - offsetBottom ? false : "bottom";
        }
        var initializing = this.affixed == null;
        var colliderTop = initializing ? scrollTop : position.top;
        var colliderHeight = initializing ? targetHeight : height;
        if (offsetTop != null && scrollTop <= offsetTop) return "top";
        if (offsetBottom != null && colliderTop + colliderHeight >= scrollHeight - offsetBottom) return "bottom";
        return false;
    };
    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(Affix.RESET).addClass("affix");
        var scrollTop = this.$target.scrollTop();
        var position = this.$element.offset();
        return this.pinnedOffset = position.top - scrollTop;
    };
    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1);
    };
    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(":visible")) return;
        var height = this.$element.height();
        var offset = this.options.offset;
        var offsetTop = offset.top;
        var offsetBottom = offset.bottom;
        var scrollHeight = Math.max($(document).height(), $(document.body).height());
        if (typeof offset != "object") offsetBottom = offsetTop = offset;
        if (typeof offsetTop == "function") offsetTop = offset.top(this.$element);
        if (typeof offsetBottom == "function") offsetBottom = offset.bottom(this.$element);
        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom);
        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css("top", "");
            var affixType = "affix" + (affix ? "-" + affix : "");
            var e = $.Event(affixType + ".bs.affix");
            this.$element.trigger(e);
            if (e.isDefaultPrevented()) return;
            this.affixed = affix;
            this.unpin = affix == "bottom" ? this.getPinnedOffset() : null;
            this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix", "affixed") + ".bs.affix");
        }
        if (affix == "bottom") {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            });
        }
    };
    // AFFIX PLUGIN DEFINITION
    // =======================
    function Plugin(option) {
        return this.each(function() {
            var $this = $(this);
            var data = $this.data("bs.affix");
            var options = typeof option == "object" && option;
            if (!data) $this.data("bs.affix", data = new Affix(this, options));
            if (typeof option == "string") data[option]();
        });
    }
    var old = $.fn.affix;
    $.fn.affix = Plugin;
    $.fn.affix.Constructor = Affix;
    // AFFIX NO CONFLICT
    // =================
    $.fn.affix.noConflict = function() {
        $.fn.affix = old;
        return this;
    };
    // AFFIX DATA-API
    // ==============
    $(window).on("load", function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this);
            var data = $spy.data();
            data.offset = data.offset || {};
            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom;
            if (data.offsetTop != null) data.offset.top = data.offsetTop;
            Plugin.call($spy, data);
        });
    });
}(jQuery);

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 4.3.1
 *
 * File input styled for Bootstrap 3.0 that utilizes HTML5 File Input's advanced features including the FileReader API.
 *
 * The plugin drastically enhances the HTML file input to preview multiple files on the client before upload. In
 * addition it provides the ability to preview content of images, text, videos, audio, html, flash and other objects.
 * It also offers the ability to upload and delete files using AJAX, and add files in batches (i.e. preview, append,
 * or remove before upload).
 *
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
(function(factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        // jshint ignore:line
        // AMD. Register as an anonymous module.
        define([ "jquery" ], factory);
    } else {
        // noinspection JSUnresolvedVariable
        if (typeof module === "object" && module.exports) {
            // jshint ignore:line
            // Node/CommonJS
            // noinspection JSUnresolvedVariable
            module.exports = factory(require("jquery"));
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }
})(function($) {
    "use strict";
    $.fn.fileinputLocales = {};
    var NAMESPACE, objUrl, compare, isIE, isEdge, handler, previewCache, getNum, hasFileAPISupport, hasDragDropSupport, hasFileUploadSupport, addCss, STYLE_SETTING, OBJECT_PARAMS, DEFAULT_PREVIEW, defaultFileActionSettings, tMain1, tMain2, tPreview, tIcon, tClose, tCaption, tBtnDefault, tBtnLink, tBtnBrowse, tModal, tProgress, tFooter, tActions, tActionDelete, tActionUpload, tZoom, tGeneric, tHtml, tImage, tText, tVideo, tAudio, tFlash, tObject, tOther, defaultLayoutTemplates, defaultPreviewTemplates, defaultPreviewTypes, defaultPreviewSettings, FileInput, defaultFileTypeSettings, isEmpty, isArray, isSet, getElement, uniqId, htmlEncode, replaceTags, cleanMemory;
    NAMESPACE = ".fileinput";
    //noinspection JSUnresolvedVariable
    objUrl = window.URL || window.webkitURL;
    compare = function(input, str, exact) {
        return input !== undefined && (exact ? input === str : input.match(str));
    };
    isIE = function(ver) {
        // check for IE versions < 11
        if (navigator.appName !== "Microsoft Internet Explorer") {
            return false;
        }
        if (ver === 10) {
            return new RegExp("msie\\s" + ver, "i").test(navigator.userAgent);
        }
        var div = document.createElement("div"), status;
        div.innerHTML = "<!--[if IE " + ver + "]> <i></i> <![endif]-->";
        status = div.getElementsByTagName("i").length;
        document.body.appendChild(div);
        div.parentNode.removeChild(div);
        return status;
    };
    isEdge = function() {
        return new RegExp("Edge/[0-9]+", "i").test(navigator.userAgent);
    };
    handler = function($el, event, callback, skipNS) {
        var ev = skipNS ? event : event.split(" ").join(NAMESPACE + " ") + NAMESPACE;
        $el.off(ev).on(ev, callback);
    };
    previewCache = {
        data: {},
        init: function(obj) {
            var content = obj.initialPreview, id = obj.id;
            if (content.length > 0 && !isArray(content)) {
                content = content.split(obj.initialPreviewDelimiter);
            }
            previewCache.data[id] = {
                content: content,
                config: obj.initialPreviewConfig,
                tags: obj.initialPreviewThumbTags,
                delimiter: obj.initialPreviewDelimiter,
                template: obj.previewGenericTemplate,
                msg: function(n) {
                    return obj._getMsgSelected(n);
                },
                initId: obj.previewInitId,
                footer: obj._getLayoutTemplate("footer").replace(/\{progress}/g, obj._renderThumbProgress()),
                isDelete: obj.initialPreviewShowDelete,
                caption: obj.initialCaption,
                actions: function(showUpload, showDelete, disabled, url, key) {
                    return obj._renderFileActions(showUpload, showDelete, disabled, url, key);
                }
            };
        },
        fetch: function(id) {
            return previewCache.data[id].content.filter(function(n) {
                return n !== null;
            });
        },
        count: function(id, all) {
            return !!previewCache.data[id] && !!previewCache.data[id].content ? all ? previewCache.data[id].content.length : previewCache.fetch(id).length : 0;
        },
        get: function(id, i, isDisabled) {
            var ind = "init_" + i, data = previewCache.data[id], config = data.config[i], previewId = data.initId + "-" + ind, out, $tmp, frameClass = " file-preview-initial";
            /** @namespace config.frameClass */
            /** @namespace config.frameAttr */
            isDisabled = isDisabled === undefined ? true : isDisabled;
            if (data.content[i] === null) {
                return "";
            }
            if (!isEmpty(config) && !isEmpty(config.frameClass)) {
                frameClass += " " + config.frameClass;
            }
            out = data.template.replace(/\{previewId}/g, previewId).replace(/\{frameClass}/g, frameClass).replace(/\{fileindex}/g, ind).replace(/\{content}/g, data.content[i]).replace(/\{footer}/g, previewCache.footer(id, i, isDisabled));
            if (data.tags.length && data.tags[i]) {
                out = replaceTags(out, data.tags[i]);
            }
            if (!isEmpty(config) && !isEmpty(config.frameAttr)) {
                $tmp = $(document.createElement("div")).html(out);
                $tmp.find(".file-preview-initial").attr(config.frameAttr);
                out = $tmp.html();
                $tmp.remove();
            }
            return out;
        },
        add: function(id, content, config, tags, append) {
            var data = $.extend(true, {}, previewCache.data[id]), index;
            if (!isArray(content)) {
                content = content.split(data.delimiter);
            }
            if (append) {
                index = data.content.push(content) - 1;
                data.config[index] = config;
                data.tags[index] = tags;
            } else {
                index = content.length;
                data.content = content;
                data.config = config;
                data.tags = tags;
            }
            previewCache.data[id] = data;
            return index;
        },
        set: function(id, content, config, tags, append) {
            var data = $.extend(true, {}, previewCache.data[id]), i, chk;
            if (!content || !content.length) {
                return;
            }
            if (!isArray(content)) {
                content = content.split(data.delimiter);
            }
            chk = content.filter(function(n) {
                return n !== null;
            });
            if (!chk.length) {
                return;
            }
            if (data.content === undefined) {
                data.content = [];
            }
            if (data.config === undefined) {
                data.config = [];
            }
            if (data.tags === undefined) {
                data.tags = [];
            }
            if (append) {
                for (i = 0; i < content.length; i++) {
                    if (content[i]) {
                        data.content.push(content[i]);
                    }
                }
                for (i = 0; i < config.length; i++) {
                    if (config[i]) {
                        data.config.push(config[i]);
                    }
                }
                for (i = 0; i < tags.length; i++) {
                    if (tags[i]) {
                        data.tags.push(tags[i]);
                    }
                }
            } else {
                data.content = content;
                data.config = config;
                data.tags = tags;
            }
            previewCache.data[id] = data;
        },
        unset: function(id, index) {
            var chk = previewCache.count(id);
            if (!chk) {
                return;
            }
            if (chk === 1) {
                previewCache.data[id].content = [];
                previewCache.data[id].config = [];
                return;
            }
            previewCache.data[id].content[index] = null;
            previewCache.data[id].config[index] = null;
        },
        out: function(id) {
            var html = "", data = previewCache.data[id], caption, len = previewCache.count(id, true);
            if (len === 0) {
                return {
                    content: "",
                    caption: ""
                };
            }
            for (var i = 0; i < len; i++) {
                html += previewCache.get(id, i);
            }
            caption = data.msg(previewCache.count(id));
            return {
                content: html,
                caption: caption
            };
        },
        footer: function(id, i, isDisabled) {
            var data = previewCache.data[id];
            isDisabled = isDisabled === undefined ? true : isDisabled;
            if (data.config.length === 0 || isEmpty(data.config[i])) {
                return "";
            }
            var config = data.config[i], caption = isSet("caption", config) ? config.caption : "", width = isSet("width", config) ? config.width : "auto", url = isSet("url", config) ? config.url : false, key = isSet("key", config) ? config.key : null, disabled = url === false && isDisabled, actions = data.isDelete ? data.actions(false, true, disabled, url, key) : "", footer = data.footer.replace(/\{actions}/g, actions);
            return footer.replace(/\{caption}/g, caption).replace(/\{width}/g, width).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "");
        }
    };
    getNum = function(num, def) {
        def = def || 0;
        if (typeof num === "number") {
            return num;
        }
        if (typeof num === "string") {
            num = parseFloat(num);
        }
        return isNaN(num) ? def : num;
    };
    hasFileAPISupport = function() {
        return !!(window.File && window.FileReader);
    };
    hasDragDropSupport = function() {
        var div = document.createElement("div");
        /** @namespace div.draggable */
        /** @namespace div.ondragstart */
        /** @namespace div.ondrop */
        // Fix for MS Edge drag & drop support bug
        return !isIE(9) && !isEdge() && (div.draggable !== undefined || div.ondragstart !== undefined && div.ondrop !== undefined);
    };
    hasFileUploadSupport = function() {
        return hasFileAPISupport() && window.FormData;
    };
    addCss = function($el, css) {
        $el.removeClass(css).addClass(css);
    };
    STYLE_SETTING = 'style="width:{width};height:{height};"';
    OBJECT_PARAMS = '      <param name="controller" value="true" />\n' + '      <param name="allowFullScreen" value="true" />\n' + '      <param name="allowScriptAccess" value="always" />\n' + '      <param name="autoPlay" value="false" />\n' + '      <param name="autoStart" value="false" />\n' + '      <param name="quality" value="high" />\n';
    DEFAULT_PREVIEW = '<div class="file-preview-other">\n' + '   <span class="{previewFileIconClass}">{previewFileIcon}</span>\n' + "</div>";
    defaultFileActionSettings = {
        removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>',
        removeClass: "btn btn-xs btn-default",
        removeTitle: "Remove file",
        uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>',
        uploadClass: "btn btn-xs btn-default",
        uploadTitle: "Upload file",
        indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>',
        indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
        indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
        indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>',
        indicatorNewTitle: "Not uploaded yet",
        indicatorSuccessTitle: "Uploaded",
        indicatorErrorTitle: "Upload Error",
        indicatorLoadingTitle: "Uploading ..."
    };
    tMain1 = "{preview}\n" + '<div class="kv-upload-progress hide"></div>\n' + '<div class="input-group {class}">\n' + "   {caption}\n" + '   <div class="input-group-btn">\n' + "       {remove}\n" + "       {cancel}\n" + "       {upload}\n" + "       {browse}\n" + "   </div>\n" + "</div>";
    tMain2 = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n';
    tPreview = '<div class="file-preview {class}">\n' + "    {close}" + '    <div class="{dropClass}">\n' + '    <div class="file-preview-thumbnails">\n' + "    </div>\n" + '    <div class="clearfix"></div>' + '    <div class="file-preview-status text-center text-success"></div>\n' + '    <div class="kv-fileinput-error"></div>\n' + "    </div>\n" + "</div>";
    tClose = '<div class="close fileinput-remove">&times;</div>\n';
    tIcon = '<span class="glyphicon glyphicon-file kv-caption-icon"></span>';
    tCaption = '<div tabindex="500" class="form-control file-caption {class}">\n' + '   <div class="file-caption-name"></div>\n' + "</div>\n";
    //noinspection HtmlUnknownAttribute
    tBtnDefault = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</button>';
    tBtnLink = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</a>';
    tBtnBrowse = '<div tabindex="500" class="{css}" {status}>{icon}{label}</div>';
    tModal = '<div id="{id}" class="file-preview-detail-modal modal fade" tabindex="-1">\n' + '  <div class="modal-dialog modal-lg">\n' + '    <div class="modal-content">\n' + '      <div class="modal-header">\n' + '        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n' + '        <h3 class="modal-title">{heading} <small>{title}</small></h3>\n' + "      </div>\n" + '      <div class="modal-body">\n' + "           <pre>{body}</pre>\n" + "      </div>\n" + "    </div>\n" + "  </div>\n" + "</div>";
    tProgress = '<div class="progress">\n' + '    <div class="{class}" role="progressbar"' + ' aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n' + "        {percent}%\n" + "     </div>\n" + "</div>";
    tFooter = '<div class="file-thumbnail-footer">\n' + '    <div class="file-footer-caption" title="{caption}">{caption}</div>\n' + "    {progress} {actions}\n" + "</div>";
    tActions = '<div class="file-actions">\n' + '    <div class="file-footer-buttons">\n' + "        {upload}{delete}{other}" + "    </div>\n" + '    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n' + '    <div class="clearfix"></div>\n' + "</div>";
    tActionDelete = '<button type="button" class="kv-file-remove {removeClass}" ' + 'title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n';
    tActionUpload = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">' + "   {uploadIcon}\n</button>\n";
    tZoom = '<button type="button" class="btn btn-default btn-xs btn-block" title="{zoomTitle}: {caption}" onclick="{dialog}">\n' + "   {zoomInd}\n" + "</button>\n";
    tGeneric = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n' + "   {content}\n" + "   {footer}\n" + "</div>\n";
    tHtml = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n' + '    <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n' + "       " + DEFAULT_PREVIEW + "\n" + "    </object>\n" + "   {footer}\n" + "</div>";
    tImage = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n' + '   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" ' + STYLE_SETTING + ">\n" + "   {footer}\n" + "</div>\n";
    tText = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n' + '   <pre class="file-preview-text" title="{caption}" ' + STYLE_SETTING + ">{data}</pre>\n" + "   {zoom}\n" + "   {footer}\n" + "</div>";
    tVideo = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"' + ' title="{caption}" ' + STYLE_SETTING + ">\n" + '   <video width="{width}" height="{height}" controls>\n' + '       <source src="{data}" type="{type}">\n' + "       " + DEFAULT_PREVIEW + "\n" + "   </video>\n" + "   {footer}\n" + "</div>\n";
    tAudio = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"' + ' title="{caption}" ' + STYLE_SETTING + ">\n" + "   <audio controls>\n" + '       <source src="' + "{data}" + '" type="{type}">\n' + "       " + DEFAULT_PREVIEW + "\n" + "   </audio>\n" + "   {footer}\n" + "</div>";
    tFlash = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"' + ' title="{caption}" ' + STYLE_SETTING + ">\n" + '   <object class="file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + OBJECT_PARAMS + "       " + DEFAULT_PREVIEW + "\n" + "   </object>\n" + "   {footer}\n" + "</div>\n";
    tObject = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"' + ' title="{caption}" ' + STYLE_SETTING + ">\n" + '   <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n' + '       <param name="movie" value="{caption}" />\n' + OBJECT_PARAMS + "         " + DEFAULT_PREVIEW + "\n" + "   </object>\n" + "   {footer}\n" + "</div>";
    tOther = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}"' + ' title="{caption}" ' + STYLE_SETTING + ">\n" + '   <div class="file-preview-other-frame">\n' + "   " + DEFAULT_PREVIEW + "\n" + "   </div>\n" + '   <div class="file-preview-other-footer">{footer}</div>\n' + "</div>";
    defaultLayoutTemplates = {
        main1: tMain1,
        main2: tMain2,
        preview: tPreview,
        close: tClose,
        zoom: tZoom,
        icon: tIcon,
        caption: tCaption,
        modal: tModal,
        progress: tProgress,
        footer: tFooter,
        actions: tActions,
        actionDelete: tActionDelete,
        actionUpload: tActionUpload,
        btnDefault: tBtnDefault,
        btnLink: tBtnLink,
        btnBrowse: tBtnBrowse
    };
    defaultPreviewTemplates = {
        generic: tGeneric,
        html: tHtml,
        image: tImage,
        text: tText,
        video: tVideo,
        audio: tAudio,
        flash: tFlash,
        object: tObject,
        other: tOther
    };
    defaultPreviewTypes = [ "image", "html", "text", "video", "audio", "flash", "object" ];
    defaultPreviewSettings = {
        image: {
            width: "auto",
            height: "160px"
        },
        html: {
            width: "213px",
            height: "160px"
        },
        text: {
            width: "160px",
            height: "136px"
        },
        video: {
            width: "213px",
            height: "160px"
        },
        audio: {
            width: "213px",
            height: "80px"
        },
        flash: {
            width: "213px",
            height: "160px"
        },
        object: {
            width: "160px",
            height: "160px"
        },
        other: {
            width: "160px",
            height: "160px"
        }
    };
    defaultFileTypeSettings = {
        image: function(vType, vName) {
            return compare(vType, "image.*") || compare(vName, /\.(gif|png|jpe?g)$/i);
        },
        html: function(vType, vName) {
            return compare(vType, "text/html") || compare(vName, /\.(htm|html)$/i);
        },
        text: function(vType, vName) {
            return compare(vType, "text.*") || compare(vType, /\.(xml|javascript)$/i) || compare(vName, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
        },
        video: function(vType, vName) {
            return compare(vType, "video.*") && (compare(vType, /(ogg|mp4|mp?g|webm|3gp)$/i) || compare(vName, /\.(og?|mp4|webm|mp?g|3gp)$/i));
        },
        audio: function(vType, vName) {
            return compare(vType, "audio.*") && (compare(vType, /(ogg|mp3|mp?g|wav)$/i) || compare(vName, /\.(og?|mp3|mp?g|wav)$/i));
        },
        flash: function(vType, vName) {
            return compare(vType, "application/x-shockwave-flash", true) || compare(vName, /\.(swf)$/i);
        },
        object: function(vType, vName) {
            return compare(vType, "application/pdf", true) || compare(vName, /\.(pdf)$/i);
        },
        other: function() {
            return true;
        }
    };
    isEmpty = function(value, trim) {
        return value === undefined || value === null || value.length === 0 || trim && $.trim(value) === "";
    };
    isArray = function(a) {
        return Array.isArray(a) || Object.prototype.toString.call(a) === "[object Array]";
    };
    isSet = function(needle, haystack) {
        return typeof haystack === "object" && needle in haystack;
    };
    getElement = function(options, param, value) {
        return isEmpty(options) || isEmpty(options[param]) ? value : $(options[param]);
    };
    uniqId = function() {
        return Math.round(new Date().getTime() + Math.random() * 100);
    };
    htmlEncode = function(str) {
        return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    };
    replaceTags = function(str, tags) {
        var out = str;
        if (!tags) {
            return out;
        }
        $.each(tags, function(key, value) {
            if (typeof value === "function") {
                value = value();
            }
            out = out.split(key).join(value);
        });
        return out;
    };
    cleanMemory = function($thumb) {
        var data = $thumb.is("img") ? $thumb.attr("src") : $thumb.find("source").attr("src");
        /** @namespace objUrl.revokeObjectURL */
        objUrl.revokeObjectURL(data);
    };
    FileInput = function(element, options) {
        var self = this;
        self.$element = $(element);
        if (!self._validate()) {
            return;
        }
        self.isPreviewable = hasFileAPISupport();
        self.isIE9 = isIE(9);
        self.isIE10 = isIE(10);
        if (self.isPreviewable || self.isIE9) {
            self._init(options);
            self._listen();
        } else {
            self.$element.removeClass("file-loading");
        }
    };
    FileInput.prototype = {
        constructor: FileInput,
        _init: function(options) {
            var self = this, $el = self.$element, t;
            $.each(options, function(key, value) {
                switch (key) {
                  case "minFileCount":
                  case "maxFileCount":
                  case "maxFileSize":
                    self[key] = getNum(value);
                    break;

                  default:
                    self[key] = value;
                    break;
                }
            });
            if (isEmpty(self.allowedPreviewTypes)) {
                self.allowedPreviewTypes = defaultPreviewTypes;
            }
            self.fileInputCleared = false;
            self.fileBatchCompleted = true;
            if (!self.isPreviewable) {
                self.showPreview = false;
            }
            self.uploadFileAttr = !isEmpty($el.attr("name")) ? $el.attr("name") : "file_data";
            self.reader = null;
            self.formdata = {};
            self.clearStack();
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.uploadAsyncCount = 0;
            self.loadedImages = [];
            self.totalImagesCount = 0;
            self.ajaxRequests = [];
            self.isError = false;
            self.ajaxAborted = false;
            self.cancelling = false;
            t = self._getLayoutTemplate("progress");
            self.progressTemplate = t.replace("{class}", self.progressClass);
            self.progressCompleteTemplate = t.replace("{class}", self.progressCompleteClass);
            self.progressErrorTemplate = t.replace("{class}", self.progressErrorClass);
            self.dropZoneEnabled = hasDragDropSupport() && self.dropZoneEnabled;
            self.isDisabled = self.$element.attr("disabled") || self.$element.attr("readonly");
            self.isUploadable = hasFileUploadSupport() && !isEmpty(self.uploadUrl);
            self.slug = typeof options.slugCallback === "function" ? options.slugCallback : self._slugDefault;
            self.mainTemplate = self.showCaption ? self._getLayoutTemplate("main1") : self._getLayoutTemplate("main2");
            self.captionTemplate = self._getLayoutTemplate("caption");
            self.previewGenericTemplate = self._getPreviewTemplate("generic");
            if (self.resizeImage && (self.maxImageWidth || self.maxImageHeight)) {
                self.imageCanvas = document.createElement("canvas");
                self.imageCanvasContext = self.imageCanvas.getContext("2d");
            }
            if (isEmpty(self.$element.attr("id"))) {
                self.$element.attr("id", uniqId());
            }
            if (self.$container === undefined) {
                self.$container = self._createContainer();
            } else {
                self._refreshContainer();
            }
            self.$dropZone = self.$container.find(".file-drop-zone");
            self.$progress = self.$container.find(".kv-upload-progress");
            self.$btnUpload = self.$container.find(".fileinput-upload");
            self.$captionContainer = getElement(options, "elCaptionContainer", self.$container.find(".file-caption"));
            self.$caption = getElement(options, "elCaptionText", self.$container.find(".file-caption-name"));
            self.$previewContainer = getElement(options, "elPreviewContainer", self.$container.find(".file-preview"));
            self.$preview = getElement(options, "elPreviewImage", self.$container.find(".file-preview-thumbnails"));
            self.$previewStatus = getElement(options, "elPreviewStatus", self.$container.find(".file-preview-status"));
            self.$errorContainer = getElement(options, "elErrorContainer", self.$previewContainer.find(".kv-fileinput-error"));
            if (!isEmpty(self.msgErrorClass)) {
                addCss(self.$errorContainer, self.msgErrorClass);
            }
            self.$errorContainer.hide();
            self.fileActionSettings = $.extend(true, defaultFileActionSettings, options.fileActionSettings);
            self.previewInitId = "preview-" + uniqId();
            self.id = self.$element.attr("id");
            previewCache.init(self);
            self._initPreview(true);
            self._initPreviewDeletes();
            self.options = options;
            self._setFileDropZoneTitle();
            self.$element.removeClass("file-loading");
            if (self.$element.attr("disabled")) {
                self.disable();
            }
        },
        _validate: function() {
            var self = this, $exception;
            if (self.$element.attr("type") === "file") {
                return true;
            }
            $exception = '<div class="help-block alert alert-warning">' + "<h4>Invalid Input Type</h4>" + "You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize." + "</div>";
            self.$element.after($exception);
            return false;
        },
        _errorsExist: function() {
            var self = this, $err;
            if (self.$errorContainer.find("li").length) {
                return true;
            }
            $err = $(document.createElement("div")).html(self.$errorContainer.html());
            $err.find("span.kv-error-close").remove();
            $err.find("ul").remove();
            return $.trim($err.text()).length ? true : false;
        },
        _errorHandler: function(evt, caption) {
            var self = this, err = evt.target.error;
            /** @namespace err.NOT_FOUND_ERR */
            /** @namespace err.SECURITY_ERR */
            /** @namespace err.NOT_READABLE_ERR */
            if (err.code === err.NOT_FOUND_ERR) {
                self._showError(self.msgFileNotFound.replace("{name}", caption));
            } else if (err.code === err.SECURITY_ERR) {
                self._showError(self.msgFileSecured.replace("{name}", caption));
            } else if (err.code === err.NOT_READABLE_ERR) {
                self._showError(self.msgFileNotReadable.replace("{name}", caption));
            } else if (err.code === err.ABORT_ERR) {
                self._showError(self.msgFilePreviewAborted.replace("{name}", caption));
            } else {
                self._showError(self.msgFilePreviewError.replace("{name}", caption));
            }
        },
        _addError: function(msg) {
            var self = this, $error = self.$errorContainer;
            if (msg && $error.length) {
                $error.html(self.errorCloseButton + msg);
                handler($error.find(".kv-error-close"), "click", function() {
                    $error.fadeOut("slow");
                });
            }
        },
        _resetErrors: function(fade) {
            var self = this, $error = self.$errorContainer;
            self.isError = false;
            self.$container.removeClass("has-error");
            $error.html("");
            if (fade) {
                $error.fadeOut("slow");
            } else {
                $error.hide();
            }
        },
        _showFolderError: function(folders) {
            var self = this, $error = self.$errorContainer, msg;
            if (!folders) {
                return;
            }
            msg = self.msgFoldersNotAllowed.replace(/\{n}/g, folders);
            self._addError(msg);
            addCss(self.$container, "has-error");
            $error.fadeIn(800);
            self._raise("filefoldererror", [ folders, msg ]);
        },
        _showUploadError: function(msg, params, event) {
            var self = this, $error = self.$errorContainer, ev = event || "fileuploaderror", e = params && params.id ? '<li data-file-id="' + params.id + '">' + msg + "</li>" : "<li>" + msg + "</li>";
            if ($error.find("ul").length === 0) {
                self._addError("<ul>" + e + "</ul>");
            } else {
                $error.find("ul").append(e);
            }
            $error.fadeIn(800);
            self._raise(ev, [ params, msg ]);
            self.$container.removeClass("file-input-new");
            addCss(self.$container, "has-error");
            return true;
        },
        _showError: function(msg, params, event) {
            var self = this, $error = self.$errorContainer, ev = event || "fileerror";
            params = params || {};
            params.reader = self.reader;
            self._addError(msg);
            $error.fadeIn(800);
            self._raise(ev, [ params, msg ]);
            if (!self.isUploadable) {
                self._clearFileInput();
            }
            self.$container.removeClass("file-input-new");
            addCss(self.$container, "has-error");
            self.$btnUpload.attr("disabled", true);
            return true;
        },
        _noFilesError: function(params) {
            var self = this, label = self.minFileCount > 1 ? self.filePlural : self.fileSingle, msg = self.msgFilesTooLess.replace("{n}", self.minFileCount).replace("{files}", label), $error = self.$errorContainer;
            self._addError(msg);
            self.isError = true;
            self._updateFileDetails(0);
            $error.fadeIn(800);
            self._raise("fileerror", [ params, msg ]);
            self._clearFileInput();
            addCss(self.$container, "has-error");
        },
        _parseError: function(jqXHR, errorThrown, fileName) {
            /** @namespace jqXHR.responseJSON */
            var self = this, errMsg = $.trim(errorThrown + ""), dot = errMsg.slice(-1) === "." ? "" : ".", text = jqXHR.responseJSON !== undefined && jqXHR.responseJSON.error !== undefined ? jqXHR.responseJSON.error : jqXHR.responseText;
            if (self.cancelling && self.msgUploadAborted) {
                errMsg = self.msgUploadAborted;
            }
            if (self.showAjaxErrorDetails && text) {
                text = $.trim(text.replace(/\n\s*\n/g, "\n"));
                text = text.length > 0 ? "<pre>" + text + "</pre>" : "";
                errMsg += dot + text;
            } else {
                errMsg += dot;
            }
            self.cancelling = false;
            return fileName ? "<b>" + fileName + ": </b>" + errMsg : errMsg;
        },
        _parseFileType: function(file) {
            var self = this, isValid, vType, cat, i;
            for (i = 0; i < defaultPreviewTypes.length; i += 1) {
                cat = defaultPreviewTypes[i];
                isValid = isSet(cat, self.fileTypeSettings) ? self.fileTypeSettings[cat] : defaultFileTypeSettings[cat];
                vType = isValid(file.type, file.name) ? cat : "";
                if (!isEmpty(vType)) {
                    return vType;
                }
            }
            return "other";
        },
        _parseFilePreviewIcon: function(content, fname) {
            var self = this, ext, icn = self.previewFileIcon;
            if (fname && fname.indexOf(".") > -1) {
                ext = fname.split(".").pop();
                if (self.previewFileIconSettings && self.previewFileIconSettings[ext]) {
                    icn = self.previewFileIconSettings[ext];
                }
                if (self.previewFileExtSettings) {
                    $.each(self.previewFileExtSettings, function(key, func) {
                        if (self.previewFileIconSettings[key] && func(ext)) {
                            icn = self.previewFileIconSettings[key];
                        }
                    });
                }
            }
            if (content.indexOf("{previewFileIcon}") > -1) {
                return content.replace(/\{previewFileIconClass}/g, self.previewFileIconClass).replace(/\{previewFileIcon}/g, icn);
            }
            return content;
        },
        _raise: function(event, params) {
            var self = this, e = $.Event(event);
            if (params !== undefined) {
                self.$element.trigger(e, params);
            } else {
                self.$element.trigger(e);
            }
            if (e.isDefaultPrevented()) {
                return false;
            }
            if (!e.result) {
                return e.result;
            }
            switch (event) {
              // ignore these events
                case "filebatchuploadcomplete":
              case "filebatchuploadsuccess":
              case "fileuploaded":
              case "fileclear":
              case "filecleared":
              case "filereset":
              case "fileerror":
              case "filefoldererror":
              case "fileuploaderror":
              case "filebatchuploaderror":
              case "filedeleteerror":
              case "filecustomerror":
              case "filesuccessremove":
                break;

              // receive data response via `filecustomerror` event`
                default:
                self.ajaxAborted = e.result;
                break;
            }
            return true;
        },
        _listen: function() {
            var self = this, $el = self.$element, $form = $el.closest("form"), $cont = self.$container;
            handler($el, "change", $.proxy(self._change, self));
            handler(self.$btnFile, "click", $.proxy(self._browse, self));
            handler($form, "reset", $.proxy(self.reset, self));
            handler($cont.find(".fileinput-remove:not([disabled])"), "click", $.proxy(self.clear, self));
            handler($cont.find(".fileinput-cancel"), "click", $.proxy(self.cancel, self));
            self._initDragDrop();
            if (!self.isUploadable) {
                handler($form, "submit", $.proxy(self._submitForm, self));
            }
            handler(self.$container.find(".fileinput-upload"), "click", $.proxy(self._uploadClick, self));
        },
        _initDragDrop: function() {
            var self = this, $zone = self.$dropZone;
            if (self.isUploadable && self.dropZoneEnabled && self.showPreview) {
                handler($zone, "dragenter dragover", $.proxy(self._zoneDragEnter, self));
                handler($zone, "dragleave", $.proxy(self._zoneDragLeave, self));
                handler($zone, "drop", $.proxy(self._zoneDrop, self));
                handler($(document), "dragenter dragover drop", self._zoneDragDropInit);
            }
        },
        _zoneDragDropInit: function(e) {
            e.stopPropagation();
            e.preventDefault();
        },
        _zoneDragEnter: function(e) {
            var self = this, hasFiles = $.inArray("Files", e.originalEvent.dataTransfer.types) > -1;
            self._zoneDragDropInit(e);
            if (self.isDisabled || !hasFiles) {
                e.originalEvent.dataTransfer.effectAllowed = "none";
                e.originalEvent.dataTransfer.dropEffect = "none";
                return;
            }
            addCss(self.$dropZone, "file-highlighted");
        },
        _zoneDragLeave: function(e) {
            var self = this;
            self._zoneDragDropInit(e);
            if (self.isDisabled) {
                return;
            }
            self.$dropZone.removeClass("file-highlighted");
        },
        _zoneDrop: function(e) {
            var self = this;
            e.preventDefault();
            /** @namespace e.originalEvent.dataTransfer */
            if (self.isDisabled || isEmpty(e.originalEvent.dataTransfer.files)) {
                return;
            }
            self._change(e, "dragdrop");
            self.$dropZone.removeClass("file-highlighted");
        },
        _uploadClick: function(e) {
            var self = this, $btn = self.$container.find(".fileinput-upload"), $form, isEnabled = !$btn.hasClass("disabled") && isEmpty($btn.attr("disabled"));
            if (e && e.isDefaultPrevented()) {
                return;
            }
            if (!self.isUploadable) {
                if (isEnabled && $btn.attr("type") !== "submit") {
                    $form = $btn.closest("form");
                    // downgrade to normal form submit if possible
                    if ($form.length) {
                        $form.trigger("submit");
                    }
                    e.preventDefault();
                }
                return;
            }
            e.preventDefault();
            if (isEnabled) {
                self.upload();
            }
        },
        _submitForm: function() {
            var self = this, $el = self.$element, files = $el.get(0).files;
            if (files && self.minFileCount > 0 && self._getFileCount(files.length) < self.minFileCount) {
                self._noFilesError({});
                return false;
            }
            return !self._abort({});
        },
        _clearPreview: function() {
            var self = this, $thumbs = !self.showUploadedThumbs ? self.$preview.find(".file-preview-frame") : self.$preview.find(".file-preview-frame:not(.file-preview-success)");
            $thumbs.remove();
            if (!self.$preview.find(".file-preview-frame").length || !self.showPreview) {
                self._resetUpload();
            }
            self._validateDefaultPreview();
        },
        _initPreview: function(isInit) {
            var self = this, cap = self.initialCaption || "", out;
            if (!previewCache.count(self.id)) {
                self._clearPreview();
                if (isInit) {
                    self._setCaption(cap);
                } else {
                    self._initCaption();
                }
                return;
            }
            out = previewCache.out(self.id);
            cap = isInit && self.initialCaption ? self.initialCaption : out.caption;
            self.$preview.html(out.content);
            self._setCaption(cap);
            if (!isEmpty(out.content)) {
                self.$container.removeClass("file-input-new");
            }
        },
        _initPreviewDeletes: function() {
            var self = this, deleteExtraData = self.deleteExtraData || {}, resetProgress = function() {
                var hasFiles = self.isUploadable ? previewCache.count(self.id) : self.$element.get(0).files.length;
                if (self.$preview.find(".kv-file-remove").length === 0 && !hasFiles) {
                    self.reset();
                    self.initialCaption = "";
                }
            };
            self.$preview.find(".kv-file-remove").each(function() {
                var $el = $(this), vUrl = $el.data("url") || self.deleteUrl, vKey = $el.data("key");
                if (isEmpty(vUrl) || vKey === undefined) {
                    return;
                }
                var $frame = $el.closest(".file-preview-frame"), cache = previewCache.data[self.id], settings, params, index = $frame.data("fileindex"), config, extraData;
                index = parseInt(index.replace("init_", ""));
                config = isEmpty(cache.config) && isEmpty(cache.config[index]) ? null : cache.config[index];
                extraData = isEmpty(config) || isEmpty(config.extra) ? deleteExtraData : config.extra;
                if (typeof extraData === "function") {
                    extraData = extraData();
                }
                params = {
                    id: $el.attr("id"),
                    key: vKey,
                    extra: extraData
                };
                settings = $.extend(true, {}, {
                    url: vUrl,
                    type: "POST",
                    dataType: "json",
                    data: $.extend(true, {}, {
                        key: vKey
                    }, extraData),
                    beforeSend: function(jqXHR) {
                        self.ajaxAborted = false;
                        self._raise("filepredelete", [ vKey, jqXHR, extraData ]);
                        if (self.ajaxAborted) {
                            jqXHR.abort();
                        } else {
                            addCss($frame, "file-uploading");
                            addCss($el, "disabled");
                        }
                    },
                    success: function(data, textStatus, jqXHR) {
                        var n, cap;
                        if (isEmpty(data) || isEmpty(data.error)) {
                            previewCache.unset(self.id, index);
                            n = previewCache.count(self.id);
                            cap = n > 0 ? self._getMsgSelected(n) : "";
                            self._raise("filedeleted", [ vKey, jqXHR, extraData ]);
                            self._setCaption(cap);
                        } else {
                            params.jqXHR = jqXHR;
                            params.response = data;
                            self._showError(data.error, params, "filedeleteerror");
                            $frame.removeClass("file-uploading");
                            $el.removeClass("disabled");
                            resetProgress();
                            return;
                        }
                        $frame.removeClass("file-uploading").addClass("file-deleted");
                        $frame.fadeOut("slow", function() {
                            self._clearObjects($frame);
                            $frame.remove();
                            resetProgress();
                            if (!n && self.getFileStack().length === 0) {
                                self._setCaption("");
                                self.reset();
                            }
                        });
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        var errMsg = self._parseError(jqXHR, errorThrown);
                        params.jqXHR = jqXHR;
                        params.response = {};
                        self._showError(errMsg, params, "filedeleteerror");
                        $frame.removeClass("file-uploading");
                        resetProgress();
                    }
                }, self.ajaxDeleteSettings);
                handler($el, "click", function() {
                    if (!self._validateMinCount()) {
                        return false;
                    }
                    $.ajax(settings);
                });
            });
        },
        _clearObjects: function($el) {
            $el.find("video audio").each(function() {
                this.pause();
                $(this).remove();
            });
            $el.find("img object div").each(function() {
                $(this).remove();
            });
        },
        _clearFileInput: function() {
            var self = this, $el = self.$element, $srcFrm, $tmpFrm, $tmpEl;
            if (isEmpty($el.val())) {
                return;
            }
            // Fix for IE ver < 11, that does not clear file inputs. Requires a sequence of steps to prevent IE
            // crashing but still allow clearing of the file input.
            if (self.isIE9 || self.isIE10) {
                $srcFrm = $el.closest("form");
                $tmpFrm = $(document.createElement("form"));
                $tmpEl = $(document.createElement("div"));
                $el.before($tmpEl);
                if ($srcFrm.length) {
                    $srcFrm.after($tmpFrm);
                } else {
                    $tmpEl.after($tmpFrm);
                }
                $tmpFrm.append($el).trigger("reset");
                $tmpEl.before($el).remove();
                $tmpFrm.remove();
            } else {
                // normal input clear behavior for other sane browsers
                $el.val("");
            }
            self.fileInputCleared = true;
        },
        _resetUpload: function() {
            var self = this;
            self.uploadCache = {
                content: [],
                config: [],
                tags: [],
                append: true
            };
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.uploadAsyncCount = 0;
            self.loadedImages = [];
            self.totalImagesCount = 0;
            self.$btnUpload.removeAttr("disabled");
            self._setProgress(0);
            addCss(self.$progress, "hide");
            self._resetErrors(false);
            self.ajaxAborted = false;
            self.ajaxRequests = [];
            self._resetCanvas();
        },
        _resetCanvas: function() {
            var self = this;
            if (self.canvas && self.imageCanvasContext) {
                self.imageCanvasContext.clearRect(0, 0, self.canvas.width, self.canvas.height);
            }
        },
        _hasInitialPreview: function() {
            var self = this;
            return !self.overwriteInitial && previewCache.count(self.id);
        },
        _resetPreview: function() {
            var self = this, out, cap;
            if (previewCache.count(self.id)) {
                out = previewCache.out(self.id);
                self.$preview.html(out.content);
                cap = self.initialCaption ? self.initialCaption : out.caption;
                self._setCaption(cap);
            } else {
                self._clearPreview();
                self._initCaption();
            }
        },
        _clearDefaultPreview: function() {
            var self = this;
            self.$preview.find(".file-default-preview").remove();
        },
        _validateDefaultPreview: function() {
            var self = this;
            if (!self.showPreview || isEmpty(self.defaultPreviewContent)) {
                return;
            }
            self.$preview.html('<div class="file-default-preview">' + self.defaultPreviewContent + "</div>");
            self.$container.removeClass("file-input-new");
        },
        _resetPreviewThumbs: function(isAjax) {
            var self = this, out;
            if (isAjax) {
                self._clearPreview();
                self.clearStack();
                return;
            }
            if (self._hasInitialPreview()) {
                out = previewCache.out(self.id);
                self.$preview.html(out.content);
                self._setCaption(out.caption);
                self._initPreviewDeletes();
            } else {
                self._clearPreview();
            }
        },
        _getLayoutTemplate: function(t) {
            var self = this, template = isSet(t, self.layoutTemplates) ? self.layoutTemplates[t] : defaultLayoutTemplates[t];
            if (isEmpty(self.customLayoutTags)) {
                return template;
            }
            return replaceTags(template, self.customLayoutTags);
        },
        _getPreviewTemplate: function(t) {
            var self = this, template = isSet(t, self.previewTemplates) ? self.previewTemplates[t] : defaultPreviewTemplates[t];
            if (isEmpty(self.customPreviewTags)) {
                return template;
            }
            return replaceTags(template, self.customPreviewTags);
        },
        _getOutData: function(jqXHR, responseData, filesData) {
            var self = this;
            jqXHR = jqXHR || {};
            responseData = responseData || {};
            filesData = filesData || self.filestack.slice(0) || {};
            return {
                form: self.formdata,
                files: filesData,
                filenames: self.filenames,
                extra: self._getExtraData(),
                response: responseData,
                reader: self.reader,
                jqXHR: jqXHR
            };
        },
        _getMsgSelected: function(n) {
            var self = this, strFiles = n === 1 ? self.fileSingle : self.filePlural;
            return self.msgSelected.replace("{n}", n).replace("{files}", strFiles);
        },
        _getThumbs: function(css) {
            css = css || "";
            return this.$preview.find(".file-preview-frame:not(.file-preview-initial)" + css);
        },
        _getExtraData: function(previewId, index) {
            var self = this, data = self.uploadExtraData;
            if (typeof self.uploadExtraData === "function") {
                data = self.uploadExtraData(previewId, index);
            }
            return data;
        },
        _initXhr: function(xhrobj, previewId, fileCount) {
            var self = this;
            if (xhrobj.upload) {
                xhrobj.upload.addEventListener("progress", function(event) {
                    var pct = 0, position = event.loaded || event.position, total = event.total;
                    /** @namespace event.lengthComputable */
                    if (event.lengthComputable) {
                        pct = Math.ceil(position / total * 100);
                    }
                    if (previewId) {
                        self._setAsyncUploadStatus(previewId, pct, fileCount);
                    } else {
                        self._setProgress(Math.ceil(pct));
                    }
                }, false);
            }
            return xhrobj;
        },
        _ajaxSubmit: function(fnBefore, fnSuccess, fnComplete, fnError, previewId, index) {
            var self = this, settings;
            self._raise("filepreajax", [ previewId, index ]);
            self._uploadExtra(previewId, index);
            settings = $.extend(true, {}, {
                xhr: function() {
                    var xhrobj = $.ajaxSettings.xhr();
                    return self._initXhr(xhrobj, previewId, self.getFileStack().length);
                },
                url: self.uploadUrl,
                type: "POST",
                dataType: "json",
                data: self.formdata,
                cache: false,
                processData: false,
                contentType: false,
                beforeSend: fnBefore,
                success: fnSuccess,
                complete: fnComplete,
                error: fnError
            }, self.ajaxSettings);
            self.ajaxRequests.push($.ajax(settings));
        },
        _initUploadSuccess: function(out, $thumb, allFiles) {
            var self = this, append, data, index, $newThumb, content, config, tags, i;
            if (!self.showPreview || typeof out !== "object" || $.isEmptyObject(out)) {
                return;
            }
            if (out.initialPreview !== undefined && out.initialPreview.length > 0) {
                self.hasInitData = true;
                content = out.initialPreview || [];
                config = out.initialPreviewConfig || [];
                tags = out.initialPreviewThumbTags || [];
                append = out.append === undefined || out.append ? true : false;
                self.overwriteInitial = false;
                if ($thumb !== undefined) {
                    if (!allFiles) {
                        index = previewCache.add(self.id, content, config[0], tags[0], append);
                        data = previewCache.get(self.id, index, false);
                        $newThumb = $(data).hide();
                        $thumb.after($newThumb).fadeOut("slow", function() {
                            $newThumb.fadeIn("slow").css("display:inline-block");
                            self._initPreviewDeletes();
                            self._clearFileInput();
                            $thumb.remove();
                        });
                    } else {
                        i = $thumb.attr("data-fileindex");
                        self.uploadCache.content[i] = content[0];
                        self.uploadCache.config[i] = config[0];
                        self.uploadCache.tags[i] = tags[0];
                        self.uploadCache.append = append;
                    }
                } else {
                    previewCache.set(self.id, content, config, tags, append);
                    self._initPreview();
                    self._initPreviewDeletes();
                }
            }
        },
        _initSuccessThumbs: function() {
            var self = this;
            if (!self.showPreview) {
                return;
            }
            self._getThumbs(".file-preview-success").each(function() {
                var $thumb = $(this), $remove = $thumb.find(".kv-file-remove");
                $remove.removeAttr("disabled");
                handler($remove, "click", function() {
                    var out = self._raise("filesuccessremove", [ $thumb.attr("id"), $thumb.data("fileindex") ]);
                    cleanMemory($thumb);
                    if (out === false) {
                        return;
                    }
                    $thumb.fadeOut("slow", function() {
                        $thumb.remove();
                        if (!self.$preview.find(".file-preview-frame").length) {
                            self.reset();
                        }
                    });
                });
            });
        },
        _checkAsyncComplete: function() {
            var self = this, previewId, i;
            for (i = 0; i < self.filestack.length; i++) {
                if (self.filestack[i]) {
                    previewId = self.previewInitId + "-" + i;
                    if ($.inArray(previewId, self.uploadLog) === -1) {
                        return false;
                    }
                }
            }
            return self.uploadAsyncCount === self.uploadLog.length;
        },
        _uploadExtra: function(previewId, index) {
            var self = this, data = self._getExtraData(previewId, index);
            if (data.length === 0) {
                return;
            }
            $.each(data, function(key, value) {
                self.formdata.append(key, value);
            });
        },
        _uploadSingle: function(i, files, allFiles) {
            var self = this, total = self.getFileStack().length, formdata = new FormData(), outData, previewId = self.previewInitId + "-" + i, $thumb, chkComplete, $btnUpload, $btnDelete, hasPostData = self.filestack.length > 0 || !$.isEmptyObject(self.uploadExtraData), fnBefore, fnSuccess, fnComplete, fnError, updateUploadLog, params = {
                id: previewId,
                index: i
            };
            self.formdata = formdata;
            if (self.showPreview) {
                $thumb = $("#" + previewId + ":not(.file-preview-initial)");
                $btnUpload = $thumb.find(".kv-file-upload");
                $btnDelete = $thumb.find(".kv-file-remove");
                $("#" + previewId).find(".file-thumb-progress").removeClass("hide");
            }
            if (total === 0 || !hasPostData || $btnUpload && $btnUpload.hasClass("disabled") || self._abort(params)) {
                return;
            }
            updateUploadLog = function(i, previewId) {
                self.updateStack(i, undefined);
                self.uploadLog.push(previewId);
                if (self._checkAsyncComplete()) {
                    self.fileBatchCompleted = true;
                }
            };
            chkComplete = function() {
                if (!self.fileBatchCompleted) {
                    return;
                }
                setTimeout(function() {
                    if (self.showPreview) {
                        previewCache.set(self.id, self.uploadCache.content, self.uploadCache.config, self.uploadCache.tags, self.uploadCache.append);
                        if (self.hasInitData) {
                            self._initPreview();
                            self._initPreviewDeletes();
                        }
                    }
                    self.unlock();
                    self._clearFileInput();
                    self._raise("filebatchuploadcomplete", [ self.filestack, self._getExtraData() ]);
                    self.uploadCount = 0;
                    self.uploadStatus = {};
                    self.uploadLog = [];
                    self._setProgress(100);
                }, 100);
            };
            fnBefore = function(jqXHR) {
                outData = self._getOutData(jqXHR);
                self.fileBatchCompleted = false;
                if (self.showPreview) {
                    if (!$thumb.hasClass("file-preview-success")) {
                        self._setThumbStatus($thumb, "Loading");
                        addCss($thumb, "file-uploading");
                    }
                    $btnUpload.attr("disabled", true);
                    $btnDelete.attr("disabled", true);
                }
                if (!allFiles) {
                    self.lock();
                }
                self._raise("filepreupload", [ outData, previewId, i ]);
                $.extend(true, params, outData);
                if (self._abort(params)) {
                    jqXHR.abort();
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function(data, textStatus, jqXHR) {
                outData = self._getOutData(jqXHR, data);
                $.extend(true, params, outData);
                setTimeout(function() {
                    if (isEmpty(data) || isEmpty(data.error)) {
                        if (self.showPreview) {
                            self._setThumbStatus($thumb, "Success");
                            $btnUpload.hide();
                            self._initUploadSuccess(data, $thumb, allFiles);
                        }
                        self._raise("fileuploaded", [ outData, previewId, i ]);
                        if (!allFiles) {
                            self.updateStack(i, undefined);
                        } else {
                            updateUploadLog(i, previewId);
                        }
                    } else {
                        self._showUploadError(data.error, params);
                        self._setPreviewError($thumb, i);
                        if (allFiles) {
                            updateUploadLog(i, previewId);
                        }
                    }
                }, 100);
            };
            fnComplete = function() {
                setTimeout(function() {
                    if (self.showPreview) {
                        $btnUpload.removeAttr("disabled");
                        $btnDelete.removeAttr("disabled");
                        $thumb.removeClass("file-uploading");
                    }
                    if (!allFiles) {
                        self.unlock(false);
                        self._clearFileInput();
                    } else {
                        chkComplete();
                    }
                    self._initSuccessThumbs();
                }, 100);
            };
            fnError = function(jqXHR, textStatus, errorThrown) {
                var errMsg = self._parseError(jqXHR, errorThrown, allFiles ? files[i].name : null);
                setTimeout(function() {
                    if (allFiles) {
                        updateUploadLog(i, previewId);
                    }
                    self.uploadStatus[previewId] = 100;
                    self._setPreviewError($thumb, i);
                    $.extend(true, params, self._getOutData(jqXHR));
                    self._showUploadError(errMsg, params);
                }, 100);
            };
            formdata.append(self.uploadFileAttr, files[i], self.filenames[i]);
            formdata.append("file_id", i);
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError, previewId, i);
        },
        _uploadBatch: function() {
            var self = this, files = self.filestack, total = files.length, params = {}, fnBefore, fnSuccess, fnError, fnComplete, hasPostData = self.filestack.length > 0 || !$.isEmptyObject(self.uploadExtraData), setAllUploaded;
            self.formdata = new FormData();
            if (total === 0 || !hasPostData || self._abort(params)) {
                return;
            }
            setAllUploaded = function() {
                $.each(files, function(key) {
                    self.updateStack(key, undefined);
                });
                self._clearFileInput();
            };
            fnBefore = function(jqXHR) {
                self.lock();
                var outData = self._getOutData(jqXHR);
                if (self.showPreview) {
                    self._getThumbs().each(function() {
                        var $thumb = $(this), $btnUpload = $thumb.find(".kv-file-upload"), $btnDelete = $thumb.find(".kv-file-remove");
                        if (!$thumb.hasClass("file-preview-success")) {
                            self._setThumbStatus($thumb, "Loading");
                            addCss($thumb, "file-uploading");
                        }
                        $btnUpload.attr("disabled", true);
                        $btnDelete.attr("disabled", true);
                    });
                }
                self._raise("filebatchpreupload", [ outData ]);
                if (self._abort(outData)) {
                    jqXHR.abort();
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function(data, textStatus, jqXHR) {
                /** @namespace data.errorkeys */
                var outData = self._getOutData(jqXHR, data), $thumbs = self._getThumbs(), key = 0, keys = isEmpty(data) || isEmpty(data.errorkeys) ? [] : data.errorkeys;
                if (isEmpty(data) || isEmpty(data.error)) {
                    self._raise("filebatchuploadsuccess", [ outData ]);
                    setAllUploaded();
                    if (self.showPreview) {
                        $thumbs.each(function() {
                            var $thumb = $(this), $btnUpload = $thumb.find(".kv-file-upload");
                            $thumb.find(".kv-file-upload").hide();
                            self._setThumbStatus($thumb, "Success");
                            $thumb.removeClass("file-uploading");
                            $btnUpload.removeAttr("disabled");
                        });
                        self._initUploadSuccess(data);
                    } else {
                        self.reset();
                    }
                } else {
                    if (self.showPreview) {
                        $thumbs.each(function() {
                            var $thumb = $(this), $btnDelete = $thumb.find(".kv-file-remove"), $btnUpload = $thumb.find(".kv-file-upload");
                            $thumb.removeClass("file-uploading");
                            $btnUpload.removeAttr("disabled");
                            $btnDelete.removeAttr("disabled");
                            if (keys.length === 0) {
                                self._setPreviewError($thumb);
                                return;
                            }
                            if ($.inArray(key, keys) !== -1) {
                                self._setPreviewError($thumb);
                            } else {
                                $thumb.find(".kv-file-upload").hide();
                                self._setThumbStatus($thumb, "Success");
                                self.updateStack(key, undefined);
                            }
                            key++;
                        });
                        self._initUploadSuccess(data);
                    }
                    self._showUploadError(data.error, outData, "filebatchuploaderror");
                }
            };
            fnComplete = function() {
                self._setProgress(100);
                self.unlock();
                self._initSuccessThumbs();
                self._clearFileInput();
                self._raise("filebatchuploadcomplete", [ self.filestack, self._getExtraData() ]);
            };
            fnError = function(jqXHR, textStatus, errorThrown) {
                var outData = self._getOutData(jqXHR), errMsg = self._parseError(jqXHR, errorThrown);
                self._showUploadError(errMsg, outData, "filebatchuploaderror");
                self.uploadFileCount = total - 1;
                if (!self.showPreview) {
                    return;
                }
                self._getThumbs().each(function() {
                    var $thumb = $(this), key = $thumb.attr("data-fileindex");
                    $thumb.removeClass("file-uploading");
                    if (self.filestack[key] !== undefined) {
                        self._setPreviewError($thumb);
                    }
                });
                self._getThumbs().removeClass("file-uploading");
                self._getThumbs(" .kv-file-upload").removeAttr("disabled");
                self._getThumbs(" .kv-file-delete").removeAttr("disabled");
            };
            $.each(files, function(key, data) {
                if (!isEmpty(files[key])) {
                    self.formdata.append(self.uploadFileAttr, data, self.filenames[key]);
                }
            });
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError);
        },
        _uploadExtraOnly: function() {
            var self = this, params = {}, fnBefore, fnSuccess, fnComplete, fnError;
            self.formdata = new FormData();
            if (self._abort(params)) {
                return;
            }
            fnBefore = function(jqXHR) {
                self.lock();
                var outData = self._getOutData(jqXHR);
                self._raise("filebatchpreupload", [ outData ]);
                self._setProgress(50);
                params.data = outData;
                params.xhr = jqXHR;
                if (self._abort(params)) {
                    jqXHR.abort();
                    self._setProgressCancelled();
                }
            };
            fnSuccess = function(data, textStatus, jqXHR) {
                var outData = self._getOutData(jqXHR, data);
                if (isEmpty(data) || isEmpty(data.error)) {
                    self._raise("filebatchuploadsuccess", [ outData ]);
                    self._clearFileInput();
                    self._initUploadSuccess(data);
                } else {
                    self._showUploadError(data.error, outData, "filebatchuploaderror");
                }
            };
            fnComplete = function() {
                self._setProgress(100);
                self.unlock();
                self._clearFileInput();
                self._raise("filebatchuploadcomplete", [ self.filestack, self._getExtraData() ]);
            };
            fnError = function(jqXHR, textStatus, errorThrown) {
                var outData = self._getOutData(jqXHR), errMsg = self._parseError(jqXHR, errorThrown);
                params.data = outData;
                self._showUploadError(errMsg, outData, "filebatchuploaderror");
            };
            self._ajaxSubmit(fnBefore, fnSuccess, fnComplete, fnError);
        },
        _initFileActions: function() {
            var self = this;
            if (!self.showPreview) {
                return;
            }
            self.$preview.find(".kv-file-remove").each(function() {
                var $el = $(this), $frame = $el.closest(".file-preview-frame"), hasError, id = $frame.attr("id"), ind = $frame.attr("data-fileindex"), n, cap, status;
                handler($el, "click", function() {
                    status = self._raise("filepreremove", [ id, ind ]);
                    if (status === false || !self._validateMinCount()) {
                        return false;
                    }
                    hasError = $frame.hasClass("file-preview-error");
                    cleanMemory($frame);
                    $frame.fadeOut("slow", function() {
                        self.updateStack(ind, undefined);
                        self._clearObjects($frame);
                        $frame.remove();
                        if (id && hasError) {
                            self.$errorContainer.find('li[data-file-id="' + id + '"]').fadeOut("fast", function() {
                                $(this).remove();
                                if (!self._errorsExist()) {
                                    self._resetErrors();
                                }
                            });
                        }
                        var filestack = self.getFileStack(true), len = filestack.length, chk = previewCache.count(self.id), hasThumb = self.showPreview && self.$preview.find(".file-preview-frame").length;
                        self._clearFileInput();
                        if (len === 0 && chk === 0 && !hasThumb) {
                            self.reset();
                        } else {
                            n = chk + len;
                            cap = n > 1 ? self._getMsgSelected(n) : filestack[0] ? self._getFileNames()[0] : "";
                            self._setCaption(cap);
                        }
                        self._raise("fileremoved", [ id, ind ]);
                    });
                });
            });
            self.$preview.find(".kv-file-upload").each(function() {
                var $el = $(this);
                handler($el, "click", function() {
                    var $frame = $el.closest(".file-preview-frame"), ind = $frame.attr("data-fileindex");
                    if (!$frame.hasClass("file-preview-error")) {
                        self._uploadSingle(ind, self.filestack, false);
                    }
                });
            });
        },
        _hideFileIcon: function() {
            if (this.overwriteInitial) {
                this.$captionContainer.find(".kv-caption-icon").hide();
            }
        },
        _showFileIcon: function() {
            this.$captionContainer.find(".kv-caption-icon").show();
        },
        _previewDefault: function(file, previewId, isDisabled) {
            if (!this.showPreview) {
                return;
            }
            var self = this, frameClass = "", fname = file ? file.name : "", /** @namespace objUrl.createObjectURL */
            data = objUrl.createObjectURL(file), ind = previewId.slice(previewId.lastIndexOf("-") + 1), config = self.previewSettings.other || defaultPreviewSettings.other, footer = self._renderFileFooter(file.name, config.width), previewOtherTemplate = self._parseFilePreviewIcon(self._getPreviewTemplate("other"), fname);
            if (isDisabled === true) {
                if (!self.isUploadable) {
                    footer += '<div class="file-other-error" title="' + self.fileActionSettings.indicatorErrorTitle + '">' + self.fileActionSettings.indicatorError + "</div>";
                }
            }
            self._clearDefaultPreview();
            self.$preview.append("\n" + previewOtherTemplate.replace(/\{previewId}/g, previewId).replace(/\{frameClass}/g, frameClass).replace(/\{fileindex}/g, ind).replace(/\{caption}/g, self.slug(file.name)).replace(/\{width}/g, config.width).replace(/\{height}/g, config.height).replace(/\{type}/g, file.type).replace(/\{data}/g, data).replace(/\{footer}/g, footer));
            if (isDisabled === true && self.isUploadable) {
                self._setThumbStatus($("#" + previewId), "Error");
            }
        },
        _previewFile: function(i, file, theFile, previewId, data) {
            if (!this.showPreview) {
                return;
            }
            var self = this, cat = self._parseFileType(file), fname = file ? file.name : "", caption = self.slug(fname), content, strText, types = self.allowedPreviewTypes, mimes = self.allowedPreviewMimeTypes, tmplt = self._getPreviewTemplate(cat), chkTypes = types && types.indexOf(cat) >= 0, id, config = isSet(cat, self.previewSettings) ? self.previewSettings[cat] : defaultPreviewSettings[cat], chkMimes = mimes && mimes.indexOf(file.type) !== -1, footer = self._renderFileFooter(caption, config.width), modal = "", ind = previewId.slice(previewId.lastIndexOf("-") + 1);
            if (chkTypes || chkMimes) {
                tmplt = self._parseFilePreviewIcon(tmplt, fname.split(".").pop());
                if (cat === "text") {
                    strText = htmlEncode(theFile.target.result);
                    id = "text-" + uniqId();
                    content = tmplt.replace(/\{zoom}/g, self._getLayoutTemplate("zoom"));
                    modal = self._getLayoutTemplate("modal").replace("{id}", id).replace(/\{title}/g, caption).replace(/\{body}/g, strText).replace(/\{heading}/g, self.msgZoomModalHeading);
                    content = content.replace(/\{previewId}/g, previewId).replace(/\{caption}/g, caption).replace(/\{width}/g, config.width).replace(/\{height}/g, config.height).replace(/\{frameClass}/g, "").replace(/\{zoomInd}/g, self.zoomIndicator).replace(/\{footer}/g, footer).replace(/\{fileindex}/g, ind).replace(/\{type}/g, file.type).replace(/\{zoomTitle}/g, self.msgZoomTitle).replace(/\{dialog}/g, "$('#" + id + "').modal('show')").replace(/\{data}/g, strText) + modal;
                } else {
                    content = tmplt.replace(/\{previewId}/g, previewId).replace(/\{caption}/g, caption).replace(/\{frameClass}/g, "").replace(/\{type}/g, file.type).replace(/\{fileindex}/g, ind).replace(/\{width}/g, config.width).replace(/\{height}/g, config.height).replace(/\{footer}/g, footer).replace(/\{data}/g, data);
                }
                self._clearDefaultPreview();
                self.$preview.append("\n" + content);
                self._validateImage(i, previewId, caption, file.type);
            } else {
                self._previewDefault(file, previewId);
            }
        },
        _slugDefault: function(text) {
            return isEmpty(text) ? "" : String(text).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
        },
        _readFiles: function(files) {
            this.reader = new FileReader();
            var self = this, $el = self.$element, $preview = self.$preview, reader = self.reader, $container = self.$previewContainer, $status = self.$previewStatus, msgLoading = self.msgLoading, msgProgress = self.msgProgress, previewInitId = self.previewInitId, numFiles = files.length, settings = self.fileTypeSettings, ctr = self.filestack.length, readFile, throwError = function(msg, file, previewId, index) {
                var p1 = $.extend(true, {}, self._getOutData({}, {}, files), {
                    id: previewId,
                    index: index
                }), p2 = {
                    id: previewId,
                    index: index,
                    file: file,
                    files: files
                };
                self._previewDefault(file, previewId, true);
                if (self.isUploadable) {
                    self.addToStack(undefined);
                }
                setTimeout(readFile(index + 1), 100);
                self._initFileActions();
                if (self.removeFromPreviewOnError) {
                    $("#" + previewId).remove();
                }
                return self.isUploadable ? self._showUploadError(msg, p1) : self._showError(msg, p2);
            };
            self.loadedImages = [];
            self.totalImagesCount = 0;
            $.each(files, function(key, file) {
                var func = self.fileTypeSettings.image || defaultFileTypeSettings.image;
                if (func && func(file.type)) {
                    self.totalImagesCount++;
                }
            });
            readFile = function(i) {
                if (isEmpty($el.attr("multiple"))) {
                    numFiles = 1;
                }
                if (i >= numFiles) {
                    if (self.isUploadable && self.filestack.length > 0) {
                        self._raise("filebatchselected", [ self.getFileStack() ]);
                    } else {
                        self._raise("filebatchselected", [ files ]);
                    }
                    $container.removeClass("file-thumb-loading");
                    $status.html("");
                    return;
                }
                var node = ctr + i, previewId = previewInitId + "-" + node, isText, file = files[i], caption = self.slug(file.name), fileSize = (file.size || 0) / 1e3, checkFile, fileExtExpr = "", previewData = objUrl.createObjectURL(file), fileCount = 0, j, msg, typ, chk, fileTypes = self.allowedFileTypes, strTypes = isEmpty(fileTypes) ? "" : fileTypes.join(", "), fileExt = self.allowedFileExtensions, strExt = isEmpty(fileExt) ? "" : fileExt.join(", ");
                if (!isEmpty(fileExt)) {
                    fileExtExpr = new RegExp("\\.(" + fileExt.join("|") + ")$", "i");
                }
                fileSize = fileSize.toFixed(2);
                if (self.maxFileSize > 0 && fileSize > self.maxFileSize) {
                    msg = self.msgSizeTooLarge.replace("{name}", caption).replace("{size}", fileSize).replace("{maxSize}", self.maxFileSize);
                    self.isError = throwError(msg, file, previewId, i);
                    return;
                }
                if (!isEmpty(fileTypes) && isArray(fileTypes)) {
                    for (j = 0; j < fileTypes.length; j += 1) {
                        typ = fileTypes[j];
                        checkFile = settings[typ];
                        chk = checkFile !== undefined && checkFile(file.type, caption);
                        fileCount += isEmpty(chk) ? 0 : chk.length;
                    }
                    if (fileCount === 0) {
                        msg = self.msgInvalidFileType.replace("{name}", caption).replace("{types}", strTypes);
                        self.isError = throwError(msg, file, previewId, i);
                        return;
                    }
                }
                if (fileCount === 0 && !isEmpty(fileExt) && isArray(fileExt) && !isEmpty(fileExtExpr)) {
                    chk = compare(caption, fileExtExpr);
                    fileCount += isEmpty(chk) ? 0 : chk.length;
                    if (fileCount === 0) {
                        msg = self.msgInvalidFileExtension.replace("{name}", caption).replace("{extensions}", strExt);
                        self.isError = throwError(msg, file, previewId, i);
                        return;
                    }
                }
                if (!self.showPreview) {
                    self.addToStack(file);
                    setTimeout(readFile(i + 1), 100);
                    self._raise("fileloaded", [ file, previewId, i, reader ]);
                    return;
                }
                if ($preview.length > 0 && FileReader !== undefined) {
                    $status.html(msgLoading.replace("{index}", i + 1).replace("{files}", numFiles));
                    $container.addClass("file-thumb-loading");
                    reader.onerror = function(evt) {
                        self._errorHandler(evt, caption);
                    };
                    reader.onload = function(theFile) {
                        self._previewFile(i, file, theFile, previewId, previewData);
                        self._initFileActions();
                    };
                    reader.onloadend = function() {
                        msg = msgProgress.replace("{index}", i + 1).replace("{files}", numFiles).replace("{percent}", 50).replace("{name}", caption);
                        setTimeout(function() {
                            $status.html(msg);
                            self._updateFileDetails(numFiles);
                            readFile(i + 1);
                        }, 100);
                        self._raise("fileloaded", [ file, previewId, i, reader ]);
                    };
                    reader.onprogress = function(data) {
                        if (data.lengthComputable) {
                            var fact = data.loaded / data.total * 100, progress = Math.ceil(fact);
                            msg = msgProgress.replace("{index}", i + 1).replace("{files}", numFiles).replace("{percent}", progress).replace("{name}", caption);
                            setTimeout(function() {
                                $status.html(msg);
                            }, 100);
                        }
                    };
                    isText = isSet("text", settings) ? settings.text : defaultFileTypeSettings.text;
                    if (isText(file.type, caption)) {
                        reader.readAsText(file, self.textEncoding);
                    } else {
                        reader.readAsArrayBuffer(file);
                    }
                } else {
                    self._previewDefault(file, previewId);
                    setTimeout(function() {
                        readFile(i + 1);
                        self._updateFileDetails(numFiles);
                    }, 100);
                    self._raise("fileloaded", [ file, previewId, i, reader ]);
                }
                self.addToStack(file);
            };
            readFile(0);
            self._updateFileDetails(numFiles, false);
        },
        _updateFileDetails: function(numFiles) {
            var self = this, $el = self.$element, fileStack = self.getFileStack(), name = $el[0].files[0] && $el[0].files[0].name || fileStack.length && fileStack[0].name || "", label = self.slug(name), n = self.isUploadable ? fileStack.length : numFiles, nFiles = previewCache.count(self.id) + n, log = n > 1 ? self._getMsgSelected(nFiles) : label;
            if (self.isError) {
                self.$previewContainer.removeClass("file-thumb-loading");
                self.$previewStatus.html("");
                self.$captionContainer.find(".kv-caption-icon").hide();
            } else {
                self._showFileIcon();
            }
            self._setCaption(log, self.isError);
            self.$container.removeClass("file-input-new file-input-ajax-new");
            if (arguments.length === 1) {
                self._raise("fileselect", [ numFiles, label ]);
            }
            if (previewCache.count(self.id)) {
                self._initPreviewDeletes();
            }
        },
        _setThumbStatus: function($thumb, status) {
            var self = this;
            if (!self.showPreview) {
                return;
            }
            var icon = "indicator" + status, msg = icon + "Title", css = "file-preview-" + status.toLowerCase(), $indicator = $thumb.find(".file-upload-indicator"), config = self.fileActionSettings;
            $thumb.removeClass("file-preview-success file-preview-error file-preview-loading");
            if (status === "Error") {
                $thumb.find(".kv-file-upload").attr("disabled", true);
            }
            $indicator.html(config[icon]);
            $indicator.attr("title", config[msg]);
            $thumb.addClass(css);
        },
        _setProgressCancelled: function() {
            var self = this;
            self._setProgress(100, self.$progress, self.msgCancelled);
        },
        _setProgress: function(p, $el, error) {
            var self = this, pct = Math.min(p, 100), template = pct < 100 ? self.progressTemplate : error ? self.progressErrorTemplate : self.progressCompleteTemplate;
            $el = $el || self.$progress;
            if (!isEmpty(template)) {
                $el.html(template.replace(/\{percent}/g, pct));
                if (error) {
                    $el.find('[role="progressbar"]').html(error);
                }
            }
        },
        _setFileDropZoneTitle: function() {
            var self = this, $zone = self.$container.find(".file-drop-zone");
            $zone.find("." + self.dropZoneTitleClass).remove();
            if (!self.isUploadable || !self.showPreview || $zone.length === 0 || self.getFileStack().length > 0 || !self.dropZoneEnabled) {
                return;
            }
            if ($zone.find(".file-preview-frame").length === 0 && isEmpty(self.defaultPreviewContent)) {
                $zone.prepend('<div class="' + self.dropZoneTitleClass + '">' + self.dropZoneTitle + "</div>");
            }
            self.$container.removeClass("file-input-new");
            addCss(self.$container, "file-input-ajax-new");
        },
        _setAsyncUploadStatus: function(previewId, pct, total) {
            var self = this, sum = 0;
            self._setProgress(pct, $("#" + previewId).find(".file-thumb-progress"));
            self.uploadStatus[previewId] = pct;
            $.each(self.uploadStatus, function(key, value) {
                sum += value;
            });
            self._setProgress(Math.ceil(sum / total));
        },
        _validateMinCount: function() {
            var self = this, len = self.isUploadable ? self.getFileStack().length : self.$element.get(0).files.length;
            if (self.validateInitialCount && self.minFileCount > 0 && self._getFileCount(len - 1) < self.minFileCount) {
                self._noFilesError({});
                return false;
            }
            return true;
        },
        _getFileCount: function(fileCount) {
            var self = this, addCount = 0;
            if (self.validateInitialCount && !self.overwriteInitial) {
                addCount = previewCache.count(self.id);
                fileCount += addCount;
            }
            return fileCount;
        },
        _getFileName: function(file) {
            return file && file.name ? this.slug(file.name) : undefined;
        },
        _getFileNames: function(skipNull) {
            var self = this;
            return self.filenames.filter(function(n) {
                return skipNull ? n !== undefined : n !== undefined && n !== null;
            });
        },
        _setPreviewError: function($thumb, i, val) {
            var self = this;
            if (i) {
                self.updateStack(i, val);
            }
            if (self.removeFromPreviewOnError) {
                $thumb.remove();
            } else {
                self._setThumbStatus($thumb, "Error");
            }
        },
        _checkDimensions: function(i, chk, $img, $thumb, fname, type, params) {
            var self = this, msg, dim, tag = chk === "Small" ? "min" : "max", limit = self[tag + "Image" + type], $imgEl, isValid;
            if (isEmpty(limit) || !$img.length) {
                return;
            }
            $imgEl = $img[0];
            dim = type === "Width" ? $imgEl.naturalWidth || $imgEl.width : $imgEl.naturalHeight || $imgEl.height;
            isValid = chk === "Small" ? dim >= limit : dim <= limit;
            if (isValid) {
                return;
            }
            msg = self["msgImage" + type + chk].replace("{name}", fname).replace("{size}", limit);
            self._showUploadError(msg, params);
            self._setPreviewError($thumb, i, null);
        },
        _validateImage: function(i, previewId, fname, ftype) {
            var self = this, $preview = self.$preview, params, w1, w2, $thumb = $preview.find("#" + previewId), $img = $thumb.find("img");
            fname = fname || "Untitled";
            if (!$img.length) {
                return;
            }
            handler($img, "load", function() {
                w1 = $thumb.width();
                w2 = $preview.width();
                if (w1 > w2) {
                    $img.css("width", "100%");
                    $thumb.css("width", "97%");
                }
                params = {
                    ind: i,
                    id: previewId
                };
                self._checkDimensions(i, "Small", $img, $thumb, fname, "Width", params);
                self._checkDimensions(i, "Small", $img, $thumb, fname, "Height", params);
                if (!self.resizeImage) {
                    self._checkDimensions(i, "Large", $img, $thumb, fname, "Width", params);
                    self._checkDimensions(i, "Large", $img, $thumb, fname, "Height", params);
                }
                self._raise("fileimageloaded", [ previewId ]);
                self.loadedImages.push({
                    ind: i,
                    img: $img,
                    thumb: $thumb,
                    pid: previewId,
                    typ: ftype
                });
                self._validateAllImages();
                objUrl.revokeObjectURL($img.attr("src"));
            });
        },
        _validateAllImages: function() {
            var self = this, i, config, $img, $thumb, pid, ind, params = {}, errFunc;
            if (self.loadedImages.length !== self.totalImagesCount) {
                return;
            }
            self._raise("fileimagesloaded");
            if (!self.resizeImage) {
                return;
            }
            errFunc = self.isUploadable ? self._showUploadError : self._showError;
            for (i = 0; i < self.loadedImages.length; i++) {
                config = self.loadedImages[i];
                $img = config.img;
                $thumb = config.thumb;
                pid = config.pid;
                ind = config.ind;
                params = {
                    id: pid,
                    index: ind
                };
                if (!self._getResizedImage($img[0], config.typ, pid, ind)) {
                    errFunc(self.msgImageResizeError, params, "fileimageresizeerror");
                    self._setPreviewError($thumb, ind);
                }
            }
            self._raise("fileimagesresized");
        },
        _getResizedImage: function(image, type, pid, ind) {
            var self = this, width = image.naturalWidth, height = image.naturalHeight, ratio = 1, maxWidth = self.maxImageWidth || width, maxHeight = self.maxImageHeight || height, isValidImage = width && height, chkWidth, chkHeight, canvas = self.imageCanvas, context = self.imageCanvasContext;
            if (!isValidImage) {
                return false;
            }
            if (width === maxWidth && height === maxHeight) {
                return true;
            }
            type = type || self.resizeDefaultImageType;
            chkWidth = width > maxWidth;
            chkHeight = height > maxHeight;
            if (self.resizePreference === "width") {
                ratio = chkWidth ? maxWidth / width : chkHeight ? maxHeight / height : 1;
            } else {
                ratio = chkHeight ? maxHeight / height : chkWidth ? maxWidth / width : 1;
            }
            self._resetCanvas();
            width *= ratio;
            height *= ratio;
            canvas.width = width;
            canvas.height = height;
            try {
                context.drawImage(image, 0, 0, width, height);
                canvas.toBlob(function(blob) {
                    self._raise("fileimageresized", [ pid, ind ]);
                    self.filestack[ind] = blob;
                }, type, self.resizeQuality);
                return true;
            } catch (err) {
                return false;
            }
        },
        _initBrowse: function($container) {
            var self = this;
            self.$btnFile = $container.find(".btn-file");
            self.$btnFile.append(self.$element);
        },
        _initCaption: function() {
            var self = this, cap = self.initialCaption || "";
            if (self.overwriteInitial || isEmpty(cap)) {
                self.$caption.html("");
                return false;
            }
            self._setCaption(cap);
            return true;
        },
        _setCaption: function(content, isError) {
            var self = this, title, out, n, cap, stack = self.getFileStack();
            if (!self.$caption.length) {
                return;
            }
            if (isError) {
                title = $("<div>" + self.msgValidationError + "</div>").text();
                n = stack.length;
                if (n) {
                    cap = n === 1 && stack[0] ? self._getFileNames()[0] : self._getMsgSelected(n);
                } else {
                    cap = self._getMsgSelected(self.msgNo);
                }
                out = '<span class="' + self.msgValidationErrorClass + '">' + self.msgValidationErrorIcon + (isEmpty(content) ? cap : content) + "</span>";
            } else {
                if (isEmpty(content)) {
                    return;
                }
                title = $("<div>" + content + "</div>").text();
                out = self._getLayoutTemplate("icon") + title;
            }
            self.$caption.html(out);
            self.$caption.attr("title", title);
            self.$captionContainer.find(".file-caption-ellipsis").attr("title", title);
        },
        _createContainer: function() {
            var self = this, $container = $(document.createElement("div")).attr({
                "class": "file-input file-input-new"
            }).html(self._renderMain());
            self.$element.before($container);
            self._initBrowse($container);
            return $container;
        },
        _refreshContainer: function() {
            var self = this, $container = self.$container;
            $container.before(self.$element);
            $container.html(self._renderMain());
            self._initBrowse($container);
        },
        _renderMain: function() {
            var self = this, dropCss = self.isUploadable && self.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled", close = !self.showClose ? "" : self._getLayoutTemplate("close"), preview = !self.showPreview ? "" : self._getLayoutTemplate("preview").replace(/\{class}/g, self.previewClass).replace(/\{dropClass}/g, dropCss), css = self.isDisabled ? self.captionClass + " file-caption-disabled" : self.captionClass, caption = self.captionTemplate.replace(/\{class}/g, css + " kv-fileinput-caption");
            return self.mainTemplate.replace(/\{class}/g, self.mainClass).replace(/\{preview}/g, preview).replace(/\{close}/g, close).replace(/\{caption}/g, caption).replace(/\{upload}/g, self._renderButton("upload")).replace(/\{remove}/g, self._renderButton("remove")).replace(/\{cancel}/g, self._renderButton("cancel")).replace(/\{browse}/g, self._renderButton("browse"));
        },
        _renderButton: function(type) {
            var self = this, tmplt = self._getLayoutTemplate("btnDefault"), css = self[type + "Class"], title = self[type + "Title"], icon = self[type + "Icon"], label = self[type + "Label"], status = self.isDisabled ? " disabled" : "", btnType = "button";
            switch (type) {
              case "remove":
                if (!self.showRemove) {
                    return "";
                }
                break;

              case "cancel":
                if (!self.showCancel) {
                    return "";
                }
                css += " hide";
                break;

              case "upload":
                if (!self.showUpload) {
                    return "";
                }
                if (self.isUploadable && !self.isDisabled) {
                    tmplt = self._getLayoutTemplate("btnLink").replace("{href}", self.uploadUrl);
                } else {
                    btnType = "submit";
                }
                break;

              case "browse":
                tmplt = self._getLayoutTemplate("btnBrowse");
                break;

              default:
                return "";
            }
            css += type === "browse" ? " btn-file" : " fileinput-" + type + " fileinput-" + type + "-button";
            if (!isEmpty(label)) {
                label = ' <span class="' + self.buttonLabelClass + '">' + label + "</span>";
            }
            return tmplt.replace("{type}", btnType).replace("{css}", css).replace("{title}", title).replace("{status}", status).replace("{icon}", icon).replace("{label}", label);
        },
        _renderThumbProgress: function() {
            return '<div class="file-thumb-progress hide">' + this.progressTemplate.replace(/\{percent}/g, "0") + "</div>";
        },
        _renderFileFooter: function(caption, width) {
            var self = this, config = self.fileActionSettings, footer, out, template = self._getLayoutTemplate("footer");
            if (self.isUploadable) {
                footer = template.replace(/\{actions}/g, self._renderFileActions(true, true, false, false, false));
                out = footer.replace(/\{caption}/g, caption).replace(/\{width}/g, width).replace(/\{progress}/g, self._renderThumbProgress()).replace(/\{indicator}/g, config.indicatorNew).replace(/\{indicatorTitle}/g, config.indicatorNewTitle);
            } else {
                out = template.replace(/\{actions}/g, "").replace(/\{caption}/g, caption).replace(/\{progress}/g, "").replace(/\{width}/g, width).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "");
            }
            out = replaceTags(out, self.previewThumbTags);
            return out;
        },
        _renderFileActions: function(showUpload, showDelete, disabled, url, key) {
            if (!showUpload && !showDelete) {
                return "";
            }
            var self = this, vUrl = url === false ? "" : ' data-url="' + url + '"', vKey = key === false ? "" : ' data-key="' + key + '"', btnDelete = self._getLayoutTemplate("actionDelete"), btnUpload = "", template = self._getLayoutTemplate("actions"), otherButtons = self.otherActionButtons.replace(/\{dataKey}/g, vKey), config = self.fileActionSettings, removeClass = disabled ? config.removeClass + " disabled" : config.removeClass;
            btnDelete = btnDelete.replace(/\{removeClass}/g, removeClass).replace(/\{removeIcon}/g, config.removeIcon).replace(/\{removeTitle}/g, config.removeTitle).replace(/\{dataUrl}/g, vUrl).replace(/\{dataKey}/g, vKey);
            if (showUpload) {
                btnUpload = self._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, config.uploadClass).replace(/\{uploadIcon}/g, config.uploadIcon).replace(/\{uploadTitle}/g, config.uploadTitle);
            }
            return template.replace(/\{delete}/g, btnDelete).replace(/\{upload}/g, btnUpload).replace(/\{other}/g, otherButtons);
        },
        _browse: function(e) {
            var self = this;
            self._raise("filebrowse");
            if (e && e.isDefaultPrevented()) {
                return;
            }
            if (self.isError && !self.isUploadable) {
                self.clear();
            }
            self.$captionContainer.focus();
        },
        _change: function(e) {
            var self = this, $el = self.$element;
            if (!self.isUploadable && isEmpty($el.val()) && self.fileInputCleared) {
                // IE 11 fix
                self.fileInputCleared = false;
                return;
            }
            self.fileInputCleared = false;
            var tfiles, msg, total, isDragDrop = arguments.length > 1, isAjaxUpload = self.isUploadable, i = 0, f, n, len, files = isDragDrop ? e.originalEvent.dataTransfer.files : $el.get(0).files, ctr = self.filestack.length, isSingleUpload = isEmpty($el.attr("multiple")), flagSingle = isSingleUpload && ctr > 0, folders = 0, throwError = function(mesg, file, previewId, index) {
                var p1 = $.extend(true, {}, self._getOutData({}, {}, files), {
                    id: previewId,
                    index: index
                }), p2 = {
                    id: previewId,
                    index: index,
                    file: file,
                    files: files
                };
                return self.isUploadable ? self._showUploadError(mesg, p1) : self._showError(mesg, p2);
            };
            self.reader = null;
            self._resetUpload();
            self._hideFileIcon();
            if (self.isUploadable) {
                self.$container.find(".file-drop-zone ." + self.dropZoneTitleClass).remove();
            }
            if (isDragDrop) {
                tfiles = [];
                while (files[i]) {
                    f = files[i];
                    if (!f.type && f.size % 4096 === 0) {
                        folders++;
                    } else {
                        tfiles.push(f);
                    }
                    i++;
                }
            } else {
                if (e.target.files === undefined) {
                    tfiles = e.target && e.target.value ? [ {
                        name: e.target.value.replace(/^.+\\/, "")
                    } ] : [];
                } else {
                    tfiles = e.target.files;
                }
            }
            if (isEmpty(tfiles) || tfiles.length === 0) {
                if (!isAjaxUpload) {
                    self.clear();
                }
                self._showFolderError(folders);
                self._raise("fileselectnone");
                return;
            }
            self._resetErrors();
            len = tfiles.length;
            total = self._getFileCount(self.isUploadable ? self.getFileStack().length + len : len);
            if (self.maxFileCount > 0 && total > self.maxFileCount) {
                if (!self.autoReplace || len > self.maxFileCount) {
                    n = self.autoReplace && len > self.maxFileCount ? len : total;
                    msg = self.msgFilesTooMany.replace("{m}", self.maxFileCount).replace("{n}", n);
                    self.isError = throwError(msg, null, null, null);
                    self.$captionContainer.find(".kv-caption-icon").hide();
                    self._setCaption("", true);
                    self.$container.removeClass("file-input-new file-input-ajax-new");
                    return;
                }
                if (total > self.maxFileCount) {
                    self._resetPreviewThumbs(isAjaxUpload);
                }
            } else {
                if (!isAjaxUpload || flagSingle) {
                    self._resetPreviewThumbs(false);
                    if (flagSingle) {
                        self.clearStack();
                    }
                } else {
                    if (isAjaxUpload && ctr === 0 && (!previewCache.count(self.id) || self.overwriteInitial)) {
                        self._resetPreviewThumbs(true);
                    }
                }
            }
            if (self.isPreviewable) {
                self._readFiles(tfiles);
            } else {
                self._updateFileDetails(1);
            }
            self._showFolderError(folders);
        },
        _abort: function(params) {
            var self = this, data;
            if (self.ajaxAborted && typeof self.ajaxAborted === "object" && self.ajaxAborted.message !== undefined) {
                data = $.extend(true, {}, self._getOutData(), params);
                data.abortData = self.ajaxAborted.data || {};
                data.abortMessage = self.ajaxAborted.message;
                self.cancel();
                self._setProgress(100, self.$progress, self.msgCancelled);
                self._showUploadError(self.ajaxAborted.message, data, "filecustomerror");
                return true;
            }
            return false;
        },
        _resetFileStack: function() {
            var self = this, i = 0, newstack = [], newnames = [];
            self._getThumbs().each(function() {
                var $thumb = $(this), ind = $thumb.attr("data-fileindex"), file = self.filestack[ind];
                if (ind === -1) {
                    return;
                }
                if (file !== undefined) {
                    newstack[i] = file;
                    newnames[i] = self._getFileName(file);
                    $thumb.attr({
                        id: self.previewInitId + "-" + i,
                        "data-fileindex": i
                    });
                    i++;
                } else {
                    $thumb.attr({
                        id: "uploaded-" + uniqId(),
                        "data-fileindex": "-1"
                    });
                }
            });
            self.filestack = newstack;
            self.filenames = newnames;
        },
        clearStack: function() {
            var self = this;
            self.filestack = [];
            self.filenames = [];
            return self.$element;
        },
        updateStack: function(i, file) {
            var self = this;
            self.filestack[i] = file;
            self.filenames[i] = self._getFileName(file);
            return self.$element;
        },
        addToStack: function(file) {
            var self = this;
            self.filestack.push(file);
            self.filenames.push(self._getFileName(file));
            return self.$element;
        },
        getFileStack: function(skipNull) {
            var self = this;
            return self.filestack.filter(function(n) {
                return skipNull ? n !== undefined : n !== undefined && n !== null;
            });
        },
        lock: function() {
            var self = this;
            self._resetErrors();
            self.disable();
            if (self.showRemove) {
                addCss(self.$container.find(".fileinput-remove"), "hide");
            }
            if (self.showCancel) {
                self.$container.find(".fileinput-cancel").removeClass("hide");
            }
            self._raise("filelock", [ self.filestack, self._getExtraData() ]);
            return self.$element;
        },
        unlock: function(reset) {
            var self = this;
            if (reset === undefined) {
                reset = true;
            }
            self.enable();
            if (self.showCancel) {
                addCss(self.$container.find(".fileinput-cancel"), "hide");
            }
            if (self.showRemove) {
                self.$container.find(".fileinput-remove").removeClass("hide");
            }
            if (reset) {
                self._resetFileStack();
            }
            self._raise("fileunlock", [ self.filestack, self._getExtraData() ]);
            return self.$element;
        },
        cancel: function() {
            var self = this, xhr = self.ajaxRequests, len = xhr.length, i;
            if (len > 0) {
                for (i = 0; i < len; i += 1) {
                    self.cancelling = true;
                    xhr[i].abort();
                }
            }
            self._setProgressCancelled();
            self._getThumbs().each(function() {
                var $thumb = $(this), ind = $thumb.attr("data-fileindex");
                $thumb.removeClass("file-uploading");
                if (self.filestack[ind] !== undefined) {
                    $thumb.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled");
                    $thumb.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled");
                }
                self.unlock();
            });
            return self.$element;
        },
        clear: function() {
            var self = this, cap;
            self.$btnUpload.removeAttr("disabled");
            self._getThumbs().find("video,audio,img").each(function() {
                cleanMemory($(this));
            });
            self._resetUpload();
            self.clearStack();
            self._clearFileInput();
            self._resetErrors(true);
            self._raise("fileclear");
            if (self._hasInitialPreview()) {
                self._showFileIcon();
                self._resetPreview();
                self._initPreviewDeletes();
                self.$container.removeClass("file-input-new");
            } else {
                self._getThumbs().each(function() {
                    self._clearObjects($(this));
                });
                if (self.isUploadable) {
                    previewCache.data[self.id] = {};
                }
                self.$preview.html("");
                cap = !self.overwriteInitial && self.initialCaption.length > 0 ? self.initialCaption : "";
                self._setCaption(cap);
                self.$caption.attr("title", "");
                addCss(self.$container, "file-input-new");
                self._validateDefaultPreview();
            }
            if (self.$container.find(".file-preview-frame").length === 0) {
                if (!self._initCaption()) {
                    self.$captionContainer.find(".kv-caption-icon").hide();
                }
            }
            self._hideFileIcon();
            self._raise("filecleared");
            self.$captionContainer.focus();
            self._setFileDropZoneTitle();
            return self.$element;
        },
        reset: function() {
            var self = this;
            self._resetPreview();
            self.$container.find(".fileinput-filename").text("");
            self._raise("filereset");
            addCss(self.$container, "file-input-new");
            if (self.$preview.find(".file-preview-frame").length || self.isUploadable && self.dropZoneEnabled) {
                self.$container.removeClass("file-input-new");
            }
            self._setFileDropZoneTitle();
            self.clearStack();
            self.formdata = {};
            return self.$element;
        },
        disable: function() {
            var self = this;
            self.isDisabled = true;
            self._raise("filedisabled");
            self.$element.attr("disabled", "disabled");
            self.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled");
            self.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", true);
            self._initDragDrop();
            return self.$element;
        },
        enable: function() {
            var self = this;
            self.isDisabled = false;
            self._raise("fileenabled");
            self.$element.removeAttr("disabled");
            self.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled");
            self.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled");
            self._initDragDrop();
            return self.$element;
        },
        upload: function() {
            var self = this, totLen = self.getFileStack().length, params = {}, i, outData, len, hasExtraData = !$.isEmptyObject(self._getExtraData());
            if (self.minFileCount > 0 && self._getFileCount(totLen) < self.minFileCount) {
                self._noFilesError(params);
                return;
            }
            if (!self.isUploadable || self.isDisabled || totLen === 0 && !hasExtraData) {
                return;
            }
            self._resetUpload();
            self.$progress.removeClass("hide");
            self.uploadCount = 0;
            self.uploadStatus = {};
            self.uploadLog = [];
            self.lock();
            self._setProgress(2);
            if (totLen === 0 && hasExtraData) {
                self._uploadExtraOnly();
                return;
            }
            len = self.filestack.length;
            self.hasInitData = false;
            if (self.uploadAsync) {
                outData = self._getOutData();
                self._raise("filebatchpreupload", [ outData ]);
                self.fileBatchCompleted = false;
                self.uploadCache = {
                    content: [],
                    config: [],
                    tags: [],
                    append: true
                };
                self.uploadAsyncCount = self.getFileStack().length;
                for (i = 0; i < len; i++) {
                    self.uploadCache.content[i] = null;
                    self.uploadCache.config[i] = null;
                    self.uploadCache.tags[i] = null;
                }
                for (i = 0; i < len; i++) {
                    if (self.filestack[i] !== undefined) {
                        self._uploadSingle(i, self.filestack, true);
                    }
                }
                return;
            }
            self._uploadBatch();
            return self.$element;
        },
        destroy: function() {
            var self = this, $cont = self.$container;
            $cont.find(".file-drop-zone").off();
            self.$element.insertBefore($cont).off(NAMESPACE).removeData();
            $cont.off().remove();
            return self.$element;
        },
        refresh: function(options) {
            var self = this, $el = self.$element;
            options = options ? $.extend(true, {}, self.options, options) : self.options;
            self.destroy();
            $el.fileinput(options);
            if ($el.val()) {
                $el.trigger("change.fileinput");
            }
            return $el;
        }
    };
    $.fn.fileinput = function(option) {
        if (!hasFileAPISupport() && !isIE(9)) {
            return;
        }
        var args = Array.apply(null, arguments), retvals = [];
        args.shift();
        this.each(function() {
            var self = $(this), data = self.data("fileinput"), options = typeof option === "object" && option, lang = options.language || self.data("language") || "en", loc = {}, opts;
            if (!data) {
                if (lang !== "en" && !isEmpty($.fn.fileinputLocales[lang])) {
                    loc = $.fn.fileinputLocales[lang];
                }
                opts = $.extend(true, {}, $.fn.fileinput.defaults, $.fn.fileinputLocales.en, loc, options, self.data());
                data = new FileInput(this, opts);
                self.data("fileinput", data);
            }
            if (typeof option === "string") {
                retvals.push(data[option].apply(data, args));
            }
        });
        switch (retvals.length) {
          case 0:
            return this;

          case 1:
            return retvals[0];

          default:
            return retvals;
        }
    };
    $.fn.fileinput.defaults = {
        language: "en",
        showCaption: true,
        showPreview: true,
        showRemove: true,
        showUpload: true,
        showCancel: true,
        showClose: true,
        showUploadedThumbs: true,
        autoReplace: false,
        mainClass: "",
        previewClass: "",
        captionClass: "",
        mainTemplate: null,
        initialCaption: "",
        initialPreview: [],
        initialPreviewDelimiter: "*$$*",
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: true,
        removeFromPreviewOnError: false,
        deleteUrl: "",
        deleteExtraData: {},
        overwriteInitial: true,
        layoutTemplates: defaultLayoutTemplates,
        previewTemplates: defaultPreviewTemplates,
        allowedPreviewTypes: null,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewSettings: defaultPreviewSettings,
        fileTypeSettings: defaultFileTypeSettings,
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: "file-icon-4x",
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: "hidden-xs",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
        browseClass: "btn btn-primary",
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: "btn btn-default",
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: "btn btn-default",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        uploadAsync: true,
        uploadExtraData: {},
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: false,
        resizePreference: "width",
        resizeQuality: .92,
        resizeDefaultImageType: "image/jpeg",
        maxFileSize: 0,
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: false,
        msgValidationErrorClass: "text-danger",
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: "file-error-message",
        progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar progress-bar-success",
        progressErrorClass: "progress-bar progress-bar-danger",
        previewFileType: "image",
        zoomIndicator: '<i class="glyphicon glyphicon-zoom-in"></i>',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: '<span class="close kv-error-close">&times;</span>',
        slugCallback: null,
        dropZoneEnabled: true,
        dropZoneTitleClass: "file-drop-zone-title",
        fileActionSettings: {},
        otherActionButtons: "",
        textEncoding: "UTF-8",
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: true
    };
    $.fn.fileinputLocales.en = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgNo: "No",
        msgCancelled: "Cancelled",
        msgZoomTitle: "View details",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "Validation Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;"
    };
    $.fn.fileinput.Constructor = FileInput;
    /**
     * Convert automatically file inputs with class 'file' into a bootstrap fileinput control.
     */
    $(document).ready(function() {
        var $input = $("input.file[type=file]");
        if ($input.length) {
            $input.fileinput();
        }
    });
});

/*!
 * @copyright Copyright &copy; Kartik Visweswaran, Krajee.com, 2014 - 2015
 * @version 4.3.1
 *
 * File input styled for Bootstrap 3.0 that utilizes HTML5 File Input's advanced features including the FileReader API.
 *
 * The plugin drastically enhances the HTML file input to preview multiple files on the client before upload. In
 * addition it provides the ability to preview content of images, text, videos, audio, html, flash and other objects.
 * It also offers the ability to upload and delete files using AJAX, and add files in batches (i.e. preview, append,
 * or remove before upload).
 *
 * Author: Kartik Visweswaran
 * Copyright: 2015, Kartik Visweswaran, Krajee.com
 * For more JQuery plugins visit http://plugins.krajee.com
 * For more Yii related demos visit http://demos.krajee.com
 */
!function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(window.jQuery);
}(function(e) {
    "use strict";
    e.fn.fileinputLocales = {};
    var i, t, a, r, n, l, o, s, d, c, p, u, f, v, g, m, h, w, _, b, C, x, y, T, F, E, I, $, k, P, S, D, U, A, j, L, z, O, R, N, B, M, Z, H, W, q, V, K, X, J, Q, Y, G, ee, ie;
    i = ".fileinput", t = window.URL || window.webkitURL, a = function(e, i, t) {
        return void 0 !== e && (t ? e === i : e.match(i));
    }, r = function(e) {
        if ("Microsoft Internet Explorer" !== navigator.appName) return !1;
        if (10 === e) return new RegExp("msie\\s" + e, "i").test(navigator.userAgent);
        var i, t = document.createElement("div");
        return t.innerHTML = "<!--[if IE " + e + "]> <i></i> <![endif]-->", i = t.getElementsByTagName("i").length, 
        document.body.appendChild(t), t.parentNode.removeChild(t), i;
    }, n = function() {
        return new RegExp("Edge/[0-9]+", "i").test(navigator.userAgent);
    }, l = function(e, t, a, r) {
        var n = r ? t : t.split(" ").join(i + " ") + i;
        e.off(n).on(n, a);
    }, o = {
        data: {},
        init: function(e) {
            var i = e.initialPreview, t = e.id;
            i.length > 0 && !X(i) && (i = i.split(e.initialPreviewDelimiter)), o.data[t] = {
                content: i,
                config: e.initialPreviewConfig,
                tags: e.initialPreviewThumbTags,
                delimiter: e.initialPreviewDelimiter,
                template: e.previewGenericTemplate,
                msg: function(i) {
                    return e._getMsgSelected(i);
                },
                initId: e.previewInitId,
                footer: e._getLayoutTemplate("footer").replace(/\{progress}/g, e._renderThumbProgress()),
                isDelete: e.initialPreviewShowDelete,
                caption: e.initialCaption,
                actions: function(i, t, a, r, n) {
                    return e._renderFileActions(i, t, a, r, n);
                }
            };
        },
        fetch: function(e) {
            return o.data[e].content.filter(function(e) {
                return null !== e;
            });
        },
        count: function(e, i) {
            return o.data[e] && o.data[e].content ? i ? o.data[e].content.length : o.fetch(e).length : 0;
        },
        get: function(i, t, a) {
            var r, n, l = "init_" + t, s = o.data[i], d = s.config[t], c = s.initId + "-" + l, p = " file-preview-initial";
            return a = void 0 === a ? !0 : a, null === s.content[t] ? "" : (K(d) || K(d.frameClass) || (p += " " + d.frameClass), 
            r = s.template.replace(/\{previewId}/g, c).replace(/\{frameClass}/g, p).replace(/\{fileindex}/g, l).replace(/\{content}/g, s.content[t]).replace(/\{footer}/g, o.footer(i, t, a)), 
            s.tags.length && s.tags[t] && (r = ee(r, s.tags[t])), K(d) || K(d.frameAttr) || (n = e(document.createElement("div")).html(r), 
            n.find(".file-preview-initial").attr(d.frameAttr), r = n.html(), n.remove()), r);
        },
        add: function(i, t, a, r, n) {
            var l, s = e.extend(!0, {}, o.data[i]);
            return X(t) || (t = t.split(s.delimiter)), n ? (l = s.content.push(t) - 1, s.config[l] = a, 
            s.tags[l] = r) : (l = t.length, s.content = t, s.config = a, s.tags = r), o.data[i] = s, 
            l;
        },
        set: function(i, t, a, r, n) {
            var l, s, d = e.extend(!0, {}, o.data[i]);
            if (t && t.length && (X(t) || (t = t.split(d.delimiter)), s = t.filter(function(e) {
                return null !== e;
            }), s.length)) {
                if (void 0 === d.content && (d.content = []), void 0 === d.config && (d.config = []), 
                void 0 === d.tags && (d.tags = []), n) {
                    for (l = 0; l < t.length; l++) t[l] && d.content.push(t[l]);
                    for (l = 0; l < a.length; l++) a[l] && d.config.push(a[l]);
                    for (l = 0; l < r.length; l++) r[l] && d.tags.push(r[l]);
                } else d.content = t, d.config = a, d.tags = r;
                o.data[i] = d;
            }
        },
        unset: function(e, i) {
            var t = o.count(e);
            if (t) {
                if (1 === t) return o.data[e].content = [], void (o.data[e].config = []);
                o.data[e].content[i] = null, o.data[e].config[i] = null;
            }
        },
        out: function(e) {
            var i, t = "", a = o.data[e], r = o.count(e, !0);
            if (0 === r) return {
                content: "",
                caption: ""
            };
            for (var n = 0; r > n; n++) t += o.get(e, n);
            return i = a.msg(o.count(e)), {
                content: t,
                caption: i
            };
        },
        footer: function(e, i, t) {
            var a = o.data[e];
            if (t = void 0 === t ? !0 : t, 0 === a.config.length || K(a.config[i])) return "";
            var r = a.config[i], n = J("caption", r) ? r.caption : "", l = J("width", r) ? r.width : "auto", s = J("url", r) ? r.url : !1, d = J("key", r) ? r.key : null, c = s === !1 && t, p = a.isDelete ? a.actions(!1, !0, c, s, d) : "", u = a.footer.replace(/\{actions}/g, p);
            return u.replace(/\{caption}/g, n).replace(/\{width}/g, l).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, "");
        }
    }, s = function(e, i) {
        return i = i || 0, "number" == typeof e ? e : ("string" == typeof e && (e = parseFloat(e)), 
        isNaN(e) ? i : e);
    }, d = function() {
        return !(!window.File || !window.FileReader);
    }, c = function() {
        var e = document.createElement("div");
        return !r(9) && !n() && (void 0 !== e.draggable || void 0 !== e.ondragstart && void 0 !== e.ondrop);
    }, p = function() {
        return d() && window.FormData;
    }, u = function(e, i) {
        e.removeClass(i).addClass(i);
    }, f = 'style="width:{width};height:{height};"', v = '      <param name="controller" value="true" />\n      <param name="allowFullScreen" value="true" />\n      <param name="allowScriptAccess" value="always" />\n      <param name="autoPlay" value="false" />\n      <param name="autoStart" value="false" />\n      <param name="quality" value="high" />\n', 
    g = '<div class="file-preview-other">\n   <span class="{previewFileIconClass}">{previewFileIcon}</span>\n</div>', 
    m = {
        removeIcon: '<i class="glyphicon glyphicon-trash text-danger"></i>',
        removeClass: "btn btn-xs btn-default",
        removeTitle: "Remove file",
        uploadIcon: '<i class="glyphicon glyphicon-upload text-info"></i>',
        uploadClass: "btn btn-xs btn-default",
        uploadTitle: "Upload file",
        indicatorNew: '<i class="glyphicon glyphicon-hand-down text-warning"></i>',
        indicatorSuccess: '<i class="glyphicon glyphicon-ok-sign text-success"></i>',
        indicatorError: '<i class="glyphicon glyphicon-exclamation-sign text-danger"></i>',
        indicatorLoading: '<i class="glyphicon glyphicon-hand-up text-muted"></i>',
        indicatorNewTitle: "Not uploaded yet",
        indicatorSuccessTitle: "Uploaded",
        indicatorErrorTitle: "Upload Error",
        indicatorLoadingTitle: "Uploading ..."
    }, h = '{preview}\n<div class="kv-upload-progress hide"></div>\n<div class="input-group {class}">\n   {caption}\n   <div class="input-group-btn">\n       {remove}\n       {cancel}\n       {upload}\n       {browse}\n   </div>\n</div>', 
    w = '{preview}\n<div class="kv-upload-progress hide"></div>\n{remove}\n{cancel}\n{upload}\n{browse}\n', 
    _ = '<div class="file-preview {class}">\n    {close}    <div class="{dropClass}">\n    <div class="file-preview-thumbnails">\n    </div>\n    <div class="clearfix"></div>    <div class="file-preview-status text-center text-success"></div>\n    <div class="kv-fileinput-error"></div>\n    </div>\n</div>', 
    C = '<div class="close fileinput-remove">&times;</div>\n', b = '<span class="glyphicon glyphicon-file kv-caption-icon"></span>', 
    x = '<div tabindex="500" class="form-control file-caption {class}">\n   <div class="file-caption-name"></div>\n</div>\n', 
    y = '<button type="{type}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</button>', 
    T = '<a href="{href}" tabindex="500" title="{title}" class="{css}" {status}>{icon}{label}</a>', 
    F = '<div tabindex="500" class="{css}" {status}>{icon}{label}</div>', E = '<div id="{id}" class="file-preview-detail-modal modal fade" tabindex="-1">\n  <div class="modal-dialog modal-lg">\n    <div class="modal-content">\n      <div class="modal-header">\n        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>\n        <h3 class="modal-title">{heading} <small>{title}</small></h3>\n      </div>\n      <div class="modal-body">\n           <pre>{body}</pre>\n      </div>\n    </div>\n  </div>\n</div>', 
    I = '<div class="progress">\n    <div class="{class}" role="progressbar" aria-valuenow="{percent}" aria-valuemin="0" aria-valuemax="100" style="width:{percent}%;">\n        {percent}%\n     </div>\n</div>', 
    $ = '<div class="file-thumbnail-footer">\n    <div class="file-footer-caption" title="{caption}">{caption}</div>\n    {progress} {actions}\n</div>', 
    k = '<div class="file-actions">\n    <div class="file-footer-buttons">\n        {upload}{delete}{other}    </div>\n    <div class="file-upload-indicator" title="{indicatorTitle}">{indicator}</div>\n    <div class="clearfix"></div>\n</div>', 
    P = '<button type="button" class="kv-file-remove {removeClass}" title="{removeTitle}" {dataUrl}{dataKey}>{removeIcon}</button>\n', 
    S = '<button type="button" class="kv-file-upload {uploadClass}" title="{uploadTitle}">   {uploadIcon}\n</button>\n', 
    D = '<button type="button" class="btn btn-default btn-xs btn-block" title="{zoomTitle}: {caption}" onclick="{dialog}">\n   {zoomInd}\n</button>\n', 
    U = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   {content}\n   {footer}\n</div>\n', 
    A = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n    <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       ' + g + "\n    </object>\n   {footer}\n</div>", 
    j = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <img src="{data}" class="file-preview-image" title="{caption}" alt="{caption}" ' + f + ">\n   {footer}\n</div>\n", 
    L = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}">\n   <pre class="file-preview-text" title="{caption}" ' + f + ">{data}</pre>\n   {zoom}\n   {footer}\n</div>", 
    z = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <video width="{width}" height="{height}" controls>\n       <source src="{data}" type="{type}">\n       ' + g + "\n   </video>\n   {footer}\n</div>\n", 
    O = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <audio controls>\n       <source src="{data}" type="{type}">\n       ' + g + "\n   </audio>\n   {footer}\n</div>", 
    R = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <object class="file-object" type="application/x-shockwave-flash" width="{width}" height="{height}" data="{data}">\n' + v + "       " + g + "\n   </object>\n   {footer}\n</div>\n", 
    N = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <object class="file-object" data="{data}" type="{type}" width="{width}" height="{height}">\n       <param name="movie" value="{caption}" />\n' + v + "         " + g + "\n   </object>\n   {footer}\n</div>", 
    B = '<div class="file-preview-frame{frameClass}" id="{previewId}" data-fileindex="{fileindex}" title="{caption}" ' + f + '>\n   <div class="file-preview-other-frame">\n   ' + g + '\n   </div>\n   <div class="file-preview-other-footer">{footer}</div>\n</div>', 
    M = {
        main1: h,
        main2: w,
        preview: _,
        close: C,
        zoom: D,
        icon: b,
        caption: x,
        modal: E,
        progress: I,
        footer: $,
        actions: k,
        actionDelete: P,
        actionUpload: S,
        btnDefault: y,
        btnLink: T,
        btnBrowse: F
    }, Z = {
        generic: U,
        html: A,
        image: j,
        text: L,
        video: z,
        audio: O,
        flash: R,
        object: N,
        other: B
    }, H = [ "image", "html", "text", "video", "audio", "flash", "object" ], W = {
        image: {
            width: "auto",
            height: "160px"
        },
        html: {
            width: "213px",
            height: "160px"
        },
        text: {
            width: "160px",
            height: "136px"
        },
        video: {
            width: "213px",
            height: "160px"
        },
        audio: {
            width: "213px",
            height: "80px"
        },
        flash: {
            width: "213px",
            height: "160px"
        },
        object: {
            width: "160px",
            height: "160px"
        },
        other: {
            width: "160px",
            height: "160px"
        }
    }, V = {
        image: function(e, i) {
            return a(e, "image.*") || a(i, /\.(gif|png|jpe?g)$/i);
        },
        html: function(e, i) {
            return a(e, "text/html") || a(i, /\.(htm|html)$/i);
        },
        text: function(e, i) {
            return a(e, "text.*") || a(e, /\.(xml|javascript)$/i) || a(i, /\.(txt|md|csv|nfo|ini|json|php|js|css)$/i);
        },
        video: function(e, i) {
            return a(e, "video.*") && (a(e, /(ogg|mp4|mp?g|webm|3gp)$/i) || a(i, /\.(og?|mp4|webm|mp?g|3gp)$/i));
        },
        audio: function(e, i) {
            return a(e, "audio.*") && (a(e, /(ogg|mp3|mp?g|wav)$/i) || a(i, /\.(og?|mp3|mp?g|wav)$/i));
        },
        flash: function(e, i) {
            return a(e, "application/x-shockwave-flash", !0) || a(i, /\.(swf)$/i);
        },
        object: function(e, i) {
            return a(e, "application/pdf", !0) || a(i, /\.(pdf)$/i);
        },
        other: function() {
            return !0;
        }
    }, K = function(i, t) {
        return void 0 === i || null === i || 0 === i.length || t && "" === e.trim(i);
    }, X = function(e) {
        return Array.isArray(e) || "[object Array]" === Object.prototype.toString.call(e);
    }, J = function(e, i) {
        return "object" == typeof i && e in i;
    }, Q = function(i, t, a) {
        return K(i) || K(i[t]) ? a : e(i[t]);
    }, Y = function() {
        return Math.round(new Date().getTime() + 100 * Math.random());
    }, G = function(e) {
        return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
    }, ee = function(i, t) {
        var a = i;
        return t ? (e.each(t, function(e, i) {
            "function" == typeof i && (i = i()), a = a.split(e).join(i);
        }), a) : a;
    }, ie = function(e) {
        var i = e.is("img") ? e.attr("src") : e.find("source").attr("src");
        t.revokeObjectURL(i);
    }, q = function(i, t) {
        var a = this;
        a.$element = e(i), a._validate() && (a.isPreviewable = d(), a.isIE9 = r(9), a.isIE10 = r(10), 
        a.isPreviewable || a.isIE9 ? (a._init(t), a._listen()) : a.$element.removeClass("file-loading"));
    }, q.prototype = {
        constructor: q,
        _init: function(i) {
            var t, a = this, r = a.$element;
            e.each(i, function(e, i) {
                switch (e) {
                  case "minFileCount":
                  case "maxFileCount":
                  case "maxFileSize":
                    a[e] = s(i);
                    break;

                  default:
                    a[e] = i;
                }
            }), K(a.allowedPreviewTypes) && (a.allowedPreviewTypes = H), a.fileInputCleared = !1, 
            a.fileBatchCompleted = !0, a.isPreviewable || (a.showPreview = !1), a.uploadFileAttr = K(r.attr("name")) ? "file_data" : r.attr("name"), 
            a.reader = null, a.formdata = {}, a.clearStack(), a.uploadCount = 0, a.uploadStatus = {}, 
            a.uploadLog = [], a.uploadAsyncCount = 0, a.loadedImages = [], a.totalImagesCount = 0, 
            a.ajaxRequests = [], a.isError = !1, a.ajaxAborted = !1, a.cancelling = !1, t = a._getLayoutTemplate("progress"), 
            a.progressTemplate = t.replace("{class}", a.progressClass), a.progressCompleteTemplate = t.replace("{class}", a.progressCompleteClass), 
            a.progressErrorTemplate = t.replace("{class}", a.progressErrorClass), a.dropZoneEnabled = c() && a.dropZoneEnabled, 
            a.isDisabled = a.$element.attr("disabled") || a.$element.attr("readonly"), a.isUploadable = p() && !K(a.uploadUrl), 
            a.slug = "function" == typeof i.slugCallback ? i.slugCallback : a._slugDefault, 
            a.mainTemplate = a.showCaption ? a._getLayoutTemplate("main1") : a._getLayoutTemplate("main2"), 
            a.captionTemplate = a._getLayoutTemplate("caption"), a.previewGenericTemplate = a._getPreviewTemplate("generic"), 
            a.resizeImage && (a.maxImageWidth || a.maxImageHeight) && (a.imageCanvas = document.createElement("canvas"), 
            a.imageCanvasContext = a.imageCanvas.getContext("2d")), K(a.$element.attr("id")) && a.$element.attr("id", Y()), 
            void 0 === a.$container ? a.$container = a._createContainer() : a._refreshContainer(), 
            a.$dropZone = a.$container.find(".file-drop-zone"), a.$progress = a.$container.find(".kv-upload-progress"), 
            a.$btnUpload = a.$container.find(".fileinput-upload"), a.$captionContainer = Q(i, "elCaptionContainer", a.$container.find(".file-caption")), 
            a.$caption = Q(i, "elCaptionText", a.$container.find(".file-caption-name")), a.$previewContainer = Q(i, "elPreviewContainer", a.$container.find(".file-preview")), 
            a.$preview = Q(i, "elPreviewImage", a.$container.find(".file-preview-thumbnails")), 
            a.$previewStatus = Q(i, "elPreviewStatus", a.$container.find(".file-preview-status")), 
            a.$errorContainer = Q(i, "elErrorContainer", a.$previewContainer.find(".kv-fileinput-error")), 
            K(a.msgErrorClass) || u(a.$errorContainer, a.msgErrorClass), a.$errorContainer.hide(), 
            a.fileActionSettings = e.extend(!0, m, i.fileActionSettings), a.previewInitId = "preview-" + Y(), 
            a.id = a.$element.attr("id"), o.init(a), a._initPreview(!0), a._initPreviewDeletes(), 
            a.options = i, a._setFileDropZoneTitle(), a.$element.removeClass("file-loading"), 
            a.$element.attr("disabled") && a.disable();
        },
        _validate: function() {
            var e, i = this;
            return "file" === i.$element.attr("type") ? !0 : (e = '<div class="help-block alert alert-warning"><h4>Invalid Input Type</h4>You must set an input <code>type = file</code> for <b>bootstrap-fileinput</b> plugin to initialize.</div>', 
            i.$element.after(e), !1);
        },
        _errorsExist: function() {
            var i, t = this;
            return t.$errorContainer.find("li").length ? !0 : (i = e(document.createElement("div")).html(t.$errorContainer.html()), 
            i.find("span.kv-error-close").remove(), i.find("ul").remove(), e.trim(i.text()).length ? !0 : !1);
        },
        _errorHandler: function(e, i) {
            var t = this, a = e.target.error;
            a.code === a.NOT_FOUND_ERR ? t._showError(t.msgFileNotFound.replace("{name}", i)) : a.code === a.SECURITY_ERR ? t._showError(t.msgFileSecured.replace("{name}", i)) : a.code === a.NOT_READABLE_ERR ? t._showError(t.msgFileNotReadable.replace("{name}", i)) : a.code === a.ABORT_ERR ? t._showError(t.msgFilePreviewAborted.replace("{name}", i)) : t._showError(t.msgFilePreviewError.replace("{name}", i));
        },
        _addError: function(e) {
            var i = this, t = i.$errorContainer;
            e && t.length && (t.html(i.errorCloseButton + e), l(t.find(".kv-error-close"), "click", function() {
                t.fadeOut("slow");
            }));
        },
        _resetErrors: function(e) {
            var i = this, t = i.$errorContainer;
            i.isError = !1, i.$container.removeClass("has-error"), t.html(""), e ? t.fadeOut("slow") : t.hide();
        },
        _showFolderError: function(e) {
            var i, t = this, a = t.$errorContainer;
            e && (i = t.msgFoldersNotAllowed.replace(/\{n}/g, e), t._addError(i), u(t.$container, "has-error"), 
            a.fadeIn(800), t._raise("filefoldererror", [ e, i ]));
        },
        _showUploadError: function(e, i, t) {
            var a = this, r = a.$errorContainer, n = t || "fileuploaderror", l = i && i.id ? '<li data-file-id="' + i.id + '">' + e + "</li>" : "<li>" + e + "</li>";
            return 0 === r.find("ul").length ? a._addError("<ul>" + l + "</ul>") : r.find("ul").append(l), 
            r.fadeIn(800), a._raise(n, [ i, e ]), a.$container.removeClass("file-input-new"), 
            u(a.$container, "has-error"), !0;
        },
        _showError: function(e, i, t) {
            var a = this, r = a.$errorContainer, n = t || "fileerror";
            return i = i || {}, i.reader = a.reader, a._addError(e), r.fadeIn(800), a._raise(n, [ i, e ]), 
            a.isUploadable || a._clearFileInput(), a.$container.removeClass("file-input-new"), 
            u(a.$container, "has-error"), a.$btnUpload.attr("disabled", !0), !0;
        },
        _noFilesError: function(e) {
            var i = this, t = i.minFileCount > 1 ? i.filePlural : i.fileSingle, a = i.msgFilesTooLess.replace("{n}", i.minFileCount).replace("{files}", t), r = i.$errorContainer;
            i._addError(a), i.isError = !0, i._updateFileDetails(0), r.fadeIn(800), i._raise("fileerror", [ e, a ]), 
            i._clearFileInput(), u(i.$container, "has-error");
        },
        _parseError: function(i, t, a) {
            var r = this, n = e.trim(t + ""), l = "." === n.slice(-1) ? "" : ".", o = void 0 !== i.responseJSON && void 0 !== i.responseJSON.error ? i.responseJSON.error : i.responseText;
            return r.cancelling && r.msgUploadAborted && (n = r.msgUploadAborted), r.showAjaxErrorDetails && o ? (o = e.trim(o.replace(/\n\s*\n/g, "\n")), 
            o = o.length > 0 ? "<pre>" + o + "</pre>" : "", n += l + o) : n += l, r.cancelling = !1, 
            a ? "<b>" + a + ": </b>" + n : n;
        },
        _parseFileType: function(e) {
            var i, t, a, r, n = this;
            for (r = 0; r < H.length; r += 1) if (a = H[r], i = J(a, n.fileTypeSettings) ? n.fileTypeSettings[a] : V[a], 
            t = i(e.type, e.name) ? a : "", !K(t)) return t;
            return "other";
        },
        _parseFilePreviewIcon: function(i, t) {
            var a, r = this, n = r.previewFileIcon;
            return t && t.indexOf(".") > -1 && (a = t.split(".").pop(), r.previewFileIconSettings && r.previewFileIconSettings[a] && (n = r.previewFileIconSettings[a]), 
            r.previewFileExtSettings && e.each(r.previewFileExtSettings, function(e, i) {
                r.previewFileIconSettings[e] && i(a) && (n = r.previewFileIconSettings[e]);
            })), i.indexOf("{previewFileIcon}") > -1 ? i.replace(/\{previewFileIconClass}/g, r.previewFileIconClass).replace(/\{previewFileIcon}/g, n) : i;
        },
        _raise: function(i, t) {
            var a = this, r = e.Event(i);
            if (void 0 !== t ? a.$element.trigger(r, t) : a.$element.trigger(r), r.isDefaultPrevented()) return !1;
            if (!r.result) return r.result;
            switch (i) {
              case "filebatchuploadcomplete":
              case "filebatchuploadsuccess":
              case "fileuploaded":
              case "fileclear":
              case "filecleared":
              case "filereset":
              case "fileerror":
              case "filefoldererror":
              case "fileuploaderror":
              case "filebatchuploaderror":
              case "filedeleteerror":
              case "filecustomerror":
              case "filesuccessremove":
                break;

              default:
                a.ajaxAborted = r.result;
            }
            return !0;
        },
        _listen: function() {
            var i = this, t = i.$element, a = t.closest("form"), r = i.$container;
            l(t, "change", e.proxy(i._change, i)), l(i.$btnFile, "click", e.proxy(i._browse, i)), 
            l(a, "reset", e.proxy(i.reset, i)), l(r.find(".fileinput-remove:not([disabled])"), "click", e.proxy(i.clear, i)), 
            l(r.find(".fileinput-cancel"), "click", e.proxy(i.cancel, i)), i._initDragDrop(), 
            i.isUploadable || l(a, "submit", e.proxy(i._submitForm, i)), l(i.$container.find(".fileinput-upload"), "click", e.proxy(i._uploadClick, i));
        },
        _initDragDrop: function() {
            var i = this, t = i.$dropZone;
            i.isUploadable && i.dropZoneEnabled && i.showPreview && (l(t, "dragenter dragover", e.proxy(i._zoneDragEnter, i)), 
            l(t, "dragleave", e.proxy(i._zoneDragLeave, i)), l(t, "drop", e.proxy(i._zoneDrop, i)), 
            l(e(document), "dragenter dragover drop", i._zoneDragDropInit));
        },
        _zoneDragDropInit: function(e) {
            e.stopPropagation(), e.preventDefault();
        },
        _zoneDragEnter: function(i) {
            var t = this, a = e.inArray("Files", i.originalEvent.dataTransfer.types) > -1;
            return t._zoneDragDropInit(i), t.isDisabled || !a ? (i.originalEvent.dataTransfer.effectAllowed = "none", 
            void (i.originalEvent.dataTransfer.dropEffect = "none")) : void u(t.$dropZone, "file-highlighted");
        },
        _zoneDragLeave: function(e) {
            var i = this;
            i._zoneDragDropInit(e), i.isDisabled || i.$dropZone.removeClass("file-highlighted");
        },
        _zoneDrop: function(e) {
            var i = this;
            e.preventDefault(), i.isDisabled || K(e.originalEvent.dataTransfer.files) || (i._change(e, "dragdrop"), 
            i.$dropZone.removeClass("file-highlighted"));
        },
        _uploadClick: function(e) {
            var i, t = this, a = t.$container.find(".fileinput-upload"), r = !a.hasClass("disabled") && K(a.attr("disabled"));
            if (!e || !e.isDefaultPrevented()) {
                if (!t.isUploadable) return void (r && "submit" !== a.attr("type") && (i = a.closest("form"), 
                i.length && i.trigger("submit"), e.preventDefault()));
                e.preventDefault(), r && t.upload();
            }
        },
        _submitForm: function() {
            var e = this, i = e.$element, t = i.get(0).files;
            return t && e.minFileCount > 0 && e._getFileCount(t.length) < e.minFileCount ? (e._noFilesError({}), 
            !1) : !e._abort({});
        },
        _clearPreview: function() {
            var e = this, i = e.showUploadedThumbs ? e.$preview.find(".file-preview-frame:not(.file-preview-success)") : e.$preview.find(".file-preview-frame");
            i.remove(), e.$preview.find(".file-preview-frame").length && e.showPreview || e._resetUpload(), 
            e._validateDefaultPreview();
        },
        _initPreview: function(e) {
            var i, t = this, a = t.initialCaption || "";
            return o.count(t.id) ? (i = o.out(t.id), a = e && t.initialCaption ? t.initialCaption : i.caption, 
            t.$preview.html(i.content), t._setCaption(a), void (K(i.content) || t.$container.removeClass("file-input-new"))) : (t._clearPreview(), 
            void (e ? t._setCaption(a) : t._initCaption()));
        },
        _initPreviewDeletes: function() {
            var i = this, t = i.deleteExtraData || {}, a = function() {
                var e = i.isUploadable ? o.count(i.id) : i.$element.get(0).files.length;
                0 !== i.$preview.find(".kv-file-remove").length || e || (i.reset(), i.initialCaption = "");
            };
            i.$preview.find(".kv-file-remove").each(function() {
                var r = e(this), n = r.data("url") || i.deleteUrl, s = r.data("key");
                if (!K(n) && void 0 !== s) {
                    var d, c, p, f, v = r.closest(".file-preview-frame"), g = o.data[i.id], m = v.data("fileindex");
                    m = parseInt(m.replace("init_", "")), p = K(g.config) && K(g.config[m]) ? null : g.config[m], 
                    f = K(p) || K(p.extra) ? t : p.extra, "function" == typeof f && (f = f()), c = {
                        id: r.attr("id"),
                        key: s,
                        extra: f
                    }, d = e.extend(!0, {}, {
                        url: n,
                        type: "POST",
                        dataType: "json",
                        data: e.extend(!0, {}, {
                            key: s
                        }, f),
                        beforeSend: function(e) {
                            i.ajaxAborted = !1, i._raise("filepredelete", [ s, e, f ]), i.ajaxAborted ? e.abort() : (u(v, "file-uploading"), 
                            u(r, "disabled"));
                        },
                        success: function(e, t, n) {
                            var l, d;
                            return K(e) || K(e.error) ? (o.unset(i.id, m), l = o.count(i.id), d = l > 0 ? i._getMsgSelected(l) : "", 
                            i._raise("filedeleted", [ s, n, f ]), i._setCaption(d), v.removeClass("file-uploading").addClass("file-deleted"), 
                            void v.fadeOut("slow", function() {
                                i._clearObjects(v), v.remove(), a(), l || 0 !== i.getFileStack().length || (i._setCaption(""), 
                                i.reset());
                            })) : (c.jqXHR = n, c.response = e, i._showError(e.error, c, "filedeleteerror"), 
                            v.removeClass("file-uploading"), r.removeClass("disabled"), void a());
                        },
                        error: function(e, t, r) {
                            var n = i._parseError(e, r);
                            c.jqXHR = e, c.response = {}, i._showError(n, c, "filedeleteerror"), v.removeClass("file-uploading"), 
                            a();
                        }
                    }, i.ajaxDeleteSettings), l(r, "click", function() {
                        return i._validateMinCount() ? void e.ajax(d) : !1;
                    });
                }
            });
        },
        _clearObjects: function(i) {
            i.find("video audio").each(function() {
                this.pause(), e(this).remove();
            }), i.find("img object div").each(function() {
                e(this).remove();
            });
        },
        _clearFileInput: function() {
            var i, t, a, r = this, n = r.$element;
            K(n.val()) || (r.isIE9 || r.isIE10 ? (i = n.closest("form"), t = e(document.createElement("form")), 
            a = e(document.createElement("div")), n.before(a), i.length ? i.after(t) : a.after(t), 
            t.append(n).trigger("reset"), a.before(n).remove(), t.remove()) : n.val(""), r.fileInputCleared = !0);
        },
        _resetUpload: function() {
            var e = this;
            e.uploadCache = {
                content: [],
                config: [],
                tags: [],
                append: !0
            }, e.uploadCount = 0, e.uploadStatus = {}, e.uploadLog = [], e.uploadAsyncCount = 0, 
            e.loadedImages = [], e.totalImagesCount = 0, e.$btnUpload.removeAttr("disabled"), 
            e._setProgress(0), u(e.$progress, "hide"), e._resetErrors(!1), e.ajaxAborted = !1, 
            e.ajaxRequests = [], e._resetCanvas();
        },
        _resetCanvas: function() {
            var e = this;
            e.canvas && e.imageCanvasContext && e.imageCanvasContext.clearRect(0, 0, e.canvas.width, e.canvas.height);
        },
        _hasInitialPreview: function() {
            var e = this;
            return !e.overwriteInitial && o.count(e.id);
        },
        _resetPreview: function() {
            var e, i, t = this;
            o.count(t.id) ? (e = o.out(t.id), t.$preview.html(e.content), i = t.initialCaption ? t.initialCaption : e.caption, 
            t._setCaption(i)) : (t._clearPreview(), t._initCaption());
        },
        _clearDefaultPreview: function() {
            var e = this;
            e.$preview.find(".file-default-preview").remove();
        },
        _validateDefaultPreview: function() {
            var e = this;
            e.showPreview && !K(e.defaultPreviewContent) && (e.$preview.html('<div class="file-default-preview">' + e.defaultPreviewContent + "</div>"), 
            e.$container.removeClass("file-input-new"));
        },
        _resetPreviewThumbs: function(e) {
            var i, t = this;
            return e ? (t._clearPreview(), void t.clearStack()) : void (t._hasInitialPreview() ? (i = o.out(t.id), 
            t.$preview.html(i.content), t._setCaption(i.caption), t._initPreviewDeletes()) : t._clearPreview());
        },
        _getLayoutTemplate: function(e) {
            var i = this, t = J(e, i.layoutTemplates) ? i.layoutTemplates[e] : M[e];
            return K(i.customLayoutTags) ? t : ee(t, i.customLayoutTags);
        },
        _getPreviewTemplate: function(e) {
            var i = this, t = J(e, i.previewTemplates) ? i.previewTemplates[e] : Z[e];
            return K(i.customPreviewTags) ? t : ee(t, i.customPreviewTags);
        },
        _getOutData: function(e, i, t) {
            var a = this;
            return e = e || {}, i = i || {}, t = t || a.filestack.slice(0) || {}, {
                form: a.formdata,
                files: t,
                filenames: a.filenames,
                extra: a._getExtraData(),
                response: i,
                reader: a.reader,
                jqXHR: e
            };
        },
        _getMsgSelected: function(e) {
            var i = this, t = 1 === e ? i.fileSingle : i.filePlural;
            return i.msgSelected.replace("{n}", e).replace("{files}", t);
        },
        _getThumbs: function(e) {
            return e = e || "", this.$preview.find(".file-preview-frame:not(.file-preview-initial)" + e);
        },
        _getExtraData: function(e, i) {
            var t = this, a = t.uploadExtraData;
            return "function" == typeof t.uploadExtraData && (a = t.uploadExtraData(e, i)), 
            a;
        },
        _initXhr: function(e, i, t) {
            var a = this;
            return e.upload && e.upload.addEventListener("progress", function(e) {
                var r = 0, n = e.loaded || e.position, l = e.total;
                e.lengthComputable && (r = Math.ceil(n / l * 100)), i ? a._setAsyncUploadStatus(i, r, t) : a._setProgress(Math.ceil(r));
            }, !1), e;
        },
        _ajaxSubmit: function(i, t, a, r, n, l) {
            var o, s = this;
            s._raise("filepreajax", [ n, l ]), s._uploadExtra(n, l), o = e.extend(!0, {}, {
                xhr: function() {
                    var i = e.ajaxSettings.xhr();
                    return s._initXhr(i, n, s.getFileStack().length);
                },
                url: s.uploadUrl,
                type: "POST",
                dataType: "json",
                data: s.formdata,
                cache: !1,
                processData: !1,
                contentType: !1,
                beforeSend: i,
                success: t,
                complete: a,
                error: r
            }, s.ajaxSettings), s.ajaxRequests.push(e.ajax(o));
        },
        _initUploadSuccess: function(i, t, a) {
            var r, n, l, s, d, c, p, u, f = this;
            f.showPreview && "object" == typeof i && !e.isEmptyObject(i) && void 0 !== i.initialPreview && i.initialPreview.length > 0 && (f.hasInitData = !0, 
            d = i.initialPreview || [], c = i.initialPreviewConfig || [], p = i.initialPreviewThumbTags || [], 
            r = void 0 === i.append || i.append ? !0 : !1, f.overwriteInitial = !1, void 0 !== t ? a ? (u = t.attr("data-fileindex"), 
            f.uploadCache.content[u] = d[0], f.uploadCache.config[u] = c[0], f.uploadCache.tags[u] = p[0], 
            f.uploadCache.append = r) : (l = o.add(f.id, d, c[0], p[0], r), n = o.get(f.id, l, !1), 
            s = e(n).hide(), t.after(s).fadeOut("slow", function() {
                s.fadeIn("slow").css("display:inline-block"), f._initPreviewDeletes(), f._clearFileInput(), 
                t.remove();
            })) : (o.set(f.id, d, c, p, r), f._initPreview(), f._initPreviewDeletes()));
        },
        _initSuccessThumbs: function() {
            var i = this;
            i.showPreview && i._getThumbs(".file-preview-success").each(function() {
                var t = e(this), a = t.find(".kv-file-remove");
                a.removeAttr("disabled"), l(a, "click", function() {
                    var e = i._raise("filesuccessremove", [ t.attr("id"), t.data("fileindex") ]);
                    ie(t), e !== !1 && t.fadeOut("slow", function() {
                        t.remove(), i.$preview.find(".file-preview-frame").length || i.reset();
                    });
                });
            });
        },
        _checkAsyncComplete: function() {
            var i, t, a = this;
            for (t = 0; t < a.filestack.length; t++) if (a.filestack[t] && (i = a.previewInitId + "-" + t, 
            -1 === e.inArray(i, a.uploadLog))) return !1;
            return a.uploadAsyncCount === a.uploadLog.length;
        },
        _uploadExtra: function(i, t) {
            var a = this, r = a._getExtraData(i, t);
            0 !== r.length && e.each(r, function(e, i) {
                a.formdata.append(e, i);
            });
        },
        _uploadSingle: function(i, t, a) {
            var r, n, l, s, d, c, p, f, v, g, m = this, h = m.getFileStack().length, w = new FormData(), _ = m.previewInitId + "-" + i, b = m.filestack.length > 0 || !e.isEmptyObject(m.uploadExtraData), C = {
                id: _,
                index: i
            };
            m.formdata = w, m.showPreview && (n = e("#" + _ + ":not(.file-preview-initial)"), 
            s = n.find(".kv-file-upload"), d = n.find(".kv-file-remove"), e("#" + _).find(".file-thumb-progress").removeClass("hide")), 
            0 === h || !b || s && s.hasClass("disabled") || m._abort(C) || (g = function(e, i) {
                m.updateStack(e, void 0), m.uploadLog.push(i), m._checkAsyncComplete() && (m.fileBatchCompleted = !0);
            }, l = function() {
                m.fileBatchCompleted && setTimeout(function() {
                    m.showPreview && (o.set(m.id, m.uploadCache.content, m.uploadCache.config, m.uploadCache.tags, m.uploadCache.append), 
                    m.hasInitData && (m._initPreview(), m._initPreviewDeletes())), m.unlock(), m._clearFileInput(), 
                    m._raise("filebatchuploadcomplete", [ m.filestack, m._getExtraData() ]), m.uploadCount = 0, 
                    m.uploadStatus = {}, m.uploadLog = [], m._setProgress(100);
                }, 100);
            }, c = function(t) {
                r = m._getOutData(t), m.fileBatchCompleted = !1, m.showPreview && (n.hasClass("file-preview-success") || (m._setThumbStatus(n, "Loading"), 
                u(n, "file-uploading")), s.attr("disabled", !0), d.attr("disabled", !0)), a || m.lock(), 
                m._raise("filepreupload", [ r, _, i ]), e.extend(!0, C, r), m._abort(C) && (t.abort(), 
                m._setProgressCancelled());
            }, p = function(t, l, o) {
                r = m._getOutData(o, t), e.extend(!0, C, r), setTimeout(function() {
                    K(t) || K(t.error) ? (m.showPreview && (m._setThumbStatus(n, "Success"), s.hide(), 
                    m._initUploadSuccess(t, n, a)), m._raise("fileuploaded", [ r, _, i ]), a ? g(i, _) : m.updateStack(i, void 0)) : (m._showUploadError(t.error, C), 
                    m._setPreviewError(n, i), a && g(i, _));
                }, 100);
            }, f = function() {
                setTimeout(function() {
                    m.showPreview && (s.removeAttr("disabled"), d.removeAttr("disabled"), n.removeClass("file-uploading")), 
                    a ? l() : (m.unlock(!1), m._clearFileInput()), m._initSuccessThumbs();
                }, 100);
            }, v = function(r, l, o) {
                var s = m._parseError(r, o, a ? t[i].name : null);
                setTimeout(function() {
                    a && g(i, _), m.uploadStatus[_] = 100, m._setPreviewError(n, i), e.extend(!0, C, m._getOutData(r)), 
                    m._showUploadError(s, C);
                }, 100);
            }, w.append(m.uploadFileAttr, t[i], m.filenames[i]), w.append("file_id", i), m._ajaxSubmit(c, p, f, v, _, i));
        },
        _uploadBatch: function() {
            var i, t, a, r, n, l = this, o = l.filestack, s = o.length, d = {}, c = l.filestack.length > 0 || !e.isEmptyObject(l.uploadExtraData);
            l.formdata = new FormData(), 0 !== s && c && !l._abort(d) && (n = function() {
                e.each(o, function(e) {
                    l.updateStack(e, void 0);
                }), l._clearFileInput();
            }, i = function(i) {
                l.lock();
                var t = l._getOutData(i);
                l.showPreview && l._getThumbs().each(function() {
                    var i = e(this), t = i.find(".kv-file-upload"), a = i.find(".kv-file-remove");
                    i.hasClass("file-preview-success") || (l._setThumbStatus(i, "Loading"), u(i, "file-uploading")), 
                    t.attr("disabled", !0), a.attr("disabled", !0);
                }), l._raise("filebatchpreupload", [ t ]), l._abort(t) && (i.abort(), l._setProgressCancelled());
            }, t = function(i, t, a) {
                var r = l._getOutData(a, i), o = l._getThumbs(), s = 0, d = K(i) || K(i.errorkeys) ? [] : i.errorkeys;
                K(i) || K(i.error) ? (l._raise("filebatchuploadsuccess", [ r ]), n(), l.showPreview ? (o.each(function() {
                    var i = e(this), t = i.find(".kv-file-upload");
                    i.find(".kv-file-upload").hide(), l._setThumbStatus(i, "Success"), i.removeClass("file-uploading"), 
                    t.removeAttr("disabled");
                }), l._initUploadSuccess(i)) : l.reset()) : (l.showPreview && (o.each(function() {
                    var i = e(this), t = i.find(".kv-file-remove"), a = i.find(".kv-file-upload");
                    return i.removeClass("file-uploading"), a.removeAttr("disabled"), t.removeAttr("disabled"), 
                    0 === d.length ? void l._setPreviewError(i) : (-1 !== e.inArray(s, d) ? l._setPreviewError(i) : (i.find(".kv-file-upload").hide(), 
                    l._setThumbStatus(i, "Success"), l.updateStack(s, void 0)), void s++);
                }), l._initUploadSuccess(i)), l._showUploadError(i.error, r, "filebatchuploaderror"));
            }, r = function() {
                l._setProgress(100), l.unlock(), l._initSuccessThumbs(), l._clearFileInput(), l._raise("filebatchuploadcomplete", [ l.filestack, l._getExtraData() ]);
            }, a = function(i, t, a) {
                var r = l._getOutData(i), n = l._parseError(i, a);
                l._showUploadError(n, r, "filebatchuploaderror"), l.uploadFileCount = s - 1, l.showPreview && (l._getThumbs().each(function() {
                    var i = e(this), t = i.attr("data-fileindex");
                    i.removeClass("file-uploading"), void 0 !== l.filestack[t] && l._setPreviewError(i);
                }), l._getThumbs().removeClass("file-uploading"), l._getThumbs(" .kv-file-upload").removeAttr("disabled"), 
                l._getThumbs(" .kv-file-delete").removeAttr("disabled"));
            }, e.each(o, function(e, i) {
                K(o[e]) || l.formdata.append(l.uploadFileAttr, i, l.filenames[e]);
            }), l._ajaxSubmit(i, t, r, a));
        },
        _uploadExtraOnly: function() {
            var e, i, t, a, r = this, n = {};
            r.formdata = new FormData(), r._abort(n) || (e = function(e) {
                r.lock();
                var i = r._getOutData(e);
                r._raise("filebatchpreupload", [ i ]), r._setProgress(50), n.data = i, n.xhr = e, 
                r._abort(n) && (e.abort(), r._setProgressCancelled());
            }, i = function(e, i, t) {
                var a = r._getOutData(t, e);
                K(e) || K(e.error) ? (r._raise("filebatchuploadsuccess", [ a ]), r._clearFileInput(), 
                r._initUploadSuccess(e)) : r._showUploadError(e.error, a, "filebatchuploaderror");
            }, t = function() {
                r._setProgress(100), r.unlock(), r._clearFileInput(), r._raise("filebatchuploadcomplete", [ r.filestack, r._getExtraData() ]);
            }, a = function(e, i, t) {
                var a = r._getOutData(e), l = r._parseError(e, t);
                n.data = a, r._showUploadError(l, a, "filebatchuploaderror");
            }, r._ajaxSubmit(e, i, t, a));
        },
        _initFileActions: function() {
            var i = this;
            i.showPreview && (i.$preview.find(".kv-file-remove").each(function() {
                var t, a, r, n, s = e(this), d = s.closest(".file-preview-frame"), c = d.attr("id"), p = d.attr("data-fileindex");
                l(s, "click", function() {
                    return n = i._raise("filepreremove", [ c, p ]), n !== !1 && i._validateMinCount() ? (t = d.hasClass("file-preview-error"), 
                    ie(d), void d.fadeOut("slow", function() {
                        i.updateStack(p, void 0), i._clearObjects(d), d.remove(), c && t && i.$errorContainer.find('li[data-file-id="' + c + '"]').fadeOut("fast", function() {
                            e(this).remove(), i._errorsExist() || i._resetErrors();
                        });
                        var n = i.getFileStack(!0), l = n.length, s = o.count(i.id), u = i.showPreview && i.$preview.find(".file-preview-frame").length;
                        i._clearFileInput(), 0 !== l || 0 !== s || u ? (a = s + l, r = a > 1 ? i._getMsgSelected(a) : n[0] ? i._getFileNames()[0] : "", 
                        i._setCaption(r)) : i.reset(), i._raise("fileremoved", [ c, p ]);
                    })) : !1;
                });
            }), i.$preview.find(".kv-file-upload").each(function() {
                var t = e(this);
                l(t, "click", function() {
                    var e = t.closest(".file-preview-frame"), a = e.attr("data-fileindex");
                    e.hasClass("file-preview-error") || i._uploadSingle(a, i.filestack, !1);
                });
            }));
        },
        _hideFileIcon: function() {
            this.overwriteInitial && this.$captionContainer.find(".kv-caption-icon").hide();
        },
        _showFileIcon: function() {
            this.$captionContainer.find(".kv-caption-icon").show();
        },
        _previewDefault: function(i, a, r) {
            if (this.showPreview) {
                var n = this, l = "", o = i ? i.name : "", s = t.createObjectURL(i), d = a.slice(a.lastIndexOf("-") + 1), c = n.previewSettings.other || W.other, p = n._renderFileFooter(i.name, c.width), u = n._parseFilePreviewIcon(n._getPreviewTemplate("other"), o);
                r === !0 && (n.isUploadable || (p += '<div class="file-other-error" title="' + n.fileActionSettings.indicatorErrorTitle + '">' + n.fileActionSettings.indicatorError + "</div>")), 
                n._clearDefaultPreview(), n.$preview.append("\n" + u.replace(/\{previewId}/g, a).replace(/\{frameClass}/g, l).replace(/\{fileindex}/g, d).replace(/\{caption}/g, n.slug(i.name)).replace(/\{width}/g, c.width).replace(/\{height}/g, c.height).replace(/\{type}/g, i.type).replace(/\{data}/g, s).replace(/\{footer}/g, p)), 
                r === !0 && n.isUploadable && n._setThumbStatus(e("#" + a), "Error");
            }
        },
        _previewFile: function(e, i, t, a, r) {
            if (this.showPreview) {
                var n, l, o, s = this, d = s._parseFileType(i), c = i ? i.name : "", p = s.slug(c), u = s.allowedPreviewTypes, f = s.allowedPreviewMimeTypes, v = s._getPreviewTemplate(d), g = u && u.indexOf(d) >= 0, m = J(d, s.previewSettings) ? s.previewSettings[d] : W[d], h = f && -1 !== f.indexOf(i.type), w = s._renderFileFooter(p, m.width), _ = "", b = a.slice(a.lastIndexOf("-") + 1);
                g || h ? (v = s._parseFilePreviewIcon(v, c.split(".").pop()), "text" === d ? (l = G(t.target.result), 
                o = "text-" + Y(), n = v.replace(/\{zoom}/g, s._getLayoutTemplate("zoom")), _ = s._getLayoutTemplate("modal").replace("{id}", o).replace(/\{title}/g, p).replace(/\{body}/g, l).replace(/\{heading}/g, s.msgZoomModalHeading), 
                n = n.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{frameClass}/g, "").replace(/\{zoomInd}/g, s.zoomIndicator).replace(/\{footer}/g, w).replace(/\{fileindex}/g, b).replace(/\{type}/g, i.type).replace(/\{zoomTitle}/g, s.msgZoomTitle).replace(/\{dialog}/g, "$('#" + o + "').modal('show')").replace(/\{data}/g, l) + _) : n = v.replace(/\{previewId}/g, a).replace(/\{caption}/g, p).replace(/\{frameClass}/g, "").replace(/\{type}/g, i.type).replace(/\{fileindex}/g, b).replace(/\{width}/g, m.width).replace(/\{height}/g, m.height).replace(/\{footer}/g, w).replace(/\{data}/g, r), 
                s._clearDefaultPreview(), s.$preview.append("\n" + n), s._validateImage(e, a, p, i.type)) : s._previewDefault(i, a);
            }
        },
        _slugDefault: function(e) {
            return K(e) ? "" : String(e).replace(/[\-\[\]\/\{}:;#%=\(\)\*\+\?\\\^\$\|<>&"']/g, "_");
        },
        _readFiles: function(i) {
            this.reader = new FileReader();
            var r, n = this, l = n.$element, o = n.$preview, s = n.reader, d = n.$previewContainer, c = n.$previewStatus, p = n.msgLoading, u = n.msgProgress, f = n.previewInitId, v = i.length, g = n.fileTypeSettings, m = n.filestack.length, h = function(t, a, l, o) {
                var s = e.extend(!0, {}, n._getOutData({}, {}, i), {
                    id: l,
                    index: o
                }), d = {
                    id: l,
                    index: o,
                    file: a,
                    files: i
                };
                return n._previewDefault(a, l, !0), n.isUploadable && n.addToStack(void 0), setTimeout(r(o + 1), 100), 
                n._initFileActions(), n.removeFromPreviewOnError && e("#" + l).remove(), n.isUploadable ? n._showUploadError(t, s) : n._showError(t, d);
            };
            n.loadedImages = [], n.totalImagesCount = 0, e.each(i, function(e, i) {
                var t = n.fileTypeSettings.image || V.image;
                t && t(i.type) && n.totalImagesCount++;
            }), r = function(e) {
                if (K(l.attr("multiple")) && (v = 1), e >= v) return n.isUploadable && n.filestack.length > 0 ? n._raise("filebatchselected", [ n.getFileStack() ]) : n._raise("filebatchselected", [ i ]), 
                d.removeClass("file-thumb-loading"), void c.html("");
                var w, _, b, C, x, y, T = m + e, F = f + "-" + T, E = i[e], I = n.slug(E.name), $ = (E.size || 0) / 1e3, k = "", P = t.createObjectURL(E), S = 0, D = n.allowedFileTypes, U = K(D) ? "" : D.join(", "), A = n.allowedFileExtensions, j = K(A) ? "" : A.join(", ");
                if (K(A) || (k = new RegExp("\\.(" + A.join("|") + ")$", "i")), $ = $.toFixed(2), 
                n.maxFileSize > 0 && $ > n.maxFileSize) return C = n.msgSizeTooLarge.replace("{name}", I).replace("{size}", $).replace("{maxSize}", n.maxFileSize), 
                void (n.isError = h(C, E, F, e));
                if (!K(D) && X(D)) {
                    for (b = 0; b < D.length; b += 1) x = D[b], _ = g[x], y = void 0 !== _ && _(E.type, I), 
                    S += K(y) ? 0 : y.length;
                    if (0 === S) return C = n.msgInvalidFileType.replace("{name}", I).replace("{types}", U), 
                    void (n.isError = h(C, E, F, e));
                }
                return 0 !== S || K(A) || !X(A) || K(k) || (y = a(I, k), S += K(y) ? 0 : y.length, 
                0 !== S) ? n.showPreview ? (o.length > 0 && void 0 !== FileReader ? (c.html(p.replace("{index}", e + 1).replace("{files}", v)), 
                d.addClass("file-thumb-loading"), s.onerror = function(e) {
                    n._errorHandler(e, I);
                }, s.onload = function(i) {
                    n._previewFile(e, E, i, F, P), n._initFileActions();
                }, s.onloadend = function() {
                    C = u.replace("{index}", e + 1).replace("{files}", v).replace("{percent}", 50).replace("{name}", I), 
                    setTimeout(function() {
                        c.html(C), n._updateFileDetails(v), r(e + 1);
                    }, 100), n._raise("fileloaded", [ E, F, e, s ]);
                }, s.onprogress = function(i) {
                    if (i.lengthComputable) {
                        var t = i.loaded / i.total * 100, a = Math.ceil(t);
                        C = u.replace("{index}", e + 1).replace("{files}", v).replace("{percent}", a).replace("{name}", I), 
                        setTimeout(function() {
                            c.html(C);
                        }, 100);
                    }
                }, w = J("text", g) ? g.text : V.text, w(E.type, I) ? s.readAsText(E, n.textEncoding) : s.readAsArrayBuffer(E)) : (n._previewDefault(E, F), 
                setTimeout(function() {
                    r(e + 1), n._updateFileDetails(v);
                }, 100), n._raise("fileloaded", [ E, F, e, s ])), void n.addToStack(E)) : (n.addToStack(E), 
                setTimeout(r(e + 1), 100), void n._raise("fileloaded", [ E, F, e, s ])) : (C = n.msgInvalidFileExtension.replace("{name}", I).replace("{extensions}", j), 
                void (n.isError = h(C, E, F, e)));
            }, r(0), n._updateFileDetails(v, !1);
        },
        _updateFileDetails: function(e) {
            var i = this, t = i.$element, a = i.getFileStack(), r = t[0].files[0] && t[0].files[0].name || a.length && a[0].name || "", n = i.slug(r), l = i.isUploadable ? a.length : e, s = o.count(i.id) + l, d = l > 1 ? i._getMsgSelected(s) : n;
            i.isError ? (i.$previewContainer.removeClass("file-thumb-loading"), i.$previewStatus.html(""), 
            i.$captionContainer.find(".kv-caption-icon").hide()) : i._showFileIcon(), i._setCaption(d, i.isError), 
            i.$container.removeClass("file-input-new file-input-ajax-new"), 1 === arguments.length && i._raise("fileselect", [ e, n ]), 
            o.count(i.id) && i._initPreviewDeletes();
        },
        _setThumbStatus: function(e, i) {
            var t = this;
            if (t.showPreview) {
                var a = "indicator" + i, r = a + "Title", n = "file-preview-" + i.toLowerCase(), l = e.find(".file-upload-indicator"), o = t.fileActionSettings;
                e.removeClass("file-preview-success file-preview-error file-preview-loading"), "Error" === i && e.find(".kv-file-upload").attr("disabled", !0), 
                l.html(o[a]), l.attr("title", o[r]), e.addClass(n);
            }
        },
        _setProgressCancelled: function() {
            var e = this;
            e._setProgress(100, e.$progress, e.msgCancelled);
        },
        _setProgress: function(e, i, t) {
            var a = this, r = Math.min(e, 100), n = 100 > r ? a.progressTemplate : t ? a.progressErrorTemplate : a.progressCompleteTemplate;
            i = i || a.$progress, K(n) || (i.html(n.replace(/\{percent}/g, r)), t && i.find('[role="progressbar"]').html(t));
        },
        _setFileDropZoneTitle: function() {
            var e = this, i = e.$container.find(".file-drop-zone");
            i.find("." + e.dropZoneTitleClass).remove(), e.isUploadable && e.showPreview && 0 !== i.length && !(e.getFileStack().length > 0) && e.dropZoneEnabled && (0 === i.find(".file-preview-frame").length && K(e.defaultPreviewContent) && i.prepend('<div class="' + e.dropZoneTitleClass + '">' + e.dropZoneTitle + "</div>"), 
            e.$container.removeClass("file-input-new"), u(e.$container, "file-input-ajax-new"));
        },
        _setAsyncUploadStatus: function(i, t, a) {
            var r = this, n = 0;
            r._setProgress(t, e("#" + i).find(".file-thumb-progress")), r.uploadStatus[i] = t, 
            e.each(r.uploadStatus, function(e, i) {
                n += i;
            }), r._setProgress(Math.ceil(n / a));
        },
        _validateMinCount: function() {
            var e = this, i = e.isUploadable ? e.getFileStack().length : e.$element.get(0).files.length;
            return e.validateInitialCount && e.minFileCount > 0 && e._getFileCount(i - 1) < e.minFileCount ? (e._noFilesError({}), 
            !1) : !0;
        },
        _getFileCount: function(e) {
            var i = this, t = 0;
            return i.validateInitialCount && !i.overwriteInitial && (t = o.count(i.id), e += t), 
            e;
        },
        _getFileName: function(e) {
            return e && e.name ? this.slug(e.name) : void 0;
        },
        _getFileNames: function(e) {
            var i = this;
            return i.filenames.filter(function(i) {
                return e ? void 0 !== i : void 0 !== i && null !== i;
            });
        },
        _setPreviewError: function(e, i, t) {
            var a = this;
            i && a.updateStack(i, t), a.removeFromPreviewOnError ? e.remove() : a._setThumbStatus(e, "Error");
        },
        _checkDimensions: function(e, i, t, a, r, n, l) {
            var o, s, d, c, p = this, u = "Small" === i ? "min" : "max", f = p[u + "Image" + n];
            !K(f) && t.length && (d = t[0], s = "Width" === n ? d.naturalWidth || d.width : d.naturalHeight || d.height, 
            c = "Small" === i ? s >= f : f >= s, c || (o = p["msgImage" + n + i].replace("{name}", r).replace("{size}", f), 
            p._showUploadError(o, l), p._setPreviewError(a, e, null)));
        },
        _validateImage: function(e, i, a, r) {
            var n, o, s, d = this, c = d.$preview, p = c.find("#" + i), u = p.find("img");
            a = a || "Untitled", u.length && l(u, "load", function() {
                o = p.width(), s = c.width(), o > s && (u.css("width", "100%"), p.css("width", "97%")), 
                n = {
                    ind: e,
                    id: i
                }, d._checkDimensions(e, "Small", u, p, a, "Width", n), d._checkDimensions(e, "Small", u, p, a, "Height", n), 
                d.resizeImage || (d._checkDimensions(e, "Large", u, p, a, "Width", n), d._checkDimensions(e, "Large", u, p, a, "Height", n)), 
                d._raise("fileimageloaded", [ i ]), d.loadedImages.push({
                    ind: e,
                    img: u,
                    thumb: p,
                    pid: i,
                    typ: r
                }), d._validateAllImages(), t.revokeObjectURL(u.attr("src"));
            });
        },
        _validateAllImages: function() {
            var e, i, t, a, r, n, l, o = this, s = {};
            if (o.loadedImages.length === o.totalImagesCount && (o._raise("fileimagesloaded"), 
            o.resizeImage)) {
                for (l = o.isUploadable ? o._showUploadError : o._showError, e = 0; e < o.loadedImages.length; e++) i = o.loadedImages[e], 
                t = i.img, a = i.thumb, r = i.pid, n = i.ind, s = {
                    id: r,
                    index: n
                }, o._getResizedImage(t[0], i.typ, r, n) || (l(o.msgImageResizeError, s, "fileimageresizeerror"), 
                o._setPreviewError(a, n));
                o._raise("fileimagesresized");
            }
        },
        _getResizedImage: function(e, i, t, a) {
            var r, n, l = this, o = e.naturalWidth, s = e.naturalHeight, d = 1, c = l.maxImageWidth || o, p = l.maxImageHeight || s, u = o && s, f = l.imageCanvas, v = l.imageCanvasContext;
            if (!u) return !1;
            if (o === c && s === p) return !0;
            i = i || l.resizeDefaultImageType, r = o > c, n = s > p, d = "width" === l.resizePreference ? r ? c / o : n ? p / s : 1 : n ? p / s : r ? c / o : 1, 
            l._resetCanvas(), o *= d, s *= d, f.width = o, f.height = s;
            try {
                return v.drawImage(e, 0, 0, o, s), f.toBlob(function(e) {
                    l._raise("fileimageresized", [ t, a ]), l.filestack[a] = e;
                }, i, l.resizeQuality), !0;
            } catch (g) {
                return !1;
            }
        },
        _initBrowse: function(e) {
            var i = this;
            i.$btnFile = e.find(".btn-file"), i.$btnFile.append(i.$element);
        },
        _initCaption: function() {
            var e = this, i = e.initialCaption || "";
            return e.overwriteInitial || K(i) ? (e.$caption.html(""), !1) : (e._setCaption(i), 
            !0);
        },
        _setCaption: function(i, t) {
            var a, r, n, l, o = this, s = o.getFileStack();
            if (o.$caption.length) {
                if (t) a = e("<div>" + o.msgValidationError + "</div>").text(), n = s.length, l = n ? 1 === n && s[0] ? o._getFileNames()[0] : o._getMsgSelected(n) : o._getMsgSelected(o.msgNo), 
                r = '<span class="' + o.msgValidationErrorClass + '">' + o.msgValidationErrorIcon + (K(i) ? l : i) + "</span>"; else {
                    if (K(i)) return;
                    a = e("<div>" + i + "</div>").text(), r = o._getLayoutTemplate("icon") + a;
                }
                o.$caption.html(r), o.$caption.attr("title", a), o.$captionContainer.find(".file-caption-ellipsis").attr("title", a);
            }
        },
        _createContainer: function() {
            var i = this, t = e(document.createElement("div")).attr({
                "class": "file-input file-input-new"
            }).html(i._renderMain());
            return i.$element.before(t), i._initBrowse(t), t;
        },
        _refreshContainer: function() {
            var e = this, i = e.$container;
            i.before(e.$element), i.html(e._renderMain()), e._initBrowse(i);
        },
        _renderMain: function() {
            var e = this, i = e.isUploadable && e.dropZoneEnabled ? " file-drop-zone" : "file-drop-disabled", t = e.showClose ? e._getLayoutTemplate("close") : "", a = e.showPreview ? e._getLayoutTemplate("preview").replace(/\{class}/g, e.previewClass).replace(/\{dropClass}/g, i) : "", r = e.isDisabled ? e.captionClass + " file-caption-disabled" : e.captionClass, n = e.captionTemplate.replace(/\{class}/g, r + " kv-fileinput-caption");
            return e.mainTemplate.replace(/\{class}/g, e.mainClass).replace(/\{preview}/g, a).replace(/\{close}/g, t).replace(/\{caption}/g, n).replace(/\{upload}/g, e._renderButton("upload")).replace(/\{remove}/g, e._renderButton("remove")).replace(/\{cancel}/g, e._renderButton("cancel")).replace(/\{browse}/g, e._renderButton("browse"));
        },
        _renderButton: function(e) {
            var i = this, t = i._getLayoutTemplate("btnDefault"), a = i[e + "Class"], r = i[e + "Title"], n = i[e + "Icon"], l = i[e + "Label"], o = i.isDisabled ? " disabled" : "", s = "button";
            switch (e) {
              case "remove":
                if (!i.showRemove) return "";
                break;

              case "cancel":
                if (!i.showCancel) return "";
                a += " hide";
                break;

              case "upload":
                if (!i.showUpload) return "";
                i.isUploadable && !i.isDisabled ? t = i._getLayoutTemplate("btnLink").replace("{href}", i.uploadUrl) : s = "submit";
                break;

              case "browse":
                t = i._getLayoutTemplate("btnBrowse");
                break;

              default:
                return "";
            }
            return a += "browse" === e ? " btn-file" : " fileinput-" + e + " fileinput-" + e + "-button", 
            K(l) || (l = ' <span class="' + i.buttonLabelClass + '">' + l + "</span>"), t.replace("{type}", s).replace("{css}", a).replace("{title}", r).replace("{status}", o).replace("{icon}", n).replace("{label}", l);
        },
        _renderThumbProgress: function() {
            return '<div class="file-thumb-progress hide">' + this.progressTemplate.replace(/\{percent}/g, "0") + "</div>";
        },
        _renderFileFooter: function(e, i) {
            var t, a, r = this, n = r.fileActionSettings, l = r._getLayoutTemplate("footer");
            return r.isUploadable ? (t = l.replace(/\{actions}/g, r._renderFileActions(!0, !0, !1, !1, !1)), 
            a = t.replace(/\{caption}/g, e).replace(/\{width}/g, i).replace(/\{progress}/g, r._renderThumbProgress()).replace(/\{indicator}/g, n.indicatorNew).replace(/\{indicatorTitle}/g, n.indicatorNewTitle)) : a = l.replace(/\{actions}/g, "").replace(/\{caption}/g, e).replace(/\{progress}/g, "").replace(/\{width}/g, i).replace(/\{indicator}/g, "").replace(/\{indicatorTitle}/g, ""), 
            a = ee(a, r.previewThumbTags);
        },
        _renderFileActions: function(e, i, t, a, r) {
            if (!e && !i) return "";
            var n = this, l = a === !1 ? "" : ' data-url="' + a + '"', o = r === !1 ? "" : ' data-key="' + r + '"', s = n._getLayoutTemplate("actionDelete"), d = "", c = n._getLayoutTemplate("actions"), p = n.otherActionButtons.replace(/\{dataKey}/g, o), u = n.fileActionSettings, f = t ? u.removeClass + " disabled" : u.removeClass;
            return s = s.replace(/\{removeClass}/g, f).replace(/\{removeIcon}/g, u.removeIcon).replace(/\{removeTitle}/g, u.removeTitle).replace(/\{dataUrl}/g, l).replace(/\{dataKey}/g, o), 
            e && (d = n._getLayoutTemplate("actionUpload").replace(/\{uploadClass}/g, u.uploadClass).replace(/\{uploadIcon}/g, u.uploadIcon).replace(/\{uploadTitle}/g, u.uploadTitle)), 
            c.replace(/\{delete}/g, s).replace(/\{upload}/g, d).replace(/\{other}/g, p);
        },
        _browse: function(e) {
            var i = this;
            i._raise("filebrowse"), e && e.isDefaultPrevented() || (i.isError && !i.isUploadable && i.clear(), 
            i.$captionContainer.focus());
        },
        _change: function(i) {
            var t = this, a = t.$element;
            if (!t.isUploadable && K(a.val()) && t.fileInputCleared) return void (t.fileInputCleared = !1);
            t.fileInputCleared = !1;
            var r, n, l, s, d, c, p = arguments.length > 1, u = t.isUploadable, f = 0, v = p ? i.originalEvent.dataTransfer.files : a.get(0).files, g = t.filestack.length, m = K(a.attr("multiple")), h = m && g > 0, w = 0, _ = function(i, a, r, n) {
                var l = e.extend(!0, {}, t._getOutData({}, {}, v), {
                    id: r,
                    index: n
                }), o = {
                    id: r,
                    index: n,
                    file: a,
                    files: v
                };
                return t.isUploadable ? t._showUploadError(i, l) : t._showError(i, o);
            };
            if (t.reader = null, t._resetUpload(), t._hideFileIcon(), t.isUploadable && t.$container.find(".file-drop-zone ." + t.dropZoneTitleClass).remove(), 
            p) for (r = []; v[f]; ) s = v[f], s.type || s.size % 4096 !== 0 ? r.push(s) : w++, 
            f++; else r = void 0 === i.target.files ? i.target && i.target.value ? [ {
                name: i.target.value.replace(/^.+\\/, "")
            } ] : [] : i.target.files;
            if (K(r) || 0 === r.length) return u || t.clear(), t._showFolderError(w), void t._raise("fileselectnone");
            if (t._resetErrors(), c = r.length, l = t._getFileCount(t.isUploadable ? t.getFileStack().length + c : c), 
            t.maxFileCount > 0 && l > t.maxFileCount) {
                if (!t.autoReplace || c > t.maxFileCount) return d = t.autoReplace && c > t.maxFileCount ? c : l, 
                n = t.msgFilesTooMany.replace("{m}", t.maxFileCount).replace("{n}", d), t.isError = _(n, null, null, null), 
                t.$captionContainer.find(".kv-caption-icon").hide(), t._setCaption("", !0), void t.$container.removeClass("file-input-new file-input-ajax-new");
                l > t.maxFileCount && t._resetPreviewThumbs(u);
            } else !u || h ? (t._resetPreviewThumbs(!1), h && t.clearStack()) : !u || 0 !== g || o.count(t.id) && !t.overwriteInitial || t._resetPreviewThumbs(!0);
            t.isPreviewable ? t._readFiles(r) : t._updateFileDetails(1), t._showFolderError(w);
        },
        _abort: function(i) {
            var t, a = this;
            return a.ajaxAborted && "object" == typeof a.ajaxAborted && void 0 !== a.ajaxAborted.message ? (t = e.extend(!0, {}, a._getOutData(), i), 
            t.abortData = a.ajaxAborted.data || {}, t.abortMessage = a.ajaxAborted.message, 
            a.cancel(), a._setProgress(100, a.$progress, a.msgCancelled), a._showUploadError(a.ajaxAborted.message, t, "filecustomerror"), 
            !0) : !1;
        },
        _resetFileStack: function() {
            var i = this, t = 0, a = [], r = [];
            i._getThumbs().each(function() {
                var n = e(this), l = n.attr("data-fileindex"), o = i.filestack[l];
                -1 !== l && (void 0 !== o ? (a[t] = o, r[t] = i._getFileName(o), n.attr({
                    id: i.previewInitId + "-" + t,
                    "data-fileindex": t
                }), t++) : n.attr({
                    id: "uploaded-" + Y(),
                    "data-fileindex": "-1"
                }));
            }), i.filestack = a, i.filenames = r;
        },
        clearStack: function() {
            var e = this;
            return e.filestack = [], e.filenames = [], e.$element;
        },
        updateStack: function(e, i) {
            var t = this;
            return t.filestack[e] = i, t.filenames[e] = t._getFileName(i), t.$element;
        },
        addToStack: function(e) {
            var i = this;
            return i.filestack.push(e), i.filenames.push(i._getFileName(e)), i.$element;
        },
        getFileStack: function(e) {
            var i = this;
            return i.filestack.filter(function(i) {
                return e ? void 0 !== i : void 0 !== i && null !== i;
            });
        },
        lock: function() {
            var e = this;
            return e._resetErrors(), e.disable(), e.showRemove && u(e.$container.find(".fileinput-remove"), "hide"), 
            e.showCancel && e.$container.find(".fileinput-cancel").removeClass("hide"), e._raise("filelock", [ e.filestack, e._getExtraData() ]), 
            e.$element;
        },
        unlock: function(e) {
            var i = this;
            return void 0 === e && (e = !0), i.enable(), i.showCancel && u(i.$container.find(".fileinput-cancel"), "hide"), 
            i.showRemove && i.$container.find(".fileinput-remove").removeClass("hide"), e && i._resetFileStack(), 
            i._raise("fileunlock", [ i.filestack, i._getExtraData() ]), i.$element;
        },
        cancel: function() {
            var i, t = this, a = t.ajaxRequests, r = a.length;
            if (r > 0) for (i = 0; r > i; i += 1) t.cancelling = !0, a[i].abort();
            return t._setProgressCancelled(), t._getThumbs().each(function() {
                var i = e(this), a = i.attr("data-fileindex");
                i.removeClass("file-uploading"), void 0 !== t.filestack[a] && (i.find(".kv-file-upload").removeClass("disabled").removeAttr("disabled"), 
                i.find(".kv-file-remove").removeClass("disabled").removeAttr("disabled")), t.unlock();
            }), t.$element;
        },
        clear: function() {
            var i, t = this;
            return t.$btnUpload.removeAttr("disabled"), t._getThumbs().find("video,audio,img").each(function() {
                ie(e(this));
            }), t._resetUpload(), t.clearStack(), t._clearFileInput(), t._resetErrors(!0), t._raise("fileclear"), 
            t._hasInitialPreview() ? (t._showFileIcon(), t._resetPreview(), t._initPreviewDeletes(), 
            t.$container.removeClass("file-input-new")) : (t._getThumbs().each(function() {
                t._clearObjects(e(this));
            }), t.isUploadable && (o.data[t.id] = {}), t.$preview.html(""), i = !t.overwriteInitial && t.initialCaption.length > 0 ? t.initialCaption : "", 
            t._setCaption(i), t.$caption.attr("title", ""), u(t.$container, "file-input-new"), 
            t._validateDefaultPreview()), 0 === t.$container.find(".file-preview-frame").length && (t._initCaption() || t.$captionContainer.find(".kv-caption-icon").hide()), 
            t._hideFileIcon(), t._raise("filecleared"), t.$captionContainer.focus(), t._setFileDropZoneTitle(), 
            t.$element;
        },
        reset: function() {
            var e = this;
            return e._resetPreview(), e.$container.find(".fileinput-filename").text(""), e._raise("filereset"), 
            u(e.$container, "file-input-new"), (e.$preview.find(".file-preview-frame").length || e.isUploadable && e.dropZoneEnabled) && e.$container.removeClass("file-input-new"), 
            e._setFileDropZoneTitle(), e.clearStack(), e.formdata = {}, e.$element;
        },
        disable: function() {
            var e = this;
            return e.isDisabled = !0, e._raise("filedisabled"), e.$element.attr("disabled", "disabled"), 
            e.$container.find(".kv-fileinput-caption").addClass("file-caption-disabled"), e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").attr("disabled", !0), 
            e._initDragDrop(), e.$element;
        },
        enable: function() {
            var e = this;
            return e.isDisabled = !1, e._raise("fileenabled"), e.$element.removeAttr("disabled"), 
            e.$container.find(".kv-fileinput-caption").removeClass("file-caption-disabled"), 
            e.$container.find(".btn-file, .fileinput-remove, .fileinput-upload, .file-preview-frame button").removeAttr("disabled"), 
            e._initDragDrop(), e.$element;
        },
        upload: function() {
            var i, t, a, r = this, n = r.getFileStack().length, l = {}, o = !e.isEmptyObject(r._getExtraData());
            if (r.minFileCount > 0 && r._getFileCount(n) < r.minFileCount) return void r._noFilesError(l);
            if (r.isUploadable && !r.isDisabled && (0 !== n || o)) {
                if (r._resetUpload(), r.$progress.removeClass("hide"), r.uploadCount = 0, r.uploadStatus = {}, 
                r.uploadLog = [], r.lock(), r._setProgress(2), 0 === n && o) return void r._uploadExtraOnly();
                if (a = r.filestack.length, r.hasInitData = !1, !r.uploadAsync) return r._uploadBatch(), 
                r.$element;
                for (t = r._getOutData(), r._raise("filebatchpreupload", [ t ]), r.fileBatchCompleted = !1, 
                r.uploadCache = {
                    content: [],
                    config: [],
                    tags: [],
                    append: !0
                }, r.uploadAsyncCount = r.getFileStack().length, i = 0; a > i; i++) r.uploadCache.content[i] = null, 
                r.uploadCache.config[i] = null, r.uploadCache.tags[i] = null;
                for (i = 0; a > i; i++) void 0 !== r.filestack[i] && r._uploadSingle(i, r.filestack, !0);
            }
        },
        destroy: function() {
            var e = this, t = e.$container;
            return t.find(".file-drop-zone").off(), e.$element.insertBefore(t).off(i).removeData(), 
            t.off().remove(), e.$element;
        },
        refresh: function(i) {
            var t = this, a = t.$element;
            return i = i ? e.extend(!0, {}, t.options, i) : t.options, t.destroy(), a.fileinput(i), 
            a.val() && a.trigger("change.fileinput"), a;
        }
    }, e.fn.fileinput = function(i) {
        if (d() || r(9)) {
            var t = Array.apply(null, arguments), a = [];
            switch (t.shift(), this.each(function() {
                var r, n = e(this), l = n.data("fileinput"), o = "object" == typeof i && i, s = o.language || n.data("language") || "en", d = {};
                l || ("en" === s || K(e.fn.fileinputLocales[s]) || (d = e.fn.fileinputLocales[s]), 
                r = e.extend(!0, {}, e.fn.fileinput.defaults, e.fn.fileinputLocales.en, d, o, n.data()), 
                l = new q(this, r), n.data("fileinput", l)), "string" == typeof i && a.push(l[i].apply(l, t));
            }), a.length) {
              case 0:
                return this;

              case 1:
                return a[0];

              default:
                return a;
            }
        }
    }, e.fn.fileinput.defaults = {
        language: "en",
        showCaption: !0,
        showPreview: !0,
        showRemove: !0,
        showUpload: !0,
        showCancel: !0,
        showClose: !0,
        showUploadedThumbs: !0,
        autoReplace: !1,
        mainClass: "",
        previewClass: "",
        captionClass: "",
        mainTemplate: null,
        initialCaption: "",
        initialPreview: [],
        initialPreviewDelimiter: "*$$*",
        initialPreviewConfig: [],
        initialPreviewThumbTags: [],
        previewThumbTags: {},
        initialPreviewShowDelete: !0,
        removeFromPreviewOnError: !1,
        deleteUrl: "",
        deleteExtraData: {},
        overwriteInitial: !0,
        layoutTemplates: M,
        previewTemplates: Z,
        allowedPreviewTypes: null,
        allowedPreviewMimeTypes: null,
        allowedFileTypes: null,
        allowedFileExtensions: null,
        defaultPreviewContent: null,
        customLayoutTags: {},
        customPreviewTags: {},
        previewSettings: W,
        fileTypeSettings: V,
        previewFileIcon: '<i class="glyphicon glyphicon-file"></i>',
        previewFileIconClass: "file-icon-4x",
        previewFileIconSettings: {},
        previewFileExtSettings: {},
        buttonLabelClass: "hidden-xs",
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>&nbsp;',
        browseClass: "btn btn-primary",
        removeIcon: '<i class="glyphicon glyphicon-trash"></i>',
        removeClass: "btn btn-default",
        cancelIcon: '<i class="glyphicon glyphicon-ban-circle"></i>',
        cancelClass: "btn btn-default",
        uploadIcon: '<i class="glyphicon glyphicon-upload"></i>',
        uploadClass: "btn btn-default",
        uploadUrl: null,
        uploadAsync: !0,
        uploadExtraData: {},
        minImageWidth: null,
        minImageHeight: null,
        maxImageWidth: null,
        maxImageHeight: null,
        resizeImage: !1,
        resizePreference: "width",
        resizeQuality: .92,
        resizeDefaultImageType: "image/jpeg",
        maxFileSize: 0,
        minFileCount: 0,
        maxFileCount: 0,
        validateInitialCount: !1,
        msgValidationErrorClass: "text-danger",
        msgValidationErrorIcon: '<i class="glyphicon glyphicon-exclamation-sign"></i> ',
        msgErrorClass: "file-error-message",
        progressThumbClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressClass: "progress-bar progress-bar-success progress-bar-striped active",
        progressCompleteClass: "progress-bar progress-bar-success",
        progressErrorClass: "progress-bar progress-bar-danger",
        previewFileType: "image",
        zoomIndicator: '<i class="glyphicon glyphicon-zoom-in"></i>',
        elCaptionContainer: null,
        elCaptionText: null,
        elPreviewContainer: null,
        elPreviewImage: null,
        elPreviewStatus: null,
        elErrorContainer: null,
        errorCloseButton: '<span class="close kv-error-close">&times;</span>',
        slugCallback: null,
        dropZoneEnabled: !0,
        dropZoneTitleClass: "file-drop-zone-title",
        fileActionSettings: {},
        otherActionButtons: "",
        textEncoding: "UTF-8",
        ajaxSettings: {},
        ajaxDeleteSettings: {},
        showAjaxErrorDetails: !0
    }, e.fn.fileinputLocales.en = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgNo: "No",
        msgCancelled: "Cancelled",
        msgZoomTitle: "View details",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "Validation Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! {n} folder(s) dropped were skipped.",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;"
    }, e.fn.fileinput.Constructor = q, e(document).ready(function() {
        var i = e("input.file[type=file]");
        i.length && i.fileinput();
    });
});

/*!
 * FileInput <_LANG_> Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["_LANG_"] = {
        fileSingle: "file",
        filePlural: "files",
        browseLabel: "Browse &hellip;",
        removeLabel: "Remove",
        removeTitle: "Clear selected files",
        cancelLabel: "Cancel",
        cancelTitle: "Abort ongoing upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload selected files",
        msgNo: "No",
        msgCancelled: "Cancelled",
        msgZoomTitle: "View details",
        msgZoomModalHeading: "Detailed Preview",
        msgSizeTooLarge: 'File "{name}" (<b>{size} KB</b>) exceeds maximum allowed upload size of <b>{maxSize} KB</b>.',
        msgFilesTooLess: "You must select at least <b>{n}</b> {files} to upload.",
        msgFilesTooMany: "Number of files selected for upload <b>({n})</b> exceeds maximum allowed limit of <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" not found!',
        msgFileSecured: 'Security restrictions prevent reading the file "{name}".',
        msgFileNotReadable: 'File "{name}" is not readable.',
        msgFilePreviewAborted: 'File preview aborted for "{name}".',
        msgFilePreviewError: 'An error occurred while reading the file "{name}".',
        msgInvalidFileType: 'Invalid type for file "{name}". Only "{types}" files are supported.',
        msgInvalidFileExtension: 'Invalid extension for file "{name}". Only "{extensions}" files are supported.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "Validation Error",
        msgLoading: "Loading file {index} of {files} &hellip;",
        msgProgress: "Loading file {index} of {files} - {name} - {percent}% completed.",
        msgSelected: "{n} {files} selected",
        msgFoldersNotAllowed: "Drag & drop files only! Skipped {n} dropped folder(s).",
        msgImageWidthSmall: 'Width of image file "{name}" must be at least {size} px.',
        msgImageHeightSmall: 'Height of image file "{name}" must be at least {size} px.',
        msgImageWidthLarge: 'Width of image file "{name}" cannot exceed {size} px.',
        msgImageHeightLarge: 'Height of image file "{name}" cannot exceed {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Error while resizing the image.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop files here &hellip;",
        fileActionSettings: {
            removeTitle: "Remove file",
            uploadTitle: "Upload file",
            indicatorNewTitle: "Not uploaded yet",
            indicatorSuccessTitle: "Uploaded",
            indicatorErrorTitle: "Upload Error",
            indicatorLoadingTitle: "Uploading ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Arabic Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Yasser Lotfy <y_l@live.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["ar"] = {
        fileSingle: "ملف",
        filePlural: "ملفات",
        browseLabel: "تصفح &hellip;",
        removeLabel: "إزالة",
        removeTitle: "إزالة الملفات المختارة",
        cancelLabel: "إلغاء",
        cancelTitle: "إنهاء الرفع الحالي",
        uploadLabel: "رفع",
        uploadTitle: "رفع الملفات المختارة",
        msgNo: "لا",
        msgCancelled: "ألغيت",
        msgZoomTitle: "مشاهدة التفاصيل",
        msgZoomModalHeading: "معاينة تفصيلية",
        msgSizeTooLarge: 'الملف "{name}" (<b>{size} ك.ب</b>) تعدى الحد الأقصى المسموح للرفع <b>{maxSize} ك.ب</b>.',
        msgFilesTooLess: "يجب عليك اختيار <b>{n}</b> {files} على الأقل للرفع.",
        msgFilesTooMany: "عدد الملفات المختارة للرفع <b>({n})</b> تعدت الحد الأقصى المسموح به لعدد <b>{m}</b>.",
        msgFileNotFound: 'الملف "{name}" غير موجود!',
        msgFileSecured: 'قيود أمنية تمنع قراءة الملف "{name}".',
        msgFileNotReadable: 'الملف "{name}" غير قابل للقراءة.',
        msgFilePreviewAborted: 'تم إلغاء معاينة الملف "{name}".',
        msgFilePreviewError: 'حدث خطأ أثناء قراءة الملف "{name}".',
        msgInvalidFileType: 'نوعية غير صالحة للملف "{name}". فقط هذه النوعيات مدعومة "{types}".',
        msgInvalidFileExtension: 'امتداد غير صالح للملف "{name}". فقط هذه الملفات مدعومة "{extensions}".',
        msgUploadAborted: "تم إلغاء رفع الملف",
        msgValidationError: "خطأ التحقق من صحة",
        msgLoading: "تحميل ملف {index} من {files} &hellip;",
        msgProgress: "تحميل ملف {index} من {files} - {name} - {percent}% منتهي.",
        msgSelected: "{n} {files} مختار(ة)",
        msgFoldersNotAllowed: "اسحب وأفلت الملفات فقط! تم تخطي {n} مجلد(ات).",
        msgImageWidthSmall: 'عرض ملف الصورة "{name}" يجب أن يكون على الأقل {size} px.',
        msgImageHeightSmall: 'طول ملف الصورة "{name}" يجب أن يكون على الأقل {size} px.',
        msgImageWidthLarge: 'عرض ملف الصورة "{name}" لا يمكن أن يتعدى {size} px.',
        msgImageHeightLarge: 'طول ملف الصورة "{name}" لا يمكن أن يتعدى {size} px.',
        msgImageResizeError: "لم يتمكن من معرفة أبعاد الصورة لتغييرها.",
        msgImageResizeException: "حدث خطأ أثناء تغيير أبعاد الصورة.<pre>{errors}</pre>",
        dropZoneTitle: "اسحب وأفلت الملفات هنا &hellip;",
        fileActionSettings: {
            removeTitle: "إزالة الملف",
            uploadTitle: "رفع الملف",
            indicatorNewTitle: "لم يتم الرفع بعد",
            indicatorSuccessTitle: "تم الرفع",
            indicatorErrorTitle: "خطأ بالرفع",
            indicatorLoadingTitle: "جارٍ الرفع ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Bulgarian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["bg"] = {
        fileSingle: "файл",
        filePlural: "файла",
        browseLabel: "Избери &hellip;",
        removeLabel: "Премахни",
        removeTitle: "Изчисти избраните",
        cancelLabel: "Откажи",
        cancelTitle: "Откажи качването",
        uploadLabel: "Качи",
        uploadTitle: "Качи избраните файлове",
        msgNo: "Не",
        msgCancelled: "Отменен",
        msgZoomTitle: "Вижте детайли",
        msgZoomModalHeading: "Детайлен преглед",
        msgSizeTooLarge: 'Файла "{name}" (<b>{size} KB</b>) надвишава максималните разрешени <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Трябва да изберете поне <b>{n}</b> {files} файла.",
        msgFilesTooMany: "Броя файлове избрани за качване <b>({n})</b> надвишава ограниченито от максимум <b>{m}</b>.",
        msgFileNotFound: 'Файлът "{name}" не може да бъде намерен!',
        msgFileSecured: 'От съображения за сигурност не може да прочетем файла "{name}".',
        msgFileNotReadable: 'Файлът "{name}" не е четим.',
        msgFilePreviewAborted: 'Прегледа на файла е прекратен за "{name}".',
        msgFilePreviewError: 'Грешка при опит за четене на файла "{name}".',
        msgInvalidFileType: 'Невалиден тип на файла "{name}". Разрешени са само "{types}".',
        msgInvalidFileExtension: 'Невалидно разрешение на "{name}". Разрешени са само "{extensions}".',
        msgUploadAborted: "Качите файла, бе прекратена",
        msgValidationError: "утвърждаване грешка",
        msgLoading: "Зареждане на файл {index} от общо {files} &hellip;",
        msgProgress: "Зареждане на файл {index} от общо {files} - {name} - {percent}% завършени.",
        msgSelected: "{n} {files} избрани",
        msgFoldersNotAllowed: "Само пуснати файлове! Пропуснати {n} пуснати папки.",
        msgImageWidthSmall: 'Широчината на изображението "{name}" трябва да е поне {size} px.',
        msgImageHeightSmall: 'Височината на изображението "{name}" трябва да е поне {size} px.',
        msgImageWidthLarge: 'Широчината на изображението "{name}" не може да е по-голяма от {size} px.',
        msgImageHeightLarge: 'Височината на изображението "{name}" нее може да е по-голяма от {size} px.',
        msgImageResizeError: "Не може да размерите на изображението, за да промените размера.",
        msgImageResizeException: "Грешка при промяна на размера на изображението.<pre>{errors}</pre>",
        dropZoneTitle: "Пуснете файловете тук &hellip;",
        fileActionSettings: {
            removeTitle: "Махни файл",
            uploadTitle: "Качване на файл",
            indicatorNewTitle: "Все още не е качил",
            indicatorSuccessTitle: "Качено",
            indicatorErrorTitle: "Качи Error",
            indicatorLoadingTitle: "Качва се ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Català Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["ca"] = {
        fileSingle: "arxiu",
        filePlural: "arxius",
        browseLabel: "Examinar &hellip;",
        removeLabel: "Treure",
        removeTitle: "Treure arxius seleccionats",
        cancelLabel: "Cancel",
        cancelTitle: "Avortar la pujada en curs",
        uploadLabel: "Pujar arxiu",
        uploadTitle: "Pujar arxius seleccionats",
        msgNo: "No",
        msgCancelled: "cancel·lat",
        msgZoomTitle: "Veure detalls",
        msgZoomModalHeading: "Vista prèvia detallada",
        msgSizeTooLarge: 'Arxiu "{name}" (<b>{size} KB</b>) excedeix la mida màxima permès de <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Heu de seleccionar almenys <b>{n}</b> {files} a carregar.",
        msgFilesTooMany: "El nombre d'arxius seleccionats a carregar <b>({n})</b> excedeix el límit màxim permès de <b>{m}</b>.",
        msgFileNotFound: 'Arxiu "{name}" no trobat.',
        msgFileSecured: 'No es pot accedir a l\'arxiu "{name}" perquè estarà sent usat per una altra aplicació o no tinguem permisos de lectura.',
        msgFileNotReadable: 'No es pot accedir a l\'arxiu "{name}".',
        msgFilePreviewAborted: 'Previsualització de l\'arxiu "{name}" cancel·lada.',
        msgFilePreviewError: 'S\'ha produït un error mentre es llegia el fitxer "{name}".',
        msgInvalidFileType: 'Tipus de fitxer no vàlid per a "{name}". Només arxius "{types}" són permesos.',
        msgInvalidFileExtension: 'Extensió de fitxer no vàlid per a "{name}". Només arxius "{extensions}" són permesos.',
        msgUploadAborted: "La càrrega d'arxius s'ha cancel·lat",
        msgValidationError: "Error de validació",
        msgLoading: "Pujant fitxer {index} de {files} &hellip;",
        msgProgress: "Pujant fitxer {index} de {files} - {name} - {percent}% completat.",
        msgSelected: "{n} {files} seleccionat(s)",
        msgFoldersNotAllowed: "Arrossegueu i deixeu anar únicament arxius. Omesa(es) {n} carpeta(es).",
        msgImageWidthSmall: 'L\'ample de la imatge "{name}" ha de ser almenys {size} px.',
        msgImageHeightSmall: 'L\'alçada de la imatge "{name}" ha de ser almenys {size} px.',
        msgImageWidthLarge: 'L\'ample de la imatge "{name}" no pot excedir de {size} px.',
        msgImageHeightLarge: 'L\'alçada de la imatge "{name}" no pot excedir de {size} px.',
        msgImageResizeError: "No s'ha pogut obtenir les dimensions d'imatge per canviar la mida.",
        msgImageResizeException: "Error en canviar la mida de la imatge.<pre>{errors}</pre>",
        dropZoneTitle: "Arrossegueu i deixeu anar aquí els arxius &hellip;",
        fileActionSettings: {
            removeTitle: "Eliminar arxiu",
            uploadTitle: "Pujar arxiu",
            indicatorNewTitle: "No pujat encara",
            indicatorSuccessTitle: "Subido",
            indicatorErrorTitle: "Pujar Error",
            indicatorLoadingTitle: "Pujant ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Croatian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Milos Stojanovic <stojanovic.loshmi@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["cr"] = {
        fileSingle: "datoteka",
        filePlural: "datoteke",
        browseLabel: "Izaberi &hellip;",
        removeLabel: "Ukloni",
        removeTitle: "Ukloni označene datoteke",
        cancelLabel: "Odustani",
        cancelTitle: "Prekini trenutno otpremanje",
        uploadLabel: "Otpremi",
        uploadTitle: "Otpremi označene datoteke",
        msgNo: "Ne",
        msgCancelled: "Otkazan",
        msgZoomTitle: "Pregledavati pojedinosti",
        msgZoomModalHeading: "Detaljni pregled",
        msgSizeTooLarge: 'Datoteka "{name}" (<b>{size} KB</b>) prekoračuje maksimalnu dozvoljenu veličinu datoteke od <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Morate odabrati najmanje <b>{n}</b> {files} za otpremanje.",
        msgFilesTooMany: "Broj datoteka označenih za otpremanje <b>({n})</b> prekoračuje maksimalni dozvoljeni limit od <b>{m}</b>.",
        msgFileNotFound: 'Datoteka "{name}" nije pronađena!',
        msgFileSecured: 'Datoteku "{name}" nije moguće pročitati zbog bezbednosnih ograničenja.',
        msgFileNotReadable: 'Datoteku "{name}" nije moguće pročitati.',
        msgFilePreviewAborted: 'Generisanje prikaza nije moguće za "{name}".',
        msgFilePreviewError: 'Došlo je do greške prilikom čitanja datoteke "{name}".',
        msgInvalidFileType: 'Datoteka "{name}" je pogrešnog formata. Dozvoljeni formati su "{types}".',
        msgInvalidFileExtension: 'Ekstenzija datoteke "{name}" nije dozvoljena. Dozvoljene ekstenzije su "{extensions}".',
        msgUploadAborted: "Prijenos datoteka je prekinut",
        msgValidationError: "Provjera pogrešaka",
        msgLoading: "Učitavanje datoteke {index} od {files} &hellip;",
        msgProgress: "Učitavanje datoteke {index} od {files} - {name} - {percent}% završeno.",
        msgSelected: "{n} {files} je označeno",
        msgFoldersNotAllowed: "Moguće je prevlačiti samo datoteke! Preskočeno je {n} fascikla.",
        msgImageWidthSmall: 'Širina slikovnu datoteku "{name}" moraju biti najmanje {size} px.',
        msgImageHeightSmall: 'Visina slikovnu datoteku "{name}" moraju biti najmanje {size} px.',
        msgImageWidthLarge: 'Širina slikovnu datoteku "{name}" ne može prelaziti {size} px.',
        msgImageHeightLarge: 'Visina slikovnu datoteku "{name}" ne može prelaziti {size} px.',
        msgImageResizeError: "Nije mogao dobiti dimenzije slike na veličinu.",
        msgImageResizeException: "Greška prilikom promjene veličine slike.<pre>{errors}</pre>",
        dropZoneTitle: "Prevucite datoteke ovde &hellip;",
        fileActionSettings: {
            removeTitle: "Uklonite datoteku",
            uploadTitle: "Postavi datoteku",
            indicatorNewTitle: "Još nije učitao",
            indicatorSuccessTitle: "Preneseno",
            indicatorErrorTitle: "Postavi Greška",
            indicatorLoadingTitle: "Prijenos ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Czech Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["cz"] = {
        fileSingle: "soubor",
        filePlural: "soubory",
        browseLabel: "Vybrat &hellip;",
        removeLabel: "Odstranit",
        removeTitle: "Vyčistit vybrané soubory",
        cancelLabel: "Storno",
        cancelTitle: "Přerušit  nahrávání",
        uploadLabel: "Nahrát",
        uploadTitle: "Nahrát vybrané soubory",
        msgNo: "Ne",
        msgCancelled: "Zrušeno",
        msgZoomTitle: "zobrazit podrobnosti",
        msgZoomModalHeading: "Detailní náhled",
        msgSizeTooLarge: 'Soubor "{name}" (<b>{size} KB</b>): překročení - maximální povolená velikost <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Musíte vybrat nejméně <b>{n}</b> {files} pro nahrání.",
        msgFilesTooMany: "Počet vybraných souborů pro nahrání <b>({n})</b>: překročení - maximální povolený limit <b>{m}</b>.",
        msgFileNotFound: 'Soubor "{name}" nebyl nalezen!',
        msgFileSecured: 'Zabezpečení souboru znemožnilo číst soubor "{name}".',
        msgFileNotReadable: 'Soubor "{name}" není čitelný.',
        msgFilePreviewAborted: 'Náhled souboru byl přerušen pro "{name}".',
        msgFilePreviewError: 'Nastala chyba při načtení souboru "{name}".',
        msgInvalidFileType: 'Neplatný typ souboru "{name}". Pouze "{types}" souborů jsou podporovány.',
        msgInvalidFileExtension: 'Neplatná extenze souboru "{name}". Pouze "{extensions}" souborů jsou podporovány.',
        msgUploadAborted: "Soubor nahrávání byl přerušen",
        msgValidationError: "Chyba ověření",
        msgLoading: "Nahrávání souboru {index} z {files} &hellip;",
        msgProgress: "Nahrávání souboru {index} z {files} - {name} - {percent}% dokončeno.",
        msgSelected: "{n} {files} vybrano",
        msgFoldersNotAllowed: "Táhni a pusť pouze soubory! Vynechané {n} pustěné složk(y).",
        msgImageWidthSmall: 'Šířka image soubor "{name}", musí být alespoň {size} px.',
        msgImageHeightSmall: 'Výška image soubor "{name}", musí být alespoň {size} px.',
        msgImageWidthLarge: 'Šířka obrazového souboru "{name}" nelze překročit {size} px.',
        msgImageHeightLarge: 'Výška obrazového souboru "{name}" nelze překročit {size} px.',
        msgImageResizeError: "Nelze získat rozměry obrázku změnit velikost.",
        msgImageResizeException: "Chyba při změně velikosti obrázku.<pre>{errors}</pre>",
        dropZoneTitle: "Táhni a pusť soubory sem &hellip;",
        fileActionSettings: {
            removeTitle: "Odstranit soubor",
            uploadTitle: "nahrát soubor",
            indicatorNewTitle: "Ještě nenahrál",
            indicatorSuccessTitle: "Nahraný",
            indicatorErrorTitle: "Nahrát Chyba",
            indicatorLoadingTitle: "Nahrávání ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Danish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["da"] = {
        fileSingle: "fil",
        filePlural: "filer",
        browseLabel: "Browse &hellip;",
        removeLabel: "Fjern",
        removeTitle: "Fjern valgte filer",
        cancelLabel: "Fortryd",
        cancelTitle: "Afbryd nuv&aelig;rende upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload valgte filer",
        msgNo: "Ingen",
        msgCancelled: "aflyst",
        msgZoomTitle: "Se detaljer",
        msgZoomModalHeading: "Detaljeret visning",
        msgSizeTooLarge: 'Fil "{name}" (<b>{size} KB</b>) er st&oslash;rre end de tilladte <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Du skal mindst v&aelig;lge <b>{n}</b> {files} til upload.",
        msgFilesTooMany: "<b>({n})</b> filer valgt til upload, men maks. <b>{m}</b> er tilladt.",
        msgFileNotFound: 'Filen "{name}" blev ikke fundet!',
        msgFileSecured: 'Sikkerhedsrestriktioner forhindrer l&aelig;sning af "{name}".',
        msgFileNotReadable: 'Filen "{name}" kan ikke indl&aelig;ses.',
        msgFilePreviewAborted: 'Filpreview annulleret for "{name}".',
        msgFilePreviewError: 'Der skete en fejl under l&aelig;sningen af filen "{name}".',
        msgInvalidFileType: 'Ukendt type for filen "{name}". Kun "{types}" kan bruges.',
        msgInvalidFileExtension: 'Ukendt filtype for filen "{name}". Kun "{extensions}" filer kan bruges.',
        msgUploadAborted: "Filupload annulleret",
        msgValidationError: "Validering Fejl",
        msgLoading: "Henter fil {index} af {files} &hellip;",
        msgProgress: "Henter fil {index} af {files} - {name} - {percent}% f&aelig;rdiggjort.",
        msgSelected: "{n} {files} valgt",
        msgFoldersNotAllowed: "Drag & drop kun filer! {n} mappe(r) sprunget over.",
        msgImageWidthSmall: 'Bredden af billedet "{name}" skal v&aelig;re p&aring; mindst {size} px.',
        msgImageHeightSmall: 'H&oslash;jden af billedet "{name}" skal v&aelig;re p&aring; mindst {size} px.',
        msgImageWidthLarge: 'Bredden af billedet "{name}" m&aring; ikke v&aelig;re over {size} px.',
        msgImageHeightLarge: 'H&oslash;jden af billedet "{name}" m&aring; ikke v&aelig;re over {size} px.',
        msgImageResizeError: "Kunne ikke få billedets dimensioner for at ændre størrelsen.",
        msgImageResizeException: "Fejl ved at ændre størrelsen på billedet.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop filer her &hellip;",
        fileActionSettings: {
            removeTitle: "Fjern fil",
            uploadTitle: "Upload fil",
            indicatorNewTitle: "Ikke uploadet endnu",
            indicatorSuccessTitle: "Uploadet",
            indicatorErrorTitle: "Upload fejl",
            indicatorLoadingTitle: "Uploader ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput German Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["de"] = {
        fileSingle: "Datei",
        filePlural: "Dateien",
        browseLabel: "Auswählen &hellip;",
        removeLabel: "Löschen",
        removeTitle: "Ausgewählte löschen",
        cancelLabel: "Laden",
        cancelTitle: "Hochladen abbrechen",
        uploadLabel: "Hochladen",
        uploadTitle: "Hochladen der ausgewählten Dateien",
        msgNo: "Nein",
        msgCancelled: "Abgebrochen",
        msgZoomTitle: "Details anzeigen",
        msgZoomModalHeading: "ausführliche Vorschau",
        msgSizeTooLarge: 'Datei "{name}" (<b>{size} KB</b>) überschreitet maximal zulässige Upload-Größe von <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Sie müssen mindestens <b>{n}</b> {files} zum Hochladen auswählen.",
        msgFilesTooMany: "Anzahl der Dateien für den Upload ausgewählt <b>({n})</b> überschreitet maximal zulässige Grenze von <b>{m}</b> Stück.",
        msgFileNotFound: 'Datei "{name}" wurde nicht gefunden!',
        msgFileSecured: 'Sicherheitseinstellungen verhindern das Lesen der Datei "{name}".',
        msgFileNotReadable: 'Die Datei "{name}" ist nicht lesbar.',
        msgFilePreviewAborted: 'Dateivorschau abgebrochen für "{name}".',
        msgFilePreviewError: 'Beim Lesen der Datei "{name}" ein Fehler aufgetreten.',
        msgInvalidFileType: 'Ungültiger Typ für Datei "{name}". Nur Dateien der Typen "{types}" werden unterstützt.',
        msgInvalidFileExtension: 'Ungültige Erweiterung für Datei "{name}". Nur Dateien mit der Endung "{extensions}" werden unterstützt.',
        msgUploadAborted: "Der Datei-Upload wurde abgebrochen",
        msgValidationError: "Validierungs fehler",
        msgLoading: "Lade Datei {index} von {files} hoch&hellip;",
        msgProgress: "Datei {index} von {files} - {name} - zu {percent}% fertiggestellt.",
        msgSelected: "{n} {files} ausgewählt",
        msgFoldersNotAllowed: "Drag & Drop funktioniert nur bei Dateien! {n} Ordner übersprungen.",
        msgImageWidthSmall: 'Breite der Bilddatei "{name}" muss mindestens {size} px betragen.',
        msgImageHeightSmall: 'Höhe der Bilddatei "{name}" muss mindestens {size} px betragen.',
        msgImageWidthLarge: 'Breite der Bilddatei "{name}" nicht überschreiten {size} px.',
        msgImageHeightLarge: 'Höhe der Bilddatei "{name}" nicht überschreiten {size} px.',
        msgImageResizeError: "Konnte nicht die Bildabmessungen zu ändern.",
        msgImageResizeException: "Fehler beim Ändern der Größe des Bildes.<pre>{errors}</pre>",
        dropZoneTitle: "Dateien hierher ziehen &hellip;",
        fileActionSettings: {
            removeTitle: "Datei entfernen",
            uploadTitle: "Datei hochladen",
            indicatorNewTitle: "Noch nicht hochgeladen",
            indicatorSuccessTitle: "Hochgeladen",
            indicatorErrorTitle: "Upload Fehler",
            indicatorLoadingTitle: "Hochladen ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Greek Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["el"] = {
        fileSingle: "Αρχείο",
        filePlural: "Αρχεία",
        browseLabel: "Αναζήτηση &hellip;",
        removeLabel: "Ακύρωση",
        removeTitle: "Εκκαθάριση αρχείων",
        cancelLabel: "Ακύρωση",
        cancelTitle: "Ακύρωση μεταφόρτωσης",
        uploadLabel: "Μεταφόρτωση",
        uploadTitle: "Μεταφόρτωση επιλεγμένων αρχείων",
        msgNo: "Όχι",
        msgCancelled: "Ακυρώθηκε",
        msgZoomTitle: "Δείτε λεπτομέρειες",
        msgZoomModalHeading: "λεπτομερής Προεπισκόπηση",
        msgSizeTooLarge: 'Το αρχείο "{name}" (<b>{size} KB</b>) υπερβαίνει το μέγιστο επιτρεπόμενο μέγεθος μεταφόρτωσης <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Πρέπει να επιλέξετε τουλάχιστον <b>{n}</b> {files} για να ξεκινήσει η μεταφόρτωση.",
        msgFilesTooMany: "Ο αριθμός των αρχείων που έχουν επιλεγεί για μεταφόρτωση <b>({n})</b> υπερβαίνει το μέγιστο επιτρεπόμενο αριθμό <b>{m}</b>.",
        msgFileNotFound: 'Το αρχείο με όνομα "{name}" δεν βρέθηκε!',
        msgFileSecured: 'Περιορισμοί ασφαλείας εμπόδισαν την ανάγνωση του αρχείου"{name}".',
        msgFileNotReadable: 'Το αρχείο με όνομα "{name}" δεν είναι αναγνώσιμο.',
        msgFilePreviewAborted: 'Η προεπισκόπηση του αρχείου ακυρώθηκε για "{name}".',
        msgFilePreviewError: 'Παρουσιάστηκε σφάλμα κατά την ανάγνωση του αρχείου "{name}".',
        msgInvalidFileType: 'Μη έγκυρος τύπος αρχείου "{name}". Οι τύποι αρχείων που υποστηρίζονται είναι : "{types}".',
        msgInvalidFileExtension: 'Μη έγκυρη επέκταση αρχείου "{name}". Οι επεκτάσεις που υποστηρίζονται είναι:  "{extensions}" .',
        msgUploadAborted: "Το ανέβασμα των αρχείων ματαιώθηκε",
        msgValidationError: "Σπικύρωση σφάλματος",
        msgLoading: "Φόρτωση αρχείου {index} από {files} &hellip;",
        msgProgress: "Φόρτωση αρχείου {index} απο {files} - {name} - {percent}% ολοκληρώθηκε.",
        msgSelected: "{n} {files} επιλέχθηκαν",
        msgFoldersNotAllowed: "Μπορείτε να σύρετε μόνο αρχεία! Παραβλέφθηκαν {n} φάκελος(οι).",
        msgImageWidthSmall: 'Πλάτος του αρχείου εικόνας "{name}" πρέπει να είναι τουλάχιστον {size} px.',
        msgImageHeightSmall: 'Ύψος του αρχείου εικόνας "{name}" πρέπει να είναι τουλάχιστον {size} px.',
        msgImageWidthLarge: 'Πλάτος του αρχείου εικόνας "{name}" δεν μπορεί να υπερβαίνει το {size} px.',
        msgImageHeightLarge: 'Ύψος του αρχείου εικόνας "{name}" δεν μπορεί να υπερβαίνει το {size} px.',
        msgImageResizeError: "Δεν θα μπορούσε να πάρει τις διαστάσεις της εικόνας για να αλλάξετε το μέγεθος.",
        msgImageResizeException: "Σφάλμα κατά την αλλαγή μεγέθους της εικόνας.<pre>{errors}</pre>",
        dropZoneTitle: "Σύρετε τα αρχεία εδώ &hellip;",
        fileActionSettings: {
            removeTitle: "Αφαιρέστε το αρχείο",
            uploadTitle: "Ανεβάστε το αρχείο",
            indicatorNewTitle: "Δεν ανεβάσει ακόμα",
            indicatorSuccessTitle: "Προστέθηκε",
            indicatorErrorTitle: "Ανέβασμα Σφάλμα",
            indicatorLoadingTitle: "Μεταφόρτωση ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Spanish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["es"] = {
        fileSingle: "archivo",
        filePlural: "archivos",
        browseLabel: "Examinar &hellip;",
        removeLabel: "Quitar",
        removeTitle: "Quitar archivos seleccionados",
        cancelLabel: "Cancelar",
        cancelTitle: "Abortar la subida en curso",
        uploadLabel: "Subir archivo",
        uploadTitle: "Subir archivos seleccionados",
        msgNo: "No",
        msgCancelled: "Cancelado",
        msgZoomTitle: "Ver detalles",
        msgZoomModalHeading: "Vista previa detallada",
        msgSizeTooLarge: 'Archivo "{name}" (<b>{size} KB</b>) excede el tamaño máximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Debe seleccionar al menos <b>{n}</b> {files} a cargar.",
        msgFilesTooMany: "El número de archivos seleccionados a cargar <b>({n})</b> excede el límite máximo permitido de <b>{m}</b>.",
        msgFileNotFound: 'Archivo "{name}" no encontrado.',
        msgFileSecured: 'No es posible acceder al archivo "{name}" porque estará siendo usado por otra aplicación o no tengamos permisos de lectura.',
        msgFileNotReadable: 'No es posible acceder al archivo "{name}".',
        msgFilePreviewAborted: 'Previsualización del archivo "{name}" cancelada.',
        msgFilePreviewError: 'Ocurrió un error mientras se leía el archivo "{name}".',
        msgInvalidFileType: 'Tipo de archivo no válido para "{name}". Sólo archivos "{types}" son permitidos.',
        msgInvalidFileExtension: 'Extensión de archivo no válido para "{name}". Sólo archivos "{extensions}" son permitidos.',
        msgUploadAborted: "La carga de archivos se ha cancelado",
        msgValidationError: "Error de validacion",
        msgLoading: "Subiendo archivo {index} de {files} &hellip;",
        msgProgress: "Subiendo archivo {index} de {files} - {name} - {percent}% completado.",
        msgSelected: "{n} {files} seleccionado(s)",
        msgFoldersNotAllowed: "Arrastre y suelte únicamente archivos. Omitida(s) {n} carpeta(s).",
        msgImageWidthSmall: 'El ancho de la imagen "{name}" debe ser al menos {size} px.',
        msgImageHeightSmall: 'La altura de la imagen "{name}" debe ser al menos {size} px.',
        msgImageWidthLarge: 'El ancho de la imagen "{name}" no puede exceder de {size} px.',
        msgImageHeightLarge: 'La altura de la imagen "{name}" no puede exceder de {size} px.',
        msgImageResizeError: "No se pudo obtener las dimensiones de imagen para cambiar el tamaño.",
        msgImageResizeException: "Error al cambiar el tamaño de la imagen.<pre>{errors}</pre>",
        dropZoneTitle: "Arrastre y suelte aquí los archivos &hellip;",
        fileActionSettings: {
            removeTitle: "Eliminar archivo",
            uploadTitle: "Subir archivo",
            indicatorNewTitle: "No subido todavía",
            indicatorSuccessTitle: "Subido",
            indicatorErrorTitle: "Subir Error",
            indicatorLoadingTitle: "Subiendo ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Persian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Milad Nekofar <milad@nekofar.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["fa"] = {
        fileSingle: "فایل",
        filePlural: "فایل",
        browseLabel: "مرور &hellip;",
        removeLabel: "حذف",
        removeTitle: "پاکسازی فایل‌های انتخاب شده",
        cancelLabel: "لغو",
        cancelTitle: "لغو بارگزاری جاری",
        uploadLabel: "بارگذاری",
        uploadTitle: "بارگذاری فایل‌های انتخاب شده",
        msgNo: "خیر",
        msgCancelled: "لغو",
        msgZoomTitle: "دیدن جزئیات",
        msgZoomModalHeading: "پیشنمایش مفصل",
        msgSizeTooLarge: 'فایل "{name}" (<b>{size} کیلوبایت</b>) از حداکثر مجاز <b>{maxSize} کیلوبایت</b>.',
        msgFilesTooLess: "شما باید حداقل <b>{n}</b> {files} فایل برای بارگذاری انتخاب کنید.",
        msgFilesTooMany: "تعداد فایل‌های انتخاب شده برای بارگذاری <b>({n})</b> از حداکثر مجاز عبور کرده است <b>{m}</b>.",
        msgFileNotFound: 'فایل "{name}" یافت نشد!',
        msgFileSecured: 'محدودیت های امنیتی مانع خواندن فایل "{name}" است.',
        msgFileNotReadable: 'فایل "{name}" قابل نوشتن نیست.',
        msgFilePreviewAborted: 'پیشنمایش فایل "{name}". شکست خورد',
        msgFilePreviewError: 'در هنگام خواندن فایل "{name}" خطایی رخ داد.',
        msgInvalidFileType: 'نوع فایل "{name}" معتبر نیست. فقط "{types}" پشیبانی می‌شود.',
        msgInvalidFileExtension: 'پسوند فایل "{name}" معتبر نیست. فقط "{extensions}" پشتیبانی می‌شود.',
        msgUploadAborted: "The file upload was aborted",
        msgValidationError: "خطای اعتبار سنجی",
        msgLoading: "بارگیری فایل {index} از {files} &hellip;",
        msgProgress: "بارگیری فایل {index} از {files} - {name} - {percent}% تمام شد.",
        msgSelected: "{n} {files} انتخاب شده",
        msgFoldersNotAllowed: "فقط فایل‌ها را بکشید و رها کنید! {n} پوشه نادیده گرفته شد.",
        msgImageWidthSmall: 'عرض فایل تصویر "{name}" باید حداقل {size} پیکسل باشد.',
        msgImageHeightSmall: 'ارتفاع فایل تصویر "{name}" باید حداقل {size} پیکسل باشد.',
        msgImageWidthLarge: 'عرض فایل تصویر "{name}" نمیتواند از {size} پیکسل بیشتر باشد.',
        msgImageHeightLarge: 'ارتفاع فایل تصویر "{name}" نمی‌تواند از {size} پیکسل بیشتر باشد.',
        msgImageResizeError: "یافت نشد ابعاد تصویر را برای تغییر اندازه.",
        msgImageResizeException: "خطا در هنگام تغییر اندازه تصویر.<pre>{errors}</pre>",
        dropZoneTitle: "فایل‌ها را بکشید و در اینجا رها کنید &hellip;",
        fileActionSettings: {
            removeTitle: "حذف فایل",
            uploadTitle: "آپلود فایل",
            indicatorNewTitle: "آپلود نشده است",
            indicatorSuccessTitle: "آپلود شده",
            indicatorErrorTitle: "بارگذاری خطا",
            indicatorLoadingTitle: "آپلود ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Finnish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinput.locales.fi = {
        fileSingle: "tiedosto",
        filePlural: "tiedostot",
        browseLabel: "Selaa &hellip;",
        removeLabel: "Poista",
        removeTitle: "Tyhj&auml;nn&auml; valitut tiedostot",
        cancelLabel: "Peruuta",
        cancelTitle: "Peruuta lataus",
        uploadLabel: "Lataa",
        uploadTitle: "Lataa valitut tiedostot",
        msgSizeTooLarge: 'Tiedosto "{name}" (<b>{size} Kt</b>) ylitt&auml;&auml; suurimman sallitun tiedoston koon, joka on <b>{maxSize} Kt</b>. Yrit&auml; uudelleen!',
        msgFilesTooLess: "V&auml;hint&auml;&auml;n <b>{n}</b> {files} tiedostoa on valittava ladattavaksi. Ole hyv&auml; ja yrit&auml; uudelleen!",
        msgFilesTooMany: "Valittujen tiedostojen lukum&auml;&auml;r&auml; <b>({n})</b> ylitt&auml;&auml; suurimman sallitun m&auml;&auml;r&auml;n <b>{m}</b>. Ole hyv&auml; ja yrit&auml; uudelleen!",
        msgFileNotFound: 'Tiedostoa "{name}" ei l&ouml;ydy!',
        msgFileSecured: 'Tietoturvarajoitukset est&auml;v&auml;t tiedoston "{name}" lukemisen.',
        msgFileNotReadable: 'Tiedosto "{name}" ei ole luettavissa.',
        msgFilePreviewAborted: 'Tiedoston "{name}" esikatselu keskeytetty.',
        msgFilePreviewError: 'Virhe on tapahtunut luettaessa tiedostoa "{name}".',
        msgInvalidFileType: 'Tiedosto "{name}" on v&auml;&auml;r&auml;n tyyppinen. Ainoastaan tiedostot tyyppi&auml; "{types}" ovat tuettuja.',
        msgInvalidFileExtension: 'Tiedoston "{name}" tarkenne on ep&auml;kelpo. Ainoastaan tarkenteet "{extensions}" ovat tuettuja.',
        msgValidationError: "Tiedoston latausvirhe",
        msgLoading: "Ladataan tiedostoa {index} / {files} &hellip;",
        msgProgress: "Ladataan tiedostoa {index} / {files} - {name} - {percent}% valmistunut.",
        msgSelected: "{n} tiedostoa valittu",
        msgFoldersNotAllowed: "Raahaa ja pudota ainoastaan tiedostoja! Ohitettu {n} raahattua kansiota.",
        dropZoneTitle: "Raahaa ja pudota tiedostot t&auml;h&auml;n &hellip;"
    };
    $.extend($.fn.fileinput.defaults, $.fn.fileinput.locales.fi);
})(window.jQuery);

/*!
 * FileInput French Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["fr"] = {
        fileSingle: "fichier",
        filePlural: "fichiers",
        browseLabel: "Parcourir&hellip;",
        removeLabel: "Retirer",
        removeTitle: "Retirer les fichiers sélectionnés",
        cancelLabel: "Annuler",
        cancelTitle: "Annuler l'envoi en cours",
        uploadLabel: "Transférer",
        uploadTitle: "Transférer les fichiers sélectionnés",
        msgNo: "Non",
        msgCancelled: "Annulé",
        msgZoomTitle: "Voir les détails",
        msgZoomModalHeading: "Aperçu détaillé",
        msgSizeTooLarge: 'Le fichier "{name}" (<b>{size} Ko</b>) dépasse la taille maximale autorisée qui est de <b>{maxSize} Ko</b>.',
        msgFilesTooLess: "Vous devez sélectionner au moins <b>{n}</b> {files} à transmettre.",
        msgFilesTooMany: "Le nombre de fichier sélectionné <b>({n})</b> dépasse la quantité maximale autorisée qui est de <b>{m}</b>.",
        msgFileNotFound: 'Le fichier "{name}" est introuvable !',
        msgFileSecured: 'Des restrictions de sécurité vous empêchent d\'accéder au fichier "{name}".',
        msgFileNotReadable: 'Le fichier "{name}" est illisble.',
        msgFilePreviewAborted: 'Prévisualisation du fichier "{name}" annulée.',
        msgFilePreviewError: 'Une erreur est survenue lors de la lecture du fichier "{name}".',
        msgInvalidFileType: 'Type de document invalide pour "{name}". Seulement les documents de type "{types}" sont autorisés.',
        msgInvalidFileExtension: 'Extension invalide pour le fichier "{name}". Seules les extensions "{extensions}" sont autorisées.',
        msgUploadAborted: "Le téléchargement du fichier a été interrompu",
        msgValidationError: "Erreur de validation",
        msgLoading: "Transmission du fichier {index} sur {files}&hellip;",
        msgProgress: "Transmission du fichier {index} sur {files} - {name} - {percent}% faits.",
        msgSelected: "{n} {files} sélectionné(s)",
        msgFoldersNotAllowed: "Glissez et déposez uniquement des fichiers ! {n} répertoire(s) exclu(s).",
        msgImageWidthSmall: 'Largeur de fichier image "{name}" doit être d\'au moins {size} px.',
        msgImageHeightSmall: 'Hauteur de fichier image "{name}" doit être d\'au moins {size} px.',
        msgImageWidthLarge: 'Largeur de fichier image "{name}" ne peut pas dépasser {size} px.',
        msgImageHeightLarge: 'Hauteur de fichier image "{name}" ne peut pas dépasser {size} px.',
        msgImageResizeError: "Impossible d'obtenir les dimensions de l'image à redimensionner.",
        msgImageResizeException: "Erreur lors du redimensionnement de l'image.<pre>{errors}</pre>",
        dropZoneTitle: "Glissez et déposez les fichiers ici&hellip;",
        fileActionSettings: {
            removeTitle: "Supprimer le fichier",
            uploadTitle: "Télécharger un fichier",
            indicatorNewTitle: "Pas encore téléchargé",
            indicatorSuccessTitle: "Posté",
            indicatorErrorTitle: "Ajouter erreur",
            indicatorLoadingTitle: "ajout ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Hungarian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["hu"] = {
        fileSingle: "fájl",
        filePlural: "fájl",
        browseLabel: "Böngész &hellip;",
        removeLabel: "Eltávolít",
        removeTitle: "Kijelölt fájlok törlése",
        cancelLabel: "Mégse",
        cancelTitle: "Feltöltés megszakítása",
        uploadLabel: "Feltöltés",
        uploadTitle: "Kijelölt fájlok feltöltése",
        msgNo: "No",
        msgCancelled: "Cancelled",
        msgZoomTitle: "Részletek megtekintése",
        msgZoomModalHeading: "Részletes Preview",
        msgSizeTooLarge: '"{name}" fájl (<b>{size} KB</b>) mérete nagyobb a megengedettnél <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Legalább <b>{n}</b> {files} ki kell választania a feltöltéshez.",
        msgFilesTooMany: "A feltölteni kívánt fájlok száma <b>({n})</b> elérte a megengedett maximumot <b>{m}</b>.",
        msgFileNotFound: '"{name}" fájl nem található!',
        msgFileSecured: 'Biztonsági beállítások nem engedik olvasni a fájlt "{name}".',
        msgFileNotReadable: '"{name}" fájl nem olvasható',
        msgFilePreviewAborted: '"{name}" fájl feltöltése megszakítva.',
        msgFilePreviewError: 'Hiba lépett fel a "{name}" fájl olvasása közben.',
        msgInvalidFileType: 'Nem megengedett fájl "{name}". Csak a "{types}" fájl típusok támogatottak.',
        msgInvalidFileExtension: 'Nem megengedett kiterjesztés / fájltípus "{name}". Csak a "{extensions}" kiterjesztés(ek) / fájltípus(ok) támogatottak.',
        msgUploadAborted: "A fájl feltöltés megszakítva",
        msgValidationError: "Érvényesítés hiba",
        msgLoading: "{index} / {files} töltése &hellip;",
        msgProgress: "Feltöltés: {index} / {files} - {name} - {percent}% kész.",
        msgSelected: "{n} {files} kiválasztva.",
        msgFoldersNotAllowed: "Csak fájlokat húzzon ide! Kihagyva {n} könyvtár.",
        msgImageWidthSmall: 'Szélessége image file "{name}" legalább {size} px.',
        msgImageHeightSmall: 'Magassága image file "{name}" legalább {size} px.',
        msgImageWidthLarge: 'Szélessége image file "{name}" nem haladhatja meg a {size} px.',
        msgImageHeightLarge: 'Magassága image file "{name}" nem haladhatja meg a {size} px.',
        msgImageResizeError: "Nem lehet megszerezni a kép méretei átméretezni.",
        msgImageResizeException: "Hiba történt a méretezés.<pre>{errors}</pre>",
        dropZoneTitle: "Fájlok húzása ide &hellip;",
        fileActionSettings: {
            removeTitle: "A fájl eltávolítása",
            uploadTitle: "fájl feltöltése",
            indicatorNewTitle: "Nem feltöltve",
            indicatorSuccessTitle: "Feltöltött",
            indicatorErrorTitle: "Feltöltés Error",
            indicatorLoadingTitle: "Feltöltése ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Indonesian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Bambang Riswanto <bamz3r@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["id"] = {
        fileSingle: "berkas",
        filePlural: "berkas",
        browseLabel: "Pilih File &hellip;",
        removeLabel: "Hapus",
        removeTitle: "Hapus berkas terpilih",
        cancelLabel: "Batal",
        cancelTitle: "Batalkan proses pengunggahan",
        uploadLabel: "Unggah",
        uploadTitle: "Unggah berkas terpilih",
        msgNo: "Tidak",
        msgCancelled: "Dibatalkan",
        msgZoomTitle: "Tampilkan Rincian",
        msgZoomModalHeading: "Pratinjau terperinci",
        msgSizeTooLarge: 'Berkas "{name}" (<b>{size} KB</b>) melebihi ukuran upload maksimal yaitu <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Anda harus memilih setidaknya <b>{n}</b> {files} untuk diunggah.",
        msgFilesTooMany: "<b>({n})</b> berkas yang dipilih untuk diunggah melebihi ukuran upload maksimal yaitu <b>{m}</b>.",
        msgFileNotFound: 'Berkas "{name}" tak ditemukan!',
        msgFileSecured: 'Sistem keamanan mencegah untuk membaca berkas "{name}".',
        msgFileNotReadable: 'Berkas "{name}" tak dapat dibaca.',
        msgFilePreviewAborted: 'Pratinjau untuk berkas "{name}" dibatalkan.',
        msgFilePreviewError: 'Kesalahan saat membaca berkas "{name}".',
        msgInvalidFileType: 'Jenis berkas "{name}" tidak sah. Hanya berkas "{types}" yang didukung.',
        msgInvalidFileExtension: 'Ekstensi berkas "{name}" tidak sah. Hanya ekstensi "{extensions}" yang didukung.',
        msgUploadAborted: "Pengunggahan berkas dibatalkan",
        msgValidationError: "Kesalahan validasi",
        msgLoading: "Memuat {index} dari {files} berkas &hellip;",
        msgProgress: "Memuat {index} dari {files} berkas - {name} - {percent}% selesai.",
        msgSelected: "{n} {files} dipilih",
        msgFoldersNotAllowed: "Hanya tahan dan lepas file saja! {n} folder diabaikan.",
        msgImageWidthSmall: 'Lebar dari gambar "{name}" harus sekurangnya {size} px.',
        msgImageHeightSmall: 'Tinggi dari gambar "{name}" harus sekurangnya {size} px.',
        msgImageWidthLarge: 'Lebar dari gambar "{name}" tak boleh melebihi {size} px.',
        msgImageHeightLarge: 'Tinggi dari gambar "{name}" tak boleh melebihi {size} px.',
        msgImageResizeError: "Tak dapat menentukan dimensi gambar untuk mengubah ukuran.",
        msgImageResizeException: "Kesalahan saat mengubah ukuran gambar.<pre>{errors}</pre>",
        dropZoneTitle: "Tarik dan lepaskan berkas disini &hellip;",
        fileActionSettings: {
            removeTitle: "Hapus berkas",
            uploadTitle: "Unggah berkas",
            indicatorNewTitle: "Belum diunggah",
            indicatorSuccessTitle: "Sudah diunggah",
            indicatorErrorTitle: "Kesalahan pengunggahan",
            indicatorLoadingTitle: "Mengunggah ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Italian Translation
 * 
 * Author: Lorenzo Milesi <maxxer@yetopen.it>
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["it"] = {
        fileSingle: "file",
        filePlural: "file",
        browseLabel: "Sfoglia&hellip;",
        removeLabel: "Rimuovi",
        removeTitle: "Rimuovi i file selezionati",
        cancelLabel: "Annulla",
        cancelTitle: "Annulla i caricamenti in corso",
        uploadLabel: "Carica",
        uploadTitle: "Carica i file selezionati",
        msgNo: "No",
        msgCancelled: "Annullato",
        msgZoomTitle: "Guarda i dettagli",
        msgZoomModalHeading: "Anteprima dettagliata",
        msgSizeTooLarge: 'Il file "{name}" (<b>{size} KB</b>) eccede la dimensione massima di caricamento di <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Devi selezionare almeno <b>{n}</b> {files} da caricare.",
        msgFilesTooMany: "Il numero di file selezionati per il caricamento <b>({n})</b> eccede il numero massimo di file accettati <b>{m}</b>.",
        msgFileNotFound: 'File "{name}" non trovato!',
        msgFileSecured: 'Restrizioni di sicurezza impediscono la lettura del file "{name}".',
        msgFileNotReadable: 'Il file "{name}" non è leggibile.',
        msgFilePreviewAborted: 'Generazione anteprima per "{name}" annullata.',
        msgFilePreviewError: 'Errore durante la lettura del file "{name}".',
        msgInvalidFileType: 'Tipo non valido per il file "{name}". Sono ammessi solo file di tipo "{types}".',
        msgInvalidFileExtension: 'Estensione non valida per il file "{name}". Sono ammessi solo file con estensione "{extensions}".',
        msgUploadAborted: "Il caricamento del file è stata interrotta",
        msgValidationError: "Errore di convalida",
        msgLoading: "Caricamento file {index} di {files}&hellip;",
        msgProgress: "Caricamento file {index} di {files} - {name} - {percent}% completato.",
        msgSelected: "{n} {files} selezionati",
        msgFoldersNotAllowed: "Trascina solo file! Ignorata/e {n} cartella/e.",
        msgImageWidthSmall: 'Larghezza di file immagine "{name}" deve essere di almeno {size} px.',
        msgImageHeightSmall: 'Altezza di file immagine "{name}" deve essere di almeno {size} px.',
        msgImageWidthLarge: 'Larghezza di file immagine "{name}" non può superare {size} px.',
        msgImageHeightLarge: 'Altezza di file immagine "{name}" non può superare {size} px.',
        msgImageResizeError: "Impossibile ottenere le dimensioni dell'immagine per ridimensionare.",
        msgImageResizeException: "Errore durante il ridimensionamento dell'immagine.<pre>{errors}</pre>",
        dropZoneTitle: "Trascina i file qui&hellip;",
        fileActionSettings: {
            removeTitle: "Rimuovere il file",
            uploadTitle: "Caricare un file",
            indicatorNewTitle: "Non ancora caricato",
            indicatorSuccessTitle: "Caricati",
            indicatorErrorTitle: "Carica Errore",
            indicatorLoadingTitle: "Caricamento ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Japanese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Yuta Hoshina <hoshina@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 * slugCallback
 *    \u4e00-\u9fa5 : Kanji (Chinese characters)
 *    \u3040-\u309f : Hiragana (Japanese syllabary)
 *    \u30a0-\u30ff\u31f0-\u31ff : Katakana (including phonetic extension)
 *    \u3200-\u32ff : Enclosed CJK Letters and Months
 *    \uff00-\uffef : Halfwidth and Fullwidth Forms
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["ja"] = {
        fileSingle: "ファイル",
        filePlural: "ファイル",
        browseLabel: "ファイルを選択&hellip;",
        removeLabel: "削除",
        removeTitle: "選択したファイルを削除",
        cancelLabel: "キャンセル",
        cancelTitle: "アップロードをキャンセル",
        uploadLabel: "アップロード",
        uploadTitle: "選択したファイルをアップロード",
        msgNo: "いいえ",
        msgCancelled: "キャンセル",
        msgZoomTitle: "プレビュー",
        msgZoomModalHeading: "ファイル詳細",
        msgSizeTooLarge: 'ファイル"{name}" (<b>{size} KB</b>)はアップロード可能な上限容量<b>{maxSize} KB</b>を超えています',
        msgFilesTooLess: "最低<b>{n}</b>個の{files}を選択してください",
        msgFilesTooMany: "選択したファイルの数<b>({n}個)</b>はアップロード可能な上限数<b>({m}個)</b>を超えています",
        msgFileNotFound: 'ファイル"{name}"はありませんでした',
        msgFileSecured: 'ファイル"{name}"は読み取り権限がないため取得できません',
        msgFileNotReadable: 'ファイル"{name}"は読み込めません',
        msgFilePreviewAborted: 'ファイル"{name}"のプレビューを中止しました',
        msgFilePreviewError: 'ファイル"{name}"の読み込み中にエラーが発生しました',
        msgInvalidFileType: '"{name}"は無効なファイル形式です。"{types}"形式のファイルのみサポートしています',
        msgInvalidFileExtension: '"{name}"は無効なファイル拡張子です。拡張子が"{extensions}"のファイルのみサポートしています',
        msgUploadAborted: "ファイルのアップロードが中止されました",
        msgValidationError: "検証エラー",
        msgLoading: "{files}個中{index}個目のファイルを読み込み中&hellip;",
        msgProgress: "{files}個中{index}個のファイルを読み込み中 - {name} - {percent}% 完了",
        msgSelected: "{n}個の{files}を選択",
        msgFoldersNotAllowed: "ドラッグ&ドロップが可能なのはファイルのみです。{n}個のフォルダ－は無視されました",
        msgImageWidthSmall: '画像ファイル"{name}"の幅が小さすぎます。画像サイズの幅は少なくとも{size}px必要です',
        msgImageHeightSmall: '画像ファイル"{name}"の高さが小さすぎます。画像サイズの高さは少なくとも{size}px必要です',
        msgImageWidthLarge: '画像ファイル"{name}"の幅がアップロード可能な画像サイズ({size}px)を超えています',
        msgImageHeightLarge: '画像ファイル"{name}"の高さがアップロード可能な画像サイズ({size}px)を超えています',
        msgImageResizeError: "リサイズ時に画像サイズが取得できませんでした",
        msgImageResizeException: "画像のリサイズ時にエラーが発生しました。<pre>{errors}</pre>",
        dropZoneTitle: "ファイルをドラッグ&ドロップ&hellip;",
        slugCallback: function(text) {
            return text ? text.split(/(\\|\/)/g).pop().replace(/[^\w\u4e00-\u9fa5\u3040-\u309f\u30a0-\u30ff\u31f0-\u31ff\u3200-\u32ff\uff00-\uffef\-.\\\/ ]+/g, "") : "";
        },
        fileActionSettings: {
            removeTitle: "ファイルを削除",
            uploadTitle: "ファイルをアップロード",
            indicatorNewTitle: "まだアップロードされていません",
            indicatorSuccessTitle: "アップロード済み",
            indicatorErrorTitle: "アップロード失敗",
            indicatorLoadingTitle: "アップロード中..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Dutch Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["nl"] = {
        fileSingle: "bestand",
        filePlural: "bestanden",
        browseLabel: "Zoek &hellip;",
        removeLabel: "Verwijder",
        removeTitle: "Verwijder geselecteerde bestanden",
        cancelLabel: "Annuleren",
        cancelTitle: "Annuleer upload",
        uploadLabel: "Upload",
        uploadTitle: "Upload geselecteerde bestanden",
        msgNo: "Nee",
        msgCancelled: "Geannuleerd",
        msgZoomTitle: "Bekijk details",
        msgZoomModalHeading: "Gedetailleerd voorbeeld",
        msgSizeTooLarge: 'Bestand "{name}" (<b>{size} KB</b>) is groter dan de toegestane <b>{maxSize} KB</b>.',
        msgFilesTooLess: "U moet minstens <b>{n}</b> {files} selecteren om te uploaden.",
        msgFilesTooMany: "Aantal geselecteerde bestanden <b>({n})</b> is meer dan de toegestane <b>{m}</b>.",
        msgFileNotFound: 'Bestand "{name}" niet gevonden!',
        msgFileSecured: 'Bestand kan niet gelezen worden in verband met beveiligings redenen "{name}".',
        msgFileNotReadable: 'Bestand "{name}" is niet leesbaar.',
        msgFilePreviewAborted: 'Bestand weergaven geannuleerd voor "{name}".',
        msgFilePreviewError: 'Er is een fout opgetreden met het lezen van "{name}".',
        msgInvalidFileType: 'Geen geldig bestand "{name}". Alleen "{types}" zijn toegestaan.',
        msgInvalidFileExtension: 'Geen geldige extensie "{name}". Alleen "{extensions}" zijn toegestaan.',
        msgUploadAborted: "Het uploaden van bestanden is afgebroken",
        msgValidationError: "Bevestiging fout",
        msgLoading: "Bestanden laden {index} van de {files} &hellip;",
        msgProgress: "Bestanden laden {index} van de {files} - {name} - {percent}% compleet.",
        msgSelected: "{n} {files} geselecteerd",
        msgFoldersNotAllowed: "Drag & drop alleen bestanden! {n} overgeslagen map(pen).",
        msgImageWidthSmall: 'Breedte van het foto-bestand "{name}" moet minstens {size} px zijn.',
        msgImageHeightSmall: 'Hoogte van het foto-bestand "{name}" moet minstens {size} px zijn.',
        msgImageWidthLarge: 'Breedte van het foto-bestand "{name}" kan niet hoger zijn dan {size} px.',
        msgImageHeightLarge: 'Hoogte van het foto bestand "{name}" kan niet hoger zijn dan {size} px.',
        msgImageResizeError: "Kon de foto afmetingen niet lezen om te verkleinen.",
        msgImageResizeException: "Fout bij het verkleinen van de foto.<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop bestanden hier &hellip;",
        fileActionSettings: {
            removeTitle: "Verwijder bestand",
            uploadTitle: "bestand uploaden",
            indicatorNewTitle: "Nog niet geupload",
            indicatorSuccessTitle: "geupload",
            indicatorErrorTitle: "fout uploaden",
            indicatorLoadingTitle: "uploaden ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Polish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["pl"] = {
        fileSingle: "plik",
        filePlural: "pliki",
        browseLabel: "Przeglądaj &hellip;",
        removeLabel: "Usuń",
        removeTitle: "Usuń zaznaczone pliki",
        cancelLabel: "Przerwij",
        cancelTitle: "Anuluj wysyłanie",
        uploadLabel: "Wgraj",
        uploadTitle: "Wgraj zaznaczone pliki",
        msgNo: "Nie",
        msgCancelled: "Odwołany",
        msgZoomTitle: "Pokaż szczegóły",
        msgZoomModalHeading: "Szczegółowe Podgląd",
        msgSizeTooLarge: 'Plik o nazwie "{name}" (<b>{size} KB</b>) przekroczył maksymalną dopuszczalną wielkość pliku wynoszącą <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Musisz wybrać przynajmniej <b>{n}</b> {files} do wgrania.",
        msgFilesTooMany: "Liczba plików wybranych do wgrania w liczbie <b>({n})</b>, przekracza maksymalny dozwolony limit wynoszący <b>{m}</b>.",
        msgFileNotFound: 'Plik "{name}" nie istnieje!',
        msgFileSecured: 'Ustawienia zabezpieczeń uniemożliwiają odczyt pliku "{name}".',
        msgFileNotReadable: 'Plik "{name}" nie jest plikiem do odczytu.',
        msgFilePreviewAborted: 'Podgląd pliku "{name}" został przerwany.',
        msgFilePreviewError: 'Wystąpił błąd w czasie odczytu pliku "{name}".',
        msgInvalidFileType: 'Nieznny typ pliku "{name}". Tylko następujące rodzaje plików "{types}", są obsługiwane.',
        msgInvalidFileExtension: 'Złe rozszerzenie dla pliku "{name}". Tylko następujące rozszerzenia plików "{extensions}", są obsługiwane.',
        msgUploadAborted: "Plik przesyłanie zostało przerwane",
        msgValidationError: "Błąd walidacji",
        msgLoading: "Wczytywanie pliku {index} z {files} &hellip;",
        msgProgress: "Wczytywanie pliku {index} z {files} - {name} - {percent}% zakończone.",
        msgSelected: "{n} {files} zaznaczonych",
        msgFoldersNotAllowed: "Metodą przeciągnij i upuść, można przenosić tylko pliki. Pominięto {n} katalogów.",
        msgImageWidthSmall: 'Szerokość pliku obrazu "{name}" musi być co najmniej {size} px.',
        msgImageHeightSmall: 'Wysokość pliku obrazu "{name}" musi być co najmniej {size} px.',
        msgImageWidthLarge: 'Szerokość pliku obrazu "{name}" nie może przekraczać {size} px.',
        msgImageHeightLarge: 'Wysokość pliku obrazu "{name}" nie może przekraczać {size} px.',
        msgImageResizeError: "Nie udało się uzyskać wymiary obrazu, aby zmienić rozmiar.",
        msgImageResizeException: "Błąd podczas zmiany rozmiaru obrazu.<pre>{errors}</pre>",
        dropZoneTitle: "Przeciągnij i upuść pliki tu &hellip;",
        fileActionSettings: {
            removeTitle: "Usuń plik",
            uploadTitle: "przesyłanie pliku",
            indicatorNewTitle: "Jeszcze nie przesłanych",
            indicatorSuccessTitle: "Dodane",
            indicatorErrorTitle: "Prześlij błąd",
            indicatorLoadingTitle: "Zamieszczanie ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Brazillian Portuguese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["pt-BR"] = {
        fileSingle: "arquivo",
        filePlural: "arquivos",
        browseLabel: "Procurar&hellip;",
        removeLabel: "Remover",
        removeTitle: "Remover arquivos selecionados",
        cancelLabel: "Cancelar",
        cancelTitle: "Interromper envio em andamento",
        uploadLabel: "Enviar",
        uploadTitle: "Enviar arquivos selecionados",
        msgNo: "Não",
        msgCancelled: "Cancelado",
        msgZoomTitle: "Ver detalhes",
        msgZoomModalHeading: "Pré-visualização detalhada",
        msgSizeTooLarge: 'O arquivo "{name}" (<b>{size} KB</b>) excede o tamanho máximo permitido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Você deve selecionar pelo menos <b>{n}</b> {files} para enviar.",
        msgFilesTooMany: "O número de arquivos selecionados para o envio <b>({n})</b> excede o limite máximo permitido de <b>{m}</b>.",
        msgFileNotFound: 'O arquivo "{name}" não foi encontrado!',
        msgFileSecured: 'Restrições de segurança impedem a leitura do arquivo "{name}".',
        msgFileNotReadable: 'O arquivo "{name}" não pode ser lido.',
        msgFilePreviewAborted: 'A pré-visualização do arquivo "{name}" foi interrompida.',
        msgFilePreviewError: 'Ocorreu um erro ao ler o arquivo "{name}".',
        msgInvalidFileType: 'Tipo inválido para o arquivo "{name}". Apenas arquivos "{types}" são permitidos.',
        msgInvalidFileExtension: 'Extensão inválida para o arquivo "{name}". Apenas arquivos "{extensions}" são permitidos.',
        msgUploadAborted: "O upload do arquivo foi abortada",
        msgValidationError: "Erro de validação",
        msgLoading: "Enviando arquivo {index} de {files}&hellip;",
        msgProgress: "Enviando arquivo {index} de {files} - {name} - {percent}% completo.",
        msgSelected: "{n} {files} selecionado(s)",
        msgFoldersNotAllowed: "Arraste e solte apenas arquivos! {n} soltar pasta(s) ignoradas.",
        msgImageWidthSmall: 'Largura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageHeightSmall: 'Altura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageWidthLarge: 'Largura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageHeightLarge: 'Altura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Erro ao redimensionar a imagem.<pre>{errors}</pre>",
        dropZoneTitle: "Arraste e solte os arquivos aqui&hellip;",
        fileActionSettings: {
            removeTitle: "Remover arquivo",
            uploadTitle: "Carregar arquivo",
            indicatorNewTitle: "Ainda não carregou",
            indicatorSuccessTitle: "Carregado",
            indicatorErrorTitle: "Carregar Erro",
            indicatorLoadingTitle: "A carregar ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Portuguese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["pt"] = {
        fileSingle: "ficheiro",
        filePlural: "ficheiros",
        browseLabel: "Procurar &hellip;",
        removeLabel: "Remover",
        removeTitle: "Remover ficheiros seleccionados",
        cancelLabel: "Cancelar",
        cancelTitle: "Abortar carregamento ",
        uploadLabel: "Carregar",
        uploadTitle: "Carregar ficheiros seleccionados",
        msgNo: "Não",
        msgCancelled: "Cancelado",
        msgZoomTitle: "Ver detalhes",
        msgZoomModalHeading: "Pré-visualização detalhada",
        msgSizeTooLarge: 'Ficheiro "{name}" (<b>{size} KB</b>) excede o tamanho máximo permido de <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Deve seleccionar pelo menos <b>{n}</b> {files} para fazer upload.",
        msgFilesTooMany: "Número máximo de ficheiros seleccionados <b>({n})</b> excede o limite máximo de <b>{m}</b>.",
        msgFileNotFound: 'Ficheiro "{name}" não encontrado!',
        msgFileSecured: 'Restrições de segurança preventem a leitura do ficheiro "{name}".',
        msgFileNotReadable: 'Ficheiro "{name}" não pode ser lido.',
        msgFilePreviewAborted: 'Pré-visualização abortado para o ficheiro "{name}".',
        msgFilePreviewError: 'Ocorreu um erro ao ler o ficheiro "{name}".',
        msgInvalidFileType: 'Tipo inválido para o ficheiro "{name}". Apenas ficheiros "{types}" são suportados.',
        msgInvalidFileExtension: 'Extensão inválida para o ficheiro "{name}". Apenas ficheiros "{extensions}" são suportados.',
        msgUploadAborted: "O upload do arquivo foi abortada",
        msgValidationError: "Erro de validação",
        msgLoading: "A carregar ficheiro {index} de {files} &hellip;",
        msgProgress: "A carregar ficheiro {index} de {files} - {name} - {percent}% completo.",
        msgSelected: "{n} {files} seleccionados",
        msgFoldersNotAllowed: "Arrastar e largar ficheiros apenas! {n} pasta(s) ignoradas.",
        msgImageWidthSmall: 'Largura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageHeightSmall: 'Altura do arquivo de imagem "{name}" deve ser pelo menos {size} px.',
        msgImageWidthLarge: 'Largura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageHeightLarge: 'Altura do arquivo de imagem "{name}" não pode exceder {size} px.',
        msgImageResizeError: "Could not get the image dimensions to resize.",
        msgImageResizeException: "Erro ao redimensionar a imagem.<pre>{errors}</pre>",
        dropZoneTitle: "Arrastar e largar ficheiros aqui &hellip;",
        fileActionSettings: {
            removeTitle: "Remover arquivo",
            uploadTitle: "Carregar arquivo",
            indicatorNewTitle: "Ainda não carregou",
            indicatorSuccessTitle: "Carregado",
            indicatorErrorTitle: "Carregar Erro",
            indicatorLoadingTitle: "A carregar ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Romanian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Ciprian Voicu <pictoru@autoportret.ro>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["ro"] = {
        fileSingle: "fișier",
        filePlural: "fișiere",
        browseLabel: "Răsfoiește &hellip;",
        removeLabel: "Șterge",
        removeTitle: "Curăță fișierele selectate",
        cancelLabel: "Renunță",
        cancelTitle: "Anulează încărcarea curentă",
        uploadLabel: "Încarcă",
        uploadTitle: "Încarcă fișierele selectate",
        msgNo: "Nu",
        msgCancelled: "Anulat",
        msgZoomTitle: "Vezi detalii",
        msgZoomModalHeading: "Previzualizare detaliată",
        msgSizeTooLarge: 'Fișierul "{name}" (<b>{size} KB</b>) depășește limita maximă de încărcare de <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Trebuie să selectezi cel puțin <b>{n}</b> {files} pentru a încărca.",
        msgFilesTooMany: "Numărul fișierelor pentru încărcare <b>({n})</b> depășește limita maximă de <b>{m}</b>.",
        msgFileNotFound: 'Fișierul "{name}" nu a fost găsit!',
        msgFileSecured: 'Restricții de securitate previn citirea fișierului "{name}".',
        msgFileNotReadable: 'Fișierul "{name}" nu se poate citi.',
        msgFilePreviewAborted: 'Fișierului "{name}" nu poate fi previzualizat.',
        msgFilePreviewError: 'A intervenit o eroare în încercarea de citire a fișierului "{name}".',
        msgInvalidFileType: 'Tip de fișier incorect pentru "{name}". Sunt suportate doar fișiere de tipurile "{types}".',
        msgInvalidFileExtension: 'Extensie incorectă pentru "{name}". Sunt suportate doar extensiile "{extensions}".',
        msgUploadAborted: "Fișierul Încărcarea a fost întrerupt",
        msgValidationError: "Eroare de validare",
        msgLoading: "Se încarcă fișierul {index} din {files} &hellip;",
        msgProgress: "Se încarcă fișierul {index} din {files} - {name} - {percent}% încărcat.",
        msgSelected: "{n} {files} încărcate",
        msgFoldersNotAllowed: "Se poate doar trăgând fișierele! Se renunță la {n} dosar(e).",
        msgImageWidthSmall: 'Lățimea de fișier de imagine "{name}" trebuie să fie de cel puțin {size px.',
        msgImageHeightSmall: 'Înălțimea fișier imagine "{name}" trebuie să fie de cel puțin {size} px.',
        msgImageWidthLarge: 'Lățimea de fișier de imagine "{name}" nu poate depăși {size} px.',
        msgImageHeightLarge: 'Înălțimea fișier imagine "{name}" nu poate depăși {size} px.',
        msgImageResizeError: "Nu a putut obține dimensiunile imaginii pentru a redimensiona.",
        msgImageResizeException: "Eroare la redimensionarea imaginii.<pre>{errors}</pre>",
        dropZoneTitle: "Trage fișierele aici &hellip;",
        fileActionSettings: {
            removeTitle: "Scoateți fișier",
            uploadTitle: "Incarca fisier",
            indicatorNewTitle: "Nu a încărcat încă",
            indicatorSuccessTitle: "încărcat",
            indicatorErrorTitle: "Încărcați eroare",
            indicatorLoadingTitle: "Se încarcă ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Russian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author CyanoFresh <cyanofresh@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["ru"] = {
        fileSingle: "файл",
        filePlural: "файлы",
        browseLabel: "Выбрать &hellip;",
        removeLabel: "Удалить",
        removeTitle: "Очистить выбранные файлы",
        cancelLabel: "Отмена",
        cancelTitle: "Отменить текущую загрузку",
        uploadLabel: "Загрузить",
        uploadTitle: "Загрузить выбранные файлы",
        msgNo: "нет",
        msgCancelled: "Отменено",
        msgZoomTitle: "посмотреть детали",
        msgZoomModalHeading: "Подробное превью",
        msgSizeTooLarge: 'Файл "{name}" (<b>{size} KB</b>) превышает максимальный размер <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Вы должны выбрать как минимум <b>{n}</b> {files} для загрузки.",
        msgFilesTooMany: "Количество выбранных файлов <b>({n})</b> превышает максимально допустимое количество <b>{m}</b>.",
        msgFileNotFound: 'Файл "{name}" не найден!',
        msgFileSecured: 'Ограничения безопасности запрещают читать файл "{name}".',
        msgFileNotReadable: 'Файл "{name}" невозможно прочитать.',
        msgFilePreviewAborted: 'Предпросмотр отменен для файла "{name}".',
        msgFilePreviewError: 'Произошла ошибка при чтении файла "{name}".',
        msgInvalidFileType: 'Запрещенный тип файла для "{name}". Только "{types}" разрешены.',
        msgInvalidFileExtension: 'Запрещенное расширение для файла "{name}". Только "{extensions}" разрешены.',
        msgUploadAborted: "Выгрузка файла прервана",
        msgValidationError: "Ошибка проверки",
        msgLoading: "Загрузка файла {index} из {files} &hellip;",
        msgProgress: "Загрузка файла {index} из {files} - {name} - {percent}% завершено.",
        msgSelected: "Выбрано файлов: {n}",
        msgFoldersNotAllowed: "Разрешено перетаскивание только файлов! Пропущено {n} папок.",
        msgImageWidthSmall: "Ширина изображения {name} должна быть не меньше {size} px.",
        msgImageHeightSmall: "Высота изображения {name} должна быть не меньше {size} px.",
        msgImageWidthLarge: 'Ширина изображения "{name}" не может превышать {size} px.',
        msgImageHeightLarge: 'Высота изображения "{name}" не может превышать {size} px.',
        msgImageResizeError: "Не удалось получить размеры изображения, чтобы изменить размер.",
        msgImageResizeException: "Ошибка при изменении размера изображения.<pre>{errors}</pre>",
        dropZoneTitle: "Перетащите файлы сюда &hellip;",
        fileActionSettings: {
            removeTitle: "Удалить файл",
            uploadTitle: "Загрузить файл",
            indicatorNewTitle: "Еще не загружен",
            indicatorSuccessTitle: "Загружен",
            indicatorErrorTitle: "Ошибка загрузки",
            indicatorLoadingTitle: "Загрузка ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Slovakian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["sk"] = {
        fileSingle: "súbor",
        filePlural: "súbory",
        browseLabel: "Vybrať &hellip;",
        removeLabel: "Odstrániť",
        removeTitle: "Vyčistiť vybraté súbory",
        cancelLabel: "Storno",
        cancelTitle: "Prerušiť  nahrávanie",
        uploadLabel: "Nahrať",
        uploadTitle: "Nahrať vybraté súbory",
        msgNo: "Nie",
        msgCancelled: "Zrušené",
        msgZoomTitle: "Zobraziť podrobnosti",
        msgZoomModalHeading: "Detailný náhľad",
        msgSizeTooLarge: 'Súbor "{name}" (<b>{size} KB</b>): prekročenie - maximálna povolená veľkosť <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Musíte vybrať najmenej <b>{n}</b> {files} pre nahranie.",
        msgFilesTooMany: "Počet vybratých súborov pre nahranie <b>({n})</b>: prekročenie - maximálny povolený limit <b>{m}</b>.",
        msgFileNotFound: 'Súbor "{name}" nebol nájdený!',
        msgFileSecured: 'Zabezpečenie súboru znemožnilo čítať súbor "{name}".',
        msgFileNotReadable: 'Súbor "{name}" nie je čitateľný.',
        msgFilePreviewAborted: 'Náhľad súboru bol prerušený pre "{name}".',
        msgFilePreviewError: 'Nastala chyba pri načítaní súboru "{name}".',
        msgInvalidFileType: 'Neplatný typ súboru "{name}". Iba "{types}" súborov sú podporované.',
        msgInvalidFileExtension: 'Neplatná extenzia súboru "{name}". Iba "{extensions}" súborov sú podporované.',
        msgUploadAborted: "Súbor nahrávania bol prerušený",
        msgValidationError: "Chyba overenia",
        msgLoading: "Nahrávanie súboru {index} z {files} &hellip;",
        msgProgress: "Nahrávanie súboru {index} z {files} - {name} - {percent}% dokončené.",
        msgSelected: "{n} {files} vybraté",
        msgFoldersNotAllowed: "Tiahni a pusť iba súbory! Vynechané {n} pustené prečinok(y).",
        msgImageWidthSmall: 'Šírka image súboru "{name}", musí byť minimálne {size} px.',
        msgImageHeightSmall: 'Výška image súboru "{name}", musí byť minimálne {size} px.',
        msgImageWidthLarge: 'Šírka image súboru "{name}" nemôže presiahnuť {size} px.',
        msgImageHeightLarge: 'Výška súboru obrazu "{name}" nesmie presiahnuť {size} px.',
        msgImageResizeError: "Nemožno získať rozmery obrázku zmeniť veľkosť.",
        msgImageResizeException: "Chyba pri zmene veľkosti obrázka.<pre>{errors}</pre>",
        dropZoneTitle: "Tiahni a pusť súbory tu &hellip;",
        fileActionSettings: {
            removeTitle: "odstrániť súbor",
            uploadTitle: "nahrať súbor",
            indicatorNewTitle: "Ešte nenahral",
            indicatorSuccessTitle: "nahral",
            indicatorErrorTitle: "nahrať Chyba",
            indicatorLoadingTitle: "nahrávanie ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Thai Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["th"] = {
        fileSingle: "ไฟล์",
        filePlural: "ไฟล์",
        browseLabel: "เลือกดู &hellip;",
        removeLabel: "ลบทิ้ง",
        removeTitle: "ลบไฟล์ที่เลือกทิ้ง",
        cancelLabel: "ยกเลิก",
        cancelTitle: "ยกเลิกการอัพโหลด",
        uploadLabel: "อัพโหลด",
        uploadTitle: "อัพโหลดไฟล์ที่เลือก",
        msgNo: "ไม่",
        msgCancelled: "ยกเลิก",
        msgZoomTitle: "ดูรายละเอียด",
        msgZoomModalHeading: "ตัวอย่างละเอียด",
        msgSizeTooLarge: 'ไฟล์ "{name}" (<b>{size} KB</b>) มีขนาดเกินที่ระบบอนุญาตที่ <b>{maxSize} KB</b>, กรุณาลองใหม่อีกครั้ง!',
        msgFilesTooLess: "คุณต้องเลือกไฟล์จำนวนอย่างน้อย <b>{n}</b> {files} เพื่ออัพโหลด, กรุณาลองใหม่อีกครั้ง!",
        msgFilesTooMany: "ไฟล์ที่คุณเลือกมีจำนวน <b>({n})</b> ซึ่งเกินกว่าที่ระบบอนุญาตที่ <b>{m}</b>, กรุณาลองใหม่อีกครั้ง!",
        msgFileNotFound: 'ไม่พบไฟล์ "{name}" !',
        msgFileSecured: 'ระบบความปลอดภัยไม่อนุญาตให้อ่านไฟล์ "{name}".',
        msgFileNotReadable: 'ไม่สามารถอ่านไฟล์ "{name}" ได้',
        msgFilePreviewAborted: 'ไฟล์ "{name}" ไม่อนุญาตให้ดูตัวอย่าง',
        msgFilePreviewError: 'พบปัญหาในการดูตัวอย่างไฟล์ "{name}".',
        msgInvalidFileType: 'ไฟล์ "{name}" เป็นประเภทไฟล์ที่ไม่ถูกต้อง, อนุญาตเฉพาะไฟล์ประเภท "{types}"',
        msgInvalidFileExtension: 'ไฟล์ "{name}" เป็น extension ที่ไมถูกต้อง, อนุญาตเฉพาะไฟล์ extension "{extensions}"',
        msgUploadAborted: "อัปโหลดไฟล์ถูกยกเลิก",
        msgValidationError: "ข้อผิดพลาดในการตรวจสอบ",
        msgLoading: "กำลังโหลดไฟล์ {index} จาก {files} &hellip;",
        msgProgress: "กำลังโหลดไฟล์ {index} จาก {files} - {name} - {percent}%",
        msgSelected: "{n} {files} ถูกเลือก",
        msgFoldersNotAllowed: "Drag & drop เฉพาะไฟล์เท่านั้น! ข้าม dropped folder จำนวน {n}",
        msgImageWidthSmall: 'ความกว้างของภาพไฟล์ "{name}" ต้องมีอย่างน้อย {size} px.',
        msgImageHeightSmall: 'ความสูงของภาพไฟล์ "{name}" ต้องมีอย่างน้อย {size} px.',
        msgImageWidthLarge: 'ความกว้างของภาพไฟล์ "{name}" ไม่เกิน {size} พิกเซล.',
        msgImageHeightLarge: 'ความสูงของไฟล์ภาพ "{name}" ไม่เกิน {size} พิกเซล.',
        msgImageResizeError: "ไม่สามารถรับขนาดภาพเพื่อปรับขนาด",
        msgImageResizeException: "ข้อผิดพลาดขณะปรับขนาดภาพ<pre>{errors}</pre>",
        dropZoneTitle: "Drag & drop ไฟล์ตรงนี้ &hellip;",
        fileActionSettings: {
            removeTitle: "ลบไฟล์",
            uploadTitle: "อัปโหลดไฟล์",
            indicatorNewTitle: "ยังไม่ได้อัปโหลด",
            indicatorSuccessTitle: "อัพโหลด",
            indicatorErrorTitle: "อัปโหลดข้อผิดพลาด",
            indicatorLoadingTitle: "อัพโหลด ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Turkish Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["tr"] = {
        fileSingle: "dosya",
        filePlural: "dosyalar",
        browseLabel: "Gözat &hellip;",
        removeLabel: "Sil",
        removeTitle: "Seçilen dosyaları sil",
        cancelLabel: "İptal",
        cancelTitle: "Devam eden yüklemeyi iptal et",
        uploadLabel: "Yükle",
        uploadTitle: "Seçilen dosyaları yükle",
        msgNo: "Hayır",
        msgCancelled: "Iptal edildi",
        msgZoomTitle: "Ayrıntıları görüntüle",
        msgZoomModalHeading: "Detaylı Önizleme",
        msgSizeTooLarge: '"{name}" dosyasının boyutu (<b>{size} KB</b>) izin verilen azami dosya boyutu olan <b>{maxSize} KB</b>\'tan büyük.',
        msgFilesTooLess: "Yüklemek için en az <b>{n}</b> {files} dosya seçmelisiniz.",
        msgFilesTooMany: "Yüklemek için seçtiğiniz dosya sayısı <b>({n})</b> azami limitin <b>({m})</b> altında olmalıdır.",
        msgFileNotFound: '"{name}" dosyası bulunamadı!',
        msgFileSecured: 'Güvenlik kısıtlamaları "{name}" dosyasının okunmasını engelliyor.',
        msgFileNotReadable: '"{name}" dosyası okunabilir değil.',
        msgFilePreviewAborted: '"{name}" dosyası için önizleme iptal edildi.',
        msgFilePreviewError: '"{name}" dosyası okunurken bir hata oluştu.',
        msgInvalidFileType: '"{name}" dosyasının türü geçerli değil. Yalnızca "{types}" türünde dosyalara izin veriliyor.',
        msgInvalidFileExtension: '"{name}" dosyasının uzantısı geçersiz. Yalnızca "{extensions}" uzantılı dosyalara izin veriliyor.',
        msgUploadAborted: "Dosya yükleme iptal edildi",
        msgValidationError: "Doğrulama Hatası",
        msgLoading: "Dosya yükleniyor {index} / {files} &hellip;",
        msgProgress: "Dosya yükleniyor {index} / {files} - {name} - %{percent} tamamlandı.",
        msgSelected: "{n} {files} seçildi",
        msgFoldersNotAllowed: "Yalnızca dosyaları sürükleyip bırakabilirsiniz! {n} dizin(ler) göz ardı edildi.",
        msgImageWidthSmall: '"{name}" adlı görüntü dosyasının genişliği en az {size} piksel olmalıdır.',
        msgImageHeightSmall: '"{name}" adlı görüntü dosyasının yüksekliği en az {size} piksel olmalıdır.',
        msgImageWidthLarge: '"{name}" adlı görüntü dosyasının genişliği {size} pikseli geçemez.',
        msgImageHeightLarge: '"{name}" adlı görüntü dosyasının yüksekliği {size} pikseli geçemez.',
        msgImageResizeError: "Görüntü boyutlarını yeniden boyutlandırmak için alınamadı.",
        msgImageResizeException: "Görsel boyutlandırma sırasında hata.<pre>{errors}</pre>",
        dropZoneTitle: "Dosyaları buraya sürükleyip bırakın &hellip;",
        fileActionSettings: {
            removeTitle: "Dosyayı kaldır",
            uploadTitle: "Dosyayı yükle",
            indicatorNewTitle: "Henüz yüklenemedi",
            indicatorSuccessTitle: "Yüklendi",
            indicatorErrorTitle: "Yükleme Hatası",
            indicatorLoadingTitle: "Yükleniyor ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Ukrainian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author CyanoFresh <cyanofresh@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["uk"] = {
        fileSingle: "файл",
        filePlural: "файли",
        browseLabel: "Вибрати &hellip;",
        removeLabel: "Видалити",
        removeTitle: "Видалити вибрані файли",
        cancelLabel: "Скасувати",
        cancelTitle: "Скасувати поточну загрузку",
        uploadLabel: "Загрузити",
        uploadTitle: "Загрузити вибрані файли",
        msgNo: "Немає",
        msgCancelled: "Cкасовано",
        msgZoomTitle: "Подивитися деталі",
        msgZoomModalHeading: "Детальний превью",
        msgSizeTooLarge: 'Файл "{name}" (<b>{size} KB</b>) перевищує максимальний розмір <b>{maxSize} KB</b>.',
        msgFilesTooLess: "Ви повинні вибрати як мінімум <b>{n}</b> {files} для загрузки.",
        msgFilesTooMany: "Кількість вибраних файлів <b>({n})</b> перевищує максимально допустиму кількість <b>{m}</b>.",
        msgFileNotFound: 'Файл "{name}" не знайдено!',
        msgFileSecured: 'Обмеження безпеки перешкоджають читанню файла "{name}".',
        msgFileNotReadable: 'Файл "{name}" неможливо прочитати.',
        msgFilePreviewAborted: 'Перегляд скасований для файла "{name}".',
        msgFilePreviewError: 'Сталася помилка під час читання файла "{name}".',
        msgInvalidFileType: 'Заборонений тип файла для "{name}". Тільки "{types}" дозволені.',
        msgInvalidFileExtension: 'Заборонене розширення для файла "{name}". Тільки "{extensions}" дозволені.',
        msgUploadAborted: "Вивантаження файлу перервана",
        msgValidationError: "Помилка перевірки",
        msgLoading: "Загрузка файла {index} із {files} &hellip;",
        msgProgress: "Загрузка файла {index} із {files} - {name} - {percent}% завершено.",
        msgSelected: "{n} {files} вибрано",
        msgFoldersNotAllowed: "Дозволено перетягувати тільки файли! Пропущено {n} папок.",
        msgImageWidthSmall: 'Ширина зображення "{name}" повинна бути не менше {size} px.',
        msgImageHeightSmall: 'Висота зображення "{name}" повинна бути не менше {size} px.',
        msgImageWidthLarge: 'Ширина зображення "{name}" не може перевищувати {size} px.',
        msgImageHeightLarge: 'Висота зображення "{name}" не може перевищувати {size} px.',
        msgImageResizeError: "Не вдалося розміри зображення, щоб змінити розмір.",
        msgImageResizeException: "Помилка при зміні розміру зображення.<pre>{errors}</pre>",
        dropZoneTitle: "Перетягніть файли сюди &hellip;",
        fileActionSettings: {
            removeTitle: "Видалити файл",
            uploadTitle: "Загрузити файл",
            indicatorNewTitle: "Ще не загружено",
            indicatorSuccessTitle: "Загружено",
            indicatorErrorTitle: "Помилка при загрузці",
            indicatorLoadingTitle: "Загрузка ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Chinese Traditional Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["zh-TW"] = {
        fileSingle: "單一檔案",
        filePlural: "複選檔案",
        browseLabel: "瀏覽 &hellip;",
        removeLabel: "移除",
        removeTitle: "清除選取檔案",
        cancelLabel: "取消",
        cancelTitle: "取消上傳中檔案",
        uploadLabel: "上傳",
        uploadTitle: "上傳選取檔案",
        msgNo: "沒有",
        msgCancelled: "取消",
        msgZoomTitle: "詳細資料",
        msgZoomModalHeading: "內容預覽",
        msgSizeTooLarge: '檔案 "{name}" (<b>{size} KB</b>) 大小超過上限 <b>{maxSize} KB</b>.',
        msgFilesTooLess: "最少必須選擇 <b>{n}</b> {files} 來上傳. ",
        msgFilesTooMany: "上傳的檔案數量 <b>({n})</b> 超過最大檔案上傳限制 <b>{m}</b>.",
        msgFileNotFound: '檔案 "{name}" 未發現!',
        msgFileSecured: '安全限制，禁止讀取檔案 "{name}".',
        msgFileNotReadable: '文件 "{name}" 不可讀取.',
        msgFilePreviewAborted: '檔案 "{name}" 預覽中止.',
        msgFilePreviewError: '讀取 "{name}" 發生錯誤.',
        msgInvalidFileType: '檔案類型錯誤 "{name}". 只能使用 "{types}" 類型的檔案.',
        msgInvalidFileExtension: '附檔名錯誤 "{name}". 只能使用 "{extensions}" 的檔案.',
        msgUploadAborted: "該文件上傳被中止",
        msgValidationError: "驗證錯誤",
        msgLoading: "載入第 {index} 個檔案，共 {files} &hellip;",
        msgProgress: "載入第 {index} 個檔案，共 {files} - {name} - {percent}% 成功.",
        msgSelected: "{n} {files} 選取",
        msgFoldersNotAllowed: "只支援單檔拖曳! 無法使用 {n} 拖拽的資料夹.",
        msgImageWidthSmall: '圖檔寬度"{name}"必須至少為{size}像素(px).',
        msgImageHeightSmall: '圖檔高度"{name}"必須至少為{size}像素(px).',
        msgImageWidthLarge: '圖檔寬度"{name}"不能超過{size}像素(px).',
        msgImageHeightLarge: '圖檔高度"{name}"不能超過{size}像素(px).',
        msgImageResizeError: "無法獲取的圖像尺寸調整。",
        msgImageResizeException: "錯誤而調整圖像大小。<pre>{errors}</pre>",
        dropZoneTitle: "拖曳檔案至此 &hellip;",
        fileActionSettings: {
            removeTitle: "刪除檔案",
            uploadTitle: "上傳檔案",
            indicatorNewTitle: "尚未上傳",
            indicatorSuccessTitle: "上傳成功",
            indicatorErrorTitle: "上傳失敗",
            indicatorLoadingTitle: "上傳中 ..."
        }
    };
})(window.jQuery);

/*!
 * FileInput Chinese Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author kangqf <kangqingfei@gmail.com>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function($) {
    "use strict";
    $.fn.fileinputLocales["zh"] = {
        fileSingle: "文件",
        filePlural: "多个文件",
        browseLabel: "选择 &hellip;",
        removeLabel: "移除",
        removeTitle: "清除选中文件",
        cancelLabel: "取消",
        cancelTitle: "取消进行中的上传",
        uploadLabel: "上传",
        uploadTitle: "上传选中文件",
        msgNo: "没有",
        msgCancelled: "取消",
        msgZoomTitle: "查看详情",
        msgZoomModalHeading: "详细预览",
        msgSizeTooLarge: '文件 "{name}" (<b>{size} KB</b>) 超过了允许大小 <b>{maxSize} KB</b>.',
        msgFilesTooLess: "你必须选择最少 <b>{n}</b> {files} 来上传. ",
        msgFilesTooMany: "选择的上传文件个数 <b>({n})</b> 超出最大文件的限制个数 <b>{m}</b>.",
        msgFileNotFound: '文件 "{name}" 未找到!',
        msgFileSecured: '安全限制，为了防止读取文件 "{name}".',
        msgFileNotReadable: '文件 "{name}" 不可读.',
        msgFilePreviewAborted: '取消 "{name}" 的预览.',
        msgFilePreviewError: '读取 "{name}" 时出现了一个错误.',
        msgInvalidFileType: '不正确的类型 "{name}". 只支持 "{types}" 类型的文件.',
        msgInvalidFileExtension: '不正确的文件扩展名 "{name}". 只支持 "{extensions}" 的文件扩展名.',
        msgUploadAborted: "该文件上传被中止",
        msgValidationError: "验证错误",
        msgLoading: "加载第 {index} 文件 共 {files} &hellip;",
        msgProgress: "加载第 {index} 文件 共 {files} - {name} - {percent}% 完成.",
        msgSelected: "{n} {files} 选中",
        msgFoldersNotAllowed: "只支持拖拽文件! 跳过 {n} 拖拽的文件夹.",
        msgImageWidthSmall: '宽度的图像文件的"{name}"的必须是至少{size}像素.',
        msgImageHeightSmall: '图像文件的"{name}"的高度必须至少为{size}像素.',
        msgImageWidthLarge: '宽度的图像文件"{name}"不能超过{size}像素.',
        msgImageHeightLarge: '图像文件"{name}"的高度不能超过{size}像素.',
        msgImageResizeError: "无法获取的图像尺寸调整。",
        msgImageResizeException: "错误而调整图像大小。<pre>{errors}</pre>",
        dropZoneTitle: "拖拽文件到这里 &hellip;",
        fileActionSettings: {
            removeTitle: "删除文件",
            uploadTitle: "上传文件",
            indicatorNewTitle: "没有上传",
            indicatorSuccessTitle: "上传",
            indicatorErrorTitle: "上传错误",
            indicatorLoadingTitle: "上传 ..."
        }
    };
})(window.jQuery);

$(document).ready(function() {
    /** CLOSE MAIN NAVIGATION WHEN CLICKING OUTSIDE THE MAIN NAVIGATION AREA**/
    // $(document).on('click', function (e){
    //     var menu_opened = $('#main-navigation').hasClass('in');
    //     if(!$(e.target).closest('#main-navigation').length &&
    //         !$(e.target).is('#main-navigation') &&
    //         menu_opened === true){
    //             $('#main-navigation').collapse('toggle');
    //     }
    // });
    /** TRANSFORM <IMG> TO BACKGROUND IMAGES WITH COVER BACKGROUND SIZE SINCE OBJECT FIT IS NOT YET FULLY SUPPORTED**/
    $(".box,.item").each(function() {
        var imgPath = $(this).find("img").attr("src");
        $(this).css({
            "background-image": "url(" + imgPath + ")",
            "background-repeat": "no-repeat",
            "background-position": "center center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover"
        });
        $(this).find("img").remove();
    });
    /** STICKY HEADER STUFF **/
    // $('a[href*=#]:not([href=#])').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    //             || location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });
    var mn = $(".main-nav"), mns = "main-nav-scrolled", hdr = $("#partner-header").height() + mn.height();
    // Show or hide the sticky footer button
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $(".go-top").fadeIn(200);
        } else {
            $(".go-top").fadeOut(200);
        }
        if ($(this).scrollTop() > hdr) {
            mn.addClass(mns);
        } else {
            mn.removeClass(mns);
        }
    });
    // Animate the scroll to top
    $(".go-top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, 300);
    });
});