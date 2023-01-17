const element = document.getElementById("explosiveLink");
let text = element.innerText.split("");

element.innerText = "";

text.forEach(letter => {
    const span = document.createElement("span");
    span.className="letter";
    span.innerText=letter;
    element.appendChild(span);
});