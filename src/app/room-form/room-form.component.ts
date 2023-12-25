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
      additionalServices: this.formBuilder.group({
        airConditioning: [false],
        miniBar: [false],
        sauna: [false]
      })
    });
  }

  onSubmit(): void {
    if (this.roomForm.valid) {

      const newRoom: Room = {
        number: this.roomForm.value.roomNumber,
        floor: this.roomForm.value.roomFloor,
        type: this.roomForm.value.roomType,
        additionalServices: this.roomForm.value.additionalServices,
        price: this.roomForm.value.roomPrice,
      };
      let additionalPrice = 0.0

      if (newRoom.additionalServices.airConditioning) {
        additionalPrice += 10;
      }
      if (newRoom.additionalServices.miniBar) {
        additionalPrice += 30;
      }
      if (newRoom.additionalServices.sauna) {
        additionalPrice += 50;
      }
      newRoom.price += additionalPrice;

      this.roomService.addRoom(newRoom);
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