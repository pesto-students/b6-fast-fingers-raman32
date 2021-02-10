import dataEasy from '../data/1.json'
import dataMedium from '../data/2.json'
import dataHard from '../data/3.json'
function getRandomizedWord(difficultyLevel){
switch (difficultyLevel) {
    case 'easy' :
        return dataEasy[Math.floor(Math.random() * dataEasy.length)];
    case 'medium' :
        return dataMedium[Math.floor(Math.random() * dataMedium.length)];
    case 'hard' :
        return dataHard[Math.floor(Math.random() * dataHard.length)];
    default :
        return dataEasy[Math.floor(Math.random() * dataEasy.length)];
}
}
export default getRandomizedWord;