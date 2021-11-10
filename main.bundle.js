var MyLibrary;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/App.js":
/*!****************************!*\
  !*** ./src/classes/App.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App() {
    _classCallCheck(this, App);

    this.projects = [];
    this.defaultProject = null;
    this.selectedProject = null;
  }

  _createClass(App, [{
    key: "setDefaultProject",
    value: function setDefaultProject(project) {
      this.defaultProject = project;
    }
  }, {
    key: "getDefaultProject",
    value: function getDefaultProject() {
      return this.defaultProject;
    }
  }, {
    key: "setSelectedProject",
    value: function setSelectedProject(project) {
      this.selectedProject = project;
    }
  }, {
    key: "getSelectedProject",
    value: function getSelectedProject() {
      return this.selectedProject;
    }
  }, {
    key: "addProject",
    value: function addProject(project) {
      this.projects.push(project);
    }
  }, {
    key: "getProjectsList",
    value: function getProjectsList() {
      return this.projects;
    }
  }, {
    key: "getProjectById",
    value: function getProjectById(projectId) {
      return this.projects.find(function (p) {
        return p.id === projectId;
      });
    }
  }, {
    key: "deleteProjectById",
    value: function deleteProjectById(projectId) {
      this.projects = this.projects.filter(function (p) {
        return p.id !== projectId;
      });
    }
  }]);

  return App;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/classes/Project.js":
/*!********************************!*\
  !*** ./src/classes/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Project = /*#__PURE__*/function () {
  function Project() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default Name';

    _classCallCheck(this, Project);

    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.name = name;
    this.todoList = [];
    this.createdAt = Date.now();
  }

  _createClass(Project, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "setName",
    value: function setName(name) {
      this.name = name;
    }
  }, {
    key: "getTodoList",
    value: function getTodoList() {
      return this.todoList;
    }
  }, {
    key: "getSpecificTodo",
    value: function getSpecificTodo(todoId) {
      return this.todoList.find(function (t) {
        return t.id === todoId;
      });
    }
  }, {
    key: "addTodoToProject",
    value: function addTodoToProject(todo) {
      this.todoList.push(todo);
    }
  }, {
    key: "removeTodofromProject",
    value: function removeTodofromProject(todoId) {
      this.todoList = this.todoList.filter(function (t) {
        return t.id !== todoId;
      });
    }
  }]);

  return Project;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./src/classes/Todo.js":
/*!*****************************!*\
  !*** ./src/classes/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/dist/esm-browser/v4.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./src/constants.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Todo = /*#__PURE__*/function () {
  function Todo() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Default Title';
    var description = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Default Description';
    var dueDate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Date.now();
    var priority = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _constants__WEBPACK_IMPORTED_MODULE_0__.PRIORITY[0];
    var isDone = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var notes = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : '';
    var checklist = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

    _classCallCheck(this, Todo);

    this.id = (0,uuid__WEBPACK_IMPORTED_MODULE_1__["default"])();
    this.title = title;
    this.description = description;
    this.createdAt = Date.now();
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = isDone;
    this.notes = notes;
    this.checklist = checklist;
  }

  _createClass(Todo, [{
    key: "getTitle",
    value: function getTitle() {
      return this.title;
    }
  }, {
    key: "setName",
    value: function setName(title) {
      this.title = title;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.description;
    }
  }, {
    key: "setDescription",
    value: function setDescription(description) {
      this.description = description;
    }
  }, {
    key: "getIsDone",
    value: function getIsDone() {
      return this.isDone;
    }
  }, {
    key: "setIsDone",
    value: function setIsDone(val) {
      this.isDone = val;
    }
  }, {
    key: "getDueDate",
    value: function getDueDate() {
      return this.dueDate;
    }
  }, {
    key: "setDueDate",
    value: function setDueDate(date) {
      this.dueDate = date;
    }
  }, {
    key: "getPriority",
    value: function getPriority() {
      return this.priority;
    }
  }, {
    key: "setPriority",
    value: function setPriority(priority) {
      this.priority = priority;
    }
  }, {
    key: "getNotes",
    value: function getNotes() {
      return this.notes;
    }
  }, {
    key: "setNotes",
    value: function setNotes(note) {
      this.notes = note;
    }
  }, {
    key: "getCheckList",
    value: function getCheckList() {
      return this.checklist;
    }
  }, {
    key: "setCheckList",
    value: function setCheckList(check) {
      this.checklist.push(check);
    }
  }]);

  return Todo;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* reexport safe */ _Todo__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Project": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "App": () => (/* reexport safe */ _App__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/classes/Todo.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/classes/Project.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/classes/App.js");




/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PRIORITY": () => (/* binding */ PRIORITY),
/* harmony export */   "DEFAULT_PROJECT": () => (/* binding */ DEFAULT_PROJECT)
/* harmony export */ });
var PRIORITY = ['LOW', 'MEDIUM', 'HIGH'];
var DEFAULT_PROJECT = 'Default Project';

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rng)
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ "./node_modules/uuid/dist/esm-browser/validate.js");

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ "./node_modules/uuid/dist/esm-browser/rng.js");
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ "./node_modules/uuid/dist/esm-browser/stringify.js");



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ "./node_modules/uuid/dist/esm-browser/regex.js");


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ "./src/classes/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ "./src/constants.js");



var btnMenuNav = document.querySelector('.btnMenuNav');
var sideNav = document.querySelector('.side-nav');
var overlay = document.querySelector('.overlay');
var addProjectBtn = document.querySelector('.add-project-btn');
var projectModal = document.querySelector('.project-modal');
var submitBtnProject = document.querySelector('.submit-btn-project');
var cancelBtnProject = document.querySelector('.cancel-btn-project');
var addBtnTodo = document.querySelector('.add-btn-todo');
var todoModal = document.querySelector('.todo-modal');
var submitBtnTodo = document.querySelector('.submit-btn-todo');
var cancelBtnTodo = document.querySelector('.cancel-btn-todo');
var projectList = document.querySelector('.project-list');
var projectForm = document.querySelector('.project-form');
var todoForm = document.querySelector('.todo-form');
var projectTitleName = document.querySelector('.project-title-name');
var containerTodoList = document.querySelector('.container-todo-list');
var defaultProject = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROJECT);
var app = new _classes__WEBPACK_IMPORTED_MODULE_1__.App();
app.addProject(defaultProject);
app.setDefaultProject(defaultProject);
app.setSelectedProject(defaultProject);
projectTitleName.innerHTML = "".concat(app.getSelectedProject().name);
projectList.innerHTML += "\n  <li\n  class=\"\n    text-lg\n    p-2\n    pl-8\n  \"\n  id=\"projectID#".concat(defaultProject.id, "\"\n  >\n  <button\n  class=\"select-project-btn hover:cursor-pointer hover:text-white hover:underline\"\n>\n  ").concat(_constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROJECT, "</button>\n  </li>\n");
btnMenuNav.addEventListener('click', function (e) {
  sideNav.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
});
overlay.addEventListener('click', function (e) {
  sideNav.classList.toggle('-translate-x-full');
  overlay.classList.toggle('hidden');
});
addProjectBtn.addEventListener('click', function (e) {
  projectModal.classList.toggle('hidden');
});
addBtnTodo.addEventListener('click', function (e) {
  todoModal.classList.toggle('hidden');
});
cancelBtnProject.addEventListener('click', function (e) {
  projectModal.classList.add('hidden');
});
cancelBtnTodo.addEventListener('click', function (e) {
  todoModal.classList.add('hidden');
});
submitBtnProject.addEventListener('click', function (e) {
  projectModal.classList.add('hidden');
});
submitBtnTodo.addEventListener('click', function (e) {
  todoModal.classList.add('hidden');
});
projectList.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return;

  if (e.target.classList.contains('select-project-btn')) {
    var liId = e.target.parentElement.id;
    setAppSelectedProject(liId.split('#')[1]);
  }

  if (e.target.classList.contains('delete-project-btn')) {
    var _liId = e.target.parentElement.id;
    delectProjectFromApp(_liId.split('#')[1]);
  }
});
containerTodoList.addEventListener('click', function (e) {
  if (!e.target.matches('button')) return;

  if (e.target.classList.contains('confirm-todo-btn')) {
    //
    var divId = e.target.parentElement.parentElement.id;
    var todoList = app.getSelectedProject().getTodoList();
    var todo = todoList.find(function (el) {
      return el.id === divId;
    });
    todo.setIsDone(!todo.getIsDone());
    populateTodoList(app.getSelectedProject().getTodoList());
  }

  if (e.target.classList.contains('delete-todo-btn')) {
    //
    var _divId = e.target.parentElement.parentElement.id;
    app.getSelectedProject().removeTodofromProject(_divId);
    populateTodoList(app.getSelectedProject().getTodoList());
  }
});
projectForm.addEventListener('submit', addProject);
todoForm.addEventListener('submit', addTodo);

function setAppSelectedProject(projectId) {
  var project = app.getProjectById(projectId);
  app.setSelectedProject(project);
  projectTitleName.innerHTML = "".concat(app.getSelectedProject().name);
  populateTodoList(project.todoList);
}

function delectProjectFromApp(projectId) {
  var confirm = window.confirm('Are you sure you want to delete this project?');
  if (!confirm) return;
  app.deleteProjectById(projectId);

  if (projectId === app.getSelectedProject().id) {
    var _defaultProject = app.getDefaultProject();

    app.setSelectedProject(_defaultProject);
    projectTitleName.innerHTML = "".concat(app.getSelectedProject().name);
  }

  populateProjectList(app.projects);
}

