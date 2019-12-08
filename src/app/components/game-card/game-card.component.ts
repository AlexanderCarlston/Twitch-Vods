import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})
export class GameCardComponent implements OnInit {
  @Input() game: object;
  constructor() { }

  ngOnInit() {
    console.log(this.game);
  }

  validImgSrc(src: string) {
    return src.replace('{width}', '180').replace('{height}', '250');
  }
}
