import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  contactForm = new FormGroup({
    firstname: new FormControl('', [Validators.required,Validators.minLength(10)]),
    lastname: new FormControl(),
    email: new FormControl(),
    gender: new FormControl(),
    isMarried: new FormControl(),
    country: new FormControl()
  });
  countryList:country[] = [
    new country("1", "Pakistan"),
    new country('2', 'Germany'),
    new country('3', 'USA')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.contactForm.value);
  }
}

export class country {
  id:string;
  name:string;

  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}
