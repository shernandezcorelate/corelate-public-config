import { Component, OnInit } from '@angular/core';

import { AuthService } from '@corelate/auth/services';


@Component({
  selector: 'corelate-ui-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
}
