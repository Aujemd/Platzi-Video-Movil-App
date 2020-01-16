const BASE_API ='https://yts.lt/api/v2/';

class Api{
    async getSuggestion(id){
        const query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
        const {data} = await query.json();
        return data.movies;
    }
    async getMovies(){
        const query = await fetch(`${BASE_API}list_movies.json`);
        const {data} = await query.json();
        return data.movies;
    }
}

export default new Api();

/*Matar entorno de desarrollo en Node
For windows users, run: taskkill /im node.exe

Run taskkill /f /im node.exe if the process still persists.

Step2: run command npm start --reset-cache

Step3: run command react-native run-ios OR react-native run-android*/