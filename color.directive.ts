import { Directive,ElementRef,Renderer } from '@angular/core';


@Directive({
  selector: '[myColor]'
})
export class ColorDirective {

  constructor(e1:ElementRef,rend:Renderer) {
    rend.setElementStyle(e1.nativeElement,'color','red');
    rend.setElementStyle(e1.nativeElement,'background-color','yellow')
    
    }
    
   

}
