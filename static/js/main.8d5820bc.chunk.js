(this.webpackJsonpqrbingo=this.webpackJsonpqrbingo||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.8c74ea89.svg"},,,,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/caret-left.4fa5bd11.svg"},function(e,t,n){e.exports=n.p+"static/media/check.33410986.svg"},function(e,t,n){e.exports=n.p+"static/media/gift.f4453374.svg"},,function(e,t,n){e.exports=n(43)},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),o=n.n(r),c=(n(25),n(3)),l=n.n(c),s=n(4),u=n(2),d=n(19),m=n(5),h=n(15),v=n(8),f=n(6),p=n(9),g=n(1),E=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(f.a)(t).call(this,e))).value=void 0,n.label=void 0,n.description=void 0,n.imageURL=void 0,n.position=void 0,n.punched=void 0,n.bingo=void 0,n.value=e.value,n.label=e.label,n.description=e.description,n.imageURL=e.imageURL,n.position=e.position||{},n.punched=e.punched||!1,n.bingo=e.bingo||!1,n}return Object(p.a)(t,e),t}(g.Model);E.__ns="BingoSlot";var b=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(v.a)(this,Object(f.a)(t).call(this,e,"singleton"))).width=void 0,n.height=void 0,n.slots=void 0,n.length=void 0,n.initialized=void 0,n.width=e.width,n.height=e.height,n.slots=e.slots,n.length=n.width*n.height,n.initialized=e.date||new Date,n}return Object(p.a)(t,e),Object(h.a)(t,[{key:"hit",value:function(e){return this.slots.flat().find((function(t){return t.value===e.value}))}},{key:"punch",value:function(e){var t=this;return this.slots.flat().filter((function(t){return t.value===e.value})).map((function(e){var n=e.position,a=n.x,i=n.y;t.slots[i][a].punched=!0})),this.save()}},{key:"isBingo",value:function(){return 0!==this.getBingo().length}},{key:"getBingo",value:function(){var e=[];return e=(e=(e=e.concat(this.getHorizontalBingo())).concat(this.getVerticalBingo())).concat(this.getDiagonalBingo()),this.markSlotsIfBingo(e),e}},{key:"markSlotsIfBingo",value:function(e){var t=this;e.map((function(e){return t.slots[e.position.y][e.position.x].bingo=!0}))}},{key:"getHorizontalBingo",value:function(){for(var e=0;e<this.height;e++)if(this.slots[e].every((function(e){return e.punched})))return this.slots[e];return[]}},{key:"getVerticalBingo",value:function(){for(var e=this,t=function(t){if(e.slots.every((function(e){return e[t].punched})))return{v:e.slots.map((function(e){return e[t]})).flat()}},n=0;n<this.width;n++){var a=t(n);if("object"===typeof a)return a.v}return[]}},{key:"getDiagonalBingo",value:function(){var e=[];if(this.width!==this.height)return[];var t=Math.min(this.width,this.height),n=this.slots.map((function(e,t){return e[t]}));n.every((function(e){return e.punched}))&&(e=e.concat(n));var a=this.slots.map((function(e,n){return e[t-n-1]}));return a.every((function(e){return e.punched}))&&(e=e.concat(a)),e}}],[{key:"arrayShuffle",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}},{key:"getShuffledListWithLength",value:function(e,t){for(var n=[];n.length<t;)n.push.apply(n,Object(d.a)(this.arrayShuffle(e)));return n.slice(0,t)}},{key:"createSlot",value:function(e,t,n){var a=e.value,i=e.label,r=e.description,o=e.imageURL,c=[t%n,Math.floor(t/n)];return new E({value:a,label:i,description:r,imageURL:o,position:{x:c[0],y:c[1]}})}},{key:"init",value:function(e){var n=this,a=e.sheet,i=a.width,r=a.height,o=Array(r).fill(!0).map((function(){return[]})),c=i*r;return this.getShuffledListWithLength(e.slot.variations,c).map((function(e,t){var a=n.createSlot(e,t,i);return o[a.position.y].push(a)})),new t({width:e.sheet.width,height:e.sheet.height,slots:o})}},{key:"exists",value:function(){return this.find("singleton")}}]),t}(g.Model);b.__ns="BingoSheet",b.schema={width:g.Types.number,height:g.Types.number,slots:g.Types.arrayOf(g.Types.arrayOf(g.Types.reference(E))),initialized:g.Types.date};var y={application:{name:"QRBINGO"},bingo:{sheet:{width:5,height:5},slot:{variations:[{value:"istj",label:"IS\nTJ",description:"The Inspector"},{value:"infj",label:"IN\nFJ",description:"The Counselor"},{value:"intj",label:"IN\nTJ",description:"The Mastermind"},{value:"enfj",label:"EN\nFJ",description:"The Giver"},{value:"istp",label:"IS\nTP",description:"The Craftsman"},{value:"esfj",label:"ES\nFJ",description:"The Provider"},{value:"infp",label:"IN\nFP",description:"The Idealist"},{value:"esfp",label:"ES\nFP",description:"The Performer"},{value:"enfp",label:"EN\nFP",description:"The Champion"},{value:"estp",label:"ES\nTP",description:"The Doer"},{value:"estj",label:"ES\nTJ",description:"The Supervisor"},{value:"entj",label:"EN\nTJ",description:"The Commander"},{value:"intp",label:"IN\nTP",description:"The Thinker"},{value:"isfj",label:"IS\nFJ",description:"The Nurturer"},{value:"entp",label:"EN\nTP",description:"The Visionary"},{value:"isfp",label:"IS\nFP",description:"The Composer"}]}},languages:[{lang:"ja",label:"\u65e5\u672c\u8a9e",default:!0},{lang:"en",label:"English"}],messages:{en:{introduction:["Scan QR code of people around you","Collect different MBTI types","Aim for Bingo and win a prize!"],congratulation:["Congrats!","Show this screen to event staff","and get an awesome prize!"],found:function(e){return i.a.createElement("span",null,"Found ",i.a.createElement("b",null,e[0]),"!")}},ja:{introduction:["\u8fd1\u304f\u306e\u4eba\u306eQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3","\u3044\u308d\u3093\u306aMBTI\u30bf\u30a4\u30d7\u3092\u96c6\u3081\u3088\u3046\uff01","\u30d3\u30f3\u30b4\u3092\u72d9\u3063\u3066\u5546\u54c1\u3092\u3082\u3089\u304a\u3046\uff01"],congratulation:["\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01","\u304a\u8fd1\u304f\u306e\u30b9\u30bf\u30c3\u30d5\u306b\u3053\u3061\u3089\u306e","\u753b\u9762\u3092\u898b\u305b\u3066\u3001\u7d20\u6575\u306a\u30ae\u30d5\u30c8\u3092","\u304a\u53d7\u3051\u53d6\u308a\u304f\u3060\u3055\u3044\u3002"],found:function(e){return i.a.createElement("span",null,i.a.createElement("b",null,e[0])," \u3092\u307f\u3064\u3051\u307e\u3057\u305f\uff01")}}}},N=Object(a.createContext)({bingo:{sheet:b.init(y.bingo)},punch:function(e){},scanning:!1,startScanning:function(){},stopScanning:function(){}}),w=n(7),j=n.n(w),S=(n(36),function(e){var t=e.app;e.sheet,e.reset;return i.a.createElement("div",{className:"game-menu"},i.a.createElement("h1",null,i.a.createElement("img",{src:j.a,alt:t.name}),i.a.createElement("span",null,t.name)))}),T=n(10),O=n.n(T),k=(n(37),function(e){var t=e.slot;return i.a.createElement("div",{className:O()("sheet-cell",{punched:t.punched,bingo:t.bingo})},i.a.createElement("div",{className:"hole"},t.label.split("\n").map((function(e,t){return i.a.createElement("div",{key:t},e)}))))}),C=function(e){var t=e.row;return i.a.createElement("div",{className:"sheet-row"},t.map((function(e,t){return i.a.createElement(k,{key:t,slot:e})})))},_=function(e){var t=e.sheet;return i.a.createElement("div",{className:"sheet-container"},i.a.createElement("div",{className:O()("sheet-wrapper",{bingo:t.isBingo()})},t.slots.map((function(e,t){return i.a.createElement(C,{key:t,row:e})}))))},B=(n(38),n(11)),I=n.n(B);var M=n(16),x=n.n(M),P=/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent)?{exact:"environment"}:"user",R=function(e,t){var n=document.createElement("canvas"),a=[e.width,e.height];n.width=a[0],n.height=a[1],t(function(e){var t=e.video,n=e.canvas;if(!n)return null;if(!t)return null;if(!t.srcObject)return null;var a=n.getContext("2d");if(!a)return null;a.drawImage(t,0,0,t.width,t.height);var i=a.getImageData(0,0,t.width,t.height);return I()(i.data,t.width,t.height)}({video:e,canvas:n}))},L=function(e){var t=e.stream,n=e.stop,r=e.video;return Object(a.useEffect)((function(){var e,a=r.current;if(!a)return console.error("video tag is not ready");a.srcObject=t;e=setInterval(R.bind(null,a,(function(a){var i;a&&(clearInterval(e),i=JSON.parse(a.data),r.current&&r.current.pause(),n(t,i))})),1e3)}),[]),i.a.createElement("div",{className:"Video_Stream_Container"},i.a.createElement("div",{className:"Video_Stream_Navigation Top"},i.a.createElement("div",{className:"nav-left",onClick:function(){return n(t)}},i.a.createElement("img",{src:x.a,alt:"back",className:"nav-item-img"}),i.a.createElement("span",null,"Back")),i.a.createElement("div",{className:"nav-title"},"Scan QR code"),i.a.createElement("div",{className:"nav-right"})),i.a.createElement("div",{className:"Video_Stream_Movie"},i.a.createElement("video",{ref:r,muted:!0,autoPlay:!0,playsInline:!0,width:"100%",height:"100%"})),i.a.createElement("div",{className:"Video_Stream_Navigation Bottom"},i.a.createElement("div",{className:"nav-title"},"Place code inside the box")))},J=function(e){var t=e.punch,n=Object(a.useState)(),r=Object(u.a)(n,2),o=r[0],c=r[1],d=Object(a.createRef)(),m=Object(a.createRef)(),h=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.current.offsetWidth,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:P,width:t,height:t}});case 3:n=e.sent,c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.a.createElement("div",{className:"video-capture-container",ref:m},i.a.createElement("button",{onClick:h},"SCAN QR CODE"),o?i.a.createElement(L,{stream:o,stop:function(e,n){n&&t(n),setTimeout((function(){return c(void 0)}),0),e.getTracks().map((function(e){return e.stop()}))},video:d}):null)},A=(n(39),function(e){var t=e.reset;return i.a.createElement(N.Consumer,null,(function(e){var n=e.bingo,a=e.punch;return i.a.createElement("div",{className:"Game"},i.a.createElement("div",{className:"Game_Title"},i.a.createElement(S,{app:y.application,sheet:n.sheet,reset:t})),i.a.createElement("div",{className:"Game_Contents"},i.a.createElement("div",{className:"Bingo_Sheet_Label"},i.a.createElement("h2",null,"YOUPR BINGO SHEET")),i.a.createElement(_,{sheet:n.sheet}),i.a.createElement(J,{punch:a})))}))}),F=function(e){var t=e.bingo,n=e.punch,r=e.reset,o=Object(a.useState)(!1),c=Object(u.a)(o,2),l=c[0],s=c[1],d={bingo:t,punch:n,scanning:l,startScanning:function(){return s(!0)},stopScanning:function(){return s(!1)}};return i.a.createElement(N.Provider,{value:d},i.a.createElement(A,{reset:r}))},U=(n(40),y.messages);var G={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new URL(window.location.href).searchParams.get("lang")||function(){var e=y.languages||[];if(!e)return"ja";var t=e.find((function(e){return e.default}));return t?t.lang:"ja"}(),a=U[n][e];return"undefined"===typeof a?null:"function"===typeof a?a(t):a}},D=function(e){var t=e.start,n=G.get("introduction")||[];return i.a.createElement("div",{className:"launching-page"},i.a.createElement("div",{className:"legend"},i.a.createElement("div",{className:"title"},i.a.createElement("h1",null,i.a.createElement("img",{src:j.a,alt:"QRBINGO"}),"QRBINGO")),i.a.createElement("div",{className:"lang-list"},y.languages.map((function(e){return i.a.createElement("a",{key:e.lang,href:"?lang=".concat(e.lang)},e.label)}))),i.a.createElement("div",{className:"introduction"},i.a.createElement("ol",null,n.map((function(e,t){return i.a.createElement("li",{key:t},i.a.createElement("br",null),i.a.createElement("div",null,e))})))),i.a.createElement("div",{className:"start-button-wrapper"},i.a.createElement("button",{onClick:t},"START!"))))},V=(n(41),n(42),function(e){var t=e.close,n=e.content,r=e.show,o=Object(a.useState)(0),c=Object(u.a)(o,2),l=c[0],s=c[1];return Object(a.useEffect)((function(){s(r?1:0)}),[r]),i.a.createElement("div",{className:"Modal_Container",style:{opacity:l}},i.a.createElement("div",{className:"Modal_Content_Wrapper"},i.a.createElement("div",{className:"Modal_Content_Background",onClick:t},i.a.createElement("div",{className:"Modal_Content"},n))),i.a.createElement("div",{className:"Modal_Background"}))}),z=Object(a.createContext)({modal:null,setModalState:function(e){},closeModal:function(){}}),Q=(n(13),n(17)),W=n.n(Q),H=function(e){var t=e.payload,n=e.close,a=G.get("found",[t.value.toString().toUpperCase()]);return i.a.createElement("div",{className:"Content_Wrapper"},i.a.createElement("div",{className:"Content_Icon"},i.a.createElement("img",{src:W.a,alt:"Found"})),i.a.createElement("div",{className:"Content_Message"},i.a.createElement("div",null,a)),i.a.createElement("div",{className:"Content_Actions"},i.a.createElement("button",{onClick:n},"VIEW YOUR CARD")))},q=n(18),Y=n.n(q),K=function(e){var t=e.close,n=G.get("congratulations")||[];return i.a.createElement("div",{className:"Content_Wrapper",onClick:t},i.a.createElement("div",{className:"Content_Icon"},i.a.createElement("img",{src:Y.a,alt:"Congraturations!"})),i.a.createElement("div",{className:"Content_Message"},i.a.createElement("h1",null,"BINGO!!!")),i.a.createElement("div",{className:"Content_Message Lines"},n.map((function(e,t){return i.a.createElement("p",{key:t},e)}))))},X=function(){var e=b.exists(),t=Object(a.useState)({sheet:e}),n=Object(u.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)({content:null,show:!1}),d=Object(u.a)(c,2),m=d[0],h=d[1],v=function(){setTimeout((function(){return h({show:!1})}),400),h({show:!1,content:m.content}),"function"===typeof m.resolve&&m.resolve()},f=function(e){return new Promise((function(t){h({show:!1,content:e,resolve:t}),setTimeout((function(){return h({show:!0,content:e,resolve:t})}))}))},p={modal:null,setModalState:function(e){return h(e)},closeModal:v},g=function(){var e=Object(s.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=r.sheet.hit(t.payload)){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,f(i.a.createElement(H,{payload:t.payload,close:v}));case 5:o({sheet:r.sheet.punch(n)}),r.sheet.isBingo()&&setTimeout((function(){f(i.a.createElement(K,{close:v}))}),500);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return i.a.createElement(z.Provider,{value:p},i.a.createElement("div",{className:"App"},r.sheet?i.a.createElement(F,{bingo:r,punch:g,reset:function(){window.confirm("Are you sure to delete current progress and start new game?")&&o({sheet:b.init(y.bingo).save()})}}):i.a.createElement(D,{start:function(){return o({sheet:b.init(y.bingo).save()})}}),m.content?i.a.createElement(V,Object.assign({close:v},m)):null))};o.a.render(i.a.createElement(X,null),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.8d5820bc.chunk.js.map