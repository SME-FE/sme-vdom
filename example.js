/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/sme-vdom/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return diffType; });

var diffType = {
  NODE_DELETE: 'NODE_DELETE',
  NODE_TEXT_MODIFY: 'NODE_TEXT_MODIFY',
  NODE_REPLACE: 'NODE_REPLACE',
  NODE_ADD: 'NODE_ADD',
  NODE_ATTRIBUTE_MODIFY: 'NODE_ATTRIBUTE_MODIFY',
  NODE_ATTRIBUTE_ADD: 'NODE_ATTRIBUTE_ADD',
  NODE_ATTRIBUTE_DELETE: 'NODE_ATTRIBUTE_DELETE'
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__main_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_log_info__ = __webpack_require__(8);




Object(__WEBPACK_IMPORTED_MODULE_2__utils_log_info__["a" /* default */])();

var oldDom = {
  tag: 'div', // 0
  children: [{
    tag: 'h1', // 1
    className: 'header',
    style: 'color: #f36b6b; padding-left: 16px;',
    text: 'Hi there ~'
  }, {
    tag: 'section', // 2
    className: 'content',
    style: 'color: #606c76; padding-left: 16px;',
    text: 'Hallo, vdom content ~~',
    children: [{
      tag: 'p', // 3
      className: 'p1',
      text: 'too young'
    }, {
      tag: 'p', // 4
      className: 'p2',
      text: 'too simple'
    }, {
      tag: 'p', // 5
      className: 'p3',
      style: 'color: #f36b6b;',
      text: '+1s +1s +1s'
    }, {
      tag: 'p', // 6
      className: 'p4',
      text: 'some time nativeeee'
    }]
  }, {
    tag: 'footer', // 7
    text: '@power by hwen <hwenleung@gmail.com>'
  }]
};

var newDom = {
  tag: 'div',
  children: [{
    tag: 'h1',
    className: 'header',
    style: 'color: #7d7df1; padding-left: 16px;',
    text: 'Hii ~'
  }, {
    tag: 'section',
    className: 'content',
    style: 'color: #606c76; padding-left: 16px; font-weight: bold;',
    text: 'Hallo, vdom content ~~',
    children: [{
      tag: 'p',
      className: 'p1',
      text: 'too young'
    }, {
      tag: 'p',
      className: 'p2',
      text: 'some time nativeeee'
    }]
  }, {
    tag: 'footer',
    style: 'margin: 20px 16px;',
    text: '@power by hwen <hwenleung@gmail.com>'
  }, {
    // tag 可缺省，默认为 div 标签
    style: 'color: #606c76;  padding-left: 16px;',
    text: '== (○´･д･)ﾉ 暴力膜不可取 =='
  }]
};

var tree = new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */](oldDom);
var $dom = tree.render();
var $app = document.querySelector('#app');
$app.replaceWith($dom);

tree.update($dom, newDom);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__diff__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patch__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var VirtualDom = function () {
  function VirtualDom(vdom) {
    _classCallCheck(this, VirtualDom);

    this.element = new Element(vdom);
  }

  _createClass(VirtualDom, [{
    key: 'render',
    value: function render() {
      if (this.element) {
        return this.element.render();
      }

      throw new Error('unable to parse empty vdom');
    }
  }, {
    key: 'update',
    value: function update($dom, newVirtualDom) {
      var patches = Object(__WEBPACK_IMPORTED_MODULE_0__diff__["a" /* default */])(this.element, new Element(newVirtualDom));
      if (true) {
        console.log(patches);
      }
      Object(__WEBPACK_IMPORTED_MODULE_1__patch__["a" /* default */])($dom, patches);
    }
  }]);

  return VirtualDom;
}();

/* harmony default export */ __webpack_exports__["a"] = (VirtualDom);

var Element = function () {
  function Element(velement) {
    _classCallCheck(this, Element);

    this.props = {};
    this.tagName = 'div'; // default is div

    for (var vkey in velement) {
      switch (vkey) {
        case 'tag':
          this.tagName = velement[vkey];
          break;
        case 'children':
          this.children = velement[vkey];
          break;
        case 'text':
          this.text = velement[vkey];
          break;
        default:
          this.props[vkey] = velement[vkey];
      }
    }

    if (this.children) {
      this.children = this.children.map(function (child) {
        return new Element(child);
      });
    }
    this.key = this.props.key || void 0;
  }

  _createClass(Element, [{
    key: 'render',
    value: function render() {
      var $dom = document.createElement(this.tagName);
      if (this.text) $dom.textContent = this.text; // or $dom.innerText = xxx
      for (var propKey in this.props) {
        $dom.setAttribute(propKey === 'className' ? 'class' : propKey, this.props[propKey]);
      }
      if (this.children) {
        this.children.forEach(function (child) {
          $dom.appendChild(child.render());
        });
      }

      return $dom;
    }
  }]);

  return Element;
}();

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constant__ = __webpack_require__(0);




