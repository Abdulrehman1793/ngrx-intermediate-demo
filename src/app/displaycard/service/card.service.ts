import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import * as cardsJson from '../cards.json';
import { CardModel } from '../display/display.component';

@Injectable({ providedIn: 'root' })
export class CardService {
  cards = new BehaviorSubject<CardModel[]>([]);

  constructor() {}

  loadData() {
    this.cards.next((cardsJson as any).default);
  }
}
