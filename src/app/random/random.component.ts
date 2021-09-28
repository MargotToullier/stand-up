import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent implements OnInit {
  employees : any = [
    {
      name : "Jeff",
      status : true
    },
    {
      name : "Thomas",
      status : true
    },
    {
      name : "Margot",
      status : true
    },
    {
      name : "Camille",
      status : true
    },
  ];
  newEmployee:any = {};
  goRandom:boolean = false
  viewOrder : boolean = false;
  addNewPerson : boolean = false;
  newName : string = "";
  // allEmployees: boolean = false;
  refresh: boolean = false;
  employeesFilter: any[] = []
  constructor() { }

  random () {
    this.allEmployeesActive()
    let currentIndex = this.employeesFilter.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.employeesFilter[currentIndex], this.employeesFilter[randomIndex]] = [
        this.employeesFilter[randomIndex], this.employeesFilter[currentIndex]];
    }
    console.log(this.employeesFilter)

  }

  allEmployeesActive () {
    for (let i=0 ; i<this.employees.length ; i++){
         if (this.employees[i].status){
           this.employeesFilter.push(this.employees[i])
         }
      }
  }

  getRandom () {
    this.allEmployeesActive()
    this.refresh = true;
    this.viewOrder = true
    this.employeesFilter.length = 0
    this.random()
  }

  addPerson () {
    this.addNewPerson = !this.addNewPerson
  }

  getNewName (event : any) {
    this.newName = event.target.value
  }
  
  saveNewPerson () {
    this.newEmployee = {
      name: this.newName,
      status: true
    }
    this.employees.push(this.newEmployee)
  }
  
  statusEmployee (i:any) {
    this.employees[i].status = !this.employees[i].status;
  }

  deleteEmployee (i:any) {
    this.employees.splice(i, 1)
  }

  ngOnInit() {
    this.viewOrder = true
  }

}
