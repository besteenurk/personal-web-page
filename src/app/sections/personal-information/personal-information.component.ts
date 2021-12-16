import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-information-section',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
  page = 2;
  page1 = 3;
  constructor() { }

  ngOnInit() {
  }

}
