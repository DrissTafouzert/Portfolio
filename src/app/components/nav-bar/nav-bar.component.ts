import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @ViewChild('logoLinkedin') logoLinkedin :ElementRef
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  linkedinLogoEnter(event)
  {
    event.target.src="/assets/images/linkedin-icon-hover-2.png"    
  }
  linkedinLogoLeave(event)
  {
    event.target.src="/assets/images/linkedin-icon.png"
  }
  githubLogoEnter(event)
  {
    event.target.src="/assets/images/github-icon-hover-2.png"    
  }
  githubLogoLeave(event)
  {
    event.target.src="/assets/images/github-icon.png"
  }
  clickNavItem(event)
  {
    let items=document.querySelector("nav-item")
    items.classList.forEach(e=>
      {
        console.log(e);
        
      })
  }
  serviceSubreddit():Observable<any>
  {
    console.log("call ubreddit");
    
    return this.http.get("http://localhost:8080/api/subreddit");
  }
  getAllSubreddit()
  {
    console.log("call ubreddit 2");
    this.serviceSubreddit().subscribe(
      result=>{
        console.log(result)
        
      },
      error=>
      {
        console.log("ERROR",error);
        
      }
    )
  }

}
