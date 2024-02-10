let col = document.querySelectorAll('.col');

let colors = ["red", "green", "yellow", "blue", "purple", "aqua"];

col.forEach((itam) => {
    itam.addEventListener("click", () => {
        let rand = Math.floor(Math.random() * colors.length);
        itam.style.transform = "translateY(0)";
        itam.style.backgroundColor = rgb();
        itam.style.borderRadius = "50%";
        itam.innerHTML = rgb();
    });
    itam.addEventListener("dblclick", () => {
        let rand = Math.floor(Math.random() * colors.length);
        itam.style.transform = "translateX(200px) translateY(200px)";
        itam.style.backgroundColor = "blue";
        itam.style.borderRadius = "0";
    });
});

function rgb(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}