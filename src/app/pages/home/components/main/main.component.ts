import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  name = ['Márnand Fernandes', 'Desenvolvedor Web'];

  constructor() { }

  ngOnInit(): void {
  }

  goLink(url: string) {
    window.open(url, '_blank')
  }

}
