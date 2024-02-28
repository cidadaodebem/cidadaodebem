import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '@components/card/card.component';
import { CampainService } from '@services/campain/campain.service';

@Component({
  selector: 'app-campain-list-page',
  standalone: true,
  imports: [NgFor, RouterLink, CardComponent, NgIf, AsyncPipe],
  templateUrl: './campain-list-page.component.html',
  styleUrl: './campain-list-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampainListPageComponent {
  campainsList$ = this.campainService.list();

  constructor(private campainService: CampainService) {}
}
