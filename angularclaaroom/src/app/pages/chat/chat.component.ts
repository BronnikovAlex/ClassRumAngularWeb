import {Component, OnInit} from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit() {
  }


}
