import { Component } from '@angular/core';
import {MotorDataService } from './motor-data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {Motor} from './motor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MotorDataService]
})
export class AppComponent {

  newMotor: Motor = new Motor();

  numberPolesOptions = [2,4,6,8];

  voltageOptions = [220,380,440];

  dutyClassOptions = ["S1","S2","S3","S4","S5"];

  constructor(private motorDataService: MotorDataService) {
    debugger;
  }

  saveMotor(motor) {
    if(motor.id) {
     
    }
  }

  addMotor() {
    this.motorDataService.addMotor(this.newMotor);
    this.newMotor = new Motor();
  }

  removeMotor(motor) {
    this.motorDataService.deleteMotorById(motor.id);
  }

  get motors() {
    return this.motorDataService.getAllMotors();
  }

}