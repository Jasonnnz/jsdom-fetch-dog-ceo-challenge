// console.log('%c HI', 'color: firebrick')
let breeds = [];

document.addEventListener("DOMContentLoaded", function(){ 
    images();
    breedOptions();
}); 

function images() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
        .then(response => response.json())
        .then(dogs => {
            const listOfDogs = dogs.message;
            listOfDogs.forEach(dog => {
                createImage(dog);
            })
        })
    }

function createImage(dogLink) {
    let dogImgDiv = document.querySelector('div#dog-image-container');
    let img = document.createElement('img');
    img.src = dogLink;
    dogImgDiv.append(img);
}

function breedOptions() {
    fetch("https://dog.ceo/api/breeds/list/all")
        .then(response => response.json()) 
        .then(data => {  //data = a Promise
            const hashOfDogBreeds = data.message; //hash
            breeds = Object.keys(hashOfDogBreeds);
            updateUl(breeds);
            breedListener();
        })
    }

//HELPER FUNCTIONS
function updateUl(breedList){
    let ulElem = document.querySelector('ul#dog-breeds');
    emptyUl(ulElem);
    breedList.forEach(breed => createLi(breed))
}

function emptyUl(ulElem){
    let child = ulElem.lastElementChild;
    while(child){
        ulElem.removeChild(child);
        child = ulElem.lastElementChild;
    }
}

function filter(letter){
    updateUl(breeds.filter(breed => breed.startsWith(letter)));
}

function breedListener() {
    let selection = document.querySelector('select#breed-dropdown');
    //CHALLENGE 4
    selection.addEventListener('change', function(e){
    // console.log(e.target.value) //only returning textContent of option
        filter(e.target.value);
    })
}

function createLi(breed) {
    let ulElem = document.querySelector('ul#dog-breeds');
    let li = document.createElement('li');
    li.textContent = breed 
    ulElem.append(li);
    // add li Event Listener
    li.addEventListener("click", function(e){
        e.target.style.color = "blue";
    })
}




// CHALLENGE 1


//CHALLENGE 2






