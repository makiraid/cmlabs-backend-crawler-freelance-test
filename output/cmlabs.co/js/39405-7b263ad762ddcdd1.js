"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[39405],{139405:function(e,t,r){r.d(t,{pb:function(){return N},nf:function(){return j},lV:function(){return I}});var n=r(76911),a=r(506979),o=r(674631),u=r.n(o),i=r(214494),c=r(425288),d=r(186656),s=r(505920),g=r(594736),m=r(767546);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){y(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function y(e,t,r){var n;return(n=function(e,t){if("object"!==l(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==l(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"===l(n)?n:String(n))in e)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var _={feature_map:Object.freeze({})},E=function(e,t){var r=p(p(p(p({},(0,m.Z)(e,t)),t.reaction_counts?{reaction_counts:t.reaction_counts}:Object.freeze({})),t.tags?{tags:t.tags}:Object.freeze({})),t.tagged_users?{tagged_users:t.tagged_users}:Object.freeze({}));return(0,g.ZP)(e,r)?e:r},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;if("FETCH_COMPLETE"===t.type){var r=t.payload.resource,n=t.payload.response.resource_response.data;if("AggregatedCommentFeedResource"===r||"AggregatedCommentReplyFeedResource"===r||"DidItCommentsResource"===r){var a=(n||[]).reduce(function(t,r){return t[r.id]=E(e[r.id],r),t},{});return p(p({},e),a)}if("UnifiedCommentsResource"===r&&n&&n.length>0){var o=n.filter(function(e){return"aggregatedcomment"===e.type}).reduce(function(t,r){return t[r.id]=E(e[r.id],r),t},{});return p(p({},e),o)}if("UnifiedCommentsPreviewResource"===r&&n&&n.length>0){var u=n[0].aggregated_comment,i=u?y({},u.id,E(e[u.id],u)):{},c=n[0].creator_reply,d=c?y({},c.id,E(e[c.id],c)):{};return p(p(p({},e),i),d)}if("AggregatedCommentFeaturesResource"===r&&n&&Object.keys(n).length>0)return p(p({},e),{},{feature_map:n})}else if("AGGREGATED_COMMENT_CREATED"===t.type){var s=t.payload.aggregatedComment;return s.id?p(p({},e),{},y({},s.id,s)):e}else if("AGGREGATED_COMMENT_DELETED"===t.type||"AGGREGATED_COMMENT_HIDDEN"===t.type){var g=t.payload.aggregatedCommentId,m=p({},e);return delete m[g],m}else if("AGGREGATED_COMMENT_HIDDEN_FOR_USER"===t.type){var l=t.payload.userId;return Object.fromEntries(Object.entries(e).filter(function(e){var t;return(null===(t=e[1].user)||void 0===t?void 0:t.id)!==l}))}else if("AGGREGATED_COMMENT_UPDATED"===t.type){var f=t.payload.data;return p(p({},e),{},y({},f.id,E(e[f.id],f)))}else if("AGGREGATED_COMMENT_LIKE_TOGGLED"===t.type){var v=t.payload.data,T=e[v.id],O=T.reaction_counts[1]||0,b=y({},1,v.reaction_by_me?O+1:O-1),C=p(p({},T),{},{reaction_by_me:v.reaction_by_me,reaction_counts:b});return p(p({},e),{},y({},v.id,C))}else if("AGGREGATED_COMMENT_HELPFUL_TOGGLED"===t.type){var A=t.payload.data,h=e[A.id],G=h.helpful_count||0,D=A.marked_helpful_by_me?G+1:G-1,R=p(p({},h),{},{marked_helpful_by_me:A.marked_helpful_by_me,helpful_count:D});return p(p({},e),{},y({},A.id,R))}else if("AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED"===t.type){var M=t.payload.data,N=p(p({},e[M.aggregated_comment_id]),{},{highlighted_by_pin_owner:M.is_highlighted});return p(p({},e),{},y({},M.aggregated_comment_id,N))}else if("AGGREGATED_COMMENT_FEATURES_UPDATED"===t.type){var j=t.payload.data.featureMap;return p(p({},e),{},{feature_map:p(p({},e.feature_map),j)})}else if("UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT"===t.type){var I=t.payload,P=I.increment,S=I.id,w=e[S];if(!w)return e;var L=p(p({},w),{},{comment_count:w.comment_count+P});return p(p({},e),{},y({},S,L))}else if("DELETE_COMMENT_MENTION"===t.type){var U=t.payload,H=U.aggregatedCommentId,x=U.tagged_users,F=p(p({},e[H]),{},{tagged_users:x});return p(p({},e),{},y({},H,F))}else if("GET_COMMENT_TRANSLATION"===t.type){var k=t.payload,Z=k.aggregatedCommentId,z=k.translatedText,B=p(p({},e[Z]),{},{translatedText:z});return p(p({},e),{},y({},Z,B))}return e},T=r(515198);function O(e){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t,r,n,a,o,u){try{var i=e[o](u),c=i.value}catch(e){r(e);return}i.done?t(c):Promise.resolve(c).then(n,a)}function C(e){return function(){var t=this,r=arguments;return new Promise(function(n,a){var o=e.apply(t,r);function u(e){b(o,n,a,u,i,"next",e)}function i(e){b(o,n,a,u,i,"throw",e)}u(void 0)})}}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){var n,a;n=t,a=r[t],(n=function(e){var t=function(e,t){if("object"!==O(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==O(n))return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===O(t)?t:String(t)}(n))in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var D=(0,c.Z)("AggregatedComments"),R=D.Provider,M=D.useHook;function N(e){var t,r=e.children,o=(0,a.useSelector)(function(e){return e.resources.UnifiedCommentsResource}),u=_;o&&Object.values(o).forEach(function(e){var t,r=null===(t=e.data)||void 0===t?void 0:t.filter(function(e){return"aggregatedcomment"===e.type}),n=null==r?void 0:r.reduce(function(e,t){return e[t.id]=E(u[t.id],t),e},{});u=G(G({},u),n)});var i=function(e){if(Array.isArray(e))return e}(t=(0,n.useReducer)(v,u))||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,o,u,i=[],c=!0,d=!1;try{if(o=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=o.call(r)).done)&&(i.push(n.value),i.length!==t);c=!0);}catch(e){d=!0,a=e}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(d)throw a}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return A(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),c=i[0],d=i[1],g=function(e){d({type:"FETCH_COMPLETE",payload:e})};(0,s.Z8)("AggregatedCommentFeaturesResource",g),(0,s.my)("AggregatedCommentFeaturesResource",g),(0,s.Z8)("AggregatedCommentFeedResource",g),(0,s.my)("AggregatedCommentFeedResource",g),(0,s.Z8)("AggregatedCommentReplyFeedResource",g),(0,s.my)("AggregatedCommentReplyFeedResource",g),(0,s.Z8)("DidItCommentsResource",g),(0,s.my)("DidItCommentsResource",g),(0,s.Z8)("UnifiedCommentsPreviewResource",g),(0,s.my)("UnifiedCommentsPreviewResource",g),(0,s.Z8)("UnifiedCommentsResource",g),(0,s.my)("UnifiedCommentsResource",g);var m=(0,n.useMemo)(function(){return{aggregatedComments:c,dispatch:d}},[c,d]);return(0,T.jsx)(R,{value:m,children:r})}function j(){var e=M().dispatch;return(0,n.useMemo)(function(){var t,r,n,a,o,c;return{aggregatedCommentCreated:function(t,r){e({type:"AGGREGATED_COMMENT_CREATED",payload:{parentId:t,aggregatedComment:r}})},aggregatedCommentDeleted:function(t,r){e({type:"AGGREGATED_COMMENT_DELETED",payload:{parentId:t,aggregatedCommentId:r}})},aggregatedCommentHidden:function(t){e({type:"AGGREGATED_COMMENT_HIDDEN",payload:{aggregatedCommentId:t}})},aggregatedCommentsHiddenForUser:function(t){e({type:"AGGREGATED_COMMENT_HIDDEN_FOR_USER",payload:{userId:t}})},flagAggregatedComment:(t=C(regeneratorRuntime.mark(function e(t){var r,n,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commentId,n=t.reason,a=t.detailedReasons,e.abrupt("return",(0,d.Z)({url:"/v3/aggregated_comments/".concat(r,"/flag/"),method:"PUT",data:{commentId:r,reason:n,detailedReasons:a}}));case 2:case"end":return e.stop()}},e)})),function(e){return t.apply(this,arguments)}),deleteCommentMention:(r=C(regeneratorRuntime.mark(function t(r){var n,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.Z)({url:"/v3/aggregated_comments/".concat(r,"/mentions/"),method:"DELETE",data:{fields:["aggregatedcomment.id","aggregatedcomment.tagged_users"]}});case 2:e({type:"DELETE_COMMENT_MENTION",payload:{aggregatedCommentId:(a=null!==(n=t.sent.resource_response.data)&&void 0!==n?n:{}).id,tagged_users:a.tagged_users}});case 6:case"end":return t.stop()}},t)})),function(e){return r.apply(this,arguments)}),translateAggregatedComment:(n=C(regeneratorRuntime.mark(function t(r){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,d.Z)({url:"/v3/aggregated_comments/".concat(r,"/translate/"),method:"GET"});case 3:e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:r,translatedText:null!==(n=t.sent.resource_response.data)&&void 0!==n?n:""}}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(0),e({type:"GET_COMMENT_TRANSLATION",payload:{aggregatedCommentId:r,translatedText:""}});case 13:case"end":return t.stop()}},t,null,[[0,9]])})),function(e){return n.apply(this,arguments)}),toggleAggregatedCommentHelpful:function(t){var r=t.aggregatedCommentId,n=t.isMarkedHelpfulByMe;(0,d.Z)({url:"/v3/helpful/1/".concat(r,"/"),method:n?"DELETE":"POST"}),e({type:"AGGREGATED_COMMENT_HELPFUL_TOGGLED",payload:{data:{id:r,marked_helpful_by_me:!n}}})},toggleAggregatedCommentHighlight:(a=C(regeneratorRuntime.mark(function t(r){var n,a,o;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=r.aggregatedCommentId,a=r.pinId,o=r.isHighlighted,u()(n,"Could not find comment"),u()(a,"Could not find Pin"),t.next=5,(0,d.Z)({url:"/v3/aggregated_comments/pin/highlight/",method:"PUT",data:{aggregated_comment:n,pin:a,highlight:!o}});case 5:e({type:"AGGREGATED_COMMENT_HIGHLIGHT_TOGGLED",payload:{data:{aggregated_comment_id:n,pin_id:a,is_highlighted:!o}}});case 6:case"end":return t.stop()}},t)})),function(e){return a.apply(this,arguments)}),toggleAggregatedCommentLike:function(t){var r=t.aggregatedCommentId,n=t.isLikedByMe;(0,d.Z)({url:"/v3/aggregated_comments/".concat(r,"/react/"),method:n?"DELETE":"POST",data:{reaction_type:1}}),e({type:"AGGREGATED_COMMENT_LIKE_TOGGLED",payload:{data:{id:r,reaction_by_me:n?0:1}}})},updateAggregatedComment:(o=C(regeneratorRuntime.mark(function t(r){var n,a,o,u,c,d,s;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.commentId,o=r.force,u=r.orbacSubjectId,c=r.tags,d=r.text,t.next=3,i.Z.create("AggregatedCommentResource",G({commentId:a,force:o,tags:c,text:d},u?{orbacSubjectId:u}:{})).callUpdate({showError:!1});case 3:s=(null!==(n=t.sent.resource_response.data)&&void 0!==n?n:{}).tagged_users.map(function(e){return G({},e)}),e({type:"AGGREGATED_COMMENT_UPDATED",payload:{data:{id:a,tagged_users:s,tags:JSON.parse(c),text:d}}});case 8:case"end":return t.stop()}},t)})),function(e){return o.apply(this,arguments)}),updateAggregatedCommentFeatures:(c=C(regeneratorRuntime.mark(function t(r){var n,a,o,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=r.userId,o=r.featureMap,u=r.passcode,t.next=3,i.Z.create("AggregatedCommentFeaturesResource",{userId:a,featureMap:o,passcode:u}).callUpdate({showError:!1});case 3:e({type:"AGGREGATED_COMMENT_FEATURES_UPDATED",payload:{data:{featureMap:null!==(n=t.sent.resource_response.data)&&void 0!==n?n:Object.freeze({})}}});case 7:case"end":return t.stop()}},t)})),function(e){return c.apply(this,arguments)}),updateCommentCount:function(t,r){e({type:"UPDATE_AGGREGATED_COMMENT_COMMENT_COUNT",payload:{increment:r,id:t}})}}},[e])}function I(){return M().aggregatedComments}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/39405-7b263ad762ddcdd1.js.map