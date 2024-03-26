import React from 'react'
import { Spin } from 'antd'
import type { SpinProps } from 'antd'

import './index.less'

export const Loading: React.FC<SpinProps> = ({ tip = 'Loading', fullscreen = true }) => {
  return (
    <Spin
      spinning={true}
      tip={tip}
      size="large"
      fullscreen={fullscreen}
      style={{ opacity: 0.68 }}
      className="loading-container"
    />
  )
}

export default Loading
