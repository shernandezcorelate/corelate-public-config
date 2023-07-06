import { Component, OnInit } from '@angular/core';
import { AuthService } from '@corelate/auth/services';

@Component({
  selector: 'corelate-ui-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(private authService: AuthService) {}

  ngOnInit() { }

  logout() {
    this.authService.logout();
  }
}
