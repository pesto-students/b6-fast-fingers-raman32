export function convertToMinutesAndSeconds(centiSeconds){
return `${Math.floor(centiSeconds/6000)} : ${Math.floor(centiSeconds%6000/100)} : ${centiSeconds%100}`;
}
export function getTotalTime(difficulty,wordLength){
  return Math.ceil(wordLength / difficulty) > 2 ? Math.ceil(wordLength / difficulty) * 100 : 200;
}