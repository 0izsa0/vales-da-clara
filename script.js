//=====================================================
// CONFIGURAÇÕES
//=====================================================

//------------------------------
// Variáveis Globais
//------------------------------

let starsCompleted = JSON.parse(
    localStorage.getItem("starsCompleted")
) || [];

//------------------------------
// Constantes
//------------------------------

const TOTAL_STARS = 10;

const REQUIRED_STARS = 9;

const FINAL_PASSWORD = "PRA SEMPRE A GENTE";

//------------------------------
// Configurações do Projeto
//------------------------------

const BACKGROUND_STAR_COUNT = 180;

const SHOOTING_STAR_INTERVAL = 6000;

const NEBULA_COUNT = 3;

const PARTICLE_COUNT = 40;

const STAR_APPEAR_DELAY = 250;

const FINAL_ANIMATION_DURATION = 7000;

//=====================================================
// INICIALIZAÇÃO
//=====================================================

//------------------------------
// Inicialização Geral
//------------------------------

emailjs.init("3j9YbpfJGlCcMlj46");

window.onload = function(){

    initializeProject();

};

//------------------------------
// Inicialização do Projeto
//------------------------------

function initializeProject(){

      createBackgroundStars();
      
      createNebulas();
      
      createParticles();
      
      createShootingStars();

      createBrightStars();

}

//------------------------------
// Eventos Globais
//------------------------------

//=====================================================
// DADOS DAS ESTRELAS
//=====================================================

const starData = {

1:{
    nome:"Estrela Nº 1",
    subtitulo:"PIERCING",
    texto:`VOCÊ GANHOU UMA PERFURAÇÃO GRATUITA.<br>
    Quero realizar uma das suas muitas vontades e te dar essa perfuração de presente, porque sei o quanto que você ta com vontade de fazer ela.<br><br>

(REQUER NO MINIMO 1 SEMANA DE ESPERA PARA A REALIZAÇÃO DESTE EVENTO)`
},

2:{
    nome:"Estrela Nº 2",
    subtitulo:"ARTE",
    texto:`Uma arte exclusiva feita por mim, pra você.<br>

Você pode escolher qual o tipo de arte e eu faço o meu melhor pra te impressionar.<br><br>

(APÓS A ESCOLHA DESSE PRESENTE, PRECISO DE NO MINIMO 2 SEMANAS PARA ENTREGAR O PRESENTE)`
},

3:{
    nome:"Estrela Nº 3",
    subtitulo:"CAFÉZUXO",
    texto:`Vamos reservar um dia para tomar um cafezão juntos, conversar sobre tudo o que normalmente a gente não consegue, rir e simplesmente aproveitar o momento.<br><br>

(REQUER NO MINIMO 1 SEMANA DE ESPERA PARA A REALIZAÇÃO DESTE EVENTO)`
},

4:{
    nome:"Estrela Nº 4",
    subtitulo:"SESSÃO DE MASSAGEM",
    texto:`Uma massagem feita por mim, com todo o amor e carinho, para você relaxar e esquecer um pouquinho de todo o estresse.<br><br>

Duração mínima de 30 minutos.`
},

5:{
    nome:"Estrela Nº 5",
    subtitulo:"VOCÊ (AINDA) NÃO SABE DE NADA",
    texto:`INGRESSO PRO SHOW DO O GRILO DO DIA 09/08 - 19h COM O SEU NAMORADO.`

},

6:{
    nome:"Estrela Nº 6",
    subtitulo:"PASSEIO SURPRESA",
    texto:`A gente escolhe a data, eu te falo o dress code e você só fica sabendo disso.<br>

O destino fica por minha conta sem spoiler nenhum.<br><br>

(REQUER NO MINIMO 1 SEMANA DE ESPERA PARA A REALIZAÇÃO DESTE EVENTO)`
},

7:{
    nome:"Estrela Nº 7",
    subtitulo:"DOCINHOS",
    texto:`Hoje a sobremesa é por minha conta.<br>
    Você escolhe o doce e eu preparo pra você.`
},

8:{
    nome:"Estrela Nº 8",
    subtitulo:"VOCÊ DECIDE",
    texto:`Hoje quem manda é você.<br>
    Você escolhe a programação do dia, e eu topo, independente do que seja.`
},

9:{
    nome:"Estrela Nº 9",
    subtitulo:"NOITE ESPECIAL",
    texto:`Uma noite pensada pra gente se aproveitar sem nenhuma interrupção, sem dores de cabeça, só eu e você.<br><br>

(REQUER NO MINIMO 1 SEMANA DE ESPERA PARA A REALIZAÇÃO DESTE EVENTO E ESCOLHA DE UMA DATA COM TEMPO DE SOBRA)`
},

10:{
    nome:"Estrela Nº 10",
    subtitulo:"A ÚLTIMA ESTRELA",
    texto:`Esta estrela guarda uma surpresa.<br><br>

Você só vai descobrir quando decidir fazê-la brilhar.`
}

};

