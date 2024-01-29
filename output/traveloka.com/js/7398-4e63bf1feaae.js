"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7398],{87398:function(e,r,t){t.d(r,{Z:function(){return S}});var n=t(74512),o=(t(32735),t(32083)),i=t(87904),c=t(6907),l=t(15099),a=t(31884),u=t(91827),f=t(95426),s=t.n(f);function d(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function b(e){return(0,n.jsx)(s(),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){d(e,r,t[r])}))}return e}({width:e.width,height:e.height,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)(f.Path,{d:"M6.5 12L10.5 16L18 8.5",stroke:e.accentColor,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}))}b.defaultProps={accentColor:"#687176",fillColor:"#0194F3",width:24,height:24};var h=b;function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){y(e,r,t[r])}))}return e}var g=c.Z.create({checkboxContainer:{margin:2,overflow:"hidden",alignItems:"center",justifyContent:"center"}}),v=function(e){var r=e.checked,t=e.color,o=e.size,c=e.disabled,a=e.error,f=e.indeterminate,s=function(e,r,t,n){var o=!t||e?l.Z.color.uiLightSecondary:l.Z.color.uiLightPrimary;return e?{backgroundColor:l.Z.color.uiLightNeutral,iconColor:o,borderColor:t?l.Z.color.uiLightNeutral:l.Z.color.uiLightSecondary}:r?{backgroundColor:t?l.Z.color.uiRedPrimary:l.Z.color.uiLightPrimary,iconColor:o,borderColor:l.Z.color.uiRedPrimary}:t?{backgroundColor:null!==n&&void 0!==n?n:l.Z.color.uiBluePrimary,iconColor:o,borderColor:null!==n&&void 0!==n?n:l.Z.color.uiBluePrimary}:{backgroundColor:l.Z.color.uiLightPrimary,iconColor:o,borderColor:l.Z.color.uiDarkSecondary}}(c,a,r||f,t),d=function(e){switch(e){case"large":return{containerSize:{width:28,height:28},iconSize:{width:24,height:24}};case"medium":default:return{containerSize:{width:20,height:20},iconSize:{width:16,height:16}};case"small":return{containerSize:{width:16,height:16},iconSize:{width:14,height:14}}}}(o);return(0,n.jsx)(i.Z,{style:[g.checkboxContainer,d.containerSize,{borderRadius:"small"===o?4:l.Z.border.radius.default,borderWidth:"large"===o?l.Z.border.width.bold:l.Z.border.width.thick,backgroundColor:s.backgroundColor,borderColor:s.borderColor}],children:f?(0,n.jsx)(u.Z,p({},d.iconSize,{accentColor:s.iconColor})):(0,n.jsx)(h,p({},d.iconSize,{accentColor:s.iconColor}))})},m=t(85004),w=t(19124),O=t(63914);function j(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function C(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){j(e,r,t[r])}))}return e}function P(e){var r=(0,w.Z)(),t=e.value,c=e.label,l=e.description,u=e.color,f=e.disabled,s=void 0!==f&&f,d=e.labelStyle,b=void 0===d?{}:d,h=e.style,y=e.accessibilityLabel,p=e.testID,g=e.size,m=void 0===g?"medium":g,O=e.error,j=e.indeterminate,C=void 0!==j&&j;return(0,n.jsxs)(o.Z,{accessible:!1,disabled:s,onPress:function(){var r=e.value;(0,e.onChange)(!r)},style:function(e){var r=e.pressed;return[k.container,h,{opacity:r?.2:1}]},children:[(0,n.jsx)(v,{color:u,checked:t,size:m,disabled:s,error:O,indeterminate:C}),!!c&&(0,n.jsxs)(i.Z,{style:k.labelContainer,children:[(0,n.jsx)(a.Z,{style:[k.label,{color:r.textPrimary},b],accessibilityLabel:y,testID:p,children:c}),!!l&&(0,n.jsx)(a.Z,{style:k.descriptionText,ink:s?"muted":"secondary",children:l})]})]})}P.smartKeyName=["label","description"];var S=(0,O.Z)((0,m.Z)(P)),k=c.Z.create({container:{flexDirection:"row",alignSelf:"flex-start",padding:l.Z.spacing.m},labelContainer:{marginLeft:l.Z.spacing.s,flexShrink:1},label:C({},l.Z.typography.uiBaseline),descriptionText:C({},l.Z.typography.uiTiny)})},85004:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(74512),o=t(32735),i=t(86058),c=t.n(i);function l(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function d(e,r){return!r||"object"!==y(r)&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function b(e,r){return b=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},b(e,r)}function h(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"===typeof e)return l(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return l(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function p(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=f(e);if(r){var o=f(this).constructor;t=Reflect.construct(n,arguments,o)}else t=n.apply(this,arguments);return d(this,t)}}function g(e){var r=function(r){!function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&b(e,r)}(l,r);var t,o,i,c=p(l);function l(e){var r;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,l),(r=c.call(this,e)).handleChange=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=r.props,c=i.onChange,l=i.onValueChange;!1===r.isControlled&&r.setState({value:e}),c&&c.apply(void 0,[e].concat(h(n))),l&&l.apply(void 0,[e].concat(h(n)))};var t=e.value,n=e.initialValue,o=e.defaultValue;return r.isControlled="undefined"!==typeof t&&"undefined"===typeof n&&"undefined"===typeof o,!1===r.isControlled&&(r.state={value:e.defaultValue||e.initialValue}),r}return t=l,o=[{key:"render",value:function(){var r=this.props,t=(r.onChange,r.onValueChange,s(r,["onChange","onValueChange"]));return(0,n.jsx)(e,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){u(e,r,t[r])}))}return e}({},t,{value:this.isControlled?this.props.value:this.state.value,onChange:this.handleChange,onValueChange:this.handleChange}))}}],o&&a(t.prototype,o),i&&a(t,i),l}(o.PureComponent);return c()(r,e)}},91827:function(e,r,t){var n=t(74512),o=(t(32735),t(95426)),i=t.n(o);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e){return(0,n.jsx)(i(),function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}({width:e.width,height:e.height,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,n.jsx)(o.Path,{d:"M5 12H19",stroke:e.accentColor,strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}))}l.defaultProps={accentColor:"#687176",fillColor:"#0194F3",width:24,height:24},r.Z=l}}]);