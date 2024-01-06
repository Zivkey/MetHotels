import { Component } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {
  constructor(public roomService: RoomService) {}

  ngOnInit(): void {
    this.roomService.getRoomsFromApi();
  }

  getRooms(): void {
    this.roomService.getRoomsFromApi();
  }
}