//=====================================================
// TELA INICIAL
//=====================================================

//------------------------------
// Carta Inicial
//------------------------------

function startJourney(){

    document.getElementById("app").innerHTML = `
   
    <section class="screen letter-screen">
    
        <h1>
            💌 Carta pro meu amor 💌
        </h1>

        <div class="letter-text">
        
<p>
Oi meu grande amor!
</p>

<p>
Queria te presentear com algo diferente, por isso resolvi criar esse pequeno universo só pra você.
</p>

<p>
Você já sabe que eu digo que você é a minha estrela... mas acho que nunca consegui explicar completamente o porquê.
</p>

<p>
Você me guia como a Estrela Polar.<br>
Você ilumina meus dias como o Sol.<br>
Você realiza meus sonhos como uma estrela cadente.<br>
E faz meu coração brilhar como uma supernova.
</p>

<p>
Cada estrela desse céu guarda um momento que eu quero viver ao seu lado.
Alguns são simples.
Outros especiais.
Mas todos representam um pedacinho do amor que sinto por você.
</p>

<p>
Você pode escolher qualquer estrela.
Se ainda não quiser viver aquele momento, basta voltar e escolher outra.
</p>

<p>
Quando decidir resgatar um presente, aquela estrela passará a fazer parte da nossa constelação.
</p>

<p>
E quando todas estiverem brilhando...
espero que a gente possa olhar para trás e perceber quantas memórias lindas construímos juntos.
</p>

<p>
Feliz 1 ano e 4 meses, meu amor.<br>
Eu te amo infinitamente.
</p>

<p>
Com todo o meu amor,<br>
Isaac Schmitsler
</p>

</div>

        <button onclick="openSky()">

            ✨ Explorar o Céu ✨

        </button>

    </section>

    `;

    const screen = document.querySelector(".letter-screen");

     screen.classList.add("animate-in");

}

//------------------------------
// Navegação
//------------------------------

// (Reservado para futuras funções da tela inicial.)

//=====================================================
// CÉU
//=====================================================

//------------------------------
// Tela do Céu
//------------------------------

function openSky(){

    renderSky();

    createStars();

}

//------------------------------
// Renderização
//------------------------------

function renderSky(){

    document.getElementById("app").innerHTML = `

        <div id="sky">

            ${getConstellationProgress()}

            <h1 class="sky-title">

                Escolha a sua estrela

            </h1>

            <div id="star-grid"></div>

        </div>

    `;

}

//------------------------------
// Barra da Constelação
//------------------------------

