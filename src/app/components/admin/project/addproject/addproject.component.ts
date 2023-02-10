import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { InsertBlogService } from 'src/app/services/insert-blog.service';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {
  
  imageValue: any;
  constructor(private ProjectSer:ProjectService, private router :Router) { }
  // addProjectForm = new FormGroup({
  //   projectImage:new FormControl([Validators.required]),
  //   projectTitle:new FormControl([Validators.required,Validators.maxLength(100)]),
  //   projectName:new FormControl([Validators.required,Validators.maxLength(100)]),
  //   projectCategory:new FormControl([Validators.required,Validators.maxLength(100)]),
  //   projectDescription:new FormControl([Validators.required,Validators.maxLength(1000)]),

  // })
  ngOnInit(): void {
  }
  onImageUpload($event:Event){
    

    const file = ($event.target as HTMLInputElement).files?.item(0)
    this.convertBase64(file)
  }

  convertBase64(file:File|undefined|null){
    const observable = new Observable((subscriber:Subscriber<any>)=>{
      this.readFile(file,subscriber)
    })

    observable.subscribe((data)=>{
      this.imageValue = data
      console.log(data);
      
    })
  }

  readFile(file:File|undefined|null|Blob,subscriber:Subscriber<any>){
    let fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = ()=>{
      subscriber.next(fileReader.result)
      subscriber.complete()
    }
  }


  addProject(data:any){
    data.projectImage = this.imageValue
    this.ProjectSer.insertProject(data).subscribe((data)=>{
      console.log(this.addProject);
      this.router.navigate(['adminIndex/projectsList'])
    })
    console.warn(data);
    
  }

}
