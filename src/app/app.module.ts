import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { CoreModule } from './core/core.module';
import { appReducer } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TestingmoduleModule } from './testingmodule/testingmodule.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(appReducer),
    CoreModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      trace: true,
      traceLimit: 75,
    }),
    EffectsModule.forRoot([]),
    TestingmoduleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
