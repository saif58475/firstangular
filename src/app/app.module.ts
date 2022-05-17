import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { EducationComponent } from './education/education.component';
import { EventsComponent } from './events/events.component';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { WhatangularComponent } from './whatangular/whatangular.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    FeaturesComponent,
    ResourcesComponent,
    EducationComponent,
    EventsComponent,
    BlogComponent,
    CommunityComponent,
    WhatangularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
