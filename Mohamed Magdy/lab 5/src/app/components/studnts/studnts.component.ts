import { Component, OnInit } from '@angular/core';
import { Serv1Service } from 'src/app/sevices/serv1.service';

@Component({
  selector: 'app-studnts',
  templateUrl: './studnts.component.html',
  styleUrls: ['./studnts.component.css']
})
export class StudntsComponent implements OnInit{

  students:any;

  constructor (public myService:Serv1Service) {}

  ngOnInit(): void {
    this.myService.getAllStudents().subscribe(
      {
        next : (res)=>{this.students = res; console.log(this.students);
        },
        error() {console.log("can not get users data");}
      }
    )
  }

  delete(id:any){
    this.myService.deleteStudent(id).subscribe();
  }









}
