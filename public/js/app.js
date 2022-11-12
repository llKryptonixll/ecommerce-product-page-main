// sidebar logic
const sidebar = document.getElementById("sidebar");

const openSidebar_button = document.getElementById("sidebar-toggle");
openSidebar_button.addEventListener("click", () => {
    openClose_sidebar("grid", "hidden");
});

const closeSidebar_button = document.getElementById("close-sidebar-button");
closeSidebar_button.addEventListener("click", () => {
    openClose_sidebar("hidden", "grid");
});

function openClose_sidebar (classAdd, classRemove){
    sidebar.classList.add(classAdd);
    sidebar.classList.remove(classRemove);
}