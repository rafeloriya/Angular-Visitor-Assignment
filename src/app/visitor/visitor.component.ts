import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { LocalStorageService } from './local-storage.service';


@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss']
})
export class VisitorComponent implements OnInit {
  visitor: any;
  

  constructor(public formBuilder: FormBuilder,  public router: Router,private http: HttpClient) { }
  public registerForm: FormGroup;
   

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      Name: [],      
      email: [],
      typeOfVisit: [new Date],      
      personToVisit: [],
      dateOfEntry: [new Date],
      timeOfEntry:[],
      timeToExit: [],
      
    })
    
    
    this.news();
    
    
  }
  onSubmit() {
    debugger

    console.log(this.registerForm.value);
    this.visitor =  this.registerForm.value
    this.addVisitor(this.visitor);
  }
  addVisitor(visitor: any){
    let visitors = [];
    if (localStorage.getItem('visitors')){
      visitors = JSON.parse(localStorage.getItem('visitors') || '{}');
      visitors= [visitor, ...visitors];
      console.log(visitors);
    }else{
      visitors = [visitor];
      console.log(visitors);
    }
    localStorage.setItem('visitors', JSON.stringify(visitors));
    this.router.navigate(['/list'])


  }

news(){
  this.getNews().subscribe(response => {
    console.log(response);
    
  })
}

  getNews(){
    return this.http.get('https://newsapi.org/v2/everything?q=bitcoin&from=2021-1-1&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98')
  }

}
