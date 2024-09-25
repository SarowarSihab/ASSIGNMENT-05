window.onload = function() {
    const currentPage = window.location.pathname.split("/").pop();
    const navButton = document.getElementById('navButton');

    if (currentPage === "blog.html") {
        navButton.innerText = "Home";
        navButton.href = "index.html";
    }
}
