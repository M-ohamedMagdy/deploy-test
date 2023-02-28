import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

  // HTTPModule Communication ( GET - POST - PUT - PATCH - DELETE )

  constructor(private myClient : HttpClient) { }

  private baseURL = "http://localhost:3000/students";

  // GET ALL
  getAllStudents(){
    return this.myClient.get(this.baseURL)
  }

  // GET by id
  getStudentByID(id:any){
    return this.myClient.get(this.baseURL+"/"+id)
  }

  // UPDATE by id
  updateStudentProp(id:any,newStudent:any){
    return this.myClient.patch(this.baseURL+"/"+id,newStudent)
  }

  // UPDATE object
  updateStudents(id:any,newStudent:any){
    return this.myClient.put(this.baseURL+"/"+id,newStudent)
  }

  // ADD student
  addStudent(newStudent:any){
    return this.myClient.post(this.baseURL,newStudent)
  }

  // DELETE student
  deleteStudent(id:any){
    return this.myClient.delete(`${this.baseURL}/${id}`)
  }


}
