(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["preview"],{

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! escape-html */ "./node_modules/escape-html/index.js");
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _EditorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../EditorFactory */ "./src/EditorFactory.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ReadOnlyEditor',
  components: {
    EditorContent: tiptap__WEBPACK_IMPORTED_MODULE_0__["EditorContent"]
  },
  props: {
    content: {
      type: String,
      required: true
    },
    isRichEditor: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      editor: null
    };
  },
  mounted: function mounted() {
    this.editor = Object(_EditorFactory__WEBPACK_IMPORTED_MODULE_2__["createEditor"])({
      content: this.isRichEditor ? _EditorFactory__WEBPACK_IMPORTED_MODULE_2__["markdownit"].render(this.content) : '<pre>' + escape_html__WEBPACK_IMPORTED_MODULE_1___default()(this.content) + '</pre>',
      enableRichEditing: this.isRichEditor
    });
    this.editor.setOptions({
      editable: false
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.editor.destroy();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var imageMimes = ['image/png', 'image/jpeg', 'image/gif', 'image/x-xbitmap', 'image/bmp', 'image/svg+xml'];

var getQueryVariable = function getQueryVariable(src, variable) {
  var query = src.split('#')[1];

  if (typeof query === 'undefined') {
    return;
  }

  var vars = query.split('&');

  if (typeof vars === 'undefined') {
    return;
  }

  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');

    if (decodeURIComponent(pair[0]) === variable) {
      return decodeURIComponent(pair[1]);
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ImageView',
  props: ['node', 'updateAttrs', 'view'],
  // eslint-disable-line
  data: function data() {
    return {
      imageLoaded: false,
      loaded: false,
      failed: false
    };
  },
  computed: {
    mimeIcon: function mimeIcon() {
      var mime = getQueryVariable(this.src, 'mimetype');

      if (mime) {
        return {
          backgroundImage: 'url(' + window.OC.MimeType.getIconUrl(mime) + ')'
        };
      }

      return {};
    },
    isSupportedImage: function isSupportedImage() {
      var mime = getQueryVariable(this.src, 'mimetype');
      return typeof mime === 'undefined' || imageMimes.indexOf(mime) !== -1;
    },
    internalLinkOrImage: function internalLinkOrImage() {
      var fileId = getQueryVariable(this.src, 'fileId');

      if (fileId) {
        return OC.generateUrl('/f/' + fileId);
      }

      return this.src;
    },
    src: {
      get: function get() {
        return this.node.attrs.src;
      },
      set: function set(src) {
        this.updateAttrs({
          src: src
        });
      }
    },
    alt: {
      get: function get() {
        return this.node.attrs.alt ? this.node.attrs.alt : '';
      },
      set: function set(alt) {
        this.updateAttrs({
          alt: alt
        });
      }
    },
    t: function t() {
      return function (a, s) {
        return window.t(a, s);
      };
    }
  },
  beforeMount: function beforeMount() {
    var _this = this;

    if (!this.isSupportedImage) {
      // TODO check if hasPreview and render a file preview if available
      this.failed = true;
      this.imageLoaded = false;
      this.loaded = true;
      return;
    }

    var img = new Image();
    img.src = this.node.attrs.src;

    img.onload = function () {
      _this.imageLoaded = true;
    };

    img.onerror = function () {
      _this.failed = true;
      _this.imageLoaded = false;
      _this.loaded = true;
    };
  },
  methods: {
    updateAlt: function updateAlt() {
      this.alt = this.$refs.altInput.value;
    },
    onLoaded: function onLoaded() {
      this.loaded = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "#read-only-editor {\n  /* Document rendering styles */\n  overflow: scroll;\n}\n#read-only-editor div.ProseMirror {\n    margin-top: 44px;\n    height: 100%;\n    position: relative;\n    word-wrap: break-word;\n    white-space: pre-wrap;\n    -webkit-font-variant-ligatures: none;\n    font-variant-ligatures: none;\n    padding: 4px 8px 200px 14px;\n    line-height: 150%;\n    font-size: 14px;\n    outline: none;\n}\n#read-only-editor div.ProseMirror[contenteditable=true], #read-only-editor div.ProseMirror[contenteditable=false] {\n      border: none !important;\n      width: 100%;\n      background-color: transparent;\n      color: var(--color-main-text);\n      opacity: 1;\n      -webkit-user-select: text;\n      user-select: text;\n      font-size: 14px;\n}\n#read-only-editor div.ProseMirror li label.checkbox-label {\n      width: 100%;\n      display: flex;\n      margin-top: 10px;\n      margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror li label.checkbox-label:before {\n        position: relative;\n        top: 2px;\n}\n#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper {\n        margin-bottom: -1em;\n        width: 100%;\n}\n#read-only-editor div.ProseMirror li label.checkbox-label div.checkbox-wrapper > p {\n          margin-top: -1px;\n          margin-bottom: 0;\n          padding-bottom: 10px;\n}\n#read-only-editor div.ProseMirror p:first-child,\n    #read-only-editor div.ProseMirror h1:first-child,\n    #read-only-editor div.ProseMirror h2:first-child,\n    #read-only-editor div.ProseMirror h3:first-child,\n    #read-only-editor div.ProseMirror h4:first-child,\n    #read-only-editor div.ProseMirror h5:first-child,\n    #read-only-editor div.ProseMirror h6:first-child {\n      margin-top: 10px;\n}\n#read-only-editor div.ProseMirror a {\n      color: var(--color-primary-element);\n      text-decoration: underline;\n      padding: .5em 0;\n}\n#read-only-editor div.ProseMirror p {\n      margin-bottom: 1em;\n      line-height: 150%;\n}\n#read-only-editor div.ProseMirror em {\n      font-style: italic;\n}\n#read-only-editor div.ProseMirror h1,\n    #read-only-editor div.ProseMirror h2,\n    #read-only-editor div.ProseMirror h3,\n    #read-only-editor div.ProseMirror h4,\n    #read-only-editor div.ProseMirror h5,\n    #read-only-editor div.ProseMirror h6 {\n      font-weight: 600;\n      line-height: 120%;\n      margin-top: 24px;\n      margin-bottom: 12px;\n      color: var(--color-main-text);\n}\n#read-only-editor div.ProseMirror h1 {\n      font-size: 36px;\n      margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h2 {\n      font-size: 28px;\n      margin-top: 48px;\n}\n#read-only-editor div.ProseMirror h3 {\n      font-size: 24px;\n}\n#read-only-editor div.ProseMirror h4 {\n      font-size: 21px;\n}\n#read-only-editor div.ProseMirror h5 {\n      font-size: 17px;\n}\n#read-only-editor div.ProseMirror h6 {\n      font-size: 14px;\n}\n#read-only-editor div.ProseMirror img {\n      cursor: default;\n      max-width: 100%;\n}\n#read-only-editor div.ProseMirror hr {\n      padding: 2px 0;\n      border: none;\n      margin: 1em 0;\n      width: 100%;\n}\n#read-only-editor div.ProseMirror hr:after {\n      content: \"\";\n      display: block;\n      height: 1px;\n      background-color: var(--color-border-dark);\n      line-height: 2px;\n}\n#read-only-editor div.ProseMirror pre {\n      white-space: pre-wrap;\n      background-color: var(--color-background-dark);\n      border-radius: var(--border-radius);\n      padding: 1em 1.3em;\n      margin-bottom: 1em;\n}\n#read-only-editor div.ProseMirror p code {\n      background-color: var(--color-background-dark);\n      border-radius: var(--border-radius);\n      padding: .1em .3em;\n}\n#read-only-editor div.ProseMirror li {\n      position: relative;\n}\n#read-only-editor div.ProseMirror ul, #read-only-editor div.ProseMirror ol {\n      padding-left: 10px;\n      margin-left: 10px;\n}\n#read-only-editor div.ProseMirror ul li {\n      list-style-type: disc;\n}\n#read-only-editor div.ProseMirror ul > li > ul > li {\n      list-style-type: circle;\n}\n#read-only-editor div.ProseMirror ul > li > ul > li ul li {\n      list-style-type: square;\n}\n#read-only-editor div.ProseMirror blockquote {\n      padding-left: 1em;\n      border-left: 4px solid var(--color-primary-element);\n      color: var(--color-text-maxcontrast);\n      margin-left: 0;\n      margin-right: 0;\n}\n#read-only-editor .ProseMirror-focused .ProseMirror-gapcursor {\n    display: block;\n}\n#read-only-editor .editor__content p.is-empty:first-child::before {\n    content: attr(data-empty-text);\n    float: left;\n    color: var(--color-text-maxcontrast);\n    pointer-events: none;\n    height: 0;\n}\n.thumbnailContainer #read-only-editor {\n  width: 100%;\n}\n.thumbnailContainer #read-only-editor .ProseMirror {\n    height: auto;\n    margin: 0 0 0 0;\n    padding: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/* Document rendering styles */\ndiv.ProseMirror {\n  margin-top: 44px;\n  height: 100%;\n  position: relative;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  -webkit-font-variant-ligatures: none;\n  font-variant-ligatures: none;\n  padding: 4px 8px 200px 14px;\n  line-height: 150%;\n  font-size: 14px;\n  outline: none;\n}\ndiv.ProseMirror[contenteditable=true], div.ProseMirror[contenteditable=false] {\n    border: none !important;\n    width: 100%;\n    background-color: transparent;\n    color: var(--color-main-text);\n    opacity: 1;\n    -webkit-user-select: text;\n    user-select: text;\n    font-size: 14px;\n}\ndiv.ProseMirror li label.checkbox-label {\n    width: 100%;\n    display: flex;\n    margin-top: 10px;\n    margin-bottom: 1em;\n}\ndiv.ProseMirror li label.checkbox-label:before {\n      position: relative;\n      top: 2px;\n}\ndiv.ProseMirror li label.checkbox-label div.checkbox-wrapper {\n      margin-bottom: -1em;\n      width: 100%;\n}\ndiv.ProseMirror li label.checkbox-label div.checkbox-wrapper > p {\n        margin-top: -1px;\n        margin-bottom: 0;\n        padding-bottom: 10px;\n}\ndiv.ProseMirror p:first-child,\n  div.ProseMirror h1:first-child,\n  div.ProseMirror h2:first-child,\n  div.ProseMirror h3:first-child,\n  div.ProseMirror h4:first-child,\n  div.ProseMirror h5:first-child,\n  div.ProseMirror h6:first-child {\n    margin-top: 10px;\n}\ndiv.ProseMirror a {\n    color: var(--color-primary-element);\n    text-decoration: underline;\n    padding: .5em 0;\n}\ndiv.ProseMirror p {\n    margin-bottom: 1em;\n    line-height: 150%;\n}\ndiv.ProseMirror em {\n    font-style: italic;\n}\ndiv.ProseMirror h1,\n  div.ProseMirror h2,\n  div.ProseMirror h3,\n  div.ProseMirror h4,\n  div.ProseMirror h5,\n  div.ProseMirror h6 {\n    font-weight: 600;\n    line-height: 120%;\n    margin-top: 24px;\n    margin-bottom: 12px;\n    color: var(--color-main-text);\n}\ndiv.ProseMirror h1 {\n    font-size: 36px;\n    margin-top: 48px;\n}\ndiv.ProseMirror h2 {\n    font-size: 28px;\n    margin-top: 48px;\n}\ndiv.ProseMirror h3 {\n    font-size: 24px;\n}\ndiv.ProseMirror h4 {\n    font-size: 21px;\n}\ndiv.ProseMirror h5 {\n    font-size: 17px;\n}\ndiv.ProseMirror h6 {\n    font-size: 14px;\n}\ndiv.ProseMirror img {\n    cursor: default;\n    max-width: 100%;\n}\ndiv.ProseMirror hr {\n    padding: 2px 0;\n    border: none;\n    margin: 1em 0;\n    width: 100%;\n}\ndiv.ProseMirror hr:after {\n    content: \"\";\n    display: block;\n    height: 1px;\n    background-color: var(--color-border-dark);\n    line-height: 2px;\n}\ndiv.ProseMirror pre {\n    white-space: pre-wrap;\n    background-color: var(--color-background-dark);\n    border-radius: var(--border-radius);\n    padding: 1em 1.3em;\n    margin-bottom: 1em;\n}\ndiv.ProseMirror p code {\n    background-color: var(--color-background-dark);\n    border-radius: var(--border-radius);\n    padding: .1em .3em;\n}\ndiv.ProseMirror li {\n    position: relative;\n}\ndiv.ProseMirror ul, div.ProseMirror ol {\n    padding-left: 10px;\n    margin-left: 10px;\n}\ndiv.ProseMirror ul li {\n    list-style-type: disc;\n}\ndiv.ProseMirror ul > li > ul > li {\n    list-style-type: circle;\n}\ndiv.ProseMirror ul > li > ul > li ul li {\n    list-style-type: square;\n}\ndiv.ProseMirror blockquote {\n    padding-left: 1em;\n    border-left: 4px solid var(--color-primary-element);\n    color: var(--color-text-maxcontrast);\n    margin-left: 0;\n    margin-right: 0;\n}\n.ProseMirror-focused .ProseMirror-gapcursor {\n  display: block;\n}\n.editor__content p.is-empty:first-child::before {\n  content: attr(data-empty-text);\n  float: left;\n  color: var(--color-text-maxcontrast);\n  pointer-events: none;\n  height: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".image[data-v-336b1e4e] {\n  margin: 0;\n  padding: 0;\n}\n.image__caption[data-v-336b1e4e] {\n  text-align: center;\n  color: var(--color-text-lighter);\n}\n.image__caption input[type='text'][data-v-336b1e4e] {\n    width: 100%;\n    border: none;\n    text-align: center;\n}\n.icon-image[data-v-336b1e4e] {\n  margin-top: 10px;\n  height: 32px;\n  padding: 20px;\n  background-size: contain;\n}\n.image__loading[data-v-336b1e4e] {\n  height: 100px;\n}\n.image__placeholder .image__main[data-v-336b1e4e] {\n  background-color: var(--color-background-dark);\n  text-align: center;\n  padding: 20px;\n  border-radius: var(--border-radius);\n}\n.image__placeholder .image__main .icon-image[data-v-336b1e4e] {\n    opacity: 0.7;\n}\n.fade-enter-active[data-v-336b1e4e] {\n  transition: opacity .3s ease-in-out;\n}\n.fade-enter-to[data-v-336b1e4e] {\n  opacity: 1;\n}\n.fade-enter[data-v-336b1e4e] {\n  opacity: 0;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$":
/*!********************************************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages lazy ^\.\/.*$ namespace object ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1c": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./1c.js": [
		"./node_modules/highlight.js/lib/languages/1c.js",
		"highlight/1c"
	],
	"./abnf": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./abnf.js": [
		"./node_modules/highlight.js/lib/languages/abnf.js",
		"highlight/abnf"
	],
	"./accesslog": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./accesslog.js": [
		"./node_modules/highlight.js/lib/languages/accesslog.js",
		"highlight/accesslog"
	],
	"./actionscript": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./actionscript.js": [
		"./node_modules/highlight.js/lib/languages/actionscript.js",
		"highlight/actionscript"
	],
	"./ada": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./ada.js": [
		"./node_modules/highlight.js/lib/languages/ada.js",
		"highlight/ada"
	],
	"./angelscript": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./angelscript.js": [
		"./node_modules/highlight.js/lib/languages/angelscript.js",
		"highlight/angelscript"
	],
	"./apache": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./apache.js": [
		"./node_modules/highlight.js/lib/languages/apache.js",
		"highlight/apache"
	],
	"./applescript": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./applescript.js": [
		"./node_modules/highlight.js/lib/languages/applescript.js",
		"highlight/applescript"
	],
	"./arcade": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arcade.js": [
		"./node_modules/highlight.js/lib/languages/arcade.js",
		"highlight/arcade"
	],
	"./arduino": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./arduino.js": [
		"./node_modules/highlight.js/lib/languages/arduino.js",
		"highlight/arduino"
	],
	"./armasm": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./armasm.js": [
		"./node_modules/highlight.js/lib/languages/armasm.js",
		"highlight/armasm"
	],
	"./asciidoc": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./asciidoc.js": [
		"./node_modules/highlight.js/lib/languages/asciidoc.js",
		"highlight/asciidoc"
	],
	"./aspectj": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./aspectj.js": [
		"./node_modules/highlight.js/lib/languages/aspectj.js",
		"highlight/aspectj"
	],
	"./autohotkey": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autohotkey.js": [
		"./node_modules/highlight.js/lib/languages/autohotkey.js",
		"highlight/autohotkey"
	],
	"./autoit": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./autoit.js": [
		"./node_modules/highlight.js/lib/languages/autoit.js",
		"highlight/autoit"
	],
	"./avrasm": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./avrasm.js": [
		"./node_modules/highlight.js/lib/languages/avrasm.js",
		"highlight/avrasm"
	],
	"./awk": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./awk.js": [
		"./node_modules/highlight.js/lib/languages/awk.js",
		"highlight/awk"
	],
	"./axapta": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./axapta.js": [
		"./node_modules/highlight.js/lib/languages/axapta.js",
		"highlight/axapta"
	],
	"./bash": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./bash.js": [
		"./node_modules/highlight.js/lib/languages/bash.js",
		"highlight/bash"
	],
	"./basic": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./basic.js": [
		"./node_modules/highlight.js/lib/languages/basic.js",
		"highlight/basic"
	],
	"./bnf": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./bnf.js": [
		"./node_modules/highlight.js/lib/languages/bnf.js",
		"highlight/bnf"
	],
	"./brainfuck": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./brainfuck.js": [
		"./node_modules/highlight.js/lib/languages/brainfuck.js",
		"highlight/brainfuck"
	],
	"./cal": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./cal.js": [
		"./node_modules/highlight.js/lib/languages/cal.js",
		"highlight/cal"
	],
	"./capnproto": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./capnproto.js": [
		"./node_modules/highlight.js/lib/languages/capnproto.js",
		"highlight/capnproto"
	],
	"./ceylon": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./ceylon.js": [
		"./node_modules/highlight.js/lib/languages/ceylon.js",
		"highlight/ceylon"
	],
	"./clean": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clean.js": [
		"./node_modules/highlight.js/lib/languages/clean.js",
		"highlight/clean"
	],
	"./clojure": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./clojure-repl": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure-repl.js": [
		"./node_modules/highlight.js/lib/languages/clojure-repl.js",
		"highlight/clojure-repl"
	],
	"./clojure.js": [
		"./node_modules/highlight.js/lib/languages/clojure.js",
		"highlight/clojure"
	],
	"./cmake": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./cmake.js": [
		"./node_modules/highlight.js/lib/languages/cmake.js",
		"highlight/cmake"
	],
	"./coffeescript": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coffeescript.js": [
		"./node_modules/highlight.js/lib/languages/coffeescript.js",
		"highlight/coffeescript"
	],
	"./coq": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./coq.js": [
		"./node_modules/highlight.js/lib/languages/coq.js",
		"highlight/coq"
	],
	"./cos": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cos.js": [
		"./node_modules/highlight.js/lib/languages/cos.js",
		"highlight/cos"
	],
	"./cpp": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./cpp.js": [
		"./node_modules/highlight.js/lib/languages/cpp.js",
		"highlight/cpp"
	],
	"./crmsh": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crmsh.js": [
		"./node_modules/highlight.js/lib/languages/crmsh.js",
		"highlight/crmsh"
	],
	"./crystal": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./crystal.js": [
		"./node_modules/highlight.js/lib/languages/crystal.js",
		"highlight/crystal"
	],
	"./cs": [
		"./node_modules/highlight.js/lib/languages/cs.js",
		"highlight/cs"
	],
	"./cs.js": [
		"./node_modules/highlight.js/lib/languages/cs.js",
		"highlight/cs"
	],
	"./csp": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./csp.js": [
		"./node_modules/highlight.js/lib/languages/csp.js",
		"highlight/csp"
	],
	"./css": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./css.js": [
		"./node_modules/highlight.js/lib/languages/css.js",
		"highlight/css"
	],
	"./d": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./d.js": [
		"./node_modules/highlight.js/lib/languages/d.js",
		"highlight/d"
	],
	"./dart": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./dart.js": [
		"./node_modules/highlight.js/lib/languages/dart.js",
		"highlight/dart"
	],
	"./delphi": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./delphi.js": [
		"./node_modules/highlight.js/lib/languages/delphi.js",
		"highlight/delphi"
	],
	"./diff": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./diff.js": [
		"./node_modules/highlight.js/lib/languages/diff.js",
		"highlight/diff"
	],
	"./django": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./django.js": [
		"./node_modules/highlight.js/lib/languages/django.js",
		"highlight/django"
	],
	"./dns": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dns.js": [
		"./node_modules/highlight.js/lib/languages/dns.js",
		"highlight/dns"
	],
	"./dockerfile": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dockerfile.js": [
		"./node_modules/highlight.js/lib/languages/dockerfile.js",
		"highlight/dockerfile"
	],
	"./dos": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dos.js": [
		"./node_modules/highlight.js/lib/languages/dos.js",
		"highlight/dos"
	],
	"./dsconfig": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dsconfig.js": [
		"./node_modules/highlight.js/lib/languages/dsconfig.js",
		"highlight/dsconfig"
	],
	"./dts": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dts.js": [
		"./node_modules/highlight.js/lib/languages/dts.js",
		"highlight/dts"
	],
	"./dust": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./dust.js": [
		"./node_modules/highlight.js/lib/languages/dust.js",
		"highlight/dust"
	],
	"./ebnf": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./ebnf.js": [
		"./node_modules/highlight.js/lib/languages/ebnf.js",
		"highlight/ebnf"
	],
	"./elixir": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elixir.js": [
		"./node_modules/highlight.js/lib/languages/elixir.js",
		"highlight/elixir"
	],
	"./elm": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./elm.js": [
		"./node_modules/highlight.js/lib/languages/elm.js",
		"highlight/elm"
	],
	"./erb": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erb.js": [
		"./node_modules/highlight.js/lib/languages/erb.js",
		"highlight/erb"
	],
	"./erlang": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./erlang-repl": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang-repl.js": [
		"./node_modules/highlight.js/lib/languages/erlang-repl.js",
		"highlight/erlang-repl"
	],
	"./erlang.js": [
		"./node_modules/highlight.js/lib/languages/erlang.js",
		"highlight/erlang"
	],
	"./excel": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./excel.js": [
		"./node_modules/highlight.js/lib/languages/excel.js",
		"highlight/excel"
	],
	"./fix": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./fix.js": [
		"./node_modules/highlight.js/lib/languages/fix.js",
		"highlight/fix"
	],
	"./flix": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./flix.js": [
		"./node_modules/highlight.js/lib/languages/flix.js",
		"highlight/flix"
	],
	"./fortran": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fortran.js": [
		"./node_modules/highlight.js/lib/languages/fortran.js",
		"highlight/fortran"
	],
	"./fsharp": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./fsharp.js": [
		"./node_modules/highlight.js/lib/languages/fsharp.js",
		"highlight/fsharp"
	],
	"./gams": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gams.js": [
		"./node_modules/highlight.js/lib/languages/gams.js",
		"highlight/gams"
	],
	"./gauss": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gauss.js": [
		"./node_modules/highlight.js/lib/languages/gauss.js",
		"highlight/gauss"
	],
	"./gcode": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gcode.js": [
		"./node_modules/highlight.js/lib/languages/gcode.js",
		"highlight/gcode"
	],
	"./gherkin": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./gherkin.js": [
		"./node_modules/highlight.js/lib/languages/gherkin.js",
		"highlight/gherkin"
	],
	"./glsl": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./glsl.js": [
		"./node_modules/highlight.js/lib/languages/glsl.js",
		"highlight/glsl"
	],
	"./gml": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./gml.js": [
		"./node_modules/highlight.js/lib/languages/gml.js",
		"highlight/gml"
	],
	"./go": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./go.js": [
		"./node_modules/highlight.js/lib/languages/go.js",
		"highlight/go"
	],
	"./golo": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./golo.js": [
		"./node_modules/highlight.js/lib/languages/golo.js",
		"highlight/golo"
	],
	"./gradle": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./gradle.js": [
		"./node_modules/highlight.js/lib/languages/gradle.js",
		"highlight/gradle"
	],
	"./groovy": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./groovy.js": [
		"./node_modules/highlight.js/lib/languages/groovy.js",
		"highlight/groovy"
	],
	"./haml": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./haml.js": [
		"./node_modules/highlight.js/lib/languages/haml.js",
		"highlight/haml"
	],
	"./handlebars": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./handlebars.js": [
		"./node_modules/highlight.js/lib/languages/handlebars.js",
		"highlight/handlebars"
	],
	"./haskell": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haskell.js": [
		"./node_modules/highlight.js/lib/languages/haskell.js",
		"highlight/haskell"
	],
	"./haxe": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./haxe.js": [
		"./node_modules/highlight.js/lib/languages/haxe.js",
		"highlight/haxe"
	],
	"./hsp": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./hsp.js": [
		"./node_modules/highlight.js/lib/languages/hsp.js",
		"highlight/hsp"
	],
	"./htmlbars": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./htmlbars.js": [
		"./node_modules/highlight.js/lib/languages/htmlbars.js",
		"highlight/htmlbars"
	],
	"./http": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./http.js": [
		"./node_modules/highlight.js/lib/languages/http.js",
		"highlight/http"
	],
	"./hy": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./hy.js": [
		"./node_modules/highlight.js/lib/languages/hy.js",
		"highlight/hy"
	],
	"./inform7": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./inform7.js": [
		"./node_modules/highlight.js/lib/languages/inform7.js",
		"highlight/inform7"
	],
	"./ini": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./ini.js": [
		"./node_modules/highlight.js/lib/languages/ini.js",
		"highlight/ini"
	],
	"./irpf90": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./irpf90.js": [
		"./node_modules/highlight.js/lib/languages/irpf90.js",
		"highlight/irpf90"
	],
	"./isbl": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./isbl.js": [
		"./node_modules/highlight.js/lib/languages/isbl.js",
		"highlight/isbl"
	],
	"./java": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./java.js": [
		"./node_modules/highlight.js/lib/languages/java.js",
		"highlight/java"
	],
	"./javascript": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./javascript.js": [
		"./node_modules/highlight.js/lib/languages/javascript.js",
		"highlight/javascript"
	],
	"./jboss-cli": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./jboss-cli.js": [
		"./node_modules/highlight.js/lib/languages/jboss-cli.js",
		"highlight/jboss-cli"
	],
	"./json": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./json.js": [
		"./node_modules/highlight.js/lib/languages/json.js",
		"highlight/json"
	],
	"./julia": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./julia-repl": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia-repl.js": [
		"./node_modules/highlight.js/lib/languages/julia-repl.js",
		"highlight/julia-repl"
	],
	"./julia.js": [
		"./node_modules/highlight.js/lib/languages/julia.js",
		"highlight/julia"
	],
	"./kotlin": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./kotlin.js": [
		"./node_modules/highlight.js/lib/languages/kotlin.js",
		"highlight/kotlin"
	],
	"./lasso": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./lasso.js": [
		"./node_modules/highlight.js/lib/languages/lasso.js",
		"highlight/lasso"
	],
	"./ldif": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./ldif.js": [
		"./node_modules/highlight.js/lib/languages/ldif.js",
		"highlight/ldif"
	],
	"./leaf": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./leaf.js": [
		"./node_modules/highlight.js/lib/languages/leaf.js",
		"highlight/leaf"
	],
	"./less": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./less.js": [
		"./node_modules/highlight.js/lib/languages/less.js",
		"highlight/less"
	],
	"./lisp": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./lisp.js": [
		"./node_modules/highlight.js/lib/languages/lisp.js",
		"highlight/lisp"
	],
	"./livecodeserver": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livecodeserver.js": [
		"./node_modules/highlight.js/lib/languages/livecodeserver.js",
		"highlight/livecodeserver"
	],
	"./livescript": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./livescript.js": [
		"./node_modules/highlight.js/lib/languages/livescript.js",
		"highlight/livescript"
	],
	"./llvm": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./llvm.js": [
		"./node_modules/highlight.js/lib/languages/llvm.js",
		"highlight/llvm"
	],
	"./lsl": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lsl.js": [
		"./node_modules/highlight.js/lib/languages/lsl.js",
		"highlight/lsl"
	],
	"./lua": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./lua.js": [
		"./node_modules/highlight.js/lib/languages/lua.js",
		"highlight/lua"
	],
	"./makefile": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./makefile.js": [
		"./node_modules/highlight.js/lib/languages/makefile.js",
		"highlight/makefile"
	],
	"./markdown": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./markdown.js": [
		"./node_modules/highlight.js/lib/languages/markdown.js",
		"highlight/markdown"
	],
	"./mathematica": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./mathematica.js": [
		"./node_modules/highlight.js/lib/languages/mathematica.js",
		"highlight/mathematica"
	],
	"./matlab": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./matlab.js": [
		"./node_modules/highlight.js/lib/languages/matlab.js",
		"highlight/matlab"
	],
	"./maxima": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./maxima.js": [
		"./node_modules/highlight.js/lib/languages/maxima.js",
		"highlight/maxima"
	],
	"./mel": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mel.js": [
		"./node_modules/highlight.js/lib/languages/mel.js",
		"highlight/mel"
	],
	"./mercury": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mercury.js": [
		"./node_modules/highlight.js/lib/languages/mercury.js",
		"highlight/mercury"
	],
	"./mipsasm": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mipsasm.js": [
		"./node_modules/highlight.js/lib/languages/mipsasm.js",
		"highlight/mipsasm"
	],
	"./mizar": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mizar.js": [
		"./node_modules/highlight.js/lib/languages/mizar.js",
		"highlight/mizar"
	],
	"./mojolicious": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./mojolicious.js": [
		"./node_modules/highlight.js/lib/languages/mojolicious.js",
		"highlight/mojolicious"
	],
	"./monkey": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./monkey.js": [
		"./node_modules/highlight.js/lib/languages/monkey.js",
		"highlight/monkey"
	],
	"./moonscript": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./moonscript.js": [
		"./node_modules/highlight.js/lib/languages/moonscript.js",
		"highlight/moonscript"
	],
	"./n1ql": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./n1ql.js": [
		"./node_modules/highlight.js/lib/languages/n1ql.js",
		"highlight/n1ql"
	],
	"./nginx": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nginx.js": [
		"./node_modules/highlight.js/lib/languages/nginx.js",
		"highlight/nginx"
	],
	"./nimrod": [
		"./node_modules/highlight.js/lib/languages/nimrod.js",
		"highlight/nimrod"
	],
	"./nimrod.js": [
		"./node_modules/highlight.js/lib/languages/nimrod.js",
		"highlight/nimrod"
	],
	"./nix": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nix.js": [
		"./node_modules/highlight.js/lib/languages/nix.js",
		"highlight/nix"
	],
	"./nsis": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./nsis.js": [
		"./node_modules/highlight.js/lib/languages/nsis.js",
		"highlight/nsis"
	],
	"./objectivec": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./objectivec.js": [
		"./node_modules/highlight.js/lib/languages/objectivec.js",
		"highlight/objectivec"
	],
	"./ocaml": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./ocaml.js": [
		"./node_modules/highlight.js/lib/languages/ocaml.js",
		"highlight/ocaml"
	],
	"./openscad": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./openscad.js": [
		"./node_modules/highlight.js/lib/languages/openscad.js",
		"highlight/openscad"
	],
	"./oxygene": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./oxygene.js": [
		"./node_modules/highlight.js/lib/languages/oxygene.js",
		"highlight/oxygene"
	],
	"./parser3": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./parser3.js": [
		"./node_modules/highlight.js/lib/languages/parser3.js",
		"highlight/parser3"
	],
	"./perl": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./perl.js": [
		"./node_modules/highlight.js/lib/languages/perl.js",
		"highlight/perl"
	],
	"./pf": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pf.js": [
		"./node_modules/highlight.js/lib/languages/pf.js",
		"highlight/pf"
	],
	"./pgsql": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./pgsql.js": [
		"./node_modules/highlight.js/lib/languages/pgsql.js",
		"highlight/pgsql"
	],
	"./php": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./php.js": [
		"./node_modules/highlight.js/lib/languages/php.js",
		"highlight/php"
	],
	"./plaintext": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./plaintext.js": [
		"./node_modules/highlight.js/lib/languages/plaintext.js",
		"highlight/plaintext"
	],
	"./pony": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./pony.js": [
		"./node_modules/highlight.js/lib/languages/pony.js",
		"highlight/pony"
	],
	"./powershell": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./powershell.js": [
		"./node_modules/highlight.js/lib/languages/powershell.js",
		"highlight/powershell"
	],
	"./processing": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./processing.js": [
		"./node_modules/highlight.js/lib/languages/processing.js",
		"highlight/processing"
	],
	"./profile": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./profile.js": [
		"./node_modules/highlight.js/lib/languages/profile.js",
		"highlight/profile"
	],
	"./prolog": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./prolog.js": [
		"./node_modules/highlight.js/lib/languages/prolog.js",
		"highlight/prolog"
	],
	"./properties": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./properties.js": [
		"./node_modules/highlight.js/lib/languages/properties.js",
		"highlight/properties"
	],
	"./protobuf": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./protobuf.js": [
		"./node_modules/highlight.js/lib/languages/protobuf.js",
		"highlight/protobuf"
	],
	"./puppet": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./puppet.js": [
		"./node_modules/highlight.js/lib/languages/puppet.js",
		"highlight/puppet"
	],
	"./purebasic": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./purebasic.js": [
		"./node_modules/highlight.js/lib/languages/purebasic.js",
		"highlight/purebasic"
	],
	"./python": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./python.js": [
		"./node_modules/highlight.js/lib/languages/python.js",
		"highlight/python"
	],
	"./q": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./q.js": [
		"./node_modules/highlight.js/lib/languages/q.js",
		"highlight/q"
	],
	"./qml": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./qml.js": [
		"./node_modules/highlight.js/lib/languages/qml.js",
		"highlight/qml"
	],
	"./r": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./r.js": [
		"./node_modules/highlight.js/lib/languages/r.js",
		"highlight/r"
	],
	"./reasonml": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./reasonml.js": [
		"./node_modules/highlight.js/lib/languages/reasonml.js",
		"highlight/reasonml"
	],
	"./rib": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./rib.js": [
		"./node_modules/highlight.js/lib/languages/rib.js",
		"highlight/rib"
	],
	"./roboconf": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./roboconf.js": [
		"./node_modules/highlight.js/lib/languages/roboconf.js",
		"highlight/roboconf"
	],
	"./routeros": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./routeros.js": [
		"./node_modules/highlight.js/lib/languages/routeros.js",
		"highlight/routeros"
	],
	"./rsl": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./rsl.js": [
		"./node_modules/highlight.js/lib/languages/rsl.js",
		"highlight/rsl"
	],
	"./ruby": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruby.js": [
		"./node_modules/highlight.js/lib/languages/ruby.js",
		"highlight/ruby"
	],
	"./ruleslanguage": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./ruleslanguage.js": [
		"./node_modules/highlight.js/lib/languages/ruleslanguage.js",
		"highlight/ruleslanguage"
	],
	"./rust": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./rust.js": [
		"./node_modules/highlight.js/lib/languages/rust.js",
		"highlight/rust"
	],
	"./sas": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./sas.js": [
		"./node_modules/highlight.js/lib/languages/sas.js",
		"highlight/sas"
	],
	"./scala": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scala.js": [
		"./node_modules/highlight.js/lib/languages/scala.js",
		"highlight/scala"
	],
	"./scheme": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scheme.js": [
		"./node_modules/highlight.js/lib/languages/scheme.js",
		"highlight/scheme"
	],
	"./scilab": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scilab.js": [
		"./node_modules/highlight.js/lib/languages/scilab.js",
		"highlight/scilab"
	],
	"./scss": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./scss.js": [
		"./node_modules/highlight.js/lib/languages/scss.js",
		"highlight/scss"
	],
	"./shell": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./shell.js": [
		"./node_modules/highlight.js/lib/languages/shell.js",
		"highlight/shell"
	],
	"./smali": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smali.js": [
		"./node_modules/highlight.js/lib/languages/smali.js",
		"highlight/smali"
	],
	"./smalltalk": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./smalltalk.js": [
		"./node_modules/highlight.js/lib/languages/smalltalk.js",
		"highlight/smalltalk"
	],
	"./sml": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sml.js": [
		"./node_modules/highlight.js/lib/languages/sml.js",
		"highlight/sml"
	],
	"./sqf": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sqf.js": [
		"./node_modules/highlight.js/lib/languages/sqf.js",
		"highlight/sqf"
	],
	"./sql": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./sql.js": [
		"./node_modules/highlight.js/lib/languages/sql.js",
		"highlight/sql"
	],
	"./stan": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stan.js": [
		"./node_modules/highlight.js/lib/languages/stan.js",
		"highlight/stan"
	],
	"./stata": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./stata.js": [
		"./node_modules/highlight.js/lib/languages/stata.js",
		"highlight/stata"
	],
	"./step21": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./step21.js": [
		"./node_modules/highlight.js/lib/languages/step21.js",
		"highlight/step21"
	],
	"./stylus": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./stylus.js": [
		"./node_modules/highlight.js/lib/languages/stylus.js",
		"highlight/stylus"
	],
	"./subunit": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./subunit.js": [
		"./node_modules/highlight.js/lib/languages/subunit.js",
		"highlight/subunit"
	],
	"./swift": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./swift.js": [
		"./node_modules/highlight.js/lib/languages/swift.js",
		"highlight/swift"
	],
	"./taggerscript": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./taggerscript.js": [
		"./node_modules/highlight.js/lib/languages/taggerscript.js",
		"highlight/taggerscript"
	],
	"./tap": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tap.js": [
		"./node_modules/highlight.js/lib/languages/tap.js",
		"highlight/tap"
	],
	"./tcl": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tcl.js": [
		"./node_modules/highlight.js/lib/languages/tcl.js",
		"highlight/tcl"
	],
	"./tex": [
		"./node_modules/highlight.js/lib/languages/tex.js",
		"highlight/tex"
	],
	"./tex.js": [
		"./node_modules/highlight.js/lib/languages/tex.js",
		"highlight/tex"
	],
	"./thrift": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./thrift.js": [
		"./node_modules/highlight.js/lib/languages/thrift.js",
		"highlight/thrift"
	],
	"./tp": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./tp.js": [
		"./node_modules/highlight.js/lib/languages/tp.js",
		"highlight/tp"
	],
	"./twig": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./twig.js": [
		"./node_modules/highlight.js/lib/languages/twig.js",
		"highlight/twig"
	],
	"./typescript": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./typescript.js": [
		"./node_modules/highlight.js/lib/languages/typescript.js",
		"highlight/typescript"
	],
	"./vala": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vala.js": [
		"./node_modules/highlight.js/lib/languages/vala.js",
		"highlight/vala"
	],
	"./vbnet": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbnet.js": [
		"./node_modules/highlight.js/lib/languages/vbnet.js",
		"highlight/vbnet"
	],
	"./vbscript": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./vbscript-html": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript-html.js": [
		"./node_modules/highlight.js/lib/languages/vbscript-html.js",
		"highlight/vbscript-html"
	],
	"./vbscript.js": [
		"./node_modules/highlight.js/lib/languages/vbscript.js",
		"highlight/vbscript"
	],
	"./verilog": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./verilog.js": [
		"./node_modules/highlight.js/lib/languages/verilog.js",
		"highlight/verilog"
	],
	"./vhdl": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vhdl.js": [
		"./node_modules/highlight.js/lib/languages/vhdl.js",
		"highlight/vhdl"
	],
	"./vim": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./vim.js": [
		"./node_modules/highlight.js/lib/languages/vim.js",
		"highlight/vim"
	],
	"./x86asm": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./x86asm.js": [
		"./node_modules/highlight.js/lib/languages/x86asm.js",
		"highlight/x86asm"
	],
	"./xl": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xl.js": [
		"./node_modules/highlight.js/lib/languages/xl.js",
		"highlight/xl"
	],
	"./xml": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xml.js": [
		"./node_modules/highlight.js/lib/languages/xml.js",
		"highlight/xml"
	],
	"./xquery": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./xquery.js": [
		"./node_modules/highlight.js/lib/languages/xquery.js",
		"highlight/xquery"
	],
	"./yaml": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./yaml.js": [
		"./node_modules/highlight.js/lib/languages/yaml.js",
		"highlight/yaml"
	],
	"./zephir": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	],
	"./zephir.js": [
		"./node_modules/highlight.js/lib/languages/zephir.js",
		"highlight/zephir"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 7);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.editor
    ? _c("EditorContent", {
        attrs: { id: "read-only-editor", editor: _vm.editor }
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "image",
      class: { "icon-loading": !_vm.loaded },
      attrs: { "data-src": _vm.src }
    },
    [
      _vm.imageLoaded && _vm.isSupportedImage
        ? _c(
            "div",
            [
              _c("transition", { attrs: { name: "fade" } }, [
                _c("img", {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.loaded,
                      expression: "loaded"
                    }
                  ],
                  staticClass: "image__main",
                  attrs: { src: _vm.src },
                  on: { load: _vm.onLoaded }
                })
              ]),
              _vm._v(" "),
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__caption"
                  },
                  [
                    _c("input", {
                      ref: "altInput",
                      attrs: { type: "text" },
                      domProps: { value: _vm.alt },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.updateAlt()
                        }
                      }
                    })
                  ]
                )
              ])
            ],
            1
          )
        : _c(
            "div",
            { staticClass: "image__placeholder" },
            [
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__main"
                  },
                  [
                    _c("div", {
                      staticClass: "icon-image",
                      style: _vm.mimeIcon
                    }),
                    _vm._v(" "),
                    _c("p", [
                      _c(
                        "a",
                        {
                          attrs: {
                            href: _vm.internalLinkOrImage,
                            target: "_blank"
                          }
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm.isSupportedImage
                                ? _vm.t("text", "Show image")
                                : _vm.t("text", "Show file")
                            )
                          )
                        ]
                      )
                    ])
                  ]
                )
              ]),
              _c("transition", { attrs: { name: "fade" } }, [
                _c(
                  "div",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.loaded,
                        expression: "loaded"
                      }
                    ],
                    staticClass: "image__caption"
                  },
                  [
                    _c("input", {
                      ref: "altInput",
                      attrs: { type: "text" },
                      domProps: { value: _vm.alt },
                      on: {
                        keyup: function($event) {
                          if (
                            !$event.type.indexOf("key") &&
                            _vm._k(
                              $event.keyCode,
                              "enter",
                              13,
                              $event.key,
                              "Enter"
                            )
                          ) {
                            return null
                          }
                          return _vm.updateAlt()
                        }
                      }
                    })
                  ]
                )
              ])
            ],
            1
          )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5ba6a5c3", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ed017fbc", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2ff9b55c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/EditorFactory.js":
/*!******************************!*\
  !*** ./src/EditorFactory.js ***!
  \******************************/
/*! exports provided: default, markdownit, createEditor, createMarkdownSerializer, serializePlainText, loadSyntaxHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markdownit", function() { return markdownit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEditor", function() { return createEditor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMarkdownSerializer", function() { return createMarkdownSerializer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serializePlainText", function() { return serializePlainText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSyntaxHighlight", function() { return loadSyntaxHighlight; });
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marks */ "./src/marks/index.js");
/* harmony import */ var _nodes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nodes */ "./src/nodes/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! markdown-it */ "./node_modules/markdown-it/index.js");
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-it-task-lists */ "./node_modules/markdown-it-task-lists/index.js");
/* harmony import */ var markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prosemirror_markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prosemirror-markdown */ "./node_modules/prosemirror-markdown/dist/index.es.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */








var loadSyntaxHighlight =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(language) {
    var languages, modules, i, lang;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            languages = [language];
            modules = {};
            i = 0;

          case 3:
            if (!(i < languages.length)) {
              _context.next = 17;
              break;
            }

            _context.prev = 4;
            _context.next = 7;
            return __webpack_require__("./node_modules/highlight.js/lib/languages lazy recursive ^\\.\\/.*$")("./" + languages[i]);

          case 7:
            lang = _context.sent;
            modules[languages[i]] = lang.default;
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](4);
            return _context.abrupt("return", undefined);

          case 14:
            i++;
            _context.next = 3;
            break;

          case 17:
            if (!(Object.keys(modules).length === 0 && modules.constructor === Object)) {
              _context.next = 19;
              break;
            }

            return _context.abrupt("return", undefined);

          case 19:
            return _context.abrupt("return", {
              languages: modules
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 11]]);
  }));

  return function loadSyntaxHighlight(_x) {
    return _ref.apply(this, arguments);
  };
}();

var createEditor = function createEditor(_ref2) {
  var content = _ref2.content,
      onInit = _ref2.onInit,
      onUpdate = _ref2.onUpdate,
      extensions = _ref2.extensions,
      enableRichEditing = _ref2.enableRichEditing,
      languages = _ref2.languages;
  var richEditingExtensions = [];

  if (enableRichEditing) {
    richEditingExtensions = [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Heading"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Code"](), new _marks__WEBPACK_IMPORTED_MODULE_2__["Strong"](), new _marks__WEBPACK_IMPORTED_MODULE_2__["Italic"](), new _marks__WEBPACK_IMPORTED_MODULE_2__["Strike"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HardBreak"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["HorizontalRule"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["BulletList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["OrderedList"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Blockquote"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlock"](), new _nodes__WEBPACK_IMPORTED_MODULE_3__["ListItem"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Link"](), new _nodes__WEBPACK_IMPORTED_MODULE_3__["Image"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["Placeholder"]({
      emptyNodeClass: 'is-empty',
      emptyNodeText: 'Add notes, lists or links …',
      showOnlyWhenEditable: true
    })];
  } else {
    richEditingExtensions = [new _nodes__WEBPACK_IMPORTED_MODULE_3__["PlainTextDocument"](), new tiptap__WEBPACK_IMPORTED_MODULE_0__["Text"](), new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["CodeBlockHighlight"](_objectSpread({}, languages))];
  }

  extensions = extensions || [];
  return new tiptap__WEBPACK_IMPORTED_MODULE_0__["Editor"]({
    content: content,
    onInit: onInit,
    onUpdate: onUpdate,
    extensions: [].concat(_toConsumableArray(richEditingExtensions), [new tiptap_extensions__WEBPACK_IMPORTED_MODULE_1__["History"]()]).concat(extensions),
    useBuiltInExtensions: enableRichEditing
  });
};

