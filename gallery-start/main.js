const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const arrayImages = ['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg' ];

/* Declaring the alternative text for each image file */

const alts = {
    'pic1.jpg' : 'Closeup of a human eye',
    'pic2.jpg' : 'Rock that looks like a wave',
    'pic3.jpg' : 'Purple and white pansies',
    'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
    'pic5.jpg' : 'Large moth on a leaf'
}

/* Looping through images */

for (const arraysImages of arrayImages){
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${arraysImages}`);
    newImage.setAttribute('alt', alts[arraysImages]);
    thumbBar.appendChild(newImage);
    console.log(arraysImages);
    newImage.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
        console.log(e);
    })
}

/* Wiring up the Darken/Lighten button */

/* btn.addEventListener('click', ()=> {
    const nameButton = btn.getAttribute('class');
    console.log(nameButton);
    if(nameButton === 'dark'){
        btn.setAttribute('class','light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}) */
