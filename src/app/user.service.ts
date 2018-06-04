import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user-class/user';

// import 'rxjs/add/operator/map';





@Injectable({
  providedIn: 'root'
})
export class UserService {

    clientid = '0bb3242b04827048589f';
    clientsecret = '93ef49c68878bddfe03c07bcaa22e15672af400f';

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
      });

      return promise;

  }
}
