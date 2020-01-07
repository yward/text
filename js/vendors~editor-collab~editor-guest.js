(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["vendors~editor-collab~editor-guest"],{

/***/ "./node_modules/@nextcloud/vue/dist/Components/Avatar.js":
/*!***************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/Avatar.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(A,t){ true?module.exports=t():undefined}(window,function(){return function(A){var t={};function e(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return A[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}return e.m=A,e.c=t,e.d=function(A,t,n){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:n})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var a in A)e.d(n,a,function(t){return A[t]}.bind(null,a));return n},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/dist/",e(e.s=47)}([function(A,t,e){"use strict";function n(A,t,e,n,a,i,o,r){var c,s="function"==typeof A?A.options:A;if(t&&(s.render=t,s.staticRenderFns=e,s._compiled=!0),n&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),o?(c=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),a&&a.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(o)},s._ssrRegister=c):a&&(c=r?function(){a.call(this,this.$root.$options.shadowRoot)}:a),c)if(s.functional){s._injectStyles=c;var d=s.render;s.render=function(A,t){return c.call(t),d(A,t)}}else{var l=s.beforeCreate;s.beforeCreate=l?[].concat(l,c):[c]}return{exports:A,options:s}}e.d(t,"a",function(){return n})},function(A,t,e){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map(function(t){var e=function(A,t){var e=A[1]||"",n=A[3];if(!n)return e;if(t&&"function"==typeof btoa){var a=(o=n,r=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(c," */")),i=n.sources.map(function(A){return"/*# sourceURL=".concat(n.sourceRoot).concat(A," */")});return[e].concat(i).concat([a]).join("\n")}var o,r,c;return[e].join("\n")}(t,A);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},t.i=function(A,e){"string"==typeof A&&(A=[[null,A,""]]);for(var n=0;n<A.length;n++){var a=[].concat(A[n]);e&&(a[2]?a[2]="".concat(e," and ").concat(a[2]):a[2]=e),t.push(a)}},t}},function(A,t,e){"use strict";function n(A,t){for(var e=[],n={},a=0;a<t.length;a++){var i=t[a],o=i[0],r={id:A+":"+a,css:i[1],media:i[2],sourceMap:i[3]};n[o]?n[o].parts.push(r):e.push(n[o]={id:o,parts:[r]})}return e}e.r(t),e.d(t,"default",function(){return f});var a="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!a)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},o=a&&(document.head||document.getElementsByTagName("head")[0]),r=null,c=0,s=!1,d=function(){},l=null,u="data-vue-ssr-id",g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function f(A,t,e,a){s=e,l=a||{};var o=n(A,t);return p(o),function(t){for(var e=[],a=0;a<o.length;a++){var r=o[a];(c=i[r.id]).refs--,e.push(c)}t?p(o=n(A,t)):o=[];for(a=0;a<e.length;a++){var c;if(0===(c=e[a]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}}function p(A){for(var t=0;t<A.length;t++){var e=A[t],n=i[e.id];if(n){n.refs++;for(var a=0;a<n.parts.length;a++)n.parts[a](e.parts[a]);for(;a<e.parts.length;a++)n.parts.push(v(e.parts[a]));n.parts.length>e.parts.length&&(n.parts.length=e.parts.length)}else{var o=[];for(a=0;a<e.parts.length;a++)o.push(v(e.parts[a]));i[e.id]={id:e.id,refs:1,parts:o}}}}function m(){var A=document.createElement("style");return A.type="text/css",o.appendChild(A),A}function v(A){var t,e,n=document.querySelector("style["+u+'~="'+A.id+'"]');if(n){if(s)return d;n.parentNode.removeChild(n)}if(g){var a=c++;n=r||(r=m()),t=B.bind(null,n,a,!1),e=B.bind(null,n,a,!0)}else n=m(),t=function(A,t){var e=t.css,n=t.media,a=t.sourceMap;n&&A.setAttribute("media",n);l.ssrId&&A.setAttribute(u,t.id);a&&(e+="\n/*# sourceURL="+a.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");if(A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}.bind(null,n),e=function(){n.parentNode.removeChild(n)};return t(A),function(n){if(n){if(n.css===A.css&&n.media===A.media&&n.sourceMap===A.sourceMap)return;t(A=n)}else e()}}var b,M=(b=[],function(A,t){return b[A]=t,b.filter(Boolean).join("\n")});function B(A,t,e,n){var a=e?"":n.css;if(A.styleSheet)A.styleSheet.cssText=M(t,a);else{var i=document.createTextNode(a),o=A.childNodes;o[t]&&A.removeChild(o[t]),o.length?A.insertBefore(i,o[t]):A.appendChild(i)}}},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js")},function(A,t){A.exports=__webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js")},,,function(A,t,e){"use strict";A.exports=function(A,t){return t||(t={}),"string"!=typeof(A=A&&A.__esModule?A.default:A)?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),t.hash&&(A+=t.hash),/["'() \t\n]/.test(A)||t.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},function(A,t,e){"use strict";e.r(t),t.default="data:application/vnd.ms-fontobject;base64,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"},function(A,t,e){"use strict";e.r(t),t.default="data:font/woff;base64,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"},function(A,t,e){"use strict";e.r(t),t.default="data:font/ttf;base64,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"},function(A,t,e){"use strict";e.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLTIxYzM1MmEiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtMjFjMzUyYSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA0ODQ0IiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwYyIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDU7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNOTM4IDMxMjUgcS0xMjggMCAtMjQ0IC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzMy41IC0xOTguNSBxLTUwIC0xMTYgLTQ5LjUgLTI0MyBxMC41IC0xMjcgNDkuNSAtMjQzIHE0NyAtMTEyIDEzMy41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzLjUgLTQ5IHExMjcuNSAwIDI0My41IDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzMuNSAxOTguNSBxNTAgMTE2IDUwIDI0MyBxMCAxMjcgLTUwIDI0MyBxLTQ3IDExMiAtMTMzLjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWk0yNTAwIDMxMjUgcS0xMjcgMCAtMjQzIC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzNC41IC0xOTguNSBxLTQ5IC0xMTYgLTQ5IC0yNDMgcTAgLTEyNyA0OSAtMjQzIHE0OCAtMTEyIDEzNC41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzIC00OSBxMTI3IDAgMjQzIDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzQuNSAxOTguNSBxNDkgMTE2IDQ5IDI0MyBxMCAxMjcgLTQ5IDI0MyBxLTQ4IDExMiAtMTM0LjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWk00MDYzIDMxMjUgcS0xMjggMCAtMjQ0IC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzMy41IC0xOTguNSBxLTQ5IC0xMTYgLTQ5IC0yNDMgcTAgLTEyNyA0OSAtMjQzIHE0NyAtMTEyIDEzMy41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzLjUgLTQ5IHExMjcuNSAwIDI0My41IDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzMuNSAxOTguNSBxNTAgMTE2IDUwIDI0MyBxMCAxMjcgLTUwIDI0MyBxLTQ3IDExMiAtMTMzLjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="},function(A,t,e){"use strict";e.r(t);var n=e(4);e(36);
/**
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
n.VTooltip.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("21c352a",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),n.VTooltip.options.defaultHtml=!1,t.default=n.VTooltip},,function(A,t){A.exports=__webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js")},,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js")},,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js")},function(A,t,e){var n=e(63);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(2).default)("6d914181",n,!0,{})},function(A,t,e){var n=e(65);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(2).default)("2fc216d3",n,!0,{})},function(A,t,e){var n=e(67);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(2).default)("b619cfa6",n,!0,{})},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js")},,function(A,t,e){var n=e(79);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(2).default)("2e0dfa0c",n,!0,{})},function(A,t){},,,,function(A,t,e){var n=e(37);"string"==typeof n&&(n=[[A.i,n,""]]),n.locals&&(A.exports=n.locals);(0,e(2).default)("941c791e",n,!0,{})},function(A,t,e){var n=e(1);(A.exports=n(!1)).push([A.i,".vue-tooltip[data-v-21c352a]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-21c352a][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-21c352a][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-21c352a][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-21c352a] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-21c352a] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n",""])},,,function(A,t,e){"use strict";e(25),e(43);
/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
function n(A,t,e){this.r=A,this.g=t,this.b=e}function a(A,t,e){var a=[];a.push(t);for(var i=function(A,t){var e=new Array(3);return e[0]=(t[1].r-t[0].r)/A,e[1]=(t[1].g-t[0].g)/A,e[2]=(t[1].b-t[0].b)/A,e}(A,[t,e]),o=1;o<A;o++){var r=parseInt(t.r+i[0]*o,10),c=parseInt(t.g+i[1]*o,10),s=parseInt(t.b+i[2]*o,10);a.push(new n(r,c,s))}return a}t.a=function(A){A||(A=6);var t=new n(182,70,157),e=new n(221,203,85),i=new n(0,130,201),o=a(A,t,e),r=a(A,e,i),c=a(A,i,t);return o.concat(r).concat(c)}},,function(A,t){},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js")},function(A,t,e){"use strict";e.r(t);e(18),e(15),e(3),e(19),e(16),e(17),e(22);var n={name:"PopoverMenuItem",props:{item:{type:Object,required:!0,default:function(){return{key:"nextcloud-link",href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}},validator:function(A){return!A.input||-1!==["text","checkbox"].indexOf(A.input)}}},computed:{key:function(){return this.item.key?this.item.key:Math.round(16*Math.random()*1e6).toString(16)},iconIsUrl:function(){try{return new URL(this.item.icon),!0}catch(A){return!1}}},methods:{action:function(A){this.item.action&&this.item.action(A)}}},a=(e(62),e(64),e(0)),i={name:"PopoverMenu",components:{PopoverMenuItem:Object(a.a)(n,function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("li",[A.item.href?e("a",{staticClass:"focusable",attrs:{href:A.item.href?A.item.href:"#",target:A.item.target?A.item.target:"",download:A.item.download,rel:"noreferrer noopener"},on:{click:A.action}},[A.iconIsUrl?e("img",{attrs:{src:A.item.icon}}):e("span",{class:A.item.icon}),A._v(" "),A.item.text&&A.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[A._v("\n\t\t\t\t"+A._s(A.item.text)+"\n\t\t\t")]),e("br"),A._v(" "),e("span",{staticClass:"menuitem-text-detail"},[A._v("\n\t\t\t\t"+A._s(A.item.longtext)+"\n\t\t\t")])]):A.item.text?e("span",[A._v("\n\t\t\t"+A._s(A.item.text)+"\n\t\t")]):A.item.longtext?e("p",[A._v("\n\t\t\t"+A._s(A.item.longtext)+"\n\t\t")]):A._e()]):A.item.input?e("span",{staticClass:"menuitem",class:{active:A.item.active}},["checkbox"!==A.item.input?e("span",{class:A.item.icon}):A._e(),A._v(" "),"text"===A.item.input?e("form",{class:A.item.input,on:{submit:function(t){return t.preventDefault(),A.item.action(t)}}},[e("input",{attrs:{type:A.item.input,placeholder:A.item.text,required:""},domProps:{value:A.item.value}}),A._v(" "),e("input",{staticClass:"icon-confirm",attrs:{type:"submit",value:""}})]):["checkbox"===A.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:A.item.model,expression:"item.model"}],class:A.item.input,attrs:{id:A.key,type:"checkbox"},domProps:{checked:Array.isArray(A.item.model)?A._i(A.item.model,null)>-1:A.item.model},on:{change:[function(t){var e=A.item.model,n=t.target,a=!!n.checked;if(Array.isArray(e)){var i=A._i(e,null);n.checked?i<0&&A.$set(A.item,"model",e.concat([null])):i>-1&&A.$set(A.item,"model",e.slice(0,i).concat(e.slice(i+1)))}else A.$set(A.item,"model",a)},A.item.action]}}):"radio"===A.item.input?e("input",{directives:[{name:"model",rawName:"v-model",value:A.item.model,expression:"item.model"}],class:A.item.input,attrs:{id:A.key,type:"radio"},domProps:{checked:A._q(A.item.model,null)},on:{change:[function(t){return A.$set(A.item,"model",null)},A.item.action]}}):e("input",{directives:[{name:"model",rawName:"v-model",value:A.item.model,expression:"item.model"}],class:A.item.input,attrs:{id:A.key,type:A.item.input},domProps:{value:A.item.model},on:{change:A.item.action,input:function(t){t.target.composing||A.$set(A.item,"model",t.target.value)}}}),A._v(" "),e("label",{attrs:{for:A.key},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),A.item.action(t)}}},[A._v("\n\t\t\t\t"+A._s(A.item.text)+"\n\t\t\t")])]],2):A.item.action?e("button",{staticClass:"menuitem focusable",class:{active:A.item.active},attrs:{disabled:A.item.disabled},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),A.item.action(t)}}},[e("span",{class:A.item.icon}),A._v(" "),A.item.text&&A.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[A._v("\n\t\t\t\t"+A._s(A.item.text)+"\n\t\t\t")]),e("br"),A._v(" "),e("span",{staticClass:"menuitem-text-detail"},[A._v("\n\t\t\t\t"+A._s(A.item.longtext)+"\n\t\t\t")])]):A.item.text?e("span",[A._v("\n\t\t\t"+A._s(A.item.text)+"\n\t\t")]):A.item.longtext?e("p",[A._v("\n\t\t\t"+A._s(A.item.longtext)+"\n\t\t")]):A._e()]):e("span",{staticClass:"menuitem",class:{active:A.item.active}},[e("span",{class:A.item.icon}),A._v(" "),A.item.text&&A.item.longtext?e("p",[e("strong",{staticClass:"menuitem-text"},[A._v("\n\t\t\t\t"+A._s(A.item.text)+"\n\t\t\t")]),e("br"),A._v(" "),e("span",{staticClass:"menuitem-text-detail"},[A._v("\n\t\t\t\t"+A._s(A.item.longtext)+"\n\t\t\t")])]):A.item.text?e("span",[A._v("\n\t\t\t"+A._s(A.item.text)+"\n\t\t")]):A.item.longtext?e("p",[A._v("\n\t\t\t"+A._s(A.item.longtext)+"\n\t\t")]):A._e()])])},[],!1,null,"8dc4efb0",null).exports},props:{menu:{type:Array,default:function(){return[{href:"https://nextcloud.com",icon:"icon-links",text:"Nextcloud"}]},required:!0}}},o=(e(66),e(32)),r=e.n(o),c=Object(a.a)(i,function(){var A=this.$createElement,t=this._self._c||A;return t("ul",this._l(this.menu,function(A,e){return t("PopoverMenuItem",{key:e,attrs:{item:A}})}),1)},[],!1,null,"769d0d8a",null);"function"==typeof r.a&&r()(c);var s=c.exports;e.d(t,"PopoverMenu",function(){return s});
/**
 * @copyright Copyright (c) 2018 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.default=s},function(A,t){A.exports=__webpack_require__(/*! @nextcloud/axios */ "./node_modules/@nextcloud/axios/dist/client.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.map */ "./node_modules/core-js/modules/es.array.map.js")},function(A,t,e){"use strict";e.r(t);e(25),e(61),e(46),e(29),e(3),e(59),e(60);var n=e(14),a=e(44),i=e(45),o=e.n(i),r=e(12),c=(e(43),e(77),e(20),e(57)),s=e.n(c),d=e(40),l=function(A){var t=A.toLowerCase();null===t.match(/^([0-9a-f]{4}-?){8}$/)&&(t=s()(t)),t=t.replace(/[^0-9a-f]/g,"");return Object(d.a)(6)[function(A,t){for(var e=0,n=[],a=0;a<A.length;a++)n.push(parseInt(A.charAt(a),16)%16);for(var i in n)e+=n[i];return parseInt(parseInt(e,10)%t,10)}(t,18)]},u={name:"Avatar",directives:{tooltip:r.default,ClickOutside:n.directive},components:{PopoverMenu:a.PopoverMenu},props:{url:{type:String,default:void 0},iconClass:{type:String,default:void 0},user:{type:String,default:void 0},isGuest:{type:Boolean,default:!1},displayName:{type:String,default:void 0},size:{type:Number,default:32},allowPlaceholder:{type:Boolean,default:!0},disableTooltip:{type:Boolean,default:!1},disableMenu:{type:Boolean,default:!1},tooltipMessage:{type:String,default:null},isNoUser:{type:Boolean,default:!1},status:{type:String,default:null,validator:function(A){switch(A){case"positive":case"negative":case"neutral":return!0}return!1}},statusColor:{type:[Number,String],default:null,validator:function(A){return/^([a-f0-9]{3}){1,2}$/i.test(A)}}},data:function(){return{avatarUrlLoaded:null,avatarSrcSetLoaded:null,userDoesNotExist:!1,isAvatarLoaded:!1,isMenuLoaded:!1,contactsMenuActions:[],contactsMenuOpenState:!1}},computed:{getUserIdentifier:function(){return this.isDisplayNameDefined?this.displayName:this.isUserDefined?this.user:""},isUserDefined:function(){return void 0!==this.user},isDisplayNameDefined:function(){return void 0!==this.displayName},isUrlDefined:function(){return void 0!==this.url},hasMenu:function(){return!this.disableMenu&&(this.isMenuLoaded?this.menu.length>0:!(this.user===OC.getCurrentUser().uid||this.userDoesNotExist||this.url))},shouldShowPlaceholder:function(){return this.allowPlaceholder&&this.userDoesNotExist},avatarStyle:function(){var A={width:this.size+"px",height:this.size+"px",lineHeight:this.size+"px",fontSize:Math.round(.55*this.size)+"px"};if(!this.iconClass&&!this.avatarSrcSetLoaded){var t=l(this.getUserIdentifier);A.backgroundColor="rgb("+t.r+", "+t.g+", "+t.b+")"}return A},tooltip:function(){return!this.disableTooltip&&(this.tooltipMessage?this.tooltipMessage:this.displayName)},initials:function(){return this.shouldShowPlaceholder?this.getUserIdentifier.charAt(0).toUpperCase():"?"},menu:function(){return this.contactsMenuActions.map(function(A){return{href:A.hyperlink,icon:A.icon,text:A.title}})}},watch:{url:function(){this.userDoesNotExist=!1,this.loadAvatarUrl()},user:function(){this.userDoesNotExist=!1,this.isMenuLoaded=!1,this.loadAvatarUrl()}},mounted:function(){this.loadAvatarUrl()},methods:{toggleMenu:function(){this.hasMenu&&(this.contactsMenuOpenState=!this.contactsMenuOpenState,this.contactsMenuOpenState&&this.fetchContactsMenu())},closeMenu:function(){this.contactsMenuOpenState=!1},fetchContactsMenu:function(){var A,t,e;return regeneratorRuntime.async(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,A=encodeURIComponent(this.user),n.next=4,regeneratorRuntime.awrap(o.a.post(OC.generateUrl("contactsmenu/findOne"),"shareType=0&shareWith=".concat(A)));case 4:t=n.sent,e=t.data,this.contactsMenuActions=[e.topAction].concat(e.actions),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),this.contactsMenuOpenState=!1;case 12:this.isMenuLoaded=!0;case 13:case"end":return n.stop()}},null,this,[[0,9]])},loadAvatarUrl:function(){var A=this;if(this.isAvatarLoaded=!1,!this.isUrlDefined&&(!this.isUserDefined||this.isNoUser))return this.isAvatarLoaded=!0,void(this.userDoesNotExist=!0);var t=function(t,e){var n="/avatar/{user}/{size}";A.isGuest&&(n="/avatar/guest/{user}/{size}");var a=OC.generateUrl(n,{user:t,size:e});return t===OC.getCurrentUser().uid&&"undefined"!=typeof oc_userconfig&&(a+="?v="+oc_userconfig.avatar.version),a},e=t(this.user,this.size);this.isUrlDefined&&(e=this.url);var n=[e+" 1x",t(this.user,2*this.size)+" 2x",t(this.user,4*this.size)+" 4x"].join(", "),a=new Image;a.onload=function(){A.avatarUrlLoaded=e,A.isUrlDefined||(A.avatarSrcSetLoaded=n),A.isAvatarLoaded=!0},a.onerror=function(){A.userDoesNotExist=!0,A.isAvatarLoaded=!0},this.isUrlDefined||(a.srcset=n),a.src=e}}},g=(e(78),e(0)),f=e(42),p=e.n(f),m=Object(g.a)(u,function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("div",{directives:[{name:"tooltip",rawName:"v-tooltip",value:A.tooltip,expression:"tooltip"},{name:"click-outside",rawName:"v-click-outside",value:A.closeMenu,expression:"closeMenu"}],staticClass:"avatardiv popovermenu-wrapper",class:{"icon-loading":!A.isAvatarLoaded&&A.size>16,"icon-loading-small":!A.isAvatarLoaded&&A.size<=16,"avatardiv--unknown":A.userDoesNotExist,"avatardiv--with-menu":A.hasMenu},style:A.avatarStyle,on:{click:A.toggleMenu}},[A.iconClass?e("div",{staticClass:"avatar-class-icon",class:A.iconClass}):A.isAvatarLoaded&&!A.userDoesNotExist?e("img",{attrs:{src:A.avatarUrlLoaded,srcset:A.avatarSrcSetLoaded}}):A._e(),A._v(" "),A.hasMenu?e("div",{staticClass:"icon-more"}):A._e(),A._v(" "),A.status?e("div",{staticClass:"avatardiv__status",class:"avatardiv__status--"+A.status,style:{backgroundColor:"#"+A.statusColor}},["neutral"===A.status?e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"11",viewBox:"0 0 3.175 2.91"}},[e("path",{style:{fill:"#"+A.statusColor},attrs:{d:"M3.21 3.043H.494l.679-1.177.68-1.176.678 1.176z",stroke:"#fff","stroke-width":".265","stroke-linecap":"square"}})]):A._e()]):A._e(),A._v(" "),A.userDoesNotExist?e("div",{staticClass:"unknown"},[A._v("\n\t\t"+A._s(A.initials)+"\n\t")]):A._e(),A._v(" "),A.hasMenu?e("div",{directives:[{name:"show",rawName:"v-show",value:A.contactsMenuOpenState,expression:"contactsMenuOpenState"}],staticClass:"popovermenu menu-center"},[e("PopoverMenu",{attrs:{"is-open":A.contactsMenuOpenState,menu:A.menu}})],1):A._e()])},[],!1,null,"0c4be89d",null);"function"==typeof p.a&&p()(m);var v=m.exports;e.d(t,"Avatar",function(){return v});
/**
 * @copyright Copyright (c) 2018 Julius Härtl <jus@bitgrid.net>
 *
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.default=v},,,,,,,,,,function(A,t){A.exports=__webpack_require__(/*! md5 */ "./node_modules/md5/md5.js")},,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.promise */ "./node_modules/core-js/modules/es.promise.js")},function(A,t){A.exports=__webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js")},function(A,t,e){"use strict";var n=e(26);e.n(n).a},function(A,t,e){var n=e(1);(A.exports=n(!1)).push([A.i,"\nbutton.menuitem[data-v-8dc4efb0] {\n\ttext-align: left;\n}\nbutton.menuitem *[data-v-8dc4efb0] {\n\tcursor: pointer;\n}\nbutton.menuitem[data-v-8dc4efb0]:disabled {\n\topacity: 0.5 !important;\n\tcursor: default;\n}\nbutton.menuitem:disabled *[data-v-8dc4efb0] {\n\tcursor: default;\n}\n.menuitem.active[data-v-8dc4efb0] {\n\tbox-shadow: inset 2px 0 var(--color-primary);\n\tborder-radius: 0;\n}\n",""])},function(A,t,e){"use strict";var n=e(27);e.n(n).a},function(A,t,e){var n=e(1);(A.exports=n(!1)).push([A.i,"li[data-v-8dc4efb0]{display:flex;flex:0 0 auto}li.hidden[data-v-8dc4efb0]{display:none}li>button[data-v-8dc4efb0],li>a[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]{cursor:pointer;line-height:44px;border:0;border-radius:0;background-color:transparent;display:flex;align-items:flex-start;height:auto;margin:0;padding:0;font-weight:normal;box-shadow:none;width:100%;color:var(--color-main-text);white-space:nowrap;opacity:.7}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{min-width:0;min-height:0;background-position:14px center;background-size:16px}li>button span[class^='icon-'][data-v-8dc4efb0],li>button span[class*=' icon-'][data-v-8dc4efb0],li>a span[class^='icon-'][data-v-8dc4efb0],li>a span[class*=' icon-'][data-v-8dc4efb0],li>.menuitem span[class^='icon-'][data-v-8dc4efb0],li>.menuitem span[class*=' icon-'][data-v-8dc4efb0]{padding:22px 0 22px 44px}li>button:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>button:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>a:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>span[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>input[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child,li>.menuitem:not([class^='icon-']):not([class*='icon-'])>form[data-v-8dc4efb0]:not([class^='icon-']):not([class*='icon-']):first-child{margin-left:44px}li>button[class^='icon-'][data-v-8dc4efb0],li>button[class*=' icon-'][data-v-8dc4efb0],li>a[class^='icon-'][data-v-8dc4efb0],li>a[class*=' icon-'][data-v-8dc4efb0],li>.menuitem[class^='icon-'][data-v-8dc4efb0],li>.menuitem[class*=' icon-'][data-v-8dc4efb0]{padding:0 14px 0 44px}li>button[data-v-8dc4efb0]:not(:disabled):hover,li>button[data-v-8dc4efb0]:not(:disabled):focus,li>button:not(:disabled).active[data-v-8dc4efb0],li>a[data-v-8dc4efb0]:not(:disabled):hover,li>a[data-v-8dc4efb0]:not(:disabled):focus,li>a:not(:disabled).active[data-v-8dc4efb0],li>.menuitem[data-v-8dc4efb0]:not(:disabled):hover,li>.menuitem[data-v-8dc4efb0]:not(:disabled):focus,li>.menuitem:not(:disabled).active[data-v-8dc4efb0]{opacity:1 !important}li>button.action[data-v-8dc4efb0],li>a.action[data-v-8dc4efb0],li>.menuitem.action[data-v-8dc4efb0]{padding:inherit !important}li>button>span[data-v-8dc4efb0],li>a>span[data-v-8dc4efb0],li>.menuitem>span[data-v-8dc4efb0]{cursor:pointer;white-space:nowrap}li>button>p[data-v-8dc4efb0],li>a>p[data-v-8dc4efb0],li>.menuitem>p[data-v-8dc4efb0]{width:150px;line-height:1.6em;padding:8px 0;white-space:normal}li>button>select[data-v-8dc4efb0],li>a>select[data-v-8dc4efb0],li>.menuitem>select[data-v-8dc4efb0]{margin:0;margin-left:6px}li>button[data-v-8dc4efb0]:not(:empty),li>a[data-v-8dc4efb0]:not(:empty),li>.menuitem[data-v-8dc4efb0]:not(:empty){padding-right:14px !important}li>button>img[data-v-8dc4efb0],li>a>img[data-v-8dc4efb0],li>.menuitem>img[data-v-8dc4efb0]{width:16px;padding:14px}li>button>input.radio+label[data-v-8dc4efb0],li>button>input.checkbox+label[data-v-8dc4efb0],li>a>input.radio+label[data-v-8dc4efb0],li>a>input.checkbox+label[data-v-8dc4efb0],li>.menuitem>input.radio+label[data-v-8dc4efb0],li>.menuitem>input.checkbox+label[data-v-8dc4efb0]{padding:0 !important;width:100%}li>button>input.checkbox+label[data-v-8dc4efb0]::before,li>a>input.checkbox+label[data-v-8dc4efb0]::before,li>.menuitem>input.checkbox+label[data-v-8dc4efb0]::before{margin:-2px 13px 0}li>button>input.radio+label[data-v-8dc4efb0]::before,li>a>input.radio+label[data-v-8dc4efb0]::before,li>.menuitem>input.radio+label[data-v-8dc4efb0]::before{margin:-2px 12px 0}li>button>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>a>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]),li>.menuitem>input[data-v-8dc4efb0]:not([type=radio]):not([type=checkbox]):not([type=image]){width:150px}li>button form[data-v-8dc4efb0],li>a form[data-v-8dc4efb0],li>.menuitem form[data-v-8dc4efb0]{display:flex;flex:1 1 auto}li>button form[data-v-8dc4efb0]:not(:first-child),li>a form[data-v-8dc4efb0]:not(:first-child),li>.menuitem form[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li>button>span.hidden+form[data-v-8dc4efb0],li>button>span[style*='display:none']+form[data-v-8dc4efb0],li>a>span.hidden+form[data-v-8dc4efb0],li>a>span[style*='display:none']+form[data-v-8dc4efb0],li>.menuitem>span.hidden+form[data-v-8dc4efb0],li>.menuitem>span[style*='display:none']+form[data-v-8dc4efb0]{margin-left:0}li>button input[data-v-8dc4efb0],li>a input[data-v-8dc4efb0],li>.menuitem input[data-v-8dc4efb0]{min-width:44px;max-height:40px;margin:2px 0;flex:1 1 auto}li>button input[data-v-8dc4efb0]:not(:first-child),li>a input[data-v-8dc4efb0]:not(:first-child),li>.menuitem input[data-v-8dc4efb0]:not(:first-child){margin-left:5px}li:not(.hidden):not([style*='display:none']):first-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):first-of-type>.menuitem>input[data-v-8dc4efb0]{margin-top:12px}li:not(.hidden):not([style*='display:none']):last-of-type>button>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>button>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>a>input[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>form[data-v-8dc4efb0],li:not(.hidden):not([style*='display:none']):last-of-type>.menuitem>input[data-v-8dc4efb0]{margin-bottom:12px}li>button[data-v-8dc4efb0]{padding:0}li>button span[data-v-8dc4efb0]{opacity:1}\n",""])},function(A,t,e){"use strict";var n=e(28);e.n(n).a},function(A,t,e){var n=e(1);(A.exports=n(!1)).push([A.i,"ul[data-v-769d0d8a]{display:flex;flex-direction:column}\n",""])},,,,,,,,,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js")},function(A,t,e){"use strict";var n=e(31);e.n(n).a},function(A,t,e){var n=e(1),a=e(7),i=e(8),o=e(9),r=e(10),c=e(11);t=A.exports=n(!1);var s=a(i),d=a(o),l=a(r),u=a(c);t.push([A.i,'@font-face{font-family:"iconfont-vue-21c352a";src:url('+s+");src:url("+s+') format("embedded-opentype"),url('+d+') format("woff"),url('+l+') format("truetype"),url('+u+') format("svg")}.icon[data-v-0c4be89d]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-left[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-right-double[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-right[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.checkmark[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.close[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.confirm[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.menu[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.more[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.pause[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.play[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.triangle-s[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";content:""}.avatardiv[data-v-0c4be89d]{position:relative;display:inline-block}.avatardiv--unknown[data-v-0c4be89d]{position:relative;background-color:var(--color-text-maxcontrast)}.avatardiv--with-menu[data-v-0c4be89d]{cursor:pointer}.avatardiv--with-menu .icon-more[data-v-0c4be89d]{position:absolute;top:0;left:0;display:flex;align-items:center;justify-content:center;width:inherit;height:inherit;cursor:pointer;opacity:0;background:none;font-size:18px}.avatardiv--with-menu .icon-more[data-v-0c4be89d]:before{font-family:"iconfont-vue-21c352a";font-style:normal;font-weight:400;content:""}.avatardiv--with-menu .icon-more[data-v-0c4be89d]::before{display:block}.avatardiv--with-menu:focus .icon-more[data-v-0c4be89d],.avatardiv--with-menu:hover .icon-more[data-v-0c4be89d]{opacity:1}.avatardiv--with-menu:focus img[data-v-0c4be89d],.avatardiv--with-menu:hover img[data-v-0c4be89d]{opacity:0}.avatardiv--with-menu .icon-more[data-v-0c4be89d],.avatardiv--with-menu img[data-v-0c4be89d]{transition:opacity var(--animation-quick)}.avatardiv>.unknown[data-v-0c4be89d]{position:absolute;top:0;left:0;display:block;width:100%;text-align:center;color:var(--color-main-background)}.avatardiv img[data-v-0c4be89d]{width:100%;height:100%}.avatardiv .avatardiv__status[data-v-0c4be89d]{position:absolute;top:22px;left:22px;width:10px;height:10px;border:1px solid rgba(255,255,255,0.5);background-clip:content-box}.avatardiv .avatardiv__status--positive[data-v-0c4be89d]{border-radius:50%;background-color:var(--color-success)}.avatardiv .avatardiv__status--negative[data-v-0c4be89d]{background-color:var(--color-error)}.avatardiv .avatardiv__status--neutral[data-v-0c4be89d]{border:none;background-color:transparent !important}.avatardiv .avatardiv__status--neutral svg[data-v-0c4be89d]{position:absolute;top:-3px;left:-2px}.avatardiv .avatardiv__status--neutral svg path[data-v-0c4be89d]{fill:#aaa}.avatardiv .popovermenu-wrapper[data-v-0c4be89d]{position:relative;display:inline-block}.avatardiv .popovermenu[data-v-0c4be89d]{display:block;margin:0;font-size:initial}.avatar-class-icon[data-v-0c4be89d]{border-radius:50%;background-color:var(--color-background-darker)}\n',""])}])});
//# sourceMappingURL=Avatar.js.map

