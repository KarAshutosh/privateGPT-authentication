function showLoadingPopup() {
    var popup = document.getElementById("loading-popup");
    popup.style.display = "block";

    // Delay closing the popup for demonstration purposes (simulating a 5-minute wait)
    setTimeout(function() {
        popup.style.display = "none";
    }, 5000);
}

function closeLoadingPopup() {
    var popup = document.getElementById("loading-popup");
    popup.style.display = "none";
}
