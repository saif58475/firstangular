import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CommunityComponent } from './community/community.component';
import { EducationComponent } from './education/education.component';
import { EventsComponent } from './events/events.component';
import { FeaturesComponent } from './features/features.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ResourcesComponent } from './resources/resources.component';
import { WhatangularComponent } from './whatangular/whatangular.component';

const routes: Routes = [
  { path: '',redirectTo: '/Introduction',pathMatch: 'full'},
  {path:'Introduction',component:IntroductionComponent},
  {path:'whatangular',component:WhatangularComponent},
  {path:'Features',component:FeaturesComponent},
  {path:'Resources',component:ResourcesComponent},
  {path:'Education',component:EducationComponent},
  {path:'Community',component:CommunityComponent},
  {path:'Events',component:EventsComponent},
  {path:'Blog',component:BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
