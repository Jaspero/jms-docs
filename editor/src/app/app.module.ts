import {HttpClientModule} from '@angular/common/http';
import {CUSTOM_ELEMENTS_SCHEMA, DoBootstrap, Injector, NgModule} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  CUSTOM_COMPONENTS,
  DbService,
  FormBuilderContextService, FormBuilderModule,
  ROLE,
  STORAGE_URL,
  StorageService
} from '@jaspero/form-builder';

import {AppComponent} from './app.component';
import {EditorComponent} from './components/editor/editor.component';
import {MockDbService} from './shared/mock/mock-db.service';
import {MockStorageService} from './shared/mock/mock-storage.service';
import {SharedModule} from './shared/shared.module';
import {TranslocoRootModule} from './transloco/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    SharedModule,

    HttpClientModule,

    TranslocoRootModule,
    FormBuilderModule
  ],
  providers: [
    /**
     * FormBuilder
     */
    FormBuilderContextService,
    {
      provide: ROLE,
      useValue: 'admin'
    },
    {
      provide: STORAGE_URL,
      useValue: ''
    },
    {
      provide: StorageService,
      useClass: MockStorageService
    },
    {
      provide: DbService,
      useClass: MockDbService
    },
    {
      provide: CUSTOM_COMPONENTS,
      useValue: {}
    },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'outline'
      }
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const element = createCustomElement(EditorComponent, {injector});
    customElements.define('jms-editor', element);
  }

  ngDoBootstrap() {
  }
}
