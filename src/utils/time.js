export function convertToSecondsAndCenti(centiSeconds){
return `${Math.floor(centiSeconds/100)} : ${centiSeconds%100}`;
}