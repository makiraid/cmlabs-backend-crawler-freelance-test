(self.webpackChunklite=self.webpackChunklite||[]).push([[7225],{9419:(e,n,t)=>{"use strict";t.d(n,{B:()=>s,S:()=>u});var i=t(87329),r=t(27048),a=t(68216),o=[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityPresentationRankedModulePublishingTracker_entity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"RankedModulePublishingEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}}]}}],l=t(18821),c=t(84683),d=t(19308),u={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityFollowList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"algoliaObjectId"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"bio"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EntityPresentationRankedModulePublishingTracker_entity"}},{kind:"FragmentSpread",name:{kind:"Name",value:"useIsVerifiedBookAuthor_user"}}]}}].concat((0,i.Z)(r.W.definitions),(0,i.Z)(a.$m.definitions),(0,i.Z)(o),(0,i.Z)(l.H.definitions))},s={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"EntityFollowList_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"algoliaObjectId"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"EntityPresentationRankedModulePublishingTracker_entity"}}]}}].concat((0,i.Z)(c.d.definitions),(0,i.Z)(d.I.definitions),(0,i.Z)(o))}},52262:(e,n,t)=>{"use strict";t.d(n,{T:()=>U});var i=t(67294),r=t(78757),a=t(65968),o=t(64238),l=t(71652),c=t(82405),d=t(25550),u=t(61095),s=t(17193),m=t(32317),p=t(77355),k=t(93310),y=t(52069),f=t(87691),g=t(18627),v=t(66411),E=t(96156),S=t(14646),b=t(18122),h=t(77280),F=t(43487);function w(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?w(Object(t),!0).forEach((function(n){(0,E.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var T,N={width:"100%",height:"100%"};!function(e){e[e.Author=3]="Author",e[e.Collection=4]="Collection"}(T||(T={}));var _=function(e){var n=e.entity,t=e.children,r=(0,S.I)(),a=(0,g.A)(),o=(0,v.Lk)(),l=(0,h.PM)(),c=(0,F.v9)((function(e){return e.navigation.referrer})),d=(0,i.useCallback)((function(){if(null!=n&&n.id){var e,t={};switch(n.__typename){case"User":e=T.Author,t.authorId=n.id;break;case"Collection":e=T.Collection,t.collectionId=n.id}a.event("entity.presented",{entityId:n.id,entityType:e,referrer:c,referrerSource:l,source:(0,v.f0)(x(x({},o),t))})}}),[n,o,c,l]),u=(0,b.g)({onPresentedFn:d});return i.createElement("div",{className:r(N),ref:u},t)},C=function(e){var n=e.entity;return"User"===n.__typename?i.createElement(s.Yt,{user:n,scale:"XS",link:!0}):i.createElement(l.v,{collection:n,size:s.wC.XS,link:!0})},P=function(e){var n=e.entity,t=e.buttonStyleFn,r=e.susiEntry;return"User"===n.__typename?i.createElement(m.B,{user:n,buttonSize:"SMALL",buttonStyleFn:t||function(e){return e?"BRAND":"SUBTLE"},susiEntry:r}):i.createElement(c.F,{collection:n,buttonSize:"SMALL",buttonStyleFn:t||function(e){return e?"BRAND":"SUBTLE"},susiEntry:r})},O=function(e){var n=e.children,t=e.isEnabled,r=e.entity;return t?i.createElement(_,{entity:r},n):n},I=function(e){var n=e.entity,t=e.enableEntityPresentationTracking,l=e.susiEntry,c=e.buttonStyleFn,d=e.onClickTracking,s=e.onUserFollowingChange,m=(0,i.useRef)(null),g=(0,u.Pd)("User"===n.__typename?{id:n.id}:null).viewerEdge,v=(0,o.o)("User"===n.__typename?n:null),E=(0,r.P)(n),S=n.name,b="User"===n.__typename?n.bio:n.description;return(0,i.useEffect)((function(){"User"===n.__typename&&s&&(g&&null===m.current?m.current=g.isFollowing:g&&m.current!==g.isFollowing&&(m.current=g.isFollowing,s(g.isFollowing)))}),[null==g?void 0:g.isFollowing,s,m.current,n.__typename]),i.createElement(O,{entity:n,isEnabled:t},i.createElement(p.x,{paddingTop:"16px",width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",onClickTracking:d},i.createElement(p.x,{display:"flex",marginRight:"8px"},i.createElement(C,{entity:n}),i.createElement(p.x,{marginLeft:"16px",marginRight:"8px"},i.createElement(p.x,{display:"flex",alignItems:"center"},i.createElement(k.r,{href:E},i.createElement(y.Dx,{scale:"XS",clamp:2,wordBreak:"break-word"},S)),v&&i.createElement(a.G,{marginLeft:"2px",marginTop:"1px",size:"M",userId:n.id,alignSelf:"flex-end"})),i.createElement(k.r,{href:E},i.createElement(p.x,{marginTop:"4px",wordBreak:"break-word"},i.createElement(f.F,{scale:"S",clamp:{xs:1,sm:1,md:1,lg:1,xl:2}},b))))),i.createElement(P,{entity:n,susiEntry:l,buttonStyleFn:c})))},U=function(e){var n=e.entities,t=e.children,r=e.enableEntityPresentationTracking,a=void 0!==r&&r,o=e.susiEntry,l=e.enableKilnModulePresentationTracking,c=void 0!==l&&l,u=e.buttonStyleFn,s=e.onAlgoliaClickReport,m=e.onUserFollowingChange,k=(0,g.A)(),y=(0,d.r)().viewerId,f=(0,b.g)({onPresentedFn:function(){c&&k.event("entitiesToFollow.presented",{userId:y})}});return i.createElement(p.x,{ref:f},i.createElement(p.x,null,t),i.createElement(p.x,null,n.map((function(e,n){return i.createElement(v.cW,{key:"entity-".concat(e.id),extendSource:!0,source:{index:n,userId:"User"===e.__typename?e.id:void 0,collectionId:"Collection"===e.__typename?e.id:void 0}},i.createElement(I,{onClickTracking:s&&function(){return s(e.algoliaObjectId,n)},susiEntry:o,entity:e,enableEntityPresentationTracking:a,buttonStyleFn:u,onUserFollowingChange:m}))}))))}},32064:(e,n,t)=>{"use strict";t.d(n,{y:()=>a});var i=t(67294),r=t(77355),a=function(e){var n=e.children,t=e.marginTop,a=void 0===t?"40px":t,o=e.paddingBottom,l=void 0===o?"0px":o,c=e.showBorderBottom,d=void 0!==c&&c;return i.createElement(r.x,{marginTop:a,paddingBottom:l,borderBottom:d?"neutral.primary":"NONE"},n)}},986:(e,n,t)=>{"use strict";t.d(n,{c:()=>u});var i=t(22122),r=t(67294),a=t(52439),o=t(89636),l=t(4793),c=t(77355),d=t(35010),u=function(e){var n=e.children,t=e.innerPadding,u=void 0===t?{}:t,s=e.footerPadding,m=e.display,p=void 0===m?"block":m,k=(0,r.useRef)(0),y=(0,r.useRef)(null),f=(0,r.useRef)("stickyToTop"),g=(0,r.useRef)(null),v=(0,o.v)(),E=v.fullNavbarHeight,S=v.topNavUpsellHeight,b=v.addHeightChangeHandler,h=v.removeHeightChangeHandler;return(0,d.L)((function(){var e=function(e){var n=e.currentHeight;y.current&&g.current&&("notSticky"!==f.current&&(y.current.style.top="".concat(n,"px")),g.current.style.minHeight="calc(100vh - ".concat(n,"px)"))};return b(e),function(){h(e)}}),[]),(0,d.L)((function(){var e=function(){if(y.current){var e=window.scrollY>k.current;k.current=window.scrollY;var n=window.innerHeight,t=y.current.offsetHeight-n,i=l.fp;t<=20||(e?("notSticky"===f.current&&window.scrollY>=y.current.offsetTop+t+i+S&&(f.current="stickyToBottom",y.current.style.position="sticky",y.current.style.top="".concat(-t,"px")),"stickyToTop"===f.current&&(f.current="notSticky",y.current.style.position="relative",y.current.style.top="0px",y.current.style.marginTop="0px",y.current.style.marginTop="".concat(Math.max(k.current-y.current.offsetTop,0),"px"))):("notSticky"===f.current&&window.scrollY<=y.current.offsetTop&&(f.current="stickyToTop",y.current.style.position="sticky",y.current.style.top="".concat(i+S,"px"),y.current.style.marginTop="0px"),"stickyToBottom"===f.current&&(f.current="notSticky",y.current.style.position="relative",y.current.style.top="0px",y.current.style.marginTop="0px",y.current.style.marginTop="".concat(k.current-t-y.current.offsetTop-i-S,"px"))))}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[S]),r.createElement(c.x,{position:"sticky",top:"".concat(E,"px"),ref:y,display:p},r.createElement(c.x,(0,i.Z)({display:"flex",flexDirection:"column",minHeight:"calc(100vh - ".concat(E,"px)"),ref:g},u),r.createElement(c.x,{flexGrow:"1"},n),r.createElement(a.q,{detailScale:"XS",spacing:"XS",padding:s})))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/7225.59ab44d7.chunk.js.map