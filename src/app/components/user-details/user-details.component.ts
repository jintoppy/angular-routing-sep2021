import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { User } from '../../models/user';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  actorName = '';
  user?:User;

  constructor(private route: ActivatedRoute, private service: AppService) { }

  ngOnInit(): void {
    // let userId = this.route.snapshot.paramMap.get('userId');
    // this.route.paramMap.subscribe(paramMap => {
    //   console.log(paramMap.get('userId'));
    // });
    // let userId = this.route.snapshot.params.userId;
    // this.route.params.subscribe(params => {
    //   let {userId} = params;
    //   this.service.getUser(userId)
    //     .subscribe(user => {
    //       this.user = user;
    //     });
    // })
    
    this.route.params
      .pipe(
        switchMap(({userId}) => this.service.getUser(userId))
      )
      .subscribe(user => {
        this.user = user;
      });
    

  }

}
