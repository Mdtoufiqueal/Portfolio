import { Component, HostBinding } from '@angular/core';
import {BreakpointObserver,Breakpoints} from '@angular/cdk/layout';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  // work of the hostbinding is to decide where to use the class (class.pc) 
  //@HostBinding('class.pc') pcMode=false;
  constructor(private BreakpointObserver:BreakpointObserver)
  {
  }
  /* Install the angular cdk by the command npm install --save @angular/cdk */
  ngOnInit():void {
    /*In This Observe it accepts two parameters the 1st (Breakpoints.HandsetPortrait) is for the phone and the second is for the website(Breakpoints.WebLandscape) */
    // this.BreakpointObserver
    // .observe([Breakpoints.HandsetPortrait, Breakpoints.WebLandscape]) 
    // .subscribe({
    //   next:(result:any)=>{
    //     //console.log(result);
    //     for(let breakpoint of Object.keys(result.breakpoints)) // loops for the breakpoint applied here 
    //     {
    //       if(result.breakpoints[breakpoint]){// checking the breakpoint 
    //         if(breakpoint==Breakpoints.HandsetPortrait) // if the break ponit is a HandsetPortrait then (this.pcMode=false;) is applied
    //         {
    //           this.pcMode=false;
    //         }
    //         if(breakpoint==Breakpoints.WebLandscape)  // if the break ponit is a WebLandscape then (this.pcMode=true;) is applied
    //         {
    //           this.pcMode=true;
    //         }
    //       }
    //     }
    //   }
    // })
  }
    
}
