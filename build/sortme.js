!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.sortme=t():e.sortme=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.defineProperty(t,"MergeSort",{enumerable:!0,get:function(){return n.MergeSort}})},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.MergeSort=void 0;var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),f=r(2);t.MergeSort=function(e){function t(e){return n(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),u(t,[{key:"_merge",value:function(e,t,r){for(var n=[],o=[],i=this.data,u=e;u<=t;u++){var f=i[u];n.push(f)}for(var u=t+1;u<=r;u++){var f=i[u];o.push(f)}for(var a=e,c=0,l=0;c<n.length&&l<o.length;)n[c]<=o[l]?(i[a]=n[c],c++):(i[a]=o[l],l++),a++;for(;c<n.length;)i[a]=n[c],c++,a++;for(;l>o.length;)i[a]=o[l],l++,a++}},{key:"_mergeSort",value:function(e,t){if(t>e){var r=Math.floor((e+t)/2);this._mergeSort(e,r),this._mergeSort(r+1,t),this._merge(e,r,t)}}},{key:"sort",value:function(){this._mergeSort(0,this.data.length-1)}},{key:"printArr",value:function(){console.log(this.data)}}]),t}(f.Sort)},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();t.Sort=function(){function e(t){r(this,e),this.data=t}return n(e,[{key:"sort",value:function(){}},{key:"isSorted",value:function(){}},{key:"find",value:function(){}}]),e}()}])});