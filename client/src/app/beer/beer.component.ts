import { Component, OnInit } from '@angular/core';
import { BeerService } from '../services/beer.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent implements OnInit {

  beers:Array<any>;
  beersFromBrewery:Array<any>;

  theNewBeerEntry: any = {};

  constructor(private theService: BeerService, private myActivatedRoute: ActivatedRoute) { }

  allBeers(){
    this.theService.allBeers()
    .subscribe((res)=>{
      this.beers = res;
    });
  }
  addNewBeer(){
    this.theService.createBeer(this.theNewBeerEntry)
    .subscribe((response)=>{
      this.allBeers();
      location.reload();
      console.log('This======>' + response + "<==== was added into the collection")
    });
  }

  showBreweryBeers(){
    this.theService.breweryBeers(this.beersFromBrewery)
    .subscribe((response)=>{
      this.beersFromBrewery = response;
    })
  }


  ngOnInit() {
      this.allBeers();
      this.showBreweryBeers();
  }

}
