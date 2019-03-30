import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  templateUrl: './base-page.component.html',
  styleUrls: ['./base-page.component.css']
})
export class BasePageComponent implements OnInit {
  title: string;
  

  constructor(private routes: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.routes.snapshot.data.title;
  }

}
