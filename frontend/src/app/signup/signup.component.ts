import { Component, OnInit } from '@angular/core';
import { Mode } from '../app-constant';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  mode = Mode.SIGNUP

  constructor() { }

  ngOnInit() {
  }

}
