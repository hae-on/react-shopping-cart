/*! For license information please see stories-Header-stories.c69a56d6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[758],{"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}__webpack_require__.d(__webpack_exports__,{Z:function(){return _asyncToGenerator}})},"./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return _regeneratorRuntime}});var _typeof_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js");function _regeneratorRuntime(){_regeneratorRuntime=function _regeneratorRuntime(){return exports};var exports={},Op=Object.prototype,hasOwn=Op.hasOwnProperty,defineProperty=Object.defineProperty||function(obj,key,desc){obj[key]=desc.value},$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag";function define(obj,key,value){return Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}),obj[key]}try{define({},"")}catch(err){define=function define(obj,key,value){return obj[key]=value}}function wrap(innerFn,outerFn,self,tryLocsList){var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[]);return defineProperty(generator,"_invoke",{value:makeInvokeMethod(innerFn,self,context)}),generator}function tryCatch(fn,obj,arg){try{return{type:"normal",arg:fn.call(obj,arg)}}catch(err){return{type:"throw",arg:err}}}exports.wrap=wrap;var ContinueSentinel={};function Generator(){}function GeneratorFunction(){}function GeneratorFunctionPrototype(){}var IteratorPrototype={};define(IteratorPrototype,iteratorSymbol,(function(){return this}));var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])));NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype);var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype);function defineIteratorMethods(prototype){["next","throw","return"].forEach((function(method){define(prototype,method,(function(arg){return this._invoke(method,arg)}))}))}function AsyncIterator(generator,PromiseImpl){function invoke(method,arg,resolve,reject){var record=tryCatch(generator[method],generator,arg);if("throw"!==record.type){var result=record.arg,value=result.value;return value&&"object"==(0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__.Z)(value)&&hasOwn.call(value,"__await")?PromiseImpl.resolve(value.__await).then((function(value){invoke("next",value,resolve,reject)}),(function(err){invoke("throw",err,resolve,reject)})):PromiseImpl.resolve(value).then((function(unwrapped){result.value=unwrapped,resolve(result)}),(function(error){return invoke("throw",error,resolve,reject)}))}reject(record.arg)}var previousPromise;defineProperty(this,"_invoke",{value:function value(method,arg){function callInvokeWithMethodAndArg(){return new PromiseImpl((function(resolve,reject){invoke(method,arg,resolve,reject)}))}return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()}})}function makeInvokeMethod(innerFn,self,context){var state="suspendedStart";return function(method,arg){if("executing"===state)throw new Error("Generator is already running");if("completed"===state){if("throw"===method)throw arg;return doneResult()}for(context.method=method,context.arg=arg;;){var delegate=context.delegate;if(delegate){var delegateResult=maybeInvokeDelegate(delegate,context);if(delegateResult){if(delegateResult===ContinueSentinel)continue;return delegateResult}}if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){if("suspendedStart"===state)throw state="completed",context.arg;context.dispatchException(context.arg)}else"return"===context.method&&context.abrupt("return",context.arg);state="executing";var record=tryCatch(innerFn,self,context);if("normal"===record.type){if(state=context.done?"completed":"suspendedYield",record.arg===ContinueSentinel)continue;return{value:record.arg,done:context.done}}"throw"===record.type&&(state="completed",context.method="throw",context.arg=record.arg)}}}function maybeInvokeDelegate(delegate,context){var methodName=context.method,method=delegate.iterator[methodName];if(void 0===method)return context.delegate=null,"throw"===methodName&&delegate.iterator.return&&(context.method="return",context.arg=void 0,maybeInvokeDelegate(delegate,context),"throw"===context.method)||"return"!==methodName&&(context.method="throw",context.arg=new TypeError("The iterator does not provide a '"+methodName+"' method")),ContinueSentinel;var record=tryCatch(method,delegate.iterator,context.arg);if("throw"===record.type)return context.method="throw",context.arg=record.arg,context.delegate=null,ContinueSentinel;var info=record.arg;return info?info.done?(context[delegate.resultName]=info.value,context.next=delegate.nextLoc,"return"!==context.method&&(context.method="next",context.arg=void 0),context.delegate=null,ContinueSentinel):info:(context.method="throw",context.arg=new TypeError("iterator result is not an object"),context.delegate=null,ContinueSentinel)}function pushTryEntry(locs){var entry={tryLoc:locs[0]};1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],entry.afterLoc=locs[3]),this.tryEntries.push(entry)}function resetTryEntry(entry){var record=entry.completion||{};record.type="normal",delete record.arg,entry.completion=record}function Context(tryLocsList){this.tryEntries=[{tryLoc:"root"}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)}function values(iterable){if(iterable){var iteratorMethod=iterable[iteratorSymbol];if(iteratorMethod)return iteratorMethod.call(iterable);if("function"==typeof iterable.next)return iterable;if(!isNaN(iterable.length)){var i=-1,next=function next(){for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],next.done=!1,next;return next.value=void 0,next.done=!0,next};return next.next=next}}return{next:doneResult}}function doneResult(){return{value:void 0,done:!0}}return GeneratorFunction.prototype=GeneratorFunctionPrototype,defineProperty(Gp,"constructor",{value:GeneratorFunctionPrototype,configurable:!0}),defineProperty(GeneratorFunctionPrototype,"constructor",{value:GeneratorFunction,configurable:!0}),GeneratorFunction.displayName=define(GeneratorFunctionPrototype,toStringTagSymbol,"GeneratorFunction"),exports.isGeneratorFunction=function(genFun){var ctor="function"==typeof genFun&&genFun.constructor;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))},exports.mark=function(genFun){return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,define(genFun,toStringTagSymbol,"GeneratorFunction")),genFun.prototype=Object.create(Gp),genFun},exports.awrap=function(arg){return{__await:arg}},defineIteratorMethods(AsyncIterator.prototype),define(AsyncIterator.prototype,asyncIteratorSymbol,(function(){return this})),exports.AsyncIterator=AsyncIterator,exports.async=function(innerFn,outerFn,self,tryLocsList,PromiseImpl){void 0===PromiseImpl&&(PromiseImpl=Promise);var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList),PromiseImpl);return exports.isGeneratorFunction(outerFn)?iter:iter.next().then((function(result){return result.done?result.value:iter.next()}))},defineIteratorMethods(Gp),define(Gp,toStringTagSymbol,"Generator"),define(Gp,iteratorSymbol,(function(){return this})),define(Gp,"toString",(function(){return"[object Generator]"})),exports.keys=function(val){var object=Object(val),keys=[];for(var key in object)keys.push(key);return keys.reverse(),function next(){for(;keys.length;){var key=keys.pop();if(key in object)return next.value=key,next.done=!1,next}return next.done=!0,next}},exports.values=values,Context.prototype={constructor:Context,reset:function reset(skipTempReset){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(resetTryEntry),!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=void 0)},stop:function stop(){this.done=!0;var rootRecord=this.tryEntries[0].completion;if("throw"===rootRecord.type)throw rootRecord.arg;return this.rval},dispatchException:function dispatchException(exception){if(this.done)throw exception;var context=this;function handle(loc,caught){return record.type="throw",record.arg=exception,context.next=loc,caught&&(context.method="next",context.arg=void 0),!!caught}for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i],record=entry.completion;if("root"===entry.tryLoc)return handle("end");if(entry.tryLoc<=this.prev){var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc");if(hasCatch&&hasFinally){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0);if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}else if(hasCatch){if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)}else{if(!hasFinally)throw new Error("try statement without catch or finally");if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)}}}},abrupt:function abrupt(type,arg){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){var finallyEntry=entry;break}}finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null);var record=finallyEntry?finallyEntry.completion:{};return record.type=type,record.arg=arg,finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,ContinueSentinel):this.complete(record)},complete:function complete(record,afterLoc){if("throw"===record.type)throw record.arg;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,this.method="return",this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),ContinueSentinel},finish:function finish(finallyLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),resetTryEntry(entry),ContinueSentinel}},catch:function _catch(tryLoc){for(var i=this.tryEntries.length-1;i>=0;--i){var entry=this.tryEntries[i];if(entry.tryLoc===tryLoc){var record=entry.completion;if("throw"===record.type){var thrown=record.arg;resetTryEntry(entry)}return thrown}}throw new Error("illegal catch attempt")},delegateYield:function delegateYield(iterable,resultName,nextLoc){return this.delegate={iterator:values(iterable),resultName:resultName,nextLoc:nextLoc},"next"===this.method&&(this.arg=void 0),ContinueSentinel}},exports}},"./src/stories/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder}});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),meta={title:"Common/Header",component:__webpack_require__("./src/components/Common/Header.tsx").Z,tags:["autodocs"],argTypes:{}};__webpack_exports__.default=meta;var Default={args:{}};Default.parameters=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},Default.parameters),{},{docs:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_1__.Z)({originalSource:"{\n  args: {}\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./src/apis/cartProducts.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J4:function(){return postCartProduct},M6:function(){return deleteCartProduct},WJ:function(){return fetchCartProducts},Y6:function(){return patchCartProduct}});var _home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),URL="/cart-items",fetchCartProducts=function(){var _ref=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee(){var response,data;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,fetch(URL);case 2:return response=_context.sent,_context.next=5,response.json();case 5:return data=_context.sent,_context.abrupt("return",data);case 7:case"end":return _context.stop()}}),_callee)})));return function fetchCartProducts(){return _ref.apply(this,arguments)}}(),postCartProduct=function(){var _ref2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee2(id){var response,data;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.next=2,fetch(URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({productId:id})});case 2:if((response=_context2.sent).ok){_context2.next=5;break}throw new Error(response.status.toString());case 5:return _context2.next=7,response.json();case 7:return data=_context2.sent,_context2.abrupt("return",data);case 9:case"end":return _context2.stop()}}),_callee2)})));return function postCartProduct(_x){return _ref2.apply(this,arguments)}}(),patchCartProduct=function(){var _ref3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee3(id,quantity){var response,data;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:return _context3.next=2,fetch("".concat(URL,"/").concat(id),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({quantity:quantity})});case 2:if((response=_context3.sent).ok){_context3.next=5;break}throw new Error(response.status.toString());case 5:return _context3.next=7,response.json();case 7:return data=_context3.sent,_context3.abrupt("return",data);case 9:case"end":return _context3.stop()}}),_callee3)})));return function patchCartProduct(_x2,_x3){return _ref3.apply(this,arguments)}}(),deleteCartProduct=function(){var _ref4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().mark((function _callee4(id){return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_1__.Z)().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.next=2,fetch("".concat(URL,"/").concat(id),{method:"DELETE",headers:{"Content-Type":"application/json"}});case 2:case"end":return _context4.stop()}}),_callee4)})));return function deleteCartProduct(_x4){return _ref4.apply(this,arguments)}}()},"./src/assets/CartIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _styles_theme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/styles/theme.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),CartIcon=function CartIcon(_ref){var width=_ref.width,height=_ref.height,color=_ref.color;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg",{width:width,height:height,viewBox:"0 0 25 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path",{d:"M2.27577 17.3525L0.00422287 4.9775C-0.00124931 4.9227 -0.00124931 4.8673 0.00422287 4.8125C0.00422287 4.63017 0.0640526 4.4553 0.170551 4.32637C0.27705 4.19744 0.421495 4.125 0.572107 4.125H18.7785L19.5849 0.488128C19.6204 0.346605 19.6925 0.222681 19.7907 0.134749C19.8889 0.0468165 20.008 -0.000436457 20.1301 3.03821e-06H24.4233C24.5739 3.03821e-06 24.7184 0.0724359 24.8249 0.201367C24.9314 0.330298 24.9912 0.505167 24.9912 0.687503C24.9912 0.869839 24.9314 1.04471 24.8249 1.17364C24.7184 1.30257 24.5739 1.375 24.4233 1.375H20.5617L17.0408 17.3869C17.017 17.4827 16.9763 17.5712 16.9213 17.646C16.8664 17.7208 16.7986 17.7802 16.7228 17.82C16.9348 18.2525 17.0448 18.7471 17.0408 19.25C17.0408 19.9793 16.8015 20.6788 16.3755 21.1945C15.9495 21.7103 15.3717 22 14.7693 22C14.1668 22 13.589 21.7103 13.163 21.1945C12.737 20.6788 12.4977 19.9793 12.4977 19.25C12.5001 18.7664 12.6079 18.2921 12.8101 17.875H6.50652C6.70869 18.2921 6.81642 18.7664 6.81886 19.25C6.81886 19.9793 6.57953 20.6788 6.15353 21.1945C5.72754 21.7103 5.14976 22 4.54731 22C3.94486 22 3.36708 21.7103 2.94109 21.1945C2.51509 20.6788 2.27577 19.9793 2.27577 19.25C2.27757 18.7421 2.3955 18.2448 2.6165 17.8131C2.53394 17.7739 2.46011 17.7118 2.40094 17.6318C2.34177 17.5518 2.2989 17.4562 2.27577 17.3525ZM4.60978 5.5H1.28197L1.78738 8.25H4.85965L4.60978 5.5ZM18.4776 5.5H14.7125L14.4626 8.25H17.8699L18.4776 5.5ZM16.9556 12.375L17.5633 9.625H14.332L14.0764 12.375H16.9556ZM16.649 13.75H13.9515L13.7016 16.5H16.0356L16.649 13.75ZM14.7693 20.625C14.9939 20.625 15.2135 20.5444 15.4003 20.3933C15.587 20.2422 15.7326 20.0274 15.8186 19.7762C15.9045 19.5249 15.927 19.2485 15.8832 18.9818C15.8394 18.715 15.7312 18.47 15.5724 18.2777C15.4135 18.0854 15.2112 17.9545 14.9908 17.9014C14.7705 17.8484 14.5422 17.8756 14.3346 17.9797C14.1271 18.0837 13.9497 18.26 13.8249 18.4861C13.7001 18.7122 13.6335 18.9781 13.6335 19.25C13.6335 19.6147 13.7531 19.9644 13.9661 20.2223C14.1791 20.4801 14.468 20.625 14.7693 20.625ZM10.2262 16.5H12.5602L12.8101 13.75H10.2262V16.5ZM10.2262 12.375H12.935L13.1905 9.625H10.2262V12.375ZM10.2262 8.25H13.3155L13.5653 5.5H10.2262V8.25ZM6.75639 16.5H9.0904V13.75H6.50652L6.75639 16.5ZM6.3759 12.375H9.0904V9.625H6.12603L6.3759 12.375ZM5.99542 8.25H9.0904V5.5H5.75123L5.99542 8.25ZM4.54731 20.625C4.77195 20.625 4.99154 20.5444 5.17831 20.3933C5.36509 20.2422 5.51066 20.0274 5.59663 19.7762C5.68259 19.5249 5.70508 19.2485 5.66126 18.9818C5.61744 18.715 5.50926 18.47 5.35042 18.2777C5.19158 18.0854 4.98921 17.9545 4.76889 17.9014C4.54857 17.8484 4.32021 17.8756 4.11267 17.9797C3.90513 18.0837 3.72775 18.26 3.60295 18.4861C3.47815 18.7122 3.41154 18.9781 3.41154 19.25C3.41154 19.6147 3.5312 19.9644 3.7442 20.2223C3.9572 20.4801 4.24609 20.625 4.54731 20.625ZM3.29796 16.5H5.61494L5.36507 13.75H2.79254L3.29796 16.5ZM5.23445 12.375L4.9789 9.625H2.03157L2.53699 12.375H5.23445Z",fill:_styles_theme__WEBPACK_IMPORTED_MODULE_0__.Z.colors[color]})})};__webpack_exports__.Z=CartIcon;try{CartIcon.displayName="CartIcon",CartIcon.__docgenInfo={description:"",displayName:"CartIcon",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},color:{defaultValue:null,description:"",name:"color",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"gray100"'},{value:'"gray200"'},{value:'"gray300"'},{value:'"gray400"'},{value:'"black"'},{value:'"white"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/assets/CartIcon.tsx#CartIcon"]={docgenInfo:CartIcon.__docgenInfo,name:"CartIcon",path:"src/assets/CartIcon.tsx#CartIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Common/Header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_assets_CartIcon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/assets/CartIcon.tsx"),recoil__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/recoil/es/index.js"),_recoil_cartProductData__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/recoil/cartProductData.ts"),react_router_dom__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js"),HeaderContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.header(_templateObject||(_templateObject=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  width: 100%;\n  height: 80px;\n  background-color: ",";\n"])),(function(_ref){return _ref.theme.colors.black})),HeaderContent=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject2||(_templateObject2=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  max-width: 1250px;\n  height: 100%;\n  margin: 0 auto;\n  padding: 0 30px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]))),LogoContainer=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.div(_templateObject3||(_templateObject3=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: flex;\n  align-items: center;\n  & > svg {\n    margin-right: 18px;\n    transform: scaleX(-1);\n  }\n"]))),Logo=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.h1(_templateObject4||(_templateObject4=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  color: ",";\n  font-size: 40px;\n  font-weight: 900;\n  letter-spacing: 0.1em;\n  padding: 10px 0 0;\n\n  @media (max-width: 420px) {\n    display: none;\n  }\n"])),(function(_ref2){return _ref2.theme.colors.white})),MoveCartPageBtn=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.button(_templateObject5||(_templateObject5=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  display: flex;\n  color: ",";\n  font-size: 24px;\n  font-weight: 500;\n"])),(function(_ref3){return _ref3.theme.colors.white})),ProductCountAlert=styled_components__WEBPACK_IMPORTED_MODULE_5__.ZP.p(_templateObject6||(_templateObject6=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral_js__WEBPACK_IMPORTED_MODULE_6__.Z)(["\n  width: 26px;\n  height: 26px;\n  margin-left: 6px;\n  text-align: center;\n  border-radius: 50%;\n  background-color: ",";\n  line-height: 26px;\n  font-size: 16px;\n"])),(function(_ref4){return _ref4.theme.colors.primary}));__webpack_exports__.Z=function Header(){var totalCartProduct=(0,recoil__WEBPACK_IMPORTED_MODULE_1__.sJ)(_recoil_cartProductData__WEBPACK_IMPORTED_MODULE_2__.x);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(HeaderContainer,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HeaderContent,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.rU,{to:"/",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(LogoContainer,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_assets_CartIcon__WEBPACK_IMPORTED_MODULE_0__.Z,{width:51,height:44,color:"white"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Logo,{children:"SHOP"})]})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.rU,{to:"/cart",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(MoveCartPageBtn,{children:["장바구니",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ProductCountAlert,{children:totalCartProduct})]})})]})})}},"./src/recoil/cartProductData.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{f:function(){return cartProductAtom},x:function(){return totalCartProductSelect}});var _get,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),recoil__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/recoil/es/index.js"),_apis_cartProducts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/apis/cartProducts.ts"),cartProductAtom=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.cn)({key:"cartProductState",default:(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"cartProductState/Default",get:(_get=(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__.Z)((0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().mark((function _callee(){var response;return(0,_home_runner_work_react_shopping_cart_react_shopping_cart_node_modules_babel_runtime_helpers_esm_regeneratorRuntime_js__WEBPACK_IMPORTED_MODULE_2__.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,_apis_cartProducts__WEBPACK_IMPORTED_MODULE_3__.WJ)();case 2:return response=_context.sent,_context.abrupt("return",response);case 4:case"end":return _context.stop()}}),_callee)}))),function get(){return _get.apply(this,arguments)})})}),totalCartProductSelect=(0,recoil__WEBPACK_IMPORTED_MODULE_0__.nZ)({key:"totalCartProductState",get:function get(_ref){return(0,_ref.get)(cartProductAtom).length}})}}]);