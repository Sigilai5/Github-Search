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


      interface ApiResponse {
          user: string;
      }

      const promise = new Promise(((resolve, reject) => {
          this.http.get<ApiResponse>('https://api.github.com/users/' + 'Sigilai5' + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret).toPromise().then(response => {
                  this.user.user = response.user;
                  console.log(response)

                  resolve();

              },

              error => {
                  this.user.user = 'Never, never, never give up.';

                  reject(error);
              }
          );
      })

      return promise;
  }

  }

}
