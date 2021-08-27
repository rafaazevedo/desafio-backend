import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FilmSchema } from './model/film.model';
import { FilmController } from './controller/film/film.controller';
import { FilmService } from './service/film.service';
import { FilmRepository } from './repository/film.repository';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin123@cluster0.r5j3d.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{
      name: 'Film', schema: FilmSchema,
    }]),
  ],
  controllers: [
    FilmController,
  ],
  providers: [
    FilmService,
    FilmRepository,
  ]
})
export class AppModule {}
