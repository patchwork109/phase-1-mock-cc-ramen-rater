const topContainer = document.querySelector('#ramen-menu');

fetch('http://localhost:3000/ramens')
  .then((response) => response.json())
  .then((ramensArray) => {

    ramensArray.forEach((ramenObject) => {
        renderTop(ramenObject);
    })
})

function renderTop (thatRamenObject) {
    const ramenImage = document.createElement('img');
    ramenImage.src = thatRamenObject.image;
    ramenImage.alt = thatRamenObject.name;
    topContainer.append(ramenImage);

    // We are able to give renderMain our ramenObject INSTEAD OF an event
    // This keeps our ramenObject in scope
    ramenImage.addEventListener('click', () => {
        renderMain(thatRamenObject)
    })
}

const imageElement = document.querySelector('.detail-image');
const nameElement = document.querySelector('.name');
const restaurantElement = document.querySelector('.restaurant');
const ratingElement = document.querySelector('#rating-display');
const commentElement = document.querySelector('#comment-display');

function renderMain(ourRamenObject) {
    imageElement.src = ourRamenObject.image;
    imageElement.alt = ourRamenObject.name;
    nameElement.textContent = ourRamenObject.name;
    restaurantElement.textContent = ourRamenObject.restaurant;
    ratingElement.textContent = ourRamenObject.rating;
    commentElement.textContent = ourRamenObject.comment;
}

const theForm = document.querySelector('#new-ramen');
theForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(e);
    
// Make a new ramen object like the ones in db json 
// For forms, we can use e.target.NAME FIELD.value to get the values 
// that users input on the form. 
const newRamenObject = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: e.target.rating.value,
    comment: e.target['new-comment'].value
    }
    console.log(newRamenObject);
    renderTop(newRamenObject);
    theForm.reset();
})

