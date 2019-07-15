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
            
            sun.classList.remove("visible");
            sun.classList.add("hidden");
            
            moon.classList.remove("hidden");
            moon.classList.add("visible");
            
            h1.classList.remove("true");
            h1.classList.add("false");
            
            h1.textContent = "Night";
        } else {
            circle.classList.remove("on");
            circle.classList.add("off");

			moon.classList.remove("visible");
            moon.classList.add("hidden");
            
            sun.classList.remove("hidden");
            sun.classList.add("visible");
            
            h1.classList.remove("false");
            h1.classList.add("true");
            
            h1.textContent = "Day";
        }
    });
};