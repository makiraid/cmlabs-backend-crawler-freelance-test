"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5019],{70666:(e,r,i)=>{var s=i(49869),t={Uri:{createUriRegex:function(e){if("object"!=typeof(e=e||{})||Array.isArray(e))throw new Error("options must be an object");var r="";if(e.scheme){if(Array.isArray(e.scheme)||(e.scheme=[e.scheme]),e.scheme.length<=0)throw new Error("scheme must have at least 1 scheme specified");for(var i=0;i<e.scheme.length;++i){var t=e.scheme[i];if(!(t instanceof RegExp||"string"==typeof t))throw new Error("scheme must only contain Regular Expressions or Strings");if(r+=r?"|":"",t instanceof RegExp)r+=t.source;else{if(!/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(t))throw new Error("scheme at position "+i+" must be a valid scheme");r+=t.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g,"\\$&")}}}var a="(?:"+(r||s.scheme)+")";return new RegExp("^(?:"+a+":"+s.hierPart+")(?:\\?"+s.query+")?(?:#"+s.fragment+")?$")},uriRegex:new RegExp(s.uri)}};t.Uri.isValid=function(e){return t.Uri.uriRegex.test(e)},e.exports={createUriRegex:t.Uri.createUriRegex,uriRegex:t.Uri.uriRegex,isValid:t.Uri.isValid}}}]);