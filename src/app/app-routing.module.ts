import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 2. 导入组件
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';
import { HttpComponent } from './component/http/http.component';
import { AxiosComponent } from './component/axios/axios.component';

const routes: Routes = [
  // 3.配置路由规则
  {
    path: 'cycle', component: LifecycleComponent
  }, {
    path: 'http', component: HttpComponent
  }, {
    path: 'axios/:pid', component: AxiosComponent
  },
  // {
  //   // 路由匹配规则：从上到下，匹配到任何一个，停止匹配，都没有匹配，就匹配下面一个
  //   path: '**', redirectTo: 'cycle' // ** 表示匹配任意路由 redirectTo 重定向到 cycle
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
