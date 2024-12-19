import {Component, OnInit} from '@angular/core';

import {Post} from "../../interfaces/post.interface";
import {DataService} from "../../services/request-all.service";


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = []

  constructor(private getPostsService: DataService) {}

  ngOnInit() {
    this.getPosts()
  }

  private getPosts() {
    this.getPostsService.getAll('/post').subscribe({
      next: (posts) => {
        this.posts = posts as Post[]
        console.log(this.posts)
      }
    })
  }
}