function getConstellationProgress(){

    const total = 10;

    const completas = starsCompleted.length;

    let barra = "";

    for(let i = 1; i <= total; i++){

        barra += i <= completas ? "⭐" : "✩";

        if(i < total){

            barra += " ── ";

        }

    }

    const frases = [

        "Nossa história está começando...",

        "A primeira estrela começou a brilhar...",

        "Duas lembranças já iluminam nosso céu...",

        "Nossa constelação continua crescendo...",

        "Cada estrela representa um momento inesquecível...",

        "Metade da nossa constelação já brilha...",

        "O céu está ficando cada vez mais bonito...",

        "Quase lá...",

        "Falta muito pouco para completar nosso céu...",

        "Só falta uma estrela...",

        "✨ Nossa constelação está completa ✨"

    ];

    return `

        <div class="constellation-progress">

            <h2>

                ✨ Nossa Constelação ✨

            </h2>

            <p class="progress-stars">

                ${barra}

            </p>

            <p class="progress-text">

                ${frases[starsCompleted.length]}

            </p>

        </div>

    `;

}

//------------------------------
// Atualização
//------------------------------

// Espaço reservado para futuras funções
// responsáveis por atualizar o céu
// sem reconstruir toda a tela.

//=====================================================
// CONSTELAÇÃO
//=====================================================

//------------------------------
// Progresso
//------------------------------

function getCompletedStars(){

    return starsCompleted.length;

}

function getRemainingStars(){

    return TOTAL_STARS - getCompletedStars();

}

function isConstellationComplete(){

    return getCompletedStars() === TOTAL_STARS;

}

//------------------------------
// Desbloqueios
//------------------------------

function canUnlockFinalStar(){

    for(let i = 1; i <= REQUIRED_STARS; i++){

        if(!starsCompleted.includes(i)){

            return false;

        }

    }

    return true;

}

//------------------------------
// Utilidades
//------------------------------

function isStarCompleted(number){

    return starsCompleted.includes(number);

}

function saveConstellation(){

    localStorage.setItem(

        "starsCompleted",

        JSON.stringify(starsCompleted)

    );

}

//=====================================================
// ESTRELAS
//=====================================================


//------------------------------
// Criação das Estrelas
//------------------------------

function createStars(){

    const sky = document.getElementById("star-grid");

    if(!sky) return;

    for(let i = 1; i <= TOTAL_STARS; i++){

        const star = createStarElement(i);

        sky.appendChild(star);

    }

}

//------------------------------
// Criação do Elemento
//------------------------------

function createStarElement(number){

    const star = document.createElement("div");

    star.className = "star";

    star.innerHTML = `

        <span class="star-number">

            ${number}

        </span>

    `;

    applyStarSize(star, number);
    
    switch(number){

    case 1:
        star.classList.add("pos-top");
        break;

    case 2:
        star.classList.add("pos-right");
        break;

    case 3:
        star.classList.add("pos-top-right");
        break;

    case 4:
        star.classList.add("pos-left");
        break;

    case 5:
        star.classList.add("pos-top");
        break;

    case 6:
        star.classList.add("pos-right");
        break;

    case 7:
        star.classList.add("pos-bottom");
        break;

    case 8:
        star.classList.add("pos-right");
        break;

    case 9:
        star.classList.add("pos-top");
        break;

    case 10:
        star.classList.add("pos-bottom");
        break;

}
    
    applyStarPosition(star, number);

    applyStarState(star, number);

    applyStarAnimation(star);

   star.onclick = () => {

    animateClick(star);

    setTimeout(()=>{

        revealStar(number);

    },300);

};

    return star;

}



//------------------------------
// Tamanho
//------------------------------

function applyStarSize(star, number){

    let size = 35;

    // Estrelas principais
    if(number === 1 || number === 5 || number === 10){

        size = 60;

    }

    // Estrelas médias
    else if(number === 3 || number === 7){

        size = 40;

    }

    // Restante
    else{

        size = 20;

    }

    star.style.width = size + "px";

    star.style.height = size + "px";

}

//------------------------------
// Posição
//------------------------------

