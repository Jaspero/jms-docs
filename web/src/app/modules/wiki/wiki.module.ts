import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { WikiComponent } from './wiki.component';

const routes: Routes = [
  {
    path: ':id',
    component: WikiComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    WikiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class WikiModule { }
