"use strict";
(() => {
var exports = {};
exports.id = 5039;
exports.ids = [5039];
exports.modules = {

/***/ 3293:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ POST)
/* harmony export */ });
async function POST(request, response) {
    //const data = await request.body;
    console.log(request);
    response.status(200).json({
        name: "subiendo archivo"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3293));
module.exports = __webpack_exports__;

})();