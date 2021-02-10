function addScoreToLocalStorage(score){
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(scores instanceof Array)
        localStorage.setItem('scores', JSON.stringify([...scores,score]));
    else 
        localStorage.setItem('scores',JSON.stringify([score]))
}
function getScoresFromLocalStorage(){
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(scores instanceof Array)
        return scores;
    return [];
}
export {addScoreToLocalStorage, getScoresFromLocalStorage}