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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/context/ChainIdProvider.tsx":
/*!*****************************************!*\
  !*** ./src/context/ChainIdProvider.tsx ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChainIdProvider: () => (/* binding */ ChainIdProvider),\n/* harmony export */   useChainId: () => (/* binding */ useChainId)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reown_appkit_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reown/appkit/react */ \"@reown/appkit/react\");\n/* harmony import */ var viem_chains__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! viem/chains */ \"viem/chains\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reown_appkit_react__WEBPACK_IMPORTED_MODULE_2__, viem_chains__WEBPACK_IMPORTED_MODULE_3__]);\n([_reown_appkit_react__WEBPACK_IMPORTED_MODULE_2__, viem_chains__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst ChainIdContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(viem_chains__WEBPACK_IMPORTED_MODULE_3__.chiliz.id); // Varsayılan olarak Avalanche'ın chainId'si\nconst ChainIdProvider = ({ children })=>{\n    const { chainId } = (0,_reown_appkit_react__WEBPACK_IMPORTED_MODULE_2__.useAppKitNetwork)(); // ChainId burada alınır.\n    const [currentChainId, setCurrentChainId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(viem_chains__WEBPACK_IMPORTED_MODULE_3__.chiliz.id);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // chainId geldiğinde, eğer geçerli bir sayıya dönüştürülebiliyorsa güncelleme yapılır.\n        const parsedChainId = typeof chainId === \"number\" ? chainId : viem_chains__WEBPACK_IMPORTED_MODULE_3__.chiliz.id;\n        if (!isNaN(parsedChainId)) {\n            setCurrentChainId(parsedChainId);\n        } else {\n            console.error(\"Ge\\xe7ersiz chainId, varsayılan Avalanche chainId (43114) kullanılacak.\");\n            setCurrentChainId(viem_chains__WEBPACK_IMPORTED_MODULE_3__.chiliz.id); // Geçersiz chainId durumunda AVAX chainId'yi kullanıyoruz.\n        }\n    }, [\n        chainId\n    ]); // chainId değiştiğinde sadece çalışacak şekilde bağımlılığı ekliyoruz.\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ChainIdContext.Provider, {\n        value: currentChainId,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/context/ChainIdProvider.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, undefined);\n};\nconst useChainId = ()=>(0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ChainIdContext);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9DaGFpbklkUHJvdmlkZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4RTtBQUN2QjtBQUNQO0FBRWhELE1BQU1PLCtCQUFpQk4sb0RBQWFBLENBQVNLLCtDQUFNQSxDQUFDRSxFQUFFLEdBQUcsNENBQTRDO0FBRTlGLE1BQU1DLGtCQUFrQixDQUFDLEVBQUVDLFFBQVEsRUFBaUM7SUFDekUsTUFBTSxFQUFFQyxPQUFPLEVBQUUsR0FBR04scUVBQWdCQSxJQUFJLHlCQUF5QjtJQUNqRSxNQUFNLENBQUNPLGdCQUFnQkMsa0JBQWtCLEdBQUdWLCtDQUFRQSxDQUFTRywrQ0FBTUEsQ0FBQ0UsRUFBRTtJQUV0RUosZ0RBQVNBLENBQUM7UUFDUix1RkFBdUY7UUFDdkYsTUFBTVUsZ0JBQWdCLE9BQU9ILFlBQVksV0FBV0EsVUFBU0wsK0NBQU1BLENBQUNFLEVBQUU7UUFFdEUsSUFBSSxDQUFDTyxNQUFNRCxnQkFBZ0I7WUFDekJELGtCQUFrQkM7UUFDcEIsT0FBTztZQUNMRSxRQUFRQyxLQUFLLENBQUM7WUFDZEosa0JBQWtCUCwrQ0FBTUEsQ0FBQ0UsRUFBRSxHQUFHLDJEQUEyRDtRQUMzRjtJQUNGLEdBQUc7UUFBQ0c7S0FBUSxHQUFHLHVFQUF1RTtJQUV0RixxQkFDRSw4REFBQ0osZUFBZVcsUUFBUTtRQUFDQyxPQUFPUDtrQkFDN0JGOzs7Ozs7QUFHUCxFQUFFO0FBRUssTUFBTVUsYUFBYSxJQUFNbEIsaURBQVVBLENBQUNLLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmxkLy4vc3JjL2NvbnRleHQvQ2hhaW5JZFByb3ZpZGVyLnRzeD81NjA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQXBwS2l0TmV0d29yayB9IGZyb20gJ0ByZW93bi9hcHBraXQvcmVhY3QnO1xuaW1wb3J0IHsgYXZhbGFuY2hlLCBjaGlsaXogfSBmcm9tICd2aWVtL2NoYWlucyc7XG5cbmNvbnN0IENoYWluSWRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxudW1iZXI+KGNoaWxpei5pZCk7IC8vIFZhcnNhecSxbGFuIG9sYXJhayBBdmFsYW5jaGUnxLFuIGNoYWluSWQnc2lcblxuZXhwb3J0IGNvbnN0IENoYWluSWRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSA9PiB7XG4gIGNvbnN0IHsgY2hhaW5JZCB9ID0gdXNlQXBwS2l0TmV0d29yaygpOyAvLyBDaGFpbklkIGJ1cmFkYSBhbMSxbsSxci5cbiAgY29uc3QgW2N1cnJlbnRDaGFpbklkLCBzZXRDdXJyZW50Q2hhaW5JZF0gPSB1c2VTdGF0ZTxudW1iZXI+KGNoaWxpei5pZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjaGFpbklkIGdlbGRpxJ9pbmRlLCBlxJ9lciBnZcOnZXJsaSBiaXIgc2F5xLF5YSBkw7Zuw7zFn3TDvHLDvGxlYmlsaXlvcnNhIGfDvG5jZWxsZW1lIHlhcMSxbMSxci5cbiAgICBjb25zdCBwYXJzZWRDaGFpbklkID0gdHlwZW9mIGNoYWluSWQgPT09ICdudW1iZXInID8gY2hhaW5JZCA6Y2hpbGl6LmlkO1xuXG4gICAgaWYgKCFpc05hTihwYXJzZWRDaGFpbklkKSkge1xuICAgICAgc2V0Q3VycmVudENoYWluSWQocGFyc2VkQ2hhaW5JZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJHZcOnZXJzaXogY2hhaW5JZCwgdmFyc2F5xLFsYW4gQXZhbGFuY2hlIGNoYWluSWQgKDQzMTE0KSBrdWxsYW7EsWxhY2FrLlwiKTtcbiAgICAgIHNldEN1cnJlbnRDaGFpbklkKGNoaWxpei5pZCk7IC8vIEdlw6dlcnNpeiBjaGFpbklkIGR1cnVtdW5kYSBBVkFYIGNoYWluSWQneWkga3VsbGFuxLF5b3J1ei5cbiAgICB9XG4gIH0sIFtjaGFpbklkXSk7IC8vIGNoYWluSWQgZGXEn2nFn3RpxJ9pbmRlIHNhZGVjZSDDp2FsxLHFn2FjYWsgxZ9la2lsZGUgYmHEn8SxbWzEsWzEscSfxLEgZWtsaXlvcnV6LlxuXG4gIHJldHVybiAoXG4gICAgPENoYWluSWRDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtjdXJyZW50Q2hhaW5JZH0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9DaGFpbklkQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VDaGFpbklkID0gKCkgPT4gdXNlQ29udGV4dChDaGFpbklkQ29udGV4dCk7Il0sIm5hbWVzIjpbIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZUFwcEtpdE5ldHdvcmsiLCJjaGlsaXoiLCJDaGFpbklkQ29udGV4dCIsImlkIiwiQ2hhaW5JZFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjaGFpbklkIiwiY3VycmVudENoYWluSWQiLCJzZXRDdXJyZW50Q2hhaW5JZCIsInBhcnNlZENoYWluSWQiLCJpc05hTiIsImNvbnNvbGUiLCJlcnJvciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VDaGFpbklkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/context/ChainIdProvider.tsx\n");

