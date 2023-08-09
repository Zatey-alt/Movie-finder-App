import { Component,OnInit } from '@angular/core';
import { Movie } from 'src/app/Model/movie';
import { DataService } from 'src/app/Shared/data.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  latestMovie :any;
  popularMovies !: Movie;
  nowPlayingMovies !: Movie;
  topRatedMovies !: Movie;
  upcomingMovies !: Movie;
  trendingMovies !: Movie;
  originals !: Movie;

 constructor(private dataService : DataService){}
  ngOnInit(): void {
    this.getLatestMovie();
    this.getPopularMovie();
    this.getNowPlayingMovie();
    this.getTopRatedMovie();
    this.getUpcomingMovie();
    this.getTrendingMovie();
    this.getOriginal();
  }

  getLatestMovie(){
    this.dataService.getLatestMovie().subscribe(res =>{
      this.latestMovie = this.changeData(res);
    },err => {
      console.log('Not able to get latest movie.',err)
    })}
    changeData(res: any): any {
      if (res.poster_path && res.poster_path.backdrop_path) {
        res.backdrop_path = 'https://image.tmdb.org/t/p/original' + res.poster_path.backdrop_path + '?api_key=' + environment.api_key;
      }
      return res;
    }
    

    getPopularMovie(){
      this.dataService.getPopularMovies().subscribe(res =>{
        this.popularMovies = this.modifyData(res);
      },err => {
        console.log('Error fetching popular movies.',err)
      })}

      
    getNowPlayingMovie(){
      this.dataService.getNowPlayingMovies().subscribe(res =>{
        this.nowPlayingMovies = this.modifyData(res);
      },err => {
        console.log('Error fetching popular movies.',err)
      })}

      
    getTopRatedMovie(){
      this.dataService.getTopRatedMovies().subscribe(res =>{
        this.topRatedMovies = this.modifyData(res);
      },err => {
        console.log('Error fetching popular movies.',err)
      })}
      getUpcomingMovie(){
        this.dataService.getUpcomingMovies().subscribe(res =>{
          this.upcomingMovies = this.modifyData(res);
        },err => {
          console.log('Error fetching popular movies.',err)
        })}

        getTrendingMovie(){
          this.dataService.getTopRatedMovies().subscribe(res =>{
            this.trendingMovies = this.modifyData(res);
          },err => {
            console.log('Error fetching popular movies.',err)
          })}

          getOriginal(){
            this.dataService.getOriginals().subscribe(res =>{
              this.originals = this.modifyData(res);
            },err => {
              console.log('Error fetching popular movies.',err)
            })}



         modifyData(movies : Movie) : Movie {
        if (movies.results) {
          movies.results.forEach(element => {
            element.backdrop_path = 'https://image.tmdb.org/t/p/original' + element.backdrop_path + '?api_key=' + environment.api_key;
           if(!element.title){
            element.title = element?.name;
           }
          });
        }
        return movies;
      }
      
}