var markdownit = markdown_it__WEBPACK_IMPORTED_MODULE_4___default()('commonmark', {
  html: false,
  breaks: false
}).enable('strikethrough').use(markdown_it_task_lists__WEBPACK_IMPORTED_MODULE_5___default.a, {
  enable: true,
  labelAfter: true
});

var SerializeException = function SerializeException(message) {
  this.message = message;
};

var createMarkdownSerializer = function createMarkdownSerializer(_nodes, _marks) {
  var nodes = Object.entries(_nodes).filter(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        node = _ref4[1];

    return node.toMarkdown;
  }).reduce(function (items, _ref5) {
    var _ref6 = _slicedToArray(_ref5, 2),
        name = _ref6[0],
        toMarkdown = _ref6[1].toMarkdown;

    return _objectSpread({}, items, _defineProperty({}, name, toMarkdown));
  }, {});
  var marks = Object.entries(_marks).filter(function (_ref7) {
    var _ref8 = _slicedToArray(_ref7, 2),
        node = _ref8[1];

    return node.toMarkdown;
  }).reduce(function (items, _ref9) {
    var _ref10 = _slicedToArray(_ref9, 2),
        name = _ref10[0],
        toMarkdown = _ref10[1].toMarkdown;

    return _objectSpread({}, items, _defineProperty({}, name, toMarkdown));
  }, {});
  return {
    serializer: new prosemirror_markdown__WEBPACK_IMPORTED_MODULE_6__["MarkdownSerializer"](_objectSpread({}, prosemirror_markdown__WEBPACK_IMPORTED_MODULE_6__["defaultMarkdownSerializer"].nodes, {}, nodes), _objectSpread({}, prosemirror_markdown__WEBPACK_IMPORTED_MODULE_6__["defaultMarkdownSerializer"].marks, {}, marks)),
    serialize: function serialize(content, options) {
      return this.serializer.serialize(content, _objectSpread({}, options, {
        tightLists: true
      })).split('\\[').join('[').split('\\]').join(']');
    }
  };
};

