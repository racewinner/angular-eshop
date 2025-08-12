import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { TokenService } from 'src/app/core/services/token.service';
import { AccountToken } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],//CommonModule, ReactiveFormsModule
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(): void {
    this.userService.login().subscribe({
      next: (response: AccountToken) => {
        alert("register axios came back successfully!")
        setTimeout(() => {
          this.router.navigate(['/dashboard'])
        })
      },
      error: (error: any) => {
        debugger
        console.log(error);
      }
    })
  }
}
