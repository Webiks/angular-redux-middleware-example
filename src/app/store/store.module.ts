import { NgModule } from '@angular/core';

// Angular-redux ecosystem stuff.
// @angular-redux/form and @angular-redux/router are optional
// extensions that sync form and route location state between
// our store and Angular.
import { NgReduxModule, NgRedux } from '@angular-redux/store';

// The top-level reducers and epics that make up our app's logic.
import { rootReducer } from './reducers';
import { AppState, INITIAL_STATE } from './state.model';
import { ItemsAPIActions } from './actions';

@NgModule({
  imports: [
    NgReduxModule,
  ],
  providers: [
    ItemsAPIActions
  ]
})
export class StoreModule {
  constructor(
    public store: NgRedux<AppState>
  ) {
    // Tell Redux about our reducers and epics. If the Redux DevTools
    // chrome extension is available in the browser, tell Redux about
    // it too.
    store.configureStore(
      rootReducer,
      INITIAL_STATE
    );
  }
}
