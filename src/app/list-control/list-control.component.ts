import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store/state.model';
import { ItemsAPIActions } from '../store/actions';

@Component({
  selector: 'app-list-control',
  templateUrl: './list-control.component.html',
  styleUrls: ['./list-control.component.css']
})
export class ListControlComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }
  addItem(value) {
    console.log('add');
    this.ngRedux.dispatch({
      type: ItemsAPIActions.ADD_ITEM,
      payload: value
    });
  }
  deleteSelectedItem() {
    console.log('delete');
    this.ngRedux.dispatch({
      type: ItemsAPIActions.DELETE_ITEM,
      payload: null
    });
  }
}
