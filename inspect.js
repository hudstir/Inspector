// This code probably isn't good but it works. ._.

var currentElement = document.body;
var tempBorder = "none";
const textElements = ["P", "A", "H", "H1", "H2", "H3", "H4", "H5", "H6", "CODE", "SPAN"]
var i_enabled = false
var enableKey = "["

alert('Inspector has activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 ~')

document.addEventListener('mouseover', function (e) {
    var oldElement = currentElement;
    oldElement.style.border = tempBorder
    currentElement = e.target;
    tempBorder = e.target.style.border
    if (i_enabled) {
        currentElement.style.border = "1px solid #FF0000";
    }
});

document.onclick = function(event) {
    if (i_enabled) {
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
    if (e.key == enableKey) {
        i_enabled = !i_enabled

        if (i_enabled) {
            alert("Activated selection mode!")
        } else {
            alert("Disabled selection mode!")
        }
    } else if (e.key == "\\") {
         enableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});
