import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.scss']
})
export class TransformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  showAside() {
    let showBtn: any = document.querySelector('.aside')
    showBtn.style.transform = 'translate(0,0)'
  }
  hiddenAside() {
    let hiddenBtn: any = document.querySelector('.aside')
    hiddenBtn.style.transform = 'translate(100%,0)'
  }
}
