import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'counter',
    loadChildren: () =>
      import('./counter/counter.module').then((m) => m.CounterModule),
  },
  {
    path: 'jsonplaceholder',
    loadChildren: () =>
      import('./json-placeholder/json-placeholder.module').then(
        (m) => m.JsonPlaceholderModule
      ),
  },
  {
    path: 'testing',
    loadChildren: () =>
      import('./testingmodule/testingmodule.module').then(
        (m) => m.TestingmoduleModule
      ),
  },
  {
    path: 'cards',
    loadChildren: () =>
      import('./displaycard/displaycard.module').then(
        (m) => m.DisplaycardModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
