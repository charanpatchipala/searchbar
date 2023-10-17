import {
  ApplicationRef,
  ApplicationModule,
  enableProdMode,
  NgModuleRef,
} from '@angular/core';
import { createNewHosts, removeNgStyles } from '@angularclass/hmr';

export const hmrBootstrap = (
  module: any,
  bootstrap: () => Promise<NgModuleRef<ApplicationModule>>
) => {
  let ngModule: NgModuleRef<ApplicationModule>;
  module.hot.accept();

  bootstrap()
    .then((mod) => (ngModule = mod))
    .catch((err) => console.error(err));

  module.hot.dispose(() => {
    const appRef: ApplicationRef = ngModule.injector.get(ApplicationRef);
    const elements = appRef.components.map((c) => c.location.nativeElement);
    const makeVisible = createNewHosts(elements);
    removeNgStyles();
    ngModule.destroy();
    makeVisible();
  });
};