var serializePlainText = function serializePlainText(tiptap) {
  var doc = tiptap.getJSON();

  if (doc.content.length !== 1 || typeof doc.content[0].content === 'undefined' || doc.content[0].content.length !== 1) {
    if (doc.content[0].type === 'code_block' && typeof doc.content[0].content === 'undefined') {
      return '';
    }

    throw new SerializeException('Failed to serialize document to plain text');
  }

  var codeBlock = doc.content[0].content[0];

  if (codeBlock.type !== 'text') {
    throw new SerializeException('Failed to serialize document to plain text');
  }

  return codeBlock.text;
};

/* harmony default export */ __webpack_exports__["default"] = (createEditor);


/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue":
/*!*******************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/ReadOnlyEditor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&":
/*!**************************************************************************!*\
  !*** ./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ReadOnlyEditor.vue?vue&type=template&id=41c92d1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/components/ReadOnlyEditor.vue?vue&type=template&id=41c92d1f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ReadOnlyEditor_vue_vue_type_template_id_41c92d1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/marks/index.js":
/*!****************************!*\
  !*** ./src/marks/index.js ***!
  \****************************/
/*! exports provided: Strong, Italic, Strike */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strong", function() { return Strong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Italic", function() { return Italic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strike", function() { return Strike; });
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

/**
 * This file maps prosemirror mark names to tiptap classes,
 * so we can reuse the prosemirror-markdown default parser for now
 */

var Strong =
/*#__PURE__*/
function (_Bold) {
  _inherits(Strong, _Bold);

  function Strong() {
    _classCallCheck(this, Strong);

    return _possibleConstructorReturn(this, _getPrototypeOf(Strong).apply(this, arguments));
  }

  _createClass(Strong, [{
    key: "name",
    get: function get() {
      return 'strong';
    }
  }]);

  return Strong;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Bold"]);

var Italic =
/*#__PURE__*/
function (_TipTapItalic) {
  _inherits(Italic, _TipTapItalic);

  function Italic() {
    _classCallCheck(this, Italic);

    return _possibleConstructorReturn(this, _getPrototypeOf(Italic).apply(this, arguments));
  }

  _createClass(Italic, [{
    key: "name",
    get: function get() {
      return 'em';
    }
  }]);

  return Italic;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Italic"]);

var Strike =
/*#__PURE__*/
function (_TipTapStrike) {
  _inherits(Strike, _TipTapStrike);

  function Strike() {
    _classCallCheck(this, Strike);

    return _possibleConstructorReturn(this, _getPrototypeOf(Strike).apply(this, arguments));
  }

  _createClass(Strike, [{
    key: "schema",
    get: function get() {
      return {
        parseDOM: [{
          tag: 's'
        }, {
          tag: 'del'
        }, {
          tag: 'strike'
        }, {
          style: 'text-decoration',
          getAttrs: function getAttrs(value) {
            return value === 'line-through';
          }
        }],
        toDOM: function toDOM() {
          return ['s', 0];
        },
        toMarkdown: {
          open: '~~',
          close: '~~',
          mixable: true,
          expelEnclosingWhitespace: true
        }
      };
    }
  }]);

  return Strike;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Strike"]);
/** Strike is currently unsupported by prosemirror-markdown */




/***/ }),

/***/ "./src/nodes/Image.js":
/*!****************************!*\
  !*** ./src/nodes/Image.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var _ImageView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView */ "./src/nodes/ImageView.vue");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



var Image =
/*#__PURE__*/
function (_TiptapImage) {
  _inherits(Image, _TiptapImage);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "view",
    get: function get() {
      return _ImageView__WEBPACK_IMPORTED_MODULE_1__["default"];
    }
  }, {
    key: "schema",
    get: function get() {
      return _objectSpread({}, _get(_getPrototypeOf(Image.prototype), "schema", this), {
        selectable: false
      });
    }
  }]);

  return Image;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["Image"]);



