import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  // @Input() msg: string; 报错
  // @Input() msg: string = ''; 可以
  @Input() msg: any;
  @Input() get: any;
  @Input() parent: any;

  // 子组件本身定义的值
  public flag: boolean = true
  constructor() { }

  ngOnInit(): void {
    console.log(this.parent);
    // console.log(this.parent.get());

  }
  // 子组件本身定义的方法
  add() {
    alert('来自子组件的add方法')
  }

}
