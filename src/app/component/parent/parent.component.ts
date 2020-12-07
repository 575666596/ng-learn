import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  public msg: string = '来自父组件的msg111'

  @ViewChild('child') child: any;
  constructor() { }

  ngOnInit(): void {
  }
  get() {
    alert('来自父组件的get方法')
  }

}
