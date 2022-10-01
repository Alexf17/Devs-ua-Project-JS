!function(){function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},a=r.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){i[e]=t},r.parcelRequired7c6=a),a.register("iE7OH",(function(t,r){var n,i;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},i=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("ke5Oc",(function(e,t){"use strict";var r=a("c4C4W"),n=a("lGmLA"),i=a("9jbh3"),o=a("knWMA");var s=function e(t){var a=new i(t),s=n(i.prototype.request,a);return r.extend(s,i.prototype,a),r.extend(s,a),s.create=function(r){return e(o(t,r))},s}(a("c74ni"));s.Axios=i,s.CanceledError=a("dW1zJ"),s.CancelToken=a("77MZz"),s.isCancel=a("lXDKh"),s.VERSION=a("kLR29").version,s.toFormData=a("12Kat"),s.AxiosError=a("5TB86"),s.Cancel=s.CanceledError,s.all=function(e){return Promise.all(e)},s.spread=a("9BdDr"),s.isAxiosError=a("kv87N"),e.exports=s,e.exports.default=s})),a.register("c4C4W",(function(e,t){"use strict";var r,n=a("lGmLA"),i=Object.prototype.toString,o=(r=Object.create(null),function(e){var t=i.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())});function s(e){return e=e.toLowerCase(),function(t){return o(t)===e}}function u(e){return Array.isArray(e)}function c(e){return void 0===e}var l=s("ArrayBuffer");function f(e){return null!==e&&"object"==typeof e}function h(e){if("object"!==o(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var d=s("Date"),p=s("File"),v=s("Blob"),m=s("FileList");function g(e){return"[object Function]"===i.call(e)}var y=s("URLSearchParams");function b(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),u(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.call(null,e[i],i,e)}var k,w=(k="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return k&&e instanceof k});e.exports={isArray:u,isArrayBuffer:l,isBuffer:function(e){return null!==e&&!c(e)&&null!==e.constructor&&!c(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||i.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&l(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:f,isPlainObject:h,isUndefined:c,isDate:d,isFile:p,isBlob:v,isFunction:g,isStream:function(e){return f(e)&&g(e.pipe)},isURLSearchParams:y,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:b,merge:function e(){var t={};function r(r,n){h(t[n])&&h(r)?t[n]=e(t[n],r):h(r)?t[n]=e({},r):u(r)?t[n]=r.slice():t[n]=r}for(var n=0,i=arguments.length;n<i;n++)b(arguments[n],r);return t},extend:function(e,t,r){return b(t,(function(t,i){e[i]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,r,n){e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,r&&Object.assign(e.prototype,r)},toFlatObject:function(e,t,r){var n,i,a,o={};t=t||{};do{for(i=(n=Object.getOwnPropertyNames(e)).length;i-- >0;)o[a=n[i]]||(t[a]=e[a],o[a]=!0);e=Object.getPrototypeOf(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:o,kindOfTest:s,endsWith:function(e,t,r){e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;var n=e.indexOf(t,r);return-1!==n&&n===r},toArray:function(e){if(!e)return null;var t=e.length;if(c(t))return null;for(var r=new Array(t);t-- >0;)r[t]=e[t];return r},isTypedArray:w,isFileList:m}})),a.register("lGmLA",(function(e,t){"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}})),a.register("9jbh3",(function(e,t){"use strict";var r=a("c4C4W"),n=a("6d5Pb"),i=a("JRZh2"),o=a("k04r0"),s=a("knWMA"),u=a("gYMA1"),c=a("9SeBc"),l=c.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=s(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var r=t.transitional;void 0!==r&&c.assertOptions(r,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(i=i&&e.synchronous,n.unshift(e.fulfilled,e.rejected))}));var a,u=[];if(this.interceptors.response.forEach((function(e){u.push(e.fulfilled,e.rejected)})),!i){var f=[o,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(u),a=Promise.resolve(t);f.length;)a=a.then(f.shift(),f.shift());return a}for(var h=t;n.length;){var d=n.shift(),p=n.shift();try{h=d(h)}catch(e){p(e);break}}try{a=o(h)}catch(e){return Promise.reject(e)}for(;u.length;)a=a.then(u.shift(),u.shift());return a},f.prototype.getUri=function(e){e=s(this.defaults,e);var t=u(e.baseURL,e.url);return n(t,e.params,e.paramsSerializer)},r.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(s(r||{},{method:e,url:t,data:(r||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){function t(t){return function(r,n,i){return this.request(s(i||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:r,data:n}))}}f.prototype[e]=t(),f.prototype[e+"Form"]=t(!0)})),e.exports=f})),a.register("6d5Pb",(function(e,t){"use strict";var r=a("c4C4W");function n(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,i){if(!t)return e;var a;if(i)a=i(t);else if(r.isURLSearchParams(t))a=t.toString();else{var o=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),o.push(n(t)+"="+n(e))})))})),a=o.join("&")}if(a){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+a}return e}})),a.register("JRZh2",(function(e,t){"use strict";var r=a("c4C4W");function n(){this.handlers=[]}n.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},n.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},n.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=n})),a.register("k04r0",(function(e,t){"use strict";var r=a("c4C4W"),n=a("jrAxF"),i=a("lXDKh"),o=a("c74ni"),s=a("dW1zJ");function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new s}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=n.call(e,e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||o.adapter)(e).then((function(t){return u(e),t.data=n.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=n.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}})),a.register("jrAxF",(function(e,t){"use strict";var r=a("c4C4W"),n=a("c74ni");e.exports=function(e,t,i){var a=this||n;return r.forEach(i,(function(r){e=r.call(a,e,t)})),e}})),a.register("c74ni",(function(e,t){"use strict";var r=a("6qd2L"),n=a("c4C4W"),i=a("h8JMh"),o=a("5TB86"),s=a("gWbUy"),u=a("12Kat"),c={"Content-Type":"application/x-www-form-urlencoded"};function l(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var f,h={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==r&&"[object process]"===Object.prototype.toString.call(r))&&(f=a("btSY7")),f),transformRequest:[function(e,t){if(i(t,"Accept"),i(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e))return e;if(n.isArrayBufferView(e))return e.buffer;if(n.isURLSearchParams(e))return l(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var r,a=n.isObject(e),o=t&&t["Content-Type"];if((r=n.isFileList(e))||a&&"multipart/form-data"===o){var s=this.env&&this.env.FormData;return u(r?{"files[]":e}:e,s&&new s)}return a||"application/json"===o?(l(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(t||JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(r||JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||h.transitional,r=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,a=!r&&"json"===this.responseType;if(a||i&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(a){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:a("beknR")},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){h.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){h.headers[e]=n.merge(c)})),e.exports=h})),a.register("6qd2L",(function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var e=s(h);l=!0;for(var t=c.length;t;){for(u=c,c=[];++f<t;)u&&u[f].run();f=-1,t=c.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function v(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new p(e,t)),1!==c.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),a.register("h8JMh",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e,t){r.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}})),a.register("5TB86",(function(e,t){"use strict";var r=a("c4C4W");function n(e,t,r,n,i){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),i&&(this.response=i)}r.inherits(n,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=n.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){o[e]={value:e}})),Object.defineProperties(n,o),Object.defineProperty(i,"isAxiosError",{value:!0}),n.from=function(e,t,a,o,s,u){var c=Object.create(i);return r.toFlatObject(e,c,(function(e){return e!==Error.prototype})),n.call(c,e.message,t,a,o,s),c.name=e.name,u&&Object.assign(c,u),c},e.exports=n})),a.register("gWbUy",(function(e,t){"use strict";e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),a.register("12Kat",(function(e,t){"use strict";var r=a("3aNd6").Buffer,n=a("c4C4W");e.exports=function(e,t){t=t||new FormData;var i=[];function a(e){return null===e?"":n.isDate(e)?e.toISOString():n.isArrayBuffer(e)||n.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):r.from(e):e}return function e(r,o){if(n.isPlainObject(r)||n.isArray(r)){if(-1!==i.indexOf(r))throw Error("Circular reference detected in "+o);i.push(r),n.forEach(r,(function(r,i){if(!n.isUndefined(r)){var s,u=o?o+"."+i:i;if(r&&!o&&"object"==typeof r)if(n.endsWith(i,"{}"))r=JSON.stringify(r);else if(n.endsWith(i,"[]")&&(s=n.toArray(r)))return void s.forEach((function(e){!n.isUndefined(e)&&t.append(u,a(e))}));e(r,u)}})),i.pop()}else t.append(o,a(r))}(e),t}})),a.register("3aNd6",(function(r,n){e(r.exports,"Buffer",(function(){return i}),(function(e){return i=e})),e(r.exports,"INSPECT_MAX_BYTES",(function(){return o}),(function(e){return o=e}));var i,o,s=a("ds8z5"),u=a("8MBJY"),c=a("a2hTj"),l=a("eYQtU"),f=a("l5bVx"),h=a("2MbLg"),d=a("5d11t"),p=a("7rddL"),v="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;i=y,o=50;var m=2147483647;function g(e){if(e>m)throw new RangeError('The value "'+e+'" is invalid for option "size"');var t=new Uint8Array(e);return Object.setPrototypeOf(t,y.prototype),t}function y(e,t,r){if("number"==typeof e){if("string"==typeof t)throw new TypeError('The "string" argument must be of type string. Received type number');return w(e)}return b(e,t,r)}function b(e,r,n){if("string"==typeof e)return function(e,t){"string"==typeof t&&""!==t||(t="utf8");if(!y.isEncoding(t))throw new TypeError("Unknown encoding: "+t);var r=0|I(e,t),n=g(r),i=n.write(e,t);i!==r&&(n=n.slice(0,i));return n}(e,r);if(ArrayBuffer.isView(e))return function(e){if(ae(e,Uint8Array)){var t=new Uint8Array(e);return x(t.buffer,t.byteOffset,t.byteLength)}return _(e)}(e);if(null==e)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)));if(ae(e,ArrayBuffer)||e&&ae(e.buffer,ArrayBuffer))return x(e,r,n);if("undefined"!=typeof SharedArrayBuffer&&(ae(e,SharedArrayBuffer)||e&&ae(e.buffer,SharedArrayBuffer)))return x(e,r,n);if("number"==typeof e)throw new TypeError('The "value" argument must not be of type number. Received type number');var i=e.valueOf&&e.valueOf();if(null!=i&&i!==e)return y.from(i,r,n);var a=function(e){if(y.isBuffer(e)){var t=0|E(e.length),r=g(t);return 0===r.length||e.copy(r,0,0,t),r}if(void 0!==e.length)return"number"!=typeof e.length||oe(e.length)?g(0):_(e);if("Buffer"===e.type&&Array.isArray(e.data))return _(e.data)}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return y.from(e[Symbol.toPrimitive]("string"),r,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+(void 0===e?"undefined":t(f)(e)))}function k(e){if("number"!=typeof e)throw new TypeError('"size" argument must be of type number');if(e<0)throw new RangeError('The value "'+e+'" is invalid for option "size"')}function w(e){return k(e),g(e<0?0:0|E(e))}function _(e){for(var t=e.length<0?0:0|E(e.length),r=g(t),n=0;n<t;n+=1)r[n]=255&e[n];return r}function x(e,t,r){if(t<0||e.byteLength<t)throw new RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(r||0))throw new RangeError('"length" is outside of buffer bounds');var n;return n=void 0===t&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,t):new Uint8Array(e,t,r),Object.setPrototypeOf(n,y.prototype),n}function E(e){if(e>=m)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+m.toString(16)+" bytes");return 0|e}function I(e,r){if(y.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||ae(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+(void 0===e?"undefined":t(f)(e)));var n=e.length,i=arguments.length>2&&!0===arguments[2];if(!i&&0===n)return 0;for(var a=!1;;)switch(r){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return re(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return ne(e).length;default:if(a)return i?-1:re(e).length;r=(""+r).toLowerCase(),a=!0}}function T(e,t,r){var n=!1;if((void 0===t||t<0)&&(t=0),t>this.length)return"";if((void 0===r||r>this.length)&&(r=this.length),r<=0)return"";if((r>>>=0)<=(t>>>=0))return"";for(e||(e="utf8");;)switch(e){case"hex":return F(this,t,r);case"utf8":case"utf-8":return D(this,t,r);case"ascii":return U(this,t,r);case"latin1":case"binary":return j(this,t,r);case"base64":return M(this,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return V(this,t,r);default:if(n)throw new TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),n=!0}}function S(e,t,r){var n=e[t];e[t]=e[r],e[r]=n}function O(e,t,r,n,i){if(0===e.length)return-1;if("string"==typeof r?(n=r,r=0):r>2147483647?r=2147483647:r<-2147483648&&(r=-2147483648),oe(r=+r)&&(r=i?0:e.length-1),r<0&&(r=e.length+r),r>=e.length){if(i)return-1;r=e.length-1}else if(r<0){if(!i)return-1;r=0}if("string"==typeof t&&(t=y.from(t,n)),y.isBuffer(t))return 0===t.length?-1:R(e,t,r,n,i);if("number"==typeof t)return t&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(e,t,r):Uint8Array.prototype.lastIndexOf.call(e,t,r):R(e,[t],r,n,i);throw new TypeError("val must be string, number or Buffer")}function R(e,t,r,n,i){var a,o=1,s=e.length,u=t.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(e.length<2||t.length<2)return-1;o=2,s/=2,u/=2,r/=2}function c(e,t){return 1===o?e[t]:e.readUInt16BE(t*o)}if(i){var l=-1;for(a=r;a<s;a++)if(c(e,a)===c(t,-1===l?0:a-l)){if(-1===l&&(l=a),a-l+1===u)return l*o}else-1!==l&&(a-=a-l),l=-1}else for(r+u>s&&(r=s-u),a=r;a>=0;a--){for(var f=!0,h=0;h<u;h++)if(c(e,a+h)!==c(t,h)){f=!1;break}if(f)return a}return-1}function A(e,t,r,n){r=Number(r)||0;var i=e.length-r;n?(n=Number(n))>i&&(n=i):n=i;var a,o=t.length;for(n>o/2&&(n=o/2),a=0;a<n;++a){var s=parseInt(t.substr(2*a,2),16);if(oe(s))return a;e[r+a]=s}return a}function C(e,t,r,n){return ie(re(t,e.length-r),e,r,n)}function P(e,t,r,n){return ie(function(e){for(var t=[],r=0;r<e.length;++r)t.push(255&e.charCodeAt(r));return t}(t),e,r,n)}function L(e,t,r,n){return ie(ne(t),e,r,n)}function N(e,t,r,n){return ie(function(e,t){for(var r,n,i,a=[],o=0;o<e.length&&!((t-=2)<0);++o)n=(r=e.charCodeAt(o))>>8,i=r%256,a.push(i),a.push(n);return a}(t,e.length-r),e,r,n)}function M(e,t,r){return 0===t&&r===e.length?d.fromByteArray(e):d.fromByteArray(e.slice(t,r))}function D(e,t,r){r=Math.min(e.length,r);for(var n=[],i=t;i<r;){var a=e[i],o=null,s=a>239?4:a>223?3:a>191?2:1;if(i+s<=r){var u=void 0,c=void 0,l=void 0,f=void 0;switch(s){case 1:a<128&&(o=a);break;case 2:128==(192&(u=e[i+1]))&&(f=(31&a)<<6|63&u)>127&&(o=f);break;case 3:u=e[i+1],c=e[i+2],128==(192&u)&&128==(192&c)&&(f=(15&a)<<12|(63&u)<<6|63&c)>2047&&(f<55296||f>57343)&&(o=f);break;case 4:u=e[i+1],c=e[i+2],l=e[i+3],128==(192&u)&&128==(192&c)&&128==(192&l)&&(f=(15&a)<<18|(63&u)<<12|(63&c)<<6|63&l)>65535&&f<1114112&&(o=f)}}null===o?(o=65533,s=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|1023&o),n.push(o),i+=s}return function(e){var t=e.length;if(t<=B)return String.fromCharCode.apply(String,e);var r="",n=0;for(;n<t;)r+=String.fromCharCode.apply(String,e.slice(n,n+=B));return r}(n)}y.TYPED_ARRAY_SUPPORT=function(){try{var e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),y.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(y.prototype,"parent",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.buffer}}),Object.defineProperty(y.prototype,"offset",{enumerable:!0,get:function(){if(y.isBuffer(this))return this.byteOffset}}),y.poolSize=8192,y.from=function(e,t,r){return b(e,t,r)},Object.setPrototypeOf(y.prototype,Uint8Array.prototype),Object.setPrototypeOf(y,Uint8Array),y.alloc=function(e,t,r){return function(e,t,r){return k(e),e<=0?g(e):void 0!==t?"string"==typeof r?g(e).fill(t,r):g(e).fill(t):g(e)}(e,t,r)},y.allocUnsafe=function(e){return w(e)},y.allocUnsafeSlow=function(e){return w(e)},y.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==y.prototype},y.compare=function(e,t){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),ae(t,Uint8Array)&&(t=y.from(t,t.offset,t.byteLength)),!y.isBuffer(e)||!y.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;for(var r=e.length,n=t.length,i=0,a=Math.min(r,n);i<a;++i)if(e[i]!==t[i]){r=e[i],n=t[i];break}return r<n?-1:n<r?1:0},y.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},y.concat=function(e,t){if(!Array.isArray(e))throw new TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return y.alloc(0);var r;if(void 0===t)for(t=0,r=0;r<e.length;++r)t+=e[r].length;var n=y.allocUnsafe(t),i=0;for(r=0;r<e.length;++r){var a=e[r];if(ae(a,Uint8Array))i+a.length>n.length?(y.isBuffer(a)||(a=y.from(a)),a.copy(n,i)):Uint8Array.prototype.set.call(n,a,i);else{if(!y.isBuffer(a))throw new TypeError('"list" argument must be an Array of Buffers');a.copy(n,i)}i+=a.length}return n},y.byteLength=I,y.prototype._isBuffer=!0,y.prototype.swap16=function(){var e=this.length;if(e%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var t=0;t<e;t+=2)S(this,t,t+1);return this},y.prototype.swap32=function(){var e=this.length;if(e%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var t=0;t<e;t+=4)S(this,t,t+3),S(this,t+1,t+2);return this},y.prototype.swap64=function(){var e=this.length;if(e%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var t=0;t<e;t+=8)S(this,t,t+7),S(this,t+1,t+6),S(this,t+2,t+5),S(this,t+3,t+4);return this},y.prototype.toString=function(){var e=this.length;return 0===e?"":0===arguments.length?D(this,0,e):T.apply(this,arguments)},y.prototype.toLocaleString=y.prototype.toString,y.prototype.equals=function(e){if(!y.isBuffer(e))throw new TypeError("Argument must be a Buffer");return this===e||0===y.compare(this,e)},y.prototype.inspect=function(){var e="",t=o;return e=this.toString("hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+e+">"},v&&(y.prototype[v]=y.prototype.inspect),y.prototype.compare=function(e,r,n,i,a){if(ae(e,Uint8Array)&&(e=y.from(e,e.offset,e.byteLength)),!y.isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+(void 0===e?"undefined":t(f)(e)));if(void 0===r&&(r=0),void 0===n&&(n=e?e.length:0),void 0===i&&(i=0),void 0===a&&(a=this.length),r<0||n>e.length||i<0||a>this.length)throw new RangeError("out of range index");if(i>=a&&r>=n)return 0;if(i>=a)return-1;if(r>=n)return 1;if(this===e)return 0;for(var o=(a>>>=0)-(i>>>=0),s=(n>>>=0)-(r>>>=0),u=Math.min(o,s),c=this.slice(i,a),l=e.slice(r,n),h=0;h<u;++h)if(c[h]!==l[h]){o=c[h],s=l[h];break}return o<s?-1:s<o?1:0},y.prototype.includes=function(e,t,r){return-1!==this.indexOf(e,t,r)},y.prototype.indexOf=function(e,t,r){return O(this,e,t,r,!0)},y.prototype.lastIndexOf=function(e,t,r){return O(this,e,t,r,!1)},y.prototype.write=function(e,t,r,n){if(void 0===t)n="utf8",r=this.length,t=0;else if(void 0===r&&"string"==typeof t)n=t,r=this.length,t=0;else{if(!isFinite(t))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");t>>>=0,isFinite(r)?(r>>>=0,void 0===n&&(n="utf8")):(n=r,r=void 0)}var i=this.length-t;if((void 0===r||r>i)&&(r=i),e.length>0&&(r<0||t<0)||t>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var a=!1;;)switch(n){case"hex":return A(this,e,t,r);case"utf8":case"utf-8":return C(this,e,t,r);case"ascii":case"latin1":case"binary":return P(this,e,t,r);case"base64":return L(this,e,t,r);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,e,t,r);default:if(a)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),a=!0}},y.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var B=4096;function U(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(127&e[i]);return n}function j(e,t,r){var n="";r=Math.min(e.length,r);for(var i=t;i<r;++i)n+=String.fromCharCode(e[i]);return n}function F(e,t,r){var n=e.length;(!t||t<0)&&(t=0),(!r||r<0||r>n)&&(r=n);for(var i="",a=t;a<r;++a)i+=se[e[a]];return i}function V(e,t,r){for(var n=e.slice(t,r),i="",a=0;a<n.length-1;a+=2)i+=String.fromCharCode(n[a]+256*n[a+1]);return i}function z(e,t,r){if(e%1!=0||e<0)throw new RangeError("offset is not uint");if(e+t>r)throw new RangeError("Trying to access beyond buffer length")}function W(e,t,r,n,i,a){if(!y.isBuffer(e))throw new TypeError('"buffer" argument must be a Buffer instance');if(t>i||t<a)throw new RangeError('"value" argument is out of bounds');if(r+n>e.length)throw new RangeError("Index out of range")}function H(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a,a>>=8,e[r++]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,o>>=8,e[r++]=o,r}function q(e,t,r,n,i){Q(t,n,i,e,r,7);var a=Number(t&BigInt(4294967295));e[r+7]=a,a>>=8,e[r+6]=a,a>>=8,e[r+5]=a,a>>=8,e[r+4]=a;var o=Number(t>>BigInt(32)&BigInt(4294967295));return e[r+3]=o,o>>=8,e[r+2]=o,o>>=8,e[r+1]=o,o>>=8,e[r]=o,r+8}function J(e,t,r,n,i,a){if(r+n>e.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("Index out of range")}function G(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,4),p.write(e,t,r,n,23,4),r+4}function K(e,t,r,n,i){return t=+t,r>>>=0,i||J(e,0,r,8),p.write(e,t,r,n,52,8),r+8}y.prototype.slice=function(e,t){var r=this.length;(e=~~e)<0?(e+=r)<0&&(e=0):e>r&&(e=r),(t=void 0===t?r:~~t)<0?(t+=r)<0&&(t=0):t>r&&(t=r),t<e&&(t=e);var n=this.subarray(e,t);return Object.setPrototypeOf(n,y.prototype),n},y.prototype.readUintLE=y.prototype.readUIntLE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n},y.prototype.readUintBE=y.prototype.readUIntBE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e+--t],i=1;t>0&&(i*=256);)n+=this[e+--t]*i;return n},y.prototype.readUint8=y.prototype.readUInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),this[e]},y.prototype.readUint16LE=y.prototype.readUInt16LE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]|this[e+1]<<8},y.prototype.readUint16BE=y.prototype.readUInt16BE=function(e,t){return e>>>=0,t||z(e,2,this.length),this[e]<<8|this[e+1]},y.prototype.readUint32LE=y.prototype.readUInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},y.prototype.readUint32BE=y.prototype.readUInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},y.prototype.readBigUInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24),i=this[++e]+256*this[++e]+65536*this[++e]+r*Math.pow(2,24);return BigInt(n)+(BigInt(i)<<BigInt(32))})),y.prototype.readBigUInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=t*Math.pow(2,24)+65536*this[++e]+256*this[++e]+this[++e],i=this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r;return(BigInt(n)<<BigInt(32))+BigInt(i)})),y.prototype.readIntLE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=this[e],i=1,a=0;++a<t&&(i*=256);)n+=this[e+a]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*t)),n},y.prototype.readIntBE=function(e,t,r){e>>>=0,t>>>=0,r||z(e,t,this.length);for(var n=t,i=1,a=this[e+--n];n>0&&(i*=256);)a+=this[e+--n]*i;return a>=(i*=128)&&(a-=Math.pow(2,8*t)),a},y.prototype.readInt8=function(e,t){return e>>>=0,t||z(e,1,this.length),128&this[e]?-1*(255-this[e]+1):this[e]},y.prototype.readInt16LE=function(e,t){e>>>=0,t||z(e,2,this.length);var r=this[e]|this[e+1]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt16BE=function(e,t){e>>>=0,t||z(e,2,this.length);var r=this[e+1]|this[e]<<8;return 32768&r?4294901760|r:r},y.prototype.readInt32LE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},y.prototype.readInt32BE=function(e,t){return e>>>=0,t||z(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},y.prototype.readBigInt64LE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=this[e+4]+256*this[e+5]+65536*this[e+6]+(r<<24);return(BigInt(n)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+this[++e]*Math.pow(2,24))})),y.prototype.readBigInt64BE=ue((function(e){Z(e>>>=0,"offset");var t=this[e],r=this[e+7];void 0!==t&&void 0!==r||ee(e,this.length-8);var n=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(n)<<BigInt(32))+BigInt(this[++e]*Math.pow(2,24)+65536*this[++e]+256*this[++e]+r)})),y.prototype.readFloatLE=function(e,t){return e>>>=0,t||z(e,4,this.length),p.read(this,e,!0,23,4)},y.prototype.readFloatBE=function(e,t){return e>>>=0,t||z(e,4,this.length),p.read(this,e,!1,23,4)},y.prototype.readDoubleLE=function(e,t){return e>>>=0,t||z(e,8,this.length),p.read(this,e,!0,52,8)},y.prototype.readDoubleBE=function(e,t){return e>>>=0,t||z(e,8,this.length),p.read(this,e,!1,52,8)},y.prototype.writeUintLE=y.prototype.writeUIntLE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=1,a=0;for(this[t]=255&e;++a<r&&(i*=256);)this[t+a]=e/i&255;return t+r},y.prototype.writeUintBE=y.prototype.writeUIntBE=function(e,t,r,n){(e=+e,t>>>=0,r>>>=0,n)||W(this,e,t,r,Math.pow(2,8*r)-1,0);var i=r-1,a=1;for(this[t+i]=255&e;--i>=0&&(a*=256);)this[t+i]=e/a&255;return t+r},y.prototype.writeUint8=y.prototype.writeUInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,255,0),this[t]=255&e,t+1},y.prototype.writeUint16LE=y.prototype.writeUInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeUint16BE=y.prototype.writeUInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeUint32LE=y.prototype.writeUInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},y.prototype.writeUint32BE=y.prototype.writeUInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigUInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeBigUInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))})),y.prototype.writeIntLE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=0,o=1,s=0;for(this[t]=255&e;++a<r&&(o*=256);)e<0&&0===s&&0!==this[t+a-1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeIntBE=function(e,t,r,n){if(e=+e,t>>>=0,!n){var i=Math.pow(2,8*r-1);W(this,e,t,r,i-1,-i)}var a=r-1,o=1,s=0;for(this[t+a]=255&e;--a>=0&&(o*=256);)e<0&&0===s&&0!==this[t+a+1]&&(s=1),this[t+a]=(e/o>>0)-s&255;return t+r},y.prototype.writeInt8=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},y.prototype.writeInt16LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},y.prototype.writeInt16BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},y.prototype.writeInt32LE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},y.prototype.writeInt32BE=function(e,t,r){return e=+e,t>>>=0,r||W(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},y.prototype.writeBigInt64LE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return H(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeBigInt64BE=ue((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return q(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),y.prototype.writeFloatLE=function(e,t,r){return G(this,e,t,!0,r)},y.prototype.writeFloatBE=function(e,t,r){return G(this,e,t,!1,r)},y.prototype.writeDoubleLE=function(e,t,r){return K(this,e,t,!0,r)},y.prototype.writeDoubleBE=function(e,t,r){return K(this,e,t,!1,r)},y.prototype.copy=function(e,t,r,n){if(!y.isBuffer(e))throw new TypeError("argument should be a Buffer");if(r||(r=0),n||0===n||(n=this.length),t>=e.length&&(t=e.length),t||(t=0),n>0&&n<r&&(n=r),n===r)return 0;if(0===e.length||0===this.length)return 0;if(t<0)throw new RangeError("targetStart out of bounds");if(r<0||r>=this.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),e.length-t<n-r&&(n=e.length-t+r);var i=n-r;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,r,n):Uint8Array.prototype.set.call(e,this.subarray(r,n),t),i},y.prototype.fill=function(e,t,r,n){if("string"==typeof e){if("string"==typeof t?(n=t,t=0,r=this.length):"string"==typeof r&&(n=r,r=this.length),void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!y.isEncoding(n))throw new TypeError("Unknown encoding: "+n);if(1===e.length){var i=e.charCodeAt(0);("utf8"===n&&i<128||"latin1"===n)&&(e=i)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<r)throw new RangeError("Out of range index");if(r<=t)return this;var a;if(t>>>=0,r=void 0===r?this.length:r>>>0,e||(e=0),"number"==typeof e)for(a=t;a<r;++a)this[a]=e;else{var o=y.isBuffer(e)?e:y.from(e,n),s=o.length;if(0===s)throw new TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<r-t;++a)this[a+t]=o[a%s]}return this};var Y={};function X(e,r,n){Y[e]=function(n){t(l)(a,n);var i=t(h)(a);function a(){var n;return t(u)(this,a),n=i.call(this),Object.defineProperty(t(s)(n),"message",{value:r.apply(t(s)(n),arguments),writable:!0,configurable:!0}),n.name="".concat(n.name," [").concat(e,"]"),n.stack,delete n.name,n}return t(c)(a,[{key:"code",get:function(){return e},set:function(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}},{key:"toString",value:function(){return"".concat(this.name," [").concat(e,"]: ").concat(this.message)}}]),a}(n)}function $(e){for(var t="",r=e.length,n="-"===e[0]?1:0;r>=n+4;r-=3)t="_".concat(e.slice(r-3,r)).concat(t);return"".concat(e.slice(0,r)).concat(t)}function Q(e,r,n,i,a,o){if(e>n||e<r){var s,u="bigint"===(void 0===r?"undefined":t(f)(r))?"n":"";throw s=o>3?0===r||r===BigInt(0)?">= 0".concat(u," and < 2").concat(u," ** ").concat(8*(o+1)).concat(u):">= -(2".concat(u," ** ").concat(8*(o+1)-1).concat(u,") and < 2 ** ")+"".concat(8*(o+1)-1).concat(u):">= ".concat(r).concat(u," and <= ").concat(n).concat(u),new Y.ERR_OUT_OF_RANGE("value",s,e)}!function(e,t,r){Z(t,"offset"),void 0!==e[t]&&void 0!==e[t+r]||ee(t,e.length-(r+1))}(i,a,o)}function Z(e,t){if("number"!=typeof e)throw new Y.ERR_INVALID_ARG_TYPE(t,"number",e)}function ee(e,t,r){if(Math.floor(e)!==e)throw Z(e,r),new Y.ERR_OUT_OF_RANGE(r||"offset","an integer",e);if(t<0)throw new Y.ERR_BUFFER_OUT_OF_BOUNDS;throw new Y.ERR_OUT_OF_RANGE(r||"offset",">= ".concat(r?1:0," and <= ").concat(t),e)}X("ERR_BUFFER_OUT_OF_BOUNDS",(function(e){return e?"".concat(e," is outside of buffer bounds"):"Attempt to access memory outside buffer bounds"}),RangeError),X("ERR_INVALID_ARG_TYPE",(function(e,r){return'The "'.concat(e,'" argument must be of type number. Received type ').concat(void 0===r?"undefined":t(f)(r))}),TypeError),X("ERR_OUT_OF_RANGE",(function(e,r,n){var i='The value of "'.concat(e,'" is out of range.'),a=n;return Number.isInteger(n)&&Math.abs(n)>Math.pow(2,32)?a=$(String(n)):"bigint"===(void 0===n?"undefined":t(f)(n))&&(a=String(n),(n>Math.pow(BigInt(2),BigInt(32))||n<-Math.pow(BigInt(2),BigInt(32)))&&(a=$(a)),a+="n"),i+=" It must be ".concat(r,". Received ").concat(a)}),RangeError);var te=/[^+/0-9A-Za-z-_]/g;function re(e,t){var r;t=t||1/0;for(var n=e.length,i=null,a=[],o=0;o<n;++o){if((r=e.charCodeAt(o))>55295&&r<57344){if(!i){if(r>56319){(t-=3)>-1&&a.push(239,191,189);continue}if(o+1===n){(t-=3)>-1&&a.push(239,191,189);continue}i=r;continue}if(r<56320){(t-=3)>-1&&a.push(239,191,189),i=r;continue}r=65536+(i-55296<<10|r-56320)}else i&&(t-=3)>-1&&a.push(239,191,189);if(i=null,r<128){if((t-=1)<0)break;a.push(r)}else if(r<2048){if((t-=2)<0)break;a.push(r>>6|192,63&r|128)}else if(r<65536){if((t-=3)<0)break;a.push(r>>12|224,r>>6&63|128,63&r|128)}else{if(!(r<1114112))throw new Error("Invalid code point");if((t-=4)<0)break;a.push(r>>18|240,r>>12&63|128,r>>6&63|128,63&r|128)}}return a}function ne(e){return d.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(te,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function ie(e,t,r,n){var i;for(i=0;i<n&&!(i+r>=t.length||i>=e.length);++i)t[i+r]=e[i];return i}function ae(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}function oe(e){return e!=e}var se=function(){for(var e="0123456789abcdef",t=new Array(256),r=0;r<16;++r)for(var n=16*r,i=0;i<16;++i)t[n+i]=e[r]+e[i];return t}();function ue(e){return"undefined"==typeof BigInt?ce:e}function ce(){throw new Error("BigInt not supported")}})),a.register("ds8z5",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}})),a.register("8MBJY",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}})),a.register("a2hTj",(function(e,t){"use strict";function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){t&&r(e.prototype,t);n&&r(e,n);return e}})),a.register("eYQtU",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n.default(e,t)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r}})),a.register("gD1JV",(function(e,t){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return r(e,t)}})),a.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),a.register("2MbLg",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){var t=r.default();return function(){var r,a=n.default(e);if(t){var o=n.default(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return i.default(this,r)}};var r=o(a("aTHs7")),n=o(a("fVNic")),i=o(a("jmhxu"));function o(e){return e&&e.__esModule?e:{default:e}}})),a.register("aTHs7",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}})),a.register("fVNic",(function(e,t){"use strict";function r(e){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return r(e)}})),a.register("jmhxu",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return!t||"object"!==n.default(t)&&"function"!=typeof t?r.default(e):t};var r=i(a("ds8z5")),n=i(a("l5bVx"));function i(e){return e&&e.__esModule?e:{default:e}}})),a.register("5d11t",(function(t,r){var n,i;e(t.exports,"toByteArray",(function(){return n}),(function(e){return n=e})),e(t.exports,"fromByteArray",(function(){return i}),(function(e){return i=e})),n=function(e){var t,r,n=f(e),i=n[0],a=n[1],u=new s(function(e,t,r){return 3*(t+r)/4-r}(0,i,a)),c=0,l=a>0?i-4:i;for(r=0;r<l;r+=4)t=o[e.charCodeAt(r)]<<18|o[e.charCodeAt(r+1)]<<12|o[e.charCodeAt(r+2)]<<6|o[e.charCodeAt(r+3)],u[c++]=t>>16&255,u[c++]=t>>8&255,u[c++]=255&t;2===a&&(t=o[e.charCodeAt(r)]<<2|o[e.charCodeAt(r+1)]>>4,u[c++]=255&t);1===a&&(t=o[e.charCodeAt(r)]<<10|o[e.charCodeAt(r+1)]<<4|o[e.charCodeAt(r+2)]>>2,u[c++]=t>>8&255,u[c++]=255&t);return u},i=function(e){for(var t,r=e.length,n=r%3,i=[],o=16383,s=0,u=r-n;s<u;s+=o)i.push(h(e,s,s+o>u?u:s+o));1===n?(t=e[r-1],i.push(a[t>>2]+a[t<<4&63]+"==")):2===n&&(t=(e[r-2]<<8)+e[r-1],i.push(a[t>>10]+a[t>>4&63]+a[t<<2&63]+"="));return i.join("")};for(var a=[],o=[],s="undefined"!=typeof Uint8Array?Uint8Array:Array,u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",c=0,l=u.length;c<l;++c)a[c]=u[c],o[u.charCodeAt(c)]=c;function f(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var r=e.indexOf("=");return-1===r&&(r=t),[r,r===t?0:4-r%4]}function h(e,t,r){for(var n,i,o=[],s=t;s<r;s+=3)n=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]),o.push(a[(i=n)>>18&63]+a[i>>12&63]+a[i>>6&63]+a[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),a.register("7rddL",(function(t,r){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var n,i;e(t.exports,"read",(function(){return n}),(function(e){return n=e})),e(t.exports,"write",(function(){return i}),(function(e){return i=e})),n=function(e,t,r,n,i){var a,o,s=8*i-n-1,u=(1<<s)-1,c=u>>1,l=-7,f=r?i-1:0,h=r?-1:1,d=e[t+f];for(f+=h,a=d&(1<<-l)-1,d>>=-l,l+=s;l>0;a=256*a+e[t+f],f+=h,l-=8);for(o=a&(1<<-l)-1,a>>=-l,l+=n;l>0;o=256*o+e[t+f],f+=h,l-=8);if(0===a)a=1-c;else{if(a===u)return o?NaN:1/0*(d?-1:1);o+=Math.pow(2,n),a-=c}return(d?-1:1)*o*Math.pow(2,a-n)},i=function(e,t,r,n,i,a){var o,s,u,c=8*a-i-1,l=(1<<c)-1,f=l>>1,h=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,d=n?0:a-1,p=n?1:-1,v=t<0||0===t&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(s=isNaN(t)?1:0,o=l):(o=Math.floor(Math.log(t)/Math.LN2),t*(u=Math.pow(2,-o))<1&&(o--,u*=2),(t+=o+f>=1?h/u:h*Math.pow(2,1-f))*u>=2&&(o++,u/=2),o+f>=l?(s=0,o=l):o+f>=1?(s=(t*u-1)*Math.pow(2,i),o+=f):(s=t*Math.pow(2,f-1)*Math.pow(2,i),o=0));i>=8;e[r+d]=255&s,d+=p,s/=256,i-=8);for(o=o<<i|s,c+=i;c>0;e[r+d]=255&o,d+=p,o/=256,c-=8);e[r+d-p]|=128*v}})),a.register("btSY7",(function(e,t){"use strict";var r=a("c4C4W"),n=a("j97bH"),i=a("jFG8L"),o=a("6d5Pb"),s=a("gYMA1"),u=a("1nUSP"),c=a("9jFfm"),l=a("gWbUy"),f=a("5TB86"),h=a("dW1zJ"),d=a("4ULKu");e.exports=function(e){return new Promise((function(t,a){var p,v=e.data,m=e.headers,g=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}r.isFormData(v)&&r.isStandardBrowserEnv()&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var k=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(k+":"+w)}var _=s(e.baseURL,e.url);function x(){if(b){var r="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:g&&"text"!==g&&"json"!==g?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:r,config:e,request:b};n((function(e){t(e),y()}),(function(e){a(e),y()}),i),b=null}}if(b.open(e.method.toUpperCase(),o(_,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=x:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(x)},b.onabort=function(){b&&(a(new f("Request aborted",f.ECONNABORTED,e,b)),b=null)},b.onerror=function(){a(new f("Network Error",f.ERR_NETWORK,e,b,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",r=e.transitional||l;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),a(new f(t,r.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,e,b)),b=null},r.isStandardBrowserEnv()){var E=(e.withCredentials||c(_))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;E&&(m[e.xsrfHeaderName]=E)}"setRequestHeader"in b&&r.forEach(m,(function(e,t){void 0===v&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),g&&"json"!==g&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(a(!e||e&&e.type?new h:e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),v||(v=null);var I=d(_);I&&-1===["http","https","file"].indexOf(I)?a(new f("Unsupported protocol "+I+":",f.ERR_BAD_REQUEST,e)):b.send(v)}))}})),a.register("j97bH",(function(e,t){"use strict";var r=a("5TB86");e.exports=function(e,t,n){var i=n.config.validateStatus;n.status&&i&&!i(n.status)?t(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}})),a.register("jFG8L",(function(e,t){"use strict";var r=a("c4C4W");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,i,a,o){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(i)&&s.push("path="+i),r.isString(a)&&s.push("domain="+a),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),a.register("gYMA1",(function(e,t){"use strict";var r=a("7xjuH"),n=a("ftRZn");e.exports=function(e,t){return e&&!r(t)?n(e,t):t}})),a.register("7xjuH",(function(e,t){"use strict";e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}})),a.register("ftRZn",(function(e,t){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}})),a.register("1nUSP",(function(e,t){"use strict";var r=a("c4C4W"),n=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,i,a,o={};return e?(r.forEach(e.split("\n"),(function(e){if(a=e.indexOf(":"),t=r.trim(e.substr(0,a)).toLowerCase(),i=r.trim(e.substr(a+1)),t){if(o[t]&&n.indexOf(t)>=0)return;o[t]="set-cookie"===t?(o[t]?o[t]:[]).concat([i]):o[t]?o[t]+", "+i:i}})),o):o}})),a.register("9jFfm",(function(e,t){"use strict";var r=a("c4C4W");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function i(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=i(window.location.href),function(t){var n=r.isString(t)?i(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}})),a.register("dW1zJ",(function(e,t){"use strict";var r=a("5TB86");function n(e){r.call(this,null==e?"canceled":e,r.ERR_CANCELED),this.name="CanceledError"}a("c4C4W").inherits(n,r,{__CANCEL__:!0}),e.exports=n})),a.register("4ULKu",(function(e,t){"use strict";e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}})),a.register("beknR",(function(e,t){e.exports=null})),a.register("lXDKh",(function(e,t){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}})),a.register("knWMA",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e,t){t=t||{};var n={};function i(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function a(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(e[n],t[n])}function o(e){if(!r.isUndefined(t[e]))return i(void 0,t[e])}function s(n){return r.isUndefined(t[n])?r.isUndefined(e[n])?void 0:i(void 0,e[n]):i(void 0,t[n])}function u(r){return r in t?i(e[r],t[r]):r in e?i(void 0,e[r]):void 0}var c={url:o,method:o,data:o,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u};return r.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||a,i=t(e);r.isUndefined(i)&&t!==u||(n[e]=i)})),n}})),a.register("9SeBc",(function(e,r){var n=a("l5bVx"),i=a("kLR29").version,o=a("5TB86"),s={};["object","boolean","number","function","string","symbol"].forEach((function(e,r){s[e]=function(i){return(void 0===i?"undefined":t(n)(i))===e||"a"+(r<1?"n ":" ")+e}}));var u={};s.transitional=function(e,t,r){function n(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,i,a){if(!1===e)throw new o(n(i," has been removed"+(t?" in "+t:"")),o.ERR_DEPRECATED);return t&&!u[i]&&(u[i]=!0,console.warn(n(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,i,a)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new o("options must be an object",o.ERR_BAD_OPTION_VALUE);for(var n=Object.keys(e),i=n.length;i-- >0;){var a=n[i],s=t[a];if(s){var u=e[a],c=void 0===u||s(u,a,e);if(!0!==c)throw new o("option "+a+" must be "+c,o.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new o("Unknown option "+a,o.ERR_BAD_OPTION)}},validators:s}})),a.register("kLR29",(function(e,t){e.exports={version:"0.27.2"}})),a.register("77MZz",(function(e,t){"use strict";var r=a("dW1zJ");function n(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,r=n._listeners.length;for(t=0;t<r;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,r=new Promise((function(e){n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},n.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},n.source=function(){var e;return{token:new n((function(t){e=t})),cancel:e}},e.exports=n})),a.register("9BdDr",(function(e,t){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}})),a.register("kv87N",(function(e,t){"use strict";var r=a("c4C4W");e.exports=function(e){return r.isObject(e)&&!0===e.isAxiosError}})),a.register("aNJCr",(function(t,r){var n;e(t.exports,"getBundleURL",(function(){return n}),(function(e){return n=e}));var i={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}n=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),i[e]=t),t}})),a.register("hKHmD",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e}})),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return r&&n.default(a,r.prototype),a}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.884e8536.js","e5oy7":"filmWrap.dabdf2b2.jpg"}')),document.querySelector("body").onscroll=function(e){var t=document.getElementsByClassName("btn_anchor")[0];e.target.scrollingElement.scrollTop>0?t.classList.remove("btn_anchor-hidden"):t.classList.add("btn_anchor-hidden")},document.querySelector(".btn_anchor").addEventListener("click",(function(){document.querySelector("body").scrollIntoView({top:0,behavior:"smooth"})}));var o={};function s(e,t,r,n,i,a,o){try{var s=e[a](o),u=s.value}catch(e){return void r(e)}s.done?t(u):Promise.resolve(u).then(n,i)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return function(){var t=this,r=arguments;return new Promise((function(n,i){var a=e.apply(t,r);function o(e){s(a,n,i,o,u,"next",e)}function u(e){s(a,n,i,o,u,"throw",e)}o(void 0)}))}};var u={},c=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var i=t&&t.prototype instanceof m?t:m,a=Object.create(i.prototype),o=new O(n||[]);return a._invoke=function(e,t,r){var n=f;return function(i,a){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw a;return A()}for(r.method=i,r.arg=a;;){var o=r.delegate;if(o){var s=I(o,r);if(s){if(s===v)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(e,r,o),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,(function(){return this}));var k=Object.getPrototypeOf,w=k&&k(k(R([])));w&&w!==r&&n.call(w,a)&&(b=w);var _=y.prototype=m.prototype=Object.create(b);function x(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,a,o,s){var u=l(e[i],e,a);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,o,s)}),(function(e){r("throw",e,o,s)})):t.resolve(f).then((function(e){c.value=e,o(c)}),(function(e){return r("throw",e,o,s)}))}s(u.arg)}var i;this._invoke=function(e,n){function a(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(a,a):a()}}function I(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,I(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=l(n,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,v;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function S(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function R(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:A}}function A(){return{value:t,done:!0}}return g.prototype=y,u(_,"constructor",y),u(y,"constructor",g),g.displayName=u(y,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,s,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},x(E.prototype),u(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new E(c(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},x(_),u(_,s,"Generator"),u(_,a,(function(){return this})),u(_,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=R,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(S),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var u=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(u&&c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=e,o.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),S(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:R(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(u);try{regeneratorRuntime=c}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=c:Function("r","regeneratorRuntime = r")(c)}var l,f={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",27:"Horror",36:"History",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"},h=function(e){return e.length>2&&(e.splice(2),e.push("etc")),e.map((function(e){return f[e]||"etc"})).join(", ")},d=a("8MBJY"),p=a("a2hTj");l=a("ke5Oc");var v=function(){"use strict";function e(){t(d)(this,e),this.filmName="",this.pageNumber=1,this.filmId=null,this.API_KEY="74bfe718a55ac7916c6e6ad87b15f944",this.BASE_URL="https://api.themoviedb.org/3",this.totalPages=0}return t(p)(e,[{key:"setPageNumber",value:function(e){this.pageNumber=e}},{key:"setFilmId",value:function(e){this.filmId=e}},{key:"setFilmName",value:function(e){this.filmName=e}},{key:"fetchFilmsByName",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(l).defaults.baseURL=e.BASE_URL,r.prev=1,r.next=4,t(l).get("search/movie?api_key=".concat(e.API_KEY,"&language=en-US&query=").concat(e.filmName,"&page=").concat(e.pageNumber,"&include_adult=false"));case 4:return n=r.sent,i=n.data,e.totalPages=i.total_pages,r.abrupt("return",n.data.results);case 10:r.prev=10,r.t0=r.catch(1),console.log(r.t0);case 13:return r.abrupt("return",response.data.results);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()}},{key:"fetchFilmsById",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(l).defaults.baseURL=e.BASE_URL,r.prev=1,r.next=4,t(l).get("movie/".concat(e.filmId,"?api_key=").concat(e.API_KEY,"&language=en-US"));case 4:return n=r.sent,i=n.data,r.abrupt("return",i);case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:return r.abrupt("return",data);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()}},{key:"fetchPopularsFilms",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(l).defaults.baseURL=e.BASE_URL,r.prev=1,r.next=4,t(l).get("/trending/movie/week?api_key=".concat(e.API_KEY,"&page=").concat(e.pageNumber));case 4:return n=r.sent.data,e.totalPages=n.total_pages,r.abrupt("return",n.results);case 9:r.prev=9,r.t0=r.catch(1),console.log(r.t0);case 12:return r.abrupt("return",data.results);case 13:case"end":return r.stop()}}),r,null,[[1,9]])})))()}}]),e}();function m(e,t){t.insertAdjacentHTML("beforeend",e)}var g;g=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("e5oy7");var y={preloaderEl:document.querySelector("#preloader"),imgElArr:document.getElementsByClassName("film-item__img"),bodyEl:document.querySelector("body")};function b(){y.preloaderEl.classList.remove("preloader--hide"),setTimeout((function(){y.bodyEl.scrollIntoView({top:0,behavior:"smooth"})}),100),console.log("ЗАПУСК ПРЕЛОУДЕРА")}function k(){var e=Array.from(y.imgElArr);console.log(e),e.forEach((function(t,r){t.onload=function(){r===e.length-1&&(y.preloaderEl.classList.add("preloader--hide"),console.log("ВЫКЛ ПРЕЛОУДЕРА"))}}))}function w(e){y.preloaderEl.classList.add("preloader--hide"),window.removeEventListener("load",w)}function _(e){e.innerHTML=""}y.preloaderEl.classList.remove("preloader--hide"),window.addEventListener("load",w);var x=new v,E=document.querySelector(".paginationBox"),I=0;function T(e,t){var r="",n=e-1,i=e+1,a=e+2;I=e,e>1&&(r+='<li class="paginationRow">&#129144;</li>'),e>1&&(r+="<li>1</li>"),e>4&&(r+="<li>...</li>"),e>3&&(r+="<li>".concat(e-2,"</li>")),e>2&&(r+="<li>".concat(n,"</li>")),r+='<li class="paginationPage--current">'.concat(e,"</li>"),t-1>e&&(r+="<li>".concat(i,"</li>")),t-2>e&&(r+="<li>".concat(a,"</li>")),t-3>e&&(r+="<li>...</li>"),t>e&&(r+='<li class="avd">'.concat(e+5,"</li>"),r+='<li class="paginationRow">&#129146;<li>'),E.innerHTML=r}function S(){return(S=t(o)(t(u).mark((function e(r){var n,i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b(),"LI"===r.target.nodeName){e.next=3;break}return e.abrupt("return");case 3:if("🡸"!==r.target.textContent){e.next=12;break}return x.setPageNumber(I-=1),e.next=7,x.fetchPopularsFilms();case 7:return n=e.sent,_(O),R(n),T(x.pageNumber,x.totalPages),e.abrupt("return");case 12:if("🡺"!==r.target.textContent){e.next=22;break}return x.setPageNumber(I+=1),console.log(x.pageNumber),e.next=17,x.fetchPopularsFilms();case 17:return i=e.sent,_(O),R(i),T(x.pageNumber,x.totalPages),e.abrupt("return");case 22:if("..."!==r.target.textContent){e.next=24;break}return e.abrupt("return");case 24:return a=r.target.textContent,x.setPageNumber(Number(a)),e.next=28,x.fetchPopularsFilms();case 28:o=e.sent,_(O),R(o),T(x.pageNumber,x.totalPages),k();case 33:case"end":return e.stop()}}),e)})))).apply(this,arguments)}E.addEventListener("click",(function(e){return S.apply(this,arguments)}));var O=document.querySelector("ul.card__list");new v;function R(e){if(e){var t=e.map((function(e){var t=e.id,r=e.poster_path,n=e.title,i=e.genre_ids,a=e.release_date;return'<li class="film__item">\n        <a class="film__link" id="'.concat(t,'">\n  <div class="film__wrap">\n  <img src=').concat(r?"https://image.tmdb.org/t/p/original".concat(r):img,' class="film-item__img" alt="').concat(n,'" width="300">\n  </div>\n  <div>\n  <h3 class="film__title">').concat(n,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat(h(i),'</p>\n  <p class="film__release-date">').concat(a?new Date(a).getFullYear():"Nobody know","</p>\n   </div>\n   </a>\n   </li>")})).join("");return m(t,O),t}}var A=new v,C=document.querySelector("ul.card__list");function P(){return(P=t(o)(t(u).mark((function e(){var r,n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.fetchPopularsFilms();case 2:return r=e.sent,m(n=r.map((function(e){var r=e.id,n=e.poster_path,i=e.title,a=e.genre_ids,o=e.release_date;return'<li class="film__item">\n        <a class="film__link" id="'.concat(r,'">\n  <div class="film__wrap">\n      <img src=').concat(n?"https://image.tmdb.org/t/p/original".concat(n):t(g),' class="film-item__img" alt="').concat(i,'" width="300">\n  </div>\n  <div class="wrap__film>\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(i,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat(h(a),'</p>\n  <p class="film__release-date">').concat(o?new Date(o).getFullYear():"Nobody know","</p>\n\n   </div>\n   </div>\n   </a>\n   </li>")})).join(""),C),e.next=7,T(A.pageNumber,A.totalPages);case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){P.apply(this,arguments)}();var L=document.querySelector(".header__form"),N=document.querySelector("ul.card__list"),M=document.querySelector(".header__error"),D=new v;function B(){return(B=t(o)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r;case 2:if((n=e.sent).length){e.next=8;break}return e.next=6,U();case 6:e.next=13;break;case 8:return M.classList.add("visually-hidden"),m(i=n.map((function(e){var r=e.id,n=e.poster_path,i=e.title,a=e.genre_ids,o=e.release_date;return'<li class="film__item">\n        <a class="film__link" id="'.concat(r,'">\n  <div class="film__wrap">\n  <img src=').concat(n?"https://image.tmdb.org/t/p/original".concat(n):t(g),' class="film-item__img" alt="').concat(i,'" width="300">\n  </div>\n  <div class="film__title-wrap">\n  <h3 class="film__title">').concat(i,'</h3>\n  </div>\n  <div class="film__genres-and-date">\n  <p class="film__genres">').concat(h(a),'</p>\n  <p class="film__release-date">').concat(o?new Date(o).getFullYear():"Nobody know","</p>\n  \n  \n   </div>\n   </a>\n   </li>")})).join(""),N),k(),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(){M.classList.remove("visually-hidden"),L.reset()}function j(e){var t=e.title,r=e.original_title,n=e.overview,i=e.poster_path,a=e.popularity,o=e.vote_average,s=e.vote_count,u=e.genres,c=e.id,l=u.map((function(e){return e.name})).join(", ");return'<div class="infoFilm__left">\n      <img\n          src="https://image.tmdb.org/t/p/original'.concat(i,'"\n          alt="').concat(t,'"\n          class="infoFilm__img"\n        /> \n      </div>\n      <div class="infoFilm__right">\n        <h2 class="infoFilm___title">"').concat(t,'"</h2>\n<table class="about-film">\n  <tr>\n    <td class="about-film__left">Vote / Votes</td>\n    <td class="about-film__right">\n      <span class="vote-average">').concat(o,'</span\n      ><span class="separator">/</span\n      ><span class="votes-count">').concat(s,'</span>\n    </td>\n  </tr>\n  <tr>\n    <td class="about-film__left">Popularity</td>\n    <td class="about-film__right">').concat(a,'</td>\n  </tr>\n  <tr>\n    <td class="about-film__left">Original Title</td>\n    <td class="about-film__right">').concat(r,'</td>\n  </tr>\n  <tr>\n    <td class="about-film__left">Genre</td>\n    <td class="about-film__right">').concat(l,'</td>\n  </tr>\n</table>\n        <h3 class="about__title">About</h3>\n        <p class="about__text">').concat(n,'</p>\n        <ul class="button-list">\n          <li class="button-list__item">\n            <button\n              type="button"\n              id="').concat(c,'"\n              class="button-list__button button-modal__orange"\n            >\n              Add to watched\n            </button>\n          </li>\n          <li class="button-list__item">\n            <button\n              type="button"\n            id="').concat(c,'"\n              class="button-list__button button-modal__white"\n            >\n              Add to queue\n            </button>\n          </li>\n        </ul>\n  </div>')}L.addEventListener("submit",(function(e){e.preventDefault();var t=e.target.elements[0].value.trim();if(!t)return void U();b(),_(N),D.setFilmName(t),function(e){B.apply(this,arguments)}(D.fetchFilmsByName())}));var F=new v,V={filmList:document.querySelector(".card__list"),ModalFilmBackdrop:document.querySelector(".backdrop-modalInfo"),ModalFilmBody:document.querySelector("body"),ModalFilmWrap:document.querySelector(".infoFilm__wrap"),ModalFilmBtnClose:document.querySelector(".infoFilm__button"),btn_anchor:document.querySelector(".btn_anchor-hidden")};function z(){return(z=t(o)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("A"===r.target.parentNode.parentElement.nodeName){e.next=2;break}return e.abrupt("return");case 2:return n=r.target.parentNode.parentElement.id,F.filmId=n,e.next=6,F.fetchFilmsById();case 6:i=e.sent,m(j(i),V.ModalFilmWrap),q();case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){"Escape"===e.key&&H()}function H(){V.ModalFilmBody.removeEventListener("keydown",W),V.ModalFilmBackdrop.classList.add("visually-hidden"),V.ModalFilmBody.classList.remove("no-scroll"),V.ModalFilmBackdrop.classList.remove("scroll"),V.btn_anchor.classList.remove("btn_anchor-hidden"),_(V.ModalFilmWrap)}function q(){V.ModalFilmBackdrop.classList.remove("visually-hidden"),V.ModalFilmBody.classList.add("no-scroll"),V.ModalFilmBackdrop.classList.add("scroll"),V.btn_anchor.classList.add("btn_anchor-hidden"),V.ModalFilmBody.addEventListener("keydown",W)}V.filmList.addEventListener("click",(function(e){return z.apply(this,arguments)})),V.ModalFilmBtnClose.addEventListener("click",(function(){H()})),V.ModalFilmBackdrop.addEventListener("click",(function(e){e.target===e.currentTarget&&H()}));var J={darkBtn:document.querySelector('button[data-theme="onDark"]'),lightBtn:document.querySelector('button[data-theme="onLight"]'),body:document.querySelector("body")};J.darkBtn.addEventListener("click",(function(){J.body.classList.toggle("dark__theme"),localStorage.setItem("theme","dark")})),J.lightBtn.addEventListener("click",(function(){localStorage.setItem("theme",""),J.body.classList.remove("dark__theme")})),"dark"===localStorage.getItem("theme")&&J.body.classList.toggle("dark__theme");var G={openModal:document.querySelector(".footer__link"),ModalTeamBackdrop:document.querySelector(".team__backdrop"),ModalTeamBody:document.querySelector("body"),ModalTeamBtn:document.querySelector(".modal__close-button")};function K(){window.removeEventListener("keydown",Y),G.ModalTeamBody.classList.remove("no-scroll"),G.ModalTeamBackdrop.classList.add("visually-hidden")}function Y(e){"Escape"===e.code&&K()}G.openModal.addEventListener("click",(function(e){window.addEventListener("keydown",Y),e.preventDefault(),G.ModalTeamBody.classList.add("no-scroll"),G.ModalTeamBackdrop.classList.remove("visually-hidden")})),G.ModalTeamBtn.addEventListener("click",K),G.ModalTeamBackdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&K()}));var X={authorizationBtn:document.querySelector("#headerAuthorization"),modalAuthorizationBackdrop:document.querySelector(".backdrop-modalAuthorization"),modalCloseAuthorozation:document.querySelector(".authorization__close"),modalAuthorizationLink:document.querySelector(".authorization__link"),modalRegistrationBackdrop:document.querySelector(".backdrop-modalRegistration"),modalCloseRegistration:document.querySelector(".registration__close")};console.log(X.modalAuthorizationLink),X.authorizationBtn.addEventListener("click",(function(e){e.preventDefault(),X.modalAuthorizationBackdrop.classList.remove("visually-hidden")})),X.modalCloseAuthorozation.addEventListener("click",(function(e){e.preventDefault(),X.modalAuthorizationBackdrop.classList.add("visually-hidden")})),X.modalAuthorizationLink.addEventListener("click",(function(e){e.preventDefault(),X.modalAuthorizationBackdrop.classList.add("visually-hidden"),X.modalRegistrationBackdrop.classList.remove("visually-hidden")})),X.modalCloseRegistration.addEventListener("click",(function(e){e.preventDefault(),X.modalRegistrationBackdrop.classList.add("visually-hidden")}));d=a("8MBJY"),p=a("a2hTj");var $=a("hKHmD"),Q={};Object.defineProperty(Q,"__esModule",{value:!0}),Q.default=function(e){return Z.default(e)||ee.default(e)||re.default(e)||te.default()};var Z=ne(a("kMC0W")),ee=ne(a("7AJDX")),te=ne(a("8CtQK")),re=ne(a("auk6i"));function ne(e){return e&&e.__esModule?e:{default:e}}d=a("8MBJY"),p=a("a2hTj");var ie={};Object.defineProperty(ie,"__esModule",{value:!0}),ie.default=function(e,t){return ae.default(e)||oe.default(e,t)||ue.default(e,t)||se.default()};var ae=ce(a("8slrw")),oe=ce(a("7AJDX")),se=ce(a("ifqQW")),ue=ce(a("auk6i"));function ce(e){return e&&e.__esModule?e:{default:e}}var le=a("ds8z5"),fe=(d=a("8MBJY"),p=a("a2hTj"),a("eYQtU")),he={};Object.defineProperty(he,"__esModule",{value:!0}),he.default=function(e){return ye(e)};var de=ge(a("ge8co")),pe=ge(a("cZGw3")),ve=ge(a("fVNic")),me=ge(a("gD1JV"));function ge(e){return e&&e.__esModule?e:{default:e}}function ye(e){var t="function"==typeof Map?new Map:void 0;return ye=function(e){if(null===e||!pe.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return de.default(e,arguments,ve.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),me.default(r,e)},ye(e)}var be=a("2MbLg"),ke=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t[r++]=i:i<2048?(t[r++]=i>>6|192,t[r++]=63&i|128):55296==(64512&i)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++n)),t[r++]=i>>18|240,t[r++]=i>>12&63|128,t[r++]=i>>6&63|128,t[r++]=63&i|128):(t[r++]=i>>12|224,t[r++]=i>>6&63|128,t[r++]=63&i|128)}return t},we={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],i=0;i<e.length;i+=3){var a=e[i],o=i+1<e.length,s=o?e[i+1]:0,u=i+2<e.length,c=u?e[i+2]:0,l=a>>2,f=(3&a)<<4|s>>4,h=(15&s)<<2|c>>6,d=63&c;u||(d=64,o||(h=64)),n.push(r[l],r[f],r[h],r[d])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ke(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var i=e[r++];if(i<128)t[n++]=String.fromCharCode(i);else if(i>191&&i<224){var a=e[r++];t[n++]=String.fromCharCode((31&i)<<6|63&a)}else if(i>239&&i<365){var o=((7&i)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],i=0;i<e.length;){var a=r[e.charAt(i++)],o=i<e.length?r[e.charAt(i)]:0,s=++i<e.length?r[e.charAt(i)]:64,u=++i<e.length?r[e.charAt(i)]:64;if(++i,null==a||null==o||null==s||null==u)throw Error();var c=a<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var f=s<<6&192|u;n.push(f)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_e=function(e){return function(e){var t=ke(e);return we.encodeByteArray(t,!0)}(e).replace(/\./g,"")},xe=function(e){try{return we.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ee=function(){"use strict";function e(){var r=this;t(d)(this,e),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return t(p)(e,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ie(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Te=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e,i,a){var o;return t(d)(this,n),(o=r.call(this,i)).code=e,o.customData=a,o.name="FirebaseError",Object.setPrototypeOf(t(le)(o),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(t(le)(o),Se.prototype.create),o}return n}(t(he)(Error)),Se=function(){"use strict";function e(r,n,i){t(d)(this,e),this.service=r,this.serviceName=n,this.errors=i}return t(p)(e,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var i=r[0]||{},a="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?Oe(o,i):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(a,")."),c=new Te(a,u,i);return c}}]),e}();function Oe(e,t){return e.replace(Re,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var Re=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ae(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ce(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),i=!0,a=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(i=(s=u.next()).done);i=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],f=t[c];if(Pe(l)&&Pe(f)){if(!Ce(l,f))return!1}else if(l!==f)return!1}}catch(e){a=!0,o=e}finally{try{i||null==u.return||u.return()}finally{if(a)throw o}}var h=!0,d=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(h=(v=m.next()).done);h=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){d=!0,p=e}finally{try{h||null==m.return||m.return()}finally{if(d)throw p}}return!0}function Pe(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){var r=[],n=!0,i=!1,a=void 0;try{for(var o,s=function(e,n){var i=t(ie)(n.value,2),a=i[0],o=i[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(a)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(a)+"="+encodeURIComponent(o))},u=Object.entries(e)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){i=!0,a=e}finally{try{n||null==u.return||u.return()}finally{if(i)throw a}}return r.length?"&"+r.join("&"):""}function Ne(e){var r={};return e.replace(/^\?/,"").split("&").forEach((function(e){if(e){var n=t(ie)(e.split("="),2),i=n[0],a=n[1];r[decodeURIComponent(i)]=decodeURIComponent(a)}})),r}function Me(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De=function(){"use strict";function e(r,n){var i=this;t(d)(this,e),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(i)})).catch((function(e){i.error(e)}))}return t(p)(e,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,i=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,i=void 0;try{for(var a,o=t[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Be),void 0===n.error&&(n.error=Be),void 0===n.complete&&(n.complete=Be);var a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?n.error(i.finalError):n.complete()}catch(e){}})),this.observers.push(n),a}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),e}();function Be(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e){return e&&e._delegate?e._delegate:e}var je=function(){"use strict";function e(r,n,i){t(d)(this,e),this.name=r,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t(p)(e,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),e}(),Fe="[DEFAULT]",Ve=function(){"use strict";function e(r,n){t(d)(this,e),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t(p)(e,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new Ee;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(e){if(e.name!==this.name)throw Error("Mismatching Component ".concat(e.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Fe})}catch(e){}var r=!0,n=!1,i=void 0;try{for(var a,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=t(ie)(a.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var f=this.getOrInitializeService({instanceIdentifier:l});c.resolve(f)}catch(e){}}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(e.instances.values()),r.next=3,Promise.all(t(Q)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(t(Q)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.options,n=void 0===r?{}:r,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error("".concat(this.name,"(").concat(i,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var a=this.getOrInitializeService({instanceIdentifier:i,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var f=t(ie)(c.value,2),h=f[0],d=f[1],p=this.normalizeInstanceIdentifier(h);i===p&&d.resolve(a)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return a}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),i=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;i.add(e),this.onInitCallbacks.set(n,i);var a=this.instances.get(n);return a&&e(a,n),function(){i.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,i=!1,a=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,i=void 0===n?{}:n,a=this.instances.get(r);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Fe?void 0:t),options:i}),this.instances.set(r,a),this.instancesOptions.set(r,i),this.invokeOnInitCallbacks(a,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,a)}catch(e){}return a||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return this.component?this.component.multipleInstances?e:Fe:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,We,He=function(){"use strict";function e(r){t(d)(this,e),this.name=r,this.providers=new Map}return t(p)(e,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ve(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),e}(),qe=(d=a("8MBJY"),p=a("a2hTj"),$=a("hKHmD"),[]);(We=ze||(ze={}))[We.DEBUG=0]="DEBUG",We[We.VERBOSE=1]="VERBOSE",We[We.INFO=2]="INFO",We[We.WARN=3]="WARN",We[We.ERROR=4]="ERROR",We[We.SILENT=5]="SILENT";var Je,Ge={debug:ze.DEBUG,verbose:ze.VERBOSE,info:ze.INFO,warn:ze.WARN,error:ze.ERROR,silent:ze.SILENT},Ke=ze.INFO,Ye=(Je={},t($)(Je,ze.DEBUG,"log"),t($)(Je,ze.VERBOSE,"log"),t($)(Je,ze.INFO,"info"),t($)(Je,ze.WARN,"warn"),t($)(Je,ze.ERROR,"error"),Je),Xe=function(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];var o;if(!(r<e.logLevel)){var s=(new Date).toISOString(),u=Ye[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(e.name,":")].concat(t(Q)(i)))}},$e=function(){"use strict";function e(r){t(d)(this,e),this.name=r,this._logLevel=Ke,this._logHandler=Xe,this._userLogHandler=null,qe.push(this)}return t(p)(e,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in ze))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?Ge[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.DEBUG].concat(t(Q)(r))),this._logHandler.apply(this,[this,ze.DEBUG].concat(t(Q)(r)))}},{key:"log",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.VERBOSE].concat(t(Q)(r))),this._logHandler.apply(this,[this,ze.VERBOSE].concat(t(Q)(r)))}},{key:"info",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.INFO].concat(t(Q)(r))),this._logHandler.apply(this,[this,ze.INFO].concat(t(Q)(r)))}},{key:"warn",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.WARN].concat(t(Q)(r))),this._logHandler.apply(this,[this,ze.WARN].concat(t(Q)(r)))}},{key:"error",value:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,ze.ERROR].concat(t(Q)(r))),this._logHandler.apply(this,[this,ze.ERROR].concat(t(Q)(r)))}}]),e}();var Qe={};Object.defineProperty(Qe,"__esModule",{value:!0}),Qe.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){et.default(e,t,r[t])}))}return e};var Ze,et=(Ze=a("hKHmD"))&&Ze.__esModule?Ze:{default:Ze};var tt,rt;var nt=new WeakMap,it=new WeakMap,at=new WeakMap,ot=new WeakMap,st=new WeakMap;var ut={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return it.get(e);if("objectStoreNames"===t)return e.objectStoreNames||at.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return ft(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function ct(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return e.apply(ht(this),r),ft(nt.get(this))}:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return ft(e.apply(ht(this),r))}:function(r){for(var n=arguments.length,i=new Array(n>1?n-1:0),a=1;a<n;a++)i[a-1]=arguments[a];var o,s=(o=e).call.apply(o,[ht(this),r].concat(t(Q)(i)));return at.set(s,r.sort?r.sort():[r]),ft(s)}}function lt(e){return"function"==typeof e?ct(e):(e instanceof IDBTransaction&&function(e){if(!it.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",i),e.removeEventListener("error",a),e.removeEventListener("abort",a)},i=function(){t(),n()},a=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",i),e.addEventListener("error",a),e.addEventListener("abort",a)}));it.set(e,t)}}(e),t=e,(tt||(tt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,ut):e);var t}function ft(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",i),t.removeEventListener("error",a)},i=function(){e(ft(t.result)),n()},a=function(){r(t.error),n()};t.addEventListener("success",i),t.addEventListener("error",a)}))).then((function(e){e instanceof IDBCursor&&nt.set(e,t)})).catch((function(){})),st.set(r,t),r;var t,r;if(ot.has(e))return ot.get(e);var n=lt(e);return n!==e&&(ot.set(e,n),st.set(n,e)),n}var ht=function(e){return st.get(e)};function dt(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,i=r.upgrade,a=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=ft(s);return i&&s.addEventListener("upgradeneeded",(function(e){i(ft(s.result),e.oldVersion,e.newVersion,ft(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),a&&e.addEventListener("versionchange",(function(){return a()}))})).catch((function(){})),u}var pt=["get","getKey","getAll","getAllKeys","count"],vt=["put","add","delete","clear"],mt=new Map;function gt(e,r){if(e instanceof IDBDatabase&&!(r in e)&&"string"==typeof r){if(mt.get(r))return mt.get(r);var n=r.replace(/FromIndex$/,""),i=r!==n,a=vt.includes(n);if(n in(i?IDBIndex:IDBObjectStore).prototype&&(a||pt.includes(n))){var s,c=(s=t(o)(t(u).mark((function e(r){var o,s,c,l,f,h,d=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=d.length,s=new Array(o>1?o-1:0),c=1;c<o;c++)s[c-1]=d[c];return f=this.transaction(r,a?"readwrite":"readonly"),h=f.store,i&&(h=h.index(s.shift())),e.next=7,Promise.all([(l=h)[n].apply(l,t(Q)(s)),a&&f.done]);case 7:return e.abrupt("return",e.sent[0]);case 8:case"end":return e.stop()}}),e,this)}))),function(e){return s.apply(this,arguments)});return mt.set(r,c),c}}}ut=function(e){return t(Qe)({},e,{get:function(t,r,n){return gt(t,r)||e.get(t,r,n)},has:function(t,r){return!!gt(t,r)||e.has(t,r)}})}(ut);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var yt=function(){"use strict";function e(r){t(d)(this,e),this.container=r}return t(p)(e,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),e}();var bt,kt,wt="@firebase/app",_t="0.7.33",xt=new $e("@firebase/app"),Et="[DEFAULT]",It=(bt={},t($)(bt,wt,"fire-core"),t($)(bt,"@firebase/app-compat","fire-core-compat"),t($)(bt,"@firebase/analytics","fire-analytics"),t($)(bt,"@firebase/analytics-compat","fire-analytics-compat"),t($)(bt,"@firebase/app-check","fire-app-check"),t($)(bt,"@firebase/app-check-compat","fire-app-check-compat"),t($)(bt,"@firebase/auth","fire-auth"),t($)(bt,"@firebase/auth-compat","fire-auth-compat"),t($)(bt,"@firebase/database","fire-rtdb"),t($)(bt,"@firebase/database-compat","fire-rtdb-compat"),t($)(bt,"@firebase/functions","fire-fn"),t($)(bt,"@firebase/functions-compat","fire-fn-compat"),t($)(bt,"@firebase/installations","fire-iid"),t($)(bt,"@firebase/installations-compat","fire-iid-compat"),t($)(bt,"@firebase/messaging","fire-fcm"),t($)(bt,"@firebase/messaging-compat","fire-fcm-compat"),t($)(bt,"@firebase/performance","fire-perf"),t($)(bt,"@firebase/performance-compat","fire-perf-compat"),t($)(bt,"@firebase/remote-config","fire-rc"),t($)(bt,"@firebase/remote-config-compat","fire-rc-compat"),t($)(bt,"@firebase/storage","fire-gcs"),t($)(bt,"@firebase/storage-compat","fire-gcs-compat"),t($)(bt,"@firebase/firestore","fire-fst"),t($)(bt,"@firebase/firestore-compat","fire-fst-compat"),t($)(bt,"fire-js","fire-js"),t($)(bt,"firebase","fire-js-all"),bt),Tt=new Map,St=new Map;function Ot(e,t){try{e.container.addComponent(t)}catch(r){xt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function Rt(e){var t=e.name;if(St.has(t))return xt.debug("There were multiple attempts to register component ".concat(t,".")),!1;St.set(t,e);var r=!0,n=!1,i=void 0;try{for(var a,o=Tt.values()[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){Ot(a.value,e)}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}return!0}function At(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ct=(kt={},t($)(kt,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),t($)(kt,"bad-app-name","Illegal App name: '{$appName}"),t($)(kt,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),t($)(kt,"app-deleted","Firebase App named '{$appName}' already deleted"),t($)(kt,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),t($)(kt,"invalid-log-argument","First argument to `onLog` must be null or a function."),t($)(kt,"idb-open","Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}."),t($)(kt,"idb-get","Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}."),t($)(kt,"idb-set","Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}."),t($)(kt,"idb-delete","Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."),kt),Pt=new Se("app","Firebase",Ct),Lt=function(){"use strict";function e(r,n,i){var a=this;t(d)(this,e),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new je("app",(function(){return a}),"PUBLIC"))}return t(p)(e,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Pt.create("app-deleted",{appName:this._name})}}]),e}(),Nt="9.10.0";function Mt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et,t=Tt.get(e);if(!t)throw Pt.create("no-app",{appName:e});return t}function Dt(e,t,r){var n,i=null!==(n=It[e])&&void 0!==n?n:e;r&&(i+="-".concat(r));var a=i.match(/\s|\//),o=t.match(/\s|\//);if(a||o){var s=['Unable to register library "'.concat(i,'" with version "').concat(t,'":')];return a&&s.push('library name "'.concat(i,'" contains illegal characters (whitespace or "/")')),a&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void xt.warn(s.join(" "))}Rt(new je("".concat(i,"-version"),(function(){return{library:i,version:t}}),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Bt="firebase-heartbeat-store",Ut=null;function jt(){return Ut||(Ut=dt("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Bt)}}).catch((function(e){throw Pt.create("idb-open",{originalErrorMessage:e.message})}))),Ut}function Ft(e){return Vt.apply(this,arguments)}function Vt(){return(Vt=t(o)(t(u).mark((function e(r){var n,i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,jt();case 4:return i=e.sent,e.abrupt("return",i.transaction(Bt).objectStore(Bt).get(Ht(r)));case 8:e.prev=8,e.t0=e.catch(1),e.t0 instanceof Te?xt.warn(e.t0.message):(a=Pt.create("idb-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message}),xt.warn(a.message));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))).apply(this,arguments)}function zt(e,t){return Wt.apply(this,arguments)}function Wt(){return(Wt=t(o)(t(u).mark((function e(r,n){var i,a,o,s,c;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,jt();case 4:return a=e.sent,o=a.transaction(Bt,"readwrite"),s=o.objectStore(Bt),e.next=9,s.put(n,Ht(r));case 9:return e.abrupt("return",o.done);case 12:e.prev=12,e.t0=e.catch(1),e.t0 instanceof Te?xt.warn(e.t0.message):(c=Pt.create("idb-set",{originalErrorMessage:null===(i=e.t0)||void 0===i?void 0:i.message}),xt.warn(c.message));case 15:case"end":return e.stop()}}),e,null,[[1,12]])})))).apply(this,arguments)}function Ht(e){return"".concat(e.name,"!").concat(e.options.appId)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qt=function(){"use strict";function e(r){var n=this;t(d)(this,e),this.container=r,this._heartbeatsCache=null;var i=this.container.getProvider("app").getImmediate();this._storage=new Yt(i),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return t(p)(e,[{key:"triggerHeartbeat",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.container.getProvider("platform-logger").getImmediate(),i=n.getPlatformInfoString(),a=Jt(),null!==e._heartbeatsCache){t.next=7;break}return t.next=6,e._heartbeatsCachePromise;case 6:e._heartbeatsCache=t.sent;case 7:if(e._heartbeatsCache.lastSentHeartbeatDate!==a&&!e._heartbeatsCache.heartbeats.some((function(e){return e.date===a}))){t.next=11;break}return t.abrupt("return");case 11:e._heartbeatsCache.heartbeats.push({date:a,agent:i});case 12:return e._heartbeatsCache.heartbeats=e._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),t.abrupt("return",e._storage.overwrite(e._heartbeatsCache));case 14:case"end":return t.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i,a,o,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==e._heartbeatsCache){t.next=3;break}return t.next=3,e._heartbeatsCachePromise;case 3:if(null!==e._heartbeatsCache&&0!==e._heartbeatsCache.heartbeats.length){t.next=5;break}return t.abrupt("return","");case 5:if(n=Jt(),i=Gt(e._heartbeatsCache.heartbeats),a=i.heartbeatsToSend,o=i.unsentEntries,s=_e(JSON.stringify({version:2,heartbeats:a})),e._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){t.next=15;break}return e._heartbeatsCache.heartbeats=o,t.next=13,e._storage.overwrite(e._heartbeatsCache);case 13:t.next=16;break;case 15:e._heartbeatsCache.heartbeats=[],e._storage.overwrite(e._heartbeatsCache);case 16:return t.abrupt("return",s);case 17:case"end":return t.stop()}}),r)})))()}}]),e}();function Jt(){return(new Date).toISOString().substring(0,10)}function Gt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),i=!0,a=!1,o=void 0;try{for(var s,u=function(e,i){var a=i.value,o=r.find((function(e){return e.agent===a.agent}));if(o){if(o.dates.push(a.date),Xt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:a.agent,dates:[a.date]}),Xt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(i=(s=c.next()).done);i=!0){var l=u(c,s);if("break"===l)break}}catch(e){a=!0,o=e}finally{try{i||null==c.return||c.return()}finally{if(a)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var Kt,Yt=function(){"use strict";function e(r){t(d)(this,e),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return t(p)(e,[{key:"runIndexedDBEnvironmentCheck",value:function(){return t(o)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(n);i.onsuccess=function(){i.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},i.onupgradeneeded=function(){r=!1},i.onerror=function(){var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),e)})))()}},{key:"read",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._canUseIndexedDBPromise;case 2:if(t.sent){t.next=7;break}return t.abrupt("return",{heartbeats:[]});case 7:return t.next=9,Ft(e.app);case 9:return n=t.sent,t.abrupt("return",n||{heartbeats:[]});case 11:case"end":return t.stop()}}),r)})))()}},{key:"overwrite",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r._canUseIndexedDBPromise;case 3:if(t.sent){t.next=8;break}return t.abrupt("return");case 8:return t.next=10,r.read();case 10:return a=t.sent,t.abrupt("return",zt(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:e.heartbeats}));case 12:case"end":return t.stop()}}),n)})))()}},{key:"add",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return a=n.sent,n.abrupt("return",zt(r.app,{lastSentHeartbeatDate:null!==(i=e.lastSentHeartbeatDate)&&void 0!==i?i:a.lastSentHeartbeatDate,heartbeats:t(Q)(a.heartbeats).concat(t(Q)(e.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),e}();function Xt(e){return _e(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kt="",Rt(new je("platform-logger",(function(e){return new yt(e)}),"PRIVATE")),Rt(new je("heartbeat",(function(e){return new qt(e)}),"PRIVATE")),Dt(wt,_t,Kt),Dt(wt,_t,"esm2017"),Dt("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Dt("firebase","9.10.0","app");le=a("ds8z5"),d=a("8MBJY"),p=a("a2hTj"),$=a("hKHmD");var $t={};Object.defineProperty($t,"__esModule",{value:!0}),$t.default=function(e,t,r){return Zt(e,t,r)};var Qt=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Zt(e,t,r){return(Zt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Qt.default(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r||e):i.value}})(e,t,r)}var er=a("fVNic");fe=a("eYQtU"),be=a("2MbLg");function tr(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r}Object.create;Object.create;function rr(){return t($)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var nr=rr,ir=new Se("auth","Firebase",rr()),ar=new $e("@firebase/auth");function or(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;ar.logLevel<=ze.ERROR&&(a=ar).error.apply(a,["Auth (".concat(Nt,"): ").concat(e)].concat(t(Q)(n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];throw lr.apply(void 0,[e].concat(t(Q)(n)))}function ur(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];return lr.apply(void 0,[e].concat(t(Q)(n)))}function cr(e,r,n){var i=Object.assign(Object.assign({},nr()),t($)({},r,n));return new Se("auth","Firebase",i).create(r,{appName:e.name})}function lr(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),i=1;i<r;i++)n[i-1]=arguments[i];var a;if("string"!=typeof e){var o,s=n[0],u=t(Q)(n.slice(1));return u[0]&&(u[0].appName=e.name),(o=e._errorFactory).create.apply(o,[s].concat(t(Q)(u)))}return(a=ir).create.apply(a,[e].concat(t(Q)(n)))}function fr(e,r){for(var n=arguments.length,i=new Array(n>2?n-2:0),a=2;a<n;a++)i[a-2]=arguments[a];if(!e)throw lr.apply(void 0,[r].concat(t(Q)(i)))}function hr(e){var t="INTERNAL ASSERTION FAILED: "+e;throw or(t),new Error(t)}function dr(e,t){e||hr(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pr=new Map;function vr(e){dr(e instanceof Function,"Expected a class definition");var t=pr.get(e);return t?(dr(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,pr.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(e,t){var r=At(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(Ce(r.getOptions(),null!=t?t:{}))return n;sr(n,"already-initialized")}return r.initialize({options:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function gr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function yr(){return"http:"===br()||"https:"===br()}function br(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!yr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var wr=function(){"use strict";function e(r,n){t(d)(this,e),this.shortDelay=r,this.longDelay=n,dr(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())||"object"==typeof navigator&&"ReactNative"===navigator.product}return t(p)(e,[{key:"get",value:function(){return kr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(e,t){dr(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr,Er=function(){"use strict";function e(){t(d)(this,e)}return t(p)(e,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void hr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void hr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void hr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),e}(),Ir=(xr={},t($)(xr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),t($)(xr,"MISSING_CUSTOM_TOKEN","internal-error"),t($)(xr,"INVALID_IDENTIFIER","invalid-email"),t($)(xr,"MISSING_CONTINUE_URI","internal-error"),t($)(xr,"INVALID_PASSWORD","wrong-password"),t($)(xr,"MISSING_PASSWORD","internal-error"),t($)(xr,"EMAIL_EXISTS","email-already-in-use"),t($)(xr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),t($)(xr,"INVALID_IDP_RESPONSE","invalid-credential"),t($)(xr,"INVALID_PENDING_TOKEN","invalid-credential"),t($)(xr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),t($)(xr,"MISSING_REQ_TYPE","internal-error"),t($)(xr,"EMAIL_NOT_FOUND","user-not-found"),t($)(xr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),t($)(xr,"EXPIRED_OOB_CODE","expired-action-code"),t($)(xr,"INVALID_OOB_CODE","invalid-action-code"),t($)(xr,"MISSING_OOB_CODE","internal-error"),t($)(xr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),t($)(xr,"INVALID_ID_TOKEN","invalid-user-token"),t($)(xr,"TOKEN_EXPIRED","user-token-expired"),t($)(xr,"USER_NOT_FOUND","user-token-expired"),t($)(xr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),t($)(xr,"INVALID_CODE","invalid-verification-code"),t($)(xr,"INVALID_SESSION_INFO","invalid-verification-id"),t($)(xr,"INVALID_TEMPORARY_PROOF","invalid-credential"),t($)(xr,"MISSING_SESSION_INFO","missing-verification-id"),t($)(xr,"SESSION_EXPIRED","code-expired"),t($)(xr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),t($)(xr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),t($)(xr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),t($)(xr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),t($)(xr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),t($)(xr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),t($)(xr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),t($)(xr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),t($)(xr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),t($)(xr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),t($)(xr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),xr),Tr=new wr(3e4,6e4);function Sr(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function Or(e,t,r,n){return Rr.apply(this,arguments)}function Rr(){return Rr=t(o)(t(u).mark((function e(r,n,i,a){var s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=c.length>4&&void 0!==c[4]?c[4]:{},e.abrupt("return",Ar(r,s,t(o)(t(u).mark((function e(){var o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},a&&("GET"===n?s=a:o={body:JSON.stringify(a)}),c=Le(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(l=e.sent)["Content-Type"]="application/json",r.languageCode&&(l["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",Er.fetch()(Nr(r,r.config.apiHost,i,c),Object.assign({method:n,headers:l,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),e)})))));case 2:case"end":return e.stop()}}),e)}))),Rr.apply(this,arguments)}function Ar(e,t,r){return Cr.apply(this,arguments)}function Cr(){return(Cr=t(o)(t(u).mark((function e(r,n,i){var a,o,s,c,l,f,h,d,p;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r._canInitEmulator=!1,a=Object.assign(Object.assign({},Ir),n),e.prev=2,o=new Mr(r),e.next=6,Promise.race([i(),o.promise]);case 6:return s=e.sent,o.clearNetworkTimeout(),e.next=10,s.json();case 10:if(!("needConfirmation"in(c=e.sent))){e.next=13;break}throw Dr(r,"account-exists-with-different-credential",c);case 13:if(!s.ok||"errorMessage"in c){e.next=17;break}return e.abrupt("return",c);case 17:if(l=s.ok?c.errorMessage:c.error.message,f=t(ie)(l.split(" : "),2),h=f[0],d=f[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==h){e.next=23;break}throw Dr(r,"credential-already-in-use",c);case 23:if("EMAIL_EXISTS"!==h){e.next=27;break}throw Dr(r,"email-already-in-use",c);case 27:if("USER_DISABLED"!==h){e.next=29;break}throw Dr(r,"user-disabled",c);case 29:if(p=a[h]||h.toLowerCase().replace(/[_\s]+/g,"-"),!d){e.next=34;break}throw cr(r,p,d);case 34:sr(r,p);case 35:e.next=42;break;case 37:if(e.prev=37,e.t0=e.catch(2),!(e.t0 instanceof Te)){e.next=41;break}throw e.t0;case 41:sr(r,"network-request-failed");case 42:case"end":return e.stop()}}),e,null,[[2,37]])})))).apply(this,arguments)}function Pr(e,t,r,n){return Lr.apply(this,arguments)}function Lr(){return Lr=t(o)(t(u).mark((function e(r,n,i,a){var o,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=c.length>4&&void 0!==c[4]?c[4]:{},e.next=3,Or(r,n,i,a,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&sr(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)}))),Lr.apply(this,arguments)}function Nr(e,t,r,n){var i="".concat(t).concat(r,"?").concat(n);return e.config.emulator?_r(e.config,i):"".concat(e.config.apiScheme,"://").concat(i)}var Mr=function(){"use strict";function e(r){var n=this;t(d)(this,e),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(ur(r.auth,"network-request-failed"))}),Tr.get())}))}return t(p)(e,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),e}();function Dr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var i=ur(e,t,n);return i.customData._tokenResponse=r,i}function Br(e,t){return Ur.apply(this,arguments)}function Ur(){return(Ur=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function jr(e,t){return Fr.apply(this,arguments)}function Fr(){return(Fr=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return zr=t(o)(t(u).mark((function e(r){var n,i,a,o,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]&&l[1],i=Ue(r),e.next=4,i.getIdToken(n);case 4:return a=e.sent,fr((o=Hr(a))&&o.exp&&o.auth_time&&o.iat,i.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,c=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:a,authTime:Vr(Wr(o.auth_time)),issuedAtTime:Vr(Wr(o.iat)),expirationTime:Vr(Wr(o.exp)),signInProvider:c||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),e)}))),zr.apply(this,arguments)}function Wr(e){return 1e3*Number(e)}function Hr(e){var r,n=t(ie)(e.split("."),3),i=n[0],a=n[1],o=n[2];if(void 0===i||void 0===a||void 0===o)return or("JWT malformed, contained fewer than 3 sections"),null;try{var s=xe(a);return s?JSON.parse(s):(or("Failed to decode base64 JWT payload"),null)}catch(e){return or("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function qr(e,t){return Jr.apply(this,arguments)}function Jr(){return Jr=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){var i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(i.length>2&&void 0!==i[2]&&i[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof Te&&Gr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),e,null,[[3,9]])}))),Jr.apply(this,arguments)}function Gr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kr=function(){"use strict";function e(r){t(d)(this,e),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return t(p)(e,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(e),n=this;this.timerId=setTimeout(t(o)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),e)}))),r)}}},{key:"iteration",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,e.user.getIdToken(!0);case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(n=t.t0)||void 0===n?void 0:n.code)&&e.schedule(!0),t.abrupt("return");case 10:e.schedule();case 11:case"end":return t.stop()}}),r,null,[[1,6]])})))()}}]),e}(),Yr=function(){"use strict";function e(r,n){t(d)(this,e),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return t(p)(e,[{key:"_initializeTime",value:function(){this.lastSignInTime=Vr(this.lastLoginAt),this.creationTime=Vr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(e){return $r.apply(this,arguments)}function $r(){return($r=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r){var n,i,a,o,s,c,l,f,h,d,p;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.auth,e.next=4,r.getIdToken();case 4:return a=e.sent,e.next=7,qr(r,jr(i,{idToken:a}));case 7:fr(null==(o=e.sent)?void 0:o.users.length,i,"internal-error"),s=o.users[0],r._notifyReloadListener(s),c=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?en(s.providerUserInfo):[],l=Zr(r.providerData,c),f=r.isAnonymous,h=!(r.email&&s.passwordHash||(null==l?void 0:l.length)),d=!!f&&h,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Yr(s.createdAt,s.lastLoginAt),isAnonymous:d},Object.assign(r,p);case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Qr(){return(Qr=t(o)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Ue(r),e.next=3,Xr(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Zr(e,r){var n=e.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return t(Q)(n).concat(t(Q)(r))}function en(e){return e.map((function(e){var t=e.providerId,r=tr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function tn(e,t){return rn.apply(this,arguments)}function rn(){return(rn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ar(r,{},t(o)(t(u).mark((function e(){var i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Le({grant_type:"refresh_token",refresh_token:n}).slice(1),a=r.config,o=a.tokenApiHost,s=a.apiKey,c=Nr(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(l=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",Er.fetch()(c,{method:"POST",headers:l,body:i}));case 8:case"end":return e.stop()}}),e)}))));case 2:return i=e.sent,e.abrupt("return",{accessToken:i.access_token,expiresIn:i.expires_in,refreshToken:i.refresh_token});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var nn=function(){"use strict";function e(){t(d)(this,e),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return t(p)(e,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){fr(e.idToken,"internal-error"),fr(void 0!==e.idToken,"internal-error"),fr(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,fr(r=Hr(t),"internal-error"),fr(void 0!==r.exp,"internal-error"),fr(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(fr(!n.accessToken||n.refreshToken,e,"user-token-expired"),r||!n.accessToken||n.isExpired){t.next=3;break}return t.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){t.next=7;break}return t.next=6,n.refresh(e,n.refreshToken);case 6:return t.abrupt("return",n.accessToken);case 7:return t.abrupt("return",null);case 8:case"end":return t.stop()}}),i)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(e,r){var n=this;return t(o)(t(u).mark((function i(){var a,o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,tn(e,r);case 2:a=t.sent,o=a.accessToken,s=a.refreshToken,c=a.expiresIn,n.updateTokensAndExpiration(o,s,Number(c));case 7:case"end":return t.stop()}}),i)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new e,this.toJSON())}},{key:"_performRefresh",value:function(){return hr("not implemented")}}],[{key:"fromJSON",value:function(t,r){var n=r.refreshToken,i=r.accessToken,a=r.expirationTime,o=new e;return n&&(fr("string"==typeof n,"internal-error",{appName:t}),o.refreshToken=n),i&&(fr("string"==typeof i,"internal-error",{appName:t}),o.accessToken=i),a&&(fr("number"==typeof a,"internal-error",{appName:t}),o.expirationTime=a),o}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){fr("string"==typeof e||void 0===e,"internal-error",{appName:t})}var on=function(){"use strict";function e(r){t(d)(this,e);var n=r.uid,i=r.auth,a=r.stsTokenManager,o=tr(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Kr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?t(Q)(o.providerData):[],this.metadata=new Yr(o.createdAt||void 0,o.lastLoginAt||void 0)}return t(p)(e,[{key:"getIdToken",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,qr(r,r.stsTokenManager.getToken(r.auth,e));case 2:if(fr(i=t.sent,r.auth,"internal-error"),r.accessToken===i){t.next=9;break}return r.accessToken=i,t.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return t.abrupt("return",i);case 10:case"end":return t.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return zr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Qr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(fr(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(t){return new e(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){fr(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(u).mark((function i(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=!1,e.idToken&&e.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(e),a=!0),!r){t.next=5;break}return t.next=5,Xr(n);case 5:return t.next=7,n.auth._persistUserIfCurrent(n);case 7:a&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return t.stop()}}),i)})))()}},{key:"delete",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getIdToken();case 2:return n=t.sent,t.next=5,qr(e,Br(e.auth,{idToken:n}));case 5:return e.stsTokenManager.clearRefreshToken(),t.abrupt("return",e.auth.signOut());case 7:case"end":return t.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(t,r){var n,i,a,o,s,u,c,l,f=null!==(n=r.displayName)&&void 0!==n?n:void 0,h=null!==(i=r.email)&&void 0!==i?i:void 0,d=null!==(a=r.phoneNumber)&&void 0!==a?a:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,b=r.uid,k=r.emailVerified,w=r.isAnonymous,_=r.providerData,x=r.stsTokenManager;fr(b&&x,t,"internal-error");var E=nn.fromJSON(this.name,x);fr("string"==typeof b,t,"internal-error"),an(f,t.name),an(h,t.name),fr("boolean"==typeof k,t,"internal-error"),fr("boolean"==typeof w,t,"internal-error"),an(d,t.name),an(p,t.name),an(v,t.name),an(m,t.name),an(g,t.name),an(y,t.name);var I=new e({uid:b,auth:t,email:h,emailVerified:k,displayName:f,isAnonymous:w,photoURL:p,phoneNumber:d,tenantId:v,stsTokenManager:E,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(I.providerData=_.map((function(e){return Object.assign({},e)}))),m&&(I._redirectEventId=m),I}},{key:"_fromIdTokenResponse",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(o)(t(u).mark((function a(){var o,s;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(o=new nn).updateFromServerResponse(n),s=new e({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:i}),t.next=5,Xr(s);case 5:return t.abrupt("return",s);case 6:case"end":return t.stop()}}),a)})))()}}]),e}(),sn=function(){"use strict";function e(){t(d)(this,e),this.type="NONE",this.storage={}}return t(p)(e,[{key:"_isAvailable",value:function(){return t(o)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),e)})))()}},{key:"_set",value:function(e,r){var n=this;return t(o)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.storage[e]=r;case 1:case"end":return t.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=r.storage[e],t.abrupt("return",void 0===i?null:i);case 2:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:delete r.storage[e];case 1:case"end":return t.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sn.type="NONE";var un=sn;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var ln=function(){"use strict";function e(r,n,i){t(d)(this,e),this.persistence=r,this.auth=n,this.userKey=i;var a=this.auth,o=a.config,s=a.name;this.fullUserKey=cn(this.userKey,o.apiKey,s),this.fullPersistenceKey=cn("persistence",o.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return t(p)(e,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.persistence._get(e.fullUserKey);case 2:return n=t.sent,t.abrupt("return",n?on._fromJSON(e.auth,n):null);case 4:case"end":return t.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.persistence!==e){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,r.getCurrentUser();case 4:return i=t.sent,t.next=7,r.removeCurrentUser();case 7:if(r.persistence=e,!i){t.next=10;break}return t.abrupt("return",r.setCurrentUser(i));case 10:case"end":return t.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return t(o)(t(u).mark((function a(){var s,c,l,f,h,d,p,v,m,g,y,b,k;return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.length){a.next=2;break}return a.abrupt("return",new e(vr(un),r,i));case 2:return a.next=4,Promise.all(n.map(function(){var e=t(o)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 4:s=a.sent.filter((function(e){return e})),c=s[0]||vr(un),l=cn(i,r.config.apiKey,r.name),f=null,h=!0,d=!1,p=void 0,a.prev=9,v=n[Symbol.iterator]();case 11:if(h=(m=v.next()).done){a.next=29;break}return g=m.value,a.prev=13,a.next=16,g._get(l);case 16:if(!(y=a.sent)){a.next=22;break}return b=on._fromJSON(r,y),g!==c&&(f=b),c=g,a.abrupt("break",29);case 22:a.next=26;break;case 24:a.prev=24,a.t0=a.catch(13);case 26:h=!0,a.next=11;break;case 29:a.next=35;break;case 31:a.prev=31,a.t1=a.catch(9),d=!0,p=a.t1;case 35:a.prev=35,a.prev=36,h||null==v.return||v.return();case 38:if(a.prev=38,!d){a.next=41;break}throw p;case 41:return a.finish(38);case 42:return a.finish(35);case 43:if(k=s.filter((function(e){return e._shouldAllowMigration})),c._shouldAllowMigration&&k.length){a.next=46;break}return a.abrupt("return",new e(c,r,i));case 46:if(c=k[0],!f){a.next=50;break}return a.next=50,c._set(l,f.toJSON());case 50:return a.next=52,Promise.all(n.map(function(){var e=t(o)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===c){e.next=8;break}return e.prev=1,e.next=4,r._remove(l);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}()));case 52:return a.abrupt("return",new e(c,r,i));case 53:case"end":return a.stop()}}),a,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(vn(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(hn(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gn(t))return"Blackberry";if(yn(t))return"Webos";if(dn(t))return"Safari";if((t.includes("chrome/")||pn(t))&&!t.includes("edge/"))return"Chrome";if(mn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function hn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/firefox\//i.test(e)}function dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function pn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/crios\//i.test(e)}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/iemobile/i.test(e)}function mn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/android/i.test(e)}function gn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/blackberry/i.test(e)}function yn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/webos/i.test(e)}function bn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function kn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return bn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function wn(){return((e=Ie()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function _n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie();return bn(e)||mn(e)||yn(e)||gn(e)||/windows phone/i.test(e)||vn(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=fn(Ie());break;case"Worker":t="".concat(fn(Ie()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(Nt,"/").concat(n)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var En=function(){"use strict";function e(r){t(d)(this,e),this.auth=r,this.queue=[]}return t(p)(e,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var i=this.queue.length-1;return function(){r.queue[i]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a,o,s,c,l,f,h,d,p,v,m,g,y;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.auth.currentUser!==e){t.next=3;break}return t.abrupt("return");case 3:a=[],t.prev=4,o=!0,s=!1,c=void 0,t.prev=6,l=r.queue[Symbol.iterator]();case 8:if(o=(f=l.next()).done){t.next=16;break}return h=f.value,t.next=12,h(e);case 12:h.onAbort&&a.push(h.onAbort);case 13:o=!0,t.next=8;break;case 16:t.next=22;break;case 18:t.prev=18,t.t0=t.catch(6),s=!0,c=t.t0;case 22:t.prev=22,t.prev=23,o||null==l.return||l.return();case 25:if(t.prev=25,!s){t.next=28;break}throw c;case 28:return t.finish(25);case 29:return t.finish(22);case 30:t.next=53;break;case 32:for(t.prev=32,t.t1=t.catch(4),a.reverse(),d=!0,p=!1,v=void 0,t.prev=36,m=a[Symbol.iterator]();!(d=(g=m.next()).done);d=!0){y=g.value;try{y()}catch(e){}}t.next=44;break;case 40:t.prev=40,t.t2=t.catch(36),p=!0,v=t.t2;case 44:t.prev=44,t.prev=45,d||null==m.return||m.return();case 47:if(t.prev=47,!p){t.next=50;break}throw v;case 50:return t.finish(47);case 51:return t.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(i=t.t1)||void 0===i?void 0:i.message});case 53:case"end":return t.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),e}(),In=function(){"use strict";function e(r,n,i){t(d)(this,e),this.app=r,this.heartbeatServiceProvider=n,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sn(this),this.idTokenSubscription=new Sn(this),this.beforeStateQueue=new En(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ir,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=i.sdkClientVersion}return t(p)(e,[{key:"_initializeWithPersistence",value:function(e,r){r&&(this._popupRedirectResolver=vr(r));var n=this;return this._initializationPromise=this.queue(t(o)(t(u).mark((function i(){var a,o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!n._deleted){t.next=3;break}return t.abrupt("return");case 3:return t.next=5,ln.create(n,e);case 5:if(n.persistenceManager=t.sent,!n._deleted){t.next=8;break}return t.abrupt("return");case 8:if(!(null===(a=n._popupRedirectResolver)||void 0===a?void 0:a._shouldInitProactively)){t.next=16;break}return t.prev=9,t.next=12,n._popupRedirectResolver._initialize(n);case 12:t.next=16;break;case 14:t.prev=14,t.t0=t.catch(9);case 16:return t.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){t.next=21;break}return t.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return t.stop()}}),i,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e._deleted){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,e.assertedPersistence.getCurrentUser();case 4:if(n=t.sent,e.currentUser||n){t.next=7;break}return t.abrupt("return");case 7:if(!e.currentUser||!n||e.currentUser.uid!==n.uid){t.next=12;break}return e._currentUser._assign(n),t.next=11,e.currentUser.getIdToken();case 11:return t.abrupt("return");case 12:return t.next=14,e._updateCurrentUser(n,!0);case 14:case"end":return t.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a,o,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,r.assertedPersistence.getCurrentUser();case 3:if(a=t.sent,o=a,s=!1,!e||!r.config.authDomain){t.next=15;break}return t.next=9,r.getOrInitRedirectPersistenceManager();case 9:return c=null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId,l=null==o?void 0:o._redirectEventId,t.next=13,r.tryRedirectSignIn(e);case 13:f=t.sent,c&&c!==l||!(null==f?void 0:f.user)||(o=f.user,s=!0);case 15:if(o){t.next=17;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){t.next=33;break}if(!s){t.next=28;break}return t.prev=19,t.next=22,r.beforeStateQueue.runMiddleware(o);case 22:t.next=28;break;case 24:t.prev=24,t.t0=t.catch(19),o=a,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(t.t0)}));case 28:if(!o){t.next=32;break}return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return t.abrupt("return",r.directlySetCurrentUser(null));case 33:return fr(r._popupRedirectResolver,r,"argument-error"),t.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){t.next=38;break}return t.abrupt("return",r.directlySetCurrentUser(o));case 38:return t.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return t.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=null,t.prev=1,t.next=4,r._popupRedirectResolver._completeRedirectFn(r,e,!0);case 4:i=t.sent,t.next=11;break;case 7:return t.prev=7,t.t0=t.catch(1),t.next=11,r._setRedirectUser(null);case 11:return t.abrupt("return",i);case 12:case"end":return t.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=1,t.next=4,Xr(e);case 4:t.next=10;break;case 6:if(t.prev=6,t.t0=t.catch(1),"auth/network-request-failed"===(null===(i=t.t0)||void 0===i?void 0:i.code)){t.next=10;break}return t.abrupt("return",r.directlySetCurrentUser(null));case 10:return t.abrupt("return",r.directlySetCurrentUser(e));case 11:case"end":return t.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var e=this;return t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e._deleted=!0;case 1:case"end":return t.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(i=e?Ue(e):null)&&fr(i.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),t.abrupt("return",r._updateCurrentUser(i&&i._clone(r)));case 3:case"end":return t.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return t(o)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(!n._deleted){i.next=2;break}return i.abrupt("return");case 2:if(e&&fr(n.tenantId===e.tenantId,n,"tenant-id-mismatch"),r){i.next=6;break}return i.next=6,n.beforeStateQueue.runMiddleware(e);case 6:return i.abrupt("return",n.queue(t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.directlySetCurrentUser(e);case 2:n.notifyAuthListeners();case 3:case"end":return t.stop()}}),r)})))));case 7:case"end":return i.stop()}}),i)})))()}},{key:"signOut",value:function(){var e=this;return t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.beforeStateQueue.runMiddleware(null);case 2:if(!e.redirectPersistenceManager&&!e._popupRedirectResolver){t.next=5;break}return t.next=5,e._setRedirectUser(null);case 5:return t.abrupt("return",e._updateCurrentUser(null,!0));case 6:case"end":return t.stop()}}),r)})))()}},{key:"setPersistence",value:function(e){var r=this;return this.queue(t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.assertedPersistence.setPersistence(vr(e));case 2:case"end":return t.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new Se("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(e,r){var n=this;return t(o)(t(u).mark((function i(){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return a=t.sent,t.abrupt("return",null===e?a.removeCurrentUser():a.setCurrentUser(e));case 4:case"end":return t.stop()}}),i)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.redirectPersistenceManager){t.next=9;break}return fr(i=e&&vr(e)||r._popupRedirectResolver,r,"argument-error"),t.next=5,ln.create(r,[vr(i._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=t.sent,t.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=t.sent;case 9:return t.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return t.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(t(o)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)}))));case 4:if((null===(i=r._currentUser)||void 0===i?void 0:i._redirectEventId)!==e){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId)!==e){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",r.directlySetCurrentUser(e));case 1:case"end":return t.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var i=this;if(this._deleted)return function(){};var a="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return fr(o,this,"internal-error"),o.then((function(){return a(i.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.currentUser&&r.currentUser!==e&&r._currentUser._stopProactiveRefresh(),e&&r.isProactiveRefreshEnabled&&e._startProactiveRefresh(),r.currentUser=e,!e){t.next=8;break}return t.next=6,r.assertedPersistence.setCurrentUser(e);case 6:t.next=10;break;case 8:return t.next=10,r.assertedPersistence.removeCurrentUser();case 10:case"end":return t.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return fr(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=xn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i,a;return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return i=t($)({},"X-Client-Version",e.clientVersion),e.app.options.appId&&(i["X-Firebase-gmpid"]=e.app.options.appId),r.next=5,null===(n=e.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(a=r.sent)&&(i["X-Firebase-Client"]=a),r.abrupt("return",i);case 8:case"end":return r.stop()}}),r)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(e){return Ue(e)}var Sn=function(){"use strict";function e(r){var n,i,a=this;t(d)(this,e),this.auth=r,this.observer=null,this.addObserver=(i=new De((function(e){return a.observer=e}),n)).subscribe.bind(i)}return t(p)(e,[{key:"next",get:function(){return fr(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var On=function(){"use strict";function e(r,n){t(d)(this,e),this.providerId=r,this.signInMethod=n}return t(p)(e,[{key:"toJSON",value:function(){return hr("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return hr("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return hr("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return hr("not implemented")}}]),e}();function Rn(e,t){return An.apply(this,arguments)}function An(){return(An=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Cn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithPassword",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ln(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithEmailLink",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Mn(e,t){return Dn.apply(this,arguments)}function Dn(){return(Dn=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithEmailLink",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bn=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e,i,a){var o,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t(d)(this,n),(o=r.call(this,"password",a))._email=e,o._password=i,o._tenantId=s,o}return t(p)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=r.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Cn(e,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return t.abrupt("return",Ln(e,{email:r._email,oobCode:r._password}));case 5:sr(e,"internal-error");case 6:case"end":return t.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(e,r){var n=this;return t(o)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=n.signInMethod,t.next="password"===t.t0?3:"emailLink"===t.t0?4:5;break;case 3:return t.abrupt("return",Rn(e,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return t.abrupt("return",Mn(e,{idToken:r,email:n._email,oobCode:n._password}));case 5:sr(e,"internal-error");case 6:case"end":return t.stop()}}),i)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(On);function Un(e,t){return jn.apply(this,arguments)}function jn(){return(jn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithIdp",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fn=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){var e;return t(d)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,e}return t(p)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Un(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Un(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Un(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Le(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):sr("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,i=t.signInMethod,a=tr(t,["providerId","signInMethod"]);if(!r||!i)return null;var o=new n(r,i);return o.idToken=a.idToken||void 0,o.accessToken=a.accessToken||void 0,o.secret=a.secret,o.nonce=a.nonce,o.pendingToken=a.pendingToken||null,o}}]),n}(On);function Vn(e,t){return zn.apply(this,arguments)}function zn(){return(zn=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Or(r,"POST","/v1/accounts:sendVerificationCode",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Wn(){return(Wn=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hn(){return(Hn=t(o)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",Sr(r,n));case 2:if(!(i=e.sent).temporaryProof){e.next=5;break}throw Dr(r,"account-exists-with-different-credential",i);case 5:return e.abrupt("return",i);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var qn=t($)({},"USER_NOT_FOUND","user-not-found");function Jn(){return(Jn=t(o)(t(u).mark((function e(r,n){var i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Pr(r,"POST","/v1/accounts:signInWithPhoneNumber",Sr(r,i),qn));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Gn=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e){var i;return t(d)(this,n),(i=r.call(this,"phone","phone")).params=e,i}return t(p)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Wn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Hn.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return Jn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,i=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:i}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,i=e.phoneNumber,a=e.temporaryProof;return r||t||i||a?new n({verificationId:t,verificationCode:r,phoneNumber:i,temporaryProof:a}):null}}]),n}(On);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kn=function(){"use strict";function e(r){var n,i,a,o,s,u;t(d)(this,e);var c=Ne(Me(r)),l=null!==(n=c.apiKey)&&void 0!==n?n:null,f=null!==(i=c.oobCode)&&void 0!==i?i:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(a=c.mode)&&void 0!==a?a:null);fr(l&&f&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=f,this.continueUrl=null!==(o=c.continueUrl)&&void 0!==o?o:null,this.languageCode=null!==(s=c.languageCode)&&void 0!==s?s:null,this.tenantId=null!==(u=c.tenantId)&&void 0!==u?u:null}return t(p)(e,null,[{key:"parseLink",value:function(t){var r=function(e){var t=Ne(Me(e)).link,r=t?Ne(Me(t)).deep_link_id:null,n=Ne(Me(e)).deep_link_id;return(n?Ne(Me(n)).link:null)||n||r||t||e}(t);try{return new e(r)}catch(e){return null}}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Yn=function(){"use strict";function e(){t(d)(this,e),this.providerId=e.PROVIDER_ID}return t(p)(e,null,[{key:"credential",value:function(e,t){return Bn._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Kn.parseLink(t);return fr(r,"argument-error"),Bn._fromEmailAndCode(e,r.code,r.tenantId)}}]),e}();Yn.PROVIDER_ID="password",Yn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Yn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Xn=function(){"use strict";function e(r){t(d)(this,e),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return t(p)(e,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),e}(),$n=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){var e;return t(d)(this,n),(e=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],e}return t(p)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return t(Q)(this.scopes)}}]),n}(Xn),Qn=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){return t(d)(this,n),r.call(this,"facebook.com")}return t(p)(n,null,[{key:"credential",value:function(e){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}($n);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Qn.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Zn=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){var e;return t(d)(this,n),(e=r.call(this,"google.com")).addScope("profile"),e}return t(p)(n,null,[{key:"credential",value:function(e,t){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,i=t.oauthAccessToken;if(!r&&!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}($n);Zn.GOOGLE_SIGN_IN_METHOD="google.com",Zn.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ei=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){return t(d)(this,n),r.call(this,"github.com")}return t(p)(n,null,[{key:"credential",value:function(e){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}($n);ei.GITHUB_SIGN_IN_METHOD="github.com",ei.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ti=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){return t(d)(this,n),r.call(this,"twitter.com")}return t(p)(n,null,[{key:"credential",value:function(e,t){return Fn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,i=t.oauthTokenSecret;if(!r||!i)return null;try{return n.credential(r,i)}catch(e){return null}}}]),n}($n);function ri(e,t){return ni.apply(this,arguments)}function ni(){return(ni=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Pr(r,"POST","/v1/accounts:signUp",Sr(r,n)));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ti.TWITTER_SIGN_IN_METHOD="twitter.com",ti.PROVIDER_ID="twitter.com";var ii=function(){"use strict";function e(r){t(d)(this,e),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return t(p)(e,null,[{key:"_fromIdTokenResponse",value:function(r,n,i){var a=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t(o)(t(u).mark((function o(){var s,c,l;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,on._fromIdTokenResponse(r,i,a);case 2:return s=t.sent,c=ai(i),l=new e({user:s,providerId:c,_tokenResponse:i,operationType:n}),t.abrupt("return",l);case 6:case"end":return t.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,i){return t(o)(t(u).mark((function a(){var o;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._updateTokensIfNecessary(i,!0);case 2:return o=ai(i),t.abrupt("return",new e({user:r,providerId:o,_tokenResponse:i,operationType:n}));case 4:case"end":return t.stop()}}),a)})))()}}]),e}();function ai(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var oi=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e,i,a,o){var s,u;return t(d)(this,n),(s=r.call(this,i.code,i.message)).operationType=a,s.user=o,Object.setPrototypeOf(t(le)(s),n.prototype),s.customData={appName:e.name,tenantId:null!==(u=e.tenantId)&&void 0!==u?u:void 0,_serverResponse:i.customData._serverResponse,operationType:a},s}return t(p)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,i){return new n(e,t,r,i)}}]),n}(Te);function si(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw oi._fromErrorAndOperation(e,r,t,n);throw r}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e,t){return ci.apply(this,arguments)}function ci(){return ci=t(o)(t(u).mark((function e(r,n){var i,a,o=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=o.length>2&&void 0!==o[2]&&o[2],e.t0=qr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=i,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return a=e.sent,e.abrupt("return",ii._forOperation(r,"link",a));case 14:case"end":return e.stop()}}),e)}))),ci.apply(this,arguments)}function li(e,t){return fi.apply(this,arguments)}function fi(){return fi=
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){var i,a,o,s,c,l,f,h=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=h.length>2&&void 0!==h[2]&&h[2],o=r.auth,s="reauthenticate",e.prev=4,e.next=7,qr(r,si(o,s,n,r),i);case 7:return fr((c=e.sent).idToken,o,"internal-error"),fr(l=Hr(c.idToken),o,"internal-error"),f=l.sub,fr(r.uid===f,o,"user-mismatch"),e.abrupt("return",ii._forOperation(r,s,c));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(a=e.t0)||void 0===a?void 0:a.code)&&sr(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),e,null,[[4,16]])}))),fi.apply(this,arguments)}function hi(e,t){return di.apply(this,arguments)}function di(){return di=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r,n){var i,a,o,s,c=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=c.length>2&&void 0!==c[2]&&c[2],a="signIn",e.next=4,si(r,a,n);case 4:return o=e.sent,e.next=7,ii._fromIdTokenResponse(r,a,o);case 7:if(s=e.sent,i){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)}))),di.apply(this,arguments)}function pi(e,t){return vi.apply(this,arguments)}function vi(){return(vi=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",hi(Tn(r),n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function mi(e,t,r){return gi.apply(this,arguments)}function gi(){return(gi=t(o)(t(u).mark((function e(r,n,i){var a,o,s;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Tn(r),e.next=3,ri(a,{returnSecureToken:!0,email:n,password:i});case 3:return o=e.sent,e.next=6,ii._fromIdTokenResponse(a,"signIn",o);case 6:return s=e.sent,e.next=9,a._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function yi(e,t,r){return pi(Ue(e),Yn.credential(t,r))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bi(e,t){return Ue(e).setPersistence(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ki(e,t){return Or(e,"POST","/v2/accounts/mfaEnrollment:start",Sr(e,t))}new WeakMap;var wi="__sak",_i=function(){"use strict";function e(r,n){t(d)(this,e),this.storageRetriever=r,this.type=n}return t(p)(e,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(wi,"1"),this.storage.removeItem(wi),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),e}();
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xi=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){var e,i;return t(d)(this,n),(e=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(t,r){return e.onStorageEvent(t,r)},e.listeners={},e.localCache={},e.pollTimer=null,e.safariLocalStorageNotSynced=(dn(i=Ie())||bn(i))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),e.fallbackToPolling=_n(),e._shouldAllowMigration=!0,e}return t(p)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var i,a=Object.keys(this.listeners)[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var o=i.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var a=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);wn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,10):a()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(e,r){var i=this,a=this;return t(o)(t(u).mark((function o(){return t(u).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t($t)(t(er)(n.prototype),"_set",i).call(a,e,r);case 2:a.localCache[e]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(e){var r=this,i=this;return t(o)(t(u).mark((function a(){var o;return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t($t)(t(er)(n.prototype),"_get",r).call(i,e);case 2:return o=a.sent,i.localCache[e]=JSON.stringify(o),a.abrupt("return",o);case 5:case"end":return a.stop()}}),a)})))()}},{key:"_remove",value:function(e){var r=this,i=this;return t(o)(t(u).mark((function a(){return t(u).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t($t)(t(er)(n.prototype),"_remove",r).call(i,e);case 2:delete i.localCache[e];case 3:case"end":return a.stop()}}),a)})))()}}]),n}(_i);xi.type="LOCAL";var Ei=xi,Ii=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(){return t(d)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return t(p)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(_i);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ii.type="SESSION";var Ti=Ii;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(e){return Promise.all(e.map((r=t(o)(t(u).mark((function e(r){var n;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oi=function(){"use strict";function e(r){t(d)(this,e),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return t(p)(e,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a,s,c,l,f,h,d;return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a=(i=e).data,s=a.eventId,c=a.eventType,l=a.data,null==(f=r.handlersMap[c])?void 0:f.size){n.next=5;break}return n.abrupt("return");case 5:return i.ports[0].postMessage({status:"ack",eventId:s,eventType:c}),h=Array.from(f).map(function(){var e=t(o)(t(u).mark((function e(r){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(i.origin,l));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n.next=9,Si(h);case 9:d=n.sent,i.ports[0].postMessage({status:"done",eventId:s,eventType:c,response:d});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(t){var r=this.receivers.find((function(e){return e.isListeningto(t)}));if(r)return r;var n=new e(t);return this.receivers.push(n),n}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ri(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oi.receivers=[];var Ai=function(){"use strict";function e(r){t(d)(this,e),this.target=r,this.handlers=new Set}return t(p)(e,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(e,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,i=this;return t(o)(t(u).mark((function a(){var o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){t.next=3;break}throw new Error("connection_unavailable");case 3:return t.abrupt("return",new Promise((function(t,a){var u=Ri("",20);o.port1.start();var l=setTimeout((function(){a(new Error("unsupported_event"))}),n);c={messageChannel:o,onMessage:function(e){var r=e;if(r.data.eventId===u)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),t(r.data.response);break;default:clearTimeout(l),clearTimeout(s),a(new Error("invalid_response"))}}},i.handlers.add(c),o.port1.addEventListener("message",c.onMessage),i.target.postMessage({eventType:e,eventId:u,data:r},[o.port2])})).finally((function(){c&&i.removeMessageHandler(c)})));case 6:case"end":return t.stop()}}),a)})))()}}]),e}();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pi(){return void 0!==Ci().WorkerGlobalScope&&"function"==typeof Ci().importScripts}function Li(){return Ni.apply(this,arguments)}function Ni(){return(Ni=t(o)(t(u).mark((function e(){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Mi="firebaseLocalStorageDb",Di="firebaseLocalStorage",Bi="fbase_key",Ui=function(){"use strict";function e(r){t(d)(this,e),this.request=r}return t(p)(e,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),e}();function ji(e,t){return e.transaction([Di],t?"readwrite":"readonly").objectStore(Di)}function Fi(){var e=indexedDB.deleteDatabase(Mi);return new Ui(e).toPromise()}function Vi(){var e=indexedDB.open(Mi,1);return new Promise((function(r,n){e.addEventListener("error",(function(){n(e.error)})),e.addEventListener("upgradeneeded",(function(){var t=e.result;try{t.createObjectStore(Di,{keyPath:Bi})}catch(e){n(e)}})),e.addEventListener("success",t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.result).objectStoreNames.contains(Di)){t.next=12;break}return i.close(),t.next=5,Fi();case 5:return t.t0=r,t.next=8,Vi();case 8:t.t1=t.sent,(0,t.t0)(t.t1),t.next=13;break;case 12:r(i);case 13:case"end":return t.stop()}}),n)}))))}))}function zi(e,t,r){return Wi.apply(this,arguments)}function Wi(){return(Wi=t(o)(t(u).mark((function e(r,n,i){var a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=ji(r,!0).put((a={},t($)(a,Bi,n),t($)(a,"value",i),a)),e.abrupt("return",new Ui(o).toPromise());case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Hi(e,t){return qi.apply(this,arguments)}function qi(){return(qi=t(o)(t(u).mark((function e(r,n){var i,a;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ji(r,!1).get(n),e.next=3,new Ui(i).toPromise();case 3:return a=e.sent,e.abrupt("return",void 0===a?null:a.value);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ji(e,t){var r=ji(e,!0).delete(t);return new Ui(r).toPromise()}var Gi=function(){"use strict";function e(){t(d)(this,e),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return t(p)(e,[{key:"_openDb",value:function(){var e=this;return t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.db){t.next=2;break}return t.abrupt("return",e.db);case 2:return t.next=4,Vi();case 4:return e.db=t.sent,t.abrupt("return",e.db);case 6:case"end":return t.stop()}}),r)})))()}},{key:"_withRetries",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:i=0;case 1:return t.prev=2,t.next=5,r._openDb();case 5:return a=t.sent,t.next=8,e(a);case 8:return t.abrupt("return",t.sent);case 11:if(t.prev=11,t.t0=t.catch(2),!(i++>3)){t.next=15;break}throw t.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:t.next=1;break;case 18:case"end":return t.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var e=this;return t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Pi()?e.initializeReceiver():e.initializeSender());case 1:case"end":return t.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var e=this;return t(o)(t(u).mark((function r(){return t(u).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.receiver=Oi._getInstance(Pi()?self:null),e.receiver._subscribe("keyChanged",function(){var r=t(o)(t(u).mark((function r(n,i){var a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._poll();case 2:return a=t.sent,t.abrupt("return",{keyProcessed:a.includes(i.key)});case 4:case"end":return t.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),e.receiver._subscribe("ping",function(){var e=t(o)(t(u).mark((function e(r,n){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,Li();case 3:if(e.activeServiceWorker=t.sent,e.activeServiceWorker){t.next=6;break}return t.abrupt("return");case 6:return e.sender=new Ai(e.activeServiceWorker),t.next=9,e.sender._send("ping",{},800);case 9:if(a=t.sent){t.next=12;break}return t.abrupt("return");case 12:(null===(n=a[0])||void 0===n?void 0:n.fulfilled)&&(null===(i=a[0])||void 0===i?void 0:i.value.includes("keyChanged"))&&(e.serviceWorkerReceiverAvailable=!0);case 13:case"end":return t.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){t.next=2;break}return t.abrupt("return");case 2:return t.prev=2,t.next=5,r.sender._send("keyChanged",{key:e},r.serviceWorkerReceiverAvailable?800:50);case 5:t.next=9;break;case 7:t.prev=7,t.t0=t.catch(2);case 9:case"end":return t.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return t(o)(t(u).mark((function e(){var r;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Vi();case 5:return r=e.sent,e.next=8,zi(r,wi,"1");case 8:return e.next=10,Ji(r,wi);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.pendingWrites++,t.prev=1,t.next=4,e();case 4:return t.prev=4,r.pendingWrites--,t.finish(4);case 7:case"end":return t.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(e,r){var n=this;return t(o)(t(u).mark((function i(){return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",n._withPendingWrite(t(o)(t(u).mark((function i(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n._withRetries((function(t){return zi(t,e,r)}));case 2:return n.localCache[e]=r,t.abrupt("return",n.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),i)})))));case 1:case"end":return i.stop()}}),i)})))()}},{key:"_get",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Hi(t,e)}));case 2:return i=t.sent,r.localCache[e]=i,t.abrupt("return",i);case 5:case"end":return t.stop()}}),n)})))()}},{key:"_remove",value:function(e){var r=this;return t(o)(t(u).mark((function n(){return t(u).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(t(o)(t(u).mark((function n(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r._withRetries((function(t){return Ji(t,e)}));case 2:return delete r.localCache[e],t.abrupt("return",r.notifyServiceWorker(e));case 4:case"end":return t.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n,i,a,o,s,c,l,f,h,d,p,v,m,g,y,b,k;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e._withRetries((function(e){var t=ji(e,!1).getAll();return new Ui(t).toPromise()}));case 2:if(n=t.sent){t.next=5;break}return t.abrupt("return",[]);case 5:if(0===e.pendingWrites){t.next=7;break}return t.abrupt("return",[]);case 7:for(i=[],a=new Set,o=!0,s=!1,c=void 0,t.prev=10,l=n[Symbol.iterator]();!(o=(f=l.next()).done);o=!0)h=f.value,d=h.fbase_key,p=h.value,a.add(d),JSON.stringify(e.localCache[d])!==JSON.stringify(p)&&(e.notifyListeners(d,p),i.push(d));t.next=18;break;case 14:t.prev=14,t.t0=t.catch(10),s=!0,c=t.t0;case 18:t.prev=18,t.prev=19,o||null==l.return||l.return();case 21:if(t.prev=21,!s){t.next=24;break}throw c;case 24:return t.finish(21);case 25:return t.finish(18);case 26:for(v=!0,m=!1,g=void 0,t.prev=27,y=Object.keys(e.localCache)[Symbol.iterator]();!(v=(b=y.next()).done);v=!0)k=b.value,e.localCache[k]&&!a.has(k)&&(e.notifyListeners(k,null),i.push(k));t.next=35;break;case 31:t.prev=31,t.t1=t.catch(27),m=!0,g=t.t1;case 35:t.prev=35,t.prev=36,v||null==y.return||y.return();case 38:if(t.prev=38,!m){t.next=41;break}throw g;case 41:return t.finish(38);case 42:return t.finish(35);case 43:return t.abrupt("return",i);case 44:case"end":return t.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,i=!1,a=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){i=!0,a=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw a}}}},{key:"startPolling",value:function(){this.stopPolling();var e=this;this.pollTimer=setInterval(t(o)(t(u).mark((function r(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e._poll());case 1:case"end":return t.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),e}();Gi.type="LOCAL";var Ki=Gi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yi(e,t){return Or(e,"POST","/v2/accounts/mfaSignIn:start",Sr(e,t))}function Xi(e){return new Promise((function(t,r){var n,i,a=document.createElement("script");a.setAttribute("src",e),a.onload=t,a.onerror=function(e){var t=ur("internal-error");t.customData=e,r(t)},a.type="text/javascript",a.charset="UTF-8",(null!==(i=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==i?i:document).appendChild(a)}))}function $i(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
$i("rcb"),new wr(3e4,6e4);var Qi="recaptcha";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(e,t,r){return ea.apply(this,arguments)}function ea(){return(ea=t(o)(t(u).mark((function e(r,n,i){var a,o,s,c,l,f,h,d;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,i.verify();case 3:if(o=e.sent,e.prev=4,fr("string"==typeof o,r,"argument-error"),fr(i.type===Qi,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(c=s.session,!("phoneNumber"in s)){e.next=19;break}return fr("enroll"===c.type,r,"internal-error"),e.next=15,ki(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return l=e.sent,e.abrupt("return",l.phoneSessionInfo.sessionInfo);case 19:return fr("signin"===c.type,r,"internal-error"),fr(f=(null===(a=s.multiFactorHint)||void 0===a?void 0:a.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Yi(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:o}});case 24:return h=e.sent,e.abrupt("return",h.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Vn(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return d=e.sent.sessionInfo,e.abrupt("return",d);case 32:return e.prev=32,i._reset(),e.finish(32);case 35:case"end":return e.stop()}}),e,null,[[4,,32,35]])})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ta=function(){"use strict";function e(r){t(d)(this,e),this.providerId=e.PROVIDER_ID,this.auth=Tn(r)}return t(p)(e,[{key:"verifyPhoneNumber",value:function(e,t){return Zi(this.auth,e,Ue(t))}}],[{key:"credential",value:function(e,t){return Gn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(t){var r=t;return e.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(t){return e.credentialFromTaggedObject(t.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Gn._fromTokenResponse(r,n):null}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ra(e,t){return t?vr(t):(fr(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ta.PROVIDER_ID="phone",ta.PHONE_SIGN_IN_METHOD="phone";var na=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e){var i;return t(d)(this,n),(i=r.call(this,"custom","custom")).params=e,i}return t(p)(n,[{key:"_getIdTokenResponse",value:function(e){return Un(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Un(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Un(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(On);function ia(e){return hi(e.auth,new na(e),e.bypassAuthState)}function aa(e){var t=e.auth,r=e.user;return fr(r,t,"internal-error"),li(r,new na(e),e.bypassAuthState)}function oa(e){return sa.apply(this,arguments)}function sa(){return(sa=t(o)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,fr(i=r.user,n,"internal-error"),e.abrupt("return",ui(i,new na(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ua=function(){"use strict";function e(r,n,i,a){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];t(d)(this,e),this.auth=r,this.resolver=i,this.user=a,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return t(p)(e,[{key:"execute",value:function(){var e,r=this;return new Promise((e=t(o)(t(u).mark((function e(n,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:i},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])}))),function(t,r){return e.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a,o,s,c,l,f;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.urlResponse,a=e.sessionId,o=e.postBody,s=e.tenantId,c=e.error,l=e.type,!c){t.next=4;break}return r.reject(c),t.abrupt("return");case 4:return f={auth:r.auth,requestUri:i,sessionId:a,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},t.prev=5,t.t0=r,t.next=9,r.getIdpTask(l)(f);case 9:t.t1=t.sent,t.t0.resolve.call(t.t0,t.t1),t.next=16;break;case 13:t.prev=13,t.t2=t.catch(5),r.reject(t.t2);case 16:case"end":return t.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ia;case"linkViaPopup":case"linkViaRedirect":return oa;case"reauthViaPopup":case"reauthViaRedirect":return aa;default:sr(this.auth,"internal-error")}}},{key:"resolve",value:function(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){dr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),e}(),ca=new wr(2e3,1e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var la=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e,i,a,o,s){var u;return t(d)(this,n),(u=r.call(this,e,i,o,s)).provider=a,u.authWindow=null,u.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=t(le)(u),u}return t(p)(n,[{key:"executeNotNull",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.execute();case 2:return fr(n=t.sent,e.auth,"internal-error"),t.abrupt("return",n);case 5:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){var e=this;return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return dr(1===e.filter.length,"Popup operations only handle one event"),n=Ri(),t.next=4,e.resolver._openPopup(e.auth,e.provider,e.filter[0],n);case 4:e.authWindow=t.sent,e.authWindow.associatedEvent=n,e.resolver._originValidation(e.auth).catch((function(t){e.reject(t)})),e.resolver._isIframeWebStorageSupported(e.auth,(function(t){t||e.reject(ur(e.auth,"web-storage-unsupported"))})),e.pollUserCancellation();case 9:case"end":return t.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(ur(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var i=e;e.pollId=window.setTimeout((function(){i.pollId=null,i.reject(ur(i.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ca.get())};t()}}]),n}(ua);la.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var fa=new Map,ha=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e,i){var a,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return t(d)(this,n),(a=r.call(this,e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],i,void 0,o)).eventId=null,a}return t(p)(n,[{key:"execute",value:function(){var e=this,r=this;return t(o)(t(u).mark((function i(){var a,o;return t(u).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(a=fa.get(r.auth._key())){i.next=21;break}return i.prev=2,i.next=5,da(r.resolver,r.auth);case 5:if(!i.sent){i.next=12;break}return i.next=9,t($t)(t(er)(n.prototype),"execute",e).call(r);case 9:i.t0=i.sent,i.next=13;break;case 12:i.t0=null;case 13:o=i.t0,a=function(){return Promise.resolve(o)},i.next=20;break;case 17:i.prev=17,i.t1=i.catch(2),a=function(){return Promise.reject(i.t1)};case 20:fa.set(r.auth._key(),a);case 21:return r.bypassAuthState||fa.set(r.auth._key(),(function(){return Promise.resolve(null)})),i.abrupt("return",a());case 23:case"end":return i.stop()}}),i,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(e){var r=this,i=this,a=function(){return t($t)(t(er)(n.prototype),"onAuthEvent",r)};return t(o)(t(u).mark((function r(){var n;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("signInViaRedirect"!==e.type){t.next=4;break}return t.abrupt("return",a().call(i,e));case 4:if("unknown"!==e.type){t.next=7;break}return i.resolve(null),t.abrupt("return");case 7:if(!e.eventId){t.next=17;break}return t.next=10,i.auth._redirectUserForId(e.eventId);case 10:if(!(n=t.sent)){t.next=16;break}return i.user=n,t.abrupt("return",a().call(i,e));case 16:i.resolve(null);case 17:case"end":return t.stop()}}),r)})))()}},{key:"onExecution",value:function(){return t(o)(t(u).mark((function e(){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},{key:"cleanUp",value:function(){}}]),n}(ua);function da(e,t){return pa.apply(this,arguments)}function pa(){return(pa=t(o)(t(u).mark((function e(r,n){var i,a,o;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=ga(n),a=ma(r),e.next=4,a._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,a._get(i);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,a._remove(i);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function va(e,t){fa.set(e._key(),t)}function ma(e){return vr(e._redirectPersistence)}function ga(e){return cn("pendingRedirect",e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ya(e,t){return ba.apply(this,arguments)}function ba(){return ba=t(o)(t(u).mark((function e(r,n){var i,a,o,s,c,l=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=l.length>2&&void 0!==l[2]&&l[2],a=Tn(r),o=ra(a,n),s=new ha(a,o,i),e.next=6,s.execute();case 6:if(!(c=e.sent)||i){e.next=13;break}return delete c.user._redirectEventId,e.next=11,a._persistUserIfCurrent(c.user);case 11:return e.next=13,a._setRedirectUser(null,n);case 13:return e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)}))),ba.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ka=function(){"use strict";function e(r){t(d)(this,e),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return t(p)(e,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _a(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!_a(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(ur(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(wa(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(wa(e)),this.lastProcessedEventTime=Date.now()}}]),e}();function wa(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function _a(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function xa(e){return Ea.apply(this,arguments)}function Ea(){return Ea=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
t(o)(t(u).mark((function e(r){var n,i=arguments;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},e.abrupt("return",Or(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),e)}))),Ea.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ia=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ta=/^https?/;function Sa(){return(Sa=t(o)(t(u).mark((function e(r){var n,i,a,o,s,c,l;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,xa(r);case 4:n=e.sent.authorizedDomains,i=!0,a=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(i=(c=s.next()).done){e.next=20;break}if(l=c.value,e.prev=10,!Oa(l)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:i=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),a=!0,o=e.t1;case 26:e.prev=26,e.prev=27,i||null==s.return||s.return();case 29:if(e.prev=29,!a){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:sr(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),e,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function Oa(e){var t=gr(),r=new URL(t),n=r.protocol,i=r.hostname;if(e.startsWith("chrome-extension://")){var a=new URL(e);return""===a.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&a.hostname===i}if(!Ta.test(n))return!1;if(Ia.test(e))return i===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ra=new wr(3e4,6e4);function Aa(){var e=Ci().___jsl,r=!0,n=!1,i=void 0;if(null==e?void 0:e.H)try{for(var a,o=Object.keys(e.H)[Symbol.iterator]();!(r=(a=o.next()).done);r=!0){var s=a.value;if(e.H[s].r=e.H[s].r||[],e.H[s].L=e.H[s].L||[],e.H[s].r=t(Q)(e.H[s].L),e.CP)for(var u=0;u<e.CP.length;u++)e.CP[u]=null}}catch(e){n=!0,i=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw i}}}var Ca=null;function Pa(e){return Ca=Ca||function(e){return new Promise((function(t,r){var n,i,a;function o(){Aa(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Aa(),r(ur(e,"network-request-failed"))},timeout:Ra.get()})}if(null===(i=null===(n=Ci().gapi)||void 0===n?void 0:n.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(a=Ci().gapi)||void 0===a?void 0:a.load)){var s=$i("iframefcb");return Ci()[s]=function(){gapi.load?o():r(ur(e,"network-request-failed"))},Xi("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw Ca=null,e}))}(e),Ca}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var La=new wr(5e3,15e3),Na={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ma=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Da(e){var t=e.config;fr(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?_r(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:Nt},i=Ma.get(e.config.apiHost);i&&(n.eid=i);var a=e._getFrameworks();return a.length&&(n.fw=a.join(",")),"".concat(r,"?").concat(Le(n).slice(1))}function Ba(e){return Ua.apply(this,arguments)}function Ua(){return Ua=t(o)(t(u).mark((function e(r){var n,i;return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Pa(r);case 2:return n=e.sent,fr(i=Ci().gapi,r,"internal-error"),e.abrupt("return",n.open({where:document.body,url:Da(r),messageHandlersFilter:i.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Na,dontclear:!0},(function(e){return new Promise((n=t(o)(t(u).mark((function n(i,a){var o,s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){Ci().clearTimeout(s),i(e)},t.next=3,e.restyle({setHideOnLeave:!1});case 3:o=ur(r,"network-request-failed"),s=Ci().setTimeout((function(){a(o)}),La.get()),e.ping(c).then(c,(function(){a(o)}));case 7:case"end":return t.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return e.stop()}}),e)}))),Ua.apply(this,arguments)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ja={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fa="_blank",Va="http://localhost",za=function(){"use strict";function e(r){t(d)(this,e),this.window=r,this.associatedEvent=null}return t(p)(e,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),e}();function Wa(e,r,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-a)/2,0).toString(),s=Math.max((window.screen.availWidth-i)/2,0).toString(),u="",c=Object.assign(Object.assign({},ja),{width:i.toString(),height:a.toString(),top:o,left:s}),l=Ie().toLowerCase();n&&(u=pn(l)?Fa:n),hn(l)&&(r=r||Va,c.scrollbars="yes");var f=Object.entries(c).reduce((function(e,r){var n=t(ie)(r,2),i=n[0],a=n[1];return"".concat(e).concat(i,"=").concat(a,",")}),"");if(kn(l)&&"_self"!==u)return Ha(r||"",u),new za(null);var h=window.open(r||"",u,f);fr(h,e,"popup-blocked");try{h.focus()}catch(e){}return new za(h)}function Ha(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var qa="__/auth/handler",Ja="emulator/auth/handler";function Ga(e,r,n,i,a,o){fr(e.config.authDomain,e,"auth-domain-config-required"),fr(e.config.apiKey,e,"invalid-api-key");var s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:Nt,eventId:a};if(r instanceof Xn){r.setDefaultLanguage(e.languageCode),s.providerId=r.providerId||"",Ae(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var f,h=Object.entries(o||{})[Symbol.iterator]();!(u=(f=h.next()).done);u=!0){var d=t(ie)(f.value,2),p=d[0],v=d[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==h.return||h.return()}finally{if(c)throw l}}}if(r instanceof $n){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}e.tenantId&&(s.tid=e.tenantId);var g,y,b=s,k=!0,w=!1,_=void 0;try{for(var x,E=Object.keys(b)[Symbol.iterator]();!(k=(x=E.next()).done);k=!0){var I=x.value;void 0===b[I]&&delete b[I]}}catch(e){w=!0,_=e}finally{try{k||null==E.return||E.return()}finally{if(w)throw _}}return"".concat((g=e,y=g.config,y.emulator?_r(y,Ja):"https://".concat(y.authDomain,"/").concat(qa)),"?").concat(Le(b).slice(1))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ka="webStorageSupport",Ya=function(){"use strict";function e(){t(d)(this,e),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ti,this._completeRedirectFn=ya,this._overrideRedirectResult=va}return t(p)(e,[{key:"_openPopup",value:function(e,r,n,i){var a=this;return t(o)(t(u).mark((function o(){var s,c;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return dr(null===(s=a.eventManagers[e._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),c=Ga(e,r,n,gr(),i),t.abrupt("return",Wa(e,c,Ri()));case 4:case"end":return t.stop()}}),o)})))()}},{key:"_openRedirect",value:function(e,r,n,i){var a=this;return t(o)(t(u).mark((function o(){return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a._originValidation(e);case 2:return o=Ga(e,r,n,gr(),i),Ci().location.href=o,t.abrupt("return",new Promise((function(){})));case 4:case"end":return t.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],i=n.manager,a=n.promise;return i?Promise.resolve(i):(dr(a,"If manager is not set, promise should be"),a)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i,a;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ba(e);case 2:return i=t.sent,a=new ka(e),i.register("authEvent",(function(t){return fr(null==t?void 0:t.authEvent,e,"invalid-auth-event"),{status:a.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[e._key()]={manager:a},r.iframes[e._key()]=i,t.abrupt("return",a);case 8:case"end":return t.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Ka,{type:Ka},(function(r){var n,i=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==i&&t(!!i),sr(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return Sa.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return _n()||dn()||bn()}}]),e}(),Xa=Ya,$a=function(e){"use strict";t(fe)(n,e);var r=t(be)(n);function n(e){var i;return t(d)(this,n),(i=r.call(this,"phone")).credential=e,i}return t(p)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return Or(e,"POST","/v2/accounts/mfaEnrollment:finalize",Sr(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return Or(e,"POST","/v2/accounts/mfaSignIn:finalize",Sr(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function e(r){t(d)(this,e),this.factorId=r}return t(p)(e,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return hr("unexpected MultiFactorSessionType")}}}]),e}());(function(){"use strict";function e(){t(d)(this,e)}return t(p)(e,null,[{key:"assertion",value:function(e){return $a._fromCredential(e)}}]),e}()).FACTOR_ID="phone";var Qa,Za="@firebase/auth",eo="0.20.7",to=function(){"use strict";function e(r){t(d)(this,e),this.auth=r,this.internalListeners=new Map}return t(p)(e,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(e){var r=this;return t(o)(t(u).mark((function n(){var i;return t(u).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r.assertAuthConfigured(),t.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){t.next=5;break}return t.abrupt("return",null);case 5:return t.next=7,r.auth.currentUser.getIdToken(e);case 7:return i=t.sent,t.abrupt("return",{accessToken:i});case 9:case"end":return t.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){fr(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),e}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ro(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Mt(),t=At(e,"auth");return t.isInitialized()?t.getImmediate():mr(e,{popupRedirectResolver:Xa,persistence:[Ki,Ei,Ti]})}Qa="Browser",Rt(new je("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=n.options,o=a.apiKey,s=a.authDomain;return function(e,t){fr(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),fr(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Qa,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:xn(Qa)},i=new In(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(vr);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(i,r),i}(n,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),Rt(new je("auth-internal",(function(e){var t=Tn(e.getProvider("auth").getImmediate());return new to(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(Za,eo,
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Qa)),Dt(Za,eo,"esm2017");var no=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:Et,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw Pt.create("bad-app-name",{appName:String(i)});var a=Tt.get(i);if(a){if(Ce(e,a.options)&&Ce(n,a.config))return a;throw Pt.create("duplicate-app",{appName:i})}var o=new He(i),s=!0,u=!1,c=void 0;try{for(var l,f=St.values()[Symbol.iterator]();!(s=(l=f.next()).done);s=!0){var h=l.value;o.addComponent(h)}}catch(e){u=!0,c=e}finally{try{s||null==f.return||f.return()}finally{if(u)throw c}}var d=new Lt(e,n,o);return Tt.set(i,d),d}({apiKey:"AIzaSyBMQEt78CaPaq3dSOfApmBG4vPslBGp6pQ",authDomain:"filmoteka-5bf07.firebaseapp.com",databaseURL:"https://filmoteka-5bf07-default-rtdb.europe-west1.firebasedatabase.app",projectId:"filmoteka-5bf07",storageBucket:"filmoteka-5bf07.appspot.com",messagingSenderId:"626342412224",appId:"1:626342412224:web:b02b966cc92ff4eefbd225",measurementId:"G-X5BM5EZZVP"}),io=ro(no),ao=document.querySelector(".signup"),oo=document.querySelector("#email"),so=document.querySelector("#pass"),uo=document.querySelector(".login-btn"),co=document.querySelector(".logout-btn");function lo(){return(lo=t(o)(t(u).mark((function e(r,n,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{mi(r,n,i)}catch(e){console.log(e)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function fo(){return(fo=t(o)(t(u).mark((function e(r,n,i){return t(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=ro(no),e.next=4,bi(r,Ei);case 4:return e.next=6,yi(r,n,i);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}ao.addEventListener("submit",(function(e){e.preventDefault();var t=oo.value,r=so.value;(function(e,t,r){lo.apply(this,arguments)})(io,t,r),ao.reset()})),uo.addEventListener("click",(function(e){e.preventDefault();var t=oo.value,r=so.value;(function(e,t,r){fo.apply(this,arguments)})(io,t,r),ao.reset()})),co.addEventListener("click",(function(e){e.preventDefault(),t=io,Ue(t).signOut();var t}))}();
//# sourceMappingURL=index.884e8536.js.map
