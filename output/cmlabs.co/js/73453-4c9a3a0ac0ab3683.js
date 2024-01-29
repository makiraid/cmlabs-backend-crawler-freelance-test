"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[73453],{273453:function(e,t,n){n.d(t,{sO:function(){return O},Dw:function(){return C},HL:function(){return m},nC:function(){return b},MC:function(){return M},nU:function(){return R},jn:function(){return N},vg:function(){return v},dd:function(){return h},Sx:function(){return D},Dl:function(){return L},Un:function(){return P},KJ:function(){return I}});var r=n(76911),o=n(599689),a=n(425288),s=n(773285);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==i(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var u={payload:{},type:null},p={businessId:"",business:null,managerId:"",manager:null,businessHierarchyId:"",businessHierarchy:null,detailId:"",profile:null,adAccount:null,partnerId:"",employeeId:"",intents:u,modal:{modalType:null}};function c(){var e,t,n,r,o,a,s,i,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case"SET_ROUTER_PARAMS":return d(d({},l),{},{businessId:null!==(e=c.payload.businessId)&&void 0!==e?e:"",detailId:null!==(t=c.payload.detailId)&&void 0!==t?t:""});case"SET_SELECTED_BUSINESS":return d(d({},l),{},{businessId:null!==(n=null===(r=c.payload.business)||void 0===r?void 0:r.user.id)&&void 0!==n?n:"",business:c.payload.business});case"SET_SELECTED_BUSINESS_HIERARCHY":return d(d({},l),{},{businessHierarchyId:(null===(o=c.payload.businessHierarchy)||void 0===o?void 0:o.id)||"",businessHierarchy:c.payload.businessHierarchy});case"SET_SELECTED_ORGANIZATION_MANAGER":return d(d({},l),{},{managerId:null!==(a=null===(s=c.payload.manager)||void 0===s?void 0:s.user.id)&&void 0!==a?a:"",manager:c.payload.manager});case"SET_SELECTED_DETAIL":return d(d({},l),{},{detailId:null!==(i=c.payload.detailId)&&void 0!==i?i:""});case"SET_SELECTED_PROFILE":return d(d({},l),{},{profile:c.payload.profile});case"SET_SELECTED_AD_ACCOUNT":return d(d({},l),{},{adAccount:c.payload.adAccount});case"SET_SELECTED_PARTNER_ID":return d(d({},l),{},{partnerId:c.payload.partnerId});case"SET_SELECTED_EMPLOYEE_ID":return d(d({},l),{},{employeeId:c.payload.employeeId});case"CLEAR_INTENT":case"OPEN_SHEET":return d(d({},l),{},{intents:function(e,t){switch(t.type){case"CLEAR_INTENT":return u;case"OPEN_SHEET":return{type:t.type,payload:t.payload};default:return e}}(l.intents,c)});case"SET_MODAL":case"CLEAR_MODAL":return d(d({},l),{},{modal:function(e,t){switch(t.type){case"SET_MODAL":return t.payload;case"CLEAR_MODAL":return{modalType:null};default:return e}}(l.modal,c)});default:return l}}var E=n(515198);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach(function(t){var r,o;r=t,o=n[t],(r=function(e){var t=function(e,t){if("object"!==y(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==y(r))return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===y(t)?t:String(t)}(r))in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var S=(0,a.Z)("BusinessAccess"),f=S.Provider,m=S.useHook;function O(e){var t,n=e.children,o=function(e){if(Array.isArray(e))return e}(t=(0,r.useReducer)(c,p))||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a,s,i=[],l=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);l=!0);}catch(e){d=!0,o=e}finally{try{if(!l&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw o}}return i}}(t,2)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}}(t,2)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),a=o[0],s=o[1],i=(0,r.useMemo)(function(){return{setRouterParams:function(e){return s({type:"SET_ROUTER_PARAMS",payload:{detailId:e.detailId,businessId:e.businessId}})},setSelectedBusiness:function(e){return s({type:"SET_SELECTED_BUSINESS",payload:{business:e}})},setSelectedOrganizationManager:function(e){return s({type:"SET_SELECTED_ORGANIZATION_MANAGER",payload:{manager:e}})},setSelectedBusinessHierarchy:function(e){return s({type:"SET_SELECTED_BUSINESS_HIERARCHY",payload:{businessHierarchy:e}})},setSelectedDetail:function(e){return s({type:"SET_SELECTED_DETAIL",payload:{detailId:e.detailId}})},setSelectedProfile:function(e){return s({type:"SET_SELECTED_PROFILE",payload:{profile:e}})},setSelectedAdAccount:function(e){return s({type:"SET_SELECTED_AD_ACCOUNT",payload:{adAccount:e}})},setSelectedPartnerId:function(e){return s({type:"SET_SELECTED_PARTNER_ID",payload:{partnerId:null!=e?e:""}})},setSelectedEmployeeId:function(e){return s({type:"SET_SELECTED_EMPLOYEE_ID",payload:{employeeId:null!=e?e:""}})},clearIntent:function(){return s({type:"CLEAR_INTENT"})},openSheet:function(e){return s({type:"OPEN_SHEET",payload:e})},setAddPeopleModal:function(){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE"}})},setAddPeopleInviteConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_CONFIRMATION",modalProps:{inviteIds:e.inviteIds,role:e.role,isPendingTabActive:e.isPendingTabActive}}})},setAddPeopleInviteWithAssetsConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PEOPLE_INVITE_WITH_ASSETS_CONFIRMATION",modalProps:{inviteIds:e.inviteIds,invitedPeopleIdentifiers:e.invitedPeopleIdentifiers}}})},setAddPartnerInviteConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_INVITE_CONFIRMATION",modalProps:{selectedId:e.selectedId,role:e.role,inviteId:e.inviteId}}})},setRemovePersonModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_PERSON",modalProps:e}})},setRemoveProfilePermissionsModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_PROFILE_PERMISSIONS",modalProps:{userData:e.userData,selectionType:e.selectionType,profileId:e.profileId,profileName:e.profileName,dataToRefresh:e.dataToRefresh,refreshData:e.refreshData}}})},setEditPersonRoleModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"EDIT_PERSON_ROLE",modalProps:e}})},setInviteRequestPartnerModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"INVITE_REQUEST_PARTNER",modalProps:{partnershipType:null==e?void 0:e.partnershipType,pageForLogger:null==e?void 0:e.pageForLogger}}})},setRequestPartnerConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION",modalProps:{partnerId:e.partnerId,role:e.role,requestId:e.requestId}}})},setRequestPartnerConfirmationSuccessModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CREATE_PARTNER_REQUEST_CONFIRMATION_SUCCESS",modalProps:{requestId:e.requestId}}})},setRemoveChildBusinessModal:function(){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_CHILD_BUSINESS"}})},setRemoveOrganizationManagerModal:function(){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_ORGANIZATION_MANAGER"}})},setRemovePartnerModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_PARTNER",modalProps:T({},e)}})},setRemoveSharedPartnerModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_PARTNER",modalProps:T({},e)}})},setRemoveSharedAdAccountModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_SHARED_AD_ACCOUNT",modalProps:T({},e)}})},setCreateAdAccountModal:function(){return s({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT"}})},setCreateAdAccountConfirmationModal:function(e){var t=e.ownerInfo;return s({type:"SET_MODAL",payload:{modalType:"CREATE_AD_ACCOUNT_CONFIRMATION",modalProps:{accountInfo:e.accountInfo,ownerInfo:t,refreshData:e.refreshData}}})},setAssignAdAccountsModal:function(e){var t=e.selectedIds,n=e.selectionType,r=e.dataToRefresh,o=e.assignmentType,a=e.inviteIds;return s({type:"SET_MODAL",payload:{modalType:"ASSIGN_AD_ACCOUNTS",modalProps:{selectedIds:t,selectionType:n,dataToRefresh:r,assignmentType:o,peopleIdentifiers:e.peopleIdentifiers,inviteIds:a,roleType:e.roleType,showProfiles:e.showProfiles}}})},setRequestAdAccountsModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REQUEST_AD_ACCOUNTS",modalProps:{requestId:e.requestId,partnerId:e.partnerId}}})},setRequestAdAccountsGeneralModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REQUEST_AD_ACCOUNTS_GENERAL",modalProps:{partner:e.partner,adAccountsRequested:e.adAccountsRequested}}})},setEditAdAccountAccessModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"EDIT_AD_ACCOUNT_ACCESS",modalProps:{resourceId:e.resourceId,principalId:e.principalId,dataToRefresh:e.dataToRefresh,assignmentType:e.assignmentType,rolesForAoaa:e.rolesForAoaa,clientBusinessId:e.clientBusinessId}}})},setRemoveAdAccountAccessModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_AD_ACCOUNT_ACCESS",modalProps:{resourceId:e.resourceId,principalId:e.principalId,dataToRefresh:e.dataToRefresh,assignmentType:e.assignmentType}}})},setOnboardingModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ONBOARDING",modalProps:{onComplete:e.onComplete,onDismiss:e.onDismiss}}})},setSwitchAdAccountModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"SWITCH_AD_ACCOUNT",modalProps:{id:e.id,name:e.name,owner_user_id:e.owner_user_id,merchant_id:e.merchant_id}}})},setAssignProfilesModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ASSIGN_PROFILES",modalProps:{selectedIds:e.selectedIds,selectionType:e.selectionType,dataToRefresh:e.dataToRefresh,assignmentType:e.assignmentType,refreshData:e.refreshData}}})},setAssignAssetsModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ASSIGN_ASSETS",modalProps:{selectedIds:e.selectedIds,inviteId:e.inviteId,dataToRefresh:e.dataToRefresh}}})},setRequestProfileAccessModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"REQUEST_PROFILE_ACCESS",modalProps:{requestId:e.requestId,requesteeId:e.requesteeId,adAccounts:e.adAccounts}}})},setRequestProfileAccessGeneralModal:function(){return s({type:"SET_MODAL",payload:{modalType:"REQUEST_PROFILE_ACCESS_GENERAL"}})},setAssetGroupsFormModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ASSET_GROUPS_FORM",modalProps:e}})},setShareTagModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_FORM",modalProps:e}})},setShareTagSummaryModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_SUMMARY_FORM",modalProps:e}})},setShareTagLegalModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_LEGAL_FORM",modalProps:e}})},setTagGetStartedModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"SHARE_TAG_GET_STARTED_FORM",modalProps:e}})},setDeleteAssetGroupConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"DELETE_ASSET_GROUP_CONFIRMATION",modalProps:e}})},setAOAAPermissionAssignmentModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"AOAA_PERMISSION_ASSIGNMENT",modalProps:{partnerBusinessInfo:e.partnerBusinessInfo,ownerInfo:e.ownerInfo,accountInfo:e.accountInfo}}})},setUnsavedPermissionsConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"UNSAVED_PERMISSIONS_CONFIRMATION",modalProps:{partnerBusinessInfo:e.partnerBusinessInfo,ownerInfo:e.ownerInfo,accountInfo:e.accountInfo}}})},setAOAARequestCreationSuccessModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"AOAA_REQUEST_CREATION_SUCCESS",modalProps:{partnerBusinessInfo:e.partnerBusinessInfo,ownerInfo:e.ownerInfo,businessIdToPermissions:e.businessIdToPermissions}}})},setAddAssetOrUserToAssetGroup:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:e.assetOrMemberType,assetGroupInfo:e.assetGroupInfo}}})},setAddUserToAssetGroupConfirmation:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_USER_TO_ASSET_GROUP_CONFIRMATION",modalProps:e}})},setRemoveAssetOrUserFromAssetGroup:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_ASSET_OR_USER_TO_ASSET_GROUP",modalProps:{assetOrMemberType:e.assetOrMemberType,toRemove:e.toRemove}}})},setRemoveAssetFromTag:function(e){return s({type:"SET_MODAL",payload:{modalType:"REMOVE_ASSET_FROM_TAG",modalProps:{assetOrMemberType:e.assetOrMemberType,toRemove:e.toRemove}}})},setAddOrganizationManagersModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_ORGANIZATION_MANAGERS",modalProps:T({},e)}})},setAddOrganizationManagersConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_ORGANIZATION_MANAGERS_CONFIRMATION",modalProps:T({},e)}})},setEditBusinessDetailsModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"EDIT_BUSINESS_DETAILS",modalProps:e}})},setViewBusinessDetailsModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"VIEW_BUSINESS_DETAILS",modalProps:e}})},setAddChildBusinessesModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_CHILD_BUSINESSES",modalProps:T({},e)}})},setAddChildBusinessesConfirmationModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"ADD_CHILD_BUSINESSES_CONFIRMATION",modalProps:e}})},setSelectAdAccountToShareFromModal:function(){return s({type:"SET_MODAL",payload:{modalType:"SELECT_AD_ACCOUNT_TO_SHARE_FROM"}})},setAddAdAccountModal:function(){return s({type:"SET_MODAL",payload:{modalType:"ADD_AD_ACCOUNT"}})},setConfirmAssetAccessRequestModal:function(e){return s({type:"SET_MODAL",payload:{modalType:"CONFIRM_ASSET_ACCESS_REQUEST",modalProps:e}})},setCreateBusinessHierarchyModal:function(e){s({type:"SET_MODAL",payload:{modalType:"CREATE_BUSINESS_HIERARCHY",modalProps:e}})},clearModal:function(){return s({type:"CLEAR_MODAL"})}}},[]),l=(0,r.useMemo)(function(){return T({businessAccess:a},i)},[a,i]);return(0,E.jsx)(f,{value:l,children:n})}function I(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,s.F)().checkExperiment,n=t("web_business_access_table_reload_fix").anyEnabled,r=t("web_m10n_business_hierarchy_beta").anyEnabled,a=m().businessAccess.businessId,i=(0,o.useRouteMatch)().params.userBizId;return r&&e?a:n?null!=i?i:"":a}function R(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,s.F)().checkExperiment,n=t("web_business_access_table_reload_fix").anyEnabled,r=t("web_m10n_business_hierarchy_beta").anyEnabled,a=m().businessAccess.detailId,i=(0,o.useRouteMatch)().params.detailId;return r&&e?a:n?null!=i?i:"":a}function M(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,t=m().businessAccess.business;return e?t:null}function b(){return m().businessAccess.businessHierarchy}function D(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,t=m().businessAccess.manager;return e?t:null}function P(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,t=m().businessAccess.profile;return e?t:null}function C(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,t=m().businessAccess.adAccount;return e?t:null}function L(){return m().businessAccess.partnerId}function N(){var e=(0,(0,s.F)().checkExperiment)("web_m10n_business_hierarchy_beta").anyEnabled,t=m().businessAccess.employeeId;return e?t:""}function v(){return m().businessAccess.intents}function h(){return m().businessAccess.modal}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/73453-4c9a3a0ac0ab3683.js.map