import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZooComponent } from './zoo/zoo.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
//import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ZooComponent,
    ZooAnimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
