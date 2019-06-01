import { OnInit, OnDestroy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import {DomSanitizer, Meta, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-log',
  styleUrls: ['./log.component.css'],
  templateUrl: './log.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LogComponent implements OnInit, OnDestroy {

  private sub: Subscription;

  post: string;
  private postId: string;

  notFound = false;

  constructor(private route: ActivatedRoute,  private sanitizer: DomSanitizer) {
    console.log('consturctor ran');
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(async (params) => {
      this.postId = params['id'];
      this.post =  './assets/logbook/logs/' + this.postId + '.md';

    });
    console.log(this.sub);
    console.log(this.postId);
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
