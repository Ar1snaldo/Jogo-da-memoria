let i = 0;
let placeholder = "";
const txt = "Nickname";
const speed = 300;

function type(){
    placeholder += txt.charAt(i);
    document.getElementById("login-input").setAttribute("placeholder",placeholder);
    i++;
    setTimeout(type,speed);
}

type()