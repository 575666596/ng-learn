import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router'

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.scss']
})
export class RouterComponent implements OnInit {
  public arr: any[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {

    for (let i: number = 0; i < 5; i++) {
      this.arr.push(`这是第${i}条数据`)
    }
  }
  // js -get跳转，传参
  goHttp() {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'uid': '456' }
    }
    this.router.navigate(['/http'], navigationExtras);

    // 不引入NavigationExtras对象也可以
    // let navigationExtras = {
    //   queryParams: { 'uid': '456' }
    // }
    // this.router.navigate(['/http'], navigationExtras);
  }

  goCycle() {
    let navigationExtras: NavigationExtras = {
      queryParams: {}
    }
    this.router.navigate(['/cycle'])
  }
}
