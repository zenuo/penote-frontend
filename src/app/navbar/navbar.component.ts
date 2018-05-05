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
    private dialog: MatDialog,
    private sessionService: SessionService,
    private messageService: MessageService
  ) { }

  /**
   * 点击"登入"按钮
   */
  signinClick() {
    let dialogRef = this.dialog.open(SigninDialog, {
      width: '250px'
    });
  }

  signupClick() {
    let dialogRef = this.dialog.open(SignupDialog, {
      width: '250px'
    });
  }

  /**
   * 点击"登出"按钮
   */
  signoutClick() {
    this.sessionService.signout().subscribe(result => {
      if (result) {
        //写入常量
        Constant.session_id = null
        Constant.user = null
        //提示
        this.messageService.openSnackBar('登出', `成功`)
      }
    })
  }

  /**
   * 判断是否登入
   */
  isSignin(): boolean {
    return Constant.session_id !== null
  }
}

//登入对话框
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

  /**
   * 点击提交按钮
   */
  submit(): void {
    this.sessionService
      .signin(this.user_name, this.password)
      .subscribe(sess => {
        if (sess != null) {
          Constant.session_id = sess.session
          //获取用户信息
          this.userService.get_by_user_id(sess.user_id).subscribe(user => {
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

  /**
   * 点击返回按钮
   */
  cancel(): void {
    this.dialogRef.close();
  }
}

/**
 * 注册对话框
 */
@Component({
  selector: 'signup-dialog',
  templateUrl: 'signup-dialog.html',
})
export class SignupDialog {
  private tag = '登入'

  user_name: string
  password: string
  email: string
  bio: string
  password_check: string

  constructor(
    public dialogRef: MatDialogRef<SignupDialog>,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  /**
   * 点击提交按钮
   */
  submit(): void {
    if (this.password == this.password_check) {
      this.userService
      .signup(this.user_name, this.email, this.bio, this.password)
      .subscribe(user => {
        if (user != null) {
          this.messageService.openSnackBar('注册', '成功, 可使用该帐号登录')
          //关闭对话框
          this.dialogRef.close()
        } else {
          this.messageService.openSnackBar('注册', '失败, 请重试其他用户名')
        }
      })
    } else {
      alert('请确认密码是否相同')
    }
  }

  /**
   * 点击返回按钮
   */
  cancel(): void {
    this.dialogRef.close()
  }
}