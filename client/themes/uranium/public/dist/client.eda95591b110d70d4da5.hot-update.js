webpackHotUpdate("client/themes/uranium/public/dist/client",{

/***/ "./shared/data-connectors/SinglePageData.js":
/*!**************************************************!*\
  !*** ./shared/data-connectors/SinglePageData.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-apollo */ \"./node_modules/react-apollo/react-apollo.browser.umd.js\");\n/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_queries_Queries__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/queries/Queries */ \"./shared/queries/Queries.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_apollo__WEBPACK_IMPORTED_MODULE_0__[\"graphql\"])(_shared_queries_Queries__WEBPACK_IMPORTED_MODULE_1__[\"PAGE_MENU\"], {\n    options: props => {\n        return {\n            variables: {\n                slug: props.slug || props.match.params.slug,\n                postType: \"page\"\n            }\n        };\n    },\n    props: ({ data: { loading, pageMenu } }) => ({\n        page: pageMenu ? pageMenu.post : null,\n        ok: pageMenu.ok,\n        loading\n    })\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zaGFyZWQvZGF0YS1jb25uZWN0b3JzL1NpbmdsZVBhZ2VEYXRhLmpzPzM0MjQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFrQjtBQUNFOztBQUVwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLGFBQWEsUUFBUSxvQkFBb0IsRUFBRTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQ0FBQyIsImZpbGUiOiIuL3NoYXJlZC9kYXRhLWNvbm5lY3RvcnMvU2luZ2xlUGFnZURhdGEuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBncmFwaHFsIH0gZnJvbSBcInJlYWN0LWFwb2xsb1wiO1xuaW1wb3J0IHsgUEFHRV9NRU5VIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9xdWVyaWVzL1F1ZXJpZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZ3JhcGhxbChQQUdFX01FTlUsIHtcbiAgICBvcHRpb25zOiBwcm9wcyA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICBzbHVnOiBwcm9wcy5zbHVnIHx8IHByb3BzLm1hdGNoLnBhcmFtcy5zbHVnLFxuICAgICAgICAgICAgICAgIHBvc3RUeXBlOiBcInBhZ2VcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH0sXG4gICAgcHJvcHM6ICh7IGRhdGE6IHsgbG9hZGluZywgcGFnZU1lbnUgfSB9KSA9PiAoe1xuICAgICAgICBwYWdlOiBwYWdlTWVudSA/IHBhZ2VNZW51LnBvc3QgOiBudWxsLFxuICAgICAgICBvazogcGFnZU1lbnUub2ssXG4gICAgICAgIGxvYWRpbmdcbiAgICB9KVxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./shared/data-connectors/SinglePageData.js\n");

/***/ })

})