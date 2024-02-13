// -------------- Nav Bar -----------------
let sideMenu = document.querySelector("#sideMenu");

// ------------- Mode Changing variables----------
let mode = true; //dark mode

//  ------------About tab buttons ---------------
let tabLinks = document.querySelectorAll(".tab-links");
let tabContents = document.querySelectorAll(".tab-contents");

// -------------- Nav Bar -----------------
function openmenu () {
    sideMenu.style.right = "0";
}
function closemenu () {
    sideMenu.style.right = "-200px";
}

// --------------- Mode Changing function ---------------------
function changeMode () {
    
    //dark to light
    if(mode){
        document.querySelector("body").classList.remove("dark");
        document.querySelector("nav").classList.remove("dark");
        document.querySelector(".btn3").classList.remove("dark");     // mode button
        document.querySelector(".btn4").classList.remove("dark");     // see more button of project

        document.querySelector("body").classList.add("light");
        document.querySelector("nav").classList.add("light");
        document.querySelector(".btn3").classList.add("light");     // mode button
        document.querySelector(".btn4").classList.add("light");     // see more button of project
        
        document.querySelector(".btn3").innerHTML = "Dark Mode";

        mode = false;
    }
    else {
        document.querySelector("body").classList.remove("light");
        document.querySelector("nav").classList.remove("light")
        document.querySelector(".btn3").classList.remove("light");     // mode button
        document.querySelector(".btn4").classList.remove("light");     // see more button of project

        document.querySelector("body").classList.add("dark");
        document.querySelector("nav").classList.add("dark")
        document.querySelector(".btn3").classList.add("dark");     // mode button
        document.querySelector(".btn4").classList.add("dark");     // see more button of project
    
        document.querySelector(".btn3").innerHTML = "Light Mode";

        mode = true;
    }
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
