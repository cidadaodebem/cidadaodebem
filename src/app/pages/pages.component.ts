import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { appConstants } from '../constants/app.constants';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [RouterOutlet, NgIf, RouterLink, AsyncPipe],
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagesComponent {
  constants = appConstants;

  showLeftMenu$ = new ReplaySubject();
}
