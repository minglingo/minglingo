(this.webpackJsonpqrbingo=this.webpackJsonpqrbingo||[]).push([[0],[,,,,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.8c74ea89.svg"},,,,function(e,t,n){},,,function(e,t,n){e.exports=n.p+"static/media/caret-left.4fa5bd11.svg"},function(e,t,n){e.exports=n.p+"static/media/check.33410986.svg"},function(e,t,n){e.exports=n.p+"static/media/gift.f4453374.svg"},function(e,t,n){e.exports=n(44)},,,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(16),l=n.n(i),o=(n(26),n(7)),s=n.n(o),c=n(9),u=n(2),h=n(8),v=n(3),d=n(10),m=n(5),f=n(4),p=n(6),g=n(1),b=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).value=void 0,n.label=void 0,n.description=void 0,n.imageURL=void 0,n.position=void 0,n.punched=void 0,n.bingo=void 0,n.value=e.value,n.label=e.label,n.description=e.description,n.imageURL=e.imageURL,n.position=e.position||{},n.punched=e.punched||!1,n.bingo=e.bingo||!1,n}return Object(p.a)(t,e),t}(g.Model);b.__ns="BingoSlot";var E=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e))).succeeded=void 0,n.slots=void 0,n.slots=e.slots,n.succeeded=e.succeeded||new Date,n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"draw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=this.slots[0].position,a=this.slots[this.slots.length-1].position,r=t/this.slots.length,i=r/2;e.strokeStyle="blue",e.lineWidth=t/100,e.beginPath(),e.moveTo(i+r*n.x,i+r*n.y),e.lineTo(i+r*a.x,i+r*a.y),e.stroke()}}]),t}(g.Model);E.schema={succeeded:g.Types.date,slots:g.Types.arrayOf(g.Types.reference(b))};var y=function(e){function t(e){var n;return Object(v.a)(this,t),(n=Object(m.a)(this,Object(f.a)(t).call(this,e,"singleton"))).width=void 0,n.height=void 0,n.slots=void 0,n.length=void 0,n.lines=void 0,n.initialized=void 0,n.width=e.width,n.height=e.height,n.slots=e.slots,n.lines=e.lines||[],n.length=n.width*n.height,n.initialized=e.date||new Date,n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"hit",value:function(e){var t=e.value instanceof Array?e.value:[e.value];return this.slots.flat().filter((function(e){return t.some((function(t){return e.value==t}))}))}},{key:"punch",value:function(e){var t=this;return this.slots.flat().filter((function(t){return e.some((function(e){return e.value==t.value}))})).map((function(e){var n=e.position,a=n.x,r=n.y;t.slots[r][a].punched=!0})),this.lines=this.getBingoLines(),this.save()}},{key:"isBingo",value:function(){return 0!==this.getBingoLines().length}},{key:"isCompleted",value:function(){var e=this.width,t=this.height;return this.getBingoLines().length>=e+t+2}},{key:"getBingoNumber",value:function(){return this.getBingoLines().length}},{key:"getBingoLines",value:function(){var e=[];return e.push.apply(e,Object(h.a)(this.getHorizontalBingo())),e.push.apply(e,Object(h.a)(this.getVerticalBingo())),e.push.apply(e,Object(h.a)(this.getDiagonalBingo())),this.markSlotsIfBingo(e),e}},{key:"markSlotsIfBingo",value:function(e){e.map((function(e){return e.slots.map((function(e){return e.bingo=!0}))}))}},{key:"getHorizontalBingo",value:function(){for(var e=[],t=0;t<this.height;t++)this.slots[t].every((function(e){return e.punched}))&&e.push(new E({slots:this.slots[t]}));return e}},{key:"getVerticalBingo",value:function(){for(var e=this,t=[],n=function(n){e.slots.every((function(e){return e[n].punched}))&&t.push(new E({slots:e.slots.map((function(e){return e[n]})).flat()}))},a=0;a<this.width;a++)n(a);return t}},{key:"getDiagonalBingo",value:function(){var e=[];if(this.width!==this.height)return[];var t=Math.min(this.width,this.height),n=this.slots.map((function(e,t){return e[t]}));n.every((function(e){return e.punched}))&&e.push(new E({slots:n}));var a=this.slots.map((function(e,n){return e[t-n-1]}));return a.every((function(e){return e.punched}))&&e.push(new E({slots:a})),e}}],[{key:"arrayShuffle",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),a=[e[n],e[t]];e[t]=a[0],e[n]=a[1]}return e}},{key:"getShuffledListWithLength",value:function(e,t){for(var n=[];n.length<t;)n.push.apply(n,Object(h.a)(this.arrayShuffle(e)));return n.slice(0,t)}},{key:"createSlot",value:function(e,t,n){var a=e.value,r=e.label,i=e.description,l=e.imageURL,o=[t%n,Math.floor(t/n)];return new b({value:a,label:r,description:i,imageURL:l,position:{x:o[0],y:o[1]}})}},{key:"init",value:function(e){var n=this,a=e.sheet,r=a.width,i=a.height,l=Array(i).fill(!0).map((function(){return[]})),o=r*i;return this.getShuffledListWithLength(e.slot.variations,o).map((function(e,t){var a=n.createSlot(e,t,r);return l[a.position.y].push(a)})),new t({width:e.sheet.width,height:e.sheet.height,slots:l})}},{key:"exists",value:function(){return this.find("singleton")}}]),t}(g.Model);y.__ns="BingoSheet",y.schema={width:g.Types.number,height:g.Types.number,slots:g.Types.arrayOf(g.Types.arrayOf(g.Types.reference(b))),lines:g.Types.arrayOf(g.Types.reference(E)),initialized:g.Types.date};var O={application:{name:"QRBINGO"},bingo:{sheet:{width:5,height:5},slot:{variations:[{value:"istj",label:"IS\nTJ",description:"The Inspector"},{value:"infj",label:"IN\nFJ",description:"The Counselor"},{value:"intj",label:"IN\nTJ",description:"The Mastermind"},{value:"enfj",label:"EN\nFJ",description:"The Giver"},{value:"istp",label:"IS\nTP",description:"The Craftsman"},{value:"esfj",label:"ES\nFJ",description:"The Provider"},{value:"infp",label:"IN\nFP",description:"The Idealist"},{value:"esfp",label:"ES\nFP",description:"The Performer"},{value:"enfp",label:"EN\nFP",description:"The Champion"},{value:"estp",label:"ES\nTP",description:"The Doer"},{value:"estj",label:"ES\nTJ",description:"The Supervisor"},{value:"entj",label:"EN\nTJ",description:"The Commander"},{value:"intp",label:"IN\nTP",description:"The Thinker"},{value:"isfj",label:"IS\nFJ",description:"The Nurturer"},{value:"entp",label:"EN\nTP",description:"The Visionary"},{value:"isfp",label:"IS\nFP",description:"The Composer"},{value:"sp",label:"SP"},{value:"p",label:"P"},{value:"ap",label:"AP"},{value:"em",label:"EM"},{value:"asc",label:"ASC"},{value:"ba",label:"BA"},{value:"mirts",label:"MI/RTS"},{value:"dadqb",label:"DAD/QB"},{value:"se",label:"S/E"},{value:"rni",label:"R&I"},{value:"itfac",label:"IT/FAC"},{value:"alf",label:"A/L/F"},{value:"ea",label:"EA"},{value:"comvg",label:"COM/VG"},{value:"pdrec",label:"PD/REC"},{value:"soa",label:"SO\nAdults"},{value:"soc",label:"SO\nChildren"},{value:"off",label:"OFF"},{value:"6ma",label:"6MA"},{value:"nep",label:"NEP"},{value:"kan",label:"KAN"},{value:"gt",label:"GT"},{value:"yep",label:"YEP"},{value:"brs",label:"BRS"}]}},languages:[{lang:"ja",label:"\u65e5\u672c\u8a9e",default:!0},{lang:"en",label:"English"}],messages:{en:{start_btn:"START!",introduction:["Scan QR code of people around you","Collect different trait tags","Aim for Bingo and win a prize!"],congratulation:["Congrats!","Show this screen to event staff","and get an awesome prize!"],total_bingo_count:function(e){return r.a.createElement("span",null,"You have ",e[0]," bingo!")},found:function(e){return r.a.createElement("span",null,"Found ",r.a.createElement("b",null,e.join(", ")),"!")}},ja:{start_btn:"\u30b9\u30bf\u30fc\u30c8\uff01",introduction:["\u8fd1\u304f\u306e\u4eba\u306eQR\u30b3\u30fc\u30c9\u3092\u30b9\u30ad\u30e3\u30f3","\u3044\u308d\u3093\u306a\u30bf\u30a4\u30d7\u306e\u30bf\u30b0\u3092\u96c6\u3081\u3088\u3046\uff01","\u30d3\u30f3\u30b4\u3092\u72d9\u3063\u3066\u5546\u54c1\u3092\u3082\u3089\u304a\u3046\uff01"],congratulation:["\u304a\u3081\u3067\u3068\u3046\u3054\u3056\u3044\u307e\u3059\uff01","\u304a\u8fd1\u304f\u306e\u30b9\u30bf\u30c3\u30d5\u306b\u3053\u3061\u3089\u306e","\u753b\u9762\u3092\u898b\u305b\u3066\u3001\u7d20\u6575\u306a\u30ae\u30d5\u30c8\u3092","\u304a\u53d7\u3051\u53d6\u308a\u304f\u3060\u3055\u3044\u3002"],total_bingo_count:function(e){return r.a.createElement("span",null,e[0],"\u30d3\u30f3\u30b4\u9054\u6210\uff01")},found:function(e){return r.a.createElement("span",null,r.a.createElement("b",null,e.join(", "))," \u3092\u307f\u3064\u3051\u307e\u3057\u305f\uff01")}}}},w=Object(a.createContext)({bingo:{sheet:y.init(O.bingo)},punch:function(e){},scanning:!1,startScanning:function(){},stopScanning:function(){}}),j=n(11),N=n.n(j),S=(n(37),function(e){var t=e.app;e.sheet,e.reset;return r.a.createElement("div",{className:"game-menu"},r.a.createElement("h1",null,r.a.createElement("img",{src:N.a,alt:t.name}),r.a.createElement("span",null,t.name)))}),T=n(12),_=n.n(T),k=(n(38),function(e){var t=e.sheet,n=t.lines,i=Object(a.createRef)();return setTimeout((function(){return i.current?function(e,a){var r=e.getContext("2d");r&&(n.map((function(e){return e.draw(r,a)})),console.log("Completed:",t.isCompleted()))}(i.current,1e3):null})),r.a.createElement("canvas",{width:1e3,height:1e3,ref:i})}),C=function(e){var t=e.sheet;return r.a.createElement("div",{className:"Bingo_Line_Drawer_Container"},r.a.createElement(k,{sheet:t}))},B=function(e){var t=e.slot;return r.a.createElement("div",{className:_()("sheet-cell",{punched:t.punched,bingo:t.bingo})},r.a.createElement("div",{className:"hole"},t.label.split("\n").map((function(e,t){return r.a.createElement("div",{key:t},e)}))))},P=function(e){var t=e.row;return r.a.createElement("div",{className:"sheet-row"},t.map((function(e,t){return r.a.createElement(B,{key:t,slot:e})})))},I=function(e){var t=e.sheet;return r.a.createElement("div",{className:"sheet-container"},r.a.createElement("div",{className:_()("sheet-wrapper",{bingo:t.isBingo()})},t.slots.map((function(e,t){return r.a.createElement(P,{key:t,row:e})}))),r.a.createElement(C,{sheet:t}))},M=(n(39),n(17)),R=n(13),x=n.n(R);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function L(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(M.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({x:(e.videoWidth-t.width)/2,y:(e.videoHeight-t.height)/2},t)}var D=n(18),F=n.n(D),G=/(iPhone|iPad|iPod|Android)/i.test(navigator.userAgent)?{exact:"environment"}:"user",J=function(e,t,n){var a=document.createElement("canvas"),r=[e.width,e.height];a.width=r[0],a.height=r[1],n(function(e){var t=e.video,n=e.canvas,a=e.size;if(!n)return null;if(!t)return null;if(!t.srcObject)return null;var r=n.getContext("2d");if(!r)return null;var i=L(t,a);r.drawImage(t,i.x,i.y,i.width,i.height,0,0,n.width,n.height);var l=r.getImageData(0,0,t.width,t.height);return x()(l.data,t.width,t.height)}({video:e,canvas:a,size:t}))},V=function(e){var t=e.stream,n=e.stop,i=e.video,l=Object(a.createRef)();return Object(a.useEffect)((function(){var e,a=i.current;if(!a)return console.error("video tag is not ready");a.srcObject=t;var r=l.current,o=r.offsetWidth,s=r.offsetHeight;e=setInterval(J.bind(null,a,{width:o,height:s},(function(a){var r;a&&(clearInterval(e),r=JSON.parse(a.data),i.current&&i.current.pause(),n(t,r))})),1e3)}),[]),r.a.createElement("div",{className:"Video_Stream_Container"},r.a.createElement("div",{className:"Video_Stream_Navigation Top"},r.a.createElement("div",{className:"nav-left",onClick:function(){return n(t)}},r.a.createElement("img",{src:F.a,alt:"back",className:"nav-item-img"}),r.a.createElement("span",null,"Back")),r.a.createElement("div",{className:"nav-title"},"Scan QR code"),r.a.createElement("div",{className:"nav-right"})),r.a.createElement("div",{className:"Video_Stream_Movie"},r.a.createElement("div",{className:"Video_Stream_Detect_Area"},r.a.createElement("div",{className:"Video_Stream_Detect_Area_Line",ref:l})),r.a.createElement("video",{ref:i,muted:!0,autoPlay:!0,playsInline:!0,width:"100%",height:"100%"})),r.a.createElement("div",{className:"Video_Stream_Navigation Bottom"},r.a.createElement("div",{className:"nav-title"},"Place code inside the box")))},W=function(e){var t=e.punch,n=Object(a.useState)(),i=Object(u.a)(n,2),l=i[0],o=i[1],h=Object(a.createRef)(),v=Object(a.createRef)(),d=function(){var e=Object(c.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.current.offsetWidth,e.next=3,navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:G,width:t,height:t}});case 3:n=e.sent,o(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"video-capture-container",ref:v},r.a.createElement("button",{onClick:d},"SCAN QR CODE"),l?r.a.createElement(V,{stream:l,stop:function(e,n){setTimeout((function(){return o(void 0)}),0),e.getTracks().map((function(e){return e.stop()})),n&&t(n)},video:h}):null)},z=(n(40),function(e){var t=e.reset;return r.a.createElement(w.Consumer,null,(function(e){var n=e.bingo,a=e.punch;return r.a.createElement("div",{className:"Game"},r.a.createElement("div",{className:"Game_Title"},r.a.createElement(S,{app:O.application,sheet:n.sheet,reset:t})),r.a.createElement("div",{className:"Game_Contents"},r.a.createElement("div",{className:"Bingo_Sheet_Label"},r.a.createElement("h2",null,"YOUR BINGO SHEET"),n.sheet.lines.length?r.a.createElement("span",null,n.sheet.lines.length," bingo"):null),r.a.createElement(I,{sheet:n.sheet}),r.a.createElement(W,{punch:a})))}))}),U=function(e){var t=e.bingo,n=e.punch,i=e.reset,l=Object(a.useState)(!1),o=Object(u.a)(l,2),s=o[0],c=o[1],h={bingo:t,punch:n,scanning:s,startScanning:function(){return c(!0)},stopScanning:function(){return c(!1)}};return r.a.createElement(w.Provider,{value:h},r.a.createElement(z,{reset:i}))},Q=(n(41),O.messages);var H={get:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=new URL(window.location.href).searchParams.get("lang")||function(){var e=O.languages||[];if(!e)return"ja";var t=e.find((function(e){return e.default}));return t?t.lang:"ja"}(),a=Q[n][e];return"undefined"===typeof a?null:"function"===typeof a?a(t):a}},Y=function(e){var t=e.start,n=H.get("introduction")||[],a=H.get("start_btn");return r.a.createElement("div",{className:"launching-page"},r.a.createElement("div",{className:"legend"},r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,r.a.createElement("img",{src:N.a,alt:"QRBINGO"}),"QRBINGO")),r.a.createElement("div",{className:"lang-list"},O.languages.map((function(e){return r.a.createElement("a",{key:e.lang,href:"?lang=".concat(e.lang)},e.label)}))),r.a.createElement("div",{className:"introduction"},r.a.createElement("ol",null,n.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("br",null),r.a.createElement("div",null,e))})))),r.a.createElement("div",{className:"start-button-wrapper"},r.a.createElement("button",{onClick:t},a))))},q=(n(42),n(43),function(e){var t=e.close,n=e.content,i=e.show,l=Object(a.useState)(0),o=Object(u.a)(l,2),s=o[0],c=o[1];return Object(a.useEffect)((function(){c(i?1:0)}),[i]),r.a.createElement("div",{className:"Modal_Container",style:{opacity:s}},r.a.createElement("div",{className:"Modal_Content_Wrapper"},r.a.createElement("div",{className:"Modal_Content_Background",onClick:t},r.a.createElement("div",{className:"Modal_Content"},n))),r.a.createElement("div",{className:"Modal_Background"}))}),K=Object(a.createContext)({modal:null,setModalState:function(e){},closeModal:function(){}}),X=(n(15),n(19)),Z=n.n(X);var $=function(e){var t=e.payload,n=e.close,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return O.bingo.slot.variations.filter((function(t){return e.some((function(e){return e===t.value}))})).map((function(e){return e.label.split("\n").join("")}))}(t.value),i=H.get("found",a);return r.a.createElement("div",{className:"Content_Wrapper"},r.a.createElement("div",{className:"Content_Icon"},r.a.createElement("img",{src:Z.a,alt:"Found"})),r.a.createElement("div",{className:"Content_Message"},r.a.createElement("div",null,i)),r.a.createElement("div",{className:"Content_Actions"},r.a.createElement("button",{onClick:n},"VIEW YOUR CARD")))},ee=n(20),te=n.n(ee),ne=function(e){var t=e.close,n=e.count,a=H.get("congratulations")||[],i=H.get("total_bingo_count",[n]);return r.a.createElement("div",{className:"Content_Wrapper",onClick:t},r.a.createElement("div",{className:"Content_Icon"},r.a.createElement("img",{src:te.a,alt:"Congraturations!"})),r.a.createElement("div",{className:"Content_Message"},r.a.createElement("h1",null,"BINGO!!!")),r.a.createElement("div",{className:"Content_Message Lines"},a.map((function(e,t){return r.a.createElement("p",{key:t},e)})),i))},ae=function(){var e=y.exists(),t=Object(a.useState)({sheet:e}),n=Object(u.a)(t,2),i=n[0],l=n[1],o=Object(a.useState)({content:null,show:!1}),h=Object(u.a)(o,2),v=h[0],d=h[1],m=function(){setTimeout((function(){return d({show:!1})}),400),d({show:!1,content:v.content}),"function"===typeof v.resolve&&v.resolve()},f=function(e){return new Promise((function(t){d({show:!1,content:e,resolve:t}),setTimeout((function(){return d({show:!0,content:e,resolve:t})}))}))},p={modal:null,setModalState:function(e){return d(e)},closeModal:m},g=function(){var e=Object(c.a)(s.a.mark((function e(t){var n,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(r.a.createElement($,{payload:t.payload,close:m}));case 2:if((n=i.sheet.hit(t.payload)).length){e.next=5;break}return e.abrupt("return");case 5:a=i.sheet.lines.length,l({sheet:i.sheet.punch(n)}),a<i.sheet.lines.length&&setTimeout((function(){f(r.a.createElement(ne,{close:m,count:i.sheet.lines.length}))}),500);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(K.Provider,{value:p},r.a.createElement("div",{className:"App"},i.sheet?r.a.createElement(U,{bingo:i,punch:g,reset:function(){window.confirm("Are you sure to delete current progress and start new game?")&&l({sheet:y.init(O.bingo).save()})}}):r.a.createElement(Y,{start:function(){return l({sheet:y.init(O.bingo).save()})}}),v.content?r.a.createElement(q,Object.assign({close:m},v)):null))};l.a.render(r.a.createElement(ae,null),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.80e3e2dc.chunk.js.map