let form = document.querySelector("form");
let select = document.querySelector("#rating");
let review = document.querySelector("#review");
let ul = document.querySelector(".list-group");


const saveReview = (e) => {
    e.preventDefault();
    let newReview = document.createElement("li");
    newReview.className = "list-group-item rounded-0";
    let ratingText = document.createElement("h1");
    ratingText.className = "display-3"
    let reviewText = document.createElement("h2");
    reviewText.className = "display-5"
    // ratingText.innerText = "Rating:" + select.value;
    // reviewText.innerText = "Review:" + review.value;
    ratingText.innerText = `Rating:${select.value}`;
    reviewText.innerText = `Review:${review.value}`;
    newReview.appendChild(ratingText);
    newReview.appendChild(reviewText);
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.className = "btn btn-sm btn-danger rounded-0 float-end";
    newReview.appendChild(delBtn);
    ul.appendChild(newReview);
    form.reset();
};

form.addEventListener("submit", saveReview);
ul.addEventListener("click", (e) => {
    if (e.target.className.includes("btn-danger")) {
        let li = e.target.parentElement;
        ul.removeChild(li);
    }
})


    // form.addEventListener("submit", saveReview);