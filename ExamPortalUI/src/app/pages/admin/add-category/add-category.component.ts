import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{
  category = {
    title: '',
    description: ''
  }
  constructor(private _category:CategoryService, private _snack:MatSnackBar){}

  ngOnInit(){}

  formSubmit() {
  if(this.category.title.trim()==='' || this.category.title==null){
    this._snack.open("Title is required","",{
      duration:3000
    })
    return;
  }
  this._category.addCategory(this.category).subscribe((data:any)=>{
    this._snack.open("Success, Category is Added!","",{
      duration:3000
    })
    this.category = {
      title: '',
      description: ''
    }
    console.log(data)
  },(error)=>{
    console.log(error);
    this._snack.open("Something went wrong!", "", {
      duration: 3000
    })
  })
}
 
}
