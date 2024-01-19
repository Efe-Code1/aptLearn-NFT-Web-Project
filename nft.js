// alert("NOTE: This is just a customized mockup-page of an NFT website created by Efe, and so any link clicked on this webpage directs you to the main NFT website");

// const sideBar = () => {

function sideBar() {
    const navlink = document.querySelector(".navlinks");
    navlink.classList.add("navlinkShow");
};

function closeSideBar() {
    const navlink = document.querySelector(".navlinks");
    navlink.classList.remove("navlinkShow");
};

function scrollBarLeft() {
    const move = document.querySelector(".section2Header");
    move.scrollBy(-300, 0);
};

function scrollBarRight() {
    // document.querySelector(".section2Header").scrollBy(300, 0);
    const move = document.querySelector(".section2Header");
    move.scrollBy(300, 0);
};

