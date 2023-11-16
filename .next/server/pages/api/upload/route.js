"use strict";
(() => {
var exports = {};
exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 8221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "POST": () => (/* binding */ POST)
});

;// CONCATENATED MODULE: external "next/server"
const server_namespaceObject = require("next/server");
;// CONCATENATED MODULE: ./src/pages/api/upload/route.js

async function POST(request) {
    const data = await request.formData();
    console.log(data);
    //return NextResponse.json("archivo subido");
    response.status(200).json({
        name: "subiendo archivo"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8221));
module.exports = __webpack_exports__;

})();