function applyStarPosition(star, number){

    const positions = {

    1:{x:50,y:10},

    2:{x:20,y:28},

    3:{x:80,y:22},

    4:{x:10,y:48},

    5:{x:40,y:40},

    6:{x:72,y:46},

    7:{x:24,y:70},

    8:{x:63,y:74},

    9:{x:88,y:60},

    10:{x:50,y:90}

};

    star.style.left = positions[number].x + "%";
    
    star.style.top = positions[number].y + "%";
}

//------------------------------
// Estado
//------------------------------

function applyStarState(star, number){

    if(isStarCompleted(number)){

        star.classList.add("completed");

    }

}

//------------------------------
// Animação
//------------------------------

function applyStarAnimation(star){

    star.style.animationDelay =

        (Math.random()*3).toFixed(2) + "s";

}

//------------------------------
// Revelação
//------------------------------

function revealStar(number){

    if(isStarCompleted(number)){

        alert(

`Essa estrela já faz parte da nossa constelação!

${starData[number].nome}

Esse momento já foi vivido.

Escolha outra estrela para uma nova surpresa.`

        );

        return;

    }

    if(!canRevealStar(number)){

    alert(

`Essa estrela ainda está te esperando...

Antes de descobrir o último presente,

viva todos os outros momentos primeiro.`

    );

    return;

}

    document.getElementById("app").innerHTML = `

        <section class="screen">

            <h1>

                ⭐ Estrela Nº ${number} ⭐

            </h1>

            <p>

                Você está prestes a descobrir

                um dos presentes que preparei

                para nós dois.

            </p>

            <button onclick="showGift(${number})">

                Revelar o Presente

            </button>

        </section>

    `;

}

//=====================================================
// PRESENTES
//=====================================================

//------------------------------
// Mostrar Presente
//------------------------------

function showGift(number){

    document.getElementById("app").innerHTML = `

        <section class="screen">

            <h1>

                🎁 ${starData[number].nome} 🎁

            </h1>

            <h2 class="gift-subtitle">

                ${starData[number].subtitulo}

            </h2>

            <p>

                ${starData[number].texto}

            </p>

            <div class="gift-buttons">

                <button onclick="redeemGift(${number})">

                    🎁 Resgatar este presente 🎁

                </button>

                <button onclick="openSky()">

                    ← Escolher outra estrela

                </button>

            </div>

        </section>

    `;

}

//------------------------------
// Resgatar Presente
//------------------------------

function redeemGift(number){

    if(!confirmGift(number)){

        return;

    }

    sendEmail(number)

    .then(()=>{

        completeGift(number);

    });

}

//------------------------------
// Confirmação
//------------------------------

function confirmGift(number){

    return confirm(

`Deseja resgatar:

${starData[number].nome}?

`

    );

}

//------------------------------
// Conclusão
//------------------------------

function completeGift(number){

    if(!starsCompleted.includes(number)){

    starsCompleted.push(number);

}

    saveConstellation();

    alert(

        `💌 Agora uma nova estrela passou a fazer parte da nossa constelação. 💌<br>
        ✨Esse momento agora vai estar escrito na nossa história. ✨`

    );

    finishJourney();

if(!hasFinishedJourney()){

    openSky();

}

}

//=====================================================
// EMAIL
//=====================================================

//------------------------------
// Envio
//------------------------------

function sendEmail(number){

    return emailjs.send(

        "service_gmfwimz",

        "template_itflzk9",

        {

            presente: starData[number].nome,

            mensagem: starData[number].texto,

            data: new Date().toLocaleString("pt-BR")

        }

    )

    .then(handleEmailSuccess)

    .catch(handleEmailError);

}

//------------------------------
// Sucesso
//------------------------------

function handleEmailSuccess(){

    console.log("Presente resgatado com sucesso.");

}

//------------------------------
// Erro
//------------------------------

function handleEmailError(error){

    console.error("ERRO COMPLETO:", error);

    alert(

        "⚠️ ERRO ⚠️ presente não registrado ⚠️ ERRO ⚠️"

    );

}

