/**
 * Created by yuval on 16/07/17.
 */
export interface AppState {
  items: string[];
  selected: number;
}
export const INITIAL_STATE = {
  items: new Array<string>(),
  selected: -1
};
