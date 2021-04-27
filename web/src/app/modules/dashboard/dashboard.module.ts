import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormBuilderModule } from '@jaspero/form-builder';
import { HighlightModule } from 'ngx-highlightjs';
import { SharedModule } from '../../shared/shared.module';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'fields',
    loadChildren: () => import('../fields/fields.module').then(m => m.FieldsModule)
  },
  {
    path: 'wiki',
    loadChildren: () => import('../wiki/wiki.module').then(m => m.WikiModule)
  }
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    SharedModule,
    FormBuilderModule,
    HighlightModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
