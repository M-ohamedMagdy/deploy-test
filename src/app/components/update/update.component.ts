import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serv1Service } from 'src/app/sevices/serv1.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  ID = 0;
  student:any;
  constructor (private myService:Serv1Service, myAct:ActivatedRoute) {
    this.ID = myAct.snapshot.params["id"];
    this.myService.getStudentByID(this.ID).subscribe({
      next:(res)=>this.student=res
    });
  }

  update(name:any,age:any,city:any,street:any,email:any,phone:any){
    this.student = {name,age,address:{city,street},email,phone};
    this.myService.updateStudents(this.ID,this.student).subscribe({
      next:()=>{alert("Data successfully updated \nReturn to your home page");}
    });
  }
}
