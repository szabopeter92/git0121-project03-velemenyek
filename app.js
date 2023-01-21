const reviews = [

    {
        name: "Teszt Elek",
        job: "Javascript fejlesztő",
        img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab sunt dignissimos nisi, blanditiis aperiam repudiandae hic mollitia voluptas, nobis repellendus tempora. Obcaecati repellat rem voluptas quis quia eligendi ipsum. Magni, odit exercitationem ea beatae repudiandae, nemo, porro cupiditate dolor assumenda quis voluptatum fugit odio itaque ratione possimus dolorem officiis? Nobis, dolores ratione odit nam nostrum eum ea ipsa animi facilis dolor fugiat modi officiis sapiente dignissimos sed cum deserunt neque assumenda expedita autem vero ex, quae distinctio sequi. Nostrum."
    },

    {
        name: "Török Bálint",
        job: "Java fejlesztő",
        img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab sunt dignissimos nisi, blanditiis aperiam repudiandae hic mollitia voluptas, nobis repellendus tempora. Obcaecati repellat rem voluptas quis quia eligendi ipsum. Magni, odit exercitationem ea beatae repudiandae, nemo, porro cupiditate dolor assumenda quis voluptatum fugit odio itaque ratione possimus dolorem officiis? Nobis, dolores ratione odit nam nostrum eum ea ipsa animi facilis dolor fugiat modi officiis sapiente dignissimos sed cum deserunt neque assumenda expedita autem vero ex, quae distinctio sequi. Nostrum."
    },

    {
        name: "Szent Endre",
        job: "Manuális tesztelő",
        img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab sunt dignissimos nisi, blanditiis aperiam repudiandae hic mollitia voluptas, nobis repellendus tempora. Obcaecati repellat rem voluptas quis quia eligendi ipsum. Magni, odit exercitationem ea beatae repudiandae, nemo, porro cupiditate dolor assumenda quis voluptatum fugit odio itaque ratione possimus dolorem officiis? Nobis, dolores ratione odit nam nostrum eum ea ipsa animi facilis dolor fugiat modi officiis sapiente dignissimos sed cum deserunt neque assumenda expedita autem vero ex, quae distinctio sequi. Nostrum."
    }

];

//Eltárolom változókba azokat a html elemeket, melyeket használni akarok
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("text");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

//Kiinduló pont felvétele -> ez fogja jelölni, hogy a tömbön belül melyik elem legyen a kezdő érték (melyik emberkét lássuk először)
let current = 0;

//Kiinduló elem (emberke) betöltése
window.addEventListener("load", () => {

    const item = reviews[current];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
})

//Írunk egy függvényt, amivel ki tudjuk választani a következő emberünket és a hozzá köthető adatokat (képe,név,állás,vélemény)
function showPerson(person){

    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.author;
    job.textContent = item.job;
    text.textContent = item.text;
}

//Gombnyomásra ugrojunk a következő emberkére
nextBtn.addEventListener("click", () => {

    //A kiinduló értéket növeljük 1-el -> lépünk egyet előre az objektumok között
    current++;

    if(current > reviews.length - 1){

        current = 0;
    }

    showPerson(current);
})

//Gombnyomásra ugrojunk vissza az előző emberkére
prevBtn.addEventListener("click", () => {

    current--;

    if(current < 0){

        current = reviews.length - 1;
    }

    showPerson(current)

})