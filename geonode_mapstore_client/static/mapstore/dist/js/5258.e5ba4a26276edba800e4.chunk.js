(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[5258],{52826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var r=n(67294),o=n.n(r),i=n(70390),a=n(32425),l=n(80628),c=n(57588),s=n(92579),u=n(5346);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,l=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var v=(0,l.Z)((function(e){var t=e.src,n=e.width,l=e.height,s=e.resolution,f=e.thumbnail,m=e.controls,y=e.play,v=e.onPlay,b=void 0===v?function(){}:v,g=e.onStart,h=void 0===g?function(){}:g,E=e.fit,O=e.loop,w=e.volume,S=void 0===w?1:w,P=e.muted,j=y,k=p((0,r.useState)(j),2),I=k[0],C=k[1],N=p((0,r.useState)(),2),x=N[0],A=N[1],V=p((0,r.useState)(y),2),Z=V[0],_=V[1],D="cover"===E,z=p((0,r.useState)(!1),2),G=z[0],M=z[1];(0,r.useEffect)((function(){!I&&j&&(C(!0),_(!0)),I&&h(I)}),[I,j]);var R,T=(R=n/l,D?R<s?[l*s,l]:[n,n/s]:"contain"===E?R<s?[n,n/s]:[l*s,l]:[n,n/s]),W="contain"===E||D?l:T[1],B=!D&&m,F=!!D||O;return o().createElement("div",{className:"ms-video",style:{position:"relative",width:n,height:W,display:"flex",alignItems:"center",justifyContent:"center",overflow:"hidden"}},t&&o().createElement(o().Fragment,null,I&&o().createElement(i.ZP,{url:t,width:T[0],height:T[1],playing:j,loop:F,volume:S,muted:P,style:D?{left:"50%",top:"50%",transform:"translate(-50%, -50%)",position:"absolute"}:{},controls:B,pip:!1,fileConfig:{attributes:{controlsList:"nodownload",disablePictureInPicture:!0}},youtubeConfig:{playerVars:{controls:B?2:0,modestbranding:1,rel:0}},onReady:function(){return _(!1)},onError:function(e){A(e),(""+e).includes("NotAllowedError")&&(b(!1),M(!0),_(!1))},onPause:function(){b(!1)},onPlay:function(){b(!0),G&&(A(!1),M(!1))}}),(!I||I&&(Z||x))&&o().createElement("div",{className:"ms-video-cover",style:d(d({position:"absolute",width:T[0],height:T[1],display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(0, 0, 0, 1.0)"},!(Z||x)&&{cursor:"pointer"}),!j&&f&&{backgroundImage:"url(".concat(f,")"),backgroundSize:D?"cover":"640px auto",backgroundPosition:"center",backgroundRepeat:"no-repeat"}),onClick:function(){G?(M(!1),A(!1)):_(!0),C(!0),b(!0)}},Z&&o().createElement(a.Z,{size:70}),x&&!G&&o().createElement("div",{className:"text-center"},o().createElement(c.Glyphicon,{glyph:"alert",style:{fontSize:T[1]/4>100?100:T[1]/4,mixBlendMode:"difference",color:"#ffffff"}}),o().createElement("h3",null,o().createElement(u.Z,{msgId:"geostory.errors.loading.video"}))," "),(!(Z||x)&&!j||x&&G)&&o().createElement(c.Glyphicon,{glyph:"play",style:{fontSize:T[1]/4>100?100:T[1]/4,mixBlendMode:"difference",color:"#ffffff"}}))),!B&&!G&&o().createElement("div",{className:"ms-video-mask-cover",style:{position:"absolute",width:T[0],height:T[1]}}))}));const b=function(e){var t=e.id,n=e.src,i=e.resolution,a=void 0===i?16/9:i,l=e.autoplay,c=e.inView,u=e.description,f=e.showCaption,d=e.caption,m=void 0===d?u:d,y=e.thumbnail,b=e.credits,g=e.controls,h=void 0===g||g,E=e.fit,O=e.loop,w=e.muted,S=e.onPlay,P=void 0===S?function(){}:S,j=e.mode,k=e.containerInView,I=(void 0===k||k)&&c,C=p((0,r.useState)(!1),2),N=C[0],x=C[1],A=function(e){x(e),P(e)};return(0,r.useEffect)((function(){j===s.nl.EDIT&&A(!1)}),[j]),(0,r.useEffect)((function(){j===s.nl.VIEW&&I&&(l||"cover"===E)&&A(!0)}),[I,l,E,j]),(0,r.useEffect)((function(){j===s.nl.VIEW&&!I&&N&&A(!1)}),[I,N,j]),o().createElement("div",{id:t,key:"".concat(t,"-").concat(E,"-").concat(j),className:"ms-media ms-media-video"},o().createElement(v,{src:n,play:N&&j===s.nl.VIEW,resolution:a,thumbnail:y,controls:h&&j===s.nl.VIEW,onPlay:A,fit:E,loop:O,muted:w}),b&&o().createElement("div",{className:"ms-media-credits"},o().createElement("small",null,b)),f&&m&&o().createElement("div",{className:"ms-media-caption"},o().createElement("small",null,m)))}},99534:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var r=n(61365),o=n(69334);const i=(0,r.Z)(o.h_)},27693:(e,t,n)=>{"use strict";n.d(t,{r:()=>r,D:()=>o});var r={GEOSTORY:"geostory",GEOSTORE:"geostore"},o={type:"osm",title:"Open Street Map",name:"mapnik",source:"osm",group:"background",visibility:!0,id:"mapnik__0",loading:!1,loadingError:!1}}}]);