import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit {
  categories=[
    {
      title:'',
      description:''
    }
  ]
   
  constructor(private _category:CategoryService,private _snack:MatSnackBar){}

  ngOnInit(){
    this._category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(data)
    },
    (error)=>{
      this._snack.open("Error in loading data", '', {
        duration: 3000
      });
    }
  )
  }
}
