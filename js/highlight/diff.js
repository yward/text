(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/diff"],{

/***/ "./node_modules/highlight.js/lib/languages/diff.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/diff.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
  return {
    aliases: ['patch'],
    contains: [
      {
        className: 'meta',
        relevance: 10,
        variants: [
          {begin: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/},
          {begin: /^\*\*\* +\d+,\d+ +\*\*\*\*$/},
          {begin: /^\-\-\- +\d+,\d+ +\-\-\-\-$/}
        ]
      },
      {
        className: 'comment',
        variants: [
          {begin: /Index: /, end: /$/},
          {begin: /={3,}/, end: /$/},
          {begin: /^\-{3}/, end: /$/},
          {begin: /^\*{3} /, end: /$/},
          {begin: /^\+{3}/, end: /$/},
          {begin: /^\*{15}$/ }
        ]
      },
      {
        className: 'addition',
        begin: '^\\+', end: '$'
      },
      {
        className: 'deletion',
        begin: '^\\-', end: '$'
      },
      {
        className: 'addition',
        begin: '^\\!', end: '$'
      }
    ]
  };
};

/***/ })

}]);
//# sourceMappingURL=diff.js.map?v=e2a169c9eacd2b4f590a