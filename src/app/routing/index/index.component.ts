import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getCards(): Card[] {
    return [{
      title: 'Java',
      description:'Java was first object-oriented programming language I have learned on a high level. The knowledge of Java, learned from school was used on creating projects throughout the semesters and projects outside school. From creating my first Hello World application, through first database connection to creating first RESTful API with Spring, Java is a language from which I got all foundation of object-oriented programming.'
    }, {
      title: 'JavaScript',
      description:'Hands on experience with JavaScript on several projects. The language have been used mostly with NPMjs to ensure easier dependency managing and easier development. Because of JavaScript loose typing, I have learned how not to lose my nerves after getting a random exception that has nothing to do with the real bug and how to debug these issues efficiently (not only in js).'
    }, {
      title: 'C#',
      description:'My C# knowledge grew after learning it in school. The language was used in .NET projects for creating Blazor Server Apps and WEB APIs. Hands-on experience with connecting .net applications to MySQL database via LINQ on a project.\n'
    }];
  }


}

interface Card {
  title: string;
  description: string;
}
