import { Component, Input, OnInit } from '@angular/core';
import { Usuarios } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-conversation-user',
  templateUrl: './conversation-user.component.html',
  styleUrls: ['./conversation-user.component.css']
})
export class ConversationUserComponent implements OnInit {

  @Input() conversation!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
