import { Card, CardBody } from '@heroui/card'
import { getKunPosts } from '../carousel/mdx'
import { Marquee } from '../carousel/Marquee'
import { RandomGalgameButton } from '../carousel/RandomGalgameButton'
import { KunCarousel } from '../carousel/KunCarousel'
import Image from 'next/image'

export const HomeHero = () => {
  const posts = getKunPosts()

  // 第一行的图片数组
  const first_images = [
    '/home/sticker1.webp',
    '/home/sticker2.webp',
    '/home/sticker3.webp',
    '/home/sticker4.webp',
    '/home/sticker1.webp',
    '/home/sticker2.webp',
    '/home/sticker3.webp',
    '/home/sticker4.webp',
  ];

  // 第二行的图片数组
  const second_images = [
    '/home/sticker5.webp',
    '/home/sticker6.webp',
    '/home/sticker7.webp',
    '/home/sticker8.webp',
    '/home/sticker9.webp',
    '/home/sticker5.webp',
    '/home/sticker6.webp',
    '/home/sticker7.webp',
    '/home/sticker8.webp',
    '/home/sticker9.webp',
  ];

  const bottom = -20; // 调整这个值来控制图片区域的垂直位置
  const rotate = -25; // 调整这个值来控制图片区域的旋转角度
  const left = 10; // 调整这个值来控制图片区域的水平位置

  return (
    <div className="w-full flex flex-col sm:flex-row gap-6">
      {/* 左侧 Card 组件 - 调整高度 */}
      <div className="w-full sm:w-1/2 overflow-hidden">
        {/* 主模块容器 - 调整高度与右侧一致 */}
        <div className="relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden group h-[300px]">
          <Card className="border border-default-200 bg-content1 transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r from-blue-500 to-blue-600 h-full">
            <CardBody className="p-6 md:p-10 h-full flex flex-col justify-center relative overflow-hidden">

              <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                {/* 左侧文字区域 申金*/}
                <div className="text-center md:text-left z-10 transition-all duration-500 group-hover:text-white flex-1 absolute top-[40px]">
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-2">高质量资源</h1>
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">与您分享</h2>
                  <p className="text-default-500 text-lg group-hover:text-blue-100">NEKOTAKU</p>
                </div>

                {/* 右侧图片区域：上下排列 */}
                <div
                  className="w-full z-0 flex-shrink-0 absolute"
                  style={{
                    bottom: `${bottom}px`,
                    left: `${left}px`,
                    transform: `rotate(${rotate}deg)`,
                    width: '100vh',
                  }}
                >
                  <div className="flex flex-col items-center md:items-start gap-6 ">
                    {/* 第一行 */}
                    <Marquee
                      images={first_images}
                      speed={20}  // 控制速度建议 10-20 即可
                    />

                    {/* 第二行 */}
                    <Marquee
                      images={second_images}
                      speed={20} // 控制速度建议 10-20 即可
                    // reverse // 如需启用请取消注释 | 反向滚动
                    />
                  </div>
                </div>
              </div>

              {/* 随便逛逛按钮 - 悬停时显示 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                <RandomGalgameButton
                  className="bg-content1 text-primary hover:bg-primary-50 text-lg px-8 py-6 rounded-full font-medium shadow-lg flex items-center gap-2"
                  color="primary"
                  variant="solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </RandomGalgameButton>
              </div>

            </CardBody>
          </Card>
        </div>
      </div>

      {/* 右侧 KunCarousel 组件 */}
      <div className="w-full sm:w-1/2">
        <KunCarousel posts={posts} />
      </div>
    </div>
  )
}
