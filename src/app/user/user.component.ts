import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user-class/user';
import {Repo} from '../user-class/repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

  user: User;
  userName: string;

  constructor(private userService: UserService) {


  }

  findProfile() {
      this.userService.updateProfile(this.userName);

      this.userService.getUserInfo();
      this.user = this.userService.user;
      // console.log(this.userName)

  }

  ngOnInit() {




  }

}
