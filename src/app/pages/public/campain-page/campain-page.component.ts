import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlSanitizerPipe } from '@pipes/url-sanitizer.pipe';
import { CampainService } from '@services/campain/campain.service';
import { map, switchMap } from 'rxjs';

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

  private campainService = inject(CampainService);

  campainId$ = this.route.params.pipe(map((params) => params['id'] as string));

  campain$ = this.campainId$.pipe(
    switchMap((campainId) => {
      return this.campainService.get(campainId);
    }),
  );
}
