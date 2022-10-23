const para = document.getElementById('jokebody')
const btn = document.getElementById('btn')

const jokes = () =>{
    fetch('https://v2.jokeapi.dev/joke/Dark,Pun,Spooky?type=single')
    .then(response => response.json())
    .then(json => 
        para.innerText = json.joke)
}

jokes()

btn.onclick = () =>{
    jokes()
}