// -------------- Nav Bar -----------------
let sideMenu = document.querySelector("#sideMenu");

//  ------------About tab buttons ------------
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

// -------------- Nav Bar -----------------
function openmenu () {
    sideMenu.style.right = "0";
}
function closemenu () {
    sideMenu.style.right = "-200px";
}

// ------------ about tabs click functions ------------
function openTab (tabName){
    tabLinks.forEach((tabLink)=>{
        tabLink.classList.remove("active-tab");
    });
    tabContents.forEach((tabContent)=>{
        tabContent.classList.remove("active-tab");
    });

    event.currentTarget.classList.add("active-tab");
    document.getElementById(tabName).classList.add("active-tab");
}
