import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-routers',
  templateUrl: './routers.component.html',
  styleUrls: ['./routers.component.scss']
})
export class RoutersComponent implements OnInit {

  public arr: any[] = []
  constructor(private router: Router) { }

  ngOnInit(): void {

    for (let i: number = 0; i < 5; i++) {
      this.arr.push(`这是第${i}条新闻`)
    }
  }
  // js路由跳转，传参
  goAxios() {
    this.router.navigate(['/axios', 123])
  }
  goCycle() {
    this.router.navigate(['/cycle'])
  }
}
