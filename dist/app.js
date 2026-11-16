"use strict";
const dismiss = document.querySelector(".dismiss");
const connectBtn = document.querySelector("#connectBtn");
const addBtn = document.querySelector("#addBtn");
const navItems = document.querySelectorAll(".nav-item");
dismiss?.addEventListener("click", () => {
    document.querySelector(".connect-card")?.remove();
});
connectBtn?.addEventListener("click", () => {
    connectBtn.textContent = "Health Connect setup";
    window.alert("Connect Health Connect here to share your fitness data.");
});
addBtn?.addEventListener("click", () => {
    window.alert("Add activity");
});
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");
    });
});
