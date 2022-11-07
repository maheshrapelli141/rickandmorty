import { api } from "./Api";

(async () => {
    try {
        const episodes = await api("https://rickandmortyapi.com/api/episode");
        for (let i = 0; i < episodes.results.length; i++) {
            const promises = episodes.results[i].characters.map((link: string) => api(link));
            const characters = await Promise.all(promises);
            episodes.results[i].characters = characters;   
        }
        console.log(episodes.results);
    } catch (error) {
        console.log(error);
    }
})();