console.log('linked');

class Pokemon{
    constructor(name,hp,attack,spattack,defense,spdefense,speed){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.spattack =spattack
        this.defense = defense
        this.spdefense = spdefense
        this.speed = speed
        this.abilities = []
    }

    addAbility(ability){
        this.abilities.push(ability)
    }
}



// individual class
class Zetsu{
    constructor(){
        this.pokemon = []
    }

//the all that is supposed to be declared for this project
    all(){
        return this.pokemon
    }

    add(pokemon){
        this.pokemon.push(pokemon)
    }

    get(pokemonName){
        for(i=0;i < this.all.length;i++){
            if (this.all[i].name === pokemonName){
                return this.all[i];
            }

}


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText)

        let pokeName = document.getElementById("ninetales-name")
        let hp = document.getElementById("ninetales-hp")
        let attack = document.getElementById("ninetales-attack")
        let spattack = document.getElementById("ninetales-spattack")
        let defense = document.getElementById("ninetales-defense")
        let speed = document.getElementById("ninetales-speed")
        let abilities = document.getElementById("ninetales-abilities")



          let ninetales = new Pokemon(
              myObj.name,
              myObj.stats[6].base_stat,
              myObj.stats[5].base_stat,
              myObj.stats[4].base_stat,
              myObj.stats[3].base_stat,
              myObj.stats[2].base_stat,
              myObj.stats[1].base_stat,

          )



          zetsu.add(ninetales)
          pokeName.innerHTML = ninetales.name
          hp.innerHTML = ninetales.hp
          attack.innerHTML = ninetales.attack
          spattack.innerHTML = ninetales.spattack
          defense.innerHTML = ninetales.defense
          spdefense.innerHTML = ninetales.spdefense
          speed.innerHTML = ninetales.speed
      }

      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ninetales/", true);
      xhttp.send();

    }
  };
