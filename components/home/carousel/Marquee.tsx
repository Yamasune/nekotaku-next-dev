'use client'

import React, { useRef, useEffect } from 'react'
import Image from 'next/image'

interface MarqueeProps {
  images: string[]
  speed?: number
  reverse?: boolean
  size?: number
  gap?: number
}

export const Marquee: React.FC<MarqueeProps> = ({
  images,
  speed = 50,
  reverse = false,
  size = 96,
  gap = 20,
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const widthRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const list = images.concat(images) // A + A

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // 预估单组宽度：size 固定就直接用；若不固定可在首次渲染后量一次即可
    const singleWidth = images.length * (size + gap)
    widthRef.current = singleWidth

    let last = performance.now()

    const tick = (t: number) => {
      const dt = t - last
      last = t

      const delta = (speed * dt) / 1000 * (reverse ? 1 : -1)
      let next = posRef.current + delta

      // 回绕（只在数值层面取模，不改 DOM）
      if (next <= -singleWidth) next += singleWidth
      if (next >= 0) next -= singleWidth

      posRef.current = next
      track.style.transform = `translateX(${next}px)`

      rafRef.current = requestAnimationFrame(tick)
    }

    // 性能小优化：启用合成层，避免闪烁
    track.style.willChange = 'transform'
    track.style.transform = 'translateZ(0)'

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
    // 依赖：速度/方向变化时重新跑动画
  }, [speed, reverse, images.length, size, gap])

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        className="flex"
        style={{ gap }}
      >
        {list.map((src, i) => (
          <Image
            key={`${src}-${i}`}            // 稳定 key，避免 index 单独使用
            src={src}
            alt="滚动图标"
            width={size}
            height={size}
            priority                           // 避免懒加载闪一下
            className="rounded-xl object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  )
}
