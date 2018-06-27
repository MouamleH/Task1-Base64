function toUtf8(s) {
    return unescape(encodeURIComponent(s));
}

function fromUtf8(s) {
    return decodeURIComponent(escape(s));
}

function encode(str) {
    return btoa(toUtf8(str));
}

function decode(base64) {
    return fromUtf8(atob(base64));
}

function updateCount() {
    textLength.innerHTML = "text length: " + text.value.length;
    base64Length.innerHTML = "Base64 length: " + base64.value.length + ", Decoded length: " + decode(base64.value).length;
}

window.onload = function () {
    let text = document.getElementById("text");
    let textLength = document.getElementById("textLength");

    let base64 = document.getElementById("base64");
    let base64Length = document.getElementById("base64Length");

    text.onkeyup = function () {
        base64.value = encode(text.value);
        updateCount();
    };

    base64.onkeyup = function () {
        text.value = decode(base64.value);
        updateCount();
    };
};