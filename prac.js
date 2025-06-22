const head=document.createElement("h1")
head.innerHTML='type here'
document.body.appendChild(head)

const input=document.createElement("input")
input.placeholder='start typing'
input.id="put"
document.body.appendChild(input)

put.addEventListener("keydown",function(event){
    console.log("pressed key:",event.key);
})
