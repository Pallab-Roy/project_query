(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,s){},138:function(e,t,s){},139:function(e,t,s){},140:function(e,t,s){},141:function(e,t,s){},142:function(e,t,s){},143:function(e,t,s){"use strict";s.r(t);var c,a=s(1),n=s.n(a),i=s(27),r=s.n(i),l=(s(99),s(100),s(13)),o=s.n(l),j=s(25),d=s(4),u=s(86),b=s.n(u),h=s(88),O=s.n(h),p=s(89),x=s.n(p),m=s(62),g=s.n(m),f=s(90),v=s.n(f),_=s(91),w=s.n(_),N=s(28),y=s.n(N),q=(s(67),s.p+"static/media/logo.6c31f4d1.png"),S=s(170),A=s(168),k=s(169),C=s(92),E=s.n(C),I=s(163),D=s(164),T=s(52),B={body:"white",text:"#363537",toggleBorder:"#FFF",gradient:"linear-gradient(#39598A, #79D7ED)"},F={body:"#363537",text:"#FAFAFA",toggleBorder:"#6B8096",gradient:"linear-gradient(#091236, #1E215D)"},P=s(82),L=Object(T.b)(c||(c=Object(P.a)(["\n  body {\n    background: ",";\n    color: ",";\n    transition: all 0.25s linear;\n  }\n  input {\n    color: ",";\n  }\n  .qHeaderPop {\n    background: ",";\n  }"])),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.body})),R=s(6),H=s(7),z=s(8),Q=s.n(z),M=s(44),U=s(0);y.a.setAppElement("#root");var W=function(e){var t,s=Object(R.e)(),c=Object(a.useState)((function(){return!1})),n=Object(d.a)(c,2),i=n[0],r=n[1],l=Object(a.useState)("light"),o=Object(d.a)(l,2),j=o[0],u=o[1],h=e.data.userData;return t=h?"".concat("","/uploads/images/").concat(h.image):"https://img.icons8.com/cotton/2x/user-male.png",console.log(h),Object(U.jsxs)(T.a,{theme:"light"===j?B:F,children:[Object(U.jsx)(L,{}),Object(U.jsxs)("div",{className:"qHeader",style:{visibility:"visible"},children:[Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("div",{className:"qHeader__logo",children:Object(U.jsx)("img",{src:q,alt:""})})}),Object(U.jsxs)("div",{className:"qHeader__icons",children:[Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("div",{className:"active qHeader__icon",children:Object(U.jsx)(b.a,{})})}),Object(U.jsx)("div",{className:"qHeader__icon",children:Object(U.jsx)(O.a,{})}),Object(U.jsx)("div",{className:"qHeader__icon",children:Object(U.jsx)(x.a,{})}),Object(U.jsx)("div",{className:"qHeader__icon",children:Object(U.jsx)(g.a,{})}),Object(U.jsx)("div",{className:"qHeader__icon",children:Object(U.jsx)(v.a,{})})]}),Object(U.jsxs)("div",{className:"qHeader__input",children:[Object(U.jsx)(w.a,{}),Object(U.jsx)("input",{type:"text",placeholder:"Search Quora",value:e.data.searchText,onChange:function(t){s.push("/search"),e.data.setSearchText(t.target.value)},onFocus:function(){s.push("/search")}})]}),Object(U.jsxs)("div",{className:"qHeader__Rem qHeader__icons",children:[Object(U.jsx)("div",{className:"qHeader__avatar",children:Object(U.jsxs)(M.a,{children:[Object(U.jsx)(M.a.Toggle,{variant:"success",id:"dropdown-basic",children:Object(U.jsx)(S.a,{className:"Avatar",src:t})}),Object(U.jsx)(M.a.Menu,{children:h?Object(U.jsxs)("div",{children:[Object(U.jsx)(H.b,{to:"/profile",className:"dropdown-item",role:"button",children:"Profile"}),Object(U.jsx)(M.a.Item,{onClick:function(){window.confirm("sure to logout?")?s.push("/logout"):s.push("/")},children:"Logout"})]}):Object(U.jsxs)("div",{children:[Object(U.jsx)(H.b,{to:"/login",className:"dropdown-item",role:"button",children:"Login"}),Object(U.jsx)(H.b,{to:"/register",className:"dropdown-item",role:"button",children:"Register"})]})})]})}),Object(U.jsx)("div",{className:"qHeader__icon",children:Object(U.jsx)(E.a,{className:"darkModeButton",onClick:function(){"light"===j&&!1===i?(u("dark"),r(!0)):(u("light"),r(!1))}})}),Object(U.jsx)(A.a,{onClick:function(){h?e.data.setIsModalOpen(!0):window.confirm("Unauthrised! want to login?")&&s.push("/login")},children:"Add Question"}),Object(U.jsxs)(y.a,{isOpen:e.data.IsmodalOpen,onRequestClose:function(){return e.data.setIsModalOpen(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:700,height:600,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-300px",marginLeft:"-350px"}},children:[Object(U.jsxs)("div",{className:"modal__title",children:[Object(U.jsx)("h5",{children:"Add Question"}),Object(U.jsx)("h5",{children:"Share Link"})]}),Object(U.jsxs)("div",{className:"modal__info",children:[Object(U.jsx)(S.a,{className:"Avatar",src:t}),Object(U.jsxs)("p",{children:[h?h.email:"none@none.com"," asked"]}),Object(U.jsxs)("div",{className:"modal__scope",children:[Object(U.jsx)(g.a,{}),Object(U.jsx)("p",{children:"Public"}),Object(U.jsx)(I.a,{})]})]}),Object(U.jsxs)("div",{className:"modal__Field",children:[Object(U.jsx)(k.a,{value:e.data.input,onChange:function(t){return e.data.setInput(t.target.value)},type:"text",placeholder:"Start your question with 'What', 'How', 'Why', etc. "}),Object(U.jsxs)("div",{className:"modal__fieldLink",children:[Object(U.jsx)(D.a,{}),Object(U.jsx)("input",{value:e.data.inputUrl,onChange:function(t){return e.data.setInputUrl(t.target.value)},type:"text",placeholder:"Optional: inclue a link that gives context"})]})]}),Object(U.jsxs)("div",{className:"modal__buttons",children:[Object(U.jsx)("button",{className:"cancle",onClick:function(){return e.data.setIsModalOpen(!1)},children:"Cancel"}),Object(U.jsx)("button",{type:"sumbit",onClick:function(t){t.preventDefault(),Q.a.post("/api/question",{question:e.data.input}).then((function(t){200!==t.status?window.alert("Server not responding!"):(window.alert("Your Question has been added"),e.data.setIsModalOpen(!1),e.data.setInput(""),e.data.setInputUrl(""))})).catch((function(e){console.log(e)}))},className:"add",children:"Add Question"})]})]})]})]})]})},Y=s(165);s(138);var G=function(){return Object(U.jsxs)("div",{className:"sidebarOptions",children:[Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg",alt:""}),Object(U.jsx)("p",{children:"History"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg",alt:""}),Object(U.jsx)("p",{children:"Business"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-1913-100-B8JrwaVauFzsaTSqXDqoWLCXzQb2mTE9.jpeg",alt:""}),Object(U.jsx)("p",{children:"Psychology"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg",alt:""}),Object(U.jsx)("p",{children:"Cooking"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg",alt:""}),Object(U.jsx)("p",{children:"Music"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg",alt:""}),Object(U.jsx)("p",{children:"Science"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-1140-100-24q3tiv4WhPssc5TGwf0mvCM5aiqGVXW.jpeg",alt:""}),Object(U.jsx)("p",{children:"Health"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg",alt:""}),Object(U.jsx)("p",{children:"Movies"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg",alt:""}),Object(U.jsx)("p",{children:"Technology"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg",alt:""}),Object(U.jsx)("p",{children:"Education"})]}),Object(U.jsxs)("div",{className:"sidebarOption",children:[Object(U.jsx)(Y.a,{}),Object(U.jsx)("p",{className:"text",children:"Discover Spaces"})]})]})};s(139);var V=function(){return Object(U.jsx)("div",{className:"sidebar",children:Object(U.jsx)(G,{})})};s(140),s(141);var X=function(){return Object(U.jsxs)("div",{className:"widget__contents",children:[Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1737435-100-jxcfmjdvwvpkcketifttdmeeimxcatua.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Mobile App Programmer"}),Object(U.jsx)("p",{children:"The best Mobile App Development Company"})]})]}),Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1574818-100-mzdwostcualpwcxekyrvyqqpychetdoc.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Quota of Quotes"}),Object(U.jsx)("p",{children:"Daily dosage of unforgettable lines from ..."})]})]}),Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1644613-100-ydflucgoeztbhwyurtmlqqrgfqmjmhpl.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Art & Artist"}),Object(U.jsx)("p",{children:"A Space retated to creating, practicing an..."})]})]}),Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1647318-100-kmwvqbpzatmylibelrowrerfqbspekwo.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Friedrich Nietzche"}),Object(U.jsx)("p",{children:"A Space dedicated to great work of Friedrich..."})]})]}),Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1578647-100-xkggvbyzfkvzhyklewtkjijefekqbazb.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Stock Market Strategies"}),Object(U.jsx)("p",{children:"Everything about investing in Stock..."})]})]}),Object(U.jsxs)("div",{className:"widget__content",children:[Object(U.jsx)("img",{src:"https://qphs.fs.quoracdn.net/main-thumb-ti-1711686-100-glvgnbatdxpjbhrkyphlfamqrryfccvp.jpeg",alt:""}),Object(U.jsxs)("div",{className:"widget__contentTitle",children:[Object(U.jsx)("h5",{children:"Architecture World"}),Object(U.jsx)("p",{children:"All about civil architecture..."})]})]})]})};var J=function(){return Object(U.jsxs)("div",{className:"widget",children:[Object(U.jsx)("div",{className:"widget__header",children:Object(U.jsx)("h5",{children:"Spaces to follow"})}),Object(U.jsx)("div",{className:"widget__contents",children:Object(U.jsx)(X,{})})]})},Z=(s(77),s(57),s(33)),K=s.n(Z),$=s(34),ee=s.n($),te=s(35),se=s.n(te),ce=s(36),ae=s.n(ce),ne=s(166),ie=s(167);var re=function(e){var t=Object(R.e)(),s=Object(a.useState)(!1),c=Object(d.a)(s,2),n=c[0],i=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],u=Object(a.useState)([]),b=Object(d.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)({question:"",userEmail:"",userName:"",userImage:"",answers:[{userEmail:"",userName:"",userImage:"",anser:""}]}),x=Object(d.a)(p,2),m=x[0],g=x[1],f=e.data.input,v=e.data.userData,_=function(e){e.preventDefault(),Q.a.post("/api/answer",{question:m,answer:o}).then((function(e){200!==e.status?window.alert("Server not responding!"):(window.alert("Your Answer has been added"),i(!1),j(""))})).catch((function(e){console.log(e),window.alert("Server not responding!")}))};return Object(a.useEffect)((function(){Q.a.get("/api/queans").then((function(e){O(e.data)})).catch((function(e){console.log(e)}))}),[f,o]),Object(U.jsx)(U.Fragment,{children:h.map((function(e,s){return Object(U.jsxs)("div",{className:"post",children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsxs)("div",{className:"post__body",children:[Object(U.jsxs)("div",{className:"post__question",children:[Object(U.jsx)("p",{children:e.question}),Object(U.jsx)(A.a,{onClick:function(){v?(i(!0),g(e)):window.confirm("Unauthrised! want to login?")&&t.push("/login")},className:"post__btnAnswer",children:"Answer"}),Object(U.jsxs)(y.a,{isOpen:n,onRequestClose:function(){return i(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:680,height:550,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-250px",marginLeft:"-350px"}},children:[Object(U.jsxs)("div",{className:"modal__question",children:[Object(U.jsx)("h1",{children:m.question}),Object(U.jsxs)("p",{children:["asked by"," ",Object(U.jsx)("span",{className:"name",children:m.userEmail})," ","","on"," ",Object(U.jsx)("span",{className:"name",children:new Date(m.createdAt).toLocaleString()})]})]}),Object(U.jsx)("div",{className:"modal__answer",children:Object(U.jsx)("textarea",{value:o,onChange:function(e){return j(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(U.jsxs)("div",{className:"modal__button",children:[Object(U.jsx)("button",{className:"cancle",onClick:function(){return i(!1)},children:"Cancel"}),Object(U.jsx)("button",{type:"sumbit",onClick:_,className:"add",children:"Add Answer"})]})]})]}),Object(U.jsx)("hr",{}),Object(U.jsxs)("small",{style:{textAlign:"left"},children:[e.answers.length," Answers"]}),Object(U.jsx)("hr",{}),Object(U.jsx)("div",{className:"post__answer",children:Object(U.jsx)("ul",{style:{position:"relative",paddingBottom:"5px",listStyleType:"square"},children:e.answers.map((function(e,t){return Object(U.jsx)("li",{style:{textAlign:"left",paddingTop:"1rem",paddingBottom:"1rem"},title:e.userEmail+" on "+new Date(e.createdAt).toLocaleString(),children:Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsx)("div",{className:"post__question",style:{padding:"1rem"},children:Object(U.jsx)("p",{children:e.answer})})]})},t)}))})})]}),Object(U.jsxs)("div",{className:"post__footer",children:[Object(U.jsxs)("div",{className:"post__footerAction",children:[Object(U.jsx)(K.a,{}),Object(U.jsx)(ee.a,{})]}),Object(U.jsx)(se.a,{}),Object(U.jsx)(ae.a,{}),Object(U.jsxs)("div",{className:"post__footerLeft",children:[Object(U.jsx)(ne.a,{}),Object(U.jsx)(ie.a,{})]})]})]},s)}))})};var le=function(e){var t=e.data;return Object(U.jsx)("div",{className:"feed",children:Object(U.jsx)(re,{data:t})})};s(78);var oe=function(){var e=Object(R.e)(),t=Object(a.useState)(null),s=Object(d.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],b=Object(a.useState)(),h=Object(d.a)(b,2),O=h[0],p=h[1],x=Object(a.useState)(!1),m=Object(d.a)(x,2),g=m[0],f=m[1],v=Object(a.useState)(""),_=Object(d.a)(v,2),w=_[0],N=_[1],y=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get("/api/user").then((function(e){n(e.data)})).catch((function(t){"Error: Request failed with status code 425"==t?n(null):200===!t.status&&(window.alert("Server not responding!"),e.push("/login"))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),Object(U.jsxs)("form",{method:"GET",className:"quora",children:[Object(U.jsx)(W,{data:{userData:c,input:l,setInput:u,searchText:O,setSearchText:p,IsmodalOpen:g,setIsModalOpen:f,inputUrl:w,setInputUrl:N}}),Object(U.jsxs)("div",{className:"quora__content",children:[Object(U.jsx)(V,{}),Object(U.jsx)(le,{data:{userData:c,input:l}}),Object(U.jsx)(J,{})]})]})},je=(s(79),s(53)),de=s.n(je);var ue=function(){var e=Object(R.e)(),t=Object(a.useState)(""),s=Object(d.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],b=function(){var t=Object(j.a)(o.a.mark((function t(s){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:s.preventDefault(),Q.a.post("api/login",{email:c,password:l}).then((function(t){200===t.status?(window.alert("Signin Sucessfully."),e.push("/")):window.alert("Server not responding!")})).catch((function(e){"Error: Request failed with status code 420"==e?window.alert("Please fill the form properly!"):"Error: Request failed with status code 421"==e?window.alert("Invalid Credential!. Please Check your Email and Password"):console.log(e)}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"login",children:Object(U.jsxs)("div",{className:"login__container",children:[Object(U.jsx)("div",{className:"login__logo",children:Object(U.jsx)("img",{src:q,alt:""})}),Object(U.jsxs)("div",{className:"login__desc",children:[Object(U.jsx)("p",{children:"A Place to Share knowledge and better understand the world"}),Object(U.jsx)("p",{style:{color:"royalblue",fontSize:"25px"},children:"By"}),Object(U.jsx)("h3",{children:"Pallab Roy"})]}),Object(U.jsxs)("div",{className:"login__auth",children:[Object(U.jsxs)("div",{className:"login__authOptions",children:[Object(U.jsxs)("div",{className:"login__authOption",children:[Object(U.jsx)("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),Object(U.jsx)("p",{children:"Continue With Google"})]}),Object(U.jsxs)("div",{className:"login__authOption",children:[Object(U.jsx)("img",{className:"login__googleAuth",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",alt:""}),Object(U.jsx)("span",{children:"Continue With Facebook"})]}),Object(U.jsx)("div",{className:"login__authDesc",children:Object(U.jsxs)("p",{children:[Object(U.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Sign Up With Email"}),". By continuing you indicate that you have read and agree to Quora's",Object(U.jsxs)("span",{style:{color:"blue",cursor:"pointer"},children:["Terms of Service"," "]}),"and"," ",Object(U.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Privacy Policy"}),"."]})})]}),Object(U.jsxs)("div",{className:"login__emailPass",children:[Object(U.jsx)("div",{className:"login__label",children:Object(U.jsx)("h4",{children:"Login"})}),Object(U.jsxs)("form",{method:"POST",className:"login__inputFields",children:[Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{name:"email",id:"email",value:c,onChange:function(e){return n(e.target.value)},type:"email",placeholder:"Email"})}),Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{name:"password",id:"password",value:l,onChange:function(e){return u(e.target.value)},type:"password",placeholder:"Password"})})]}),Object(U.jsx)("div",{className:"login__forgButt",children:Object(U.jsxs)("span",{children:["Don't have Account?",Object(U.jsx)(H.b,{to:"/register",className:"loginButton",children:"Register"})]})}),Object(U.jsx)("button",{onClick:b,children:"Login"})]})]}),Object(U.jsxs)("div",{className:"login__lang",children:[Object(U.jsx)("p",{children:"\u0939\u093f\u0928\u094d\u0926\u0940"}),Object(U.jsx)(de.a,{fontSize:"small"})]}),Object(U.jsxs)("div",{className:"login__footer",children:[Object(U.jsx)("p",{children:"About"}),Object(U.jsx)("p",{children:"Languages"}),Object(U.jsx)("p",{children:"Careers"}),Object(U.jsx)("p",{children:"Businesses"}),Object(U.jsx)("p",{children:"Privacy"}),Object(U.jsx)("p",{children:"Terms"}),Object(U.jsx)("p",{children:"Contact"}),Object(U.jsx)("p",{children:"\xa9 Quora Fake Inc. 2021"})]})]})})},be=s(29),he=s(43);var Oe=function(){var e,t,s=Object(R.e)(),c=Object(a.useState)({name:"",email:"",password:"",confirmpassword:"",profileimage:""}),n=Object(d.a)(c,2),i=n[0],r=n[1],l=function(s){e=s.target.name,t=s.target.value,r(Object(he.a)(Object(he.a)({},i),{},Object(be.a)({},e,t)))},u=function(e){var t=e.target.files[0];return!["image/png","image/jpeg","image/gif"].every((function(e){return t.type!==e}))||(window.alert(t.type+" is not a supported format!"),e.target.value="",!1)},b=function(e){var t=e.target.files[0];return!(t.size>5e6)||(window.alert(t.type+" size should be less than 5 MB!"),e.target.value="",!1)},h=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,a,n,r,l,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),c=new FormData,a=i.name,n=i.email,r=i.password,l=i.confirmpassword,j=i.profileimage,""===a||""===n||""===r||""===l||""===j?window.alert("Fill the form properly!"):r!==l?window.alert("Confirm password not match!"):(c.append("profileimage",j),c.append("name",a),c.append("email",n),c.append("password",r),Q.a.post("api/register",c).then((function(e){e.data?(window.alert("Registration Sucessfull."),s.push("/login")):window.alert("Server not responding!")})).catch((function(e){"Error: Request failed with status code 420"==e?(window.alert("Please fill the form properly!"),s.push("/register")):"Error: Request failed with status code 422"==e?(window.alert("Email already exist!"),s.push("/login")):(console.log(e),s.push("/register"))})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(U.jsx)("div",{className:"login",children:Object(U.jsxs)("div",{className:"login__container",children:[Object(U.jsx)("div",{className:"login__logo",children:Object(U.jsx)("img",{src:q,alt:""})}),Object(U.jsxs)("div",{className:"login__desc",children:[Object(U.jsx)("p",{children:"A Place to Share knowledge and better understand the world"}),Object(U.jsx)("p",{style:{color:"royalblue",fontSize:"25px"},children:"By"}),Object(U.jsx)("h3",{children:"Pallab Roy"})]}),Object(U.jsxs)("div",{className:"login__auth",children:[Object(U.jsxs)("div",{className:"login__authOptions",children:[Object(U.jsxs)("div",{className:"login__authOption",children:[Object(U.jsx)("img",{className:"login__googleAuth",src:"https://media-public.canva.com/MADnBiAubGA/3/screen.svg",alt:""}),Object(U.jsx)("p",{children:"Continue With Google"})]}),Object(U.jsxs)("div",{className:"login__authOption",children:[Object(U.jsx)("img",{className:"login__googleAuth",src:"https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo-500x350.png",alt:""}),Object(U.jsx)("span",{children:"Continue With Facebook"})]}),Object(U.jsx)("div",{className:"login__authDesc",children:Object(U.jsxs)("p",{children:[Object(U.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Sign Up With Email"}),". By continuing you indicate that you have read and agree to Quora's",Object(U.jsxs)("span",{style:{color:"blue",cursor:"pointer"},children:["Terms of Service"," "]}),"and"," ",Object(U.jsx)("span",{style:{color:"blue",cursor:"pointer"},children:"Privacy Policy"}),"."]})})]}),Object(U.jsxs)("div",{className:"login__emailPass",children:[Object(U.jsx)("div",{className:"login__label",children:Object(U.jsx)("h4",{children:"Signup"})}),Object(U.jsxs)("form",{method:"POST",className:"login__inputFields",children:[Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{type:"text",name:"name",id:"name",value:i.name,onChange:l,placeholder:"Name"})}),Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{type:"email",name:"email",id:"email",value:i.email,onChange:l,placeholder:"Email"})}),Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{type:"password",name:"password",id:"password",value:i.password,onChange:l,placeholder:"Password"})}),Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{type:"password",name:"confirmpassword",id:"confirmpassword",value:i.confirmpassword,onChange:l,placeholder:"Confirm Password"})}),Object(U.jsx)("div",{className:"login__inputField",children:Object(U.jsx)("input",{type:"file",onChange:function(e){void 0===e.target.files[0]?window.alert("Please select an image!"):u(e)&&b(e)&&r(Object(he.a)(Object(he.a)({},i),{},{profileimage:e.target.files[0]}))}})})]}),Object(U.jsx)("div",{className:"login__forgButt",children:Object(U.jsxs)("span",{children:["Already have an Account?",Object(U.jsx)(H.b,{to:"/login",className:"loginButton",children:"Login"})]})}),Object(U.jsx)("button",{onClick:h,children:"Register"})]})]}),Object(U.jsxs)("div",{className:"login__lang",children:[Object(U.jsx)("p",{children:"\u0939\u093f\u0928\u094d\u0926\u0940"}),Object(U.jsx)(de.a,{fontSize:"small"})]}),Object(U.jsxs)("div",{className:"login__footer",children:[Object(U.jsx)("p",{children:"About"}),Object(U.jsx)("p",{children:"Languages"}),Object(U.jsx)("p",{children:"Careers"}),Object(U.jsx)("p",{children:"Businesses"}),Object(U.jsx)("p",{children:"Privacy"}),Object(U.jsx)("p",{children:"Terms"}),Object(U.jsx)("p",{children:"Contact"}),Object(U.jsx)("p",{children:"\xa9 Quora Fake Inc. 2021"})]})]})})};var pe=function(){var e=Object(R.e)();return Object(a.useEffect)((function(){Q.a.get("api/logout").then((function(t){200!==t.status&&(alert("Server not responding!"),e.push("/")),e.push("/")}))}),[]),Object(U.jsx)(U.Fragment,{children:Object(U.jsx)("p",{children:"logout page"})})};var xe=function(e){var t=Object(R.e)(),s=Object(a.useState)(!1),c=Object(d.a)(s,2),n=c[0],i=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],u=Object(a.useState)([]),b=Object(d.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)({question:"",userEmail:"",userName:"",userImage:"",answers:[{userEmail:"",userName:"",userImage:"",anser:""}]}),x=Object(d.a)(p,2),m=x[0],g=x[1],f=e.data.userData.email,v=e.data.input,_=function(e){e.preventDefault(),Q.a.post("/api/answer",{question:m,answer:o}).then((function(e){200!==e.status?window.alert("Server not responding!"):(window.alert("Your Answer has been added"),i(!1),j(""),t.push("/profile"))})).catch((function(e){console.log(e),window.alert("Server not responding!")}))};return Object(a.useEffect)((function(){Q.a.get("/api/userqueans/"+f).then((function(e){console.clear(),O(e.data)})).catch((function(e){"Error: Request failed with status code 404"==e?(console.clear(),console.log("Loading...")):console.log(e)}))}),[v,f,o]),Object(U.jsx)(U.Fragment,{children:h.map((function(e,t){return Object(U.jsxs)("div",{className:"post",children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsxs)("div",{className:"post__body",children:[Object(U.jsxs)("div",{className:"post__question",children:[Object(U.jsx)("p",{children:e.question}),Object(U.jsx)(A.a,{onClick:function(){i(!0),g(e)},className:"post__btnAnswer",children:"Answer"}),Object(U.jsxs)(y.a,{isOpen:n,onRequestClose:function(){return i(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:680,height:550,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-250px",marginLeft:"-350px"}},children:[Object(U.jsxs)("div",{className:"modal__question",children:[Object(U.jsx)("h1",{children:m.question}),Object(U.jsxs)("p",{children:["asked by"," ",Object(U.jsx)("span",{className:"name",children:m.userEmail})," ","","on"," ",Object(U.jsx)("span",{className:"name",children:new Date(m.createdAt).toLocaleString()})]})]}),Object(U.jsx)("div",{className:"modal__answer",children:Object(U.jsx)("textarea",{value:o,onChange:function(e){return j(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(U.jsxs)("div",{className:"modal__button",children:[Object(U.jsx)("button",{className:"cancle",onClick:function(){return i(!1)},children:"Cancel"}),Object(U.jsx)("button",{type:"sumbit",onClick:_,className:"add",children:"Add Answer"})]})]})]}),Object(U.jsx)("hr",{}),Object(U.jsxs)("small",{style:{textAlign:"left"},children:[e.answers.length," Answers"]}),Object(U.jsx)("hr",{}),Object(U.jsx)("div",{className:"post__answer",children:Object(U.jsx)("ul",{style:{position:"relative",paddingBottom:"5px",listStyleType:"square"},children:e.answers.map((function(e,t){return Object(U.jsx)("li",{style:{textAlign:"left",paddingTop:"1rem",paddingBottom:"1rem"},title:e.userEmail+" on "+new Date(e.createdAt).toLocaleString(),children:Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsx)("div",{className:"post__question",style:{padding:"1rem"},children:Object(U.jsx)("p",{children:e.answer})})]})},t)}))})})]}),Object(U.jsxs)("div",{className:"post__footer",children:[Object(U.jsxs)("div",{className:"post__footerAction",children:[Object(U.jsx)(K.a,{}),Object(U.jsx)(ee.a,{})]}),Object(U.jsx)(se.a,{}),Object(U.jsx)(ae.a,{}),Object(U.jsxs)("div",{className:"post__footerLeft",children:[Object(U.jsx)(ne.a,{}),Object(U.jsx)(ie.a,{})]})]})]},t)}))})};s(142);function me(e){var t,s=Object(R.e)(),c=e.data.userData;return t=c?"".concat("","/uploads/images/").concat(c.image):"https://img.icons8.com/cotton/2x/user-male.png",Object(U.jsxs)("div",{className:"quoraBox",children:[Object(U.jsxs)("div",{className:"quoraBox__info",children:[Object(U.jsx)(S.a,{src:t,className:"quoraBox__infoAvatar"}),Object(U.jsx)("h5",{children:c.email})]}),Object(U.jsxs)("div",{className:"quoraBox__quora",children:[Object(U.jsx)("p",{children:"What is your question or link?"}),Object(U.jsx)(A.a,{onClick:function(){c?e.data.setIsModalOpen(!0):window.confirm("Unauthrised! want to login?")&&s.push("/login")},children:"Add Question"})]})]})}var ge=function(){var e=Object(R.e)(),t=Object(a.useState)({email:""}),s=Object(d.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],b=Object(a.useState)(),h=Object(d.a)(b,2),O=h[0],p=h[1],x=Object(a.useState)(!1),m=Object(d.a)(x,2),g=m[0],f=m[1],v=Object(a.useState)(""),_=Object(d.a)(v,2),w=_[0],N=_[1],y=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get("/api/user").then((function(e){n(e.data)})).catch((function(t){"Error: Request failed with status code 425"==t?(window.alert("Unauthrised! Please login first."),e.push("/login")):200===!t.status&&(window.alert("Server not responding!"),e.push("/login"))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),Object(U.jsxs)("form",{method:"GET",className:"quora",children:[Object(U.jsx)(W,{data:{userData:c,input:l,setInput:u,searchText:O,setSearchText:p,IsmodalOpen:g,setIsModalOpen:f,inputUrl:w,setInputUrl:N}}),Object(U.jsxs)("div",{className:"quora__content",children:[Object(U.jsxs)("div",{className:"feed",children:[Object(U.jsx)(me,{data:{userData:c,input:l,setInput:u,IsmodalOpen:g,setIsModalOpen:f,inputUrl:w,setInputUrl:N}}),Object(U.jsx)(xe,{data:{userData:c,input:l}})]}),Object(U.jsx)(J,{})]})]})};var fe=function(e){var t=Object(R.e)(),s=Object(a.useState)(!1),c=Object(d.a)(s,2),n=c[0],i=c[1],r=Object(a.useState)(""),l=Object(d.a)(r,2),o=l[0],j=l[1],u=Object(a.useState)([]),b=Object(d.a)(u,2),h=b[0],O=b[1],p=Object(a.useState)({question:"",userEmail:"",userName:"",userImage:"",answers:[{userEmail:"",userName:"",userImage:"",anser:""}]}),x=Object(d.a)(p,2),m=x[0],g=x[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),_=v[0],w=v[1],N=e.data.input,q=e.data.searchText,k=e.data.userData,C=function(e){e.preventDefault(),Q.a.post("/api/answer",{question:m,answer:o}).then((function(e){200!==e.status?window.alert("Server not responding!"):(window.alert("Your Answer has been added"),i(!1),j(""))})).catch((function(e){console.log(e),window.alert("Server not responding!")}))};return Object(a.useEffect)((function(){Q.a.get("/api/search/"+q).then((function(e){0===e.data.length?(w(!0),O(e.data)):(w(!1),O(e.data)),console.clear()})).catch((function(e){"Error: Request failed with status code 404"==e&&w(!0),console.clear()}))}),[q,N,o]),Object(U.jsx)(U.Fragment,{children:e.data.searchText?_?Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:"No Search Result Found!"}),Object(U.jsxs)("span",{children:["Back to ",Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("small",{children:"Home"})})]})]}):Object(U.jsx)("div",{children:h.map((function(e,s){return Object(U.jsxs)("div",{className:"post",children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsxs)("div",{className:"post__body",children:[Object(U.jsxs)("div",{className:"post__question",children:[Object(U.jsx)("p",{children:e.question}),Object(U.jsx)(A.a,{onClick:function(){k?(i(!0),g(e)):window.confirm("Unauthrised! want to login?")&&t.push("/login")},className:"post__btnAnswer",children:"Answer"}),Object(U.jsxs)(y.a,{isOpen:n,onRequestClose:function(){return i(!1)},shouldCloseOnOverlayClick:!1,style:{overlay:{width:680,height:550,backgroundColor:"rgba(0,0,0,0.8)",zIndex:"1000",top:"50%",left:"50%",marginTop:"-250px",marginLeft:"-350px"}},children:[Object(U.jsxs)("div",{className:"modal__question",children:[Object(U.jsx)("h1",{children:m.question}),Object(U.jsxs)("p",{children:["asked by"," ",Object(U.jsx)("span",{className:"name",children:m.userEmail})," ","","on"," ",Object(U.jsx)("span",{className:"name",children:new Date(m.createdAt).toLocaleString()})]})]}),Object(U.jsx)("div",{className:"modal__answer",children:Object(U.jsx)("textarea",{value:o,onChange:function(e){return j(e.target.value)},placeholder:"Enter Your Answer",type:"text"})}),Object(U.jsxs)("div",{className:"modal__button",children:[Object(U.jsx)("button",{className:"cancle",onClick:function(){return i(!1)},children:"Cancel"}),Object(U.jsx)("button",{type:"sumbit",onClick:C,className:"add",children:"Add Answer"})]})]})]}),Object(U.jsx)("hr",{}),Object(U.jsxs)("small",{style:{textAlign:"left"},children:[e.answers.length," Answers"]}),Object(U.jsx)("hr",{}),Object(U.jsx)("div",{className:"post__answer",children:Object(U.jsx)("ul",{style:{position:"relative",paddingBottom:"5px",listStyleType:"square"},children:e.answers.map((function(e,t){return Object(U.jsx)("li",{style:{textAlign:"left",paddingTop:"1rem",paddingBottom:"1rem"},title:e.userEmail+" on "+new Date(e.createdAt).toLocaleString(),children:Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"post__info",children:[Object(U.jsx)(S.a,{src:"".concat("","/uploads/images/").concat(e.userImage),className:"quoraBox__infoAvatar"}),Object(U.jsx)("h4",{children:e.userEmail}),Object(U.jsx)("small",{children:new Date(e.createdAt).toLocaleString()})]}),Object(U.jsx)("div",{className:"post__question",style:{padding:"1rem"},children:Object(U.jsx)("p",{children:e.answer})})]})},t)}))})})]}),Object(U.jsxs)("div",{className:"post__footer",children:[Object(U.jsxs)("div",{className:"post__footerAction",children:[Object(U.jsx)(K.a,{}),Object(U.jsx)(ee.a,{})]}),Object(U.jsx)(se.a,{}),Object(U.jsx)(ae.a,{}),Object(U.jsxs)("div",{className:"post__footerLeft",children:[Object(U.jsx)(ne.a,{}),Object(U.jsx)(ie.a,{})]})]})]},s)}))}):Object(U.jsxs)("div",{children:[Object(U.jsx)("h1",{children:"Search Query to show Results."}),Object(U.jsxs)("span",{children:["Back to ",Object(U.jsx)(H.b,{to:"/",children:Object(U.jsx)("small",{children:"Home"})})]})]})})};var ve=function(){var e=Object(R.e)(),t=Object(a.useState)(null),s=Object(d.a)(t,2),c=s[0],n=s[1],i=Object(a.useState)(""),r=Object(d.a)(i,2),l=r[0],u=r[1],b=Object(a.useState)(),h=Object(d.a)(b,2),O=h[0],p=h[1],x=Object(a.useState)(!1),m=Object(d.a)(x,2),g=m[0],f=m[1],v=Object(a.useState)(""),_=Object(d.a)(v,2),w=_[0],N=_[1],y=function(){var t=Object(j.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Q.a.get("/api/user").then((function(e){n(e.data)})).catch((function(t){"Error: Request failed with status code 425"==t?n(null):200===!t.status&&(window.alert("Server not responding!"),e.push("/login"))}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){y()}),[]),Object(U.jsxs)("form",{method:"GET",className:"quora",children:[Object(U.jsx)(W,{data:{userData:c,input:l,setInput:u,searchText:O,setSearchText:p,IsmodalOpen:g,setIsModalOpen:f,inputUrl:w,setInputUrl:N}}),Object(U.jsxs)("div",{className:"quora__content",children:[Object(U.jsx)(V,{}),Object(U.jsx)("div",{className:"feed",children:Object(U.jsx)(fe,{data:{userData:c,input:l,searchText:O}})}),Object(U.jsx)(J,{})]})]})},_e=function(){return Object(U.jsxs)("div",{className:"App",children:[Object(U.jsx)(R.a,{exact:!0,path:"/",children:Object(U.jsx)(oe,{})}),Object(U.jsx)(R.a,{path:"/profile",children:Object(U.jsx)(ge,{})}),Object(U.jsx)(R.a,{path:"/search",children:Object(U.jsx)(ve,{})}),Object(U.jsx)(R.a,{path:"/login",children:Object(U.jsx)(ue,{})}),Object(U.jsx)(R.a,{path:"/register",children:Object(U.jsx)(Oe,{})}),Object(U.jsx)(R.a,{path:"/logout",children:Object(U.jsx)(pe,{})})]})},we=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,171)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),a(e),n(e),i(e)}))};r.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(H.a,{children:Object(U.jsx)(_e,{})})}),document.getElementById("root")),we()},57:function(e,t,s){},67:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},79:function(e,t,s){},99:function(e,t,s){}},[[143,1,2]]]);
//# sourceMappingURL=main.13633224.chunk.js.map