import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './banner/banner.component';
import { EducationComponent } from './education/education.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { ContactComponent } from './contact/contact.component';
import { ResponsiveDirective } from './directives/responsive.directive';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {RouterModule , Routes} from '@angular/router';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import { AboutComponent } from './about/about.component';



const routes:Routes=[
  //{path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:BannerComponent},
  {path:'about',component:AboutComponent},
  {path:'skill',component:SkillsComponent},
  {path:'education',component:EducationComponent},
  {path:'contact',component:ContactComponent},
  // {path:'registeration',component:RegistrationComponent,canDeactivate:[RegisterService]}, 
  // {path:'add',component:AddNoteComponent},
  // {path:'view',component:NoteViewComponent,canActivate:[ViewGuard]},  
  // {path:'edit/:id',component:NoteEditComponent,canDeactivate:[EditService]}, 
  // {path:'search',component:SearchComponent},
  // {path:'delete/:id',component:DeleteComponent},
  // {path:'login',component:LoginComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    EducationComponent,
    PersonalInformationComponent,
    SkillsComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    ContactComponent,
    ResponsiveDirective,
    NavigationComponent,
    NavbarComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    MatStepperModule,
    



    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
