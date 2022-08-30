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
exports.id = "pages/api/posts";
exports.ids = ["pages/api/posts"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./node_modules/@swc/helpers/lib/_interop_require_wildcard.js":
/*!********************************************************************!*\
  !*** ./node_modules/@swc/helpers/lib/_interop_require_wildcard.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nexports[\"default\"] = _interopRequireWildcard;\nfunction _interopRequireWildcard(obj) {\n    if (obj && obj.__esModule) {\n        return obj;\n    }\n    if (obj === null || typeof obj !== \"object\" && typeof obj !== \"function\") {\n        return {\n            default: obj\n        };\n    }\n    var cache = _getRequireWildcardCache();\n    if (cache && cache.has(obj)) {\n        return cache.get(obj);\n    }\n    var newObj = {};\n    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;\n    for(var key in obj){\n        if (Object.prototype.hasOwnProperty.call(obj, key)) {\n            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;\n            if (desc && (desc.get || desc.set)) {\n                Object.defineProperty(newObj, key, desc);\n            } else {\n                newObj[key] = obj[key];\n            }\n        }\n    }\n    newObj.default = obj;\n    if (cache) {\n        cache.set(obj, newObj);\n    }\n    return newObj;\n}\nfunction _getRequireWildcardCache() {\n    if (typeof WeakMap !== \"function\") return null;\n    var cache = new WeakMap();\n    _getRequireWildcardCache = function() {\n        return cache;\n    };\n    return cache;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL2xpYi9faW50ZXJvcF9yZXF1aXJlX3dpbGRjYXJkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0Ysa0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Jsb29tc2hvcC8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvbGliL19pbnRlcm9wX3JlcXVpcmVfd2lsZGNhcmQuanM/ZTFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gICAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAob2JqID09PSBudWxsIHx8IHR5cGVvZiBvYmogIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG4gICAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgICB9XG4gICAgdmFyIG5ld09iaiA9IHt9O1xuICAgIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICBmb3IodmFyIGtleSBpbiBvYmope1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG4gICAgICAgICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXdPYmouZGVmYXVsdCA9IG9iajtcbiAgICBpZiAoY2FjaGUpIHtcbiAgICAgICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld09iajtcbn1cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gICAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbiAgICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlO1xuICAgIH07XG4gICAgcmV0dXJuIGNhY2hlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/@swc/helpers/lib/_interop_require_wildcard.js\n");

/***/ }),

/***/ "(api)/./pages/api/models/post.ts":
/*!**********************************!*\
  !*** ./pages/api/models/post.ts ***!
  \**********************************/
