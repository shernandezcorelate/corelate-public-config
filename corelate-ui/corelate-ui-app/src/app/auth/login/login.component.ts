import { Component, OnInit } from '@angular/core';

import { AuthService } from '@corelate/auth/services';


@Component({
  selector: 'corelate-ui-login',
  template: ''
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.obtainAccessToken();
  }
}
