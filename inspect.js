var i_enabled = false
var i_enableKey = "["

alert('Inspector has activated! Use "[" to toggle it!\n\nChange the keybind with "\\".\n\n~ SilasDevs 2021 V2.0 ~')

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
