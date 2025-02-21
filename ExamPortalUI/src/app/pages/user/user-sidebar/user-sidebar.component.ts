import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.css'
})
export class UserSidebarComponent {
  categories:any;
  constructor(private _category:CategoryService,private _snack:MatSnackBar){}

  ngOnInit(){
    this._category.categories().subscribe((data)=>{
      this.categories=data;
      console.log(data)
    },(error)=>{
      this._snack.open("Error in loading categories!",'',
        {
          duration:3000
        }
      )
    })
  }
}
