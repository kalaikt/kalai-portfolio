import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ProjectsComponent } from './projects/projects.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { DataService } from './data.service';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProjectsComponent,
    TestimonialComponent,
    EducationComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      { path :'', component: MainComponent },
      { path :'about-me', component: MainComponent },
      { path :'education', component: EducationComponent },
      { path :'projects', component: ProjectsComponent },
      { path :'testimonial', component: TestimonialComponent },
      { path :'contact-me', redirectTo: '' },
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