/***/ }),

/***/ "./src/context/FirebaseProvider.tsx":
/*!******************************************!*\
  !*** ./src/context/FirebaseProvider.tsx ***!
  \******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FirebaseProvider: () => (/* binding */ FirebaseProvider),\n/* harmony export */   useFirebase: () => (/* binding */ useFirebase)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./firebaseConfig */ \"./src/context/firebaseConfig.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ FirebaseProvider,useFirebase auto */ \n\n\n\nconst FirebaseContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst FirebaseProvider = ({ children })=>{\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const unsubscribe = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.onAuthStateChanged)(_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth, (currentUser)=>{\n            setUser(currentUser);\n            setLoading(false);\n        });\n        return ()=>unsubscribe();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FirebaseContext.Provider, {\n        value: {\n            user,\n            loading,\n            auth: _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.auth,\n            db: _firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/context/FirebaseProvider.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, undefined);\n};\n// Custom hook to use Firebase context\nconst useFirebase = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FirebaseContext);\n    if (!context) {\n        throw new Error(\"useFirebase must be used within a FirebaseProvider\");\n    }\n    return context;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9GaXJlYmFzZVByb3ZpZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFFeUY7QUFDaEM7QUFDYjtBQVM1QyxNQUFNUSxnQ0FBa0JQLG9EQUFhQSxDQUFrQ1E7QUFFaEUsTUFBTUMsbUJBQW1CLENBQUMsRUFBRUMsUUFBUSxFQUEyQjtJQUNwRSxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQWM7SUFDOUMsTUFBTSxDQUFDVyxTQUFTQyxXQUFXLEdBQUdaLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1ZLGNBQWNYLGlFQUFrQkEsQ0FBQ0MsaURBQUlBLEVBQUUsQ0FBQ1c7WUFDNUNKLFFBQVFJO1lBQ1JGLFdBQVc7UUFDYjtRQUVBLE9BQU8sSUFBTUM7SUFDZixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1IsZ0JBQWdCVSxRQUFRO1FBQUNDLE9BQU87WUFBRVA7WUFBTUU7WUFBU1IsSUFBSUEsbURBQUFBO1lBQUVDLEVBQUVBLGlEQUFBQTtRQUFDO2tCQUN4REk7Ozs7OztBQUdQLEVBQUU7QUFFRixzQ0FBc0M7QUFDL0IsTUFBTVMsY0FBYztJQUN6QixNQUFNQyxVQUFVbkIsaURBQVVBLENBQUNNO0lBQzNCLElBQUksQ0FBQ2EsU0FBUztRQUNaLE1BQU0sSUFBSUMsTUFBTTtJQUNsQjtJQUNBLE9BQU9EO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmxkLy4vc3JjL2NvbnRleHQvRmlyZWJhc2VQcm92aWRlci50c3g/YmVlNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjsgLy8gTmV4dC5qcyAxMyBpw6dpbiBnZXJla2xpXG5cbmltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBSZWFjdE5vZGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFVzZXIsIG9uQXV0aFN0YXRlQ2hhbmdlZCB9IGZyb20gXCJmaXJlYmFzZS9hdXRoXCI7XG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gXCIuL2ZpcmViYXNlQ29uZmlnXCI7XG5cbmludGVyZmFjZSBGaXJlYmFzZUNvbnRleHRUeXBlIHtcbiAgdXNlcjogVXNlciB8IG51bGw7XG4gIGxvYWRpbmc6IGJvb2xlYW47XG4gIGF1dGg6IHR5cGVvZiBhdXRoO1xuICBkYjogdHlwZW9mIGRiO1xufVxuXG5jb25zdCBGaXJlYmFzZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0PEZpcmViYXNlQ29udGV4dFR5cGUgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBGaXJlYmFzZVByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfTogeyBjaGlsZHJlbjogUmVhY3ROb2RlIH0pID0+IHtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVuc3Vic2NyaWJlID0gb25BdXRoU3RhdGVDaGFuZ2VkKGF1dGgsIChjdXJyZW50VXNlcikgPT4ge1xuICAgICAgc2V0VXNlcihjdXJyZW50VXNlcik7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiB1bnN1YnNjcmliZSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmlyZWJhc2VDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGxvYWRpbmcsIGF1dGgsIGRiIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvRmlyZWJhc2VDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuLy8gQ3VzdG9tIGhvb2sgdG8gdXNlIEZpcmViYXNlIGNvbnRleHRcbmV4cG9ydCBjb25zdCB1c2VGaXJlYmFzZSA9ICgpOiBGaXJlYmFzZUNvbnRleHRUeXBlID0+IHtcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoRmlyZWJhc2VDb250ZXh0KTtcbiAgaWYgKCFjb250ZXh0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwidXNlRmlyZWJhc2UgbXVzdCBiZSB1c2VkIHdpdGhpbiBhIEZpcmViYXNlUHJvdmlkZXJcIik7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJvbkF1dGhTdGF0ZUNoYW5nZWQiLCJhdXRoIiwiZGIiLCJGaXJlYmFzZUNvbnRleHQiLCJ1bmRlZmluZWQiLCJGaXJlYmFzZVByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwidW5zdWJzY3JpYmUiLCJjdXJyZW50VXNlciIsIlByb3ZpZGVyIiwidmFsdWUiLCJ1c2VGaXJlYmFzZSIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/FirebaseProvider.tsx\n");

