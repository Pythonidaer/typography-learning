'use strict';
const $=id=>document.getElementById(id),W=1000,nodes=[],edges=[];
let cursor=70,previous=null;
roadmapGroups.forEach((group,s)=>{
 const rows=Math.ceil(group.terms.length/2),height=Math.max(120,rows*44+12),cy=cursor+height/2;
 const main={...group,title:group.id==='variable-fonts-and-coverage'?'Variable fonts':group.title,id:'group-'+group.id,stage:s,main:true,x:380,y:cy-19,w:240,h:38,example:group.example||group.exercise,url:group.url||'../vocabulary.html#'+group.id};nodes.push(main);
 if(previous)edges.push({source:previous,target:main.id,kind:'spine'});previous=main.id;
 group.terms.forEach((term,i)=>{const left=i<rows,row=left?i:i-rows,n={...term,stage:s,main:false,x:left?25:695,y:cursor+row*44,w:280,h:38};nodes.push(n);edges.push({source:main.id,target:n.id,kind:'branch',side:left?'left':'right'});});cursor+=height+95;
});
const H=cursor-35;let active=null;
function topicButton(n){const b=document.createElement('button');b.dataset.id=n.id;b.className='node'+(n.main?' main-node':'');b.textContent=n.title;b.setAttribute('aria-label',n.title);Object.assign(b.style,{left:n.x+'px',top:n.y+'px',width:n.w+'px',height:n.h+'px'});b.addEventListener('click',()=>openTopic(n));return b;}
function render(){const frag=document.createDocumentFragment();nodes.forEach(n=>frag.append(topicButton(n)));$('nodes').replaceChildren(frag);drawEdges();fit();}
function drawEdges(){const paths=edges.map(e=>{const a=nodes.find(n=>n.id===e.source),b=nodes.find(n=>n.id===e.target);let d;
 if(e.kind==='spine')d=`M ${a.x+a.w/2} ${a.y+a.h} L ${b.x+b.w/2} ${b.y}`;
 else {const left=e.side==='left',sx=left?a.x:a.x+a.w,tx=left?b.x+b.w:b.x,sy=a.y+a.h/2,ty=b.y+b.h/2,dx=(tx-sx)*.52;d=`M ${sx} ${sy} C ${sx+dx} ${sy}, ${tx-dx} ${ty}, ${tx} ${ty}`;}
 const p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('class','connector '+e.kind);return p;});$('connections').setAttribute('viewBox',`0 0 ${W} ${H}`);$('connections').replaceChildren(...paths);}
function fit(){const available=$('mapScroll').clientWidth;const scale=Math.min(1,available/W);$('map').style.transform=`scale(${scale})`;$('map').style.height=H+'px';$('mapSizer').style.width=W*scale+'px';$('mapSizer').style.height=H*scale+'px';}
function openTopic(n){active=n;$('lessonStage').textContent=`${n.stage+1} / ${roadmapGroups[n.stage].title}`;$('lessonTitle').textContent=n.title;$('definition').textContent=n.definition;$('example').textContent=n.example;$('exercise').textContent=n.exercise;$('resource').href=n.url;$('resource').textContent=n.linkLabel||'View in your vocabulary page';if(!$('lesson').open)$('lesson').showModal();$('lesson').scrollTop=0;}
$('closeLesson').addEventListener('click',()=>$('lesson').close());
$('lesson').addEventListener('click',e=>{if(e.target===$('lesson')){const r=$('lesson').getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)$('lesson').close();}});
$('lesson').addEventListener('close',()=>{document.querySelector(`[data-id="${active?.id}"].node`)?.focus({preventScroll:true});});
new ResizeObserver(fit).observe($('mapScroll'));render();
