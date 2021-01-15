import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  btnGitHubEnter(event)
  {
    event.target.childNodes[0].childNodes[0].src="/assets/images/github-icon-inv.png"
  }
  btnGitHubLeave(event)
  {
    event.target.childNodes[0].childNodes[0].src="/assets/images/github-icon.png"
  }

  btnDemoEnter(event)
  {
    event.target.childNodes[0].childNodes[0].src="/assets/images/demo-icon-inv.png"
  }
  btnDemoLeave(event)
  {
    event.target.childNodes[0].childNodes[0].src="/assets/images/demo-icon.png"
  }


}
