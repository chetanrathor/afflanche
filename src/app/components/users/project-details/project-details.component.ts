import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectName:''
  projectDescription:''
  projectTitle:''
  projectImage:''
  constructor(private projectSer:ProjectService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.projectSer.fetchProject(this.route.snapshot.params['id']).subscribe((data)=>{
      console.log(`
      ${this.projectName = data[0].projectName}
      ${this.projectDescription = data[0].projectDescription}
      ${this.projectTitle = data[0].projectTitle}
      ${this.projectImage = data[0].projectImage}
`)
      
    })
  }

}
