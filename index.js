!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["sme-vdom"]=t():e["sme-vdom"]=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=1)}([function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n={NODE_DELETE:"NODE_DELETE",NODE_TEXT_MODIFY:"NODE_TEXT_MODIFY",NODE_REPLACE:"NODE_REPLACE",NODE_ADD:"NODE_ADD",NODE_ATTRIBUTE_MODIFY:"NODE_ATTRIBUTE_MODIFY",NODE_ATTRIBUTE_ADD:"NODE_ATTRIBUTE_ADD",NODE_ATTRIBUTE_DELETE:"NODE_ATTRIBUTE_DELETE"}},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=r(2),i=r(4),o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(){function e(t){n(this,e),this.element=new c(t)}return o(e,[{key:"render",value:function(){if(this.element)return this.element.render();throw new Error("unable to parse empty vdom")}},{key:"update",value:function(e,t){var r=Object(a.a)(this.element,new c(t));Object(i.a)(e,r)}}]),e}();t.default=u;var c=function(){function e(t){n(this,e),this.props={},this.tagName="div";for(var r in t)switch(r){case"tag":this.tagName=t[r];break;case"children":this.children=t[r];break;case"text":this.text=t[r];break;default:this.props[r]=t[r]}this.children&&(this.children=this.children.map(function(t){return new e(t)})),this.key=this.props.key||void 0}return o(e,[{key:"render",value:function(){var e=document.createElement(this.tagName);this.text&&(e.textContent=this.text);for(var t in this.props)e.setAttribute("className"===t?"class":t,this.props[t]);return this.children&&this.children.forEach(function(t){e.appendChild(t.render())}),e}}]),e}()},function(e,t,r){"use strict";function n(e,t){var r={value:0},n={};return a(e,t,r,n),n}function a(e,t,r,n){var a=r.value,s=[];"String"===Object(u.a)(e&&e.text)&&"String"===Object(u.a)(t&&t.text)&&e.text!==t.text&&s.push({type:c.a.NODE_TEXT_MODIFY,value:t.text}),void 0===t?s.push({type:c.a.NODE_DELETE}):e.tagName===t.tagName&&e.key===t.key?(i(e.props,t.props,r,s),o(e.children,t.children,r,s,n)):s.push({type:c.a.NODE_REPLACE,value:t}),s.length>0&&(n[a]=s)}function i(e,t,r,n){for(var a in e)t.hasOwnProperty(a)?t[a]!==e[a]&&n.push({type:c.a.NODE_ATTRIBUTE_MODIFY,key:a,value:t[a]}):n.push({type:c.a.NODE_ATTRIBUTE_DELETE,key:a});for(var i in t)e.hasOwnProperty(i)||n.push({type:c.a.NODE_ATTRIBUTE_ADD,key:i,value:t[i]})}function o(e,t,r,n,i){var o=e?e.length:0,u=t?t.length:0;if(o<u){for(var s=0;s<o;s++)r.value++,a(e[s],t[s],r,i);for(;s<u;s++)n.push({type:c.a.NODE_ADD,value:t[s]})}else for(var l=0;l<o;l++)r.value++,a(e[l],t[l],r,i)}var u=r(3),c=r(0);t.a=n},function(e,t,r){"use strict";r.d(t,"a",function(){return n});var n=function(e){return Object.prototype.toString.call(e).slice(8,-1)}},function(e,t,r){"use strict";function n(e,t){var r={value:0};a(e,r,t)}function a(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(r[t.value]&&r[t.value].forEach(function(t){switch(t.key&&(t.key="className"===t.key?"class":t.key),t.type){case i.a.NODE_ATTRIBUTE_MODIFY:e.setAttribute(t.key,t.value);break;case i.a.NODE_ATTRIBUTE_DELETE:e.removeAttribute(t.key.toLowerCase());break;case i.a.NODE_ATTRIBUTE_ADD:e.setAttribute(t.key,t.value);break;case i.a.NODE_ADD:e.appendChild(t.value.render());break;case i.a.NODE_TEXT_MODIFY:e.textContent=t.value;break;case i.a.NODE_REPLACE:e.replaceWith(t.value.render());break;case i.a.NODE_DELETE:e.remove();break;default:console.error(t)}}),!n)if(e.children.length>0){for(var o=[],u=0;u<e.children.length;u++)o.push(e.children[u]);for(var c=0;c<o.length;c++)t.value++,a(o[c],t,r)}else a(e,t,r,!0)}var i=r(0);r(5);t.a=n},function(e,t,r){"use strict";r(0)}])});