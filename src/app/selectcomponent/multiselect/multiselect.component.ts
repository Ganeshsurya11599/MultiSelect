import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multiselect',
  templateUrl: './multiselect.component.html',
  styleUrls: ['./multiselect.component.scss']
})
export class MultiselectComponent implements OnInit {
  @Input() cities: any[] = [];
  selectedCityName: any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cities);
  }

  onSelect() {
    console.log(this.selectedCityName);
  }

}
