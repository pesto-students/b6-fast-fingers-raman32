import wordList from '../data/dictionary.json'
function getRandomizedWord(level){
if(level<2){
    const filteredArray =  wordList.filter((ele)=>ele.length <= 4)
    return ()=>filteredArray[Math.floor(Math.random() * filteredArray.length)]
}
else if( level < 3){
    const filteredArray =  wordList.filter((ele)=>ele.length > 4 && ele.length < 8)
    return ()=>filteredArray[Math.floor(Math.random() * filteredArray.length)]
}
else {
    const filteredArray =  wordList.filter((ele)=>ele.length > 8)
    return ()=>filteredArray[Math.floor(Math.random() * filteredArray.length)]
}
}
export default getRandomizedWord;