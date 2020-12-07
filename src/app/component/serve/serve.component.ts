import { Component, OnInit } from '@angular/core';
// 4.在组件中导入服务
import { StorageService } from '../../services/storage.service'

// 5.服务使用方式1，实例化对象,不推荐，而且要写在装饰器前面，否则报错
// let mystorage1 = new StorageService()
// console.log('mystorage1:' + mystorage1.get());


@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.scss']
})




export class ServeComponent implements OnInit {
  public searchVal: string = ''
  public list: any[] = []

  // 6.使用方法2
  constructor(public mystorage: StorageService) {
    // console.log(this.mystorage.get());
  }

  testServe() {
    // 调用服务的公共方法
    this.mystorage.test()
  }

  ngOnInit(): void {
    // 不能简单这么写，会报错
    // this.list = this.mystorage.get('myList')

    let serachlist: any = this.mystorage.get('myList')
    console.log(serachlist); // 一开始 null
    if (serachlist) {
      this.list = serachlist
    }

  }

  goSearch() {
    // 获取输入的值，注意这里要去空格，否则对数组去重有影响
    let value: string = this.searchVal.trim()
    if (!value) {
      // 先清空表单
      this.searchVal = ''
      return
    }
    // 查找数组成员，重复项不添加
    let state: number = this.list.indexOf(value)
    if (state === -1) {
      this.list.push(value)
      // 缓存数据
      this.mystorage.set('myList', this.list)

    }
    // 无论数组成员是否重复，最后清空表单
    this.searchVal = ''
  }
  del(index: number) {
    this.list.splice(index, 1)
    this.mystorage.set('myList', this.list)
  }
  clear() {
    // 清缓存
    this.mystorage.remove('myList')
    // 清数组
    this.list = this.mystorage.get('myList')
  }

}
