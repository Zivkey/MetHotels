import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room.model';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:1312/v1/rooms';
  private rooms: Room[] = [];

  constructor(private http: HttpClient) {}

  getRooms(): Room[] {
    return this.rooms;
  }

  getRoomsFromApi(): void {
    this.http.get<Room[]>(this.apiUrl).subscribe(
      (rooms) => {
        this.rooms = rooms;
      },
      (error) => {
        console.error('Error fetching rooms from the API:', error);
      }
    );
  }

  getPrice(roomPrice: number, numberOfNights: number): number {
    return roomPrice * numberOfNights;
  }

  createRoom(room: Room): Observable<any> {
    return this.http.post(this.apiUrl, room);
    }

  updateRooms(): void {
    this.getRoomsFromApi();
  }
}