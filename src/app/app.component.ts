import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'frontend';
  constructor(private http: HttpClient) {}
  //formbuilder is a Service. When injected into a component via the constructor, it is called dependency injection.
  //whereby our component is dependent on the service (in this case the formbuilder), because our component needs to build a form, 
  //and angular will inject this service into our component. 
  contents: CartItem[] = [];
  item: CartItem;


  async ngOnInit() {
    this.contents= await this.http.get<CartItem[]>('http://localhost:3000/cart')
      .toPromise()
    //we need to tell angular what our /cart resource returns. to do that we put <CartItem[]>
    //this.http.get returns an observable. we need to convert it into a promise with .toPromise()
    //console.log(this.contents)

  }
  //Line 1 http: HttpClient;
  // constructor(h: HttpClient) {Line 2 this.http=this.http}
  // ngOnInit() {}
  //TS provides us a shortcut. Instead of writing lines 1 and 2, we just need to type private in front of h in the constructor.
  async seeItemDetails($event) {
    //$event is the event id
    //item = {id: "effer", item: "orange", quantity: 10}
    this.item = await this.http.get<CartItem>(`http://localhost:3000/cart/${$event}`)
      .toPromise()
  }

  //
  // async updateCart($event) {
  //   await this.http.put<any>(`http://localhost:3000/cart/${$event.id}`, $event)
  // }

}
