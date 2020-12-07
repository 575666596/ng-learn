import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // 定义数据的几种方式，注意这里不是声明变量，不要出现let，var const
  public msg1 = 'msg1'
  msg2 = 'msg2' // 表示 public，any类型
  msg3: number = 18
  msg4: any = '可以指定任何类型'
  public msg5: string = '推荐使用这种方式定义数据'
  public obj: any = {
    name: 'zhangsan',
    age: 18
  }

  // 只声明，稍后可以在构造器或者初始化方法中改变属性的值
  public msg6: any;
  public content = `<h1>我是HTML内容<h1>`

  // 声明属性的几种方式：
  // public 共有*（默认）可以在这个类里面使用、也可以在类外面使用
  // protected 保护类型，他只有在当前类和它的子类里面可以访问
  // private 私有，只有在当前类才可以访问这个属性
  // 推荐数组注解方式
  public arr: number[] = [10, 20, 30]

  // ts数组类型注解的另一种方式
  public list: Array<string> = ['a', 'b', 'c']

  // 复杂数组循环
  public cars: any = [{
    name: '宝马',
    kind: [{
      type: '宝马1'
    }, {
      type: '宝马2'
    }, {
      type: '宝马3'
    },]
  }, {
    name: '奔驰',
    kind: [{
      type: '奔驰1'
    }, {
      type: '奔驰2'
    }, {
      type: '奔驰3'
    },]
  }, {
    name: '奥迪',
    kind: [{
      type: '奥迪1'
    }, {
      type: '奥迪2'
    }, {
      type: '奥迪3'
    },]
  }]


  constructor() { }

  ngOnInit(): void {
  }

}
