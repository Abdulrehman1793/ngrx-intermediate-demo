import { Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';
import { CardService } from '../service/card.service';

export interface CardModel {
  id: number;
  title: string;
  amount: string;
  action: string;
}

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  cards$: Observable<CardModel[]> = of([]);

  constructor(private service: CardService) {
    service.loadData();
  }

  ngOnInit(): void {
    this.cards$ = this.service.cards;
  }
}
