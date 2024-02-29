import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from '@services/profile/profile.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent {
  route = inject(ActivatedRoute);

  private profileService = inject(ProfileService);

  profileId$ = this.route.params.pipe(map((params) => params['id'] as string));

  profile$ = this.profileId$.pipe(
    switchMap((profileId) => {
      return this.profileService.get(profileId);
    }),
  );
}
