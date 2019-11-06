import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from "./post";
import { Observable} from 'rxjs';

//For a class to be a service, the @Injectable () declaration must be declared.
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient  ) { }
  path: string = "https://jsonplaceholder.typicode.com/"


  getPosts(userid) : Observable<Post[]> {

    if (userid) {
      let newPath = this.path + "posts?userId=" + userid
     return this.http.get<Post[]>(newPath);
      
    }
    else {
      return this.http.get<Post[]>(this.path + "posts")
      }
    }
  }
