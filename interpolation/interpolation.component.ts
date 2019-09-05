import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent  {

  public name:string='surendra';
   public website:string=window.location.href;
   public getEmployee():string{
    return name;
  }
  }


