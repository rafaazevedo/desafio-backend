import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Film } from 'src/model/film.model';
import { Model } from 'mongoose';

@Injectable()
export class FilmService {
  constructor(
    @InjectModel('Film') private readonly filmModel: Model<Film>,
  ) {
  }

  async create(doc) {
    const result = await new this.filmModel(doc).save();
    return result.id;
  }

  async findById(id: number) {
    try {
        const response = await this.filmModel.findById(id);
        if (response) {
            return response;
        } else {return {"message": "Dados não encontrados!"};}
    } catch (error) {
        return {"message": "Dados inválidos foram fornecidos!"};
    }
  }

  async findAll() {
      const response = await this.filmModel.find();
      return response;
  }

  async verifyFilms() {
    const response = await this.filmModel.find();
    return response.length;
  }
}