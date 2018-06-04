import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user-class/user';

// import 'rxjs/add/operator/map';





@Injectable({
  providedIn: 'root'
})
export class UserService {

    searchName = 'Sigilai5';

    user: User;


  constructor(private http: HttpClient) {
        this.user = new User('');
        console.log('Service Works!');


  }

  getUserInfo() {

      interface ApiResponse {
          user: string;
      }

      const promise = new Promise(((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + 'Sigilai5' + '?access_token=' + environment.apiUrl).toPromise().then(response => {
           this.user.user = response.user;
            console.log(response)
           console.log("Hey There")

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
