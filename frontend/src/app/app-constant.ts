import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


export class Mode {
    static readonly SIGNIN = 'in';
    static readonly SIGNUP = 'up';
    static readonly DEFAULT = Mode.SIGNIN;


}
export class Header {
    static readonly SIGNIN = "Welcome back."
    static readonly SIGNUP = "Join us."
    static readonly DEFAULT = Header.SIGNIN;



}
export class AppRoutes {
}