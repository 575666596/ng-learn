import { Component, OnInit } from '@angular/core';
// 2.引入http
import { HttpClient, HttpHeaders } from "@angular/common/http"
// 1.引入路由
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {

  // 3.注入
  constructor(public http: HttpClient, public route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route);
    // 3.获取get参数
    // this.route.queryParams.value获取不到参数，因为this.route.queryParams是一个rxjs对象
    this.route.queryParams.subscribe((data: any) => console.log(data))

  }
  // 内置http模块
  // 1.get请求
  getData() {
    // 4.调接口
    // 服务器必须设置跨域
    let api = "http://127.0.0.1:3000/adata";
    // subscribe，底层用Rxjs处理异步请求
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
    });
  }
  // 2.post请求
  postData() {
    // 设置请求头
    const httpOptions: any = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    let api: any = "http://127.0.0.1:3000/test"
    this.http.post(api, { 'username': 'zhangsan' }, httpOptions).subscribe((ret: any) => {
      console.log(ret);
    })

  }
  // 3.jsonp请求
  jsonpData() {
    //jsonp请求服务器必须得支持jsonp
    /* http://a.itying.com/api/productlist?callback=xxx 
       http://a.itying.com/api/productlist?cb=xxx  */

    let api = "http://a.itying.com/api/productlist"
    this.http.jsonp(api, 'callback').subscribe((response) => {
      console.log(response);
    })

  }

}
