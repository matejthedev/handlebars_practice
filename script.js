(async function fillList() {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon-color/yellow"
    );
    const data = await response.json();
    const source = document.getElementById("pokemon-list").innerHTML;
    const template = Handlebars.compile(source);
    const context = {
      pokemon: data.pokemon_species.slice(0, 20),
      title: "Pokemons",
    };
    const html = template(context);
    console.log(html);

    document.getElementById("result").innerHTML = html;
  } catch (error) {
    console.log(error);
  }
})();
