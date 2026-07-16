const starData = {

    1:{
        titulo:"Piercing",
        texto:"VOCÊ GANHOU UMA PERFURAÇÃO GRATUITA EBAAAA.<br><br>Quero realizar uma das suas vontades e te dar essa perfuração de presente porque sei que você está com muita vontade.<br><br><small>(Requer no mínimo 1 semana de espera para realização deste evento)</small>"
    },

    2:{
        titulo:"Arte",
        texto:"Uma arte exclusiva feita por mim, para você."
    },

    3:{
        titulo:"Momento Especial",
        texto:"Um momento preparado especialmente para nós dois."
    },

    4:{
        titulo:"Surpresa",
        texto:"Uma surpresa guardada com muito carinho."
    },

    5:{
        titulo:"Nosso Dia",
        texto:"Um dia inteiro dedicado para nós."
    },

    6:{
        titulo:"Experiência",
        texto:"Uma experiência para criar uma memória juntos."
    },

    7:{
        titulo:"Presente",
        texto:"Um presente escolhido pensando em você."
    },

    8:{
        titulo:"Aventura",
        texto:"Uma aventura para viver ao seu lado."
    },

    9:{
        titulo:"Memória",
        texto:"Uma lembrança que vamos guardar."
    },

    10:{
        titulo:"Especial",
        texto:"A última estrela antes da nossa constelação."
    }

};





window.onload = function(){

    createBackgroundStars();

    createShootingStars();

};






function startJourney(){

    document.getElementById("app").innerHTML = `

    <section class="screen">

        <h1>
        💌 Carta
        </h1>


            <p>

            Oi meu grande amor!
            Queria te presentear com algo diferente, 
            por isso fiz isso aqui pra você!<br><br>

            Meu grande amor, eu já te falei que você é uma estrela, né? Pois bem, 
            vou te explicar melhor o porquê: você me guia como a Estrela Polar,
            você me ilumina como o Sol, você realiza os meus desejos como uma estrela cadente, 
            você brilha como uma supernova eterna e faz com que o meu amor dure eternamente, 
            como a vida das anãs vermelhas. Você é a minha luz, você é o meu tudo. 
            Eu te amo demais e espero que você goste do presente.<br><br>

            Cada uma dessas estrelas guarda um presente pra você,
            para demonstrar um pouquinho do que eu quero viver ao seu lado.<br><br>

            Você pode abrir qualquer estrela, na ordem que quiser. Antes de fazer uma estrela brilhar,
            você vai descobrir qual momento ela guarda. Se você ainda não quiser esse momento, é só fechar e ver outra.<br><br>
            Quando você decidir que quer realizar o presente, a estrela passará a fazer parte da nossa constelação.
            Eu espero que, no fim de todas as estrelas, a gente tenha vivido momentos tão lindos quanto um céu todo estrelado.<br><br>
            
            Feliz 1 ano e 4 meses, amor! Eu te amo demais!<br><br>

            Com todo o meu amor,
            Isaac Schmitsler<br><br>

            </p>

 <button onclick="openSky()">
        ✨ Explorar o Céu
        </button>

    </section>

    `;

}


function openSky(){


document.getElementById("app").innerHTML = `


<div id="sky">


<h1 class="sky-title">

Escolha uma estrela ✨

</h1>


</div>


`;


createStars();


}






function createStars(){


const sky =
document.getElementById("sky");



for(let i=1;i<=10;i++){


let star =
document.createElement("div");



star.className="star";



star.style.left =
Math.random()*90+"%";



star.style.top =
Math.random()*80+"%";



let size =
Math.random()*25+15;



star.style.width=size+"px";

star.style.height=size+"px";



star.onclick=function(){

revealStar(i);

};



sky.appendChild(star);



}


}







function revealStar(number){


document.getElementById("app").innerHTML = `


<section class="screen">


<h1>

⭐ Estrela Nº ${number}

</h1>


<p>

Você está prestes a descobrir
um dos momentos que preparei
para nós dois.

</p>


<button onclick="showGift(${number})">

✨ Revelar o momento

</button>


</section>


`;


}







function showGift(number){


document.getElementById("app").innerHTML = `


<section class="screen">


<h1>

🎁 ${starData[number].titulo}

</h1>


<p>

${starData[number].texto}

</p>


<button onclick="openSky()">

← Escolher outra estrela

</button>


</section>


`;


}






function createBackgroundStars(){


const container =
document.getElementById("particles");


if(!container) return;



for(let i=0;i<150;i++){


let star =
document.createElement("div");


star.className="small-star";


star.style.left =
Math.random()*100+"%";


star.style.top =
Math.random()*100+"%";


let size =
Math.random()*3+1;


star.style.width=size+"px";

star.style.height=size+"px";


container.appendChild(star);


}


}






function createShootingStars(){


const container =
document.getElementById("shooting-stars");


if(!container) return;



setInterval(()=>{


let meteor =
document.createElement("div");


meteor.className="shooting-star";


meteor.style.top =
Math.random()*50+"%";


container.appendChild(meteor);



setTimeout(()=>{

meteor.remove();

},2000);



},7000);


}