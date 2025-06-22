// Write JavaScript to change the background color on button click.
const hell = document.createElement("h1");
hell.innerHTML = "Hello world";
document.body.appendChild(hell);

const but = document.createElement("button");
but.innerHTML = "click here";
document.body.appendChild(but);

    function changeBackground() {
      document.body.style.backgroundColor = "aqua";
    }
    
but.addEventListener("click", changeBackground);


// const show = () => {
//   let element = document.getElementById("hel");
//   element.style.backgroundColor = "red";

//   document.body.appendChild(element);
// };
// hel.addEventListener("click", show);
