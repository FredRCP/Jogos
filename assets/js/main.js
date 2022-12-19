
function iniciarjogo(){
        window.location.reload(false);

        const jogadorazul= prompt('nome do jogador azul') || 'Sem jogador';
        const jogadorverde= prompt('nome do jogador verde') || 'Sem jogador';
        const jogadorvermelho= prompt('nome do jogador vermelho') || 'Sem jogador';
        const jogadoramarelo= prompt('nome do jogador amarelo') || 'Sem jogador';
        document.querySelector('#jogador-azul').innerHTML= jogadorazul;
        document.querySelector('#jogador-verde').innerHTML= jogadorverde;
        document.querySelector('#jogador-vermelho').innerHTML= jogadorvermelho;
        document.querySelector('#jogador-amarelo').innerHTML= jogadoramarelo; 
        retornarpecas();
        let i=1;
        let iazul=0;
        let iverde=0;
        let ivermelho=0;
        let iamarelo=0;

}

// rolagem dos dados

let contagem=0;
function rolardado(){
    audiodado.play();
    const dado= Math.floor(Math.random()*6+1);
    setTimeout( ()=>document.querySelector('#resultado').innerHTML=dado, 1500);     
    const dadinho= document.querySelector('.dado');
    dadinho.classList.add('dado1');

    setTimeout(()=>{
    switch(dado){

        case 1: dadinho.style.backgroundImage="url('./assets/img/face1.jpg')"; andarpeao(1); 
        break;

        case 2: dadinho.style.backgroundImage="url('./assets/img/face2.jpg')"; andarpeao(2);
        break;

        case 3: dadinho.style.backgroundImage="url('./assets/img/face3.jpg')"; andarpeao(3);
        break;

        case 4: dadinho.style.backgroundImage="url('./assets/img/face4.jpg')"; andarpeao(4);
        break;

        case 5: dadinho.style.backgroundImage="url('./assets/img/face5.jpg')"; andarpeao(5);
        break;
        
        case 6: dadinho.style.backgroundImage="url('./assets/img/face6.jpg')";
        contagem++;
        if(contagem>3) {contagem=0; return alert('passar a vez para o próximo jogador')};
        document.addEventListener('click', function(e){
            const el= e.target;
            if(el.classList.contains('sair')){
                el.classList.add('semdisplay');
                sairpeca(el);  } 
            });
        andarpeao(6);
        break;
    };setTimeout(()=>document.querySelector('.dado').style.backgroundImage="url('./assets/img/dadao.jpg')", 3500);
    }, 1600);
    
    setTimeout(()=>dadinho.classList.remove('dado1'), 2000);
}

// movimentar as peças

function andarpeao(cor, numero){

        document.addEventListener('click', function(el){
                


                switch (cor) {
                        case 'azul': console.log(numero);
                        break;
                
                        case 'verde': console.log(numero);
                        break;
        
                        case 'vermelho': console.log(numero);
                        break;
        
                        case 'amarelo': console.log(numero);
                        break; 
                
                }
                jogazul.play();

        })
        
}

//tirar peça da casa