/* harmony default export */ __webpack_exports__["a"] = (diff);

function diff(oldTree, newTree) {
  var index = { value: 0 };
  var patches = {};
  dfsWalk(oldTree, newTree, index, patches);
  return patches;
}

function dfsWalk(oldNode, newNode, index, patches) {
  var currentIdx = index.value;
  var currentIndexPatch = [];
  if (Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getType */])(oldNode && oldNode.text) === 'String' && Object(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getType */])(newNode && newNode.text) === 'String') {
    if (oldNode.text !== newNode.text) {
      currentIndexPatch.push({
        type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_TEXT_MODIFY,
        value: newNode.text
      });
    }
  }
  if (newNode === undefined) {
    currentIndexPatch.push({
      type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_DELETE
    });
  } else if (oldNode.tagName === newNode.tagName && oldNode.key === newNode.key) {
    diffProps(oldNode.props, newNode.props, index, currentIndexPatch);
    diffChildren(oldNode.children, newNode.children, index, currentIndexPatch, patches);
  } else {
    currentIndexPatch.push({
      type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_REPLACE,
      value: newNode
    });
  }

  if (currentIndexPatch.length > 0) {
    patches[currentIdx] = currentIndexPatch;
  }
}

function diffProps(oldProps, newProps, index, currentIndexPatch) {
  for (var propKey in oldProps) {
    if (!newProps.hasOwnProperty(propKey)) {
      currentIndexPatch.push({
        type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_DELETE,
        key: propKey
      });
    } else if (newProps[propKey] !== oldProps[propKey]) {
      currentIndexPatch.push({
        type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_MODIFY,
        key: propKey,
        value: newProps[propKey]
      });
    }
  }

  for (var _propKey in newProps) {
    if (!oldProps.hasOwnProperty(_propKey)) {
      currentIndexPatch.push({
        type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_ADD,
        key: _propKey,
        value: newProps[_propKey]
      });
    }
  }
}

