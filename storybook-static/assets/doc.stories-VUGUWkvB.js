import{u as m,f as g,i as v,s as w,x as h}from"./lit-element-LidwH4_M.js";import{t as y}from"./custom-element-qyLKk-84.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:g},_=(a=x,e,o)=>{const{kind:n,metadata:t}=o;let s=globalThis.litPropertyMetadata.get(t);if(s===void 0&&globalThis.litPropertyMetadata.set(t,s=new Map),s.set(o.name,a),n==="accessor"){const{name:r}=o;return{set(i){const u=e.get.call(this);e.set.call(this,i),this.requestUpdate(r,u,a)},init(i){return i!==void 0&&this.C(r,void 0,a),i}}}if(n==="setter"){const{name:r}=o;return function(i){const u=this[r];e.call(this,i),this.requestUpdate(r,u,a)}}throw Error("Unsupported decorator location: "+n)};function O(a){return(e,o)=>typeof o=="object"?_(a,e,o):((n,t,s)=>{const r=t.hasOwnProperty(s);return t.constructor.createProperty(s,r?{...n,wrapped:!0}:n),r?Object.getOwnPropertyDescriptor(t,s):void 0})(a,e,o)}var P=Object.defineProperty,C=Object.getOwnPropertyDescriptor,b=(a,e,o,n)=>{for(var t=n>1?void 0:n?C(e,o):e,s=a.length-1,r;s>=0;s--)(r=a[s])&&(t=(n?r(e,o,t):r(t))||t);return n&&t&&P(e,o,t),t};let l=class extends w{constructor(){super(...arguments),this.count=0}render(){return h`
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
    `}_onClick(){this.count++}};l.styles=v`
    :host {
      max-width: 1280px;
      margin: 0 auto;
      padding: 2rem;
      text-align: center;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }
    .logo:hover {
      filter: drop-shadow(0 0 2em #646cffaa);
    }
    .logo.lit:hover {
      filter: drop-shadow(0 0 2em #325cffaa);
    }

    .card {
      padding: 2em;
    }

    .read-the-docs {
      color: #888;
    }

    ::slotted(h1) {
      font-size: 3.2em;
      line-height: 1.1;
    }

    a {
      font-weight: 500;
      color: #646cff;
      text-decoration: inherit;
    }
    a:hover {
      color: #535bf2;
    }

    button {
      border-radius: 8px;
      border: 1px solid transparent;
      padding: 0.6em 1.2em;
      font-size: 1em;
      font-weight: 500;
      font-family: inherit;
      background-color: #1a1a1a;
      cursor: pointer;
      transition: border-color 0.25s;
    }
    button:hover {
      border-color: #646cff;
    }
    button:focus,
    button:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }

    @media (prefers-color-scheme: light) {
      a:hover {
        color: #747bff;
      }
      button {
        background-color: #f9f9f9;
      }
    }
  `;b([O({type:Number})],l.prototype,"count",2);l=b([y("orb-button")],l);const M={title:"Components/Button",argTypes:{}},c=()=>h`
  <orb-button></orb-button>
`;var d,p,f;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:"() => html`\n  <orb-button></orb-button>\n`",...(f=(p=c.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const T=["Default"];export{c as Default,T as __namedExportsOrder,M as default};
//# sourceMappingURL=doc.stories-VUGUWkvB.js.map
