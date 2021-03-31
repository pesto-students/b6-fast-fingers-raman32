export const routes = {
    entry : "/",
    game : "/game",
    login: "/login"
}
export const DIFFICULTY_INCREMENT_FACTOR = 0.01;
export const GET_WORD_API_ENDPOINT = process.env.REACT_APP_BACKEND_URL+"/word/";
export const USER_REGISTER_API_ENDPOINT = process.env.REACT_APP_BACKEND_URL+"/user/register/";
export const USER_LOGIN_API_ENDPOINT = process.env.REACT_APP_BACKEND_URL+"/user/login/";
export const USER_ADD_SCORE_API_ENDPOINT =process.env.REACT_APP_BACKEND_URL+"/game/addScore/";
export const GET_HIGH_SCORES_API_ENDPOINT =process.env.REACT_APP_BACKEND_URL+"/game/highScore/";
