import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { RequestService } from '../../services/request.service';

// Rxjs工具函数导入
import { map, filter } from 'rxjs/operators'

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss']
})
export class RxjsComponent implements OnInit {

  constructor(public request: RequestService) { }

  ngOnInit(): void {
    // 同步方法获取数据
    let data: string = this.request.getData()
    console.log(data);
    // 异步方法获取数据

    // 1.回调函数
    // 注意箭头函数参数的类型注解，不能省略小括号
    this.request.callback((data: any) => {
      console.log(data);
    })

    // 2. promise
    let promiseData: any = this.request.promise()
    promiseData.then((data: any) => {
      console.log(data);
    })

    // 3.rxjs
    let rxjsData: any = this.request.rxjsData()
    rxjsData.subscribe((data: any) => {
      console.log(data);
    })

    // 4.rxjs取消订阅
    let stream = this.request.rxjsData()
    let ret = stream.subscribe((data: any) => {
      console.log(data);
    })

    // 100ms后取消订阅
    setTimeout(() => {
      ret.unsubscribe()
    }, 100);

    // 5.多次订阅（多次获取异步函数的执行结果）
    // promise 没有这个能力
    let getIntervalData = this.request.getInterval()
    getIntervalData.then((data: any) => {
      console.log('promise:' + data);
    })
    // 6.多次订阅 rxjs
    let getrxjsData = this.request.getrxjs()
    getrxjsData.subscribe((data: any) => {
      console.log('Rxjs:' + data);
    })
    // 7.使用工具方法对返回数据进行处理-from
    let fromData = this.request.fromData()
    fromData.pipe(

      /*  写法不严谨，item < 5 时，函数没有返回值，默认返回undefined 为false
      if (item > 5)  return true
       */

      /* filter(((item: any) => {
        if (item > 5) {
          return true
        }
        return false // 显示返回false
      })), */

      filter((item: any) => item > 5),

      map((item: any) => item * 2)

    )
      .subscribe((data: any) => {
        console.log(0); // 0打印了5次，说明传过来的是一段段序列，不是一个数组
        console.log(data);
      })

    // 8.使用工具方法对返回数据进行处理-next
    let nextData: any = this.request.nextData()
    /* nextData.pipe(
      // filter((item: any) => {
      //   item.filter((value: any) => value > 5)
      // }),

      map((item: any) => {
        item.filter((value: any) => value * 2)
      })
    ) */

    nextData.subscribe((data: any) => {
      console.log(data);
      // data = data.filter((item: any) => item > 5)
      // console.log(data);
      // data = data.map((item: any) => item * 2)
      // console.log(data);

      /*  总结：
       1. from 方法按数组每一项传递；next 方法将数组作为整体传递
       2. 使用 from 可以结合工具函数 filter 、map使用；使用next不要结合工具函数，直接在subscribe内部对数据进行处理。 
       3. 使用filter过滤，每一项都应该有返回值（boolean）*/
    })
  }

}
