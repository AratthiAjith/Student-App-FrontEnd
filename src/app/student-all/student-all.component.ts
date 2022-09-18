
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../message';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {
  students : Student[]=[];
  message:Message = new Message("",""); 

  constructor(private service:StudentService, private router:Router) { }

  ngOnInit(): void {     
    this.getAllStudents(); 
  }  
  getAllStudents(){ 
    this.service.getAllStudents().subscribe(data=>{this.students=data}
,       error=>{         
  this.students=[] 
      });   } 
  deleteStudent(id:number){ 
    this.service.deleteOneStudent(id).subscribe( 
      data=>{         
        this.message=data,         
        this.getAllStudents(); 
      }, 
      error=>{console.log(error)} 
      ); 
       } 
  editStudent(id:number){ 
    this.router.navigate(['edit',id]); 
  } 
 
} 

