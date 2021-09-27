import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  actorName = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.actorName = this.route.snapshot.params.actor;
  }

}
