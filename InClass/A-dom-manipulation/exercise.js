/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
console.log(document.querySelectorAll("p").length)
console.log(document.querySelector(".site-header"))
console.log(document.querySelector("#jumbotron-text"))
console.log(document.querySelectorAll(".primary-content p").length)
    /*
    Task 2
    ======

    When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
    */
let alertButton = document.querySelector("#alertBtn")
console.log(alertBtn)
alertButton.addEventListener("click", alertsomething)

function alertsomething() {
    alert("Thanks for visiting Bikes for Refugees!")
}


/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let colorButton = document.querySelector("#bgrChangeBtn")
colorButton.addEventListener("click", colorbackground)

function colorbackground() {
    let body = document.querySelector("body")
    body.style.backgroundColor = "yellow"
}

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let addSomeText = document.querySelector("#addTextBtn")
addSomeText.addEventListener("click", addNewParagraph)

function addNewParagraph() {
    let addParagraph = document.querySelector("#mainArticles")
    let paragraph = document.createElement("p")
    addParagraph.appendChild(paragraph)
    paragraph.innerText = "this is the new paragraph"
}


/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
/*
let largerButton = document.querySelector("#largerLinksBtn")
largerButton.addEventListener("click", makeLinksLarger)

function makeLinksLarger() {
    let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].style.fontSize = "30px"
    }
}
*/



let largerButton = document.querySelector("#largerLinksBtn")
largerButton.addEventListener("click", makeLinksLarger)

function makeLinksLarger() {
    let links = document.querySelectorAll("a");
    for (let i = 0; i < links.length; i++) {
        links[i].className = "biggerLinks"
    }
}