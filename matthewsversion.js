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
//
// let zetsu = new Zetsu()
//
// .get("https://pokeapi.co/api/v2/pokemon/metagross/")
// .then((response) => {
//   let data =  response.data
//   let pokeName = document.getElementById("metagross-name")
//   let hp = document.getElementById("metagross-hp")
//   let attack = document.getElementById("metagross-attack")
//   let spattack = document.getElementById("metagross-spattack")
//   let defense = document.getElementById("metagross-defense")
//   let speed = document.getElementById("metagross-speed")
//   let abilities = document.getElementById("metagross-abilities")
//
//
//
//     let metagross = new Pokemon(
//         data.name,
//         data.stats[6].base_stat,
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//         data.stats[2].base_stat,
//         data.stats[1].base_stat,
//     )
//
//     data.abilities.forEach((item) => {
//         metagross.addAbility(item.ability.name)
//
//         abilities.innerHTML += item.ability.name + ""
//     })
//
//     zetsu.add(metagross)
//     pokeName.innerHTML = metagross.name
//     hp.innerHTML = metagross.hp
//     attack.innerHTML = metagross.attack
//     spattack.innerHTML = metagross.spattack
//     defense.innerHTML = metagross.defense
//     spdefense.innerHTML = metagross.spdefense
//     speed.innerHTML = metagross.speed
//
// console.log(metagross);
// }).catch((error) => {
//     console.log(error)
//   })


//
//  axios.get("https://pokeapi.co/api/v2/pokemon/serperior/")
// .then((response) => {
//     let data =  response.data
//     let pokeName = document.getElementById("serperior-name")
//     let hp = document.getElementById("serperior-hp")
//     let attack = document.getElementById("serperior-attack")
//     let spattack = document.getElementById("serperior-spattack")
//     let defense = document.getElementById("serperior-defense")
//     let speed = document.getElementById("serperior-speed")
//     let abilities = document.getElementById("serperior-abilities")
//
//
//
//     let serperior = new Pokemon(
//         data.name,
//         data.stats[6].base_stat,
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//         data.stats[2].base_stat,
//         data.stats[1].base_stat,
//     )
//
//     data.abilities.forEach((item) => {
//         serperior.addAbility(item.ability.name)
//
//         abilities.innerHTML += item.ability.name + ", "
//     })
//
//     zetsu.add(serperior)
//     pokeName.innerHTML = serperior.name
//     hp.innerHTML = serperior.hp
//     attack.innerHTML = serperior.attack
//     spattack.innerHTML = serperior.spattack
//     defense.innerHTML = serperior.defense
//     spdefense.innerHTML = serperior.spdefense
//     speed.innerHTML = serperior.speed
//
// console.log(serperior);
// }).catch((error) => {
//     console.log(error)
//   })

//Nest ajax here somewhere here and in 3 other spots for 3 other pokemon
<!--
//
-->

// $
// function loadDoc() {
//   var xhttp = new XMLHttpRequest();
//   xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {


//      document.getElementById("demo").innerHTML = this.responseText;
//     }
//

  // };
