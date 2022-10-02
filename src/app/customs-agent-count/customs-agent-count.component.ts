import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'customs-agent-count',
  templateUrl: './customs-agent-count.component.html',
  styleUrls: ['./customs-agent-count.component.css']
})
export class CustomsAgentCountComponent implements OnInit {

  customAgentsCountArray = [
    {
      value:"20 +",
      description: "years of experience"
    },
    {
      value:"400",
      description: "qualified customs specialists"
    },
    {
      value:"20",
      description: "strategic locations"
    },
    {
      value:"5",
      description: "countries"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
