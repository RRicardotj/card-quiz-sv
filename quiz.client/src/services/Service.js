import Http from './Http'

export default class Service {
  constructor (endpoint = '') {
    this.endpoint = endpoint
  }

  post (route, data) {
    return Http.post(this._generateRoute(route), data)
  }

  get (route, params) {
    return Http.get(this._generateRoute(route), params)
  }

  put (route, data) {
    return Http.put(this._generateRoute(route), data)
  }

  delete (route, params) {
    return Http.delete(this._generateRoute(route), params)
  }

  _generateRoute (route = '') {
    return `${this.endpoint}${route}`
  }
}
