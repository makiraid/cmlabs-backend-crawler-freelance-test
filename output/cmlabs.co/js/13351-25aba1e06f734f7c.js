"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[13351],{329499:function(e){var l,i,n,a,s,r,t,o={fragment:{argumentDefinitions:l=[{defaultValue:null,kind:"LocalArgument",name:"inviteCode"}],kind:"Fragment",metadata:null,name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:i=[{kind:"Variable",name:"inviteCode",variableName:"inviteCode"}],concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[{kind:"InlineFragment",selections:[n={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[a={alias:null,args:null,kind:"ScalarField",name:"firstName",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"imageMediumUrl",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null}],storageKey:null}],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:l,kind:"Operation",name:"UnauthCloseupInviteUpsellQuery",selections:[{alias:null,args:i,concreteType:null,kind:"LinkedField",name:"v3GetInviteCodeQuery",plural:!1,selections:[n,{kind:"InlineFragment",selections:[{alias:null,args:null,concreteType:"InviteCode",kind:"LinkedField",name:"data",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"sender",plural:!1,selections:[a,s,r,t={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}],storageKey:null},t],storageKey:null}],type:"InviteCodeResponse",abstractKey:null}],storageKey:null}]},params:{id:"4610a8b7fe41310eb2db231b8c1171930d91f797fbc7fd321ec6682cb48a3711",metadata:{},name:"UnauthCloseupInviteUpsellQuery",operationKind:"query",text:null}};o.hash="6932152931fe069ad54b218e36e66908",e.exports=o,function(e){if("query"===e.params.operationKind){if(window.__pwsCacheRelayConcreteRequest)window.__pwsCacheRelayConcreteRequest(e);else{let l=[e.params.name,e.params.id].join(":");window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__=window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__||{},window.__PWS_RELAY_CONCRETE_REQUEST_CACHE__[l]=e}}}(o)},913351:function(e,l,i){i.d(l,{Z:function(){return A}});var n=i(599689),a=i(908390),s=i(407043),r=i(430322),t=i(898781),o=i(349700),d=i(53987),c=i(780280),_=i(784590),p=i(826067),u=i(50286),h=i(598615),m=i(664166),g=i(510020),x=i(876437),f=i(821997),y=i(948376),v=i(350118),b=i(515198),j=function(e){var l=e.handleDismiss,i=e.i18n,n=e.iconSize,s=e.upsellAppIsAndroidLiteApp,r=e.appUpsellType;return(0,b.jsxs)(a.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"fixed",paddingX:5,color:"light",zIndex:new a.Ry(5),children:[(0,b.jsx)(a.xu,{left:!0,top:!0,position:"absolute",padding:4,"data-test-id":"referred-app-upsell-dismiss-button",children:(0,b.jsx)(a.hU,{accessibilityLabel:i._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",size:"sm",onClick:l})}),(0,b.jsxs)(a.xu,{height:"100%",display:"flex",justifyContent:"center",direction:"column",maxWidth:440,margin:"auto",children:[(0,b.jsx)(a.xu,{paddingY:2,justifyContent:"center",display:"flex",children:s?(0,b.jsx)(f.Z,{size:n}):(0,b.jsx)(a.JO,{color:"brandPrimary",icon:"pinterest",accessibilityLabel:i._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),size:n})}),(0,b.jsx)(w,{description:i._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description1', 'description for referred app upsell'),handleDismiss:l,heading:i._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:i,appUpsellType:r})]})]})},P=function(e){var l=e.backgroundImageUrl,i=e.handleDismiss,n=e.heroImage,s=e.i18n,r=e.multipleImages,t=e.appUpsellType;return(0,b.jsxs)(a.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"fixed",paddingX:5,color:"light",zIndex:new a.Ry(5),children:[(0,b.jsx)(a.xu,{position:"absolute",top:!0,height:319,width:"100%",zIndex:new a.Ry(2),children:(0,b.jsx)(a.Ee,{alt:s._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:l,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,b.jsxs)(a.xu,{top:!0,bottom:!0,left:!0,right:!0,display:"flex",alignItems:"center",direction:"column",position:"absolute",paddingX:5,color:"light",zIndex:new a.Ry(3),dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(12px)"}},children:[(0,b.jsx)(a.xu,{left:!0,position:"absolute",top:!0,color:"default",padding:4,"data-test-id":"referred-app-upsell-dismiss-button",dangerouslySetInlineStyle:{__style:{background:"transparent"}},children:(0,b.jsx)(a.hU,{accessibilityLabel:s._('Cancel', 'mweb.auth.referred_app_upsell.close_modal_label', 'close modal icon'),icon:"cancel",size:"sm",onClick:i})}),(0,b.jsxs)(a.xu,{height:"100%",justifyContent:"center",display:"flex",direction:"column",maxWidth:440,margin:"auto",children:[(0,b.jsx)(a.kC,{justifyContent:"center",children:n}),(0,b.jsx)(w,{description:r?s._('Save these ideas, get similar recs, and more', 'mweb.auth.referred_app_upsell.description2', 'description for referred app upsell'):s._('Save this idea, get similar recs, and more', 'mweb.auth.referred_app_upsell.description5', 'description for referred app upsell'),handleDismiss:i,heading:s._('It\'s better in the Pinterest app', 'mweb.auth.referred_app_upsell.heading1', 'heading for referred app upsell'),i18n:s,appUpsellType:t})]})]})]})},z=function(e){var l=e.pinUrl,i=e.i18n;return(0,b.jsx)(a.xu,{height:235,width:176,rounding:4,overflow:"hidden",marginBottom:6,children:(0,b.jsx)(a.Ee,{alt:i._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:l,fit:"cover",naturalWidth:1,naturalHeight:1})})},w=function(e){var l=e.description,i=e.handleDismiss,n=e.heading,s=e.i18n,r=e.appUpsellType;return(0,b.jsx)(h.Z,{componentType:14155,app_upsell_type:r,children:function(e){var r=e.handleOpenApp;return(0,b.jsxs)(a.kC,{alignItems:"center",direction:"column",justifyContent:"center",children:[(0,b.jsx)(a.xu,{paddingY:2,children:(0,b.jsx)(a.X6,{align:"center",size:"400",children:n})}),(0,b.jsx)(a.xu,{width:246,children:(0,b.jsx)(a.xv,{align:"center",size:"300",children:l})}),(0,b.jsxs)(a.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{display:"grid"}},justifyContent:"center",marginTop:5,children:[(0,b.jsx)(a.xu,{marginBottom:2,width:246,children:(0,b.jsx)(a.zx,{fullWidth:!0,size:"lg",color:"red",onClick:function(){(0,m.y)(),r()},text:s._('Open app', 'mweb.auth.referred_app_upsell.open_app', 'CTA text for referred app upsell')})}),(0,b.jsx)(a.zx,{fullWidth:!0,onClick:function(){i()},color:"gray",size:"lg",text:s._('Continue in browser', 'mweb.auth.referred_app_upsell.continue', 'Continue text for referred app upsell')})]})]})}})};function A(e){var l=e.onDismiss,i=e.viewParameter,A=e.viewType,C=(0,t.ZP)(),k=(0,u.Wb)(),S=(0,c.B)(),I=S.isBot,T=S.userAgent,U=T.platform,L=T.raw,R=(0,y.Rp)({isBot:I,platform:U,userAgent:L}),E=(0,s.v)().logContextEvent,N=k?60:32,O=(0,n.useHistory)(),B=(0,n.useRouteMatch)(),F=(0,n.useLocation)(),D=(0,p.mB)(F.search).invite_code,Z=(0,g.n)(),W=Z.appUpsellType,K=Z.uiType,H=function(){E({component:14155,element:10308,event_type:10220,view_type:A||202,view_parameter:i,aux_data:{app_upsell_type:W}}),(0,m.y)(),l()},M=null!==(el=B.params.id)&&void 0!==el?el:"",Q=(0,_.Z)(M?{name:"PinResource",options:{field_set_key:"detailed",id:M}}:null).data,G=(0,v.S6)()(M),X=(0,n.useParams)(),q=X.username,J=X.slug,Y=(0,_.Z)(q&&J?{name:"BoardResource",options:{username:(0,p.Jx)(q),slug:(0,p.Jx)(unescape(J||"")),field_set_key:"detailed"}}:null).data;if("full"===K){var V="",$=null,ee=!1;if((0,d.L6)(O.location)){var el,ei,en,ea=null!=Q?Q:G;V=(null==ea?void 0:null===(ei=ea.images)||void 0===ei?void 0:null===(en=ei.orig)||void 0===en?void 0:en.url)||"",$=(0,b.jsx)(z,{pinUrl:V,i18n:C})}if((0,d.am)(O.location)&&Y&&Y.images&&Y.images["474x"]){if(Y.images["474x"].length>2){V=Y.images["474x"][0].url||"";var es=Y.images["474x"][1].url||"",er=Y.images["474x"][2].url||"";ee=!0,$=(0,b.jsx)(a.xu,{marginBottom:7,children:(0,b.jsxs)(a.kC,{children:[(0,b.jsx)(a.xu,{height:117,width:117,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderTopLeftRadius:"16px",borderBottomLeftRadius:"16px",marginRight:"1px"}},children:(0,b.jsx)(a.Ee,{alt:C._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:V,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,b.jsxs)(a.kC,{direction:"column",children:[(0,b.jsx)(a.xu,{height:59,width:57,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderTopRightRadius:"16px",marginBottom:"1px"}},children:(0,b.jsx)(a.Ee,{alt:C._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:es,fit:"cover",naturalWidth:1,naturalHeight:1})}),(0,b.jsx)(a.xu,{height:57,width:58,overflow:"hidden",dangerouslySetInlineStyle:{__style:{borderBottomRightRadius:"16px"}},children:(0,b.jsx)(a.Ee,{alt:C._('App upsell image', 'mweb.auth.referred_app_upsell.image', 'Related pin image for referred app upsell'),src:er,fit:"cover",naturalWidth:1,naturalHeight:1})})]})]})})}else Y.images["474x"].length>0&&(V=Y.images["474x"][0].url||"",$=(0,b.jsx)(z,{pinUrl:V,i18n:C}))}return V?(0,b.jsx)(P,{backgroundImageUrl:V,handleDismiss:H,heroImage:$,i18n:C,multipleImages:ee,appUpsellType:W}):(0,b.jsx)(j,{handleDismiss:H,i18n:C,iconSize:N,upsellAppIsAndroidLiteApp:R,appUpsellType:W})}if("inline"===K){var et=(0,b.jsx)(a.xu,{padding:1,rounding:1,color:"light",children:(0,b.jsx)(a.JO,{accessibilityLabel:C._('Pinterest logo', 'AppUpsellFooter.icon', 'Pinterest logo icon for app upsell footer'),color:"brandPrimary",icon:"pinterest",inline:!0,size:28})}),eo=C._('It\'s better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell'),ed=C._('Get similar recs and more', 'mweb.auth.referred_app_upsell.description4', 'description for referred app upsell');return W.endsWith("social-referred")&&D&&(eo=(0,b.jsx)(x.X,{variables:{inviteCode:D},children:function(e){var l,i,n;return(0,o.nk)(C._('{{ invitee }} shared this idea', 'mweb.auth.referred_app_upsell.heading5', 'heading for referred app upsell that has the invitee info'),{invitee:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(n=i.sender)||void 0===n?void 0:n.firstName)||""})}}),ed=C._('Open app to discover more', 'mweb.auth.referred_app_upsell.description6', 'description for referred app upsell'),D&&(et=(0,b.jsx)(x.X,{variables:{inviteCode:D},children:function(e){var l,i,n;return(0,b.jsx)(a.xu,{width:48,height:48,rounding:6,overflow:"hidden",children:(0,b.jsx)(a.Ee,{alt:C._('App upsell profile image', 'mweb.auth.referred_app_upsell.image1', 'image for referred app upsell, using invitee profile image'),src:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(n=i.sender)||void 0===n?void 0:n.imageMediumUrl)||"",fit:"cover",naturalWidth:1,naturalHeight:1})})}}))),(0,b.jsx)(h.Z,{app_upsell_type:W,children:function(e){var l=e.handleOpenApp;return(0,b.jsx)(a.xu,{alignItems:"center",direction:"row",display:"flex",height:74,width:"100%",zIndex:new a.Ry(99999),padding:4,dangerouslySetInlineStyle:{__style:{backgroundColor:"#F1F1F1"}},children:(0,b.jsx)(a.iP,{onTap:function(){(0,m.y)(),l()},children:(0,b.jsxs)(a.kC,{alignItems:"center",justifyContent:"start",direction:"row",width:"100%",children:[et,(0,b.jsxs)(a.xu,{marginStart:4,flex:"grow",children:[(0,b.jsx)(a.xu,{marginBottom:1,children:(0,b.jsx)(a.xv,{children:eo})}),(0,b.jsx)(a.xv,{weight:"bold",children:ed})]}),(0,b.jsx)(a.xu,{children:(0,b.jsx)(a.hU,{icon:"cancel",accessibilityLabel:"cancel",size:"sm",onClick:function(e){var l=e.event;H(),l.preventDefault(),l.stopPropagation()}})})]})})})}})}var ec=C._('Pinterest is better in the app', 'mweb.auth.referred_app_upsell.heading3', 'heading for referred app upsell');return W.endsWith("social-referred")&&D&&(ec=(0,b.jsx)(x.X,{variables:{inviteCode:D},children:function(e){var l,i,n;return(0,o.nk)(C._('Join {{ invitee }} on Pinterest', 'mweb.auth.referred_app_upsell.heading4', 'heading for referred app upsell that has the invitee info'),{invitee:(null===(l=e.v3GetInviteCodeQuery)||void 0===l?void 0:null===(i=l.data)||void 0===i?void 0:null===(n=i.sender)||void 0===n?void 0:n.firstName)||""})}})),(0,b.jsx)(r.default,{accessibilityModalLabel:C._('modal', 'mweb.auth.referred_app_upsell.modal_label', 'modal label'),closeOnOutsideClick:!1,isOpen:!0,onDismiss:function(){},mobileHideCloseIcon:!0,type:"app_upsell_v1",zIndex:new a.Ry(101),children:(0,b.jsxs)(a.xu,{padding:2,"data-test-id":"appUpsell-iframe",children:[(0,b.jsx)(a.xu,{display:"inlineBlock",position:"absolute",children:(0,b.jsx)(a.xu,{"data-test-id":"referred-app-upsell-close",marginStart:1,marginTop:1,children:(0,b.jsx)(a.hU,{accessibilityLabel:C._('close', 'mweb.auth.referred_app_upsell.close', 'close button'),icon:"cancel",onClick:H,size:"sm"})})}),(0,b.jsxs)(a.xu,{paddingX:2,marginTop:8,marginBottom:5,children:[(0,b.jsx)(a.xu,{paddingY:3,justifyContent:"center",display:"flex",children:R?(0,b.jsx)(f.Z,{size:N}):(0,b.jsx)(a.JO,{color:"brandPrimary",icon:"pinterest",accessibilityLabel:C._('Logo', 'mweb.auth.referred_app_upsell.logo', 'logo icon'),size:N})}),(0,b.jsx)(w,{description:C._('Save ideas, interact with friends, and get inspired', 'mweb.auth.referred_app_upsell.description3', 'description for referred app upsell'),handleDismiss:H,heading:ec,i18n:C,appUpsellType:W})]})]})})}},876437:function(e,l,i){i.d(l,{X:function(){return P},Z:function(){return z}});var n,a=i(704217),s=i(908390),r=i(947599),t=i(619277),o=i(356997),d=i(898781),c=i(667679),_=i(867820),p=i(63552),u=i(67347),h=i(515198);function m(e){var l=e.isStoryPin,i=e.inviteText,n=e.inviterFirstName,a=e.isThinnerStyle,r=e.username,t=i.split(n);return(0,h.jsx)(s.xu,{children:(0,h.jsx)(p.Z,{onTouch:function(){(0,u.nP)("mweb_social_unauth.closeup.social_text_click")},pressState:"none",children:(0,h.jsxs)(s.kC,{direction:"row",gap:{row:1,column:0},children:[(0,h.jsx)(s.xv,{inline:!0,size:"300",children:t[0]}),l?(0,h.jsx)(s.xv,{inline:!0,size:"300",weight:"bold",children:(0,h.jsx)(s.rU,{href:"/"+r,target:"blank",onClick:function(){return(0,_.My)("mweb_unauth_inviter_profile_click")},children:n})}):(0,h.jsx)(s.xv,{inline:!0,size:a?"200":"300",weight:a?"normal":"bold",children:(0,h.jsx)(s.rU,{href:"/"+r,target:"blank",onClick:function(){return(0,_.My)("mweb_unauth_inviter_profile_click_not_story")},children:n})}),(0,h.jsx)(s.xv,{inline:!0,size:a?"200":"300",children:t[1]})]})})})}function g(e){var l=e.inviter,i=e.socialContextBannerStyle,n=e.setShouldShowSocialUpsellBanner,a=i.shouldShowSignupUpsellText,r=i.isDismissible,t=(0,d.ZP)(),u=l.username,g=l.imageMediumUrl,x=l.firstName,f=(0,c.Z)();return(0,h.jsx)(s.kC,{justifyContent:r?"center":"start",alignItems:"center",children:(0,h.jsx)(s.xu,{children:(0,h.jsx)(s.iP,{fullHeight:!0,onTap:function(){(0,_.My)("dweb.unauth.social_banner.click"),f({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_desktop_unauth_social_context_banner",desktopOptions:{modalType:"signup",modalOptions:{source:"defaultSource",container:"pinWash"}}})},children:(0,h.jsxs)(s.xu,{alignItems:"center",direction:"row",display:"flex",height:44,width:r?1012:void 0,dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(233, 228, 255, 0.9)"}},marginTop:2,marginBottom:6,marginStart:r?0:2,paddingX:r?4:2,paddingY:4,rounding:"pill",position:r?"static":"absolute",top:!0,zIndex:new s.Ry(1),children:[(0,h.jsx)(s.xu,{marginTop:8,marginBottom:8,marginEnd:1,width:32,children:(0,h.jsx)(p.Z,{onTouch:function(e){e.stopPropagation(),u&&window.open("/"+u),(0,_.My)("dweb.unauth.social_banner.avatar_click")},pressState:"none",children:null!=g&&g.includes("default")?(0,h.jsx)(s.JO,{accessibilityLabel:"pinterest logo",color:"default",icon:"pinterest",size:24}):(0,h.jsx)(o.qE,{size:"fit",src:null!=g?g:void 0,name:x})})}),(0,h.jsxs)(s.kC,{flex:"grow",direction:"row",children:[(0,h.jsx)(m,{isStoryPin:!1,inviteText:a?(t._('{{ name }} shared this idea.', 'pin.closeup.long_banner.desktop.shareNotification', 'Long banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",x):(t._('{{ name }} shared this idea ', 'pin.closeup.banner.desktop.shareNotification', 'Banner notifying desktop users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",x),inviterFirstName:x,username:u,isThinnerStyle:a}),a&&(0,h.jsx)(s.xu,{marginStart:1,marginEnd:2,children:(0,h.jsx)(s.xv,{inline:!0,size:"200",weight:"bold",children:t._('Sign up to join them', 'pin.header.social_context_dweb', 'label')})})]}),r&&(0,h.jsx)(s.hU,{icon:"cancel",accessibilityLabel:"cancel",size:"sm",onClick:function(e){e.event.stopPropagation(),(0,_.My)("unauth.dweb.social_banner.dismiss"),null==n||n(!1)}})]})})})})}var x=i(773285),f=i(50286),y=i(598615),v=i(938917);function b(e){var l=e.inviter,i=l.imageMediumUrl,n=l.username,a=l.firstName,r=e.isStoryPin,t=(0,d.ZP)(),g=(0,x.F)().checkExperiment,b=(0,f.ml)(),j=function(){return(0,u.nP)("mweb_social_unauth.closeup.avatar_click")},P=(0,v.Z)(),z=(0,c.Z)(),w=(t._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them')).replace("{{ name }}",n),A="undefined"!=typeof window&&window.innerWidth<360,C=n.length>25,k=b&&!r&&g("mweb_social_context_header_upsell").anyEnabled,S=g("mweb_social_context_header_upsell").group;return P&&r?(0,h.jsxs)(s.kC,{gap:{row:2,column:0},alignItems:"center",justifyContent:"center",minHeight:C?100:80,children:[(0,h.jsx)(s.xu,{marginTop:4,marginBottom:4,width:40,children:(0,h.jsx)(p.Z,{onTouch:j,pressState:"none",children:(0,h.jsx)(o.qE,{size:"fit",src:null!=i?i:void 0,name:a})})}),(0,h.jsx)(s.kC.Item,{flex:"grow",children:(0,h.jsxs)(s.xu,{display:"flex",direction:C?"column":"row",alignItems:"center",justifyContent:C?"start":"between",padding:C?3:0,children:[(0,h.jsxs)(s.kC,{direction:"column",alignItems:"start",gap:{row:0,column:1},wrap:!A,children:[(0,h.jsx)(s.kC,{children:(0,h.jsxs)(s.xv,{align:C?"center":"start",children:[(0,h.jsx)(s.xv,{inline:!0,weight:"bold",children:(0,h.jsx)(s.rU,{display:"inlineBlock",href:"/".concat(null!=n?n:"","/"),target:"blank",onClick:function(){return(0,_.My)("mweb_unauth_inviter_profile_click")},underline:"hover",children:n})}),w.split(n)[1]]})}),!C&&(0,h.jsx)(s.xv,{size:"100",children:t._('Open Pinterest to see more', 'unauth.mweb.shared.banner.edu', 'education for CTA to open app on shared banner')})]}),(0,h.jsx)(s.xu,{display:"flex",justifyContent:"center",alignItems:"center",minWidth:C?0:100,marginTop:C?3:0,children:(0,h.jsx)(y.Z,{componentType:14161,app_upsell_type:"social-context-header",children:function(e){var l=e.handleOpenApp;return(0,h.jsx)(s.zx,{onClick:function(){return l()},size:"md",text:t._('Open app', 'unauth.mweb.shared.banner.cta', 'CTA to open app on shared banner')})}})})]})})]}):(0,h.jsx)(p.Z,{onTouch:function(){k&&z({reason:"UPSELL_LOGIN_OR_SIGNUP",attributionLabel:"tap_mobile_unauth_social_context_header"})},pressState:"none",children:(0,h.jsxs)(s.kC,{alignItems:"center",gap:4,justifyContent:"start",minHeight:80,children:[(0,h.jsx)(s.xu,{marginTop:4,marginStart:k?2:0,marginBottom:4,width:48,children:(0,h.jsx)(p.Z,{onTouch:j,pressState:"none",children:(0,h.jsx)(o.qE,{src:null!=i?i:void 0,name:a})})}),(0,h.jsxs)(s.kC,{alignItems:k?"start":"center",justifyContent:"start",direction:"column",children:[(0,h.jsx)(s.xu,{marginStart:k?-1:0,children:(0,h.jsx)(m,{isStoryPin:r,inviteText:k&&S.includes("join")?(t._('{{ name }} shared this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",a):k&&S.includes("converse")?(t._('{{ name }} sent an idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",a):k&&S.includes("explore")?(t._('{{ name }} sent this idea', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",a):(t._('{{ name }} shared this idea with you', 'pin.closeup.header.shareNotification', 'header notifying users that a sender ({{ name }}) shared a Pin to them, name: username')).replace("{{ name }}",a),inviterFirstName:a,username:n,isThinnerStyle:k})}),k&&(0,h.jsx)(s.xu,{marginTop:1,children:(0,h.jsx)(s.xv,{inline:!0,size:"300",weight:"bold",children:S.includes("join")?t._('Tap to join them on Pinterest', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):S.includes("converse")?t._('Tap to share feedback', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area'):S.includes("explore")&&t._('Tap to see more like it', 'pin.closeup.header.shareNotification.text', 'header notifying users to tap on area')})})]})]})})}var j=void 0!==n?n:n=i(329499),P=function(e){var l=e.children,i=e.variables;return l((0,a.useLazyLoadQuery)(j,i))};function z(e){var l=e.inviterFirstNameRef,i=e.isDesktop,n=e.isStoryPin,a=e.setShouldShowSocialUpsellBanner,o=e.socialContextBannerStyle;return(0,h.jsx)(r.Z,{children:(0,h.jsx)(t.ty,{children:function(e){return e?(0,h.jsx)(P,{variables:{inviteCode:e},children:function(e){var r,t,d=null===(r=e.v3GetInviteCodeQuery)||void 0===r?void 0:null===(t=r.data)||void 0===t?void 0:t.sender,c=null!=d?d:Object.freeze({}),_=c.firstName,p=c.imageMediumUrl,u=c.username;return _&&u?(l&&(l.current=_),i?(0,h.jsx)(g,{inviter:{firstName:_,imageMediumUrl:p,username:u},socialContextBannerStyle:null!=o?o:{isDismissible:!0,shouldShowSignupUpsellText:!0},setShouldShowSocialUpsellBanner:a}):(0,h.jsx)(s.xu,{dangerouslySetInlineStyle:{__style:{boxShadow:"0 1px 0 0 rgba(0, 0, 0, 0.08)"}},marginStart:-2,paddingX:2,marginEnd:-2,children:(0,h.jsx)(b,{inviter:{firstName:_,imageMediumUrl:p,username:u},isStoryPin:!!n})})):null}}):null}})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/13351-25aba1e06f734f7c.js.map