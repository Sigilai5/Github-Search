import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {User} from './user-class/user';
import {Repo} from './user-class/repo';



@Injectable({

  providedIn: 'root'
})
export class UserService {

    user: User;
     repo: Repo;
     newRepo: any;
    private userName: string;


  constructor(private http: HttpClient) {
        this.user = new User('', '', '', '', '');
        this.repo = new Repo('', '', '');
        console.log('Service Works!');
        this.userName = 'Sigilai5';


  }

  getUserInfo() {

      interface ApiResponse {
          login: string;
          avatar_url: string;
          followers: string;
          following: string;
          public_repos: string;


      }

      const promise = new Promise(((resolve, reject) => {
       this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '?access_token=' + environment.apiUrl).toPromise().then(response => {

           // this.user.user=response.user
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
      }));

      return promise;

  }

    getRepoInfo(username) {

         interface ApiResponse {
             name:string;
            repo_url:string;
             description:string;

         }

        const promise = new Promise(((resolve, reject) => {
            this.http.get<ApiResponse>('https://api.github.com/users/' + this.userName + '/repos?access_token=' + environment.apiUrl).
            toPromise().then(response_repo => {

                    this.newRepo = response_repo
                console.log(this.newRepo)

                // this.repo.name = response_repo.name
                //     this.repo.repo_url = response_repo.repo_url
                //     this.repo.description = response_repo.description




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
