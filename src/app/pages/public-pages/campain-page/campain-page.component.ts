import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { UrlSanitizerPipe } from '../../../pipes/url-sanitizer.pipe';
import { campainsMap } from '../../constants/campains';

@Component({
  selector: 'app-campain-page',
  standalone: true,
  imports: [CommonModule, UrlSanitizerPipe],
  templateUrl: './campain-page.component.html',
  styleUrl: './campain-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampainPageComponent {
  route = inject(ActivatedRoute);

  campainId$ = this.route.params.pipe(map((params) => params['id'] as string));

  campainsMap = campainsMap;
}
