import { Component, OnInit } from '@angular/core';
// 引入服务
import { AxiosService } from '../../services/axios.service'
// 1.引入路由
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-axios',
  templateUrl: './axios.component.html',
  styleUrls: ['./axios.component.scss']
})
export class AxiosComponent implements OnInit {
  // 2.实例化
  constructor(public axiosHttp: AxiosService, public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    // 3.获取动态路由参数
    this.route.params.subscribe((data: any) => console.log(data))
  }
  axiosRequest() {
    // 调接口
    let api: any = "http://a.itying.com/api/productlist"

    this.axiosHttp.axiosGet(api).then(data => {
      console.log(data);
    })
  }
}
