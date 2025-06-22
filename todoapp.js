const head=document.createElement('h1')
head.innerHTML='To-Do List'
document.body.appendChild(head)

const input=document.createElement("input")
// input.id="puting";
// const a=document.getElementById('puting')
input.placeholder='Enter task';
document.body.appendChild(input)
// input=" "


const div=document.createElement("div")
const list=document.createElement("ul")
list.innerHTML='Task List';
div.appendChild(list)
document.body.appendChild(div)


const btn=document.createElement("button")
btn.innerHTML='ADD';
btn.style.color='brown'
document.body.appendChild(btn)

const add=()=>{
    const task=input.value
    const lis=document.createElement("li")
    lis.id='task'
    lis.textContent=task
    list.appendChild(lis)
    input.value=" "
}
btn.addEventListener('click',add)

const btn1=document.createElement("button")
btn1.innerHTML='DELETE';
document.body.appendChild(btn1)

const del=()=>{
    const liss=document.getElementById("task")
     
     console.log(liss);
     liss.remove()
    // list.appendChild(liss)
}
btn1.addEventListener('click',del)