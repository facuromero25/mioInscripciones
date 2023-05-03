import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService, LoginFormValue } from '../../services/auth-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailControl = new FormControl('', [Validators.required]);
  passwordControl = new FormControl('',[Validators.required]);
  loginForm = new FormGroup({
    email: this.emailControl,
    password:this.passwordControl,
  })

  constructor(private AuthServiceService:AuthServiceService, private activatedRoute: ActivatedRoute){

  }

  onSubmit(): void{
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched();
    }else{
      this.AuthServiceService.login(this.loginForm.value as LoginFormValue)
    }
  }

}
