(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5121],{25108:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(82904),l=n(27418),a=n.n(l);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.kM:var n=t.property||"enabled";return a()({},e,i({},t.control,a()({},e[t.control],i({},n,!(e[t.control]||{})[n]))));case r.At:return!0===t.toggle&&e[t.control]&&e[t.control][t.property]===t.value?a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,void 0)))):a()({},e,i({},t.control,a()({},e[t.control],i({},t.property,t.value))));case r.dc:return a()({},e,i({},t.control,a()({},e[t.control],t.properties)));case r.l:var l=Object.keys(e).filter((function(e){return-1===(t.skip||[]).indexOf(e)})),o=l.reduce((function(t,n){return a()(t,i({},n,a()({},e[n],!0===e[n].enabled?{enabled:!1}:{})))}),{});return a()({},e,o);default:return e}}},17214:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(24852),l=n.n(r);function a(e){var t=e.name,n=e.className,r=e.style,a=e.stylePrefix,i=void 0===a?"fa":a;return l().createElement("i",{className:"".concat(i," fa-").concat(t).concat(n?" ".concat(n):""),style:r})}a.defaultProps={};const i=a},56818:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ae});var r=n(24852),l=n.n(r),a=n(22843),i=n(71703),o=n(22222),s=n(27856),c=n.n(s),u=n(17214),d=n(93473),m=n(45697),f=n.n(m),v=["id","className","style","children"];function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function p(e){var t=e.id,n=e.className,r=e.style,a=e.children,i=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,v),o=n?" "+n:"";return l().createElement(l().Fragment,null,l().createElement("div",j({},i,{id:t,className:"gn-spinner".concat(o),style:r}),l().createElement("div",null)),a)}p.propTypes={id:f().string,className:f().string,style:f().object},p.defaultProps={};const y=p;var g=n(5346),b=n(15135),h=n(5582),E=n.n(h),w=n(29896),k=n(23279),O=n.n(k),N=n(74855),P=n.n(N),C=n(72500),z=n.n(C),S=n(42090),Z=n.n(S);const x=(0,r.forwardRef)((function(e,t){var n=e.text,r=e.className,a=void 0===r?"gn-text-editable":r,i=e.onEdit,o=void 0===i?function(){}:i;return l().createElement(Z(),{innerRef:t,className:a,html:n,onClick:function(e){e.stopPropagation()},onChange:function(e){o(e.target.value)}})}));var I=n(14068);function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}const _=function(e){var t,n,a=e.defaultImage,i=e.onEdit,o=void 0===i?function(){}:i,s=(t=(0,r.useState)(),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(t,n)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?A(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],d=s[1];return(0,r.useEffect)((function(){d(a)}),[]),l().createElement(l().Fragment,null,l().createElement(I.Z,{thumbnail:c,onUpdate:function(e){d(e),o(e)}}),l().createElement("div",{className:"icon-image-preview"},l().createElement(u.Z,{name:"file-upload"})))};var T=["src","style"];function D(){return(D=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){F(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a=[],i=!0,o=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){o=!0,l=e}finally{try{i||null==n.return||n.return()}finally{if(o)throw l}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return U(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?U(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H=(0,b.Z)(P()),L=function(e){var t=e.title,n=e.onEdit;return l().createElement("div",{className:"editContainer"},l().createElement("h1",null,l().createElement(x,{onEdit:n,text:t})))},$=function(e){var t=e.abstract,n=e.onEdit;return l().createElement("div",{className:"editContainer"},l().createElement(x,{onEdit:n,text:t}))},q=function(e){var t=e.image,n=e.onEdit;return l().createElement("div",{className:"editContainer imagepreview"},l().createElement(_,{onEdit:n,defaultImage:t}))};function Y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(0===e.indexOf("http"))return e;var t=z().parse(e),n=t.path,r=window.location,l=r.protocol,a=r.host;return"".concat(l,"://").concat(a).concat(n)}function B(e){var t=e.src,n=e.style,a=function(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}(e,T),i=R((0,r.useState)(),2),o=i[0],s=i[1];return(0,r.useEffect)((function(){t&&!o&&s(!0)}),[t]),l().createElement("img",D({},a,{src:t,onLoad:function(){return s(!1)},onError:function(){return s(!1)},style:V(V(V({},n),o&&{backgroundColor:"transparent"}),{},{objectFit:"contain"})}))}function X(e){var t,n=e.resource,a=e.formatHref,i=e.linkHref,o=e.sectionStyle,s=e.loading,m=e.getTypesInfo,f=e.editTitle,v=e.editAbstract,j=e.editThumbnail,p=e.activeEditMode,b=e.closePanel,h=e.favourite,k=e.onFavourite,N=e.enableFavourite,P=R((0,r.useState)(!1),2),C=P[0],z=P[1],S=R((0,r.useState)(!1),2),Z=S[0],x=S[1],I=function(){z(!C)},A=function(){x(!Z)},_=(0,r.useRef)(),T=(0,r.useRef)(),D=R((0,r.useState)(!1),2),M=D[0],V=D[1];if((0,r.useEffect)((function(){return T.current=!0,function(){T.current=!1}}),[]),!n&&!s)return null;var F=m(),U=n&&(F[n.doc_type]||F[n.resource_type])||{},X=U.formatEmbedUrl,G=void 0===X?function(e){return null==e?void 0:e.embed_url}:X,W=U.formatDetailUrl,J=void 0===W?function(e){return null==e?void 0:e.detail_url}:W,K=U.icon,Q=U.name,ee=(null==n?void 0:n.embed_url)&&G(n),te=(null==n?void 0:n.pk)&&J(n);return l().createElement("div",{ref:_,className:"gn-details-panel".concat(s?" loading":""),style:{width:null==o?void 0:o.width}},l().createElement("section",{style:o},l().createElement("div",{className:"gn-details-panel-header"},l().createElement(d.Z,{variant:"default",href:i(),onClick:b,size:"sm"},l().createElement(u.Z,{name:"times"}))),!p&&l().createElement("div",{className:"gn-details-panel-preview"},l().createElement("div",{className:"gn-loader-placeholder",style:{position:"absolute",width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(u.Z,{name:K})),ee&&!j?l().createElement("iframe",{key:ee,src:ee,style:{position:"absolute",width:"100%",height:"100%"},frameBorder:"0"}):l().createElement(B,{src:null==n?void 0:n.thumbnail_url,style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,backgroundColor:"inherit"}}),s&&l().createElement("div",{className:"gn-details-panel-preview-loader",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,display:"flex",alignItems:"center",justifyContent:"center"}},l().createElement(y,{animation:"border",role:"status"},l().createElement("span",{className:"sr-only"},"Loading resource detail...")))),p&&j&&l().createElement("div",{className:"gn-details-panel-preview inediting"}," ",l().createElement(q,{onEdit:j,image:null==n?void 0:n.thumbnail_url})," "),l().createElement("div",{className:"gn-details-panel-content"},l().createElement("div",{className:"gn-details-panel-title"},!C&&l().createElement("h1",null,K&&l().createElement(l().Fragment,null,l().createElement(u.Z,{name:K})),null==n?void 0:n.title),p&&!C&&l().createElement("span",{className:"inEdit",onClick:I},l().createElement(u.Z,{name:"edit"})),C&&l().createElement(l().Fragment,null,l().createElement("h1",null,l().createElement(L,{title:null==n?void 0:n.title,onEdit:f})),l().createElement("span",{className:"inEdit",onClick:I},l().createElement(u.Z,{name:"check-circle"}))),l().createElement("div",{className:"gn-details-panel-tools"},N&&l().createElement(d.Z,{variant:"default",onClick:O()((function(){k(!h)}),500)},l().createElement(u.Z,{stylePrefix:h?"fa":"far",name:"star"})),te&&l().createElement(H,{tooltipPosition:"top",tooltipId:M?"gnhome.copiedResourceUrl":"gnhome.copyResourceUrl",text:Y(te)},l().createElement(d.Z,{variant:"default",onClick:function(){V(!0),setTimeout((function(){T.current&&V(!1)}),700)}},l().createElement(u.Z,{name:"share-alt"}))),te&&!j&&l().createElement(d.Z,{variant:"default",href:te,rel:"noopener noreferrer"},l().createElement(g.Z,{msgId:"gnhome.view".concat(Q||"")})))),l().createElement("p",null,(null==n?void 0:n.owner)&&l().createElement(l().Fragment,null,l().createElement("a",{href:a({query:{"filter{owner.username.in}":n.owner.username}})},(0,w.vW)(n.owner))),(null==n?void 0:n.date_type)&&(null==n?void 0:n.date)&&l().createElement(l().Fragment,null," ","/"," ",E()(n.date).format("MMMM Do YYYY"))),l().createElement("p",null,p&&!Z&&l().createElement("span",{className:"inEdit",onClick:A},l().createElement(u.Z,{name:"edit"})),l().createElement("div",{className:"gn-details-panel-description"},Z&&l().createElement(l().Fragment,null,l().createElement("span",{className:"inEdit",onClick:A},l().createElement(u.Z,{name:"check-circle"})),l().createElement($,{abstract:null==n?void 0:n.abstract,onEdit:v})),!Z&&null!=n&&n.abstract?l().createElement("div",{dangerouslySetInnerHTML:{__html:c().sanitize(n.abstract)}}):null)),l().createElement("p",null,(null==n||null===(t=n.category)||void 0===t?void 0:t.identifier)&&l().createElement("div",null,l().createElement(g.Z,{msgId:"gnhome.category"}),":"," ",l().createElement("a",{href:a({query:{"filter{category.identifier.in}":n.category.identifier}})},n.category.identifier))))))}X.defaultProps={onClose:function(){},formatHref:function(){return"#"},linkHref:function(){return"#"},width:696,getTypesInfo:w.NN};const G=X;var W=n(43892),J=n(25108),K=n(82904),Q=n(72036),ee=n(2811),te=(0,i.connect)((0,o.P1)([function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.data)||null},function(e){var t;return(null==e||null===(t=e.gnresource)||void 0===t?void 0:t.loading)||!1}],(function(e,t,n){return{resource:e,loading:t,editMode:n}})),{closePanel:K.Xi.bind(null,"DetailViewer",null)})(G),ne=(0,i.connect)((0,o.P1)([function(e){var t,n;return(null==e||null===(t=e.controls)||void 0===t||null===(n=t.DetailViewer)||void 0===n?void 0:n.enabled)||!1},ee.V$,ee.fg],(function(e,t,n){return{isEnabledViewer:e,hide:t||!n}})),{onClick:K.Xi.bind(null,"DetailViewer",null)})((function(e){var t=e.onClick,n=e.isEnabledViewer;return e.hide?null:l().createElement(d.Z,{variant:"primary",onClick:function(){t()},active:!n}," ",l().createElement(g.Z,{msgId:"gnviewer.details"}))}));function re(e){var t=e.enabled,n=e.onEditResource,r=e.onEditAbstractResource,a=e.onEditThumbnail,i=e.canEdit,o=e.width;return e.hide?null:l().createElement("div",{style:{top:0,left:0,width:"100%",height:"100%"}},!t&&l().createElement(te,{editTitle:function(e){n(e)},editAbstract:function(e){r(e)},editThumbnail:function(e){a(e)},activeEditMode:!t&&i,sectionStyle:{width:o,position:"fixed"}}))}re.propTypes={width:f().number},re.defaultProps={width:800};var le=(0,i.connect)((0,o.P1)([function(e){var t,n;return(null==e||null===(t=e.controls)||void 0===t||null===(n=t.DetailViewer)||void 0===n?void 0:n.enabled)||!1},ee.il,ee.V$,ee.fg],(function(e,t,n,r){return{enabled:e,canEdit:t,hide:n||!r}})),{onEditResource:W.Br,onEditAbstractResource:W.bI,onEditThumbnail:W.U5})(re);const ae=(0,a.rx)("DetailViewer",{component:le,containers:{ViewerLayout:{name:"DetailViewer",target:"rightColumn",priority:1},ActionNavbar:{name:"ButtonViewer",target:"leftMenuItem",Component:ne,priority:1}},epics:{},reducers:{gnresource:Q.Z,controls:J.Z}})},2811:(e,t,n)=>{"use strict";n.d(t,{fg:()=>r,HG:()=>l,il:()=>a,V$:()=>i});var r=function(e){var t,n,r,l=null==e||null===(t=e.gnresource)||void 0===t?void 0:t.id,a=null==e||null===(n=e.gnresource)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.pk;return l||a},l=function(e){var t,n;return(null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.perms)||[]},a=function(e){var t,n,r,l,a=null==e||null===(t=e.gnresource)||void 0===t||null===(n=t.permissions)||void 0===n?void 0:n.canEdit,i=(null==e||null===(r=e.gnresource)||void 0===r||null===(l=r.data)||void 0===l?void 0:l.perms)||[];return a||i.includes("change_resourcebase")},i=function(e){var t;return!(null==e||null===(t=e.gnresource)||void 0===t||!t.isNew)}},46700:(e,t,n)=>{var r={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-nz":76319,"./en-nz.js":76319,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./pa-in":15858,"./pa-in.js":15858,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":60588,"./uz-latn.js":60588,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-tw":74152,"./zh-tw.js":74152};function l(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}l.keys=function(){return Object.keys(r)},l.resolve=a,e.exports=l,l.id=46700}}]);