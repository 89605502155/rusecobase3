import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { StationsItemComponent } from './stations-item/stations-item.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';



@NgModule({
  declarations: [
    MapComponent,
    StationsItemComponent,
    SearchComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
