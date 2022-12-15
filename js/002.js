// [002] Write a JavaScript program to copy a string to the clipboard.

const red = document.querySelector("#red").innerText;
const blue = document.querySelector("#blue").innerText;
const btn = document.querySelector(".btn");

const copyContent = async () => {
    try {
        await navigator.clipboard.writeText(red);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.log("failed to copy", err);
    }
}

btn.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(blue);
    }
    catch (err) {
        console.log("failed to copy", err);
    }
})
