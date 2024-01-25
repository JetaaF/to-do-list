// let inputi1 = document.querySelector('.input1');
// let addbuttontoADD = document.querySelector("#addtodo");
// let todo = document.querySelector(".to-do");

// addbuttontoADD.addEventListener("click", function() {
//     var paragraaph = document.createElement("p");
//     // paragraaph.classList.add('e-re');
//     paragraaph.innerText = todo.value;
//     addbuttontoADD.appendChild(paragraaph);
//     todo.value = "";
//     paragraaph.addEventListener('click', function(){
//         paragraaph.style.textDecoration = "line-through";
//     })
//     paragraaph.addEventListener('dblclick', function(){
//         todo.removeChild(paragraaph)
//     })
// })

let inputi1 = document.querySelector('#input');
let addbuttontoADD = document.querySelector("#addtodo");
let todo = document.querySelector(".to-do");

addbuttontoADD.addEventListener("click", function() {
    var paragraaph = document.createElement("p");
    paragraaph.innerText = inputi1.value;
    todo.appendChild(paragraaph); // Change this line
    inputi1.value = "";

    paragraaph.addEventListener('click', function(){
        paragraaph.style.textDecoration = "line-through";
    });

    paragraaph.addEventListener('dblclick', function(){
        todo.removeChild(paragraaph); // Change this line
    });
});