//=====================================================
// ANIMAÇÕES
//=====================================================

//------------------------------
// Estrelas de Fundo
//------------------------------

function createBackgroundStars(){

    document
        .querySelectorAll(".background-star")
        .forEach(star=>star.remove());

    const total = 220;

    for(let i=0;i<total;i++){

        const star = document.createElement("div");

        star.className="background-star";

        const random = Math.random();

        if(random>.92){

            star.classList.add("big");

        }

        else if(random>.70){

            star.classList.add("medium");

        }

        star.style.left=Math.random()*100+"vw";

        star.style.top=Math.random()*100+"vh";

        star.style.animationDuration=

            (2+Math.random()*5)+"s";

        star.style.animationDelay=

            (Math.random()*5)+"s";

        document.body.appendChild(star);

    }

}

createCosmicDust();

function createDeepStars(){

    const layer = document.createElement("div");

    layer.className = "deep-stars";

    document.body.appendChild(layer);

    for(let i=0;i<450;i++){

        const star = document.createElement("div");

        star.className="deep-star";

        star.style.left=Math.random()*100+"%";

        star.style.top=Math.random()*100+"%";

        layer.appendChild(star);

    }

}

//------------------------------
// Poeira Cósmica
//------------------------------

function createCosmicDust(){

    document
        .querySelector(".cosmic-dust")
        ?.remove();

    const dust = document.createElement("div");

    dust.className = "cosmic-dust";

    for(let i=0;i<180;i++){

        const particle = document.createElement("div");

        particle.className = "dust-particle";

        const random = Math.random();

        if(random>.94){

            particle.classList.add("big");

        }

        else if(random>.72){

            particle.classList.add("medium");

        }

        particle.style.left=Math.random()*100+"vw";

        particle.style.top=Math.random()*100+"vh";

        particle.style.animationDuration=

            (20+Math.random()*30)+"s";

        particle.style.animationDelay=

            (-Math.random()*40)+"s";

        dust.appendChild(particle);

    }

    document.body.appendChild(dust);

}

//------------------------------
// Estrelas Brilhantes
//------------------------------

function createBrightStars(){

    document

        .querySelector(".bright-stars")

        ?.remove();

    const layer = document.createElement("div");

    layer.className = "bright-stars";

    const positions=[

        [8,12],

        [20,32],

        [33,16],

        [47,58],

        [60,18],

        [76,36],

        [88,20],

        [14,74],

        [38,82],

        [58,72],

        [74,88],

        [90,64]

    ];

    positions.forEach(pos=>{

        const star=document.createElement("div");

        star.className="bright-star";

        const size=3+Math.random()*4;

        star.style.width=size+"px";

        star.style.height=size+"px";

        star.style.left=pos[0]+"%";

        star.style.top=pos[1]+"%";

        star.style.animationDuration=

            (3+Math.random()*5)+"s";

        star.style.animationDelay=

            (-Math.random()*6)+"s";

        layer.appendChild(star);

    });

    document.body.appendChild(layer);

}

function createBlurStars(){

    const layer=document.createElement("div");

    layer.className="blur-stars";

    document.body.appendChild(layer);

    for(let i=0;i<10;i++){

        const s=document.createElement("div");

        s.className="blur-star";

        s.style.left=Math.random()*100+"%";

        s.style.top=Math.random()*100+"%";

        layer.appendChild(s);

    }

}

function createSpaceFog(){

    const fog=document.createElement("div");

    fog.className="space-fog";

    document.body.appendChild(fog);

}

//------------------------------
// Nebulosas
//------------------------------

// createNebulas()

//------------------------------
// Estrelas Cadentes
//------------------------------