/***/ ((module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nconst _interopRequireWildcard = (__webpack_require__(/*! @swc/helpers/lib/_interop_require_wildcard.js */ \"(api)/./node_modules/@swc/helpers/lib/_interop_require_wildcard.js\")[\"default\"]);\nconst _mongoose = /*#__PURE__*/ _interopRequireWildcard(__webpack_require__(/*! mongoose */ \"mongoose\"));\nconst PostSchema = new _mongoose.Schema({\n    title: {\n        type: String,\n        required: true\n    },\n    description: {\n        type: String,\n        required: true\n    }\n});\nmodule.exports = _mongoose.default.models.PostModel || (0, _mongoose.model)(\"PostModel\", PostSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbW9kZWxzL3Bvc3QudHMuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OzRFQUF3QywwQkFBVTtBQUdsRCxNQUFNQSxVQUFVLEdBQUcsSUFBSUMsU0FBTSxRQUFDO0lBQzVCQyxLQUFLLEVBQUU7UUFBRUMsSUFBSSxFQUFFQyxNQUFNO1FBQUVDLFFBQVEsRUFBRSxJQUFJO0tBQUU7SUFDdkNDLFdBQVcsRUFBRTtRQUFFSCxJQUFJLEVBQUVDLE1BQU07UUFBRUMsUUFBUSxFQUFFLElBQUk7S0FBRTtDQUM5QyxDQUFDO0FBRUZFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHQyxTQUFRLFNBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxJQUFJQyxJQUFBQSxTQUFLLFFBQUMsV0FBVyxFQUFFWixVQUFVLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9vbXNob3AvLi9wYWdlcy9hcGkvbW9kZWxzL3Bvc3QudHM/NzA4NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UsIHsgbW9kZWwsIFNjaGVtYSB9IGZyb20gJ21vbmdvb3NlJ1xyXG5cclxuXHJcbmNvbnN0IFBvc3RTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICB0aXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXHJcbiAgZGVzY3JpcHRpb246IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbHMuUG9zdE1vZGVsIHx8IG1vZGVsKCdQb3N0TW9kZWwnLCBQb3N0U2NoZW1hKSJdLCJuYW1lcyI6WyJQb3N0U2NoZW1hIiwiU2NoZW1hIiwidGl0bGUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJkZXNjcmlwdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb25nb29zZSIsIm1vZGVscyIsIlBvc3RNb2RlbCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/models/post.ts\n");

/***/ }),

/***/ "(api)/./pages/api/posts.ts":
/*!****************************!*\
  !*** ./pages/api/posts.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst PostModel = __webpack_require__(/*! ./models/post */ \"(api)/./pages/api/models/post.ts\");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const mongoDBUrl = process.env.MONGODB_CONNECT_TOKEN || \"\";\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(mongoDBUrl);\n        switch(req.method){\n            case \"POST\":\n                await PostModel.create(req.body);\n                res.status(200).json(\"ok\");\n                break;\n            case \"DELETE\":\n                console.log(\"prikol\");\n                break;\n            default:\n                const posts = await PostModel.find();\n                res.status(200).json(posts);\n                break;\n        }\n    } catch (error) {\n        res.status(400).json(error);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9zdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQStCO0FBSS9CLE1BQU1DLFNBQVMsR0FBR0MsbUJBQU8sQ0FBQyx1REFBZSxDQUFDO0FBRTFDLGlFQUFlLE9BQU9DLEdBQWtDLEVBQUVDLEdBQW9CLEdBQUs7SUFFakYsTUFBTUMsVUFBVSxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MscUJBQXFCLElBQUksRUFBRTtJQUUxRCxJQUFJO1FBQ0YsTUFBTVIsdURBQWdCLENBQUNLLFVBQVUsQ0FBQztRQUVsQyxPQUFRRixHQUFHLENBQUNPLE1BQU07WUFDaEIsS0FBSyxNQUFNO2dCQUNULE1BQU1ULFNBQVMsQ0FBQ1UsTUFBTSxDQUFDUixHQUFHLENBQUNTLElBQUksQ0FBQztnQkFDaENSLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUMxQixNQUFNO1lBQ1IsS0FBSyxRQUFRO2dCQUNYQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLE1BQU07WUFDUjtnQkFDRSxNQUFNQyxLQUFLLEdBQUcsTUFBTWhCLFNBQVMsQ0FBQ2lCLElBQUksRUFBRTtnQkFDcENkLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQztnQkFDM0IsTUFBTTtTQUNUO0tBRUYsQ0FBQyxPQUFPRSxLQUFLLEVBQUU7UUFDZGYsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0ssS0FBSyxDQUFDO0tBQzVCO0NBSUYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibG9vbXNob3AvLi9wYWdlcy9hcGkvcG9zdHMudHM/ZGRiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnXHJcbmltcG9ydCB7IE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IEV4dGVuZGVkUmVxdWVzdFR5cGUgfSBmcm9tICcuLi8uLi9hcHAvdHlwZXMvYXBpVHlwZXMnXHJcbmltcG9ydCB7IFBvc3RUeXBlIH0gZnJvbSAnLi4vLi4vYXBwL3R5cGVzL3R5cGVzJ1xyXG5jb25zdCBQb3N0TW9kZWwgPSByZXF1aXJlKCcuL21vZGVscy9wb3N0JylcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IEV4dGVuZGVkUmVxdWVzdFR5cGU8UG9zdFR5cGU+LCByZXM6IE5leHRBcGlSZXNwb25zZSkgPT4ge1xyXG5cclxuICBjb25zdCBtb25nb0RCVXJsID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9DT05ORUNUX1RPS0VOIHx8ICcnXHJcblxyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KG1vbmdvREJVcmwpXHJcblxyXG4gICAgc3dpdGNoIChyZXEubWV0aG9kKSB7XHJcbiAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICAgIGF3YWl0IFBvc3RNb2RlbC5jcmVhdGUocmVxLmJvZHkpXHJcbiAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oJ29rJylcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICBjb25zb2xlLmxvZygncHJpa29sJylcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zdCBwb3N0cyA9IGF3YWl0IFBvc3RNb2RlbC5maW5kKClcclxuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwb3N0cylcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKGVycm9yKVxyXG4gIH1cclxuXHJcbiAgXHJcblxyXG59Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiUG9zdE1vZGVsIiwicmVxdWlyZSIsInJlcSIsInJlcyIsIm1vbmdvREJVcmwiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9DT05ORUNUX1RPS0VOIiwiY29ubmVjdCIsIm1ldGhvZCIsImNyZWF0ZSIsImJvZHkiLCJzdGF0dXMiLCJqc29uIiwiY29uc29sZSIsImxvZyIsInBvc3RzIiwiZmluZCIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/posts.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/posts.ts"));
module.exports = __webpack_exports__;

})();