// 消息服务
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MessageService {

  constructor(public snackBar: MatSnackBar) { }

  /**
   * 打开snack bar, 显示消息
   * @param message 消息
   * @param action 动作
   */
  openSnackBar(message: string, action: string) {
    console.info(`消息, ${message}-${action}`)
    this.snackBar.open(message, action, {
      duration: 2000,
    })
  }
}
