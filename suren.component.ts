import { Component } from '@angular/core'
// import { BoldPipe } from './bold.pipe';

@Component({
    selector:'suren-component',
    template:`my name is <span [innerHtml]='name | mybold'></span>`,
     styles:['h1{color:red}']
})
export class SurenComponent{
   public name:string='suren';
}