function sairpeca(el){
    const setaazul=document.querySelector('.seta-azul');
                const setaamarela=document.querySelector('.seta-amarela');
                const setaverde=document.querySelector('.seta-verde');
                const setavermelha=document.querySelector('.seta-vermelha');
                //setaazul
                if(el.classList.contains('a1')){
                        setaazul.style.backgroundImage="url('./assets/img/peaoazul.jpg')";    
                }
                if(el.classList.contains('a2')){
                        setaazul.style.backgroundImage="url('./assets/img/peaoazul.jpg')";    
                }
                if(el.classList.contains('a3')){
                        setaazul.style.backgroundImage="url('./assets/img/peaoazul.jpg')";    
                }
                if(el.classList.contains('a4')){
                        setaazul.style.backgroundImage="url('./assets/img/peaoazul.jpg')";    
                } 
                //setaamarela
                if(el.classList.contains('am1')){
                        setaamarela.style.backgroundImage="url('./assets/img/peaoamarelo.jpg')";    
                }
                if(el.classList.contains('am2')){
                        setaamarela.style.backgroundImage="url('./assets/img/peaoamarelo.jpg')";    
                }
                if(el.classList.contains('am3')){
                        setaamarela.style.backgroundImage="url('./assets/img/peaoamarelo.jpg')";    
                }
                if(el.classList.contains('am4')){
                        setaamarela.style.backgroundImage="url('./assets/img/peaoamarelo.jpg')";    
                } 
                //setaverde
                if(el.classList.contains('v1')){
                        setaverde.style.backgroundImage="url('./assets/img/peaoverde.jpg')";    
                }
                if(el.classList.contains('v2')){
                        setaverde.style.backgroundImage="url('./assets/img/peaoverde.jpg')";    
                }
                if(el.classList.contains('v3')){
                        setaverde.style.backgroundImage="url('./assets/img/peaoverde.jpg')";    
                }
                if(el.classList.contains('v4')){
                        setaverde.style.backgroundImage="url('./assets/img/peaoverde.jpg')";    
                } 
                //setavermelha
                if(el.classList.contains('vm1')){
                        setavermelha.style.backgroundImage="url('./assets/img/peaovermelho.jpg')";    
                }
                if(el.classList.contains('vm2')){
                        setavermelha.style.backgroundImage="url('./assets/img/peaovermelho.jpg')";    
                }
                if(el.classList.contains('vm3')){
                        setavermelha.style.backgroundImage="url('./assets/img/peaovermelho.jpg')";    
                }
                if(el.classList.contains('vm4')){
                        setavermelha.style.backgroundImage="url('./assets/img/peaovermelho.jpg')";    
                } 

}


function retornarpecas(){
        //azul
        const imagema1= document.querySelector('.a1');
        imagema1.classList.remove('semdisplay');
        const imagema2= document.querySelector('.a2');
        imagema2.classList.remove('semdisplay');
        const imagema3= document.querySelector('.a3');
        imagema3.classList.remove('semdisplay');
        const imagema4= document.querySelector('.a4');
        imagema4.classList.remove('semdisplay');
        //verde
        const imagemav1= document.querySelector('.v1');
        imagemav1.classList.remove('semdisplay');
        const imagemav2= document.querySelector('.v2');
        imagemav2.classList.remove('semdisplay');
        const imagemav3= document.querySelector('.v3');
        imagemav3.classList.remove('semdisplay');
        const imagemav4= document.querySelector('.v4');
        imagemav4.classList.remove('semdisplay');
        //amarelo
        const imagemam1= document.querySelector('.am1');
        imagemam1.classList.remove('semdisplay');
        const imagemam2= document.querySelector('.am2');
        imagemam2.classList.remove('semdisplay');
        const imagemam3= document.querySelector('.am3');
        imagemam3.classList.remove('semdisplay');
        const imagemam4= document.querySelector('.am4');
        imagemam4.classList.remove('semdisplay');
        //vermelho
        const imagemavm1= document.querySelector('.vm1');
        imagemavm1.classList.remove('semdisplay');
        const imagemavm2= document.querySelector('.vm2');
        imagemavm2.classList.remove('semdisplay');
        const imagemavm3= document.querySelector('.vm3');
        imagemavm3.classList.remove('semdisplay');
        const imagemavm4= document.querySelector('.vm4');
        imagemavm4.classList.remove('semdisplay');
    }

//criação dos áudios

const audiodado = new Audio('./assets/sound/dice.wav');
const audiopeao= new Audio('./assets/sound/dice.wav');
const jogazul = new Audio('./assets/sound/jazul.mp3');
const jogverde= new Audio('./assets/sound/jverde.mp3');
const jogvermelho = new Audio('./assets/sound/jvermelho.mp3');
const jogamarelo= new Audio('./assets/sound/jamarelo.mp3');

