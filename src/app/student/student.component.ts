import {Component, OnInit} from '@angular/core';
import {IStudent} from './student';
import {StudentService} from '../student.service';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   studentList:IStudent[];
  constructor(private _studentService:StudentService) { }

  ngOnInit() {
    this._studentService.getStudentList()
	//.retry(5)
	.retryWhen((err)=> {
		return err.scan((attempt) => {
			if(attempt>5){
				throw(err);
			}else{
				attempt++;
				console.log("attempt number "+attempt);
				return attempt;
			}
		},0
		).delay(1000)
	})
	.subscribe((data) =>{
          this.studentList = data;
          console.log(data);
        },
		(error)=>{
			console.log(error);
		}
        );
		
		/*
		// for promise 
		
		this._studentService.getStudentList()
			.then((data)=>{
				 this.studentList = data;
			},
			(error)=>{
				console.log(error);
			})
			
		*/
	}
}
