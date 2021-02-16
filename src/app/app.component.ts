import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit
{
  title = 'Portfolio';
  constructor()
  {
  }
  ngAfterViewInit(): void 
  {
   this.loadingEnd()
  }
  ngOnInit(): void 
  {
    document.getElementById('content').style.display='none'
  }
  loadingEnd()
  {
    document.getElementById('content').style.display='block'
    document.getElementById('onloading').style.display='none'
  }

 
}
