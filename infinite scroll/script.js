const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');
let photoArray = [];
const img = document.createElement('img');


const count = 10;
const apiKey = 'API_KEY';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function displayPhoto() {
    photoArray.forEach((photo)=>{
        const item = document.createElement('a');
        item.setAttribute('href', photo.link.html);
        item.setAttribute('target' , '_blank');
        img.setAttribute('src' , photo.urls.regular);
        img.setAttribute('alt' , photo.alt_description);
        img.setAttribute('title' , photo.alt_description);
        
    })
}

async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        photoArray = await response.json();
        displayPhoto();
    } catch (error) {
        
    }
}
getPhotos();




