import { Component, OnInit, Input } from '@angular/core';
import { ApiService, User } from 'src/app/services/api.service';

@Component({
  selector: 'user-side-nav',
  templateUrl: './user-side-nav.component.html',
  styleUrls: ['./user-side-nav.component.scss']
})
export class UserSideNavComponent implements OnInit {
  @Input() user: User;
  imgUrl: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getUser(this.user.user_id)
    .subscribe(value => this.imgUrl = value.data[0].profile_image_url)
  }

}
