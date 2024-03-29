/**
 * Asynchronously loads the component for container
 */

import loadable from 'src/shared/utils/loadable'

export default loadable(() => import('./Order'), {
  fallback: null,
})
