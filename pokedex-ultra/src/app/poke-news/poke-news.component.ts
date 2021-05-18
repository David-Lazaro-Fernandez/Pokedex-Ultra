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
  laloCuck = [];
  constructor(
    private http: HttpClientModule,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.getNews();
    console.log(this.pokeNews);
    console.log(typeof this.pokeNews)
  }
  
  getNews(){
      for (let index = 0; index < 10; index++) {
        this.api.getPokemones().subscribe(
            (res) =>{ 
              this.pokeNews.push(res.articles[index]);
            },
            (err) =>{
              console.log(err)
            }
          );     
        } 
       
  }
}
