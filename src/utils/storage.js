function addScoreToLocalStorage(score){
    try {
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(!(scores instanceof Array)) throw TypeError("Not an Array");
    localStorage.setItem('scores', JSON.stringify([...scores,score]));
    } catch {
        localStorage.setItem('scores',JSON.stringify([score]))
    }
}
function resetScoreFromLocalStorage(){
    localStorage.setItem('scores',"[]");
}
function getScoresFromLocalStorage(){
    try {
    let scores = JSON.parse(localStorage.getItem('scores'));
    if(!(scores instanceof Array)) throw TypeError("Not an Array");
    return scores;
    }
    catch {
        return [];
    } 
}
export {addScoreToLocalStorage,resetScoreFromLocalStorage, getScoresFromLocalStorage}