//   xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ninetales/", true);
//   xhttp.send();
// }
//
//  replaceaxios.get("https://pokeapi.co/api/v2/pokemon/ninetales/")
// .then((response) => {
//   let data =  response.data
//   let pokeName = document.getElementById("ninetales-name")
//   let hp = document.getElementById("ninetales-hp")
//   let attack = document.getElementById("ninetales-attack")
//   let spattack = document.getElementById("ninetales-spattack")
//   let defense = document.getElementById("ninetales-defense")
//   let speed = document.getElementById("ninetales-speed")
//   let abilities = document.getElementById("ninetales-abilities")
//
//
//
//     let ninetales = new Pokemon(
//         data.name,
//         data.stats[6].base_stat,
//         data.stats[5].base_stat,
//         data.stats[4].base_stat,
//         data.stats[3].base_stat,
//         data.stats[2].base_stat,
//         data.stats[1].base_stat,
//
//     )
//
//     data.abilities.forEach((item) => {
//         ninetales.addAbility(item.ability.name)
//
//         abilities.innerHTML += item.ability.name + ", "
//     })
//
//     zetsu.add(ninetales)
//     pokeName.innerHTML = ninetales.name
//     hp.innerHTML = ninetales.hp
//     attack.innerHTML = ninetales.attack
//     spattack.innerHTML = ninetales.spattack
//     defense.innerHTML = ninetales.defense
//     spdefense.innerHTML = ninetales.spdefense
//     speed.innerHTML = ninetales.speed
//
// console.log(ninetales);
// }).catch((error) => {
//     console.log(error)
//   })



  // var myObj, i, j, x = "";
  // myObj = {
  //     "name":"White Zestu",
  //     "age":30,
  //     "moveSet": [
  //         { "name":"Metagross", "ability":"clear body", "moves":[ "Meteor Mash" ,"Bullet Punch" ,"Zen Headbut","Explosion" ] },
  //         { "name":"ninetales", "ability":"snow warning", "moves":[ "Blizzard", "Aurora Veil", "Moonblast", "Pain Split" ] },
  //         { "name":"Serperior", "ability":"contrary", "moves":[ "Dragon Pulse", "Giga Drain", "Leaf Storm","Glare" ] }
  //     ]
  // }
  //
  // for (i in myObj.moveSet) {
  //     x += "<h2>" + myObj.moveSet[i].name + "</h2>";
  //     for (j in myObj.moveSet[i].moves) {
  //         x += myObj.moveSet[i].moves[j] + "<br>";
  //     }
  // }
  //
  // document.getElementById("demo").innerHTML = x;
  // console.log(x);


 //
 //
 //  axios.get("https://pokeapi.co/api/v2/pokemon/serperior/")
 // .then((response) => {
 //     let data =  response.data
 //     let pokeName = document.getElementById("serperior-name")
 //     let hp = document.getElementById("serperior-hp")
 //     let attack = document.getElementById("serperior-attack")
 //     let spattack = document.getElementById("serperior-spattack")
 //     let defense = document.getElementById("serperior-defense")
 //     let speed = document.getElementById("serperior-speed")
 //     let abilities = document.getElementById("serperior-abilities")
 //
 //
 //
 //     let serperior = new Pokemon(
 //         data.name,
 //         data.stats[6].base_stat,
 //         data.stats[5].base_stat,
 //         data.stats[4].base_stat,
 //         data.stats[3].base_stat,
 //         data.stats[2].base_stat,
 //         data.stats[1].base_stat,
 //     )
 //
 //     data.abilities.forEach((item) => {
 //         serperior.addAbility(item.ability.name)
 //
 //         abilities.innerHTML += item.ability.name + ", "
 //     })
 //
 //     zetsu.add(serperior)
 //     pokeName.innerHTML = serperior.name
 //     hp.innerHTML = serperior.hp
 //     attack.innerHTML = serperior.attack
 //     spattack.innerHTML = serperior.spattack
 //     defense.innerHTML = serperior.defense
 //     spdefense.innerHTML = serperior.spdefense
 //     speed.innerHTML = serperior.speed
 //
 // console.log(serperior);
 // }).catch((error) => {
 //     console.log(error)
 //   })

 //Nest ajax here somewhere here and in 3 other spots for 3 other pokemon
 <!--
 //
 -->
 //
 // $
 // function loadDoc() {
 //   var xhttp = new XMLHttpRequest();
 //   xhttp.onreadystatechange = function() {
 //     if (this.readyState == 4 && this.status == 200) {
 //
 //
 //      document.getElementById("demo").innerHTML = this.responseText;
 //     }
 //
 //
 // };
 //   xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ninetales/", true);
 //   xhttp.send();
 // }
 //





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

          // data.abilities.forEach((item) => {
          //     ninetales.addAbility(item.ability.name)
          //
          //     abilities.innerHTML += item.ability.name + ", "
          // })

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




   //
   // let data =  response.data
   // let pokeName = document.getElementById("ninetales-name")
   // let hp = document.getElementById("ninetales-hp")
   // let attack = document.getElementById("ninetales-attack")
   // let spattack = document.getElementById("ninetales-spattack")
   // let defense = document.getElementById("ninetales-defense")
   // let speed = document.getElementById("ninetales-speed")
   // let abilities = document.getElementById("ninetales-abilities")
   //
   //
   //
   //   let ninetales = new Pokemon(
   //       data.name,
   //       data.stats[6].base_stat,
   //       data.stats[5].base_stat,
   //       data.stats[4].base_stat,
   //       data.stats[3].base_stat,
   //       data.stats[2].base_stat,
   //       data.stats[1].base_stat,
   //
   //   )
   //
   //   data.abilities.forEach((item) => {
   //       ninetales.addAbility(item.ability.name)
   //
   //       abilities.innerHTML += item.ability.name + ", "
   //   })

     // zetsu.add(ninetales)
     // pokeName.innerHTML = ninetales.name
     // hp.innerHTML = ninetales.hp
     // attack.innerHTML = ninetales.attack
     // spattack.innerHTML = ninetales.spattack
     // defense.innerHTML = ninetales.defense
     // spdefense.innerHTML = ninetales.spdefense
     // speed.innerHTML = ninetales.speed
