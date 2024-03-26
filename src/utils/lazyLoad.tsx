import React, { ComponentType, Suspense } from 'react'

import Loading from '@/components/Loading'

/**
 * 路由懒加载 hoc
 * @param importFunc
 * @use LazyLoad(() => import('@/xx'))
 * 其他替代方案: @loadable/component 或 	react-loadable
 */
const LazyLoad = <T extends ComponentType<any>>(importFunc: () => Promise<{ default: T }>) => {
  const LazyComponent = React.lazy(importFunc)

  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<Loading fullscreen={false} />}>
      <LazyComponent {...props} />
    </Suspense>
  )
}

export default LazyLoad
