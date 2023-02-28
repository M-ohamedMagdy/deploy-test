import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serv1Service } from 'src/app/sevices/serv1.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit{

  ID = 0;
  student:any;

  constructor (myActivated:ActivatedRoute,private myService:Serv1Service) {
    this.ID = myActivated.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.myService.getStudentByID(this.ID).subscribe(
      {
      next:(res)=>{this.student = res;},
      error(){console.log("can not get user data")}
      }
    )
  }
}
