import { OnInit, OnDestroy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-log',
  styleUrls: ['./log.component.css'],
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  post: string;
  private postId: string;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.postId = params['id'];
      this.post = './assets/logs/post/' +  this.postId + '.md';
    });
    console.log(this.post);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

}