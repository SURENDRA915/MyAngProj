import { Component} from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent  {
  myFunction(value){
    alert('my function is calling...'+value)
  }



}
