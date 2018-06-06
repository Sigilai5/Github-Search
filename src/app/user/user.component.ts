import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user-class/user';
import {Repo} from '../user-class/repo';
import {getResponseURL} from '@angular/http/src/http_utils';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
    providers: [UserService]
})
export class UserComponent implements OnInit {

  user: User;
  repos: Repo;
  reporesults: any;

  userName: string;

  constructor(private userService: UserService) {}

  findProfile() {
      this.userService.updateProfile(this.userName);

      this.userService.getUserInfo();
      this.user = this.userService.user;

      this.userService.getRepoInfo(this.userName)
      this.reporesults = this.userService.newRepo;


      }



  ngOnInit() {

      this.userService.getRepoInfo(this.userName)
      this.repos = this.userService.repo;
      console.log(this.userService.repo.name);



  }

}
