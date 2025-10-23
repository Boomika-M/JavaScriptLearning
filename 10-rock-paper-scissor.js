const scores=JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    lose: 0,
    tie: 0
};
      
function playGame(pmove){
    if(pmove === 'Reset'){
        scores.win=0;
        scores.lose=0;
        scores.tie=0;
        localStorage.removeItem('score');
        document.querySelector('.score-content').innerHTML = `<h2>Score Reset...</h2><br>Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie}`;
        return;
    }
    let cmove='';
    const rm=Math.random();
    if(rm>=0 && rm<1/3) cmove='Rock';
    else if(rm>=1/3 && rm<2/3) cmove='Paper';
    else if(rm>=2/3 && rm<1) cmove='Scissor';
    console.log(cmove);
    let res='';
    if(cmove===pmove){
        res='Tie.';
        scores.tie+=1;
    }
    else if((pmove === 'Rock' && cmove==='Paper') || (pmove==='Paper' && cmove==='Scissor') || (pmove==='Scissor' && cmove==='Rock')){
        res='You lose.';
        scores.lose+=1;
    }
    else{
        res='You win.';
        scores.win+=1;
    }
    localStorage.setItem('score',JSON.stringify(scores));
    
    document.querySelector('.score-content').innerHTML = `<h2>${res}.</h2>You <img src="rock-paper-scissor-images/${pmove.toLowerCase()}-emoji.png" height="50px"> Computer <img src="rock-paper-scissor-images/${cmove.toLowerCase()}-emoji.png" height="50px">.<br><br><br>Wins: ${scores.win}, Losses: ${scores.lose}, Ties: ${scores.tie}`;
}