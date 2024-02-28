import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-private-page',
  standalone: true,
  imports: [],
  templateUrl: './private-page.component.html',
  styleUrl: './private-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivatePageComponent {

}
