import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participants',
  templateUrl: "./participants.component.html",
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {
  allowNewParticipant = false;
  constructor() { }


  ngOnInit(): void {
  }

}
