import {Component, OnInit} from '@angular/core';
import {CurrentOffer} from "../../model/current-offer";
import {CurrentOffersService} from "../../service/current-offers.service";

import { Observable} from "rxjs";



@Component({
  selector: 'app-current-offers',
  templateUrl: 'current-offers.component.html',
  styleUrls: ['./current-offers.component.css']
})
export class CurrentOffersComponent implements OnInit {


  currentOffer!: Observable<CurrentOffer[]>;


  constructor(private currentsOffersService: CurrentOffersService) {


  }

  ngOnInit(): void {
  this.currentOffer=this.currentsOffersService.getCurrentsOffers()

  }

}