function createShootingStar(){

    const star=document.createElement("div");

    star.className="shooting-star";

    star.style.left=

        (60+Math.random()*40)+"vw";

    star.style.top=

        (5+Math.random()*25)+"vh";

    document.body.appendChild(star);

    setTimeout(()=>{

        star.remove();

    },2200);

}

function spawnShootingStar(){

    createShootingStar();

    if(Math.random() < 0.30){

        setTimeout(()=>{

            createShootingStar();

        },800 + Math.random()*1200);

    }

    const next =

        5000 + Math.random()*7000;

    setTimeout(

        spawnShootingStar,

        next

    );

}

//------------------------------
// Efeitos
//------------------------------

function animateClick(element){

    // Animação removida propositalmente.

}

//=====================================================
// DESBLOQUEIO FINAL
//=====================================================


//------------------------------
// Verificações
//------------------------------

function isFinalStar(number){

    return number === TOTAL_STARS;

}

function canRevealStar(number){

    if(!isFinalStar(number)){

        return true;

    }

    return canUnlockFinalStar();

}

function hasFinishedJourney(){

    return isConstellationComplete();

}

//------------------------------
// Fluxo Final
//------------------------------

function finishJourney(){

    if(!hasFinishedJourney()){

        return;

    }

    startFinalCinematic();

}

//=====================================================
// CINEMÁTICA FINAL
//=====================================================

//------------------------------
// Início
//------------------------------

function startFinalCinematic(){

    showFinalMessage();

}



//------------------------------
// Primeira Cena
//------------------------------

function showFinalMessage(){

    document.getElementById("app").innerHTML = `

        <section class="screen final-scene fade">

            <h1>

                ✨ Agora a nossa constelação está completa ✨

            </h1>

            <p>

                Cada estrela representou um momento pra gente se conectar cada vez mais,<br>

                Cada presente foi uma forma de dizer que<br>
                o amor que eu sinto por você explode barreiras e ultrapasa limites<br>

                Tudo isso só pra fazer você entender 0,1% do quanto você é importante para mim.

            </p>

        </section>

    `;

    setTimeout(showFinalThanks, 5000);

}



//------------------------------
// Segunda Cena
//------------------------------

function showFinalThanks(){

    document.getElementById("app").innerHTML = `

        <section class="screen final-scene fade">

            <h1>

                Obrigado por querer viver tudo isso comigo,<br>
                cada dia que a gente passa junto eu me torno melhor<br>
                e mais feliz por viver ao seu lado!

            </h1>

            <p>

                Mas ainda existe uma última "surpresa"

                que eu preciso te mostrar...

            </p>

        </section>

    `;

    setTimeout(openFinalLetter, 5000);

}

//=====================================================
// CARTA FINAL
//=====================================================


//------------------------------
// Carta
//------------------------------

function openFinalLetter(){

    document.getElementById("app").innerHTML = `

        <section class="screen final-letter fade">

            <h1>

                Carta pro amor da mina vida

            </h1>

            <div class="letter-text">

                <p>

                    Depois de cada estrela...

                    Depois de cada presente...

                    Depois de cada momento ao seulado...

                </p>

                <p>

                    Eu espero que você tenha sentido ao menos

                    um pouquinho do quanto que eu te amo e que tenha ciência
                    
                    do quanto que você é importante para mim.

                </p>

                <p>

                    Obrigado por querer fazer parte da minha vida.

                    Obrigado por cada momento lindo ao seu lado,

                    Obrigado por cada cada conversa sobre o futuro,

                    Obrigado por cada cada ato de carinho e afeto,

                    Obrigado por demosntrar que me ama sempre.

                </p>

                <p>

                    Eu escolheria viver tudo isso novamente com você mais 1

                    mais 2.

                    mais 4.

                    mais 8.

                    mais infinitas vezes.

                </p>

                <p>

                    Você é o meu lugar favorito, você é o meu lar.

                </p>

            </div>

            <button onclick="openMemories()">

                ✨ Continuar ✨

            </button>

        </section>

    `;

}

