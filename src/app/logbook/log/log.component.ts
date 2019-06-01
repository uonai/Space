import { OnInit, OnDestroy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {DomSanitizer, Meta, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-log',
  styleUrls: ['./log.component.css'],
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  post: string;
  private postId: string;

  notFound = false;

  constructor(private route: ActivatedRoute,  private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(async (params) => {
      this.postId = params['id'];
      this.post =  './assets/logs/post/' + this.postId + '.md';

    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onError($event) {
    this.notFound = true;
  }

  sanitize(url: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
