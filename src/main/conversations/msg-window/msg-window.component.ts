import { Component, OnInit } from '@angular/core';
import { MsgComponent } from './msg/msg.component';

@Component({
  standalone: true,
  selector: 'app-msg-window',
  templateUrl: './msg-window.component.html',
  styleUrls: ['./msg-window.component.css'],
  imports:[MsgComponent],
})
export class MsgWindowComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
