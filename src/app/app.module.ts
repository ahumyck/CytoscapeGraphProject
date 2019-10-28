import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CytoscapeModule } from 'ngx-cytoscape';
import { GraphComponent } from './graph/graph.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent
  ],
  imports: [
    BrowserModule,
    CytoscapeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
