import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { campainsList } from '../../constants/campains';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  campainsList = campainsList;
}
