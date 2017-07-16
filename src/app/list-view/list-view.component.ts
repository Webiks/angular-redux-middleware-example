import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NgRedux, select } from '@angular-redux/store';
import {ItemsAPIActions} from '../store/actions';
import {AppState} from '../store/state.model';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @select('items') readonly items: Observable<number>;

  constructor(private ngRedux: NgRedux<AppState>) {
    this.items.subscribe(newList => console.log(newList));
  }

  ngOnInit() {
  }

  selectItem(value) {
    console.log('selected: ' + value);
    this.ngRedux.dispatch({
      type: ItemsAPIActions.SELECT_ITEM,
      payload: value
    });
  }
}

