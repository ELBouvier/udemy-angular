import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ServerComponent } from'./server/server.component';
import { ServersComponent } from './servers/servers.component';
import { RedBoxComponent } from './red-box/red-box.component';
import { BlueBoxComponent } from './blue-box/blue-box.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    RedBoxComponent,
    BlueBoxComponent,
    WarningAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
