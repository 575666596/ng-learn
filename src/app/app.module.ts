import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './component/news/news.component';
import { HomeComponent } from './component/home/home.component';
import { FormComponent } from './component/form/form.component';
import { SearchComponent } from './component/search/search.component';
import { ServeComponent } from './component/serve/serve.component'

// 2.引入服务
import { StorageService } from './services/storage.service';
import { RequestService } from './services/request.service';
import { AxiosService } from './services/axios.service'

// 引入内置请求模块
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'
import { DomComponent } from './component/dom/dom.component';
import { HeaderComponent } from './component/header/header.component';
import { TransformComponent } from './component/transform/transform.component';
import { ParentComponent } from './component/parent/parent.component';
import { ChildComponent } from './component/child/child.component';
import { SeChildComponent } from './component/se-child/se-child.component';
import { SeParentComponent } from './component/se-parent/se-parent.component';
import { LifecycleComponent } from './component/lifecycle/lifecycle.component';
import { LifecycleChildComponent } from './component/lifecycle-child/lifecycle-child.component';
import { RxjsComponent } from './component/rxjs/rxjs.component';
import { HttpComponent } from './component/http/http.component';
import { AxiosComponent } from './component/axios/axios.component';
import { RouterComponent } from './component/router/router.component';
import { RoutersComponent } from './component/routers/routers.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    ServeComponent,
    DomComponent,
    HeaderComponent,
    TransformComponent,
    ParentComponent,
    ChildComponent,
    SeChildComponent,
    SeParentComponent,
    LifecycleComponent,
    LifecycleChildComponent,
    RxjsComponent,
    HttpComponent,
    AxiosComponent,
    RouterComponent,
    RoutersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 双向数据绑定模块
    FormsModule,
    // 内置请求模块
    HttpClientModule,
    // 内置jsonp
    HttpClientJsonpModule
  ],
  // 3.配置服务
  providers: [StorageService, RequestService, AxiosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
