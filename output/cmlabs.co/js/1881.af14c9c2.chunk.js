(self.webpackChunklite=self.webpackChunklite||[]).push([[1881],{98598:(e,n,i)=>{"use strict";i.d(n,{g:()=>o});var t=i(87329),l=i(84683),a=i(19308),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"CollectionTooltip_collection"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"description"}},{kind:"Field",name:{kind:"Name",value:"subscriberCount"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}}].concat((0,t.Z)(l.d.definitions),(0,t.Z)(a.I.definitions))}},18978:(e,n,i)=>{"use strict";i.d(n,{L:()=>s});var t=i(67294),l=i(71652),a=i(82405),o=i(77355),r=i(20113),d=i(87691),m=i(21372),s=function(e){var n=e.collection,i=e.buttonSize,s=e.buttonStyleFn,c=n.name,u=n.description;return t.createElement(o.x,{padding:"15px",display:"flex",flexDirection:"column",width:"300px"},t.createElement(o.x,{display:"flex",flexDirection:"row",justifyContent:"space-between",whiteSpace:"normal",borderBottom:"neutral.primary",paddingBottom:"10px",marginBottom:"10px"},t.createElement(o.x,{display:"flex",flexDirection:"column",paddingRight:"5px"},t.createElement(r.X6,{scale:"S"},c),t.createElement(d.F,{scale:"S"},u)),t.createElement(o.x,null,t.createElement(l.v,{collection:n,link:!0}))),t.createElement(o.x,{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"},t.createElement(d.F,{scale:"M"},"Followed by ",(0,m.pY)(n.subscriberCount||0)," people"),t.createElement(a.F,{collection:n,buttonSize:i,buttonStyleFn:s,susiEntry:"follow_card"})))}},37352:(e,n,i)=>{"use strict";i.d(n,{d:()=>Q,m:()=>q});var t=i(67294),l=i(51615),a=i(18150),o=i(937),r=i(74419),d=i(80350),m=i(34699),s=i(38460),c=i(25468),u=i(87329),k=i(13085),p=i(14337),v=i(54341),S=i(98598),f={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"FollowedEntity"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherAvatar_publisher"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasDomain"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserMentionTooltip_user"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionTooltip_collection"}}]}}]}}].concat((0,u.Z)(p.v.definitions),(0,u.Z)(v.O.definitions),(0,u.Z)(S.g.definitions))},g=([{kind:"FragmentDefinition",name:{kind:"Name",value:"UserFollowsList_user"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"customStyleSheet"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"Field",name:{kind:"Name",value:"blogroll"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"visibility"}}]}}]}},{kind:"Field",name:{kind:"Name",value:"name"}},{kind:"Field",name:{kind:"Name",value:"username"}},{kind:"FragmentSpread",name:{kind:"Name",value:"PublisherFollowingCount_publisher"}}]}}].concat((0,u.Z)(k.b.definitions)),{kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"UserFollowsListQuery"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"userId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}}},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"limit"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"userFollows"},arguments:[{kind:"Argument",name:{kind:"Name",value:"userId"},value:{kind:"Variable",name:{kind:"Name",value:"userId"}}},{kind:"Argument",name:{kind:"Name",value:"limit"},value:{kind:"Variable",name:{kind:"Name",value:"limit"}}}],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowsListItem_followedEntity"}}]}}]}}].concat((0,u.Z)(f.definitions))}),F=i(18978),N=i(78757),y=i(30826),b=i(28695),h=i(77355),E=i(93310),w=i(73917),C=i(42130),x=i(68894),_=function(e){return{"& path":{fill:e.colorTokens.foreground.neutral.secondary.base},":hover path":{fill:e.colorTokens.foreground.neutral.primary.hover},":focus path":{fill:e.colorTokens.foreground.neutral.primary.hover},":hover":{background:e.colorTokens.background.neutral.secondary.base},padding:"4px",borderRadius:"6px"}},T=function(e){var n=e.popoverRenderFn,i=e.ariaId,l=e.role,a=(0,x.O)(!1),o=(0,m.Z)(a,4),r=o[0],d=o[2],s=o[3];return t.createElement(w.J,{ariaId:i,isVisible:r,placement:"top",targetDistance:10,role:l,popoverRenderFn:n,hide:d,hideOnOutsideClick:!0,noPortal:!0},t.createElement(E.r,{onClick:s,rules:_,"aria-controls":i,"aria-expanded":r},t.createElement(C.Z,null)))},I=i(87691),D=function(e){return{"& p":{wordBreak:"break-all"},":hover p":{textDecoration:"underline",color:e.baseColor.text.light}}},B=function(e){var n=e.entity,i=(0,N.P)(n),l=(0,t.useCallback)((function(){return"User"===n.__typename?t.createElement(b.K,{user:n}):t.createElement(F.L,{collection:n,buttonSize:"COMPACT",buttonStyleFn:function(e){return e?"OBVIOUS":"STRONG"}})}),[n]);return t.createElement(h.x,{tag:"li",display:"flex",justifyContent:"space-between",alignItems:"center"},t.createElement(E.r,{href:i,rules:D},t.createElement(h.x,{display:"flex",paddingRight:"10px"},t.createElement(h.x,{paddingRight:"12px"},t.createElement(y.G,{publisher:n,scale:"XXXS"})),t.createElement(I.F,{clamp:1,scale:"S",color:"LIGHTER"},n.name))),t.createElement(T,{popoverRenderFn:l,ariaId:"creatorInfoPopover-".concat(n.id),role:"dialog"}))},U=i(6443),L=i(20113),P=i(18627),R=i(66411),Z=i(18122),V=i(92661),A=i(75221),O=i(21372),M=function(e){var n,i=e.user,l=(0,V.H2)(),a=i.id,o=i.customStyleSheet,r=(0,U.H)().value,d=a===(null==r?void 0:r.id),u=(0,P.A)(),k=(0,Z.g)({onPresentedFn:function(){return u.event("sidebar.blogrollViewed",{viewerIsAuthor:d})}}),p=(0,s.t)(g,{ssr:!0,variables:{userId:a,limit:5}}),v=(0,m.Z)(p,2),S=v[0],f=v[1],F=f.called,N=f.loading,y=f.error,b=f.data,w=(b=void 0===b?{userFollows:void 0}:b).userFollows,C=(0,c.g)(i),x=C.isFollowingCountVisible,_=C.followingCount,T=(0,t.useState)(),D=(0,m.Z)(T,2),M=D[0],z=D[1];if((null==o||null===(n=o.blogroll)||void 0===n?void 0:n.visibility)===A.n$.BLOGROLL_VISIBILITY_HIDDEN)return null;if(!F)return S(),null;if(N||y||!w||!w.length||_<5)return null;var H=x?"See all (".concat((0,O.rR)(_),")"):"See all";return t.createElement(R.cW,{extendSource:!0,source:{name:"blogrolls_sidebar"}},t.createElement(h.x,{ref:k,position:"relative"},t.createElement(L.X6,{scale:"XS",tag:"span"},"Following"),t.createElement(h.x,{marginTop:"16px",marginBottom:"16px",tag:"ul"},w.map((function(e){return t.createElement(B,{key:null==e?void 0:e.id,entity:e,isTooltipActive:M===e.id,onMouseEnter:function(){return z(e.id)}})}))),i.username&&t.createElement(I.F,{scale:"S"},t.createElement(E.r,{href:l("ShowUserFollowing",{username:i.username}),linkStyle:"SUBTLE"},H))))},z=i(84739),H=i(75040),X=i(5422),G=i(65968),Y=i(64238),W=i(14818),j=i(31711),K=i(87498),$=i(78870),q=88,J=function(e){var n=e.user,i=(0,U.H)().value,l=i&&i.id===n.id,a=(0,V.H2)(),o=(0,$.Rk)(a("ShowSettingsTab",{setting:H.B.Account}),{},X.el);return l?t.createElement(h.x,{marginTop:"24px",marginBottom:"46px"},t.createElement(I.F,{scale:"S",color:"ACCENT"},t.createElement(E.r,{href:o},"Edit profile"))):t.createElement(R.cW,{source:{name:"publisher_header_actions"},extendSource:!0},t.createElement(h.x,{display:"flex",marginBottom:"40px",marginTop:"24px"},t.createElement(j.N,{creator:n,followButtonSize:"REGULAR",susiEntry:"follow_profile",showMembershipUpsellModal:!0,width:"auto"})))},Q=function(e){var n,i=e.includeBlogRoll,m=e.user,s=(0,z.B)(m),c=(0,Y.o)(m),u=(0,l.TH)(),k=(0,V.$B)(u.pathname),p="ShowUserFollowers"===(null==k?void 0:k.route.name),v=(null===(n=m.membership)||void 0===n?void 0:n.tier)===A.KD.FRIEND;return t.createElement(t.Fragment,null,t.createElement(E.r,{href:s},t.createElement(W.z,{alt:m.name||"",miroId:m.imageId||K.gG,diameter:q})),t.createElement(h.x,{marginTop:"16px"},t.createElement(E.r,{href:s},t.createElement(r.i,{publisher:m}))),t.createElement(h.x,{marginTop:"4px"},t.createElement(d.e,{publisher:m,disableLink:p})),t.createElement(h.x,{marginTop:"12px"},(c||v)&&t.createElement(h.x,{display:"flex",flexDirection:"column",gap:"4px",marginTop:"24px",marginBottom:"10px"},c&&t.createElement(G._,{size:"M",withText:!0}),v&&t.createElement(a.f,{tier:A.KD.FRIEND,user:m,size:20,withText:!0,withPopover:!0})),t.createElement(o.y,{publisher:m})),!m.viewerEdge.isBlocking&&t.createElement(J,{user:m}),i&&!p&&t.createElement(M,{user:m}))}},1279:(e,n,i)=>{"use strict";i.d(n,{m:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherDescription_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"description"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"bio"}}]}}]}}]}},937:(e,n,i)=>{"use strict";i.d(n,{y:()=>r});var t=i(67294),l=i(14294),a=i(38882),o=i(87691),r=function(e){var n=e.publisher,i=e.color,r="Collection"===n.__typename?n.description:n.bio;return r?t.createElement(o.F,{scale:"M",color:i},t.createElement(a.c.Provider,{value:!0},t.createElement(l.P,{wrapLinks:!0},r))):null}},74419:(e,n,i)=>{"use strict";i.d(n,{i:()=>o});var t=i(67294),l=i(20113),a=i(14646),o=function(e){var n=e.publisher,i=e.scale,o=void 0===i?"XS":i,r=e.prefix,d=(0,a.I)();return n.name?t.createElement(l.X6,{playwrightClassName:"pw-author-name",scale:o},t.createElement("span",{className:d({wordBreak:"break-word"})},r,n.name)):null}},80350:(e,n,i)=>{"use strict";i.d(n,{t:()=>m,e:()=>s});var t=i(67294),l=i(68427),a=i(84739),o=i(93310),r=i(87691),d=i(21372),m=function(e){var n,i,t=null!==(n="Collection"===e.__typename?e.subscriberCount:null===(i=e.socialStats)||void 0===i?void 0:i.followerCount)&&void 0!==n?n:0;return{followerCount:t,isFollowerCountVisible:t>0}},s=function(e){var n=e.disableLink,i=void 0!==n&&n,s=e.scale,c=void 0===s?"L":s,u=e.publisher,k=e.color,p=e.linkStyle,v=void 0===p?"SUBTLE":p,S=e.inline,f=e.showWhenZero,g=(0,l.B)(),F=(0,a.I)(),N=m(u),y=N.followerCount,b=N.isFollowerCountVisible;if(!f&&!b)return null;var h="".concat((0,d.pY)(y)," Follower").concat(1===y?"":"s");return t.createElement(r.F,{playwrightClassName:"pw-follower-count",tag:"span",scale:c,color:k},y>0&&!i?t.createElement(o.r,{href:"".concat("Collection"===u.__typename?g(u):F(u),"/followers"),linkStyle:v,inline:S},h):h)}},13085:(e,n,i)=>{"use strict";i.d(n,{b:()=>t});var t={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowingCount_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"socialStats"},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"followingCount"}},{kind:"Field",name:{kind:"Name",value:"collectionFollowingCount"}}]}},{kind:"Field",name:{kind:"Name",value:"username"}}]}}]}}]}},25468:(e,n,i)=>{"use strict";i.d(n,{g:()=>r,D:()=>d});var t=i(67294),l=i(93310),a=i(92661),o=i(21372),r=function(e){var n,i,t,l,a=0;return"User"===e.__typename&&(a=(null!==(n=null===(i=e.socialStats)||void 0===i?void 0:i.followingCount)&&void 0!==n?n:0)+(null!==(t=null===(l=e.socialStats)||void 0===l?void 0:l.collectionFollowingCount)&&void 0!==t?t:0)),{followingCount:a,isFollowingCountVisible:a>0}},d=function(e){var n=e.publisher,i=e.linkStyle,d=void 0===i?"SUBTLE":i,m=r(n),s=m.followingCount,c=m.isFollowingCountVisible,u=(0,a.H2)();if(!c||"User"!==n.__typename)return null;var k="".concat((0,o.pY)(s)," Following");return t.createElement(l.r,{href:u("ShowUserFollowing",{username:n.username}),linkStyle:d},k)}},14337:(e,n,i)=>{"use strict";i.d(n,{v:()=>o});var t=i(87329),l=i(84683),a=i(27048),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherAvatar_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionAvatar_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"}},{kind:"FragmentSpread",name:{kind:"Name",value:"UserAvatar_user"}}]}}]}}].concat((0,t.Z)(l.d.definitions),(0,t.Z)(a.W.definitions))}},30826:(e,n,i)=>{"use strict";i.d(n,{G:()=>o});var t=i(67294),l=i(71652),a=i(17193),o=function(e){var n=e.link,i=void 0!==n&&n,o=e.scale,r=void 0===o?"M":o,d=e.publisher;switch(d.__typename){case"User":return t.createElement(a.Yt,{link:i,scale:r,user:d});case"Collection":return t.createElement(l.v,{link:i,size:a.wC[r],collection:d});default:return null}}},81712:(e,n,i)=>{"use strict";i.d(n,{f:()=>o});var t=i(87329),l=i(19308),a=i(78693),o={kind:"Document",definitions:[{kind:"FragmentDefinition",name:{kind:"Name",value:"PublisherFollowButton_publisher"},typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Publisher"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"__typename"}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"Collection"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"CollectionFollowButton_collection"}}]}},{kind:"InlineFragment",typeCondition:{kind:"NamedType",name:{kind:"Name",value:"User"}},selectionSet:{kind:"SelectionSet",selections:[{kind:"FragmentSpread",name:{kind:"Name",value:"UserFollowButton_user"}}]}}]}}].concat((0,t.Z)(l.I.definitions),(0,t.Z)(a.s.definitions))}}}]);
//# sourceMappingURL=https://stats.medium.build/lite/sourcemaps/1881.af14c9c2.chunk.js.map