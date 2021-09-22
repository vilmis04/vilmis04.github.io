function converter(val) {
    let hex = [];
    let splitStr = val.split(",");
    splitStr.map(item => { hex.push(parseInt(item).toString(16).toUpperCase()) });
    hex = "#" + hex.join("");
    return (hex);
}

document.getElementById("convert").onclick = function () {
    let text = document.getElementById("rgbCode");
    let showResult = document.getElementById("result");
    showResult.innerHTML = converter(text.value);
}