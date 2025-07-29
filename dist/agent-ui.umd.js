(()=>{var In=Object.defineProperty;var Gs=Object.getOwnPropertyDescriptor;var Nn=r=>{throw TypeError(r)};var Zs=(r,e,t)=>e in r?In(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var N=(r,e,t,n)=>{for(var s=n>1?void 0:n?Gs(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(n?i(e,t,s):i(s))||s);return n&&s&&In(e,t,s),s};var x=(r,e,t)=>Zs(r,typeof e!="symbol"?e+"":e,t),Ys=(r,e,t)=>e.has(r)||Nn("Cannot "+t);var Pn=(r,e,t)=>e.has(r)?Nn("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var rt=(r,e,t)=>(Ys(r,e,"access private method"),t);var at=globalThis,lt=at.ShadowRoot&&(at.ShadyCSS===void 0||at.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,It=Symbol(),Dn=new WeakMap,Le=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==It)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(lt&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Dn.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Dn.set(t,e))}return e}toString(){return this.cssText}},zn=r=>new Le(typeof r=="string"?r:r+"",void 0,It),Nt=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,s,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new Le(t,r,It)},Un=(r,e)=>{if(lt)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),s=at.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,r.appendChild(n)}},Pt=lt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return zn(t)})(r):r;var{is:Xs,defineProperty:Vs,getOwnPropertyDescriptor:Ks,getOwnPropertyNames:Qs,getOwnPropertySymbols:Js,getPrototypeOf:ei}=Object,ne=globalThis,Hn=ne.trustedTypes,ti=Hn?Hn.emptyScript:"",ni=ne.reactiveElementPolyfillSupport,Oe=(r,e)=>r,Ie={toAttribute(r,e){switch(e){case Boolean:r=r?ti:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ct=(r,e)=>!Xs(r,e),Fn={attribute:!0,type:String,converter:Ie,reflect:!1,useDefault:!1,hasChanged:ct};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ne.litPropertyMetadata??(ne.litPropertyMetadata=new WeakMap);var K=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fn){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Vs(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){let{get:s,set:o}=Ks(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){let c=s?.call(this);o?.call(this,i),this.requestUpdate(e,c,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fn}static _$Ei(){if(this.hasOwnProperty(Oe("elementProperties")))return;let e=ei(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Oe("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Oe("properties"))){let t=this.properties,n=[...Qs(t),...Js(t)];for(let s of n)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,s]of t)this.elementProperties.set(n,s)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let s=this._$Eu(t,n);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let s of n)t.unshift(Pt(s))}else e!==void 0&&t.push(Pt(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Un(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,n);if(s!==void 0&&n.reflect===!0){let o=(n.converter?.toAttribute!==void 0?n.converter:Ie).toAttribute(t,n.type);this._$Em=e,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(e,t){let n=this.constructor,s=n._$Eh.get(e);if(s!==void 0&&this._$Em!==s){let o=n.getPropertyOptions(s),i=typeof o.converter=="function"?{fromAttribute:o.converter}:o.converter?.fromAttribute!==void 0?o.converter:Ie;this._$Em=s;let c=i.fromAttribute(t,o.type);this[s]=c??this._$Ej?.get(s)??c,this._$Em=null}}requestUpdate(e,t,n){if(e!==void 0){let s=this.constructor,o=this[e];if(n??(n=s.getPropertyOptions(e)),!((n.hasChanged??ct)(o,t)||n.useDefault&&n.reflect&&o===this._$Ej?.get(e)&&!this.hasAttribute(s._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:s,wrapped:o},i){n&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[s,o]of this._$Ep)this[s]=o;this._$Ep=void 0}let n=this.constructor.elementProperties;if(n.size>0)for(let[s,o]of n){let{wrapped:i}=o,c=this[s];i!==!0||this._$AL.has(s)||c===void 0||this.C(s,void 0,o,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(n=>n.hostUpdate?.()),this.update(t)):this._$EM()}catch(n){throw e=!1,this._$EM(),n}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[Oe("elementProperties")]=new Map,K[Oe("finalized")]=new Map,ni?.({ReactiveElement:K}),(ne.reactiveElementVersions??(ne.reactiveElementVersions=[])).push("2.1.1");var Pe=globalThis,ht=Pe.trustedTypes,Bn=ht?ht.createPolicy("lit-html",{createHTML:r=>r}):void 0,Yn="$lit$",se=`lit$${Math.random().toFixed(9).slice(2)}$`,Xn="?"+se,si=`<${Xn}>`,he=document,De=()=>he.createComment(""),ze=r=>r===null||typeof r!="object"&&typeof r!="function",qt=Array.isArray,ii=r=>qt(r)||typeof r?.[Symbol.iterator]=="function",Dt=`[ 	
\f\r]`,Ne=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,qn=/-->/g,Wn=/>/g,le=RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),jn=/'/g,Gn=/"/g,Vn=/^(?:script|style|textarea|title)$/i,Wt=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),F=Wt(1),bo=Wt(2),xo=Wt(3),pe=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),Zn=new WeakMap,ce=he.createTreeWalker(he,129);function Kn(r,e){if(!qt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Bn!==void 0?Bn.createHTML(e):e}var oi=(r,e)=>{let t=r.length-1,n=[],s,o=e===2?"<svg>":e===3?"<math>":"",i=Ne;for(let c=0;c<t;c++){let l=r[c],u,p,d=-1,g=0;for(;g<l.length&&(i.lastIndex=g,p=i.exec(l),p!==null);)g=i.lastIndex,i===Ne?p[1]==="!--"?i=qn:p[1]!==void 0?i=Wn:p[2]!==void 0?(Vn.test(p[2])&&(s=RegExp("</"+p[2],"g")),i=le):p[3]!==void 0&&(i=le):i===le?p[0]===">"?(i=s??Ne,d=-1):p[1]===void 0?d=-2:(d=i.lastIndex-p[2].length,u=p[1],i=p[3]===void 0?le:p[3]==='"'?Gn:jn):i===Gn||i===jn?i=le:i===qn||i===Wn?i=Ne:(i=le,s=void 0);let b=i===le&&r[c+1].startsWith("/>")?" ":"";o+=i===Ne?l+si:d>=0?(n.push(u),l.slice(0,d)+Yn+l.slice(d)+se+b):l+se+(d===-2?c:b)}return[Kn(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},Ue=class r{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let o=0,i=0,c=e.length-1,l=this.parts,[u,p]=oi(e,t);if(this.el=r.createElement(u,n),ce.currentNode=this.el.content,t===2||t===3){let d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(s=ce.nextNode())!==null&&l.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(let d of s.getAttributeNames())if(d.endsWith(Yn)){let g=p[i++],b=s.getAttribute(d).split(se),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:o,name:A[2],strings:b,ctor:A[1]==="."?Ut:A[1]==="?"?Ht:A[1]==="@"?Ft:Ae}),s.removeAttribute(d)}else d.startsWith(se)&&(l.push({type:6,index:o}),s.removeAttribute(d));if(Vn.test(s.tagName)){let d=s.textContent.split(se),g=d.length-1;if(g>0){s.textContent=ht?ht.emptyScript:"";for(let b=0;b<g;b++)s.append(d[b],De()),ce.nextNode(),l.push({type:2,index:++o});s.append(d[g],De())}}}else if(s.nodeType===8)if(s.data===Xn)l.push({type:2,index:o});else{let d=-1;for(;(d=s.data.indexOf(se,d+1))!==-1;)l.push({type:7,index:o}),d+=se.length-1}o++}}static createElement(e,t){let n=he.createElement("template");return n.innerHTML=e,n}};function Te(r,e,t=r,n){if(e===pe)return e;let s=n!==void 0?t._$Co?.[n]:t._$Cl,o=ze(e)?void 0:e._$litDirective$;return s?.constructor!==o&&(s?._$AO?.(!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,n)),n!==void 0?(t._$Co??(t._$Co=[]))[n]=s:t._$Cl=s),s!==void 0&&(e=Te(r,s._$AS(r,e.values),s,n)),e}var zt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,s=(e?.creationScope??he).importNode(t,!0);ce.currentNode=s;let o=ce.nextNode(),i=0,c=0,l=n[0];for(;l!==void 0;){if(i===l.index){let u;l.type===2?u=new He(o,o.nextSibling,this,e):l.type===1?u=new l.ctor(o,l.name,l.strings,this,e):l.type===6&&(u=new Bt(o,this,e)),this._$AV.push(u),l=n[++c]}i!==l?.index&&(o=ce.nextNode(),i++)}return ce.currentNode=he,s}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},He=class r{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,s){this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Te(this,e,t),ze(e)?e===R||e==null||e===""?(this._$AH!==R&&this._$AR(),this._$AH=R):e!==this._$AH&&e!==pe&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ii(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==R&&ze(this._$AH)?this._$AA.nextSibling.data=e:this.T(he.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,s=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=Ue.createElement(Kn(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===s)this._$AH.p(t);else{let o=new zt(s,this),i=o.u(this.options);o.p(t),this.T(i),this._$AH=o}}_$AC(e){let t=Zn.get(e.strings);return t===void 0&&Zn.set(e.strings,t=new Ue(e)),t}k(e){qt(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,s=0;for(let o of e)s===t.length?t.push(n=new r(this.O(De()),this.O(De()),this,this.options)):n=t[s],n._$AI(o),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let n=e.nextSibling;e.remove(),e=n}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},Ae=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,s,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=R}_$AI(e,t=this,n,s){let o=this.strings,i=!1;if(o===void 0)e=Te(this,e,t,0),i=!ze(e)||e!==this._$AH&&e!==pe,i&&(this._$AH=e);else{let c=e,l,u;for(e=o[0],l=0;l<o.length-1;l++)u=Te(this,c[n+l],t,l),u===pe&&(u=this._$AH[l]),i||(i=!ze(u)||u!==this._$AH[l]),u===R?e=R:e!==R&&(e+=(u??"")+o[l+1]),this._$AH[l]=u}i&&!s&&this.j(e)}j(e){e===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ut=class extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===R?void 0:e}},Ht=class extends Ae{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==R)}},Ft=class extends Ae{constructor(e,t,n,s,o){super(e,t,n,s,o),this.type=5}_$AI(e,t=this){if((e=Te(this,e,t,0)??R)===pe)return;let n=this._$AH,s=e===R&&n!==R||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},Bt=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Te(this,e)}};var ri=Pe.litHtmlPolyfillSupport;ri?.(Ue,He),(Pe.litHtmlVersions??(Pe.litHtmlVersions=[])).push("3.3.1");var Qn=(r,e,t)=>{let n=t?.renderBefore??e,s=n._$litPart$;if(s===void 0){let o=t?.renderBefore??null;n._$litPart$=s=new He(e.insertBefore(De(),o),o,void 0,t??{})}return s._$AI(r),s};var Fe=globalThis,ie=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;let e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qn(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return pe}};ie._$litElement$=!0,ie.finalized=!0,Fe.litElementHydrateSupport?.({LitElement:ie});var ai=Fe.litElementPolyfillSupport;ai?.({LitElement:ie});(Fe.litElementVersions??(Fe.litElementVersions=[])).push("4.2.1");var Jn=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};var li={attribute:!0,type:String,converter:Ie,reflect:!1,hasChanged:ct},ci=(r=li,e,t)=>{let{kind:n,metadata:s}=t,o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),n==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),n==="accessor"){let{name:i}=t;return{set(c){let l=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,l,r)},init(c){return c!==void 0&&this.C(i,void 0,r,c),c}}}if(n==="setter"){let{name:i}=t;return function(c){let l=this[i];e.call(this,c),this.requestUpdate(i,l,r)}}throw Error("Unsupported decorator location: "+n)};function oe(r){return(e,t)=>typeof t=="object"?ci(r,e,t):((n,s,o)=>{let i=s.hasOwnProperty(o);return s.constructor.createProperty(o,n),i?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}function Q(r){return oe({...r,state:!0,attribute:!1})}function Yt(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var ge=Yt();function os(r){ge=r}var rs=/[&<>"']/,hi=new RegExp(rs.source,"g"),as=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,pi=new RegExp(as.source,"g"),ui={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},es=r=>ui[r];function B(r,e){if(e){if(rs.test(r))return r.replace(hi,es)}else if(as.test(r))return r.replace(pi,es);return r}var di=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;function fi(r){return r.replace(di,(e,t)=>(t=t.toLowerCase(),t==="colon"?":":t.charAt(0)==="#"?t.charAt(1)==="x"?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""))}var gi=/(^|[^\[])\^/g;function _(r,e){let t=typeof r=="string"?r:r.source;e=e||"";let n={replace:(s,o)=>{let i=typeof o=="string"?o:o.source;return i=i.replace(gi,"$1"),t=t.replace(s,i),n},getRegex:()=>new RegExp(t,e)};return n}function ts(r){try{r=encodeURI(r).replace(/%25/g,"%")}catch{return null}return r}var qe={exec:()=>null};function ns(r,e){let t=r.replace(/\|/g,(o,i,c)=>{let l=!1,u=i;for(;--u>=0&&c[u]==="\\";)l=!l;return l?"|":" |"}),n=t.split(/ \|/),s=0;if(n[0].trim()||n.shift(),n.length>0&&!n[n.length-1].trim()&&n.pop(),e)if(n.length>e)n.splice(e);else for(;n.length<e;)n.push("");for(;s<n.length;s++)n[s]=n[s].trim().replace(/\\\|/g,"|");return n}function ut(r,e,t){let n=r.length;if(n===0)return"";let s=0;for(;s<n;){let o=r.charAt(n-s-1);if(o===e&&!t)s++;else if(o!==e&&t)s++;else break}return r.slice(0,n-s)}function mi(r,e){if(r.indexOf(e[1])===-1)return-1;let t=0;for(let n=0;n<r.length;n++)if(r[n]==="\\")n++;else if(r[n]===e[0])t++;else if(r[n]===e[1]&&(t--,t<0))return n;return-1}function ss(r,e,t,n){let s=e.href,o=e.title?B(e.title):null,i=r[1].replace(/\\([\[\]])/g,"$1");if(r[0].charAt(0)!=="!"){n.state.inLink=!0;let c={type:"link",raw:t,href:s,title:o,text:i,tokens:n.inlineTokens(i)};return n.state.inLink=!1,c}return{type:"image",raw:t,href:s,title:o,text:B(i)}}function bi(r,e){let t=r.match(/^(\s+)(?:```)/);if(t===null)return e;let n=t[1];return e.split(`
`).map(s=>{let o=s.match(/^\s+/);if(o===null)return s;let[i]=o;return i.length>=n.length?s.slice(n.length):s}).join(`
`)}var Ee=class{constructor(e){x(this,"options");x(this,"rules");x(this,"lexer");this.options=e||ge}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?n:ut(n,`
`)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],s=bi(n,t[3]||"");return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:s}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(/#$/.test(n)){let s=ut(n,"#");(this.options.pedantic||!s||/ $/.test(s))&&(n=s.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=t[0].replace(/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,`
    $1`);n=ut(n.replace(/^ *>[ \t]?/gm,""),`
`);let s=this.lexer.state.top;this.lexer.state.top=!0;let o=this.lexer.blockTokens(n);return this.lexer.state.top=s,{type:"blockquote",raw:t[0],tokens:o,text:n}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),s=n.length>1,o={type:"list",raw:"",ordered:s,start:s?+n.slice(0,-1):"",loose:!1,items:[]};n=s?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=s?n:"[*+-]");let i=new RegExp(`^( {0,3}${n})((?:[	 ][^\\n]*)?(?:\\n|$))`),c="",l="",u=!1;for(;e;){let p=!1;if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;c=t[0],e=e.substring(c.length);let d=t[2].split(`
`,1)[0].replace(/^\t+/,$e=>" ".repeat(3*$e.length)),g=e.split(`
`,1)[0],b=0;this.options.pedantic?(b=2,l=d.trimStart()):(b=t[2].search(/[^ ]/),b=b>4?1:b,l=d.slice(b),b+=t[1].length);let A=!1;if(!d&&/^ *$/.test(g)&&(c+=g+`
`,e=e.substring(g.length+1),p=!0),!p){let $e=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),Qe=new RegExp(`^ {0,${Math.min(3,b-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),re=new RegExp(`^ {0,${Math.min(3,b-1)}}(?:\`\`\`|~~~)`),S=new RegExp(`^ {0,${Math.min(3,b-1)}}#`);for(;e;){let Z=e.split(`
`,1)[0];if(g=Z,this.options.pedantic&&(g=g.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),re.test(g)||S.test(g)||$e.test(g)||Qe.test(e))break;if(g.search(/[^ ]/)>=b||!g.trim())l+=`
`+g.slice(b);else{if(A||d.search(/[^ ]/)>=4||re.test(d)||S.test(d)||Qe.test(d))break;l+=`
`+g}!A&&!g.trim()&&(A=!0),c+=Z+`
`,e=e.substring(Z.length+1),d=g.slice(b)}}o.loose||(u?o.loose=!0:/\n *\n *$/.test(c)&&(u=!0));let H=null,G;this.options.gfm&&(H=/^\[[ xX]\] /.exec(l),H&&(G=H[0]!=="[ ] ",l=l.replace(/^\[[ xX]\] +/,""))),o.items.push({type:"list_item",raw:c,task:!!H,checked:G,loose:!1,text:l,tokens:[]}),o.raw+=c}o.items[o.items.length-1].raw=c.trimEnd(),o.items[o.items.length-1].text=l.trimEnd(),o.raw=o.raw.trimEnd();for(let p=0;p<o.items.length;p++)if(this.lexer.state.top=!1,o.items[p].tokens=this.lexer.blockTokens(o.items[p].text,[]),!o.loose){let d=o.items[p].tokens.filter(b=>b.type==="space"),g=d.length>0&&d.some(b=>/\n.*\n/.test(b.raw));o.loose=g}if(o.loose)for(let p=0;p<o.items.length;p++)o.items[p].loose=!0;return o}}html(e){let t=this.rules.block.html.exec(e);if(t)return{type:"html",block:!0,raw:t[0],pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:t[0]}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(/\s+/g," "),s=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:t[0],href:s,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!/[:|]/.test(t[2]))return;let n=ns(t[1]),s=t[2].replace(/^\||\| *$/g,"").split("|"),o=t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split(`
`):[],i={type:"table",raw:t[0],header:[],align:[],rows:[]};if(n.length===s.length){for(let c of s)/^ *-+: *$/.test(c)?i.align.push("right"):/^ *:-+: *$/.test(c)?i.align.push("center"):/^ *:-+ *$/.test(c)?i.align.push("left"):i.align.push(null);for(let c of n)i.header.push({text:c,tokens:this.lexer.inline(c)});for(let c of o)i.rows.push(ns(c,i.header.length).map(l=>({text:l,tokens:this.lexer.inline(l)})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:t[2].charAt(0)==="="?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:B(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&/^</.test(n)){if(!/>$/.test(n))return;let i=ut(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=mi(t[2],"()");if(i>-1){let l=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,l).trim(),t[3]=""}}let s=t[2],o="";if(this.options.pedantic){let i=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(s);i&&(s=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return s=s.trim(),/^</.test(s)&&(this.options.pedantic&&!/>$/.test(n)?s=s.slice(1):s=s.slice(1,-1)),ss(t,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let s=(n[2]||n[1]).replace(/\s+/g," "),o=t[s.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return ss(n,o,n[0],this.lexer)}}emStrong(e,t,n=""){let s=this.rules.inline.emStrongLDelim.exec(e);if(!s||s[3]&&n.match(/[\p{L}\p{N}]/u))return;if(!(s[1]||s[2]||"")||!n||this.rules.inline.punctuation.exec(n)){let i=[...s[0]].length-1,c,l,u=i,p=0,d=s[0][0]==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(s=d.exec(t))!=null;){if(c=s[1]||s[2]||s[3]||s[4]||s[5]||s[6],!c)continue;if(l=[...c].length,s[3]||s[4]){u+=l;continue}else if((s[5]||s[6])&&i%3&&!((i+l)%3)){p+=l;continue}if(u-=l,u>0)continue;l=Math.min(l,l+u+p);let g=[...s[0]][0].length,b=e.slice(0,i+s.index+g+l);if(Math.min(i,l)%2){let H=b.slice(1,-1);return{type:"em",raw:b,text:H,tokens:this.lexer.inlineTokens(H)}}let A=b.slice(2,-2);return{type:"strong",raw:b,text:A,tokens:this.lexer.inlineTokens(A)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(/\n/g," "),s=/[^ ]/.test(n),o=/^ /.test(n)&&/ $/.test(n);return s&&o&&(n=n.substring(1,n.length-1)),n=B(n,!0),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,s;return t[2]==="@"?(n=B(t[1]),s="mailto:"+n):(n=B(t[1]),s=n),{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,s;if(t[2]==="@")n=B(t[0]),s="mailto:"+n;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0]);n=B(t[0]),t[1]==="www."?s="http://"+t[0]:s=t[0]}return{type:"link",raw:t[0],text:n,href:s,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n;return this.lexer.state.inRawBlock?n=t[0]:n=B(t[0]),{type:"text",raw:t[0],text:n}}}},xi=/^(?: *(?:\n|$))+/,ki=/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,yi=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,je=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,_i=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,ls=/(?:[*+-]|\d{1,9}[.)])/,cs=_(/^(?!bull |blockCode|fences|blockquote|heading|html)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html))+?)\n {0,3}(=+|-+) *(?:\n+|$)/).replace(/bull/g,ls).replace(/blockCode/g,/ {4}/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).getRegex(),Xt=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,wi=/^[^\n]+/,Vt=/(?!\s*\])(?:\\.|[^\[\]\\])+/,Ti=_(/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/).replace("label",Vt).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ai=_(/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/).replace(/bull/g,ls).getRegex(),gt="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Kt=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Ei=_("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))","i").replace("comment",Kt).replace("tag",gt).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),hs=_(Xt).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gt).getRegex(),Si=_(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",hs).getRegex(),Qt={blockquote:Si,code:ki,def:Ti,fences:yi,heading:_i,hr:je,html:Ei,lheading:cs,list:Ai,newline:xi,paragraph:hs,table:qe,text:wi},is=_("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gt).getRegex(),$i={...Qt,table:is,paragraph:_(Xt).replace("hr",je).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",is).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",gt).getRegex()},vi={...Qt,html:_(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Kt).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:qe,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:_(Xt).replace("hr",je).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cs).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ps=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ri=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,us=/^( {2,}|\\)\n(?!\s*$)/,Ci=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ge="\\p{P}\\p{S}",Mi=_(/^((?![*_])[\spunctuation])/,"u").replace(/punctuation/g,Ge).getRegex(),Li=/\[[^[\]]*?\]\([^\(\)]*?\)|`[^`]*?`|<[^<>]*?>/g,Oi=_(/^(?:\*+(?:((?!\*)[punct])|[^\s*]))|^_+(?:((?!_)[punct])|([^\s_]))/,"u").replace(/punct/g,Ge).getRegex(),Ii=_("^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)[punct](\\*+)(?=[\\s]|$)|[^punct\\s](\\*+)(?!\\*)(?=[punct\\s]|$)|(?!\\*)[punct\\s](\\*+)(?=[^punct\\s])|[\\s](\\*+)(?!\\*)(?=[punct])|(?!\\*)[punct](\\*+)(?!\\*)(?=[punct])|[^punct\\s](\\*+)(?=[^punct\\s])","gu").replace(/punct/g,Ge).getRegex(),Ni=_("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)[punct](_+)(?=[\\s]|$)|[^punct\\s](_+)(?!_)(?=[punct\\s]|$)|(?!_)[punct\\s](_+)(?=[^punct\\s])|[\\s](_+)(?!_)(?=[punct])|(?!_)[punct](_+)(?!_)(?=[punct])","gu").replace(/punct/g,Ge).getRegex(),Pi=_(/\\([punct])/,"gu").replace(/punct/g,Ge).getRegex(),Di=_(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),zi=_(Kt).replace("(?:-->|$)","-->").getRegex(),Ui=_("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",zi).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ft=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,Hi=_(/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/).replace("label",ft).replace("href",/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),ds=_(/^!?\[(label)\]\[(ref)\]/).replace("label",ft).replace("ref",Vt).getRegex(),fs=_(/^!?\[(ref)\](?:\[\])?/).replace("ref",Vt).getRegex(),Fi=_("reflink|nolink(?!\\()","g").replace("reflink",ds).replace("nolink",fs).getRegex(),Jt={_backpedal:qe,anyPunctuation:Pi,autolink:Di,blockSkip:Li,br:us,code:Ri,del:qe,emStrongLDelim:Oi,emStrongRDelimAst:Ii,emStrongRDelimUnd:Ni,escape:ps,link:Hi,nolink:fs,punctuation:Mi,reflink:ds,reflinkSearch:Fi,tag:Ui,text:Ci,url:qe},Bi={...Jt,link:_(/^!?\[(label)\]\((.*?)\)/).replace("label",ft).getRegex(),reflink:_(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ft).getRegex()},jt={...Jt,escape:_(ps).replace("])","~|])").getRegex(),url:_(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,"i").replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},qi={...jt,br:_(us).replace("{2,}","*").getRegex(),text:_(jt.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},dt={normal:Qt,gfm:$i,pedantic:vi},Be={normal:Jt,gfm:jt,breaks:qi,pedantic:Bi},J=class r{constructor(e){x(this,"tokens");x(this,"options");x(this,"state");x(this,"tokenizer");x(this,"inlineQueue");this.tokens=[],this.tokens.links=Object.create(null),this.options=e||ge,this.options.tokenizer=this.options.tokenizer||new Ee,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:dt.normal,inline:Be.normal};this.options.pedantic?(t.block=dt.pedantic,t.inline=Be.pedantic):this.options.gfm&&(t.block=dt.gfm,this.options.breaks?t.inline=Be.breaks:t.inline=Be.gfm),this.tokenizer.rules=t}static get rules(){return{block:dt,inline:Be}}static lex(e,t){return new r(t).lex(e)}static lexInline(e,t){return new r(t).inlineTokens(e)}lex(e){e=e.replace(/\r\n|\r/g,`
`),this.blockTokens(e,this.tokens);for(let t=0;t<this.inlineQueue.length;t++){let n=this.inlineQueue[t];this.inlineTokens(n.src,n.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[]){this.options.pedantic?e=e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e=e.replace(/^( *)(\t+)/gm,(c,l,u)=>l+"    ".repeat(u.length));let n,s,o,i;for(;e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(c=>(n=c.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.space(e)){e=e.substring(n.raw.length),n.raw.length===1&&t.length>0?t[t.length-1].raw+=`
`:t.push(n);continue}if(n=this.tokenizer.code(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(n=this.tokenizer.fences(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.heading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.hr(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.blockquote(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.list(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.html(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.def(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&(s.type==="paragraph"||s.type==="text")?(s.raw+=`
`+n.raw,s.text+=`
`+n.raw,this.inlineQueue[this.inlineQueue.length-1].src=s.text):this.tokens.links[n.tag]||(this.tokens.links[n.tag]={href:n.href,title:n.title});continue}if(n=this.tokenizer.table(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.lheading(e)){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startBlock){let c=1/0,l=e.slice(1),u;this.options.extensions.startBlock.forEach(p=>{u=p.call({lexer:this},l),typeof u=="number"&&u>=0&&(c=Math.min(c,u))}),c<1/0&&c>=0&&(o=e.substring(0,c+1))}if(this.state.top&&(n=this.tokenizer.paragraph(o))){s=t[t.length-1],i&&s.type==="paragraph"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n),i=o.length!==e.length,e=e.substring(n.raw.length);continue}if(n=this.tokenizer.text(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&s.type==="text"?(s.raw+=`
`+n.raw,s.text+=`
`+n.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=s.text):t.push(n);continue}if(e){let c="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(c);break}else throw new Error(c)}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let n,s,o,i=e,c,l,u;if(this.tokens.links){let p=Object.keys(this.tokens.links);if(p.length>0)for(;(c=this.tokenizer.rules.inline.reflinkSearch.exec(i))!=null;)p.includes(c[0].slice(c[0].lastIndexOf("[")+1,-1))&&(i=i.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;(c=this.tokenizer.rules.inline.blockSkip.exec(i))!=null;)i=i.slice(0,c.index)+"["+"a".repeat(c[0].length-2)+"]"+i.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;(c=this.tokenizer.rules.inline.anyPunctuation.exec(i))!=null;)i=i.slice(0,c.index)+"++"+i.slice(this.tokenizer.rules.inline.anyPunctuation.lastIndex);for(;e;)if(l||(u=""),l=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(p=>(n=p.call({lexer:this},e,t))?(e=e.substring(n.raw.length),t.push(n),!0):!1))){if(n=this.tokenizer.escape(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.tag(e)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.link(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(n.raw.length),s=t[t.length-1],s&&n.type==="text"&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(n=this.tokenizer.emStrong(e,i,u)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.codespan(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.br(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.del(e)){e=e.substring(n.raw.length),t.push(n);continue}if(n=this.tokenizer.autolink(e)){e=e.substring(n.raw.length),t.push(n);continue}if(!this.state.inLink&&(n=this.tokenizer.url(e))){e=e.substring(n.raw.length),t.push(n);continue}if(o=e,this.options.extensions&&this.options.extensions.startInline){let p=1/0,d=e.slice(1),g;this.options.extensions.startInline.forEach(b=>{g=b.call({lexer:this},d),typeof g=="number"&&g>=0&&(p=Math.min(p,g))}),p<1/0&&p>=0&&(o=e.substring(0,p+1))}if(n=this.tokenizer.inlineText(o)){e=e.substring(n.raw.length),n.raw.slice(-1)!=="_"&&(u=n.raw.slice(-1)),l=!0,s=t[t.length-1],s&&s.type==="text"?(s.raw+=n.raw,s.text+=n.text):t.push(n);continue}if(e){let p="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(p);break}else throw new Error(p)}}return t}},Se=class{constructor(e){x(this,"options");this.options=e||ge}code(e,t,n){let s=(t||"").match(/^\S*/)?.[0];return e=e.replace(/\n$/,"")+`
`,s?'<pre><code class="language-'+B(s)+'">'+(n?e:B(e,!0))+`</code></pre>
`:"<pre><code>"+(n?e:B(e,!0))+`</code></pre>
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
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return"<br>"}del(e){return`<del>${e}</del>`}link(e,t,n){let s=ts(e);if(s===null)return n;e=s;let o='<a href="'+e+'"';return t&&(o+=' title="'+t+'"'),o+=">"+n+"</a>",o}image(e,t,n){let s=ts(e);if(s===null)return n;e=s;let o=`<img src="${e}" alt="${n}"`;return t&&(o+=` title="${t}"`),o+=">",o}text(e){return e}},We=class{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,n){return""+n}image(e,t,n){return""+n}br(){return""}},ee=class r{constructor(e){x(this,"options");x(this,"renderer");x(this,"textRenderer");this.options=e||ge,this.options.renderer=this.options.renderer||new Se,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new We}static parse(e,t){return new r(t).parse(e)}static parseInline(e,t){return new r(t).parseInline(e)}parse(e,t=!0){let n="";for(let s=0;s<e.length;s++){let o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let i=o,c=this.options.extensions.renderers[i.type].call({parser:this},i);if(c!==!1||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(i.type)){n+=c||"";continue}}switch(o.type){case"space":continue;case"hr":{n+=this.renderer.hr();continue}case"heading":{let i=o;n+=this.renderer.heading(this.parseInline(i.tokens),i.depth,fi(this.parseInline(i.tokens,this.textRenderer)));continue}case"code":{let i=o;n+=this.renderer.code(i.text,i.lang,!!i.escaped);continue}case"table":{let i=o,c="",l="";for(let p=0;p<i.header.length;p++)l+=this.renderer.tablecell(this.parseInline(i.header[p].tokens),{header:!0,align:i.align[p]});c+=this.renderer.tablerow(l);let u="";for(let p=0;p<i.rows.length;p++){let d=i.rows[p];l="";for(let g=0;g<d.length;g++)l+=this.renderer.tablecell(this.parseInline(d[g].tokens),{header:!1,align:i.align[g]});u+=this.renderer.tablerow(l)}n+=this.renderer.table(c,u);continue}case"blockquote":{let i=o,c=this.parse(i.tokens);n+=this.renderer.blockquote(c);continue}case"list":{let i=o,c=i.ordered,l=i.start,u=i.loose,p="";for(let d=0;d<i.items.length;d++){let g=i.items[d],b=g.checked,A=g.task,H="";if(g.task){let G=this.renderer.checkbox(!!b);u?g.tokens.length>0&&g.tokens[0].type==="paragraph"?(g.tokens[0].text=G+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&g.tokens[0].tokens[0].type==="text"&&(g.tokens[0].tokens[0].text=G+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:G+" "}):H+=G+" "}H+=this.parse(g.tokens,u),p+=this.renderer.listitem(H,A,!!b)}n+=this.renderer.list(p,c,l);continue}case"html":{let i=o;n+=this.renderer.html(i.text,i.block);continue}case"paragraph":{let i=o;n+=this.renderer.paragraph(this.parseInline(i.tokens));continue}case"text":{let i=o,c=i.tokens?this.parseInline(i.tokens):i.text;for(;s+1<e.length&&e[s+1].type==="text";)i=e[++s],c+=`
`+(i.tokens?this.parseInline(i.tokens):i.text);n+=t?this.renderer.paragraph(c):c;continue}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}parseInline(e,t){t=t||this.renderer;let n="";for(let s=0;s<e.length;s++){let o=e[s];if(this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[o.type]){let i=this.options.extensions.renderers[o.type].call({parser:this},o);if(i!==!1||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(o.type)){n+=i||"";continue}}switch(o.type){case"escape":{let i=o;n+=t.text(i.text);break}case"html":{let i=o;n+=t.html(i.text);break}case"link":{let i=o;n+=t.link(i.href,i.title,this.parseInline(i.tokens,t));break}case"image":{let i=o;n+=t.image(i.href,i.title,i.text);break}case"strong":{let i=o;n+=t.strong(this.parseInline(i.tokens,t));break}case"em":{let i=o;n+=t.em(this.parseInline(i.tokens,t));break}case"codespan":{let i=o;n+=t.codespan(i.text);break}case"br":{n+=t.br();break}case"del":{let i=o;n+=t.del(this.parseInline(i.tokens,t));break}case"text":{let i=o;n+=t.text(i.text);break}default:{let i='Token with "'+o.type+'" type was not found.';if(this.options.silent)return console.error(i),"";throw new Error(i)}}}return n}},ue=class{constructor(e){x(this,"options");this.options=e||ge}preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}};x(ue,"passThroughHooks",new Set(["preprocess","postprocess","processAllTokens"]));var fe,Zt,gs,Gt=class{constructor(...e){Pn(this,fe);x(this,"defaults",Yt());x(this,"options",this.setOptions);x(this,"parse",rt(this,fe,Zt).call(this,J.lex,ee.parse));x(this,"parseInline",rt(this,fe,Zt).call(this,J.lexInline,ee.parseInline));x(this,"Parser",ee);x(this,"Renderer",Se);x(this,"TextRenderer",We);x(this,"Lexer",J);x(this,"Tokenizer",Ee);x(this,"Hooks",ue);this.use(...e)}walkTokens(e,t){let n=[];for(let s of e)switch(n=n.concat(t.call(this,s)),s.type){case"table":{let o=s;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,t));for(let i of o.rows)for(let c of i)n=n.concat(this.walkTokens(c.tokens,t));break}case"list":{let o=s;n=n.concat(this.walkTokens(o.items,t));break}default:{let o=s;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let c=o[i].flat(1/0);n=n.concat(this.walkTokens(c,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let s={...n};if(s.async=this.defaults.async||s.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=t.renderers[o.name];i?t.renderers[o.name]=function(...c){let l=o.renderer.apply(this,c);return l===!1&&(l=i.apply(this,c)),l}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[o.level];i?i.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),s.extensions=t),n.renderer){let o=this.defaults.renderer||new Se(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(i==="options")continue;let c=i,l=n.renderer[c],u=o[c];o[c]=(...p)=>{let d=l.apply(o,p);return d===!1&&(d=u.apply(o,p)),d||""}}s.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Ee(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let c=i,l=n.tokenizer[c],u=o[c];o[c]=(...p)=>{let d=l.apply(o,p);return d===!1&&(d=u.apply(o,p)),d}}s.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new ue;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(i==="options")continue;let c=i,l=n.hooks[c],u=o[c];ue.passThroughHooks.has(i)?o[c]=p=>{if(this.defaults.async)return Promise.resolve(l.call(o,p)).then(g=>u.call(o,g));let d=l.call(o,p);return u.call(o,d)}:o[c]=(...p)=>{let d=l.apply(o,p);return d===!1&&(d=u.apply(o,p)),d}}s.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;s.walkTokens=function(c){let l=[];return l.push(i.call(this,c)),o&&(l=l.concat(o.call(this,c))),l}}this.defaults={...this.defaults,...s}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return J.lex(e,t??this.defaults)}parser(e,t){return ee.parse(e,t??this.defaults)}};fe=new WeakSet,Zt=function(e,t){return(n,s)=>{let o={...s},i={...this.defaults,...o};this.defaults.async===!0&&o.async===!1&&(i.silent||console.warn("marked(): The async option was set to true by an extension. The async: false option sent to parse will be ignored."),i.async=!0);let c=rt(this,fe,gs).call(this,!!i.silent,!!i.async);if(typeof n>"u"||n===null)return c(new Error("marked(): input parameter is undefined or null"));if(typeof n!="string")return c(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(n)+", string expected"));if(i.hooks&&(i.hooks.options=i),i.async)return Promise.resolve(i.hooks?i.hooks.preprocess(n):n).then(l=>e(l,i)).then(l=>i.hooks?i.hooks.processAllTokens(l):l).then(l=>i.walkTokens?Promise.all(this.walkTokens(l,i.walkTokens)).then(()=>l):l).then(l=>t(l,i)).then(l=>i.hooks?i.hooks.postprocess(l):l).catch(c);try{i.hooks&&(n=i.hooks.preprocess(n));let l=e(n,i);i.hooks&&(l=i.hooks.processAllTokens(l)),i.walkTokens&&this.walkTokens(l,i.walkTokens);let u=t(l,i);return i.hooks&&(u=i.hooks.postprocess(u)),u}catch(l){return c(l)}}},gs=function(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let s="<p>An error occurred:</p><pre>"+B(n.message+"",!0)+"</pre>";return t?Promise.resolve(s):s}if(t)return Promise.reject(n);throw n}};var de=new Gt;function y(r,e){return de.parse(r,e)}y.options=y.setOptions=function(r){return de.setOptions(r),y.defaults=de.defaults,os(y.defaults),y};y.getDefaults=Yt;y.defaults=ge;y.use=function(...r){return de.use(...r),y.defaults=de.defaults,os(y.defaults),y};y.walkTokens=function(r,e){return de.walkTokens(r,e)};y.parseInline=de.parseInline;y.Parser=ee;y.parser=ee.parse;y.Renderer=Se;y.TextRenderer=We;y.Lexer=J;y.lexer=J.lex;y.Tokenizer=Ee;y.Hooks=ue;y.parse=y;var ir=y.options,or=y.setOptions,rr=y.use,ar=y.walkTokens,lr=y.parseInline;var cr=ee.parse,hr=J.lex;var{entries:Es,setPrototypeOf:ms,isFrozen:Wi,getPrototypeOf:ji,getOwnPropertyDescriptor:Gi}=Object,{freeze:D,seal:q,create:Ss}=Object,{apply:rn,construct:an}=typeof Reflect<"u"&&Reflect;D||(D=function(e){return e});q||(q=function(e){return e});rn||(rn=function(e,t,n){return e.apply(t,n)});an||(an=function(e,t){return new e(...t)});var mt=z(Array.prototype.forEach),Zi=z(Array.prototype.lastIndexOf),bs=z(Array.prototype.pop),Ze=z(Array.prototype.push),Yi=z(Array.prototype.splice),xt=z(String.prototype.toLowerCase),en=z(String.prototype.toString),xs=z(String.prototype.match),Ye=z(String.prototype.replace),Xi=z(String.prototype.indexOf),Vi=z(String.prototype.trim),W=z(Object.prototype.hasOwnProperty),P=z(RegExp.prototype.test),Xe=Ki(TypeError);function z(r){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return rn(r,e,n)}}function Ki(r){return function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return an(r,t)}}function k(r,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:xt;ms&&ms(r,null);let n=e.length;for(;n--;){let s=e[n];if(typeof s=="string"){let o=t(s);o!==s&&(Wi(e)||(e[n]=o),s=o)}r[s]=!0}return r}function Qi(r){for(let e=0;e<r.length;e++)W(r,e)||(r[e]=null);return r}function te(r){let e=Ss(null);for(let[t,n]of Es(r))W(r,t)&&(Array.isArray(n)?e[t]=Qi(n):n&&typeof n=="object"&&n.constructor===Object?e[t]=te(n):e[t]=n);return e}function Ve(r,e){for(;r!==null;){let n=Gi(r,e);if(n){if(n.get)return z(n.get);if(typeof n.value=="function")return z(n.value)}r=ji(r)}function t(){return null}return t}var ks=D(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),tn=D(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nn=D(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Ji=D(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),sn=D(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),eo=D(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),ys=D(["#text"]),_s=D(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),on=D(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),ws=D(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),bt=D(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),to=q(/\{\{[\w\W]*|[\w\W]*\}\}/gm),no=q(/<%[\w\W]*|[\w\W]*%>/gm),so=q(/\$\{[\w\W]*/gm),io=q(/^data-[\-\w.\u00B7-\uFFFF]+$/),oo=q(/^aria-[\-\w]+$/),$s=q(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ro=q(/^(?:\w+script|data):/i),ao=q(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),vs=q(/^html$/i),lo=q(/^[a-z][.\w]*(-[.\w]+)+$/i),Ts=Object.freeze({__proto__:null,ARIA_ATTR:oo,ATTR_WHITESPACE:ao,CUSTOM_ELEMENT:lo,DATA_ATTR:io,DOCTYPE_NAME:vs,ERB_EXPR:no,IS_ALLOWED_URI:$s,IS_SCRIPT_OR_DATA:ro,MUSTACHE_EXPR:to,TMPLIT_EXPR:so}),Ke={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,progressingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},co=function(){return typeof window>"u"?null:window},ho=function(e,t){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let n=null,s="data-tt-policy-suffix";t&&t.hasAttribute(s)&&(n=t.getAttribute(s));let o="dompurify"+(n?"#"+n:"");try{return e.createPolicy(o,{createHTML(i){return i},createScriptURL(i){return i}})}catch{return console.warn("TrustedTypes policy "+o+" could not be created."),null}},As=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};function Rs(){let r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:co(),e=m=>Rs(m);if(e.version="3.2.6",e.removed=[],!r||!r.document||r.document.nodeType!==Ke.document||!r.Element)return e.isSupported=!1,e;let{document:t}=r,n=t,s=n.currentScript,{DocumentFragment:o,HTMLTemplateElement:i,Node:c,Element:l,NodeFilter:u,NamedNodeMap:p=r.NamedNodeMap||r.MozNamedAttrMap,HTMLFormElement:d,DOMParser:g,trustedTypes:b}=r,A=l.prototype,H=Ve(A,"cloneNode"),G=Ve(A,"remove"),$e=Ve(A,"nextSibling"),Qe=Ve(A,"childNodes"),re=Ve(A,"parentNode");if(typeof i=="function"){let m=t.createElement("template");m.content&&m.content.ownerDocument&&(t=m.content.ownerDocument)}let S,Z="",{implementation:kt,createNodeIterator:Cs,createDocumentFragment:Ms,getElementsByTagName:Ls}=t,{importNode:Os}=n,I=As();e.isSupported=typeof Es=="function"&&typeof re=="function"&&kt&&kt.createHTMLDocument!==void 0;let{MUSTACHE_EXPR:yt,ERB_EXPR:_t,TMPLIT_EXPR:wt,DATA_ATTR:Is,ARIA_ATTR:Ns,IS_SCRIPT_OR_DATA:Ps,ATTR_WHITESPACE:cn,CUSTOM_ELEMENT:Ds}=Ts,{IS_ALLOWED_URI:hn}=Ts,$=null,pn=k({},[...ks,...tn,...nn,...sn,...ys]),M=null,un=k({},[..._s,...on,...ws,...bt]),T=Object.seal(Ss(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ve=null,Tt=null,dn=!0,At=!0,fn=!1,gn=!0,me=!1,Je=!0,ae=!1,Et=!1,St=!1,be=!1,et=!1,tt=!1,mn=!0,bn=!1,zs="user-content-",$t=!0,Re=!1,xe={},ke=null,xn=k({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),kn=null,yn=k({},["audio","video","img","source","image","track"]),vt=null,_n=k({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),nt="http://www.w3.org/1998/Math/MathML",st="http://www.w3.org/2000/svg",Y="http://www.w3.org/1999/xhtml",ye=Y,Rt=!1,Ct=null,Us=k({},[nt,st,Y],en),it=k({},["mi","mo","mn","ms","mtext"]),ot=k({},["annotation-xml"]),Hs=k({},["title","style","font","a","script"]),Ce=null,Fs=["application/xhtml+xml","text/html"],Bs="text/html",v=null,_e=null,qs=t.createElement("form"),wn=function(a){return a instanceof RegExp||a instanceof Function},Mt=function(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(!(_e&&_e===a)){if((!a||typeof a!="object")&&(a={}),a=te(a),Ce=Fs.indexOf(a.PARSER_MEDIA_TYPE)===-1?Bs:a.PARSER_MEDIA_TYPE,v=Ce==="application/xhtml+xml"?en:xt,$=W(a,"ALLOWED_TAGS")?k({},a.ALLOWED_TAGS,v):pn,M=W(a,"ALLOWED_ATTR")?k({},a.ALLOWED_ATTR,v):un,Ct=W(a,"ALLOWED_NAMESPACES")?k({},a.ALLOWED_NAMESPACES,en):Us,vt=W(a,"ADD_URI_SAFE_ATTR")?k(te(_n),a.ADD_URI_SAFE_ATTR,v):_n,kn=W(a,"ADD_DATA_URI_TAGS")?k(te(yn),a.ADD_DATA_URI_TAGS,v):yn,ke=W(a,"FORBID_CONTENTS")?k({},a.FORBID_CONTENTS,v):xn,ve=W(a,"FORBID_TAGS")?k({},a.FORBID_TAGS,v):te({}),Tt=W(a,"FORBID_ATTR")?k({},a.FORBID_ATTR,v):te({}),xe=W(a,"USE_PROFILES")?a.USE_PROFILES:!1,dn=a.ALLOW_ARIA_ATTR!==!1,At=a.ALLOW_DATA_ATTR!==!1,fn=a.ALLOW_UNKNOWN_PROTOCOLS||!1,gn=a.ALLOW_SELF_CLOSE_IN_ATTR!==!1,me=a.SAFE_FOR_TEMPLATES||!1,Je=a.SAFE_FOR_XML!==!1,ae=a.WHOLE_DOCUMENT||!1,be=a.RETURN_DOM||!1,et=a.RETURN_DOM_FRAGMENT||!1,tt=a.RETURN_TRUSTED_TYPE||!1,St=a.FORCE_BODY||!1,mn=a.SANITIZE_DOM!==!1,bn=a.SANITIZE_NAMED_PROPS||!1,$t=a.KEEP_CONTENT!==!1,Re=a.IN_PLACE||!1,hn=a.ALLOWED_URI_REGEXP||$s,ye=a.NAMESPACE||Y,it=a.MATHML_TEXT_INTEGRATION_POINTS||it,ot=a.HTML_INTEGRATION_POINTS||ot,T=a.CUSTOM_ELEMENT_HANDLING||{},a.CUSTOM_ELEMENT_HANDLING&&wn(a.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(T.tagNameCheck=a.CUSTOM_ELEMENT_HANDLING.tagNameCheck),a.CUSTOM_ELEMENT_HANDLING&&wn(a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(T.attributeNameCheck=a.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),a.CUSTOM_ELEMENT_HANDLING&&typeof a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements=="boolean"&&(T.allowCustomizedBuiltInElements=a.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),me&&(At=!1),et&&(be=!0),xe&&($=k({},ys),M=[],xe.html===!0&&(k($,ks),k(M,_s)),xe.svg===!0&&(k($,tn),k(M,on),k(M,bt)),xe.svgFilters===!0&&(k($,nn),k(M,on),k(M,bt)),xe.mathMl===!0&&(k($,sn),k(M,ws),k(M,bt))),a.ADD_TAGS&&($===pn&&($=te($)),k($,a.ADD_TAGS,v)),a.ADD_ATTR&&(M===un&&(M=te(M)),k(M,a.ADD_ATTR,v)),a.ADD_URI_SAFE_ATTR&&k(vt,a.ADD_URI_SAFE_ATTR,v),a.FORBID_CONTENTS&&(ke===xn&&(ke=te(ke)),k(ke,a.FORBID_CONTENTS,v)),$t&&($["#text"]=!0),ae&&k($,["html","head","body"]),$.table&&(k($,["tbody"]),delete ve.tbody),a.TRUSTED_TYPES_POLICY){if(typeof a.TRUSTED_TYPES_POLICY.createHTML!="function")throw Xe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof a.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Xe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');S=a.TRUSTED_TYPES_POLICY,Z=S.createHTML("")}else S===void 0&&(S=ho(b,s)),S!==null&&typeof Z=="string"&&(Z=S.createHTML(""));D&&D(a),_e=a}},Tn=k({},[...tn,...nn,...Ji]),An=k({},[...sn,...eo]),Ws=function(a){let h=re(a);(!h||!h.tagName)&&(h={namespaceURI:ye,tagName:"template"});let f=xt(a.tagName),w=xt(h.tagName);return Ct[a.namespaceURI]?a.namespaceURI===st?h.namespaceURI===Y?f==="svg":h.namespaceURI===nt?f==="svg"&&(w==="annotation-xml"||it[w]):!!Tn[f]:a.namespaceURI===nt?h.namespaceURI===Y?f==="math":h.namespaceURI===st?f==="math"&&ot[w]:!!An[f]:a.namespaceURI===Y?h.namespaceURI===st&&!ot[w]||h.namespaceURI===nt&&!it[w]?!1:!An[f]&&(Hs[f]||!Tn[f]):!!(Ce==="application/xhtml+xml"&&Ct[a.namespaceURI]):!1},j=function(a){Ze(e.removed,{element:a});try{re(a).removeChild(a)}catch{G(a)}},we=function(a,h){try{Ze(e.removed,{attribute:h.getAttributeNode(a),from:h})}catch{Ze(e.removed,{attribute:null,from:h})}if(h.removeAttribute(a),a==="is")if(be||et)try{j(h)}catch{}else try{h.setAttribute(a,"")}catch{}},En=function(a){let h=null,f=null;if(St)a="<remove></remove>"+a;else{let E=xs(a,/^[\r\n\t ]+/);f=E&&E[0]}Ce==="application/xhtml+xml"&&ye===Y&&(a='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+a+"</body></html>");let w=S?S.createHTML(a):a;if(ye===Y)try{h=new g().parseFromString(w,Ce)}catch{}if(!h||!h.documentElement){h=kt.createDocument(ye,"template",null);try{h.documentElement.innerHTML=Rt?Z:w}catch{}}let L=h.body||h.documentElement;return a&&f&&L.insertBefore(t.createTextNode(f),L.childNodes[0]||null),ye===Y?Ls.call(h,ae?"html":"body")[0]:ae?h.documentElement:L},Sn=function(a){return Cs.call(a.ownerDocument||a,a,u.SHOW_ELEMENT|u.SHOW_COMMENT|u.SHOW_TEXT|u.SHOW_PROCESSING_INSTRUCTION|u.SHOW_CDATA_SECTION,null)},Lt=function(a){return a instanceof d&&(typeof a.nodeName!="string"||typeof a.textContent!="string"||typeof a.removeChild!="function"||!(a.attributes instanceof p)||typeof a.removeAttribute!="function"||typeof a.setAttribute!="function"||typeof a.namespaceURI!="string"||typeof a.insertBefore!="function"||typeof a.hasChildNodes!="function")},$n=function(a){return typeof c=="function"&&a instanceof c};function X(m,a,h){mt(m,f=>{f.call(e,a,h,_e)})}let vn=function(a){let h=null;if(X(I.beforeSanitizeElements,a,null),Lt(a))return j(a),!0;let f=v(a.nodeName);if(X(I.uponSanitizeElement,a,{tagName:f,allowedTags:$}),Je&&a.hasChildNodes()&&!$n(a.firstElementChild)&&P(/<[/\w!]/g,a.innerHTML)&&P(/<[/\w!]/g,a.textContent)||a.nodeType===Ke.progressingInstruction||Je&&a.nodeType===Ke.comment&&P(/<[/\w]/g,a.data))return j(a),!0;if(!$[f]||ve[f]){if(!ve[f]&&Cn(f)&&(T.tagNameCheck instanceof RegExp&&P(T.tagNameCheck,f)||T.tagNameCheck instanceof Function&&T.tagNameCheck(f)))return!1;if($t&&!ke[f]){let w=re(a)||a.parentNode,L=Qe(a)||a.childNodes;if(L&&w){let E=L.length;for(let U=E-1;U>=0;--U){let V=H(L[U],!0);V.__removalCount=(a.__removalCount||0)+1,w.insertBefore(V,$e(a))}}}return j(a),!0}return a instanceof l&&!Ws(a)||(f==="noscript"||f==="noembed"||f==="noframes")&&P(/<\/no(script|embed|frames)/i,a.innerHTML)?(j(a),!0):(me&&a.nodeType===Ke.text&&(h=a.textContent,mt([yt,_t,wt],w=>{h=Ye(h,w," ")}),a.textContent!==h&&(Ze(e.removed,{element:a.cloneNode()}),a.textContent=h)),X(I.afterSanitizeElements,a,null),!1)},Rn=function(a,h,f){if(mn&&(h==="id"||h==="name")&&(f in t||f in qs))return!1;if(!(At&&!Tt[h]&&P(Is,h))){if(!(dn&&P(Ns,h))){if(!M[h]||Tt[h]){if(!(Cn(a)&&(T.tagNameCheck instanceof RegExp&&P(T.tagNameCheck,a)||T.tagNameCheck instanceof Function&&T.tagNameCheck(a))&&(T.attributeNameCheck instanceof RegExp&&P(T.attributeNameCheck,h)||T.attributeNameCheck instanceof Function&&T.attributeNameCheck(h))||h==="is"&&T.allowCustomizedBuiltInElements&&(T.tagNameCheck instanceof RegExp&&P(T.tagNameCheck,f)||T.tagNameCheck instanceof Function&&T.tagNameCheck(f))))return!1}else if(!vt[h]){if(!P(hn,Ye(f,cn,""))){if(!((h==="src"||h==="xlink:href"||h==="href")&&a!=="script"&&Xi(f,"data:")===0&&kn[a])){if(!(fn&&!P(Ps,Ye(f,cn,"")))){if(f)return!1}}}}}}return!0},Cn=function(a){return a!=="annotation-xml"&&xs(a,Ds)},Mn=function(a){X(I.beforeSanitizeAttributes,a,null);let{attributes:h}=a;if(!h||Lt(a))return;let f={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:M,forceKeepAttr:void 0},w=h.length;for(;w--;){let L=h[w],{name:E,namespaceURI:U,value:V}=L,Me=v(E),Ot=V,O=E==="value"?Ot:Vi(Ot);if(f.attrName=Me,f.attrValue=O,f.keepAttr=!0,f.forceKeepAttr=void 0,X(I.uponSanitizeAttribute,a,f),O=f.attrValue,bn&&(Me==="id"||Me==="name")&&(we(E,a),O=zs+O),Je&&P(/((--!?|])>)|<\/(style|title)/i,O)){we(E,a);continue}if(f.forceKeepAttr)continue;if(!f.keepAttr){we(E,a);continue}if(!gn&&P(/\/>/i,O)){we(E,a);continue}me&&mt([yt,_t,wt],On=>{O=Ye(O,On," ")});let Ln=v(a.nodeName);if(!Rn(Ln,Me,O)){we(E,a);continue}if(S&&typeof b=="object"&&typeof b.getAttributeType=="function"&&!U)switch(b.getAttributeType(Ln,Me)){case"TrustedHTML":{O=S.createHTML(O);break}case"TrustedScriptURL":{O=S.createScriptURL(O);break}}if(O!==Ot)try{U?a.setAttributeNS(U,E,O):a.setAttribute(E,O),Lt(a)?j(a):bs(e.removed)}catch{we(E,a)}}X(I.afterSanitizeAttributes,a,null)},js=function m(a){let h=null,f=Sn(a);for(X(I.beforeSanitizeShadowDOM,a,null);h=f.nextNode();)X(I.uponSanitizeShadowNode,h,null),vn(h),Mn(h),h.content instanceof o&&m(h.content);X(I.afterSanitizeShadowDOM,a,null)};return e.sanitize=function(m){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=null,f=null,w=null,L=null;if(Rt=!m,Rt&&(m="<!-->"),typeof m!="string"&&!$n(m))if(typeof m.toString=="function"){if(m=m.toString(),typeof m!="string")throw Xe("dirty is not a string, aborting")}else throw Xe("toString is not a function");if(!e.isSupported)return m;if(Et||Mt(a),e.removed=[],typeof m=="string"&&(Re=!1),Re){if(m.nodeName){let V=v(m.nodeName);if(!$[V]||ve[V])throw Xe("root node is forbidden and cannot be sanitized in-place")}}else if(m instanceof c)h=En("<!---->"),f=h.ownerDocument.importNode(m,!0),f.nodeType===Ke.element&&f.nodeName==="BODY"||f.nodeName==="HTML"?h=f:h.appendChild(f);else{if(!be&&!me&&!ae&&m.indexOf("<")===-1)return S&&tt?S.createHTML(m):m;if(h=En(m),!h)return be?null:tt?Z:""}h&&St&&j(h.firstChild);let E=Sn(Re?m:h);for(;w=E.nextNode();)vn(w),Mn(w),w.content instanceof o&&js(w.content);if(Re)return m;if(be){if(et)for(L=Ms.call(h.ownerDocument);h.firstChild;)L.appendChild(h.firstChild);else L=h;return(M.shadowroot||M.shadowrootmode)&&(L=Os.call(n,L,!0)),L}let U=ae?h.outerHTML:h.innerHTML;return ae&&$["!doctype"]&&h.ownerDocument&&h.ownerDocument.doctype&&h.ownerDocument.doctype.name&&P(vs,h.ownerDocument.doctype.name)&&(U="<!DOCTYPE "+h.ownerDocument.doctype.name+`>
`+U),me&&mt([yt,_t,wt],V=>{U=Ye(U,V," ")}),S&&tt?S.createHTML(U):U},e.setConfig=function(){let m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Mt(m),Et=!0},e.clearConfig=function(){_e=null,Et=!1},e.isValidAttribute=function(m,a,h){_e||Mt({});let f=v(m),w=v(a);return Rn(f,w,h)},e.addHook=function(m,a){typeof a=="function"&&Ze(I[m],a)},e.removeHook=function(m,a){if(a!==void 0){let h=Zi(I[m],a);return h===-1?void 0:Yi(I[m],h,1)[0]}return bs(I[m])},e.removeHooks=function(m){I[m]=[]},e.removeAllHooks=function(){I=As()},e}var ln=Rs();var C=class extends ie{constructor(){super(...arguments);x(this,"prompts",[]);x(this,"agentName","Agent");x(this,"placeholderText","Ask me anything - I can help with data, actions, and insights");x(this,"iconSvg","");x(this,"iconUrl","");x(this,"messages",[]);x(this,"open",!1);x(this,"panelMode",!1);x(this,"inputFocused",!1);x(this,"loadedIconSvg","");x(this,"isTyping",!1);x(this,"isSubmittable",!0);x(this,"currentMode","collapsed")}setOpen(t){this.open=t,this.requestUpdate(),!t&&this.panelMode&&(this.panelMode=!1,document.body.style.marginRight="0",document.body.style.transition=""),t&&(this.inputFocused=!1),this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector(".container");n&&(t?n.style.bottom="0":n.style.bottom="")})}setTyping(t){this.isTyping=t,this.requestUpdate()}setSubmittable(t){this.isSubmittable=t,this.requestUpdate()}replaceLastMessage(t){if(this.messages.length===0){this.messages=[{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom());return}let n=this.messages[this.messages.length-1];n.type==="agent"?(this.messages=[...this.messages.slice(0,-1),{...n,text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())):(this.messages=[...this.messages,{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom()))}appendToLastMessage(t){if(this.messages.length===0){this.messages=[{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom());return}let n=this.messages[this.messages.length-1];if(n.type==="agent"){let s=n.text+t;this.messages=[...this.messages.slice(0,-1),{...n,text:s}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())}else this.messages=[...this.messages,{type:"agent",text:t}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom())}_scrollToBottom(){let t=this.shadowRoot?.querySelector(".body");t&&(t.scrollTop=t.scrollHeight)}_parseMarkdown(t){try{y.setOptions({breaks:!0,gfm:!0});let n=y.parse(t),s=typeof n=="string"?n:String(n);return this._sanitizeHTML(s)}catch(n){return console.warn("Markdown parsing failed:",n),this._sanitizeText(t)}}_sanitizeText(t){return ln.sanitize(t,{ALLOWED_TAGS:[],ALLOWED_ATTR:[]})}_sanitizeHTML(t){return ln.sanitize(t,{ALLOWED_TAGS:["h1","h2","h3","h4","h5","h6","strong","b","em","i","ul","ol","li","a","blockquote","br","p","code","pre","table","thead","tbody","tr","th","td"],ALLOWED_ATTR:["href","target","rel","class","id"],ALLOW_DATA_ATTR:!1,KEEP_CONTENT:!0})}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this._handleGlobalKeydown.bind(this))}async loadIcon(){if(this.iconSvg){this.loadedIconSvg=this.iconSvg;return}if(this.iconUrl)try{let t=await fetch(this.iconUrl);t.ok?(this.loadedIconSvg=await t.text(),this.requestUpdate()):console.warn(`Failed to load icon from URL: ${this.iconUrl}`)}catch(t){console.warn(`Error loading icon from URL: ${this.iconUrl}`,t)}}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("keydown",this._handleGlobalKeydown.bind(this)),this.panelMode&&(document.body.style.marginRight="0",document.body.style.transition="")}_handleGlobalKeydown(t){if((t.ctrlKey||t.metaKey)&&t.key==="k"){t.preventDefault();let n=this.shadowRoot?.querySelector(".input-field");n&&(n.focus(),this.inputFocused=!0,this.currentMode==="collapsed"?(this.currentMode="min",this.inputFocused=!0,this.requestUpdate()):this.currentMode==="min"&&(this.currentMode="max",this.setOpen(!0)))}t.key==="Escape"&&(t.preventDefault(),this.currentMode==="max"?(this.currentMode="min",this.setOpen(!1),this.inputFocused=!0):this.currentMode==="min"&&(this.currentMode="collapsed",this.inputFocused=!1,this.requestUpdate()))}render(){return F`
      <div class="backdrop ${this.open?"visible":""} ${this.panelMode?"panel-mode":""}" @click=${this._handleBackdropClick}></div>
      <div class="container ${this.open?"expanded":""} ${this.panelMode?"panel-mode":""} ${this.inputFocused?"input-focused":""}">
        ${this.open?F`
          <div class="body">
            ${this.messages.map(t=>F`
              <div class="message ${t.type}-message">
                <strong class="message-author">${t.type==="user"?"You":this.agentName}:</strong> 
                <div class="message-text" .innerHTML=${t.type==="user"?this._sanitizeText(t.text):this._parseMarkdown(t.text)}></div>
              </div>
            `)}
            ${this.isTyping?F`
              <div class="message agent-message">
                <strong class="message-author">${this.agentName}:</strong> 
                <span class="typing-indicator">
                  <span></span><span></span><span></span>
                </span>
              </div>
            `:""}
          </div>
        `:""}
        <div class="header">
          <div class="input-wrapper">
            ${this.loadedIconSvg?F`
              <div class="input-prefix">
                <div .innerHTML=${this.loadedIconSvg}></div>
              </div>
            `:""}
            <input 
              class="input-field" 
              type="text" 
              placeholder=${this.placeholderText}
              @keydown=${this._handleKeydown}
              @focus=${this._handleInputFocus}
              @blur=${this._handleInputBlur}
            />
            <button class="send-button" ?disabled=${!this.isSubmittable} @click=${this._handleSendMessage}>
              <!-- Send icon -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
            </button>
          </div>
          ${this.open?F`
            <div class="suggestions">
              ${this.prompts.map(t=>F`
                <button class="suggestion" @click=${()=>this._handleSuggestionClick(t)}>
                  "${t}"
                </button>
              `)}
            </div>
          `:""}
        </div>
        <button class="toggle-button" @click=${this._toggleExpanded}>
          ${this.open?F`
            <!-- lucide: minimize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minimize2-icon lucide-minimize-2"><path d="m14 10 7-7"/><path d="M20 10h-6V4"/><path d="m3 21 7-7"/><path d="M4 14h6v6"/></svg>
          `:F`
            <!-- lucide: maximize-2 -->
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-maximize2-icon lucide-maximize-2"><path d="M15 3h6v6"/><path d="m21 3-7 7"/><path d="m3 21 7-7"/><path d="M9 21H3v-6"/></svg>
          `}
        </button>
        ${this.open?F`
          <button class="panel-toggle-button" @click=${this._handlePanelToggle} title=${this.panelMode?"Switch to dialog mode":"Switch to panel mode"}>
            ${this.panelMode?F`
              <!-- lucide: panel-bottom -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-bottom-icon lucide-panel-bottom"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 15h18"/></svg>
            `:F`
              <!-- lucide: panel-right -->
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-icon lucide-panel-right"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/></svg>
            `}
          </button>
        `:""}
      </div>
    `}_toggleExpanded(){let t=this.open;this.setOpen(!this.open),!t&&this.open&&this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector(".input-field");n&&(n.focus(),this.inputFocused=!0,this.requestUpdate())})}_handleSuggestionClick(t){let n=this._sanitizeText(t);this.messages=[...this.messages,{type:"user",text:n}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom()),this.dispatchEvent(new CustomEvent("message",{detail:{query:n}}))}_handleSendMessage(){if(!this.isSubmittable)return;let t=this.shadowRoot?.querySelector(".input-field");if(t&&t.value.trim()){let n=t.value,s=this._sanitizeText(n);this.messages=[...this.messages,{type:"user",text:s}],this.requestUpdate(),this.updateComplete.then(()=>this._scrollToBottom()),this.dispatchEvent(new CustomEvent("message",{detail:{query:s}})),t.value=""}this.open||(this.setOpen(!0),this.inputFocused=!1,this.updateComplete.then(()=>{let n=this.shadowRoot?.querySelector(".input-field");n&&n.focus()}))}_handleKeydown(t){t.key==="Enter"&&this.isSubmittable&&this._handleSendMessage()}_handleInputFocus(){this.inputFocused=!0,this.requestUpdate()}_handleInputBlur(){this.inputFocused=!1,this.requestUpdate()}_handleBackdropClick(t){this.open&&t.target===this.shadowRoot?.querySelector(".backdrop")&&this.setOpen(!1)}_handlePanelToggle(){this.panelMode=!this.panelMode,this.requestUpdate(),this.panelMode?(document.body.style.marginRight="400px",document.body.style.transition="margin-right 0.8s cubic-bezier(0.4, 0, 0.2, 1)"):(document.body.style.marginRight="0",setTimeout(()=>{document.body.style.transition=""},800)),this.updateComplete.then(()=>{let t=this.shadowRoot?.querySelector(".input-field");t&&(t.focus(),this.inputFocused=!0,this.requestUpdate())})}};x(C,"styles",Nt`
    :host { 
      display: block;
      z-index: 1000; 
      font-family: sans-serif;
      box-sizing: border-box;
      font-size: 14px;
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
      transition: opacity 0.3s ease, visibility 0.3s ease;
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
      left: 50%;
      transform: translateX(-50%);
      width: min(75vw, 800px);
      background: white;
      border-radius: 12px 12px 0 0;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      overflow: hidden;
      font-family: sans-serif;
      display: grid;
      grid-template-rows: auto 0fr;
      transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                  border-radius 0.8s ease,
                  grid-template-rows 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  right 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  left 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                  bottom 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: 1000;
      bottom: -68px;
    }
    .container:hover {
      bottom: 0;
    }
    .container.input-focused {
      bottom: 0;
    }
    .container.expanded {
      width: 80vw;
      height: 80vh;
      bottom: 0 !important;
      left: 50%;
      transform: translateX(-50%);
      background: white;
      border-radius: 12px 12px 0 0;
      display: flex;
      flex-direction: column;
    }
    .container.panel-mode {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0 !important;
      left: auto;
      transform: none;
      width: 400px;
      height: 100vh;
      border-radius: 0;
      box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);
      z-index: 1001;
    }
    :host(.panel-mode) {
      margin-right: 400px;
    }
    @media (max-width: 768px) {
      .container {
        width: 95vw;
        bottom: -68px;
        left: 50%;
        transform: translateX(-50%);
      }
      .container:hover {
        bottom: 0;
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
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
      .container {
        width: 100vw;
        border-radius: 0;
        bottom: -68px;
      }
      .container:hover {
        bottom: 0;
      }
      .container.expanded {
        width: 80vw;
        height: 80vh;
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
    .header {
      background: #702c62;
      padding: 16px;
      border-bottom: 1px solid #e0e0e0;
      flex-shrink: 0;
      transition: background-color 0.3s ease, border-bottom 0.3s ease;
    }
    .container.expanded .header {
      background: white;
      border-bottom: none;
      border-top: 1px solid #e0e0e0;
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
      overflow-y: auto;
      flex: 1;
      min-height: 0;
      opacity: 0;
      transition: opacity 0.8s ease 0.2s;
    }
    .container.expanded .body {
      opacity: 1;
    }
    .message {
      margin: 8px 0;
    }
    .user-message .message-author {
      color: #125361;
    }
    .agent-message .message-author {
      color: #702c62;
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
      background: #702c62;
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
      transition: all 0.2s ease;
    }
    .panel-toggle-button:hover {
      background: #555;
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
    .message:first-child,
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
    .message:last-child,
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
  `),N([oe({type:Array})],C.prototype,"prompts",2),N([oe({type:String})],C.prototype,"agentName",2),N([oe({type:String})],C.prototype,"placeholderText",2),N([oe({type:String})],C.prototype,"iconSvg",2),N([oe({type:String})],C.prototype,"iconUrl",2),N([Q()],C.prototype,"messages",2),N([Q()],C.prototype,"open",2),N([Q()],C.prototype,"panelMode",2),N([Q()],C.prototype,"inputFocused",2),N([Q()],C.prototype,"loadedIconSvg",2),N([Q()],C.prototype,"isTyping",2),N([Q()],C.prototype,"isSubmittable",2),N([Q()],C.prototype,"currentMode",2),C=N([Jn("agent-ui")],C);window.AgentUI={init:r=>{let e=document.querySelector("agent-ui");return e||(e=document.createElement("agent-ui"),document.body.appendChild(e)),e.prompts=r.prompts,e.agentName=r.agentName,e.placeholderText=r.placeholderText,r.iconSvg&&(e.iconSvg=r.iconSvg),r.iconUrl&&(e.iconUrl=r.iconUrl),e.requestUpdate(),e.loadIcon(),e}};})();
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
//# sourceMappingURL=agent-ui.umd.js.map
