import { Component, OnInit  } from '@angular/core';
import { ZenEvents  } from '../zen-events';
import { DUMMY_DATA } from '../data/dummy-data';

import { ZenEventsService } from '../zen-events.service';

@Component({
  selector: 'zen-event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})


export class EventComponent implements OnInit {
  title = "Event List";

  events: ZenEvents[];

  constructor(private eventService: ZenEventsService) { }

  getZenEvents() : void {
    this.eventService.getZenEvents()
      .then(events => this.events = events);
    console.log("displaying events");
    console.log(this.events);
  }

  ngOnInit() : void {
    console.log("i'm trying to get events");
    this.getZenEvents();
    console.log(this.getZenEvents());
    console.log("done getting events");
  }
}
