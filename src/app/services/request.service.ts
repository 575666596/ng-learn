import { Injectable } from '@angular/core';
import { observable, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor() { }

  // 同步方法
  getData() {
    return '同步数据'
  }
  // 异步方法获取数据
  // 1.回调函数
  callback(cb: any) {
    setTimeout(() => {
      let name: string = '回调函数'
      cb(name)
    }, 500)
  }
  // 2.promise
  promise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let name: string = 'promise'
        resolve(name)
      }, 500)
    })
  }

  // 3.rxjs
  rxjsData() {
    return new Observable((observer: any) => {
      setTimeout(() => {
        let name: string = 'rxjs'
        // 成功
        observer.next(name)
        // 失败
        // observer.error('rejs失败')
      }, 500)
    })
  }

  // 5.多次订阅 promise
  getInterval() {
    let num: number = 0
    return new Promise((resolve: any) => {
      setInterval(() => {
        num++
        resolve(num)
      }, 1000)
    })
  }
  // 6.多次订阅 rxjs
  getrxjs() {
    let num: number = 0
    return new Observable((observer: any) => {
      setInterval(() => {
        if (num <= 3) {
          observer.next(num)
        }
        num++
      }, 1000)
    })
  }
  // 7.使用工具方法对返回数据进行处理-from
  fromData() {
    // return setTimeout(() => {
    //   let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //   .from(arr)
    // }, 1000)

    // 目前from方法只能传同步数据，异步不知如何处理？？
    let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return from(arr)

  }
  // 8.使用工具方法对返回数据进行处理-next
  nextData() {
    return new Observable((observer: any) => {
      setTimeout(() => {

        let list: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        observer.next(list)

      }, 1000)
    })

  }
}
