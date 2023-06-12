(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[179],{"./.storybook/preview.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:function(){return __namedExportsOrder},decorators:function(){return decorators},default:function(){return _storybook_preview},parameters:function(){return parameters}});var _templateObject,objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),dist=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs")),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),src_GlobalStyle=(0,styled_components_browser_esm.vJ)(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    background-color: ",";\n    font-family: 'Apple SD Gothic Neo', 'Noto Sans KR';\n    color: ",";\n  }\n\n  a {\n    text-decoration: none;\n    outline: none;\n  }\n\n  ol,ul,li {\n    list-style: none;\n  }\n\n  button{\n    background-color: transparent;\n    border: none;\n    cursor: pointer;\n  }\n"])),(function(_ref){return _ref.theme.colors.white}),(function(_ref2){return _ref2.theme.colors.black})),theme=__webpack_require__("./src/styles/theme.ts"),lib=__webpack_require__("./node_modules/msw/lib/index.js"),products_namespaceObject=JSON.parse('[{"id":1,"name":"PET보틀-정사각(420ml)","price":43400,"imageUrl":"images/정사각-420.jpeg"},{"id":2,"name":"PET보틀-밀크티(370ml)","price":73400,"imageUrl":"images/밀크티-370.jpeg"},{"id":3,"name":"PET보틀-정사각(370ml)","price":41000,"imageUrl":"images/정사각-370.jpeg"},{"id":4,"name":"PET보틀-납작(450ml)","price":39900,"imageUrl":"images/납작-450.jpeg"},{"id":5,"name":"PET보틀-단지(480ml)","price":41000,"imageUrl":"images/단지-480.jpeg"},{"id":6,"name":"PET보틀-납작(260ml)","price":61800,"imageUrl":"images/납작-260.jpeg"},{"id":7,"name":"PET보틀-원형(500ml)","price":42200,"imageUrl":"images/원형-500.jpeg"},{"id":8,"name":"PET보틀-원형(600ml)","price":44500,"imageUrl":"images/원형-600.jpeg"},{"id":9,"name":"PET보틀-정사각(420ml)","price":43400,"imageUrl":"images/정사각-420.jpeg"},{"id":10,"name":"PET보틀-밀크티(370ml)","price":73400,"imageUrl":"images/밀크티-370.jpeg"},{"id":11,"name":"PET보틀-정사각(370ml)","price":41000,"imageUrl":"images/정사각-370.jpeg"},{"id":12,"name":"PET보틀-납작(450ml)","price":39900,"imageUrl":"images/납작-450.jpeg"}]'),cartProducts_namespaceObject=JSON.parse('[{"id":2,"quantity":2,"product":{"id":2,"name":"PET보틀-밀크티(370ml)","price":73400,"imageUrl":"images/밀크티-370.jpeg"}},{"id":3,"quantity":1,"product":{"id":3,"name":"PET보틀-정사각(370ml)","price":41000,"imageUrl":"images/정사각-370.jpeg"}},{"id":4,"quantity":1,"product":{"id":4,"name":"PET보틀-납작(450ml)","price":39900,"imageUrl":"images/납작-450.jpeg"}}]'),cartProductHandler=__webpack_require__("./src/domain/cartProductHandler.ts"),handlers=[lib.rest.get("/products",(function(req,res,ctx){return res(ctx.delay(200),ctx.status(200),ctx.json(products_namespaceObject))})),lib.rest.get("/products/empty",(function(req,res,ctx){return res(ctx.delay(200),ctx.status(200),ctx.json([]))})),lib.rest.get("/products/error",(function(req,res,ctx){return res(ctx.delay(200),ctx.status(400),ctx.json(products_namespaceObject))})),lib.rest.get("/cart-items",(function(req,res,ctx){return res(ctx.delay(200),ctx.status(200),ctx.json(cartProducts_namespaceObject))})),lib.rest.post("/cart-items",(function(req,res,ctx){var productId=req.body.productId,storedCartProducts=cartProducts_namespaceObject;return(0,cartProductHandler.V)(storedCartProducts,productId)?res(ctx.status(304),ctx.json({message:"이미 상품이 있습니다"})):products_namespaceObject.find((function(product){return product.id===productId}))?res(ctx.status(201),ctx.json({message:"상품이 추가되었습니다"})):res(ctx.status(404),ctx.json({message:"상품이 없습니다"}))})),lib.rest.patch("/cart-items/:cartItemId",(function(req,res,ctx){var cartItemId=req.params.cartItemId,cartProductId=Number(cartItemId);return cartProducts_namespaceObject.find((function(cartProduct){return cartProduct.id===cartProductId}))?res(ctx.delay(200),ctx.status(200),ctx.json({message:"업데이트가 완료되었습니다"})):res(ctx.status(304),ctx.json({message:"카트에 상품이 없습니다"}))})),lib.rest.delete("/cart-items/:cartItemId",(function(req,res,ctx){var cartItemId=req.params.cartItemId,cartProductId=Number(cartItemId);return cartProducts_namespaceObject.find((function(cartProduct){return cartProduct.id===cartProductId}))?res(ctx.delay(200),ctx.status(204)):res(ctx.status(304),ctx.json({message:"카트에 상품이 없습니다"}))}))],msw_storybook_addon_dist=__webpack_require__("./node_modules/msw-storybook-addon/dist/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),react_router_dom_dist=__webpack_require__("./node_modules/react-router-dom/dist/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),options={};"hae-on.github.io"===location.hostname&&(options={serviceWorker:{url:"/react-shopping-cart/mockServiceWorker.js"}}),(0,msw_storybook_addon_dist.initialize)(options);var decorators=[function(Story){return(0,jsx_runtime.jsx)(react_router_dom_dist.VK,{children:(0,jsx_runtime.jsxs)(styled_components_browser_esm.f6,{theme:theme.Z,children:[(0,jsx_runtime.jsx)(src_GlobalStyle,{}),(0,jsx_runtime.jsx)(es.Wh,{children:(0,jsx_runtime.jsx)(Story,{})})]})})},msw_storybook_addon_dist.mswDecorator],parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},viewport:{viewports:(0,objectSpread2.Z)((0,objectSpread2.Z)({},dist.p),{desktop:{name:"Desktop",styles:{width:"1600px",height:"1200px"}}})},msw:handlers},_storybook_preview={parameters:parameters},__namedExportsOrder=["decorators","parameters"]},"./src/domain/cartProductHandler.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{I:function(){return deleteProduct},V:function(){return findTargetProduct}});var findTargetProduct=function findTargetProduct(cartProducts,id){return cartProducts.find((function(cartProduct){return id===cartProduct.product.id}))},deleteProduct=function deleteProduct(cartProducts,id){return cartProducts.filter((function(cartProduct){return cartProduct.product.id!==id}))}},"./src/styles/theme.ts":function(__unused_webpack_module,__webpack_exports__){"use strict";var theme={colors:{primary:"#04c09e",gray100:"#ddd",gray200:"#ccc",gray300:"#bbb",gray400:"#aaa",black:"#333",white:"#ffffff"}};__webpack_exports__.Z=theme},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$":function(module){function webpackEmptyAsyncContext(req){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}))}webpackEmptyAsyncContext.keys=function(){return[]},webpackEmptyAsyncContext.resolve=webpackEmptyAsyncContext,webpackEmptyAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$",module.exports=webpackEmptyAsyncContext},"./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$":function(module,__unused_webpack_exports,__webpack_require__){var map={"./stories/AmountCounter.stories":["./src/stories/AmountCounter.stories.tsx",127],"./stories/AmountCounter.stories.tsx":["./src/stories/AmountCounter.stories.tsx",127],"./stories/Button.stories":["./src/stories/Button.stories.tsx",256],"./stories/Button.stories.tsx":["./src/stories/Button.stories.tsx",256],"./stories/CartProductItem.stories":["./src/stories/CartProductItem.stories.tsx",754,23],"./stories/CartProductItem.stories.tsx":["./src/stories/CartProductItem.stories.tsx",754,23],"./stories/CartProductList.stories":["./src/stories/CartProductList.stories.tsx",754,234],"./stories/CartProductList.stories.tsx":["./src/stories/CartProductList.stories.tsx",754,234],"./stories/CheckBox.stories":["./src/stories/CheckBox.stories.tsx",30],"./stories/CheckBox.stories.tsx":["./src/stories/CheckBox.stories.tsx",30],"./stories/EstimatedPaymentBox.stories":["./src/stories/EstimatedPaymentBox.stories.tsx",3],"./stories/EstimatedPaymentBox.stories.tsx":["./src/stories/EstimatedPaymentBox.stories.tsx",3],"./stories/Header.stories":["./src/stories/Header.stories.tsx",758],"./stories/Header.stories.tsx":["./src/stories/Header.stories.tsx",758],"./stories/Image.stories":["./src/stories/Image.stories.tsx",117],"./stories/Image.stories.tsx":["./src/stories/Image.stories.tsx",117],"./stories/ProductItem.stories":["./src/stories/ProductItem.stories.tsx",743],"./stories/ProductItem.stories.tsx":["./src/stories/ProductItem.stories.tsx",743],"./stories/ProductList.stories":["./src/stories/ProductList.stories.tsx",199,373],"./stories/ProductList.stories.tsx":["./src/stories/ProductList.stories.tsx",199,373],"./stories/pages/CartProductsListPage.stories":["./src/stories/pages/CartProductsListPage.stories.tsx",754,910],"./stories/pages/CartProductsListPage.stories.tsx":["./src/stories/pages/CartProductsListPage.stories.tsx",754,910],"./stories/pages/ProductsListPage.stories":["./src/stories/pages/ProductsListPage.stories.tsx",85,959,199,304],"./stories/pages/ProductsListPage.stories.tsx":["./src/stories/pages/ProductsListPage.stories.tsx",85,959,199,304]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((function(){return __webpack_require__(id)}))}webpackAsyncContext.keys=function(){return Object.keys(map)},webpackAsyncContext.id="./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$",module.exports=webpackAsyncContext},"./storybook-config-entry.js":function(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__){"use strict";var dist=__webpack_require__("./node_modules/@storybook/global/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__;const importers=[async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.mdx)$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.mdx)$")("./"+pathRemainder)},async path=>{if(!/^\.[\\/](?:src(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx))$/.exec(path))return;const pathRemainder=path.substring(6);return __webpack_require__("./src lazy recursive ^\\.\\/.*$ include: (?:\\/src(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx))$")("./"+pathRemainder)}];const{SERVER_CHANNEL_URL:SERVER_CHANNEL_URL}=dist.global,channel=(0,external_STORYBOOK_MODULE_CHANNEL_POSTMESSAGE_namespaceObject.createChannel)({page:"preview"});if(external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),SERVER_CHANNEL_URL){const serverChannel=(0,external_STORYBOOK_MODULE_CHANNEL_WEBSOCKET_namespaceObject.createChannel)({url:SERVER_CHANNEL_URL});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setServerChannel(serverChannel),window.__STORYBOOK_SERVER_CHANNEL__=serverChannel}const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:async function importFn(path){for(let i=0;i<importers.length;i++){const moduleExports=await(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/react/preview.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/docs/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./.storybook/preview.tsx")])})},"@storybook/channels":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":function(module){"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/preview-api":function(module){"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},function(__webpack_require__){__webpack_require__.O(0,[272],(function(){return moduleId="./storybook-config-entry.js",__webpack_require__(__webpack_require__.s=moduleId);var moduleId}));__webpack_require__.O()}]);