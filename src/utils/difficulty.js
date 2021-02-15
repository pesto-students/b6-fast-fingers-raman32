export const difficulties = [
    {label:"Easy", value:1},
    {label:"Medium", value:1.5},
    {label:"Hard", value:2}
]
export const getDifficulty = (difficultyFactor)=>{
    if(difficultyFactor >=2 ){
        return "hard";
    }
    else if(difficultyFactor >=1.5){
        return "medium";
    }
    else return "easy"
}