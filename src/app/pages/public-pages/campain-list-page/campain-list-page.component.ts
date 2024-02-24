import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../../components/card/card.component';
import { campainsList } from '../../constants/campains';

@Component({
  selector: 'app-campain-list-page',
  standalone: true,
  imports: [NgFor, RouterLink, CardComponent],
  templateUrl: './campain-list-page.component.html',
  styleUrl: './campain-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampainListPageComponent {
  campainsList = campainsList;
}
