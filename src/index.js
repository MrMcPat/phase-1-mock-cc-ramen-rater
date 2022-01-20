// write your code here

const ramenImage = document.querySelector(".detail-image");
const ramenName = document.querySelector(".name");
const ramenRestaurant = document.querySelector(".restaurant");
const ramenRating = document.getElementById("rating-display");
const ramenComment = document.getElementById("comment-display");

function getRamen(){
    //fetches the data from json
    return fetch("http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => {
        const ramenMenu = document.getElementById("ramen-menu");
        //renders all images from json file to the menu on top
        data.forEach(ramen => {
            const ramenImg = document.createElement("img");
            ramenImg.setAttribute("id", ramen.id);
            ramenImg.src = ramen.image;
            ramenMenu.appendChild(ramenImg);

        })
        //change ramen info based on clicked img on top
        document.getElementById("ramen-menu").addEventListener("click", event => {
            const ramenImg = document.querySelectorAll("img");

            ramenImg.forEach(ramen => {
                if (event.target.id === ramen.id) {
                    ramenImage.src = data[ramen.id].image;
                    ramenName.textContent = data[ramen.id].name;
                    ramenRestaurant.textContent = data[ramen.id].restaurant;
                    ramenRating.textContent = data[ramen.id].rating;
                    ramenComment.textContent = data[ramen.id].comment
                }
            })
        })

        //new ramen form 
        document.getElementById("new-ramen").addEventListener("submit", event => {
            event.preventDefault();
            let newRamenObj = {
                name: event.target[0].value,
                restaurant: event.target[1].value,
                image: event.target[2].value,
                rating: event.target[3].value,
                comment: event.target[4].value
            }
            const ramenMenuImg = document.createElement("img");
            ramenMenuImg.src = newRamenObj.image;
            ramenMenu.appendChild(ramenMenuImg);

            ramenImage.src = newRamenObj.image;
            ramenName.textContent = newRamenObj.name;
            ramenRestaurant.textContent = newRamenObj.restaurant;
            ramenRating.textContent = newRamenObj.rating;
            ramenComment.textContent = newRamenObj.comment;
        })
    })
}



document.addEventListener("DOMContentLoaded", () => {
    getRamen();
})