function addProject(e) {
  e.preventDefault();
  var projectName = this.querySelector('[name=name]').value;

  if (!projectName) {
    return;
  }

  var project = new _classes__WEBPACK_IMPORTED_MODULE_1__.Project(projectName);
  app.addProject(project);
  projectModal.classList.add('hidden');
  populateProjectList(app.projects);
}

function populateProjectList() {
  var projects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  projectList.innerHTML = '';
  projectList.innerHTML = projects.map(function (project, i) {
    if (project.name === _constants__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_PROJECT) {
      return "\n      <li\n      id=\"projectID#".concat(project.id, "\"s\n      class=\"\n        text-lg\n        p-2\n        pl-8\n      \"\n    >\n      <button\n      class=\"select-project-btn hover:cursor-pointer hover:text-white hover:underline\"\n    >\n      ").concat(project.name, "\n    </button>\n    </li>\n      ");
    }

    return "\n      <li class=\"text-lg p-2 pl-8 flex justify-between\" id=\"projectID#".concat(project.id, "\">\n        <button\n          class=\"select-project-btn hover:cursor-pointer hover:text-white hover:underline\"\n        >\n          ").concat(project.name, "\n        </button>\n        <button class=\"delete-project-btn\n        hover:cursor-pointer\n        hover:text-white\n        hover:bg-gray-50\n        hover:bg-opacity-10\n        p-2\n        rounded-full\">\n        \uD83D\uDDD1\n        </button>\n      </li>\n    ");
  }).join('');
}

function addTodo(e) {
  e.preventDefault();
  var title = this.querySelector('[name=title]').value;
  var description = this.querySelector('[name=description]').value;
  var dueDate = this.querySelector('[name=dueDate]').value;
  var priority = this.querySelector('[name=priority]').value;

  if (!title) {
    document.alert('Title is required');
    return;
  }

  var todo = new _classes__WEBPACK_IMPORTED_MODULE_1__.Todo(title, description, new Date(dueDate) || Date.now(), priority, false); // get the current selected project

  var selectedProject = app.getSelectedProject();
  selectedProject.addTodoToProject(todo);
  populateTodoList(selectedProject.todoList);
  todoModal.classList.add('hidden');
}

function populateTodoList() {
  var todos = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  containerTodoList.innerHTML = '';
  containerTodoList.innerHTML = todos.map(function (todo, i) {
    return "\n    <!-- TODO CARD -->\n    <div\n      id=\"".concat(todo.id, "\"\n      class=\"\n        todo\n        ").concat(todo.isDone ? 'bg-green-100' : '', "\n        border-2 border-gray-400\n        p-1\n        max-w-sm\n        rounded-md\n        flex flex-col\n        mx-auto\n        shadow-md\n      \"\n    >\n      <div class=\"flex justify-between space-x-5 items-center\">\n        <h3 class=\"text-lg font-medium p-2 flex-1 ").concat(todo.isDone ? 'line-through' : '', "\">\n          ").concat(todo.title, "\n        </h3>\n        <div class=\"flex flex-col items-end space-y-2 p-2\">\n          <p class=\"text-base font-light uppercase ").concat(todo.priority === 'low' ? 'text-blue-500' : todo.priority === 'medium' ? 'text-yellow-500' : 'text-red-500', " ").concat(todo.isDone ? 'line-through' : '', "\">").concat(todo.priority, "</p>\n          <p class=\"text-xs font-extralight ").concat(todo.isDone ? 'line-through' : '', "\">").concat(todo.dueDate.toLocaleDateString(), "</p>\n        </div>\n      </div>\n      <div class=\"p-3 text-base font-light\">\n        <p>\n        ").concat(todo.description, "\n        </p>\n      </div>\n      <div class=\"flex justify-between px-6 py-1\">\n        <button\n          class=\"\n            confirm-todo-btn\n            hover:bg-green-400 hover:bg-opacity-25 hover:text-green-700\n            p-2\n            rounded-full\n            transition\n            duration-150\n          \"\n        >\n        \u2714\n        </button>\n          <button\n            class=\"\n              delete-todo-btn\n              hover:bg-red-400 hover:bg-opacity-25 hover:text-red-700\n              p-2\n              rounded-full\n              transition\n              duration-150\n            \"\n          >\n          \uD83D\uDDD1\n        </button>\n      </div>\n    </div>\n    <!-- End OF TODO CARD -->\n    ");
  });
}
})();

