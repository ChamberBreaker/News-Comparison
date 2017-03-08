if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)
import { injectAsyncReducer } from '../../store'

export default function createRoutes (store) {
  return {
    path: 'about',
    getComponents (location, cb) {
      require.ensure([
        './containers/AboutPage',
        './reducer'
      ], (require) => {
        let AboutPage = require('./containers/AboutPage').default
        let aboutReducer = require('./reducer').default
        injectAsyncReducer(store, 'about', aboutReducer)
        cb(null, AboutPage)
      })
    }
  }
}
