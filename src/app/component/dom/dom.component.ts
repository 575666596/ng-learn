// 2.引入ViewChild
import { Component, OnInit, ViewChild } from '@angular/core';
// import { Component, OnInit,ElementRef } from '@angular/core'; 为什么不可以 ？？

@Component({
  selector: 'app-dom',
  templateUrl: './dom.component.html',
  styleUrls: ['./dom.component.scss']
})
export class DomComponent implements OnInit {

  public flag: boolean = true

  // 3.把获取的节点赋值给myBox，myBox是自己起的变量名
  @ViewChild('mybox') myBox: any;

  @ViewChild('myheader') myHeader: any;

  constructor() { }

  ngOnInit(): void {

    // 组件和指令初始化完成，并不是真正的dom加载完成，可以获取一般的dom元素，但是如果元素内包含ng指令，那么会报错
    // 获取元素dom元素建议也进行类型注解
    let box: any = document.querySelector('.box')
    box.style.color = 'red'

    console.log('this.myHeader:' + this.myHeader);

  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // 1.原生方法
    // 视图加载完成以后触发的方法 dom加载完成（）建议把dom操作放在这里  
    let box1: any = document.querySelector('.box1')
    box1.style.color = 'pink'

    // 2.ViewChild
    console.log(this.myBox);
    // this.myBox.nativeElement才是真正的dom元素
    this.myBox.nativeElement.style.color = 'skyblue'

  }
  getChild() {
    this.myHeader.get()
  }
}
