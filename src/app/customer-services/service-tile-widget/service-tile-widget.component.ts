import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'service-tile-widget',
  templateUrl: './service-tile-widget.component.html',
  styleUrls: ['./service-tile-widget.component.css']
})
export class ServiceTileWidgetComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
