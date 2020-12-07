import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-se-child',
  templateUrl: './se-child.component.html',
  styleUrls: ['./se-child.component.scss']
})
export class SeChildComponent implements OnInit {
  @Output() private outer = new EventEmitter<string>()

  public msg: string = '子组件定义的msg'
  constructor() { }

  ngOnInit(): void {
  }
  get() {
    alert('子组件定义的get方法')
  }

  sendParent() {
    this.outer.emit("msg from child")
    // this.outer.emit(this.msg)
    // this.outer.emit(this.get)  报错


  }


}
