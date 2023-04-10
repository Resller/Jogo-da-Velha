/// informações do jogo
    let board = {
        a1:'',a2:'',a3:'',
        b1:'',b2:'',b3:'',
        c1:'',c2:'',c3:''
    }
  
    let gamer = true
    let player = ''
    let winner = '----'
    
    
    
/// eventos

document.querySelectorAll('.item').forEach(item=>{
    item.addEventListener('click',upDateBoard)
})
document.querySelector('.reset').addEventListener('click',()=>{
    clear();
    playerGamer();
    upDateInfo ();
})

/// funções
function upDateBoard(event){
    let boardItem = event.target.getAttribute('data-item')
     if(gamer){
        if( board[boardItem] == ''){
            board[boardItem]= player;
            event.target.innerHTML = player
            turnPlayer();
            upDateInfo ();
            winnerChecker();
            draw();
        }
    }
}
function upDateInfo (){
    document.querySelector('.infocorpo.vez').innerHTML = player
    document.querySelector('.resultado').innerHTML = winner
}
function turnPlayer(){
    player = (player === 'x') ? 'o':'x'
}
function playerGamer(){
    let radom = Math.floor(Math.random()*2);
    player = (radom === 0) ? 'x':'o'
}
function clear(){
    let itens =document.querySelectorAll('.item') 
    for (let s in itens){
        itens[s].innerHTML = ''
    }
    for(let i in board){
        board[i] = ''
    }
    winner = '----'
    gamer = true
}
function rulesWinner(letter){
    let rules = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for(let r in rules){
       let newRules = rules[r].split(',');
       console.log(newRules)
       let winnerGamer = newRules.every(item=>board[item] === letter)
       if(winnerGamer) return true
    }
}

function winnerChecker(){
    if(rulesWinner('x')){
        document.querySelector('.resultado').innerHTML = ` 'X' vencedor` 
        gamer = false
    }else if (rulesWinner('o')){
        document.querySelector('.resultado').innerHTML = `'O' vencedor` 
        gamer = false
    }
}

function draw(){
    let drawGamer = true
    for(let d in board){
      if(board[d] == '' )
        drawGamer = false
    }  
    if(drawGamer){
        document.querySelector('.resultado').innerHTML = ` Empatou` 
        gamer = false
    }
}

playerGamer();
upDateInfo ();
