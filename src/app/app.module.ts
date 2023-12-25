import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';
import { FormsModule } from '@angular/forms';
import { RoomService } from './room.service';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { OffersComponent } from './offers/offers.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReccomendationsComponent } from './reccomendations/reccomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomFormComponent,
    RoomListComponent,
    NavbarComponent,
    OffersComponent,
    AboutUsComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
