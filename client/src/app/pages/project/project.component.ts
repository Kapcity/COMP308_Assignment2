import { Component, OnInit } from '@angular/core';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',

  styleUrls: ['./project.component.css']
})
export class ProjectComponent extends BasePageComponent implements OnInit {

  constructor(route: ActivatedRoute) { 
    super(route);
  }


  ngOnInit() {
  }

}
