import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponentComponent } from './components/child-component/child-component.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule],
  declarations: [
    AppComponent,
    LandingPageComponent,
    ParentComponentComponent,
    ChildComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
