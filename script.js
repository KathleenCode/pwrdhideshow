//Hide or show password

const input = document.getElementById("hdi");
const image = document.getElementById("close")

image.onclick = function() {
    if(input.type == "password") {
        input.type = "text";
        image.src = "./images/eyeopen.png";
    } else {
        input.type = "password";
        image.src = "./images/eyeclose.png";
    }
}
