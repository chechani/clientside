/*!
 2022 Jason Mulligan <jason.mulligan@avoidwork.com>
 @version 9.0.11
*/
!(function (i, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((i =
        "undefined" != typeof globalThis ? globalThis : i || self).filesize =
        t());
})(this, function () {
  "use strict";
  function i(t) {
    return (
      (i =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (i) {
              return typeof i;
            }
          : function (i) {
              return i &&
                "function" == typeof Symbol &&
                i.constructor === Symbol &&
                i !== Symbol.prototype
                ? "symbol"
                : typeof i;
            }),
      i(t)
    );
  }
  var t = "array",
    o = "bits",
    e = "byte",
    n = "bytes",
    r = "",
    b = "exponent",
    l = "function",
    a = "iec",
    d = "Invalid number",
    f = "Invalid rounding method",
    u = "jedec",
    s = "object",
    c = ".",
    p = "round",
    y = "kbit",
    m = "string",
    v = {
      symbol: {
        iec: {
          bits: [
            "bit",
            "Kibit",
            "Mibit",
            "Gibit",
            "Tibit",
            "Pibit",
            "Eibit",
            "Zibit",
            "Yibit",
          ],
          bytes: ["B", "KiB", "MiB", "GiB", "TiB", "PiB", "EiB", "ZiB", "YiB"],
        },
        jedec: {
          bits: [
            "bit",
            "Kbit",
            "Mbit",
            "Gbit",
            "Tbit",
            "Pbit",
            "Ebit",
            "Zbit",
            "Ybit",
          ],
          bytes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
        },
      },
      fullform: {
        iec: [
          "",
          "kibi",
          "mebi",
          "gibi",
          "tebi",
          "pebi",
          "exbi",
          "zebi",
          "yobi",
        ],
        jedec: [
          "",
          "kilo",
          "mega",
          "giga",
          "tera",
          "peta",
          "exa",
          "zetta",
          "yotta",
        ],
      },
    };
  function g(g) {
    var h = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      B = h.bits,
      M = void 0 !== B && B,
      S = h.pad,
      T = void 0 !== S && S,
      w = h.base,
      x = void 0 === w ? -1 : w,
      E = h.round,
      j = void 0 === E ? 2 : E,
      N = h.locale,
      P = void 0 === N ? r : N,
      k = h.localeOptions,
      G = void 0 === k ? {} : k,
      K = h.separator,
      Y = void 0 === K ? r : K,
      Z = h.spacer,
      z = void 0 === Z ? " " : Z,
      I = h.symbols,
      L = void 0 === I ? {} : I,
      O = h.standard,
      q = void 0 === O ? r : O,
      A = h.output,
      C = void 0 === A ? m : A,
      D = h.fullform,
      F = void 0 !== D && D,
      H = h.fullforms,
      J = void 0 === H ? [] : H,
      Q = h.exponent,
      R = void 0 === Q ? -1 : Q,
      U = h.roundingMethod,
      V = void 0 === U ? p : U,
      W = h.precision,
      X = void 0 === W ? 0 : W,
      $ = R,
      _ = Number(g),
      ii = [],
      ti = 0,
      oi = r;
    -1 === x && 0 === q.length
      ? ((x = 10), (q = u))
      : -1 === x && q.length > 0
      ? (x = (q = q === a ? a : u) === a ? 2 : 10)
      : (q = 10 === (x = 2 === x ? 2 : 10) || q === u ? u : a);
    var ei = 10 === x ? 1e3 : 1024,
      ni = !0 === F,
      ri = _ < 0,
      bi = Math[V];
    if (isNaN(g)) throw new TypeError(d);
    if (i(bi) !== l) throw new TypeError(f);
    if (
      (ri && (_ = -_),
      (-1 === $ || isNaN($)) &&
        ($ = Math.floor(Math.log(_) / Math.log(ei))) < 0 &&
        ($ = 0),
      $ > 8 && (X > 0 && (X += 8 - $), ($ = 8)),
      C === b)
    )
      return $;
    if (0 === _) (ii[0] = 0), (oi = ii[1] = v.symbol[q][M ? o : n][$]);
    else {
      (ti = _ / (2 === x ? Math.pow(2, 10 * $) : Math.pow(1e3, $))),
        M && (ti *= 8) >= ei && $ < 8 && ((ti /= ei), $++);
      var li = Math.pow(10, $ > 0 ? j : 0);
      (ii[0] = bi(ti * li) / li),
        ii[0] === ei && $ < 8 && -1 === R && ((ii[0] = 1), $++),
        (oi = ii[1] =
          10 === x && 1 === $ ? (M ? y : "kB") : v.symbol[q][M ? o : n][$]);
    }
    if (
      (ri && (ii[0] = -ii[0]),
      X > 0 && (ii[0] = ii[0].toPrecision(X)),
      (ii[1] = L[ii[1]] || ii[1]),
      !0 === P
        ? (ii[0] = ii[0].toLocaleString())
        : P.length > 0
        ? (ii[0] = ii[0].toLocaleString(P, G))
        : Y.length > 0 && (ii[0] = ii[0].toString().replace(c, Y)),
      T && !1 === Number.isInteger(ii[0]) && j > 0)
    ) {
      var ai = Y || c,
        di = ii[0].toString().split(ai),
        fi = di[1] || r,
        ui = fi.length,
        si = j - ui;
      ii[0] = ""
        .concat(di[0])
        .concat(ai)
        .concat(fi.padEnd(ui + si, "0"));
    }
    return (
      ni &&
        (ii[1] = J[$]
          ? J[$]
          : v.fullform[q][$] + (M ? "bit" : e) + (1 === ii[0] ? r : "s")),
      C === t
        ? ii
        : C === s
        ? { value: ii[0], symbol: ii[1], exponent: $, unit: oi }
        : ii.join(z)
    );
  }
  return (
    (g.partial = function (i) {
      return function (t) {
        return g(t, i);
      };
    }),
    g
  );
});
//# sourceMappingURL=filesize.min.js.map
