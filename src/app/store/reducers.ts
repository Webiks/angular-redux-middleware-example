import {AppState} from './state.model';
import {ItemsAPIAction, ItemsAPIActions} from './actions';
import {tassign} from 'tassign';


// a simple reducers
export const rootReducer = function(state: AppState, action: ItemsAPIAction): AppState{
  switch (action.type) {
    case ItemsAPIActions.ADD_ITEM:
      return tassign(state, {items: [...state.items, action.payload]});
    case ItemsAPIActions.DELETE_ITEM:
      if (state.selected === -1) {
        // no selected item - no change in state
        return state;
      }
      const currentItems = Array.from(state.items);
      currentItems.splice(state.selected, 1);
      return tassign(state, {
        items: currentItems,
        selected: -1
      });
    case ItemsAPIActions.SELECT_ITEM:
      return tassign(state, {selected: action.payload});
  }
  return state;
};
