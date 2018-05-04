import { Component, OnInit, Inject } from '@angular/core';
import { SessionService } from '../session.service';
import { MessageService } from '../message.service';
import { Session, User } from '../resources';
import { Constant } from '../constants';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  constructor(
    private sessionService: SessionService,
    private messageService: MessageService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    setTimeout(()=>{
      let dialogRef = this.dialog.open(SigninDialog, {
        width: '250px'
      });
    })
  }
}

@Component({
  selector: 'signin-dialog',
  templateUrl: 'signin-dialog.html',
})
export class SigninDialog {
  
  user_name: string = ""
  password: string = ""

  constructor(
    public dialogRef: MatDialogRef<SigninDialog>,
    private sessionService: SessionService,
    private messageService: MessageService,
    private userService: UserService
  ) { }

  signin() {
    this.sessionService
      .signin(this.user_name, this.password)
      .subscribe(sess => {
        if (sess != null) {
          Constant.session_id = sess.session
          //获取用户信息
          this.userService.get(sess.user_id).subscribe(user => {
            if (user != null) {
              Constant.user = user
              this.messageService.openSnackBar('登入', `成功${user.name}`)
            }
          })
        } else {
          this.messageService.openSnackBar('登入', '用户名或密码错误,请重试')
        }
      })
  }

  cancel(): void {
    this.dialogRef.close();
  }
}