import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customs-support-widget',
  templateUrl: './customs-support-widget.component.html',
  styleUrls: ['./customs-support-widget.component.css']
})
export class CustomsSupportWidgetComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
