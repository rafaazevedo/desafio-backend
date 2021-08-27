import { Body, Controller, Post, Get, Param  } from '@nestjs/common';
import { FilmService } from 'src/service/film.service';
import { FilmRepository } from 'src/repository/film.repository';

@Controller('film')
export class FilmController {
    constructor(
        private filmeSErvice: FilmService,
        private readonly filmREpository: FilmRepository,
      ) { }
    @Post('create')
    async createFilms(@Body() body) {
        let check = await this.filmeSErvice.verifyFilms();
        if (check == 0 || check < 6) {
            const { id } = body;
            let filmObject = {
                "title": "",
                "director": "",
                "producer": "",
                "episode_id": "",
                "url": "",
                "characters": []
            }; 
            let film = await this.filmREpository.getFilms(id);
            Promise.all(
                film.characters.map(url =>
                    this.filmREpository.getFilmCharacters(url)
                    .then(res =>  {
                        filmObject.characters.push({"name": res.name, "gender": res.gender});
                    })  
                    .catch(error => console.error("SWAPI did not return the data"))
                )
            ).then(res => {
                filmObject.title = film.title;
                filmObject.director = film.director;
                filmObject.producer = film.producer;
                filmObject.episode_id = film.episode_id
                filmObject.url = film.url
                let response = this.filmeSErvice.create(filmObject)
                return response;
            })
        } else {
            return {created: true};
        }
    }
    @Get('list')
    async getLIstFilms() {
        let films = await this.filmeSErvice.findAll();
        console.info('Retornando filmes');
        return films;
    }

    @Get('film/:id')
    async getFilm( @Param('id') id) {
        let films = await this.filmeSErvice.findById(id);
        return films;
    }
}
