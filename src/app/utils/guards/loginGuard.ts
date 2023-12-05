import {inject} from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/loging/login.service';

export const loginGuard = () => {
  const service = inject(LoginService);
  const router = inject(Router);

  return true;
};