MyLibrary = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BO0FBQ0osaUJBQWM7QUFBQTs7QUFDWixTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsSUFBdkI7QUFDRDs7OztXQUVELDJCQUFrQkMsT0FBbEIsRUFBMkI7QUFDekIsV0FBS0YsY0FBTCxHQUFzQkUsT0FBdEI7QUFDRDs7O1dBRUQsNkJBQW9CO0FBQ2xCLGFBQU8sS0FBS0YsY0FBWjtBQUNEOzs7V0FFRCw0QkFBbUJFLE9BQW5CLEVBQTRCO0FBQzFCLFdBQUtELGVBQUwsR0FBdUJDLE9BQXZCO0FBQ0Q7OztXQUVELDhCQUFxQjtBQUNuQixhQUFPLEtBQUtELGVBQVo7QUFDRDs7O1dBRUQsb0JBQVdDLE9BQVgsRUFBb0I7QUFDbEIsV0FBS0gsUUFBTCxDQUFjSSxJQUFkLENBQW1CRCxPQUFuQjtBQUNEOzs7V0FFRCwyQkFBa0I7QUFDaEIsYUFBTyxLQUFLSCxRQUFaO0FBQ0Q7OztXQUVELHdCQUFlSyxTQUFmLEVBQTBCO0FBQ3hCLGFBQU8sS0FBS0wsUUFBTCxDQUFjTSxJQUFkLENBQW1CLFVBQUNDLENBQUQ7QUFBQSxlQUFPQSxDQUFDLENBQUNDLEVBQUYsS0FBU0gsU0FBaEI7QUFBQSxPQUFuQixDQUFQO0FBQ0Q7OztXQUVELDJCQUFrQkEsU0FBbEIsRUFBNkI7QUFDM0IsV0FBS0wsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNTLE1BQWQsQ0FBcUIsVUFBQ0YsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ0MsRUFBRixLQUFTSCxTQUFoQjtBQUFBLE9BQXJCLENBQWhCO0FBQ0Q7Ozs7OztBQUdILGlFQUFlTixHQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7O0lBRU1hO0FBQ0oscUJBQW1DO0FBQUEsUUFBdkJDLElBQXVCLHVFQUFoQixjQUFnQjs7QUFBQTs7QUFDakMsU0FBS0wsRUFBTCxHQUFVRyxnREFBTSxFQUFoQjtBQUNBLFNBQUtFLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQyxJQUFJLENBQUNDLEdBQUwsRUFBakI7QUFDRDs7OztXQUVELG1CQUFVO0FBQ1IsYUFBTyxLQUFLSixJQUFaO0FBQ0Q7OztXQUVELGlCQUFRQSxJQUFSLEVBQWM7QUFDWixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDRDs7O1dBRUQsdUJBQWM7QUFDWixhQUFPLEtBQUtDLFFBQVo7QUFDRDs7O1dBRUQseUJBQWdCSSxNQUFoQixFQUF3QjtBQUN0QixhQUFPLEtBQUtKLFFBQUwsQ0FBY1IsSUFBZCxDQUFtQixVQUFDYSxDQUFEO0FBQUEsZUFBT0EsQ0FBQyxDQUFDWCxFQUFGLEtBQVNVLE1BQWhCO0FBQUEsT0FBbkIsQ0FBUDtBQUNEOzs7V0FFRCwwQkFBaUJFLElBQWpCLEVBQXVCO0FBQ3JCLFdBQUtOLFFBQUwsQ0FBY1YsSUFBZCxDQUFtQmdCLElBQW5CO0FBQ0Q7OztXQUVELCtCQUFzQkYsTUFBdEIsRUFBOEI7QUFDNUIsV0FBS0osUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNMLE1BQWQsQ0FBcUIsVUFBQ1UsQ0FBRDtBQUFBLGVBQU9BLENBQUMsQ0FBQ1gsRUFBRixLQUFTVSxNQUFoQjtBQUFBLE9BQXJCLENBQWhCO0FBQ0Q7Ozs7OztBQUdILGlFQUFlTixPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNBO0FBQ0E7O0lBRU1VO0FBQ0osa0JBUUU7QUFBQSxRQVBBQyxLQU9BLHVFQVBRLGVBT1I7QUFBQSxRQU5BQyxXQU1BLHVFQU5jLHFCQU1kO0FBQUEsUUFMQUMsT0FLQSx1RUFMVVQsSUFBSSxDQUFDQyxHQUFMLEVBS1Y7QUFBQSxRQUpBUyxRQUlBLHVFQUpXTCxtREFJWDtBQUFBLFFBSEFNLE1BR0EsdUVBSFMsS0FHVDtBQUFBLFFBRkFDLEtBRUEsdUVBRlEsRUFFUjtBQUFBLFFBREFDLFNBQ0EsdUVBRFksRUFDWjs7QUFBQTs7QUFDQSxTQUFLckIsRUFBTCxHQUFVRyxnREFBTSxFQUFoQjtBQUNBLFNBQUtZLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtDLFdBQUwsR0FBbUJBLFdBQW5CO0FBQ0EsU0FBS1QsU0FBTCxHQUFpQkMsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBQ0EsU0FBS1EsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNEOzs7O1dBRUQsb0JBQVc7QUFDVCxhQUFPLEtBQUtOLEtBQVo7QUFDRDs7O1dBRUQsaUJBQVFBLEtBQVIsRUFBZTtBQUNiLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7V0FFRCwwQkFBaUI7QUFDZixhQUFPLEtBQUtDLFdBQVo7QUFDRDs7O1dBRUQsd0JBQWVBLFdBQWYsRUFBNEI7QUFDMUIsV0FBS0EsV0FBTCxHQUFtQkEsV0FBbkI7QUFDRDs7O1dBRUQscUJBQVk7QUFDVixhQUFPLEtBQUtHLE1BQVo7QUFDRDs7O1dBRUQsbUJBQVVHLEdBQVYsRUFBZTtBQUNiLFdBQUtILE1BQUwsR0FBY0csR0FBZDtBQUNEOzs7V0FFRCxzQkFBYTtBQUNYLGFBQU8sS0FBS0wsT0FBWjtBQUNEOzs7V0FFRCxvQkFBV00sSUFBWCxFQUFpQjtBQUNmLFdBQUtOLE9BQUwsR0FBZU0sSUFBZjtBQUNEOzs7V0FFRCx1QkFBYztBQUNaLGFBQU8sS0FBS0wsUUFBWjtBQUNEOzs7V0FFRCxxQkFBWUEsUUFBWixFQUFzQjtBQUNwQixXQUFLQSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEOzs7V0FFRCxvQkFBVztBQUNULGFBQU8sS0FBS0UsS0FBWjtBQUNEOzs7V0FFRCxrQkFBU0ksSUFBVCxFQUFlO0FBQ2IsV0FBS0osS0FBTCxHQUFhSSxJQUFiO0FBQ0Q7OztXQUVELHdCQUFlO0FBQ2IsYUFBTyxLQUFLSCxTQUFaO0FBQ0Q7OztXQUVELHNCQUFhSSxLQUFiLEVBQW9CO0FBQ2xCLFdBQUtKLFNBQUwsQ0FBZXpCLElBQWYsQ0FBb0I2QixLQUFwQjtBQUNEOzs7Ozs7QUFHSCxpRUFBZVgsSUFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDRE8sSUFBTUQsUUFBUSxHQUFHLENBQUMsS0FBRCxFQUFRLFFBQVIsRUFBa0IsTUFBbEIsQ0FBakI7QUFDQSxJQUFNYyxlQUFlLEdBQUcsaUJBQXhCOzs7Ozs7Ozs7OztBQ0RQOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxpRUFBZSxjQUFjLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxnQkFBZ0IsRUFBRSxVQUFVLEdBQUcseUNBQXlDOzs7Ozs7Ozs7Ozs7OztBQ0FwSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xCcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBnQkFBMGdCO0FBQzFnQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPLHdEQUFRO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Qkc7QUFDWTs7QUFFdkM7QUFDQTtBQUNBLCtDQUErQywrQ0FBRyxLQUFLOztBQUV2RDtBQUNBLG1DQUFtQzs7QUFFbkM7QUFDQTs7QUFFQSxvQkFBb0IsUUFBUTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsU0FBUyx5REFBUztBQUNsQjs7QUFFQSxpRUFBZSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7QUN2QmM7O0FBRS9CO0FBQ0EscUNBQXFDLHNEQUFVO0FBQy9DOztBQUVBLGlFQUFlLFFBQVE7Ozs7OztVQ052QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFuQjtBQUNBLElBQU1DLE9BQU8sR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLFdBQXZCLENBQWhCO0FBQ0EsSUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFFQSxJQUFNRyxhQUFhLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBdEI7QUFDQSxJQUFNSSxZQUFZLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixnQkFBdkIsQ0FBckI7QUFDQSxJQUFNSyxnQkFBZ0IsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLHFCQUF2QixDQUF6QjtBQUNBLElBQU1NLGdCQUFnQixHQUFHUCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBRUEsSUFBTU8sVUFBVSxHQUFHUixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBbkI7QUFDQSxJQUFNUSxTQUFTLEdBQUdULFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU1TLGFBQWEsR0FBR1YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBLElBQU1VLGFBQWEsR0FBR1gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUVBLElBQU1XLFdBQVcsR0FBR1osUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBRUEsSUFBTVksV0FBVyxHQUFHYixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFDQSxJQUFNYSxRQUFRLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUNBLElBQU1jLGdCQUFnQixHQUFHZixRQUFRLENBQUNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0EsSUFBTWUsaUJBQWlCLEdBQUdoQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQTFCO0FBRUEsSUFBTXJDLGNBQWMsR0FBRyxJQUFJVyw2Q0FBSixDQUFZdUIsdURBQVosQ0FBdkI7QUFFQSxJQUFNbUIsR0FBRyxHQUFHLElBQUl2RCx5Q0FBSixFQUFaO0FBRUF1RCxHQUFHLENBQUNDLFVBQUosQ0FBZXRELGNBQWY7QUFDQXFELEdBQUcsQ0FBQ0UsaUJBQUosQ0FBc0J2RCxjQUF0QjtBQUNBcUQsR0FBRyxDQUFDRyxrQkFBSixDQUF1QnhELGNBQXZCO0FBQ0FtRCxnQkFBZ0IsQ0FBQ00sU0FBakIsYUFBZ0NKLEdBQUcsQ0FBQ0ssa0JBQUosR0FBeUI5QyxJQUF6RDtBQUNBb0MsV0FBVyxDQUFDUyxTQUFaLDBGQU9rQnpELGNBQWMsQ0FBQ08sRUFQakMsNEhBWUkyQix1REFaSjtBQWdCQUMsVUFBVSxDQUFDd0IsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDdEIsRUFBQUEsT0FBTyxDQUFDdUIsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsbUJBQXpCO0FBQ0F2QixFQUFBQSxPQUFPLENBQUNzQixTQUFSLENBQWtCQyxNQUFsQixDQUF5QixRQUF6QjtBQUNELENBSEQ7QUFLQXZCLE9BQU8sQ0FBQ29CLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNDLENBQUQsRUFBTztBQUN2Q3RCLEVBQUFBLE9BQU8sQ0FBQ3VCLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLG1CQUF6QjtBQUNBdkIsRUFBQUEsT0FBTyxDQUFDc0IsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDRCxDQUhEO0FBS0F0QixhQUFhLENBQUNtQixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFDQyxDQUFELEVBQU87QUFDN0NuQixFQUFBQSxZQUFZLENBQUNvQixTQUFiLENBQXVCQyxNQUF2QixDQUE4QixRQUE5QjtBQUNELENBRkQ7QUFJQWxCLFVBQVUsQ0FBQ2UsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBQ0MsQ0FBRCxFQUFPO0FBQzFDZixFQUFBQSxTQUFTLENBQUNnQixTQUFWLENBQW9CQyxNQUFwQixDQUEyQixRQUEzQjtBQUNELENBRkQ7QUFJQW5CLGdCQUFnQixDQUFDZ0IsZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDLFVBQUNDLENBQUQsRUFBTztBQUNoRG5CLEVBQUFBLFlBQVksQ0FBQ29CLFNBQWIsQ0FBdUJFLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0QsQ0FGRDtBQUdBaEIsYUFBYSxDQUFDWSxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxVQUFDQyxDQUFELEVBQU87QUFDN0NmLEVBQUFBLFNBQVMsQ0FBQ2dCLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0QsQ0FGRDtBQUlBckIsZ0JBQWdCLENBQUNpQixnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2hEbkIsRUFBQUEsWUFBWSxDQUFDb0IsU0FBYixDQUF1QkUsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDRCxDQUZEO0FBSUFqQixhQUFhLENBQUNhLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUNDLENBQUQsRUFBTztBQUM3Q2YsRUFBQUEsU0FBUyxDQUFDZ0IsU0FBVixDQUFvQkUsR0FBcEIsQ0FBd0IsUUFBeEI7QUFDRCxDQUZEO0FBSUFmLFdBQVcsQ0FBQ1csZ0JBQVosQ0FBNkIsT0FBN0IsRUFBc0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQzNDLE1BQUksQ0FBQ0EsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsUUFBakIsQ0FBTCxFQUFpQzs7QUFDakMsTUFBSUwsQ0FBQyxDQUFDSSxNQUFGLENBQVNILFNBQVQsQ0FBbUJLLFFBQW5CLENBQTRCLG9CQUE1QixDQUFKLEVBQXVEO0FBQ3JELFFBQU1DLElBQUksR0FBR1AsQ0FBQyxDQUFDSSxNQUFGLENBQVNJLGFBQVQsQ0FBdUI3RCxFQUFwQztBQUNBOEQsSUFBQUEscUJBQXFCLENBQUNGLElBQUksQ0FBQ0csS0FBTCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsQ0FBRCxDQUFyQjtBQUNEOztBQUNELE1BQUlWLENBQUMsQ0FBQ0ksTUFBRixDQUFTSCxTQUFULENBQW1CSyxRQUFuQixDQUE0QixvQkFBNUIsQ0FBSixFQUF1RDtBQUNyRCxRQUFNQyxLQUFJLEdBQUdQLENBQUMsQ0FBQ0ksTUFBRixDQUFTSSxhQUFULENBQXVCN0QsRUFBcEM7QUFDQWdFLElBQUFBLG9CQUFvQixDQUFDSixLQUFJLENBQUNHLEtBQUwsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBQUQsQ0FBcEI7QUFDRDtBQUNGLENBVkQ7QUFZQWxCLGlCQUFpQixDQUFDTyxnQkFBbEIsQ0FBbUMsT0FBbkMsRUFBNEMsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2pELE1BQUksQ0FBQ0EsQ0FBQyxDQUFDSSxNQUFGLENBQVNDLE9BQVQsQ0FBaUIsUUFBakIsQ0FBTCxFQUFpQzs7QUFDakMsTUFBSUwsQ0FBQyxDQUFDSSxNQUFGLENBQVNILFNBQVQsQ0FBbUJLLFFBQW5CLENBQTRCLGtCQUE1QixDQUFKLEVBQXFEO0FBQ25EO0FBQ0EsUUFBTU0sS0FBSyxHQUFHWixDQUFDLENBQUNJLE1BQUYsQ0FBU0ksYUFBVCxDQUF1QkEsYUFBdkIsQ0FBcUM3RCxFQUFuRDtBQUNBLFFBQU1NLFFBQVEsR0FBR3dDLEdBQUcsQ0FBQ0ssa0JBQUosR0FBeUJlLFdBQXpCLEVBQWpCO0FBQ0EsUUFBTXRELElBQUksR0FBR04sUUFBUSxDQUFDUixJQUFULENBQWMsVUFBQ3FFLEVBQUQ7QUFBQSxhQUFRQSxFQUFFLENBQUNuRSxFQUFILEtBQVVpRSxLQUFsQjtBQUFBLEtBQWQsQ0FBYjtBQUNBckQsSUFBQUEsSUFBSSxDQUFDd0QsU0FBTCxDQUFlLENBQUN4RCxJQUFJLENBQUN5RCxTQUFMLEVBQWhCO0FBQ0FDLElBQUFBLGdCQUFnQixDQUFDeEIsR0FBRyxDQUFDSyxrQkFBSixHQUF5QmUsV0FBekIsRUFBRCxDQUFoQjtBQUNEOztBQUNELE1BQUliLENBQUMsQ0FBQ0ksTUFBRixDQUFTSCxTQUFULENBQW1CSyxRQUFuQixDQUE0QixpQkFBNUIsQ0FBSixFQUFvRDtBQUNsRDtBQUNBLFFBQU1NLE1BQUssR0FBR1osQ0FBQyxDQUFDSSxNQUFGLENBQVNJLGFBQVQsQ0FBdUJBLGFBQXZCLENBQXFDN0QsRUFBbkQ7QUFDQThDLElBQUFBLEdBQUcsQ0FBQ0ssa0JBQUosR0FBeUJvQixxQkFBekIsQ0FBK0NOLE1BQS9DO0FBQ0FLLElBQUFBLGdCQUFnQixDQUFDeEIsR0FBRyxDQUFDSyxrQkFBSixHQUF5QmUsV0FBekIsRUFBRCxDQUFoQjtBQUNEO0FBQ0YsQ0FoQkQ7QUFrQkF4QixXQUFXLENBQUNVLGdCQUFaLENBQTZCLFFBQTdCLEVBQXVDTCxVQUF2QztBQUNBSixRQUFRLENBQUNTLGdCQUFULENBQTBCLFFBQTFCLEVBQW9Db0IsT0FBcEM7O0FBRUEsU0FBU1YscUJBQVQsQ0FBK0JqRSxTQUEvQixFQUEwQztBQUN4QyxNQUFNRixPQUFPLEdBQUdtRCxHQUFHLENBQUMyQixjQUFKLENBQW1CNUUsU0FBbkIsQ0FBaEI7QUFDQWlELEVBQUFBLEdBQUcsQ0FBQ0csa0JBQUosQ0FBdUJ0RCxPQUF2QjtBQUVBaUQsRUFBQUEsZ0JBQWdCLENBQUNNLFNBQWpCLGFBQWdDSixHQUFHLENBQUNLLGtCQUFKLEdBQXlCOUMsSUFBekQ7QUFDQWlFLEVBQUFBLGdCQUFnQixDQUFDM0UsT0FBTyxDQUFDVyxRQUFULENBQWhCO0FBQ0Q7O0FBRUQsU0FBUzBELG9CQUFULENBQThCbkUsU0FBOUIsRUFBeUM7QUFDdkMsTUFBTTZFLE9BQU8sR0FBR0MsTUFBTSxDQUFDRCxPQUFQLENBQ2QsK0NBRGMsQ0FBaEI7QUFHQSxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUVkNUIsRUFBQUEsR0FBRyxDQUFDOEIsaUJBQUosQ0FBc0IvRSxTQUF0Qjs7QUFFQSxNQUFJQSxTQUFTLEtBQUtpRCxHQUFHLENBQUNLLGtCQUFKLEdBQXlCbkQsRUFBM0MsRUFBK0M7QUFDN0MsUUFBTVAsZUFBYyxHQUFHcUQsR0FBRyxDQUFDK0IsaUJBQUosRUFBdkI7O0FBQ0EvQixJQUFBQSxHQUFHLENBQUNHLGtCQUFKLENBQXVCeEQsZUFBdkI7QUFDQW1ELElBQUFBLGdCQUFnQixDQUFDTSxTQUFqQixhQUFnQ0osR0FBRyxDQUFDSyxrQkFBSixHQUF5QjlDLElBQXpEO0FBQ0Q7O0FBRUR5RSxFQUFBQSxtQkFBbUIsQ0FBQ2hDLEdBQUcsQ0FBQ3RELFFBQUwsQ0FBbkI7QUFDRDs7QUFFRCxTQUFTdUQsVUFBVCxDQUFvQk0sQ0FBcEIsRUFBdUI7QUFDckJBLEVBQUFBLENBQUMsQ0FBQzBCLGNBQUY7QUFDQSxNQUFNQyxXQUFXLEdBQUcsS0FBS2xELGFBQUwsQ0FBbUIsYUFBbkIsRUFBa0NtRCxLQUF0RDs7QUFDQSxNQUFJLENBQUNELFdBQUwsRUFBa0I7QUFDaEI7QUFDRDs7QUFDRCxNQUFNckYsT0FBTyxHQUFHLElBQUlTLDZDQUFKLENBQVk0RSxXQUFaLENBQWhCO0FBQ0FsQyxFQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZXBELE9BQWY7QUFDQXVDLEVBQUFBLFlBQVksQ0FBQ29CLFNBQWIsQ0FBdUJFLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0FzQixFQUFBQSxtQkFBbUIsQ0FBQ2hDLEdBQUcsQ0FBQ3RELFFBQUwsQ0FBbkI7QUFDRDs7QUFFRCxTQUFTc0YsbUJBQVQsR0FBNEM7QUFBQSxNQUFmdEYsUUFBZSx1RUFBSixFQUFJO0FBQzFDaUQsRUFBQUEsV0FBVyxDQUFDUyxTQUFaLEdBQXdCLEVBQXhCO0FBQ0FULEVBQUFBLFdBQVcsQ0FBQ1MsU0FBWixHQUF3QjFELFFBQVEsQ0FDN0IwRixHQURxQixDQUNqQixVQUFDdkYsT0FBRCxFQUFVd0YsQ0FBVixFQUFnQjtBQUNuQixRQUFJeEYsT0FBTyxDQUFDVSxJQUFSLEtBQWlCc0IsdURBQXJCLEVBQXNDO0FBQ3BDLHlEQUVjaEMsT0FBTyxDQUFDSyxFQUZ0QixxTkFZQUwsT0FBTyxDQUFDVSxJQVpSO0FBZ0JEOztBQUNELGdHQUNrRVYsT0FBTyxDQUFDSyxFQUQxRSxzSkFLTUwsT0FBTyxDQUFDVSxJQUxkO0FBa0JELEdBdENxQixFQXVDckIrRSxJQXZDcUIsQ0F1Q2hCLEVBdkNnQixDQUF4QjtBQXdDRDs7QUFFRCxTQUFTWixPQUFULENBQWlCbkIsQ0FBakIsRUFBb0I7QUFDbEJBLEVBQUFBLENBQUMsQ0FBQzBCLGNBQUY7QUFDQSxNQUFNaEUsS0FBSyxHQUFHLEtBQUtlLGFBQUwsQ0FBbUIsY0FBbkIsRUFBbUNtRCxLQUFqRDtBQUNBLE1BQU1qRSxXQUFXLEdBQUcsS0FBS2MsYUFBTCxDQUFtQixvQkFBbkIsRUFBeUNtRCxLQUE3RDtBQUNBLE1BQU1oRSxPQUFPLEdBQUcsS0FBS2EsYUFBTCxDQUFtQixnQkFBbkIsRUFBcUNtRCxLQUFyRDtBQUNBLE1BQU0vRCxRQUFRLEdBQUcsS0FBS1ksYUFBTCxDQUFtQixpQkFBbkIsRUFBc0NtRCxLQUF2RDs7QUFFQSxNQUFJLENBQUNsRSxLQUFMLEVBQVk7QUFDVmMsSUFBQUEsUUFBUSxDQUFDd0QsS0FBVCxDQUFlLG1CQUFmO0FBQ0E7QUFDRDs7QUFDRCxNQUFNekUsSUFBSSxHQUFHLElBQUlFLDBDQUFKLENBQ1hDLEtBRFcsRUFFWEMsV0FGVyxFQUdYLElBQUlSLElBQUosQ0FBU1MsT0FBVCxLQUFxQlQsSUFBSSxDQUFDQyxHQUFMLEVBSFYsRUFJWFMsUUFKVyxFQUtYLEtBTFcsQ0FBYixDQVhrQixDQWtCbEI7O0FBQ0EsTUFBTXhCLGVBQWUsR0FBR29ELEdBQUcsQ0FBQ0ssa0JBQUosRUFBeEI7QUFFQXpELEVBQUFBLGVBQWUsQ0FBQzRGLGdCQUFoQixDQUFpQzFFLElBQWpDO0FBQ0EwRCxFQUFBQSxnQkFBZ0IsQ0FBQzVFLGVBQWUsQ0FBQ1ksUUFBakIsQ0FBaEI7QUFDQWdDLEVBQUFBLFNBQVMsQ0FBQ2dCLFNBQVYsQ0FBb0JFLEdBQXBCLENBQXdCLFFBQXhCO0FBQ0Q7O0FBRUQsU0FBU2MsZ0JBQVQsR0FBc0M7QUFBQSxNQUFaaUIsS0FBWSx1RUFBSixFQUFJO0FBQ3BDMUMsRUFBQUEsaUJBQWlCLENBQUNLLFNBQWxCLEdBQThCLEVBQTlCO0FBQ0FMLEVBQUFBLGlCQUFpQixDQUFDSyxTQUFsQixHQUE4QnFDLEtBQUssQ0FBQ0wsR0FBTixDQUFVLFVBQUN0RSxJQUFELEVBQU91RSxDQUFQLEVBQWE7QUFDbkQsb0VBR1F2RSxJQUFJLENBQUNaLEVBSGIsdURBTU1ZLElBQUksQ0FBQ08sTUFBTCxHQUFjLGNBQWQsR0FBK0IsRUFOckMsc1NBa0JNUCxJQUFJLENBQUNPLE1BQUwsR0FBYyxjQUFkLEdBQStCLEVBbEJyQyw0QkFvQlFQLElBQUksQ0FBQ0csS0FwQmIsaUpBd0JRSCxJQUFJLENBQUNNLFFBQUwsS0FBa0IsS0FBbEIsR0FDSSxlQURKLEdBRUlOLElBQUksQ0FBQ00sUUFBTCxLQUFrQixRQUFsQixHQUNBLGlCQURBLEdBRUEsY0E1QlosY0E2QlVOLElBQUksQ0FBQ08sTUFBTCxHQUFjLGNBQWQsR0FBK0IsRUE3QnpDLGdCQTZCZ0RQLElBQUksQ0FBQ00sUUE3QnJELGdFQStCUU4sSUFBSSxDQUFDTyxNQUFMLEdBQWMsY0FBZCxHQUErQixFQS9CdkMsZ0JBZ0NXUCxJQUFJLENBQUNLLE9BQUwsQ0FBYXVFLGtCQUFiLEVBaENYLHNIQXFDTTVFLElBQUksQ0FBQ0ksV0FyQ1g7QUFxRUQsR0F0RTZCLENBQTlCO0FBdUVELEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvY2xhc3Nlcy9BcHAuanMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL2NsYXNzZXMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvY2xhc3Nlcy9Ub2RvLmpzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9jbGFzc2VzL2luZGV4LmpzIiwid2VicGFjazovL015TGlicmFyeS8uL3NyYy9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vc3JjL3N0eWxlcy9pbmRleC5jc3M/MTcxZiIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L2VzbS1icm93c2VyL3JlZ2V4LmpzIiwid2VicGFjazovL015TGlicmFyeS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvcm5nLmpzIiwid2VicGFjazovL015TGlicmFyeS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL015TGlicmFyeS8uL25vZGVfbW9kdWxlcy91dWlkL2Rpc3QvZXNtLWJyb3dzZXIvdjQuanMiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5Ly4vbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9lc20tYnJvd3Nlci92YWxpZGF0ZS5qcyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vTXlMaWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9NeUxpYnJhcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXVxyXG4gICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IG51bGxcclxuICAgIHRoaXMuc2VsZWN0ZWRQcm9qZWN0ID0gbnVsbFxyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdFByb2plY3QocHJvamVjdCkge1xyXG4gICAgdGhpcy5kZWZhdWx0UHJvamVjdCA9IHByb2plY3RcclxuICB9XHJcblxyXG4gIGdldERlZmF1bHRQcm9qZWN0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmYXVsdFByb2plY3RcclxuICB9XHJcblxyXG4gIHNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkUHJvamVjdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkUHJvamVjdFxyXG4gIH1cclxuXHJcbiAgYWRkUHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdClcclxuICB9XHJcblxyXG4gIGdldFByb2plY3RzTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzXHJcbiAgfVxyXG5cclxuICBnZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpIHtcclxuICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoKHApID0+IHAuaWQgPT09IHByb2plY3RJZClcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2plY3RCeUlkKHByb2plY3RJZCkge1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IHRoaXMucHJvamVjdHMuZmlsdGVyKChwKSA9PiBwLmlkICE9PSBwcm9qZWN0SWQpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuIiwiaW1wb3J0IHsgdjQgYXMgdXVpZFY0IH0gZnJvbSAndXVpZCdcclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUgPSAnRGVmYXVsdCBOYW1lJykge1xyXG4gICAgdGhpcy5pZCA9IHV1aWRWNCgpXHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lXHJcbiAgICB0aGlzLnRvZG9MaXN0ID0gW11cclxuICAgIHRoaXMuY3JlYXRlZEF0ID0gRGF0ZS5ub3coKVxyXG4gIH1cclxuXHJcbiAgZ2V0TmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWVcclxuICB9XHJcblxyXG4gIHNldE5hbWUobmFtZSkge1xyXG4gICAgdGhpcy5uYW1lID0gbmFtZVxyXG4gIH1cclxuXHJcbiAgZ2V0VG9kb0xpc3QoKSB7XHJcbiAgICByZXR1cm4gdGhpcy50b2RvTGlzdFxyXG4gIH1cclxuXHJcbiAgZ2V0U3BlY2lmaWNUb2RvKHRvZG9JZCkge1xyXG4gICAgcmV0dXJuIHRoaXMudG9kb0xpc3QuZmluZCgodCkgPT4gdC5pZCA9PT0gdG9kb0lkKVxyXG4gIH1cclxuXHJcbiAgYWRkVG9kb1RvUHJvamVjdCh0b2RvKSB7XHJcbiAgICB0aGlzLnRvZG9MaXN0LnB1c2godG9kbylcclxuICB9XHJcblxyXG4gIHJlbW92ZVRvZG9mcm9tUHJvamVjdCh0b2RvSWQpIHtcclxuICAgIHRoaXMudG9kb0xpc3QgPSB0aGlzLnRvZG9MaXN0LmZpbHRlcigodCkgPT4gdC5pZCAhPT0gdG9kb0lkKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFxyXG4iLCJpbXBvcnQgeyB2NCBhcyB1dWlkVjQgfSBmcm9tICd1dWlkJ1xyXG5pbXBvcnQgeyBQUklPUklUWSB9IGZyb20gJy4uL2NvbnN0YW50cydcclxuXHJcbmNsYXNzIFRvZG8ge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdGl0bGUgPSAnRGVmYXVsdCBUaXRsZScsXHJcbiAgICBkZXNjcmlwdGlvbiA9ICdEZWZhdWx0IERlc2NyaXB0aW9uJyxcclxuICAgIGR1ZURhdGUgPSBEYXRlLm5vdygpLFxyXG4gICAgcHJpb3JpdHkgPSBQUklPUklUWVswXSxcclxuICAgIGlzRG9uZSA9IGZhbHNlLFxyXG4gICAgbm90ZXMgPSAnJyxcclxuICAgIGNoZWNrbGlzdCA9IFtdXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXVpZFY0KClcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXHJcbiAgICB0aGlzLmNyZWF0ZWRBdCA9IERhdGUubm93KClcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGVcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gICAgdGhpcy5pc0RvbmUgPSBpc0RvbmVcclxuICAgIHRoaXMubm90ZXMgPSBub3Rlc1xyXG4gICAgdGhpcy5jaGVja2xpc3QgPSBjaGVja2xpc3RcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIHNldE5hbWUodGl0bGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZVxyXG4gIH1cclxuXHJcbiAgZ2V0RGVzY3JpcHRpb24oKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZXNjcmlwdGlvblxyXG4gIH1cclxuXHJcbiAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvblxyXG4gIH1cclxuXHJcbiAgZ2V0SXNEb25lKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNEb25lXHJcbiAgfVxyXG5cclxuICBzZXRJc0RvbmUodmFsKSB7XHJcbiAgICB0aGlzLmlzRG9uZSA9IHZhbFxyXG4gIH1cclxuXHJcbiAgZ2V0RHVlRGF0ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmR1ZURhdGVcclxuICB9XHJcblxyXG4gIHNldER1ZURhdGUoZGF0ZSkge1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZGF0ZVxyXG4gIH1cclxuXHJcbiAgZ2V0UHJpb3JpdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcmlvcml0eVxyXG4gIH1cclxuXHJcbiAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eVxyXG4gIH1cclxuXHJcbiAgZ2V0Tm90ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ub3Rlc1xyXG4gIH1cclxuXHJcbiAgc2V0Tm90ZXMobm90ZSkge1xyXG4gICAgdGhpcy5ub3RlcyA9IG5vdGVcclxuICB9XHJcblxyXG4gIGdldENoZWNrTGlzdCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNoZWNrbGlzdFxyXG4gIH1cclxuXHJcbiAgc2V0Q2hlY2tMaXN0KGNoZWNrKSB7XHJcbiAgICB0aGlzLmNoZWNrbGlzdC5wdXNoKGNoZWNrKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kb1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFRvZG8gfSBmcm9tICcuL1RvZG8nXHJcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCdcclxuZXhwb3J0IHsgZGVmYXVsdCBhcyBBcHAgfSBmcm9tICcuL0FwcCdcclxuIiwiZXhwb3J0IGNvbnN0IFBSSU9SSVRZID0gWydMT1cnLCAnTUVESVVNJywgJ0hJR0gnXVxyXG5leHBvcnQgY29uc3QgREVGQVVMVF9QUk9KRUNUID0gJ0RlZmF1bHQgUHJvamVjdCdcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiZXhwb3J0IGRlZmF1bHQgL14oPzpbMC05YS1mXXs4fS1bMC05YS1mXXs0fS1bMS01XVswLTlhLWZdezN9LVs4OWFiXVswLTlhLWZdezN9LVswLTlhLWZdezEyfXwwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDApJC9pOyIsIi8vIFVuaXF1ZSBJRCBjcmVhdGlvbiByZXF1aXJlcyBhIGhpZ2ggcXVhbGl0eSByYW5kb20gIyBnZW5lcmF0b3IuIEluIHRoZSBicm93c2VyIHdlIHRoZXJlZm9yZVxuLy8gcmVxdWlyZSB0aGUgY3J5cHRvIEFQSSBhbmQgZG8gbm90IHN1cHBvcnQgYnVpbHQtaW4gZmFsbGJhY2sgdG8gbG93ZXIgcXVhbGl0eSByYW5kb20gbnVtYmVyXG4vLyBnZW5lcmF0b3JzIChsaWtlIE1hdGgucmFuZG9tKCkpLlxudmFyIGdldFJhbmRvbVZhbHVlcztcbnZhciBybmRzOCA9IG5ldyBVaW50OEFycmF5KDE2KTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJuZygpIHtcbiAgLy8gbGF6eSBsb2FkIHNvIHRoYXQgZW52aXJvbm1lbnRzIHRoYXQgbmVlZCB0byBwb2x5ZmlsbCBoYXZlIGEgY2hhbmNlIHRvIGRvIHNvXG4gIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgLy8gZ2V0UmFuZG9tVmFsdWVzIG5lZWRzIHRvIGJlIGludm9rZWQgaW4gYSBjb250ZXh0IHdoZXJlIFwidGhpc1wiIGlzIGEgQ3J5cHRvIGltcGxlbWVudGF0aW9uLiBBbHNvLFxuICAgIC8vIGZpbmQgdGhlIGNvbXBsZXRlIGltcGxlbWVudGF0aW9uIG9mIGNyeXB0byAobXNDcnlwdG8pIG9uIElFMTEuXG4gICAgZ2V0UmFuZG9tVmFsdWVzID0gdHlwZW9mIGNyeXB0byAhPT0gJ3VuZGVmaW5lZCcgJiYgY3J5cHRvLmdldFJhbmRvbVZhbHVlcyAmJiBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQoY3J5cHRvKSB8fCB0eXBlb2YgbXNDcnlwdG8gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc0NyeXB0by5nZXRSYW5kb21WYWx1ZXMgPT09ICdmdW5jdGlvbicgJiYgbXNDcnlwdG8uZ2V0UmFuZG9tVmFsdWVzLmJpbmQobXNDcnlwdG8pO1xuXG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignY3J5cHRvLmdldFJhbmRvbVZhbHVlcygpIG5vdCBzdXBwb3J0ZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdXVpZGpzL3V1aWQjZ2V0cmFuZG9tdmFsdWVzLW5vdC1zdXBwb3J0ZWQnKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn0iLCJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgb2YgMTYgYnl0ZSB2YWx1ZXMgdG8gVVVJRCBzdHJpbmcgZm9ybWF0IG9mIHRoZSBmb3JtOlxuICogWFhYWFhYWFgtWFhYWC1YWFhYLVhYWFgtWFhYWFhYWFhYWFhYXG4gKi9cblxudmFyIGJ5dGVUb0hleCA9IFtdO1xuXG5mb3IgKHZhciBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gIGJ5dGVUb0hleC5wdXNoKChpICsgMHgxMDApLnRvU3RyaW5nKDE2KS5zdWJzdHIoMSkpO1xufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnkoYXJyKSB7XG4gIHZhciBvZmZzZXQgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IDA7XG4gIC8vIE5vdGU6IEJlIGNhcmVmdWwgZWRpdGluZyB0aGlzIGNvZGUhICBJdCdzIGJlZW4gdHVuZWQgZm9yIHBlcmZvcm1hbmNlXG4gIC8vIGFuZCB3b3JrcyBpbiB3YXlzIHlvdSBtYXkgbm90IGV4cGVjdC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZC9wdWxsLzQzNFxuICB2YXIgdXVpZCA9IChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gKyAnLScgKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICsgJy0nICsgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gKyBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArICctJyArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTsgLy8gQ29uc2lzdGVuY3kgY2hlY2sgZm9yIHZhbGlkIFVVSUQuICBJZiB0aGlzIHRocm93cywgaXQncyBsaWtlbHkgZHVlIHRvIG9uZVxuICAvLyBvZiB0aGUgZm9sbG93aW5nOlxuICAvLyAtIE9uZSBvciBtb3JlIGlucHV0IGFycmF5IHZhbHVlcyBkb24ndCBtYXAgdG8gYSBoZXggb2N0ZXQgKGxlYWRpbmcgdG9cbiAgLy8gXCJ1bmRlZmluZWRcIiBpbiB0aGUgdXVpZClcbiAgLy8gLSBJbnZhbGlkIGlucHV0IHZhbHVlcyBmb3IgdGhlIFJGQyBgdmVyc2lvbmAgb3IgYHZhcmlhbnRgIGZpZWxkc1xuXG4gIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZ2lmaWVkIFVVSUQgaXMgaW52YWxpZCcpO1xuICB9XG5cbiAgcmV0dXJuIHV1aWQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0cmluZ2lmeTsiLCJpbXBvcnQgcm5nIGZyb20gJy4vcm5nLmpzJztcbmltcG9ydCBzdHJpbmdpZnkgZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuXG5mdW5jdGlvbiB2NChvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJuZHMgPSBvcHRpb25zLnJhbmRvbSB8fCAob3B0aW9ucy5ybmcgfHwgcm5nKSgpOyAvLyBQZXIgNC40LCBzZXQgYml0cyBmb3IgdmVyc2lvbiBhbmQgYGNsb2NrX3NlcV9oaV9hbmRfcmVzZXJ2ZWRgXG5cbiAgcm5kc1s2XSA9IHJuZHNbNl0gJiAweDBmIHwgMHg0MDtcbiAgcm5kc1s4XSA9IHJuZHNbOF0gJiAweDNmIHwgMHg4MDsgLy8gQ29weSBieXRlcyB0byBidWZmZXIsIGlmIHByb3ZpZGVkXG5cbiAgaWYgKGJ1Zikge1xuICAgIG9mZnNldCA9IG9mZnNldCB8fCAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgKytpKSB7XG4gICAgICBidWZbb2Zmc2V0ICsgaV0gPSBybmRzW2ldO1xuICAgIH1cblxuICAgIHJldHVybiBidWY7XG4gIH1cblxuICByZXR1cm4gc3RyaW5naWZ5KHJuZHMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2NDsiLCJpbXBvcnQgUkVHRVggZnJvbSAnLi9yZWdleC5qcyc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHV1aWQpIHtcbiAgcmV0dXJuIHR5cGVvZiB1dWlkID09PSAnc3RyaW5nJyAmJiBSRUdFWC50ZXN0KHV1aWQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB2YWxpZGF0ZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvaW5kZXguY3NzJ1xyXG5pbXBvcnQgeyBBcHAsIFByb2plY3QsIFRvZG8gfSBmcm9tICcuL2NsYXNzZXMnXHJcbmltcG9ydCB7IERFRkFVTFRfUFJPSkVDVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xyXG5cclxuY29uc3QgYnRuTWVudU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG5NZW51TmF2JylcclxuY29uc3Qgc2lkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLW5hdicpXHJcbmNvbnN0IG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcmxheScpXHJcblxyXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWJ0bicpXHJcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW1vZGFsJylcclxuY29uc3Qgc3VibWl0QnRuUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuLXByb2plY3QnKVxyXG5jb25zdCBjYW5jZWxCdG5Qcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4tcHJvamVjdCcpXHJcblxyXG5jb25zdCBhZGRCdG5Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1idG4tdG9kbycpXHJcbmNvbnN0IHRvZG9Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLW1vZGFsJylcclxuY29uc3Qgc3VibWl0QnRuVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWJtaXQtYnRuLXRvZG8nKVxyXG5jb25zdCBjYW5jZWxCdG5Ub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbmNlbC1idG4tdG9kbycpXHJcblxyXG5jb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWxpc3QnKVxyXG5cclxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1mb3JtJylcclxuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1mb3JtJylcclxuY29uc3QgcHJvamVjdFRpdGxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LXRpdGxlLW5hbWUnKVxyXG5jb25zdCBjb250YWluZXJUb2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXItdG9kby1saXN0JylcclxuXHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoREVGQVVMVF9QUk9KRUNUKVxyXG5cclxuY29uc3QgYXBwID0gbmV3IEFwcCgpXHJcblxyXG5hcHAuYWRkUHJvamVjdChkZWZhdWx0UHJvamVjdClcclxuYXBwLnNldERlZmF1bHRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxyXG5hcHAuc2V0U2VsZWN0ZWRQcm9qZWN0KGRlZmF1bHRQcm9qZWN0KVxyXG5wcm9qZWN0VGl0bGVOYW1lLmlubmVySFRNTCA9IGAke2FwcC5nZXRTZWxlY3RlZFByb2plY3QoKS5uYW1lfWBcclxucHJvamVjdExpc3QuaW5uZXJIVE1MICs9IGBcclxuICA8bGlcclxuICBjbGFzcz1cIlxyXG4gICAgdGV4dC1sZ1xyXG4gICAgcC0yXHJcbiAgICBwbC04XHJcbiAgXCJcclxuICBpZD1cInByb2plY3RJRCMke2RlZmF1bHRQcm9qZWN0LmlkfVwiXHJcbiAgPlxyXG4gIDxidXR0b25cclxuICBjbGFzcz1cInNlbGVjdC1wcm9qZWN0LWJ0biBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXHJcbj5cclxuICAke0RFRkFVTFRfUFJPSkVDVH08L2J1dHRvbj5cclxuICA8L2xpPlxyXG5gXHJcblxyXG5idG5NZW51TmF2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJy10cmFuc2xhdGUteC1mdWxsJylcclxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBzaWRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJy10cmFuc2xhdGUteC1mdWxsJylcclxuICBvdmVybGF5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBwcm9qZWN0TW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJylcclxufSlcclxuXHJcbmFkZEJ0blRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIHRvZG9Nb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKVxyXG59KVxyXG5cclxuY2FuY2VsQnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbn0pXHJcbmNhbmNlbEJ0blRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gIHRvZG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG59KVxyXG5cclxuc3VibWl0QnRuUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgcHJvamVjdE1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbn0pXHJcblxyXG5zdWJtaXRCdG5Ub2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICB0b2RvTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJylcclxufSlcclxuXHJcbnByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJ2J1dHRvbicpKSByZXR1cm5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3QtcHJvamVjdC1idG4nKSkge1xyXG4gICAgY29uc3QgbGlJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWRcclxuICAgIHNldEFwcFNlbGVjdGVkUHJvamVjdChsaUlkLnNwbGl0KCcjJylbMV0pXHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS1wcm9qZWN0LWJ0bicpKSB7XHJcbiAgICBjb25zdCBsaUlkID0gZS50YXJnZXQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgZGVsZWN0UHJvamVjdEZyb21BcHAobGlJZC5zcGxpdCgnIycpWzFdKVxyXG4gIH1cclxufSlcclxuXHJcbmNvbnRhaW5lclRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJ2J1dHRvbicpKSByZXR1cm5cclxuICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb25maXJtLXRvZG8tYnRuJykpIHtcclxuICAgIC8vXHJcbiAgICBjb25zdCBkaXZJZCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZFxyXG4gICAgY29uc3QgdG9kb0xpc3QgPSBhcHAuZ2V0U2VsZWN0ZWRQcm9qZWN0KCkuZ2V0VG9kb0xpc3QoKVxyXG4gICAgY29uc3QgdG9kbyA9IHRvZG9MaXN0LmZpbmQoKGVsKSA9PiBlbC5pZCA9PT0gZGl2SWQpXHJcbiAgICB0b2RvLnNldElzRG9uZSghdG9kby5nZXRJc0RvbmUoKSlcclxuICAgIHBvcHVsYXRlVG9kb0xpc3QoYXBwLmdldFNlbGVjdGVkUHJvamVjdCgpLmdldFRvZG9MaXN0KCkpXHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZS10b2RvLWJ0bicpKSB7XHJcbiAgICAvL1xyXG4gICAgY29uc3QgZGl2SWQgPSBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWRcclxuICAgIGFwcC5nZXRTZWxlY3RlZFByb2plY3QoKS5yZW1vdmVUb2RvZnJvbVByb2plY3QoZGl2SWQpXHJcbiAgICBwb3B1bGF0ZVRvZG9MaXN0KGFwcC5nZXRTZWxlY3RlZFByb2plY3QoKS5nZXRUb2RvTGlzdCgpKVxyXG4gIH1cclxufSlcclxuXHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFByb2plY3QpXHJcbnRvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFkZFRvZG8pXHJcblxyXG5mdW5jdGlvbiBzZXRBcHBTZWxlY3RlZFByb2plY3QocHJvamVjdElkKSB7XHJcbiAgY29uc3QgcHJvamVjdCA9IGFwcC5nZXRQcm9qZWN0QnlJZChwcm9qZWN0SWQpXHJcbiAgYXBwLnNldFNlbGVjdGVkUHJvamVjdChwcm9qZWN0KVxyXG5cclxuICBwcm9qZWN0VGl0bGVOYW1lLmlubmVySFRNTCA9IGAke2FwcC5nZXRTZWxlY3RlZFByb2plY3QoKS5uYW1lfWBcclxuICBwb3B1bGF0ZVRvZG9MaXN0KHByb2plY3QudG9kb0xpc3QpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGVjdFByb2plY3RGcm9tQXBwKHByb2plY3RJZCkge1xyXG4gIGNvbnN0IGNvbmZpcm0gPSB3aW5kb3cuY29uZmlybShcclxuICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD8nXHJcbiAgKVxyXG4gIGlmICghY29uZmlybSkgcmV0dXJuXHJcblxyXG4gIGFwcC5kZWxldGVQcm9qZWN0QnlJZChwcm9qZWN0SWQpXHJcblxyXG4gIGlmIChwcm9qZWN0SWQgPT09IGFwcC5nZXRTZWxlY3RlZFByb2plY3QoKS5pZCkge1xyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBhcHAuZ2V0RGVmYXVsdFByb2plY3QoKVxyXG4gICAgYXBwLnNldFNlbGVjdGVkUHJvamVjdChkZWZhdWx0UHJvamVjdClcclxuICAgIHByb2plY3RUaXRsZU5hbWUuaW5uZXJIVE1MID0gYCR7YXBwLmdldFNlbGVjdGVkUHJvamVjdCgpLm5hbWV9YFxyXG4gIH1cclxuXHJcbiAgcG9wdWxhdGVQcm9qZWN0TGlzdChhcHAucHJvamVjdHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKVxyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1uYW1lXScpLnZhbHVlXHJcbiAgaWYgKCFwcm9qZWN0TmFtZSkge1xyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdChwcm9qZWN0TmFtZSlcclxuICBhcHAuYWRkUHJvamVjdChwcm9qZWN0KVxyXG4gIHByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxyXG4gIHBvcHVsYXRlUHJvamVjdExpc3QoYXBwLnByb2plY3RzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZVByb2plY3RMaXN0KHByb2plY3RzID0gW10pIHtcclxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9IHByb2plY3RzXHJcbiAgICAubWFwKChwcm9qZWN0LCBpKSA9PiB7XHJcbiAgICAgIGlmIChwcm9qZWN0Lm5hbWUgPT09IERFRkFVTFRfUFJPSkVDVCkge1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgIDxsaVxyXG4gICAgICBpZD1cInByb2plY3RJRCMke3Byb2plY3QuaWR9XCJzXHJcbiAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgdGV4dC1sZ1xyXG4gICAgICAgIHAtMlxyXG4gICAgICAgIHBsLThcclxuICAgICAgXCJcclxuICAgID5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICBjbGFzcz1cInNlbGVjdC1wcm9qZWN0LWJ0biBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICA+XHJcbiAgICAgICR7cHJvamVjdC5uYW1lfVxyXG4gICAgPC9idXR0b24+XHJcbiAgICA8L2xpPlxyXG4gICAgICBgXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgPGxpIGNsYXNzPVwidGV4dC1sZyBwLTIgcGwtOCBmbGV4IGp1c3RpZnktYmV0d2VlblwiIGlkPVwicHJvamVjdElEIyR7cHJvamVjdC5pZH1cIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cInNlbGVjdC1wcm9qZWN0LWJ0biBob3ZlcjpjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LXdoaXRlIGhvdmVyOnVuZGVybGluZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgJHtwcm9qZWN0Lm5hbWV9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZS1wcm9qZWN0LWJ0blxyXG4gICAgICAgIGhvdmVyOmN1cnNvci1wb2ludGVyXHJcbiAgICAgICAgaG92ZXI6dGV4dC13aGl0ZVxyXG4gICAgICAgIGhvdmVyOmJnLWdyYXktNTBcclxuICAgICAgICBob3ZlcjpiZy1vcGFjaXR5LTEwXHJcbiAgICAgICAgcC0yXHJcbiAgICAgICAgcm91bmRlZC1mdWxsXCI+XHJcbiAgICAgICAg8J+XkVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2xpPlxyXG4gICAgYFxyXG4gICAgfSlcclxuICAgIC5qb2luKCcnKVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRUb2RvKGUpIHtcclxuICBlLnByZXZlbnREZWZhdWx0KClcclxuICBjb25zdCB0aXRsZSA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9dGl0bGVdJykudmFsdWVcclxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9ZGVzY3JpcHRpb25dJykudmFsdWVcclxuICBjb25zdCBkdWVEYXRlID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1kdWVEYXRlXScpLnZhbHVlXHJcbiAgY29uc3QgcHJpb3JpdHkgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXByaW9yaXR5XScpLnZhbHVlXHJcblxyXG4gIGlmICghdGl0bGUpIHtcclxuICAgIGRvY3VtZW50LmFsZXJ0KCdUaXRsZSBpcyByZXF1aXJlZCcpXHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKFxyXG4gICAgdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbixcclxuICAgIG5ldyBEYXRlKGR1ZURhdGUpIHx8IERhdGUubm93KCksXHJcbiAgICBwcmlvcml0eSxcclxuICAgIGZhbHNlXHJcbiAgKVxyXG4gIC8vIGdldCB0aGUgY3VycmVudCBzZWxlY3RlZCBwcm9qZWN0XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gYXBwLmdldFNlbGVjdGVkUHJvamVjdCgpXHJcblxyXG4gIHNlbGVjdGVkUHJvamVjdC5hZGRUb2RvVG9Qcm9qZWN0KHRvZG8pXHJcbiAgcG9wdWxhdGVUb2RvTGlzdChzZWxlY3RlZFByb2plY3QudG9kb0xpc3QpXHJcbiAgdG9kb01vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlVG9kb0xpc3QodG9kb3MgPSBbXSkge1xyXG4gIGNvbnRhaW5lclRvZG9MaXN0LmlubmVySFRNTCA9ICcnXHJcbiAgY29udGFpbmVyVG9kb0xpc3QuaW5uZXJIVE1MID0gdG9kb3MubWFwKCh0b2RvLCBpKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPCEtLSBUT0RPIENBUkQgLS0+XHJcbiAgICA8ZGl2XHJcbiAgICAgIGlkPVwiJHt0b2RvLmlkfVwiXHJcbiAgICAgIGNsYXNzPVwiXHJcbiAgICAgICAgdG9kb1xyXG4gICAgICAgICR7dG9kby5pc0RvbmUgPyAnYmctZ3JlZW4tMTAwJyA6ICcnfVxyXG4gICAgICAgIGJvcmRlci0yIGJvcmRlci1ncmF5LTQwMFxyXG4gICAgICAgIHAtMVxyXG4gICAgICAgIG1heC13LXNtXHJcbiAgICAgICAgcm91bmRlZC1tZFxyXG4gICAgICAgIGZsZXggZmxleC1jb2xcclxuICAgICAgICBteC1hdXRvXHJcbiAgICAgICAgc2hhZG93LW1kXHJcbiAgICAgIFwiXHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBzcGFjZS14LTUgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LW1lZGl1bSBwLTIgZmxleC0xICR7XHJcbiAgICAgICAgICB0b2RvLmlzRG9uZSA/ICdsaW5lLXRocm91Z2gnIDogJydcclxuICAgICAgICB9XCI+XHJcbiAgICAgICAgICAke3RvZG8udGl0bGV9XHJcbiAgICAgICAgPC9oMz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1lbmQgc3BhY2UteS0yIHAtMlwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWJhc2UgZm9udC1saWdodCB1cHBlcmNhc2UgJHtcclxuICAgICAgICAgICAgdG9kby5wcmlvcml0eSA9PT0gJ2xvdydcclxuICAgICAgICAgICAgICA/ICd0ZXh0LWJsdWUtNTAwJ1xyXG4gICAgICAgICAgICAgIDogdG9kby5wcmlvcml0eSA9PT0gJ21lZGl1bSdcclxuICAgICAgICAgICAgICA/ICd0ZXh0LXllbGxvdy01MDAnXHJcbiAgICAgICAgICAgICAgOiAndGV4dC1yZWQtNTAwJ1xyXG4gICAgICAgICAgfSAke3RvZG8uaXNEb25lID8gJ2xpbmUtdGhyb3VnaCcgOiAnJ31cIj4ke3RvZG8ucHJpb3JpdHl9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXhzIGZvbnQtZXh0cmFsaWdodCAke1xyXG4gICAgICAgICAgICB0b2RvLmlzRG9uZSA/ICdsaW5lLXRocm91Z2gnIDogJydcclxuICAgICAgICAgIH1cIj4ke3RvZG8uZHVlRGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicC0zIHRleHQtYmFzZSBmb250LWxpZ2h0XCI+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgJHt0b2RvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlbiBweC02IHB5LTFcIj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICBjb25maXJtLXRvZG8tYnRuXHJcbiAgICAgICAgICAgIGhvdmVyOmJnLWdyZWVuLTQwMCBob3ZlcjpiZy1vcGFjaXR5LTI1IGhvdmVyOnRleHQtZ3JlZW4tNzAwXHJcbiAgICAgICAgICAgIHAtMlxyXG4gICAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgdHJhbnNpdGlvblxyXG4gICAgICAgICAgICBkdXJhdGlvbi0xNTBcclxuICAgICAgICAgIFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIOKclFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBjbGFzcz1cIlxyXG4gICAgICAgICAgICAgIGRlbGV0ZS10b2RvLWJ0blxyXG4gICAgICAgICAgICAgIGhvdmVyOmJnLXJlZC00MDAgaG92ZXI6Ymctb3BhY2l0eS0yNSBob3Zlcjp0ZXh0LXJlZC03MDBcclxuICAgICAgICAgICAgICBwLTJcclxuICAgICAgICAgICAgICByb3VuZGVkLWZ1bGxcclxuICAgICAgICAgICAgICB0cmFuc2l0aW9uXHJcbiAgICAgICAgICAgICAgZHVyYXRpb24tMTUwXHJcbiAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICDwn5eRXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIEVuZCBPRiBUT0RPIENBUkQgLS0+XHJcbiAgICBgXHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOlsiQXBwIiwicHJvamVjdHMiLCJkZWZhdWx0UHJvamVjdCIsInNlbGVjdGVkUHJvamVjdCIsInByb2plY3QiLCJwdXNoIiwicHJvamVjdElkIiwiZmluZCIsInAiLCJpZCIsImZpbHRlciIsInY0IiwidXVpZFY0IiwiUHJvamVjdCIsIm5hbWUiLCJ0b2RvTGlzdCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJ0b2RvSWQiLCJ0IiwidG9kbyIsIlBSSU9SSVRZIiwiVG9kbyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJpc0RvbmUiLCJub3RlcyIsImNoZWNrbGlzdCIsInZhbCIsImRhdGUiLCJub3RlIiwiY2hlY2siLCJkZWZhdWx0IiwiREVGQVVMVF9QUk9KRUNUIiwiYnRuTWVudU5hdiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNpZGVOYXYiLCJvdmVybGF5IiwiYWRkUHJvamVjdEJ0biIsInByb2plY3RNb2RhbCIsInN1Ym1pdEJ0blByb2plY3QiLCJjYW5jZWxCdG5Qcm9qZWN0IiwiYWRkQnRuVG9kbyIsInRvZG9Nb2RhbCIsInN1Ym1pdEJ0blRvZG8iLCJjYW5jZWxCdG5Ub2RvIiwicHJvamVjdExpc3QiLCJwcm9qZWN0Rm9ybSIsInRvZG9Gb3JtIiwicHJvamVjdFRpdGxlTmFtZSIsImNvbnRhaW5lclRvZG9MaXN0IiwiYXBwIiwiYWRkUHJvamVjdCIsInNldERlZmF1bHRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwiaW5uZXJIVE1MIiwiZ2V0U2VsZWN0ZWRQcm9qZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGQiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY29udGFpbnMiLCJsaUlkIiwicGFyZW50RWxlbWVudCIsInNldEFwcFNlbGVjdGVkUHJvamVjdCIsInNwbGl0IiwiZGVsZWN0UHJvamVjdEZyb21BcHAiLCJkaXZJZCIsImdldFRvZG9MaXN0IiwiZWwiLCJzZXRJc0RvbmUiLCJnZXRJc0RvbmUiLCJwb3B1bGF0ZVRvZG9MaXN0IiwicmVtb3ZlVG9kb2Zyb21Qcm9qZWN0IiwiYWRkVG9kbyIsImdldFByb2plY3RCeUlkIiwiY29uZmlybSIsIndpbmRvdyIsImRlbGV0ZVByb2plY3RCeUlkIiwiZ2V0RGVmYXVsdFByb2plY3QiLCJwb3B1bGF0ZVByb2plY3RMaXN0IiwicHJldmVudERlZmF1bHQiLCJwcm9qZWN0TmFtZSIsInZhbHVlIiwibWFwIiwiaSIsImpvaW4iLCJhbGVydCIsImFkZFRvZG9Ub1Byb2plY3QiLCJ0b2RvcyIsInRvTG9jYWxlRGF0ZVN0cmluZyJdLCJzb3VyY2VSb290IjoiIn0=