(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["vendors~editor-rich"],{

/***/ "./node_modules/@nextcloud/vue/dist/Components/ActionButton.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/ActionButton.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():undefined}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=80)}({0:function(t,e,n){"use strict";function o(t,e,n,o,r,i,a,s){var c,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=n,u._compiled=!0),o&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=c):r&&(c=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var d=u.render;u.render=function(t,e){return c.call(e),d(t,e)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,c):[c]}return{exports:t,options:u}}n.d(e,"a",function(){return o})},1:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map(function(t){return"/*# sourceURL=".concat(o.sourceRoot).concat(t," */")});return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o=0;o<t.length;o++){var r=[].concat(t[o]);n&&(r[2]?r[2]="".concat(n," and ").concat(r[2]):r[2]=n),e.push(r)}},e}},111:function(t,e,n){"use strict";var o=n(38);n.n(o).a},112:function(t,e,n){var o=n(1);(t.exports=o(!1)).push([t.i,"li.active[data-v-42604de1]{box-shadow:inset 4px 0 var(--color-primary)}.action--disabled[data-v-42604de1]{pointer-events:none;opacity:.5}.action--disabled[data-v-42604de1]:hover,.action--disabled[data-v-42604de1]:focus{cursor:default;opacity:.5}.action--disabled *[data-v-42604de1]{opacity:1 !important}.action-button[data-v-42604de1]{display:flex;align-items:flex-start;width:100%;height:auto;margin:0;padding:0;padding-right:14px;cursor:pointer;white-space:nowrap;opacity:.7;color:var(--color-main-text);border:0;border-radius:0;background-color:transparent;box-shadow:none;font-weight:normal;line-height:44px}.action-button[data-v-42604de1]:hover,.action-button[data-v-42604de1]:focus{opacity:1}.action-button>span[data-v-42604de1]{cursor:pointer;white-space:nowrap}.action-button__icon[data-v-42604de1]{width:44px;height:44px;opacity:1;background-position:14px center;background-size:16px}.action-button p[data-v-42604de1]{width:150px;padding:7px 0;margin:auto;cursor:pointer;text-align:left;line-height:1.6em}.action-button__longtext[data-v-42604de1]{cursor:pointer;white-space:pre-wrap}.action-button__title[data-v-42604de1]{font-weight:bold}\n",""])},13:function(t,e,n){"use strict";n(6),n(23);var o=n(5),r=n.n(o);
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
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.a={before:function(){this.$slots.default&&""!==this.text.trim()||(r.a.util.warn("".concat(this.$options.name," cannot be empty and requires a meaningful text content"),this),this.$destroy(),this.$el.remove())},beforeUpdate:function(){this.text=this.getText()},data:function(){return{text:this.getText()}},computed:{isLongText:function(){return this.text&&this.text.trim().length>20}},methods:{getText:function(){return this.$slots.default?this.$slots.default[0].text.trim():""}}}},15:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js")},16:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js")},17:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js")},2:function(t,e,n){"use strict";function o(t,e){for(var n=[],o={},r=0;r<e.length;r++){var i=e[r],a=i[0],s={id:t+":"+r,css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}n.r(e),n.d(e,"default",function(){return h});var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,d=function(){},l=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t,e,n,r){u=n,l=r||{};var a=o(t,e);return v(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?v(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}}function v(t){for(var e=0;e<t.length;e++){var n=t[e],o=i[n.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](n.parts[r]);for(;r<n.parts.length;r++)o.parts.push(b(n.parts[r]));o.parts.length>n.parts.length&&(o.parts.length=n.parts.length)}else{var a=[];for(r=0;r<n.parts.length;r++)a.push(b(n.parts[r]));i[n.id]={id:n.id,refs:1,parts:a}}}}function m(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function b(t){var e,n,o=document.querySelector("style["+f+'~="'+t.id+'"]');if(o){if(u)return d;o.parentNode.removeChild(o)}if(p){var r=c++;o=s||(s=m()),e=y.bind(null,o,r,!1),n=y.bind(null,o,r,!0)}else o=m(),e=function(t,e){var n=e.css,o=e.media,r=e.sourceMap;o&&t.setAttribute("media",o);l.ssrId&&t.setAttribute(f,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,o),n=function(){o.parentNode.removeChild(o)};return e(t),function(o){if(o){if(o.css===t.css&&o.media===t.media&&o.sourceMap===t.sourceMap)return;e(t=o)}else n()}}var g,x=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function y(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},22:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/web.url */ "./node_modules/core-js/modules/web.url.js")},23:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js")},24:function(t,e,n){"use strict";n(15),n(3),n(16),n(17),n(22);var o=n(13),r=(n(6),function(t,e){for(var n=t.$parent;n;){if(n.$options.name===e)return n;n=n.$parent}});e.a={mixins:[o.a],props:{icon:{type:String,default:""},title:{type:String,default:""},closeAfterClick:{type:Boolean,default:!1}},computed:{isIconUrl:function(){try{return new URL(this.icon)}catch(t){return!1}}},methods:{onClick:function(t){if(this.$emit("click",t),this.closeAfterClick){var e=r(this,"Actions");e&&e.closeMenu&&e.closeMenu()}}}}},3:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js")},38:function(t,e,n){var o=n(112);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(2).default)("4a580912",o,!0,{})},48:function(t,e,n){"use strict";var o={name:"ActionButton",mixins:[n(24).a],props:{disabled:{type:Boolean,default:!1}},computed:{isFocusable:function(){return!this.disabled}}},r=(n(111),n(0)),i=n(50),a=n.n(i),s=Object(r.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{class:{"action--disabled":t.disabled}},[n("button",{staticClass:"action-button",class:{focusable:t.isFocusable},on:{click:t.onClick}},[n("span",{staticClass:"action-button__icon",class:[t.isIconUrl?"action-button__icon--url":t.icon],style:{backgroundImage:t.isIconUrl?"url("+t.icon+")":null}}),t._v(" "),t.title?n("p",[n("strong",{staticClass:"action-button__title"},[t._v("\n\t\t\t\t"+t._s(t.title)+"\n\t\t\t")]),t._v(" "),n("br"),t._v(" "),n("span",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}})]):t.isLongText?n("p",{staticClass:"action-button__longtext",domProps:{textContent:t._s(t.text)}}):n("span",{staticClass:"action-button__text"},[t._v(t._s(t.text))]),t._v(" "),t._e()],2)])},[],!1,null,"42604de1",null);"function"==typeof a.a&&a()(s);e.a=s.exports},5:function(t,e){t.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")},50:function(t,e){},6:function(t,e){t.exports=__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js")},80:function(t,e,n){"use strict";n.r(e);var o=n(48);n.d(e,"ActionButton",function(){return o.a}),
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
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */e.default=o.a}})});
//# sourceMappingURL=ActionButton.js.map

