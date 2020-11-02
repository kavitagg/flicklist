import { Component,Input, OnInit,Injectable  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mini-title',
  templateUrl: './mini-title.component.html',
  styleUrls: ['./mini-title.component.css']
})
export class MiniTitleComponent implements OnInit {
//https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=25&q=social%20network%20trailer&key=AIzaSyCCUrQf4lAT8UH_YFdJok2zM1bnXo8W9Xc HTTP/1.1

  @Input() titleID: string;

  private readonly URL = 'http://www.omdbapi.com/?i=';
  private readonly vURL = 'https://youtube.googleapis.com/youtube/v3/search?part=id&maxResults=25&q=';
  shortDescription: any;
  title: any;
  img:any;
  vID: any;
  resolveItems(id): Observable<any> {

    return this.http.get(this.URL+this.titleID+'&apikey=f7df6a0c');

  }
  // getTrailer(title): Observable<any> {
  //   var re = / /gi;
  //    var str = this.title + "trailer";
  //   str = str.replace(re, "%20"); 
  //   console.log(str);
  //   return this.http.get(this.vURL+str+'&key=AIzaSyCCUrQf4lAT8UH_YFdJok2zM1bnXo8W9Xc');

  // }
  constructor(private http: HttpClient) {

   }

   ngOnInit():void{
   }

  ngOnChanges(): void {
    this.resolveItems(this.titleID).subscribe(data=>{
      this.title= data["Title"];
      this.shortDescription= data["Plot"];
      this.img= data["Poster"];
      // this.getTrailer(this.title).subscribe(data=>{

      //   this.vID = data["items"][1]["id"]["videoId"];
      //   this.vID = "//www.youtube.com/embed/" + this.vID;
      // });
    });

  }

}
