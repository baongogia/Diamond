"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[400],{9400:(e,t,n)=>{n.r(t),n.d(t,{default:()=>A});var s=n(5043),r=n(1229),i=n(3216),a=n(579);function o(e){let{image:t,name:n,material:s,price:r,quantity:o,size:l,status:c,code:d,OrderId:u}=e;const p=(0,i.Zp)();return(0,a.jsx)("div",{className:"w-full h-[23vh] mt-4 flex flex-col justify-center items-center rounded-xl border",children:(0,a.jsxs)("div",{className:"w-[95%] h-[90%] flex justify-between items-center",children:[(0,a.jsx)("div",{style:{backgroundImage:"url(".concat(t,")")},className:"w-[15%] h-full bg-cover bg-center rounded-lg"}),(0,a.jsxs)("div",{className:"font-serif -translate-x-1/2 w-[55%] h-[90%] flex flex-col justify-between",children:[(0,a.jsx)("div",{className:"text uppercase text-[1.3em]",children:n}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsxs)("div",{className:"",children:["Material: ",s]}),(0,a.jsxs)("div",{className:"ml-5",children:["Size: ",l]})]}),(0,a.jsxs)("div",{className:"",children:["Quantity: ",o]}),(0,a.jsxs)("div",{className:"",children:["Total Price: ",r,"$"]}),(0,a.jsxs)("div",{className:"flex justify-between w-[60%]",children:[(0,a.jsxs)("div",{onClick:()=>p("/ProductPage/".concat(d)),className:"border p-2 flex items-center rounded-md hover:bg-green-700 hover:text-white cursor-pointer border-green-700",children:[(0,a.jsx)("ion-icon",{name:"reload-outline"}),(0,a.jsx)("div",{className:"ml-2",children:"Buy it Again"})]}),(0,a.jsx)("div",{onClick:()=>p("/ProductPage/".concat(d)),className:"border p-2 flex items-center rounded-md hover:bg-green-700 hover:text-white cursor-pointer border-green-700",children:(0,a.jsx)("div",{className:"",children:"View item"})}),(0,a.jsx)("div",{onClick:()=>p("/HistoryOrderDetails/".concat(u)),className:"border p-2 flex items-center rounded-md hover:bg-green-700 hover:text-white cursor-pointer border-green-700",children:(0,a.jsx)("div",{className:"",children:"Track package"})})]})]})]})})}var l=n(7832),c=n(8168),d=n(8587),u=n(3662);function p(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,(0,u.A)(e,t)}function f(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var h=n(7950);const m=!1,x=s.createContext(null);var v=function(e){return e.scrollTop},E="unmounted",g="exited",N="entering",b="entered",C="exiting",j=function(e){function t(t,n){var s;s=e.call(this,t,n)||this;var r,i=n&&!n.isMounting?t.enter:t.appear;return s.appearStatus=null,t.in?i?(r=g,s.appearStatus=N):r=b:r=t.unmountOnExit||t.mountOnEnter?E:g,s.state={status:r},s.nextCallback=null,s}p(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&t.status===E?{status:g}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==N&&n!==b&&(t=N):n!==N&&n!==b||(t=C)}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,s=this.props.timeout;return e=t=n=s,null!=s&&"number"!==typeof s&&(e=s.exit,t=s.enter,n=void 0!==s.appear?s.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===N){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:h.findDOMNode(this);n&&v(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===g&&this.setState({status:E})},n.performEnter=function(e){var t=this,n=this.props.enter,s=this.context?this.context.isMounting:e,r=this.props.nodeRef?[s]:[h.findDOMNode(this),s],i=r[0],a=r[1],o=this.getTimeouts(),l=s?o.appear:o.enter;!e&&!n||m?this.safeSetState({status:b},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:N},(function(){t.props.onEntering(i,a),t.onTransitionEnd(l,(function(){t.safeSetState({status:b},(function(){t.props.onEntered(i,a)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),s=this.props.nodeRef?void 0:h.findDOMNode(this);t&&!m?(this.props.onExit(s),this.safeSetState({status:C},(function(){e.props.onExiting(s),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:g},(function(){e.props.onExited(s)}))}))}))):this.safeSetState({status:g},(function(){e.props.onExited(s)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(s){n&&(n=!1,t.nextCallback=null,e(s))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:h.findDOMNode(this),s=null==e&&!this.props.addEndListener;if(n&&!s){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if(e===E)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,(0,d.A)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return s.createElement(x.Provider,{value:null},"function"===typeof n?n(e,r):s.cloneElement(s.Children.only(n),r))},t}(s.Component);function y(){}j.contextType=x,j.propTypes={},j.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:y,onEntering:y,onEntered:y,onExit:y,onExiting:y,onExited:y},j.UNMOUNTED=E,j.EXITED=g,j.ENTERING=N,j.ENTERED=b,j.EXITING=C;const O=j;var w=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.remove(s):"string"===typeof n.className?n.className=f(n.className,s):n.setAttribute("class",f(n.className&&n.className.baseVal||"",s)));var n,s}))},k=function(e){function t(){for(var t,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(t=e.call.apply(e,[this].concat(s))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1];t.removeClasses(r,"exit"),t.addClass(r,i?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.addClass(r,i,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var s=t.resolveArguments(e,n),r=s[0],i=s[1]?"appear":"enter";t.removeClasses(r,i),t.addClass(r,i,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,s="string"===typeof n,r=s?""+(s&&n?n+"-":"")+e:n[e];return{baseClassName:r,activeClassName:s?r+"-active":n[e+"Active"],doneClassName:s?r+"-done":n[e+"Done"]}},t}p(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var s=this.getClassNames(t)[n+"ClassName"],r=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&r&&(s+=" "+r),"active"===n&&e&&v(e),s&&(this.appliedClasses[t][n]=s,function(e,t){e&&t&&t.split(" ").forEach((function(t){return s=t,void((n=e).classList?n.classList.add(s):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,s)||("string"===typeof n.className?n.className=n.className+" "+s:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+s)));var n,s}))}(e,s))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],s=n.base,r=n.active,i=n.done;this.appliedClasses[t]={},s&&w(e,s),r&&w(e,r),i&&w(e,i)},n.render=function(){var e=this.props,t=(e.classNames,(0,d.A)(e,["classNames"]));return s.createElement(O,(0,c.A)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(s.Component);k.defaultProps={classNames:""},k.propTypes={};const S=k;var D=n(7115),T=n.n(D);function A(){(0,s.useEffect)((()=>{T().init({once:!0,duration:2e3})}),[]);const{userData:e}=(0,s.useContext)(r.R),t=null===e||void 0===e?void 0:e.UserName,[n,i]=(0,s.useState)([]),[c,d]=(0,s.useState)({});(0,s.useEffect)((()=>{const e=setInterval((()=>{(async()=>{try{const e=await fetch("https://localhost:7292/api/Order/OrderHistory?username=".concat(t),{method:"GET",headers:{"Content-Type":"application/json"}});if(!e.ok)throw new Error("HTTP error! status: ".concat(e.status));const n=await e.json();i(n)}catch(e){console.error("Error fetching order history:",e)}})()}),1e3);return()=>clearInterval(e)}),[t]);const[u,p]=(0,s.useState)("Accepted"),f=n.filter((e=>e.OrderStatus===u)),[h,m]=(0,s.useState)(!1),x=e=>{d((t=>({...t,[e]:!t[e]}))),m(!h)},v=e=>(0,a.jsx)("div",{onClick:()=>p(e),className:"w-[15%] cursor-pointer h-[68%] border border-green-700 flex justify-center items-center rounded-xl ".concat(u===e?"bg-green-400 border border-green-700 shadow-md shadow-green-700":""," hover:shadow-md hover:shadow-green-700 hover:bg-green-400"),children:e});return(0,a.jsxs)("div",{className:"",children:[(0,a.jsx)("div",{className:"w-screen flex justify-center items-center h-20",children:(0,a.jsxs)("div",{className:"w-[81%] font-serif h-[80%] border border-green-700 flex justify-around items-center rounded-md",children:[v("Processing"),v("Accepted"),v("Pending Delivery"),v("Deliverying"),v("Deliveried"),v("Cancelled")]})}),(0,a.jsx)("div",{"data-aos":"zoom-in",className:"w-screen h-[100vh] -mt-4 flex flex-col justify-center items-center",children:(0,a.jsx)("div",{className:"w-[90%] h-[95%] flex justify-between",children:(0,a.jsx)("div",{className:"w-full h-full flex flex-col justify-center items-center",children:(0,a.jsx)("div",{className:"w-[90%] h-full overflow-y-auto hide-scrollbar",children:f.length>0?f.map((e=>(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsxs)("div",{className:"w-full cursor-pointer bg-green-50 hover:bg-white flex justify-between items-center border-green-700 border p-2 rounded-xl mb-2 transition-all duration-300",onClick:()=>x(e.OrderID),children:[(0,a.jsxs)("div",{className:"font-serif",children:["Order Number: #",e.OrderID]}),(0,a.jsx)("div",{className:"opacity-55 translate-y-1 transition-all duration-300 ".concat(c[e.OrderID]?"rotate-180":""),children:(0,a.jsx)("ion-icon",{size:"large",name:"caret-up-outline"})})]}),(0,a.jsx)(S,{in:c[e.OrderID],timeout:300,classNames:"product-transition",unmountOnExit:!0,children:(0,a.jsx)("div",{className:"w-full",children:e.products.map(((t,n)=>(0,a.jsx)(o,{image:t.Image,name:t.ProductName,material:t.Material,price:e.FinalPrice.toFixed(2),quantity:t.Quantity,size:t.CustomizedSize,status:e.OrderStatus,code:t.ProductID,OrderId:e.OrderID},n)))})})]},e.OrderID))):(0,a.jsx)("div",{className:"w-full h-[60vh] flex flex-col justify-center items-center",children:(0,a.jsx)(l.A,{size:100,color:"#54cc26"})})})})})})]})}},8168:(e,t,n)=>{function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},s.apply(this,arguments)}n.d(t,{A:()=>s})},8587:(e,t,n)=>{function s(e,t){if(null==e)return{};var n={};for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){if(t.indexOf(s)>=0)continue;n[s]=e[s]}return n}n.d(t,{A:()=>s})},3662:(e,t,n)=>{function s(e,t){return s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},s(e,t)}n.d(t,{A:()=>s})}}]);
//# sourceMappingURL=400.3d4c4f9d.chunk.js.map