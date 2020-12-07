import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// 复制这个类名
export class StorageService {

  constructor() { }

  // 3.在服务中定义公共方法
  test() {
    alert('test从服务中获取公共方法')
  }

  get(key: string) {

    // return JSON.parse(localStorage.getItem(key)) 报错
    return JSON.parse(localStorage.getItem(key) || '{}')
  }
  set(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value))
  }
  remove(key: string) {
    localStorage.removeItem(key)
  }
}
