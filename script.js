function numbersOnly(string) {
    return string.replace(/\D/g, '');
}

let div = document.getElementById("div1");
let divStyle = getComputedStyle(div);
let marginLeftValue = divStyle.marginLeft;
let result = +numbersOnly(marginLeftValue) + 10 + 'px';
div.style.marginLeft = result;