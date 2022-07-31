import { AfterViewInit, Component, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import  React from 'react';
import  ReactDOM from 'react-dom';
import { News } from './MyReactComponent';


@Component({
  selector: 'app-root',
  template: '<div [id]="rootId"></div>',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnChanges, AfterViewInit, OnDestroy{
  title = 'frontend';
  public rootId = 'rootId';
  ngOnChanges(changes: SimpleChanges): void {
    this.render()
  }
  ngAfterViewInit(): void {
    this.render()
  }
  ngOnDestroy(): void {
    
  }

  private render(){
    ReactDOM.render(React.createElement(News),document.getElementById(this.rootId))
  }
}
