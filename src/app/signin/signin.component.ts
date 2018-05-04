import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';
import { MessageService } from '../message.service';
import { Session } from '../resources';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private sessionService: SessionService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.signin()
  }

  signin() {
    this.sessionService
      .signin('hello', '123456')
      .subscribe(response => {
        if (response != null) {
          this.messageService.openSnackBar('登入', `成功${response.user_id}`)
        } else {
          this.messageService.openSnackBar('登入', '用户名或密码错误,请重试')
        }
      });
  }
}
