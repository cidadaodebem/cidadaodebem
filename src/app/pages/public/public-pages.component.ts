import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-pages',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './public-pages.component.html',
  styleUrl: './public-pages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicPagesComponent {}