/***/ }),

/***/ "./node_modules/@nextcloud/vue/dist/Components/Actions.js":
/*!****************************************************************!*\
  !*** ./node_modules/@nextcloud/vue/dist/Components/Actions.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(A,t){ true?module.exports=t():undefined}(window,function(){return function(A){var t={};function e(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return A[o].call(n.exports,n,n.exports,e),n.l=!0,n.exports}return e.m=A,e.c=t,e.d=function(A,t,o){e.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:o})},e.r=function(A){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},e.t=function(A,t){if(1&t&&(A=e(A)),8&t)return A;if(4&t&&"object"==typeof A&&A&&A.__esModule)return A;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var n in A)e.d(o,n,function(t){return A[t]}.bind(null,n));return o},e.n=function(A){var t=A&&A.__esModule?function(){return A.default}:function(){return A};return e.d(t,"a",t),t},e.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},e.p="/dist/",e(e.s=55)}([function(A,t,e){"use strict";function o(A,t,e,o,n,i,r,c){var a,s="function"==typeof A?A.options:A;if(t&&(s.render=t,s.staticRenderFns=e,s._compiled=!0),o&&(s.functional=!0),i&&(s._scopeId="data-v-"+i),r?(a=function(A){(A=A||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(A=__VUE_SSR_CONTEXT__),n&&n.call(this,A),A&&A._registeredComponents&&A._registeredComponents.add(r)},s._ssrRegister=a):n&&(a=c?function(){n.call(this,this.$root.$options.shadowRoot)}:n),a)if(s.functional){s._injectStyles=a;var g=s.render;s.render=function(A,t){return a.call(t),g(A,t)}}else{var u=s.beforeCreate;s.beforeCreate=u?[].concat(u,a):[a]}return{exports:A,options:s}}e.d(t,"a",function(){return o})},function(A,t,e){"use strict";A.exports=function(A){var t=[];return t.toString=function(){return this.map(function(t){var e=function(A,t){var e=A[1]||"",o=A[3];if(!o)return e;if(t&&"function"==typeof btoa){var n=(r=o,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(a," */")),i=o.sources.map(function(A){return"/*# sourceURL=".concat(o.sourceRoot).concat(A," */")});return[e].concat(i).concat([n]).join("\n")}var r,c,a;return[e].join("\n")}(t,A);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e}).join("")},t.i=function(A,e){"string"==typeof A&&(A=[[null,A,""]]);for(var o=0;o<A.length;o++){var n=[].concat(A[o]);e&&(n[2]?n[2]="".concat(e," and ").concat(n[2]):n[2]=e),t.push(n)}},t}},function(A,t,e){"use strict";function o(A,t){for(var e=[],o={},n=0;n<t.length;n++){var i=t[n],r=i[0],c={id:A+":"+n,css:i[1],media:i[2],sourceMap:i[3]};o[r]?o[r].parts.push(c):e.push(o[r]={id:r,parts:[c]})}return e}e.r(t),e.d(t,"default",function(){return B});var n="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!n)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var i={},r=n&&(document.head||document.getElementsByTagName("head")[0]),c=null,a=0,s=!1,g=function(){},u=null,d="data-vue-ssr-id",l="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function B(A,t,e,n){s=e,u=n||{};var r=o(A,t);return f(r),function(t){for(var e=[],n=0;n<r.length;n++){var c=r[n];(a=i[c.id]).refs--,e.push(a)}t?f(r=o(A,t)):r=[];for(n=0;n<e.length;n++){var a;if(0===(a=e[n]).refs){for(var s=0;s<a.parts.length;s++)a.parts[s]();delete i[a.id]}}}}function f(A){for(var t=0;t<A.length;t++){var e=A[t],o=i[e.id];if(o){o.refs++;for(var n=0;n<o.parts.length;n++)o.parts[n](e.parts[n]);for(;n<e.parts.length;n++)o.parts.push(I(e.parts[n]));o.parts.length>e.parts.length&&(o.parts.length=e.parts.length)}else{var r=[];for(n=0;n<e.parts.length;n++)r.push(I(e.parts[n]));i[e.id]={id:e.id,refs:1,parts:r}}}}function M(){var A=document.createElement("style");return A.type="text/css",r.appendChild(A),A}function I(A){var t,e,o=document.querySelector("style["+d+'~="'+A.id+'"]');if(o){if(s)return g;o.parentNode.removeChild(o)}if(l){var n=a++;o=c||(c=M()),t=m.bind(null,o,n,!1),e=m.bind(null,o,n,!0)}else o=M(),t=function(A,t){var e=t.css,o=t.media,n=t.sourceMap;o&&A.setAttribute("media",o);u.ssrId&&A.setAttribute(d,t.id);n&&(e+="\n/*# sourceURL="+n.sources[0]+" */",e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");if(A.styleSheet)A.styleSheet.cssText=e;else{for(;A.firstChild;)A.removeChild(A.firstChild);A.appendChild(document.createTextNode(e))}}.bind(null,o),e=function(){o.parentNode.removeChild(o)};return t(A),function(o){if(o){if(o.css===A.css&&o.media===A.media&&o.sourceMap===A.sourceMap)return;t(A=o)}else e()}}var E,b=(E=[],function(A,t){return E[A]=t,E.filter(Boolean).join("\n")});function m(A,t,e,o){var n=e?"":o.css;if(A.styleSheet)A.styleSheet.cssText=b(t,n);else{var i=document.createTextNode(n),r=A.childNodes;r[t]&&A.removeChild(r[t]),r.length?A.insertBefore(i,r[t]):A.appendChild(i)}}},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js")},function(A,t){A.exports=__webpack_require__(/*! v-tooltip */ "./node_modules/v-tooltip/dist/v-tooltip.esm.js")},function(A,t){A.exports=__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js")},function(A,t,e){"use strict";A.exports=function(A,t){return t||(t={}),"string"!=typeof(A=A&&A.__esModule?A.default:A)?A:(/^['"].*['"]$/.test(A)&&(A=A.slice(1,-1)),t.hash&&(A+=t.hash),/["'() \t\n]/.test(A)||t.needQuotes?'"'.concat(A.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):A)}},function(A,t,e){"use strict";e.r(t),t.default="data:application/vnd.ms-fontobject;base64,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"},function(A,t,e){"use strict";e.r(t),t.default="data:font/woff;base64,d09GRgABAAAAAAooAAoAAAAACeAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAGAAAABgdOOQiWNtYXAAAAFUAAABQgAAAUIADeuyZ2x5ZgAAApgAAAOAAAADgLP154toZWFkAAAGGAAAADYAAAA2JqHVy2hoZWEAAAZQAAAAJAAAACQnHBOAaG10eAAABnQAAAAeAAAAHhOI//9sb2NhAAAGlAAAABwAAAAcBTQFvm1heHAAAAawAAAAIAAAACABGgBXbmFtZQAABtAAAAKmAAACpmCY6CZwb3N0AAAJeAAAALAAAACw3hyA4wAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoME4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoM//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAABGHD4MABQAACQUPzffz+/v+RgW/CccPg/fzBAX+R/pBCcYAAQAAAAARFxEXAAsAAAkLERf97frA+sD97QVA+sACEwVABUACE/rABIT97QVA+sACEwVABUACE/rABUD97frAAAH//wAAE5MS7AAzAAABIgcOARcWFwEhJgcGBwYHBhQXFhcWFxY3IQEGBwYXFhceARcWFxY3NjcBNjc2JyYnAS4BCmBlT0pGEBJIBdfx4E0+OiknFBQUFCcpOj5NDiD6KTcaGAMDGxlWNTc7Pjo/NQftOxUVFBU8+BMsdBLsOTSsWWBH+ioBGxguLDk4eDg5LC4YGwL6KTU/Oz46NzZWGRoDAxgZOAfsPFFQT1I8B+wtMgAAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAElAMNQAYADEASgAAASIHDgEHBhYXHgEXFjI3PgE3NjQnLgEnJiEiBw4BBwYUFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmA6qAdHCtLzIBMS+tcHT/dHCtLzIyL61wdAWbf3RwrTAxMTCtcHT+dHCtMDExMK1wdAWcgHRwrS8xMS+tcHT/dHCtLzIyL61wdAw1MTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAAAHNPkrXw889QALE4gAAAAA2iEnLQAAAADZ0Est//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAKAA+gEYAY4BpAGyAcAAAQAAAA0ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS0yMWMzNTJhUmVndWxhcmljb25mb250LXZ1ZS0yMWMzNTJhaWNvbmZvbnQtdnVlLTIxYzM1MmFWZXJzaW9uIDEuMGljb25mb250LXZ1ZS0yMWMzNTJhR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AMgAxAGMAMwA1ADIAYQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA0ADQAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0CWNoZWNrbWFyawVjbG9zZQdjb25maXJtBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="},function(A,t,e){"use strict";e.r(t),t.default="data:font/ttf;base64,AAEAAAAKAIAAAwAgT1MvMnTjkIkAAACsAAAAYGNtYXAADeuyAAABDAAAAUJnbHlms/XniwAAAlAAAAOAaGVhZCah1csAAAXQAAAANmhoZWEnHBOAAAAGCAAAACRobXR4E4j//wAABiwAAAAebG9jYQU0Bb4AAAZMAAAAHG1heHABGgBXAAAGaAAAACBuYW1lYJjoJgAABogAAAKmcG9zdN4cgOMAAAkwAAAAsAAEE4gBkAAFAAAMZQ2sAAACvAxlDawAAAlgAPUFCgAAAgAFAwAAAAAAAAAAAAAQAAAAAAAAAAAAAABQZkVkAEDqAeoME4gAAAHCE4gAAAAAAAEAAAAAAAAAAAAAACAAAAAAAAMAAAADAAAAHAABAAAAAAA8AAMAAQAAABwABAAgAAAABAAEAAEAAOoM//8AAOoB//8WAAABAAAAAAAAAQYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAA6mD0MABQALAAAJAhEJBBEJAQ6m+oIFfvu6BEb6gvqCBX77ugRGD0L6gvqCATgERgRGATj6gvqCATgERgRGAAEAAAAADW4SUAAFAAAJAREJAREGGwdT93QIjAnE+K3+yAiLCIz+xwACAAAAAA/fD0MABQALAAAJAhEJBBEJAQTiBX76ggRG+7oFfgV/+oEERvu6BEYFfgV+/sj7uvu6/sgFfgV+/sj7uvu6AAEAAAAADqYSUAAFAAAJAREJARENbvitCIv3dQnEB1MBOfd093UBOAABAAAAABGHD4MABQAACQUPzffz+/v+RgW/CccPg/fzBAX+R/pBCcYAAQAAAAARFxEXAAsAAAkLERf97frA+sD97QVA+sACEwVABUACE/rABIT97QVA+sACEwVABUACE/rABUD97frAAAH//wAAE5MS7AAzAAABIgcOARcWFwEhJgcGBwYHBhQXFhcWFxY3IQEGBwYXFhceARcWFxY3NjcBNjc2JyYnAS4BCmBlT0pGEBJIBdfx4E0+OiknFBQUFCcpOj5NDiD6KTcaGAMDGxlWNTc7Pjo/NQftOxUVFBU8+BMsdBLsOTSsWWBH+ioBGxguLDk4eDg5LC4YGwL6KTU/Oz46NzZWGRoDAxgZOAfsPFFQT1I8B+wtMgAAAAMAAAAAERcRFwADAAcACwAAAREhEQERIREBESERAnEOpvFaDqbxWg6mERf9jwJx+eb9jwJx+eX9jwJxAAMAAAAAElAMNQAYADEASgAAASIHDgEHBhYXHgEXFjI3PgE3NjQnLgEnJiEiBw4BBwYUFx4BFxYyNz4BNzY0Jy4BJyYhIgcOAQcGFBceARcWMjc+ATc2NCcuAScmA6qAdHCtLzIBMS+tcHT/dHCtLzIyL61wdAWbf3RwrTAxMTCtcHT+dHCtMDExMK1wdAWcgHRwrS8xMS+tcHT/dHCtLzIyL61wdAw1MTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxMTCtcHT+dHCtMDExMK1wdP50cK0wMTEwrXB0/nRwrTAxAAAAAgAAAAAP3w/fAAMABwAAAREhESERIREDqgTiAnEE4g/f88sMNfPLDDUAAAABAAAAABEXERcAAgAACQICcQ6m8VoRF/it+K0AAQAAAAAOpgw1AAIAAAkCBOIE4gTiDDX7HgTgAAEAAAABAAAHNPkrXw889QALE4gAAAAA2iEnLQAAAADZ0Est//8AABOTEuwAAAAIAAIAAAAAAAAAAQAAE4gAAAAAE4j////1E5MAAQAAAAAAAAAAAAAAAAAAAAIAAAAAE4gAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAIgA2AFgAbACAAKAA+gEYAY4BpAGyAcAAAQAAAA0ASwADAAAAAAACAAAACgAKAAAA/wAAAAAAAAAAABAAxgABAAAAAAABABQAAAABAAAAAAACAAcAFAABAAAAAAADABQAGwABAAAAAAAEABQALwABAAAAAAAFAAsAQwABAAAAAAAGABQATgABAAAAAAAKACsAYgABAAAAAAALABMAjQADAAEECQABACgAoAADAAEECQACAA4AyAADAAEECQADACgA1gADAAEECQAEACgA/gADAAEECQAFABYBJgADAAEECQAGACgBPAADAAEECQAKAFYBZAADAAEECQALACYBumljb25mb250LXZ1ZS0yMWMzNTJhUmVndWxhcmljb25mb250LXZ1ZS0yMWMzNTJhaWNvbmZvbnQtdnVlLTIxYzM1MmFWZXJzaW9uIDEuMGljb25mb250LXZ1ZS0yMWMzNTJhR2VuZXJhdGVkIGJ5IHN2ZzJ0dGYgZnJvbSBGb250ZWxsbyBwcm9qZWN0Lmh0dHA6Ly9mb250ZWxsby5jb20AaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAFIAZQBnAHUAbABhAHIAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAGkAYwBvAG4AZgBvAG4AdAAtAHYAdQBlAC0AMgAxAGMAMwA1ADIAYQBWAGUAcgBzAGkAbwBuACAAMQAuADAAaQBjAG8AbgBmAG8AbgB0AC0AdgB1AGUALQAyADEAYwAzADUAMgBhAEcAZQBuAGUAcgBhAHQAZQBkACAAYgB5ACAAcwB2AGcAMgB0AHQAZgAgAGYAcgBvAG0AIABGAG8AbgB0AGUAbABsAG8AIABwAHIAbwBqAGUAYwB0AC4AaAB0AHQAcAA6AC8ALwBmAG8AbgB0AGUAbABsAG8ALgBjAG8AbQAAAAIAAAAAAAAAMgAAAAAAAAAAAAAAAAAAAAAAAAAAAA0ADQAAAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENEWFycm93LWxlZnQtZG91YmxlCmFycm93LWxlZnQSYXJyb3ctcmlnaHQtZG91YmxlC2Fycm93LXJpZ2h0CWNoZWNrbWFyawVjbG9zZQdjb25maXJtBG1lbnUEbW9yZQVwYXVzZQRwbGF5CnRyaWFuZ2xlLXM="},function(A,t,e){"use strict";e.r(t),t.default="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCIgPjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48bWV0YWRhdGE+PC9tZXRhZGF0YT48ZGVmcz48Zm9udCBpZD0iaWNvbmZvbnQtdnVlLTIxYzM1MmEiIGhvcml6LWFkdi14PSI1MDAwIj48Zm9udC1mYWNlIGZvbnQtZmFtaWx5PSJpY29uZm9udC12dWUtMjFjMzUyYSIgZm9udC13ZWlnaHQ9IjQwMCIgZm9udC1zdHJldGNoPSJub3JtYWwiIHVuaXRzLXBlci1lbT0iNTAwMCIgcGFub3NlLTE9IjIgMCA1IDMgMCAwIDAgMCAwIDAiIGFzY2VudD0iNTAwMCIgZGVzY2VudD0iMCIgeC1oZWlnaHQ9IjAiIGJib3g9Ii0xIDAgNTAxMSA0ODQ0IiB1bmRlcmxpbmUtdGhpY2tuZXNzPSIwIiB1bmRlcmxpbmUtcG9zaXRpb249IjUwIiB1bmljb2RlLXJhbmdlPSJVK2VhMDEtZWEwYyIgLz48bWlzc2luZy1nbHlwaCBob3Jpei1hZHYteD0iMCIgIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LWxlZnQtZG91YmxlIiB1bmljb2RlPSImI3hlYTAxOyIgZD0iTTM3NTAgMzkwNiBsLTE0MDYgLTE0MDYgbDE0MDYgLTE0MDYgbDAgMzEyIGwtMTA5NCAxMDk0IGwxMDk0IDEwOTQgbDAgMzEyIFpNMjM0NCAzOTA2IGwtMTQwNiAtMTQwNiBsMTQwNiAtMTQwNiBsMCAzMTIgbC0xMDk0IDEwOTQgbDEwOTQgMTA5NCBsMCAzMTIgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iYXJyb3ctbGVmdCIgdW5pY29kZT0iJiN4ZWEwMjsiIGQ9Ik0xNTYzIDI1MDAgbDE4NzUgLTE4NzUgbDAgLTMxMiBsLTIxODggMjE4NyBsMjE4OCAyMTg4IGwwIC0zMTMgbC0xODc1IC0xODc1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImFycm93LXJpZ2h0LWRvdWJsZSIgdW5pY29kZT0iJiN4ZWEwMzsiIGQ9Ik0xMjUwIDEwOTQgbDE0MDYgMTQwNiBsLTE0MDYgMTQwNiBsMCAtMzEyIGwxMDk0IC0xMDk0IGwtMTA5NCAtMTA5NCBsMCAtMzEyIFpNMjY1NiAxMDk0IGwxNDA3IDE0MDYgbC0xNDA3IDE0MDYgbDAgLTMxMiBsMTA5NCAtMTA5NCBsLTEwOTQgLTEwOTQgbDAgLTMxMiBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJhcnJvdy1yaWdodCIgdW5pY29kZT0iJiN4ZWEwNDsiIGQ9Ik0zNDM4IDI1MDAgbC0xODc1IDE4NzUgbDAgMzEzIGwyMTg3IC0yMTg4IGwtMjE4NyAtMjE4NyBsMCAzMTIgbDE4NzUgMTg3NSBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJjaGVja21hcmsiIHVuaWNvZGU9IiYjeGVhMDU7IiBkPSJNNDA0NSAzOTcxIGwtMjA2MSAtMjA2MSBsLTEwMjkgMTAyOSBsLTQ0MiAtNDQxIGwxNDcxIC0xNDcxIGwyNTAzIDI1MDIgbC00NDIgNDQyIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9ImNsb3NlIiB1bmljb2RlPSImI3hlYTA2OyIgZD0iTTQzNzUgMTE1NiBsLTUzMSAtNTMxIGwtMTM0NCAxMzQ0IGwtMTM0NCAtMTM0NCBsLTUzMSA1MzEgbDEzNDQgMTM0NCBsLTEzNDQgMTM0NCBsNTMxIDUzMSBsMTM0NCAtMTM0NCBsMTM0NCAxMzQ0IGw1MzEgLTUzMSBsLTEzNDQgLTEzNDQgbDEzNDQgLTEzNDQgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0iY29uZmlybSIgdW5pY29kZT0iJiN4ZWEwNzsiIGQ9Ik0yNjU2IDQ4NDQgcS0xMDEgMCAtMTgwIC01NyBxLTc0IC01MiAtMTA5IC0xMzggcS0zNSAtODYgLTE5IC0xNzUgcTE4IC05NiA5MCAtMTY3IGwxNDk1IC0xNDk0IGwtMzYxNiAwIHEtNzcgMSAtMTM5IC0yNiBxLTU4IC0yNCAtOTkgLTcwIHEtMzkgLTQ0IC01OSAtMTAxIHEtMjAgLTU2IC0yMCAtMTE2IHEwIC02MCAyMCAtMTE2IHEyMCAtNTcgNTkgLTEwMSBxNDEgLTQ2IDk5IC03MCBxNjIgLTI3IDEzOSAtMjUgbDM2MTYgMCBsLTE0OTUgLTE0OTUgcS01NSAtNTMgLTgxIC0xMTYgcS0yNCAtNTkgLTIxIC0xMjEgcTMgLTU4IDMwIC0xMTMgcTI1IC01NCA2OCAtOTcgcTQzIC00MyA5NiAtNjggcTU1IC0yNiAxMTQgLTI5IHE2MiAtMyAxMjAgMjEgcTYzIDI1IDExNiA4MSBsMjAyOSAyMDI4IHE1OSA2MCA4MCAxNDEgcTIxIDgwIDEgMTU5IHEtMjEgODIgLTgxIDE0MiBsLTIwMjkgMjAyOCBxLTQ0IDQ1IC0xMDIgNzAgcS01OCAyNSAtMTIyIDI1IFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1lbnUiIHVuaWNvZGU9IiYjeGVhMDg7IiBkPSJNNjI1IDQzNzUgbDAgLTYyNSBsMzc1MCAwIGwwIDYyNSBsLTM3NTAgMCBaTTYyNSAyODEzIGwwIC02MjUgbDM3NTAgMCBsMCA2MjUgbC0zNzUwIDAgWk02MjUgMTI1MCBsMCAtNjI1IGwzNzUwIDAgbDAgNjI1IGwtMzc1MCAwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9Im1vcmUiIHVuaWNvZGU9IiYjeGVhMDk7IiBkPSJNOTM4IDMxMjUgcS0xMjggMCAtMjQ0IC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzMy41IC0xOTguNSBxLTUwIC0xMTYgLTQ5LjUgLTI0MyBxMC41IC0xMjcgNDkuNSAtMjQzIHE0NyAtMTEyIDEzMy41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzLjUgLTQ5IHExMjcuNSAwIDI0My41IDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzMuNSAxOTguNSBxNTAgMTE2IDUwIDI0MyBxMCAxMjcgLTUwIDI0MyBxLTQ3IDExMiAtMTMzLjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWk0yNTAwIDMxMjUgcS0xMjcgMCAtMjQzIC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzNC41IC0xOTguNSBxLTQ5IC0xMTYgLTQ5IC0yNDMgcTAgLTEyNyA0OSAtMjQzIHE0OCAtMTEyIDEzNC41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzIC00OSBxMTI3IDAgMjQzIDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzQuNSAxOTguNSBxNDkgMTE2IDQ5IDI0MyBxMCAxMjcgLTQ5IDI0MyBxLTQ4IDExMiAtMTM0LjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWk00MDYzIDMxMjUgcS0xMjggMCAtMjQ0IC00OSBxLTExMiAtNDggLTE5OC41IC0xMzQuNSBxLTg2LjUgLTg2LjUgLTEzMy41IC0xOTguNSBxLTQ5IC0xMTYgLTQ5IC0yNDMgcTAgLTEyNyA0OSAtMjQzIHE0NyAtMTEyIDEzMy41IC0xOTguNSBxODYuNSAtODYuNSAxOTguNSAtMTM0LjUgcTExNiAtNDkgMjQzLjUgLTQ5IHExMjcuNSAwIDI0My41IDQ5IHExMTIgNDggMTk4LjUgMTM0LjUgcTg2LjUgODYuNSAxMzMuNSAxOTguNSBxNTAgMTE2IDUwIDI0MyBxMCAxMjcgLTUwIDI0MyBxLTQ3IDExMiAtMTMzLjUgMTk4LjUgcS04Ni41IDg2LjUgLTE5OC41IDEzNC41IHEtMTE2IDQ5IC0yNDMgNDkgWiIgLz48Z2x5cGggZ2x5cGgtbmFtZT0icGF1c2UiIHVuaWNvZGU9IiYjeGVhMGE7IiBkPSJNOTM4IDQwNjMgbDAgLTMxMjUgbDEyNTAgMCBsMCAzMTI1IGwtMTI1MCAwIFpNMjgxMyA0MDYzIGwwIC0zMTI1IGwxMjUwIDAgbDAgMzEyNSBsLTEyNTAgMCBaIiAvPjxnbHlwaCBnbHlwaC1uYW1lPSJwbGF5IiB1bmljb2RlPSImI3hlYTBiOyIgZD0iTTYyNSA0Mzc1IGwzNzUwIC0xODc1IGwtMzc1MCAtMTg3NSBsMCAzNzUwIFoiIC8+PGdseXBoIGdseXBoLW5hbWU9InRyaWFuZ2xlLXMiIHVuaWNvZGU9IiYjeGVhMGM7IiBkPSJNMTI1MCAzMTI1IGwxMjUwIC0xMjUwIGwxMjUwIDEyNDggbC0yNTAwIDIgWiIgLz48L2ZvbnQ+PC9kZWZzPjwvc3ZnPg=="},function(A,t,e){"use strict";e.r(t);var o=e(4);e(36);
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
o.VTooltip.options.defaultTemplate='<div class="vue-tooltip" role="tooltip" data-v-'.concat("21c352a",'><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'),o.VTooltip.options.defaultHtml=!1,t.default=o.VTooltip},,function(A,t){A.exports=__webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.umd.js")},,,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js")},function(A,t,e){"use strict";e(3),e(19),e(20);t.a=function(A){return Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,A||5)}},,,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js")},,,,,function(A,t,e){var o=e(76);"string"==typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);(0,e(2).default)("aba74858",o,!0,{})},,,,function(A,t,e){"use strict";e(25),e(49),e(18);var o=e(14),n=e(12),i=e(21),r=(e(73),function(A){var t=A.getBoundingClientRect(),e=document.documentElement.clientHeight,o=document.documentElement.clientWidth,n=Object.assign({});return n.top=t.top<0,n.left=t.left<0,n.bottom=t.bottom>e,n.right=t.right>o,n.any=n.top||n.left||n.bottom||n.right,n.all=n.top&&n.left&&n.bottom&&n.right,n.offsetY=n.top?t.top:n.bottom?t.bottom-e:0,n.offsetX=n.left?t.left:n.right?t.right-o:0,n}),c=(e(74),e(6),e(71),e(5)),a=e.n(c),s=function(A,t,e){void 0!==A&&A.forEach(function(o,n){var i=!o.componentOptions&&o.tag&&-1===t.indexOf(o.tag),r=!!o.componentOptions&&"string"==typeof o.componentOptions.tag&&-1===t.indexOf(o.componentOptions.tag);(i||r)&&(a.a.util.warn("".concat(i?o.tag:o.componentOptions.tag," is not allowed inside the ").concat(e.$options.name," component"),e),A.splice(n,1))})},g=["ActionButton","ActionCheckbox","ActionInput","ActionLink","ActionRadio","ActionRouter","ActionSeparator","ActionText","ActionTextEditable"],u={name:"Actions",directives:{ClickOutside:o.directive,tooltip:n.default},props:{open:{type:Boolean,default:!1},menuAlign:{type:String,default:"center",validator:function(A){return["left","center","right"].indexOf(A)>-1}},defaultIcon:{type:String,default:"action-item__menutoggle--default-icon"}},data:function(){return{actions:[],opened:this.open,focusIndex:0,randomId:"menu-"+Object(i.a)(),offsetX:0,offsetY:0,offsetYArrow:0,rotateArrow:!1,children:this.$children}},computed:{hasMultipleActions:function(){return this.actions.length>1},isValidSingleAction:function(){return 1===this.actions.length&&null!==this.firstActionElement},firstActionVNode:function(){return this.actions[0]},firstAction:function(){return this.children[0]?this.children[0]:{}},firstActionBinding:function(){if(this.firstActionVNode&&this.firstActionVNode.componentOptions){var A=this.firstActionVNode.componentOptions.tag;if("ActionLink"===A)return{is:"a",href:this.firstAction.href,target:this.firstAction.target};if("ActionRouter"===A)return{is:"router-link",to:this.firstAction.to,exact:this.firstAction.exact};if("ActionButton"===A)return{is:"button"}}return null},firstActionEvent:function(){return this.firstActionVNode&&this.firstActionVNode.componentOptions&&this.firstActionVNode.componentOptions.listeners&&this.firstActionVNode.componentOptions.listeners.click},firstActionEventBinding:function(){return this.firstActionEvent?"click":null},firstActionClass:function(){var A=this.firstActionVNode&&this.firstActionVNode.data.staticClass,t=this.firstActionVNode&&this.firstActionVNode.data.class;return"".concat(A," ").concat(t)}},watch:{open:function(A){var t=this;this.opened=A,this.opened&&this.$nextTick(function(){t.onOpen()})}},beforeMount:function(){this.initActions(),s(this.$slots.default,g,this)},beforeUpdate:function(){this.initActions(),s(this.$slots.default,g,this)},methods:{toggleMenu:function(){var A=this;this.opened=!this.opened,this.opened?(this.$nextTick(function(){A.onOpen(),A.focusFirstAction()}),this.$emit("open")):(this.offsetX=0,this.offsetY=0,this.offsetYArrow=0,this.rotateArrow=!1),this.$emit("update:open",this.opened)},closeMenu:function(){this.opened&&(this.$emit("update:open",!1),this.$emit("close")),this.opened=!1,this.offsetX=0,this.offsetY=0,this.offsetYArrow=0,this.rotateArrow=!1},onOpen:function(){if(this.offsetX=0,this.offsetY=0,this.offsetYArrow=0,this.rotateArrow=!1,"center"===this.menuAlign){var A=r(this.$refs.menu);(A.left||A.right)&&(this.offsetX=A.offsetX>0?Math.round(A.offsetX)+5:Math.round(A.offsetX)-5),A.bottom&&(this.offsetY=0-Math.round(this.$refs.menu.clientHeight)-42,this.offsetYArrow=Math.round(this.$refs.menu.clientHeight)+18,this.rotateArrow=!0)}},onMouseFocusAction:function(A){if(document.activeElement!==A.target){var t=A.target.closest("li");if(t){var e=t.querySelector(".focusable");if(e){var o=this.$refs.menu.querySelectorAll(".focusable"),n=Array.prototype.indexOf.call(o,e);n>-1&&(this.focusIndex=n,this.focusAction())}}}},removeCurrentActive:function(){var A=this.$refs.menu.querySelector("li.active");A&&A.classList.remove("active")},focusAction:function(){var A=this.$refs.menu.querySelectorAll(".focusable")[this.focusIndex];if(A){var t=A.closest("li");A.focus(),t&&(this.removeCurrentActive(),t.classList.add("active"))}},focusPreviousAction:function(){this.focusIndex=Math.max(this.focusIndex-1,0),this.focusAction()},focusNextAction:function(){this.focusIndex=Math.min(this.focusIndex+1,this.$refs.menu.querySelectorAll(".focusable").length-1),this.focusAction()},focusFirstAction:function(){this.focusIndex=0,this.focusAction()},focusLastAction:function(){this.focusIndex=this.$el.querySelectorAll(".focusable").length-1,this.focusAction()},execFirstAction:function(A){this.firstActionEvent&&this.firstActionEvent(A)},initActions:function(){this.actions=(this.$slots.default||[]).filter(function(A){return!!A&&!!A.componentOptions})}}},d=(e(75),e(0)),l=e(41),B=e.n(l),f=Object(d.a)(u,function(){var A=this,t=A.$createElement,e=A._self._c||t;return A.isValidSingleAction?e("element",A._b({directives:[{name:"tooltip",rawName:"v-tooltip.auto",value:A.firstAction.text,expression:"firstAction.text",modifiers:{auto:!0}}],staticClass:"action-item action-item--single",class:[A.firstAction.icon,A.firstActionClass],attrs:{"aria-label":A.firstAction.text,rel:"noreferrer noopener"},on:A._d({},[A.firstActionEventBinding,A.execFirstAction])},"element",A.firstActionBinding,!1),[e("span",{attrs:{"aria-hidden":!0,hidden:""}},[A._t("default")],2)]):e("div",{directives:[{name:"show",rawName:"v-show",value:A.hasMultipleActions,expression:"hasMultipleActions"}],staticClass:"action-item",class:{"action-item--open":A.opened},on:{keydown:[function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.focusPreviousAction(t))},function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.focusNextAction(t))},function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"tab",9,t.key,"Tab")?null:t.shiftKey?(t.preventDefault(),A.focusPreviousAction(t)):null},function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"page-up",void 0,t.key,void 0)?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.focusFirstAction(t))},function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"page-down",void 0,t.key,void 0)?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.focusLastAction(t))},function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.closeMenu(t))}]}},[e("a",{staticClass:"icon action-item__menutoggle",class:A.defaultIcon,attrs:{href:"#","aria-haspopup":"true","aria-controls":A.randomId,"aria-expanded":A.opened},on:{click:function(t){return t.preventDefault(),A.toggleMenu(t)},keydown:function(t){return!t.type.indexOf("key")&&A._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:t.ctrlKey||t.shiftKey||t.altKey||t.metaKey?null:(t.preventDefault(),A.toggleMenu(t))}}}),A._v(" "),A.opened?e("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:A.closeMenu,expression:"closeMenu"}],ref:"menu",staticClass:"action-item__menu",class:["menu-"+A.menuAlign,{open:A.opened}],style:{marginRight:A.offsetX+"px",marginTop:A.offsetY+"px"},attrs:{tabindex:"-1"},on:{mousemove:A.onMouseFocusAction}},[e("div",{staticClass:"action-item__menu_arrow",style:{transform:"translateX("+A.offsetX+"px) translateY("+A.offsetYArrow+"px) "+(A.rotateArrow?" rotate(180deg)":"")}}),A._v(" "),e("ul",{attrs:{id:A.randomId,tabindex:"-1"}},[A._t("default")],2)]):A._e()])},[],!1,null,"53cb6bd0",null);"function"==typeof B.a&&B()(f);t.a=f.exports},,function(A,t,e){var o=e(37);"string"==typeof o&&(o=[[A.i,o,""]]),o.locals&&(A.exports=o.locals);(0,e(2).default)("941c791e",o,!0,{})},function(A,t,e){var o=e(1);(A.exports=o(!1)).push([A.i,".vue-tooltip[data-v-21c352a]{position:absolute;z-index:100000;right:auto;left:auto;display:block;margin:0;margin-top:-3px;padding:10px 0;text-align:left;text-align:start;white-space:normal;text-decoration:none;letter-spacing:normal;word-spacing:normal;text-transform:none;word-wrap:normal;word-break:normal;opacity:0;text-shadow:none;font-family:'Nunito', 'Open Sans', Frutiger, Calibri, 'Myriad Pro', Myriad, sans-serif;font-size:12px;font-weight:normal;font-style:normal;line-height:1.6;line-break:auto;filter:drop-shadow(0 1px 10px var(--color-box-shadow))}.vue-tooltip[data-v-21c352a][x-placement^='top'] .tooltip-arrow{bottom:0;margin-top:0;margin-bottom:0;border-width:10px 10px 0 10px;border-right-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='bottom'] .tooltip-arrow{top:0;margin-top:0;margin-bottom:0;border-width:0 10px 10px 10px;border-top-color:transparent;border-right-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='right'] .tooltip-arrow{right:100%;margin-right:0;margin-left:0;border-width:10px 10px 10px 0;border-top-color:transparent;border-bottom-color:transparent;border-left-color:transparent}.vue-tooltip[data-v-21c352a][x-placement^='left'] .tooltip-arrow{left:100%;margin-right:0;margin-left:0;border-width:10px 0 10px 10px;border-top-color:transparent;border-right-color:transparent;border-bottom-color:transparent}.vue-tooltip[data-v-21c352a][aria-hidden='true']{visibility:hidden;transition:opacity .15s, visibility .15s;opacity:0}.vue-tooltip[data-v-21c352a][aria-hidden='false']{visibility:visible;transition:opacity .15s;opacity:1}.vue-tooltip[data-v-21c352a] .tooltip-inner{max-width:350px;padding:5px 8px;text-align:center;color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background)}.vue-tooltip[data-v-21c352a] .tooltip-arrow{position:absolute;z-index:1;width:0;height:0;margin:0;border-style:solid;border-color:var(--color-main-background)}\n",""])},,,,function(A,t){},,,,,,,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js")},,,,,,function(A,t,e){"use strict";e.r(t);var o=e(34);e.d(t,"Actions",function(){return o.a}),
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */t.default=o.a},,,,,,,,,,,,,,,,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js")},,function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.object.assign */ "./node_modules/core-js/modules/es.object.assign.js")},function(A,t){A.exports=__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js")},function(A,t,e){"use strict";var o=e(30);e.n(o).a},function(A,t,e){var o=e(1),n=e(7),i=e(8),r=e(9),c=e(10),a=e(11);t=A.exports=o(!1);var s=n(i),g=n(r),u=n(c),d=n(a);t.push([A.i,'@font-face{font-family:"iconfont-vue-21c352a";src:url('+s+");src:url("+s+') format("embedded-opentype"),url('+g+') format("woff"),url('+u+') format("truetype"),url('+d+') format("svg")}.icon[data-v-53cb6bd0]{font-style:normal;font-weight:400}.icon.arrow-left-double[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-left[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-right-double[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.arrow-right[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.checkmark[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.close[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.confirm[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.menu[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.more[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.pause[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.play[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.icon.triangle-s[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";content:""}.action-item[data-v-53cb6bd0]{position:relative;display:inline-block}.action-item--single[data-v-53cb6bd0]:hover,.action-item--single[data-v-53cb6bd0]:focus,.action-item--single[data-v-53cb6bd0]:active,.action-item__menutoggle[data-v-53cb6bd0]:hover,.action-item__menutoggle[data-v-53cb6bd0]:focus,.action-item__menutoggle[data-v-53cb6bd0]:active{border-radius:22px;background-color:rgba(127,127,127,0.25) !important;opacity:1}.action-item.action-item--open .action-item__menutoggle[data-v-53cb6bd0]{opacity:1;border-radius:22px;background-color:rgba(127,127,127,0.25)}.action-item--single[data-v-53cb6bd0],.action-item__menutoggle[data-v-53cb6bd0]{box-sizing:border-box;width:44px;height:44px;margin:0;padding:14px;cursor:pointer;border:none;background-color:transparent}.action-item__menutoggle[data-v-53cb6bd0]{display:flex;align-items:center;justify-content:center;opacity:.7}.action-item__menutoggle[data-v-53cb6bd0]:before{content:\'\'}.action-item__menutoggle--default-icon[data-v-53cb6bd0]{font-size:16px}.action-item__menutoggle--default-icon[data-v-53cb6bd0]:before{font-family:"iconfont-vue-21c352a";font-style:normal;font-weight:400;content:""}.action-item--single[data-v-53cb6bd0]{opacity:.7}.action-item--single[data-v-53cb6bd0]:hover,.action-item--single[data-v-53cb6bd0]:focus,.action-item--single[data-v-53cb6bd0]:active{opacity:1}.action-item--single>[hidden][data-v-53cb6bd0]{display:none}.action-item--multiple[data-v-53cb6bd0]{position:relative}.action-item__menu[data-v-53cb6bd0]{position:absolute;z-index:110;right:50%;display:none;margin-bottom:10px;margin-top:-5px;transform:translateX(50%);color:var(--color-main-text);border-radius:var(--border-radius);background-color:var(--color-main-background);filter:drop-shadow(0 1px 3px var(--color-box-shadow))}.action-item__menu ul[data-v-53cb6bd0]>:not(li){display:none}.action-item__menu.open[data-v-53cb6bd0]{display:block}.action-item__menu .action-item__menu_arrow[data-v-53cb6bd0]{position:absolute;right:50%;bottom:100%;width:0;height:0;margin-right:-9px;content:\' \';pointer-events:none;border:solid transparent;border-width:9px;border-bottom-color:var(--color-main-background)}.action-item__menu.menu-right[data-v-53cb6bd0]{right:0;left:auto;transform:none}.action-item__menu.menu-right .action-item__menu_arrow[data-v-53cb6bd0]{right:13px;margin-right:0}.action-item__menu.menu-left[data-v-53cb6bd0]{right:auto;left:0;transform:none}.action-item__menu.menu-left .action-item__menu_arrow[data-v-53cb6bd0]{right:auto;left:13px;margin-right:0}.ie .action-item__menu[data-v-53cb6bd0],.ie .action-item__menu .action-item__menu_arrow[data-v-53cb6bd0],.edge .action-item__menu[data-v-53cb6bd0],.edge .action-item__menu .action-item__menu_arrow[data-v-53cb6bd0]{border:1px solid var(--color-border)}\n',""])}])});
//# sourceMappingURL=Actions.js.map

