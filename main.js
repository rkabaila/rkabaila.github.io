!function(e){function t(t){for(var n,o,l=t[0],i=t[1],c=t[2],f=0,p=[];f<l.length;f++)o=l[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(s&&s(t);p.length;)p.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(u.splice(t--,1),e=l(l.s=r[0]))}return e}var n={},o={0:0},a={0:0},u=[];function l(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.e=function(e){var t=[];o[e]?t.push(o[e]):0!==o[e]&&{2:1}[e]&&t.push(o[e]=new Promise((function(t,r){for(var n=({}[e]||e)+".1200c7ff43e8b9d5a679.css",a=l.p+n,u=document.getElementsByTagName("link"),i=0;i<u.length;i++){var c=(s=u[i]).getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(c===n||c===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){var s;if((c=(s=f[i]).getAttribute("data-href"))===n||c===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete o[e],p.parentNode.removeChild(p),r(u)},p.href=a,document.getElementsByTagName("head")[0].appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,l.nc&&i.setAttribute("nonce",l.nc),i.src=function(e){return l.p+""+({}[e]||e)+".js"}(e);var c=new Error;u=function(t){i.onerror=i.onload=null,clearTimeout(f);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",c.name="ChunkLoadError",c.type=n,c.request=o,r[1](c)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(t)},l.m=e,l.c=n,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)l.d(r,n,function(t){return e[t]}.bind(null,n));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var s=c;u.push([330,1]),r()}({330:function(e,t,r){"use strict";r.r(t);r(132);var n,o=r(1),a=r.n(o),u=r(129),l=r(131),i=a.a.lazy((function(){return r.e(2).then(r.bind(null,335))})),c=function(e){return a.a.createElement(o.Suspense,{fallback:null},a.a.createElement(i,e))},f=function(){return a.a.createElement("div",{style:{height:"500px"}},a.a.createElement("h1",null,"video"),a.a.createElement(c,{src:"https://www.youtube.com/embed/XHQBiozafb0"}))},s=function(){return a.a.createElement(l.a,null,a.a.createElement(f,null))};n=document.getElementById("app"),Object(u.hydrateRoot)(n,a.a.createElement(s,null))}});