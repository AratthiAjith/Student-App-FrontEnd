import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  
  constructor(private service:StudentService,private router:Router) { }
  student : Student = new Student(0,"",0,"");  
  message : Message = new Message("","");
  ngOnInit(): void { 
  } 
 createStudent(){ 
   this.service.createStudent(this.student).subscribe(data=>{      
      this.message=data; 
   }); 
   this.student=new Student(0,"",0,""); 
 } 

}