/***/ }),

/***/ "./node_modules/core-js/internals/forced-string-trim-method.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/internals/forced-string-trim-method.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var whitespaces = __webpack_require__(/*! ../internals/whitespaces */ "./node_modules/core-js/internals/whitespaces.js");

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
module.exports = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toInteger = __webpack_require__(/*! ../internals/to-integer */ "./node_modules/core-js/internals/to-integer.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.trim.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.trim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $trim = __webpack_require__(/*! ../internals/string-trim */ "./node_modules/core-js/internals/string-trim.js").trim;
var forcedStringTrimMethod = __webpack_require__(/*! ../internals/forced-string-trim-method */ "./node_modules/core-js/internals/forced-string-trim-method.js");

// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
$({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});


/***/ }),

/***/ "./node_modules/vue-click-outside/index.js":
/*!*************************************************!*\
  !*** ./node_modules/vue-click-outside/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function validate(binding) {
  if (typeof binding.value !== 'function') {
    console.warn('[Vue-click-outside:] provided expression', binding.expression, 'is not a function.')
    return false
  }

  return true
}

function isPopup(popupItem, elements) {
  if (!popupItem || !elements)
    return false

  for (var i = 0, len = elements.length; i < len; i++) {
    try {
      if (popupItem.contains(elements[i])) {
        return true
      }
      if (elements[i].contains(popupItem)) {
        return false
      }
    } catch(e) {
      return false
    }
  }

  return false
}

function isServer(vNode) {
  return typeof vNode.componentInstance !== 'undefined' && vNode.componentInstance.$isServer
}

exports = module.exports = {
  bind: function (el, binding, vNode) {
    if (!validate(binding)) return

    // Define Handler and cache it on the element
    function handler(e) {
      if (!vNode.context) return

      // some components may have related popup item, on which we shall prevent the click outside event handler.
      var elements = e.path || (e.composedPath && e.composedPath())
      elements && elements.length > 0 && elements.unshift(e.target)
      
      if (el.contains(e.target) || isPopup(vNode.context.popupItem, elements)) return

      el.__vueClickOutside__.callback(e)
    }

    // add Event Listeners
    el.__vueClickOutside__ = {
      handler: handler,
      callback: binding.value
    }
    !isServer(vNode) && document.addEventListener('click', handler)
  },

  update: function (el, binding) {
    if (validate(binding)) el.__vueClickOutside__.callback = binding.value
  },
  
  unbind: function (el, binding, vNode) {
    // Remove Event Listeners
    !isServer(vNode) && document.removeEventListener('click', el.__vueClickOutside__.handler)
    delete el.__vueClickOutside__
  }
}


/***/ })

}]);
//# sourceMappingURL=vendors~editor-rich.js.map?v=e2db14a30b175e9ec8b7