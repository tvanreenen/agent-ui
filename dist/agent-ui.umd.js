(()=>{var it=Object.defineProperty;var xt=Object.getOwnPropertyDescriptor;var wt=(o,t,e)=>t in o?it(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var y=(o,t,e,s)=>{for(var i=s>1?void 0:s?xt(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&it(t,e,i),i};var $=(o,t,e)=>wt(o,typeof t!="symbol"?t+"":t,e);var L=globalThis,D=L.ShadowRoot&&(L.ShadyCSS===void 0||L.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,W=Symbol(),ot=new WeakMap,P=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==W)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(D&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=ot.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&ot.set(e,t))}return t}toString(){return this.cssText}},nt=o=>new P(typeof o=="string"?o:o+"",void 0,W),G=(o,...t)=>{let e=o.length===1?o[0]:t.reduce((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1],o[0]);return new P(e,o,W)},rt=(o,t)=>{if(D)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=L.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},X=D?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return nt(e)})(o):o;var{is:At,defineProperty:St,getOwnPropertyDescriptor:Et,getOwnPropertyNames:kt,getOwnPropertySymbols:Ct,getPrototypeOf:Mt}=Object,v=globalThis,at=v.trustedTypes,Pt=at?at.emptyScript:"",Rt=v.reactiveElementPolyfillSupport,R=(o,t)=>o,O={toAttribute(o,t){switch(t){case Boolean:o=o?Pt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},I=(o,t)=>!At(o,t),lt={attribute:!0,type:String,converter:O,reflect:!1,useDefault:!1,hasChanged:I};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);var f=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&St(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:n}=Et(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){let l=i?.call(this);n?.call(this,r),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??lt}static _$Ei(){if(this.hasOwnProperty(R("elementProperties")))return;let t=Mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(R("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(R("properties"))){let e=this.properties,s=[...kt(e),...Ct(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return rt(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let n=(s.converter?.toAttribute!==void 0?s.converter:O).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let n=s.getPropertyOptions(i),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:O;this._$Em=i;let l=r.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){let i=this.constructor,n=this[t];if(s??(s=i.getPropertyOptions(t)),!((s.hasChanged??I)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??(this._$Ej=new Map)).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??(this._$Eq=new Set)).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[i,n]of s){let{wrapped:r}=n,l=this[i];r!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&(this._$Eq=this._$Eq.forEach(e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};f.elementStyles=[],f.shadowRootOptions={mode:"open"},f[R("elementProperties")]=new Map,f[R("finalized")]=new Map,Rt?.({ReactiveElement:f}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.1");var U=globalThis,K=U.trustedTypes,ht=K?K.createPolicy("lit-html",{createHTML:o=>o}):void 0,mt="$lit$",_=`lit$${Math.random().toFixed(9).slice(2)}$`,ft="?"+_,Ot=`<${ft}>`,E=document,H=()=>E.createComment(""),z=o=>o===null||typeof o!="object"&&typeof o!="function",et=Array.isArray,Tt=o=>et(o)||typeof o?.[Symbol.iterator]=="function",F=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,ct=/>/g,A=RegExp(`>|${F}(?:([^\\s"'>=/]+)(${F}*=${F}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pt=/'/g,ut=/"/g,bt=/^(?:script|style|textarea|title)$/i,st=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),u=st(1),Kt=st(2),Vt=st(3),k=Symbol.for("lit-noChange"),c=Symbol.for("lit-nothing"),gt=new WeakMap,S=E.createTreeWalker(E,129);function yt(o,t){if(!et(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return ht!==void 0?ht.createHTML(t):t}var Ut=(o,t)=>{let e=o.length-1,s=[],i,n=t===2?"<svg>":t===3?"<math>":"",r=T;for(let l=0;l<e;l++){let a=o[l],d,p,h=-1,m=0;for(;m<a.length&&(r.lastIndex=m,p=r.exec(a),p!==null);)m=r.lastIndex,r===T?p[1]==="!--"?r=dt:p[1]!==void 0?r=ct:p[2]!==void 0?(bt.test(p[2])&&(i=RegExp("</"+p[2],"g")),r=A):p[3]!==void 0&&(r=A):r===A?p[0]===">"?(r=i??T,h=-1):p[1]===void 0?h=-2:(h=r.lastIndex-p[2].length,d=p[1],r=p[3]===void 0?A:p[3]==='"'?ut:pt):r===ut||r===pt?r=A:r===dt||r===ct?r=T:(r=A,i=void 0);let b=r===A&&o[l+1].startsWith("/>")?" ":"";n+=r===T?a+Ot:h>=0?(s.push(d),a.slice(0,h)+mt+a.slice(h)+_+b):a+_+(h===-2?l:b)}return[yt(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]},N=class o{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0,l=t.length-1,a=this.parts,[d,p]=Ut(t,e);if(this.el=o.createElement(d,s),S.currentNode=this.el.content,e===2||e===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=S.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(let h of i.getAttributeNames())if(h.endsWith(mt)){let m=p[r++],b=i.getAttribute(h).split(_),B=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:B[2],strings:b,ctor:B[1]==="."?Z:B[1]==="?"?J:B[1]==="@"?Q:M}),i.removeAttribute(h)}else h.startsWith(_)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(bt.test(i.tagName)){let h=i.textContent.split(_),m=h.length-1;if(m>0){i.textContent=K?K.emptyScript:"";for(let b=0;b<m;b++)i.append(h[b],H()),S.nextNode(),a.push({type:2,index:++n});i.append(h[m],H())}}}else if(i.nodeType===8)if(i.data===ft)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(_,h+1))!==-1;)a.push({type:7,index:n}),h+=_.length-1}n++}}static createElement(t,e){let s=E.createElement("template");return s.innerHTML=t,s}};function C(o,t,e=o,s){if(t===k)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl,n=z(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=C(o,i._$AS(o,t.values),i,s)),t}var Y=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??E).importNode(e,!0);S.currentNode=i;let n=S.nextNode(),r=0,l=0,a=s[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new q(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new tt(n,this,t)),this._$AV.push(d),a=s[++l]}r!==a?.index&&(n=S.nextNode(),r++)}return S.currentNode=E,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},q=class o{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=c,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),z(t)?t===c||t==null||t===""?(this._$AH!==c&&this._$AR(),this._$AH=c):t!==this._$AH&&t!==k&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Tt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==c&&z(this._$AH)?this._$AA.nextSibling.data=t:this.T(E.createTextNode(t)),this._$AH=t}$(t){let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=N.createElement(yt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{let n=new Y(i,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=gt.get(t.strings);return e===void 0&&gt.set(t.strings,e=new N(t)),e}k(t){et(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let n of t)i===e.length?e.push(s=new o(this.O(H()),this.O(H()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}},M=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=c,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=c}_$AI(t,e=this,s,i){let n=this.strings,r=!1;if(n===void 0)t=C(this,t,e,0),r=!z(t)||t!==this._$AH&&t!==k,r&&(this._$AH=t);else{let l=t,a,d;for(t=n[0],a=0;a<n.length-1;a++)d=C(this,l[s+a],e,a),d===k&&(d=this._$AH[a]),r||(r=!z(d)||d!==this._$AH[a]),d===c?t=c:t!==c&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!i&&this.j(t)}j(t){t===c?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Z=class extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===c?void 0:t}},J=class extends M{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==c)}},Q=class extends M{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=C(this,t,e,0)??c)===k)return;let s=this._$AH,i=t===c&&s!==c||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==c&&(s===c||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},tt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}};var Ht=U.litHtmlPolyfillSupport;Ht?.(N,q),(U.litHtmlVersions??(U.litHtmlVersions=[])).push("3.3.1");var $t=(o,t,e)=>{let s=e?.renderBefore??t,i=s._$litPart$;if(i===void 0){let n=e?.renderBefore??null;s._$litPart$=i=new q(t.insertBefore(H(),n),n,void 0,e??{})}return i._$AI(o),i};var j=globalThis,x=class extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$t(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return k}};x._$litElement$=!0,x.finalized=!0,j.litElementHydrateSupport?.({LitElement:x});var zt=j.litElementPolyfillSupport;zt?.({LitElement:x});(j.litElementVersions??(j.litElementVersions=[])).push("4.2.1");var vt=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};var Nt={attribute:!0,type:String,converter:O,reflect:!1,hasChanged:I},qt=(o=Nt,t,e)=>{let{kind:s,metadata:i}=e,n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(e.name,o),s==="accessor"){let{name:r}=e;return{set(l){let a=t.get.call(this);t.set.call(this,l),this.requestUpdate(r,a,o)},init(l){return l!==void 0&&this.C(r,void 0,o,l),l}}}if(s==="setter"){let{name:r}=e;return function(l){let a=this[r];t.call(this,l),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+s)};function w(o){return(t,e)=>typeof e=="object"?qt(o,t,e):((s,i,n)=>{let r=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}function _t(o){return w({...o,state:!0,attribute:!1})}var g=class extends x{constructor(){super(...arguments);$(this,"open",!1);$(this,"panelMode",!1);$(this,"prompts",[]);$(this,"agentName","Agent");$(this,"placeholderText","Ask me anything - I can help with data, actions, and insights");$(this,"messages",[])}setOpen(e){this.open=e,this.requestUpdate(),!e&&this.panelMode&&(this.panelMode=!1,document.body.style.marginRight="0",document.body.style.transition="")}addMessage(e,s){this.messages=[...this.messages,{type:e,text:s}],this.requestUpdate(),this.updateComplete.then(()=>{this.scrollToBottom()})}scrollToBottom(){let e=this.shadowRoot?.querySelector(".body");e&&(e.scrollTop=e.scrollHeight)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleGlobalKeydown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleGlobalKeydown.bind(this)),this.panelMode&&(document.body.style.marginRight="0",document.body.style.transition="")}_handleGlobalKeydown(e){if((e.ctrlKey||e.metaKey)&&e.key==="k"){e.preventDefault();let s=this.shadowRoot?.querySelector(".input-field");s&&s.focus()}e.key==="Escape"&&this.open&&(e.preventDefault(),this.setOpen(!1))}render(){return u`
      <div class="backdrop ${this.open?"visible":""} ${this.panelMode?"panel-mode":""}" @click=${this._handleBackdropClick}></div>
      <div class="container ${this.open?"expanded":""} ${this.panelMode?"panel-mode":""}">
        ${this.open?u`
          <div class="body">
            ${this.messages.map(e=>u`
              <div class="message ${e.type}-message">
                <strong class="message-author">${e.type==="user"?"You":this.agentName}:</strong> ${e.text}
              </div>
            `)}
          </div>
        `:""}
        <div class="header">
          <div class="input-wrapper">
            <input 
              class="input-field" 
              type="text" 
              placeholder=${this.placeholderText}
              @keydown=${this._onKeydown}
            />
            <button class="send-button" @click=${this._sendMessage}>
              <!-- Send icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
            </button>
          </div>
          ${this.open?u`
            <div class="suggestions">
              ${this.prompts.map(e=>u`
                <button class="suggestion" @click=${()=>this._handleSuggestion(e)}>
                  "${e}"
                </button>
              `)}
            </div>
          `:""}
        </div>
        <button class="toggle-button" @click=${this._toggle}>
          ${this.open?u`
            <!-- lucide: minimize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minimize2-icon lucide-minimize-2"><path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/></svg>
          `:u`
            <!-- lucide: maximize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          `}
        </button>
        ${this.open?u`
          <button class="panel-toggle-button" @click=${this._togglePanel} title=${this.panelMode?"Switch to dialog mode":"Switch to panel mode"}>
            ${this.panelMode?u`
              <!-- lucide: panel-bottom -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-bottom-icon lucide-panel-bottom"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/></svg>
            `:u`
              <!-- lucide: panel-right -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-icon lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
            `}
          </button>
        `:""}
      </div>
    `}_toggle(){this.setOpen(!this.open)}_handleSuggestion(e){this.addMessage("user",e),this.dispatchEvent(new CustomEvent("message",{detail:{query:e}}))}_sendMessage(){let e=this.shadowRoot?.querySelector(".input-field");if(e&&e.value.trim()){let s=e.value;this.addMessage("user",s),this.dispatchEvent(new CustomEvent("message",{detail:{query:s}})),e.value=""}this.open||(this.setOpen(!0),this.updateComplete.then(()=>{let s=this.shadowRoot?.querySelector(".input-field");s&&s.focus()}))}_onKeydown(e){e.key==="Enter"&&this._sendMessage()}_handleBackdropClick(e){this.open&&e.target===this.shadowRoot?.querySelector(".backdrop")&&this.setOpen(!1)}_togglePanel(){this.panelMode=!this.panelMode,this.requestUpdate(),this.panelMode?(document.body.style.marginRight="400px",document.body.style.transition="margin-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)"):(document.body.style.marginRight="0",setTimeout(()=>{document.body.style.transition=""},800))}};$(g,"styles",G`
    :host { 
      display: block;
      z-index: 1000; 
      font-family: sans-serif;
      box-sizing: border-box;
      font-size: 14px;
    }
    
    /* Backdrop overlay for expanded state */
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.3s ease, visibility 0.3s ease;
      z-index: 999;
      pointer-events: none;
    }
    
    .backdrop.visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    /* Panel mode - hide backdrop */
    .backdrop.panel-mode {
      display: none;
    }
    
    .container {
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: min(75vw, 800px);
      background: white;
      border-radius: 12px 12px 0 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      font-family: sans-serif;
      /* Use CSS Grid for smooth height animation */
      display: grid;
      grid-template-rows: auto 0fr;
      /* Add smooth transitions for expand/collapse */
      transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                  border-radius 0.8s ease,
                  grid-template-rows 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  right 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  left 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
    }
    
    .container.expanded {
      width: 80vw;
      height: 80vh;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border-radius: 12px 12px 0 0;
      grid-template-rows: auto 1fr;
    }
    
    /* Panel mode styles */
    .container.panel-mode {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: auto;
      transform: none;
      width: 400px;
      height: 100vh;
      border-radius: 0;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
    
    /* Add margin to body when in panel mode */
    :host(.panel-mode) {
      margin-right: 400px;
    }
    
    /* Responsive breakpoints */
    @media (max-width: 768px) {
      .container {
        width: 95vw;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: white;
      }
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
      }
      :host(.panel-mode) {
        margin-right: 0;
      }
    }
    
    @media (max-width: 480px) {
      .container {
        width: 100vw;
        border-radius: 0;
        bottom: 0;
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0;
        background: white;
      }
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
      }
    }
    .header {
      background: #702c62;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      /* Add transition for header background change */
      transition: background-color 0.3s ease, border-bottom 0.3s ease;
    }
    .container.expanded .header {
      background: white;
      border-bottom: none;
      border-top: 1px solid #e0e0e0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding-bottom: 4px;
    }
    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      background: #f8f9fa;
      border-radius: 24px;
      padding: 8px 16px;
      border: 1px solid #e0e0e0;
    }
    .input-field {
      flex: 1;
      border: none;
      background: transparent;
      font-size: 14px;
      outline: none;
      color: #333;
    }
    .input-field::placeholder {
      color: #666;
    }
    .send-button {
      background: white;
      border: none;
      color: #666666;
      cursor: pointer;
      width: 32px;
      height: 32px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    .send-button:hover {
      background: rgba(112, 44, 98, 0.1);
      color: #702c62;
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }
    .send-button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .suggestions {
      padding: 4px 0 0 13px;
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }
    .suggestion {
      background: none;
      color: #702c62;
      border: none;
      cursor: pointer;
      font-size: 14px;
      white-space: nowrap;
      user-select: none;
      transition: background-color 0.2s ease;
      border-radius: 4px;
      padding: 2px 6px;
      font-style: italic;
    }
    .suggestion:hover {
      background: rgba(112, 44, 98, 0.1);
    }
    .body {
      background: #ffffff;
      padding: 16px;
      padding-bottom: 80px;
      overflow-y: auto;
      /* Grid item will animate height automatically */
      min-height: 0;
      opacity: 0;
      /* Smooth transitions */
      transition: opacity 0.8s ease 0.2s;
    }
    .container.expanded .body {
      opacity: 1;
    }
    
    /* Message spacing */
    .message {
      margin: 0;
      padding: 8px 0;
    }
    
    /* Style slotted message elements */
    ::slotted(.message) {
      margin: 0;
      padding: 8px 0;
    }
    
    /* Internal message styling */
    .user-message .message-author {
      color: #125361;
    }
    
    .agent-message .message-author {
      color: #702c62;
    }
    .toggle-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: #333;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      /* Add transition for button hover and transform */
      transition: all 0.2s ease;
    }
    .toggle-button:hover {
      background: #555;
      transform: scale(1.1);
    }
    .toggle-button:active {
      transform: scale(0.95);
    }
    
    .panel-toggle-button {
      position: absolute;
      top: 8px;
      right: 40px;
      background: #333;
      border: none;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      /* Add transition for button hover and transform */
      transition: all 0.2s ease;
    }
    .panel-toggle-button:hover {
      background: #555;
      transform: scale(1.1);
    }
    .panel-toggle-button:active {
      transform: scale(0.95);
    }
  `),y([w({type:Boolean})],g.prototype,"open",2),y([w({type:Boolean})],g.prototype,"panelMode",2),y([w({type:Array})],g.prototype,"prompts",2),y([w({type:String})],g.prototype,"agentName",2),y([w({type:String})],g.prototype,"placeholderText",2),y([_t()],g.prototype,"messages",2),g=y([vt("agent-ui")],g);window.AgentUI={init:o=>{let t=document.querySelector("agent-ui");return t||(t=document.createElement("agent-ui"),document.body.appendChild(t)),t.prompts=o.prompts,t.agentName=o.agentName,t.placeholderText=o.placeholderText,t.requestUpdate(),t}};})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=agent-ui.umd.js.map
