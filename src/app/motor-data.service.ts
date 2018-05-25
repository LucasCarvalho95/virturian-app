  import {Injectable} from '@angular/core';
  import {Motor} from './motor';
  import { HttpClient } from '@angular/common/http';

  @Injectable()
  export class MotorDataService {

  lastId: number = 0;

  motors: Motor[] = [];

  constructor(private httpClient : HttpClient) {
  }

  addMotor(motor: Motor): MotorDataService {
    if (!motor.id) {
      motor.id = ++this.lastId;
    }
    this.motors.push(motor);
    return this;
  }

  deleteMotorById(id: number): MotorDataService {
    this.motors = this.motors
      .filter(motor => motor.id !== id);
    return this;
  }

  updateMotorById(motor: Motor): Motor {
    let savedData = this.getMotorById(motor.id);
    if (!Motor) {
      return null;
    }
    Object.assign(savedData, motor);
    return savedData;
  }

  getAllMotors(): Motor[] {
    return this.motors;
  }

  getMotorById(id: number): Motor {
    return this.motors
      .filter(motor => motor.id === id)
      .pop();
  }

}
