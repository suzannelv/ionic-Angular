import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
  onSearchChange(e:any){
    // console.log(e);
    let value = e.detail.value
    console.log(value);
    
    
  }
}
