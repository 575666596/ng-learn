import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public userInfo: any = {
    name: '默认',
    sex: '1', // 注意这里时字符串才能和value匹配,数字不行
    cityList: ['北京', '上海', '深圳'], // 用于循环
    city: '北京', // 这个才是绑定的值
    hobby: [{
      title: '吃饭',
      checked: false
    }, {
      title: '睡觉',
      checked: false
    }, {
      title: '打球',
      checked: true
    },],
    mark: '请留言'
  }

  constructor() {
  }

  ngOnInit(): void {

  }
  doSubmit() {
    // 获取表单数据
    // 1.dom操作
    let nameEle: any = document.getElementById('username')
    console.log(nameEle.value);
    // 2.jQuery操作，先安装 cnpm i @types/jquery 使用npm会报错，可能原因是一开安装项目依赖时使用了cnpm命令。不知道如何使用jQuery
    // 3.双向数据绑定，注意上一讲根模块已经引入FormsModule模块，可以全局使用


  }
}
