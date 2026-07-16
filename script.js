function startJourney(){


    document.getElementById("app").innerHTML = `

    <section class="screen">

        <h1>
        💌 Uma carta pra você 💌
        </h1>


        <p>
        Oi meu grande amor!<br><br>
        Queria te presentear com algo diferente, por isso fiz isso aqui pra você!<br><br>

        Meu grande amor, eu já te falei que você é uma estrela, né?
        Pois bem, vou te explicar melhor o porquê:
        você me guia como a Estrela Polar, você me ilumina como o Sol,
        você realiza os meus desejos como uma estrela cadente,
        você brilha como uma supernova eterna e faz com que o meu amor dure eternamente,
        como a vida das anãs vermelhas. Você é a minha luz, você é o meu tudo.
        Eu te amo demais e espero que você goste do presente.<br><br>

        Cada uma dessas estrelas guarda um presente pra você, 
        para demonstrar um pouquinho do que eu quero viver ao seu lado.<br><br>

        Você pode abrir qualquer estrela, na ordem que quiser.
        Antes de fazer uma estrela brilhar, você vai descobrir qual momento ela guarda.
        Se você ainda não quiser esse momento, é só fechar e ver outra.<br><br>

        Quando você decidir que quer realizar o presente, a estrela passará a fazer parte da nossa constelação.
        Eu espero que, no fim de todas as estrelas, a gente tenha vivido momentos tão lindos quanto um céu todo estrelado.<br><br>
        
        Feliz 1 ano e 4 meses, amor! Eu te amo demais!<br><br>

        Com todo o meu amor,
        Isaac Schmitsler
        </p>


        <button onclick="openSky()">

        ✨ Explorar o Céu ✨

        </button>


    </section>

    `;


}



function openSky(){


document.getElementById("app").innerHTML = `


<section class="screen">

<h1>
🌌 Céu
</h1>


<p>
Escolha uma estrela...
</p>


<div id="stars"></div>


</section>


`;



createStars();



}



function createStars(){


let container =
document.getElementById("stars");



for(let i=1;i<=10;i++){


let star=document.createElement("button");


star.innerHTML="⭐ "+i;


star.onclick=function(){

alert(
"Você encontrou a estrela "+i+" ✨"
);

}



container.appendChild(star);


container.appendChild(
document.createElement("br")
);



}


}