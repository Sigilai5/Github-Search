import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user-class/user';
import {Repo} from './user-class/repo';
import {st} from '@angular/core/src/render3';


@Injectable({

  providedIn: 'root'
})
export class UserService {

    user: User;
    repo: Repo[];
    private userName: string;


  constructor(private http: HttpClient) {
        this.user = new User('', '','','','');
        this.repo = new Repo('','','')
        console.log('Service Works!');
        this.userName = 'reivhax';


  }

  getUserInfo() {

      interface ApiResponse {
          login: string;
          avatar_url:string;
          followers:string;
          following:string;
          public_repos:string;


      }

      let promise = new Promise(((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + environment.apiUrl).toPromise().then(response => {
           // console.log(response)
           // this.user.user=response.user
           //  console.log(response)
           //
               this.user.login = response.login;
               this.user.avatar_url = response.avatar_url;
               this.user.followers = response.followers;
               this.user.following = response.following;
               this.user.public_repos = response.public_repos;


           resolve();

       },

           error => {


               reject(error);
           }
       );
      });

      return promise;

  }

    getRepoInfo() {

        // interface ApiResponse {
        //     name:string;
        //     description:string;
        //     repo_url:string;
        //
        // }

        let promise = new Promise(((resolve, reject) => {
            this.http.get('https://api.github.com/users/' + 'Sigilai5' + '/repos?access_token=' + environment.apiUrl).
            toPromise().then(response => {

                    return this.repo
                    resolve();

                },
                error => {
                    reject(error);
                }
            );
        });

        return promise;

    }

    updateProfile(userName: string) {
      this.userName = userName;

    }

}
