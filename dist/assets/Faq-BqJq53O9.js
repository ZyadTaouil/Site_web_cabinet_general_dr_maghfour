import{c as l,u as i,r as o,j as e,t as m}from"./index-C1RKssli.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=l("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);function p(){const{language:c}=i(),n=m[c],[a,r]=o.useState(null),x=s=>{r(a===s?null:s)};return e.jsx("section",{id:"faq",className:"py-16 bg-white",children:e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsx("h2",{className:"text-3xl font-bold text-gray-900",children:n.faq.title}),e.jsx("p",{className:"mt-4 text-lg text-gray-600",children:n.faq.subtitle})]}),e.jsx("div",{className:"max-w-3xl mx-auto divide-y divide-gray-200",children:n.faq.questions.map((s,t)=>e.jsxs("div",{className:"py-4",children:[e.jsxs("button",{className:"flex justify-between items-center w-full text-left focus:outline-none",onClick:()=>x(t),"aria-expanded":a===t,children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900",children:s.question}),e.jsx("span",{className:"ml-6 flex-shrink-0",children:a===t?e.jsx(u,{className:"h-5 w-5 text-primary-500"}):e.jsx(d,{className:"h-5 w-5 text-primary-500"})})]}),a===t&&e.jsx("div",{className:"mt-2 pr-12",children:e.jsx("p",{className:"text-base text-gray-700",children:s.answer})})]},t))})]})})}export{p as Faq};
