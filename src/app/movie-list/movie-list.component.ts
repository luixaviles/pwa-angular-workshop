import { Component, OnInit } from '@angular/core';
import { MovieService, Movie } from '../movie.service';

@Component({
  selector: 'pwa-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies: Movie[];
  // public movies: Movie[] = [
  //   {
  //     id: 1,
  //     title: 'Acuaman',
  //     overview: 'Acuaman Movie',
  //     poster_path: ''
  //   }
  // ]
  constructor(private service: MovieService) { }

  ngOnInit() {
    this.service.getMovies()
    .subscribe(res => this.movies = res.results);
  }

}
