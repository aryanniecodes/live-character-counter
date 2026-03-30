const input = document.getElementById("text");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");

const maxLength = 100;

input.addEventListener("input", () => {
    // Trim first if exceeded
    if (input.value.length > maxLength) {
        input.value = input.value.substring(0, maxLength);
    }

    let textLength = input.value.length;

    // Update values AFTER trimming
    total.textContent = textLength;
    remaining.textContent = maxLength - textLength;

    // Optional color warning
    if (textLength > 80) {
        remaining.style.color = "#ff4d4d";
    } else {
        remaining.style.color = "#7c83ff";
    }
});