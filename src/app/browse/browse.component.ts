import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  cond: boolean;

  constructor(
    private route: ActivatedRoute,
  ) {}

      saved=["tt1187043","tt8367814","tt0091042","tt7131622","tt8946378","tt6751668"];
  rec=["tt0088763","tt0087332","tt2584384","tt5463162","tt0118715","tt0106677"];
  tre=["tt3501632","tt2015381","tt1431045","tt4364194","tt0089218","tt0144084"];
  ngOnInit(): void {
    this.cond=false;
  }

  searchinverse() {
    this.cond = true;
  }

}
