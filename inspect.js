// This code probably isn't good but it works. ._.

var currentElement = document.body;
const textElements = ["P", "A", "H", "H1", "H2", "H3", "H4", "H5", "H6", "CODE", "SPAN"]
var enabled = false

alert('Inspector has activated! Use "[" to toggle it!')

document.addEventListener('mouseover', function (e) {
    var oldElement = currentElement;
    currentElement = e.target;
    oldElement.style.border = "none"
    if (enabled) {
        currentElement.style.border = "1px solid #FF0000";
    }
});

document.onclick = function(event) {
    if (enabled) {
        if (textElements.includes(currentElement.nodeName)) {
            currentElement.innerHTML = prompt("New text:")
        } else if (currentElement.nodeName == "IMG") {
            currentElement.src = prompt("Insert image URL:")
        } else {
            currentElement.innerHTML = prompt("Enter new HTML:")
        }
    }
}

window.addEventListener('keydown', function (e) {
    if (e.key == "[") {
        enabled = !enabled

        if (enabled) {
            alert("Activated selection mode!")
        } else {
            alert("Disabled selection mode!")
        }
    }
});
