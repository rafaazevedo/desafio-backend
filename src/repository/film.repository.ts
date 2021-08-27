import Axios from 'axios';

export class FilmRepository {
    async getFilms(id) {
        const url = `https://swapi.dev/api/films/${id}`
        const method = 'get'
        const tag = "FilmRepository -> getFilms"
        return await this.callSwapiDEvApi({ url, method, tag })
    }

    async getFilmCharacters(link) {
        const url = link
        const method = 'get'
        const tag = "FilmRepository -> getFilmCharacters"
        return await this.callSwapiDEvApi({ url, method, tag });
    }

    private callSwapiDEvApi({ url, method, tag, data = null, params = null }) {
        const headers = {
            'Content-Type': 'application/json'
        };
        return Axios({
            url,
            method,
            headers,
            data,
            params
        })
            .then(({ data: response }) => {
                console.info(`Chamada ${tag} realizada com sucesso`, tag, {
                    response,
                });
                return response;
            })
            .catch(({ response: err }) => {
                const { data } = err;
                console.error(`Chamada ${tag} realizada com erro`, tag, {
                    err: JSON.stringify(data),
                });
                throw err;
            });
    }
}