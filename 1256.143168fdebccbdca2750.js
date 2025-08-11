/*! For license information please see 1256.143168fdebccbdca2750.js.LICENSE.txt */
"use strict";(("undefined"!=typeof self?self:this).webpackChunk_subwallet_sub_connect=("undefined"!=typeof self?self:this).webpackChunk_subwallet_sub_connect||[]).push([[1256],{288:(t,e,i)=>{i.d(e,{Rt:()=>r,sO:()=>a});var n=i(44392);const{I:o}=n.ge,a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,r=t=>void 0===t.strings},639:(t,e,i)=>{i.d(e,{MZ:()=>r,wk:()=>s});var n=i(25538);const o={attribute:!0,type:String,converter:n.W3,reflect:!1,hasChanged:n.Ec},a=(t=o,e,i)=>{const{kind:n,metadata:a}=i;let r=globalThis.litPropertyMetadata.get(a);if(void 0===r&&globalThis.litPropertyMetadata.set(a,r=new Map),"setter"===n&&((t=Object.create(t)).wrapped=!0),r.set(i.name,t),"accessor"===n){const{name:n}=i;return{set(i){const o=e.get.call(this);e.set.call(this,i),this.requestUpdate(n,o,t)},init(e){return void 0!==e&&this.C(n,void 0,t,e),e}}}if("setter"===n){const{name:n}=i;return function(i){const o=this[n];e.call(this,i),this.requestUpdate(n,o,t)}}throw Error("Unsupported decorator location: "+n)};function r(t){return(e,i)=>"object"==typeof i?a(t,e,i):((t,e,i)=>{const n=e.hasOwnProperty(i);return e.constructor.createProperty(i,t),n?Object.getOwnPropertyDescriptor(e,i):void 0})(t,e,i)}function s(t){return r({...t,state:!0,attribute:!1})}},3389:(t,e,i)=>{i(68146)},17190:(t,e,i)=>{i.d(e,{H:()=>a});var n=i(44392),o=i(48196);const a=(0,o.u$)(class extends o.WL{constructor(t){if(super(t),t.type!==o.OA.ATTRIBUTE||"class"!==t.name||t.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(t=>""!==t)));for(const t in e)e[t]&&!this.nt?.has(t)&&this.st.add(t);return this.render(e)}const i=t.element.classList;for(const t of this.st)t in e||(i.remove(t),this.st.delete(t));for(const t in e){const n=!!e[t];n===this.st.has(t)||this.nt?.has(t)||(n?(i.add(t),this.st.add(t)):(i.remove(t),this.st.delete(t)))}return n.c0}})},22835:(t,e,i)=>{i(59851)},29658:(t,e,i)=>{i.d(e,{J:()=>o});var n=i(44392);const o=t=>t??n.s6},31117:(t,e,i)=>{var n=i(94062),o=i(639),a=i(67232),r=i(13679);const s=n.AH`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 16px;
    height: 16px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  :host([data-size='xl']) > svg {
    width: 32px;
    height: 32px;
  }

  svg {
    animation: rotate 2s linear infinite;
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var c=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText="--local-color: "+("inherit"===this.color?"inherit":`var(--wui-color-${this.color})`),this.dataset.size=this.size,n.qy`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};l.styles=[a.W5,s],c([(0,o.MZ)()],l.prototype,"color",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-loading-spinner")],l)},47301:(t,e,i)=>{var n=i(94062),o=i(639),a=(i(68146),i(67232)),r=i(13679);const s=n.AH`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--wui-spacing-m);
    padding: 0 var(--wui-spacing-3xs) !important;
    border-radius: var(--wui-border-radius-5xs);
    transition:
      border-radius var(--wui-duration-lg) var(--wui-ease-out-power-1),
      background-color var(--wui-duration-lg) var(--wui-ease-out-power-1);
    will-change: border-radius, background-color;
  }

  :host > wui-text {
    transform: translateY(5%);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-color-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-color-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }

  :host([data-size='lg']) {
    padding: 11px 5px !important;
  }

  :host([data-size='lg']) > wui-text {
    transform: translateY(2%);
  }
`;var c=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.variant="main",this.size="lg"}render(){this.dataset.variant=this.variant,this.dataset.size=this.size;const t="md"===this.size?"mini-700":"micro-700";return n.qy`
      <wui-text data-variant=${this.variant} variant=${t} color="inherit">
        <slot></slot>
      </wui-text>
    `}};l.styles=[a.W5,s],c([(0,o.MZ)()],l.prototype,"variant",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-tag")],l)},48196:(t,e,i)=>{i.d(e,{OA:()=>n,WL:()=>a,u$:()=>o});const n={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>(...e)=>({_$litDirective$:t,values:e});class a{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},59851:(t,e,i)=>{var n=i(94062),o=i(639),a=i(44392),r=i(288),s=i(71953);class c{constructor(t){this.G=t}disconnect(){this.G=void 0}reconnect(t){this.G=t}deref(){return this.G}}class l{constructor(){this.Y=void 0,this.Z=void 0}get(){return this.Y}pause(){this.Y??=new Promise(t=>this.Z=t)}resume(){this.Z?.(),this.Y=this.Z=void 0}}var h=i(48196);const d=t=>!(0,r.sO)(t)&&"function"==typeof t.then,g=1073741823;class p extends s.Kq{constructor(){super(...arguments),this._$Cwt=g,this._$Cbt=[],this._$CK=new c(this),this._$CX=new l}render(...t){return t.find(t=>!d(t))??a.c0}update(t,e){const i=this._$Cbt;let n=i.length;this._$Cbt=e;const o=this._$CK,r=this._$CX;this.isConnected||this.disconnected();for(let t=0;t<e.length&&!(t>this._$Cwt);t++){const a=e[t];if(!d(a))return this._$Cwt=t,a;t<n&&a===i[t]||(this._$Cwt=g,n=0,Promise.resolve(a).then(async t=>{for(;r.get();)await r.get();const e=o.deref();if(void 0!==e){const i=e._$Cbt.indexOf(a);i>-1&&i<e._$Cwt&&(e._$Cwt=i,e.setValue(t))}}))}return a.c0}disconnected(){this._$CK.disconnect(),this._$CX.pause()}reconnected(){this._$CK.reconnect(this),this._$CX.resume()}}const w=(0,h.u$)(p),u=new class{constructor(){this.cache=new Map}set(t,e){this.cache.set(t,e)}get(t){return this.cache.get(t)}has(t){return this.cache.has(t)}delete(t){this.cache.delete(t)}clear(){this.cache.clear()}};var v=i(67232),f=i(13679);const y=n.AH`
  :host {
    display: flex;
    aspect-ratio: var(--local-aspect-ratio);
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }

  .fallback {
    width: var(--local-width);
    height: var(--local-height);
  }
`;var b=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};const m={add:async()=>(await i.e(2699).then(i.bind(i,72699))).addSvg,allWallets:async()=>(await i.e(7172).then(i.bind(i,27172))).allWalletsSvg,arrowBottomCircle:async()=>(await i.e(2166).then(i.bind(i,82166))).arrowBottomCircleSvg,appStore:async()=>(await i.e(1363).then(i.bind(i,41363))).appStoreSvg,apple:async()=>(await i.e(9372).then(i.bind(i,39372))).appleSvg,arrowBottom:async()=>(await i.e(9134).then(i.bind(i,46753))).arrowBottomSvg,arrowLeft:async()=>(await i.e(6323).then(i.bind(i,66323))).arrowLeftSvg,arrowRight:async()=>(await i.e(6442).then(i.bind(i,96442))).arrowRightSvg,arrowTop:async()=>(await i.e(1911).then(i.bind(i,31911))).arrowTopSvg,bank:async()=>(await i.e(9476).then(i.bind(i,99476))).bankSvg,browser:async()=>(await i.e(5572).then(i.bind(i,15572))).browserSvg,card:async()=>(await i.e(9884).then(i.bind(i,29884))).cardSvg,checkmark:async()=>(await i.e(1349).then(i.bind(i,31349))).checkmarkSvg,checkmarkBold:async()=>(await i.e(385).then(i.bind(i,20385))).checkmarkBoldSvg,chevronBottom:async()=>(await i.e(6543).then(i.bind(i,16543))).chevronBottomSvg,chevronLeft:async()=>(await i.e(5737).then(i.bind(i,48118))).chevronLeftSvg,chevronRight:async()=>(await i.e(896).then(i.bind(i,10896))).chevronRightSvg,chevronTop:async()=>(await i.e(4969).then(i.bind(i,4969))).chevronTopSvg,chromeStore:async()=>(await i.e(2496).then(i.bind(i,82496))).chromeStoreSvg,clock:async()=>(await i.e(3070).then(i.bind(i,13070))).clockSvg,close:async()=>(await i.e(3472).then(i.bind(i,13472))).closeSvg,compass:async()=>(await i.e(1852).then(i.bind(i,91852))).compassSvg,coinPlaceholder:async()=>(await i.e(2242).then(i.bind(i,82242))).coinPlaceholderSvg,copy:async()=>(await i.e(6123).then(i.bind(i,16123))).copySvg,cursor:async()=>(await i.e(1716).then(i.bind(i,21716))).cursorSvg,cursorTransparent:async()=>(await i.e(5647).then(i.bind(i,35647))).cursorTransparentSvg,desktop:async()=>(await i.e(5880).then(i.bind(i,65880))).desktopSvg,disconnect:async()=>(await i.e(8904).then(i.bind(i,78904))).disconnectSvg,discord:async()=>(await i.e(6148).then(i.bind(i,46148))).discordSvg,etherscan:async()=>(await i.e(7981).then(i.bind(i,87981))).etherscanSvg,extension:async()=>(await i.e(6573).then(i.bind(i,36573))).extensionSvg,externalLink:async()=>(await i.e(2034).then(i.bind(i,92034))).externalLinkSvg,facebook:async()=>(await i.e(7618).then(i.bind(i,97618))).facebookSvg,farcaster:async()=>(await i.e(537).then(i.bind(i,40537))).farcasterSvg,filters:async()=>(await i.e(2131).then(i.bind(i,92131))).filtersSvg,github:async()=>(await i.e(6869).then(i.bind(i,36869))).githubSvg,google:async()=>(await i.e(5193).then(i.bind(i,35193))).googleSvg,helpCircle:async()=>(await i.e(2410).then(i.bind(i,90029))).helpCircleSvg,image:async()=>(await i.e(1189).then(i.bind(i,11189))).imageSvg,id:async()=>(await i.e(6127).then(i.bind(i,86127))).idSvg,infoCircle:async()=>(await i.e(5619).then(i.bind(i,5619))).infoCircleSvg,lightbulb:async()=>(await i.e(1203).then(i.bind(i,51203))).lightbulbSvg,mail:async()=>(await i.e(4289).then(i.bind(i,64289))).mailSvg,mobile:async()=>(await i.e(1647).then(i.bind(i,74028))).mobileSvg,more:async()=>(await i.e(4319).then(i.bind(i,64319))).moreSvg,networkPlaceholder:async()=>(await i.e(590).then(i.bind(i,70590))).networkPlaceholderSvg,nftPlaceholder:async()=>(await i.e(8367).then(i.bind(i,88367))).nftPlaceholderSvg,off:async()=>(await i.e(245).then(i.bind(i,40245))).offSvg,playStore:async()=>(await i.e(8e3).then(i.bind(i,68e3))).playStoreSvg,plus:async()=>(await i.e(1470).then(i.bind(i,1470))).plusSvg,qrCode:async()=>(await i.e(4683).then(i.bind(i,94683))).qrCodeIcon,recycleHorizontal:async()=>(await i.e(1894).then(i.bind(i,11894))).recycleHorizontalSvg,refresh:async()=>(await i.e(1171).then(i.bind(i,51171))).refreshSvg,search:async()=>(await i.e(7762).then(i.bind(i,67762))).searchSvg,send:async()=>(await i.e(3148).then(i.bind(i,53148))).sendSvg,swapHorizontal:async()=>(await i.e(5069).then(i.bind(i,55069))).swapHorizontalSvg,swapHorizontalMedium:async()=>(await i.e(1370).then(i.bind(i,41370))).swapHorizontalMediumSvg,swapHorizontalBold:async()=>(await i.e(3574).then(i.bind(i,23574))).swapHorizontalBoldSvg,swapHorizontalRoundedBold:async()=>(await i.e(8467).then(i.bind(i,38467))).swapHorizontalRoundedBoldSvg,swapVertical:async()=>(await i.e(6075).then(i.bind(i,56075))).swapVerticalSvg,telegram:async()=>(await i.e(4729).then(i.bind(i,24729))).telegramSvg,threeDots:async()=>(await i.e(1361).then(i.bind(i,81361))).threeDotsSvg,twitch:async()=>(await i.e(2301).then(i.bind(i,42301))).twitchSvg,twitter:async()=>(await i.e(8036).then(i.bind(i,58036))).xSvg,twitterIcon:async()=>(await i.e(8318).then(i.bind(i,58318))).twitterIconSvg,verify:async()=>(await i.e(4203).then(i.bind(i,54203))).verifySvg,verifyFilled:async()=>(await i.e(6024).then(i.bind(i,76024))).verifyFilledSvg,wallet:async()=>(await i.e(8483).then(i.bind(i,58483))).walletSvg,walletConnect:async()=>(await i.e(4693).then(i.bind(i,74693))).walletConnectSvg,walletConnectLightBrown:async()=>(await i.e(4693).then(i.bind(i,74693))).walletConnectLightBrownSvg,walletConnectBrown:async()=>(await i.e(4693).then(i.bind(i,74693))).walletConnectBrownSvg,walletPlaceholder:async()=>(await i.e(6151).then(i.bind(i,26151))).walletPlaceholderSvg,warningCircle:async()=>(await i.e(1881).then(i.bind(i,21881))).warningCircleSvg,x:async()=>(await i.e(8036).then(i.bind(i,58036))).xSvg,info:async()=>(await i.e(5526).then(i.bind(i,75526))).infoSvg,exclamationTriangle:async()=>(await i.e(9194).then(i.bind(i,29194))).exclamationTriangleSvg,reown:async()=>(await i.e(1207).then(i.bind(i,1207))).reownSvg};let $=class extends n.WF{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300",this.aspectRatio="1 / 1"}render(){return this.style.cssText=`\n      --local-color: var(--wui-color-${this.color});\n      --local-width: var(--wui-icon-size-${this.size});\n      --local-aspect-ratio: ${this.aspectRatio}\n    `,n.qy`${w(async function(t){if(u.has(t))return u.get(t);const e=(m[t]??m.copy)();return u.set(t,e),e}(this.name),n.qy`<div class="fallback"></div>`)}`}};$.styles=[v.W5,v.ck,y],b([(0,o.MZ)()],$.prototype,"size",void 0),b([(0,o.MZ)()],$.prototype,"name",void 0),b([(0,o.MZ)()],$.prototype,"color",void 0),b([(0,o.MZ)()],$.prototype,"aspectRatio",void 0),$=b([(0,f.E)("wui-icon")],$)},68146:(t,e,i)=>{var n=i(94062),o=i(639),a=i(17190),r=i(67232),s=i(13679);const c=n.AH`
  :host {
    display: inline-flex !important;
  }

  slot {
    width: 100%;
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-line-clamp-1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }

  .wui-line-clamp-2 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .wui-font-medium-400 {
    font-size: var(--wui-font-size-medium);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-medium-600 {
    font-size: var(--wui-font-size-medium);
    letter-spacing: var(--wui-letter-spacing-medium);
  }

  .wui-font-title-600 {
    font-size: var(--wui-font-size-title);
    letter-spacing: var(--wui-letter-spacing-title);
  }

  .wui-font-title-6-600 {
    font-size: var(--wui-font-size-title-6);
    letter-spacing: var(--wui-letter-spacing-title-6);
  }

  .wui-font-mini-700 {
    font-size: var(--wui-font-size-mini);
    letter-spacing: var(--wui-letter-spacing-mini);
    text-transform: uppercase;
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-2xl-500,
  .wui-font-2xl-600,
  .wui-font-2xl-700 {
    font-size: var(--wui-font-size-2xl);
    letter-spacing: var(--wui-letter-spacing-2xl);
  }

  .wui-font-paragraph-400,
  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-400,
  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-tiny-400,
  .wui-font-small-400,
  .wui-font-medium-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700,
  .wui-font-mini-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-medium-600,
  .wui-font-medium-title-600,
  .wui-font-title-6-600,
  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }

  :host([disabled]) {
    opacity: 0.4;
  }
`;var l=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends n.WF{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left",this.lineClamp=void 0}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0,[`wui-line-clamp-${this.lineClamp}`]:!!this.lineClamp};return this.style.cssText=`\n      --local-align: ${this.align};\n      --local-color: var(--wui-color-${this.color});\n    `,n.qy`<slot class=${(0,a.H)(t)}></slot>`}};h.styles=[r.W5,c],l([(0,o.MZ)()],h.prototype,"variant",void 0),l([(0,o.MZ)()],h.prototype,"color",void 0),l([(0,o.MZ)()],h.prototype,"align",void 0),l([(0,o.MZ)()],h.prototype,"lineClamp",void 0),h=l([(0,s.E)("wui-text")],h)},71878:(t,e,i)=>{var n=i(94062),o=i(639),a=i(67232),r=i(13679);const s=n.AH`
  :host {
    display: block;
    width: var(--local-width);
    height: var(--local-height);
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var c=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image",this.size=void 0}render(){return this.style.cssText=`\n      --local-width: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      --local-height: ${this.size?`var(--wui-icon-size-${this.size});`:"100%"};\n      `,n.qy`<img src=${this.src} alt=${this.alt} @error=${this.handleImageError} />`}handleImageError(){this.dispatchEvent(new CustomEvent("onLoadError",{bubbles:!0,composed:!0}))}};l.styles=[a.W5,a.ck,s],c([(0,o.MZ)()],l.prototype,"src",void 0),c([(0,o.MZ)()],l.prototype,"alt",void 0),c([(0,o.MZ)()],l.prototype,"size",void 0),l=c([(0,r.E)("wui-image")],l)},71953:(t,e,i)=>{i.d(e,{Kq:()=>d});var n=i(288),o=i(48196);const a=(t,e)=>{const i=t._$AN;if(void 0===i)return!1;for(const t of i)t._$AO?.(e,!1),a(t,e);return!0},r=t=>{let e,i;do{if(void 0===(e=t._$AM))break;i=e._$AN,i.delete(t),t=e}while(0===i?.size)},s=t=>{for(let e;e=t._$AM;t=e){let i=e._$AN;if(void 0===i)e._$AN=i=new Set;else if(i.has(t))break;i.add(t),h(e)}};function c(t){void 0!==this._$AN?(r(this),this._$AM=t,s(this)):this._$AM=t}function l(t,e=!1,i=0){const n=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(e)if(Array.isArray(n))for(let t=i;t<n.length;t++)a(n[t],!1),r(n[t]);else null!=n&&(a(n,!1),r(n));else a(this,t)}const h=t=>{t.type==o.OA.CHILD&&(t._$AP??=l,t._$AQ??=c)};class d extends o.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,i){super._$AT(t,e,i),s(this),this.isConnected=t._$AU}_$AO(t,e=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),e&&(a(this,t),r(this))}setValue(t){if((0,n.Rt)(this._$Ct))this._$Ct._$AI(t,this);else{const e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}}},77164:(t,e,i)=>{var n=i(94062),o=i(639),a=i(67232),r=i(15179),s=i(13679);const c=n.AH`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var l=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let h=class extends n.WF{render(){return this.style.cssText=`\n      flex-direction: ${this.flexDirection};\n      flex-wrap: ${this.flexWrap};\n      flex-basis: ${this.flexBasis};\n      flex-grow: ${this.flexGrow};\n      flex-shrink: ${this.flexShrink};\n      align-items: ${this.alignItems};\n      justify-content: ${this.justifyContent};\n      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};\n      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};\n      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};\n      padding-top: ${this.padding&&r.Z.getSpacingStyles(this.padding,0)};\n      padding-right: ${this.padding&&r.Z.getSpacingStyles(this.padding,1)};\n      padding-bottom: ${this.padding&&r.Z.getSpacingStyles(this.padding,2)};\n      padding-left: ${this.padding&&r.Z.getSpacingStyles(this.padding,3)};\n      margin-top: ${this.margin&&r.Z.getSpacingStyles(this.margin,0)};\n      margin-right: ${this.margin&&r.Z.getSpacingStyles(this.margin,1)};\n      margin-bottom: ${this.margin&&r.Z.getSpacingStyles(this.margin,2)};\n      margin-left: ${this.margin&&r.Z.getSpacingStyles(this.margin,3)};\n    `,n.qy`<slot></slot>`}};h.styles=[a.W5,c],l([(0,o.MZ)()],h.prototype,"flexDirection",void 0),l([(0,o.MZ)()],h.prototype,"flexWrap",void 0),l([(0,o.MZ)()],h.prototype,"flexBasis",void 0),l([(0,o.MZ)()],h.prototype,"flexGrow",void 0),l([(0,o.MZ)()],h.prototype,"flexShrink",void 0),l([(0,o.MZ)()],h.prototype,"alignItems",void 0),l([(0,o.MZ)()],h.prototype,"justifyContent",void 0),l([(0,o.MZ)()],h.prototype,"columnGap",void 0),l([(0,o.MZ)()],h.prototype,"rowGap",void 0),l([(0,o.MZ)()],h.prototype,"gap",void 0),l([(0,o.MZ)()],h.prototype,"padding",void 0),l([(0,o.MZ)()],h.prototype,"margin",void 0),h=l([(0,s.E)("wui-flex")],h)},79828:(t,e,i)=>{var n=i(94062),o=i(639),a=(i(59851),i(67232)),r=i(13679);const s=n.AH`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-color-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    box-sizing: content-box;
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var c=function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};let l=class extends n.WF{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){const t=this.iconSize||this.size,e="lg"===this.size,i="xl"===this.size,o=e?"12%":"16%",a=e?"xxs":i?"s":"3xl",r="gray"===this.background,s="opaque"===this.background,c="accent-100"===this.backgroundColor&&s||"success-100"===this.backgroundColor&&s||"error-100"===this.backgroundColor&&s||"inverse-100"===this.backgroundColor&&s;let l=`var(--wui-color-${this.backgroundColor})`;return c?l=`var(--wui-icon-box-bg-${this.backgroundColor})`:r&&(l=`var(--wui-color-gray-${this.backgroundColor})`),this.style.cssText=`\n       --local-bg-value: ${l};\n       --local-bg-mix: ${c||r?"100%":o};\n       --local-border-radius: var(--wui-border-radius-${a});\n       --local-size: var(--wui-icon-box-size-${this.size});\n       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}\n   `,n.qy` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};l.styles=[a.W5,a.fD,s],c([(0,o.MZ)()],l.prototype,"size",void 0),c([(0,o.MZ)()],l.prototype,"backgroundColor",void 0),c([(0,o.MZ)()],l.prototype,"iconColor",void 0),c([(0,o.MZ)()],l.prototype,"iconSize",void 0),c([(0,o.MZ)()],l.prototype,"background",void 0),c([(0,o.MZ)({type:Boolean})],l.prototype,"border",void 0),c([(0,o.MZ)()],l.prototype,"borderColor",void 0),c([(0,o.MZ)()],l.prototype,"icon",void 0),l=c([(0,r.E)("wui-icon-box")],l)},85017:(t,e,i)=>{i(77164)}}]);