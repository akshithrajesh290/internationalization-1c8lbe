import { Routes, RouterModule } from '@angular/router';
import { SessionsComponent } from './sessions/sessions.component';
import { SessionDetailComponent } from './sessions/session-detail/session-detail.component';

const appRoutes: Routes = [
  { path: 'sessions', component: SessionsComponent },
  { path: 'sessions/sessionid/detail', component: SessionDetailComponent },
  { path: '**', redirectTo: 'sessions/sessionid/detail' }
];

export const routing = RouterModule.forRoot(appRoutes);