/***/ }),

/***/ "./src/nodes/ImageView.vue":
/*!*********************************!*\
  !*** ./src/nodes/ImageView.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");
/* harmony import */ var _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageView.vue?vue&type=script&lang=js& */ "./src/nodes/ImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "336b1e4e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/nodes/ImageView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/dist/cjs.js!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=style&index=0&id=336b1e4e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_style_index_0_id_336b1e4e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./ImageView.vue?vue&type=template&id=336b1e4e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/nodes/ImageView.vue?vue&type=template&id=336b1e4e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageView_vue_vue_type_template_id_336b1e4e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/nodes/ListItem.js":
/*!*******************************!*\
  !*** ./src/nodes/ListItem.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ListItem; });
/* harmony import */ var tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap-extensions */ "./node_modules/tiptap-extensions/dist/extensions.esm.js");
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_commands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiptap-commands */ "./node_modules/tiptap-commands/dist/commands.esm.js");
/* harmony import */ var prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prosemirror-utils */ "./node_modules/prosemirror-utils/dist/index.js");
/* harmony import */ var prosemirror_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */




var TYPES = {
  BULLET: 0,
  CHECKBOX: 1
};

var getParentList = function getParentList(schema, selection) {
  return Object(prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__["findParentNode"])(function (node) {
    return node.type === schema.nodes.list_item;
  })(selection);
};

