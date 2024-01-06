import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Room } from '../room.model';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-form',
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss']
})
export class RoomFormComponent {
  roomForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private roomService: RoomService) {
    this.roomForm = this.formBuilder.group({
      roomNumber: [0, Validators.required],
      roomFloor: [0, [Validators.required, Validators.min(1)]],
      roomType: ['', [Validators.required, Validators.minLength(4)]],
      roomPrice: [0, [Validators.required, Validators.min(1)]],
      airConditioning: [false], 
      miniBar: [false],         
      sauna: [false],           
      numberOfNights: [1, Validators.min(1)]
    });
  }

  onSubmit(): void {
    if (this.roomForm.valid) {
      const roomPrice = this.roomForm.value.roomPrice;
      const numberOfNights = this.roomForm.value.numberOfNights;
  
      const newRoom: Room = {
        number: this.roomForm.value.roomNumber,
        floor: this.roomForm.value.roomFloor,
        type: this.roomForm.value.roomType,
        numberOfNights: this.roomForm.value.numberOfNights,
        airConditioning: this.roomForm.value.airConditioning ?? false,
        miniBar: this.roomForm.value.miniBar ?? false,
        sauna: this.roomForm.value.sauna ?? false,
        price: this.roomService.getPrice(roomPrice, numberOfNights), 
      };
      console.log(newRoom)
      
      let additionalPrice = 0.0;
  
      if (newRoom.airConditioning) {
        additionalPrice += 10;
      }
      if (newRoom.miniBar) {
        additionalPrice += 30;
      }
      if (newRoom.sauna) {
        additionalPrice += 50;
      }
      newRoom.price += additionalPrice;
      
      this.roomService.createRoom(newRoom).subscribe(
        response => {
          console.log('Room created successfully:', response);
          this.roomService.updateRooms();
        },
        error => {
          console.error('Error creating room:', error);
        }
      );
        this.roomForm.reset();
    } else {
      this.markFormGroupTouched(this.roomForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}