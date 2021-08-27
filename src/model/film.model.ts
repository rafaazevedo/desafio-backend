import * as mongoose from 'mongoose';

export const FilmSchema = new mongoose.Schema({
    title: { type: String },
    director: { type: String },
    producer: { type: String },
    episode_id: {type: Number },
    url: {type: String },
    characters: [{name: String, gender: String}]
});
    
export interface Film {
    title: string;
    director: string;
    producer: string;
    episode_id: number ;
    url: string;
    characters: [{name: String, gender: String}];
}