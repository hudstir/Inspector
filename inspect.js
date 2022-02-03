var i_enabled = false
var i_enableKey = "["

window.addEventListener('keydown', function (e) {
    if (e.key == i_enableKey) {
        i_enabled = !i_enabled

        if (i_enabled) {
            document.body.setAttribute("contenteditable", true)
        } else {
            document.body.setAttribute("contenteditable", false)
        }
    } else if (e.key == "\\") {
         i_enableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});

var css = `
.inspector-alert {
  display: flex;
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: white;
  align-items: center;
  padding: 5px;
  border-left: solid lime;
  border-radius: 3px;
  opacity: 1;
  transition: opacity 200ms;
}

.inspector-alert span {
  text-align: center;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
var style = document.createElement('style');
document.head.appendChild(style)
style.type = 'text/css';
style.appendChild(document.createTextNode(css));

var alert = document.createElement('div')
var span = document.createElement('span')
alert.classList.add('inspector-alert')
span.innerText = "Inspector V2.1 by SilasDevs"
alert.appendChild(span)

document.body.appendChild(alert)

setTimeout(function() {
  alert.style.opacity = 0
  setTimeout(function() {
    alert.remove()
  }, 200)
}, 5000)

