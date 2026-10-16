(()=>{
 'use strict';
 const search=document.getElementById('vocab-search');
 const topic=document.getElementById('vocab-topic');
 const groups=[...document.querySelectorAll('.vocab-group')];
 const total=document.querySelectorAll('.vocab-entry').length;
 function filter(){
  const query=search.value.trim().toLocaleLowerCase();
  let count=0;
  groups.forEach(group=>{
   const matchesTopic=!topic.value||group.querySelector('h2').textContent===topic.value;
   let groupCount=0;
   group.querySelectorAll('.vocab-entry').forEach(entry=>{
    entry.hidden=!matchesTopic||!entry.textContent.toLocaleLowerCase().includes(query);
    if(!entry.hidden)groupCount++;
   });
   group.hidden=!groupCount;count+=groupCount;
  });
  document.getElementById('vocab-count').textContent=`${count} of ${total} terms`;
  document.getElementById('vocab-empty').hidden=count>0;
 }
 search.addEventListener('input',filter);topic.addEventListener('change',filter);
 document.getElementById('vocab-clear').addEventListener('click',()=>{search.value='';topic.value='';filter();search.focus({preventScroll:true})});
})();
