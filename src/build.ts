/* Build-time constants, injected by Vite `define` (see vite.config.ts).

   APP_VERSION mirrors package.json; BUILD_TARGET is 'local' for the downloadable
   single-file CRTL.html and 'web' for the hosted build. The two builds share this
   whole source tree - the target only gates the few behaviours that differ (the
   hosted https build can't probe http LAN hosts; see probes.ts). */

export const APP_VERSION: string = __APP_VERSION__;
const BUILD_TARGET: 'local' | 'web' = __BUILD_TARGET__;

/** Hosted build served over https - can't reach http LAN targets. */
export const IS_WEB = BUILD_TARGET === 'web';
