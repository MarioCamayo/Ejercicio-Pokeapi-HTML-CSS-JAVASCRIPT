const container = document.querySelector(".container");
const API_URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 151; i++) {
  fetch(API_URL + i)
    .then((res) => res.json())
    .then((data) => createPokemon(data));
}

const createPokemon = (pokemon) => {
  const div = document.createElement("div");
  div.classList.add("pokemon");
  div.innerHTML = `
  <img src='${pokemon.sprites.other["official-artwork"].front_default}' alt='pokemon.name'>
  <p># ${pokemon.id}</p> 
  <p>${pokemon.name}</p> `;
  container.append(div);
};
