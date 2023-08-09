import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/Shared/data.service';

@Component({
  selector: 'app-movie-trailer',
  templateUrl: './movie-trailer.component.html',
  styleUrls: ['./movie-trailer.component.css']
})
export class MovieTrailerComponent implements OnInit {
  @Input() movieTitle!: string; 

  trailers: any[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.fetchMovieTrailers();
  }
  fetchMovieTrailers() {
    this.dataService.getMovieTrailers(this.movieTitle).subscribe(data => {
      this.trailers = data.items;
      console.log(this.trailers); 
    });
  }
  
}
