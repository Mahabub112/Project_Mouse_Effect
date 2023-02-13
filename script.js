


let body = document.querySelector("body")

function aniCircle(e){
    let circleDiv = document.createElement("div")
    circleDiv.classList = "circle";

    body.appendChild(circleDiv);
    circleDiv.style.left = e.clientX + "px";
    circleDiv.style.top = e.clientY + "px";

    circleDiv.style.transition = " all .2s linear";
    circleDiv.style.left = e.clientX + "px";
    circleDiv.style.top = e.clientY + " px";
    circleDiv.style.left = circleDiv.offsetLeft - 20 + "px";
    circleDiv.style.visibility = "hidden"

}

document.addEventListener("mousemove", aniCircle);






