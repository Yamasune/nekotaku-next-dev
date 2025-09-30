import { Card, CardBody } from '@heroui/card'
import { getKunPosts } from '../carousel/mdx'
import { RandomGalgameButton } from '../carousel/RandomGalgameButton'
import { KunCarousel } from '../carousel/KunCarousel'
import Image from 'next/image'

export const HomeHero = () => {
  const posts = getKunPosts()

  return (
    <div className="w-full flex flex-col sm:flex-row gap-6">
      {/* 左侧 Card 组件 - 调整高度 */}
      <div className="w-full sm:w-1/2 overflow-hidden">
        {/* 主模块容器 - 调整高度与右侧一致 */}
        <div className="relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden group h-[300px]">
          <Card className="border-none bg-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r from-blue-500 to-blue-600 h-full shadow-medium">
            <CardBody className="p-6 md:p-10 h-full flex flex-col justify-center relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                {/* 左侧文字区域 */}
                <div className="text-center md:text-left z-10 transition-all duration-500 group-hover:text-white flex-1">
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
                    高质量资源
                  </h1>
                  <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-6">
                    与您分享
                  </h2>
                  <p className="text-gray-500 text-lg group-hover:text-blue-100">
                    NEKOTAKU
                  </p>
                </div>

                {/* 右侧图片区域 - 调整高度 */}
                <div className="relative w-full md:w-1/2 h-48 md:h-64 z-10 flex-shrink-0">
                  {/* 红色分享图片 */}
                  <div className="absolute top-0 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-6 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="./pubilc/home/sticker1.webp"
                      alt="分享图标"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover"
                    />
                  </div>
                  {/* 黄色JS图片 */}
                  <div className="absolute top-10 left-1/2 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="./pubilc/home/sticker2.webp"
                      alt="JavaScript图标"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover"
                    />
                  </div>
                  {/* 白色咖啡图片 */}
                  <div className="absolute bottom-10 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-12 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="./pubilc/home/sticker3.webp"
                      alt="咖啡图标"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover"
                    />
                  </div>
                  {/* 蓝色船图片 */}
                  <div className="absolute bottom-0 left-2/3 w-16 h-16 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="./pubilc/home/sticker4.webp"
                      alt="船图标"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover"
                    />
                  </div>
                  {/* 黑色Node图片 */}
                  <div className="absolute top-1/2 right-0 w-16 h-16 md:w-24 md:h-24 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg transform rotate-9 transition-transform duration-300 group-hover:scale-110 overflow-hidden">
                    <Image
                      src="./pubilc/home/sticker5.webp"
                      alt="Node.js图标"
                      width={48}
                      height={48}
                      className="w-8 h-8 md:w-12 md:h-12 object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* 随便逛逛按钮 - 悬停时显示 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                <RandomGalgameButton
                  className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 rounded-full font-medium shadow-lg flex items-center gap-2"
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