import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  year: any;
  studentOne: any;
  studentTwo: any;

  constructor(
    public _apiService: ApiService

  ) {}

  addStudent (){

    let data = {
      year: this.year,
      studentOne: this.studentOne,
      studentTwo: this.studentTwo,
    }


    this._apiService.addStudent(data).subscribe((res:any) => {
        console.log("SUCESS ===", res);
    }, (error: any) => {
        console.log("ERROR ===", error );
      })

  }

  }


