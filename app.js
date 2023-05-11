// Tu códgigo aquí
const image = document.querySelector('img');
const jokeDIV = document.querySelector('#display-joke');
const button = document.querySelector('#get-joke');
button.addEventListener("click", function() {
    fetch("https://api.chucknorris.io/jokes/random")
    .then(response => response.json())
    .then(data => {
        jokeDIV.textContent = data.value;
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
})
