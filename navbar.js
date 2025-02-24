document.addEventListener("DOMContentLoaded", function () {
    fetch("navbar.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("navbar-container").innerHTML = html;
            setupNavbar(); // Ensure login button works
        })
        .catch(error => console.error("Error loading navbar:", error));
});

function setupNavbar() {
    const loginBtn = document.getElementById("authBtn");
    if (loginBtn) {
        loginBtn.addEventListener("click", () => {
            const loginModal = document.getElementById("loginModal");
            if (loginModal) {
                loginModal.style.display = "block";
            } else {
                console.error("Login modal not found!");
            }
        });
    }
}