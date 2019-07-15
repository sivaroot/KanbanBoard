import { Component, OnInit } from '@angular/core';
import { Mode } from '../app-constant';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  mode = Mode.SIGNIN
  constructor() { }

  ngOnInit() {
  }

}
