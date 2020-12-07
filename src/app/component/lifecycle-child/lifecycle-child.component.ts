import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.scss']
})
export class LifecycleChildComponent implements OnInit {
  @Input() set pMsg(value: any) {
    console.log(value);

  }
  public content: string = 'child-content'
  constructor() { }

  ngOnInit(): void {
  }
  changeVal() {
    this.pMsg = '父组件的值手动改变了'
    alert(this.pMsg)
  }
  ngOnChanges() {

    console.log('01ngOnChages执行了--当被绑定的输入属性的值发生变化时调用(父子组件传值的时候会触发，传值发生改变时也会触发)')
  }

  ngOnDestroy() {
    console.log('08ngonDestroy被执行了');

  }
}
