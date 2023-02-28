import { Component } from '@angular/core';
import { Serv1Service } from 'src/app/sevices/serv1.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent {

  constructor (private myService:Serv1Service) {}

  add(name:any,age:any,city:any,street:any,email:any,phone:any){
    let student = {name,age,address:{city,street},email,phone};
    this.myService.addStudent(student).subscribe({
      next:()=>{alert("Data successfully added \nReturn to your home page");}
    });
  }
}
