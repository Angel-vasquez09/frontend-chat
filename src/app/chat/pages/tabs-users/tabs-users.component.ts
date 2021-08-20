import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs-users',
  templateUrl: './tabs-users.component.html',
  styleUrls: ['./tabs-users.component.css']
})
export class TabsUsersComponent implements OnInit {

  active: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
