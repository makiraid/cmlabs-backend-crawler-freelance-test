(self.webpackChunklite=self.webpackChunklite||[]).push([[2808],{68427:(e,n,i)=>{"use strict";i.d(n,{B:()=>d,R:()=>c});var t=i(8575),a=i(67294),l=i(43487),o=i(78870),d=function(){var e=(0,l.v9)((function(e){return e.navigation.currentLocation})),n=(0,l.v9)((function(e){return e.config.authDomain})),i=(0,o.rp)();return(0,a.useCallback)((function(a){var l=a.id,o=a.domain,d=function(e){var n=e.id,i=e.slug;return i?"/".concat(i):"/c/".concat(n)}({id:l,domain:o,slug:a.slug});if(i)return"https://".concat(n).concat(d);var c=(0,t.parse)(e).port;return o?"https://".concat(o).concat(c?":".concat(c):""):"https://".concat(n).concat(d)}),[i])},c=function(e){return d()(e)}},78757:(e,n,i)=>{"use strict";i.d(n,{P:()=>l});var t=i(68427),a=i(84739),l=function(e){var n=(0,t.B)(),i=(0,a.I)();return"Collection"===e.__typename?n(e):"User"===e.__typename?i(e):""}},84683:(e,n,i)=>{"use strict";i.d(n,{d:()=>l});var t=i(87329),a=i(68216),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionAvatar_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"avatar"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}}]}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}}]}}].concat((0,t.Z)(a.nf.definitions))}},71652:(e,n,i)=>{"use strict";i.d(n,{v:()=>u});var t=i(67294),a=i(68427),l=i(14818),o=i(4381),d=i(27323),c=i(29746),r=i(46696),m=function(e){return function(n){return{borderRadius:(0,c.a)(n.borderRadius.regular),width:(0,c.a)(e),height:(0,c.a)(e)}}},u=function(e){var n=e.circular,i=e.collection,c=e.size,u=void 0===c?60:c,s=e.link,k=e.showHoverState,v=(0,a.R)(i);if(!i||!i.avatar||!i.avatar.id)return null;var S=i.avatar.id,N=i.name||"Publication avatar",f=n?t.createElement(l.z,{miroId:S,alt:N,diameter:u,freezeGifs:!1,showHoverState:k}):t.createElement(o.UV,{rules:[m(u)],miroId:S,alt:N,width:u,height:u,strategy:r._S.Crop});return s?t.createElement(d.P,{href:v},f):f}},19308:(e,n,i)=>{"use strict";i.d(n,{b:()=>o,I:()=>d});var t=i(87329),a=i(68216),l=i(98007),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}}]}}]},d={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionFollowButton_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"slug"}},{kind:"FragmentSpread",name:{kind:"Name",value:"collectionUrl_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiClickable_collection"}}]}}].concat((0,t.Z)(a.nf.definitions),(0,t.Z)(l.Os.definitions))}},82405:(e,n,i)=>{"use strict";i.d(n,{F:()=>w});var t=i(34699),a=i(21919),l=i(67294),o=i(51615),d=i(77520),c=i(20297),r=i(25550),m=i(25267),u=i(39727),s=i(26350),k=i(50563),v=i(93310),S=i(77355),N=i(47230),f=i(18627),p=i(66411),g=i(92661),F=i(43487),C=i(50458),w=function(e){var n,i=e.buttonSize,C=e.buttonStyleFn,w=e.collection,b=e.post,_=e.simpleLink,D=e.susiEntry,E=void 0===D?"follow_card":D,h=e.preventParentClick,T=e.width,I=(0,F.v9)((function(e){return e.config.authDomain})),U=(0,r.r)().viewerId,Z=(0,f.A)(),V=(0,p.pK)(),z=(0,o.TH)(),B=(0,g.$B)(z.pathname),O=null==B||null===(n=B.route)||void 0===n?void 0:n.name,P=(0,u.g)(w),R=P.viewerEdge,A=P.loading,q=function(e,n){var i=(0,a.D)(c.e),o=(0,t.Z)(i,1)[0];return l.useCallback((function(){return o({variables:{id:e.id},optimisticResponse:{followCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!0}}},update:function(i){i.modify({id:"User:".concat(n),fields:{missionControl:(0,k.im)("followedCollections",!0),followingCollectionConnection:(0,k.Hc)(e.id)}})}})}),[e.id])}(w,U),x=function(e,n){var i=(0,a.D)(c.X),o=(0,t.Z)(i,1)[0];return l.useCallback((function(){return o({variables:{id:e.id},optimisticResponse:{unfollowCollection:{__typename:"Collection",id:e.id,name:e.name,viewerEdge:{__typename:"CollectionViewerEdge",id:"collectionId:".concat(e.id,"-viewerId:").concat(n),isFollowing:!1}}},update:function(e){e.modify({id:"User:".concat(n),fields:{missionControl:(0,k.im)("followedCollections",!1)}})}})}),[e.id])}(w,U),H=l.useCallback((function(e){h&&e.preventDefault(),Z.event("collection.followed",{collectionId:w.id,followSource:V}),q()}),[w,h,V,Z]),L=l.useCallback((function(e){h&&e.preventDefault(),Z.event("collection.unfollowed",{collectionId:w.id,followSource:V}),x()}),[h,V,Z]),G=!(null==R||!R.isFollowing),M=C?C(!!G):G?"OBVIOUS":"STRONG";return _?l.createElement(v.r,{onClick:G?L:H},l.createElement(S.x,{display:"flex",flexDirection:"row"},G?"Unfollow publication":"Follow publication")):l.createElement(m.I,null,(function(e){return e?l.createElement(N.zx,{size:i,onClick:G?L:H,buttonStyle:M,loading:A,width:T},G?"Following":"Follow"):l.createElement(s.R,{collection:w,buttonStyle:M,isButton:!0,buttonSize:i,operation:"register",actionUrl:y(I,w,b)||"",susiEntry:E,pageSource:(0,d.x)(O,"register"),buttonWidth:T},G?"Following":"Follow")}))},y=function(e,n,i){return n.slug&&(i&&i.id?(0,C.TA)(e,n.slug,i.id):(0,C.Ll)(e,n.slug))}},39727:(e,n,i)=>{"use strict";i.d(n,{g:()=>o});var t=i(64718),a=i(87329),l={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"CollectionViewerEdge"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"collectionId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"collection"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"collectionId"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"viewerEdge"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"Collection_viewerEdge"}}]}}]}}]}}]}}].concat((0,a.Z)([{kind:"FragmentDefinition",name:{kind:"Name",value:"Collection_viewerEdge"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"CollectionViewerEdge"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"canEditOwnPosts"}},{kind:"Field",name:{kind:"Name",value:"canEditPosts"}},{kind:"Field",name:{kind:"Name",value:"isEditor"}},{kind:"Field",name:{kind:"Name",value:"isFollowing"}},{kind:"Field",name:{kind:"Name",value:"isMuting"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToLetters"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToMediumNewsletter"}},{kind:"Field",name:{kind:"Name",value:"isSubscribedToEmails"}},{kind:"Field",name:{kind:"Name",value:"isWriter"}}]}}]))},o=function(e){var n,i,a=(0,t.a)(l,{variables:{collectionId:null!==(n=null==e?void 0:e.id)&&void 0!==n?n:""},ssr:!1,skip:!(null!=e&&e.id)}),o=a.loading,d=a.error,c=a.data;return o?{loading:o}:d?{error:d}:{viewerEdge:null==c||null===(i=c.collection)||void 0===i?void 0:i.viewerEdge}}},98007:(e,n,i)=>{"use strict";i.d(n,{Os:()=>l,qU:()=>o,Vm:()=>d,GB:()=>c});var t=i(87329),a=i(20121),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_collection"}}]}}].concat((0,t.Z)(a.Hr.definitions))},o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_post"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Post"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"mediumUrl"}},{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_post"}}]}}].concat((0,t.Z)(a.qt.definitions))},d=([{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_topic"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Topic"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_topic"}}]}}].concat((0,t.Z)(a.Uh.definitions)),{kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_user"}}]}}].concat((0,t.Z)(a.Zd.definitions))}),c={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"SusiClickable_newsletterV3"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"NewsletterV3"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_newsletterV3"}}]}}].concat((0,t.Z)(a.gs.definitions))};[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SusiClickableAccountTokenQuery"},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"SusiContainer_query"}}]}}].concat((0,t.Z)(a.Zz.definitions))},27048:(e,n,i)=>{"use strict";i.d(n,{W:()=>l});var t=i(87329),a=i(68216),l={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserAvatar_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"imageId"}},{kind:"Field",name:{kind:"Name",value:"mediumMemberAt"}},{kind:"Field",name:{kind:"Name",value:"membership"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"tier"}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"userUrl_user"}}]}}].concat((0,t.Z)(a.$m.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/2808.06648c49.chunk.js.map