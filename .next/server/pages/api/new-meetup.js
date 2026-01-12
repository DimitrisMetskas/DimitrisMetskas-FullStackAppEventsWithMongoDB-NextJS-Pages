"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//POST  api/new-meetup.js\n//auto to arxeio tha xrisimopoieitai mono gia to backend tou Next.js\n//xrisimopoieisoyme mongodb gia na apothikeuoume ta meetups pou dimiourgoume\n\n//to nextjs tha energopoieisai to handler function otan ginei mia aitisi sto api/new-meetup automata\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        // const { title, image, address, description } = data;\n        //connect to mongoDB, ayto prepei na trexei mon sto backend, opote to vazoume mesa sto api file poy tha trexei mono sto server\n        //to meetups einai to onoma tis vasis dedomenon pyo evala ego sto url, ean den ipirxe to dimiourgei automata\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://bagelishbdb:xpTjF0gAIVHYhKxm@cluster0.peclj6k.mongodb.net/meetups?appName=Cluster0\");\n        const db = client.db();\n        //to collection einai to antistoixo pinaka mesa sti vasi dedomenon, opou tha apothikeuoume ta meetups\n        const meetupsCollection = db.collection(\"meetups\");\n        //gia na eisagoume ena neo document mesa ston pinaka xrisimopoioume to insertOne method\n        const result = await meetupsCollection.insertOne(data);\n        console.log(result);\n        client.close(); //gia na kleisoume tin sindesi me tin vasi dedomenon\n        //respond with status 201 dld created\n        res.status(201).json({\n            message: \"Meetup added successfully!\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5QkFBeUI7QUFDekIsb0VBQW9FO0FBQ3BFLDRFQUE0RTtBQUN0QztBQUV0QyxvR0FBb0c7QUFDcEcsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUMvQixJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDekIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFDckIsdURBQXVEO1FBRXZELDhIQUE4SDtRQUM5SCw0R0FBNEc7UUFDNUcsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUN0QyxrR0FBa0csQ0FDbkc7UUFFRCxNQUFNUyxFQUFFLEdBQUdGLE1BQU0sQ0FBQ0UsRUFBRSxFQUFFO1FBRXRCLHFHQUFxRztRQUNyRyxNQUFNQyxpQkFBaUIsR0FBR0QsRUFBRSxDQUFDRSxVQUFVLENBQUMsU0FBUyxDQUFDO1FBRWxELHVGQUF1RjtRQUN2RixNQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1FBQ3REUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDLENBQUM7UUFDcEJMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFLENBQUMscURBQW9EO1FBRW5FLHFDQUFxQztRQUNyQ2IsR0FBRyxDQUFDYyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNEJBQTRCO1NBQUUsQ0FBQyxDQUFDO0lBR2xFLENBQUM7QUFDSCxDQUFDO0FBRUQsaUVBQWVsQixPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1BPU1QgIGFwaS9uZXctbWVldHVwLmpzXHJcbi8vYXV0byB0byBhcnhlaW8gdGhhIHhyaXNpbW9wb2llaXRhaSBtb25vIGdpYSB0byBiYWNrZW5kIHRvdSBOZXh0LmpzXHJcbi8veHJpc2ltb3BvaWVpc295bWUgbW9uZ29kYiBnaWEgbmEgYXBvdGhpa2V1b3VtZSB0YSBtZWV0dXBzIHBvdSBkaW1pb3VyZ291bWVcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuLy90byBuZXh0anMgdGhhIGVuZXJnb3BvaWVpc2FpIHRvIGhhbmRsZXIgZnVuY3Rpb24gb3RhbiBnaW5laSBtaWEgYWl0aXNpIHN0byBhcGkvbmV3LW1lZXR1cCBhdXRvbWF0YVxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XHJcbiAgICAvLyBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzY3JpcHRpb24gfSA9IGRhdGE7XHJcblxyXG4gICAgLy9jb25uZWN0IHRvIG1vbmdvREIsIGF5dG8gcHJlcGVpIG5hIHRyZXhlaSBtb24gc3RvIGJhY2tlbmQsIG9wb3RlIHRvIHZhem91bWUgbWVzYSBzdG8gYXBpIGZpbGUgcG95IHRoYSB0cmV4ZWkgbW9ubyBzdG8gc2VydmVyXHJcbiAgICAvL3RvIG1lZXR1cHMgZWluYWkgdG8gb25vbWEgdGlzIHZhc2lzIGRlZG9tZW5vbiBweW8gZXZhbGEgZWdvIHN0byB1cmwsIGVhbiBkZW4gaXBpcnhlIHRvIGRpbWlvdXJnZWkgYXV0b21hdGFcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXHJcbiAgICAgIFwibW9uZ29kYitzcnY6Ly9iYWdlbGlzaGJkYjp4cFRqRjBnQUlWSFloS3htQGNsdXN0ZXIwLnBlY2xqNmsubW9uZ29kYi5uZXQvbWVldHVwcz9hcHBOYW1lPUNsdXN0ZXIwXCJcclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuXHJcbiAgICAvL3RvIGNvbGxlY3Rpb24gZWluYWkgdG8gYW50aXN0b2l4byBwaW5ha2EgbWVzYSBzdGkgdmFzaSBkZWRvbWVub24sIG9wb3UgdGhhIGFwb3RoaWtldW91bWUgdGEgbWVldHVwc1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKFwibWVldHVwc1wiKTtcclxuXHJcbiAgICAvL2dpYSBuYSBlaXNhZ291bWUgZW5hIG5lbyBkb2N1bWVudCBtZXNhIHN0b24gcGluYWthIHhyaXNpbW9wb2lvdW1lIHRvIGluc2VydE9uZSBtZXRob2RcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICBjbGllbnQuY2xvc2UoKTsvL2dpYSBuYSBrbGVpc291bWUgdGluIHNpbmRlc2kgbWUgdGluIHZhc2kgZGVkb21lbm9uXHJcblxyXG4gICAgLy9yZXNwb25kIHdpdGggc3RhdHVzIDIwMSBkbGQgY3JlYXRlZFxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIk1lZXR1cCBhZGRlZCBzdWNjZXNzZnVsbHkhXCIgfSk7XHJcblxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();