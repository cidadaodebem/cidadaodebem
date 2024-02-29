import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AgentService } from '@services/agent/agent.service';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-agent-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, RouterLink],
  templateUrl: './agent-page.component.html',
  styleUrl: './agent-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgentPageComponent {
  route = inject(ActivatedRoute);

  private agentService = inject(AgentService);

  agentId$ = this.route.params.pipe(map((params) => params['id'] as string));

  agent$ = this.agentId$.pipe(
    switchMap((agentId) => {
      return this.agentService.get(agentId);
    }),
  );
}
