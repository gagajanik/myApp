import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  form: FormGroup;
  infoWindow = '';
  alr = '';
  constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    username : ['', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ])],
    firstName : ['', this.textValidation],
    lastName : ['', Validators.compose([
      Validators.required,
      Validators.minLength(4)
    ])],
  });
  }
submit() {
    if (this.form.valid) {
      this.infoWindow = '*ოპერაცია წარმატებით შესრულდა!';
    } else {
      this.infoWindow = '*შეავსეთ ყველა ველი!';
    }
}

textValidation(control) {
    if (control.value.length < 4) {
      return {'firstName': false};
    }
}
  ngOnInit() {
  }

}
