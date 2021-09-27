import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.queryParamMap.get('age'));

    this.route.queryParams
      .subscribe(queryParams => {
        console.log(queryParams);
      });
  }

  redirectToHomePage(){
    this.router.navigateByUrl('/');
  }

}
