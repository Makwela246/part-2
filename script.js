// ============================
// WELCOME MESSAGE
// ============================
window.addEventListener("load", () => {
    setTimeout(() => {
        alert("Welcome to Donation Hub! Thank you for supporting our cause.");
    }, 1000);
});

// ============================
// DONATION CALCULATOR
// ============================
const buttons = document.querySelectorAll(".btnn");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        const quantity =
            button.parentElement.parentElement.querySelector("input");

        if (!quantity || quantity.value === "") {
            alert("Please enter a quantity.");
            return;
        }
    });
}
)



// ============================
// BACK TO TOP BUTTON
// ============================
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "15px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ============================
// DARK MODE
// ============================
const darkModeBtn = document.createElement("button");

darkModeBtn.innerHTML = "🌙";
darkModeBtn.style.position = "fixed";
darkModeBtn.style.bottom = "70px";
darkModeBtn.style.right = "20px";
darkModeBtn.style.padding = "15px";
darkModeBtn.style.cursor = "pointer";

document.body.appendChild(darkModeBtn);

darkModeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");
});

// ============================
// IMAGE POPUP
// ============================
document.querySelectorAll("img").forEach((img) => {

    img.addEventListener("click", () => {

        const popup = document.createElement("div");

        popup.style.position = "fixed";
        popup.style.top = "0";
        popup.style.left = "0";
        popup.style.width = "100%";
        popup.style.height = "100%";
        popup.style.background = "rgba(0,0,0,0.9)";
        popup.style.display = "flex";
        popup.style.justifyContent = "center";
        popup.style.alignItems = "center";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.width = "60%";
        image.style.height = "auto";

        popup.appendChild(image);

        popup.addEventListener("click", () => {
            popup.remove();
        });

        document.body.appendChild(popup);
    });
});

// ============================
// LIVE CLOCK
// ============================
const clock = document.createElement("div");

clock.style.position = "fixed";
clock.style.top = "50px";
clock.style.right = "20px";
clock.style.color = "white";
clock.style.fontWeight = "bold";

document.body.appendChild(clock);

setInterval(() => {

    const now = new Date();

    clock.innerHTML =
        now.toLocaleTimeString();

}, 1000);

// ============================
// PAGE FADE IN
// ============================
document.body.style.opacity = "0";

window.addEventListener("load", () => {

    document.body.style.transition =
        "opacity 1s";

    document.body.style.opacity = "1";
});
// ============================
// IMAGE SLIDER
// ============================

const sliderImage = document.getElementById("slider-image");

if (sliderImage) {

    const images = [
        "jersey.webp",
        "shoes.webp",
        "gloves.webp",
        "trouser.webp",
        "download.webp"
    ];

    let current = 0;

    setInterval(() => {

        current++;

        if (current >= images.length) {
            current = 0;
        }

        sliderImage.src = images[current];

    }, 3000);

}