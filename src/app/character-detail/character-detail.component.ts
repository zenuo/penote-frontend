import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { CharacterService } from '../character.service';
import { Character } from '../resources';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  /**
   * 字符
   */
  private char: Character = null

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private location: Location,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    //读取路径参数
    let id = this.route.snapshot.paramMap.get('id');
    console.info(`字符ID是${id}`)
    //获取信息
    this.characterService.get_by_id(id)
      .subscribe(char => {
        if (char.id !== null) {
          this.char = char
        } else {
          this.messageService.openSnackBar(
            '字符', `${id}不存在`
          )
        }
      })
  }
}
