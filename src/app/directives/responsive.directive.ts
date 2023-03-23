import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective {

  constructor(
    private element:ElementRef,
    private breakpointObserver:BreakpointObserver
  ) { 
    /*In This Observe it accepts two parameters the 1st (Breakpoints.HandsetPortrait) is for the phone and the second is for the website(Breakpoints.WebLandscape) */
    this.breakpointObserver
    .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]) 
    .subscribe({
      next:(result:any)=>{
        //console.log(result);
        for(let breakpoint of Object.keys(result.breakpoints)) // loops for the breakpoint applied here 
        {
          if(result.breakpoints[breakpoint]){// checking the breakpoint 
            if(breakpoint==Breakpoints.HandsetPortrait) // if the break ponit is a HandsetPortrait then (this.pcMode=false;) is applied
            {
              //this.pcMode=false;
              this.element.nativeElement.classList.remove("pc");
            }
            if(breakpoint==Breakpoints.WebLandscape)  // if the break ponit is a WebLandscape then (this.pcMode=true;) is applied
            {
              //this.pcMode=true;
              this.element.nativeElement.classList.add("pc");
            }
          }
        }
      }
    })   
  }

}
