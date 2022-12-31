import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  properties: Array<any> = [
    {
      "Id": 1,
      "Name": "Birla House",
      "Type": "House",
      "Price": 12000
    },
    {
      "Id": 2,
      "Name": "Birla House2",
      "Type": "House",
      "Price": 12500
    },
    {
      "Id": 3,
      "Name": "Birla House3",
      "Type": "House",
      "Price": 13000
      },
      {
        "Id": 4,
        "Name": "Birla House4",
        "Type": "House",
        "Price": 13500
      },
      {
        "Id": 5,
        "Name": "Birla House5",
        "Type": "House",
        "Price": 15000
      }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
