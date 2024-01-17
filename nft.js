// alert("NOTE: This is just a customized mockup-page of an NFT website created by Efe, and so any link clicked on this webpage directs you to the main NFT website");

// const sideBar = () => {
    function sideBar() {
    // console.log(event.target);
    const navlink = document.querySelector(".navlinks");
    navlink.classList.add("navlinkShow");
};

    function closeSideBar() {
    // console.log(event.target);
    const navlink = document.querySelector(".navlinks");
    navlink.classList.remove("navlinkShow");
};

// function sideBar() {
//     const yes =  document.getElementsByClassName("navlinks");
//     if (yes.className === "navlinks") {
//         yes.className += "navlinksShown";
//     } else{
//         yes.className = "navlinks;"
//     }
// }