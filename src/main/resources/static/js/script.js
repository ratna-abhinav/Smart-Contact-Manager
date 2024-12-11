console.log("Script loaded");

document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.querySelector("#theme_change_button");
    let currentTheme = getStoredTheme();

    applyTheme(currentTheme);
    themeToggleButton.addEventListener("click", toggleTheme);
});

function getStoredTheme() {
    return localStorage.getItem("theme") || "light";
}

function storeTheme(theme) {
    localStorage.setItem("theme", theme);
}

function applyTheme(theme) {
    document.documentElement.className = theme;
    storeTheme(theme);
    updateButtonLabel(theme);
}

function toggleTheme() {
    let currentTheme = document.documentElement.className;
    let newTheme = currentTheme === "dark" ? "light" : "dark";
    console.log(`Theme changed from ${currentTheme} to ${newTheme}`);
    applyTheme(newTheme);
}

function updateButtonLabel(theme) {
    const label = theme === "light" ? "Dark" : "Light";
    document.querySelector("#theme_change_button span").textContent = label;
}
