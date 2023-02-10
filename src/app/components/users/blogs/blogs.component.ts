import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  constructor(private utility:UtilityService,private blogservice:BlogService) { }
  blogs : any
  
  
  // blogList = this.utility.blogList
  ngOnInit(): void {
   this.blogservice.fetchBlogs().subscribe((data)=>{
      this.blogs = data
      console.log(this.blogs);
      
      
    })
  }

}
