import { Component } from "@angular/core";
@Component({
    selector: "app-participant",
    templateUrl: "./participant.component.html",
    styleUrls: ["./participant.component.css"]
})
export class ParticipantComponent {
    participantID: number = 10;
    participantName: string = "holi";
    getParticipantDescription(id) {
        const descriotion = `Lovely and friendly`;
        return `${this.participantName}: ${descriotion}`
    }
}