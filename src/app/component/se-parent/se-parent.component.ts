import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se-parent',
  templateUrl: './se-parent.component.html',
  styleUrls: ['./se-parent.component.scss']
})
export class SeParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  runParent(e: any) {
    // e 就是子组件传过来的值
    console.log(e)
  }
}
