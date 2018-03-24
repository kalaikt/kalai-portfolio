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
import { AwardsComponent } from './awards/awards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    ProjectsComponent,
    TestimonialComponent,
    EducationComponent,
    AwardsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path :'', component: MainComponent, data: { animation: '' } },
      { path :'about-me', component: MainComponent, data: { animation: 'about-me' } },
      { path :'education', component: EducationComponent, data: { animation: 'education' }},
      { path :'projects', component: ProjectsComponent, data: { animation: 'projects' } },
      { path :'testimonial', component: TestimonialComponent, data: { animation: 'testimonial' } },
      { path :'awards', component: AwardsComponent, data: { animation: 'awards' } }
    ])
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
