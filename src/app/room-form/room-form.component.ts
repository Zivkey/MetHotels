import { Component } from '@angular/core';
import { Room } from '../room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {
  room: Room = new Room(0, '', 0, 0);

  constructor(private roomService: RoomService) {}

  onSubmit(): void {
    this.roomService.addRoom(this.room);
    this.room = new Room(0, '', 0, 0);
  }
}
