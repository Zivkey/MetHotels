import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RoomFormComponent } from './room-form/room-form.component';
import { RoomListComponent } from './room-list/room-list.component';
import { FormsModule } from '@angular/forms';
import { RoomService } from './room.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomFormComponent,
    RoomListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
