"use strict";(self["webpackChunkwebsite"]=self["webpackChunkwebsite"]||[]).push([[998],{9662:function(t,e,n){var r=n(614),i=n(6330),s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not a function")}},6077:function(t,e,n){var r=n(614),i=String,s=TypeError;t.exports=function(t){if("object"==typeof t||r(t))return t;throw s("Can't set "+i(t)+" as a prototype")}},5787:function(t,e,n){var r=n(7976),i=TypeError;t.exports=function(t,e){if(r(e,t))return t;throw i("Incorrect invocation")}},9670:function(t,e,n){var r=n(111),i=String,s=TypeError;t.exports=function(t){if(r(t))return t;throw s(i(t)+" is not an object")}},3013:function(t){t.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},260:function(t,e,n){var r,i,s,o=n(3013),a=n(9781),c=n(7854),u=n(614),l=n(111),h=n(2597),f=n(648),d=n(6330),p=n(8880),m=n(8052),g=n(7045),v=n(7976),y=n(9518),_=n(7674),w=n(5112),b=n(9711),E=n(9909),T=E.enforce,I=E.get,S=c.Int8Array,C=S&&S.prototype,k=c.Uint8ClampedArray,A=k&&k.prototype,O=S&&y(S),R=C&&y(C),x=Object.prototype,N=c.TypeError,D=w("toStringTag"),P=b("TYPED_ARRAY_TAG"),M="TypedArrayConstructor",L=o&&!!_&&"Opera"!==f(c.opera),F=!1,U={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},j={BigInt64Array:8,BigUint64Array:8},V=function(t){if(!l(t))return!1;var e=f(t);return"DataView"===e||h(U,e)||h(j,e)},B=function(t){var e=y(t);if(l(e)){var n=I(e);return n&&h(n,M)?n[M]:B(e)}},z=function(t){if(!l(t))return!1;var e=f(t);return h(U,e)||h(j,e)},$=function(t){if(z(t))return t;throw N("Target is not a typed array")},q=function(t){if(u(t)&&(!_||v(O,t)))return t;throw N(d(t)+" is not a typed array constructor")},H=function(t,e,n,r){if(a){if(n)for(var i in U){var s=c[i];if(s&&h(s.prototype,t))try{delete s.prototype[t]}catch(o){try{s.prototype[t]=e}catch(u){}}}R[t]&&!n||m(R,t,n?e:L&&C[t]||e,r)}},K=function(t,e,n){var r,i;if(a){if(_){if(n)for(r in U)if(i=c[r],i&&h(i,t))try{delete i[t]}catch(s){}if(O[t]&&!n)return;try{return m(O,t,n?e:L&&O[t]||e)}catch(s){}}for(r in U)i=c[r],!i||i[t]&&!n||m(i,t,e)}};for(r in U)i=c[r],s=i&&i.prototype,s?T(s)[M]=i:L=!1;for(r in j)i=c[r],s=i&&i.prototype,s&&(T(s)[M]=i);if((!L||!u(O)||O===Function.prototype)&&(O=function(){throw N("Incorrect invocation")},L))for(r in U)c[r]&&_(c[r],O);if((!L||!R||R===x)&&(R=O.prototype,L))for(r in U)c[r]&&_(c[r].prototype,R);if(L&&y(A)!==R&&_(A,R),a&&!h(R,D))for(r in F=!0,g(R,D,{configurable:!0,get:function(){return l(this)?this[P]:void 0}}),U)c[r]&&p(c[r],P,r);t.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_TAG:F&&P,aTypedArray:$,aTypedArrayConstructor:q,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:z,TypedArray:O,TypedArrayPrototype:R}},7745:function(t,e,n){var r=n(6244);t.exports=function(t,e){var n=0,i=r(e),s=new t(i);while(i>n)s[n]=e[n++];return s}},1318:function(t,e,n){var r=n(5656),i=n(1400),s=n(6244),o=function(t){return function(e,n,o){var a,c=r(e),u=s(c),l=i(o,u);if(t&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((t||l in c)&&c[l]===n)return t||l||0;return!t&&-1}};t.exports={includes:o(!0),indexOf:o(!1)}},3658:function(t,e,n){var r=n(9781),i=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=r&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(t){return t instanceof TypeError}}();t.exports=a?function(t,e){if(i(t)&&!o(t,"length").writable)throw s("Cannot set read only .length");return t.length=e}:function(t,e){return t.length=e}},1843:function(t,e,n){var r=n(6244);t.exports=function(t,e){for(var n=r(t),i=new e(n),s=0;s<n;s++)i[s]=t[n-s-1];return i}},1572:function(t,e,n){var r=n(6244),i=n(9303),s=RangeError;t.exports=function(t,e,n,o){var a=r(t),c=i(n),u=c<0?a+c:c;if(u>=a||u<0)throw s("Incorrect index");for(var l=new e(a),h=0;h<a;h++)l[h]=h===u?o:t[h];return l}},4326:function(t,e,n){var r=n(1702),i=r({}.toString),s=r("".slice);t.exports=function(t){return s(i(t),8,-1)}},648:function(t,e,n){var r=n(1694),i=n(614),s=n(4326),o=n(5112),a=o("toStringTag"),c=Object,u="Arguments"==s(function(){return arguments}()),l=function(t,e){try{return t[e]}catch(n){}};t.exports=r?s:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=l(e=c(t),a))?n:u?s(e):"Object"==(r=s(e))&&i(e.callee)?"Arguments":r}},9920:function(t,e,n){var r=n(2597),i=n(3887),s=n(1236),o=n(3070);t.exports=function(t,e,n){for(var a=i(e),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];r(t,h)||n&&r(n,h)||c(t,h,u(e,h))}}},8544:function(t,e,n){var r=n(7293);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},8880:function(t,e,n){var r=n(9781),i=n(3070),s=n(9114);t.exports=r?function(t,e,n){return i.f(t,e,s(1,n))}:function(t,e,n){return t[e]=n,t}},9114:function(t){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},7045:function(t,e,n){var r=n(6339),i=n(3070);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),i.f(t,e,n)}},8052:function(t,e,n){var r=n(614),i=n(3070),s=n(6339),o=n(3072);t.exports=function(t,e,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:e;if(r(n)&&s(n,u,a),a.global)c?t[e]=n:o(e,n);else{try{a.unsafe?t[e]&&(c=!0):delete t[e]}catch(l){}c?t[e]=n:i.f(t,e,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return t}},3072:function(t,e,n){var r=n(7854),i=Object.defineProperty;t.exports=function(t,e){try{i(r,t,{value:e,configurable:!0,writable:!0})}catch(n){r[t]=e}return e}},9781:function(t,e,n){var r=n(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(t){var e="object"==typeof document&&document.all,n="undefined"==typeof e&&void 0!==e;t.exports={all:e,IS_HTMLDDA:n}},317:function(t,e,n){var r=n(7854),i=n(111),s=r.document,o=i(s)&&i(s.createElement);t.exports=function(t){return o?s.createElement(t):{}}},7207:function(t){var e=TypeError,n=9007199254740991;t.exports=function(t){if(t>n)throw e("Maximum allowed index exceeded");return t}},3678:function(t){t.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},8113:function(t){t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(t,e,n){var r,i,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),t.exports=i},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},1060:function(t,e,n){var r=n(1702),i=Error,s=r("".replace),o=function(t){return String(i(t).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,c=a.test(o);t.exports=function(t,e){if(c&&"string"==typeof t&&!i.prepareStackTrace)while(e--)t=s(t,a,"");return t}},2109:function(t,e,n){var r=n(7854),i=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);t.exports=function(t,e){var n,l,h,f,d,p,m=t.target,g=t.global,v=t.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in e){if(d=e[h],t.dontCallGetSet?(p=i(l,h),f=p&&p.value):f=l[h],n=u(g?h:m+(v?".":"#")+h,t.forced),!n&&void 0!==f){if(typeof d==typeof f)continue;c(d,f)}(t.sham||f&&f.sham)&&s(d,"sham",!0),o(l,h,d,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(e){return!0}}},4374:function(t,e,n){var r=n(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,e,n){var r=n(4374),i=Function.prototype.call;t.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},6530:function(t,e,n){var r=n(9781),i=n(2597),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&o(s,"name").configurable);t.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},5668:function(t,e,n){var r=n(1702),i=n(9662);t.exports=function(t,e,n){try{return r(i(Object.getOwnPropertyDescriptor(t,e)[n]))}catch(s){}}},1702:function(t,e,n){var r=n(4374),i=Function.prototype,s=i.call,o=r&&i.bind.bind(s,s);t.exports=r?o:function(t){return function(){return s.apply(t,arguments)}}},5005:function(t,e,n){var r=n(7854),i=n(614),s=function(t){return i(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?s(r[t]):r[t]&&r[t][e]}},8173:function(t,e,n){var r=n(9662),i=n(8554);t.exports=function(t,e){var n=t[e];return i(n)?void 0:r(n)}},7854:function(t,e,n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||this||Function("return this")()},2597:function(t,e,n){var r=n(1702),i=n(7908),s=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return s(i(t),e)}},3501:function(t){t.exports={}},4664:function(t,e,n){var r=n(9781),i=n(7293),s=n(317);t.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,e,n){var r=n(1702),i=n(7293),s=n(4326),o=Object,a=r("".split);t.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(t){return"String"==s(t)?a(t,""):o(t)}:o},9587:function(t,e,n){var r=n(614),i=n(111),s=n(7674);t.exports=function(t,e,n){var o,a;return s&&r(o=e.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(t,a),t}},2788:function(t,e,n){var r=n(1702),i=n(614),s=n(5465),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(t){return o(t)}),t.exports=s.inspectSource},9909:function(t,e,n){var r,i,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),f=n(6200),d=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(t){return s(t)?i(t):r(t,{})},y=function(t){return function(e){var n;if(!c(e)||(n=i(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return n}};if(o||h.state){var _=h.state||(h.state=new g);_.get=_.get,_.has=_.has,_.set=_.set,r=function(t,e){if(_.has(t))throw m(p);return e.facade=t,_.set(t,e),e},i=function(t){return _.get(t)||{}},s=function(t){return _.has(t)}}else{var w=f("state");d[w]=!0,r=function(t,e){if(l(t,w))throw m(p);return e.facade=t,u(t,w,e),e},i=function(t){return l(t,w)?t[w]:{}},s=function(t){return l(t,w)}}t.exports={set:r,get:i,has:s,enforce:v,getterFor:y}},3157:function(t,e,n){var r=n(4326);t.exports=Array.isArray||function(t){return"Array"==r(t)}},4067:function(t,e,n){var r=n(648);t.exports=function(t){var e=r(t);return"BigInt64Array"==e||"BigUint64Array"==e}},614:function(t,e,n){var r=n(4154),i=r.all;t.exports=r.IS_HTMLDDA?function(t){return"function"==typeof t||t===i}:function(t){return"function"==typeof t}},4705:function(t,e,n){var r=n(7293),i=n(614),s=/#|\.prototype\./,o=function(t,e){var n=c[a(t)];return n==l||n!=u&&(i(e)?r(e):!!e)},a=o.normalize=function(t){return String(t).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";t.exports=o},8554:function(t){t.exports=function(t){return null===t||void 0===t}},111:function(t,e,n){var r=n(614),i=n(4154),s=i.all;t.exports=i.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:r(t)||t===s}:function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,e,n){var r=n(5005),i=n(614),s=n(7976),o=n(3307),a=Object;t.exports=o?function(t){return"symbol"==typeof t}:function(t){var e=r("Symbol");return i(e)&&s(e.prototype,a(t))}},6244:function(t,e,n){var r=n(7466);t.exports=function(t){return r(t.length)}},6339:function(t,e,n){var r=n(1702),i=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,f=l.get,d=String,p=Object.defineProperty,m=r("".slice),g=r("".replace),v=r([].join),y=a&&!i((function(){return 8!==p((function(){}),"length",{value:8}).length})),_=String(String).split("String"),w=t.exports=function(t,e,n){"Symbol("===m(d(e),0,7)&&(e="["+g(d(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(e="get "+e),n&&n.setter&&(e="set "+e),(!o(t,"name")||c&&t.name!==e)&&(a?p(t,"name",{value:e,configurable:!0}):t.name=e),y&&n&&o(n,"arity")&&t.length!==n.arity&&p(t,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(i){}var r=h(t);return o(r,"source")||(r.source=v(_,"string"==typeof e?e:"")),t};Function.prototype.toString=w((function(){return s(this)&&f(this).source||u(this)}),"toString")},4758:function(t){var e=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var r=+t;return(r>0?n:e)(r)}},6277:function(t,e,n){var r=n(1340);t.exports=function(t,e){return void 0===t?arguments.length<2?"":e:r(t)}},3070:function(t,e,n){var r=n(9781),i=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",d="writable";e.f=r?s?function(t,e,n){if(o(t),e=a(e),o(n),"function"===typeof t&&"prototype"===e&&"value"in n&&d in n&&!n[d]){var r=l(t,e);r&&r[d]&&(t[e]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return u(t,e,n)}:u:function(t,e,n){if(o(t),e=a(e),o(n),i)try{return u(t,e,n)}catch(r){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},1236:function(t,e,n){var r=n(9781),i=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;e.f=r?h:function(t,e){if(t=a(t),e=c(e),l)try{return h(t,e)}catch(n){}if(u(t,e))return o(!i(s.f,t,e),t[e])}},8006:function(t,e,n){var r=n(6324),i=n(748),s=i.concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,s)}},5181:function(t,e){e.f=Object.getOwnPropertySymbols},9518:function(t,e,n){var r=n(2597),i=n(614),s=n(7908),o=n(6200),a=n(8544),c=o("IE_PROTO"),u=Object,l=u.prototype;t.exports=a?u.getPrototypeOf:function(t){var e=s(t);if(r(e,c))return e[c];var n=e.constructor;return i(n)&&e instanceof n?n.prototype:e instanceof u?l:null}},7976:function(t,e,n){var r=n(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,e,n){var r=n(1702),i=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=r([].push);t.exports=function(t,e){var n,r=s(t),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(e.length>u)i(r,n=e[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(t,e){var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);e.f=i?function(t){var e=r(this,t);return!!e&&e.enumerable}:n},7674:function(t,e,n){var r=n(5668),i=n(9670),s=n(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{t=r(Object.prototype,"__proto__","set"),t(n,[]),e=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),e?t(n,r):n.__proto__=r,n}}():void 0)},2140:function(t,e,n){var r=n(6916),i=n(614),s=n(111),o=TypeError;t.exports=function(t,e){var n,a;if("string"===e&&i(n=t.toString)&&!s(a=r(n,t)))return a;if(i(n=t.valueOf)&&!s(a=r(n,t)))return a;if("string"!==e&&i(n=t.toString)&&!s(a=r(n,t)))return a;throw o("Can't convert object to primitive value")}},3887:function(t,e,n){var r=n(5005),i=n(1702),s=n(8006),o=n(5181),a=n(9670),c=i([].concat);t.exports=r("Reflect","ownKeys")||function(t){var e=s.f(a(t)),n=o.f;return n?c(e,n(t)):e}},4488:function(t,e,n){var r=n(8554),i=TypeError;t.exports=function(t){if(r(t))throw i("Can't call method on "+t);return t}},6200:function(t,e,n){var r=n(2309),i=n(9711),s=r("keys");t.exports=function(t){return s[t]||(s[t]=i(t))}},5465:function(t,e,n){var r=n(7854),i=n(3072),s="__core-js_shared__",o=r[s]||i(s,{});t.exports=o},2309:function(t,e,n){var r=n(1913),i=n(5465);(t.exports=function(t,e){return i[t]||(i[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.0",mode:r?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(t,e,n){var r=n(7392),i=n(7293),s=n(7854),o=s.String;t.exports=!!Object.getOwnPropertySymbols&&!i((function(){var t=Symbol();return!o(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},1400:function(t,e,n){var r=n(9303),i=Math.max,s=Math.min;t.exports=function(t,e){var n=r(t);return n<0?i(n+e,0):s(n,e)}},4599:function(t,e,n){var r=n(7593),i=TypeError;t.exports=function(t){var e=r(t,"number");if("number"==typeof e)throw i("Can't convert number to bigint");return BigInt(e)}},5656:function(t,e,n){var r=n(8361),i=n(4488);t.exports=function(t){return r(i(t))}},9303:function(t,e,n){var r=n(4758);t.exports=function(t){var e=+t;return e!==e||0===e?0:r(e)}},7466:function(t,e,n){var r=n(9303),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},7908:function(t,e,n){var r=n(4488),i=Object;t.exports=function(t){return i(r(t))}},7593:function(t,e,n){var r=n(6916),i=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!i(t)||s(t))return t;var n,c=o(t,l);if(c){if(void 0===e&&(e="default"),n=r(c,t,e),!i(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===e&&(e="number"),a(t,e)}},4948:function(t,e,n){var r=n(7593),i=n(2190);t.exports=function(t){var e=r(t,"string");return i(e)?e:e+""}},1694:function(t,e,n){var r=n(5112),i=r("toStringTag"),s={};s[i]="z",t.exports="[object z]"===String(s)},1340:function(t,e,n){var r=n(648),i=String;t.exports=function(t){if("Symbol"===r(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:function(t){var e=String;t.exports=function(t){try{return e(t)}catch(n){return"Object"}}},9711:function(t,e,n){var r=n(1702),i=0,s=Math.random(),o=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+o(++i+s,36)}},3307:function(t,e,n){var r=n(6293);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,e,n){var r=n(9781),i=n(7293);t.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},8053:function(t){var e=TypeError;t.exports=function(t,n){if(t<n)throw e("Not enough arguments");return t}},4811:function(t,e,n){var r=n(7854),i=n(614),s=r.WeakMap;t.exports=i(s)&&/native code/.test(String(s))},5112:function(t,e,n){var r=n(7854),i=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=r.Symbol,l=i("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;t.exports=function(t){return s(l,t)||(l[t]=a&&s(u,t)?u[t]:h("Symbol."+t)),l[t]}},7658:function(t,e,n){var r=n(2109),i=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(t){return t instanceof TypeError}},h=u||!l();r({target:"Array",proto:!0,arity:1,forced:h},{push:function(t){var e=i(this),n=s(e),r=arguments.length;a(n+r);for(var c=0;c<r;c++)e[n]=arguments[c],n++;return o(e,n),n}})},1439:function(t,e,n){var r=n(1843),i=n(260),s=i.aTypedArray,o=i.exportTypedArrayMethod,a=i.getTypedArrayConstructor;o("toReversed",(function(){return r(s(this),a(this))}))},7585:function(t,e,n){var r=n(260),i=n(1702),s=n(9662),o=n(7745),a=r.aTypedArray,c=r.getTypedArrayConstructor,u=r.exportTypedArrayMethod,l=i(r.TypedArrayPrototype.sort);u("toSorted",(function(t){void 0!==t&&s(t);var e=a(this),n=o(c(e),e);return l(n,t)}))},5315:function(t,e,n){var r=n(1572),i=n(260),s=n(4067),o=n(9303),a=n(4599),c=i.aTypedArray,u=i.getTypedArrayConstructor,l=i.exportTypedArrayMethod,h=!!function(){try{new Int8Array(1)["with"](2,{valueOf:function(){throw 8}})}catch(t){return 8===t}}();l("with",{with:function(t,e){var n=c(this),i=o(t),l=s(n)?a(e):+e;return r(n,u(n),i,l)}}["with"],!h)},2801:function(t,e,n){var r=n(2109),i=n(7854),s=n(5005),o=n(9114),a=n(3070).f,c=n(2597),u=n(5787),l=n(9587),h=n(6277),f=n(3678),d=n(1060),p=n(9781),m=n(1913),g="DOMException",v=s("Error"),y=s(g),_=function(){u(this,w);var t=arguments.length,e=h(t<1?void 0:arguments[0]),n=h(t<2?void 0:arguments[1],"Error"),r=new y(e,n),i=v(e);return i.name=g,a(r,"stack",o(1,d(i.stack,1))),l(r,this,_),r},w=_.prototype=y.prototype,b="stack"in v(g),E="stack"in new y(1,2),T=y&&p&&Object.getOwnPropertyDescriptor(i,g),I=!!T&&!(T.writable&&T.configurable),S=b&&!I&&!E;r({global:!0,constructor:!0,forced:m||S},{DOMException:S?_:y});var C=s(g),k=C.prototype;if(k.constructor!==C)for(var A in m||a(k,"constructor",o(1,C)),f)if(c(f,A)){var O=f[A],R=O.s;c(C,R)||a(C,R,o(6,O.c))}},6229:function(t,e,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.append),l=i(c["delete"]),h=i(c.forEach),f=i([].push),d=new a("a=1&a=2&b=3");d["delete"]("a",1),d["delete"]("b",void 0),d+""!=="a=2"&&r(c,"delete",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=[];h(this,(function(t,e){f(r,{key:e,value:t})})),o(e,1);var i,a=s(t),c=s(n),d=0,p=0,m=!1,g=r.length;while(d<g)i=r[d++],m||i.key===a?(m=!0,l(this,i.key)):p++;while(p<g)i=r[p++],i.key===a&&i.value===c||u(this,i.key,i.value)}),{enumerable:!0,unsafe:!0})},7330:function(t,e,n){var r=n(8052),i=n(1702),s=n(1340),o=n(8053),a=URLSearchParams,c=a.prototype,u=i(c.getAll),l=i(c.has),h=new a("a=1");!h.has("a",2)&&h.has("a",void 0)||r(c,"has",(function(t){var e=arguments.length,n=e<2?void 0:arguments[1];if(e&&void 0===n)return l(this,t);var r=u(this,t);o(e,1);var i=s(n),a=0;while(a<r.length)if(r[a++]===i)return!0;return!1}),{enumerable:!0,unsafe:!0})},2062:function(t,e,n){var r=n(9781),i=n(1702),s=n(7045),o=URLSearchParams.prototype,a=i(o.forEach);r&&!("size"in o)&&s(o,"size",{get:function(){var t=0;return a(this,(function(){t++})),t},configurable:!0,enumerable:!0})},223:function(t,e,n){n.d(e,{BH:function(){return _},L:function(){return c},LL:function(){return R},P0:function(){return g},Pz:function(){return y},Sg:function(){return w},ZR:function(){return O},aH:function(){return v},b$:function(){return I},eu:function(){return k},hl:function(){return C},m9:function(){return $},ne:function(){return j},pd:function(){return U},q4:function(){return m},ru:function(){return T},tV:function(){return u},uI:function(){return E},vZ:function(){return P},w1:function(){return S},xO:function(){return L},xb:function(){return D},z$:function(){return b},zd:function(){return F}});n(2801),n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,l=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[u],n[l],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,u=c?n[t.charAt(i)]:64;++i;const l=i<t.length,h=l?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==u||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==u){const t=a<<4&240|u>>2;if(r.push(t),64!==h){const t=u<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},u=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>l().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",BASE_URL:"/"}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&u(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},m=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},g=t=>{const e=m(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},v=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config},y=t=>{var e;return null===(e=p())||void 0===e?void 0:e[`_${t}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(b())}function T(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function I(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function S(){const t=b();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function C(){try{return"object"===typeof indexedDB}catch(t){return!1}}function k(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const A="FirebaseError";class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=A,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?x(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function x(t,e){return t.replace(N,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const N=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function P(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(M(n)&&M(s)){if(!P(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function M(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function F(t){const e={},n=t.replace(/^\?/,"").split("&");return n.forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function U(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t,e){const n=new V(t,e);return n.subscribe.bind(n)}class V{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=B(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=z),void 0===r.error&&(r.error=z),void 0===r.complete&&(r.complete=z);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function B(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function z(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(t){return t&&t._delegate?t._delegate:t}},4870:function(t,e,n){n.d(e,{B:function(){return o},Bj:function(){return s},Fl:function(){return Kt},IU:function(){return xt},Jd:function(){return S},PG:function(){return kt},SU:function(){return zt},Um:function(){return It},WL:function(){return qt},X$:function(){return O},X3:function(){return Rt},XI:function(){return jt},Xl:function(){return Nt},dq:function(){return Ft},iH:function(){return Ut},j:function(){return k},lk:function(){return C},nZ:function(){return c},qj:function(){return Tt},qq:function(){return b},yT:function(){return Ot}});n(7658);var r=n(7139);let i;class s{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function o(t){return new s(t)}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}const u=t=>{const e=new Set(t);return e.w=0,e.n=0,e},l=t=>(t.w&g)>0,h=t=>(t.n&g)>0,f=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=g},d=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const i=e[r];l(i)&&!h(i)?i.delete(t):e[n++]=i,i.w&=~g,i.n&=~g}e.length=n}},p=new WeakMap;let m=0,g=1;const v=30;let y;const _=Symbol(""),w=Symbol("");class b{constructor(t,e=null,n){this.fn=t,this.scheduler=e,this.active=!0,this.deps=[],this.parent=void 0,a(this,n)}run(){if(!this.active)return this.fn();let t=y,e=T;while(t){if(t===this)return;t=t.parent}try{return this.parent=y,y=this,T=!0,g=1<<++m,m<=v?f(this):E(this),this.fn()}finally{m<=v&&d(this),g=1<<--m,y=this.parent,T=e,this.parent=void 0,this.deferStop&&this.stop()}}stop(){y===this?this.deferStop=!0:this.active&&(E(this),this.onStop&&this.onStop(),this.active=!1)}}function E(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let T=!0;const I=[];function S(){I.push(T),T=!1}function C(){const t=I.pop();T=void 0===t||t}function k(t,e,n){if(T&&y){let e=p.get(t);e||p.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=u());const i=void 0;A(r,i)}}function A(t,e){let n=!1;m<=v?h(t)||(t.n|=g,n=!l(t)):n=!t.has(y),n&&(t.add(y),y.deps.push(t))}function O(t,e,n,i,s,o){const a=p.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.kJ)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.kJ)(t)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(_)),(0,r._N)(t)&&c.push(a.get(w)));break;case"delete":(0,r.kJ)(t)||(c.push(a.get(_)),(0,r._N)(t)&&c.push(a.get(w)));break;case"set":(0,r._N)(t)&&c.push(a.get(_));break}if(1===c.length)c[0]&&R(c[0]);else{const t=[];for(const e of c)e&&t.push(...e);R(u(t))}}function R(t,e){const n=(0,r.kJ)(t)?t:[...t];for(const r of n)r.computed&&x(r,e);for(const r of n)r.computed||x(r,e)}function x(t,e){(t!==y||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const N=(0,r.fY)("__proto__,__v_isRef,__isVue"),D=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.yk)),P=V(),M=V(!1,!0),L=V(!0),F=U();function U(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=xt(this);for(let e=0,i=this.length;e<i;e++)k(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(xt)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){S();const n=xt(this)[e].apply(this,t);return C(),n}})),t}function j(t){const e=xt(this);return k(e,"has",t),e.hasOwnProperty(t)}function V(t=!1,e=!1){return function(n,i,s){if("__v_isReactive"===i)return!t;if("__v_isReadonly"===i)return t;if("__v_isShallow"===i)return e;if("__v_raw"===i&&s===(t?e?wt:_t:e?yt:vt).get(n))return n;const o=(0,r.kJ)(n);if(!t){if(o&&(0,r.RI)(F,i))return Reflect.get(F,i,s);if("hasOwnProperty"===i)return j}const a=Reflect.get(n,i,s);return((0,r.yk)(i)?D.has(i):N(i))?a:(t||k(n,"get",i),e?a:Ft(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?t?St(a):Tt(a):a)}}const B=$(),z=$(!0);function $(t=!1){return function(e,n,i,s){let o=e[n];if(At(o)&&Ft(o)&&!Ft(i))return!1;if(!t&&(Ot(i)||At(i)||(o=xt(o),i=xt(i)),!(0,r.kJ)(e)&&Ft(o)&&!Ft(i)))return o.value=i,!0;const a=(0,r.kJ)(e)&&(0,r.S0)(n)?Number(n)<e.length:(0,r.RI)(e,n),c=Reflect.set(e,n,i,s);return e===xt(s)&&(a?(0,r.aU)(i,o)&&O(e,"set",n,i,o):O(e,"add",n,i)),c}}function q(t,e){const n=(0,r.RI)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&O(t,"delete",e,void 0,i),s}function H(t,e){const n=Reflect.has(t,e);return(0,r.yk)(e)&&D.has(e)||k(t,"has",e),n}function K(t){return k(t,"iterate",(0,r.kJ)(t)?"length":_),Reflect.ownKeys(t)}const G={get:P,set:B,deleteProperty:q,has:H,ownKeys:K},W={get:L,set(t,e){return!0},deleteProperty(t,e){return!0}},J=(0,r.l7)({},G,{get:M,set:z}),Q=t=>t,X=t=>Reflect.getPrototypeOf(t);function Y(t,e,n=!1,r=!1){t=t["__v_raw"];const i=xt(t),s=xt(e);n||(e!==s&&k(i,"get",e),k(i,"get",s));const{has:o}=X(i),a=r?Q:n?Pt:Dt;return o.call(i,e)?a(t.get(e)):o.call(i,s)?a(t.get(s)):void(t!==i&&t.get(e))}function Z(t,e=!1){const n=this["__v_raw"],r=xt(n),i=xt(t);return e||(t!==i&&k(r,"has",t),k(r,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function tt(t,e=!1){return t=t["__v_raw"],!e&&k(xt(t),"iterate",_),Reflect.get(t,"size",t)}function et(t){t=xt(t);const e=xt(this),n=X(e),r=n.has.call(e,t);return r||(e.add(t),O(e,"add",t,t)),this}function nt(t,e){e=xt(e);const n=xt(this),{has:i,get:s}=X(n);let o=i.call(n,t);o||(t=xt(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.aU)(e,a)&&O(n,"set",t,e,a):O(n,"add",t,e),this}function rt(t){const e=xt(this),{has:n,get:r}=X(e);let i=n.call(e,t);i||(t=xt(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&O(e,"delete",t,void 0,s),o}function it(){const t=xt(this),e=0!==t.size,n=void 0,r=t.clear();return e&&O(t,"clear",void 0,void 0,n),r}function st(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=xt(s),a=e?Q:t?Pt:Dt;return!t&&k(o,"iterate",_),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function ot(t,e,n){return function(...i){const s=this["__v_raw"],o=xt(s),a=(0,r._N)(o),c="entries"===t||t===Symbol.iterator&&a,u="keys"===t&&a,l=s[t](...i),h=n?Q:e?Pt:Dt;return!e&&k(o,"iterate",u?w:_),{next(){const{value:t,done:e}=l.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function at(t){return function(...e){return"delete"!==t&&this}}function ct(){const t={get(t){return Y(this,t)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!1)},e={get(t){return Y(this,t,!1,!0)},get size(){return tt(this)},has:Z,add:et,set:nt,delete:rt,clear:it,forEach:st(!1,!0)},n={get(t){return Y(this,t,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!1)},r={get(t){return Y(this,t,!0,!0)},get size(){return tt(this,!0)},has(t){return Z.call(this,t,!0)},add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear"),forEach:st(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=ot(i,!1,!1),n[i]=ot(i,!0,!1),e[i]=ot(i,!1,!0),r[i]=ot(i,!0,!0)})),[t,n,e,r]}const[ut,lt,ht,ft]=ct();function dt(t,e){const n=e?t?ft:ht:t?lt:ut;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.RI)(n,i)&&i in e?n:e,i,s)}const pt={get:dt(!1,!1)},mt={get:dt(!1,!0)},gt={get:dt(!0,!1)};const vt=new WeakMap,yt=new WeakMap,_t=new WeakMap,wt=new WeakMap;function bt(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Et(t){return t["__v_skip"]||!Object.isExtensible(t)?0:bt((0,r.W7)(t))}function Tt(t){return At(t)?t:Ct(t,!1,G,pt,vt)}function It(t){return Ct(t,!1,J,mt,yt)}function St(t){return Ct(t,!0,W,gt,_t)}function Ct(t,e,n,i,s){if(!(0,r.Kn)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=Et(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function kt(t){return At(t)?kt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function At(t){return!(!t||!t["__v_isReadonly"])}function Ot(t){return!(!t||!t["__v_isShallow"])}function Rt(t){return kt(t)||At(t)}function xt(t){const e=t&&t["__v_raw"];return e?xt(e):t}function Nt(t){return(0,r.Nj)(t,"__v_skip",!0),t}const Dt=t=>(0,r.Kn)(t)?Tt(t):t,Pt=t=>(0,r.Kn)(t)?St(t):t;function Mt(t){T&&y&&(t=xt(t),A(t.dep||(t.dep=u())))}function Lt(t,e){t=xt(t);const n=t.dep;n&&R(n)}function Ft(t){return!(!t||!0!==t.__v_isRef)}function Ut(t){return Vt(t,!1)}function jt(t){return Vt(t,!0)}function Vt(t,e){return Ft(t)?t:new Bt(t,e)}class Bt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:xt(t),this._value=e?t:Dt(t)}get value(){return Mt(this),this._value}set value(t){const e=this.__v_isShallow||Ot(t)||At(t);t=e?t:xt(t),(0,r.aU)(t,this._rawValue)&&(this._rawValue=t,this._value=e?t:Dt(t),Lt(this,t))}}function zt(t){return Ft(t)?t.value:t}const $t={get:(t,e,n)=>zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return Ft(i)&&!Ft(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function qt(t){return kt(t)?t:new Proxy(t,$t)}class Ht{constructor(t,e,n,r){this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this._dirty=!0,this.effect=new b(t,(()=>{this._dirty||(this._dirty=!0,Lt(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=xt(this);return Mt(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Kt(t,e,n=!1){let i,s;const o=(0,r.mf)(t);o?(i=t,s=r.dG):(i=t.get,s=t.set);const a=new Ht(i,s,o||!s,n);return a}},3396:function(t,e,n){n.d(e,{$d:function(){return o},Cn:function(){return L},FN:function(){return yn},Fl:function(){return Fn},HY:function(){return Le},JJ:function(){return ue},Ko:function(){return Ut},P$:function(){return it},Q6:function(){return lt},U2:function(){return ot},Uk:function(){return on},Us:function(){return Re},Wm:function(){return en},Y3:function(){return y},Y8:function(){return tt},YP:function(){return G},_:function(){return tn},aZ:function(){return ht},dD:function(){return M},f3:function(){return le},h:function(){return Un},iD:function(){return Ge},ic:function(){return Ct},j4:function(){return We},kq:function(){return cn},nJ:function(){return nt},nK:function(){return ut},uE:function(){return an},up:function(){return Pt},w5:function(){return F},wg:function(){return ze},wy:function(){return Y}});n(7658);var r=n(4870),i=n(7139);function s(t,e,n,r){let i;try{i=r?t(...r):t()}catch(s){a(s,e,n)}return i}function o(t,e,n,r){if((0,i.mf)(t)){const o=s(t,e,n,r);return o&&(0,i.tI)(o)&&o.catch((t=>{a(t,e,n)})),o}const c=[];for(let i=0;i<t.length;i++)c.push(o(t[i],e,n,r));return c}function a(t,e,n,r=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const i=e.proxy,o=n;while(r){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,i,o))return;r=r.parent}const a=e.appContext.config.errorHandler;if(a)return void s(a,null,10,[t,i,o])}c(t,n,i,r)}function c(t,e,n,r=!0){console.error(t)}let u=!1,l=!1;const h=[];let f=0;const d=[];let p=null,m=0;const g=Promise.resolve();let v=null;function y(t){const e=v||g;return t?e.then(this?t.bind(this):t):e}function _(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=C(h[r]);i<t?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,u&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(_(t.id),0,t),b())}function b(){u||l||(l=!0,v=g.then(A))}function E(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function T(t){(0,i.kJ)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?m+1:m)||d.push(t),b()}function I(t,e=(u?f+1:0)){for(0;e<h.length;e++){const t=h[e];t&&t.pre&&(h.splice(e,1),e--,t())}}function S(t){if(d.length){const t=[...new Set(d)];if(d.length=0,p)return void p.push(...t);for(p=t,p.sort(((t,e)=>C(t)-C(e))),m=0;m<p.length;m++)p[m]();p=null,m=0}}const C=t=>null==t.id?1/0:t.id,k=(t,e)=>{const n=C(t)-C(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function A(t){l=!1,u=!0,h.sort(k);i.dG;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,S(t),u=!1,v=null,(h.length||d.length)&&A(t)}}function O(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.kT;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.kT;o&&(s=n.map((t=>(0,i.HD)(t)?t.trim():t))),e&&(s=n.map(i.h5))}let u;let l=r[u=(0,i.hR)(e)]||r[u=(0,i.hR)((0,i._A)(e))];!l&&a&&(l=r[u=(0,i.hR)((0,i.rs)(e))]),l&&o(l,t,6,s);const h=r[u+"Once"];if(h){if(t.emitted){if(t.emitted[u])return}else t.emitted={};t.emitted[u]=!0,o(h,t,6,s)}}function R(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.mf)(t)){const r=t=>{const n=R(t,e,!0);n&&(c=!0,(0,i.l7)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.kJ)(o)?o.forEach((t=>a[t]=null)):(0,i.l7)(a,o),(0,i.Kn)(t)&&r.set(t,a),a):((0,i.Kn)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,i.F7)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.RI)(t,e[0].toLowerCase()+e.slice(1))||(0,i.RI)(t,(0,i.rs)(e))||(0,i.RI)(t,e))}let N=null,D=null;function P(t){const e=N;return N=t,D=t&&t.type.__scopeId||null,e}function M(t){D=t}function L(){D=null}function F(t,e=N,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&He(-1);const i=P(e);let s;try{s=t(...n)}finally{P(i),r._d&&He(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function U(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[c],slots:u,attrs:l,emit:h,render:f,renderCache:d,data:p,setupState:m,ctx:g,inheritAttrs:v}=t;let y,_;const w=P(t);try{if(4&n.shapeFlag){const t=s||r;y=un(f.call(t,t,d,o,m,p,g)),_=l}else{const t=e;0,y=un(t.length>1?t(o,{attrs:l,slots:u,emit:h}):t(o,null)),_=e.props?l:j(l)}}catch(E){Ve.length=0,a(E,t,1),y=en(Ue)}let b=y;if(_&&!1!==v){const t=Object.keys(_),{shapeFlag:e}=b;t.length&&7&e&&(c&&t.some(i.tR)&&(_=V(_,c)),b=sn(b,_))}return n.dirs&&(b=sn(b),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&(b.transition=n.transition),y=b,P(w),y}const j=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.F7)(n))&&((e||(e={}))[n]=t[n]);return e},V=(t,e)=>{const n={};for(const r in t)(0,i.tR)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function B(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||z(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?z(r,o,u):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!x(u,n))return!0}}return!1}function z(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!x(n,s))return!0}return!1}function $({vnode:t,parent:e},n){while(e&&e.subTree===t)(t=e.vnode).el=n,e=e.parent}const q=t=>t.__isSuspense;function H(t,e){e&&e.pendingBranch?(0,i.kJ)(t)?e.effects.push(...t):e.effects.push(t):T(t)}const K={};function G(t,e,n){return W(t,e,n)}function W(t,e,{immediate:n,deep:a,flush:c,onTrack:u,onTrigger:l}=i.kT){var h;const f=(0,r.nZ)()===(null==(h=vn)?void 0:h.scope)?vn:null;let d,p,m=!1,g=!1;if((0,r.dq)(t)?(d=()=>t.value,m=(0,r.yT)(t)):(0,r.PG)(t)?(d=()=>t,a=!0):(0,i.kJ)(t)?(g=!0,m=t.some((t=>(0,r.PG)(t)||(0,r.yT)(t))),d=()=>t.map((t=>(0,r.dq)(t)?t.value:(0,r.PG)(t)?X(t):(0,i.mf)(t)?s(t,f,2):void 0))):d=(0,i.mf)(t)?e?()=>s(t,f,2):()=>{if(!f||!f.isUnmounted)return p&&p(),o(t,f,3,[y])}:i.dG,e&&a){const t=d;d=()=>X(t())}let v,y=t=>{p=T.onStop=()=>{s(t,f,4)}};if(kn){if(y=i.dG,e?n&&o(e,f,3,[d(),g?[]:void 0,y]):d(),"sync"!==c)return i.dG;{const t=Vn();v=t.__watcherHandles||(t.__watcherHandles=[])}}let _=g?new Array(t.length).fill(K):K;const b=()=>{if(T.active)if(e){const t=T.run();(a||m||(g?t.some(((t,e)=>(0,i.aU)(t,_[e]))):(0,i.aU)(t,_)))&&(p&&p(),o(e,f,3,[t,_===K?void 0:g&&_[0]===K?[]:_,y]),_=t)}else T.run()};let E;b.allowRecurse=!!e,"sync"===c?E=b:"post"===c?E=()=>Oe(b,f&&f.suspense):(b.pre=!0,f&&(b.id=f.uid),E=()=>w(b));const T=new r.qq(d,E);e?n?b():_=T.run():"post"===c?Oe(T.run.bind(T),f&&f.suspense):T.run();const I=()=>{T.stop(),f&&f.scope&&(0,i.Od)(f.scope.effects,T)};return v&&v.push(I),I}function J(t,e,n){const r=this.proxy,s=(0,i.HD)(t)?t.includes(".")?Q(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.mf)(e)?o=e:(o=e.handler,n=e);const a=vn;En(this);const c=W(s,o.bind(r),n);return a?En(a):Tn(),c}function Q(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function X(t,e){if(!(0,i.Kn)(t)||t["__v_skip"])return t;if(e=e||new Set,e.has(t))return t;if(e.add(t),(0,r.dq)(t))X(t.value,e);else if((0,i.kJ)(t))for(let n=0;n<t.length;n++)X(t[n],e);else if((0,i.DM)(t)||(0,i._N)(t))t.forEach((t=>{X(t,e)}));else if((0,i.PO)(t))for(const n in t)X(t[n],e);return t}function Y(t,e){const n=N;if(null===n)return t;const r=Pn(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let o=0;o<e.length;o++){let[t,n,a,c=i.kT]=e[o];t&&((0,i.mf)(t)&&(t={mounted:t,updated:t}),t.deep&&X(n),s.push({dir:t,instance:r,value:n,oldValue:void 0,arg:a,modifiers:c}))}return t}function Z(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const u=s[c];a&&(u.oldValue=a[c].value);let l=u.dir[i];l&&((0,r.Jd)(),o(l,n,8,[t.el,u,t,e]),(0,r.lk)())}}function tt(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return It((()=>{t.isMounted=!0})),kt((()=>{t.isUnmounting=!0})),t}const et=[Function,Array],nt={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},rt={name:"BaseTransition",props:nt,setup(t,{slots:e}){const n=yn(),i=tt();let s;return()=>{const o=e.default&&lt(e.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let t=!1;for(const e of o)if(e.type!==Ue){0,a=e,t=!0;break}}const c=(0,r.IU)(t),{mode:u}=c;if(i.isLeaving)return at(a);const l=ct(a);if(!l)return at(a);const h=ot(l,c,i,n);ut(l,h);const f=n.subTree,d=f&&ct(f);let p=!1;const{getTransitionKey:m}=l.type;if(m){const t=m();void 0===s?s=t:t!==s&&(s=t,p=!0)}if(d&&d.type!==Ue&&(!Qe(l,d)||p)){const t=ot(d,c,i,n);if(ut(d,t),"out-in"===u)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&n.update()},at(a);"in-out"===u&&l.type!==Ue&&(t.delayLeave=(t,e,n)=>{const r=st(i,d);r[String(d.key)]=d,t._leaveCb=()=>{e(),t._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},it=rt;function st(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function ot(t,e,n,r){const{appear:s,mode:a,persisted:c=!1,onBeforeEnter:u,onEnter:l,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:d,onLeave:p,onAfterLeave:m,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:_,onAppearCancelled:w}=e,b=String(t.key),E=st(n,t),T=(t,e)=>{t&&o(t,r,9,e)},I=(t,e)=>{const n=e[1];T(t,e),(0,i.kJ)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},S={mode:a,persisted:c,beforeEnter(e){let r=u;if(!n.isMounted){if(!s)return;r=v||u}e._leaveCb&&e._leaveCb(!0);const i=E[b];i&&Qe(t,i)&&i.el._leaveCb&&i.el._leaveCb(),T(r,[e])},enter(t){let e=l,r=h,i=f;if(!n.isMounted){if(!s)return;e=y||l,r=_||h,i=w||f}let o=!1;const a=t._enterCb=e=>{o||(o=!0,T(e?i:r,[t]),S.delayedLeave&&S.delayedLeave(),t._enterCb=void 0)};e?I(e,[t,a]):a()},leave(e,r){const i=String(t.key);if(e._enterCb&&e._enterCb(!0),n.isUnmounting)return r();T(d,[e]);let s=!1;const o=e._leaveCb=n=>{s||(s=!0,r(),T(n?g:m,[e]),e._leaveCb=void 0,E[i]===t&&delete E[i])};E[i]=t,p?I(p,[e,o]):o()},clone(t){return ot(t,e,n,r)}};return S}function at(t){if(dt(t))return t=sn(t),t.children=null,t}function ct(t){return dt(t)?t.children?t.children[0]:void 0:t}function ut(t,e){6&t.shapeFlag&&t.component?ut(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function lt(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Le?(128&o.patchFlag&&i++,r=r.concat(lt(o.children,e,a))):(e||o.type!==Ue)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ht(t,e){return(0,i.mf)(t)?(()=>(0,i.l7)({name:t.name},e,{setup:t}))():t}const ft=t=>!!t.type.__asyncLoader;const dt=t=>t.type.__isKeepAlive;RegExp,RegExp;function pt(t,e){return(0,i.kJ)(t)?t.some((t=>pt(t,e))):(0,i.HD)(t)?t.split(",").includes(e):!!(0,i.Kj)(t)&&t.test(e)}function mt(t,e){vt(t,"a",e)}function gt(t,e){vt(t,"da",e)}function vt(t,e,n=vn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(bt(e,r,n),n){let t=n.parent;while(t&&t.parent)dt(t.parent.vnode)&&yt(r,e,n,t),t=t.parent}}function yt(t,e,n,r){const s=bt(e,t,r,!0);At((()=>{(0,i.Od)(r[e],s)}),n)}function _t(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function wt(t){return 128&t.shapeFlag?t.ssContent:t}function bt(t,e,n=vn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),En(n);const s=o(e,n,t,i);return Tn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Et=t=>(e,n=vn)=>(!kn||"sp"===t)&&bt(t,((...t)=>e(...t)),n),Tt=Et("bm"),It=Et("m"),St=Et("bu"),Ct=Et("u"),kt=Et("bum"),At=Et("um"),Ot=Et("sp"),Rt=Et("rtg"),xt=Et("rtc");function Nt(t,e=vn){bt("ec",t,e)}const Dt="components";function Pt(t,e){return Lt(Dt,t,!0,e)||t}const Mt=Symbol.for("v-ndc");function Lt(t,e,n=!0,r=!1){const s=N||vn;if(s){const n=s.type;if(t===Dt){const t=Mn(n,!1);if(t&&(t===e||t===(0,i._A)(e)||t===(0,i.kC)((0,i._A)(e))))return n}const o=Ft(s[t]||n[t],e)||Ft(s.appContext[t],e);return!o&&r?n:o}}function Ft(t,e){return t&&(t[e]||t[(0,i._A)(e)]||t[(0,i.kC)((0,i._A)(e))])}function Ut(t,e,n,r){let s;const o=n&&n[r];if((0,i.kJ)(t)||(0,i.HD)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const jt=t=>t?In(t)?Pn(t)||t.proxy:jt(t.parent):null,Vt=(0,i.l7)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>jt(t.parent),$root:t=>jt(t.root),$emit:t=>t.emit,$options:t=>Jt(t),$forceUpdate:t=>t.f||(t.f=()=>w(t.update)),$nextTick:t=>t.n||(t.n=y.bind(t.proxy)),$watch:t=>J.bind(t)}),Bt=(t,e)=>t!==i.kT&&!t.__isScriptSetup&&(0,i.RI)(t,e),zt={get({_:t},e){const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:u,appContext:l}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(Bt(s,e))return c[e]=1,s[e];if(o!==i.kT&&(0,i.RI)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.RI)(h,e))return c[e]=3,a[e];if(n!==i.kT&&(0,i.RI)(n,e))return c[e]=4,n[e];qt&&(c[e]=0)}}const f=Vt[e];let d,p;return f?("$attrs"===e&&(0,r.j)(t,"get",e),f(t)):(d=u.__cssModules)&&(d=d[e])?d:n!==i.kT&&(0,i.RI)(n,e)?(c[e]=4,n[e]):(p=l.config.globalProperties,(0,i.RI)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return Bt(s,e)?(s[e]=n,!0):r!==i.kT&&(0,i.RI)(r,e)?(r[e]=n,!0):!(0,i.RI)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.kT&&(0,i.RI)(t,a)||Bt(e,a)||(c=o[0])&&(0,i.RI)(c,a)||(0,i.RI)(r,a)||(0,i.RI)(Vt,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.RI)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function $t(t){return(0,i.kJ)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let qt=!0;function Ht(t){const e=Jt(t),n=t.proxy,s=t.ctx;qt=!1,e.beforeCreate&&Gt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:u,provide:l,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:m,updated:g,activated:v,deactivated:y,beforeDestroy:_,beforeUnmount:w,destroyed:b,unmounted:E,render:T,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:k,expose:A,inheritAttrs:O,components:R,directives:x,filters:N}=e,D=null;if(h&&Kt(h,s,D),c)for(const r in c){const t=c[r];(0,i.mf)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Kn)(e)&&(t.data=(0,r.qj)(e))}if(qt=!0,a)for(const r in a){const t=a[r],e=(0,i.mf)(t)?t.bind(n,n):(0,i.mf)(t.get)?t.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(t)&&(0,i.mf)(t.set)?t.set.bind(n):i.dG,c=Fn({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(u)for(const r in u)Wt(u[r],s,n,r);if(l){const t=(0,i.mf)(l)?l.call(n):l;Reflect.ownKeys(t).forEach((e=>{ue(e,t[e])}))}function P(t,e){(0,i.kJ)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&Gt(f,t,"c"),P(Tt,d),P(It,p),P(St,m),P(Ct,g),P(mt,v),P(gt,y),P(Nt,C),P(xt,I),P(Rt,S),P(kt,w),P(At,E),P(Ot,k),(0,i.kJ)(A))if(A.length){const e=t.exposed||(t.exposed={});A.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});T&&t.render===i.dG&&(t.render=T),null!=O&&(t.inheritAttrs=O),R&&(t.components=R),x&&(t.directives=x)}function Kt(t,e,n=i.dG){(0,i.kJ)(t)&&(t=te(t));for(const s in t){const n=t[s];let o;o=(0,i.Kn)(n)?"default"in n?le(n.from||s,n.default,!0):le(n.from||s):le(n),(0,r.dq)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function Gt(t,e,n){o((0,i.kJ)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function Wt(t,e,n,r){const s=r.includes(".")?Q(n,r):()=>n[r];if((0,i.HD)(t)){const n=e[t];(0,i.mf)(n)&&G(s,n)}else if((0,i.mf)(t))G(s,t.bind(n));else if((0,i.Kn)(t))if((0,i.kJ)(t))t.forEach((t=>Wt(t,e,n,r)));else{const r=(0,i.mf)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.mf)(r)&&G(s,r,t)}else 0}function Jt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let u;return c?u=c:s.length||n||r?(u={},s.length&&s.forEach((t=>Qt(u,t,a,!0))),Qt(u,e,a)):u=e,(0,i.Kn)(e)&&o.set(e,u),u}function Qt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&Qt(t,s,n,!0),i&&i.forEach((e=>Qt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=Xt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const Xt={data:Yt,props:re,emits:re,methods:ne,computed:ne,beforeCreate:ee,created:ee,beforeMount:ee,mounted:ee,beforeUpdate:ee,updated:ee,beforeDestroy:ee,beforeUnmount:ee,destroyed:ee,unmounted:ee,activated:ee,deactivated:ee,errorCaptured:ee,serverPrefetch:ee,components:ne,directives:ne,watch:ie,provide:Yt,inject:Zt};function Yt(t,e){return e?t?function(){return(0,i.l7)((0,i.mf)(t)?t.call(this,this):t,(0,i.mf)(e)?e.call(this,this):e)}:e:t}function Zt(t,e){return ne(te(t),te(e))}function te(t){if((0,i.kJ)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ee(t,e){return t?[...new Set([].concat(t,e))]:e}function ne(t,e){return t?(0,i.l7)(Object.create(null),t,e):e}function re(t,e){return t?(0,i.kJ)(t)&&(0,i.kJ)(e)?[...new Set([...t,...e])]:(0,i.l7)(Object.create(null),$t(t),$t(null!=e?e:{})):e}function ie(t,e){if(!t)return e;if(!e)return t;const n=(0,i.l7)(Object.create(null),t);for(const r in e)n[r]=ee(t[r],e[r]);return n}function se(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oe=0;function ae(t,e){return function(n,r=null){(0,i.mf)(n)||(n=(0,i.l7)({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=se();const o=new Set;let a=!1;const c=s.app={_uid:oe++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Bn,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.mf)(t.install)?(o.add(t),t.install(c,...e)):(0,i.mf)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,u){if(!a){0;const l=en(n,r);return l.appContext=s,o&&e?e(l,i):t(l,i,u),a=!0,c._container=i,i.__vue_app__=c,Pn(l.component)||l.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){ce=c;try{return t()}finally{ce=null}}};return c}}let ce=null;function ue(t,e){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[t]=e}else 0}function le(t,e,n=!1){const r=vn||N;if(r||ce){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ce._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.mf)(e)?e.call(r&&r.proxy):e}else 0}function he(t,e,n,s=!1){const o={},a={};(0,i.Nj)(a,Xe,1),t.propsDefaults=Object.create(null),de(t,e,o,a);for(const r in t.propsOptions[0])r in o||(o[r]=void 0);n?t.props=s?o:(0,r.Um)(o):t.type.props?t.props=o:t.props=a,t.attrs=a}function fe(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,u=(0,r.IU)(o),[l]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;de(t,e,o,a)&&(h=!0);for(const s in u)e&&((0,i.RI)(e,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(e,r))||(l?!n||void 0===n[s]&&void 0===n[r]||(o[s]=pe(l,u,s,void 0,t,!0)):delete o[s]);if(a!==u)for(const t in a)e&&(0,i.RI)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(x(t.emitsOptions,s))continue;const c=e[s];if(l)if((0,i.RI)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i._A)(s);o[e]=pe(l,u,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.X$)(t,"set","$attrs")}function de(t,e,n,s){const[o,a]=t.propsOptions;let c,u=!1;if(e)for(let r in e){if((0,i.Gg)(r))continue;const l=e[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(c||(c={}))[h]=l:n[h]=l:x(t.emitsOptions,r)||r in s&&l===s[r]||(s[r]=l,u=!0)}if(a){const e=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<a.length;r++){const c=a[r];n[c]=pe(o,e,c,s[c],t,!(0,i.RI)(s,c))}}return u}function pe(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.RI)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.mf)(t)){const{propsDefaults:i}=s;n in i?r=i[n]:(En(s),r=i[n]=t.call(null,e),Tn())}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function me(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let u=!1;if(!(0,i.mf)(t)){const r=t=>{u=!0;const[n,r]=me(t,e,!0);(0,i.l7)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!u)return(0,i.Kn)(t)&&r.set(t,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const t=(0,i._A)(o[h]);ge(t)&&(a[t]=i.kT)}else if(o){0;for(const t in o){const e=(0,i._A)(t);if(ge(e)){const n=o[t],r=a[e]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:(0,i.l7)({},n);if(r){const t=_e(Boolean,r.type),n=_e(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.RI)(r,"default"))&&c.push(e)}}}}const l=[a,c];return(0,i.Kn)(t)&&r.set(t,l),l}function ge(t){return"$"!==t[0]}function ve(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:null===t?"null":""}function ye(t,e){return ve(t)===ve(e)}function _e(t,e){return(0,i.kJ)(e)?e.findIndex((e=>ye(e,t))):(0,i.mf)(e)&&ye(e,t)?0:-1}const we=t=>"_"===t[0]||"$stable"===t,be=t=>(0,i.kJ)(t)?t.map(un):[un(t)],Ee=(t,e,n)=>{if(e._n)return e;const r=F(((...t)=>be(e(...t))),n);return r._c=!1,r},Te=(t,e,n)=>{const r=t._ctx;for(const s in t){if(we(s))continue;const n=t[s];if((0,i.mf)(n))e[s]=Ee(s,n,r);else if(null!=n){0;const t=be(n);e[s]=()=>t}}},Ie=(t,e)=>{const n=be(e);t.slots.default=()=>n},Se=(t,e)=>{if(32&t.vnode.shapeFlag){const n=e._;n?(t.slots=(0,r.IU)(e),(0,i.Nj)(e,"_",n)):Te(e,t.slots={})}else t.slots={},e&&Ie(t,e);(0,i.Nj)(t.slots,Xe,1)},Ce=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.kT;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.l7)(s,e),n||1!==t||delete s._):(o=!e.$stable,Te(e,s)),a=e}else e&&(Ie(t,e),a={default:1});if(o)for(const i in s)we(i)||i in a||delete s[i]};function ke(t,e,n,o,a=!1){if((0,i.kJ)(t))return void t.forEach(((t,r)=>ke(t,e&&((0,i.kJ)(e)?e[r]:e),n,o,a)));if(ft(o)&&!a)return;const c=4&o.shapeFlag?Pn(o.component)||o.component.proxy:o.el,u=a?null:c,{i:l,r:h}=t;const f=e&&e.r,d=l.refs===i.kT?l.refs={}:l.refs,p=l.setupState;if(null!=f&&f!==h&&((0,i.HD)(f)?(d[f]=null,(0,i.RI)(p,f)&&(p[f]=null)):(0,r.dq)(f)&&(f.value=null)),(0,i.mf)(h))s(h,l,12,[u,d]);else{const e=(0,i.HD)(h),s=(0,r.dq)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.RI)(p,h)?p[h]:d[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,c):(0,i.kJ)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.RI)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=u,(0,i.RI)(p,h)&&(p[h]=u)):s&&(h.value=u,t.k&&(d[t.k]=u))};u?(r.id=-1,Oe(r,n)):r()}else 0}}function Ae(){}const Oe=H;function Re(t){return xe(t)}function xe(t,e){Ae();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:u,createComment:l,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:m=i.dG,insertStaticContent:g}=t,v=(t,e,n,r=null,i=null,s=null,o=!1,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!Qe(t,e)&&(r=Y(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=e;switch(u){case Fe:y(t,e,n,r);break;case Ue:_(t,e,n,r);break;case je:null==t&&b(e,n,r,o);break;case Le:P(t,e,n,r,i,s,o,a,c);break;default:1&h?k(t,e,n,r,i,s,o,a,c):6&h?M(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&u.process(t,e,n,r,i,s,o,a,c,et)}null!=l&&i&&ke(l,t&&t.ref,s,e||t,!e)},y=(t,e,n,r)=>{if(null==t)s(e.el=u(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},_=(t,e,n,r)=>{null==t?s(e.el=l(e.children||""),n,r):e.el=t.el},b=(t,e,n,r)=>{[t.el,t.anchor]=g(t.children,e,n,r,t.el,t.anchor)},T=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},C=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},k=(t,e,n,r,i,s,o,a,c)=>{o=o||"svg"===e.type,null==t?A(e,n,r,i,s,o,a,c):x(t,e,i,s,o,a,c)},A=(t,e,n,r,o,u,l,h)=>{let d,p;const{type:m,props:g,shapeFlag:v,transition:y,dirs:_}=t;if(d=t.el=c(t.type,u,g&&g.is,g),8&v?f(d,t.children):16&v&&R(t.children,d,null,r,o,u&&"foreignObject"!==m,l,h),_&&Z(t,null,r,"created"),O(d,t,t.scopeId,l,r),g){for(const e in g)"value"===e||(0,i.Gg)(e)||a(d,e,null,g[e],u,t.children,r,o,X);"value"in g&&a(d,"value",null,g.value),(p=g.onVnodeBeforeMount)&&dn(p,r,t)}_&&Z(t,null,r,"beforeMount");const w=(!o||o&&!o.pendingBranch)&&y&&!y.persisted;w&&y.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||w||_)&&Oe((()=>{p&&dn(p,r,t),w&&y.enter(d),_&&Z(t,null,r,"mounted")}),o)},O=(t,e,n,r,i)=>{if(n&&m(t,n),r)for(let s=0;s<r.length;s++)m(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;O(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},R=(t,e,n,r,i,s,o,a,c=0)=>{for(let u=c;u<t.length;u++){const c=t[u]=a?ln(t[u]):un(t[u]);v(null,c,e,n,r,i,s,o,a)}},x=(t,e,n,r,s,o,c)=>{const u=e.el=t.el;let{patchFlag:l,dynamicChildren:h,dirs:d}=e;l|=16&t.patchFlag;const p=t.props||i.kT,m=e.props||i.kT;let g;n&&Ne(n,!1),(g=m.onVnodeBeforeUpdate)&&dn(g,n,e,t),d&&Z(e,t,n,"beforeUpdate"),n&&Ne(n,!0);const v=s&&"foreignObject"!==e.type;if(h?N(t.dynamicChildren,h,u,n,r,v,o):c||z(t,e,u,null,n,r,v,o,!1),l>0){if(16&l)D(u,e,p,m,n,r,s);else if(2&l&&p.class!==m.class&&a(u,"class",null,m.class,s),4&l&&a(u,"style",p.style,m.style,s),8&l){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],l=m[o];l===c&&"value"!==o||a(u,o,c,l,s,t.children,n,r,X)}}1&l&&t.children!==e.children&&f(u,e.children)}else c||null!=h||D(u,e,p,m,n,r,s);((g=m.onVnodeUpdated)||d)&&Oe((()=>{g&&dn(g,n,e,t),d&&Z(e,t,n,"updated")}),r)},N=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],u=e[a],l=c.el&&(c.type===Le||!Qe(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,s,o,!0)}},D=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.kT)for(const u in n)(0,i.Gg)(u)||u in r||a(t,u,n[u],null,c,e.children,s,o,X);for(const u in r){if((0,i.Gg)(u))continue;const l=r[u],h=n[u];l!==h&&"value"!==u&&a(t,u,h,l,c,e.children,s,o,X)}"value"in r&&a(t,"value",n.value,r.value)}},P=(t,e,n,r,i,o,a,c,l)=>{const h=e.el=t?t.el:u(""),f=e.anchor=t?t.anchor:u("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:m}=e;m&&(c=c?c.concat(m):m),null==t?(s(h,n,r),s(f,n,r),R(e.children,n,f,i,o,a,c,l)):d>0&&64&d&&p&&t.dynamicChildren?(N(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&De(t,e,!0)):z(t,e,n,f,i,o,a,c,l)},M=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):L(e,n,r,i,s,o,c):F(t,e,c)},L=(t,e,n,r,i,s,o)=>{const a=t.component=gn(t,r,i);if(dt(t)&&(a.ctx.renderer=et),An(a),a.asyncDep){if(i&&i.registerDep(a,j),!t.el){const t=a.subTree=en(Ue);_(null,t,e,n)}}else j(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(B(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,E(r.update),r.update()}else e.el=t.el,r.vnode=e},j=(t,e,n,s,o,a,c)=>{const u=()=>{if(t.isMounted){let e,{next:n,bu:r,u:s,parent:u,vnode:l}=t,h=n;0,Ne(t,!1),n?(n.el=l.el,V(t,n,c)):n=l,r&&(0,i.ir)(r),(e=n.props&&n.props.onVnodeBeforeUpdate)&&dn(e,u,n,l),Ne(t,!0);const f=U(t);0;const p=t.subTree;t.subTree=f,v(p,f,d(p.el),Y(p),t,o,a),n.el=f.el,null===h&&$(t,f.el),s&&Oe(s,o),(e=n.props&&n.props.onVnodeUpdated)&&Oe((()=>dn(e,u,n,l)),o)}else{let r;const{el:c,props:u}=e,{bm:l,m:h,parent:f}=t,d=ft(e);if(Ne(t,!1),l&&(0,i.ir)(l),!d&&(r=u&&u.onVnodeBeforeMount)&&dn(r,f,e),Ne(t,!0),c&&rt){const n=()=>{t.subTree=U(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=U(t);0,v(null,r,n,s,t,o,a),e.el=r.el}if(h&&Oe(h,o),!d&&(r=u&&u.onVnodeMounted)){const t=e;Oe((()=>dn(r,f,t)),o)}(256&e.shapeFlag||f&&ft(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&Oe(t.a,o),t.isMounted=!0,e=n=s=null}},l=t.effect=new r.qq(u,(()=>w(h)),t.scope),h=t.update=()=>l.run();h.id=t.uid,Ne(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,fe(t,e.props,i,n),Ce(t,e.children,n),(0,r.Jd)(),I(),(0,r.lk)()},z=(t,e,n,r,i,s,o,a,c=!1)=>{const u=t&&t.children,l=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void H(u,h,n,r,i,s,o,a,c);if(256&d)return void q(u,h,n,r,i,s,o,a,c)}8&p?(16&l&&X(u,i,s),h!==u&&f(n,h)):16&l?16&p?H(u,h,n,r,i,s,o,a,c):X(u,i,s,!0):(8&l&&f(n,""),16&p&&R(h,n,r,i,s,o,a,c))},q=(t,e,n,r,s,o,a,c,u)=>{t=t||i.Z6,e=e||i.Z6;const l=t.length,h=e.length,f=Math.min(l,h);let d;for(d=0;d<f;d++){const r=e[d]=u?ln(e[d]):un(e[d]);v(t[d],r,n,null,s,o,a,c,u)}l>h?X(t,s,o,!0,!1,f):R(e,n,r,s,o,a,c,u,f)},H=(t,e,n,r,s,o,a,c,u)=>{let l=0;const h=e.length;let f=t.length-1,d=h-1;while(l<=f&&l<=d){const r=t[l],i=e[l]=u?ln(e[l]):un(e[l]);if(!Qe(r,i))break;v(r,i,n,null,s,o,a,c,u),l++}while(l<=f&&l<=d){const r=t[f],i=e[d]=u?ln(e[d]):un(e[d]);if(!Qe(r,i))break;v(r,i,n,null,s,o,a,c,u),f--,d--}if(l>f){if(l<=d){const t=d+1,i=t<h?e[t].el:r;while(l<=d)v(null,e[l]=u?ln(e[l]):un(e[l]),n,i,s,o,a,c,u),l++}}else if(l>d)while(l<=f)G(t[l],s,o,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=d;l++){const t=e[l]=u?ln(e[l]):un(e[l]);null!=t.key&&g.set(t.key,l)}let y,_=0;const w=d-m+1;let b=!1,E=0;const T=new Array(w);for(l=0;l<w;l++)T[l]=0;for(l=p;l<=f;l++){const r=t[l];if(_>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(y=m;y<=d;y++)if(0===T[y-m]&&Qe(r,e[y])){i=y;break}void 0===i?G(r,s,o,!0):(T[i-m]=l+1,i>=E?E=i:b=!0,v(r,e[i],n,null,s,o,a,c,u),_++)}const I=b?Pe(T):i.Z6;for(y=I.length-1,l=w-1;l>=0;l--){const t=m+l,i=e[t],f=t+1<h?e[t+1].el:r;0===T[l]?v(null,i,n,f,s,o,a,c,u):b&&(y<0||l!==I[y]?K(i,n,f,2):y--)}}},K=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:u,shapeFlag:l}=t;if(6&l)return void K(t.component.subTree,e,n,r);if(128&l)return void t.suspense.move(e,n,r);if(64&l)return void a.move(t,e,n,et);if(a===Le){s(o,e,n);for(let t=0;t<u.length;t++)K(u[t],e,n,r);return void s(t.anchor,e,n)}if(a===je)return void T(t,e,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),Oe((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),u=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,u):u()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:f}=t;if(null!=a&&ke(a,null,n,t,!0),256&l)return void e.ctx.deactivate(t);const d=1&l&&f,p=!ft(t);let m;if(p&&(m=o&&o.onVnodeBeforeUnmount)&&dn(m,e,t),6&l)Q(t.component,n,r);else{if(128&l)return void t.suspense.unmount(n,r);d&&Z(t,null,e,"beforeUnmount"),64&l?t.type.remove(t,e,n,i,et,r):u&&(s!==Le||h>0&&64&h)?X(u,e,n,!1,!0):(s===Le&&384&h||!i&&16&l)&&X(c,e,n),r&&W(t)}(p&&(m=o&&o.onVnodeUnmounted)||d)&&Oe((()=>{m&&dn(m,e,t),d&&Z(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===Le)return void J(n,r);if(e===je)return void C(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},J=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},Q=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c}=t;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&Oe(c,e),Oe((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},X=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Y=t=>6&t.shapeFlag?Y(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el),tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):v(e._vnode||null,t,e,null,null,null,n),I(),S(),e._vnode=t},et={p:v,um:G,m:K,r:W,mt:L,mc:R,pc:z,pbc:N,n:Y,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:ae(tt,nt)}}function Ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function De(t,e,n=!1){const r=t.children,s=e.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=ln(s[i]),e.el=t.el),n||De(t,e)),e.type===Fe&&(e.el=t.el)}}function Pe(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}const Me=t=>t.__isTeleport;const Le=Symbol.for("v-fgt"),Fe=Symbol.for("v-txt"),Ue=Symbol.for("v-cmt"),je=Symbol.for("v-stc"),Ve=[];let Be=null;function ze(t=!1){Ve.push(Be=t?null:[])}function $e(){Ve.pop(),Be=Ve[Ve.length-1]||null}let qe=1;function He(t){qe+=t}function Ke(t){return t.dynamicChildren=qe>0?Be||i.Z6:null,$e(),qe>0&&Be&&Be.push(t),t}function Ge(t,e,n,r,i,s){return Ke(tn(t,e,n,r,i,s,!0))}function We(t,e,n,r,i){return Ke(en(t,e,n,r,i,!0))}function Je(t){return!!t&&!0===t.__v_isVNode}function Qe(t,e){return t.type===e.type&&t.key===e.key}const Xe="__vInternal",Ye=({key:t})=>null!=t?t:null,Ze=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.HD)(t)||(0,r.dq)(t)||(0,i.mf)(t)?{i:N,r:t,k:e,f:!!n}:t:null);function tn(t,e=null,n=null,r=0,s=null,o=(t===Le?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ye(e),ref:e&&Ze(e),scopeId:D,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:N};return c?(hn(u,n),128&o&&t.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),qe>0&&!a&&Be&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&Be.push(u),u}const en=nn;function nn(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==Mt||(t=Ue),Je(t)){const r=sn(t,e,!0);return n&&hn(r,n),qe>0&&!a&&Be&&(6&r.shapeFlag?Be[Be.indexOf(t)]=r:Be.push(r)),r.patchFlag|=-2,r}if(Ln(t)&&(t=t.__vccOpts),e){e=rn(e);let{class:t,style:n}=e;t&&!(0,i.HD)(t)&&(e.class=(0,i.C_)(t)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),e.style=(0,i.j5)(n))}const c=(0,i.HD)(t)?1:q(t)?128:Me(t)?64:(0,i.Kn)(t)?4:(0,i.mf)(t)?2:0;return tn(t,e,n,s,o,c,a,!0)}function rn(t){return t?(0,r.X3)(t)||Xe in t?(0,i.l7)({},t):t:null}function sn(t,e,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=t,c=e?fn(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ye(c),ref:e&&e.ref?n&&s?(0,i.kJ)(s)?s.concat(Ze(e)):[s,Ze(e)]:Ze(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Le?-1===o?16:16|o:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&sn(t.ssContent),ssFallback:t.ssFallback&&sn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return u}function on(t=" ",e=0){return en(Fe,null,t,e)}function an(t,e){const n=en(je,null,t);return n.staticCount=e,n}function cn(t="",e=!1){return e?(ze(),We(Ue,null,t)):en(Ue,null,t)}function un(t){return null==t||"boolean"===typeof t?en(Ue):(0,i.kJ)(t)?en(Le,null,t.slice()):"object"===typeof t?ln(t):en(Fe,null,String(t))}function ln(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:sn(t)}function hn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.kJ)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),hn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Xe in e?3===r&&N&&(1===N.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=N}}else(0,i.mf)(e)?(e={default:e,_ctx:N},n=32):(e=String(e),64&r?(n=16,e=[on(e)]):n=8);t.children=e,t.shapeFlag|=n}function fn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C_)([e.class,r.class]));else if("style"===t)e.style=(0,i.j5)([e.style,r.style]);else if((0,i.F7)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function dn(t,e,n,r=null){o(t,e,7,[n,r])}const pn=se();let mn=0;function gn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||pn,a={uid:mn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:me(s,o),emitsOptions:R(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=O.bind(null,a),t.ce&&t.ce(a),a}let vn=null;const yn=()=>vn||N;let _n,wn,bn="__VUE_INSTANCE_SETTERS__";(wn=(0,i.E9)()[bn])||(wn=(0,i.E9)()[bn]=[]),wn.push((t=>vn=t)),_n=t=>{wn.length>1?wn.forEach((e=>e(t))):wn[0](t)};const En=t=>{_n(t),t.scope.on()},Tn=()=>{vn&&vn.scope.off(),_n(null)};function In(t){return 4&t.vnode.shapeFlag}let Sn,Cn,kn=!1;function An(t,e=!1){kn=e;const{props:n,children:r}=t.vnode,i=In(t);he(t,n,i,e),Se(t,r);const s=i?On(t,e):void 0;return kn=!1,s}function On(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=(0,r.Xl)(new Proxy(t.ctx,zt));const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Dn(t):null;En(t),(0,r.Jd)();const c=s(o,t,0,[t.props,n]);if((0,r.lk)(),Tn(),(0,i.tI)(c)){if(c.then(Tn,Tn),e)return c.then((n=>{Rn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=c}else Rn(t,c,e)}else xn(t,e)}function Rn(t,e,n){(0,i.mf)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Kn)(e)&&(t.setupState=(0,r.WL)(e)),xn(t,n)}function xn(t,e,n){const s=t.type;if(!t.render){if(!e&&Sn&&!s.render){const e=s.template||Jt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Sn(e,c)}}t.render=s.render||i.dG,Cn&&Cn(t)}En(t),(0,r.Jd)(),Ht(t),(0,r.lk)(),Tn()}function Nn(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return(0,r.j)(t,"get","$attrs"),e[n]}}))}function Dn(t){const e=e=>{t.exposed=e||{}};return{get attrs(){return Nn(t)},slots:t.slots,emit:t.emit,expose:e}}function Pn(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(t.exposed)),{get(e,n){return n in e?e[n]:n in Vt?Vt[n](t):void 0},has(t,e){return e in t||e in Vt}}))}function Mn(t,e=!0){return(0,i.mf)(t)?t.displayName||t.name:t.name||e&&t.__name}function Ln(t){return(0,i.mf)(t)&&"__vccOpts"in t}const Fn=(t,e)=>(0,r.Fl)(t,e,kn);function Un(t,e,n){const r=arguments.length;return 2===r?(0,i.Kn)(e)&&!(0,i.kJ)(e)?Je(e)?en(t,null,[e]):en(t,e):en(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Je(n)&&(n=[n]),en(t,e,n))}const jn=Symbol.for("v-scx"),Vn=()=>{{const t=le(jn);return t}};const Bn="3.3.4"},9242:function(t,e,n){n.d(e,{F8:function(){return ft},iM:function(){return ht},nr:function(){return ct},ri:function(){return vt},uT:function(){return M}});n(7658);var r=n(7139),i=n(3396),s=n(4870);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,c=a&&a.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i=e?a.createElementNS(o,t):a.createElement(t,n?{is:n}:void 0);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>a.createTextNode(t),createComment:t=>a.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>a.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{c.innerHTML=r?`<svg>${t}</svg>`:t;const i=c.content;if(r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function l(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function h(t,e,n){const i=t.style,s=(0,r.HD)(n);if(n&&!s){if(e&&!(0,r.HD)(e))for(const t in e)null==n[t]&&d(i,t,"");for(const t in n)d(i,t,n[t])}else{const r=i.display;s?e!==n&&(i.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(i.display=r)}}const f=/\s*!important$/;function d(t,e,n){if((0,r.kJ)(n))n.forEach((n=>d(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=g(t,e);f.test(n)?t.setProperty((0,r.rs)(i),n.replace(f,""),"important"):t[i]=n}}const p=["Webkit","Moz","ms"],m={};function g(t,e){const n=m[e];if(n)return n;let i=(0,r._A)(e);if("filter"!==i&&i in t)return m[e]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in t)return m[e]=n}return e}const v="http://www.w3.org/1999/xlink";function y(t,e,n,i,s){if(i&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(v,e.slice(6,e.length)):t.setAttributeNS(v,e,n);else{const i=(0,r.Pq)(e);null==n||i&&!(0,r.yA)(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function _(t,e,n,i,s,o,a){if("innerHTML"===e||"textContent"===e)return i&&a(i,s,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){t._value=n;const r="OPTION"===c?t.getAttribute("value"):t.value,i=null==n?"":n;return r!==i&&(t.value=i),void(null==n&&t.removeAttribute(e))}let u=!1;if(""===n||null==n){const i=typeof t[e];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",u=!0):"number"===i&&(n=0,u=!0)}try{t[e]=n}catch(l){0}u&&t.removeAttribute(e)}function w(t,e,n,r){t.addEventListener(e,n,r)}function b(t,e,n,r){t.removeEventListener(e,n,r)}function E(t,e,n,r,i=null){const s=t._vei||(t._vei={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=I(e);if(r){const o=s[e]=A(r,i);w(t,n,o,a)}else o&&(b(t,n,o,a),s[e]=void 0)}}const T=/(?:Once|Passive|Capture)$/;function I(t){let e;if(T.test(t)){let n;e={};while(n=t.match(T))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,r.rs)(t.slice(2));return[n,e]}let S=0;const C=Promise.resolve(),k=()=>S||(C.then((()=>S=0)),S=Date.now());function A(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,i.$d)(O(t,n.value),e,5,[t])};return n.value=t,n.attached=k(),n}function O(t,e){if((0,r.kJ)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const R=/^on[a-z]/,x=(t,e,n,i,s=!1,o,a,c,u)=>{"class"===e?l(t,i,s):"style"===e?h(t,n,i):(0,r.F7)(e)?(0,r.tR)(e)||E(t,e,n,i,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):N(t,e,i,s))?_(t,e,i,o,a,c,u):("true-value"===e?t._trueValue=i:"false-value"===e&&(t._falseValue=i),y(t,e,i,s))};function N(t,e,n,i){return i?"innerHTML"===e||"textContent"===e||!!(e in t&&R.test(e)&&(0,r.mf)(n)):"spellcheck"!==e&&"draggable"!==e&&"translate"!==e&&("form"!==e&&(("list"!==e||"INPUT"!==t.tagName)&&(("type"!==e||"TEXTAREA"!==t.tagName)&&((!R.test(e)||!(0,r.HD)(n))&&e in t))))}"undefined"!==typeof HTMLElement&&HTMLElement;const D="transition",P="animation",M=(t,{slots:e})=>(0,i.h)(i.P$,V(t),e);M.displayName="Transition";const L={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},F=M.props=(0,r.l7)({},i.nJ,L),U=(t,e=[])=>{(0,r.kJ)(t)?t.forEach((t=>t(...e))):t&&t(...e)},j=t=>!!t&&((0,r.kJ)(t)?t.some((t=>t.length>1)):t.length>1);function V(t){const e={};for(const r in t)r in L||(e[r]=t[r]);if(!1===t.css)return e;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:u=o,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=B(s),g=m&&m[0],v=m&&m[1],{onBeforeEnter:y,onEnter:_,onEnterCancelled:w,onLeave:b,onLeaveCancelled:E,onBeforeAppear:T=y,onAppear:I=_,onAppearCancelled:S=w}=e,C=(t,e,n)=>{q(t,e?h:c),q(t,e?l:a),n&&n()},k=(t,e)=>{t._isLeaving=!1,q(t,f),q(t,p),q(t,d),e&&e()},A=t=>(e,n)=>{const r=t?I:_,s=()=>C(e,t,n);U(r,[e,s]),H((()=>{q(e,t?u:o),$(e,t?h:c),j(r)||G(e,i,g,s)}))};return(0,r.l7)(e,{onBeforeEnter(t){U(y,[t]),$(t,o),$(t,a)},onBeforeAppear(t){U(T,[t]),$(t,u),$(t,l)},onEnter:A(!1),onAppear:A(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>k(t,e);$(t,f),X(),$(t,d),H((()=>{t._isLeaving&&(q(t,f),$(t,p),j(b)||G(t,i,v,n))})),U(b,[t,n])},onEnterCancelled(t){C(t,!1),U(w,[t])},onAppearCancelled(t){C(t,!0),U(S,[t])},onLeaveCancelled(t){k(t),U(E,[t])}})}function B(t){if(null==t)return null;if((0,r.Kn)(t))return[z(t.enter),z(t.leave)];{const e=z(t);return[e,e]}}function z(t){const e=(0,r.He)(t);return e}function $(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t._vtc||(t._vtc=new Set)).add(e)}function q(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const{_vtc:n}=t;n&&(n.delete(e),n.size||(t._vtc=void 0))}function H(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let K=0;function G(t,e,n,r){const i=t._endId=++K,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=W(t,e);if(!o)return r();const u=o+"end";let l=0;const h=()=>{t.removeEventListener(u,f),s()},f=e=>{e.target===t&&++l>=c&&h()};setTimeout((()=>{l<c&&h()}),a+1),t.addEventListener(u,f)}function W(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${D}Delay`),s=r(`${D}Duration`),o=J(i,s),a=r(`${P}Delay`),c=r(`${P}Duration`),u=J(a,c);let l=null,h=0,f=0;e===D?o>0&&(l=D,h=o,f=s.length):e===P?u>0&&(l=P,h=u,f=c.length):(h=Math.max(o,u),l=h>0?o>u?D:P:null,f=l?l===D?s.length:c.length:0);const d=l===D&&/\b(transform|all)(,|$)/.test(r(`${D}Property`).toString());return{type:l,timeout:h,propCount:f,hasTransform:d}}function J(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>Q(e)+Q(t[n]))))}function Q(t){return 1e3*Number(t.slice(0,-1).replace(",","."))}function X(){return document.body.offsetHeight}const Y=new WeakMap,Z=new WeakMap,tt={name:"TransitionGroup",props:(0,r.l7)({},F,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!it(o[0].el,n.vnode.el,e))return;o.forEach(et),o.forEach(nt);const r=o.filter(rt);X(),r.forEach((t=>{const n=t.el,r=n.style;$(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,q(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.IU)(t),u=V(c);let l=c.tag||i.HY;o=a,a=e.default?(0,i.Q6)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,i.nK)(e,(0,i.U2)(e,u,r,n))}if(o)for(let t=0;t<o.length;t++){const e=o[t];(0,i.nK)(e,(0,i.U2)(e,u,r,n)),Y.set(e,e.el.getBoundingClientRect())}return(0,i.Wm)(l,null,a)}}};tt.props;function et(t){const e=t.el;e._moveCb&&e._moveCb(),e._enterCb&&e._enterCb()}function nt(t){Z.set(t,t.el.getBoundingClientRect())}function rt(t){const e=Y.get(t),n=Z.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function it(t,e,n){const r=t.cloneNode();t._vtc&&t._vtc.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const i=1===e.nodeType?e:e.parentNode;i.appendChild(r);const{hasTransform:s}=W(r);return i.removeChild(r),s}const st=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,r.kJ)(e)?t=>(0,r.ir)(e,t):e};function ot(t){t.target.composing=!0}function at(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ct={created(t,{modifiers:{lazy:e,trim:n,number:i}},s){t._assign=st(s);const o=i||s.props&&"number"===s.props.type;w(t,e?"change":"input",(e=>{if(e.target.composing)return;let i=t.value;n&&(i=i.trim()),o&&(i=(0,r.h5)(i)),t._assign(i)})),n&&w(t,"change",(()=>{t.value=t.value.trim()})),e||(w(t,"compositionstart",ot),w(t,"compositionend",at),w(t,"change",at))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:i,number:s}},o){if(t._assign=st(o),t.composing)return;if(document.activeElement===t&&"range"!==t.type){if(n)return;if(i&&t.value.trim()===e)return;if((s||"number"===t.type)&&(0,r.h5)(t.value)===e)return}const a=null==e?"":e;t.value!==a&&(t.value=a)}};const ut=["ctrl","shift","alt","meta"],lt={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>ut.some((n=>t[`${n}Key`]&&!e.includes(n)))},ht=(t,e)=>(n,...r)=>{for(let t=0;t<e.length;t++){const r=lt[e[t]];if(r&&r(n,e))return}return t(n,...r)},ft={beforeMount(t,{value:e},{transition:n}){t._vod="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):dt(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),dt(t,!0),r.enter(t)):r.leave(t,(()=>{dt(t,!1)})):dt(t,e))},beforeUnmount(t,{value:e}){dt(t,e)}};function dt(t,e){t.style.display=e?t._vod:"none"}const pt=(0,r.l7)({patchProp:x},u);let mt;function gt(){return mt||(mt=(0,i.Us)(pt))}const vt=(...t)=>{const e=gt().createApp(...t);const{mount:n}=e;return e.mount=t=>{const i=yt(t);if(!i)return;const s=e._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function yt(t){if((0,r.HD)(t)){const e=document.querySelector(t);return e}return t}},7139:function(t,e,n){n.d(e,{C_:function(){return Y},DM:function(){return v},E9:function(){return q},F7:function(){return u},Gg:function(){return R},HD:function(){return b},He:function(){return z},Kj:function(){return _},Kn:function(){return T},NO:function(){return a},Nj:function(){return V},Od:function(){return f},PO:function(){return A},Pq:function(){return tt},RI:function(){return p},S0:function(){return O},W7:function(){return k},WV:function(){return rt},Z6:function(){return s},_A:function(){return D},_N:function(){return g},aU:function(){return U},dG:function(){return o},e1:function(){return K},fY:function(){return r},h5:function(){return B},hR:function(){return F},hq:function(){return it},ir:function(){return j},j5:function(){return G},kC:function(){return L},kJ:function(){return m},kT:function(){return i},l7:function(){return h},mf:function(){return w},rs:function(){return M},tI:function(){return I},tR:function(){return l},yA:function(){return et},yk:function(){return E},zw:function(){return st}});n(7658);function r(t,e){const n=Object.create(null),r=t.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const i={},s=[],o=()=>{},a=()=>!1,c=/^on[^a-z]/,u=t=>c.test(t),l=t=>t.startsWith("onUpdate:"),h=Object.assign,f=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},d=Object.prototype.hasOwnProperty,p=(t,e)=>d.call(t,e),m=Array.isArray,g=t=>"[object Map]"===C(t),v=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),_=t=>"[object RegExp]"===C(t),w=t=>"function"===typeof t,b=t=>"string"===typeof t,E=t=>"symbol"===typeof t,T=t=>null!==t&&"object"===typeof t,I=t=>T(t)&&w(t.then)&&w(t.catch),S=Object.prototype.toString,C=t=>S.call(t),k=t=>C(t).slice(8,-1),A=t=>"[object Object]"===C(t),O=t=>b(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),x=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},N=/-(\w)/g,D=x((t=>t.replace(N,((t,e)=>e?e.toUpperCase():"")))),P=/\B([A-Z])/g,M=x((t=>t.replace(P,"-$1").toLowerCase())),L=x((t=>t.charAt(0).toUpperCase()+t.slice(1))),F=x((t=>t?`on${L(t)}`:"")),U=(t,e)=>!Object.is(t,e),j=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},V=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},z=t=>{const e=b(t)?Number(t):NaN;return isNaN(e)?t:e};let $;const q=()=>$||($="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const H="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",K=r(H);function G(t){if(m(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=b(r)?X(r):G(r);if(i)for(const t in i)e[t]=i[t]}return e}return b(t)||T(t)?t:void 0}const W=/;(?![^(]*\))/g,J=/:([^]+)/,Q=/\/\*[^]*?\*\//g;function X(t){const e={};return t.replace(Q,"").split(W).forEach((t=>{if(t){const n=t.split(J);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(b(t))e=t;else if(m(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(T(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",tt=r(Z);function et(t){return!!t||""===t}function nt(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=rt(t[r],e[r]);return n}function rt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=m(t),r=m(e),n||r)return!(!n||!r)&&nt(t,e);if(n=T(t),r=T(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!rt(t[n],e[n]))return!1}}return String(t)===String(e)}function it(t,e){return t.findIndex((t=>rt(t,e)))}const st=t=>b(t)?t:null==t?"":m(t)||T(t)&&(t.toString===S||!w(t.toString))?JSON.stringify(t,ot,2):String(t),ot=(t,e)=>e&&e.__v_isRef?ot(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n])=>(t[`${e} =>`]=n,t)),{})}:v(e)?{[`Set(${e.size})`]:[...e.values()]}:!T(e)||m(e)||A(e)?e:String(e)},8552:function(t,e,n){n.d(e,{ZP:function(){return ci}});n(7658);function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}
/*!
 * GSAP 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var s,o,a,c,u,l,h,f,d,p,m,g={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},v={duration:.5,overwrite:!1,delay:0},y=1e8,_=1/y,w=2*Math.PI,b=w/4,E=0,T=Math.sqrt,I=Math.cos,S=Math.sin,C=function(t){return"string"===typeof t},k=function(t){return"function"===typeof t},A=function(t){return"number"===typeof t},O=function(t){return"undefined"===typeof t},R=function(t){return"object"===typeof t},x=function(t){return!1!==t},N=function(){return"undefined"!==typeof window},D=function(t){return k(t)||C(t)},P="function"===typeof ArrayBuffer&&ArrayBuffer.isView||function(){},M=Array.isArray,L=/(?:-?\.?\d|\.)+/gi,F=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,U=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,j=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,V=/[+-]=-?[.\d]+/,B=/[^,'"\[\]\s]+/gi,z=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,$={},q={},H=function(t){return(q=bt(t,$))&&Vn},K=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},G=function(t,e){return!e&&console.warn(t)},W=function(t,e){return t&&($[t]=e)&&q&&(q[t]=e)||$},J=function(){return 0},Q={suppressEvents:!0,isStart:!0,kill:!1},X={suppressEvents:!0,kill:!1},Y={suppressEvents:!0},Z={},tt=[],et={},nt={},rt={},it=30,st=[],ot="",at=function(t){var e,n,r=t[0];if(R(r)||k(r)||(t=[t]),!(e=(r._gsap||{}).harness)){n=st.length;while(n--&&!st[n].targetTest(r));e=st[n]}n=t.length;while(n--)t[n]&&(t[n]._gsap||(t[n]._gsap=new Je(t[n],e)))||t.splice(n,1);return t},ct=function(t){return t._gsap||at(ie(t))[0]._gsap},ut=function(t,e,n){return(n=t[e])&&k(n)?t[e]():O(n)&&t.getAttribute&&t.getAttribute(e)||n},lt=function(t,e){return(t=t.split(",")).forEach(e)||t},ht=function(t){return Math.round(1e5*t)/1e5||0},ft=function(t){return Math.round(1e7*t)/1e7||0},dt=function(t,e){var n=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),"+"===n?t+r:"-"===n?t-r:"*"===n?t*r:t/r},pt=function(t,e){for(var n=e.length,r=0;t.indexOf(e[r])<0&&++r<n;);return r<n},mt=function(){var t,e,n=tt.length,r=tt.slice(0);for(et={},tt.length=0,t=0;t<n;t++)e=r[t],e&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)},gt=function(t,e,n,r){tt.length&&!o&&mt(),t.render(e,n,r||o&&e<0&&(t._initted||t._startAt)),tt.length&&!o&&mt()},vt=function(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(B).length<2?e:C(t)?t.trim():t},yt=function(t){return t},_t=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},wt=function(t){return function(e,n){for(var r in n)r in e||"duration"===r&&t||"ease"===r||(e[r]=n[r])}},bt=function(t,e){for(var n in e)t[n]=e[n];return t},Et=function t(e,n){for(var r in n)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(e[r]=R(n[r])?t(e[r]||(e[r]={}),n[r]):n[r]);return e},Tt=function(t,e){var n,r={};for(n in t)n in e||(r[n]=t[n]);return r},It=function(t){var e=t.parent||c,n=t.keyframes?wt(M(t.keyframes)):_t;if(x(t.inherit))while(e)n(t,e.vars.defaults),e=e.parent||e._dp;return t},St=function(t,e){var n=t.length,r=n===e.length;while(r&&n--&&t[n]===e[n]);return n<0},Ct=function(t,e,n,r,i){void 0===n&&(n="_first"),void 0===r&&(r="_last");var s,o=t[r];if(i){s=e[i];while(o&&o[i]>s)o=o._prev}return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[r]=e,e._prev=o,e.parent=e._dp=t,e},kt=function(t,e,n,r){void 0===n&&(n="_first"),void 0===r&&(r="_last");var i=e._prev,s=e._next;i?i._next=s:t[n]===e&&(t[n]=s),s?s._prev=i:t[r]===e&&(t[r]=i),e._next=e._prev=e.parent=null},At=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ot=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0)){var n=t;while(n)n._dirty=1,n=n.parent}return t},Rt=function(t){var e=t.parent;while(e&&e.parent)e._dirty=1,e.totalDuration(),e=e.parent;return t},xt=function(t,e,n,r){return t._startAt&&(o?t._startAt.revert(X):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},Nt=function t(e){return!e||e._ts&&t(e.parent)},Dt=function(t){return t._repeat?Pt(t._tTime,t=t.duration()+t._rDelay)*t:0},Pt=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},Mt=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Lt=function(t){return t._end=ft(t._start+(t._tDur/Math.abs(t._ts||t._rts||_)||0))},Ft=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=ft(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Lt(t),n._dirty||Ot(n,t)),t},Ut=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Mt(t.rawTime(),e),(!e._dur||Yt(0,e.totalDuration(),n)-e._tTime>_)&&e.render(n,!0)),Ot(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration()){n=t;while(n._dp)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp}t._zTime=-_}},jt=function(t,e,n,r){return e.parent&&At(e),e._start=ft((A(n)?n:n||t!==c?Jt(t,n,e):t._time)+e._delay),e._end=ft(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ct(t,e,"_first","_last",t._sort?"_start":0),$t(e)||(t._recent=e),r||Ut(t,e),t._ts<0&&Ft(t,t._tTime),t},Vt=function(t,e){return($.ScrollTrigger||K("scrollTrigger",e))&&$.ScrollTrigger.create(e,t)},Bt=function(t,e,n,r,i){return sn(t,e,i),t._initted?!n&&t._pt&&!o&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Pe.frame?(tt.push(t),t._lazy=[i,r],1):void 0:1},zt=function t(e){var n=e.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||t(n))},$t=function(t){var e=t.data;return"isFromStart"===e||"isStart"===e},qt=function(t,e,n,r){var i,s,a,c=t.ratio,u=e<0||!e&&(!t._start&&zt(t)&&(t._initted||!$t(t))||(t._ts<0||t._dp._ts<0)&&!$t(t))?0:1,l=t._rDelay,h=0;if(l&&t._repeat&&(h=Yt(0,t._tDur,e),s=Pt(h,l),t._yoyo&&1&s&&(u=1-u),s!==Pt(t._tTime,l)&&(c=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==c||o||r||t._zTime===_||!e&&t._zTime){if(!t._initted&&Bt(t,e,r,n,h))return;a=t._zTime,t._zTime=e||(n?_:0),n||(n=e&&!a),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=h,i=t._pt;while(i)i.r(u,i.d),i=i._next;e<0&&xt(t,e,n,!0),t._onUpdate&&!n&&be(t,"onUpdate"),h&&t._repeat&&!n&&t.parent&&be(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&At(t,1),n||o||(be(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Ht=function(t,e,n){var r;if(n>e){r=t._first;while(r&&r._start<=n){if("isPause"===r.data&&r._start>e)return r;r=r._next}}else{r=t._last;while(r&&r._start>=n){if("isPause"===r.data&&r._start<e)return r;r=r._prev}}},Kt=function(t,e,n,r){var i=t._repeat,s=ft(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=i?i<0?1e10:ft(s*(i+1)+t._rDelay*i):s,o>0&&!r&&Ft(t,t._tTime=t._tDur*o),t.parent&&Lt(t),n||Ot(t.parent,t),t},Gt=function(t){return t instanceof Xe?Ot(t):Kt(t,t._dur)},Wt={_start:0,endTime:J,totalDuration:J},Jt=function t(e,n,r){var i,s,o,a=e.labels,c=e._recent||Wt,u=e.duration()>=y?c.endTime(!1):e._dur;return C(n)&&(isNaN(n)||n in a)?(s=n.charAt(0),o="%"===n.substr(-1),i=n.indexOf("="),"<"===s||">"===s?(i>=0&&(n=n.replace(/=/,"")),("<"===s?c._start:c.endTime(c._repeat>=0))+(parseFloat(n.substr(1))||0)*(o?(i<0?c:r).totalDuration()/100:1)):i<0?(n in a||(a[n]=u),a[n]):(s=parseFloat(n.charAt(i-1)+n.substr(i+1)),o&&r&&(s=s/100*(M(r)?r[0]:r).totalDuration()),i>1?t(e,n.substr(0,i-1),r)+s:u+s)):null==n?u:+n},Qt=function(t,e,n){var r,i,s=A(e[1]),o=(s?2:1)+(t<2?0:1),a=e[o];if(s&&(a.duration=e[1]),a.parent=n,t){r=a,i=n;while(i&&!("immediateRender"in r))r=i.vars.defaults||{},i=x(i.vars.inherit)&&i.parent;a.immediateRender=x(r.immediateRender),t<2?a.runBackwards=1:a.startAt=e[o-1]}return new fn(e[0],a,e[o+1])},Xt=function(t,e){return t||0===t?e(t):e},Yt=function(t,e,n){return n<t?t:n>e?e:n},Zt=function(t,e){return C(t)&&(e=z.exec(t))?e[1]:""},te=function(t,e,n){return Xt(n,(function(n){return Yt(t,e,n)}))},ee=[].slice,ne=function(t,e){return t&&R(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&R(t[0]))&&!t.nodeType&&t!==u},re=function(t,e,n){return void 0===n&&(n=[]),t.forEach((function(t){var r;return C(t)&&!e||ne(t,1)?(r=n).push.apply(r,ie(t)):n.push(t)}))||n},ie=function(t,e,n){return a&&!e&&a.selector?a.selector(t):!C(t)||n||!l&&Me()?M(t)?re(t,n):ne(t)?ee.call(t,0):t?[t]:[]:ee.call((e||h).querySelectorAll(t),0)},se=function(t){return t=ie(t)[0]||G("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ie(e,n.querySelectorAll?n:n===t?G("Invalid scope")||h.createElement("div"):t)}},oe=function(t){return t.sort((function(){return.5-Math.random()}))},ae=function(t){if(k(t))return t;var e=R(t)?t:{each:t},n=qe(e.ease),r=e.from||0,i=parseFloat(e.base)||0,s={},o=r>0&&r<1,a=isNaN(r)||o,c=e.axis,u=r,l=r;return C(r)?u=l={center:.5,edges:.5,end:1}[r]||0:!o&&a&&(u=r[0],l=r[1]),function(t,o,h){var f,d,p,m,g,v,_,w,b,E=(h||e).length,I=s[E];if(!I){if(b="auto"===e.grid?0:(e.grid||[1,y])[1],!b){_=-y;while(_<(_=h[b++].getBoundingClientRect().left)&&b<E);b--}for(I=s[E]=[],f=a?Math.min(b,E)*u-.5:r%b,d=b===y?0:a?E*l/b-.5:r/b|0,_=0,w=y,v=0;v<E;v++)p=v%b-f,m=d-(v/b|0),I[v]=g=c?Math.abs("y"===c?m:p):T(p*p+m*m),g>_&&(_=g),g<w&&(w=g);"random"===r&&oe(I),I.max=_-w,I.min=w,I.v=E=(parseFloat(e.amount)||parseFloat(e.each)*(b>E?E-1:c?"y"===c?E/b:b:Math.max(b,E/b))||0)*("edges"===r?-1:1),I.b=E<0?i-E:i,I.u=Zt(e.amount||e.each)||0,n=n&&E<0?ze(n):n}return E=(I[t]-I.min)/I.max||0,ft(I.b+(n?n(E):E)*I.v)+I.u}},ce=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var r=ft(Math.round(parseFloat(n)/t)*t*e);return(r-r%1)/e+(A(n)?0:Zt(n))}},ue=function(t,e){var n,r,i=M(t);return!i&&R(t)&&(n=i=t.radius||y,t.values?(t=ie(t.values),(r=!A(t[0]))&&(n*=n)):t=ce(t.increment)),Xt(e,i?k(t)?function(e){return r=t(e),Math.abs(r-e)<=n?r:e}:function(e){var i,s,o=parseFloat(r?e.x:e),a=parseFloat(r?e.y:0),c=y,u=0,l=t.length;while(l--)r?(i=t[l].x-o,s=t[l].y-a,i=i*i+s*s):i=Math.abs(t[l]-o),i<c&&(c=i,u=l);return u=!n||c<=n?t[u]:e,r||u===e||A(e)?u:u+Zt(e)}:ce(t))},le=function(t,e,n,r){return Xt(M(t)?!e:!0===n?!!(n=0):!r,(function(){return M(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+.99*n))/n)*n*r)/r}))},he=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return e.reduce((function(t,e){return e(t)}),t)}},fe=function(t,e){return function(n){return t(parseFloat(n))+(e||Zt(n))}},de=function(t,e,n){return ye(t,e,0,1,n)},pe=function(t,e,n){return Xt(n,(function(n){return t[~~e(n)]}))},me=function t(e,n,r){var i=n-e;return M(e)?pe(e,t(0,e.length),n):Xt(r,(function(t){return(i+(t-e)%i)%i+e}))},ge=function t(e,n,r){var i=n-e,s=2*i;return M(e)?pe(e,t(0,e.length-1),n):Xt(r,(function(t){return t=(s+(t-e)%s)%s||0,e+(t>i?s-t:t)}))},ve=function(t){var e,n,r,i,s=0,o="";while(~(e=t.indexOf("random(",s)))r=t.indexOf(")",e),i="["===t.charAt(e+7),n=t.substr(e+7,r-e-7).match(i?B:L),o+=t.substr(s,e-s)+le(i?n:+n[0],i?0:+n[1],+n[2]||1e-5),s=r+1;return o+t.substr(s,t.length-s)},ye=function(t,e,n,r,i){var s=e-t,o=r-n;return Xt(i,(function(e){return n+((e-t)/s*o||0)}))},_e=function t(e,n,r,i){var s=isNaN(e+n)?0:function(t){return(1-t)*e+t*n};if(!s){var o,a,c,u,l,h=C(e),f={};if(!0===r&&(i=1)&&(r=null),h)e={p:e},n={p:n};else if(M(e)&&!M(n)){for(c=[],u=e.length,l=u-2,a=1;a<u;a++)c.push(t(e[a-1],e[a]));u--,s=function(t){t*=u;var e=Math.min(l,~~t);return c[e](t-e)},r=n}else i||(e=bt(M(e)?[]:{},e));if(!c){for(o in n)en.call(f,e,o,"get",n[o]);s=function(t){return bn(t,f)||(h?e.p:e)}}}return Xt(r,s)},we=function(t,e,n){var r,i,s,o=t.labels,a=y;for(r in o)i=o[r]-e,i<0===!!n&&i&&a>(i=Math.abs(i))&&(s=r,a=i);return s},be=function(t,e,n){var r,i,s,o=t.vars,c=o[e],u=a,l=t._ctx;if(c)return r=o[e+"Params"],i=o.callbackScope||t,n&&tt.length&&mt(),l&&(a=l),s=r?c.apply(i,r):c.call(i),a=u,s},Ee=function(t){return At(t),t.scrollTrigger&&t.scrollTrigger.kill(!!o),t.progress()<1&&be(t,"onInterrupt"),t},Te=[],Ie=function(t){if(N()&&t){t=!t.name&&t["default"]||t;var e=t.name,n=k(t),r=e&&!n&&t.init?function(){this._props=[]}:t,i={init:J,render:bn,add:en,kill:Tn,modifier:En,rawVars:0},s={targetTest:0,get:0,getSetter:vn,aliases:{},register:0};if(Me(),t!==r){if(nt[e])return;_t(r,_t(Tt(t,i),s)),bt(r.prototype,bt(i,Tt(t,s))),nt[r.prop=e]=r,t.targetTest&&(st.push(r),Z[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}W(e,r),t.register&&t.register(Vn,r,Cn)}else t&&Te.push(t)},Se=255,Ce={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},ke=function(t,e,n){return t+=t<0?1:t>1?-1:0,(6*t<1?e+(n-e)*t*6:t<.5?n:3*t<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},Ae=function(t,e,n){var r,i,s,o,a,c,u,l,h,f,d=t?A(t)?[t>>16,t>>8&Se,t&Se]:0:Ce.black;if(!d){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Ce[t])d=Ce[t];else if("#"===t.charAt(0)){if(t.length<6&&(r=t.charAt(1),i=t.charAt(2),s=t.charAt(3),t="#"+r+r+i+i+s+s+(5===t.length?t.charAt(4)+t.charAt(4):"")),9===t.length)return d=parseInt(t.substr(1,6),16),[d>>16,d>>8&Se,d&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),d=[t>>16,t>>8&Se,t&Se]}else if("hsl"===t.substr(0,3))if(d=f=t.match(L),e){if(~t.indexOf("="))return d=t.match(F),n&&d.length<4&&(d[3]=1),d}else o=+d[0]%360/360,a=+d[1]/100,c=+d[2]/100,i=c<=.5?c*(a+1):c+a-c*a,r=2*c-i,d.length>3&&(d[3]*=1),d[0]=ke(o+1/3,r,i),d[1]=ke(o,r,i),d[2]=ke(o-1/3,r,i);else d=t.match(L)||Ce.transparent;d=d.map(Number)}return e&&!f&&(r=d[0]/Se,i=d[1]/Se,s=d[2]/Se,u=Math.max(r,i,s),l=Math.min(r,i,s),c=(u+l)/2,u===l?o=a=0:(h=u-l,a=c>.5?h/(2-u-l):h/(u+l),o=u===r?(i-s)/h+(i<s?6:0):u===i?(s-r)/h+2:(r-i)/h+4,o*=60),d[0]=~~(o+.5),d[1]=~~(100*a+.5),d[2]=~~(100*c+.5)),n&&d.length<4&&(d[3]=1),d},Oe=function(t){var e=[],n=[],r=-1;return t.split(xe).forEach((function(t){var i=t.match(U)||[];e.push.apply(e,i),n.push(r+=i.length+1)})),e.c=n,e},Re=function(t,e,n){var r,i,s,o,a="",c=(t+a).match(xe),u=e?"hsla(":"rgba(",l=0;if(!c)return t;if(c=c.map((function(t){return(t=Ae(t,e,1))&&u+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"})),n&&(s=Oe(t),r=n.c,r.join(a)!==s.c.join(a)))for(i=t.replace(xe,"1").split(U),o=i.length-1;l<o;l++)a+=i[l]+(~r.indexOf(l)?c.shift()||u+"0,0,0,0)":(s.length?s:c.length?c:n).shift());if(!i)for(i=t.split(xe),o=i.length-1;l<o;l++)a+=i[l]+c[l];return a+i[o]},xe=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Ce)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),Ne=/hsl[a]?\(/,De=function(t){var e,n=t.join(" ");if(xe.lastIndex=0,xe.test(n))return e=Ne.test(n),t[1]=Re(t[1],e),t[0]=Re(t[0],e,Oe(t[1])),!0},Pe=function(){var t,e,n,r,i,s,o=Date.now,a=500,c=33,d=o(),p=d,g=1e3/240,v=g,y=[],_=function n(u){var l,h,f,m,_=o()-p,w=!0===u;if(_>a&&(d+=_-c),p+=_,f=p-d,l=f-v,(l>0||w)&&(m=++r.frame,i=f-1e3*r.time,r.time=f/=1e3,v+=l+(l>=g?4:g-l),h=1),w||(t=e(n)),h)for(s=0;s<y.length;s++)y[s](f,i,m,u)};return r={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(t){return i/(1e3/(t||60))},wake:function(){f&&(!l&&N()&&(u=l=window,h=u.document||{},$.gsap=Vn,(u.gsapVersions||(u.gsapVersions=[])).push(Vn.version),H(q||u.GreenSockGlobals||!u.gsap&&u||{}),n=u.requestAnimationFrame,Te.forEach(Ie)),t&&r.sleep(),e=n||function(t){return setTimeout(t,v-1e3*r.time+1|0)},m=1,_(2))},sleep:function(){(n?u.cancelAnimationFrame:clearTimeout)(t),m=0,e=J},lagSmoothing:function(t,e){a=t||1/0,c=Math.min(e||33,a)},fps:function(t){g=1e3/(t||240),v=1e3*r.time+g},add:function(t,e,n){var i=e?function(e,n,s,o){t(e,n,s,o),r.remove(i)}:t;return r.remove(t),y[n?"unshift":"push"](i),Me(),i},remove:function(t,e){~(e=y.indexOf(t))&&y.splice(e,1)&&s>=e&&s--},_listeners:y},r}(),Me=function(){return!m&&Pe.wake()},Le={},Fe=/^[\d.\-M][\d.\-,\s]/,Ue=/["']/g,je=function(t){for(var e,n,r,i={},s=t.substr(1,t.length-3).split(":"),o=s[0],a=1,c=s.length;a<c;a++)n=s[a],e=a!==c-1?n.lastIndexOf(","):n.length,r=n.substr(0,e),i[o]=isNaN(r)?r.replace(Ue,"").trim():+r,o=n.substr(e+1).trim();return i},Ve=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<n?t.indexOf(")",n+1):n)},Be=function(t){var e=(t+"").split("("),n=Le[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[je(e[1])]:Ve(t).split(",").map(vt)):Le._CE&&Fe.test(t)?Le._CE("",t):n},ze=function(t){return function(e){return 1-t(1-e)}},$e=function t(e,n){var r,i=e._first;while(i)i instanceof Xe?t(i,n):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===n||(i.timeline?t(i.timeline,n):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=n)),i=i._next},qe=function(t,e){return t&&(k(t)?t:Le[t]||Be(t))||e},He=function(t,e,n,r){void 0===n&&(n=function(t){return 1-e(1-t)}),void 0===r&&(r=function(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,s={easeIn:e,easeOut:n,easeInOut:r};return lt(t,(function(t){for(var e in Le[t]=$[t]=s,Le[i=t.toLowerCase()]=n,s)Le[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Le[t+"."+e]=s[e]})),s},Ke=function(t){return function(e){return e<.5?(1-t(1-2*e))/2:.5+t(2*(e-.5))/2}},Ge=function t(e,n,r){var i=n>=1?n:1,s=(r||(e?.3:.45))/(n<1?n:1),o=s/w*(Math.asin(1/i)||0),a=function(t){return 1===t?1:i*Math.pow(2,-10*t)*S((t-o)*s)+1},c="out"===e?a:"in"===e?function(t){return 1-a(1-t)}:Ke(a);return s=w/s,c.config=function(n,r){return t(e,n,r)},c},We=function t(e,n){void 0===n&&(n=1.70158);var r=function(t){return t?--t*t*((n+1)*t+n)+1:0},i="out"===e?r:"in"===e?function(t){return 1-r(1-t)}:Ke(r);return i.config=function(n){return t(e,n)},i};lt("Linear,Quad,Cubic,Quart,Quint,Strong",(function(t,e){var n=e<5?e+1:e;He(t+",Power"+(n-1),e?function(t){return Math.pow(t,n)}:function(t){return t},(function(t){return 1-Math.pow(1-t,n)}),(function(t){return t<.5?Math.pow(2*t,n)/2:1-Math.pow(2*(1-t),n)/2}))})),Le.Linear.easeNone=Le.none=Le.Linear.easeIn,He("Elastic",Ge("in"),Ge("out"),Ge()),function(t,e){var n=1/e,r=2*n,i=2.5*n,s=function(s){return s<n?t*s*s:s<r?t*Math.pow(s-1.5/e,2)+.75:s<i?t*(s-=2.25/e)*s+.9375:t*Math.pow(s-2.625/e,2)+.984375};He("Bounce",(function(t){return 1-s(1-t)}),s)}(7.5625,2.75),He("Expo",(function(t){return t?Math.pow(2,10*(t-1)):0})),He("Circ",(function(t){return-(T(1-t*t)-1)})),He("Sine",(function(t){return 1===t?1:1-I(t*b)})),He("Back",We("in"),We("out"),We()),Le.SteppedEase=Le.steps=$.SteppedEase={config:function(t,e){void 0===t&&(t=1);var n=1/t,r=t+(e?0:1),i=e?1:0,s=1-_;return function(t){return((r*Yt(0,s,t)|0)+i)*n}}},v.ease=Le["quad.out"],lt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",(function(t){return ot+=t+","+t+"Params,"}));var Je=function(t,e){this.id=E++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ut,this.set=e?e.getSetter:vn},Qe=function(){function t(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Kt(this,+t.duration,1,1),this.data=t.data,a&&(this._ctx=a,a.data.push(this)),m||Pe.wake()}var e=t.prototype;return e.delay=function(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},e.duration=function(t){return arguments.length?this.totalDuration(this._repeat>0?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},e.totalDuration=function(t){return arguments.length?(this._dirty=0,Kt(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(t,e){if(Me(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){Ft(this,t),!n._dp||n.parent||Ut(n,this);while(n&&n.parent)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&t<this._tDur||this._ts<0&&t>0||!this._tDur&&!t)&&jt(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===_||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),gt(this,t,e)),this},e.time=function(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Dt(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},e.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Dt(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(t,e){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*n,e):this._repeat?Pt(this._tTime,n)+1:1},e.timeScale=function(t){if(!arguments.length)return this._rts===-_?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Mt(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-_?0:this._rts,this.totalTime(Yt(-Math.abs(this._delay),this._tDur,e),!0),Lt(this),Rt(this)},e.paused=function(t){return arguments.length?(this._ps!==t&&(this._ps=t,t?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Me(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==_&&(this._tTime-=_)))),this):this._ps},e.startTime=function(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return e&&(e._sort||!this.parent)&&jt(e,this,t-this._delay),this}return this._start},e.endTime=function(t){return this._start+(x(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Mt(e.rawTime(t),this):this._tTime:this._tTime},e.revert=function(t){void 0===t&&(t=Y);var e=o;return o=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),o=e,this},e.globalTime=function(t){var e=this,n=arguments.length?t:e.rawTime();while(e)n=e._start+n/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):n},e.repeat=function(t){return arguments.length?(this._repeat=t===1/0?-2:t,Gt(this)):-2===this._repeat?1/0:this._repeat},e.repeatDelay=function(t){if(arguments.length){var e=this._time;return this._rDelay=t,Gt(this),e?this.time(e):this}return this._rDelay},e.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},e.seek=function(t,e){return this.totalTime(Jt(this,t),x(e))},e.restart=function(t,e){return this.play().totalTime(t?-this._delay:0,x(e))},e.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},e.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},e.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-_:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_,this},e.isActive=function(){var t,e=this.parent||this._dp,n=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=n&&t<this.endTime(!0)-_))},e.eventCallback=function(t,e,n){var r=this.vars;return arguments.length>1?(e?(r[t]=e,n&&(r[t+"Params"]=n),"onUpdate"===t&&(this._onUpdate=e)):delete r[t],this):r[t]},e.then=function(t){var e=this;return new Promise((function(n){var r=k(t)?t:yt,i=function(){var t=e.then;e.then=null,k(r)&&(r=r(e))&&(r.then||r===e)&&(e.then=t),n(r),e.then=t};e._initted&&1===e.totalProgress()&&e._ts>=0||!e._tTime&&e._ts<0?i():e._prom=i}))},e.kill=function(){Ee(this)},t}();_t(Qe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_,_prom:0,_ps:!1,_rts:1});var Xe=function(t){function e(e,n){var i;return void 0===e&&(e={}),i=t.call(this,e)||this,i.labels={},i.smoothChildTiming=!!e.smoothChildTiming,i.autoRemoveChildren=!!e.autoRemoveChildren,i._sort=x(e.sortChildren),c&&jt(e.parent||c,r(i),n),e.reversed&&i.reverse(),e.paused&&i.paused(!0),e.scrollTrigger&&Vt(r(i),e.scrollTrigger),i}i(e,t);var n=e.prototype;return n.to=function(t,e,n){return Qt(0,arguments,this),this},n.from=function(t,e,n){return Qt(1,arguments,this),this},n.fromTo=function(t,e,n,r){return Qt(2,arguments,this),this},n.set=function(t,e,n){return e.duration=0,e.parent=this,It(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new fn(t,e,Jt(this,n),1),this},n.call=function(t,e,n){return jt(this,fn.delayedCall(0,t,e),n)},n.staggerTo=function(t,e,n,r,i,s,o){return n.duration=e,n.stagger=n.stagger||r,n.onComplete=s,n.onCompleteParams=o,n.parent=this,new fn(t,n,Jt(this,i)),this},n.staggerFrom=function(t,e,n,r,i,s,o){return n.runBackwards=1,It(n).immediateRender=x(n.immediateRender),this.staggerTo(t,e,n,r,i,s,o)},n.staggerFromTo=function(t,e,n,r,i,s,o,a){return r.startAt=n,It(r).immediateRender=x(r.immediateRender),this.staggerTo(t,e,r,i,s,o,a)},n.render=function(t,e,n){var r,i,s,a,u,l,h,f,d,p,m,g,v=this._time,y=this._dirty?this.totalDuration():this._tDur,w=this._dur,b=t<=0?0:ft(t),E=this._zTime<0!==t<0&&(this._initted||!w);if(this!==c&&b>y&&t>=0&&(b=y),b!==this._tTime||n||E){if(v!==this._time&&w&&(b+=this._time-v,t+=this._time-v),r=b,d=this._start,f=this._ts,l=!f,E&&(w||(v=this._zTime),(t||!e)&&(this._zTime=t)),this._repeat){if(m=this._yoyo,u=w+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*u+t,e,n);if(r=ft(b%u),b===y?(a=this._repeat,r=w):(a=~~(b/u),a&&a===b/u&&(r=w,a--),r>w&&(r=w)),p=Pt(this._tTime,u),!v&&this._tTime&&p!==a&&this._tTime-p*u-this._dur<=0&&(p=a),m&&1&a&&(r=w-r,g=1),a!==p&&!this._lock){var T=m&&1&p,I=T===(m&&1&a);if(a<p&&(T=!T),v=T?0:b%w?w:b,this._lock=1,this.render(v||(g?0:ft(a*u)),e,!w)._lock=0,this._tTime=b,!e&&this.parent&&be(this,"onRepeat"),this.vars.repeatRefresh&&!g&&(this.invalidate()._lock=1),v&&v!==this._time||l!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(w=this._dur,y=this._tDur,I&&(this._lock=2,v=T?w:-1e-4,this.render(v,!0),this.vars.repeatRefresh&&!g&&this.invalidate()),this._lock=0,!this._ts&&!l)return this;$e(this,g)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=Ht(this,ft(v),ft(r)),h&&(b-=r-(r=h._start))),this._tTime=b,this._time=r,this._act=!f,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,v=0),!v&&r&&!e&&!a&&(be(this,"onStart"),this._tTime!==b))return this;if(r>=v&&t>=0){i=this._first;while(i){if(s=i._next,(i._act||r>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(r-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(r-i._start)*i._ts,e,n),r!==this._time||!this._ts&&!l){h=0,s&&(b+=this._zTime=-_);break}}i=s}}else{i=this._last;var S=t<0?t:r;while(i){if(s=i._prev,(i._act||S<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,n);if(i.render(i._ts>0?(S-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(S-i._start)*i._ts,e,n||o&&(i._initted||i._startAt)),r!==this._time||!this._ts&&!l){h=0,s&&(b+=this._zTime=S?-_:_);break}}i=s}}if(h&&!e&&(this.pause(),h.render(r>=v?0:-_)._zTime=r>=v?1:-1,this._ts))return this._start=d,Lt(this),this.render(t,e,n);this._onUpdate&&!e&&be(this,"onUpdate",!0),(b===y&&this._tTime>=this.totalDuration()||!b&&v)&&(d!==this._start&&Math.abs(f)===Math.abs(this._ts)||this._lock||((t||!w)&&(b===y&&this._ts>0||!b&&this._ts<0)&&At(this,1),e||t<0&&!v||!b&&!v&&y||(be(this,b===y&&t>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(b<y&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(t,e){var n=this;if(A(e)||(e=Jt(this,e,t)),!(t instanceof Qe)){if(M(t))return t.forEach((function(t){return n.add(t,e)})),this;if(C(t))return this.addLabel(t,e);if(!k(t))return this;t=fn.delayedCall(0,t)}return this!==t?jt(this,t,e):this},n.getChildren=function(t,e,n,r){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===n&&(n=!0),void 0===r&&(r=-y);var i=[],s=this._first;while(s)s._start>=r&&(s instanceof fn?e&&i.push(s):(n&&i.push(s),t&&i.push.apply(i,s.getChildren(!0,e,n)))),s=s._next;return i},n.getById=function(t){var e=this.getChildren(1,1,1),n=e.length;while(n--)if(e[n].vars.id===t)return e[n]},n.remove=function(t){return C(t)?this.removeLabel(t):k(t)?this.killTweensOf(t):(kt(this,t),t===this._recent&&(this._recent=this._last),Ot(this))},n.totalTime=function(e,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Pe.time-(this._ts>0?e/this._ts:(this.totalDuration()-e)/-this._ts))),t.prototype.totalTime.call(this,e,n),this._forcing=0,this):this._tTime},n.addLabel=function(t,e){return this.labels[t]=Jt(this,e),this},n.removeLabel=function(t){return delete this.labels[t],this},n.addPause=function(t,e,n){var r=fn.delayedCall(0,e||J,n);return r.data="isPause",this._hasPause=1,jt(this,r,Jt(this,t))},n.removePause=function(t){var e=this._first;t=Jt(this,t);while(e)e._start===t&&"isPause"===e.data&&At(e),e=e._next},n.killTweensOf=function(t,e,n){var r=this.getTweensOf(t,n),i=r.length;while(i--)Ye!==r[i]&&r[i].kill(t,e);return this},n.getTweensOf=function(t,e){var n,r=[],i=ie(t),s=this._first,o=A(e);while(s)s instanceof fn?pt(s._targets,i)&&(o?(!Ye||s._initted&&s._ts)&&s.globalTime(0)<=e&&s.globalTime(s.totalDuration())>e:!e||s.isActive())&&r.push(s):(n=s.getTweensOf(i,e)).length&&r.push.apply(r,n),s=s._next;return r},n.tweenTo=function(t,e){e=e||{};var n,r=this,i=Jt(r,t),s=e,o=s.startAt,a=s.onStart,c=s.onStartParams,u=s.immediateRender,l=fn.to(r,_t({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:i,overwrite:"auto",duration:e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale())||_,onStart:function(){if(r.pause(),!n){var t=e.duration||Math.abs((i-(o&&"time"in o?o.time:r._time))/r.timeScale());l._dur!==t&&Kt(l,t,0,1).render(l._time,!0,!0),n=1}a&&a.apply(l,c||[])}},e));return u?l.render(0):l},n.tweenFromTo=function(t,e,n){return this.tweenTo(e,_t({startAt:{time:Jt(this,t)}},n))},n.recent=function(){return this._recent},n.nextLabel=function(t){return void 0===t&&(t=this._time),we(this,Jt(this,t))},n.previousLabel=function(t){return void 0===t&&(t=this._time),we(this,Jt(this,t),1)},n.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+_)},n.shiftChildren=function(t,e,n){void 0===n&&(n=0);var r,i=this._first,s=this.labels;while(i)i._start>=n&&(i._start+=t,i._end+=t),i=i._next;if(e)for(r in s)s[r]>=n&&(s[r]+=t);return Ot(this)},n.invalidate=function(e){var n=this._first;this._lock=0;while(n)n.invalidate(e),n=n._next;return t.prototype.invalidate.call(this,e)},n.clear=function(t){void 0===t&&(t=!0);var e,n=this._first;while(n)e=n._next,this.remove(n),n=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Ot(this)},n.totalDuration=function(t){var e,n,r,i=0,s=this,o=s._last,a=y;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){r=s.parent;while(o)e=o._prev,o._dirty&&o.totalDuration(),n=o._start,n>a&&s._sort&&o._ts&&!s._lock?(s._lock=1,jt(s,o,n-o._delay,1)._lock=0):a=n,n<0&&o._ts&&(i-=n,(!r&&!s._dp||r&&r.smoothChildTiming)&&(s._start+=n/s._ts,s._time-=n,s._tTime-=n),s.shiftChildren(-n,!1,-Infinity),a=0),o._end>i&&o._ts&&(i=o._end),o=e;Kt(s,s===c&&s._time>i?s._time:i,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(t){if(c._ts&&(gt(c,Mt(t,c)),d=Pe.frame),Pe.frame>=it){it+=g.autoSleep||120;var e=c._first;if((!e||!e._ts)&&g.autoSleep&&Pe._listeners.length<2){while(e&&!e._ts)e=e._next;e||Pe.sleep()}}},e}(Qe);_t(Xe.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ye,Ze,tn=function(t,e,n,r,i,s,o){var a,c,u,l,h,f,d,p,m=new Cn(this._pt,t,e,0,1,wn,null,i),g=0,v=0;m.b=n,m.e=r,n+="",r+="",(d=~r.indexOf("random("))&&(r=ve(r)),s&&(p=[n,r],s(p,t,e),n=p[0],r=p[1]),c=n.match(j)||[];while(a=j.exec(r))l=a[0],h=r.substring(g,a.index),u?u=(u+1)%5:"rgba("===h.substr(-5)&&(u=1),l!==c[v++]&&(f=parseFloat(c[v-1])||0,m._pt={_next:m._pt,p:h||1===v?h:",",s:f,c:"="===l.charAt(1)?dt(f,l)-f:parseFloat(l)-f,m:u&&u<4?Math.round:0},g=j.lastIndex);return m.c=g<r.length?r.substring(g,r.length):"",m.fp=o,(V.test(r)||d)&&(m.e=0),this._pt=m,m},en=function(t,e,n,r,i,s,o,a,c,u){k(r)&&(r=r(i||0,t,s));var l,h=t[e],f="get"!==n?n:k(h)?c?t[e.indexOf("set")||!k(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=k(h)?c?mn:pn:dn;if(C(r)&&(~r.indexOf("random(")&&(r=ve(r)),"="===r.charAt(1)&&(l=dt(f,r)+(Zt(f)||0),(l||0===l)&&(r=l))),!u||f!==r||Ze)return isNaN(f*r)||""===r?(!h&&!(e in t)&&K(e,r),tn.call(this,t,e,f,r,d,a||g.stringFilter,c)):(l=new Cn(this._pt,t,e,+f||0,r-(f||0),"boolean"===typeof h?_n:yn,0,d),c&&(l.fp=c),o&&l.modifier(o,this,t),this._pt=l)},nn=function(t,e,n,r,i){if(k(t)&&(t=un(t,i,e,n,r)),!R(t)||t.style&&t.nodeType||M(t)||P(t))return C(t)?un(t,i,e,n,r):t;var s,o={};for(s in t)o[s]=un(t[s],i,e,n,r);return o},rn=function(t,e,n,r,i,s){var o,a,c,u;if(nt[t]&&!1!==(o=new nt[t]).init(i,o.rawVars?e[t]:nn(e[t],r,i,s,n),n,r,s)&&(n._pt=a=new Cn(n._pt,i,t,0,1,o.render,o,0,o.priority),n!==p)){c=n._ptLookup[n._targets.indexOf(i)],u=o._props.length;while(u--)c[o._props[u]]=a}return o},sn=function t(e,n,r){var i,a,u,l,h,f,d,p,m,g,w,b,E,T=e.vars,I=T.ease,S=T.startAt,C=T.immediateRender,k=T.lazy,A=T.onUpdate,O=T.onUpdateParams,R=T.callbackScope,N=T.runBackwards,D=T.yoyoEase,P=T.keyframes,M=T.autoRevert,L=e._dur,F=e._startAt,U=e._targets,j=e.parent,V=j&&"nested"===j.data?j.vars.targets:U,B="auto"===e._overwrite&&!s,z=e.timeline;if(z&&(!P||!I)&&(I="none"),e._ease=qe(I,v.ease),e._yEase=D?ze(qe(!0===D?I:D,v.ease)):0,D&&e._yoyo&&!e._repeat&&(D=e._yEase,e._yEase=e._ease,e._ease=D),e._from=!z&&!!T.runBackwards,!z||P&&!T.stagger){if(p=U[0]?ct(U[0]).harness:0,b=p&&T[p.prop],i=Tt(T,Z),F&&(F._zTime<0&&F.progress(1),n<0&&N&&C&&!M?F.render(-1,!0):F.revert(N&&L?X:Q),F._lazy=0),S){if(At(e._startAt=fn.set(U,_t({data:"isStart",overwrite:!1,parent:j,immediateRender:!0,lazy:!F&&x(k),startAt:null,delay:0,onUpdate:A,onUpdateParams:O,callbackScope:R,stagger:0},S))),e._startAt._dp=0,e._startAt._sat=e,n<0&&(o||!C&&!M)&&e._startAt.revert(X),C&&L&&n<=0&&r<=0)return void(n&&(e._zTime=n))}else if(N&&L&&!F)if(n&&(C=!1),u=_t({overwrite:!1,data:"isFromStart",lazy:C&&!F&&x(k),immediateRender:C,stagger:0,parent:j},i),b&&(u[p.prop]=b),At(e._startAt=fn.set(U,u)),e._startAt._dp=0,e._startAt._sat=e,n<0&&(o?e._startAt.revert(X):e._startAt.render(-1,!0)),e._zTime=n,C){if(!n)return}else t(e._startAt,_,_);for(e._pt=e._ptCache=0,k=L&&x(k)||k&&!L,a=0;a<U.length;a++){if(h=U[a],d=h._gsap||at(U)[a]._gsap,e._ptLookup[a]=g={},et[d.id]&&tt.length&&mt(),w=V===U?a:V.indexOf(h),p&&!1!==(m=new p).init(h,b||i,e,w,V)&&(e._pt=l=new Cn(e._pt,h,m.name,0,1,m.render,m,0,m.priority),m._props.forEach((function(t){g[t]=l})),m.priority&&(f=1)),!p||b)for(u in i)nt[u]&&(m=rn(u,i,e,w,h,V))?m.priority&&(f=1):g[u]=l=en.call(e,h,u,"get",i[u],w,V,0,T.stringFilter);e._op&&e._op[a]&&e.kill(h,e._op[a]),B&&e._pt&&(Ye=e,c.killTweensOf(h,g,e.globalTime(n)),E=!e.parent,Ye=0),e._pt&&k&&(et[d.id]=1)}f&&Sn(e),e._onInit&&e._onInit(e)}e._onUpdate=A,e._initted=(!e._op||e._pt)&&!E,P&&n<=0&&z.render(y,!0,!0)},on=function(t,e,n,r,i,s,o){var a,c,u,l,h=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!h){h=t._ptCache[e]=[],u=t._ptLookup,l=t._targets.length;while(l--){if(a=u[l][e],a&&a.d&&a.d._pt){a=a.d._pt;while(a&&a.p!==e&&a.fp!==e)a=a._next}if(!a)return Ze=1,t.vars[e]="+=0",sn(t,o),Ze=0,1;h.push(a)}}l=h.length;while(l--)c=h[l],a=c._pt||c,a.s=!r&&0!==r||i?a.s+(r||0)+s*a.c:r,a.c=n-a.s,c.e&&(c.e=ht(n)+Zt(c.e)),c.b&&(c.b=a.s+Zt(c.b))},an=function(t,e){var n,r,i,s,o=t[0]?ct(t[0]).harness:0,a=o&&o.aliases;if(!a)return e;for(r in n=bt({},e),a)if(r in n){s=a[r].split(","),i=s.length;while(i--)n[s[i]]=n[r]}return n},cn=function(t,e,n,r){var i,s,o=e.ease||r||"power1.inOut";if(M(e))s=n[t]||(n[t]=[]),e.forEach((function(t,n){return s.push({t:n/(e.length-1)*100,v:t,e:o})}));else for(i in e)s=n[i]||(n[i]=[]),"ease"===i||s.push({t:parseFloat(t),v:e[i],e:o})},un=function(t,e,n,r,i){return k(t)?t.call(e,n,r,i):C(t)&&~t.indexOf("random(")?ve(t):t},ln=ot+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",hn={};lt(ln+",id,stagger,delay,duration,paused,scrollTrigger",(function(t){return hn[t]=1}));var fn=function(t){function e(e,n,i,o){var a;"number"===typeof n&&(i.duration=n,n=i,i=null),a=t.call(this,o?n:It(n))||this;var u,l,h,f,d,p,m,v,y=a.vars,w=y.duration,b=y.delay,E=y.immediateRender,T=y.stagger,I=y.overwrite,S=y.keyframes,C=y.defaults,k=y.scrollTrigger,O=y.yoyoEase,N=n.parent||c,L=(M(e)||P(e)?A(e[0]):"length"in n)?[e]:ie(e);if(a._targets=L.length?at(L):G("GSAP target "+e+" not found. https://greensock.com",!g.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=I,S||T||D(w)||D(b)){if(n=a.vars,u=a.timeline=new Xe({data:"nested",defaults:C||{},targets:N&&"nested"===N.data?N.vars.targets:L}),u.kill(),u.parent=u._dp=r(a),u._start=0,T||D(w)||D(b)){if(f=L.length,m=T&&ae(T),R(T))for(d in T)~ln.indexOf(d)&&(v||(v={}),v[d]=T[d]);for(l=0;l<f;l++)h=Tt(n,hn),h.stagger=0,O&&(h.yoyoEase=O),v&&bt(h,v),p=L[l],h.duration=+un(w,r(a),l,p,L),h.delay=(+un(b,r(a),l,p,L)||0)-a._delay,!T&&1===f&&h.delay&&(a._delay=b=h.delay,a._start+=b,h.delay=0),u.to(p,h,m?m(l,p,L):0),u._ease=Le.none;u.duration()?w=b=0:a.timeline=0}else if(S){It(_t(u.vars.defaults,{ease:"none"})),u._ease=qe(S.ease||n.ease||"none");var F,U,j,V=0;if(M(S))S.forEach((function(t){return u.to(L,t,">")})),u.duration();else{for(d in h={},S)"ease"===d||"easeEach"===d||cn(d,S[d],h,S.easeEach);for(d in h)for(F=h[d].sort((function(t,e){return t.t-e.t})),V=0,l=0;l<F.length;l++)U=F[l],j={ease:U.e,duration:(U.t-(l?F[l-1].t:0))/100*w},j[d]=U.v,u.to(L,j,V),V+=j.duration;u.duration()<w&&u.to({},{duration:w-u.duration()})}}w||a.duration(w=u.duration())}else a.timeline=0;return!0!==I||s||(Ye=r(a),c.killTweensOf(L),Ye=0),jt(N,r(a),i),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(E||!w&&!S&&a._start===ft(N._time)&&x(E)&&Nt(r(a))&&"nested"!==N.data)&&(a._tTime=-_,a.render(Math.max(0,-b)||0)),k&&Vt(r(a),k),a}i(e,t);var n=e.prototype;return n.render=function(t,e,n){var r,i,s,o,a,c,u,l,h,f=this._time,d=this._tDur,p=this._dur,m=t<0,g=t>d-_&&!m?d:t<_?0:t;if(p){if(g!==this._tTime||!t||n||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==m){if(r=g,l=this.timeline,this._repeat){if(o=p+this._rDelay,this._repeat<-1&&m)return this.totalTime(100*o+t,e,n);if(r=ft(g%o),g===d?(s=this._repeat,r=p):(s=~~(g/o),s&&s===g/o&&(r=p,s--),r>p&&(r=p)),c=this._yoyo&&1&s,c&&(h=this._yEase,r=p-r),a=Pt(this._tTime,o),r===f&&!n&&this._initted)return this._tTime=g,this;s!==a&&(l&&this._yEase&&$e(l,c),!this.vars.repeatRefresh||c||this._lock||(this._lock=n=1,this.render(ft(o*s),!0).invalidate()._lock=0))}if(!this._initted){if(Bt(this,m?t:r,n,e,g))return this._tTime=0,this;if(f!==this._time)return this;if(p!==this._dur)return this.render(t,e,n)}if(this._tTime=g,this._time=r,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=u=(h||this._ease)(r/p),this._from&&(this.ratio=u=1-u),r&&!f&&!e&&!s&&(be(this,"onStart"),this._tTime!==g))return this;i=this._pt;while(i)i.r(u,i.d),i=i._next;l&&l.render(t<0?t:!r&&c?-_:l._dur*l._ease(r/this._dur),e,n)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(m&&xt(this,t,e,n),be(this,"onUpdate")),this._repeat&&s!==a&&this.vars.onRepeat&&!e&&this.parent&&be(this,"onRepeat"),g!==this._tDur&&g||this._tTime!==g||(m&&!this._onUpdate&&xt(this,t,!0,!0),(t||!p)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&At(this,1),e||m&&!f||!(g||f||c)||(be(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}}else qt(this,t,e,n);return this},n.targets=function(){return this._targets},n.invalidate=function(e){return(!e||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(e),t.prototype.invalidate.call(this,e)},n.resetTo=function(t,e,n,r){m||Pe.wake(),this._ts||this.play();var i,s=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||sn(this,s),i=this._ease(s/this._dur),on(this,t,e,n,r,i,s)?this.resetTo(t,e,n,r):(Ft(this,0),this.parent||Ct(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(t,e){if(void 0===e&&(e="all"),!t&&(!e||"all"===e))return this._lazy=this._pt=0,this.parent?Ee(this):this;if(this.timeline){var n=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Ye&&!0!==Ye.vars.overwrite)._first||Ee(this),this.parent&&n!==this.timeline.totalDuration()&&Kt(this,this._dur*this.timeline._tDur/n,0,1),this}var r,i,s,o,a,c,u,l=this._targets,h=t?ie(t):l,f=this._ptLookup,d=this._pt;if((!e||"all"===e)&&St(l,h))return"all"===e&&(this._pt=0),Ee(this);r=this._op=this._op||[],"all"!==e&&(C(e)&&(a={},lt(e,(function(t){return a[t]=1})),e=a),e=an(l,e)),u=l.length;while(u--)if(~h.indexOf(l[u]))for(a in i=f[u],"all"===e?(r[u]=e,o=i,s={}):(s=r[u]=r[u]||{},o=e),o)c=i&&i[a],c&&("kill"in c.d&&!0!==c.d.kill(a)||kt(this,c,"_pt"),delete i[a]),"all"!==s&&(s[a]=1);return this._initted&&!this._pt&&d&&Ee(this),this},e.to=function(t,n){return new e(t,n,arguments[2])},e.from=function(t,e){return Qt(1,arguments)},e.delayedCall=function(t,n,r,i){return new e(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:n,onReverseComplete:n,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},e.fromTo=function(t,e,n){return Qt(2,arguments)},e.set=function(t,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new e(t,n)},e.killTweensOf=function(t,e,n){return c.killTweensOf(t,e,n)},e}(Qe);_t(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),lt("staggerTo,staggerFrom,staggerFromTo",(function(t){fn[t]=function(){var e=new Xe,n=ee.call(arguments,0);return n.splice("staggerFromTo"===t?5:4,0,0),e[t].apply(e,n)}}));var dn=function(t,e,n){return t[e]=n},pn=function(t,e,n){return t[e](n)},mn=function(t,e,n,r){return t[e](r.fp,n)},gn=function(t,e,n){return t.setAttribute(e,n)},vn=function(t,e){return k(t[e])?pn:O(t[e])&&t.setAttribute?gn:dn},yn=function(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},_n=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},wn=function(t,e){var n=e._pt,r="";if(!t&&e.b)r=e.b;else if(1===t&&e.e)r=e.e;else{while(n)r=n.p+(n.m?n.m(n.s+n.c*t):Math.round(1e4*(n.s+n.c*t))/1e4)+r,n=n._next;r+=e.c}e.set(e.t,e.p,r,e)},bn=function(t,e){var n=e._pt;while(n)n.r(t,n.d),n=n._next},En=function(t,e,n,r){var i,s=this._pt;while(s)i=s._next,s.p===r&&s.modifier(t,e,n),s=i},Tn=function(t){var e,n,r=this._pt;while(r)n=r._next,r.p===t&&!r.op||r.op===t?kt(this,r,"_pt"):r.dep||(e=1),r=n;return!e},In=function(t,e,n,r){r.mSet(t,e,r.m.call(r.tween,n,r.mt),r)},Sn=function(t){var e,n,r,i,s=t._pt;while(s){e=s._next,n=r;while(n&&n.pr>s.pr)n=n._next;(s._prev=n?n._prev:i)?s._prev._next=s:r=s,(s._next=n)?n._prev=s:i=s,s=e}t._pt=r},Cn=function(){function t(t,e,n,r,i,s,o,a,c){this.t=e,this.s=r,this.c=i,this.p=n,this.r=s||yn,this.d=o||this,this.set=a||dn,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=t.prototype;return e.modifier=function(t,e,n){this.mSet=this.mSet||this.set,this.set=In,this.m=t,this.mt=n,this.tween=e},t}();lt(ot+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",(function(t){return Z[t]=1})),$.TweenMax=$.TweenLite=fn,$.TimelineLite=$.TimelineMax=Xe,c=new Xe({sortChildren:!1,defaults:v,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),g.stringFilter=De;var kn=[],An={},On=[],Rn=0,xn=0,Nn=function(t){return(An[t]||On).map((function(t){return t()}))},Dn=function(){var t=Date.now(),e=[];t-Rn>2&&(Nn("matchMediaInit"),kn.forEach((function(t){var n,r,i,s,o=t.queries,a=t.conditions;for(r in o)n=u.matchMedia(o[r]).matches,n&&(i=1),n!==a[r]&&(a[r]=n,s=1);s&&(t.revert(),i&&e.push(t))})),Nn("matchMediaRevert"),e.forEach((function(t){return t.onMatch(t)})),Rn=t,Nn("matchMedia"))},Pn=function(){function t(t,e){this.selector=e&&se(e),this.data=[],this._r=[],this.isReverted=!1,this.id=xn++,t&&this.add(t)}var e=t.prototype;return e.add=function(t,e,n){k(t)&&(n=e,e=t,t=k);var r=this,i=function(){var t,i=a,s=r.selector;return i&&i!==r&&i.data.push(r),n&&(r.selector=se(n)),a=r,t=e.apply(r,arguments),k(t)&&r._r.push(t),a=i,r.selector=s,r.isReverted=!1,t};return r.last=i,t===k?i(r):t?r[t]=i:i},e.ignore=function(t){var e=a;a=null,t(this),a=e},e.getTweens=function(){var e=[];return this.data.forEach((function(n){return n instanceof t?e.push.apply(e,n.getTweens()):n instanceof fn&&!(n.parent&&"nested"===n.parent.data)&&e.push(n)})),e},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(t,e){var n=this;if(t){var r=this.getTweens();this.data.forEach((function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach((function(t){return r.splice(r.indexOf(t),1)})))})),r.map((function(t){return{g:t.globalTime(0),t:t}})).sort((function(t,e){return e.g-t.g||-1/0})).forEach((function(e){return e.t.revert(t)})),this.data.forEach((function(e){return!(e instanceof fn)&&e.revert&&e.revert(t)})),this._r.forEach((function(e){return e(t,n)})),this.isReverted=!0}else this.data.forEach((function(t){return t.kill&&t.kill()}));if(this.clear(),e){var i=kn.length;while(i--)kn[i].id===this.id&&kn.splice(i,1)}},e.revert=function(t){this.kill(t||{})},t}(),Mn=function(){function t(t){this.contexts=[],this.scope=t}var e=t.prototype;return e.add=function(t,e,n){R(t)||(t={matches:t});var r,i,s,o=new Pn(0,n||this.scope),c=o.conditions={};for(i in a&&!o.selector&&(o.selector=a.selector),this.contexts.push(o),e=o.add("onMatch",e),o.queries=t,t)"all"===i?s=1:(r=u.matchMedia(t[i]),r&&(kn.indexOf(o)<0&&kn.push(o),(c[i]=r.matches)&&(s=1),r.addListener?r.addListener(Dn):r.addEventListener("change",Dn)));return s&&e(o),this},e.revert=function(t){this.kill(t||{})},e.kill=function(t){this.contexts.forEach((function(e){return e.kill(t,!0)}))},t}(),Ln={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){return Ie(t)}))},timeline:function(t){return new Xe(t)},getTweensOf:function(t,e){return c.getTweensOf(t,e)},getProperty:function(t,e,n,r){C(t)&&(t=ie(t)[0]);var i=ct(t||{}).get,s=n?yt:vt;return"native"===n&&(n=""),t?e?s((nt[e]&&nt[e].get||i)(t,e,n,r)):function(e,n,r){return s((nt[e]&&nt[e].get||i)(t,e,n,r))}:t},quickSetter:function(t,e,n){if(t=ie(t),t.length>1){var r=t.map((function(t){return Vn.quickSetter(t,e,n)})),i=r.length;return function(t){var e=i;while(e--)r[e](t)}}t=t[0]||{};var s=nt[e],o=ct(t),a=o.harness&&(o.harness.aliases||{})[e]||e,c=s?function(e){var r=new s;p._pt=0,r.init(t,n?e+n:e,p,0,[t]),r.render(1,r),p._pt&&bn(1,p)}:o.set(t,a);return s?c:function(e){return c(t,a,n?e+n:e,o,1)}},quickTo:function(t,e,n){var r,i=Vn.to(t,bt((r={},r[e]="+=0.1",r.paused=!0,r),n||{})),s=function(t,n,r){return i.resetTo(e,t,n,r)};return s.tween=i,s},isTweening:function(t){return c.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=qe(t.ease,v.ease)),Et(v,t||{})},config:function(t){return Et(g,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,r=t.plugins,i=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach((function(t){return t&&!nt[t]&&!$[t]&&G(e+" effect requires "+t+" plugin.")})),rt[e]=function(t,e,r){return n(ie(t),_t(e||{},i),r)},s&&(Xe.prototype[e]=function(t,n,r){return this.add(rt[e](t,R(n)?n:(r=n)&&{},this),r)})},registerEase:function(t,e){Le[t]=qe(e)},parseEase:function(t,e){return arguments.length?qe(t,e):Le},getById:function(t){return c.getById(t)},exportRoot:function(t,e){void 0===t&&(t={});var n,r,i=new Xe(t);i.smoothChildTiming=x(t.smoothChildTiming),c.remove(i),i._dp=0,i._time=i._tTime=c._time,n=c._first;while(n)r=n._next,!e&&!n._dur&&n instanceof fn&&n.vars.onComplete===n._targets[0]||jt(i,n,n._start-n._delay),n=r;return jt(c,i,0),i},context:function(t,e){return t?new Pn(t,e):a},matchMedia:function(t){return new Mn(t)},matchMediaRefresh:function(){return kn.forEach((function(t){var e,n,r=t.conditions;for(n in r)r[n]&&(r[n]=!1,e=1);e&&t.revert()}))||Dn()},addEventListener:function(t,e){var n=An[t]||(An[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=An[t],r=n&&n.indexOf(e);r>=0&&n.splice(r,1)},utils:{wrap:me,wrapYoyo:ge,distribute:ae,random:le,snap:ue,normalize:de,getUnit:Zt,clamp:te,splitColor:Ae,toArray:ie,selector:se,mapRange:ye,pipe:he,unitize:fe,interpolate:_e,shuffle:oe},install:H,effects:rt,ticker:Pe,updateRoot:Xe.updateRoot,plugins:nt,globalTimeline:c,core:{PropTween:Cn,globals:W,Tween:fn,Timeline:Xe,Animation:Qe,getCache:ct,_removeLinkedListItem:kt,reverting:function(){return o},context:function(t){return t&&a&&(a.data.push(t),t._ctx=a),a},suppressOverwrites:function(t){return s=t}}};lt("to,from,fromTo,delayedCall,set,killTweensOf",(function(t){return Ln[t]=fn[t]})),Pe.add(Xe.updateRoot),p=Ln.to({},{duration:0});var Fn=function(t,e){var n=t._pt;while(n&&n.p!==e&&n.op!==e&&n.fp!==e)n=n._next;return n},Un=function(t,e){var n,r,i,s=t._targets;for(n in e){r=s.length;while(r--)i=t._ptLookup[r][n],i&&(i=i.d)&&(i._pt&&(i=Fn(i,n)),i&&i.modifier&&i.modifier(e[n],t,s[r],n))}},jn=function(t,e){return{name:t,rawVars:1,init:function(t,n,r){r._onInit=function(t){var r,i;if(C(n)&&(r={},lt(n,(function(t){return r[t]=1})),n=r),e){for(i in r={},n)r[i]=e(n[i]);n=r}Un(t,n)}}}},Vn=Ln.registerPlugin({name:"attr",init:function(t,e,n,r,i){var s,o,a;for(s in this.tween=n,e)a=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(a||0)+"",e[s],r,i,0,0,s),o.op=s,o.b=a,this._props.push(s)},render:function(t,e){var n=e._pt;while(n)o?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){var n=e.length;while(n--)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},jn("roundProps",ce),jn("modifiers"),jn("snap",ue))||Ln;fn.version=Xe.version=Vn.version="3.12.2",f=1,N()&&Me();Le.Power0,Le.Power1,Le.Power2,Le.Power3,Le.Power4,Le.Linear,Le.Quad,Le.Cubic,Le.Quart,Le.Quint,Le.Strong,Le.Elastic,Le.Back,Le.SteppedEase,Le.Bounce,Le.Sine,Le.Expo,Le.Circ;var Bn,zn,$n,qn,Hn,Kn,Gn,Wn,Jn=function(){return"undefined"!==typeof window},Qn={},Xn=180/Math.PI,Yn=Math.PI/180,Zn=Math.atan2,tr=1e8,er=/([A-Z])/g,nr=/(left|right|width|margin|padding|x)/i,rr=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sr=function(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},or=function(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)},ar=function(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)},cr=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},ur=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},lr=function(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)},hr=function(t,e,n){return t.style[e]=n},fr=function(t,e,n){return t.style.setProperty(e,n)},dr=function(t,e,n){return t._gsap[e]=n},pr=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},mr=function(t,e,n,r,i){var s=t._gsap;s.scaleX=s.scaleY=n,s.renderTransform(i,s)},gr=function(t,e,n,r,i){var s=t._gsap;s[e]=n,s.renderTransform(i,s)},vr="transform",yr=vr+"Origin",_r=function t(e,n){var r=this,i=this.target,s=i.style;if(e in Qn&&s){if(this.tfm=this.tfm||{},"transform"===e)return ir.transform.split(",").forEach((function(e){return t.call(r,e,n)}));if(e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach((function(t){return r.tfm[t]=Fr(i,t)})):this.tfm[e]=i._gsap.x?i._gsap[e]:Fr(i,e),this.props.indexOf(vr)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(yr,n,"")),e=vr}(s||n)&&this.props.push(e,n,s[e])},wr=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},br=function(){var t,e,n=this.props,r=this.target,i=r.style,s=r._gsap;for(t=0;t<n.length;t+=3)n[t+1]?r[n[t]]=n[t+2]:n[t+2]?i[n[t]]=n[t+2]:i.removeProperty("--"===n[t].substr(0,2)?n[t]:n[t].replace(er,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)s[e]=this.tfm[e];s.svg&&(s.renderTransform(),r.setAttribute("data-svg-origin",this.svgo||"")),t=Gn(),t&&t.isStart||i[vr]||(wr(i),s.uncache=1)}},Er=function(t,e){var n={target:t,props:[],revert:br,save:_r};return t._gsap||Vn.core.getCache(t),e&&e.split(",").forEach((function(t){return n.save(t)})),n},Tr=function(t,e){var n=zn.createElementNS?zn.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zn.createElement(t);return n.style?n:zn.createElement(t)},Ir=function t(e,n,r){var i=getComputedStyle(e);return i[n]||i.getPropertyValue(n.replace(er,"-$1").toLowerCase())||i.getPropertyValue(n)||!r&&t(e,Cr(n)||n,1)||""},Sr="O,Moz,ms,Ms,Webkit".split(","),Cr=function(t,e,n){var r=e||Hn,i=r.style,s=5;if(t in i&&!n)return t;t=t.charAt(0).toUpperCase()+t.substr(1);while(s--&&!(Sr[s]+t in i));return s<0?null:(3===s?"ms":s>=0?Sr[s]:"")+t},kr=function(){Jn()&&window.document&&(Bn=window,zn=Bn.document,$n=zn.documentElement,Hn=Tr("div")||{style:{}},Tr("div"),vr=Cr(vr),yr=vr+"Origin",Hn.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Wn=!!Cr("perspective"),Gn=Vn.core.reverting,qn=1)},Ar=function t(e){var n,r=Tr("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,s=this.nextSibling,o=this.style.cssText;if($n.appendChild(r),r.appendChild(this),this.style.display="block",e)try{n=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=t}catch(a){}else this._gsapBBox&&(n=this._gsapBBox());return i&&(s?i.insertBefore(this,s):i.appendChild(this)),$n.removeChild(r),this.style.cssText=o,n},Or=function(t,e){var n=e.length;while(n--)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rr=function(t){var e;try{e=t.getBBox()}catch(n){e=Ar.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ar||(e=Ar.call(t,!0)),!e||e.width||e.x||e.y?e:{x:+Or(t,["x","cx","x1"])||0,y:+Or(t,["y","cy","y1"])||0,width:0,height:0}},xr=function(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Rr(t))},Nr=function(t,e){if(e){var n=t.style;e in Qn&&e!==yr&&(e=vr),n.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),n.removeProperty(e.replace(er,"-$1").toLowerCase())):n.removeAttribute(e)}},Dr=function(t,e,n,r,i,s){var o=new Cn(t._pt,e,n,0,1,s?lr:ur);return t._pt=o,o.b=r,o.e=i,t._props.push(n),o},Pr={deg:1,rad:1,turn:1},Mr={grid:1,flex:1},Lr=function t(e,n,r,i){var s,o,a,c,u=parseFloat(r)||0,l=(r+"").trim().substr((u+"").length)||"px",h=Hn.style,f=nr.test(n),d="svg"===e.tagName.toLowerCase(),p=(d?"client":"offset")+(f?"Width":"Height"),m=100,g="px"===i,v="%"===i;return i===l||!u||Pr[i]||Pr[l]?u:("px"!==l&&!g&&(u=t(e,n,r,"px")),c=e.getCTM&&xr(e),!v&&"%"!==l||!Qn[n]&&!~n.indexOf("adius")?(h[f?"width":"height"]=m+(g?l:i),o=~n.indexOf("adius")||"em"===i&&e.appendChild&&!d?e:e.parentNode,c&&(o=(e.ownerSVGElement||{}).parentNode),o&&o!==zn&&o.appendChild||(o=zn.body),a=o._gsap,a&&v&&a.width&&f&&a.time===Pe.time&&!a.uncache?ht(u/a.width*m):((v||"%"===l)&&!Mr[Ir(o,"display")]&&(h.position=Ir(e,"position")),o===e&&(h.position="static"),o.appendChild(Hn),s=Hn[p],o.removeChild(Hn),h.position="absolute",f&&v&&(a=ct(o),a.time=Pe.time,a.width=o[p]),ht(g?s*u/m:s&&u?m/s*u:0))):(s=c?e.getBBox()[f?"width":"height"]:e[p],ht(v?u/s*m:u/100*s)))},Fr=function(t,e,n,r){var i;return qn||kr(),e in ir&&"transform"!==e&&(e=ir[e],~e.indexOf(",")&&(e=e.split(",")[0])),Qn[e]&&"transform"!==e?(i=Jr(t,r),i="transformOrigin"!==e?i[e]:i.svg?i.origin:Qr(Ir(t,yr))+" "+i.zOrigin+"px"):(i=t.style[e],(!i||"auto"===i||r||~(i+"").indexOf("calc("))&&(i=zr[e]&&zr[e](t,e,n)||Ir(t,e)||ut(t,e)||("opacity"===e?1:0))),n&&!~(i+"").trim().indexOf(" ")?Lr(t,e,i,n)+n:i},Ur=function(t,e,n,r){if(!n||"none"===n){var i=Cr(e,t,1),s=i&&Ir(t,i,1);s&&s!==n?(e=i,n=s):"borderColor"===e&&(n=Ir(t,"borderTopColor"))}var o,a,c,u,l,h,f,d,p,m,v,y,_=new Cn(this._pt,t.style,e,0,1,wn),w=0,b=0;if(_.b=n,_.e=r,n+="",r+="","auto"===r&&(t.style[e]=r,r=Ir(t,e)||r,t.style[e]=n),o=[n,r],De(o),n=o[0],r=o[1],c=n.match(U)||[],y=r.match(U)||[],y.length){while(a=U.exec(r))f=a[0],p=r.substring(w,a.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),f!==(h=c[b++]||"")&&(u=parseFloat(h)||0,v=h.substr((u+"").length),"="===f.charAt(1)&&(f=dt(u,f)+v),d=parseFloat(f),m=f.substr((d+"").length),w=U.lastIndex-m.length,m||(m=m||g.units[e]||v,w===r.length&&(r+=m,_.e+=m)),v!==m&&(u=Lr(t,e,h,m)||0),_._pt={_next:_._pt,p:p||1===b?p:",",s:u,c:d-u,m:l&&l<4||"zIndex"===e?Math.round:0});_.c=w<r.length?r.substring(w,r.length):""}else _.r="display"===e&&"none"===r?lr:ur;return V.test(r)&&(_.e=0),this._pt=_,_},jr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vr=function(t){var e=t.split(" "),n=e[0],r=e[1]||"50%";return"top"!==n&&"bottom"!==n&&"left"!==r&&"right"!==r||(t=n,n=r,r=t),e[0]=jr[n]||n,e[1]=jr[r]||r,e.join(" ")},Br=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n,r,i,s=e.t,o=s.style,a=e.u,c=s._gsap;if("all"===a||!0===a)o.cssText="",r=1;else{a=a.split(","),i=a.length;while(--i>-1)n=a[i],Qn[n]&&(r=1,n="transformOrigin"===n?yr:vr),Nr(s,n)}r&&(Nr(s,vr),c&&(c.svg&&s.removeAttribute("transform"),Jr(s,1),c.uncache=1,wr(o)))}},zr={clearProps:function(t,e,n,r,i){if("isFromStart"!==i.data){var s=t._pt=new Cn(t._pt,e,n,0,0,Br);return s.u=r,s.pr=-10,s.tween=i,t._props.push(n),1}}},$r=[1,0,0,1,0,0],qr={},Hr=function(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t},Kr=function(t){var e=Ir(t,vr);return Hr(e)?$r:e.substr(7).match(F).map(ht)},Gr=function(t,e){var n,r,i,s,o=t._gsap||ct(t),a=t.style,c=Kr(t);return o.svg&&t.getAttribute("transform")?(i=t.transform.baseVal.consolidate().matrix,c=[i.a,i.b,i.c,i.d,i.e,i.f],"1,0,0,1,0,0"===c.join(",")?$r:c):(c!==$r||t.offsetParent||t===$n||o.svg||(i=a.display,a.display="block",n=t.parentNode,n&&t.offsetParent||(s=1,r=t.nextElementSibling,$n.appendChild(t)),c=Kr(t),i?a.display=i:Nr(t,"display"),s&&(r?n.insertBefore(t,r):n?n.appendChild(t):$n.removeChild(t))),e&&c.length>6?[c[0],c[1],c[4],c[5],c[12],c[13]]:c)},Wr=function(t,e,n,r,i,s){var o,a,c,u,l=t._gsap,h=i||Gr(t,!0),f=l.xOrigin||0,d=l.yOrigin||0,p=l.xOffset||0,m=l.yOffset||0,g=h[0],v=h[1],y=h[2],_=h[3],w=h[4],b=h[5],E=e.split(" "),T=parseFloat(E[0])||0,I=parseFloat(E[1])||0;n?h!==$r&&(a=g*_-v*y)&&(c=T*(_/a)+I*(-y/a)+(y*b-_*w)/a,u=T*(-v/a)+I*(g/a)-(g*b-v*w)/a,T=c,I=u):(o=Rr(t),T=o.x+(~E[0].indexOf("%")?T/100*o.width:T),I=o.y+(~(E[1]||E[0]).indexOf("%")?I/100*o.height:I)),r||!1!==r&&l.smooth?(w=T-f,b=I-d,l.xOffset=p+(w*g+b*y)-w,l.yOffset=m+(w*v+b*_)-b):l.xOffset=l.yOffset=0,l.xOrigin=T,l.yOrigin=I,l.smooth=!!r,l.origin=e,l.originIsAbsolute=!!n,t.style[yr]="0px 0px",s&&(Dr(s,l,"xOrigin",f,T),Dr(s,l,"yOrigin",d,I),Dr(s,l,"xOffset",p,l.xOffset),Dr(s,l,"yOffset",m,l.yOffset)),t.setAttribute("data-svg-origin",T+" "+I)},Jr=function(t,e){var n=t._gsap||new Je(t);if("x"in n&&!e&&!n.uncache)return n;var r,i,s,o,a,c,u,l,h,f,d,p,m,v,y,_,w,b,E,T,I,S,C,k,A,O,R,x,N,D,P,M,L=t.style,F=n.scaleX<0,U="px",j="deg",V=getComputedStyle(t),B=Ir(t,yr)||"0";return r=i=s=c=u=l=h=f=d=0,o=a=1,n.svg=!(!t.getCTM||!xr(t)),V.translate&&("none"===V.translate&&"none"===V.scale&&"none"===V.rotate||(L[vr]=("none"!==V.translate?"translate3d("+(V.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==V.rotate?"rotate("+V.rotate+") ":"")+("none"!==V.scale?"scale("+V.scale.split(" ").join(",")+") ":"")+("none"!==V[vr]?V[vr]:"")),L.scale=L.rotate=L.translate="none"),v=Gr(t,n.svg),n.svg&&(n.uncache?(A=t.getBBox(),B=n.xOrigin-A.x+"px "+(n.yOrigin-A.y)+"px",k=""):k=!e&&t.getAttribute("data-svg-origin"),Wr(t,k||B,!!k||n.originIsAbsolute,!1!==n.smooth,v)),p=n.xOrigin||0,m=n.yOrigin||0,v!==$r&&(b=v[0],E=v[1],T=v[2],I=v[3],r=S=v[4],i=C=v[5],6===v.length?(o=Math.sqrt(b*b+E*E),a=Math.sqrt(I*I+T*T),c=b||E?Zn(E,b)*Xn:0,h=T||I?Zn(T,I)*Xn+c:0,h&&(a*=Math.abs(Math.cos(h*Yn))),n.svg&&(r-=p-(p*b+m*T),i-=m-(p*E+m*I))):(M=v[6],D=v[7],R=v[8],x=v[9],N=v[10],P=v[11],r=v[12],i=v[13],s=v[14],y=Zn(M,N),u=y*Xn,y&&(_=Math.cos(-y),w=Math.sin(-y),k=S*_+R*w,A=C*_+x*w,O=M*_+N*w,R=S*-w+R*_,x=C*-w+x*_,N=M*-w+N*_,P=D*-w+P*_,S=k,C=A,M=O),y=Zn(-T,N),l=y*Xn,y&&(_=Math.cos(-y),w=Math.sin(-y),k=b*_-R*w,A=E*_-x*w,O=T*_-N*w,P=I*w+P*_,b=k,E=A,T=O),y=Zn(E,b),c=y*Xn,y&&(_=Math.cos(y),w=Math.sin(y),k=b*_+E*w,A=S*_+C*w,E=E*_-b*w,C=C*_-S*w,b=k,S=A),u&&Math.abs(u)+Math.abs(c)>359.9&&(u=c=0,l=180-l),o=ht(Math.sqrt(b*b+E*E+T*T)),a=ht(Math.sqrt(C*C+M*M)),y=Zn(S,C),h=Math.abs(y)>2e-4?y*Xn:0,d=P?1/(P<0?-P:P):0),n.svg&&(k=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Hr(Ir(t,vr)),k&&t.setAttribute("transform",k))),Math.abs(h)>90&&Math.abs(h)<270&&(F?(o*=-1,h+=c<=0?180:-180,c+=c<=0?180:-180):(a*=-1,h+=h<=0?180:-180)),e=e||n.uncache,n.x=r-((n.xPercent=r&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-r)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+U,n.y=i-((n.yPercent=i&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+U,n.z=s+U,n.scaleX=ht(o),n.scaleY=ht(a),n.rotation=ht(c)+j,n.rotationX=ht(u)+j,n.rotationY=ht(l)+j,n.skewX=h+j,n.skewY=f+j,n.transformPerspective=d+U,(n.zOrigin=parseFloat(B.split(" ")[2])||0)&&(L[yr]=Qr(B)),n.xOffset=n.yOffset=0,n.force3D=g.force3D,n.renderTransform=n.svg?ri:Wn?ni:Yr,n.uncache=0,n},Qr=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xr=function(t,e,n){var r=Zt(e);return ht(parseFloat(e)+parseFloat(Lr(t,"x",n+"px",r)))+r},Yr=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,ni(t,e)},Zr="0deg",ti="0px",ei=") ",ni=function(t,e){var n=e||this,r=n.xPercent,i=n.yPercent,s=n.x,o=n.y,a=n.z,c=n.rotation,u=n.rotationY,l=n.rotationX,h=n.skewX,f=n.skewY,d=n.scaleX,p=n.scaleY,m=n.transformPerspective,g=n.force3D,v=n.target,y=n.zOrigin,_="",w="auto"===g&&t&&1!==t||!0===g;if(y&&(l!==Zr||u!==Zr)){var b,E=parseFloat(u)*Yn,T=Math.sin(E),I=Math.cos(E);E=parseFloat(l)*Yn,b=Math.cos(E),s=Xr(v,s,T*b*-y),o=Xr(v,o,-Math.sin(E)*-y),a=Xr(v,a,I*b*-y+y)}m!==ti&&(_+="perspective("+m+ei),(r||i)&&(_+="translate("+r+"%, "+i+"%) "),(w||s!==ti||o!==ti||a!==ti)&&(_+=a!==ti||w?"translate3d("+s+", "+o+", "+a+") ":"translate("+s+", "+o+ei),c!==Zr&&(_+="rotate("+c+ei),u!==Zr&&(_+="rotateY("+u+ei),l!==Zr&&(_+="rotateX("+l+ei),h===Zr&&f===Zr||(_+="skew("+h+", "+f+ei),1===d&&1===p||(_+="scale("+d+", "+p+ei),v.style[vr]=_||"translate(0, 0)"},ri=function(t,e){var n,r,i,s,o,a=e||this,c=a.xPercent,u=a.yPercent,l=a.x,h=a.y,f=a.rotation,d=a.skewX,p=a.skewY,m=a.scaleX,g=a.scaleY,v=a.target,y=a.xOrigin,_=a.yOrigin,w=a.xOffset,b=a.yOffset,E=a.forceCSS,T=parseFloat(l),I=parseFloat(h);f=parseFloat(f),d=parseFloat(d),p=parseFloat(p),p&&(p=parseFloat(p),d+=p,f+=p),f||d?(f*=Yn,d*=Yn,n=Math.cos(f)*m,r=Math.sin(f)*m,i=Math.sin(f-d)*-g,s=Math.cos(f-d)*g,d&&(p*=Yn,o=Math.tan(d-p),o=Math.sqrt(1+o*o),i*=o,s*=o,p&&(o=Math.tan(p),o=Math.sqrt(1+o*o),n*=o,r*=o)),n=ht(n),r=ht(r),i=ht(i),s=ht(s)):(n=m,s=g,r=i=0),(T&&!~(l+"").indexOf("px")||I&&!~(h+"").indexOf("px"))&&(T=Lr(v,"x",l,"px"),I=Lr(v,"y",h,"px")),(y||_||w||b)&&(T=ht(T+y-(y*n+_*i)+w),I=ht(I+_-(y*r+_*s)+b)),(c||u)&&(o=v.getBBox(),T=ht(T+c/100*o.width),I=ht(I+u/100*o.height)),o="matrix("+n+","+r+","+i+","+s+","+T+","+I+")",v.setAttribute("transform",o),E&&(v.style[vr]=o)},ii=function(t,e,n,r,i){var s,o,a=360,c=C(i),u=parseFloat(i)*(c&&~i.indexOf("rad")?Xn:1),l=u-r,h=r+l+"deg";return c&&(s=i.split("_")[1],"short"===s&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),"cw"===s&&l<0?l=(l+a*tr)%a-~~(l/a)*a:"ccw"===s&&l>0&&(l=(l-a*tr)%a-~~(l/a)*a)),t._pt=o=new Cn(t._pt,e,n,r,l,or),o.e=h,o.u="deg",t._props.push(n),o},si=function(t,e){for(var n in e)t[n]=e[n];return t},oi=function(t,e,n){var r,i,s,o,a,c,u,l,h=si({},n._gsap),f="perspective,force3D,transformOrigin,svgOrigin",d=n.style;for(i in h.svg?(s=n.getAttribute("transform"),n.setAttribute("transform",""),d[vr]=e,r=Jr(n,1),Nr(n,vr),n.setAttribute("transform",s)):(s=getComputedStyle(n)[vr],d[vr]=e,r=Jr(n,1),d[vr]=s),Qn)s=h[i],o=r[i],s!==o&&f.indexOf(i)<0&&(u=Zt(s),l=Zt(o),a=u!==l?Lr(n,i,s,l):parseFloat(s),c=parseFloat(o),t._pt=new Cn(t._pt,r,i,a,c-a,sr),t._pt.u=l||0,t._props.push(i));si(r,h)};lt("padding,margin,Width,Radius",(function(t,e){var n="Top",r="Right",i="Bottom",s="Left",o=(e<3?[n,r,i,s]:[n+s,n+r,i+r,i+s]).map((function(n){return e<2?t+n:"border"+n+t}));zr[e>1?"border"+t:t]=function(t,e,n,r,i){var s,a;if(arguments.length<4)return s=o.map((function(e){return Fr(t,e,n)})),a=s.join(" "),5===a.split(s[0]).length?s[0]:a;s=(r+"").split(" "),a={},o.forEach((function(t,e){return a[t]=s[e]=s[e]||s[(e-1)/2|0]})),t.init(e,a,i)}}));var ai={name:"css",register:kr,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,r,i){var s,o,a,c,u,l,h,f,d,p,m,v,y,_,w,b,E=this._props,T=t.style,I=n.vars.startAt;for(h in qn||kr(),this.styles=this.styles||Er(t),b=this.styles.props,this.tween=n,e)if("autoRound"!==h&&(o=e[h],!nt[h]||!rn(h,e,n,r,t,i)))if(u=typeof o,l=zr[h],"function"===u&&(o=o.call(n,r,t,i),u=typeof o),"string"===u&&~o.indexOf("random(")&&(o=ve(o)),l)l(this,t,h,o,n)&&(w=1);else if("--"===h.substr(0,2))s=(getComputedStyle(t).getPropertyValue(h)+"").trim(),o+="",xe.lastIndex=0,xe.test(s)||(f=Zt(s),d=Zt(o)),d?f!==d&&(s=Lr(t,h,s,d)+d):f&&(o+=f),this.add(T,"setProperty",s,o,r,i,0,0,h),E.push(h),b.push(h,0,T[h]);else if("undefined"!==u){if(I&&h in I?(s="function"===typeof I[h]?I[h].call(n,r,t,i):I[h],C(s)&&~s.indexOf("random(")&&(s=ve(s)),Zt(s+"")||(s+=g.units[h]||Zt(Fr(t,h))||""),"="===(s+"").charAt(1)&&(s=Fr(t,h))):s=Fr(t,h),c=parseFloat(s),p="string"===u&&"="===o.charAt(1)&&o.substr(0,2),p&&(o=o.substr(2)),a=parseFloat(o),h in ir&&("autoAlpha"===h&&(1===c&&"hidden"===Fr(t,"visibility")&&a&&(c=0),b.push("visibility",0,T.visibility),Dr(this,T,"visibility",c?"inherit":"hidden",a?"inherit":"hidden",!a)),"scale"!==h&&"transform"!==h&&(h=ir[h],~h.indexOf(",")&&(h=h.split(",")[0]))),m=h in Qn,m)if(this.styles.save(h),v||(y=t._gsap,y.renderTransform&&!e.parseTransform||Jr(t,e.parseTransform),_=!1!==e.smoothOrigin&&y.smooth,v=this._pt=new Cn(this._pt,T,vr,0,1,y.renderTransform,y,0,-1),v.dep=1),"scale"===h)this._pt=new Cn(this._pt,y,"scaleY",y.scaleY,(p?dt(y.scaleY,p+a):a)-y.scaleY||0,sr),this._pt.u=0,E.push("scaleY",h),h+="X";else{if("transformOrigin"===h){b.push(yr,0,T[yr]),o=Vr(o),y.svg?Wr(t,o,0,_,0,this):(d=parseFloat(o.split(" ")[2])||0,d!==y.zOrigin&&Dr(this,y,"zOrigin",y.zOrigin,d),Dr(this,T,h,Qr(s),Qr(o)));continue}if("svgOrigin"===h){Wr(t,o,1,_,0,this);continue}if(h in qr){ii(this,y,h,c,p?dt(c,p+o):o);continue}if("smoothOrigin"===h){Dr(this,y,"smooth",y.smooth,o);continue}if("force3D"===h){y[h]=o;continue}if("transform"===h){oi(this,o,t);continue}}else h in T||(h=Cr(h)||h);if(m||(a||0===a)&&(c||0===c)&&!rr.test(o)&&h in T)f=(s+"").substr((c+"").length),a||(a=0),d=Zt(o)||(h in g.units?g.units[h]:f),f!==d&&(c=Lr(t,h,s,d)),this._pt=new Cn(this._pt,m?y:T,h,c,(p?dt(c,p+a):a)-c,m||"px"!==d&&"zIndex"!==h||!1===e.autoRound?sr:cr),this._pt.u=d||0,f!==d&&"%"!==d&&(this._pt.b=s,this._pt.r=ar);else if(h in T)Ur.call(this,t,h,s,p?p+o:o);else if(h in t)this.add(t,h,s||t[h],p?p+o:o,r,i);else if("parseTransform"!==h){K(h,o);continue}m||(h in T?b.push(h,0,T[h]):b.push(h,1,s||t[h])),E.push(h)}w&&Sn(this)},render:function(t,e){if(e.tween._time||!Gn()){var n=e._pt;while(n)n.r(t,n.d),n=n._next}else e.styles.revert()},get:Fr,aliases:ir,getSetter:function(t,e,n){var r=ir[e];return r&&r.indexOf(",")<0&&(e=r),e in Qn&&e!==yr&&(t._gsap.x||Fr(t,"x"))?n&&Kn===n?"scale"===e?pr:dr:(Kn=n||{})&&("scale"===e?mr:gr):t.style&&!O(t.style[e])?hr:~e.indexOf("-")?fr:vn(t,e)},core:{_removeProperty:Nr,_getMatrix:Gr}};Vn.utils.checkPrefix=Cr,Vn.core.getStyleSaver=Er,function(t,e,n,r){var i=lt(t+","+e+","+n,(function(t){Qn[t]=1}));lt(e,(function(t){g.units[t]="deg",qr[t]=1})),ir[i[13]]=t+","+e,lt(r,(function(t){var e=t.split(":");ir[e[1]]=i[e[0]]}))}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),lt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",(function(t){g.units[t]="px"})),Vn.registerPlugin(ai);var ci=Vn.registerPlugin(ai)||Vn;ci.core.Tween},89:function(t,e){e.Z=(t,e)=>{const n=t.__vccOpts||t;for(const[r,i]of e)n[r]=i;return n}},65:function(t,e,n){n.d(e,{MT:function(){return tt},Se:function(){return rt}});n(7658);var r=n(3396),i=n(4870);function s(){return o().__VUE_DEVTOOLS_GLOBAL_HOOK__}function o(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{}}const a="function"===typeof Proxy,c="devtools-plugin:setup",u="plugin:settings:set";let l,h;function f(){var t;return void 0!==l||("undefined"!==typeof window&&window.performance?(l=!0,h=window.performance):"undefined"!==typeof n.g&&(null===(t=n.g.perf_hooks)||void 0===t?void 0:t.performance)?(l=!0,h=n.g.perf_hooks.performance):l=!1),l}function d(){return f()?h.now():Date.now()}class p{constructor(t,e){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=e;const n={};if(t.settings)for(const o in t.settings){const e=t.settings[o];n[o]=e.defaultValue}const r=`__vue-devtools-plugin-settings__${t.id}`;let i=Object.assign({},n);try{const t=localStorage.getItem(r),e=JSON.parse(t);Object.assign(i,e)}catch(s){}this.fallbacks={getSettings(){return i},setSettings(t){try{localStorage.setItem(r,JSON.stringify(t))}catch(s){}i=t},now(){return d()}},e&&e.on(u,((t,e)=>{t===this.plugin.id&&this.fallbacks.setSettings(e)})),this.proxiedOn=new Proxy({},{get:(t,e)=>this.target?this.target.on[e]:(...t)=>{this.onQueue.push({method:e,args:t})}}),this.proxiedTarget=new Proxy({},{get:(t,e)=>this.target?this.target[e]:"on"===e?this.proxiedOn:Object.keys(this.fallbacks).includes(e)?(...t)=>(this.targetQueue.push({method:e,args:t,resolve:()=>{}}),this.fallbacks[e](...t)):(...t)=>new Promise((n=>{this.targetQueue.push({method:e,args:t,resolve:n})}))})}async setRealTarget(t){this.target=t;for(const e of this.onQueue)this.target.on[e.method](...e.args);for(const e of this.targetQueue)e.resolve(await this.target[e.method](...e.args))}}function m(t,e){const n=t,r=o(),i=s(),u=a&&n.enableEarlyProxy;if(!i||!r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&u){const t=u?new p(n,i):null,s=r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[];s.push({pluginDescriptor:n,setupFn:e,proxy:t}),t&&e(t.proxiedTarget)}else i.emit(c,t,e)}
/*!
 * vuex v4.1.0
 * (c) 2022 Evan You
 * @license MIT
 */
var g="store";function v(t,e){Object.keys(t).forEach((function(n){return e(t[n],n)}))}function y(t){return null!==t&&"object"===typeof t}function _(t){return t&&"function"===typeof t.then}function w(t,e){return function(){return t(e)}}function b(t,e,n){return e.indexOf(t)<0&&(n&&n.prepend?e.unshift(t):e.push(t)),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function E(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;I(t,n,[],t._modules.root,!0),T(t,n,e)}function T(t,e,n){var s=t._state,o=t._scope;t.getters={},t._makeLocalGettersCache=Object.create(null);var a=t._wrappedGetters,c={},u={},l=(0,i.B)(!0);l.run((function(){v(a,(function(e,n){c[n]=w(e,t),u[n]=(0,r.Fl)((function(){return c[n]()})),Object.defineProperty(t.getters,n,{get:function(){return u[n].value},enumerable:!0})}))})),t._state=(0,i.qj)({data:e}),t._scope=l,t.strict&&R(t),s&&n&&t._withCommit((function(){s.data=null})),o&&o.stop()}function I(t,e,n,r,i){var s=!n.length,o=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[o],t._modulesNamespaceMap[o]=r),!s&&!i){var a=x(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit((function(){a[c]=r.state}))}var u=r.context=S(t,o,n);r.forEachMutation((function(e,n){var r=o+n;k(t,r,e,u)})),r.forEachAction((function(e,n){var r=e.root?n:o+n,i=e.handler||e;A(t,r,i,u)})),r.forEachGetter((function(e,n){var r=o+n;O(t,r,e,u)})),r.forEachChild((function(r,s){I(t,e,n.concat(s),r,i)}))}function S(t,e,n){var r=""===e,i={dispatch:r?t.dispatch:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;return a&&a.root||(c=e+c),t.dispatch(c,o)},commit:r?t.commit:function(n,r,i){var s=N(n,r,i),o=s.payload,a=s.options,c=s.type;a&&a.root||(c=e+c),t.commit(c,o,a)}};return Object.defineProperties(i,{getters:{get:r?function(){return t.getters}:function(){return C(t,e)}},state:{get:function(){return x(t.state,n)}}}),i}function C(t,e){if(!t._makeLocalGettersCache[e]){var n={},r=e.length;Object.keys(t.getters).forEach((function(i){if(i.slice(0,r)===e){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return t.getters[i]},enumerable:!0})}})),t._makeLocalGettersCache[e]=n}return t._makeLocalGettersCache[e]}function k(t,e,n,r){var i=t._mutations[e]||(t._mutations[e]=[]);i.push((function(e){n.call(t,r.state,e)}))}function A(t,e,n,r){var i=t._actions[e]||(t._actions[e]=[]);i.push((function(e){var i=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e);return _(i)||(i=Promise.resolve(i)),t._devtoolHook?i.catch((function(e){throw t._devtoolHook.emit("vuex:error",e),e})):i}))}function O(t,e,n,r){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)})}function R(t){(0,r.YP)((function(){return t._state.data}),(function(){0}),{deep:!0,flush:"sync"})}function x(t,e){return e.reduce((function(t,e){return t[e]}),t)}function N(t,e,n){return y(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}var D="vuex bindings",P="vuex:mutations",M="vuex:actions",L="vuex",F=0;function U(t,e){m({id:"org.vuejs.vuex",app:t,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[D]},(function(n){n.addTimelineLayer({id:P,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:M,label:"Vuex Actions",color:j}),n.addInspector({id:L,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===t&&n.inspectorId===L)if(n.filter){var r=[];H(r,e._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[q(e._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===t&&n.inspectorId===L){var r=n.nodeId;C(e,r),n.state=K(W(e._modules,r),"root"===r?e.getters:e._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===t&&n.inspectorId===L){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),e._withCommit((function(){n.set(e._state.data,i,n.state.value)}))}})),e.subscribe((function(t,e){var r={};t.payload&&(r.payload=t.payload),r.state=e,n.notifyComponentUpdate(),n.sendInspectorTree(L),n.sendInspectorState(L),n.addTimelineEvent({layerId:P,event:{time:Date.now(),title:t.type,data:r}})})),e.subscribeAction({before:function(t,e){var r={};t.payload&&(r.payload=t.payload),t._id=F++,t._time=Date.now(),r.state=e,n.addTimelineEvent({layerId:M,event:{time:t._time,title:t.type,groupId:t._id,subtitle:"start",data:r}})},after:function(t,e){var r={},i=Date.now()-t._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},t.payload&&(r.payload=t.payload),r.state=e,n.addTimelineEvent({layerId:M,event:{time:Date.now(),title:t.type,groupId:t._id,subtitle:"end",data:r}})}})}))}var j=8702998,V=6710886,B=16777215,z={label:"namespaced",textColor:B,backgroundColor:V};function $(t){return t&&"root"!==t?t.split("/").slice(-2,-1)[0]:"Root"}function q(t,e){return{id:e||"root",label:$(e),tags:t.namespaced?[z]:[],children:Object.keys(t._children).map((function(n){return q(t._children[n],e+n+"/")}))}}function H(t,e,n,r){r.includes(n)&&t.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:e.namespaced?[z]:[]}),Object.keys(e._children).forEach((function(i){H(t,e._children[i],n,r+i+"/")}))}function K(t,e,n){e="root"===n?e:e[n];var r=Object.keys(e),i={state:Object.keys(t.state).map((function(e){return{key:e,editable:!0,value:t.state[e]}}))};if(r.length){var s=G(e);i.getters=Object.keys(s).map((function(t){return{key:t.endsWith("/")?$(t):t,editable:!1,value:J((function(){return s[t]}))}}))}return i}function G(t){var e={};return Object.keys(t).forEach((function(n){var r=n.split("/");if(r.length>1){var i=e,s=r.pop();r.forEach((function(t){i[t]||(i[t]={_custom:{value:{},display:t,tooltip:"Module",abstract:!0}}),i=i[t]._custom.value})),i[s]=J((function(){return t[n]}))}else e[n]=J((function(){return t[n]}))})),e}function W(t,e){var n=e.split("/").filter((function(t){return t}));return n.reduce((function(t,r,i){var s=t[r];if(!s)throw new Error('Missing module "'+r+'" for path "'+e+'".');return i===n.length-1?s:s._children}),"root"===e?t:t.root._children)}function J(t){try{return t()}catch(e){return e}}var Q=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},X={namespaced:{configurable:!0}};X.namespaced.get=function(){return!!this._rawModule.namespaced},Q.prototype.addChild=function(t,e){this._children[t]=e},Q.prototype.removeChild=function(t){delete this._children[t]},Q.prototype.getChild=function(t){return this._children[t]},Q.prototype.hasChild=function(t){return t in this._children},Q.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},Q.prototype.forEachChild=function(t){v(this._children,t)},Q.prototype.forEachGetter=function(t){this._rawModule.getters&&v(this._rawModule.getters,t)},Q.prototype.forEachAction=function(t){this._rawModule.actions&&v(this._rawModule.actions,t)},Q.prototype.forEachMutation=function(t){this._rawModule.mutations&&v(this._rawModule.mutations,t)},Object.defineProperties(Q.prototype,X);var Y=function(t){this.register([],t,!1)};function Z(t,e,n){if(e.update(n),n.modules)for(var r in n.modules){if(!e.getChild(r))return void 0;Z(t.concat(r),e.getChild(r),n.modules[r])}}Y.prototype.get=function(t){return t.reduce((function(t,e){return t.getChild(e)}),this.root)},Y.prototype.getNamespace=function(t){var e=this.root;return t.reduce((function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")}),"")},Y.prototype.update=function(t){Z([],this.root,t)},Y.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var i=new Q(e,n);if(0===t.length)this.root=i;else{var s=this.get(t.slice(0,-1));s.addChild(t[t.length-1],i)}e.modules&&v(e.modules,(function(e,i){r.register(t.concat(i),e,n)}))},Y.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1],r=e.getChild(n);r&&r.runtime&&e.removeChild(n)},Y.prototype.isRegistered=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];return!!e&&e.hasChild(n)};function tt(t){return new et(t)}var et=function(t){var e=this;void 0===t&&(t={});var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new Y(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._scope=null,this._devtools=i;var s=this,o=this,a=o.dispatch,c=o.commit;this.dispatch=function(t,e){return a.call(s,t,e)},this.commit=function(t,e,n){return c.call(s,t,e,n)},this.strict=r;var u=this._modules.root.state;I(this,u,[],this._modules.root),T(this,u),n.forEach((function(t){return t(e)}))},nt={state:{configurable:!0}};et.prototype.install=function(t,e){t.provide(e||g,this),t.config.globalProperties.$store=this;var n=void 0!==this._devtools&&this._devtools;n&&U(t,this)},nt.state.get=function(){return this._state.data},nt.state.set=function(t){0},et.prototype.commit=function(t,e,n){var r=this,i=N(t,e,n),s=i.type,o=i.payload,a=(i.options,{type:s,payload:o}),c=this._mutations[s];c&&(this._withCommit((function(){c.forEach((function(t){t(o)}))})),this._subscribers.slice().forEach((function(t){return t(a,r.state)})))},et.prototype.dispatch=function(t,e){var n=this,r=N(t,e),i=r.type,s=r.payload,o={type:i,payload:s},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(t){return t.before})).forEach((function(t){return t.before(o,n.state)}))}catch(u){0}var c=a.length>1?Promise.all(a.map((function(t){return t(s)}))):a[0](s);return new Promise((function(t,e){c.then((function(e){try{n._actionSubscribers.filter((function(t){return t.after})).forEach((function(t){return t.after(o,n.state)}))}catch(u){0}t(e)}),(function(t){try{n._actionSubscribers.filter((function(t){return t.error})).forEach((function(e){return e.error(o,n.state,t)}))}catch(u){0}e(t)}))}))}},et.prototype.subscribe=function(t,e){return b(t,this._subscribers,e)},et.prototype.subscribeAction=function(t,e){var n="function"===typeof t?{before:t}:t;return b(n,this._actionSubscribers,e)},et.prototype.watch=function(t,e,n){var i=this;return(0,r.YP)((function(){return t(i.state,i.getters)}),e,Object.assign({},n))},et.prototype.replaceState=function(t){var e=this;this._withCommit((function(){e._state.data=t}))},et.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),I(this,this.state,t,this._modules.get(t),n.preserveState),T(this,this.state)},et.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit((function(){var n=x(e.state,t.slice(0,-1));delete n[t[t.length-1]]})),E(this)},et.prototype.hasModule=function(t){return"string"===typeof t&&(t=[t]),this._modules.isRegistered(t)},et.prototype.hotUpdate=function(t){this._modules.update(t),E(this,!0)},et.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(et.prototype,nt);ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=at(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,e,n):e[i]},n[r].vuex=!0})),n})),ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.commit;if(t){var s=at(this.$store,"mapMutations",t);if(!s)return;r=s.context.commit}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));var rt=ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;i=t+i,n[r]=function(){if(!t||at(this.$store,"mapGetters",t))return this.$store.getters[i]},n[r].vuex=!0})),n}));ot((function(t,e){var n={};return it(e).forEach((function(e){var r=e.key,i=e.val;n[r]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var s=at(this.$store,"mapActions",t);if(!s)return;r=s.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(e)):r.apply(this.$store,[i].concat(e))}})),n}));function it(t){return st(t)?Array.isArray(t)?t.map((function(t){return{key:t,val:t}})):Object.keys(t).map((function(e){return{key:e,val:t[e]}})):[]}function st(t){return Array.isArray(t)||y(t)}function ot(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function at(t,e,n){var r=t._modulesNamespaceMap[n];return r}},7077:function(t,e,n){n.d(e,{Jn:function(){return mt},qX:function(){return ht},Xd:function(){return lt},Mq:function(){return vt},ZF:function(){return gt},KN:function(){return yt}});n(7658);var r=n(7142),i=n(5168),s=n(223);n(2801);const o=(t,e)=>e.some((e=>t instanceof e));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,f=new WeakMap,d=new WeakMap,p=new WeakMap,m=new WeakMap;function g(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(E(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&h.set(e,t)})).catch((()=>{})),m.set(e,t),e}function v(t){if(f.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));f.set(t,e)}let y={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return f.get(t);if("objectStoreNames"===e)return t.objectStoreNames||d.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return E(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function _(t){y=t(y)}function w(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(t)?function(...e){return t.apply(T(this),e),E(h.get(this))}:function(...e){return E(t.apply(T(this),e))}:function(e,...n){const r=t.call(T(this),e,...n);return d.set(r,e.sort?e.sort():[e]),E(r)}}function b(t){return"function"===typeof t?w(t):(t instanceof IDBTransaction&&v(t),o(t,u())?new Proxy(t,y):t)}function E(t){if(t instanceof IDBRequest)return g(t);if(p.has(t))return p.get(t);const e=b(t);return e!==t&&(p.set(t,e),m.set(e,t)),e}const T=t=>m.get(t);function I(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=E(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(E(o.result),t.oldVersion,t.newVersion,E(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const S=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],k=new Map;function A(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(k.get(e))return k.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!S.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return k.set(e,s),s}_((t=>({...t,get:(e,n,r)=>A(e,n)||t.get(e,n,r),has:(e,n)=>!!A(e,n)||t.has(e,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class O{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(R(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function R(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const x="@firebase/app",N="0.9.15",D=new i.Yd("@firebase/app"),P="@firebase/app-compat",M="@firebase/analytics-compat",L="@firebase/analytics",F="@firebase/app-check-compat",U="@firebase/app-check",j="@firebase/auth",V="@firebase/auth-compat",B="@firebase/database",z="@firebase/database-compat",$="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",K="@firebase/installations-compat",G="@firebase/messaging",W="@firebase/messaging-compat",J="@firebase/performance",Q="@firebase/performance-compat",X="@firebase/remote-config",Y="@firebase/remote-config-compat",Z="@firebase/storage",tt="@firebase/storage-compat",et="@firebase/firestore",nt="@firebase/firestore-compat",rt="firebase",it="10.1.0",st="[DEFAULT]",ot={[x]:"fire-core",[P]:"fire-core-compat",[L]:"fire-analytics",[M]:"fire-analytics-compat",[U]:"fire-app-check",[F]:"fire-app-check-compat",[j]:"fire-auth",[V]:"fire-auth-compat",[B]:"fire-rtdb",[z]:"fire-rtdb-compat",[$]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[K]:"fire-iid-compat",[G]:"fire-fcm",[W]:"fire-fcm-compat",[J]:"fire-perf",[Q]:"fire-perf-compat",[X]:"fire-rc",[Y]:"fire-rc-compat",[Z]:"fire-gcs",[tt]:"fire-gcs-compat",[et]:"fire-fst",[nt]:"fire-fst-compat","fire-js":"fire-js",[rt]:"fire-js-all"},at=new Map,ct=new Map;function ut(t,e){try{t.container.addComponent(e)}catch(n){D.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function lt(t){const e=t.name;if(ct.has(e))return D.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of at.values())ut(n,t);return!0}function ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ft={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},dt=new s.LL("app","Firebase",ft);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw dt.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=it;function gt(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw dt.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw dt.create("no-options");const a=at.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(i,a.config))return a;throw dt.create("duplicate-app",{appName:o})}const c=new r.H0(o);for(const r of ct.values())c.addComponent(r);const u=new pt(n,i,c);return at.set(o,u),u}function vt(t=st){const e=at.get(t);if(!e&&t===st&&(0,s.aH)())return gt();if(!e)throw dt.create("no-app",{appName:t});return e}function yt(t,e,n){var i;let s=null!==(i=ot[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void D.warn(t.join(" "))}lt(new r.wA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _t="firebase-heartbeat-database",wt=1,bt="firebase-heartbeat-store";let Et=null;function Tt(){return Et||(Et=I(_t,wt,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(bt)}}}).catch((t=>{throw dt.create("idb-open",{originalErrorMessage:t.message})}))),Et}async function It(t){try{const e=await Tt(),n=await e.transaction(bt).objectStore(bt).get(Ct(t));return n}catch(e){if(e instanceof s.ZR)D.warn(e.message);else{const t=dt.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});D.warn(t.message)}}}async function St(t,e){try{const n=await Tt(),r=n.transaction(bt,"readwrite"),i=r.objectStore(bt);await i.put(e,Ct(t)),await r.done}catch(n){if(n instanceof s.ZR)D.warn(n.message);else{const t=dt.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});D.warn(t.message)}}}function Ct(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=1024,At=2592e6;class Ot{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Nt(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate(),e=t.getPlatformInfoString(),n=Rt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((t=>t.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=At})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=Rt(),{heartbeatsToSend:e,unsentEntries:n}=xt(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Rt(){const t=new Date;return t.toISOString().substring(0,10)}function xt(t,e=kt){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),Dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Nt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await It(this.app);return t||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return St(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function Dt(t){return(0,s.L)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(t){lt(new r.wA("platform-logger",(t=>new O(t)),"PRIVATE")),lt(new r.wA("heartbeat",(t=>new Ot(t)),"PRIVATE")),yt(x,N,t),yt(x,N,"esm2017"),yt("fire-js","")}Pt("")},7142:function(t,e,n){n.d(e,{H0:function(){return u},wA:function(){return i}});var r=n(223);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},5168:function(t,e,n){n.d(e,{Yd:function(){return u},in:function(){return i}});n(7658);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},4161:function(t,e,n){n.d(e,{Z:function(){return Ue}});n(1439),n(7585),n(5315),n(7658);function r(t,e){return function(){return t.apply(e,arguments)}}const{toString:i}=Object.prototype,{getPrototypeOf:s}=Object,o=(t=>e=>{const n=i.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),a=t=>(t=t.toLowerCase(),e=>o(e)===t),c=t=>e=>typeof e===t,{isArray:u}=Array,l=c("undefined");function h(t){return null!==t&&!l(t)&&null!==t.constructor&&!l(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const f=a("ArrayBuffer");function d(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&f(t.buffer),e}const p=c("string"),m=c("function"),g=c("number"),v=t=>null!==t&&"object"===typeof t,y=t=>!0===t||!1===t,_=t=>{if("object"!==o(t))return!1;const e=s(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},w=a("Date"),b=a("File"),E=a("Blob"),T=a("FileList"),I=t=>v(t)&&m(t.pipe),S=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=o(t))||"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},C=a("URLSearchParams"),k=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function A(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),u(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function O(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const R=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),x=t=>!l(t)&&t!==R;function N(){const{caseless:t}=x(this)&&this||{},e={},n=(n,r)=>{const i=t&&O(e,r)||r;_(e[i])&&_(n)?e[i]=N(e[i],n):_(n)?e[i]=N({},n):u(n)?e[i]=n.slice():e[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&A(arguments[r],n);return e}const D=(t,e,n,{allOwnKeys:i}={})=>(A(e,((e,i)=>{n&&m(e)?t[i]=r(e,n):t[i]=e}),{allOwnKeys:i}),t),P=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),M=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},L=(t,e,n,r)=>{let i,o,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),o=i.length;while(o-- >0)a=i[o],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&s(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},F=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},U=t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!g(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},j=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&s(Uint8Array)),V=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},B=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},z=a("HTMLFormElement"),$=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),q=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),H=a("RegExp"),K=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};A(n,((n,i)=>{!1!==e(n,i,t)&&(r[i]=n)})),Object.defineProperties(t,r)},G=t=>{K(t,((e,n)=>{if(m(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];m(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},W=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},J=()=>{},Q=(t,e)=>(t=+t,Number.isFinite(t)?t:e),X="abcdefghijklmnopqrstuvwxyz",Y="0123456789",Z={DIGIT:Y,ALPHA:X,ALPHA_DIGIT:X+X.toUpperCase()+Y},tt=(t=16,e=Z.ALPHA_DIGIT)=>{let n="";const{length:r}=e;while(t--)n+=e[Math.random()*r|0];return n};function et(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const nt=t=>{const e=new Array(10),n=(t,r)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=u(t)?[]:{};return A(t,((t,e)=>{const s=n(t,r+1);!l(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},rt=a("AsyncFunction"),it=t=>t&&(v(t)||m(t))&&m(t.then)&&m(t.catch);var st={isArray:u,isArrayBuffer:f,isBuffer:h,isFormData:S,isArrayBufferView:d,isString:p,isNumber:g,isBoolean:y,isObject:v,isPlainObject:_,isUndefined:l,isDate:w,isFile:b,isBlob:E,isRegExp:H,isFunction:m,isStream:I,isURLSearchParams:C,isTypedArray:j,isFileList:T,forEach:A,merge:N,extend:D,trim:k,stripBOM:P,inherits:M,toFlatObject:L,kindOf:o,kindOfTest:a,endsWith:F,toArray:U,forEachEntry:V,matchAll:B,isHTMLForm:z,hasOwnProperty:q,hasOwnProp:q,reduceDescriptors:K,freezeMethods:G,toObjectSet:W,toCamelCase:$,noop:J,toFiniteNumber:Q,findKey:O,global:R,isContextDefined:x,ALPHABET:Z,generateString:tt,isSpecCompliantForm:et,toJSONObject:nt,isAsyncFn:rt,isThenable:it};function ot(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}st.inherits(ot,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:st.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const at=ot.prototype,ct={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{ct[t]={value:t}})),Object.defineProperties(ot,ct),Object.defineProperty(at,"isAxiosError",{value:!0}),ot.from=(t,e,n,r,i,s)=>{const o=Object.create(at);return st.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),ot.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var ut=ot,lt=null;function ht(t){return st.isPlainObject(t)||st.isArray(t)}function ft(t){return st.endsWith(t,"[]")?t.slice(0,-2):t}function dt(t,e,n){return t?t.concat(e).map((function(t,e){return t=ft(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function pt(t){return st.isArray(t)&&!t.some(ht)}const mt=st.toFlatObject(st,{},null,(function(t){return/^is[A-Z]/.test(t)}));function gt(t,e,n){if(!st.isObject(t))throw new TypeError("target must be an object");e=e||new(lt||FormData),n=st.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!st.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||l,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&st.isSpecCompliantForm(e);if(!st.isFunction(i))throw new TypeError("visitor must be a function");function u(t){if(null===t)return"";if(st.isDate(t))return t.toISOString();if(!c&&st.isBlob(t))throw new ut("Blob is not supported. Use a Buffer instead.");return st.isArrayBuffer(t)||st.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function l(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(st.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(st.isArray(t)&&pt(t)||(st.isFileList(t)||st.endsWith(n,"[]"))&&(a=st.toArray(t)))return n=ft(n),a.forEach((function(t,r){!st.isUndefined(t)&&null!==t&&e.append(!0===o?dt([n],r,s):null===o?n:n+"[]",u(t))})),!1;return!!ht(t)||(e.append(dt(i,n,s),u(t)),!1)}const h=[],f=Object.assign(mt,{defaultVisitor:l,convertValue:u,isVisitable:ht});function d(t,n){if(!st.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),st.forEach(t,(function(t,r){const s=!(st.isUndefined(t)||null===t)&&i.call(e,t,st.isString(r)?r.trim():r,n,f);!0===s&&d(t,n?n.concat(r):[r])})),h.pop()}}if(!st.isObject(t))throw new TypeError("data must be an object");return d(t),e}var vt=gt;function yt(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function _t(t,e){this._pairs=[],t&&vt(t,this,e)}const wt=_t.prototype;wt.append=function(t,e){this._pairs.push([t,e])},wt.toString=function(t){const e=t?function(e){return t.call(this,e,yt)}:yt;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var bt=_t;function Et(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Tt(t,e,n){if(!e)return t;const r=n&&n.encode||Et,i=n&&n.serialize;let s;if(s=i?i(e,n):st.isURLSearchParams(e)?e.toString():new bt(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class It{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){st.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var St=It,Ct={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},kt=(n(6229),n(7330),n(2062),"undefined"!==typeof URLSearchParams?URLSearchParams:bt),At="undefined"!==typeof FormData?FormData:null,Ot="undefined"!==typeof Blob?Blob:null;const Rt=(()=>{let t;return("undefined"===typeof navigator||"ReactNative"!==(t=navigator.product)&&"NativeScript"!==t&&"NS"!==t)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),xt=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var Nt={isBrowser:!0,classes:{URLSearchParams:kt,FormData:At,Blob:Ot},isStandardBrowserEnv:Rt,isStandardBrowserWebWorkerEnv:xt,protocols:["http","https","file","blob","url","data"]};function Dt(t,e){return vt(t,new Nt.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return Nt.isNode&&st.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Pt(t){return st.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function Mt(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Lt(t){function e(t,n,r,i){let s=t[i++];const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&st.isArray(r)?r.length:s,a)return st.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&st.isObject(r[s])||(r[s]=[]);const c=e(t,n,r[s],i);return c&&st.isArray(r[s])&&(r[s]=Mt(r[s])),!o}if(st.isFormData(t)&&st.isFunction(t.entries)){const n={};return st.forEachEntry(t,((t,r)=>{e(Pt(t),r,n,0)})),n}return null}var Ft=Lt;const Ut={"Content-Type":void 0};function jt(t,e,n){if(st.isString(t))try{return(e||JSON.parse)(t),st.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Vt={transitional:Ct,adapter:["xhr","http"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=st.isObject(t);i&&st.isHTMLForm(t)&&(t=new FormData(t));const s=st.isFormData(t);if(s)return r&&r?JSON.stringify(Ft(t)):t;if(st.isArrayBuffer(t)||st.isBuffer(t)||st.isStream(t)||st.isFile(t)||st.isBlob(t))return t;if(st.isArrayBufferView(t))return t.buffer;if(st.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return Dt(t,this.formSerializer).toString();if((o=st.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return vt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),jt(t)):t}],transformResponse:[function(t){const e=this.transitional||Vt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(t&&st.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,s=!n&&r;try{return JSON.parse(t)}catch(i){if(s){if("SyntaxError"===i.name)throw ut.from(i,ut.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};st.forEach(["delete","get","head"],(function(t){Vt.headers[t]={}})),st.forEach(["post","put","patch"],(function(t){Vt.headers[t]=st.merge(Ut)}));var Bt=Vt;const zt=st.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var $t=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&zt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const qt=Symbol("internals");function Ht(t){return t&&String(t).trim().toLowerCase()}function Kt(t){return!1===t||null==t?t:st.isArray(t)?t.map(Kt):String(t)}function Gt(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const Wt=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function Jt(t,e,n,r,i){return st.isFunction(r)?r.call(this,e,n):(i&&(e=n),st.isString(e)?st.isString(r)?-1!==e.indexOf(r):st.isRegExp(r)?r.test(e):void 0:void 0)}function Qt(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function Xt(t,e){const n=st.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}class Yt{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=Ht(e);if(!i)throw new Error("header name must be a non-empty string");const s=st.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=Kt(t))}const s=(t,e)=>st.forEach(t,((t,n)=>i(t,n,e)));return st.isPlainObject(t)||t instanceof this.constructor?s(t,e):st.isString(t)&&(t=t.trim())&&!Wt(t)?s($t(t),e):null!=t&&i(e,t,n),this}get(t,e){if(t=Ht(t),t){const n=st.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return Gt(t);if(st.isFunction(e))return e.call(this,t,n);if(st.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=Ht(t),t){const n=st.findKey(this,t);return!(!n||void 0===this[n]||e&&!Jt(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=Ht(t),t){const i=st.findKey(n,t);!i||e&&!Jt(n,n[i],i,e)||(delete n[i],r=!0)}}return st.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!Jt(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return st.forEach(this,((r,i)=>{const s=st.findKey(n,i);if(s)return e[s]=Kt(r),void delete e[i];const o=t?Qt(i):String(i).trim();o!==i&&delete e[i],e[o]=Kt(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return st.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&st.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[qt]=this[qt]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=Ht(t);n[e]||(Xt(r,t),n[e]=!0)}return st.isArray(t)?t.forEach(i):i(t),this}}Yt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),st.freezeMethods(Yt.prototype),st.freezeMethods(Yt);var Zt=Yt;function te(t,e){const n=this||Bt,r=e||n,i=Zt.from(r.headers);let s=r.data;return st.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function ee(t){return!(!t||!t.__CANCEL__)}function ne(t,e,n){ut.call(this,null==t?"canceled":t,ut.ERR_CANCELED,e,n),this.name="CanceledError"}st.inherits(ne,ut,{__CANCEL__:!0});var re=ne;n(2801);function ie(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new ut("Request failed with status code "+n.status,[ut.ERR_BAD_REQUEST,ut.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}var se=Nt.isStandardBrowserEnv?function(){return{write:function(t,e,n,r,i,s){const o=[];o.push(t+"="+encodeURIComponent(e)),st.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),st.isString(r)&&o.push("path="+r),st.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function oe(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function ae(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function ce(t,e){return t&&!oe(e)?ae(t,e):e}var ue=Nt.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),e=document.createElement("a");let n;function r(n){let r=n;return t&&(e.setAttribute("href",r),r=e.href),e.setAttribute("href",r),{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",host:e.host,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):"",hostname:e.hostname,port:e.port,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname}}return n=r(window.location.href),function(t){const e=st.isString(t)?r(t):t;return e.protocol===n.protocol&&e.host===n.host}}():function(){return function(){return!0}}();function le(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function he(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),u=r[o];i||(i=c),n[s]=a,r[s]=c;let l=o,h=0;while(l!==s)h+=n[l++],l%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const f=u&&c-u;return f?Math.round(1e3*h/f):void 0}}var fe=he;function de(t,e){let n=0;const r=fe(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,a=s-n,c=r(a),u=s<=o;n=s;const l={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&u?(o-s)/c:void 0,event:i};l[e?"download":"upload"]=!0,t(l)}}const pe="undefined"!==typeof XMLHttpRequest;var me=pe&&function(t){return new Promise((function(e,n){let r=t.data;const i=Zt.from(t.headers).normalize(),s=t.responseType;let o;function a(){t.cancelToken&&t.cancelToken.unsubscribe(o),t.signal&&t.signal.removeEventListener("abort",o)}st.isFormData(r)&&(Nt.isStandardBrowserEnv||Nt.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.setContentType("multipart/form-data;",!1));let c=new XMLHttpRequest;if(t.auth){const e=t.auth.username||"",n=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(e+":"+n))}const u=ce(t.baseURL,t.url);function l(){if(!c)return;const r=Zt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),i=s&&"text"!==s&&"json"!==s?c.response:c.responseText,o={data:i,status:c.status,statusText:c.statusText,headers:r,config:t,request:c};ie((function(t){e(t),a()}),(function(t){n(t),a()}),o),c=null}if(c.open(t.method.toUpperCase(),Tt(u,t.params,t.paramsSerializer),!0),c.timeout=t.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new ut("Request aborted",ut.ECONNABORTED,t,c)),c=null)},c.onerror=function(){n(new ut("Network Error",ut.ERR_NETWORK,t,c)),c=null},c.ontimeout=function(){let e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const r=t.transitional||Ct;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(new ut(e,r.clarifyTimeoutError?ut.ETIMEDOUT:ut.ECONNABORTED,t,c)),c=null},Nt.isStandardBrowserEnv){const e=(t.withCredentials||ue(u))&&t.xsrfCookieName&&se.read(t.xsrfCookieName);e&&i.set(t.xsrfHeaderName,e)}void 0===r&&i.setContentType(null),"setRequestHeader"in c&&st.forEach(i.toJSON(),(function(t,e){c.setRequestHeader(e,t)})),st.isUndefined(t.withCredentials)||(c.withCredentials=!!t.withCredentials),s&&"json"!==s&&(c.responseType=t.responseType),"function"===typeof t.onDownloadProgress&&c.addEventListener("progress",de(t.onDownloadProgress,!0)),"function"===typeof t.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",de(t.onUploadProgress)),(t.cancelToken||t.signal)&&(o=e=>{c&&(n(!e||e.type?new re(null,t,c):e),c.abort(),c=null)},t.cancelToken&&t.cancelToken.subscribe(o),t.signal&&(t.signal.aborted?o():t.signal.addEventListener("abort",o)));const h=le(u);h&&-1===Nt.protocols.indexOf(h)?n(new ut("Unsupported protocol "+h+":",ut.ERR_BAD_REQUEST,t)):c.send(r||null)}))};const ge={http:lt,xhr:me};st.forEach(ge,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));var ve={getAdapter:t=>{t=st.isArray(t)?t:[t];const{length:e}=t;let n,r;for(let i=0;i<e;i++)if(n=t[i],r=st.isString(n)?ge[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new ut(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(st.hasOwnProp(ge,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!st.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ge};function ye(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new re(null,t)}function _e(t){ye(t),t.headers=Zt.from(t.headers),t.data=te.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=ve.getAdapter(t.adapter||Bt.adapter);return e(t).then((function(e){return ye(t),e.data=te.call(t,t.transformResponse,e),e.headers=Zt.from(e.headers),e}),(function(e){return ee(e)||(ye(t),e&&e.response&&(e.response.data=te.call(t,t.transformResponse,e.response),e.response.headers=Zt.from(e.response.headers))),Promise.reject(e)}))}const we=t=>t instanceof Zt?t.toJSON():t;function be(t,e){e=e||{};const n={};function r(t,e,n){return st.isPlainObject(t)&&st.isPlainObject(e)?st.merge.call({caseless:n},t,e):st.isPlainObject(e)?st.merge({},e):st.isArray(e)?e.slice():e}function i(t,e,n){return st.isUndefined(e)?st.isUndefined(t)?void 0:r(void 0,t,n):r(t,e,n)}function s(t,e){if(!st.isUndefined(e))return r(void 0,e)}function o(t,e){return st.isUndefined(e)?st.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e)=>i(we(t),we(e),!0)};return st.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);st.isUndefined(o)&&s!==a||(n[r]=o)})),n}const Ee="1.4.0",Te={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{Te[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const Ie={};function Se(t,e,n){if("object"!==typeof t)throw new ut("options must be an object",ut.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new ut("option "+s+" must be "+n,ut.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new ut("Unknown option "+s,ut.ERR_BAD_OPTION)}}Te.transitional=function(t,e,n){function r(t,e){return"[Axios v"+Ee+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new ut(r(i," has been removed"+(e?" in "+e:"")),ut.ERR_DEPRECATED);return e&&!Ie[i]&&(Ie[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}};var Ce={assertOptions:Se,validators:Te};const ke=Ce.validators;class Ae{constructor(t){this.defaults=t,this.interceptors={request:new St,response:new St}}request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=be(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;let s;void 0!==n&&Ce.assertOptions(n,{silentJSONParsing:ke.transitional(ke.boolean),forcedJSONParsing:ke.transitional(ke.boolean),clarifyTimeoutError:ke.transitional(ke.boolean)},!1),null!=r&&(st.isFunction(r)?e.paramsSerializer={serialize:r}:Ce.assertOptions(r,{encode:ke.function,serialize:ke.function},!0)),e.method=(e.method||this.defaults.method||"get").toLowerCase(),s=i&&st.merge(i.common,i[e.method]),s&&st.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=Zt.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let l,h=0;if(!a){const t=[_e.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,c),l=t.length,u=Promise.resolve(e);while(h<l)u=u.then(t[h++],t[h++]);return u}l=o.length;let f=e;h=0;while(h<l){const t=o[h++],e=o[h++];try{f=t(f)}catch(d){e.call(this,d);break}}try{u=_e.call(this,f)}catch(d){return Promise.reject(d)}h=0,l=c.length;while(h<l)u=u.then(c[h++],c[h++]);return u}getUri(t){t=be(this.defaults,t);const e=ce(t.baseURL,t.url);return Tt(e,t.params,t.paramsSerializer)}}st.forEach(["delete","get","head","options"],(function(t){Ae.prototype[t]=function(e,n){return this.request(be(n||{},{method:t,url:e,data:(n||{}).data}))}})),st.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(be(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}Ae.prototype[t]=e(),Ae.prototype[t+"Form"]=e(!0)}));var Oe=Ae;class Re{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new re(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}static source(){let t;const e=new Re((function(e){t=e}));return{token:e,cancel:t}}}var xe=Re;function Ne(t){return function(e){return t.apply(null,e)}}function De(t){return st.isObject(t)&&!0===t.isAxiosError}const Pe={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Pe).forEach((([t,e])=>{Pe[e]=t}));var Me=Pe;function Le(t){const e=new Oe(t),n=r(Oe.prototype.request,e);return st.extend(n,Oe.prototype,e,{allOwnKeys:!0}),st.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return Le(be(t,e))},n}const Fe=Le(Bt);Fe.Axios=Oe,Fe.CanceledError=re,Fe.CancelToken=xe,Fe.isCancel=ee,Fe.VERSION=Ee,Fe.toFormData=vt,Fe.AxiosError=ut,Fe.Cancel=Fe.CanceledError,Fe.all=function(t){return Promise.all(t)},Fe.spread=Ne,Fe.isAxiosError=De,Fe.mergeConfig=be,Fe.AxiosHeaders=Zt,Fe.formToJSON=t=>Ft(st.isHTMLForm(t)?new FormData(t):t),Fe.HttpStatusCode=Me,Fe.default=Fe;var Ue=Fe},7795:function(t,e,n){n.d(e,{ZF:function(){return r.ZF}});var r=n(7077),i="firebase",s="10.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},3866:function(t,e,n){n.d(e,{v0:function(){return Pr},e5:function(){return Ie}});n(7658),n(6229),n(7330),n(2062);var r=n(223),i=n(7077);function s(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create;"function"===typeof SuppressedError&&SuppressedError;var o=n(5168),a=n(7142);function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r.LL("auth","Firebase",c()),h=new o.Yd("@firebase/auth");function f(t,...e){h.logLevel<=o["in"].WARN&&h.warn(`Auth (${i.Jn}): ${t}`,...e)}function d(t,...e){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function g(t,e,n){const i=Object.assign(Object.assign({},u()),{[e]:n}),s=new r.LL("auth","Firebase",i);return s.create(e,{appName:t.name})}function v(t,...e){if("string"!==typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return l.create(t,...e)}function y(t,e,...n){if(!t)throw v(e,...n)}function _(t){const e="INTERNAL ASSERTION FAILED: "+t;throw d(e),new Error(e)}function w(t,e){t||_(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function E(){return"http:"===T()||"https:"===T()}function T(){var t;return"undefined"!==typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(E()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function S(){if("undefined"===typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error",["RECAPTCHA_NOT_ENABLED"]:"recaptcha-not-enabled",["MISSING_RECAPTCHA_TOKEN"]:"missing-recaptcha-token",["INVALID_RECAPTCHA_TOKEN"]:"invalid-recaptcha-token",["INVALID_RECAPTCHA_ACTION"]:"invalid-recaptcha-action",["MISSING_CLIENT_TYPE"]:"missing-client-type",["MISSING_RECAPTCHA_VERSION"]:"missing-recaptcha-version",["INVALID_RECAPTCHA_VERSION"]:"invalid-recaptcha-version",["INVALID_REQ_TYPE"]:"invalid-req-type"},R=new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function N(t,e,n,i,s={}){return D(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),A.fetch()(M(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function D(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},O),e);try{const e=new L(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(t,a,o);p(t,a)}}catch(s){if(s instanceof r.ZR)throw s;p(t,"network-request-failed",{message:String(s)})}}async function P(t,e,n,r,i={}){const s=await N(t,e,n,r,i);return"mfaPendingCredential"in s&&p(t,"multi-factor-auth-required",{_serverResponse:s}),s}function M(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}class L{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),R.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(t,e){return N(t,"POST","/v1/accounts:delete",e)}async function j(t,e){return N(t,"POST","/v1/accounts:lookup",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(e){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(t,e=!1){const n=(0,r.m9)(t),i=await n.getIdToken(e),s=$(i);y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:V(z(s.auth_time)),issuedAtTime:V(z(s.iat)),expirationTime:V(z(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function z(t){return 1e3*Number(t)}function $(t){const[e,n,i]=t.split(".");if(void 0===e||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.tV)(n);return t?JSON.parse(t):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function q(t){const e=$(t);return y(e,"internal-error"),y("undefined"!==typeof e.exp,"internal-error"),y("undefined"!==typeof e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof r.ZR&&K(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function K({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0,n=t-Date.now()-3e5;return Math.max(0,n)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===t||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J(t){var e;const n=t.auth,r=await t.getIdToken(),i=await H(t,j(n,{idToken:r}));y(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?Y(s.providerUserInfo):[],a=X(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new W(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,h)}async function Q(t){const e=(0,r.m9)(t);await J(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X(t,e){const n=t.filter((t=>!e.some((e=>e.providerId===t.providerId))));return[...n,...e]}function Y(t){return t.map((t=>{var{providerId:e}=t,n=s(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t,e){const n=await D(t,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=M(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",A.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){y(t.idToken,"internal-error"),y("undefined"!==typeof t.idToken,"internal-error"),y("undefined"!==typeof t.refreshToken,"internal-error");const e="expiresIn"in t&&"undefined"!==typeof t.expiresIn?Number(t.expiresIn):q(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return y(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:r,expiresIn:i}=await Z(t,e);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new tt;return n&&(y("string"===typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(y("string"===typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(y("number"===typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new tt,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t,e){y("string"===typeof t||"undefined"===typeof t,"internal-error",{appName:e})}class nt{constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=s(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new G(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new W(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const e=await H(this,this.stsTokenManager.getToken(this.auth,t));return y(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return B(this,t)}reload(){return Q(this)}_assign(t){this!==t&&(y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new nt(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await J(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await H(this,U(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,f=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,d=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,m=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=e.createdAt)&&void 0!==c?c:void 0,v=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:_,emailVerified:w,isAnonymous:b,providerData:E,stsTokenManager:T}=e;y(_&&T,t,"internal-error");const I=tt.fromJSON(this.name,T);y("string"===typeof _,t,"internal-error"),et(l,t.name),et(h,t.name),y("boolean"===typeof w,t,"internal-error"),y("boolean"===typeof b,t,"internal-error"),et(f,t.name),et(d,t.name),et(p,t.name),et(m,t.name),et(g,t.name),et(v,t.name);const S=new nt({uid:_,auth:t,email:h,emailVerified:w,displayName:l,isAnonymous:b,photoURL:d,phoneNumber:f,tenantId:p,stsTokenManager:I,createdAt:g,lastLoginAt:v});return E&&Array.isArray(E)&&(S.providerData=E.map((t=>Object.assign({},t)))),m&&(S._redirectEventId=m),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new tt;r.updateFromServerResponse(e);const i=new nt({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await J(i),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=new Map;function it(t){w(t instanceof Function,"Expected a class definition");let e=rt.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rt.set(t,e),e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}st.type="NONE";const ot=st;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(t,e,n){return`firebase:${t}:${e}:${n}`}class ct{constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=at(this.userKey,r.apiKey,i),this.fullPersistenceKey=at("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?nt._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new ct(it(ot),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||it(ot);const s=at(n,t.config.apiKey,t.name);let o=null;for(const u of e)try{const e=await u._get(s);if(e){const n=nt._fromJSON(t,e);u!==i&&(o=n),i=u;break}}catch(c){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(c){}}))),new ct(i,t,n)):new ct(i,t,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(dt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(lt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mt(e))return"Blackberry";if(gt(e))return"Webos";if(ht(e))return"Safari";if((e.includes("chrome/")||ft(e))&&!e.includes("edge/"))return"Chrome";if(pt(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function lt(t=(0,r.z$)()){return/firefox\//i.test(t)}function ht(t=(0,r.z$)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ft(t=(0,r.z$)()){return/crios\//i.test(t)}function dt(t=(0,r.z$)()){return/iemobile/i.test(t)}function pt(t=(0,r.z$)()){return/android/i.test(t)}function mt(t=(0,r.z$)()){return/blackberry/i.test(t)}function gt(t=(0,r.z$)()){return/webos/i.test(t)}function vt(t=(0,r.z$)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yt(t=(0,r.z$)()){var e;return vt(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function _t(){return(0,r.w1)()&&10===document.documentMode}function wt(t=(0,r.z$)()){return vt(t)||pt(t)||gt(t)||mt(t)||/windows phone/i.test(t)||dt(t)}function bt(){try{return!(!window||window===window.top)}catch(t){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t,e=[]){let n;switch(t){case"Browser":n=ut((0,r.z$)());break;case"Worker":n=`${ut((0,r.z$)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t,e){return N(t,"GET","/v2/recaptchaConfig",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){return void 0!==t&&void 0!==t.enterprise}class St{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===t.recaptchaKey)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some((t=>"EMAIL_PASSWORD_PROVIDER"===t.provider&&"OFF"!==t.enforcementState))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){var t,e;return null!==(e=null===(t=document.getElementsByTagName("head"))||void 0===t?void 0:t[0])&&void 0!==e?e:document}function kt(t){return new Promise(((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",Ct().appendChild(r)}))}function At(t){return`__${t}${Math.floor(1e6*Math.random())}`}const Ot="https://www.google.com/recaptcha/enterprise.js?render=",Rt="recaptcha-enterprise",xt="NO_RECAPTCHA";class Nt{constructor(t){this.type=Rt,this.auth=Lt(t)}async verify(t="verify",e=!1){async function n(t){if(!e){if(null==t.tenantId&&null!=t._agentRecaptchaConfig)return t._agentRecaptchaConfig.siteKey;if(null!=t.tenantId&&void 0!==t._tenantRecaptchaConfigs[t.tenantId])return t._tenantRecaptchaConfigs[t.tenantId].siteKey}return new Promise((async(e,n)=>{Tt(t,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then((r=>{if(void 0!==r.recaptchaKey){const n=new St(r);return null==t.tenantId?t._agentRecaptchaConfig=n:t._tenantRecaptchaConfigs[t.tenantId]=n,e(n.siteKey)}n(new Error("recaptcha Enterprise site key undefined"))})).catch((t=>{n(t)}))}))}function r(e,n,r){const i=window.grecaptcha;It(i)?i.enterprise.ready((()=>{i.enterprise.execute(e,{action:t}).then((t=>{n(t)})).catch((()=>{n(xt)}))})):r(Error("No reCAPTCHA enterprise script loaded."))}return new Promise(((t,i)=>{n(this.auth).then((n=>{if(!e&&It(window.grecaptcha))r(n,t,i);else{if("undefined"===typeof window)return void i(new Error("RecaptchaVerifier is only supported in browser"));kt(Ot+n).then((()=>{r(n,t,i)})).catch((t=>{i(t)}))}})).catch((t=>{i(t)}))}))}}async function Dt(t,e,n,r=!1){const i=new Nt(t);let s;try{s=await i.verify(n)}catch(a){s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{const r=t(e);n(r)}catch(i){r(i)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const n of this.queue)await n(t),n.onAbort&&e.push(n.onAbort)}catch(n){e.reverse();for(const t of e)try{t()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(t,e,n,r){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ft(this),this.idTokenSubscription=new Ft(this),this.beforeStateQueue=new Pt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=it(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ct.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(n){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await J(t)}catch(e){if("auth/network-request-failed"!==(null===e||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=S()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.m9)(t):null;return e&&y(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(it(t))}))}async initializeRecaptchaConfig(){const t=await Tt(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),e=new St(t);if(null==this.tenantId?this._agentRecaptchaConfig=e:this._tenantRecaptchaConfigs[this.tenantId]=e,e.emailPasswordEnabled){const t=new Nt(this);t.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new r.LL("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}authStateReady(){return new Promise(((t,e)=>{if(this.currentUser)t();else{const n=this.onAuthStateChanged((()=>{n(),t()}),e)}}))}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&it(t)||this._popupRedirectResolver;y(e,this,"argument-error"),this.redirectPersistenceManager=await ct.create(this,[it(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"===typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return y(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Et(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;const e=await(null===(t=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getToken());return(null===e||void 0===e?void 0:e.error)&&f(`Error while retrieving App Check token: ${e.error}`),null===e||void 0===e?void 0:e.token}}function Lt(t){return(0,r.m9)(t)}class Ft{constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.ne)((t=>this.observer=t))}get next(){return y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ut(t,e){const n=(0,i.qX)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==e&&void 0!==e?e:{}))return t;p(t,"already-initialized")}const s=n.initialize({options:e});return s}function jt(t,e){const n=(null===e||void 0===e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(it);(null===e||void 0===e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null===e||void 0===e?void 0:e.popupRedirectResolver)}function Vt(t,e,n){const r=Lt(t);y(r._canInitEmulator,r,"emulator-config-failed"),y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(null===n||void 0===n?void 0:n.disableWarnings),s=Bt(e),{host:o,port:a}=zt(e),c=null===a?"":`:${a}`;r.config.emulator={url:`${s}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||qt()}function Bt(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function zt(t){const e=Bt(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const t=i[1];return{host:t,port:$t(r.substr(t.length+1))}}{const[t,e]=r.split(":");return{host:t,port:$t(e)}}}function $t(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function qt(){function t(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",t):t())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return _("not implemented")}_getIdTokenResponse(t){return _("not implemented")}_linkToIdToken(t,e){return _("not implemented")}_getReauthenticationResolver(t){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kt(t,e){return N(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Gt(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Wt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}async function Jt(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Ht{constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}static _fromEmailAndPassword(t,e){return new Qt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new Qt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t;if((null===e||void 0===e?void 0:e.email)&&(null===e||void 0===e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){var e;switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(e=t._getRecaptchaConfig())||void 0===e?void 0:e.emailPasswordEnabled){const e=await Dt(t,n,"signInWithPassword");return Gt(t,e)}return Gt(t,n).catch((async e=>{if("auth/missing-recaptcha-token"===e.code){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const e=await Dt(t,n,"signInWithPassword");return Gt(t,e)}return Promise.reject(e)}));case"emailLink":return Wt(t,{email:this._email,oobCode:this._password});default:p(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return Kt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Jt(t,{idToken:e,email:this._email,oobCode:this._password});default:p(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yt="http://localhost";class Zt extends Ht{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new Zt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):p("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"===typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=s(e,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Zt(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return Xt(t,e)}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,Xt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,Xt(t,e)}buildRequest(){const t={requestUri:Yt,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e["id_token"]=this.idToken),this.accessToken&&(e["access_token"]=this.accessToken),this.secret&&(e["oauth_token_secret"]=this.secret),e["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(e["nonce"]=this.nonce),t.postBody=(0,r.xO)(e)}return t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function te(t,e){return N(t,"POST","/v1/accounts:sendVerificationCode",x(t,e))}async function ee(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e))}async function ne(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}const re={["USER_NOT_FOUND"]:"user-not-found"};async function ie(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return P(t,"POST","/v1/accounts:signInWithPhoneNumber",x(t,n),re)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se extends Ht{constructor(t){super("phone","phone"),this.params=t}static _fromVerification(t,e){return new se({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new se({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return ee(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return ne(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return ie(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"===typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new se({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ae(t){const e=(0,r.zd)((0,r.pd)(t))["link"],n=e?(0,r.zd)((0,r.pd)(e))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(t))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||e||t}class ce{constructor(t){var e,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(t)),u=null!==(e=c["apiKey"])&&void 0!==e?e:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=oe(null!==(i=c["mode"])&&void 0!==i?i:null);y(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(t){const e=ae(t);try{return new ce(e)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ue{constructor(){this.providerId=ue.PROVIDER_ID}static credential(t,e){return Qt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=ce.parseLink(e);return y(n,"argument-error"),Qt._fromEmailAndCode(t,n.code,n.tenantId)}}ue.PROVIDER_ID="password",ue.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ue.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class le{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he extends le{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe extends he{constructor(){super("facebook.com")}static credential(t){return Zt._fromParams({providerId:fe.PROVIDER_ID,signInMethod:fe.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return fe.credentialFromTaggedObject(t)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return fe.credential(t.oauthAccessToken)}catch(e){return null}}}fe.FACEBOOK_SIGN_IN_METHOD="facebook.com",fe.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class de extends he{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return Zt._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return de.credentialFromTaggedObject(t)}static credentialFromError(t){return de.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return de.credential(e,n)}catch(r){return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com",de.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pe extends he{constructor(){super("github.com")}static credential(t){return Zt._fromParams({providerId:pe.PROVIDER_ID,signInMethod:pe.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return pe.credentialFromTaggedObject(t)}static credentialFromError(t){return pe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return pe.credential(t.oauthAccessToken)}catch(e){return null}}}pe.GITHUB_SIGN_IN_METHOD="github.com",pe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class me extends he{constructor(){super("twitter.com")}static credential(t,e){return Zt._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return me.credentialFromTaggedObject(t)}static credentialFromError(t){return me.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return me.credential(e,n)}catch(r){return null}}}me.TWITTER_SIGN_IN_METHOD="twitter.com",me.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,n,r=!1){const i=await nt._fromIdTokenResponse(t,n,r),s=ve(n),o=new ge({user:i,providerId:s,_tokenResponse:n,operationType:e});return o}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=ve(n);return new ge({user:t,providerId:r,_tokenResponse:n,operationType:e})}}function ve(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ye extends r.ZR{constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ye.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(t,e,n,r){return new ye(t,e,n,r)}}function _e(t,e,n,r){const i="reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw ye._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e,n=!1){const r=await H(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ge._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function be(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await H(t,_e(r,i,e,t),n);y(s.idToken,r,"internal-error");const o=$(s.idToken);y(o,r,"internal-error");const{sub:a}=o;return y(t.uid===a,r,"user-mismatch"),ge._forOperation(t,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&p(r,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(t,e,n=!1){const r="signIn",i=await _e(t,r,e),s=await ge._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Te(t,e){return Ee(Lt(t),e)}function Ie(t,e,n){return Te((0,r.m9)(t),ue.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t,e,n,i){return(0,r.m9)(t).onIdTokenChanged(e,n,i)}function Ce(t,e,n){return(0,r.m9)(t).beforeAuthStateChanged(e,n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ke(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Ae(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}function Oe(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:start",x(t,e))}function Re(t,e){return N(t,"POST","/v2/accounts/mfaEnrollment:finalize",x(t,e))}new WeakMap;const xe="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(xe,"1"),this.storage.removeItem(xe),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){const t=(0,r.z$)();return ht(t)||vt(t)}const Pe=1e3,Me=10;class Le extends Ne{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=De()&&bt(),this.fallbackToPolling=wt(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const r=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},i=this.storage.getItem(n);_t()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,Me):r()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),Pe)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Le.type="LOCAL";const Fe=Le;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue extends Ne{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ue.type="SESSION";const je=Ue;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t){return Promise.all(t.map((async t=>{try{const e=await t;return{fulfilled:!0,value:e}}catch(e){return{fulfilled:!1,reason:e}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Be(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await Ve(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ze(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Be.receivers=[];class $e{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=ze("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return window}function He(t){qe().location.href=t}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return"undefined"!==typeof qe()["WorkerGlobalScope"]&&"function"===typeof qe()["importScripts"]}async function Ge(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const t=await navigator.serviceWorker.ready;return t.active}catch(t){return null}}function We(){var t;return(null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null}function Je(){return Ke()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qe="firebaseLocalStorageDb",Xe=1,Ye="firebaseLocalStorage",Ze="fbase_key";class tn{constructor(t){this.request=t}toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}}function en(t,e){return t.transaction([Ye],e?"readwrite":"readonly").objectStore(Ye)}function nn(){const t=indexedDB.deleteDatabase(Qe);return new tn(t).toPromise()}function rn(){const t=indexedDB.open(Qe,Xe);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(Ye,{keyPath:Ze})}catch(r){n(r)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(Ye)?e(n):(n.close(),await nn(),e(await rn()))}))}))}async function sn(t,e,n){const r=en(t,!0).put({[Ze]:e,value:n});return new tn(r).toPromise()}async function on(t,e){const n=en(t,!1).get(e),r=await new tn(n).toPromise();return void 0===r?null:r.value}function an(t,e){const n=en(t,!0).delete(e);return new tn(n).toPromise()}const cn=800,un=3;class ln{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await rn()),this.db}async _withRetries(t){let e=0;while(1)try{const e=await this._openDb();return await t(e)}catch(n){if(e++>un)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ke()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Be._getInstance(Je()),this.receiver._subscribe("keyChanged",(async(t,e)=>{const n=await this._poll();return{keyProcessed:n.includes(e.key)}})),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await Ge(),!this.activeServiceWorker)return;this.sender=new $e(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&We()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await rn();return await sn(t,xe,"1"),await an(t,xe),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>sn(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>on(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>an(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=en(t,!1).getAll();return new tn(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),e.push(r));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const r of Array.from(n))r(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),cn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ln.type="LOCAL";const hn=ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:start",x(t,e))}function dn(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}function pn(t,e){return N(t,"POST","/v2/accounts/mfaSignIn:finalize",x(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
At("rcb"),new C(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const mn="recaptcha";async function gn(t,e,n){var r;const i=await n.verify();try{let s;if(y("string"===typeof i,t,"argument-error"),y(n.type===mn,t,"argument-error"),s="string"===typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){y("enroll"===e.type,t,"internal-error");const n=await ke(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{y("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;y(n,t,"missing-multi-factor-info");const o=await fn(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await te(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vn{constructor(t){this.providerId=vn.PROVIDER_ID,this.auth=Lt(t)}verifyPhoneNumber(t,e){return gn(this.auth,t,(0,r.m9)(e))}static credential(t,e){return se._fromVerification(t,e)}static credentialFromResult(t){const e=t;return vn.credentialFromTaggedObject(e)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?se._fromTokenResponse(e,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yn(t,e){return e?it(e):(y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn.PROVIDER_ID="phone",vn.PHONE_SIGN_IN_METHOD="phone";class _n extends Ht{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Xt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return Xt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return Xt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function wn(t){return Ee(t.auth,new _n(t),t.bypassAuthState)}function bn(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),be(n,new _n(t),t.bypassAuthState)}async function En(t){const{auth:e,user:n}=t;return y(n,e,"internal-error"),we(n,new _n(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return wn;case"linkViaPopup":case"linkViaRedirect":return En;case"reauthViaPopup":case"reauthViaRedirect":return bn;default:p(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new C(2e3,1e4);class Sn extends Tn{constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,Sn.currentPopupAction&&Sn.currentPopupAction.cancel(),Sn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return y(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=ze();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Sn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(t,In.get())};t()}}Sn.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cn="pendingRedirect",kn=new Map;class An extends Tn{constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}async execute(){let t=kn.get(this.auth._key());if(!t){try{const e=await On(this.resolver,this.auth),n=e?await super.execute():null;t=()=>Promise.resolve(n)}catch(e){t=()=>Promise.reject(e)}kn.set(this.auth._key(),t)}return this.bypassAuthState||kn.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function On(t,e){const n=Nn(e),r=xn(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function Rn(t,e){kn.set(t._key(),e)}function xn(t){return it(t._redirectPersistence)}function Nn(t){return at(Cn,t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dn(t,e,n=!1){const r=Lt(t),i=yn(r,e),s=new An(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Pn=6e5;class Mn{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!Un(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Fn(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Pn&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ln(t))}saveEventToCache(t){this.cachedEventUids.add(Ln(t)),this.lastProcessedEventTime=Date.now()}}function Ln(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Fn({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null===e||void 0===e?void 0:e.code)}function Un(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Fn(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jn(t,e={}){return N(t,"GET","/v1/projects",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bn=/^https?/;async function zn(t){if(t.config.emulator)return;const{authorizedDomains:e}=await jn(t);for(const r of e)try{if($n(r))return}catch(n){}p(t,"unauthorized-domain")}function $n(t){const e=b(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Bn.test(n))return!1;if(Vn.test(t))return r===t;const i=t.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qn=new C(3e4,6e4);function Hn(){const t=qe().___jsl;if(null===t||void 0===t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}function Kn(t){return new Promise(((e,n)=>{var r,i,s;function o(){Hn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hn(),n(m(t,"network-request-failed"))},timeout:qn.get()})}if(null===(i=null===(r=qe().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=qe().gapi)||void 0===s?void 0:s.load)){const e=At("iframefcb");return qe()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},kt(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Gn=null,t}))}let Gn=null;function Wn(t){return Gn=Gn||Kn(t),Gn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn=new C(5e3,15e3),Qn="__/auth/iframe",Xn="emulator/auth/iframe",Yn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tr(t){const e=t.config;y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,Xn):`https://${t.config.authDomain}/${Qn}`,s={apiKey:e.apiKey,appName:t.name,v:i.Jn},o=Zn.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function er(t){const e=await Wn(t),n=qe().gapi;return y(n,t,"internal-error"),e.open({where:document.body,url:tr(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Yn,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),s=qe().setTimeout((()=>{r(i)}),Jn.get());function o(){qe().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nr={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},rr=500,ir=600,sr="_blank",or="http://localhost";class ar{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(t){}}}function cr(t,e,n,i=rr,s=ir){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},nr),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=ft(l)?sr:n),lt(l)&&(e=e||or,u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(yt(l)&&"_self"!==c)return ur(e||"",c),new ar(null);const f=window.open(e||"",c,h);y(f,t,"popup-blocked");try{f.focus()}catch(d){}return new ar(f)}function ur(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="__/auth/handler",hr="emulator/auth/handler",fr=encodeURIComponent("fac");async function dr(t,e,n,s,o,a){y(t.config.authDomain,t,"auth-domain-config-required"),y(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(e instanceof le){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.xb)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof he){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];const l=await t._getAppCheckToken(),h=l?`#${fr}=${encodeURIComponent(l)}`:"";return`${pr(t)}?${(0,r.xO)(u).slice(1)}${h}`}function pr({config:t}){return t.emulator?k(t,hr):`https://${t.authDomain}/${lr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mr="webStorageSupport";class gr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=je,this._completeRedirectFn=Dn,this._overrideRedirectResult=Rn}async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=await dr(t,e,n,b(),r);return cr(t,s,ze())}async _openRedirect(t,e,n,r){await this._originValidation(t);const i=await dr(t,e,n,b(),r);return He(i),new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await er(t),n=new Mn(t);return e.register("authEvent",(e=>{y(null===e||void 0===e?void 0:e.authEvent,t,"invalid-auth-event");const r=n.onEvent(e.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){const n=this.iframes[t._key()];n.send(mr,{type:mr},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[mr];void 0!==i&&e(!!i),p(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=zn(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return wt()||ht()||vt()}}const vr=gr;class yr{constructor(t){this.factorId=t}_process(t,e,n){switch(e.type){case"enroll":return this._finalizeEnroll(t,e.credential,n);case"signin":return this._finalizeSignIn(t,e.credential);default:return _("unexpected MultiFactorSessionType")}}}class _r extends yr{constructor(t){super("phone"),this.credential=t}static _fromCredential(t){return new _r(t)}_finalizeEnroll(t,e,n){return Ae(t,{idToken:e,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(t,e){return dn(t,{mfaPendingCredential:e,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class wr{constructor(){}static assertion(t){return _r._fromCredential(t)}}wr.FACTOR_ID="phone";class br{static assertionForEnrollment(t,e){return Er._fromSecret(t,e)}static assertionForSignIn(t,e){return Er._fromEnrollmentId(t,e)}static async generateSecret(t){var e;const n=t;y("undefined"!==typeof(null===(e=n.user)||void 0===e?void 0:e.auth),"internal-error");const r=await Oe(n.user.auth,{idToken:n.credential,totpEnrollmentInfo:{}});return Tr._fromStartTotpMfaEnrollmentResponse(r,n.user.auth)}}br.FACTOR_ID="totp";class Er extends yr{constructor(t,e,n){super("totp"),this.otp=t,this.enrollmentId=e,this.secret=n}static _fromSecret(t,e){return new Er(e,void 0,t)}static _fromEnrollmentId(t,e){return new Er(e,t)}async _finalizeEnroll(t,e,n){return y("undefined"!==typeof this.secret,t,"argument-error"),Re(t,{idToken:e,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(t,e){y(void 0!==this.enrollmentId&&void 0!==this.otp,t,"argument-error");const n={verificationCode:this.otp};return pn(t,{mfaPendingCredential:e,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class Tr{constructor(t,e,n,r,i,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=t,this.hashingAlgorithm=e,this.codeLength=n,this.codeIntervalSeconds=r,this.enrollmentCompletionDeadline=i}static _fromStartTotpMfaEnrollmentResponse(t,e){return new Tr(t.totpSessionInfo.sharedSecretKey,t.totpSessionInfo.hashingAlgorithm,t.totpSessionInfo.verificationCodeLength,t.totpSessionInfo.periodSec,new Date(t.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),t.totpSessionInfo.sessionInfo,e)}_makeTotpVerificationInfo(t){return{sessionInfo:this.sessionInfo,verificationCode:t}}generateQrCodeUrl(t,e){var n;let r=!1;return(Ir(t)||Ir(e))&&(r=!0),r&&(Ir(t)&&(t=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),Ir(e)&&(e=this.auth.name)),`otpauth://totp/${e}:${t}?secret=${this.secretKey}&issuer=${e}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Ir(t){return"undefined"===typeof t||0===(null===t||void 0===t?void 0:t.length)}var Sr="@firebase/auth",Cr="1.1.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const e=await this.auth.currentUser.getIdToken(t);return{accessToken:e}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{t((null===e||void 0===e?void 0:e.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ar(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Or(t){(0,i.Xd)(new a.wA("auth",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Et(t)},u=new Mt(r,i,s,c);return jt(u,n),u}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{const r=t.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(t=>{const e=Lt(t.getProvider("auth").getImmediate());return(t=>new kr(t))(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Sr,Cr,Ar(t)),(0,i.KN)(Sr,Cr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=300,xr=(0,r.Pz)("authIdTokenMaxAge")||Rr;let Nr=null;const Dr=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&((new Date).getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xr)return;const i=null===n||void 0===n?void 0:n.token;Nr!==i&&(Nr=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Pr(t=(0,i.Mq)()){const e=(0,i.qX)(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ut(t,{popupRedirectResolver:vr,persistence:[hn,Fe,je]}),s=(0,r.Pz)("authTokenSyncURL");if(s){const t=Dr(s);Ce(n,t,(()=>t(n.currentUser))),Se(n,(e=>t(e)))}const o=(0,r.q4)("auth");return o&&Vt(n,`http://${o}`),n}Or("Browser")},4287:function(t,e,n){n.d(e,{hJ:function(){return Tl},JU:function(){return Il},QT:function(){return Kl},PL:function(){return Wl},ad:function(){return kl}});n(1439),n(7585),n(5315),n(7658),n(2801);var r,i=n(7077),s=n(7142),o=n(5168),a=n(223),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},u={},l=l||{},h=c||self;function f(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function d(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function p(t){return Object.prototype.hasOwnProperty.call(t,m)&&t[m]||(t[m]=++g)}var m="closure_uid_"+(1e9*Math.random()>>>0),g=0;function v(t,e,n){return t.call.apply(t.bind,arguments)}function y(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function _(t,e,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?v:y,_.apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function b(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function E(){this.s=this.s,this.o=this.o}var T=0;E.prototype.s=!1,E.prototype.sa=function(){this.s||(this.s=!0,this.N(),0==T)||p(this)},E.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function S(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function C(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(f(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}function k(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}k.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{h.addEventListener("test",(()=>{}),e),h.removeEventListener("test",(()=>{}),e)}catch(n){}return t}();function O(t){return/^[\s\xa0]*$/.test(t)}function R(){var t=h.navigator;return t&&(t=t.userAgent)?t:""}function x(t){return-1!=R().indexOf(t)}function N(t){return N[" "](t),t}function D(t,e){var n=wr;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}N[" "]=function(){};var P,M,L=x("Opera"),F=x("Trident")||x("MSIE"),U=x("Edge"),j=U||F,V=x("Gecko")&&!(-1!=R().toLowerCase().indexOf("webkit")&&!x("Edge"))&&!(x("Trident")||x("MSIE"))&&!x("Edge"),B=-1!=R().toLowerCase().indexOf("webkit")&&!x("Edge");function z(){var t=h.document;return t?t.documentMode:void 0}t:{var $="",q=function(){var t=R();return V?/rv:([^\);]+)(\)|;)/.exec(t):U?/Edge\/([\d\.]+)/.exec(t):F?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):B?/WebKit\/(\S+)/.exec(t):L?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(q&&($=q?q[1]:""),F){var H=z();if(null!=H&&H>parseFloat($)){P=String(H);break t}}P=$}if(h.document&&F){var K=z();M=K||(parseInt(P,10)||void 0)}else M=void 0;var G=M;function W(t,e){if(k.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(V){t:{try{N(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:J[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&W.$.h.call(this)}}b(W,k);var J={2:"touch",3:"pen",4:"mouse"};W.prototype.h=function(){W.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Q="closure_listenable_"+(1e6*Math.random()|0),X=0;function Y(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++X,this.fa=this.ia=!1}function Z(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function tt(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function et(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function nt(t){const e={};for(const n in t)e[n]=t[n];return e}const rt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function it(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<rt.length;e++)n=rt[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function st(t){this.src=t,this.g={},this.h=0}function ot(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=I(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Z(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function at(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}st.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=at(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new Y(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};var ct="closure_lm_"+(1e6*Math.random()|0),ut={};function lt(t,e,n,r,i){if(r&&r.once)return dt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)lt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[Q]?t.O(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!1,r,i)}function ht(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=d(i)?!!i.capture:!!i,a=yt(t);if(a||(t[ct]=a=new st(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=ft(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)A||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function ft(){function t(n){return e.call(t.src,t.listener,n)}const e=vt;return t}function dt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[Q]?t.P(e,n,d(r)?!!r.capture:!!r,i):ht(t,e,n,!0,r,i)}function pt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)pt(t,e[s],n,r,i);else r=d(r)?!!r.capture:!!r,n=wt(n),t&&t[Q]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=at(s,n,r,i),-1<n&&(Z(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=yt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=at(e,n,r,i)),(n=-1<t?e[t]:null)&&mt(n))}function mt(t){if("number"!==typeof t&&t&&!t.fa){var e=t.src;if(e&&e[Q])ot(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=yt(e))?(ot(n,t),0==n.h&&(n.src=null,e[ct]=null)):Z(t)}}}function gt(t){return t in ut?ut[t]:ut[t]="on"+t}function vt(t,e){if(t.fa)t=!0;else{e=new W(e,this);var n=t.listener,r=t.la||t.src;t.ia&&mt(t),t=n.call(r,e)}return t}function yt(t){return t=t[ct],t instanceof st?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function bt(){E.call(this),this.i=new st(this),this.S=this,this.J=null}function Et(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"===typeof e)e=new k(e,t);else if(e instanceof k)e.target=e.target||t;else{var i=e;e=new k(r,t),it(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Tt(o,r,!0,e)&&i}if(o=e.g=t,i=Tt(o,r,!0,e)&&i,i=Tt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Tt(o,r,!1,e)&&i}function Tt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&ot(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}b(bt,E),bt.prototype[Q]=!0,bt.prototype.removeEventListener=function(t,e,n,r){pt(this,t,e,n,r)},bt.prototype.N=function(){if(bt.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)Z(n[r]);delete e.g[t],e.h--}}this.J=null},bt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},bt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var It=h.JSON.stringify;class St{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Ct(){var t=Pt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class kt{constructor(){this.h=this.g=null}add(t,e){const n=At.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var At=new St((()=>new Ot),(t=>t.reset()));class Ot{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Rt(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function xt(t){h.setTimeout((()=>{throw t}),0)}let Nt,Dt=!1,Pt=new kt,Mt=()=>{const t=h.Promise.resolve(void 0);Nt=()=>{t.then(Lt)}};var Lt=()=>{for(var t;t=Ct();){try{t.h.call(t.g)}catch(n){xt(n)}var e=At;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1};function Ft(t,e){bt.call(this),this.h=t||1,this.g=e||h,this.j=_(this.qb,this),this.l=Date.now()}function Ut(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function jt(t,e,n){if("function"===typeof t)n&&(t=_(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=_(t.handleEvent,t)}return 2147483647<Number(e)?-1:h.setTimeout(t,e||0)}function Vt(t){t.g=jt((()=>{t.g=null,t.i&&(t.i=!1,Vt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}b(Ft,bt),r=Ft.prototype,r.ga=!1,r.T=null,r.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Et(this,"tick"),this.ga&&(Ut(this),this.start()))}},r.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.N=function(){Ft.$.N.call(this),Ut(this),delete this.g};class Bt extends E{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}N(){super.N(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){E.call(this),this.h=t,this.g={}}b(zt,E);var $t=[];function qt(t,e,n,r){Array.isArray(n)||(n&&($t[0]=n.toString()),n=$t);for(var i=0;i<n.length;i++){var s=lt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Ht(t){tt(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}function Kt(){this.g=!0}function Gt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Wt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Jt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+Xt(t,n)+(r?" "+r:"")}))}function Qt(t,e){t.info((function(){return"TIMEOUT: "+e}))}function Xt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return It(n)}catch(a){return e}}zt.prototype.N=function(){zt.$.N.call(this),Ht(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Kt.prototype.Ea=function(){this.g=!1},Kt.prototype.info=function(){};var Yt={},Zt=null;function te(){return Zt=Zt||new bt}function ee(t){k.call(this,Yt.Ta,t)}function ne(t){const e=te();Et(e,new ee(e))}function re(t,e){k.call(this,Yt.STAT_EVENT,t),this.stat=e}function ie(t){const e=te();Et(e,new re(e,t))}function se(t,e){k.call(this,Yt.Ua,t),this.size=e}function oe(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){t()}),e)}Yt.Ta="serverreachability",b(ee,k),Yt.STAT_EVENT="statevent",b(re,k),Yt.Ua="timingevent",b(se,k);var ae={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ce={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function ue(){}function le(t){return t.h||(t.h=t.i())}function he(){}ue.prototype.h=null;var fe,de={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function pe(){k.call(this,"d")}function me(){k.call(this,"c")}function ge(){}function ve(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new zt(this),this.P=_e,t=j?125:void 0,this.V=new Ft(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new ye}function ye(){this.i=null,this.g="",this.h=!1}b(pe,k),b(me,k),b(ge,ue),ge.prototype.g=function(){return new XMLHttpRequest},ge.prototype.i=function(){return{}},fe=new ge;var _e=45e3,we={},be={};function Ee(t,e,n){t.L=1,t.v=qe(je(e)),t.s=n,t.S=!0,Te(t,null)}function Te(t,e){t.G=Date.now(),ke(t),t.A=je(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),rn(n.i,"t",r),t.C=0,n=t.l.J,t.h=new ye,t.g=ur(t.l,n?e:null,!t.s),0<t.O&&(t.M=new Bt(_(t.Pa,t,t.g),t.O)),qt(t.U,t.g,"readystatechange",t.nb),e=t.I?nt(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ne(),Gt(t.j,t.u,t.A,t.m,t.W,t.s)}function Ie(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.l.Ha)}function Se(t,e,n){let r,i=!0;for(;!t.J&&t.C<n.length;){if(r=Ce(t,n),r==be){4==e&&(t.o=4,ie(14),i=!1),Jt(t.j,t.m,null,"[Incomplete Response]");break}if(r==we){t.o=4,ie(15),Jt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Jt(t.j,t.m,r,null),Ne(t,r)}Ie(t)&&r!=be&&r!=we&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ie(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),er(e),e.M=!0,ie(11))):(Jt(t.j,t.m,n,"[Invalid Chunked Response]"),xe(t),Re(t))}function Ce(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?be:(n=Number(e.substring(n,r)),isNaN(n)?we:(r+=1,r+n>e.length?be:(e=e.slice(r,r+n),t.C=r+n,e)))}function ke(t){t.Y=Date.now()+t.P,Ae(t,t.P)}function Ae(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=oe(_(t.lb,t),e)}function Oe(t){t.B&&(h.clearTimeout(t.B),t.B=null)}function Re(t){0==t.l.H||t.J||ir(t.l,t)}function xe(t){Oe(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,Ut(t.V),Ht(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ne(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||fn(n.i,t)))if(!t.K&&fn(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.G+3e3<t.G))break t;rr(n),Kn(n)}tr(n),ie(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=oe(_(n.ib,n),6e3));if(1>=hn(n.i)&&n.oa){try{n.oa()}catch(u){}n.oa=void 0}}else or(n,11)}else if((t.K||n.g==t)&&rr(n),!O(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],2==n.H)if("c"==u[0]){n.K=u[1],n.pa=u[2];const e=u[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));const i=u[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(dn(s,s.h),s.h=null))}if(r.F){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,$e(r.I,r.F,t))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=cr(r,r.J?r.pa:null,r.Y),o.K){pn(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.B&&(Oe(a),ke(a)),r.g=o}else Zn(r);0<n.j.length&&Wn(n)}else"stop"!=u[0]&&"close"!=u[0]||or(n,7);else 3==n.H&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?or(n,7):Hn(n):"noop"!=u[0]&&n.h&&n.h.Aa(u),n.A=0)}ne(4)}catch(u){}}function De(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function Pe(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(f(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Me(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=Pe(t),r=De(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}r=ve.prototype,r.setTimeout=function(t){this.P=t},r.nb=function(t){t=t.target;const e=this.M;e&&3==Un(t)?e.l():this.Pa(t)},r.Pa=function(t){try{if(t==this.g)t:{const l=Un(this.g);var e=this.g.Ia();const f=this.g.da();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.ja()||jn(this.g)))){this.J||4!=l||7==e||ne(8==e||0>=f?3:2),Oe(this);var n=this.g.da();this.ca=n;e:if(Ie(this)){var r=jn(this.g);t="";var i=r.length,s=4==Un(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){xe(this),Re(this);var o="";break e}this.h.i=new h.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,Wt(this.j,this.u,this.A,this.m,this.W,l,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var u=a;break e}}u=null}if(!(n=u)){this.i=!1,this.o=3,ie(12),xe(this),Re(this);break t}Jt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ne(this,n)}this.S?(Se(this,l,o),j&&this.i&&3==l&&(qt(this.U,this.V,"tick",this.mb),this.V.start())):(Jt(this.j,this.m,o,null),Ne(this,o)),4==l&&xe(this),this.i&&!this.J&&(4==l?ir(this.l,this):(this.i=!1,ke(this)))}else Vn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ie(12)):(this.o=0,ie(13)),xe(this),Re(this)}}}catch(l){}},r.mb=function(){if(this.g){var t=Un(this.g),e=this.g.ja();this.C<e.length&&(Oe(this),Se(this,t,e),this.i&&4!=t&&ke(this))}},r.cancel=function(){this.J=!0,xe(this)},r.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Qt(this.j,this.A),2!=this.L&&(ne(),ie(17)),xe(this),this.o=2,Re(this)):Ae(this,this.Y-t)};var Le=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fe(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Ue(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ue){this.h=t.h,Ve(this,t.j),this.s=t.s,this.g=t.g,Be(this,t.m),this.l=t.l;var e=t.i,n=new Ze;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ze(this,n),this.o=t.o}else t&&(e=String(t).match(Le))?(this.h=!1,Ve(this,e[1]||"",!0),this.s=He(e[2]||""),this.g=He(e[3]||"",!0),Be(this,e[4]),this.l=He(e[5]||"",!0),ze(this,e[6]||"",!0),this.o=He(e[7]||"")):(this.h=!1,this.i=new Ze(null,this.h))}function je(t){return new Ue(t)}function Ve(t,e,n){t.j=n?He(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Be(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ze(t,e,n){e instanceof Ze?(t.i=e,on(t.i,t.h)):(n||(e=Ke(e,Xe)),t.i=new Ze(e,t.h))}function $e(t,e,n){t.i.set(e,n)}function qe(t){return $e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function He(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}Ue.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ke(e,We,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Ke(e,We,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(Ke(n,"/"==n.charAt(0)?Qe:Je,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ke(n,Ye)),t.join("")};var We=/[#\/\?@]/g,Je=/[#\?:]/g,Qe=/[#\?]/g,Xe=/[#\?@]/g,Ye=/#/g;function Ze(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function tn(t){t.g||(t.g=new Map,t.h=0,t.i&&Fe(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function en(t,e){tn(t),e=sn(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function nn(t,e){return tn(t),e=sn(t,e),t.g.has(e)}function rn(t,e,n){en(t,e),0<n.length&&(t.i=null,t.g.set(sn(t,e),S(n)),t.h+=n.length)}function sn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function on(t,e){e&&!t.j&&(tn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(en(this,e),rn(this,n,t))}),t)),t.j=e}r=Ze.prototype,r.add=function(t,e){tn(this),this.i=null,t=sn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){tn(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},r.ta=function(){tn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},r.Z=function(t){tn(this);let e=[];if("string"===typeof t)nn(this,t)&&(e=e.concat(this.g.get(sn(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},r.set=function(t,e){return tn(this),this.i=null,t=sn(this,t),nn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var an=class{constructor(t,e){this.g=t,this.map=e}};function cn(t){this.l=t||un,h.PerformanceNavigationTiming?(t=h.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(h.g&&h.g.Ka&&h.g.Ka()&&h.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var un=10;function ln(t){return!!t.h||!!t.g&&t.g.size>=t.j}function hn(t){return t.h?1:t.g?t.g.size:0}function fn(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function dn(t,e){t.g?t.g.add(e):t.h=e}function pn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function mn(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return S(t.i)}cn.prototype.cancel=function(){if(this.i=mn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var gn=class{stringify(t){return h.JSON.stringify(t,void 0)}parse(t){return h.JSON.parse(t,void 0)}};function vn(){this.g=new gn}function yn(t,e,n){const r=n||"";try{Me(t,(function(t,n){let i=t;d(t)&&(i=It(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _n(t,e){const n=new Kt;if(h.Image){const r=new Image;r.onload=w(wn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(wn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(wn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(wn,n,r,"TestLoadImage: timeout",!1,e),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function wn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function bn(t){this.l=t.fc||null,this.j=t.ob||!1}function En(t,e){bt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Tn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}b(bn,ue),bn.prototype.g=function(){return new En(this.l,this.j)},bn.prototype.i=function(t){return function(){return t}}({}),b(En,bt);var Tn=0;function In(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function Sn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Cn(t)}function Cn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=En.prototype,r.open=function(t,e){if(this.readyState!=Tn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Cn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||h).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Sn(this)),this.readyState=Tn},r.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Cn(this)),this.g&&(this.readyState=3,Cn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;In(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))},r.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sn(this):Cn(this),3==this.readyState&&In(this)}},r.Za=function(t){this.g&&(this.response=this.responseText=t,Sn(this))},r.Ya=function(t){this.g&&(this.response=t,Sn(this))},r.ka=function(){this.g&&Sn(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(En.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var kn=h.JSON.parse;function An(t){bt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=On,this.L=this.M=!1}b(An,bt);var On="",Rn=/^https?$/i,xn=["POST","PUT"];function Nn(t){return F&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Dn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Pn(t),Ln(t)}function Pn(t){t.F||(t.F=!0,Et(t,"complete"),Et(t,"error"))}function Mn(t){if(t.h&&"undefined"!=typeof l&&(!t.C[1]||4!=Un(t)||2!=t.da()))if(t.v&&4==Un(t))jt(t.La,0,t);else if(Et(t,"readystatechange"),4==Un(t)){t.h=!1;try{const a=t.da();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.I).match(Le)[1]||null;!i&&h.self&&h.self.location&&(i=h.self.location.protocol.slice(0,-1)),r=!Rn.test(i?i.toLowerCase():"")}n=r}if(n)Et(t,"complete"),Et(t,"success");else{t.m=6;try{var s=2<Un(t)?t.g.statusText:""}catch(o){s=""}t.j=s+" ["+t.da()+"]",Pn(t)}}finally{Ln(t)}}}function Ln(t,e){if(t.g){Fn(t);const r=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Et(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Fn(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(h.clearTimeout(t.A),t.A=null)}function Un(t){return t.g?t.g.readyState:0}function jn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case On:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(Qr){return null}}function Vn(t){const e={};t=(t.g&&2<=Un(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(O(t[r]))continue;var n=Rt(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}et(e,(function(t){return t.join(", ")}))}function Bn(t){let e="";return tt(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function zn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Bn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):$e(t,e,n))}function $n(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function qn(t){this.Ga=0,this.j=[],this.l=new Kt,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=$n("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=$n("baseRetryDelayMs",5e3,t),this.hb=$n("retryDelaySeedMs",1e4,t),this.eb=$n("forwardChannelMaxRetries",2,t),this.xa=$n("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new cn(t&&t.concurrentRequestLimit),this.Ja=new vn,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hn(t){if(Gn(t),3==t.H){var e=t.W++,n=je(t.I);if($e(n,"SID",t.K),$e(n,"RID",e),$e(n,"TYPE","terminate"),Xn(t,n),e=new ve(t,t.l,e),e.L=2,e.v=qe(je(n)),n=!1,h.navigator&&h.navigator.sendBeacon)try{n=h.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&h.Image&&((new Image).src=e.v,n=!0),n||(e.g=ur(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ke(e)}ar(t)}function Kn(t){t.g&&(er(t),t.g.cancel(),t.g=null)}function Gn(t){Kn(t),t.u&&(h.clearTimeout(t.u),t.u=null),rr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&h.clearTimeout(t.m),t.m=null)}function Wn(t){if(!ln(t.i)&&!t.m){t.m=!0;var e=t.Na;Nt||Mt(),Dt||(Nt(),Dt=!0),Pt.add(e,t),t.C=0}}function Jn(t,e){return!(hn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=e.F.concat(t.j),!0):!(1==t.H||2==t.H||t.C>=(t.cb?0:t.eb))&&(t.m=oe(_(t.Na,t,e),sr(t,t.C)),t.C++,!0))}function Qn(t,e){var n;n=e?e.m:t.W++;const r=je(t.I);$e(r,"SID",t.K),$e(r,"RID",n),$e(r,"AID",t.V),Xn(t,r),t.o&&t.s&&zn(r,t.o,t.s),n=new ve(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Yn(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),dn(t.i,n),Ee(n,r,e)}function Xn(t,e){t.na&&tt(t.na,(function(t,n){$e(e,n,t)})),t.h&&Me({},(function(t,n){$e(e,n,t)}))}function Yn(t,e,n){n=Math.min(t.j.length,n);var r=t.h?_(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{yn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function Zn(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Nt||Mt(),Dt||(Nt(),Dt=!0),Pt.add(e,t),t.A=0}}function tr(t){return!(t.g||t.u||3<=t.A)&&(t.ba++,t.u=oe(_(t.Ma,t),sr(t,t.A)),t.A++,!0)}function er(t){null!=t.B&&(h.clearTimeout(t.B),t.B=null)}function nr(t){t.g=new ve(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=je(t.wa);$e(e,"RID","rpc"),$e(e,"SID",t.K),$e(e,"AID",t.V),$e(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&$e(e,"TO",t.qa),$e(e,"TYPE","xmlhttp"),Xn(t,e),t.o&&t.s&&zn(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=qe(je(e)),n.s=null,n.S=!0,Te(n,t)}function rr(t){null!=t.v&&(h.clearTimeout(t.v),t.v=null)}function ir(t,e){var n=null;if(t.g==e){rr(t),er(t),t.g=null;var r=2}else{if(!fn(t.i,e))return;n=e.F,pn(t.i,e),r=1}if(0!=t.H)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=te(),Et(r,new se(r,n)),Wn(t)}else Zn(t);else if(i=e.o,3==i||0==i&&0<e.ca||!(1==r&&Jn(t,e)||2==r&&tr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}function sr(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function or(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=_(t.pb,t);n||(n=new Ue("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Ve(n,"https"),qe(n)),_n(n.toString(),r)}else ie(2);t.H=0,t.h&&t.h.za(e),ar(t),Gn(t)}function ar(t){if(t.H=0,t.ma=[],t.h){const e=mn(t.i);0==e.length&&0==t.j.length||(C(t.ma,e),C(t.ma,t.j),t.i.i.length=0,S(t.j),t.j.length=0),t.h.ya()}}function cr(t,e,n){var r=n instanceof Ue?je(n):new Ue(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Be(r,r.m);else{var i=h.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Ue(null);r&&Ve(s,r),e&&(s.g=e),i&&Be(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&$e(r,n,e),$e(r,"VER",t.ra),Xn(t,r),r}function ur(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new An(new bn({ob:!0})):new An(t.va),e.Oa(t.J),e}function lr(){}function hr(){if(F&&!(10<=Number(G)))throw Error("Environmental error: no available transport.")}function fr(t,e){bt.call(this),this.g=new qn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!O(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!O(e)&&(this.g.F=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new mr(this)}function dr(t){pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function pr(){me.call(this),this.status=1}function mr(t){this.g=t}function gr(){this.blockSize=-1}function vr(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function yr(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function _r(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}r=An.prototype,r.Oa=function(t){this.M=t},r.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():fe.g(),this.C=this.u?le(this.u):le(fe),this.g.onreadystatechange=_(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){return void Dn(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=h.FormData&&t instanceof h.FormData,!(0<=I(xn,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Fn(this),0<this.B&&((this.L=Nn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.ua,this)):this.A=jt(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Dn(this,s)}},r.ua=function(){"undefined"!=typeof l&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Et(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Et(this,"complete"),Et(this,"abort"),Ln(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ln(this,!0)),An.$.N.call(this)},r.La=function(){this.s||(this.G||this.v||this.l?Mn(this):this.kb())},r.kb=function(){Mn(this)},r.isActive=function(){return!!this.g},r.da=function(){try{return 2<Un(this)?this.g.status:-1}catch(t){return-1}},r.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),kn(e)}},r.Ia=function(){return this.m},r.Sa=function(){return"string"===typeof this.j?this.j:String(this.j)},r=qn.prototype,r.ra=8,r.H=1,r.Na=function(t){if(this.m)if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new ve(this,this.l,t);let s=this.s;if(this.U&&(s?(s=nt(s),it(s,this.U)):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){var r=this.j[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Yn(this,i,e),n=je(this.I),$e(n,"RID",t),$e(n,"CVER",22),this.F&&$e(n,"X-HTTP-Session-Id",this.F),Xn(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(Bn(s)))+"&"+e:this.o&&zn(n,this.o,s)),dn(this.i,i),this.bb&&$e(n,"TYPE","init"),this.P?($e(n,"$req",e),$e(n,"SID","null"),i.aa=!0,Ee(i,n,null)):Ee(i,n,e),this.H=2}}else 3==this.H&&(t?Qn(this,t):0==this.j.length||ln(this.i)||Qn(this))},r.Ma=function(){if(this.u=null,nr(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=oe(_(this.jb,this),t)}},r.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ie(10),Kn(this),nr(this))},r.ib=function(){null!=this.v&&(this.v=null,Kn(this),tr(this),ie(19))},r.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ie(2)):(this.l.info("Failed to ping google.com"),ie(1))},r.isActive=function(){return!!this.h&&this.h.isActive(this)},r=lr.prototype,r.Ba=function(){},r.Aa=function(){},r.za=function(){},r.ya=function(){},r.isActive=function(){return!0},r.Va=function(){},hr.prototype.g=function(t,e){return new fr(t,e)},b(fr,bt),fr.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ie(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=cr(t,null,t.Y),Wn(t)},fr.prototype.close=function(){Hn(this.g)},fr.prototype.u=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=It(t),t=n);e.j.push(new an(e.fb++,t)),3==e.H&&Wn(e)},fr.prototype.N=function(){this.g.h=null,delete this.j,Hn(this.g),delete this.g,fr.$.N.call(this)},b(dr,pe),b(pr,me),b(mr,lr),mr.prototype.Ba=function(){Et(this.g,"a")},mr.prototype.Aa=function(t){Et(this.g,new dr(t))},mr.prototype.za=function(t){Et(this.g,new pr)},mr.prototype.ya=function(){Et(this.g,"b")},b(vr,gr),vr.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},vr.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)yr(this,t,s),s+=this.blockSize;if("string"===typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){yr(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){yr(this,r),i=0;break}}this.h=i,this.i+=e},vr.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var wr={};function br(t){return-128<=t&&128>t?D(t,(function(t){return new _r([0|t],0>t?-1:0)})):new _r([0|t],0>t?-1:0)}function Er(t){if(isNaN(t)||!isFinite(t))return Sr;if(0>t)return Rr(Er(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Ir;return new _r(e,0)}function Tr(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return Rr(Tr(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Er(Math.pow(e,8)),r=Sr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=Er(Math.pow(e,s)),r=r.R(s).add(Er(o))):(r=r.R(n),r=r.add(Er(o)))}return r}var Ir=4294967296,Sr=br(0),Cr=br(1),kr=br(16777216);function Ar(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function Or(t){return-1==t.h}function Rr(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _r(n,~t.h).add(Cr)}function xr(t,e){return t.add(Rr(e))}function Nr(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Dr(t,e){this.g=t,this.h=e}function Pr(t,e){if(Ar(e))throw Error("division by zero");if(Ar(t))return new Dr(Sr,Sr);if(Or(t))return e=Pr(Rr(t),e),new Dr(Rr(e.g),Rr(e.h));if(Or(e))return e=Pr(t,Rr(e)),new Dr(Rr(e.g),e.h);if(30<t.g.length){if(Or(t)||Or(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Cr,r=e;0>=r.X(t);)n=Mr(n),r=Mr(r);var i=Lr(n,1),s=Lr(r,1);for(r=Lr(r,2),n=Lr(n,2);!Ar(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Lr(r,1),n=Lr(n,1)}return e=xr(t,i.R(e)),new Dr(i,e)}for(i=Sr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=Er(n),o=s.R(e);Or(o)||0<o.X(t);)n-=r,s=Er(n),o=s.R(e);Ar(s)&&(s=Cr),i=i.add(s),t=xr(t,o)}return new Dr(i,t)}function Mr(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _r(n,t.h)}function Lr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new _r(i,t.h)}r=_r.prototype,r.ea=function(){if(Or(this))return-Rr(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Ir+r)*e,e*=Ir}return t},r.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Ar(this))return"0";if(Or(this))return"-"+Rr(this).toString(t);for(var e=Er(Math.pow(t,6)),n=this,r="";;){var i=Pr(n,e).g;n=xr(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,Ar(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},r.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},r.X=function(t){return t=xr(this,t),Or(t)?-1:Ar(t)?0:1},r.abs=function(){return Or(this)?Rr(this):this},r.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new _r(n,-2147483648&n[n.length-1]?-1:0)},r.R=function(t){if(Ar(this)||Ar(t))return Sr;if(Or(this))return Or(t)?Rr(this).R(Rr(t)):Rr(Rr(this).R(t));if(Or(t))return Rr(this.R(Rr(t)));if(0>this.X(kr)&&0>t.X(kr))return Er(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,c=65535&t.D(i);n[2*r+2*i]+=o*c,Nr(n,2*r+2*i),n[2*r+2*i+1]+=s*c,Nr(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nr(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nr(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _r(n,0)},r.gb=function(t){return Pr(this,t).h},r.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _r(n,this.h&t.h)},r.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _r(n,this.h|t.h)},r.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _r(n,this.h^t.h)},hr.prototype.createWebChannel=hr.prototype.g,fr.prototype.send=fr.prototype.u,fr.prototype.open=fr.prototype.m,fr.prototype.close=fr.prototype.close,ae.NO_ERROR=0,ae.TIMEOUT=8,ae.HTTP_ERROR=6,ce.COMPLETE="complete",he.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",bt.prototype.listen=bt.prototype.O,An.prototype.listenOnce=An.prototype.P,An.prototype.getLastError=An.prototype.Sa,An.prototype.getLastErrorCode=An.prototype.Ia,An.prototype.getStatus=An.prototype.da,An.prototype.getResponseJson=An.prototype.Wa,An.prototype.getResponseText=An.prototype.ja,An.prototype.send=An.prototype.ha,An.prototype.setWithCredentials=An.prototype.Oa,vr.prototype.digest=vr.prototype.l,vr.prototype.reset=vr.prototype.reset,vr.prototype.update=vr.prototype.j,_r.prototype.add=_r.prototype.add,_r.prototype.multiply=_r.prototype.R,_r.prototype.modulo=_r.prototype.gb,_r.prototype.compare=_r.prototype.X,_r.prototype.toNumber=_r.prototype.ea,_r.prototype.toString=_r.prototype.toString,_r.prototype.getBits=_r.prototype.D,_r.fromNumber=Er,_r.fromString=Tr;var Fr=u.createWebChannelTransport=function(){return new hr},Ur=u.getStatEventTarget=function(){return te()},jr=u.ErrorCode=ae,Vr=u.EventType=ce,Br=u.Event=Yt,zr=u.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},$r=u.FetchXmlHttpFactory=bn,qr=u.WebChannel=he,Hr=u.XhrIo=An,Kr=u.Md5=vr,Gr=u.Integer=_r;const Wr="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Jr.UNAUTHENTICATED=new Jr(null),Jr.GOOGLE_CREDENTIALS=new Jr("google-credentials-uid"),Jr.FIRST_PARTY=new Jr("first-party-uid"),Jr.MOCK_USER=new Jr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Qr="10.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new o.Yd("@firebase/firestore");function Yr(){return Xr.logLevel}function Zr(t,...e){if(Xr.logLevel<=o["in"].DEBUG){const n=e.map(ni);Xr.debug(`Firestore (${Qr}): ${t}`,...n)}}function ti(t,...e){if(Xr.logLevel<=o["in"].ERROR){const n=e.map(ni);Xr.error(`Firestore (${Qr}): ${t}`,...n)}}function ei(t,...e){if(Xr.logLevel<=o["in"].WARN){const n=e.map(ni);Xr.warn(`Firestore (${Qr}): ${t}`,...n)}}function ni(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t="Unexpected state"){const e=`FIRESTORE (${Qr}) INTERNAL ASSERTION FAILED: `+t;throw ti(e),new Error(e)}function ii(t,e){t||ri()}function si(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ai extends a.ZR{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class li{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(Jr.UNAUTHENTICATED)))}shutdown(){}}class hi{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class fi{constructor(t){this.t=t,this.currentUser=Jr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new ci;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ci,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{Zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(Zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ci)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(Zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(ii("string"==typeof e.accessToken),new ui(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return ii(null===t||"string"==typeof t),new Jr(t)}}class di{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=Jr.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class pi{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new di(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(Jr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class mi{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gi{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&Zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,Zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{Zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):Zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(ii("string"==typeof t.token),this.R=t.token,new mi(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function vi(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{static V(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=vi(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function _i(t,e){return t<e?-1:t>e?1:0}function wi(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bi{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new ai(oi.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new ai(oi.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return bi.fromMillis(Date.now())}static fromDate(t){return bi.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new bi(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?_i(this.nanoseconds,t.nanoseconds):_i(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(t){this.timestamp=t}static fromTimestamp(t){return new Ei(t)}static min(){return new Ei(new bi(0,0))}static max(){return new Ei(new bi(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e,n){void 0===e?e=0:e>t.length&&ri(),void 0===n?n=t.length-e:n>t.length-e&&ri(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===Ti.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ti?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Ii extends Ti{construct(t,e,n){return new Ii(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new ai(oi.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new Ii(e)}static emptyPath(){return new Ii([])}}const Si=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ci extends Ti{construct(t,e,n){return new Ci(t,e,n)}static isValidIdentifier(t){return Si.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ci.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new Ci(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new ai(oi.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new ai(oi.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new ai(oi.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new ai(oi.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ci(e)}static emptyPath(){return new Ci([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(t){this.path=t}static fromPath(t){return new ki(Ii.fromString(t))}static fromName(t){return new ki(Ii.fromString(t).popFirst(5))}static empty(){return new ki(Ii.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===Ii.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return Ii.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ki(new Ii(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}Ai.UNKNOWN_ID=-1;function Oi(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=Ei.fromTimestamp(1e9===r?new bi(n+1,0):new bi(n,r));return new xi(i,ki.empty(),e)}function Ri(t){return new xi(t.readTime,t.key,-1)}class xi{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new xi(Ei.min(),ki.empty(),-1)}static max(){return new xi(Ei.max(),ki.empty(),-1)}}function Ni(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=ki.comparator(t.documentKey,e.documentKey),0!==n?n:_i(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Pi{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mi(t){if(t.code!==oi.FAILED_PRECONDITION||t.message!==Di)throw t;Zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&ri(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Li(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Li?e:Li.resolve(e)}catch(t){return Li.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Li.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Li.reject(e)}static resolve(t){return new Li(((e,n)=>{e(t)}))}static reject(t){return new Li(((e,n)=>{n(t)}))}static waitFor(t){return new Li(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Li.resolve(!1);for(const n of t)e=e.next((t=>t?Li.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Li(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Li(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ui{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.oe(t),this._e=t=>e.writeSequenceNumber(t))}oe(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this._e&&this._e(t),t}}function ji(t){return null==t}function Vi(t){return 0===t&&1/t==-1/0}Ui.ae=-1;const Bi=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],zi=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],$i=zi;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function qi(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Ki(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(t,e){this.comparator=t,this.root=e||Ji.EMPTY}insert(t,e){return new Gi(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ji.BLACK,null,null))}remove(t){return new Gi(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ji.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Wi(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Wi(this.root,t,this.comparator,!1)}getReverseIterator(){return new Wi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Wi(this.root,t,this.comparator,!0)}}class Wi{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ji{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ji.RED,this.left=null!=r?r:Ji.EMPTY,this.right=null!=i?i:Ji.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ji(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ji.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ji.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ji.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ji.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ri();if(this.right.isRed())throw ri();const t=this.left.check();if(t!==this.right.check())throw ri();return t+(this.isRed()?0:1)}}Ji.EMPTY=null,Ji.RED=!0,Ji.BLACK=!1,Ji.EMPTY=new class{constructor(){this.size=0}get key(){throw ri()}get value(){throw ri()}get color(){throw ri()}get left(){throw ri()}get right(){throw ri()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ji(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qi{constructor(t){this.comparator=t,this.data=new Gi(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xi(this.data.getIterator())}getIteratorFrom(t){return new Xi(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof Qi))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new Qi(this.comparator);return e.data=t,e}}class Xi{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Yi{constructor(t){this.fields=t,t.sort(Ci.comparator)}static empty(){return new Yi([])}unionWith(t){let e=new Qi(Ci.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Yi(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return wi(this.fields,t.fields,((t,e)=>t.isEqual(e)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ts{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Zi("Invalid base64 string: "+t):t}}(t);return new ts(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ts(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return _i(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ts.EMPTY_BYTE_STRING=new ts("");const es=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ns(t){if(ii(!!t),"string"==typeof t){let e=0;const n=es.exec(t);if(ii(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:rs(t.seconds),nanos:rs(t.nanos)}}function rs(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function is(t){return"string"==typeof t?ts.fromBase64String(t):ts.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ss(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function os(t){const e=t.mapValue.fields.__previous_value__;return ss(e)?os(e):e}function as(t){const e=ns(t.mapValue.fields.__local_write_time__.timestampValue);return new bi(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class us{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new us("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof us&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function hs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ss(t)?4:Is(t)?9007199254740991:10:ri()}function fs(t,e){if(t===e)return!0;const n=hs(t);if(n!==hs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return as(t).isEqual(as(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ns(t.timestampValue),r=ns(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return is(t.bytesValue).isEqual(is(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return rs(t.geoPointValue.latitude)===rs(e.geoPointValue.latitude)&&rs(t.geoPointValue.longitude)===rs(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return rs(t.integerValue)===rs(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=rs(t.doubleValue),r=rs(e.doubleValue);return n===r?Vi(n)===Vi(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],fs);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(qi(n)!==qi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!fs(n[i],r[i])))return!1;return!0}(t,e);default:return ri()}}function ds(t,e){return void 0!==(t.values||[]).find((t=>fs(t,e)))}function ps(t,e){if(t===e)return 0;const n=hs(t),r=hs(e);if(n!==r)return _i(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _i(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=rs(t.integerValue||t.doubleValue),r=rs(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return ms(t.timestampValue,e.timestampValue);case 4:return ms(as(t),as(e));case 5:return _i(t.stringValue,e.stringValue);case 6:return function(t,e){const n=is(t),r=is(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=_i(n[i],r[i]);if(0!==t)return t}return _i(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=_i(rs(t.latitude),rs(e.latitude));return 0!==n?n:_i(rs(t.longitude),rs(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=ps(n[i],r[i]);if(t)return t}return _i(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===ls.mapValue&&e===ls.mapValue)return 0;if(t===ls.mapValue)return 1;if(e===ls.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=_i(r[o],s[o]);if(0!==t)return t;const e=ps(n[r[o]],i[s[o]]);if(0!==e)return e}return _i(r.length,s.length)}(t.mapValue,e.mapValue);default:throw ri()}}function ms(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return _i(t,e);const n=ns(t),r=ns(e),i=_i(n.seconds,r.seconds);return 0!==i?i:_i(n.nanos,r.nanos)}function gs(t){return vs(t)}function vs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ns(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(t){return is(t).toBase64()}(t.bytesValue):"referenceValue"in t?function(t){return ki.fromName(t).toString()}(t.referenceValue):"geoPointValue"in t?function(t){return`geo(${t.latitude},${t.longitude})`}(t.geoPointValue):"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=vs(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${vs(t.fields[i])}`;return n+"}"}(t.mapValue):ri()}function ys(t){return!!t&&"integerValue"in t}function _s(t){return!!t&&"arrayValue"in t}function ws(t){return!!t&&"nullValue"in t}function bs(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Es(t){return!!t&&"mapValue"in t}function Ts(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hi(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Ts(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ts(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Is(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(t){this.value=t}static empty(){return new Ss({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Es(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Ts(e)}setAll(t){let e=Ci.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Ts(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());Es(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return fs(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];Es(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){Hi(e,((e,n)=>t[e]=n));for(const r of n)delete t[r]}clone(){return new Ss(Ts(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cs{constructor(t,e,n,r,i,s,o){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=o}static newInvalidDocument(t){return new Cs(t,0,Ei.min(),Ei.min(),Ei.min(),Ss.empty(),0)}static newFoundDocument(t,e,n,r){return new Cs(t,1,e,Ei.min(),n,r,0)}static newNoDocument(t,e){return new Cs(t,2,e,Ei.min(),Ei.min(),Ss.empty(),0)}static newUnknownDocument(t,e){return new Cs(t,3,e,Ei.min(),Ei.min(),Ss.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(Ei.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ss.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ss.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ei.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Cs&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Cs(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(t,e){this.position=t,this.inclusive=e}}function As(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?ki.comparator(ki.fromName(o.referenceValue),n.key):ps(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Os(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!fs(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,e="asc"){this.field=t,this.dir=e}}function xs(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{}class Ds extends Ns{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.createKeyFieldInFilter(t,e,n):new Bs(t,e,n):"array-contains"===e?new Hs(t,n):"in"===e?new Ks(t,n):"not-in"===e?new Gs(t,n):"array-contains-any"===e?new Ws(t,n):new Ds(t,e,n)}static createKeyFieldInFilter(t,e,n){return"in"===e?new zs(t,n):new $s(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.matchesComparison(ps(e,this.value)):null!==e&&hs(this.value)===hs(e)&&this.matchesComparison(ps(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return ri()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ps extends Ns{constructor(t,e){super(),this.filters=t,this.op=e,this.ce=null}static create(t,e){return new Ps(t,e)}matches(t){return Ms(this)?void 0===this.filters.find((e=>!e.matches(t))):void 0!==this.filters.find((e=>e.matches(t)))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.le((t=>t.isInequality()));return null!==t?t.field:null}le(t){for(const e of this.getFlattenedFilters())if(t(e))return e;return null}}function Ms(t){return"and"===t.op}function Ls(t){return Fs(t)&&Ms(t)}function Fs(t){for(const e of t.filters)if(e instanceof Ps)return!1;return!0}function Us(t){if(t instanceof Ds)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Ls(t))return t.filters.map((t=>Us(t))).join(",");{const e=t.filters.map((t=>Us(t))).join(",");return`${t.op}(${e})`}}function js(t,e){return t instanceof Ds?function(t,e){return e instanceof Ds&&t.op===e.op&&t.field.isEqual(e.field)&&fs(t.value,e.value)}(t,e):t instanceof Ps?function(t,e){return e instanceof Ps&&t.op===e.op&&t.filters.length===e.filters.length&&t.filters.reduce(((t,n,r)=>t&&js(n,e.filters[r])),!0)}(t,e):void ri()}function Vs(t){return t instanceof Ds?function(t){return`${t.field.canonicalString()} ${t.op} ${gs(t.value)}`}(t):t instanceof Ps?function(t){return t.op.toString()+" {"+t.getFilters().map(Vs).join(" ,")+"}"}(t):"Filter"}class Bs extends Ds{constructor(t,e,n){super(t,e,n),this.key=ki.fromName(n.referenceValue)}matches(t){const e=ki.comparator(t.key,this.key);return this.matchesComparison(e)}}class zs extends Ds{constructor(t,e){super(t,"in",e),this.keys=qs("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class $s extends Ds{constructor(t,e){super(t,"not-in",e),this.keys=qs("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function qs(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>ki.fromName(t.referenceValue)))}class Hs extends Ds{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return _s(e)&&ds(e.arrayValue,this.value)}}class Ks extends Ds{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ds(this.value.arrayValue,e)}}class Gs extends Ds{constructor(t,e){super(t,"not-in",e)}matches(t){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ds(this.value.arrayValue,e)}}class Ws extends Ds{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!_s(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>ds(this.value.arrayValue,t)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.he=null}}function Qs(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Js(t,e,n,r,i,s,o)}function Xs(t){const e=si(t);if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>Us(t))).join(","),t+="|ob:",t+=e.orderBy.map((t=>function(t){return t.field.canonicalString()+t.dir}(t))).join(","),ji(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>gs(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>gs(t))).join(",")),e.he=t}return e.he}function Ys(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!xs(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!js(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Os(t.startAt,e.startAt)&&Os(t.endAt,e.endAt)}function Zs(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class to{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function eo(t,e,n,r,i,s,o,a){return new to(t,e,n,r,i,s,o,a)}function no(t){return new to(t)}function ro(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}function io(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function so(t){for(const e of t.filters){const t=e.getFirstInequalityField();if(null!==t)return t}return null}function oo(t){return null!==t.collectionGroup}function ao(t){const e=si(t);if(null===e.Pe){e.Pe=[];const t=so(e),n=io(e);if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new Rs(t)),e.Pe.push(new Rs(Ci.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new Rs(Ci.keyField(),t))}}}return e.Pe}function co(t){const e=si(t);if(!e.Ie)if("F"===e.limitType)e.Ie=Qs(e.path,e.collectionGroup,ao(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ao(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Rs(i.field,e))}const n=e.endAt?new ks(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ks(e.startAt.position,e.startAt.inclusive):null;e.Ie=Qs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.Ie}function uo(t,e,n){return new to(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lo(t,e){return Ys(co(t),co(e))&&t.limitType===e.limitType}function ho(t){return`${Xs(co(t))}|lt:${t.limitType}`}function fo(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>Vs(t))).join(", ")}]`),ji(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t))).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>gs(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>gs(t))).join(",")),`Target(${e})`}(co(t))}; limitType=${t.limitType})`}function po(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):ki.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of ao(t))if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!function(t,e,n){const r=As(t,e,n);return t.inclusive?r<=0:r<0}(t.startAt,ao(t),e))&&!(t.endAt&&!function(t,e,n){const r=As(t,e,n);return t.inclusive?r>=0:r>0}(t.endAt,ao(t),e))}(t,e)}function mo(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function go(t){return(e,n)=>{let r=!1;for(const i of ao(t)){const t=vo(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function vo(t,e,n){const r=t.field.isKeyField()?ki.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?ps(r,i):ri()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ri()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){Hi(this.inner,((e,n)=>{for(const[r,i]of n)t(r,i)}))}isEmpty(){return Ki(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Gi(ki.comparator);function wo(){return _o}const bo=new Gi(ki.comparator);function Eo(...t){let e=bo;for(const n of t)e=e.insert(n.key,n);return e}function To(t){let e=bo;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function Io(){return Co()}function So(){return Co()}function Co(){return new yo((t=>t.toString()),((t,e)=>t.isEqual(e)))}new Gi(ki.comparator);const ko=new Qi(ki.comparator);function Ao(...t){let e=ko;for(const n of t)e=e.add(n);return e}const Oo=new Qi(_i);function Ro(){return Oo}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Vi(e)?"-0":e}}function No(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(){this._=void 0}}function Po(t,e,n){return t instanceof Fo?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&ss(e)&&(e=os(e)),e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof Uo?jo(t,e):t instanceof Vo?Bo(t,e):function(t,e){const n=Lo(t,e),r=$o(n)+$o(t.Te);return ys(n)&&ys(t.Te)?No(r):xo(t.serializer,r)}(t,e)}function Mo(t,e,n){return t instanceof Uo?jo(t,e):t instanceof Vo?Bo(t,e):n}function Lo(t,e){return t instanceof zo?function(t){return ys(t)||function(t){return!!t&&"doubleValue"in t}(t)}(e)?e:{integerValue:0}:null}class Fo extends Do{}class Uo extends Do{constructor(t){super(),this.elements=t}}function jo(t,e){const n=qo(e);for(const r of t.elements)n.some((t=>fs(t,r)))||n.push(r);return{arrayValue:{values:n}}}class Vo extends Do{constructor(t){super(),this.elements=t}}function Bo(t,e){let n=qo(e);for(const r of t.elements)n=n.filter((t=>!fs(t,r)));return{arrayValue:{values:n}}}class zo extends Do{constructor(t,e){super(),this.serializer=t,this.Te=e}}function $o(t){return rs(t.integerValue||t.doubleValue)}function qo(t){return _s(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof Uo&&e instanceof Uo||t instanceof Vo&&e instanceof Vo?wi(t.elements,e.elements,fs):t instanceof zo&&e instanceof zo?fs(t.Te,e.Te):t instanceof Fo&&e instanceof Fo}(t.transform,e.transform)}class Ko{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ko}static exists(t){return new Ko(void 0,t)}static updateTime(t){return new Ko(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Go(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Wo{}function Jo(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new ia(t.key,Ko.none()):new Zo(t.key,t.data,Ko.none());{const n=t.data,r=Ss.empty();let i=new Qi(Ci.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new ta(t.key,r,new Yi(i.toArray()),Ko.none())}}function Qo(t,e,n){t instanceof Zo?function(t,e,n){const r=t.value.clone(),i=na(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof ta?function(t,e,n){if(!Go(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=na(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(ea(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Xo(t,e,n,r){return t instanceof Zo?function(t,e,n,r){if(!Go(t.precondition,e))return n;const i=t.value.clone(),s=ra(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof ta?function(t,e,n,r){if(!Go(t.precondition,e))return n;const i=ra(t.fieldTransforms,r,e),s=e.data;return s.setAll(ea(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):function(t,e,n){return Go(t.precondition,e)?(e.convertToNoDocument(e.version).setHasLocalMutations(),null):n}(t,e,n)}function Yo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&wi(t,e,((t,e)=>Ho(t,e)))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Zo extends Wo{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ta extends Wo{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ea(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function na(t,e,n){const r=new Map;ii(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Mo(o,a,n[i]))}return r}function ra(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Po(t,s,e))}return r}class ia extends Wo{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sa{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&Qo(e,t,n[r])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=Xo(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=So();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Jo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(Ei.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),Ao())}isEqual(t){return this.batchId===t.batchId&&wi(this.mutations,t.mutations,((t,e)=>Yo(t,e)))&&wi(this.baseMutations,t.baseMutations,((t,e)=>Yo(t,e)))}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oa{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class aa{constructor(t,e){this.count=t,this.unchangedNames=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ca,ua;function la(t){if(void 0===t)return ti("GRPC error has no .code"),oi.UNKNOWN;switch(t){case ca.OK:return oi.OK;case ca.CANCELLED:return oi.CANCELLED;case ca.UNKNOWN:return oi.UNKNOWN;case ca.DEADLINE_EXCEEDED:return oi.DEADLINE_EXCEEDED;case ca.RESOURCE_EXHAUSTED:return oi.RESOURCE_EXHAUSTED;case ca.INTERNAL:return oi.INTERNAL;case ca.UNAVAILABLE:return oi.UNAVAILABLE;case ca.UNAUTHENTICATED:return oi.UNAUTHENTICATED;case ca.INVALID_ARGUMENT:return oi.INVALID_ARGUMENT;case ca.NOT_FOUND:return oi.NOT_FOUND;case ca.ALREADY_EXISTS:return oi.ALREADY_EXISTS;case ca.PERMISSION_DENIED:return oi.PERMISSION_DENIED;case ca.FAILED_PRECONDITION:return oi.FAILED_PRECONDITION;case ca.ABORTED:return oi.ABORTED;case ca.OUT_OF_RANGE:return oi.OUT_OF_RANGE;case ca.UNIMPLEMENTED:return oi.UNIMPLEMENTED;case ca.DATA_LOSS:return oi.DATA_LOSS;default:return ri()}}(ua=ca||(ca={}))[ua.OK=0]="OK",ua[ua.CANCELLED=1]="CANCELLED",ua[ua.UNKNOWN=2]="UNKNOWN",ua[ua.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ua[ua.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ua[ua.NOT_FOUND=5]="NOT_FOUND",ua[ua.ALREADY_EXISTS=6]="ALREADY_EXISTS",ua[ua.PERMISSION_DENIED=7]="PERMISSION_DENIED",ua[ua.UNAUTHENTICATED=16]="UNAUTHENTICATED",ua[ua.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ua[ua.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ua[ua.ABORTED=10]="ABORTED",ua[ua.OUT_OF_RANGE=11]="OUT_OF_RANGE",ua[ua.UNIMPLEMENTED=12]="UNIMPLEMENTED",ua[ua.INTERNAL=13]="INTERNAL",ua[ua.UNAVAILABLE=14]="UNAVAILABLE",ua[ua.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ha{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return fa}static getOrCreateInstance(){return null===fa&&(fa=new ha),fa}onExistenceFilterMismatch(t){const e=Symbol();return this.onExistenceFilterMismatchCallbacks.set(e,t),()=>this.onExistenceFilterMismatchCallbacks.delete(e)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach((e=>e(t)))}}let fa=null;
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da(){return new TextEncoder}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=new Gr([4294967295,4294967295],0);function ma(t){const e=da().encode(t),n=new Kr;return n.update(e),new Uint8Array(n.digest())}function ga(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([i,s],0)]}class va{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new ya(`Invalid padding: ${e}`);if(n<0)throw new ya(`Invalid hash count: ${n}`);if(t.length>0&&0===this.hashCount)throw new ya(`Invalid hash count: ${n}`);if(0===t.length&&0!==e)throw new ya(`Invalid padding when bitmap length is 0: ${e}`);this.de=8*t.length-e,this.Ae=Gr.fromNumber(this.de)}Re(t,e,n){let r=t.add(e.multiply(Gr.fromNumber(n)));return 1===r.compare(pa)&&(r=new Gr([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Ae).toNumber()}Ve(t){return 0!=(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(0===this.de)return!1;const e=ma(t),[n,r]=ga(e);for(let i=0;i<this.hashCount;i++){const t=this.Re(n,r,i);if(!this.Ve(t))return!1}return!0}static create(t,e,n){const r=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),s=new va(i,r,e);return n.forEach((t=>s.insert(t))),s}insert(t){if(0===this.de)return;const e=ma(t),[n,r]=ga(e);for(let i=0;i<this.hashCount;i++){const t=this.Re(n,r,i);this.me(t)}}me(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class ya extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const r=new Map;return r.set(t,wa.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new _a(Ei.min(),r,new Gi(_i),wo(),Ao())}}class wa{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new wa(n,e,Ao(),Ao(),Ao())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t,e,n,r){this.fe=t,this.removedTargetIds=e,this.key=n,this.ge=r}}class Ea{constructor(t,e){this.targetId=t,this.pe=e}}class Ta{constructor(t,e,n=ts.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Ia{constructor(){this.ye=0,this.we=ka(),this.Se=ts.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return 0!==this.ye}get Ce(){return this.De}Fe(t){t.approximateByteSize()>0&&(this.De=!0,this.Se=t)}Me(){let t=Ao(),e=Ao(),n=Ao();return this.we.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:ri()}})),new wa(this.Se,this.be,t,e,n)}xe(){this.De=!1,this.we=ka()}Oe(t,e){this.De=!0,this.we=this.we.insert(t,e)}Ne(t){this.De=!0,this.we=this.we.remove(t)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class Sa{constructor(t){this.qe=t,this.Qe=new Map,this.Ke=wo(),this.$e=Ca(),this.Ue=new Gi(_i)}We(t){for(const e of t.fe)t.ge&&t.ge.isFoundDocument()?this.Ge(e,t.ge):this.ze(e,t.key,t.ge);for(const e of t.removedTargetIds)this.ze(e,t.key,t.ge)}je(t){this.forEachTarget(t,(e=>{const n=this.He(e);switch(t.state){case 0:this.Je(e)&&n.Fe(t.resumeToken);break;case 1:n.Le(),n.ve||n.xe(),n.Fe(t.resumeToken);break;case 2:n.Le(),n.ve||this.removeTarget(e);break;case 3:this.Je(e)&&(n.ke(),n.Fe(t.resumeToken));break;case 4:this.Je(e)&&(this.Ye(e),n.Fe(t.resumeToken));break;default:ri()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Qe.forEach(((t,n)=>{this.Je(n)&&e(n)}))}Ze(t){var e,n;const r=t.targetId,i=t.pe.count,s=this.Xe(r);if(s){const o=s.target;if(Zs(o))if(0===i){const t=new ki(o.path);this.ze(r,t,Cs.newNoDocument(t,Ei.min()))}else ii(1===i);else{const s=this.et(r);if(s!==i){const i=this.tt(t,s);if(0!==i.status){this.Ye(r);const t=2===i.status?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(r,t)}null===(e=ha.instance)||void 0===e||e.notifyOnExistenceFilterMismatch(function(t,e,n,r){var i,s,o,a,c,u;const l={localCacheCount:n,existenceFilterCount:r.count},h=r.unchangedNames;return h&&(l.bloomFilter={applied:0===t,hashCount:null!==(i=null==h?void 0:h.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(a=null===(o=null===(s=null==h?void 0:h.bits)||void 0===s?void 0:s.bitmap)||void 0===o?void 0:o.length)&&void 0!==a?a:0,padding:null!==(u=null===(c=null==h?void 0:h.bits)||void 0===c?void 0:c.padding)&&void 0!==u?u:0},e&&(l.bloomFilter.mightContain=e)),l}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i.status,null!==(n=i.nt)&&void 0!==n?n:null,s,t.pe))}}}}tt(t,e){const{unchangedNames:n,count:r}=t.pe;if(!n||!n.bits)return{status:1};const{bits:{bitmap:i="",padding:s=0},hashCount:o=0}=n;let a,c;try{a=is(i).toUint8Array()}catch(t){if(t instanceof Zi)return ei("Decoding the base64 bloom filter in existence filter failed ("+t.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw t}try{c=new va(a,s,o)}catch(t){return ei(t instanceof ya?"BloomFilter error: ":"Applying bloom filter failed: ",t),{status:1}}const u=t=>{const e=this.qe.rt();return c.mightContain(`projects/${e.projectId}/databases/${e.database}/documents/${t}`)};return 0===c.de?{status:1}:{status:r===e-this.it(t.targetId,u)?0:2,nt:u}}it(t,e){const n=this.qe.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{e(n.path.canonicalString())||(this.ze(t,n,null),r++)})),r}st(t){const e=new Map;this.Qe.forEach(((n,r)=>{const i=this.Xe(r);if(i){if(n.current&&Zs(i.target)){const e=new ki(i.target.path);null!==this.Ke.get(e)||this.ot(r,e)||this.ze(r,e,Cs.newNoDocument(e,t))}n.Ce&&(e.set(r,n.Me()),n.xe())}}));let n=Ao();this.$e.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Xe(t);return!e||"TargetPurposeLimboResolution"===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.Ke.forEach(((e,n)=>n.setReadTime(t)));const r=new _a(t,e,this.Ue,this.Ke,n);return this.Ke=wo(),this.$e=Ca(),this.Ue=new Gi(_i),r}Ge(t,e){if(!this.Je(t))return;const n=this.ot(t,e.key)?2:0;this.He(t).Oe(e.key,n),this.Ke=this.Ke.insert(e.key,e),this.$e=this.$e.insert(e.key,this._t(e.key).add(t))}ze(t,e,n){if(!this.Je(t))return;const r=this.He(t);this.ot(t,e)?r.Oe(e,1):r.Ne(e),this.$e=this.$e.insert(e,this._t(e).delete(t)),n&&(this.Ke=this.Ke.insert(e,n))}removeTarget(t){this.Qe.delete(t)}et(t){const e=this.He(t).Me();return this.qe.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Be(t){this.He(t).Be()}He(t){let e=this.Qe.get(t);return e||(e=new Ia,this.Qe.set(t,e)),e}_t(t){let e=this.$e.get(t);return e||(e=new Qi(_i),this.$e=this.$e.insert(t,e)),e}Je(t){const e=null!==this.Xe(t);return e||Zr("WatchChangeAggregator","Detected inactive target",t),e}Xe(t){const e=this.Qe.get(t);return e&&e.ve?null:this.qe.ut(t)}Ye(t){this.Qe.set(t,new Ia),this.qe.getRemoteKeysForTarget(t).forEach((e=>{this.ze(t,e,null)}))}ot(t,e){return this.qe.getRemoteKeysForTarget(t).has(e)}}function Ca(){return new Gi(ki.comparator)}function ka(){return new Gi(ki.comparator)}const Aa=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),Oa=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})(),Ra=(()=>{const t={and:"AND",or:"OR"};return t})();class xa{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Na(t,e){return t.useProto3Json||ji(e)?e:{value:e}}function Da(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Pa(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ma(t){return ii(!!t),Ei.fromTimestamp(function(t){const e=ns(t);return new bi(e.seconds,e.nanos)}(t))}function La(t,e){return function(t){return new Ii(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Fa(t){const e=Ii.fromString(t);return ii(ec(e)),e}function Ua(t,e){const n=Fa(e);if(n.get(1)!==t.databaseId.projectId)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new ai(oi.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new ki(za(n))}function ja(t,e){return La(t.databaseId,e)}function Va(t){const e=Fa(t);return 4===e.length?Ii.emptyPath():za(e)}function Ba(t){return new Ii(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function za(t){return ii(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function $a(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:ri()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.useProto3Json?(ii(void 0===e||"string"==typeof e),ts.fromBase64String(e||"")):(ii(void 0===e||e instanceof Uint8Array),ts.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?oi.UNKNOWN:la(t.code);return new ai(e,t.message||"")}(o);n=new Ta(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ua(t,r.document.name),s=Ma(r.document.updateTime),o=r.document.createTime?Ma(r.document.createTime):Ei.min(),a=new Ss({mapValue:{fields:r.document.fields}}),c=Cs.newFoundDocument(i,s,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];n=new ba(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ua(t,r.document),s=r.readTime?Ma(r.readTime):Ei.min(),o=Cs.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ba([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ua(t,r.document),s=r.removedTargetIds||[];n=new ba([],s,i,null)}else{if(!("filter"in e))return ri();{e.filter;const t=e.filter;t.targetId;const{count:r=0,unchangedNames:i}=t,s=new aa(r,i),o=t.targetId;n=new Ea(o,s)}}return n}function qa(t,e){return{documents:[ja(t,e.path)]}}function Ha(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=ja(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ja(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0!==t.length)return tc(Ps.create(t,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>function(t){return{field:Ya(t.field),direction:Ja(t.dir)}}(t)))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=Na(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(t){return{before:t.inclusive,values:t.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Ka(t){let e=Va(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ii(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function(t){const e=Wa(t);return e instanceof Ps&&Ls(e)?e.getFilters():[e]}(n.where));let o=[];n.orderBy&&(o=function(t){return t.map((t=>function(t){return new Rs(Za(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)))}(n.orderBy));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,ji(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new ks(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new ks(n,e)}(n.endAt)),eo(e,i,o,s,a,"F",c,u)}function Ga(t,e){const n=function(t){switch(t){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ri()}}(e.purpose);return null==n?null:{"goog-listen-tags":n}}function Wa(t){return void 0!==t.unaryFilter?function(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Za(t.unaryFilter.field);return Ds.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Za(t.unaryFilter.field);return Ds.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Za(t.unaryFilter.field);return Ds.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Za(t.unaryFilter.field);return Ds.create(i,"!=",{nullValue:"NULL_VALUE"});default:return ri()}}(t):void 0!==t.fieldFilter?function(t){return Ds.create(Za(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ri()}}(t.fieldFilter.op),t.fieldFilter.value)}(t):void 0!==t.compositeFilter?function(t){return Ps.create(t.compositeFilter.filters.map((t=>Wa(t))),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return ri()}}(t.compositeFilter.op))}(t):ri()}function Ja(t){return Aa[t]}function Qa(t){return Oa[t]}function Xa(t){return Ra[t]}function Ya(t){return{fieldPath:t.canonicalString()}}function Za(t){return Ci.fromServerFormat(t.fieldPath)}function tc(t){return t instanceof Ds?function(t){if("=="===t.op){if(bs(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NAN"}};if(ws(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(bs(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NAN"}};if(ws(t.value))return{unaryFilter:{field:Ya(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(t.field),op:Qa(t.op),value:t.value}}}(t):t instanceof Ps?function(t){const e=t.getFilters().map((t=>tc(t)));return 1===e.length?e[0]:{compositeFilter:{op:Xa(t.op),filters:e}}}(t):ri()}function ec(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(t,e,n,r,i=Ei.min(),s=Ei.min(),o=ts.EMPTY_BYTE_STRING,a=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(t){return new nc(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new nc(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new nc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new nc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t){this.ct=t}}function ic(t){const e=Ka({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?uo(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(rs(t.integerValue));else if("doubleValue"in t){const n=rs(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Vi(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){const n=t.timestampValue;this.Et(e,20),"string"==typeof n?e.At(n):(e.At(`${n.seconds||""}`),e.dt(n.nanos||0))}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(is(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?Is(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):ri()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const r of Object.keys(n))this.Rt(r,e),this.It(n[r],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const r of n)this.It(r,e)}gt(t,e){this.Et(e,37),ki.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}sc.bt=new sc;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class oc{constructor(){this.sn=new ac}addToCollectionParentIndex(t,e){return this.sn.add(e),Li.resolve()}getCollectionParents(t,e){return Li.resolve(this.sn.getEntries(e))}addFieldIndex(t,e){return Li.resolve()}deleteFieldIndex(t,e){return Li.resolve()}getDocumentsMatchingTarget(t,e){return Li.resolve(null)}getIndexType(t,e){return Li.resolve(0)}getFieldIndexes(t,e){return Li.resolve([])}getNextCollectionGroupToUpdate(t){return Li.resolve(null)}getMinOffset(t,e){return Li.resolve(xi.min())}getMinOffsetFromCollectionGroup(t,e){return Li.resolve(xi.min())}updateCollectionGroup(t,e,n){return Li.resolve()}updateIndexEntries(t,e){return Li.resolve()}}class ac{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Qi(Ii.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Qi(Ii.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class cc{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new cc(t,cc.DEFAULT_COLLECTION_PERCENTILE,cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cc.DEFAULT_COLLECTION_PERCENTILE=10,cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,cc.DEFAULT=new cc(41943040,cc.DEFAULT_COLLECTION_PERCENTILE,cc.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),cc.DISABLED=new cc(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class uc{constructor(t){this.Mn=t}next(){return this.Mn+=2,this.Mn}static xn(){return new uc(0)}static On(){return new uc(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lc{constructor(){this.changes=new yo((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Cs.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Li.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hc{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.remoteDocumentCache.getEntry(t,e)))).next((t=>(null!==n&&Xo(n.mutation,t,Yi.empty(),bi.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,Ao()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=Ao()){const r=Io();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=Eo();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=Io();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,Ao())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=wo();const s=Co(),o=function(){return Co()}();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof ta)?i=i.insert(e.key,e):void 0!==o?(s.set(e.key,o.mutation.getFieldMask()),Xo(o.mutation,e,o.mutation.getFieldMask(),bi.now())):s.set(e.key,Yi.empty())})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new hc(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=Co();let r=new Gi(((t,e)=>t-e)),i=Ao();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||Yi.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||Ao()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=So();c.forEach((t=>{if(!i.has(t)){const r=Jo(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Li.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return function(t){return ki.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):oo(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n)}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Li.resolve(Io());let o=-1,a=i;return s.next((e=>Li.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Li.resolve():this.remoteDocumentCache.getEntry(t,e).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,Ao()))).next((t=>({batchId:o,changes:To(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new ki(e)).next((t=>{let e=Eo();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=Eo();return this.indexManager.getCollectionParents(t,r).next((s=>Li.forEach(s,(s=>{const o=function(t,e){return new to(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,r)))).next((t=>{r.forEach(((e,n)=>{const r=n.getKey();null===t.get(r)&&(t=t.insert(r,Cs.newInvalidDocument(r)))}));let n=Eo();return t.forEach(((t,i)=>{const s=r.get(t);void 0!==s&&Xo(s.mutation,i,Yi.empty(),bi.now()),po(e,i)&&(n=n.insert(t,i))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(t){this.serializer=t,this.ar=new Map,this.ur=new Map}getBundleMetadata(t,e){return Li.resolve(this.ar.get(e))}saveBundleMetadata(t,e){return this.ar.set(e.id,function(t){return{id:t.id,version:t.version,createTime:Ma(t.createTime)}}(e)),Li.resolve()}getNamedQuery(t,e){return Li.resolve(this.ur.get(e))}saveNamedQuery(t,e){return this.ur.set(e.name,function(t){return{name:t.name,query:ic(t.bundledQuery),readTime:Ma(t.readTime)}}(e)),Li.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc{constructor(){this.overlays=new Gi(ki.comparator),this.cr=new Map}getOverlay(t,e){return Li.resolve(this.overlays.get(e))}getOverlays(t,e){const n=Io();return Li.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ht(t,e,r)})),Li.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.cr.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.cr.delete(n)),Li.resolve()}getOverlaysForCollection(t,e,n){const r=Io(),i=e.length+1,s=new ki(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Li.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new Gi(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=Io(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=Io(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((t,e)=>o.set(t,e))),o.size()>=r)break;return Li.resolve(o)}ht(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.cr.get(r.largestBatchId).delete(n.key);this.cr.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new oa(e,n));let i=this.cr.get(e);void 0===i&&(i=Ao(),this.cr.set(e,i)),this.cr.set(e,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(){this.lr=new Qi(gc.hr),this.Pr=new Qi(gc.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(t,e){const n=new gc(t,e);this.lr=this.lr.add(n),this.Pr=this.Pr.add(n)}Tr(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.Er(new gc(t,e))}dr(t,e){t.forEach((t=>this.removeReference(t,e)))}Ar(t){const e=new ki(new Ii([])),n=new gc(e,t),r=new gc(e,t+1),i=[];return this.Pr.forEachInRange([n,r],(t=>{this.Er(t),i.push(t.key)})),i}Rr(){this.lr.forEach((t=>this.Er(t)))}Er(t){this.lr=this.lr.delete(t),this.Pr=this.Pr.delete(t)}Vr(t){const e=new ki(new Ii([])),n=new gc(e,t),r=new gc(e,t+1);let i=Ao();return this.Pr.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new gc(t,0),n=this.lr.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class gc{constructor(t,e){this.key=t,this.mr=e}static hr(t,e){return ki.comparator(t.key,e.key)||_i(t.mr,e.mr)}static Ir(t,e){return _i(t.mr,e.mr)||ki.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.gr=1,this.pr=new Qi(gc.hr)}checkEmpty(t){return Li.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new sa(i,e,n,r);this.mutationQueue.push(s);for(const o of r)this.pr=this.pr.add(new gc(o.key,i)),this.indexManager.addToCollectionParentIndex(t,o.key.path.popLast());return Li.resolve(s)}lookupMutationBatch(t,e){return Li.resolve(this.yr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.wr(n),i=r<0?0:r;return Li.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Li.resolve(0===this.mutationQueue.length?-1:this.gr-1)}getAllMutationBatches(t){return Li.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new gc(e,0),r=new gc(e,Number.POSITIVE_INFINITY),i=[];return this.pr.forEachInRange([n,r],(t=>{const e=this.yr(t.mr);i.push(e)})),Li.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Qi(_i);return e.forEach((t=>{const e=new gc(t,0),r=new gc(t,Number.POSITIVE_INFINITY);this.pr.forEachInRange([e,r],(t=>{n=n.add(t.mr)}))})),Li.resolve(this.Sr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;ki.isDocumentKey(i)||(i=i.child(""));const s=new gc(new ki(i),0);let o=new Qi(_i);return this.pr.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.mr)),!0)}),s),Li.resolve(this.Sr(o))}Sr(t){const e=[];return t.forEach((t=>{const n=this.yr(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){ii(0===this.br(e.batchId,"removed")),this.mutationQueue.shift();let n=this.pr;return Li.forEach(e.mutations,(r=>{const i=new gc(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.pr=n}))}Cn(t){}containsKey(t,e){const n=new gc(e,0),r=this.pr.firstAfterOrEqual(n);return Li.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Li.resolve()}br(t,e){return this.wr(t)}wr(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}yr(t){const e=this.wr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t){this.Dr=t,this.docs=function(){return new Gi(ki.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.Dr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Li.resolve(n?n.document.mutableCopy():Cs.newInvalidDocument(e))}getEntries(t,e){let n=wo();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Cs.newInvalidDocument(t))})),Li.resolve(n)}getDocumentsMatchingQuery(t,e,n,r){let i=wo();const s=e.path,o=new ki(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:t,value:{document:o}}=a.getNext();if(!s.isPrefixOf(t.path))break;t.path.length>s.length+1||Ni(Ri(o),n)<=0||(r.has(o.key)||po(e,o))&&(i=i.insert(o.key,o.mutableCopy()))}return Li.resolve(i)}getAllFromCollectionGroup(t,e,n,r){ri()}vr(t,e){return Li.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new _c(this)}getSize(t){return Li.resolve(this.size)}}class _c extends lc{constructor(t){super(),this.sr=t}applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.sr.addEntry(t,r)):this.sr.removeEntry(n)})),Li.waitFor(e)}getFromCache(t,e){return this.sr.getEntry(t,e)}getAllFromCache(t,e){return this.sr.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t){this.persistence=t,this.Cr=new yo((t=>Xs(t)),Ys),this.lastRemoteSnapshotVersion=Ei.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new mc,this.targetCount=0,this.Or=uc.xn()}forEachTarget(t,e){return this.Cr.forEach(((t,n)=>e(n))),Li.resolve()}getLastRemoteSnapshotVersion(t){return Li.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Li.resolve(this.Fr)}allocateTargetId(t){return this.highestTargetId=this.Or.next(),Li.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Fr&&(this.Fr=e),Li.resolve()}Ln(t){this.Cr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Or=new uc(e),this.highestTargetId=e),t.sequenceNumber>this.Fr&&(this.Fr=t.sequenceNumber)}addTargetData(t,e){return this.Ln(e),this.targetCount+=1,Li.resolve()}updateTargetData(t,e){return this.Ln(e),Li.resolve()}removeTargetData(t,e){return this.Cr.delete(e.target),this.Mr.Ar(e.targetId),this.targetCount-=1,Li.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Cr.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Cr.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Li.waitFor(i).next((()=>r))}getTargetCount(t){return Li.resolve(this.targetCount)}getTargetData(t,e){const n=this.Cr.get(e)||null;return Li.resolve(n)}addMatchingKeys(t,e,n){return this.Mr.Tr(e,n),Li.resolve()}removeMatchingKeys(t,e,n){this.Mr.dr(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Li.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Mr.Ar(e),Li.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Mr.Vr(e);return Li.resolve(n)}containsKey(t,e){return Li.resolve(this.Mr.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(t,e){this.Nr={},this.overlays={},this.Br=new Ui(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=t(this),this.kr=new wc(this),this.indexManager=new oc,this.remoteDocumentCache=function(t){return new yc(t)}((t=>this.referenceDelegate.qr(t))),this.serializer=new rc(e),this.Qr=new dc(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new pc,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Nr[t.toKey()];return n||(n=new vc(e,this.referenceDelegate),this.Nr[t.toKey()]=n),n}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(t,e,n){Zr("MemoryPersistence","Starting transaction:",t);const r=new Ec(this.Br.next());return this.referenceDelegate.Kr(),n(r).next((t=>this.referenceDelegate.$r(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ur(t,e){return Li.or(Object.values(this.Nr).map((n=>()=>n.containsKey(t,e))))}}class Ec extends Pi{constructor(t){super(),this.currentSequenceNumber=t}}class Tc{constructor(t){this.persistence=t,this.Wr=new mc,this.Gr=null}static zr(t){return new Tc(t)}get jr(){if(this.Gr)return this.Gr;throw ri()}addReference(t,e,n){return this.Wr.addReference(n,e),this.jr.delete(n.toString()),Li.resolve()}removeReference(t,e,n){return this.Wr.removeReference(n,e),this.jr.add(n.toString()),Li.resolve()}markPotentiallyOrphaned(t,e){return this.jr.add(e.toString()),Li.resolve()}removeTarget(t,e){this.Wr.Ar(e.targetId).forEach((t=>this.jr.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.jr.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Kr(){this.Gr=new Set}$r(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Li.forEach(this.jr,(n=>{const r=ki.fromPath(n);return this.Hr(t,r).next((t=>{t||e.removeEntry(r,Ei.min())}))})).next((()=>(this.Gr=null,e.apply(t))))}updateLimboDocument(t,e){return this.Hr(t,e).next((t=>{t?this.jr.delete(e.toString()):this.jr.add(e.toString())}))}qr(t){return 0}Hr(t,e){return Li.or([()=>Li.resolve(this.Wr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ur(t,e)])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ic{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Li=n,this.ki=r}static qi(t,e){let n=Ao(),r=Ao();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Ic(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc{constructor(){this.Qi=!1}initialize(t,e){this.Ki=t,this.indexManager=e,this.Qi=!0}getDocumentsMatchingQuery(t,e,n,r){return this.$i(t,e).next((i=>i||this.Ui(t,e,r,n))).next((n=>n||this.Wi(t,e)))}$i(t,e){if(ro(e))return Li.resolve(null);let n=co(e);return this.indexManager.getIndexType(t,n).next((r=>0===r?null:(null!==e.limit&&1===r&&(e=uo(e,null,"F"),n=co(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((r=>{const i=Ao(...r);return this.Ki.getDocuments(t,i).next((r=>this.indexManager.getMinOffset(t,n).next((n=>{const s=this.Gi(e,r);return this.zi(e,s,i,n.readTime)?this.$i(t,uo(e,null,"F")):this.ji(t,s,e,n)}))))})))))}Ui(t,e,n,r){return ro(e)||r.isEqual(Ei.min())?this.Wi(t,e):this.Ki.getDocuments(t,n).next((i=>{const s=this.Gi(e,i);return this.zi(e,s,n,r)?this.Wi(t,e):(Yr()<=o["in"].DEBUG&&Zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),fo(e)),this.ji(t,s,e,Oi(r,-1)))}))}Gi(t,e){let n=new Qi(go(t));return e.forEach(((e,r)=>{po(t,r)&&(n=n.add(r))})),n}zi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Wi(t,e){return Yr()<=o["in"].DEBUG&&Zr("QueryEngine","Using full collection scan to execute query:",fo(e)),this.Ki.getDocumentsMatchingQuery(t,e,xi.min())}ji(t,e,n,r){return this.Ki.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(t,e,n,r){this.persistence=t,this.Hi=e,this.serializer=r,this.Ji=new Gi(_i),this.Yi=new yo((t=>Xs(t)),Ys),this.Zi=new Map,this.Xi=t.getRemoteDocumentCache(),this.kr=t.getTargetCache(),this.Qr=t.getBundleCache(),this.es(n)}es(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new fc(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Ji)))}}function kc(t,e,n,r){return new Cc(t,e,n,r)}async function Ac(t,e){const n=si(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.es(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=Ao();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({ts:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Oc(t){const e=si(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.kr.getLastRemoteSnapshotVersion(t)))}function Rc(t,e){const n=si(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.kr.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.kr.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);null!==e.targetMismatches.get(a)?u=u.withResumeToken(ts.EMPTY_BYTE_STRING,Ei.min()).withLastLimboFreeSnapshotVersion(Ei.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),function(t,e,n){return 0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.kr.updateTargetData(t,u))}));let a=wo(),c=Ao();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(xc(t,s,e.documentUpdates).next((t=>{a=t.ns,c=t.rs}))),!r.isEqual(Ei.min())){const e=n.kr.getLastRemoteSnapshotVersion(t).next((e=>n.kr.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Li.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.Ji=i,t)))}function xc(t,e,n){let r=Ao(),i=Ao();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=wo();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(Ei.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):Zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{ns:r,rs:i}}))}function Nc(t,e){const n=si(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.kr.getTargetData(t,e).next((i=>i?(r=i,Li.resolve(r)):n.kr.allocateTargetId(t).next((i=>(r=new nc(e,i,"TargetPurposeListen",t.currentSequenceNumber),n.kr.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.Ji.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(t.targetId,t),n.Yi.set(e,t.targetId)),t}))}async function Dc(t,e,n){const r=si(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!Fi(t))throw t;Zr("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function Pc(t,e,n){const r=si(t);let i=Ei.min(),s=Ao();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=si(t),i=r.Yi.get(n);return void 0!==i?Li.resolve(r.Ji.get(i)):r.kr.getTargetData(e,n)}(r,t,co(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Hi.getDocumentsMatchingQuery(t,e,n?i:Ei.min(),n?s:Ao()))).next((t=>(Mc(r,mo(e),t),{documents:t,ss:s})))))}function Mc(t,e,n){let r=t.Zi.get(e)||Ei.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Zi.set(e,r)}class Lc{constructor(){this.activeTargetIds=Ro()}hs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ps(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ls(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Fc{constructor(){this.Hs=new Lc,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Hs.hs(t),this.Js[t]||"not-current"}updateQueryState(t,e,n){this.Js[t]=e}removeLocalQueryTarget(t){this.Hs.Ps(t)}isLocalQueryTarget(t){return this.Hs.activeTargetIds.has(t)}clearQueryState(t){delete this.Js[t]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(t){return this.Hs.activeTargetIds.has(t)}start(){return this.Hs=new Lc,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uc{Ys(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(t){this.ro.push(t)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){Zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ro)t(0)}no(){Zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ro)t(1)}static v(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function Bc(){return null===Vc?Vc=function(){return 268435456+Math.round(2147483648*Math.random())}():Vc++,"0x"+Vc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(t){this.so=t.so,this.oo=t.oo}_o(t){this.ao=t}uo(t){this.co=t}onMessage(t){this.lo=t}close(){this.oo()}send(t){this.so(t)}ho(){this.ao()}Po(t){this.co(t)}Io(t){this.lo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="WebChannelConnection";class Hc extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.To=e+"://"+t.host,this.Eo=`projects/${n}/databases/${r}`,this.Ao="(default)"===this.databaseId.database?`project_id=${n}`:`project_id=${n}&database_id=${r}`}get Ro(){return!1}Vo(t,e,n,r,i){const s=Bc(),o=this.mo(t,e);Zr("RestConnection",`Sending RPC '${t}' ${s}:`,o,n);const a={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(a,r,i),this.po(t,o,a,n).then((e=>(Zr("RestConnection",`Received RPC '${t}' ${s}: `,e),e)),(e=>{throw ei("RestConnection",`RPC '${t}' ${s} failed with error: `,e,"url: ",o,"request:",n),e}))}yo(t,e,n,r,i,s){return this.Vo(t,e,n,r,i)}fo(t,e,n){t["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Qr}(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}mo(t,e){const n=zc[t];return`${this.To}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}po(t,e,n,r){const i=Bc();return new Promise(((s,o)=>{const a=new Hr;a.setWithCredentials(!0),a.listenOnce(Vr.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case jr.NO_ERROR:const e=a.getResponseJson();Zr(qc,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(e)),s(e);break;case jr.TIMEOUT:Zr(qc,`RPC '${t}' ${i} timed out`),o(new ai(oi.DEADLINE_EXCEEDED,"Request time out"));break;case jr.HTTP_ERROR:const n=a.getStatus();if(Zr(qc,`RPC '${t}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let t=a.getResponseJson();Array.isArray(t)&&(t=t[0]);const e=null==t?void 0:t.error;if(e&&e.status&&e.message){const t=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(oi).indexOf(e)>=0?e:oi.UNKNOWN}(e.status);o(new ai(t,e.message))}else o(new ai(oi.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new ai(oi.UNAVAILABLE,"Connection failed."));break;default:ri()}}finally{Zr(qc,`RPC '${t}' ${i} completed.`)}}));const c=JSON.stringify(r);Zr(qc,`RPC '${t}' ${i} sending request:`,r),a.send(e,"POST",c,n,15)}))}wo(t,e,n){const r=Bc(),i=[this.To,"/","google.firestore.v1.Firestore","/",t,"/channel"],s=Fr(),o=Ur(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.xmlHttpFactory=new $r({})),this.fo(a.initMessageHeaders,e,n),a.encodeInitMessageHeaders=!0;const u=i.join("");Zr(qc,`Creating RPC '${t}' stream ${r}: ${u}`,a);const l=s.createWebChannel(u,a);let h=!1,f=!1;const d=new $c({so:e=>{f?Zr(qc,`Not sending because RPC '${t}' stream ${r} is closed:`,e):(h||(Zr(qc,`Opening RPC '${t}' stream ${r} transport.`),l.open(),h=!0),Zr(qc,`RPC '${t}' stream ${r} sending:`,e),l.send(e))},oo:()=>l.close()}),p=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(l,qr.EventType.OPEN,(()=>{f||Zr(qc,`RPC '${t}' stream ${r} transport opened.`)})),p(l,qr.EventType.CLOSE,(()=>{f||(f=!0,Zr(qc,`RPC '${t}' stream ${r} transport closed`),d.Po())})),p(l,qr.EventType.ERROR,(e=>{f||(f=!0,ei(qc,`RPC '${t}' stream ${r} transport errored:`,e),d.Po(new ai(oi.UNAVAILABLE,"The operation could not be completed")))})),p(l,qr.EventType.MESSAGE,(e=>{var n;if(!f){const i=e.data[0];ii(!!i);const s=i,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Zr(qc,`RPC '${t}' stream ${r} received error:`,o);const e=o.status;let n=function(t){const e=ca[t];if(void 0!==e)return la(e)}(e),i=o.message;void 0===n&&(n=oi.INTERNAL,i="Unknown error status: "+e+" with message "+o.message),f=!0,d.Po(new ai(n,i)),l.close()}else Zr(qc,`RPC '${t}' stream ${r} received:`,i),d.Io(i)}})),p(o,Br.STAT_EVENT,(e=>{e.stat===zr.PROXY?Zr(qc,`RPC '${t}' stream ${r} detected buffering proxy`):e.stat===zr.NOPROXY&&Zr(qc,`RPC '${t}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{d.ho()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t){return new xa(t,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(t,e,n=1e3,r=1.5,i=6e4){this.ii=t,this.timerId=e,this.So=n,this.bo=r,this.Do=i,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(t){this.cancel();const e=Math.floor(this.vo+this.Oo()),n=Math.max(0,Date.now()-this.Fo),r=Math.max(0,e-n);r>0&&Zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.vo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,r,(()=>(this.Fo=Date.now(),t()))),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){null!==this.Co&&(this.Co.skipDelay(),this.Co=null)}cancel(){null!==this.Co&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(t,e,n,r,i,s,o,a){this.ii=t,this.Bo=n,this.Lo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new Wc(t,e)}$o(){return 1===this.state||5===this.state||this.Uo()}Uo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&null===this.qo&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,(()=>this.jo())))}Ho(t){this.Jo(),this.stream.send(t)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(t,e){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,4!==t?this.Ko.reset():e&&e.code===oi.RESOURCE_EXHAUSTED?(ti(e.toString()),ti("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):e&&e.code===oi.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Zo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.uo(e)}Zo(){}auth(){this.state=1;const t=this.Xo(this.ko),e=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.ko===e&&this.e_(t,n)}),(e=>{t((()=>{const t=new ai(oi.UNKNOWN,"Fetching auth token failed: "+e.message);return this.t_(t)}))}))}e_(t,e){const n=this.Xo(this.ko);this.stream=this.n_(t,e),this.stream._o((()=>{n((()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,(()=>(this.Uo()&&(this.state=3),Promise.resolve()))),this.listener._o())))})),this.stream.uo((t=>{n((()=>this.t_(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}Wo(){this.state=5,this.Ko.xo((async()=>{this.state=0,this.start()}))}t_(t){return Zr("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Xo(t){return e=>{this.ii.enqueueAndForget((()=>this.ko===t?e():(Zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Qc extends Jc{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.serializer=i}n_(t,e){return this.connection.wo("Listen",t,e)}onMessage(t){this.Ko.reset();const e=$a(this.serializer,t),n=function(t){if(!("targetChange"in t))return Ei.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?Ei.min():e.readTime?Ma(e.readTime):Ei.min()}(t);return this.listener.r_(e,n)}i_(t){const e={};e.database=Ba(this.serializer),e.addTarget=function(t,e){let n;const r=e.target;if(n=Zs(r)?{documents:qa(t,r)}:{query:Ha(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0){n.resumeToken=Pa(t,e.resumeToken);const r=Na(t,e.expectedCount);null!==r&&(n.expectedCount=r)}else if(e.snapshotVersion.compareTo(Ei.min())>0){n.readTime=Da(t,e.snapshotVersion.toTimestamp());const r=Na(t,e.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,t);const n=Ga(this.serializer,t);n&&(e.labels=n),this.Ho(e)}s_(t){const e={};e.database=Ba(this.serializer),e.removeTarget=t,this.Ho(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xc extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=r,this.h_=!1}P_(){if(this.h_)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(t,e,n){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.connection.Vo(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}yo(t,e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.yo(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===oi.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new ai(oi.UNKNOWN,t.toString())}))}terminate(){this.h_=!0}}class Yc{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){0===this.T_&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve()))))}m_(t){"Online"===this.state?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.R_("Offline")))}set(t){this.f_(),this.T_=0,"Online"===t&&(this.d_=!1),this.R_(t)}R_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}V_(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(ti(e),this.d_=!1):Zr("OnlineStateTracker",e)}f_(){null!==this.E_&&(this.E_.cancel(),this.E_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=i,this.S_.Ys((t=>{n.enqueueAndForget((async()=>{cu(this)&&(Zr("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=si(t);e.y_.add(4),await eu(e),e.b_.set("Unknown"),e.y_.delete(4),await tu(e)}(this))}))})),this.b_=new Yc(n,r)}}async function tu(t){if(cu(t))for(const e of t.w_)await e(!0)}async function eu(t){for(const e of t.w_)await e(!1)}function nu(t,e){const n=si(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),au(n)?ou(n):gu(n).Uo()&&iu(n,e))}function ru(t,e){const n=si(t),r=gu(n);n.p_.delete(e),r.Uo()&&su(n,e),0===n.p_.size&&(r.Uo()?r.zo():cu(n)&&n.b_.set("Unknown"))}function iu(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ei.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}gu(t).i_(e)}function su(t,e){t.D_.Be(e),gu(t).s_(e)}function ou(t){t.D_=new Sa({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),gu(t).start(),t.b_.A_()}function au(t){return cu(t)&&!gu(t).$o()&&t.p_.size>0}function cu(t){return 0===si(t).y_.size}function uu(t){t.D_=void 0}async function lu(t){t.p_.forEach(((e,n)=>{iu(t,e)}))}async function hu(t,e){uu(t),au(t)?(t.b_.m_(e),ou(t)):t.b_.set("Unknown")}async function fu(t,e,n){if(t.b_.set("Online"),e instanceof Ta&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.p_.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.p_.delete(r),t.D_.removeTarget(r))}(t,e)}catch(n){Zr("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await du(t,n)}else if(e instanceof ba?t.D_.We(e):e instanceof Ea?t.D_.Ze(e):t.D_.je(e),!n.isEqual(Ei.min()))try{const e=await Oc(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.D_.st(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.p_.get(r);i&&t.p_.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach(((e,n)=>{const r=t.p_.get(e);if(!r)return;t.p_.set(e,r.withResumeToken(ts.EMPTY_BYTE_STRING,r.snapshotVersion)),su(t,e);const i=new nc(r.target,e,n,r.sequenceNumber);iu(t,i)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){Zr("RemoteStore","Failed to raise snapshot:",e),await du(t,e)}}async function du(t,e,n){if(!Fi(e))throw e;t.y_.add(1),await eu(t),t.b_.set("Offline"),n||(n=()=>Oc(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Zr("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await tu(t)}))}async function pu(t,e){const n=si(t);n.asyncQueue.verifyOperationInProgress(),Zr("RemoteStore","RemoteStore received new credentials");const r=cu(n);n.y_.add(3),await eu(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await tu(n)}async function mu(t,e){const n=si(t);e?(n.y_.delete(2),await tu(n)):e||(n.y_.add(2),await eu(n),n.b_.set("Unknown"))}function gu(t){return t.v_||(t.v_=function(t,e,n){const r=si(t);return r.P_(),new Qc(e,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{_o:lu.bind(null,t),uo:hu.bind(null,t),r_:fu.bind(null,t)}),t.w_.push((async e=>{e?(t.v_.Go(),au(t)?ou(t):t.b_.set("Unknown")):(await t.v_.stop(),uu(t))}))),t.v_}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vu{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ci,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new vu(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new ai(oi.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yu(t,e){if(ti("AsyncQueue",`${e}: ${t}`),Fi(t))return new ai(oi.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(t){this.comparator=t?(e,n)=>t(e,n)||ki.comparator(e.key,n.key):(t,e)=>ki.comparator(t.key,e.key),this.keyedMap=Eo(),this.sortedSet=new Gi(this.comparator)}static emptySet(t){return new _u(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _u))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _u;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wu{constructor(){this.F_=new Gi(ki.comparator)}track(t){const e=t.doc.key,n=this.F_.get(e);n?0!==t.type&&3===n.type?this.F_=this.F_.insert(e,t):3===t.type&&1!==n.type?this.F_=this.F_.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.F_=this.F_.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.F_=this.F_.remove(e):1===t.type&&2===n.type?this.F_=this.F_.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.F_=this.F_.insert(e,{type:2,doc:t.doc}):ri():this.F_=this.F_.insert(e,t)}M_(){const t=[];return this.F_.inorderTraversal(((e,n)=>{t.push(n)})),t}}class bu{constructor(t,e,n,r,i,s,o,a,c){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(t,e,n,r,i){const s=[];return e.forEach((t=>{s.push({type:0,doc:t})})),new bu(t,e,_u.emptySet(e),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&lo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.x_=void 0,this.listeners=[]}}class Tu{constructor(){this.queries=new yo((t=>ho(t)),lo),this.onlineState="Unknown",this.O_=new Set}}async function Iu(t,e){const n=si(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Eu),i)try{s.x_=await n.onListen(r)}catch(t){const n=yu(t,`Initialization of query '${fo(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&Au(n)}async function Su(t,e){const n=si(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Cu(t,e){const n=si(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.B_(i)&&(r=!0);e.x_=i}}r&&Au(n)}function ku(t,e,n){const r=si(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Au(t){t.O_.forEach((t=>{t.next()}))}class Ou{constructor(t,e,n){this.query=t,this.L_=e,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=n||{}}B_(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new bu(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.k_?this.Q_(t)&&(this.L_.next(t),e=!0):this.K_(t,this.onlineState)&&(this.U_(t),e=!0),this.q_=t,e}onError(t){this.L_.error(t)}N_(t){this.onlineState=t;let e=!1;return this.q_&&!this.k_&&this.K_(this.q_,t)&&(this.U_(this.q_),e=!0),e}K_(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.W_||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||"Offline"===e)}Q_(t){if(t.docChanges.length>0)return!0;const e=this.q_&&this.q_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}U_(t){t=bu.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.k_=!0,this.L_.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ru{constructor(t){this.key=t}}class xu{constructor(t){this.key=t}}class Nu{constructor(t,e){this.query=t,this.X_=e,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=Ao(),this.mutatedKeys=Ao(),this.na=go(t),this.ra=new _u(this.na)}get ia(){return this.X_}sa(t,e){const n=e?e.oa:new wu,r=e?e.ra:this.ra;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=po(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this._a(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.na(l,a)>0||c&&this.na(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{ra:s,oa:n,zi:o,mutatedKeys:i}}_a(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.ra;this.ra=t.ra,this.mutatedKeys=t.mutatedKeys;const i=t.oa.M_();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ri()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.na(t.doc,e.doc))),this.aa(n);const s=e?this.ua():[],o=0===this.ta.size&&this.current?1:0,a=o!==this.ea;return this.ea=o,0!==i.length||a?{snapshot:new bu(this.query,t.ra,r,i,t.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),ca:s}:{ca:s}}N_(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({ra:this.ra,oa:new wu,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(t){return!this.X_.has(t)&&!!this.ra.has(t)&&!this.ra.get(t).hasLocalMutations}aa(t){t&&(t.addedDocuments.forEach((t=>this.X_=this.X_.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.X_=this.X_.delete(t))),this.current=t.current)}ua(){if(!this.current)return[];const t=this.ta;this.ta=Ao(),this.ra.forEach((t=>{this.la(t.key)&&(this.ta=this.ta.add(t.key))}));const e=[];return t.forEach((t=>{this.ta.has(t)||e.push(new xu(t))})),this.ta.forEach((n=>{t.has(n)||e.push(new Ru(n))})),e}ha(t){this.X_=t.ss,this.ta=Ao();const e=this.sa(t.documents);return this.applyChanges(e,!0)}Pa(){return bu.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,0===this.ea,this.hasCachedResults)}}class Du{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Pu{constructor(t){this.key=t,this.Ia=!1}}class Mu{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Ta={},this.Ea=new yo((t=>ho(t)),lo),this.da=new Map,this.Aa=new Set,this.Ra=new Gi(ki.comparator),this.Va=new Map,this.ma=new mc,this.fa={},this.ga=new Map,this.pa=uc.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return!0===this.ya}}async function Lu(t,e){const n=Qu(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const t=await Nc(n.localStore,co(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Fu(n,e,r,"current"===s,t.resumeToken),n.isPrimaryClient&&nu(n.remoteStore,t)}return i}async function Fu(t,e,n,r,i){t.wa=(e,n,r)=>async function(t,e,n,r){let i=e.view.sa(n);i.zi&&(i=await Pc(t.localStore,e.query,!1).then((({documents:t})=>e.view.sa(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return qu(t,e.targetId,o.ca),o.snapshot}(t,e,n,r);const s=await Pc(t.localStore,e,!0),o=new Nu(e,s.ss),a=o.sa(s.documents),c=wa.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState,i),u=o.applyChanges(a,t.isPrimaryClient,c);qu(t,n,u.ca);const l=new Du(e,n,o);return t.Ea.set(e,l),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function Uu(t,e){const n=si(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter((t=>!lo(t,e)))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Dc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),ru(n.remoteStore,r.targetId),zu(n,r.targetId)})).catch(Mi)):(zu(n,r.targetId),await Dc(n.localStore,r.targetId,!0))}async function ju(t,e){const n=si(t);try{const t=await Rc(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.Va.get(e);r&&(ii(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Ia=!0:t.modifiedDocuments.size>0?ii(r.Ia):t.removedDocuments.size>0&&(ii(r.Ia),r.Ia=!1))})),await Gu(n,t,e)}catch(t){await Mi(t)}}function Vu(t,e,n){const r=si(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Ea.forEach(((n,r)=>{const i=r.view.N_(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=si(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const i of n.listeners)i.N_(e)&&(r=!0)})),r&&Au(n)}(r.eventManager,e),t.length&&r.Ta.r_(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Bu(t,e,n){const r=si(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let t=new Gi(ki.comparator);t=t.insert(s,Cs.newNoDocument(s,Ei.min()));const n=Ao().add(s),i=new _a(Ei.min(),new Map,new Gi(_i),t,n);await ju(r,i),r.Ra=r.Ra.remove(s),r.Va.delete(e),Ku(r)}else await Dc(r.localStore,e,!1).then((()=>zu(r,e,n))).catch(Mi)}function zu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach((e=>{t.ma.containsKey(e)||$u(t,e)}))}function $u(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);null!==n&&(ru(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),Ku(t))}function qu(t,e,n){for(const r of n)r instanceof Ru?(t.ma.addReference(r.key,e),Hu(t,r)):r instanceof xu?(Zr("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||$u(t,r.key)):ri()}function Hu(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(Zr("SyncEngine","New document in limbo: "+n),t.Aa.add(r),Ku(t))}function Ku(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new ki(Ii.fromString(e)),r=t.pa.next();t.Va.set(r,new Pu(n)),t.Ra=t.Ra.insert(n,r),nu(t.remoteStore,new nc(co(no(n.path)),r,"TargetPurposeLimboResolution",Ui.ae))}}async function Gu(t,e,n){const r=si(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach(((t,a)=>{o.push(r.wa(a,e,n).then((t=>{if((t||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){i.push(t);const e=Ic.qi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Ta.r_(i),await async function(t,e){const n=si(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Li.forEach(e,(e=>Li.forEach(e.Li,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Li.forEach(e.ki,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!Fi(t))throw t;Zr("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.Ji.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.Ji=n.Ji.insert(t,i)}}}(r.localStore,s))}async function Wu(t,e){const n=si(t);if(!n.currentUser.isEqual(e)){Zr("SyncEngine","User change. New user:",e.toKey());const t=await Ac(n.localStore,e);n.currentUser=e,function(t,e){t.ga.forEach((t=>{t.forEach((t=>{t.reject(new ai(oi.CANCELLED,e))}))})),t.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await Gu(n,t.ts)}}function Ju(t,e){const n=si(t),r=n.Va.get(e);if(r&&r.Ia)return Ao().add(r.key);{let t=Ao();const r=n.da.get(e);if(!r)return t;for(const e of r){const r=n.Ea.get(e);t=t.unionWith(r.view.ia)}return t}}function Qu(t){const e=si(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ju.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ju.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Bu.bind(null,e),e.Ta.r_=Cu.bind(null,e.eventManager),e.Ta.Sa=ku.bind(null,e.eventManager),e}class Xu{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Gc(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return kc(this.persistence,new Sc,t.initialUser,this.serializer)}createPersistence(t){return new bc(Tc.zr,this.serializer)}createSharedClientState(t){return new Fc}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Yu{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Vu(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=Wu.bind(null,this.syncEngine),await mu(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Tu}()}createDatastore(t){const e=Gc(t.databaseInfo.databaseId),n=function(t){return new Hc(t)}(t.databaseInfo);return function(t,e,n,r){return new Xc(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(t,e,n,r,i){return new Zc(t,e,n,r,i)}(this.localStore,this.datastore,t.asyncQueue,(t=>Vu(this.syncEngine,t,0)),function(){return jc.v()?new jc:new Uc}())}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Mu(t,e,n,r,i,s);return o&&(a.ya=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=si(t);Zr("RemoteStore","RemoteStore shutting down."),e.y_.add(5),await eu(e),e.S_.shutdown(),e.b_.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Zu{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.va(this.observer.next,t)}error(t){this.observer.error?this.va(this.observer.error,t):ti("Uncaught Error in snapshot listener:",t.toString())}Ca(){this.muted=!0}va(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tl{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=Jr.UNAUTHENTICATED,this.clientId=yi.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{Zr("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(Zr("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ai(oi.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new ci;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=yu(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function el(t,e){t.asyncQueue.verifyOperationInProgress(),Zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Ac(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t._offlineComponents=e}async function nl(t,e){t.asyncQueue.verifyOperationInProgress();const n=await il(t);Zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>pu(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>pu(e.remoteStore,n))),t._onlineComponents=e}function rl(t){return"FirebaseError"===t.name?t.code===oi.FAILED_PRECONDITION||t.code===oi.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code}async function il(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Zr("FirestoreClient","Using user provided OfflineComponentProvider");try{await el(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!rl(n))throw n;ei("Error using user provided cache. Falling back to memory cache: "+n),await el(t,new Xu)}}else Zr("FirestoreClient","Using default OfflineComponentProvider"),await el(t,new Xu);return t._offlineComponents}async function sl(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Zr("FirestoreClient","Using user provided OnlineComponentProvider"),await nl(t,t._uninitializedComponentsProvider._online)):(Zr("FirestoreClient","Using default OnlineComponentProvider"),await nl(t,new Yu))),t._onlineComponents}async function ol(t){const e=await sl(t),n=e.eventManager;return n.onListen=Lu.bind(null,e.syncEngine),n.onUnlisten=Uu.bind(null,e.syncEngine),n}function al(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Zu({next:s=>{e.enqueueAndForget((()=>Su(t,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new ai(oi.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ou(no(n.path),s,{includeMetadataChanges:!0,W_:!0});return Iu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}function cl(t,e,n={}){const r=new ci;return t.asyncQueue.enqueueAndForget((async()=>function(t,e,n,r,i){const s=new Zu({next:n=>{e.enqueueAndForget((()=>Su(t,o))),n.fromCache&&"server"===r.source?i.reject(new ai(oi.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ou(n,s,{includeMetadataChanges:!0,W_:!0});return Iu(t,o)}(await ol(t),t.asyncQueue,e,n,r))),r.promise}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ul(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const ll=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(t,e,n){if(!n)throw new ai(oi.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function fl(t,e,n,r){if(!0===e&&!0===r)throw new ai(oi.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function dl(t){if(!ki.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pl(t){if(ki.isDocumentKey(t))throw new ai(oi.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ml(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":ri()}function gl(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new ai(oi.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ml(t);throw new ai(oi.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vl{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new ai(oi.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new ai(oi.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}fl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ul(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new ai(oi.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class yl{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ai(oi.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new ai(oi.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vl(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new li;switch(t.type){case"firstParty":return new pi(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new ai(oi.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=ll.get(t);e&&(Zr("ComponentProvider","Removing Datastore"),ll.delete(t),e.terminate())}(this),Promise.resolve()}}function _l(t,e,n,r={}){var i;const s=(t=gl(t,yl))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=Jr.MOCK_USER;else{e=(0,a.Sg)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new ai(oi.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Jr(s)}t._authCredentials=new hi(new ui(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new wl(this.firestore,t,this._query)}}class bl{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new El(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new bl(this.firestore,t,this._key)}}class El extends wl{constructor(t,e,n){super(t,e,no(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new bl(this.firestore,null,new ki(t))}withConverter(t){return new El(this.firestore,t,this._path)}}function Tl(t,e,...n){if(t=(0,a.m9)(t),hl("collection","path",e),t instanceof yl){const r=Ii.fromString(e,...n);return pl(r),new El(t,null,r)}{if(!(t instanceof bl||t instanceof El))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ii.fromString(e,...n));return pl(r),new El(t.firestore,null,r)}}function Il(t,e,...n){if(t=(0,a.m9)(t),1===arguments.length&&(e=yi.V()),hl("doc","path",e),t instanceof yl){const r=Ii.fromString(e,...n);return dl(r),new bl(t,null,new ki(r))}{if(!(t instanceof bl||t instanceof El))throw new ai(oi.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ii.fromString(e,...n));return dl(r),new bl(t.firestore,t instanceof El?t.converter:null,new ki(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sl{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new Wc(this,"async_queue_retry"),this.Xa=()=>{const t=Kc();t&&Zr("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Ko.No()};const t=Kc();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.eu(),this.tu(t)}enterRestrictedMode(t){if(!this.za){this.za=!0,this.Ya=t||!1;const e=Kc();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Xa)}}enqueue(t){if(this.eu(),this.za)return new Promise((()=>{}));const e=new ci;return this.tu((()=>this.za&&this.Ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Ga.push(t),this.nu())))}async nu(){if(0!==this.Ga.length){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(t){if(!Fi(t))throw t;Zr("AsyncQueue","Operation failed with retryable error: "+t)}this.Ga.length>0&&this.Ko.xo((()=>this.nu()))}}tu(t){const e=this.Wa.then((()=>(this.Ja=!0,t().catch((t=>{this.Ha=t,this.Ja=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw ti("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.Ja=!1,t))))));return this.Wa=e,e}enqueueAfterDelay(t,e,n){this.eu(),this.Za.indexOf(t)>-1&&(e=0);const r=vu.createAndSchedule(this,t,e,n,(t=>this.ru(t)));return this.ja.push(r),r}eu(){this.Ha&&ri()}verifyOperationInProgress(){}async iu(){let t;do{t=this.Wa,await t}while(t!==this.Wa)}su(t){for(const e of this.ja)if(e.timerId===t)return!0;return!1}ou(t){return this.iu().then((()=>{this.ja.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.ja)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.iu()}))}_u(t){this.Za.push(t)}ru(t){const e=this.ja.indexOf(t);this.ja.splice(e,1)}}class Cl extends yl{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Sl}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ol(this),this._firestoreClient.terminate()}}function kl(t,e){const n="object"==typeof t?t:(0,i.Mq)(),r="string"==typeof t?t:e||"(default)",s=(0,i.qX)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.P0)("firestore");t&&_l(s,...t)}return s}function Al(t){return t._firestoreClient||Ol(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ol(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new cs(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,ul(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new tl(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rl{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Rl(ts.fromBase64String(t))}catch(t){throw new ai(oi.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Rl(ts.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new ai(oi.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ci(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nl{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new ai(oi.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new ai(oi.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return _i(this._lat,t._lat)||_i(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dl=new RegExp("[~\\*/\\[\\]]");function Pl(t,e,n){if(e.search(Dl)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new xl(...e.split("."))._internalPath}catch(b){throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new ai(oi.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ll{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new bl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Fl(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Ul("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Fl extends Ll{data(){return super.data()}}function Ul(t,e){return"string"==typeof e?Pl(t,e):e instanceof xl?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jl(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new ai(oi.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Vl{convertValue(t,e="none"){switch(hs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return rs(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(is(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw ri()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return Hi(t,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Nl(rs(t.latitude),rs(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=os(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(as(t));default:return null}}convertTimestamp(t){const e=ns(t);return new bi(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=Ii.fromString(t);ii(ec(n));const r=new us(n.get(1),n.get(3)),i=new ki(n.popFirst(5));return r.isEqual(e)||ti(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bl{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class zl extends Ll{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new $l(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Ul("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class $l extends zl{data(t={}){return super.data(t)}}class ql{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Bl(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new $l(this._firestore,this._userDataWriter,n.key,n,new Bl(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new ai(oi.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>{const r=new $l(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Bl(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:e++}}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new $l(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Bl(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Hl(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Hl(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ri()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kl(t){t=gl(t,bl);const e=gl(t.firestore,Cl);return al(Al(e),t._key).then((n=>Jl(e,t,n)))}class Gl extends Vl{constructor(t){super(),this.firestore=t}convertBytes(t){return new Rl(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new bl(this.firestore,null,e)}}function Wl(t){t=gl(t,wl);const e=gl(t.firestore,Cl),n=Al(e),r=new Gl(e);return jl(t._query),cl(n,t._query).then((n=>new ql(e,r,t,n)))}function Jl(t,e,n){const r=n.docs.get(e._key),i=new Gl(t);return new zl(t,i,e._key,r,new Bl(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){Qr=t}(i.Jn),(0,i.Xd)(new s.wA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new Cl(new fi(t.getProvider("auth-internal")),new gi(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new ai(oi.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new us(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KN)(Wr,"4.1.0",t),(0,i.KN)(Wr,"4.1.0","esm2017")}()},2483:function(t,e,n){n.d(e,{p7:function(){return ne},r5:function(){return V}});n(7658);var r=n(3396),i=n(4870);
/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(t){return t.__esModule||"Module"===t[Symbol.toStringTag]}const a=Object.assign;function c(t,e){const n={};for(const r in e){const i=e[r];n[r]=l(i)?i.map(t):t(i)}return n}const u=()=>{},l=Array.isArray;const h=/\/$/,f=t=>t.replace(h,"");function d(t,e,n="/"){let r,i={},s="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),s=e.slice(c+1,a>-1?a:e.length),i=t(s)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=b(null!=r?r:e,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function m(t,e){return e&&t.toLowerCase().startsWith(e.toLowerCase())?t.slice(e.length)||"/":t}function g(t,e,n){const r=e.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(e.matched[r],n.matched[i])&&y(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function v(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function y(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_(t[n],e[n]))return!1;return!0}function _(t,e){return l(t)?w(t,e):l(e)?w(e,t):t===e}function w(t,e){return l(e)?t.length===e.length&&t.every(((t,n)=>t===e[n])):1===t.length&&t[0]===e}function b(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),i=r[r.length-1];".."!==i&&"."!==i||r.push("");let s,o,a=n.length-1;for(s=0;s<r.length;s++)if(o=r[s],"."!==o){if(".."!==o)break;a>1&&a--}return n.slice(0,a).join("/")+"/"+r.slice(s-(s===r.length?1:0)).join("/")}var E,T;(function(t){t["pop"]="pop",t["push"]="push"})(E||(E={})),function(t){t["back"]="back",t["forward"]="forward",t["unknown"]=""}(T||(T={}));function I(t){if(!t)if(s){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return"/"!==t[0]&&"#"!==t[0]&&(t="/"+t),f(t)}const S=/^[^#]+#/;function C(t,e){return t.replace(S,"#")+e}function k(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const A=()=>({left:window.pageXOffset,top:window.pageYOffset});function O(t){let e;if("el"in t){const n=t.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=k(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(null!=e.left?e.left:window.pageXOffset,null!=e.top?e.top:window.pageYOffset)}function R(t,e){const n=history.state?history.state.position-e:-1;return n+t}const x=new Map;function N(t,e){x.set(t,e)}function D(t){const e=x.get(t);return x.delete(t),e}let P=()=>location.protocol+"//"+location.host;function M(t,e){const{pathname:n,search:r,hash:i}=e,s=t.indexOf("#");if(s>-1){let e=i.includes(t.slice(s))?t.slice(s).length:1,n=i.slice(e);return"/"!==n[0]&&(n="/"+n),m(n,"")}const o=m(n,t);return o+r+i}function L(t,e,n,r){let i=[],s=[],o=null;const c=({state:s})=>{const a=M(t,location),c=n.value,u=e.value;let l=0;if(s){if(n.value=a,e.value=s,o&&o===c)return void(o=null);l=u?s.position-u.position:0}else r(a);i.forEach((t=>{t(n.value,c,{delta:l,type:E.pop,direction:l?l>0?T.forward:T.back:T.unknown})}))};function u(){o=n.value}function l(t){i.push(t);const e=()=>{const e=i.indexOf(t);e>-1&&i.splice(e,1)};return s.push(e),e}function h(){const{history:t}=window;t.state&&t.replaceState(a({},t.state,{scroll:A()}),"")}function f(){for(const t of s)t();s=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:u,listen:l,destroy:f}}function F(t,e,n,r=!1,i=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:i?A():null}}function U(t){const{history:e,location:n}=window,r={value:M(t,n)},i={value:e.state};function s(r,s,o){const a=t.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?t:t.slice(a))+r:P()+t+r;try{e[o?"replaceState":"pushState"](s,"",c),i.value=s}catch(u){console.error(u),n[o?"replace":"assign"](c)}}function o(t,n){const o=a({},e.state,F(i.value.back,t,i.value.forward,!0),n,{position:i.value.position});s(t,o,!0),r.value=t}function c(t,n){const o=a({},i.value,e.state,{forward:t,scroll:A()});s(o.current,o,!0);const c=a({},F(r.value,t,null),{position:o.position+1},n);s(t,c,!1),r.value=t}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:c,replace:o}}function j(t){t=I(t);const e=U(t),n=L(t,e.state,e.location,e.replace);function r(t,e=!0){e||n.pauseListeners(),history.go(t)}const i=a({location:"",base:t,go:r,createHref:C.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function V(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),j(t)}function B(t){return"string"===typeof t||t&&"object"===typeof t}function z(t){return"string"===typeof t||"symbol"===typeof t}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},q=Symbol("");var H;(function(t){t[t["aborted"]=4]="aborted",t[t["cancelled"]=8]="cancelled",t[t["duplicated"]=16]="duplicated"})(H||(H={}));function K(t,e){return a(new Error,{type:t,[q]:!0},e)}function G(t,e){return t instanceof Error&&q in t&&(null==e||!!(t.type&e))}const W="[^/]+?",J={sensitive:!1,strict:!1,start:!0,end:!0},Q=/[.+*?^${}()[\]/\\]/g;function X(t,e){const n=a({},J,e),r=[];let i=n.start?"^":"";const s=[];for(const a of t){const t=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let e=0;e<a.length;e++){const r=a[e];let o=40+(n.sensitive?.25:0);if(0===r.type)e||(i+="/"),i+=r.value.replace(Q,"\\$&"),o+=40;else if(1===r.type){const{value:t,repeatable:n,optional:c,regexp:u}=r;s.push({name:t,repeatable:n,optional:c});const l=u||W;if(l!==W){o+=10;try{new RegExp(`(${l})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${t}" (${l}): `+h.message)}}let f=n?`((?:${l})(?:/(?:${l}))*)`:`(${l})`;e||(f=c&&a.length<2?`(?:/${f})`:"/"+f),c&&(f+="?"),i+=f,o+=20,c&&(o+=-8),n&&(o+=-20),".*"===l&&(o+=-50)}t.push(o)}r.push(t)}if(n.strict&&n.end){const t=r.length-1;r[t][r[t].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function c(t){const e=t.match(o),n={};if(!e)return null;for(let r=1;r<e.length;r++){const t=e[r]||"",i=s[r-1];n[i.name]=t&&i.repeatable?t.split("/"):t}return n}function u(e){let n="",r=!1;for(const i of t){r&&n.endsWith("/")||(n+="/"),r=!1;for(const t of i)if(0===t.type)n+=t.value;else if(1===t.type){const{value:s,repeatable:o,optional:a}=t,c=s in e?e[s]:"";if(l(c)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const u=l(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}return{re:o,score:r,keys:s,parse:c,stringify:u}}function Y(t,e){let n=0;while(n<t.length&&n<e.length){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?1===t.length&&80===t[0]?-1:1:t.length>e.length?1===e.length&&80===e[0]?1:-1:0}function Z(t,e){let n=0;const r=t.score,i=e.score;while(n<r.length&&n<i.length){const t=Y(r[n],i[n]);if(t)return t;n++}if(1===Math.abs(i.length-r.length)){if(tt(r))return 1;if(tt(i))return-1}return i.length-r.length}function tt(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const et={type:0,value:""},nt=/[a-zA-Z0-9_]/;function rt(t){if(!t)return[[]];if("/"===t)return[[et]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(t){throw new Error(`ERR (${n})/"${u}": ${t}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,c=0,u="",l="";function h(){u&&(0===n?s.push({type:0,value:u}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):e("Invalid state to consume buffer"),u="")}function f(){u+=a}while(c<t.length)if(a=t[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),o()):":"===a?(h(),n=1):f();break;case 4:f(),n=r;break;case 1:"("===a?n=2:nt.test(a)?f():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:e("Unknown state");break}else r=n,n=4;return 2===n&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),i}function it(t,e,n){const r=X(rt(t.path),n);const i=a(r,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf===!e.record.aliasOf&&e.children.push(i),i}function st(t,e){const n=[],r=new Map;function i(t){return r.get(t)}function s(t,n,r){const i=!r,c=at(t);c.aliasOf=r&&r.record;const h=ht(e,t),f=[c];if("alias"in t){const e="string"===typeof t.alias?[t.alias]:t.alias;for(const t of e)f.push(a({},c,{components:r?r.record.components:c.components,path:t,aliasOf:r?r.record:c}))}let d,p;for(const e of f){const{path:a}=e;if(n&&"/"!==a[0]){const t=n.record.path,r="/"===t[t.length-1]?"":"/";e.path=n.record.path+(a&&r+a)}if(d=it(e,n,h),r?r.alias.push(d):(p=p||d,p!==d&&p.alias.push(d),i&&t.name&&!ut(d)&&o(t.name)),c.children){const t=c.children;for(let e=0;e<t.length;e++)s(t[e],d,r&&r.children[e])}r=r||d,(d.record.components&&Object.keys(d.record.components).length||d.record.name||d.record.redirect)&&l(d)}return p?()=>{o(p)}:u}function o(t){if(z(t)){const e=r.get(t);e&&(r.delete(t),n.splice(n.indexOf(e),1),e.children.forEach(o),e.alias.forEach(o))}else{const e=n.indexOf(t);e>-1&&(n.splice(e,1),t.record.name&&r.delete(t.record.name),t.children.forEach(o),t.alias.forEach(o))}}function c(){return n}function l(t){let e=0;while(e<n.length&&Z(t,n[e])>=0&&(t.record.path!==n[e].record.path||!ft(t,n[e])))e++;n.splice(e,0,t),t.record.name&&!ut(t)&&r.set(t.record.name,t)}function h(t,e){let i,s,o,c={};if("name"in t&&t.name){if(i=r.get(t.name),!i)throw K(1,{location:t});0,o=i.record.name,c=a(ot(e.params,i.keys.filter((t=>!t.optional)).map((t=>t.name))),t.params&&ot(t.params,i.keys.map((t=>t.name)))),s=i.stringify(c)}else if("path"in t)s=t.path,i=n.find((t=>t.re.test(s))),i&&(c=i.parse(s),o=i.record.name);else{if(i=e.name?r.get(e.name):n.find((t=>t.re.test(e.path))),!i)throw K(1,{location:t,currentLocation:e});o=i.record.name,c=a({},e.params,t.params),s=i.stringify(c)}const u=[];let l=i;while(l)u.unshift(l.record),l=l.parent;return{name:o,path:s,params:c,matched:u,meta:lt(u)}}return e=ht({strict:!1,end:!0,sensitive:!1},e),t.forEach((t=>s(t))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:i}}function ot(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function at(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ct(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ct(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]="object"===typeof n?n[r]:n;return e}function ut(t){while(t){if(t.record.aliasOf)return!0;t=t.parent}return!1}function lt(t){return t.reduce(((t,e)=>a(t,e.meta)),{})}function ht(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function ft(t,e){return e.children.some((e=>e===t||ft(t,e)))}const dt=/#/g,pt=/&/g,mt=/\//g,gt=/=/g,vt=/\?/g,yt=/\+/g,_t=/%5B/g,wt=/%5D/g,bt=/%5E/g,Et=/%60/g,Tt=/%7B/g,It=/%7C/g,St=/%7D/g,Ct=/%20/g;function kt(t){return encodeURI(""+t).replace(It,"|").replace(_t,"[").replace(wt,"]")}function At(t){return kt(t).replace(Tt,"{").replace(St,"}").replace(bt,"^")}function Ot(t){return kt(t).replace(yt,"%2B").replace(Ct,"+").replace(dt,"%23").replace(pt,"%26").replace(Et,"`").replace(Tt,"{").replace(St,"}").replace(bt,"^")}function Rt(t){return Ot(t).replace(gt,"%3D")}function xt(t){return kt(t).replace(dt,"%23").replace(vt,"%3F")}function Nt(t){return null==t?"":xt(t).replace(mt,"%2F")}function Dt(t){try{return decodeURIComponent(""+t)}catch(e){}return""+t}function Pt(t){const e={};if(""===t||"?"===t)return e;const n="?"===t[0],r=(n?t.slice(1):t).split("&");for(let i=0;i<r.length;++i){const t=r[i].replace(yt," "),n=t.indexOf("="),s=Dt(n<0?t:t.slice(0,n)),o=n<0?null:Dt(t.slice(n+1));if(s in e){let t=e[s];l(t)||(t=e[s]=[t]),t.push(o)}else e[s]=o}return e}function Mt(t){let e="";for(let n in t){const r=t[n];if(n=Rt(n),null==r){void 0!==r&&(e+=(e.length?"&":"")+n);continue}const i=l(r)?r.map((t=>t&&Ot(t))):[r&&Ot(r)];i.forEach((t=>{void 0!==t&&(e+=(e.length?"&":"")+n,null!=t&&(e+="="+t))}))}return e}function Lt(t){const e={};for(const n in t){const r=t[n];void 0!==r&&(e[n]=l(r)?r.map((t=>null==t?null:""+t)):null==r?r:""+r)}return e}const Ft=Symbol(""),Ut=Symbol(""),jt=Symbol(""),Vt=Symbol(""),Bt=Symbol("");function zt(){let t=[];function e(e){return t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function $t(t,e,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const c=t=>{!1===t?a(K(4,{from:n,to:e})):t instanceof Error?a(t):B(t)?a(K(2,{from:e,to:t})):(s&&r.enterCallbacks[i]===s&&"function"===typeof t&&s.push(t),o())},u=t.call(r&&r.instances[i],e,n,c);let l=Promise.resolve(u);t.length<3&&(l=l.then(c)),l.catch((t=>a(t)))}))}function qt(t,e,n,r){const i=[];for(const s of t){0;for(const t in s.components){let a=s.components[t];if("beforeRouteEnter"===e||s.instances[t])if(Ht(a)){const o=a.__vccOpts||a,c=o[e];c&&i.push($t(c,n,r,s,t))}else{let c=a();0,i.push((()=>c.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${t}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[t]=a;const c=a.__vccOpts||a,u=c[e];return u&&$t(u,n,r,s,t)()}))))}}}return i}function Ht(t){return"object"===typeof t||"displayName"in t||"props"in t||"__vccOpts"in t}function Kt(t){const e=(0,r.f3)(jt),n=(0,r.f3)(Vt),s=(0,r.Fl)((()=>e.resolve((0,i.SU)(t.to)))),o=(0,r.Fl)((()=>{const{matched:t}=s.value,{length:e}=t,r=t[e-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Xt(t[e-2]);return e>1&&Xt(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,t[e-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Qt(n.params,s.value.params))),c=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function l(n={}){return Jt(n)?e[(0,i.SU)(t.replace)?"replace":"push"]((0,i.SU)(t.to)).catch(u):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:c,navigate:l}}const Gt=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kt,setup(t,{slots:e}){const n=(0,i.qj)(Kt(t)),{options:s}=(0,r.f3)(jt),o=(0,r.Fl)((()=>({[Yt(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Yt(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=e.default&&e.default(n);return t.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Wt=Gt;function Jt(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Qt(t,e){for(const n in e){const r=e[n],i=t[n];if("string"===typeof r){if(r!==i)return!1}else if(!l(i)||i.length!==r.length||r.some(((t,e)=>t!==i[e])))return!1}return!0}function Xt(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yt=(t,e,n)=>null!=t?t:null!=e?e:n,Zt=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=(0,r.f3)(Bt),o=(0,r.Fl)((()=>t.route||s.value)),c=(0,r.f3)(Ut,0),u=(0,r.Fl)((()=>{let t=(0,i.SU)(c);const{matched:e}=o.value;let n;while((n=e[t])&&!n.components)t++;return t})),l=(0,r.Fl)((()=>o.value.matched[u.value]));(0,r.JJ)(Ut,(0,r.Fl)((()=>u.value+1))),(0,r.JJ)(Ft,l),(0,r.JJ)(Bt,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,l.value,t.name]),(([t,e,n],[r,i,s])=>{e&&(e.instances[n]=t,i&&i!==e&&t&&t===r&&(e.leaveGuards.size||(e.leaveGuards=i.leaveGuards),e.updateGuards.size||(e.updateGuards=i.updateGuards))),!t||!e||i&&v(e,i)&&r||(e.enterCallbacks[n]||[]).forEach((e=>e(t)))}),{flush:"post"}),()=>{const i=o.value,s=t.name,c=l.value,u=c&&c.components[s];if(!u)return te(n.default,{Component:u,route:i});const f=c.props[s],d=f?!0===f?i.params:"function"===typeof f?f(i):f:null,p=t=>{t.component.isUnmounted&&(c.instances[s]=null)},m=(0,r.h)(u,a({},d,e,{onVnodeUnmounted:p,ref:h}));return te(n.default,{Component:m,route:i})||m}}});function te(t,e){if(!t)return null;const n=t(e);return 1===n.length?n[0]:n}const ee=Zt;function ne(t){const e=st(t.routes,t),n=t.parseQuery||Pt,o=t.stringifyQuery||Mt,h=t.history;const f=zt(),m=zt(),v=zt(),y=(0,i.XI)($);let _=$;s&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=c.bind(null,(t=>""+t)),b=c.bind(null,Nt),T=c.bind(null,Dt);function I(t,n){let r,i;return z(t)?(r=e.getRecordMatcher(t),i=n):i=t,e.addRoute(i,r)}function S(t){const n=e.getRecordMatcher(t);n&&e.removeRoute(n)}function C(){return e.getRoutes().map((t=>t.record))}function k(t){return!!e.getRecordMatcher(t)}function x(t,r){if(r=a({},r||y.value),"string"===typeof t){const i=d(n,t,r.path),s=e.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:T(s.params),hash:Dt(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in t)i=a({},t,{path:d(n,t.path,r.path).path});else{const e=a({},t.params);for(const t in e)null==e[t]&&delete e[t];i=a({},t,{params:b(e)}),r.params=b(r.params)}const s=e.resolve(i,r),c=t.hash||"";s.params=w(T(s.params));const u=p(o,a({},t,{hash:At(c),path:s.path})),l=h.createHref(u);return a({fullPath:u,hash:c,query:o===Mt?Lt(t.query):t.query||{}},s,{redirectedFrom:void 0,href:l})}function P(t){return"string"===typeof t?d(n,t,y.value.path):a({},t)}function M(t,e){if(_!==t)return K(8,{from:e,to:t})}function L(t){return j(t)}function F(t){return L(a(P(t),{replace:!0}))}function U(t){const e=t.matched[t.matched.length-1];if(e&&e.redirect){const{redirect:n}=e;let r="function"===typeof n?n(t):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:t.query,hash:t.hash,params:"path"in r?{}:t.params},r)}}function j(t,e){const n=_=x(t),r=y.value,i=t.state,s=t.force,c=!0===t.replace,u=U(n);if(u)return j(a(P(u),{state:"object"===typeof u?a({},i,u.state):i,force:s,replace:c}),e||n);const l=n;let h;return l.redirectedFrom=e,!s&&g(o,r,n)&&(h=K(16,{to:l,from:r}),rt(r,r,!0,!1)),(h?Promise.resolve(h):q(l,r)).catch((t=>G(t)?G(t,2)?t:nt(t):tt(t,l,r))).then((t=>{if(t){if(G(t,2))return j(a({replace:c},P(t.to),{state:"object"===typeof t.to?a({},i,t.to.state):i,force:s}),e||l)}else t=W(l,r,!0,c,i);return H(l,r,t),t}))}function V(t,e){const n=M(t,e);return n?Promise.reject(n):Promise.resolve()}function B(t){const e=at.values().next().value;return e&&"function"===typeof e.runWithContext?e.runWithContext(t):t()}function q(t,e){let n;const[r,i,s]=re(t,e);n=qt(r.reverse(),"beforeRouteLeave",t,e);for(const a of r)a.leaveGuards.forEach((r=>{n.push($t(r,t,e))}));const o=V.bind(null,t,e);return n.push(o),ut(n).then((()=>{n=[];for(const r of f.list())n.push($t(r,t,e));return n.push(o),ut(n)})).then((()=>{n=qt(i,"beforeRouteUpdate",t,e);for(const r of i)r.updateGuards.forEach((r=>{n.push($t(r,t,e))}));return n.push(o),ut(n)})).then((()=>{n=[];for(const r of s)if(r.beforeEnter)if(l(r.beforeEnter))for(const i of r.beforeEnter)n.push($t(i,t,e));else n.push($t(r.beforeEnter,t,e));return n.push(o),ut(n)})).then((()=>(t.matched.forEach((t=>t.enterCallbacks={})),n=qt(s,"beforeRouteEnter",t,e),n.push(o),ut(n)))).then((()=>{n=[];for(const r of m.list())n.push($t(r,t,e));return n.push(o),ut(n)})).catch((t=>G(t,8)?t:Promise.reject(t)))}function H(t,e,n){v.list().forEach((r=>B((()=>r(t,e,n)))))}function W(t,e,n,r,i){const o=M(t,e);if(o)return o;const c=e===$,u=s?history.state:{};n&&(r||c?h.replace(t.fullPath,a({scroll:c&&u&&u.scroll},i)):h.push(t.fullPath,i)),y.value=t,rt(t,e,n,c),nt()}let J;function Q(){J||(J=h.listen(((t,e,n)=>{if(!ct.listening)return;const r=x(t),i=U(r);if(i)return void j(a(i,{replace:!0}),r).catch(u);_=r;const o=y.value;s&&N(R(o.fullPath,n.delta),A()),q(r,o).catch((t=>G(t,12)?t:G(t,2)?(j(t.to,r).then((t=>{G(t,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(u),Promise.reject()):(n.delta&&h.go(-n.delta,!1),tt(t,r,o)))).then((t=>{t=t||W(r,o,!1),t&&(n.delta&&!G(t,8)?h.go(-n.delta,!1):n.type===E.pop&&G(t,20)&&h.go(-1,!1)),H(r,o,t)})).catch(u)})))}let X,Y=zt(),Z=zt();function tt(t,e,n){nt(t);const r=Z.list();return r.length?r.forEach((r=>r(t,e,n))):console.error(t),Promise.reject(t)}function et(){return X&&y.value!==$?Promise.resolve():new Promise(((t,e)=>{Y.add([t,e])}))}function nt(t){return X||(X=!t,Q(),Y.list().forEach((([e,n])=>t?n(t):e())),Y.reset()),t}function rt(e,n,i,o){const{scrollBehavior:a}=t;if(!s||!a)return Promise.resolve();const c=!i&&D(R(e.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(e,n,c))).then((t=>t&&O(t))).catch((t=>tt(t,e,n)))}const it=t=>h.go(t);let ot;const at=new Set,ct={currentRoute:y,listening:!0,addRoute:I,removeRoute:S,hasRoute:k,getRoutes:C,resolve:x,options:t,push:L,replace:F,go:it,back:()=>it(-1),forward:()=>it(1),beforeEach:f.add,beforeResolve:m.add,afterEach:v.add,onError:Z.add,isReady:et,install(t){const e=this;t.component("RouterLink",Wt),t.component("RouterView",ee),t.config.globalProperties.$router=e,Object.defineProperty(t.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ot&&y.value===$&&(ot=!0,L(h.location).catch((t=>{0})));const n={};for(const i in $)Object.defineProperty(n,i,{get:()=>y.value[i],enumerable:!0});t.provide(jt,e),t.provide(Vt,(0,i.Um)(n)),t.provide(Bt,y);const r=t.unmount;at.add(t),t.unmount=function(){at.delete(t),at.size<1&&(_=$,J&&J(),J=null,y.value=$,ot=!1,X=!1),r()}}};function ut(t){return t.reduce(((t,e)=>t.then((()=>B(e)))),Promise.resolve())}return ct}function re(t,e){const n=[],r=[],i=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const s=e.matched[o];s&&(t.matched.find((t=>v(t,s)))?r.push(s):n.push(s));const a=t.matched[o];a&&(e.matched.find((t=>v(t,a)))||i.push(a))}return[n,r,i]}}}]);
//# sourceMappingURL=chunk-vendors.a338e694.js.map