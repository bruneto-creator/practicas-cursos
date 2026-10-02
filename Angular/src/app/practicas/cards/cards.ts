import { Component } from '@angular/core';
import { Card } from '../card/card';

@Component({
  selector: 'app-cards',
  imports: [Card],
  templateUrl: './cards.html',
  styleUrl: './cards.css'
})
export class Cards {}
