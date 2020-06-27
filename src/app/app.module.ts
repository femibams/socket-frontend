import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = { url: 'http://localhost:4444', options: {} };

import { AppComponent } from './app.component';
import { AuctionListComponent } from './components/auction-list/auction-list.component';
import { AuctionComponent } from './components/auction/auction.component';

@NgModule({
  declarations: [
    AppComponent,
    AuctionListComponent,
    AuctionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
