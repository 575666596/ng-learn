import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public imgUrl: string = 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1006282123,323068702&fm=26&gp=0.jpg'
  public arr: string[] = ['a', 'b', 'c']
  public flag: boolean = true
  public orderStatus: number = 0 // 0已下单 1已发货 2已签收 3其它状态
  public pinkStyle: string = 'pink'
  public today = new Date()
  public initValue: string = '默认值'

  constructor() { }

  ngOnInit(): void {
    console.log("没有过滤之前的日期格式" + this.today);
  }
  // 方法之间不需要逗号分隔
  clickEvent() {
    alert('angular事件')
  }
  getData() {
    alert(this.orderStatus)
  }
  setData() {
    this.orderStatus++
    alert(this.orderStatus)
  }
  keyDown() {
    console.log('keyDown');
  }
  keyUp(e: any) {
    // console.log(e);
    console.log(e.keyCode);
    if (e.keyCode == 13) {
      console.log(e.target.value);
      alert('回车键')
    }
  }
  domHandle(e: any) {
    // ionic必须这样写？？？
    let dom: any = e.target
    dom.style.color = 'red'
  }
  changeValue() {
    this.initValue = 'MVVM改变值'
  }
}
