parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e,r){return c(e)||o(e,r)||n(e,r)||t()}function t(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function o(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(l){o=!0,c=l}finally{try{r||null==i.return||i.return()}finally{if(o)throw c}}return n}}function c(e){if(Array.isArray(e))return e}var a=document.querySelector("tbody"),i=document.querySelector("thead"),l=document.querySelectorAll("td"),u=document.querySelectorAll("th"),d=document.createElement("button"),s=document.createElement("form");s.classList.add("new-employee-form"),d.innerText="Save to table";var f="",m="",p=[],y={},v=["name","position","office"],h=["age","salary"],S=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],g={name:"",position:"",office:S[0],age:"",salary:""},E=function(e,t,n,r,o){var c=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("p");c.style.top="".concat(e,"px"),c.style.right="".concat(t,"px"),c.classList="notification "+o,a.classList="title",a.innerHTML=n,i.innerHTML=r,c.append(a),c.append(i),c.setAttribute("data-qa","notification"),setTimeout(function(){document.querySelector("body").append(c)},500),setTimeout(function(){c.remove()},4e3)},T=function(e){return parseFloat(e.replace("$","").replace(",","."))},b=function(){p.splice(0,p.length);for(var t=0;t<a.children.length;t++){var n=e(a.children[t].children,5),r=n[0],o=n[1],c=n[2],i=n[3],l=n[4];p.push({name:r.innerText,position:o.innerText,office:c.innerText,age:i.innerText,salary:T(l.innerText)})}},q=function(t){t.forEach(function(t){t.addEventListener("click",function(n){f||(f=n.target.innerText),document.querySelector(".active")&&document.querySelector(".active").classList.remove("active"),t.classList.add("active");var r=e(t.children,5),o=r[0],c=r[1],a=r[2],i=r[3],l=r[4];y={name:o.innerText,position:c.innerText,office:a.innerText,age:i.innerText,salary:T(l.innerText)}})})},L=function(){var e=document.querySelector(".cell-input").value,t=document.querySelector(".cell-input").parentElement;document.querySelector(".cell-input").parentElement.innerHTML="",t.innerText=e||f,b()},A=function(e){for(var t=0;t<e.length;t++)e[t].addEventListener("dblclick",function(e){var t=document.createElement("input");C(t),document.querySelector(".cell-input")&&L(),t.value=e.target.innerText,t.classList.add("cell-input"),e.target.innerHTML="",e.target.appendChild(t)})},x=function(e){for(var t=0;t<e.length;t++)e[t].addEventListener("keypress",function(e){if("Enter"===e.key&&""!==e.target.value)L();else if("Enter"===e.key){var t=document.querySelector(".cell-input").parentElement;document.querySelector(".cell-input").parentElement.innerHTML="",t.innerText=f,f=""}})},C=function(e){e.addEventListener("blur",function(e){L()})},M=function(e){return function(t,n){var r=t[e],o=n[e];if("ASC"===m){if(v.includes(e))return r.localeCompare(o);if(h.includes(e))return r-o}else{if(v.includes(e))return o.localeCompare(r);if(h.includes(e))return o-r}}};u.forEach(function(e){e.addEventListener("click",function(e){a.innerHTML="",m&&"DESC"!==m?"ASC"===m&&(m="DESC"):m="ASC",p.sort(M(e.target.innerText.toLowerCase())),p.forEach(function(e){a.insertAdjacentHTML("beforeend","<tr\n          ".concat(JSON.stringify(e)===JSON.stringify(y)?'class="active"':"","\n        >\n            <td>").concat(e.name,"</td>\n            <td>").concat(e.position,"</td>\n            <td>").concat(e.office,"</td>\n            <td>").concat(e.age,"</td>\n            <td>$").concat(e.salary.toFixed(3).replace(".",","),"</td>\n        </tr>"))}),q(a.querySelectorAll("tr")),A(document.querySelectorAll("td")),x(document.querySelectorAll("td"))})}),q(a.querySelectorAll("tr"));for(var k=function(e){for(var t=document.createElement("input"),n=document.createElement("label"),r=document.createElement("select"),o=i.querySelector("tr").children[e].innerText.toLowerCase(),c=0;c<S.length;c++){var a=document.createElement("option");a.innerText=S[c],r.appendChild(a)}return t.type=e>2&&e<=4?"number":"text",t.required=!0,t.setAttribute("data-qa",o),r.setAttribute("data-qa",o),t.addEventListener("change",function(e){g[o]=e.target.value}),r.addEventListener("change",function(e){g[o]=e.target.value}),2===e?n.appendChild(r):n.appendChild(t),n.insertAdjacentHTML("afterbegin","".concat(i.querySelector("tr").children[e].innerText,":")),n},w=0;w<i.querySelector("tr").children.length;w++)s.appendChild(k(w));d.addEventListener("click",function(e){e.preventDefault(),g.name.length<4?E(10,10,"Error","Name could be more than 4 latters","error"):g.position?+g.age<18||+g.age>90||!g.age?E(10,10,"Error","Age could not less thab 18 or more than 90","error"):g.salary?(a.insertAdjacentHTML("beforeend","<tr>\n            <td>".concat(g.name,"</td>\n            <td>").concat(g.position,"</td>\n            <td>").concat(g.office,"</td>\n            <td>").concat(g.age,"</td>\n            <td>$").concat((+g.salary).toLocaleString("en"),"</td>\n        </tr>")),g.salary=+g.salary,p.push(g),q(a.querySelectorAll("tr")),A(document.querySelectorAll("td")),x(document.querySelectorAll("td")),E(10,10,"Success","Employeer was to add","success")):E(10,10,"Error","Salary could not empty","error"):E(10,10,"Error","Position could not be empty","error")}),s.appendChild(d),A(l),x(l),b(),document.querySelector("body").append(s);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.733c9c27.js.map