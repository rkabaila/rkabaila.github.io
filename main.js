!(function (e) {
  function t(t) {
    for (
      var r, o, c = t[0], u = t[1], i = t[2], p = 0, s = [];
      p < c.length;
      p++
    )
      (o = c[p]),
        Object.prototype.hasOwnProperty.call(a, o) && a[o] && s.push(a[o][0]),
        (a[o] = 0);
    for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (e[r] = u[r]);
    for (f && f(t); s.length; ) s.shift()();
    return l.push.apply(l, i || []), n();
  }
  function n() {
    for (var e, t = 0; t < l.length; t++) {
      for (var n = l[t], r = !0, c = 1; c < n.length; c++) {
        var u = n[c];
        0 !== a[u] && (r = !1);
      }
      r && (l.splice(t--, 1), (e = o((o.s = n[0]))));
    }
    return e;
  }
  var r = {},
    a = { 0: 0 },
    l = [];
  function o(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, o), (n.l = !0), n.exports;
  }
  (o.m = e),
    (o.c = r),
    (o.d = function (e, t, n) {
      o.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (o.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, t) {
      if ((1 & t && (e = o(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (o.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          o.d(
            n,
            r,
            function (t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (o.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return o.d(t, "a", t), t;
    }),
    (o.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (o.p = "");
  var c = (window.webpackJsonp = window.webpackJsonp || []),
    u = c.push.bind(c);
  (c.push = t), (c = c.slice());
  for (var i = 0; i < c.length; i++) t(c[i]);
  var f = u;
  l.push([341, 1]), n();
})({
  335: function (e, t, n) {},
  340: function (e, t, n) {},
  341: function (e, t, n) {
    "use strict";
    n.r(t);
    n(139);
    var r = n(1),
      a = n.n(r),
      l = n(136),
      o = n(44),
      c = n(8),
      u = n(137);
    function i(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
          (r = r.filter(function (t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable;
          })),
          n.push.apply(n, r);
      }
      return n;
    }
    function f(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {};
        t % 2
          ? i(Object(n), !0).forEach(function (t) {
              p(e, t, n[t]);
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
          : i(Object(n)).forEach(function (t) {
              Object.defineProperty(
                e,
                t,
                Object.getOwnPropertyDescriptor(n, t)
              );
            });
      }
      return e;
    }
    function p(e, t, n) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = n),
        e
      );
    }
    var s = function (e) {
        var t = e.className,
          n = e.inlineStyles,
          r = e.src,
          l = e.height,
          o = e.width,
          c = e.allow,
          i = e.allowFullScreen,
          p = e.isVideo,
          s = e.title;
        return a.a.createElement(
          "div",
          {
            className: Object(u.cx)(
              m.container,
              t,
              p && "video",
              "iframeComponentBundle"
            ),
          },
          a.a.createElement("iframe", {
            className: "iframe",
            allow: c,
            src: r,
            style: f({}, n),
            height: l,
            width: o,
            allowFullScreen: i,
            title: s,
          })
        );
      },
      m = { container: "cjkbwox" };
    n(335);
    var b = function (e) {
        return a.a.createElement(s, e);
      },
      d = function () {
        return a.a.createElement(
          "div",
          { style: { height: "1000px" } },
          a.a.createElement(
            "div",
            { className: v.app },
            a.a.createElement(
              o.a,
              null,
              a.a.createElement(
                "div",
                null,
                a.a.createElement(
                  "nav",
                  null,
                  a.a.createElement(
                    "ul",
                    null,
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(o.b, { to: "/" }, "Home")
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(o.b, { to: "/about" }, "About")
                    ),
                    a.a.createElement(
                      "li",
                      null,
                      a.a.createElement(o.b, { to: "/users" }, "Users")
                    )
                  )
                ),
                a.a.createElement(
                  c.c,
                  null,
                  a.a.createElement(
                    c.a,
                    { path: "/about" },
                    a.a.createElement(y, null)
                  ),
                  a.a.createElement(
                    c.a,
                    { path: "/users" },
                    a.a.createElement(E, null)
                  ),
                  a.a.createElement(
                    c.a,
                    { path: "/" },
                    a.a.createElement(h, null)
                  )
                )
              )
            )
          )
        );
      };
    function h() {
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement("h1", null, "video"),
        a.a.createElement(b, {
          src: "https://www.youtube.com/embed/XHQBiozafb0",
        })
      );
    }
    function y() {
      return a.a.createElement(
        a.a.Fragment,
        null,
        a.a.createElement("h1", null, "About")
      );
    }
    function E() {
      return a.a.createElement("h2", null, "Users");
    }
    var v = { app: "a16lghq5" };
    n(340);
    var O,
      g = function () {
        return a.a.createElement(o.a, null, a.a.createElement(d, null));
      };
    (O = document.getElementById("app")),
      Object(l.hydrateRoot)(O, a.a.createElement(g, null));
  },
});
