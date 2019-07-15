window.onload = function(event) {
	let body = document.getElementsByTagName("body")[0];
    let circle = document.getElementById("circle");
    let container = document.getElementById("container");
    
    let sun = document.getElementById("sun");
    let moon = document.getElementById("moon");
    
    let h1 = document.getElementsByTagName("h1")[0];

    container.addEventListener("click", function(event) {
        if (Array.from(circle.classList).indexOf("on") === -1) {
            circle.classList.remove("off");
            circle.classList.add("on");
        } else {
            circle.classList.remove("on");
            circle.classList.add("off");
        }
    });
};