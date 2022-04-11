import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title:string='save your task here !';

  constructor() { }

  ngOnInit(): void {}
  toggleAddTask(){
    console.log("2nd header toggole clicked")
  }

}