/***/ }),

/***/ "./src/context/GlobalQueryContext.tsx":
/*!********************************************!*\
  !*** ./src/context/GlobalQueryContext.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   QueryProvider: () => (/* binding */ QueryProvider),\n/* harmony export */   useQueryContext: () => (/* binding */ useQueryContext)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst QueryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst QueryProvider = ({ children })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const refParam = router.query.ref ? String(router.query.ref) : null;\n    const cidParam = router.query.cid ? String(router.query.cid) : null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(QueryContext.Provider, {\n        value: {\n            refParam,\n            cidParam\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/context/GlobalQueryContext.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\nconst useQueryContext = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(QueryContext);\n    if (!context) {\n        throw new Error(\"useQueryContext must be used within a QueryProvider\");\n    }\n    return context;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9HbG9iYWxRdWVyeUNvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRTtBQUM1QjtBQU94QyxNQUFNSSw2QkFBZUgsb0RBQWFBLENBQWdDSTtBQUUzRCxNQUFNQyxnQkFBbUQsQ0FBQyxFQUFFQyxRQUFRLEVBQUU7SUFDM0UsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU1NLFdBQVdELE9BQU9FLEtBQUssQ0FBQ0MsR0FBRyxHQUFHQyxPQUFPSixPQUFPRSxLQUFLLENBQUNDLEdBQUcsSUFBSTtJQUMvRCxNQUFNRSxXQUFXTCxPQUFPRSxLQUFLLENBQUNJLEdBQUcsR0FBR0YsT0FBT0osT0FBT0UsS0FBSyxDQUFDSSxHQUFHLElBQUk7SUFFL0QscUJBQ0UsOERBQUNWLGFBQWFXLFFBQVE7UUFBQ0MsT0FBTztZQUFFUDtZQUFVSTtRQUFTO2tCQUNoRE47Ozs7OztBQUdQLEVBQUU7QUFFSyxNQUFNVSxrQkFBa0I7SUFDN0IsTUFBTUMsVUFBVWhCLGlEQUFVQSxDQUFDRTtJQUMzQixJQUFJLENBQUNjLFNBQVM7UUFDWixNQUFNLElBQUlDLE1BQU07SUFDbEI7SUFDQSxPQUFPRDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JsZC8uL3NyYy9jb250ZXh0L0dsb2JhbFF1ZXJ5Q29udGV4dC50c3g/MTk3ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbnRlcmZhY2UgUXVlcnlDb250ZXh0UHJvcHMge1xuICByZWZQYXJhbTogc3RyaW5nIHwgbnVsbDtcbiAgY2lkUGFyYW06IHN0cmluZyB8IG51bGw7XG59XG5cbmNvbnN0IFF1ZXJ5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8UXVlcnlDb250ZXh0UHJvcHMgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XG5cbmV4cG9ydCBjb25zdCBRdWVyeVByb3ZpZGVyOiBSZWFjdC5GQzx7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfT4gPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IHJlZlBhcmFtID0gcm91dGVyLnF1ZXJ5LnJlZiA/IFN0cmluZyhyb3V0ZXIucXVlcnkucmVmKSA6IG51bGw7XG4gIGNvbnN0IGNpZFBhcmFtID0gcm91dGVyLnF1ZXJ5LmNpZCA/IFN0cmluZyhyb3V0ZXIucXVlcnkuY2lkKSA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHJlZlBhcmFtLCBjaWRQYXJhbSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1F1ZXJ5Q29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1c2VRdWVyeUNvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KFF1ZXJ5Q29udGV4dCk7XG4gIGlmICghY29udGV4dCkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlUXVlcnlDb250ZXh0IG11c3QgYmUgdXNlZCB3aXRoaW4gYSBRdWVyeVByb3ZpZGVyJyk7XG4gIH1cbiAgcmV0dXJuIGNvbnRleHQ7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlUm91dGVyIiwiUXVlcnlDb250ZXh0IiwidW5kZWZpbmVkIiwiUXVlcnlQcm92aWRlciIsImNoaWxkcmVuIiwicm91dGVyIiwicmVmUGFyYW0iLCJxdWVyeSIsInJlZiIsIlN0cmluZyIsImNpZFBhcmFtIiwiY2lkIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInVzZVF1ZXJ5Q29udGV4dCIsImNvbnRleHQiLCJFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/context/GlobalQueryContext.tsx\n");

/***/ }),

/***/ "./src/context/firebaseConfig.tsx":
/*!****************************************!*\
  !*** ./src/context/firebaseConfig.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   messaging: () => (/* binding */ messaging)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_messaging__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/messaging */ \"firebase/messaging\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_messaging__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__, firebase_firestore__WEBPACK_IMPORTED_MODULE_2__, firebase_messaging__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n// Firebase yapılandırması (Firebase konsolundan alın)\nconst firebaseConfig = {\n    apiKey: \"AIzaSyB9QENeHq5qvQIOpaHFMpaFaJvI_rr_E6A\",\n    authDomain: \"dephone-69015.firebaseapp.com\",\n    projectId: \"dephone-69015\",\n    storageBucket: \"dephone-69015.firebasestorage.app\",\n    messagingSenderId: \"238786857795\",\n    appId: \"1:238786857795:web:d45daa618454d27b11fdf6\",\n    measurementId: \"G-9FZ9ZDQY32\"\n};\n// Firebase Uygulamasını Başlat\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\n// Firebase Modüllerini Başlat\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.getAuth)(firebaseApp);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.getFirestore)(firebaseApp);\n// Bildirimleri dinleme\nconst messaging =  false ? 0 : null;\n// Tarayıcıda bildirimleri dinle\nif (false) {}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC9maXJlYmFzZUNvbmZpZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QztBQUNMO0FBQ1U7QUFDVztBQUU3RCxzREFBc0Q7QUFDdEQsTUFBTUssaUJBQWlCO0lBQ3JCQyxRQUFRO0lBQ1JDLFlBQVk7SUFDWkMsV0FBVztJQUNYQyxlQUFlO0lBQ2ZDLG1CQUFtQjtJQUNuQkMsT0FBTztJQUNQQyxlQUFlO0FBQ2pCO0FBQ0EsK0JBQStCO0FBQy9CLE1BQU1DLGNBQWNiLDJEQUFhQSxDQUFDSztBQUVsQyw4QkFBOEI7QUFDdkIsTUFBTVMsT0FBT2Isc0RBQU9BLENBQUNZLGFBQWE7QUFDbEMsTUFBTUUsS0FBS2IsZ0VBQVlBLENBQUNXLGFBQWE7QUFFNUMsdUJBQXVCO0FBQ2hCLE1BQU1HLFlBQ1gsTUFBNkIsR0FBR2IsQ0FBeUJVLEdBQUcsS0FBSztBQUVuRSxnQ0FBZ0M7QUFDaEMsSUFBSSxLQUEwQ0csRUFBRSxFQUkvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmxkLy4vc3JjL2NvbnRleHQvZmlyZWJhc2VDb25maWcudHN4Pzc2NmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5pdGlhbGl6ZUFwcCB9IGZyb20gXCJmaXJlYmFzZS9hcHBcIjtcbmltcG9ydCB7IGdldEF1dGggfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZ2V0TWVzc2FnaW5nLCBvbk1lc3NhZ2UgfSBmcm9tIFwiZmlyZWJhc2UvbWVzc2FnaW5nXCI7XG5cbi8vIEZpcmViYXNlIHlhcMSxbGFuZMSxcm1hc8SxIChGaXJlYmFzZSBrb25zb2x1bmRhbiBhbMSxbilcbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IFwiQUl6YVN5QjlRRU5lSHE1cXZRSU9wYUhGTXBhRmFKdklfcnJfRTZBXCIsXG4gIGF1dGhEb21haW46IFwiZGVwaG9uZS02OTAxNS5maXJlYmFzZWFwcC5jb21cIixcbiAgcHJvamVjdElkOiBcImRlcGhvbmUtNjkwMTVcIixcbiAgc3RvcmFnZUJ1Y2tldDogXCJkZXBob25lLTY5MDE1LmZpcmViYXNlc3RvcmFnZS5hcHBcIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMjM4Nzg2ODU3Nzk1XCIsXG4gIGFwcElkOiBcIjE6MjM4Nzg2ODU3Nzk1OndlYjpkNDVkYWE2MTg0NTRkMjdiMTFmZGY2XCIsXG4gIG1lYXN1cmVtZW50SWQ6IFwiRy05Rlo5WkRRWTMyXCJcbn07XG4vLyBGaXJlYmFzZSBVeWd1bGFtYXPEsW7EsSBCYcWfbGF0XG5jb25zdCBmaXJlYmFzZUFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG4vLyBGaXJlYmFzZSBNb2TDvGxsZXJpbmkgQmHFn2xhdFxuZXhwb3J0IGNvbnN0IGF1dGggPSBnZXRBdXRoKGZpcmViYXNlQXBwKTtcbmV4cG9ydCBjb25zdCBkYiA9IGdldEZpcmVzdG9yZShmaXJlYmFzZUFwcCk7XG5cbi8vIEJpbGRpcmltbGVyaSBkaW5sZW1lXG5leHBvcnQgY29uc3QgbWVzc2FnaW5nID0gXG4gIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBnZXRNZXNzYWdpbmcoZmlyZWJhc2VBcHApIDogbnVsbDtcblxuLy8gVGFyYXnEsWPEsWRhIGJpbGRpcmltbGVyaSBkaW5sZVxuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgbWVzc2FnaW5nKSB7XG4gIG9uTWVzc2FnZShtZXNzYWdpbmcsIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJNZXNzYWdlIHJlY2VpdmVkOiBcIiwgcGF5bG9hZCk7XG4gIH0pO1xufSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImdldE1lc3NhZ2luZyIsIm9uTWVzc2FnZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwibWVhc3VyZW1lbnRJZCIsImZpcmViYXNlQXBwIiwiYXV0aCIsImRiIiwibWVzc2FnaW5nIiwicGF5bG9hZCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/firebaseConfig.tsx\n");

