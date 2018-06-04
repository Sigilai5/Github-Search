import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user-class/user';
import {HttpModule} from '@angular/http';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

  user: User;
    private http: any;

  constructor(private userService: UserService) {


  }

  ngOnInit() {

     this.userService.getUserInfo()
      this.user = this.userService.user;








  }

}
