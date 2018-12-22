import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
}
export interface MovieList {
  results: Movie[];
}
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient: HttpClient) { }
  public getMovies(): Observable<MovieList> {
    return this.httpClient.get<MovieList>('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0971ed323ba8081b990144eef9e02ace');
  }
}
