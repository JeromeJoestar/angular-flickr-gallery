import { Component, OnInit } from '@angular/core';
import {MdToolbarModule} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle = 'Flicker Gallery';
  constructor() { }

  ngOnInit() {
  }

}
