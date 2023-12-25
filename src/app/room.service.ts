import { Injectable } from '@angular/core';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private rooms: Room[] = [];

  getRooms(): Room[] {
    return this.rooms;
  }

  addRoom(room: Room): void {
    this.rooms.push(room);
  }
}
