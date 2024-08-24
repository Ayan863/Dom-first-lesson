let add=document.querySelector('.add')
add.innerHTML="<h2>Form</h2>"
let list=document.querySelectorAll('.task-list')
list.forEach((item,index)=>index%2!=0 ? item.style.background="white": null)