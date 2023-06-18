let sports = [
    {
        img: `messi.jpg`,
        fristname: "Lionel",
        lastname: "Messi",
        age: "25",
        country: "Argentina",
    },
    {
        img: `ronaldo.jpg`,
        fristname: `Cristiano`,
        lastname: `Ronaldo`,
        age: `27`,
        country: `Portugal`,
    },
    {
        img: `silva.jpg`,
        fristname: `David`,
        lastname: `Silva`,
        age: `26`,
        country: `Spain`,
    },
    {
        img: `toure.jpg`,
        fristname: `Yaya`,
        lastname: `Toure`,
        age: `25`,
        country: `Ivory Coast`,
    },
    {
        img: `buffon.jpg`,
        fristname: `Gianluigi `,
        lastname: `Buffon`,
        age: `34`,
        country: `italy`,
    },
];
let img = document.querySelector(".img");
let name = document.querySelector(".name");
let age = document.querySelector(".age");
let country = document.querySelector(".country");
let btn = document.querySelector("#btn");

btn.addEventListener('click', () => {

    let randomNumber = Math.floor(Math.random() * sports.length);
    img.src = sports[randomNumber].img;
    name.innerText = `name: ${sports[randomNumber].fristname} ${sports[randomNumber].lastname}`;
    age.innerText = `age: ${sports[randomNumber].age} `;
    country.innerText = `country: ${sports[randomNumber].country}`;
});