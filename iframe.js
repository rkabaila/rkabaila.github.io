!(function (e, o) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = o())
    : "function" == typeof define && define.amd
    ? define([], o)
    : "object" == typeof exports
    ? (exports.libpack = o())
    : (e.libpack = o());
})(self, () =>
  (() => {
    "use strict";
    var e = {
        d: (o, t) => {
          for (var r in t)
            e.o(t, r) &&
              !e.o(o, r) &&
              Object.defineProperty(o, r, { enumerable: !0, get: t[r] });
        },
        o: (e, o) => Object.prototype.hasOwnProperty.call(e, o),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      o = {};
    e.r(o), e.d(o, { renderComponent: () => t });
    const t = (e) => {
      const o = document.createElement("iframe");
      (o.src = "https://www.youtube.com/embed/XHQBiozafb0"), e.appendChild(o);
    };
    return o;
  })()
);