/***/ }),

/***/ "./node_modules/charenc/charenc.js":
/*!*****************************************!*\
  !*** ./node_modules/charenc/charenc.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var charenc = {
  // UTF-8 encoding
  utf8: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      return charenc.bin.stringToBytes(unescape(encodeURIComponent(str)));
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      return decodeURIComponent(escape(charenc.bin.bytesToString(bytes)));
    }
  },

  // Binary encoding
  bin: {
    // Convert a string to a byte array
    stringToBytes: function(str) {
      for (var bytes = [], i = 0; i < str.length; i++)
        bytes.push(str.charCodeAt(i) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a string
    bytesToString: function(bytes) {
      for (var str = [], i = 0; i < bytes.length; i++)
        str.push(String.fromCharCode(bytes[i]));
      return str.join('');
    }
  }
};

module.exports = charenc;


/***/ }),

/***/ "./node_modules/core-js/internals/host-report-errors.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/host-report-errors.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-ios.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/is-ios.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__(/*! ../internals/user-agent */ "./node_modules/core-js/internals/user-agent.js");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "./node_modules/core-js/internals/microtask.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/microtask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var macrotask = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var IS_IOS = __webpack_require__(/*! ../internals/is-ios */ "./node_modules/core-js/internals/is-ios.js");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-promise-constructor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/native-promise-constructor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

