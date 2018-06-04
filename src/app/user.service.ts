import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user-class/user';


@Injectable({

  providedIn: 'root'
})
export class UserService {

    user: User;


  constructor(private http: HttpClient) {
        this.user = new User('', '');
        console.log('Service Works!');


  }

  getUserInfo() {

      interface ApiResponse {
          login: string;
          avatar_url:string;
      }

      let promise = new Promise(((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + 'Sigilai5' + '?access_token=' + environment.apiUrl).toPromise().then(response => {
           // console.log(response)
           // this.user.user=response.user
            console.log(response)
           //
               this.user.login = response.login;
               this.user.avatar_url = response.avatar_url;

           resolve();

       },

           error => {


               reject(error);
           }
       );
      })

      return promise;

  }
}
