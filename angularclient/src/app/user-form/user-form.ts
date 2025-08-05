import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../user-service';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.html',
  styleUrls: ['./user-form.css']
})
export class UserForm {
  user: User = {
    id: 0,
    name: '',
    email: '',
    password: ''
  };
  confirmPassword = '';


  constructor(private userService: UserService, private router: Router) {}

  onSubmit(): void {
    this.userService.save(this.user).subscribe(result => this.router.navigate(['/users']));
  }
}
