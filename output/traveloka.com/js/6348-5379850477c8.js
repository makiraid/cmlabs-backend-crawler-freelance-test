"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6348],{50455:function(e,t,i){var n=i(74512),r=i(32735),o=i(68695),a=i(87904),c=i(6907).Z.create({container:{overflow:"hidden",position:"relative"},blurredImg:{position:"absolute",zIndex:-1},realImage:{transition:"opacity 0.3s ease",zIndex:0}});t.Z=function(e){var t=e.src,i=e.blurPx,s=void 0===i?32:i,l=e.containerStyle,d=(0,r.useState)(!1),u=d[0],p=d[1],Z=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.Z,{onLoad:function(){p(!0)},loading:"lazy",style:[{opacity:u?1:0},c.realImage],height:"100%",width:"100%",src:t,objectFit:"cover",objectPosition:"top center"}),(0,n.jsx)(o.Z,{loading:"eager",importance:"high",imgixQuery:{w:200},height:"100%",width:"100%",style:[c.blurredImg,{filter:"blur(".concat(s,"px)")}],src:t,objectFit:"cover",objectPosition:"top center"})]});return(0,n.jsx)(a.Z,{style:[c.container,l],children:t?Z:null})}},21208:function(e,t,i){i.d(t,{Z:function(){return D}});var n=i(74512),r=i(67091),o=i(40925),a=i(32735),c=i(6907),s=i(87904),l=i(30273),d=i(93587),u=i(5006),p=i(92429),Z=i(32083),m=c.Z.create({dropdownOptionContainer:{paddingVertical:r.Z.spacing.m,paddingHorizontal:r.Z.spacing.m}});function g(e){var t=e.iconSrc,i=e.title,o=e.onSelect,a={backgroundColor:"".concat(r.Z.color.uiLightStain,"00"),transitionProperty:"background-color",transitionDuration:"".concat(r.Z.animation.timing.instant,"ms")},c={backgroundColor:"".concat(r.Z.color.uiLightNeutral,"ff")};return(0,n.jsx)(Z.Z,{focusable:!1,onPress:o,children:function(e){var r=e.hovered;return(0,n.jsx)(l.Z.View,{style:[m.dropdownOptionContainer,a,r&&c],children:(0,n.jsxs)(p.Z,{spacing:"xs",children:[t&&(0,n.jsx)(d.Z,{src:t,width:24}),(0,n.jsx)(u.Z,{variant:"ui-baseline",ink:"secondary",children:i})]})})}})}var h=i(31759),x=i(15961),f=i(95352),y=i(52446),v=i(87514),b=i(55903),C=i(12402),j=i(69389),w=i(80760),k=i(7809),P=i(35331),T=i(6883),A=a.memo(I);function I(e){var t,i,o,a=e.isHovered?r.Z.color.uiLightPrimary:r.Z.color.uiLightSecondary;switch(e.product){case"FLIGHT":t=x.Z,i=e.isActive?r.Z.color.brandHighAltitude:a;break;case"FLIGHT_CHECK_IN":t=f.Z,i=e.isActive?r.Z.color.uiDarkSecondary:a,o=e.isActive?r.Z.color.uiBluePrimary:a;break;case"FLIGHT_BAGGAGE":t=y.Z,i=e.isActive?r.Z.color.uiDarkSecondary:a,o=e.isActive?r.Z.color.uiBluePrimary:a;break;case"PACKAGE":t=T.Z,i=e.isActive?r.Z.color.brandFuchsiaFusion:a;break;case"HOTEL":t=v.Z,i=e.isActive?r.Z.color.brandGoodNight:a;break;case"TRAIN":t=b.Z,i=e.isActive?r.Z.color.brandSpeedLine:a;break;case"BUS":t=C.Z,i=e.isActive?r.Z.color.brandFieldTrip:a;break;case"AIRPORT_TRANSPORT":t=k.Z,i=e.isActive?r.Z.color.brandTerminalLounge:a;break;case"VEHICLE_RENTAL":t=j.Z,i=e.isActive?r.Z.color.brandFuelTank:a;break;case"EXPERIENCE":t=w.Z,i=e.isActive?r.Z.color.brandCoralReef:a;break;default:t=P.Z,i=a}return(0,n.jsx)(t,{color:i,accentColor:o||i,height:r.Z.spacing.l,width:r.Z.spacing.l})}var S=i(98194),L=c.Z.create({itemPillContainer:{borderRadius:25,paddingHorizontal:r.Z.spacing.m,paddingVertical:r.Z.spacing.xs,height:"100%",userSelect:"none"},itemPillText:{fontWeight:"700",textAlign:"center"},inactiveText:{color:r.Z.color.uiLightSecondary},activeText:{color:r.Z.color.uiDarkPrimary},hoveredText:{color:r.Z.color.uiLightPrimary}});function E(e){var t="boolean"===typeof e.isDropdownActive&&e.isDropdownActive,i={backgroundColor:e.isActive?r.Z.color.uiLightPrimary:"transparent"},o={transform:[{rotate:t?"-180deg":"0deg"}]};return(0,n.jsx)(h.Z,{children:function(t){return(0,n.jsxs)(Z.Z,{onPress:!e.isActive||e.isDropdown?e.onClick:null,onBlur:e.onBlur,style:[L.itemPillContainer,i,{borderColor:t?r.Z.color.uiLightPrimary:"transparent",borderWidth:1,flexDirection:"vertical"===e.displayType?"column":"row"}],children:[(0,n.jsx)(s.Z,{style:{justifyContent:"center",alignItems:"center"},children:(0,n.jsx)(A,{product:e.productType,isActive:e.isActive,isHovered:t})}),(0,n.jsxs)(s.Z,{style:{flexDirection:"row",justifyContent:"center",marginTop:"vertical"===e.displayType?r.Z.spacing.xs:0},children:[(0,n.jsx)(u.Z,{variant:"ui-baseline",style:[L.itemPillText,{marginLeft:"vertical"===e.displayType?0:r.Z.spacing.xs},e.isActive?L.activeText:t?L.hoveredText:L.inactiveText],children:e.text}),e.isDropdown&&(0,n.jsx)(s.Z,{style:[o,{alignItems:"center",justifyContent:"center"}],children:(0,n.jsx)(S.default,{color:e.isActive?r.Z.color.uiDarkSecondary:t?r.Z.color.uiLightPrimary:r.Z.color.uiLightSecondary,width:"vertical"===e.displayType?r.Z.spacing.ml:r.Z.spacing.l})})]})]})}})}var V=c.Z.create({root:{position:"relative",zIndex:1},selectorContainer:{gap:r.Z.spacing.xxs,flexDirection:"row",display:"flex"},product:{position:"relative",zIndex:1,height:"100%"},dropdownContainer:{position:"absolute",top:"calc(100% + 10px)",right:r.Z.spacing.xs,zIndex:100,width:"max-content"},dropdownItemsContainer:{display:"flex"},divider:{marginVertical:r.Z.spacing.xs,borderLeftWidth:r.Z.border.width.thin,borderColor:r.Z.color.borderDivide,borderStyle:"solid"}});function D(e){var t=e.products,i=e.selectedProductKey,r=e.onSelect,o=e.isProductPillContentVertical;return(0,n.jsx)(s.Z,{style:V.root,children:(0,n.jsx)(s.Z,{style:V.selectorContainer,children:t.map((function(e){return(0,n.jsx)(z,{product:e,selectedProductKey:i,onSelectProductItem:function(t){return function(e,t){r(e.productKey,t.itemKey,t.url)}(e,t)},isProductPillContentVertical:o},e.productKey)}))})})}function z(e){var t=e.product.productItems,i=e.selectedProductKey,c=e.onSelectProductItem,d=e.isProductPillContentVertical,u=r.Z.spacing.m,p=(0,a.useState)(t[0]),Z=p[0],m=p[1],h=(0,a.useState)(!1),x=h[0],f=h[1],y=(0,a.useState)(!1),v=y[0],b=y[1],C=(0,a.useRef)(new l.Z.Value(0)).current,j=(0,a.useRef)(new l.Z.Value(0)).current,w=(0,a.useRef)(new l.Z.Value(u)).current,k=(t.length>0?t[0].itemKey:Z.itemKey)===i,P=function(){b(!0),f(!0),l.Z.sequence([l.Z.timing(C,{toValue:1,duration:100}),l.Z.parallel([l.Z.timing(j,{toValue:1,duration:150}),l.Z.timing(w,{toValue:0,duration:150})])]).start()},T=function(){f(!1),l.Z.sequence([l.Z.parallel([l.Z.timing(j,{toValue:0,delay:100,duration:100}),l.Z.timing(w,{toValue:u,delay:100,duration:100}),l.Z.timing(C,{toValue:0,delay:100,duration:100})])]).start((function(e){e.finished&&b(!1)}))};return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(s.Z,{style:[V.product,d&&{minWidth:100,maxWidth:180}],children:[(0,n.jsx)(E,{isActive:k,text:Z.title,onClick:function(){1===t.length?c(Z):x?T():(c(Z),P())},isDropdown:t.length>1,productType:Z.itemKey,onBlur:function(){T()},isDropdownActive:v,displayType:d?"vertical":"horizontal"}),v&&(0,n.jsx)(l.Z.View,{style:[V.dropdownContainer,{transformOrigin:"top center"},{transform:[{scaleY:C}]},{left:0}],children:(0,n.jsx)(o.Z,{style:V.dropdownItemsContainer,elevation:"float",children:(0,n.jsx)(l.Z.View,{style:{opacity:j,transform:[{translateY:w}],flexDirection:"row"},children:t.map((function(e,i){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{iconSrc:e.iconSrc,title:e.title,onSelect:function(){return function(e){m(e),c(e)}(e)}},e.itemKey),i!==t.length-1&&(0,n.jsx)(F,{})]})}))})})})]})})}function F(){return(0,n.jsx)(s.Z,{style:[V.divider,{backgroundColor:r.Z.color.uiLightNeutral}]})}},25879:function(e,t,i){var n=i(74512),r=i(67091),o=i(5006),a=i(59595),c=i(32735),s=i(6907),l=i(18662),d=i(87904),u=i(30273),p=s.Z.create({cover:{position:"fixed",top:0,left:0,width:"100%",height:"100%",pointerEvents:"all",backgroundColor:"#232a31",transitionProperty:"opacity",transitionDuration:"".concat(r.Z.animation.timing.instant,"ms"),zIndex:1},mainContainer:{position:"relative",marginTop:r.Z.spacing.m,maxHeight:600,zIndex:5},titleContainer:{marginHorizontal:r.Z.spacing.s,display:"flex",alignItems:"center"},mainContentContainer:{position:"relative",zIndex:0,overflow:"visible",marginTop:r.Z.spacing.l},mainContent:{display:"flex",flexDirection:"row",transform:[{translate:"0"}]},selector:{backgroundColor:"transparent",borderTopLeftRadius:r.Z.border.radius.normal,borderBottomLeftRadius:r.Z.border.radius.normal,marginBottom:r.Z.spacing.xs,zIndex:1,position:"relative"},minimizeSelector:{flex:1,justifyContent:"center",alignItems:"center",minWidth:16,maxWidth:16,borderLeftStyle:"solid",borderLeftWidth:1,borderLeftColor:r.Z.color.uiLightSecondary},formContent:{flexGrow:1,flexShrink:1,minHeight:75},footerContainer:{borderTopWidth:2,borderTopColor:r.Z.color.borderDivide},topContent:{transform:[{translateY:"-100%"}],position:"absolute"},bottomContentContainer:{position:"relative"},bottomContent:{position:"absolute"}});function Z(e,t){var i=e.title,s=e.mainContent,Z=e.selectorContent,m=e.isSearchBoxFocused,g=e.onFocus,h=e.onBlur,x=(0,c.useState)(m),f=x[0],y=x[1];(0,c.useEffect)((function(){y(m),m||v("other")}),[m]),(0,c.useEffect)((function(){var e=function(e){27!==e.keyCode&&"Escape"!==e.key&&"Escape"!==e.code||y((function(e){return e&&v("pressEscape"),e}))};return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}}),[]),(0,c.useImperativeHandle)(t,(function(){return{focus:function(){b()},blur:function(){v("other")}}}));var v=function(e){y(!1),setTimeout((function(){h&&h(e)}),r.Z.animation.timing.instant)},b=function(){f||(setTimeout((function(){m&&y(!0)}),r.Z.animation.timing.instant),g&&g())};return(0,n.jsxs)(n.Fragment,{children:[m&&(0,n.jsx)(l.Z,{onPress:function(){return v("clickCover")},children:(0,n.jsx)(d.Z,{style:[p.cover,{opacity:f?.9:0}]})}),(0,n.jsxs)(d.Z,{style:{zIndex:"auto",position:"relative"},children:[i&&(0,n.jsx)(d.Z,{style:p.titleContainer,children:(0,n.jsx)(o.Z,{variant:"display",ink:"white",style:{lineHeight:r.Z.spacing.xxxxl},children:i})}),(0,n.jsx)(l.Z,{onPress:b,onFocus:b,children:(0,n.jsx)(d.Z,{style:p.mainContainer,children:(0,n.jsxs)(d.Z,{style:[{padding:r.Z.spacing.s,borderRadius:r.Z.border.radius.normal,backgroundColor:f?"rgba(0, 0, 0, 0.5)":"transparent",borderWidth:2,borderColor:f?r.Z.color.uiLightSecondary:"transparent"}],children:[(0,n.jsx)(u.Z.View,{style:[p.selector],children:Z}),(0,n.jsx)(a.Z,{}),(0,n.jsx)(d.Z,{style:p.mainContentContainer,children:(0,n.jsx)(d.Z,{style:p.mainContent,children:(0,n.jsx)(d.Z,{style:p.formContent,children:s})})})]})})})]})]})}t.Z=(0,c.forwardRef)(Z)}}]);