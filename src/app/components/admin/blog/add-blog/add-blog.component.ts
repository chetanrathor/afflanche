import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, Subscriber } from 'rxjs';
import { BlogService } from 'src/app/services/Blog/blog.service';
import { InsertBlogService } from 'src/app/services/insert-blog.service';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
// @ViewChild('imageUploader') imgUploader : HTMLInputElement
imageValue :HTMLInputElement
  constructor(private blogServ:BlogService, private router: Router) { }

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



  insertoneBlog(data:any){
    data.blogImage = this.imageValue
    
    // console.warn(data);
    this.blogServ.insertBlog(data).subscribe((data)=>{
     console.log(data);
    })
    this.router.navigate(['adminIndex/bloglist'])
  }

}
