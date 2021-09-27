import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service: AppService) { }

  users: User[] = [];

  ngOnInit(): void {
    this.service.getUsers()
      .subscribe(users => {
        this.users = users;
      })
  }

}
