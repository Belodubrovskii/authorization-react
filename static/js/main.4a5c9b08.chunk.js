(this["webpackJsonpauthorization-react"]=this["webpackJsonpauthorization-react"]||[]).push([[0],{20:function(e,t,a){e.exports=a(32)},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(16),s=a.n(o),c=a(10),u=(a(25),a(5));var l=function(e){return r.a.createElement("section",{className:"popup ".concat(e.isOpen?"popup_opened":"")},r.a.createElement("form",{onSubmit:e.handleSubmit,className:"popup__form"},r.a.createElement("h4",{className:"popup__title"},"Sing In"),r.a.createElement("span",{className:"popup__error ".concat(e.error?"popup__error_visible":"")},"Incorrect login or password!"),r.a.createElement("input",{value:e.username,onChange:e.userChange,className:"popup__input popup__form-name",type:"text",placeholder:"Username",required:!0,minLength:"1"}),r.a.createElement("input",{value:e.password,onChange:e.passwordChange,className:"popup__input popup__form-name",type:"password",placeholder:"Passsword",required:!0,minLength:"1"}),r.a.createElement("input",{className:"popup__button",type:"submit",value:"Sign In"}),r.a.createElement("button",{onClick:e.onClose,className:"popup__close-button",type:"button"})))},i=a(13),m=a(17),p=a(18),h=new(function(){function e(t){var a=t.apiOptions;Object(m.a)(this,e),this._baseUrl=a.baseUrl,this._headers=a.headers}return Object(p.a)(e,[{key:"_handleResponse",value:function(e){return e.ok?e.json():Promise.reject(e.statusText)}},{key:"_handleResponseError",value:function(e){return Promise.reject(e.message)}},{key:"login",value:function(e){return fetch("".concat(this._baseUrl,"/api-token-auth/"),{method:"POST",headers:this._headers,body:JSON.stringify({username:e.username,password:e.password})}).then(this._handleResponse).catch(this._handleResponseError)}},{key:"users",value:function(e){return fetch("".concat(this._baseUrl,"/api/v1/users/"),{method:"GET",headers:Object(i.a)(Object(i.a)({},this._headers),{},{Authorization:"Token ".concat(e)})}).then(this._handleResponse).catch(this._handleResponseError)}}]),e}())({apiOptions:{baseUrl:"https://emphasoft-test-assignment.herokuapp.com",headers:{"Content-Type":"application/json",Accept:"application/json"}}});function d(e){return r.a.createElement("section",{className:"login"},r.a.createElement("div",{className:"header"},r.a.createElement("h1",{className:"header__title"},"Welcome"),r.a.createElement("button",{onClick:e.handlePopupOnen,className:"header__button",type:"button"},"Sign In")))}a(26);function f(e){var t=r.a.useState([]),a=Object(u.a)(t,2),n=a[0],o=a[1],s=r.a.useState(!1),c=Object(u.a)(s,2),l=c[0],i=c[1],m=r.a.useState(!1),p=Object(u.a)(m,2),d=p[0],f=p[1],E=r.a.useState([]),b=Object(u.a)(E,2),g=b[0],_=b[1];return r.a.useEffect((function(){h.users(e.token).then((function(e){o(e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"user-name"},e.username),r.a.createElement("td",{className:"user-id"},e.id))}))),_(e.map((function(e){return{name:e.username,id:e.id}})))}))}),[]),r.a.useEffect((function(){!function(){var e=n.slice();e.sort((function(e,t){return l?e.key-t.key:t.key-e.key})),o(e)}()}),[l]),r.a.useEffect((function(){!function(){var e=g.slice();e.sort((function(e,t){var a=e.name.toLowerCase(),n=t.name.toLowerCase();return a<n?d?1:-1:a>n?d?-1:1:0})),o(e.map((function(e){return r.a.createElement("tr",{key:e.id},r.a.createElement("td",{className:"user-name"},e.name),r.a.createElement("td",{className:"user-id"},e.id))})))}()}),[d]),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:"title"},"Welcome, ",e.username),r.a.createElement("button",{className:"button-logout",onClick:e.logOut,type:"button"},"Log out"),r.a.createElement("table",null,r.a.createElement("tbody",{className:"table"},r.a.createElement("tr",null,r.a.createElement("td",{className:"header-name"},r.a.createElement("button",{onClick:function(){f(!d)},className:"filter-button",type:"button"},"Username")),r.a.createElement("td",{className:"header-id"},r.a.createElement("button",{onClick:function(){i(!l)},className:"filter-button",type:"button"},"Id"))),n)))}var E=a(1);var b=function(){var e=r.a.useState(!1),t=Object(u.a)(e,2),a=t[0],n=t[1],o=r.a.useState(""),s=Object(u.a)(o,2),c=s[0],i=s[1],m=r.a.useState(""),p=Object(u.a)(m,2),b=p[0],g=p[1],_=r.a.useState(""),k=Object(u.a)(_,2),v=k[0],S=k[1],y=r.a.useState(""),N=Object(u.a)(y,2),O=N[0],w=N[1],j=r.a.useState(!1),C=Object(u.a)(j,2),I=C[0],U=C[1];function P(){n(!a),i(""),g(""),U(!1)}return r.a.useEffect((function(){w(localStorage.token),S(localStorage.username)}),[]),r.a.createElement(r.a.Fragment,null,O?r.a.createElement(E.a,{to:"/users"}):r.a.createElement(E.a,{to:"/"}),r.a.createElement(E.d,null,!O&&r.a.createElement(E.b,{exact:!0,path:"/"},r.a.createElement(r.a.Fragment,null,r.a.createElement(d,{handlePopupOnen:P}),r.a.createElement(l,{isOpen:a,onClose:P,userChange:function(e){i(e.target.value)},passwordChange:function(e){g(e.target.value)},handleSubmit:function(e){e.preventDefault(),h.login({username:c,password:b}).then((function(e){w(e.token),n(!1),U(!1),localStorage.setItem("token",e.token),localStorage.setItem("username",c),S(c)})).catch((function(){return U(!0)}))},username:c,password:b,error:I}))),O&&r.a.createElement(E.b,{path:"/users"},r.a.createElement(f,{username:v,token:O,logOut:function(){w(""),localStorage.removeItem("token"),localStorage.removeItem("username")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.4a5c9b08.chunk.js.map