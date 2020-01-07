(window["textWebpackJsonp"] = window["textWebpackJsonp"] || []).push([["highlight/ebnf"],{

/***/ "./node_modules/highlight.js/lib/languages/ebnf.js":
/*!*********************************************************!*\
  !*** ./node_modules/highlight.js/lib/languages/ebnf.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(hljs) {
    var commentMode = hljs.COMMENT(/\(\*/, /\*\)/);

    var nonTerminalMode = {
        className: "attribute",
        begin: /^[ ]*[a-zA-Z][a-zA-Z-_]*([\s-_]+[a-zA-Z][a-zA-Z]*)*/
    };

    var specialSequenceMode = {
        className: "meta",
        begin: /\?.*\?/
    };

    var ruleBodyMode = {
        begin: /=/, end: /[.;]/,
        contains: [
            commentMode,
            specialSequenceMode,
            {
              // terminals
              className: 'string',
              variants: [
                hljs.APOS_STRING_MODE,
                hljs.QUOTE_STRING_MODE,
                {begin: '`', end: '`'},
              ]
            },
        ]
    };

    return {
        illegal: /\S/,
        contains: [
            commentMode,
            nonTerminalMode,
            ruleBodyMode
        ]
    };
};

/***/ })

}]);
//# sourceMappingURL=ebnf.js.map?v=a66b4e8804b59cd7f39f