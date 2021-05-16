import { Component, OnInit } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service'; 
@Component({
  selector: 'Poke-news',
  templateUrl: './poke-news.component.html',
  styleUrls: ['./poke-news.component.scss'],
})
export class PokeNewsComponent implements OnInit {
  pokeNews = [];
  constructor(
    private http: HttpClientModule,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getNews();
    console.log(this.pokeNews);
  }
  
  getNews(){
    let newsArray; 
      this.api.getPokemones().subscribe(
        (res) =>{ 
          console.log(res)
          this.pokeNews.push(res.articles);
        },
        (err) =>{
          console.log(err)
        }
      );
    
  }
}
