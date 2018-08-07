import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { jsonpFactory } from '@angular/http/src/http_module';


@Injectable({
  providedIn: 'root'
})
export class BeerService {

  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message);
  }

  allBeers(){
    return this.http.get('http://localhost:3000/api/beers', {withCredentials: true})
    .map((res) => res.json())
    .catch(this.handleError)
  }

  oneBeer(theBreweryID){
    return this.http.get('http://localhost:3000/api/breweries/' + theBreweryID + '/beers', theBreweryID)
    .map((res) => res.json())
    .catch(this.handleError)
  }

  createBeer(theBreweryID){
    return this.http.post('http://localhost:3000/api/breweries/' + theBreweryID + '/beers/create', theBreweryID)
    .map((res) => res.json())
    .catch(this.handleError)
  }

}
