const btn=document.getElementById("btn")
const btn1=document.getElementById("btn1")
const head=document.querySelector("#head span")
const head1=document.querySelector("#head1 span")
let a;
let b;
const rev=()=>{
    // a++
    if(b>0){
    head.innerHTML=a
    ++a;
    head1.innerHTML=b-1
    b--
}
}
btn.addEventListener('click',rev)

a=10
b=1
const rev1=()=>{
    // b++;
    if(a>0){
    head1.innerHTML=b
    ++b
    head.innerHTML=a-1
    a--;
}
}


btn1.addEventListener('click',rev1)
