import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})

export class UserList implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }

  trackById(index: number, user: User): number {
    return user.id;
  }

}
