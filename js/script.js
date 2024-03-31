//SELECT Your Elements
var subTypeElement = document.querySelector("#subscription");
var subDurationElement = document.querySelector("#months");
var result = document.querySelector(".result");
var subType = "basic";
var subDuration = 1;

//CREATE change event listeners
subTypeElement.addEventListener("change", function (e) {
    subType = e.target.value;
    console.log(subType);
});

subDurationElement.addEventListener("change", function (e) {
    subDuration = Number(e.target.value);
    console.log(subDuration);
});