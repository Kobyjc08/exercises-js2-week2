let bluebutton = document.querySelector(".blueBtn")

function bluetheme() {
    let jumbotrom = docuemnt.querySelector("#jumbotron");
    jumbotrom.style.backgroundColor = "#588fbd";
    let donateBike = document.querySelector("#btn-primary");
    donateBike.style.backgroundColor = "#ffa500";
    let volunteer = document.querySelector("#btn-secondary");
}
bluebutton.addEventListener("click", bluetheme);
console.log(bluebutton)