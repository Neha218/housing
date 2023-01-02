import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params["id"]; // By default this returns a string. So to convert it to number add plus sign

    // Observables are good to use when we do not want a function to be executed immediately
    // Instead we want it to be executed when some data is changed in its publisher
    // Below this.route.params is an Observable
    // So using suscribe method on this Observable, we are telling angular to call a function whenever parameters are changed in a route
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    )
  }
  onSelectNext(){
    this.propertyId += 1;
    this.router.navigate(['property-detail', this.propertyId])
  }
}
