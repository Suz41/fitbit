"use strict";
// Interactive behaviors for Google Fit replica dashboard
const dismissBtn = document.querySelector(".dismiss-btn, .dismiss");
const connectBtn = document.querySelector("#connectBtn");
const addBtn = document.querySelector("#addBtn");
const navItems = document.querySelectorAll(".nav-item");
// Dismiss Health Connect card with smooth fade
dismissBtn?.addEventListener("click", () => {
    const card = document.querySelector(".connect-card");
    if (card) {
        card.style.transition = "opacity 0.25s ease, transform 0.25s ease";
        card.style.opacity = "0";
        card.style.transform = "translateY(-8px)";
        setTimeout(() => card.remove(), 250);
    }
});
// Health Connect setup action
connectBtn?.addEventListener("click", () => {
    connectBtn.textContent = "Health Connect setup";
    alert("Health Connect: Syncing fitness data with Google Fit.");
});
// FAB add activity action
addBtn?.addEventListener("click", () => {
    alert("Add Activity: Track workout, sleep, or vitals.");
});
// Bottom navigation tab switching
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        navItems.forEach((nav) => nav.classList.remove("active"));
        item.classList.add("active");
    });
});
