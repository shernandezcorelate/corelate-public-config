import { Component, OnInit } from '@angular/core';

import { AuthService } from '@corelate/auth/services';


@Component({
  selector: 'corelate-ui-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
