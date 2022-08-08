class t{constructor(t){if(this._valuePattern=/^-?\d+\.?\d*$/,this._digitPattern=/^\d|\.$/,!this._valuePattern.test(t))throw new Error(`This value is no valid input: ${t}`);this._value=t.replace(/^0(?!\.)(?=\d)/g,"")}get value(){return parseFloat(this._value)}get isEmpty(){return""===this._value}append(e){if(!this._digitPattern.test(e))throw new Error(`This value is no valid input: ${e}`);return"."===e&&this._value.includes(".")?this:new t(`${this._value}${e}`)}toString(){return this._value}}class e{evaluate(t,e){return t+e}toString(){return"+"}get rank(){return 1}}class n{evaluate(t,e){return t-e}toString(){return"-"}get rank(){return 1}}class r{evaluate(t,e){return t*e}toString(){return"*"}get rank(){return 0}}class u{evaluate(t,e){return t/e}toString(){return"/"}get rank(){return 0}}const a=document.querySelector("#calculator-input"),i=document.querySelector("#functions"),s=document.querySelector("#digits"),l=document.querySelector("#operators"),o="7894561230.".split("");function p(t,e,n){const r=document.createElement("button");return r.className="digit",r.type="button",r.innerText=t,r.setAttribute("data-input",t),r.addEventListener("click",n),e.appendChild(r),r}const c=new class{constructor(){this._input=[]}get expression(){return this._input.map((t=>t.toString())).join(" ")}addInput(t){this.isLastItemInput()||t.isEmpty||this._input.push(t)}addOperation(t){this.isLastItemInput()&&this._input.push(t)}evaluate(){const e=this.evaluateRecursive(this._input);return this._input.splice(0,this._input.length),this._input.push(new t(e.toString())),e}evaluateRecursive(e){if(1===e.length){return e[0].value}const n=e[1];if(1===n.rank){const t=e[0],r=e.filter(((t,e)=>e>1));return n.evaluate(t.value,this.evaluateRecursive(r))}const r=e[0],u=e[2],a=e.filter(((t,e)=>e>2));return this.evaluateRecursive([new t(n.evaluate(r.value,u.value).toString()),...a])}isLastItemInput(){return this._input[this._input.length-1]instanceof t}};let d=new t("0");o.forEach((t=>{p(t,s,(t=>{if(c.isLastItemInput())return;const e=t.target.dataset.input;d=d.append(e),a.value=`${c.expression} ${d}`}))})),p("/",l,(()=>{c.addInput(d),c.addOperation(new u),d=new t("0"),a.value=`${c.expression} ${d}`})),p("*",l,(()=>{c.addInput(d),c.addOperation(new r),d=new t("0"),a.value=`${c.expression} ${d}`})),p("-",l,(()=>{c.addInput(d),c.addOperation(new n),d=new t("0"),a.value=`${c.expression} ${d}`})),p("+",l,(()=>{c.addInput(d),c.addOperation(new e),d=new t("0"),a.value=`${c.expression} ${d}`})),p("=",s,(()=>{c.addInput(d);const e=c.evaluate();d=new t(e.toString()),a.value=e})),p("AC",i,(()=>{a.value=""})),p("C",i,(()=>{a.value=a.value.slice(0,-1)}));
//# sourceMappingURL=index.329002f5.js.map