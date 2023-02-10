import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/Project/project.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
projects:any
  constructor(private  projectServ:ProjectService) { }

  ngOnInit(): void {
    this.projectServ.fetchProjects().subscribe((data)=>{
      this.projects = data
    })
  }

}
