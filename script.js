const memeForm = document.getElementById("memeForm");
const memeContainer = document.getElementById("memeContainer");

memeForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const imageURL = document.getElementById("imageURL").value;
    const topText = document.getElementById("topText").value;
    const bottomText = document.getElementById("bottomText").value;

    createMeme(imageURL, topText, bottomText);

    // Clear form inputs
    memeForm.reset();
});

function createMeme(imageURL, topText, bottomText) {
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    const memeImage = document.createElement("img");
    memeImage.src = imageURL;
    memeDiv.appendChild(memeImage);

    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("top-text");
    topTextDiv.textContent = topText;
    memeDiv.appendChild(topTextDiv);

    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("bottom-text");
    bottomTextDiv.textContent = bottomText;
    memeDiv.appendChild(bottomTextDiv);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function () {
        memeContainer.removeChild(memeDiv);
    });
    memeDiv.appendChild(removeButton);

    memeContainer.appendChild(memeDiv);
}