import { Injectable, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from  'rxjs/Observable';
import  'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {IStudent} from './student/student';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

@Injectable()
export class StudentService {

    constructor(private _http: Http){
        
    }
  
    ngOnInit(){
        
    }

	getStudentList():Observable<IStudent[]>{
		return this._http.get("http://localhost:4200/assets/student.json")
		.map((response: Response) =>
		   <IStudent[]>response.json().students)
		.catch(this.handleError);
	}
	handleError(error:Response){
		console.log(error);
		return Observable.throw(error);
	}

	/*
	
	// for promise //
	
	getStudentList():Promise<IStudent[]>{
		return this._http.get("http://localhost:4200/assets/student.json")
		.map((response: Response) =>
			response.json().students)
		.toPromise()
		.catch(this.handleError);
	}
	handleError(error:Response){
		console.log(error);
		throw (error);
	}
	*/
}
