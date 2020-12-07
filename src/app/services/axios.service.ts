import { Injectable } from '@angular/core';
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() { }

  axiosGet(api: any) {
    return new Promise((resolve, reject) => {
      axios.get(api)
        .then(function (response) {
          //handle success
          resolve(response)
        })
    })
  }
}
