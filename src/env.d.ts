/// <reference types="astro/client" />

import type { AtlasAuth } from '@atlasauth/astro/server';

declare global {
  namespace App {
    interface Locals {
      atlas: AtlasAuth;
    }
  }
}

export {};