var ListItem =
/*#__PURE__*/
function (_TiptapListItem) {
  _inherits(ListItem, _TiptapListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "commands",
    value: function commands(_ref) {
      var type = _ref.type,
          schema = _ref.schema;
      return {
        'bullet_list_item': function bullet_list_item() {
          return function (state, dispatch, view) {
            return Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_2__["toggleList"])(schema.nodes.bullet_list, type)(state, dispatch, view);
          };
        },
        'todo_item': function todo_item() {
          return function (state, dispatch, view) {
            var schema = state.schema;
            var selection = state.selection;
            var $from = selection.$from;
            var $to = selection.$to;
            var range = $from.blockRange($to);
            var tr = state.tr;
            var parentList = getParentList(schema, selection);

            if (typeof parentList === 'undefined') {
              Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_2__["toggleList"])(schema.nodes.bullet_list, type)(state, function (_transaction) {
                tr = _transaction;
              }, view);
              parentList = getParentList(schema, tr.selection);
            }

            if (!range || typeof parentList === 'undefined') {
              return false;
            }

            tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, {
              type: parentList.node.attrs.type === TYPES.CHECKBOX ? TYPES.BULLET : TYPES.CHECKBOX
            });
            tr.scrollIntoView();

            if (dispatch) {
              dispatch(tr);
            }
          };
        }
      };
    }
  }, {
    key: "defaultOptions",
    get: function get() {
      return {
        nested: true
      };
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        attrs: {
          done: {
            default: false
          },
          type: {
            default: TYPES.BULLET
          }
        },
        draggable: true,
        content: 'paragraph block*',
        toDOM: function toDOM(node) {
          if (node.attrs.type === TYPES.BULLET) {
            return ['li', 0];
          }

          var checkboxAttributes = {
            type: 'checkbox',
            class: 'checkbox'
          };

          if (node.attrs.done) {
            checkboxAttributes.checked = true;
          }

          return ['li', ['input', checkboxAttributes], ['label', {
            class: 'checkbox-label'
          }, ['div', {
            class: 'checkbox-wrapper'
          }, 0]]];
        },
        parseDOM: [{
          priority: 100,
          tag: 'li',
          getAttrs: function getAttrs(el) {
            var checkbox = el.querySelector('input[type=checkbox]');
            return {
              done: checkbox && checkbox.checked,
              type: checkbox ? TYPES.CHECKBOX : TYPES.BULLET
            };
          }
        }],
        toMarkdown: function toMarkdown(state, node) {
          if (node.attrs.type === TYPES.CHECKBOX) {
            state.write("[".concat(node.attrs.done ? 'x' : ' ', "] "));
          }

          state.renderContent(node);
        }
      };
    }
  }, {
    key: "plugins",
    get: function get() {
      return [new tiptap__WEBPACK_IMPORTED_MODULE_1__["Plugin"]({
        props: {
          handleClick: function handleClick(view, pos, event) {
            var state = view.state;
            var schema = state.schema;
            var selection = state.selection;
            var $from = selection.$from;
            var $to = selection.$to;
            var range = $from.blockRange($to);

            if (!range) {
              return false;
            }

            var parentList = Object(prosemirror_utils__WEBPACK_IMPORTED_MODULE_3__["findParentNode"])(function (node) {
              return node.type === schema.nodes.list_item;
            })(selection);
            var isLabel = event.target.tagName.toLowerCase() === 'label';

            if (typeof parentList === 'undefined' || parentList.node.attrs.type !== TYPES.CHECKBOX || !isLabel) {
              return;
            }

            var tr = state.tr;
            tr.setNodeMarkup(parentList.pos, schema.nodes.list_item, {
              done: !parentList.node.attrs.done,
              type: TYPES.CHECKBOX
            });
            view.dispatch(tr);
          }
        }
      })];
    }
  }]);

  return ListItem;
}(tiptap_extensions__WEBPACK_IMPORTED_MODULE_0__["ListItem"]);



