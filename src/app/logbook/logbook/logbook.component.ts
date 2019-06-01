import {Component, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-logbook',
  styleUrls: ['./logbook.component.css'],
  templateUrl: './logbook.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LogBookComponent implements OnInit {

  ngOnInit() {
    console.log('logbook ran');
  }


}
