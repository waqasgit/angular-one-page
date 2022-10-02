import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tile-widget',
  templateUrl: './tile-widget.component.html',
  styleUrls: ['./tile-widget.component.css']
})
export class TileWidgetComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
