import { Component } from '@angular/core';
import { Appointment } from '../models/appointment';
import { getLocaleDateFormat } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.css'
})
export class AppointmentListComponent implements OnInit  {
      ngOnInit(): void {
      //  throw new Error('Method not implemented.');
      let savedAppointments = localStorage.getItem("appointments")
      console.log("Data is Logged in")
      }

 // appointment : string = "Take me where wind is " ;
//  appointment : Appointment = {
//   id : 1 , 
//   title : "go for a walk",
//   date : new Date(),
//  }
      newAppointmenttitle : string = "" ;
      newAppointmentDate : Date = new Date();
      appointments : Appointment [] = [] ;

      addApointment(){
        alert(this.newAppointmenttitle + " " + this.newAppointmentDate +" Ok")
        if(this.newAppointmenttitle.trim().length && this.newAppointmentDate ){
          let newAppointment : Appointment = {
            id : Date.now(),
            title : this.newAppointmenttitle,
            date : this.newAppointmentDate
          }
          this.appointments.push(newAppointment);
          this.newAppointmenttitle = "",
          this.newAppointmentDate = new Date()
        //  alert(newAppointment)
        //alert(this.appointments.length)

        localStorage.setItem("appointments" , JSON.stringify(this.appointments))

        }
      }
      deleteAppointment(index : number){
        this.appointments.splice(index , 1)
      }

}
