(self.webpackChunklite=self.webpackChunklite||[]).push([[3486],{353:(e,n,i)=>{"use strict";i.d(n,{Z:()=>o});var t=i(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},a.apply(this,arguments)}var d=t.createElement("path",{d:"M18 2.5a.5.5 0 0 1 1 0V5h2.5a.5.5 0 0 1 0 1H19v2.5a.5.5 0 1 1-1 0V6h-2.5a.5.5 0 0 1 0-1H18V2.5zM7 7a1 1 0 0 1 1-1h3.5a.5.5 0 0 0 0-1H8a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V7z",fill:"currentColor"});const o=function(e){return t.createElement("svg",a({width:25,height:25,viewBox:"0 0 25 25",fill:"none"},e),d)}},82864:(e,n,i)=>{"use strict";i.d(n,{W:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"Star_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"creator"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}]}},57477:(e,n,i)=>{"use strict";i.d(n,{_C:()=>r,$l:()=>c});var t=i(87329),a=i(98007),d=i(33974),o=i(12746),l=i(88398),r={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBase_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"isPublished"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}}]}}].concat((0,t.Z)(a.qU.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogsContainingThis"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"EnumValue",value:"LISTS"}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}},{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"editCatalogItemsMutation_postViewerEdge"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"WithToggleInsideCatalog_post"}}]}}].concat((0,t.Z)(d.S.definitions),(0,t.Z)(o.F.definitions),(0,t.Z)(l.m.definitions))},c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"AddToCatalogBaseQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"postResult"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],directives:[{kind:"Directive",name:{kind:"Name",value:"include"},arguments:[{kind:"Argument",name:{kind:"Name",value:"if"},value:{kind:"Variable",name:{kind:"Name",value:"isPostKind"}}}]}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBaseQuery_post"}}]}}]}}]}}].concat((0,t.Z)(s.definitions))}},23768:(e,n,i)=>{"use strict";i.d(n,{a:()=>se});var t=i(22122),a=i(81253),d=i(34699),o=i(64718),l=i(67294),r=i(96156),s=i(87329),c=i(39210),u=i(65368),m=i(77355),k=i(93310),v=i(87691),p=i(14646),g=i(78285),f=i(14813),y=i(87529),b=i(31379),N=i(75221);function S(){return S=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},S.apply(this,arguments)}var C=l.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.73 3.08A2.21 2.21 0 0 1 5 .94c1.26 0 2.27.97 2.27 2.14v2.44H2.73V3.08zm5.46 2.44V3.08C8.18 1.38 6.74 0 5 0a3.13 3.13 0 0 0-3.18 3.08v2.44c-.49 0-.95.2-1.29.55A1.9 1.9 0 0 0 0 7.39v3.74a1.9 1.9 0 0 0 .53 1.32A1.8 1.8 0 0 0 1.8 13H8.2c.48 0 .94-.2 1.28-.55.34-.35.53-.82.53-1.32V7.4a1.9 1.9 0 0 0-.53-1.32 1.8 1.8 0 0 0-1.28-.55z",fill:"#A8A8A8"});const I=function(e){return l.createElement("svg",S({width:10,height:13,viewBox:"0 0 10 13",fill:"none"},e),C)};var P=i(92305),h=i(54758);function O(e){var n,i,t=e.children,a=e.target,o=e.kind,r=e.catalog,s=e.viewer,c=l.useMemo((function(){if(r.predefined){var e,n=null===(e=a.viewerEdge.catalogsConnection)||void 0===e?void 0:e.predefinedContainingThis.find((function(e){return e.predefined===r.predefined}));return[!!n,null==n?void 0:n.catalogItemIds]}var i,t=null===(i=a.viewerEdge.catalogsConnection)||void 0===i?void 0:i.catalogsContainingThis.find((function(e){return e.catalogId===r.id}));return[!!t,null==t?void 0:t.catalogItemIds]}),[r.predefined,r.id,a.viewerEdge]),u=(0,d.Z)(c,2),m=u[0],k=u[1],v=(0,h.qY)(s.id,r.id,r.version,a.id,o,null!==(n=r.predefined)&&void 0!==n?n:void 0),p=(0,d.Z)(v,2),g=p[0],f=p[1].loading,y=(0,h.Yi)(s.id,r.id,r.version,[{entityId:a.id,entityType:o,catalogItemIds:k||[]}],null!==(i=r.predefined)&&void 0!==i?i:void 0),b=(0,d.Z)(y,2),N=b[0],S=b[1].loading;return t({toggleInsideCatalog:m?N:g,isInsideCatalog:m,loading:f||S})}var T={display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"16px",paddingRight:"5px"},E=function(e){return{marginBottom:"1px","& path":{fill:e.colorTokens.border.neutral.secondary.base}}};function w(e){var n=e.catalog,i=e.target,t=e.kind,a=e.viewer,d=(0,p.I)();return l.createElement(O,{viewer:a,target:i,kind:t,catalog:n},(function(e){var i=e.toggleInsideCatalog,t=e.isInsideCatalog,a=e.loading,o=n.predefined?(0,P.S6)(n.predefined):n.name;return l.createElement("div",{className:d(T)},l.createElement(b.X,{key:n.id,checked:t,checkboxStyle:"OBVIOUS",onChange:i,disabled:a||n.visibility===N.n2.LOCKED,textScale:"L",clampText:1},o),n.visibility!==N.n2.PUBLIC&&l.createElement(m.x,{paddingLeft:"8px"},l.createElement(I,{className:d(E)})))}))}function F(e){var n=e.target,i=e.kind,t=e.catalogs,a=e.isLoading,d=e.viewer,o=e.fetchMore,r=e.scrollableEl;return a?l.createElement(m.x,{display:"flex",justifyContent:"center",padding:"40px 0"},l.createElement(v.F,{color:"DARKER",scale:"L",tag:"div"},l.createElement(y.T,null))):t?l.createElement(f.P,{fetchMore:o,scrollableEl:r},t.map((function(e){return l.createElement(w,{viewer:d,key:e.id,catalog:e,target:n,kind:i})}))):null}function D(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function j(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?D(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):D(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var V={maxHeight:"240px",overflowY:"auto",padding:"24px 20px 16px 24px"};function _(e){var n,i,t,a=e.target,d=e.kind,r=e.showCreateModal,f=e.hidePanel,y=e.viewer,b=e.addToPredefinedLoading,N=l.useRef(null),S=(0,p.I)(),C=(0,c.Ln)({limit:c.W,userId:y.id}),I=(0,g.w)(),P=(0,o.a)(u.D,{variables:C,skip:b}),h=P.data,O=P.error,T=P.loading,E=P.fetchMore,w=b||T;l.useEffect((function(){O&&I({toastStyle:"RETRYABLE_ERROR",duration:4e3})}),[O]);var D,_=l.useCallback((function(){r(),f()}),[r,f]),A=null==h?void 0:h.catalogsByUser.catalogs;return A&&"Catalog"===(null==h||null===(n=h.readingList)||void 0===n?void 0:n.__typename)&&(A=[h.readingList].concat((0,s.Z)(A))),null!=h&&null!==(i=h.catalogsByUser)&&void 0!==i&&null!==(t=i.paging)&&void 0!==t&&t.nextPageCursor&&(D=function(){return E({variables:j(j({},C),{},{pagingOptions:j(j({},C.pagingOptions),{},{cursor:{id:h.catalogsByUser.paging.nextPageCursor.id}})})})}),l.createElement(m.x,{width:"300px"},l.createElement("div",{className:S(V),ref:N},l.createElement(F,{target:a,kind:d,viewer:y,catalogs:A,isLoading:w,fetchMore:D,scrollableEl:N.current})),!w&&l.createElement(m.x,{borderTop:"neutral.primary",padding:"20px 24px 24px"},l.createElement(v.F,{color:"ACCENT",scale:"L"},l.createElement(k.r,{onClick:_},"Create new list"))))}var A=i(63508),x=i(50361),Z=i.n(x),B=i(21919),L=i(12476),R=i(18627),M=i(11462),U=i(12746);function H(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function Q(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?H(Object(i),!0).forEach((function(n){(0,r.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):H(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var z="temp-catalog-id",K=i(73917),q=i(66227),Y=i(68894),G=i(57477);function W(){return W=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},W.apply(this,arguments)}var J=l.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"});const X=function(e){return l.createElement("svg",W({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),J)};function $(){return $=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},$.apply(this,arguments)}var ee=l.createElement("path",{d:"M7.5 3.75a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-14a2 2 0 0 0-2-2h-9z",fill:"#000"});const ne=function(e){return l.createElement("svg",$({width:24,height:24,viewBox:"0 0 24 24",fill:"none"},e),ee)};var ie=function(e){return{"& path":{fill:e.colorTokens.border.neutral.secondary.base}}},te=function(e){return{"& path":{fill:e.colorTokens.foreground.neutral.primary.hover}}},ae=function(){var e=(0,p.I)();return l.createElement(X,{className:e(ie)})},de=function(){var e=(0,p.I)();return l.createElement(ne,{className:e(te)})};function oe(e){return e.insideACatalog?l.createElement(de,null):l.createElement(ae,null)}var le=["viewer","defaultToBookmarkIcon"];function re(e){var n=e.children,i=e.isPanelVisible,t=e.hidePanel,a=e.togglePanel,o=e.target,r=e.kind,s=e.viewer,c=e.bookmarkIcon,u=e.isInACatalog,m=e.isInReadingList,k=e.catalogsCount,v=e.popoverDisplay,p=(0,Y.O)(!1),g=(0,d.Z)(p,3),f=g[0],y=g[1],b=g[2],S=function(e,n,i,t){var a=(0,R.A)(),o=(0,B.D)(U.Q,{variables:{type:n,operation:{preprend:{type:t,id:i}}},optimisticResponse:{addToPredefinedCatalog:{__typename:"AddToPredefinedCatalogSucces",version:h.xt,insertedItem:{__typename:"CatalogItemV2",catalogId:z,catalogItemId:h.PH}}},onCompleted:function(e){if("AddToPredefinedCatalogSucces"===e.addToPredefinedCatalog.__typename&&t===N.ej.POST){var n=e.addToPredefinedCatalog.insertedItem;a.event("post.addToList",{listId:n.catalogId,postId:n.catalogItemId})}},update:function(a,d){var o,l=null===(o=d.data)||void 0===o?void 0:o.addToPredefinedCatalog;if("AddToPredefinedCatalogSucces"===(null==l?void 0:l.__typename)){var r,s,c=l.insertedItem,u=l.version;if(c.catalogId!==z&&((0,L.UV)(a,c.catalogId,u),(0,L.Rx)(a,c.catalogId,[c.catalogItemId],t)),t===N.ej.POST){r="PostViewerEdge:".concat((0,M.Q)(i,e)),s=U.F;var m=a.readFragment({id:r,fragment:s});if(null!=m&&m.catalogsConnection){var k=Z()(m.catalogsConnection.predefinedContainingThis),v=k.findIndex((function(e){return e.predefined===n}));if(-1!==v)k[v].catalogItemIds.push(c.catalogItemId);else{var p={catalogId:c.catalogId,predefined:n,version:u,catalogItemIds:[c.catalogItemId]};k.push(p)}a.writeFragment({id:r,fragment:s,data:Q(Q({},m),{},{catalogsConnection:Q(Q({},m.catalogsConnection),{},{predefinedContainingThis:k})})})}}}}}),l=(0,d.Z)(o,2);return{addToPredefined:l[0],addToPredefinedLoading:l[1].loading}}(s.id,N.l8.READING_LIST,o.id,r),C=S.addToPredefined,I=S.addToPredefinedLoading,P=l.useCallback((function(){a(),m||u||C()}),[a,u,m,C]);return l.createElement(K.J,{isVisible:i,popoverRenderFn:function(){return l.createElement(_,{showCreateModal:y,hidePanel:t,target:o,kind:r,viewer:s,addToPredefinedLoading:I})},hide:t,targetDistance:15,display:v},l.createElement(A.a,{isVisible:f,hide:b,target:o,kind:r,viewer:s}),null==n?void 0:n({onClick:P,bookmarkIcon:c,catalogsCount:k,isPanelVisible:i}))}function se(e){var n,i,d,r=e.viewer,s=e.defaultToBookmarkIcon,c=(0,a.Z)(e,le),u=l.useMemo((function(){return c.kind===N.ej.POST?{postId:c.target.id,isPostKind:!0}:{postId:"",isPostKind:!1}}),[c.kind,c.target]),m=(0,o.a)(G.$l,{ssr:!1,variables:u}).data,k=null,v=null;"Post"===(null==m||null===(n=m.postResult)||void 0===n?void 0:n.__typename)&&(k=m.postResult.viewerEdge.catalogsConnection,v=m.postResult);var p=(null===(i=k)||void 0===i?void 0:i.catalogsContainingThis)&&k.catalogsContainingThis.length>0,g=l.useMemo((function(){var e,n;return!!(null===(e=k)||void 0===e||null===(n=e.predefinedContainingThis)||void 0===n?void 0:n.find((function(e){return e.predefined===N.l8.READING_LIST})))}),[k]),f=l.useMemo((function(){var e;return((null===(e=k)||void 0===e?void 0:e.catalogsContainingThis.length)||0)+(g?1:0)}),[null===(d=k)||void 0===d?void 0:d.catalogsContainingThis.length,g]),y=l.createElement(oe,{insideACatalog:!!p||g});return u.isPostKind?r&&k&&v?l.createElement(q.B,null,(function(e){var n=e.isVisible,i=e.toggle,a=e.hide;return l.createElement(re,(0,t.Z)({},c,{target:v,viewer:r,isPanelVisible:n,togglePanel:i,hidePanel:a,bookmarkIcon:y,isInACatalog:!!p,isInReadingList:g,catalogsCount:f}))})):s||!c.children?y:c.children({onClick:function(){return null},bookmarkIcon:y,catalogsCount:f,isPanelVisible:!1,isDisabled:!0}):null}},84130:(e,n,i)=>{"use strict";i.d(n,{G:()=>d});var t=i(87329),a=i(57477),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBase_post"}}]}}].concat((0,t.Z)(a._C.definitions))}},70929:(e,n,i)=>{"use strict";i.d(n,{o:()=>S});var t=i(22122),a=i(81253),d=i(96156),o=i(67294),l=i(6443),r=i(26350),s=i(78817),c=i(30020),u=i(14646),m=i(75221),k=i(353),v=i(23768),p=["susiEntry","susiActionUrl","rules","testId","targetDistance"];function g(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}var f=function(e){return{color:e.colorTokens.foreground.neutral.secondary.base,"&:hover":{color:e.colorTokens.foreground.neutral.primary.hover}}},y=function(e,n){return function(i){var t=i.colorTokens.foreground.neutral.primary.hover,a=i.colorTokens.foreground.neutral.secondary.base;return function(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?g(Object(i),!0).forEach((function(n){(0,d.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):g(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}({padding:"8px 2px",":hover:not(:disabled) svg path":{fill:n?a:t},":focus svg path":{fill:n?a:t},cursor:n?"not-allowed":"pointer",opacity:n?.3:void 0,"& svg path":{fill:a}},e)}},b="Add to list bookmark button",N=function(e){var n=e.bookmarkIcon,i=e.onClick,t=e.isPanelVisible,a=e.rules,d=e.disabled,l=e.testId;return o.createElement(s.P,{ariaControls:"addToCatalogBookmarkButton",ariaLabel:b,ariaExpanded:t?"true":"false",onClick:i,rules:y(a),disabled:d,testId:l},n)};function S(e){var n=e.susiEntry,i=void 0===n?"list":n,d=e.susiActionUrl,s=e.rules,g=e.testId,S=e.targetDistance,C=void 0===S?10:S,I=(0,a.Z)(e,p),P=(0,u.I)(),h=(0,l.H)(),O=h.value,T=h.loading,E=I.kind===m.ej.POST,w=E?I.target.isPublished:void 0;return E&&!w?o.createElement(c._,{placement:"top",targetDistance:C,tooltipText:"You cannot Save a draft"},o.createElement("div",{className:P(y(s,!0)),"data-testid":g},o.createElement(k.Z,{className:P(f),"aria-label":b,disabled:!0}))):T||O?o.createElement(c._,{placement:"top",targetDistance:C,tooltipText:"Save"},o.createElement(v.a,(0,t.Z)({},I,{viewer:O}),(function(e){var n=e.onClick,i=e.bookmarkIcon,t=e.isPanelVisible,a=e.isDisabled;return o.createElement(N,{bookmarkIcon:i,onClick:n,isPanelVisible:t,rules:s,disabled:a,testId:g})}))):o.createElement(c._,{placement:"top",targetDistance:C,tooltipText:"Save"},o.createElement(r.R,{operation:"register",susiEntry:i,actionUrl:d,testId:g,post:E?I.target:void 0},o.createElement(k.Z,{className:P([f,s]),"aria-label":b})))}},12746:(e,n,i)=>{"use strict";i.d(n,{F:()=>t,Q:()=>a});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"useAddItemToPredefinedCatalog_postViewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"catalogsConnection"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"predefinedContainingThis"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"catalogId"}},{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"predefined"}},{kind:"Field",name:{kind:"Name",value:"catalogItemIds"}}]}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToPredefinedCatalog"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"type"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogType"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"operation"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"PredefinedCatalogAddOperationInput"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"addToPredefinedCatalog"},arguments:[{kind:"Argument",name:{kind:"Name",value:"type"},value:{kind:"Variable",name:{kind:"Name",value:"type"}}},{kind:"Argument",name:{kind:"Name",value:"operation"},value:{kind:"Variable",name:{kind:"Name",value:"operation"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"AddToPredefinedCatalogSucces"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"version"}},{kind:"Field",name:{kind:"Name",value:"insertedItem"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"catalogItemId"}},{kind:"Field",name:{kind:"Name",value:"catalogId"}}]}}]}}]}}]}}]}},93403:(e,n,i)=>{"use strict";i.d(n,{z:()=>o});var t=i(87329),a=i(98007),d=i(84130),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"BookmarkButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_post"}},{kind:"FragmentSpread",name:{kind:"Name",value:"AddToCatalogBookmarkButton_post"}}]}}].concat((0,t.Z)(a.qU.definitions),(0,t.Z)(d.G.definitions))}},50455:(e,n,i)=>{"use strict";i.d(n,{e:()=>s});var t=i(67294),a=i(70929),d=i(6443),o=i(75221),l=i(43487),r=i(50458);function s(e){var n=e.post,i=e.susiEntry,s=e.rules,c=e.targetDistance,u=e.testId,m=n.id,k=n.visibility,v=(0,l.v9)((function(e){return e.config.authDomain}));return(0,d.H)().loading||k===o.Wn.UNLISTED?null:t.createElement(a.o,{kind:o.ej.POST,target:n,rules:s,susiEntry:i,susiActionUrl:(0,r.XE)(v,m),targetDistance:c,testId:u})}},46732:(e,n,i)=>{"use strict";i.d(n,{JP:()=>d,cZ:()=>o});var t=i(87329),a=i(1877),d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"ClapMutation_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"MultiVoteCount_post"}}]}}].concat((0,t.Z)(a.U.definitions))},o={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"ClapMutation"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"targetPostId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"numClaps"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clap"},arguments:[{kind:"Argument",name:{kind:"Name",value:"targetPostId"},value:{kind:"Variable",name:{kind:"Name",value:"targetPostId"}}},{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"numClaps"},value:{kind:"Variable",name:{kind:"Name",value:"numClaps"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"ClapMutation_viewerEdge"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"ClapMutation_post"}}]}}]}}].concat((0,t.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"ClapMutation_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"PostViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}}]}}]),(0,t.Z)(d.definitions))}},13195:(e,n,i)=>{"use strict";i.d(n,{C:()=>u});var t=i(96156),a=i(34699),d=i(21919),o=i(67294),l=i(11462),r=i(46732);function s(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?s(Object(i),!0).forEach((function(n){(0,t.Z)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var u=function(){var e=(0,d.D)(r.cZ),n=(0,a.Z)(e,1)[0];return(0,o.useCallback)((function(e,i,t,a){var d;return n({variables:{targetPostId:e.id,userId:i,numClaps:t},optimisticResponse:{clap:c(c({__typename:"Post"},e),{},{clapCount:(null!==(d=e.clapCount)&&void 0!==d?d:0)+t,viewerEdge:{__typename:"PostViewerEdge",id:(0,l.Q)(e.id,i),clapCount:t}})},update:function(n,d){var o,r=null==d||null===(o=d.data)||void 0===o?void 0:o.clap;r&&(n.modify({id:"Post:".concat(r.id),fields:{clapCount:function(){var n;return(null!==(n=e.clapCount)&&void 0!==n?n:0)+t}}}),n.modify({id:"PostViewerEdge:".concat((0,l.Q)(r.id,i)),fields:{clapCount:function(){return((null==a?void 0:a.clapCount)||0)+t}}}))}})}),[])}},1877:(e,n,i)=>{"use strict";i.d(n,{U:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"MultiVoteCount_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}},39507:(e,n,i)=>{"use strict";i.d(n,{T:()=>d});var t=i(64718),a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"PostViewerEdgeQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"postId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"post"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"postId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"clapCount"}},{kind:"Field",name:{kind:"Name",value:"readingList"}},{kind:"Field",name:{kind:"Name",value:"shareKey"}},{kind:"Field",name:{kind:"Name",value:"creatorPartnerProgramEnrollmentStatus"}}]}}]}}]}}]}}]},d=function(e){var n,i=(0,t.a)(a,{variables:{postId:(null==e?void 0:e.id)||""},ssr:!1,skip:!(null!=e&&e.id)}),d=i.loading,o=i.error,l=i.data;return d?{loading:d}:o?{error:o}:{viewerEdge:null==l||null===(n=l.post)||void 0===n?void 0:n.viewerEdge}}},51681:(e,n,i)=>{"use strict";function t(e,n,i){return!!n&&e[n.id]||{clapCount:(null==n?void 0:n.clapCount)||0,viewerClapCount:(null==i?void 0:i.clapCount)||0,viewerHasClappedSinceFetch:!1}}i.d(n,{l:()=>t})}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/3486.68d9a40d.chunk.js.map