import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    username : ['', Validators.required]
  });
  }
submit() {
    alert(this.form.valid);
}
  ngOnInit() {
  }

}