/***/ }),

/***/ "./src/nodes/PlainTextDocument.js":
/*!****************************************!*\
  !*** ./src/nodes/PlainTextDocument.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlainTextDocument; });
/* harmony import */ var tiptap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiptap */ "./node_modules/tiptap/dist/tiptap.esm.js");
/* harmony import */ var tiptap_commands__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiptap-commands */ "./node_modules/tiptap-commands/dist/commands.esm.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */



var PlainTextDocument =
/*#__PURE__*/
function (_Node) {
  _inherits(PlainTextDocument, _Node);

  function PlainTextDocument() {
    _classCallCheck(this, PlainTextDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(PlainTextDocument).apply(this, arguments));
  }

  _createClass(PlainTextDocument, [{
    key: "keys",
    value: function keys() {
      var _this = this;

      return {
        Tab: function Tab(state) {
          Object(tiptap_commands__WEBPACK_IMPORTED_MODULE_1__["insertText"])('\t')(state, _this.editor.view.dispatch, _this.editor.view);
          return true;
        }
      };
    }
  }, {
    key: "name",
    get: function get() {
      return 'doc';
    }
  }, {
    key: "schema",
    get: function get() {
      return {
        content: 'block'
      };
    }
  }]);

  return PlainTextDocument;
}(tiptap__WEBPACK_IMPORTED_MODULE_0__["Node"]);



/***/ }),

/***/ "./src/nodes/index.js":
/*!****************************!*\
  !*** ./src/nodes/index.js ***!
  \****************************/
/*! exports provided: Image, PlainTextDocument, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Image */ "./src/nodes/Image.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _Image__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PlainTextDocument */ "./src/nodes/PlainTextDocument.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlainTextDocument", function() { return _PlainTextDocument__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ListItem */ "./src/nodes/ListItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return _ListItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/*
 * @copyright Copyright (c) 2019 Julius Härtl <jus@bitgrid.net>
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
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */





/***/ })

}]);
//# sourceMappingURL=preview.js.map?v=0856967229f86fc0402e