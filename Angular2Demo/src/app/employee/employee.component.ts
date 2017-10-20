import {Component} from '@angular/core'

@Component({
  selector: 'my-employee',
  templateUrl: 'app/employee/employee.component.html',
  //styles: ['table {font-weight: bold; color: green}']
  styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
  firstName: string = 'Tom';
  lastName: string = 'Hopkins';
  gender: string = 'Male';
  age: number = 20;
}