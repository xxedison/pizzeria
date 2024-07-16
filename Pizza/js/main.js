let currentSlide = 1;

function changeSlide() {
    // Toggle the slide visibility
    const slide1 = document.getElementById('slide1');
    const slide2 = document.getElementById('slide2');

    if (currentSlide === 1) {
        slide1.style.opacity = 0;
        slide2.style.opacity = 1;
        currentSlide = 2;
    } else {
        slide1.style.opacity = 1;
        slide2.style.opacity = 0;
        currentSlide = 1;
    }
}

// Change slide every 3 seconds (3000 milliseconds)
setInterval(changeSlide, 4000);







function goToProducts() {
    window.location.href = 'products.html'; /* Redirect on click */
}




const sendMessageButton = document.getElementById("send-message-button");

// Add an event listener for the click event
sendMessageButton.addEventListener("click", function() {
    alert("Thanks for contacting us!");
});

