import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrl: './homework.component.css'
})
export class HomeworkComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
  }

}
