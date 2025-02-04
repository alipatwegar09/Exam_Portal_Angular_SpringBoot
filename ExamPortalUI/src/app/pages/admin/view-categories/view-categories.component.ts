import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {
  categories=[
    {
      cid: 43,
      title:'Programming',
      description:'efgji wirfhto gr ihwr hgftriog rgrwhih rgwigwhr hihweftgrh grwh ehrwgh'
    },
    {
      cid: 43,
      title: 'Aptitude',
      description: 'efgji wirfhto gr ihwr hgftriog rgrwhih rgwigwhr hihweftgrh grwh ehrwgh'
    }
  ]
   
  constructor(){}

  ngOnInit(){}
}
