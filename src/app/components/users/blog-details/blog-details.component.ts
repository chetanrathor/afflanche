import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Blog } from 'src/app/blog';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { UtilityService } from 'src/app/utility.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {
  // blog : Blog ={
  //   title:'',
  //   subHeading:'',
  //   description:'',
   
  // } 
  
  blogName : ''
  blogTitle : ''
  blogDescription : ''
  blogImage : ''
  relatedBlog:any

  id : number = -1
  constructor(private route: ActivatedRoute,private utility:UtilityService,private blogService :BlogService) {
    
   }
  ngOnInit(): void {
  this.id = this.route.snapshot.params['id']
 
  
  this.blogService.fetchBlog(this.id).subscribe((data)=>{
     this.blogName= data[0].blogName
     this.blogTitle= data[0].blogTitle
     this.blogDescription= data[0].blogDescription
     this.blogImage= data[0].blogImage
    
  })
   
  this.blogService.fetchBlogs().subscribe((data)=>{
    console.log(data);
    
    this.relatedBlog = data
  })
   }

}
