$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
let clicked;
let playerone;
let playertwo;
startgame=()=>{
document.getElementById('startgame').style.display="none";
document.getElementById('devhome').style.display="none";
document.getElementById('gamer1').style.display="inherit";
document.getElementById('gamer2').style.display="inherit";
document.getElementById('letsgo').style.display="inherit";
};
letsgo=()=>{
  playerone=document.getElementById('gamer1').value;
  if(playerone == ""){
    playerone="player1";
    console.log(playerone);
  }
   playertwo=document.getElementById('gamer2').value;
  if(playertwo ==""){
    playertwo="player2";
}
  document.getElementById('land').style.display="none";
  document.getElementById('name1').innerHTML=`${playerone}`;
  document.getElementById('name2').innerHTML=`${playertwo}`;
  document.getElementById('gamebar').style.display="inherit";
};
const pokemon=["venusaur","slowbro","vaporeon","exeggutor","blastoise","arcanine","lapras","snorlax","dragonite"];
let score1;
let score2;
//to generate random pokemon
function again(){
    let randompoke=Math.random();
    let pokemonlength=pokemon.length;
    let randindex=Math.floor(randompoke*pokemonlength);
    return randindex;
}
//player 1
let findpoke1=()=>{
    clicked="true";        
    document.getElementById('player1').style.display="none";
    document.getElementById('input').style.display="none";
    let index1= again();
    console.log(index1);
    let image=document.getElementById('result1');
    let strength=document.getElementById('input');
    console.log(strength.value);    
    let url=`https://pokeapi.co/api/v2/pokemon/${pokemon[index1]}/`;
    fetch(url)
    .then(resp=>{
        return (resp.json());
        console.log("get response");
    })
    .then(json=>{
        console.log(json);
        console.log("ability");
         let name=json.abilities[0].ability.name;
         console.log(name);
        console.log("weight");
         let heavy=json.weight;    
         console.log(heavy);
         console.log("image") ;
         let imgurl=json.sprites.front_default;
         image.src=imgurl;
         let powervalue1=json.stats[strength.value].base_stat;
         let powername1=json.stats[strength.value].stat.name;
         document.getElementById('bet').innerHTML=`${powername1}`;
         console.log(powername1);
         console.log(powervalue1); 
         document.getElementById('respname').innerHTML=`<h3>${pokemon[index1]}</h3`;
         document.getElementById('respvalue').innerHTML=`<h3>SCORE<br>${powervalue1}</h3>`;
         document.getElementById('stats1').style.display="inherit";
         score1=powervalue1;
        
    })


}; 
//player2
let findpoke2=()=>{
    if(clicked==null){
        console.log(playerone);
        document.getElementById('three').innerHTML=`<h2 id="ree">Its ${playerone} turn</h2>`;
    }
    else{
    document.getElementById('player2').style.display="none";
    let index2= again();
    let randompoke=Math.random();
    let pokemonlength=pokemon.length;
    let randindex=Math.floor(randompoke*pokemonlength);
    let image=document.getElementById('result2');
    let strength=document.getElementById('input');
    console.log(strength.value);    
    let url=`https://pokeapi.co/api/v2/pokemon/${pokemon[index2]}/`;
    fetch(url)
    .then(resp=>{
        return (resp.json());
        console.log("get response");
    })
    .then(json=>{
        console.log(json);
        console.log("ability");
         let name=json.abilities[0].ability.name;
         console.log(name);
         console.log("weight");
         let heavy=json.weight;    
         console.log(heavy);
         console.log("image") ;
         let imgurl=json.sprites.front_default;
         image.src=imgurl;
         let powername2=json.stats[strength.value].stat.name;
         let powervalue2=json.stats[strength.value].base_stat;
         console.log(powervalue2);
         console.log(powername2);
         document.getElementById('respname1').innerHTML=`<h3>${pokemon[index2]}</h3`;
         document.getElementById('respvalue1').innerHTML=`<h3>SCORE<br>${powervalue2}</h3>`;
         document.getElementById('stats2').style.display="inherit";
         score2=powervalue2;
         if(score1==score2){
             let win = "DRAW";
             document.getElementById('three').innerHTML=`<h2 id="ree">GAME ${win}</h2><br><button type="button" class="btn btn-success" onclick="reload()">PLAY AGAIN</button>`;
         }
         else{
         let win =score1<score2?`${playertwo} WINS`:`${playerone} WINS`;
         document.getElementById('three').innerHTML=`<h2 id="ree"> ${win}</h2><br><button type="button" class="btn btn-success" onclick="reload()">PLAY AGAIN</button>`;
         console.log(win);
         }
         
    })
    
}};
function reload(){
    location.reload();
}

   

