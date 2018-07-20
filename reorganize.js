console.log('linked');

class Pokemon{
    constructor(name,hp,attack,spattack,defense,spdefense,speed,ability){
        this.name = name
        this.hp = hp
        this.attack = attack
        this.defense = defense
        this.spattack = spattack
        this.spdefense = spdefense
        this.speed = speed
        this.ability = ability
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
        }
};
//Pokemon 1
function loadMetagross() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText)
        console.log(myObj);

        let pokeName = document.getElementById("metagross-name")
        let hp = document.getElementById("metagross-hp")
        let attack = document.getElementById("metagross-attack")
        let spattack = document.getElementById("metagross-spattack")
        let defense = document.getElementById("metagross-defense")
        let spdefense = document.getElementById("metagross-spdefense")
        let speed = document.getElementById("metagross-speed")
        let abilities = document.getElementById("metagross-abilities")



        let metagross = new Pokemon(
            this.name = myObj.name,
            this.hp = myObj.stats[5].base_stat,
            this.attack =  myObj.stats[4].base_stat,
            this.defense =  myObj.stats[3].base_stat,
            this.spattack =  myObj.stats[2].base_stat,
            this.spdefense =  myObj.stats[1].base_stat,
            this.speed =  myObj.stats[0].base_stat,
            this.ability = myObj.abilities[1].ability.name,

          )


          pokeName.innerHTML = metagross.name
          hp.innerHTML = metagross.hp
          attack.innerHTML = metagross.attack
          defense.innerHTML = metagross.defense
          spattack.innerHTML = metagross.spattack
          spdefense.innerHTML = metagross.spdefense
          speed.innerHTML = metagross.speed
          abilities.innerHTML = metagross.ability

      }
    }

      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/376/", true);
      xhttp.send();

  };
//Pokemon 2

  function loadSerperior() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var myObj = JSON.parse(this.responseText)
          console.log(myObj);

          let pokeName = document.getElementById("serperior-name")
          let hp = document.getElementById("serperior-hp")
          let attack = document.getElementById("serperior-attack")
          let spattack = document.getElementById("serperior-spattack")
          let defense = document.getElementById("serperior-defense")
          let spdefense = document.getElementById("serperior-spdefense")
          let speed = document.getElementById("serperior-speed")
          let abilities = document.getElementById("serperior-abilities")



          let serperior = new Pokemon(
              this.name = myObj.name,
              this.hp = myObj.stats[5].base_stat,
              this.attack =  myObj.stats[4].base_stat,
              this.defense =  myObj.stats[3].base_stat,
              this.spattack =  myObj.stats[2].base_stat,
              this.spdefense =  myObj.stats[1].base_stat,
              this.speed =  myObj.stats[0].base_stat,
              this.ability = myObj.abilities[0].ability.name,

            )

            pokeName.innerHTML = serperior.name
            hp.innerHTML = serperior.hp
            attack.innerHTML = serperior.attack
            defense.innerHTML = serperior.defense
            spattack.innerHTML = serperior.spattack
            spdefense.innerHTML = serperior.spdefense
            speed.innerHTML = serperior.speed
            abilities.innerHTML = serperior.ability


        }
      }

        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/497/", true);
        xhttp.send();

    };

//Pokemon 3
function loadNinetales() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText)
        console.log(myObj);

        let pokeName = document.getElementById("ninetales-name")
        let hp = document.getElementById("ninetales-hp")
        let attack = document.getElementById("ninetales-attack")
        let spattack = document.getElementById("ninetales-spattack")
        let defense = document.getElementById("ninetales-defense")
        let spdefense = document.getElementById("ninetales-spdefense")
        let speed = document.getElementById("ninetales-speed")
        let abilities = document.getElementById("ninetales-abilities")



        let ninetales = new Pokemon(
            this.name = myObj.name,
            this.hp = myObj.stats[5].base_stat,
            this.attack =  myObj.stats[4].base_stat,
            this.defense =  myObj.stats[3].base_stat,
            this.spattack =  myObj.stats[2].base_stat,
            this.spdefense =  myObj.stats[1].base_stat,
            this.speed =  myObj.stats[0].base_stat,
            this.ability = myObj.abilities[0].ability.name,

          )

          pokeName.innerHTML = ninetales.name
          hp.innerHTML = ninetales.hp
          attack.innerHTML = ninetales.attack
          defense.innerHTML = ninetales.defense
          spattack.innerHTML = ninetales.spattack
          spdefense.innerHTML = ninetales.spdefense
          speed.innerHTML = ninetales.speed
          abilities.innerHTML = ninetales.ability


      }
    }

      xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/38/", true);
      xhttp.send();

  };