module.exports = global.Promise;


/***/ }),

/***/ "./node_modules/core-js/internals/new-promise-capability.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/new-promise-capability.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/internals/parse-int.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/parse-int.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var nativeParseInt = global.parseInt;
var hex = /^[+-]?0[Xx]/;
var FORCED = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
module.exports = FORCED ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex.test(S) ? 16 : 10));
} : nativeParseInt;


/***/ }),

/***/ "./node_modules/core-js/internals/perform.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/perform.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/promise-resolve.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/promise-resolve.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var newPromiseCapability = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/internals/task.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/task.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var bind = __webpack_require__(/*! ../internals/bind-context */ "./node_modules/core-js/internals/bind-context.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var IS_IOS = __webpack_require__(/*! ../internals/is-ios */ "./node_modules/core-js/internals/is-ios.js");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts && !fails(post)) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.join.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.join.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var sloppyArrayMethod = __webpack_require__(/*! ../internals/sloppy-array-method */ "./node_modules/core-js/internals/sloppy-array-method.js");

var nativeJoin = [].join;

var ES3_STRINGS = IndexedObject != Object;
var SLOPPY_METHOD = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
$({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.map.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.map.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $map = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").map;
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = HAS_SPECIES_SUPPORT && !fails(function () {
  [].map.call({ length: -1, 0: 1 }, function (it) { throw it; });
});

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.number.constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/es.number.constructor.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var has = __webpack_require__(/*! ../internals/has */ "./node_modules/core-js/internals/has.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");
var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var getOwnPropertyNames = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js").f;
var getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var parseIntImplementation = __webpack_require__(/*! ../internals/parse-int */ "./node_modules/core-js/internals/parse-int.js");

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
$({ global: true, forced: parseInt != parseIntImplementation }, {
  parseInt: parseIntImplementation
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.promise.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/es.promise.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var NativePromise = __webpack_require__(/*! ../internals/native-promise-constructor */ "./node_modules/core-js/internals/native-promise-constructor.js");
var redefine = __webpack_require__(/*! ../internals/redefine */ "./node_modules/core-js/internals/redefine.js");
var redefineAll = __webpack_require__(/*! ../internals/redefine-all */ "./node_modules/core-js/internals/redefine-all.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var aFunction = __webpack_require__(/*! ../internals/a-function */ "./node_modules/core-js/internals/a-function.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var task = __webpack_require__(/*! ../internals/task */ "./node_modules/core-js/internals/task.js").set;
var microtask = __webpack_require__(/*! ../internals/microtask */ "./node_modules/core-js/internals/microtask.js");
var promiseResolve = __webpack_require__(/*! ../internals/promise-resolve */ "./node_modules/core-js/internals/promise-resolve.js");
var hostReportErrors = __webpack_require__(/*! ../internals/host-report-errors */ "./node_modules/core-js/internals/host-report-errors.js");
var newPromiseCapabilityModule = __webpack_require__(/*! ../internals/new-promise-capability */ "./node_modules/core-js/internals/new-promise-capability.js");
var perform = __webpack_require__(/*! ../internals/perform */ "./node_modules/core-js/internals/perform.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/v8-version */ "./node_modules/core-js/internals/v8-version.js");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.match.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.match.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@match logic
fixRegExpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regExpExec(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),

/***/ "./node_modules/crypt/crypt.js":
/*!*************************************!*\
  !*** ./node_modules/crypt/crypt.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() {
  var base64map
      = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',

  crypt = {
    // Bit-wise rotation left
    rotl: function(n, b) {
      return (n << b) | (n >>> (32 - b));
    },

    // Bit-wise rotation right
    rotr: function(n, b) {
      return (n << (32 - b)) | (n >>> b);
    },

    // Swap big-endian to little-endian and vice versa
    endian: function(n) {
      // If number given, swap endian
      if (n.constructor == Number) {
        return crypt.rotl(n, 8) & 0x00FF00FF | crypt.rotl(n, 24) & 0xFF00FF00;
      }

      // Else, assume array and swap all items
      for (var i = 0; i < n.length; i++)
        n[i] = crypt.endian(n[i]);
      return n;
    },

    // Generate an array of any length of random bytes
    randomBytes: function(n) {
      for (var bytes = []; n > 0; n--)
        bytes.push(Math.floor(Math.random() * 256));
      return bytes;
    },

    // Convert a byte array to big-endian 32-bit words
    bytesToWords: function(bytes) {
      for (var words = [], i = 0, b = 0; i < bytes.length; i++, b += 8)
        words[b >>> 5] |= bytes[i] << (24 - b % 32);
      return words;
    },

    // Convert big-endian 32-bit words to a byte array
    wordsToBytes: function(words) {
      for (var bytes = [], b = 0; b < words.length * 32; b += 8)
        bytes.push((words[b >>> 5] >>> (24 - b % 32)) & 0xFF);
      return bytes;
    },

    // Convert a byte array to a hex string
    bytesToHex: function(bytes) {
      for (var hex = [], i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
      }
      return hex.join('');
    },

    // Convert a hex string to a byte array
    hexToBytes: function(hex) {
      for (var bytes = [], c = 0; c < hex.length; c += 2)
        bytes.push(parseInt(hex.substr(c, 2), 16));
      return bytes;
    },

    // Convert a byte array to a base-64 string
    bytesToBase64: function(bytes) {
      for (var base64 = [], i = 0; i < bytes.length; i += 3) {
        var triplet = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
        for (var j = 0; j < 4; j++)
          if (i * 8 + j * 6 <= bytes.length * 8)
            base64.push(base64map.charAt((triplet >>> 6 * (3 - j)) & 0x3F));
          else
            base64.push('=');
      }
      return base64.join('');
    },

    // Convert a base-64 string to a byte array
    base64ToBytes: function(base64) {
      // Remove non-base-64 characters
      base64 = base64.replace(/[^A-Z0-9+\/]/ig, '');

      for (var bytes = [], i = 0, imod4 = 0; i < base64.length;
          imod4 = ++i % 4) {
        if (imod4 == 0) continue;
        bytes.push(((base64map.indexOf(base64.charAt(i - 1))
            & (Math.pow(2, -2 * imod4 + 8) - 1)) << (imod4 * 2))
            | (base64map.indexOf(base64.charAt(i)) >>> (6 - imod4 * 2)));
      }
      return bytes;
    }
  };

  module.exports = crypt;
})();


/***/ }),

/***/ "./node_modules/md5/md5.js":
/*!*********************************!*\
  !*** ./node_modules/md5/md5.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function(){
  var crypt = __webpack_require__(/*! crypt */ "./node_modules/crypt/crypt.js"),
      utf8 = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").utf8,
      isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js"),
      bin = __webpack_require__(/*! charenc */ "./node_modules/charenc/charenc.js").bin,

  // The core
  md5 = function (message, options) {
    // Convert to byte array
    if (message.constructor == String)
      if (options && options.encoding === 'binary')
        message = bin.stringToBytes(message);
      else
        message = utf8.stringToBytes(message);
    else if (isBuffer(message))
      message = Array.prototype.slice.call(message, 0);
    else if (!Array.isArray(message))
      message = message.toString();
    // else, assume byte array already

    var m = crypt.bytesToWords(message),
        l = message.length * 8,
        a =  1732584193,
        b = -271733879,
        c = -1732584194,
        d =  271733878;

    // Swap endian
    for (var i = 0; i < m.length; i++) {
      m[i] = ((m[i] <<  8) | (m[i] >>> 24)) & 0x00FF00FF |
             ((m[i] << 24) | (m[i] >>>  8)) & 0xFF00FF00;
    }

    // Padding
    m[l >>> 5] |= 0x80 << (l % 32);
    m[(((l + 64) >>> 9) << 4) + 14] = l;

    // Method shortcuts
    var FF = md5._ff,
        GG = md5._gg,
        HH = md5._hh,
        II = md5._ii;

    for (var i = 0; i < m.length; i += 16) {

      var aa = a,
          bb = b,
          cc = c,
          dd = d;

      a = FF(a, b, c, d, m[i+ 0],  7, -680876936);
      d = FF(d, a, b, c, m[i+ 1], 12, -389564586);
      c = FF(c, d, a, b, m[i+ 2], 17,  606105819);
      b = FF(b, c, d, a, m[i+ 3], 22, -1044525330);
      a = FF(a, b, c, d, m[i+ 4],  7, -176418897);
      d = FF(d, a, b, c, m[i+ 5], 12,  1200080426);
      c = FF(c, d, a, b, m[i+ 6], 17, -1473231341);
      b = FF(b, c, d, a, m[i+ 7], 22, -45705983);
      a = FF(a, b, c, d, m[i+ 8],  7,  1770035416);
      d = FF(d, a, b, c, m[i+ 9], 12, -1958414417);
      c = FF(c, d, a, b, m[i+10], 17, -42063);
      b = FF(b, c, d, a, m[i+11], 22, -1990404162);
      a = FF(a, b, c, d, m[i+12],  7,  1804603682);
      d = FF(d, a, b, c, m[i+13], 12, -40341101);
      c = FF(c, d, a, b, m[i+14], 17, -1502002290);
      b = FF(b, c, d, a, m[i+15], 22,  1236535329);

      a = GG(a, b, c, d, m[i+ 1],  5, -165796510);
      d = GG(d, a, b, c, m[i+ 6],  9, -1069501632);
      c = GG(c, d, a, b, m[i+11], 14,  643717713);
      b = GG(b, c, d, a, m[i+ 0], 20, -373897302);
      a = GG(a, b, c, d, m[i+ 5],  5, -701558691);
      d = GG(d, a, b, c, m[i+10],  9,  38016083);
      c = GG(c, d, a, b, m[i+15], 14, -660478335);
      b = GG(b, c, d, a, m[i+ 4], 20, -405537848);
      a = GG(a, b, c, d, m[i+ 9],  5,  568446438);
      d = GG(d, a, b, c, m[i+14],  9, -1019803690);
      c = GG(c, d, a, b, m[i+ 3], 14, -187363961);
      b = GG(b, c, d, a, m[i+ 8], 20,  1163531501);
      a = GG(a, b, c, d, m[i+13],  5, -1444681467);
      d = GG(d, a, b, c, m[i+ 2],  9, -51403784);
      c = GG(c, d, a, b, m[i+ 7], 14,  1735328473);
      b = GG(b, c, d, a, m[i+12], 20, -1926607734);

      a = HH(a, b, c, d, m[i+ 5],  4, -378558);
      d = HH(d, a, b, c, m[i+ 8], 11, -2022574463);
      c = HH(c, d, a, b, m[i+11], 16,  1839030562);
      b = HH(b, c, d, a, m[i+14], 23, -35309556);
      a = HH(a, b, c, d, m[i+ 1],  4, -1530992060);
      d = HH(d, a, b, c, m[i+ 4], 11,  1272893353);
      c = HH(c, d, a, b, m[i+ 7], 16, -155497632);
      b = HH(b, c, d, a, m[i+10], 23, -1094730640);
      a = HH(a, b, c, d, m[i+13],  4,  681279174);
      d = HH(d, a, b, c, m[i+ 0], 11, -358537222);
      c = HH(c, d, a, b, m[i+ 3], 16, -722521979);
      b = HH(b, c, d, a, m[i+ 6], 23,  76029189);
      a = HH(a, b, c, d, m[i+ 9],  4, -640364487);
      d = HH(d, a, b, c, m[i+12], 11, -421815835);
      c = HH(c, d, a, b, m[i+15], 16,  530742520);
      b = HH(b, c, d, a, m[i+ 2], 23, -995338651);

      a = II(a, b, c, d, m[i+ 0],  6, -198630844);
      d = II(d, a, b, c, m[i+ 7], 10,  1126891415);
      c = II(c, d, a, b, m[i+14], 15, -1416354905);
      b = II(b, c, d, a, m[i+ 5], 21, -57434055);
      a = II(a, b, c, d, m[i+12],  6,  1700485571);
      d = II(d, a, b, c, m[i+ 3], 10, -1894986606);
      c = II(c, d, a, b, m[i+10], 15, -1051523);
      b = II(b, c, d, a, m[i+ 1], 21, -2054922799);
      a = II(a, b, c, d, m[i+ 8],  6,  1873313359);
      d = II(d, a, b, c, m[i+15], 10, -30611744);
      c = II(c, d, a, b, m[i+ 6], 15, -1560198380);
      b = II(b, c, d, a, m[i+13], 21,  1309151649);
      a = II(a, b, c, d, m[i+ 4],  6, -145523070);
      d = II(d, a, b, c, m[i+11], 10, -1120210379);
      c = II(c, d, a, b, m[i+ 2], 15,  718787259);
      b = II(b, c, d, a, m[i+ 9], 21, -343485551);

      a = (a + aa) >>> 0;
      b = (b + bb) >>> 0;
      c = (c + cc) >>> 0;
      d = (d + dd) >>> 0;
    }

    return crypt.endian([a, b, c, d]);
  };

  // Auxiliary functions
  md5._ff  = function (a, b, c, d, x, s, t) {
    var n = a + (b & c | ~b & d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._gg  = function (a, b, c, d, x, s, t) {
    var n = a + (b & d | c & ~d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._hh  = function (a, b, c, d, x, s, t) {
    var n = a + (b ^ c ^ d) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };
  md5._ii  = function (a, b, c, d, x, s, t) {
    var n = a + (c ^ (b | ~d)) + (x >>> 0) + t;
    return ((n << s) | (n >>> (32 - s))) + b;
  };

  // Package private blocksize
  md5._blocksize = 16;
  md5._digestsize = 16;

  module.exports = function (message, options) {
    if (message === undefined || message === null)
      throw new Error('Illegal argument ' + message);

    var digestbytes = crypt.wordsToBytes(md5(message, options));
    return options && options.asBytes ? digestbytes :
        options && options.asString ? bin.bytesToString(digestbytes) :
        crypt.bytesToHex(digestbytes);
  };

})();


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

}]);
//# sourceMappingURL=vendors~editor-collab~editor-guest.js.map?v=dae02a771ed263c182a1