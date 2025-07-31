(()=>{var zn=Object.defineProperty;var si=Object.getOwnPropertyDescriptor;var Hn=r=>{throw TypeError(r)};var ii=(r,e,t)=>e in r?zn(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var N=(r,e,t,n)=>{for(var s=n>1?void 0:n?si(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&zn(e,t,s),s};var b=(r,e,t)=>ii(r,typeof e!="symbol"?e+"":e,t),oi=(r,e,t)=>e.has(r)||Hn("Cannot "+t);var Bn=(r,e,t)=>e.has(r)?Hn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var lt=(r,e,t)=>(oi(r,e,"access private method"),t);var ct=globalThis,pt=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,zt=Symbol(),Fn=new WeakMap,Me=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==zt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(pt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Fn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fn.set(t,e))}return e}toString(){return this.cssText}},qn=r=>new Me(typeof r=="string"?r:r+"",void 0,zt),Ht=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,s,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Me(t,r,zt)},Gn=(r,e)=>{if(pt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),s=ct.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},Bt=pt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return qn(t)})(r):r;var{is:ri,defineProperty:ai,getOwnPropertyDescriptor:li,getOwnPropertyNames:ci,getOwnPropertySymbols:pi,getPrototypeOf:hi}=Object,se=globalThis,Wn=se.trustedTypes,ui=Wn?Wn.emptyScript:"",di=se.reactiveElementPolyfillSupport,Le=(r,e)=>r,Ne={toAttribute(r,e){switch(e){case Boolean:r=r?ui:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ht=(r,e)=>!ri(r,e),jn={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:ht};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),se.litPropertyMetadata??(se.litPropertyMetadata=new WeakMap);var J=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=jn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&ai(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){let{get:s,set:o}=li(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){let c=s?.call(this);o?.call(this,i),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??jn}static _$Ei(){if(this.hasOwnProperty(Le("elementProperties")))return;let e=hi(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Le("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Le("properties"))){let t=this.properties,n=[...ci(t),...pi(t)];for(let s of n)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)t.unshift(Bt(s))}else e!==void 0&&t.push(Bt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Gn(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Ne).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=n.getPropertyOptions(s),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ne;this._$Em=s;let c=i.fromAttribute(t,o.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let s=this.constructor,o=this[e];if(n??(n=s.getPropertyOptions(e)),!((n.hasChanged??ht)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:o},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,o]of n){let{wrapped:i}=o,c=this[s];i!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};J.elementStyles=[],J.shadowRootOptions={mode:"open"},J[Le("elementProperties")]=new Map,J[Le("finalized")]=new Map,di?.({ReactiveElement:J}),(se.reactiveElementVersions??(se.reactiveElementVersions=[])).push("2.1.1");var De=globalThis,ut=De.trustedTypes,Yn=ut?ut.createPolicy("lit-html",{createHTML:r=>r}):void 0,Jn="$lit$",ie=`lit$${Math.random().toFixed(9).slice(2)}$`,es="?"+ie,fi=`<${es}>`,he=document,Ue=()=>he.createComment(""),ze=r=>r===null||typeof r!="object"&&typeof r!="function",Zt=Array.isArray,gi=r=>Zt(r)||typeof r?.[Symbol.iterator]=="function",Ft=`[ 	
\f\r]`,Pe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Zn=/-->/g,Vn=/>/g,ce=RegExp(`>|${Ft}(?:([^\\s"'>=/]+)(${Ft}*=${Ft}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Kn=/'/g,Xn=/"/g,ts=/^(?:script|style|textarea|title)$/i,Vt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),q=Vt(1),Ro=Vt(2),Co=Vt(3),ue=Symbol.for("lit-noChange"),O=Symbol.for("lit-nothing"),Qn=new WeakMap,pe=he.createTreeWalker(he,129);function ns(r,e){if(!Zt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Yn!==void 0?Yn.createHTML(e):e}var mi=(r,e)=>{let t=r.length-1,n=[],s,o=e===2?"<svg>":e===3?"<math>":"",i=Pe;for(let c=0;c<t;c++){let l=r[c],u,h,d=-1,g=0;for(;g<l.length&&(i.lastIndex=g,h=i.exec(l),h!==null);)g=i.lastIndex,i===Pe?h[1]==="!--"?i=Zn:h[1]!==void 0?i=Vn:h[2]!==void 0?(ts.test(h[2])&&(s=RegExp("</"+h[2],"g")),i=ce):h[3]!==void 0&&(i=ce):i===ce?h[0]===">"?(i=s??Pe,d=-1):h[1]===void 0?d=-2:(d=i.lastIndex-h[2].length,u=h[1],i=h[3]===void 0?ce:h[3]==='"'?Xn:Kn):i===Xn||i===Kn?i=ce:i===Zn||i===Vn?i=Pe:(i=ce,s=void 0);let x=i===ce&&r[c+1].startsWith("/>")?" ":"";o+=i===Pe?l+fi:d>=0?(n.push(u),l.slice(0,d)+Jn+l.slice(d)+ie+x):l+ie+(d===-2?c:x)}return[ns(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},He=class r{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,i=0,c=e.length-1,l=this.parts,[u,h]=mi(e,t);if(this.el=r.createElement(u,n),pe.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=pe.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Jn)){let g=h[i++],x=s.getAttribute(d).split(ie),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:A[2],strings:x,ctor:A[1]==="."?Gt:A[1]==="?"?Wt:A[1]==="@"?jt:Ae}),s.removeAttribute(d)}else d.startsWith(ie)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(ts.test(s.tagName)){let d=s.textContent.split(ie),g=d.length-1;if(g>0){s.textContent=ut?ut.emptyScript:"";for(let x=0;x<g;x++)s.append(d[x],Ue()),pe.nextNode(),l.push({type:2,index:++o});s.append(d[g],Ue())}}}else if(s.nodeType===8)if(s.data===es)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(ie,d+1))!==-1;)l.push({type:7,index:o}),d+=ie.length-1}o++}}static createElement(e,t){let n=he.createElement("template");return n.innerHTML=e,n}};function we(r,e,t=r,n){if(e===ue)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl,o=ze(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=we(r,s._$AS(r,e.values),s,n)),e}var qt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??he).importNode(t,!0);pe.currentNode=s;let o=pe.nextNode(),i=0,c=0,l=n[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new Be(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Yt(o,this,e)),this._$AV.push(u),l=n[++c]}i!==l?.index&&(o=pe.nextNode(),i++)}return pe.currentNode=he,s}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Be=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=O,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=we(this,e,t),ze(e)?e===O||e==null||e===""?(this._$AH!==O&&this._$AR(),this._$AH=O):e!==this._$AH&&e!==ue&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):gi(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==O&&ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=He.createElement(ns(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new qt(s,this),i=o.u(this.options);o.p(t),this.T(i),this._$AH=o}}_$AC(e){let t=Qn.get(e.strings);return t===void 0&&Qn.set(e.strings,t=new He(e)),t}k(e){Zt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,s=0;for(let o of e)s===t.length?t.push(n=new r(this.O(Ue()),this.O(Ue()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,o){this.type=1,this._$AH=O,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=O}_$AI(e,t=this,n,s){let o=this.strings,i=!1;if(o===void 0)e=we(this,e,t,0),i=!ze(e)||e!==this._$AH&&e!==ue,i&&(this._$AH=e);else{let c=e,l,u;for(e=o[0],l=0;l<o.length-1;l++)u=we(this,c[n+l],t,l),u===ue&&(u=this._$AH[l]),i||(i=!ze(u)||u!==this._$AH[l]),u===O?e=O:e!==O&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}i&&!s&&this.j(e)}j(e){e===O?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Gt=class extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===O?void 0:e}},Wt=class extends Ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==O)}},jt=class extends Ae{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=we(this,e,t,0)??O)===ue)return;let n=this._$AH,s=e===O&&n!==O||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==O&&(n===O||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Yt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){we(this,e)}};var xi=De.litHtmlPolyfillSupport;xi?.(He,Be),(De.litHtmlVersions??(De.litHtmlVersions=[])).push("3.3.1");var ss=(r,e,t)=>{let n=t?.renderBefore??e,s=n._$litPart$;if(s===void 0){let o=t?.renderBefore??null;n._$litPart$=s=new Be(e.insertBefore(Ue(),o),o,void 0,t??{})}return s._$AI(r),s};var Fe=globalThis,oe=class extends J{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ss(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return ue}};oe._$litElement$=!0,oe.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:oe});var bi=Fe.litElementPolyfillSupport;bi?.({LitElement:oe});(Fe.litElementVersions??(Fe.litElementVersions=[])).push("4.2.1");var is=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var _i={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:ht},yi=(r=_i,e,t)=>{let{kind:n,metadata:s}=t,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),n==="accessor"){let{name:i}=t;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,l,r)},init(c){return c!==void 0&&this.C(i,void 0,r,c),c}}}if(n==="setter"){let{name:i}=t;return function(c){let l=this[i];e.call(this,c),this.requestUpdate(i,l,r)}}throw Error("Unsupported decorator location: "+n)};function re(r){return(e,t)=>typeof t=="object"?yi(r,e,t):((n,s,o)=>{let i=s.hasOwnProperty(o);return s.constructor.createProperty(o,n),i?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}function Y(r){return re({...r,state:!0,attribute:!1})}function Jt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var me=Jt();function ps(r){me=r}var hs=/[&<>"']/,ki=new RegExp(hs.source,"g"),us=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,Ti=new RegExp(us.source,"g"),Ei={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},os=r=>Ei[r];function F(r,e){if(e){if(hs.test(r))return r.replace(ki,os)}else if(us.test(r))return r.replace(Ti,os);return r}var wi=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function Ai(r){return r.replace(wi,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}var Si=/(^|[^\[])\^/g;function T(r,e){let t=typeof r=="string"?r:r.source;e=e||"";let n={replace:(s,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(Si,"$1"),t=t.replace(s,i),n},getRegex:()=>new RegExp(t,e)};return n}function rs(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}var Ge={exec:()=>null};function as(r,e){let t=r.replace(/\|/g,(o,i,c)=>{let l=!1,u=i;for(;--u>=0&&c[u]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/),s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function ft(r,e,t){let n=r.length;if(n===0)return"";let s=0;for(;s<n;){let o=r.charAt(n-s-1);if(o===e&&!t)s++;else if(o!==e&&t)s++;else break}return r.slice(0,n-s)}function vi(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function ls(r,e,t,n){let s=e.href,o=e.title?F(e.title):null,i=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;let c={type:"link",raw:t,href:s,title:o,text:i,tokens:n.inlineTokens(i)};return n.state.inLink=!1,c}return{type:"image",raw:t,href:s,title:o,text:F(i)}}function $i(r,e){let t=r.match(/^(\s+)(?:```)/);if(t===null)return e;let n=t[1];return e.split(`
`).map(s=>{let o=s.match(/^\s+/);if(o===null)return s;let[i]=o;return i.length>=n.length?s.slice(n.length):s}).join(`
`)}var Se=class{constructor(e){b(this,"options");b(this,"rules");b(this,"lexer");this.options=e||me}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ft(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=$i(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){let s=ft(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=ft(n.replace(/^ *>[ \t]?/gm,""),`
`);let s=this.lexer.state.top;this.lexer.state.top=!0;let o=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,o={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),c="",l="",u=!1;for(;e;){let h=!1;if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,$e=>" ".repeat(3*$e.length)),g=e.split(`
`,1)[0],x=0;this.options.pedantic?(x=2,l=d.trimStart()):(x=t[2].search(/[^ ]/),x=x>4?1:x,l=d.slice(x),x+=t[1].length);let A=!1;if(!d&&/^ *$/.test(g)&&(c+=g+`
`,e=e.substring(g.length+1),h=!0),!h){let $e=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),et=new RegExp(`^ {0,${Math.min(3,x-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),ae=new RegExp(`^ {0,${Math.min(3,x-1)}}(?:\`\`\`|~~~)`),$=new RegExp(`^ {0,${Math.min(3,x-1)}}#`);for(;e;){let V=e.split(`
`,1)[0];if(g=V,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),ae.test(g)||$.test(g)||$e.test(g)||et.test(e))break;if(g.search(/[^ ]/)>=x||!g.trim())l+=`
`+g.slice(x);else{if(A||d.search(/[^ ]/)>=4||ae.test(d)||$.test(d)||et.test(d))break;l+=`
`+g}!A&&!g.trim()&&(A=!0),c+=V+`
`,e=e.substring(V.length+1),d=g.slice(x)}}o.loose||(u?o.loose=!0:/\n *\n *$/.test(c)&&(u=!0));let B=null,Z;this.options.gfm&&(B=/^\[[ xX]\] /.exec(l),B&&(Z=B[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:c,task:!!B,checked:Z,loose:!1,text:l,tokens:[]}),o.raw+=c}o.items[o.items.length-1].raw=c.trimEnd(),o.items[o.items.length-1].text=l.trimEnd(),o.raw=o.raw.trimEnd();for(let h=0;h<o.items.length;h++)if(this.lexer.state.top=!1,o.items[h].tokens=this.lexer.blockTokens(o.items[h].text,[]),!o.loose){let d=o.items[h].tokens.filter(x=>x.type==="space"),g=d.length>0&&d.some(x=>/\n.*\n/.test(x.raw));o.loose=g}if(o.loose)for(let h=0;h<o.items.length;h++)o.items[h].loose=!0;return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=as(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let c of s)/^ *-+: *$/.test(c)?i.align.push("right"):/^ *:-+: *$/.test(c)?i.align.push("center"):/^ *:-+ *$/.test(c)?i.align.push("left"):i.align.push(null);for(let c of n)i.header.push({text:c,tokens:this.lexer.inline(c)});for(let c of o)i.rows.push(as(c,i.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:F(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;let i=ft(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=vi(t[2],"()");if(i>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){let i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);i&&(s=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),ls(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return ls(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){let i=[...s[0]].length-1,c,l,u=i,h=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(s=d.exec(t))!=null;){if(c=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!c)continue;if(l=[...c].length,s[3]||s[4]){u+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){h+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+h);let g=[...s[0]][0].length,x=e.slice(0,i+s.index+g+l);if(Math.min(i,l)%2){let B=x.slice(1,-1);return{type:"em",raw:x,text:B,tokens:this.lexer.inlineTokens(B)}}let A=x.slice(2,-2);return{type:"strong",raw:x,text:A,tokens:this.lexer.inlineTokens(A)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," "),s=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return s&&o&&(n=n.substring(1,n.length-1)),n=F(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=F(t[1]),s="mailto:"+n):(n=F(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=F(t[0]),s="mailto:"+n;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0]);n=F(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=F(t[0]),{type:"text",raw:t[0],text:n}}}},Ri=/^(?: *(?:\n|$))+/,Ci=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,Oi=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,je=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Ii=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ds=/(?:[*+-]|\d{1,9}[.)])/,fs=T(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ds).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),en=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,Mi=/^[^\n]+/,tn=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Li=T(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",tn).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ni=T(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ds).getRegex(),xt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",nn=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Pi=T("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",nn).replace("tag",xt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gs=T(en).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xt).getRegex(),Di=T(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",gs).getRegex(),sn={blockquote:Di,code:Ci,def:Li,fences:Oi,heading:Ii,hr:je,html:Pi,lheading:fs,list:Ni,newline:Ri,paragraph:gs,table:Ge,text:Mi},cs=T("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xt).getRegex(),Ui={...sn,table:cs,paragraph:T(en).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",cs).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xt).getRegex()},zi={...sn,html:T(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",nn).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Ge,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:T(en).replace("hr",je).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ms=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Hi=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,xs=/^( {2,}|\\)\n(?!\s*$)/,Bi=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ye="\\p{P}\\p{S}",Fi=T(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ye).getRegex(),qi=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Gi=T(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ye).getRegex(),Wi=T("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ye).getRegex(),ji=T("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ye).getRegex(),Yi=T(/\\([punct])/,"gu").replace(/punct/g,Ye).getRegex(),Zi=T(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),Vi=T(nn).replace("(?:-->|$)","-->").getRegex(),Ki=T("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",Vi).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),mt=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Xi=T(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",mt).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),bs=T(/^!?\[(label)\]\[(ref)\]/).replace("label",mt).replace("ref",tn).getRegex(),_s=T(/^!?\[(ref)\](?:\[\])?/).replace("ref",tn).getRegex(),Qi=T("reflink|nolink(?!\\()","g").replace("reflink",bs).replace("nolink",_s).getRegex(),on={_backpedal:Ge,anyPunctuation:Yi,autolink:Zi,blockSkip:qi,br:xs,code:Hi,del:Ge,emStrongLDelim:Gi,emStrongRDelimAst:Wi,emStrongRDelimUnd:ji,escape:ms,link:Xi,nolink:_s,punctuation:Fi,reflink:bs,reflinkSearch:Qi,tag:Ki,text:Bi,url:Ge},Ji={...on,link:T(/^!?\[(label)\]\((.*?)\)/).replace("label",mt).getRegex(),reflink:T(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",mt).getRegex()},Kt={...on,escape:T(ms).replace("])","~|])").getRegex(),url:T(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},eo={...Kt,br:T(xs).replace("{2,}","*").getRegex(),text:T(Kt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},gt={normal:sn,gfm:Ui,pedantic:zi},qe={normal:on,gfm:Kt,breaks:eo,pedantic:Ji},ee=class r{constructor(e){b(this,"tokens");b(this,"options");b(this,"state");b(this,"tokenizer");b(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||me,this.options.tokenizer=this.options.tokenizer||new Se,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:gt.normal,inline:qe.normal};this.options.pedantic?(t.block=gt.pedantic,t.inline=qe.pedantic):this.options.gfm&&(t.block=gt.gfm,this.options.breaks?t.inline=qe.breaks:t.inline=qe.gfm),this.tokenizer.rules=t}static get rules(){return{block:gt,inline:qe}}static lex(e,t){return new r(t).lex(e)}static lexInline(e,t){return new r(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(c,l,u)=>l+"    ".repeat(u.length));let n,s,o,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0,l=e.slice(1),u;this.options.extensions.startBlock.forEach(h=>{u=h.call({lexer:this},l),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(o=e.substring(0,c+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){s=t[t.length-1],i&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,o,i=e,c,l,u;if(this.tokens.links){let h=Object.keys(this.tokens.links);if(h.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)h.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,c.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(h=>(n=h.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,i,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let h=1/0,d=e.slice(1),g;this.options.extensions.startInline.forEach(x=>{g=x.call({lexer:this},d),typeof g=="number"&&g>=0&&(h=Math.min(h,g))}),h<1/0&&h>=0&&(o=e.substring(0,h+1))}if(n=this.tokenizer.inlineText(o)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){let h="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(h);break}else throw new Error(h)}}return t}},ve=class{constructor(e){b(this,"options");this.options=e||me}code(e,t,n){let s=(t||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+F(s)+'">'+(n?e:F(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:F(e,!0))+`</code></pre>
`}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e,t){return e}heading(e,t,n){return`<h${t}>${e}</h${t}>
`}hr(){return`<hr>
`}list(e,t,n){let s=t?"ol":"ul",o=t&&n!==1?' start="'+n+'"':"";return"<"+s+o+`>
`+e+"</"+s+`>
`}listitem(e,t,n){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox">'}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+t+`</table>
`}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){let s=rs(e);if(s===null)return n;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){let s=rs(e);if(s===null)return n;e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(e){return e}},We=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},te=class r{constructor(e){b(this,"options");b(this,"renderer");b(this,"textRenderer");this.options=e||me,this.options.renderer=this.options.renderer||new ve,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new We}static parse(e,t){return new r(t).parse(e)}static parseInline(e,t){return new r(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){let o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let i=o,c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){n+=c||"";continue}}switch(o.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{let i=o;n+=this.renderer.heading(this.parseInline(i.tokens),i.depth,Ai(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{let i=o;n+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{let i=o,c="",l="";for(let h=0;h<i.header.length;h++)l+=this.renderer.tablecell(this.parseInline(i.header[h].tokens),{header:!0,align:i.align[h]});c+=this.renderer.tablerow(l);let u="";for(let h=0;h<i.rows.length;h++){let d=i.rows[h];l="";for(let g=0;g<d.length;g++)l+=this.renderer.tablecell(this.parseInline(d[g].tokens),{header:!1,align:i.align[g]});u+=this.renderer.tablerow(l)}n+=this.renderer.table(c,u);continue}case"blockquote":{let i=o,c=this.parse(i.tokens);n+=this.renderer.blockquote(c);continue}case"list":{let i=o,c=i.ordered,l=i.start,u=i.loose,h="";for(let d=0;d<i.items.length;d++){let g=i.items[d],x=g.checked,A=g.task,B="";if(g.task){let Z=this.renderer.checkbox(!!x);u?g.tokens.length>0&&g.tokens[0].type==="paragraph"?(g.tokens[0].text=Z+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type==="text"&&(g.tokens[0].tokens[0].text=Z+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:Z+" "}):B+=Z+" "}B+=this.parse(g.tokens,u),h+=this.renderer.listitem(B,A,!!x)}n+=this.renderer.list(h,c,l);continue}case"html":{let i=o;n+=this.renderer.html(i.text,i.block);continue}case"paragraph":{let i=o;n+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=o,c=i.tokens?this.parseInline(i.tokens):i.text;for(;s+1<e.length&&e[s+1].type==="text";)i=e[++s],c+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);n+=t?this.renderer.paragraph(c):c;continue}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){let o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let i=this.options.extensions.renderers[o.type].call({parser:this},o);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=i||"";continue}}switch(o.type){case"escape":{let i=o;n+=t.text(i.text);break}case"html":{let i=o;n+=t.html(i.text);break}case"link":{let i=o;n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{let i=o;n+=t.image(i.href,i.title,i.text);break}case"strong":{let i=o;n+=t.strong(this.parseInline(i.tokens,t));break}case"em":{let i=o;n+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{let i=o;n+=t.codespan(i.text);break}case"br":{n+=t.br();break}case"del":{let i=o;n+=t.del(this.parseInline(i.tokens,t));break}case"text":{let i=o;n+=t.text(i.text);break}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}},de=class{constructor(e){b(this,"options");this.options=e||me}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}};b(de,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var ge,Qt,ys,Xt=class{constructor(...e){Bn(this,ge);b(this,"defaults",Jt());b(this,"options",this.setOptions);b(this,"parse",lt(this,ge,Qt).call(this,ee.lex,te.parse));b(this,"parseInline",lt(this,ge,Qt).call(this,ee.lexInline,te.parseInline));b(this,"Parser",te);b(this,"Renderer",ve);b(this,"TextRenderer",We);b(this,"Lexer",ee);b(this,"Tokenizer",Se);b(this,"Hooks",de);this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let o=s;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,t));for(let i of o.rows)for(let c of i)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{let o=s;n=n.concat(this.walkTokens(o.items,t));break}default:{let o=s;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let c=o[i].flat(1/0);n=n.concat(this.walkTokens(c,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=t.renderers[o.name];i?t.renderers[o.name]=function(...c){let l=o.renderer.apply(this,c);return l===!1&&(l=i.apply(this,c)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[o.level];i?i.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),n.renderer){let o=this.defaults.renderer||new ve(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;let c=i,l=n.renderer[c],u=o[c];o[c]=(...h)=>{let d=l.apply(o,h);return d===!1&&(d=u.apply(o,h)),d||""}}s.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Se(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let c=i,l=n.tokenizer[c],u=o[c];o[c]=(...h)=>{let d=l.apply(o,h);return d===!1&&(d=u.apply(o,h)),d}}s.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new de;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;let c=i,l=n.hooks[c],u=o[c];de.passThroughHooks.has(i)?o[c]=h=>{if(this.defaults.async)return Promise.resolve(l.call(o,h)).then(g=>u.call(o,g));let d=l.call(o,h);return u.call(o,d)}:o[c]=(...h)=>{let d=l.apply(o,h);return d===!1&&(d=u.apply(o,h)),d}}s.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(c){let l=[];return l.push(i.call(this,c)),o&&(l=l.concat(o.call(this,c))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ee.lex(e,t??this.defaults)}parser(e,t){return te.parse(e,t??this.defaults)}};ge=new WeakSet,Qt=function(e,t){return(n,s)=>{let o={...s},i={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let c=lt(this,ge,ys).call(this,!!i.silent,!!i.async);if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(l=>e(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>t(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(c);try{i.hooks&&(n=i.hooks.preprocess(n));let l=e(n,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let u=t(l,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(l){return c(l)}}},ys=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+F(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};var fe=new Xt;function y(r,e){return fe.parse(r,e)}y.options=y.setOptions=function(r){return fe.setOptions(r),y.defaults=fe.defaults,ps(y.defaults),y};y.getDefaults=Jt;y.defaults=me;y.use=function(...r){return fe.use(...r),y.defaults=fe.defaults,ps(y.defaults),y};y.walkTokens=function(r,e){return fe.walkTokens(r,e)};y.parseInline=fe.parseInline;y.Parser=te;y.parser=te.parse;y.Renderer=ve;y.TextRenderer=We;y.Lexer=ee;y.lexer=ee.lex;y.Tokenizer=Se;y.Hooks=de;y.parse=y;var mr=y.options,xr=y.setOptions,br=y.use,_r=y.walkTokens,yr=y.parseInline;var kr=te.parse,Tr=ee.lex;var{entries:Cs,setPrototypeOf:ks,isFrozen:to,getPrototypeOf:no,getOwnPropertyDescriptor:so}=Object,{freeze:U,seal:G,create:Os}=Object,{apply:hn,construct:un}=typeof Reflect<"u"&&Reflect;U||(U=function(e){return e});G||(G=function(e){return e});hn||(hn=function(e,t,n){return e.apply(t,n)});un||(un=function(e,t){return new e(...t)});var bt=z(Array.prototype.forEach),io=z(Array.prototype.lastIndexOf),Ts=z(Array.prototype.pop),Ze=z(Array.prototype.push),oo=z(Array.prototype.splice),yt=z(String.prototype.toLowerCase),rn=z(String.prototype.toString),Es=z(String.prototype.match),Ve=z(String.prototype.replace),ro=z(String.prototype.indexOf),ao=z(String.prototype.trim),W=z(Object.prototype.hasOwnProperty),D=z(RegExp.prototype.test),Ke=lo(TypeError);function z(r){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return hn(r,e,n)}}function lo(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return un(r,t)}}function _(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:yt;ks&&ks(r,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){let o=t(s);o!==s&&(to(e)||(e[n]=o),s=o)}r[s]=!0}return r}function co(r){for(let e=0;e<r.length;e++)W(r,e)||(r[e]=null);return r}function ne(r){let e=Os(null);for(let[t,n]of Cs(r))W(r,t)&&(Array.isArray(n)?e[t]=co(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=ne(n):e[t]=n);return e}function Xe(r,e){for(;r!==null;){let n=so(r,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}r=no(r)}function t(){return null}return t}var ws=U(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),an=U(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ln=U(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),po=U(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),cn=U(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),ho=U(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),As=U(["#text"]),Ss=U(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),pn=U(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),vs=U(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),_t=U(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),uo=G(/\{\{[\w\W]*|[\w\W]*\}\}/gm),fo=G(/<%[\w\W]*|[\w\W]*%>/gm),go=G(/\$\{[\w\W]*/gm),mo=G(/^data-[\-\w.\u00B7-\uFFFF]+$/),xo=G(/^aria-[\-\w]+$/),Is=G(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bo=G(/^(?:\w+script|data):/i),_o=G(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ms=G(/^html$/i),yo=G(/^[a-z][.\w]*(-[.\w]+)+$/i),$s=Object.freeze({__proto__:null,ARIA_ATTR:xo,ATTR_WHITESPACE:_o,CUSTOM_ELEMENT:yo,DATA_ATTR:mo,DOCTYPE_NAME:Ms,ERB_EXPR:fo,IS_ALLOWED_URI:Is,IS_SCRIPT_OR_DATA:bo,MUSTACHE_EXPR:uo,TMPLIT_EXPR:go}),Qe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},ko=function(){return typeof window>"u"?null:window},To=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));let o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},Rs=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Ls(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ko(),e=m=>Ls(m);if(e.version="3.2.6",e.removed=[],!r||!r.document||r.document.nodeType!==Qe.document||!r.Element)return e.isSupported=!1,e;let{document:t}=r,n=t,s=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:c,Element:l,NodeFilter:u,NamedNodeMap:h=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:d,DOMParser:g,trustedTypes:x}=r,A=l.prototype,B=Xe(A,"cloneNode"),Z=Xe(A,"remove"),$e=Xe(A,"nextSibling"),et=Xe(A,"childNodes"),ae=Xe(A,"parentNode");if(typeof i=="function"){let m=t.createElement("template");m.content&&m.content.ownerDocument&&(t=m.content.ownerDocument)}let $,V="",{implementation:wt,createNodeIterator:Bs,createDocumentFragment:Fs,getElementsByTagName:qs}=t,{importNode:Gs}=n,P=Rs();e.isSupported=typeof Cs=="function"&&typeof ae=="function"&&wt&&wt.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:At,ERB_EXPR:St,TMPLIT_EXPR:vt,DATA_ATTR:Ws,ARIA_ATTR:js,IS_SCRIPT_OR_DATA:Ys,ATTR_WHITESPACE:fn,CUSTOM_ELEMENT:Zs}=$s,{IS_ALLOWED_URI:gn}=$s,R=null,mn=_({},[...ws,...an,...ln,...cn,...As]),I=null,xn=_({},[...Ss,...pn,...vs,..._t]),w=Object.seal(Os(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Re=null,$t=null,bn=!0,Rt=!0,_n=!1,yn=!0,xe=!1,tt=!0,le=!1,Ct=!1,Ot=!1,be=!1,nt=!1,st=!1,kn=!0,Tn=!1,Vs="user-content-",It=!0,Ce=!1,_e={},ye=null,En=_({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),wn=null,An=_({},["audio","video","img","source","image","track"]),Mt=null,Sn=_({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),it="http://www.w3.org/1998/Math/MathML",ot="http://www.w3.org/2000/svg",K="http://www.w3.org/1999/xhtml",ke=K,Lt=!1,Nt=null,Ks=_({},[it,ot,K],rn),rt=_({},["mi","mo","mn","ms","mtext"]),at=_({},["annotation-xml"]),Xs=_({},["title","style","font","a","script"]),Oe=null,Qs=["application/xhtml+xml","text/html"],Js="text/html",C=null,Te=null,ei=t.createElement("form"),vn=function(a){return a instanceof RegExp||a instanceof Function},Pt=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(Te&&Te===a)){if((!a||typeof a!="object")&&(a={}),a=ne(a),Oe=Qs.indexOf(a.PARSER_MEDIA_TYPE)===-1?Js:a.PARSER_MEDIA_TYPE,C=Oe==="application/xhtml+xml"?rn:yt,R=W(a,"ALLOWED_TAGS")?_({},a.ALLOWED_TAGS,C):mn,I=W(a,"ALLOWED_ATTR")?_({},a.ALLOWED_ATTR,C):xn,Nt=W(a,"ALLOWED_NAMESPACES")?_({},a.ALLOWED_NAMESPACES,rn):Ks,Mt=W(a,"ADD_URI_SAFE_ATTR")?_(ne(Sn),a.ADD_URI_SAFE_ATTR,C):Sn,wn=W(a,"ADD_DATA_URI_TAGS")?_(ne(An),a.ADD_DATA_URI_TAGS,C):An,ye=W(a,"FORBID_CONTENTS")?_({},a.FORBID_CONTENTS,C):En,Re=W(a,"FORBID_TAGS")?_({},a.FORBID_TAGS,C):ne({}),$t=W(a,"FORBID_ATTR")?_({},a.FORBID_ATTR,C):ne({}),_e=W(a,"USE_PROFILES")?a.USE_PROFILES:!1,bn=a.ALLOW_ARIA_ATTR!==!1,Rt=a.ALLOW_DATA_ATTR!==!1,_n=a.ALLOW_UNKNOWN_PROTOCOLS||!1,yn=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,xe=a.SAFE_FOR_TEMPLATES||!1,tt=a.SAFE_FOR_XML!==!1,le=a.WHOLE_DOCUMENT||!1,be=a.RETURN_DOM||!1,nt=a.RETURN_DOM_FRAGMENT||!1,st=a.RETURN_TRUSTED_TYPE||!1,Ot=a.FORCE_BODY||!1,kn=a.SANITIZE_DOM!==!1,Tn=a.SANITIZE_NAMED_PROPS||!1,It=a.KEEP_CONTENT!==!1,Ce=a.IN_PLACE||!1,gn=a.ALLOWED_URI_REGEXP||Is,ke=a.NAMESPACE||K,rt=a.MATHML_TEXT_INTEGRATION_POINTS||rt,at=a.HTML_INTEGRATION_POINTS||at,w=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&vn(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(w.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&vn(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(w.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(w.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),xe&&(Rt=!1),nt&&(be=!0),_e&&(R=_({},As),I=[],_e.html===!0&&(_(R,ws),_(I,Ss)),_e.svg===!0&&(_(R,an),_(I,pn),_(I,_t)),_e.svgFilters===!0&&(_(R,ln),_(I,pn),_(I,_t)),_e.mathMl===!0&&(_(R,cn),_(I,vs),_(I,_t))),a.ADD_TAGS&&(R===mn&&(R=ne(R)),_(R,a.ADD_TAGS,C)),a.ADD_ATTR&&(I===xn&&(I=ne(I)),_(I,a.ADD_ATTR,C)),a.ADD_URI_SAFE_ATTR&&_(Mt,a.ADD_URI_SAFE_ATTR,C),a.FORBID_CONTENTS&&(ye===En&&(ye=ne(ye)),_(ye,a.FORBID_CONTENTS,C)),It&&(R["#text"]=!0),le&&_(R,["html","head","body"]),R.table&&(_(R,["tbody"]),delete Re.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ke('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ke('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');$=a.TRUSTED_TYPES_POLICY,V=$.createHTML("")}else $===void 0&&($=To(x,s)),$!==null&&typeof V=="string"&&(V=$.createHTML(""));U&&U(a),Te=a}},$n=_({},[...an,...ln,...po]),Rn=_({},[...cn,...ho]),ti=function(a){let p=ae(a);(!p||!p.tagName)&&(p={namespaceURI:ke,tagName:"template"});let f=yt(a.tagName),E=yt(p.tagName);return Nt[a.namespaceURI]?a.namespaceURI===ot?p.namespaceURI===K?f==="svg":p.namespaceURI===it?f==="svg"&&(E==="annotation-xml"||rt[E]):!!$n[f]:a.namespaceURI===it?p.namespaceURI===K?f==="math":p.namespaceURI===ot?f==="math"&&at[E]:!!Rn[f]:a.namespaceURI===K?p.namespaceURI===ot&&!at[E]||p.namespaceURI===it&&!rt[E]?!1:!Rn[f]&&(Xs[f]||!$n[f]):!!(Oe==="application/xhtml+xml"&&Nt[a.namespaceURI]):!1},j=function(a){Ze(e.removed,{element:a});try{ae(a).removeChild(a)}catch{Z(a)}},Ee=function(a,p){try{Ze(e.removed,{attribute:p.getAttributeNode(a),from:p})}catch{Ze(e.removed,{attribute:null,from:p})}if(p.removeAttribute(a),a==="is")if(be||nt)try{j(p)}catch{}else try{p.setAttribute(a,"")}catch{}},Cn=function(a){let p=null,f=null;if(Ot)a="<remove></remove>"+a;else{let S=Es(a,/^[\r\n\t ]+/);f=S&&S[0]}Oe==="application/xhtml+xml"&&ke===K&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");let E=$?$.createHTML(a):a;if(ke===K)try{p=new g().parseFromString(E,Oe)}catch{}if(!p||!p.documentElement){p=wt.createDocument(ke,"template",null);try{p.documentElement.innerHTML=Lt?V:E}catch{}}let M=p.body||p.documentElement;return a&&f&&M.insertBefore(t.createTextNode(f),M.childNodes[0]||null),ke===K?qs.call(p,le?"html":"body")[0]:le?p.documentElement:M},On=function(a){return Bs.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Dt=function(a){return a instanceof d&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof h)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},In=function(a){return typeof c=="function"&&a instanceof c};function X(m,a,p){bt(m,f=>{f.call(e,a,p,Te)})}let Mn=function(a){let p=null;if(X(P.beforeSanitizeElements,a,null),Dt(a))return j(a),!0;let f=C(a.nodeName);if(X(P.uponSanitizeElement,a,{tagName:f,allowedTags:R}),tt&&a.hasChildNodes()&&!In(a.firstElementChild)&&D(/<[/\w!]/g,a.innerHTML)&&D(/<[/\w!]/g,a.textContent)||a.nodeType===Qe.progressingInstruction||tt&&a.nodeType===Qe.comment&&D(/<[/\w]/g,a.data))return j(a),!0;if(!R[f]||Re[f]){if(!Re[f]&&Nn(f)&&(w.tagNameCheck instanceof RegExp&&D(w.tagNameCheck,f)||w.tagNameCheck instanceof Function&&w.tagNameCheck(f)))return!1;if(It&&!ye[f]){let E=ae(a)||a.parentNode,M=et(a)||a.childNodes;if(M&&E){let S=M.length;for(let H=S-1;H>=0;--H){let Q=B(M[H],!0);Q.__removalCount=(a.__removalCount||0)+1,E.insertBefore(Q,$e(a))}}}return j(a),!0}return a instanceof l&&!ti(a)||(f==="noscript"||f==="noembed"||f==="noframes")&&D(/<\/no(script|embed|frames)/i,a.innerHTML)?(j(a),!0):(xe&&a.nodeType===Qe.text&&(p=a.textContent,bt([At,St,vt],E=>{p=Ve(p,E," ")}),a.textContent!==p&&(Ze(e.removed,{element:a.cloneNode()}),a.textContent=p)),X(P.afterSanitizeElements,a,null),!1)},Ln=function(a,p,f){if(kn&&(p==="id"||p==="name")&&(f in t||f in ei))return!1;if(!(Rt&&!$t[p]&&D(Ws,p))){if(!(bn&&D(js,p))){if(!I[p]||$t[p]){if(!(Nn(a)&&(w.tagNameCheck instanceof RegExp&&D(w.tagNameCheck,a)||w.tagNameCheck instanceof Function&&w.tagNameCheck(a))&&(w.attributeNameCheck instanceof RegExp&&D(w.attributeNameCheck,p)||w.attributeNameCheck instanceof Function&&w.attributeNameCheck(p))||p==="is"&&w.allowCustomizedBuiltInElements&&(w.tagNameCheck instanceof RegExp&&D(w.tagNameCheck,f)||w.tagNameCheck instanceof Function&&w.tagNameCheck(f))))return!1}else if(!Mt[p]){if(!D(gn,Ve(f,fn,""))){if(!((p==="src"||p==="xlink:href"||p==="href")&&a!=="script"&&ro(f,"data:")===0&&wn[a])){if(!(_n&&!D(Ys,Ve(f,fn,"")))){if(f)return!1}}}}}}return!0},Nn=function(a){return a!=="annotation-xml"&&Es(a,Zs)},Pn=function(a){X(P.beforeSanitizeAttributes,a,null);let{attributes:p}=a;if(!p||Dt(a))return;let f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:I,forceKeepAttr:void 0},E=p.length;for(;E--;){let M=p[E],{name:S,namespaceURI:H,value:Q}=M,Ie=C(S),Ut=Q,L=S==="value"?Ut:ao(Ut);if(f.attrName=Ie,f.attrValue=L,f.keepAttr=!0,f.forceKeepAttr=void 0,X(P.uponSanitizeAttribute,a,f),L=f.attrValue,Tn&&(Ie==="id"||Ie==="name")&&(Ee(S,a),L=Vs+L),tt&&D(/((--!?|])>)|<\/(style|title)/i,L)){Ee(S,a);continue}if(f.forceKeepAttr)continue;if(!f.keepAttr){Ee(S,a);continue}if(!yn&&D(/\/>/i,L)){Ee(S,a);continue}xe&&bt([At,St,vt],Un=>{L=Ve(L,Un," ")});let Dn=C(a.nodeName);if(!Ln(Dn,Ie,L)){Ee(S,a);continue}if($&&typeof x=="object"&&typeof x.getAttributeType=="function"&&!H)switch(x.getAttributeType(Dn,Ie)){case"TrustedHTML":{L=$.createHTML(L);break}case"TrustedScriptURL":{L=$.createScriptURL(L);break}}if(L!==Ut)try{H?a.setAttributeNS(H,S,L):a.setAttribute(S,L),Dt(a)?j(a):Ts(e.removed)}catch{Ee(S,a)}}X(P.afterSanitizeAttributes,a,null)},ni=function m(a){let p=null,f=On(a);for(X(P.beforeSanitizeShadowDOM,a,null);p=f.nextNode();)X(P.uponSanitizeShadowNode,p,null),Mn(p),Pn(p),p.content instanceof o&&m(p.content);X(P.afterSanitizeShadowDOM,a,null)};return e.sanitize=function(m){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},p=null,f=null,E=null,M=null;if(Lt=!m,Lt&&(m="<!-->"),typeof m!="string"&&!In(m))if(typeof m.toString=="function"){if(m=m.toString(),typeof m!="string")throw Ke("dirty is not a string, aborting")}else throw Ke("toString is not a function");if(!e.isSupported)return m;if(Ct||Pt(a),e.removed=[],typeof m=="string"&&(Ce=!1),Ce){if(m.nodeName){let Q=C(m.nodeName);if(!R[Q]||Re[Q])throw Ke("root node is forbidden and cannot be sanitized in-place")}}else if(m instanceof c)p=Cn("<!---->"),f=p.ownerDocument.importNode(m,!0),f.nodeType===Qe.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?p=f:p.appendChild(f);else{if(!be&&!xe&&!le&&m.indexOf("<")===-1)return $&&st?$.createHTML(m):m;if(p=Cn(m),!p)return be?null:st?V:""}p&&Ot&&j(p.firstChild);let S=On(Ce?m:p);for(;E=S.nextNode();)Mn(E),Pn(E),E.content instanceof o&&ni(E.content);if(Ce)return m;if(be){if(nt)for(M=Fs.call(p.ownerDocument);p.firstChild;)M.appendChild(p.firstChild);else M=p;return(I.shadowroot||I.shadowrootmode)&&(M=Gs.call(n,M,!0)),M}let H=le?p.outerHTML:p.innerHTML;return le&&R["!doctype"]&&p.ownerDocument&&p.ownerDocument.doctype&&p.ownerDocument.doctype.name&&D(Ms,p.ownerDocument.doctype.name)&&(H="<!DOCTYPE "+p.ownerDocument.doctype.name+`>
`+H),xe&&bt([At,St,vt],Q=>{H=Ve(H,Q," ")}),$&&st?$.createHTML(H):H},e.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pt(m),Ct=!0},e.clearConfig=function(){Te=null,Ct=!1},e.isValidAttribute=function(m,a,p){Te||Pt({});let f=C(m),E=C(a);return Ln(f,E,p)},e.addHook=function(m,a){typeof a=="function"&&Ze(P[m],a)},e.removeHook=function(m,a){if(a!==void 0){let p=io(P[m],a);return p===-1?void 0:oo(P[m],p,1)[0]}return Ts(P[m])},e.removeHooks=function(m){P[m]=[]},e.removeAllHooks=function(){P=Rs()},e}var dn=Ls();function Ns(r){try{y.setOptions({breaks:!0,gfm:!0});let e=y.parse(r),t=typeof e=="string"?e:String(e);return Eo(t)}catch(e){return console.warn("Markdown parsing failed:",e),kt(r)}}function kt(r){return dn.sanitize(r,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]})}function Eo(r){return dn.sanitize(r,{ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","strong","b","em","i","ul","ol","li","a","blockquote","br","p","code","pre","table","thead","tbody","tr","th","td"],ALLOWED_ATTR:["href","target","rel","class","id"],ALLOW_DATA_ATTR:!1,KEEP_CONTENT:!0})}async function Ps(r){try{let e=await fetch(r);return e.ok?await e.text():(console.warn(`Failed to load icon from URL: ${r}`),"")}catch(e){return console.warn(`Error loading icon from URL: ${r}`,e),""}}function Ds(r){return navigator.clipboard.writeText(r)}function Tt(r){document.body.style.marginRight="400px",document.body.style.transition="margin-right 0.4s ease",document.documentElement.style.setProperty("--agent-ui-header-height",`${r}px`)}function Et(){document.body.style.marginRight="0",setTimeout(()=>{document.body.style.transition=""},400),document.documentElement.style.removeProperty("--agent-ui-header-height")}var Us="400px";var zs="0.8s cubic-bezier(0.4, 0, 0.2, 1)",Je={HEADER_HEIGHT:"--agent-ui-header-height",BRAND_COLOR:"--agent-ui-brand-color",BRAND_COLOR_LIGHT:"--agent-ui-brand-color-light"},Hs={TOGGLE:"k"},k={BACKDROP:"backdrop",CONTAINER:"container",EXPANDED:"expanded",PANEL_MODE:"panel-mode",VISIBLE:"visible",INPUT_FOCUSED:"input-focused",MESSAGE:"message",USER_MESSAGE:"user-message",AGENT_MESSAGE:"agent-message",MESSAGE_CONTAINER:"message-container",INPUT_CONTAINER:"input-container",INPUT_WRAPPER:"input-wrapper",INPUT_FIELD:"input-field",SEND_BUTTON:"send-button",TOGGLE_BUTTON:"toggle-button",PANEL_TOGGLE_BUTTON:"panel-toggle-button",COPY_BUTTON:"copy-button",TYPING_INDICATOR:"typing-indicator",HEADER_BAR:"header-bar",HEADER_TITLE:"header-title"};var v=class extends oe{constructor(){super(...arguments);b(this,"placeholderText","Ask me anything - I can help with data, actions, and insights");b(this,"iconSvg","");b(this,"iconUrl","");b(this,"headerHeight",0);b(this,"conversationTitle","New Conversation");b(this,"messages",[]);b(this,"open",!1);b(this,"panelMode",!1);b(this,"inputFocused",!1);b(this,"loadedIconSvg","");b(this,"isTyping",!1);b(this,"isSubmittable",!0);b(this,"currentMode","min");b(this,"lastExpandedMode","dialog")}setOpen(t){this.open=t,this.requestUpdate(),!t&&this.panelMode&&(this.panelMode=!1,Et()),t&&(this.inputFocused=!1,document.documentElement.style.setProperty(Je.HEADER_HEIGHT,`${this.headerHeight}px`)),this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector(`.${k.CONTAINER}`);n&&(n.style.bottom=t?"0":"")})}setTyping(t){this.isTyping=t,this.requestUpdate()}setSubmittable(t){this.isSubmittable=t,this.requestUpdate()}replaceLastMessage(t){if(this.messages.length===0){this.messages=[{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom());return}let n=this.messages[this.messages.length-1];n.type==="agent"?(this.messages=[...this.messages.slice(0,-1),{...n,text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())):(this.messages=[...this.messages,{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom()))}appendToLastMessage(t){if(this.messages.length===0){this.messages=[{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom());return}let n=this.messages[this.messages.length-1];if(n.type==="agent"){let s=n.text+t;this.messages=[...this.messages.slice(0,-1),{...n,text:s}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())}else this.messages=[...this.messages,{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())}setInputValue(t){this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);n&&(n.value=t)})}_scrollToBottom(){let t=this.shadowRoot?.querySelector(`.${k.MESSAGE_CONTAINER}`);t&&(t.scrollTop=t.scrollHeight)}_parseMessageContent(t,n){return n?kt(t):Ns(t)}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleGlobalKeydown.bind(this)),this._loadIcon(),document.documentElement.style.setProperty(Je.HEADER_HEIGHT,`${this.headerHeight}px`)}async _loadIcon(){if(this.iconSvg){this.loadedIconSvg=this.iconSvg;return}this.iconUrl&&(this.loadedIconSvg=await Ps(this.iconUrl),this.requestUpdate())}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleGlobalKeydown.bind(this)),this.panelMode&&Et(),document.documentElement.style.removeProperty(Je.HEADER_HEIGHT)}_handleGlobalKeydown(t){(t.ctrlKey||t.metaKey)&&t.key===Hs.TOGGLE&&(t.preventDefault(),this.currentMode==="min"?this._expandToMaxMode():(this.currentMode="min",this.setOpen(!1)))}_expandToMaxMode(){this.currentMode="max",this.setOpen(!0),this.panelMode=this.lastExpandedMode==="panel",this.requestUpdate(),this.panelMode&&Tt(this.headerHeight),this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);t&&t.focus()})}_toggleExpanded(){this.open?(this.lastExpandedMode=this.panelMode?"panel":"dialog",this.setOpen(!1)):this._openExpanded()}_openExpanded(){this.setOpen(!0),this.panelMode=this.lastExpandedMode==="panel",this.requestUpdate(),document.documentElement.style.setProperty(Je.HEADER_HEIGHT,`${this.headerHeight}px`),this.panelMode&&(document.body.style.marginRight=Us,document.body.style.transition=zs),this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);t&&(t.focus(),this.inputFocused=!0,this.requestUpdate())})}_handleSendMessage(){if(!this.isSubmittable)return;let t=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);if(t&&t.value.trim()){let n=t.value,s=kt(n);this.messages=[...this.messages,{type:"user",text:s}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom()),this.dispatchEvent(new CustomEvent("message",{detail:{query:s}})),t.value=""}this.open||this._expandOnSend()}_expandOnSend(){this.setOpen(!0),this.panelMode=this.lastExpandedMode==="panel",this.requestUpdate(),this.panelMode&&Tt(this.headerHeight),this.inputFocused=!1,this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);t&&t.focus()})}_handleKeydown(t){t.key==="Enter"&&this.isSubmittable&&this._handleSendMessage()}_handleInputFocus(){this.inputFocused=!0,this.requestUpdate()}_handleInputBlur(){this.inputFocused=!1,this.requestUpdate()}_handleBackdropClick(t){this.open&&t.target===this.shadowRoot?.querySelector(`.${k.BACKDROP}`)&&this.setOpen(!1)}_handleCopyMessage(t,n){n.stopPropagation(),Ds(t).catch(s=>{console.error("Failed to copy message:",s)})}_handlePanelToggle(){this.panelMode=!this.panelMode,this.lastExpandedMode=this.panelMode?"panel":"dialog",this.requestUpdate(),this.panelMode?Tt(this.headerHeight):Et(),this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(`.${k.INPUT_FIELD}`);t&&(t.focus(),this.inputFocused=!0,this.requestUpdate())})}render(){return q`
      <div class="${k.BACKDROP} ${this.open?k.VISIBLE:""} ${this.panelMode?k.PANEL_MODE:""}" @click=${this._handleBackdropClick}></div>
      <div class="${k.CONTAINER} ${this.open?k.EXPANDED:""} ${this.panelMode?k.PANEL_MODE:""} ${this.inputFocused?k.INPUT_FOCUSED:""}">
        ${this.open?q`
          <div class="${k.HEADER_BAR}">
            <h2 class="${k.HEADER_TITLE}">${this.conversationTitle}</h2>
          </div>
          <div class="${k.MESSAGE_CONTAINER}">
            ${this.messages.map(t=>q`
              <div class="${k.MESSAGE} ${t.type}-message">
                <div class="message-text" .innerHTML=${this._parseMessageContent(t.text,t.type==="user")}></div>
                ${t.type==="agent"?q`
                  <button class="${k.COPY_BUTTON}" @click=${n=>this._handleCopyMessage(t.text,n)} title="Copy to clipboard">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                  </button>
                `:""}
              </div>
            `)}
            ${this.isTyping?q`
              <div class="${k.MESSAGE} agent-message">
                <span class="${k.TYPING_INDICATOR}">
                  <span></span><span></span><span></span>
                </span>
              </div>
            `:""}
          </div>
        `:""}
        <div class="${k.INPUT_CONTAINER}">
          <div class="${k.INPUT_WRAPPER}">
            ${this.loadedIconSvg?q`
              <div class="input-prefix">
                <div .innerHTML=${this.loadedIconSvg}></div>
              </div>
            `:""}
            <input 
              class="${k.INPUT_FIELD}" 
              type="text" 
              placeholder=${this.placeholderText}
              @keydown=${this._handleKeydown}
              @focus=${this._handleInputFocus}
              @blur=${this._handleInputBlur}
            />
            <button class="${k.SEND_BUTTON}" ?disabled=${!this.isSubmittable} @click=${this._handleSendMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
            </button>
          </div>
        </div>
        <button class="${k.TOGGLE_BUTTON}" @click=${this._toggleExpanded} title=${this.open?"Collapse":"Expand"}>
          ${this.open?q`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          `:q`
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          `}
        </button>
        ${this.open?q`
          <button class="${k.PANEL_TOGGLE_BUTTON}" @click=${this._handlePanelToggle} title=${this.panelMode?"Switch to dialog mode":"Switch to panel mode"}>
            ${this.panelMode?q`
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-chevron-left-icon lucide-square-chevron-left"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m14 16-4-4 4-4"/></svg>
            `:q`
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-icon lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
            `}
          </button>
        `:""}
      </div>
    `}};b(v,"styles",Ht`
    :host { 
      display: block;
      z-index: 1000; 
      font-family: sans-serif;
      box-sizing: border-box;
      font-size: 14px;
      --agent-ui-brand-color: #702c62;
      --agent-ui-brand-color-light: rgba(112, 44, 98, 0.1);
    }
    
    .backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: opacity 0.4s ease, visibility 0.4s ease;
      z-index: 999;
      pointer-events: none;
    }    
    
    .backdrop.visible {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    
    .backdrop.panel-mode {
      display: none;
    }
    
    .container {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: white;
      border-top: 1px solid #e0e0e0;
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15);
      z-index: 1000;
      transition: all 0.4s ease;
      display: flex;
      flex-direction: column;
    }
    
    .container.expanded {
      width: 80vw;
      height: calc(80vh - var(--agent-ui-header-height, 0px));
      left: 50%;
      top: calc(var(--agent-ui-header-height, 0px) + (20vh) / 2);
      transform: translate(-50%, 0);
      border-radius: 12px;
      display: flex;
      flex-direction: column;
    }
    
    .container.expanded .message-container {
      flex: 1;
      overflow-y: auto;
      margin-bottom: 0;
      min-height: 0;
    }
    
    .header-bar {
      padding: 12px 16px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .header-title {
      font-size: 16px;
      font-weight: 600;
      color: #333;
      margin: 0;
    }
    
    .container.expanded .input-container {
      flex-shrink: 0;
      margin-top: 0;
    }
    
    .container.panel-mode {
      position: fixed;
      top: var(--agent-ui-header-height, 0px);
      right: 0;
      bottom: 0 !important;
      left: auto;
      transform: none;
      width: 400px;
      height: calc(100vh - var(--agent-ui-header-height, 0px));
      border-radius: 0;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
    
    :host(.panel-mode) {
      margin-right: 400px;
    }
    
    @media (max-width: 768px) {
      .container.expanded {
        width: 80vw;
        height: calc(80vh - var(--agent-ui-header-height, 0px));
        bottom: 0 !important;
        left: 50%;
        transform: translateX(-50%);
        background: white;
      }
      
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
        bottom: 0 !important;
      }
      
      :host(.panel-mode) {
        margin-right: 0;
      }
    }
    
    @media (max-width: 480px) {
      .container.expanded {
        width: 80vw;
        height: calc(80vh - var(--agent-ui-header-height, 0px));
        bottom: 0 !important;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 0;
        background: white;
      }
      
      .container.panel-mode {
        width: 100vw;
        left: 0;
        right: 0;
        bottom: 0 !important;
      }
    }
    
    .input-container {
      padding: 8px;
      flex-shrink: 0;
    }
    
    .input-wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #f8f9fa;
      border-radius: 12px;
      padding: 6px 12px;
      border: 1px solid #e0e0e0;
      max-width: 80vw;
      margin: 0 auto;
      transition: all 0.2s ease;
    }
    
    .input-prefix {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
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
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      cursor: pointer;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .send-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .send-button:active {
      transform: scale(0.95);
    }
    
    .send-button:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .send-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
      background: #f0f0f0;
      color: #999;
    }
    
    .send-button:disabled:hover {
      background: #f0f0f0;
      color: #999;
      transform: none;
      box-shadow: none;
    }
    
    .message-container {
      overflow-y: auto;
      flex: 1;
      min-height: 0;
    }
    
    .message {
      margin: 8px;
      padding: 8px 12px;
      border-radius: 8px;
    }
    
    .user-message {
      background: var(--agent-ui-brand-color-light);
      display: block;
      width: fit-content;
    }
    
    .agent-message {
      background: white;
      position: relative;
    }
    
    .agent-message .copy-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: none;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }
    
    .agent-message:hover .copy-button {
      display: flex;
    }
    
    .copy-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .copy-button:active {
      transform: scale(0.95);
    }
    
    .typing-indicator {
      display: inline-block;
      animation: typing 1.4s infinite;
    }    
    
    .typing-indicator span {
      display: inline-block;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: var(--agent-ui-brand-color);
      margin: 0 2px;
      animation: typing-dot 1.4s infinite;
    }    
    
    .typing-indicator span:nth-child(2) {
      animation-delay: 0.2s;
    }    
    
    .typing-indicator span:nth-child(3) {
      animation-delay: 0.4s;
    }    
    
    @keyframes typing-dot {
      0%, 60%, 100% {
        opacity: 0.3;
        transform: scale(0.8);
      }
      30% {
        opacity: 1;
        transform: scale(1);
      }
    }
    
    .toggle-button {
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    
    .toggle-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: translateY(-50%) scale(1.1);
    }
    
    .toggle-button:active {
      transform: translateY(-50%) scale(0.95);
    }
    
    .container.expanded .toggle-button {
      top: 8px;
      transform: none;
    }
    
    .container.expanded .toggle-button:hover {
      transform: scale(1.1);
    }
    
    .container.expanded .toggle-button:active {
      transform: scale(0.95);
    }
    
    .panel-toggle-button {
      position: absolute;
      top: 8px;
      right: 40px;
      background: none;
      border: none;
      color: var(--agent-ui-brand-color);
      width: 26px;
      height: 26px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      font-weight: bold;
      transition: all 0.2s ease;
    }
    
    .panel-toggle-button:hover {
      background: var(--agent-ui-brand-color-light);
      color: var(--agent-ui-brand-color);
      transform: scale(1.1);
    }
    
    .panel-toggle-button:active {
      transform: scale(0.95);
    }
    
    table {
      border-collapse: collapse;
    }
    
    th, td {
      border: 1px solid #e0e0e0;
      padding: 4px 6px;
      text-align: left;
    }
    
    th {
      background-color: #f8f9fa;
      font-weight: 600;
    }
    
    th {
      text-align: left !important;
    }
    
    ul, ol {
      padding-left: 20px;
    }
    
    .message-text > h1:first-child,
    .message-text > h2:first-child,
    .message-text > h3:first-child,
    .message-text > h4:first-child,
    .message-text > h5:first-child,
    .message-text > h6:first-child,
    .message-text > p:first-child,
    .message-text > ul:first-child,
    .message-text > ol:first-child,
    .message-text > blockquote:first-child,
    .message-text > pre:first-child {
      margin-top: 0;
    }
    
    .message-text > h1:last-child,
    .message-text > h2:last-child,
    .message-text > h3:last-child,
    .message-text > h4:last-child,
    .message-text > h5:last-child,
    .message-text > h6:last-child,
    .message-text > p:last-child,
    .message-text > ul:last-child,
    .message-text > ol:last-child,
    .message-text > blockquote:last-child,
    .message-text > pre:last-child {
      margin-bottom: 0;
    }
  `),N([re({type:String})],v.prototype,"placeholderText",2),N([re({type:String})],v.prototype,"iconSvg",2),N([re({type:String,attribute:"icon-url"})],v.prototype,"iconUrl",2),N([re({type:Number,attribute:"header-height"})],v.prototype,"headerHeight",2),N([re({type:String})],v.prototype,"conversationTitle",2),N([Y()],v.prototype,"messages",2),N([Y()],v.prototype,"open",2),N([Y()],v.prototype,"panelMode",2),N([Y()],v.prototype,"inputFocused",2),N([Y()],v.prototype,"loadedIconSvg",2),N([Y()],v.prototype,"isTyping",2),N([Y()],v.prototype,"isSubmittable",2),N([Y()],v.prototype,"currentMode",2),N([Y()],v.prototype,"lastExpandedMode",2),v=N([is("agent-ui-2")],v);})();
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

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.2.6 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.6/LICENSE *)
*/
//# sourceMappingURL=agent-ui-2.umd.js.map