function diffChildren(oldChildren, newChildren, index, currentIndexPatch, patches) {
  var oLen = oldChildren ? oldChildren.length : 0;
  var nLen = newChildren ? newChildren.length : 0;
  if (oLen < nLen) {
    var i = 0;
    for (; i < oLen; i++) {
      index.value++;
      dfsWalk(oldChildren[i], newChildren[i], index, patches);
    }
    for (; i < nLen; i++) {
      currentIndexPatch.push({
        type: __WEBPACK_IMPORTED_MODULE_1__utils_constant__["a" /* diffType */].NODE_ADD,
        value: newChildren[i]
      });
    }
  } else {
    for (var _i = 0; _i < oLen; _i++) {
      index.value++;
      dfsWalk(oldChildren[_i], newChildren[_i], index, patches);
    }
  }
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getType; });
var getType = function getType(v) {
  return Object.prototype.toString.call(v).slice(8, -1);
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_constant__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_walk_with_debug__ = __webpack_require__(7);



/* harmony default export */ __webpack_exports__["a"] = (patch);

function patch($dom, patches) {
  var index = { value: 0 };
  if (true) {
    Object(__WEBPACK_IMPORTED_MODULE_1__utils_walk_with_debug__["a" /* default */])($dom, index, patches);
  } else {
    dfsWalk($dom, index, patches);
  }
}

function dfsWalk($node, index, patches) {
  var isEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (patches[index.value]) {
    patches[index.value].forEach(function (p) {
      if (p.key) {
        p.key = p.key === 'className' ? 'class' : p.key;
      }
      switch (p.type) {
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_MODIFY:
          {
            $node.setAttribute(p.key, p.value);
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_DELETE:
          {
            $node.removeAttribute(p.key.toLowerCase());
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_ATTRIBUTE_ADD:
          {
            $node.setAttribute(p.key, p.value);
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_ADD:
          {
            $node.appendChild(p.value.render());
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_TEXT_MODIFY:
          {
            $node.textContent = p.value;
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_REPLACE:
          {
            $node.replaceWith(p.value.render());
            break;
          }
        case __WEBPACK_IMPORTED_MODULE_0__utils_constant__["a" /* diffType */].NODE_DELETE:
          {
            $node.remove();
            break;
          }
        default:
          {
            console.error(p);
          }
      }
    });
  }

  if (isEnd) return;
  if ($node.children.length > 0) {
    // in case $node children will add or delete that the length will be changed
    var cacheChildren = [];
    for (var i = 0; i < $node.children.length; i++) {
      cacheChildren.push($node.children[i]);
    }
    for (var _i = 0; _i < cacheChildren.length; _i++) {
      index.value++;
      dfsWalk(cacheChildren[_i], index, patches);
    }
  } else {
    dfsWalk($node, index, patches, true);
  }
}

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = dfsWalkDebugger;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(0);


/**
 * 因为是测试用的，所以就全部写在一个文件了。。。。。
 * just for debug 🤔
 * debugger example utils
 */
var logSome = function logSome(info) {
  console.log('%c' + info, 'color: #8b80f9;font-weight:bold;');
};

var shakingMeee = [' Sadly I will be removed by tree shaking...', ' TAT', ' QAQ', ' TUT', ' QvQ'];

if (true) {
  /**
   * 写到 shakingMeeeeee
   * 不知为什么想到红警2谭雅的配音，笑哭😂
   */
  logSome(shakingMeee.join(', '));
}

var typeDescription = {
  NODE_DELETE: '删除节点',
  NODE_TEXT_MODIFY: '更新节点内容',
  NODE_REPLACE: '替换节点',
  NODE_ADD: '添加节点',
  NODE_ATTRIBUTE_MODIFY: '更新节点属性',
  NODE_ATTRIBUTE_ADD: '新增节点属性',
  NODE_ATTRIBUTE_DELETE: '删除节点属性'
};
var updateWalkInfo = function updateWalkInfo($node, type) {
  var info = '=>  ' + $node.nodeName + '.' + $node.className + ' do ' + typeDescription[type];
  logSome(info);
  if (!window._walkInfo) window._walkInfo = '=>  <(￣︶￣)↗[GO!] \n => see [console] for more detail';
  window._walkInfo += '\n' + info;
};

/**
 * debug wrapper
 */
var walkedList = [];
function dfsWalkDebugger($node, index, patches) {
  var isEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  dfsWalk($node, index, patches, isEnd);
  var i = 0;
  console.log(walkedList);
  var walkLater = setInterval(function () {
    if (i === walkedList.length) {
      clearInterval(walkLater);
      return;
    }
    var item = walkedList[i];
    operator(item.node, item.patch);
    i++;
  }, 1500);

  function operator($node, p) {
    updateWalkInfo($node, p.type);
    switch (p.type) {
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_ATTRIBUTE_MODIFY:
        {
          $node.setAttribute(p.key, p.value);
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_ATTRIBUTE_DELETE:
        {
          $node.removeAttribute(p.key.toLowerCase());
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_ATTRIBUTE_ADD:
        {
          $node.setAttribute(p.key, p.value);
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_ADD:
        {
          $node.appendChild(p.value.render());
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_TEXT_MODIFY:
        {
          $node.textContent = p.value;
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_REPLACE:
        {
          $node.replaceWith(p.value.render());
          break;
        }
      case __WEBPACK_IMPORTED_MODULE_0__constant__["a" /* diffType */].NODE_DELETE:
        {
          $node.remove();
          break;
        }
      default:
        {
          console.error(p);
        }
    }
  }
}

function dfsWalk($node, index, patches) {
  var isEnd = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (patches[index.value]) {
    patches[index.value].forEach(function (p) {
      if (p.key) {
        p.key = p.key === 'className' ? 'class' : p.key;
      }
      if (!isEnd) {
        walkedList.push({
          node: $node,
          patch: p
        });
      }
      // switch (p.type) {
      //   case diffType.NODE_ATTRIBUTE_MODIFY: {
      //     $node.setAttribute(p.key, p.value)
      //     break
      //   }
      //   case diffType.NODE_ATTRIBUTE_DELETE: {
      //     $node.removeAttribute(p.key.toLowerCase())
      //     break
      //   }
      //   case diffType.NODE_ATTRIBUTE_ADD: {
      //     $node.setAttribute(p.key, p.value)
      //     break
      //   }
      //   case diffType.NODE_ADD: {
      //     $node.appendChild(p.value.render())
      //     break
      //   }
      //   case diffType.NODE_TEXT_MODIFY: {
      //     $node.textContent = p.value
      //     break
      //   }
      //   case diffType.NODE_REPLACE: {
      //     $node.replaceWith(p.value.render())
      //     break
      //   }
      //   case diffType.NODE_DELETE: {
      //     $node.remove()
      //     break
      //   }
      //   default: {
      //     console.error(p)
      //   }
      // }
    });
  }

  if (isEnd) return;
  if ($node.children.length > 0) {
    // in case $node children will add or delete that the length will be changed
    var cacheChildren = [];
    for (var i = 0; i < $node.children.length; i++) {
      cacheChildren.push($node.children[i]);
    }
    for (var _i = 0; _i < cacheChildren.length; _i++) {
      index.value++;
      dfsWalk(cacheChildren[_i], index, patches);
    }
  } else {
    dfsWalk($node, index, patches, true);
  }
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = updateWalkInfo;

function updateWalkInfo() {
  var $infoBox = document.querySelector('.info-box');
  setInterval(function () {
    var infoList = window._walkInfo && window._walkInfo.split('\n');
    $infoBox.innerHTML = '';
    infoList && infoList.forEach(function (content) {
      $infoBox.innerHTML += '<p>' + content + '</p>';
    });
  }, 500);
}

/***/ })
/******/ ]);