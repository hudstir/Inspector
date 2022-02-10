var i_enabled = false
var i_enableKey = "["

window.addEventListener('keydown', function (e) {
    if (e.key == i_enableKey) {
        i_enabled = !i_enabled

        if (i_enabled) {
            document.body.setAttribute("contenteditable", true)
            sendAlert("✅ Enabled editing!", "lime")
        } else {
            document.body.setAttribute("contenteditable", false)
            sendAlert("❌ Disabled editing!", "red")
        }
    } else if (e.key == "\\") {
         i_enableKey = prompt("Change keybind:")[0].toLowerCase()   
    }
});

var css = `
.bugzapper-alert {
  display: flex;
  position: fixed;
  top: 10px;
  left: 10px;
  background-color: #404040;
  align-items: center;
  padding: 7px 8px 7px 5px;
  border-left: solid red;
  border-radius: 3px;
  opacity: 1;
  z-index: 99999999999;
  transition: opacity 200ms;
}
.bugzapper-alert span {
  text-align: center;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`

function sendAlert(text, color) {
  var style = document.createElement('style');
  document.head.appendChild(style)
  style.type = 'text/css';
  style.appendChild(document.createTextNode(css));

  var alert = document.createElement('div')
  alert.style = "border-left: solid " + color
  var span = document.createElement('span')
  alert.classList.add('bugzapper-alert')
  span.innerText = text
  alert.appendChild(span)

  document.body.appendChild(alert)
  
  setTimeout(function() {alert.style.opacity = 0}, 3000)
  setTimeout(function() {alert.remove()}, 3200)
}

sendAlert("🔎 Inspector activated!\nUse [ to toggle it.", "lime")
