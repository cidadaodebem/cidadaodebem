import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivatePageComponent {}
