import {Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutMeComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "/assets/js/about-me.custom.js";
    this.elementRef.nativeElement.appendChild(s);
  }

}
