import { NgIf, AsyncPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PartyService } from '@services/party/party.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-party-page',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './party-page.component.html',
  styleUrl: './party-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartyPageComponent {
  route = inject(ActivatedRoute);

  private partyService = inject(PartyService);

  partyId$ = this.route.params.pipe(map((params) => params['id'] as string));

  party$ = this.partyId$.pipe(
    switchMap((partyId) => {
      return this.partyService.get(partyId);
    }),
  );
}