/***/ }),

/***/ "./src/context/web3modal.tsx":
/*!***********************************!*\
  !*** ./src/context/web3modal.tsx ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Web3Provider: () => (/* binding */ Web3Provider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reown_appkit_adapter_ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reown/appkit-adapter-ethers */ \"@reown/appkit-adapter-ethers\");\n/* harmony import */ var _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reown/appkit/networks */ \"@reown/appkit/networks\");\n/* harmony import */ var _reown_appkit_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reown/appkit/react */ \"@reown/appkit/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reown_appkit_adapter_ethers__WEBPACK_IMPORTED_MODULE_1__, _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__, _reown_appkit_react__WEBPACK_IMPORTED_MODULE_3__]);\n([_reown_appkit_adapter_ethers__WEBPACK_IMPORTED_MODULE_1__, _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__, _reown_appkit_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n/* __next_internal_client_entry_do_not_use__ Web3Provider auto */ \n\n\n\nconst projectId = \"041abdda4ad706f9d40a41491d39737c\";\nconst metadata = {\n    name: \"MillionarMap\",\n    description: \"MillionarMap Dapp on Blockchain \\uD83C\\uDF10 Users leave tokens on the map \\uD83D\\uDDFA️ Discoverers can claim the tokens \\uD83D\\uDCB0\",\n    url: \"https://millionarmap.com\",\n    icons: [\n        \"/assets/map.svg\"\n    ]\n};\n(0,_reown_appkit_react__WEBPACK_IMPORTED_MODULE_3__.createAppKit)({\n    adapters: [\n        new _reown_appkit_adapter_ethers__WEBPACK_IMPORTED_MODULE_1__.EthersAdapter()\n    ],\n    metadata: metadata,\n    networks: [\n        _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__.chiliz,\n        _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__.avalanche\n    ],\n    defaultNetwork: _reown_appkit_networks__WEBPACK_IMPORTED_MODULE_2__.chiliz,\n    chainImages: {\n        88888: \"/assets/chains/chz.svg\"\n    },\n    projectId,\n    themeMode: \"dark\",\n    features: {\n        email: false,\n        socials: false,\n        allWallets: true,\n        swaps: false,\n        history: false,\n        analytics: false,\n        onramp: false\n    },\n    featuredWalletIds: [\n        \"c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96\",\n        \"f323633c1f67055a45aac84e321af6ffe46322da677ffdd32f9bc1e33bafe29c\",\n        \"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709\",\n        \"8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4\",\n        \"4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0\",\n        \"971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709\",\n        \"e7c4d26541a7fd84dbdfa9922d3ad21e936e13a7a0e44385d44f006139e44d3b\"\n    ]\n});\nfunction Web3Provider({ children }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: children\n    }, void 0, false); // Ensure it returns a valid JSX element\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dC93ZWIzbW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFNkQ7QUFDTTtBQUNoQjtBQUduRCxNQUFNSSxZQUFZO0FBRWxCLE1BQU1DLFdBQVc7SUFDZkMsTUFBTTtJQUNOQyxhQUFhO0lBQ2JDLEtBQUs7SUFDTEMsT0FBTztRQUFDO0tBQWtCO0FBQzVCO0FBRUFOLGlFQUFZQSxDQUFDO0lBQ1hPLFVBQVU7UUFBQyxJQUFJVix1RUFBYUE7S0FBRztJQUMvQkssVUFBU0E7SUFDVE0sVUFBVTtRQUFDViwwREFBTUE7UUFBQ0MsNkRBQVNBO0tBQUM7SUFDNUJVLGdCQUFnQlgsMERBQU1BO0lBQ3RCWSxhQUFZO1FBQ1YsT0FBTTtJQUNSO0lBQ0FUO0lBQ0FVLFdBQVU7SUFDVkMsVUFBVTtRQUNSQyxPQUFPO1FBQ1BDLFNBQVE7UUFDUkMsWUFBWTtRQUNaQyxPQUFNO1FBQ05DLFNBQVE7UUFDUkMsV0FBVTtRQUNWQyxRQUFPO0lBQ1Q7SUFDQUMsbUJBQW1CO1FBQ2pCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO0tBQ0Q7QUFDSDtBQUVPLFNBQVNDLGFBQWEsRUFDM0JDLFFBQVEsRUFHVDtJQUNDLHFCQUFPO2tCQUFHQTt1QkFBYyx3Q0FBd0M7QUFDbEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JsZC8uL3NyYy9jb250ZXh0L3dlYjNtb2RhbC50c3g/NmMyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5cbmltcG9ydCB7IEV0aGVyc0FkYXB0ZXIgfSBmcm9tICdAcmVvd24vYXBwa2l0LWFkYXB0ZXItZXRoZXJzJztcbmltcG9ydCB7IGNoaWxpeiwgaGFyZGhhdCxhdmFsYW5jaGUgfSBmcm9tICdAcmVvd24vYXBwa2l0L25ldHdvcmtzJztcbmltcG9ydCB7IGNyZWF0ZUFwcEtpdCB9IGZyb20gJ0ByZW93bi9hcHBraXQvcmVhY3QnO1xuaW1wb3J0IHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBwcm9qZWN0SWQgPSAnMDQxYWJkZGE0YWQ3MDZmOWQ0MGE0MTQ5MWQzOTczN2MnO1xuXG5jb25zdCBtZXRhZGF0YSA9IHtcbiAgbmFtZTogJ01pbGxpb25hck1hcCcsXG4gIGRlc2NyaXB0aW9uOiAnTWlsbGlvbmFyTWFwIERhcHAgb24gQmxvY2tjaGFpbiDwn4yQIFVzZXJzIGxlYXZlIHRva2VucyBvbiB0aGUgbWFwIPCfl7rvuI8gRGlzY292ZXJlcnMgY2FuIGNsYWltIHRoZSB0b2tlbnMg8J+SsCcsXG4gIHVybDogJ2h0dHBzOi8vbWlsbGlvbmFybWFwLmNvbScsXG4gIGljb25zOiBbJy9hc3NldHMvbWFwLnN2ZyddLFxufTtcblxuY3JlYXRlQXBwS2l0KHtcbiAgYWRhcHRlcnM6IFtuZXcgRXRoZXJzQWRhcHRlcigpXSxcbiAgbWV0YWRhdGE6bWV0YWRhdGEsXG4gIG5ldHdvcmtzOiBbY2hpbGl6LGF2YWxhbmNoZV0sXG4gIGRlZmF1bHROZXR3b3JrOiBjaGlsaXosXG4gIGNoYWluSW1hZ2VzOntcbiAgICA4ODg4ODpcIi9hc3NldHMvY2hhaW5zL2Noei5zdmdcIlxuICB9LFxuICBwcm9qZWN0SWQsXG4gIHRoZW1lTW9kZTpcImRhcmtcIixcbiAgZmVhdHVyZXM6IHtcbiAgICBlbWFpbDogZmFsc2UsXG4gICAgc29jaWFsczpmYWxzZSxcbiAgICBhbGxXYWxsZXRzOiB0cnVlLFxuICAgIHN3YXBzOmZhbHNlLFxuICAgIGhpc3Rvcnk6ZmFsc2UsXG4gICAgYW5hbHl0aWNzOmZhbHNlLFxuICAgIG9ucmFtcDpmYWxzZSxcbiAgfSxcbiAgZmVhdHVyZWRXYWxsZXRJZHM6IFtcbiAgICAnYzU3Y2E5NWI0NzU2OTc3OGE4MjhkMTkxNzgxMTRmNGRiMTg4Yjg5Yjc2M2M4OTliYTBiZTI3NGU5NzI2N2Q5NicsIC8vIE1ldGFtYXNrXG4gICAgJ2YzMjM2MzNjMWY2NzA1NWE0NWFhYzg0ZTMyMWFmNmZmZTQ2MzIyZGE2NzdmZmRkMzJmOWJjMWUzM2JhZmUyOWMnLFxuICAgICc5NzFlNjg5ZDBhNWJlNTI3YmFjNzk2MjliNGVlOWI5MjVlODIyMDhlNTE2OGI3MzM0OTZhMDljMGZhZWQwNzA5JyxcbiAgICAnOGEwZWU1MGQxZjIyZjY2NTFhZmNhZTdlYjQyNTNlNTJhMzMxMGI5MGFmNWRhZWY3OGE4YzQ5MjlhOWJiOTlkNCcsXG4gICAgJzQ2MjJhMmIyZDZhZjFjOTg0NDk0NDI5MWU1ZTczNTFhNmFhMjRjZDdiMjMwOTllZmFjMWIyZmQ4NzVkYTMxYTAnLFxuICAgICc5NzFlNjg5ZDBhNWJlNTI3YmFjNzk2MjliNGVlOWI5MjVlODIyMDhlNTE2OGI3MzM0OTZhMDljMGZhZWQwNzA5JyxcbiAgICAnZTdjNGQyNjU0MWE3ZmQ4NGRiZGZhOTkyMmQzYWQyMWU5MzZlMTNhN2EwZTQ0Mzg1ZDQ0ZjAwNjEzOWU0NGQzYicsIC8vIFdhbGxldENvbm5lY3RcbiAgXSxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gV2ViM1Byb3ZpZGVyKHtcbiAgY2hpbGRyZW4sXG59OiB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59KTogSlNYLkVsZW1lbnQge1xuICByZXR1cm4gPD57Y2hpbGRyZW59PC8+OyAvLyBFbnN1cmUgaXQgcmV0dXJucyBhIHZhbGlkIEpTWCBlbGVtZW50XG59XG4iXSwibmFtZXMiOlsiRXRoZXJzQWRhcHRlciIsImNoaWxpeiIsImF2YWxhbmNoZSIsImNyZWF0ZUFwcEtpdCIsInByb2plY3RJZCIsIm1ldGFkYXRhIiwibmFtZSIsImRlc2NyaXB0aW9uIiwidXJsIiwiaWNvbnMiLCJhZGFwdGVycyIsIm5ldHdvcmtzIiwiZGVmYXVsdE5ldHdvcmsiLCJjaGFpbkltYWdlcyIsInRoZW1lTW9kZSIsImZlYXR1cmVzIiwiZW1haWwiLCJzb2NpYWxzIiwiYWxsV2FsbGV0cyIsInN3YXBzIiwiaGlzdG9yeSIsImFuYWx5dGljcyIsIm9ucmFtcCIsImZlYXR1cmVkV2FsbGV0SWRzIiwiV2ViM1Byb3ZpZGVyIiwiY2hpbGRyZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/context/web3modal.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nextui-org/react */ \"@nextui-org/react\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals.css */ \"./src/globals.css\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _context_ChainIdProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/context/ChainIdProvider */ \"./src/context/ChainIdProvider.tsx\");\n/* harmony import */ var _context_FirebaseProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/context/FirebaseProvider */ \"./src/context/FirebaseProvider.tsx\");\n/* harmony import */ var _context_GlobalQueryContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/context/GlobalQueryContext */ \"./src/context/GlobalQueryContext.tsx\");\n/* harmony import */ var _context_web3modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/context/web3modal */ \"./src/context/web3modal.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__, _context_ChainIdProvider__WEBPACK_IMPORTED_MODULE_4__, _context_FirebaseProvider__WEBPACK_IMPORTED_MODULE_5__, _context_web3modal__WEBPACK_IMPORTED_MODULE_7__]);\n([_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__, _context_ChainIdProvider__WEBPACK_IMPORTED_MODULE_4__, _context_FirebaseProvider__WEBPACK_IMPORTED_MODULE_5__, _context_web3modal__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst App = ({ Component, pageProps })=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.NextUIProvider, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_FirebaseProvider__WEBPACK_IMPORTED_MODULE_5__.FirebaseProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_GlobalQueryContext__WEBPACK_IMPORTED_MODULE_6__.QueryProvider, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_web3modal__WEBPACK_IMPORTED_MODULE_7__.Web3Provider, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ChainIdProvider__WEBPACK_IMPORTED_MODULE_4__.ChainIdProvider, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                                className: `text-base`,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                                    ...pageProps\n                                }, void 0, false, {\n                                    fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                                    lineNumber: 24,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                                lineNumber: 23,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n                lineNumber: 16,\n                columnNumber: 5\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ersanyakit/Documents/kewl/decentralizedphone/src/pages/_app.tsx\",\n            lineNumber: 15,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUUzQjtBQUNpQjtBQUNtQjtBQUNFO0FBQ0Q7QUFDVjtBQUtuRCxNQUFNTSxNQUFNLENBQUMsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQVksaUJBQzdDO2tCQUNFLDRFQUFDUiw2REFBY0E7c0JBQ2YsNEVBQUNHLHVFQUFnQkE7MEJBRWYsNEVBQUNDLHNFQUFhQTs4QkFFWiw0RUFBQ0MsNERBQVlBO2tDQUNYLDRFQUFDSCxxRUFBZUE7c0NBRVosNEVBQUNPO2dDQUFLQyxXQUFXLENBQUMsU0FBUyxDQUFDOzBDQUMxQiw0RUFBQ0g7b0NBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl4QyxpRUFBZUYsR0FBR0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dvcmxkLy4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFVJUHJvdmlkZXIgfSBmcm9tICdAbmV4dHVpLW9yZy9yZWFjdCc7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSAnbmV4dC9hcHAnO1xuaW1wb3J0ICcuLi9nbG9iYWxzLmNzcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQ2hhaW5JZFByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0NoYWluSWRQcm92aWRlcic7XG5pbXBvcnQgeyBGaXJlYmFzZVByb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L0ZpcmViYXNlUHJvdmlkZXInO1xuaW1wb3J0IHsgUXVlcnlQcm92aWRlciB9IGZyb20gJ0AvY29udGV4dC9HbG9iYWxRdWVyeUNvbnRleHQnO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQC9jb250ZXh0L3dlYjNtb2RhbCc7XG5cblxuXG5cbmNvbnN0IEFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH06IEFwcFByb3BzKSA9PiAoXG4gIDw+XG4gICAgPE5leHRVSVByb3ZpZGVyPlxuICAgIDxGaXJlYmFzZVByb3ZpZGVyPlxuXG4gICAgICA8UXVlcnlQcm92aWRlcj5cblxuICAgICAgICA8V2ViM1Byb3ZpZGVyPlxuICAgICAgICAgIDxDaGFpbklkUHJvdmlkZXI+XG5cbiAgICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtgdGV4dC1iYXNlYH0+XG4gICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPC9DaGFpbklkUHJvdmlkZXI+XG5cbiAgICAgICAgPC9XZWIzUHJvdmlkZXI+XG5cbiAgICAgIDwvUXVlcnlQcm92aWRlcj5cbiAgICAgIDwvRmlyZWJhc2VQcm92aWRlcj5cbiAgICA8L05leHRVSVByb3ZpZGVyPlxuICA8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJuYW1lcyI6WyJOZXh0VUlQcm92aWRlciIsIlJlYWN0IiwiQ2hhaW5JZFByb3ZpZGVyIiwiRmlyZWJhc2VQcm92aWRlciIsIlF1ZXJ5UHJvdmlkZXIiLCJXZWIzUHJvdmlkZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/globals.css":
/*!*************************!*\
  !*** ./src/globals.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "@nextui-org/react":
/*!************************************!*\
  !*** external "@nextui-org/react" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@nextui-org/react");;

/***/ }),

/***/ "@reown/appkit-adapter-ethers":
/*!***********************************************!*\
  !*** external "@reown/appkit-adapter-ethers" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit-adapter-ethers");;

/***/ }),

/***/ "@reown/appkit/networks":
/*!*****************************************!*\
  !*** external "@reown/appkit/networks" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit/networks");;

/***/ }),

/***/ "@reown/appkit/react":
/*!**************************************!*\
  !*** external "@reown/appkit/react" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@reown/appkit/react");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ }),

/***/ "firebase/messaging":
/*!*************************************!*\
  !*** external "firebase/messaging" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/messaging");;

/***/ }),

/***/ "viem/chains":
/*!******************************!*\
  !*** external "viem/chains" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = import("viem/chains");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();