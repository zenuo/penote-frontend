import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

import { SessionService } from '../session.service';
import { MessageService } from '../message.service';
import { Session, User, Constant } from '../resources';
import { UserService } from '../user.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private dialog: MatDialog
  ) { }

  //点击"登入"按钮
  signinClick() {
    let dialogRef = this.dialog.open(SigninDialog, {
      width: '250px'
    });
  }

  isSignin(): boolean {
    return Constant.session_id !== null
  }
}

// 登入对话框
@Component({
  selector: 'signin-dialog',
  templateUrl: 'signin-dialog.html',
})
export class SigninDialog {

  private tag = '登入'
  user_name: string
  password: string

  constructor(
    public dialogRef: MatDialogRef<SigninDialog>,
    private sessionService: SessionService,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  submit(): void {
    this.sessionService
      .signin(this.user_name, this.password)
      .subscribe(sess => {
        if (sess != null) {
          Constant.session_id = sess.session
          //获取用户信息
          this.userService.get(sess.user_id).subscribe(user => {
            if (user != null) {
              //写入常量
              Constant.user = user
              //提示
              this.messageService.openSnackBar(this.tag, `成功${user.name}`)
              //关闭
              this.dialogRef.close()
            }
          })
        } else {
          this.messageService.openSnackBar(this.tag, '用户名或密码错误,请重试')
        }
      })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}