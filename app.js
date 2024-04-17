const esas = document.getElementById("create");
document.querySelector("#main").addEventListener("click", create);
let say = 1;
let list = [];

function create() {
    let random = Math.trunc((Math.random(1) * 5) + 1);
    const button = document.createElement("button");
    button.textContent = `Message ${random}`;
    button.id = `b${say}`;
    let a = Math.trunc(Math.random() * 254);
    let b = Math.trunc(Math.random() * 254);
    let c = Math.trunc(Math.random() * 254);
    button.style.color = `rgb(${a},${b},${c})`;
    list.push(button.id);
    esas.append(button);
    setTimeout(() => { document.getElementById(list.shift()).remove() }, 4000);
    say++;
}