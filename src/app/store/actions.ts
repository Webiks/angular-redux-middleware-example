import { Injectable } from '@angular/core';
import { FluxStandardAction } from 'flux-standard-action';
export type ItemsAPIAction = FluxStandardAction<any, string>;

@Injectable()
export class ItemsAPIActions {
  static readonly ADD_ITEM = 'ADD_ITEM';
  static readonly DELETE_ITEM = 'DELETE_ITEM';
  static readonly SELECT_ITEM = 'SELECT_ITEM';
}
