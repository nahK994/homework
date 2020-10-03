import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})
export class HomeworkComponent implements OnInit {

  List = ["A", "B"]
  loop = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
