function createPyramid(text, prefix="", suffix="") {
    var result = "";
    for (var i = 1; i <= text.length; i++) {
        if (text.substring(i-1, i) === " ") { ; }
        else {
            result += prefix + text.substring(0, i) + suffix + "\n";
        }
    }
    document.getElementById("pyramid").innerText = result;
    return result;
}