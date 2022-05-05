import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-navi-bar',
  templateUrl: './side-navi-bar.component.html',
  styleUrls: ['./side-navi-bar.component.scss'],
})
export class SideNaviBarComponent implements OnInit {
  links = [
    {
      to: '/',
      icon: 'bi-people-fill',
    },
    {
      to: '/comprobantes',
      icon: 'bi-file-ruled-fill',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
