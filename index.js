function converter(val) {
    let hex = [];
    let splitStr = val.split(",");
    splitStr.map(item => { 
        let hexDigit = parseInt(item).toString(16).toUpperCase();
        if(hexDigit.length == 1) {
            hexDigit = "0"+hexDigit;
        }
        hex.push(hexDigit);
    });
    hex = "#" + hex.join("");
    return (hex);
}

document.getElementById("convert").onclick = function () {
    let text = document.getElementById("rgbCode");
    let showResult = document.getElementById("result");
    showResult.innerHTML = converter(text.value);
}