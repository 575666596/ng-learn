import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public searchVal: string = ''
  public list: string[] = []
  constructor() { }

  ngOnInit(): void {
    // 页面刷新会触发这个生命周期函数

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


    }
    // 无论数组成员是否重复，最后清空表单
    this.searchVal = ''
  }
  del(index: number) {
    this.list.splice(index, 1)
  }

}
