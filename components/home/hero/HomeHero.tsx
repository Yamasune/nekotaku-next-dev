import { Card, CardBody } from '@heroui/card'
import { getKunPosts } from '../carousel/mdx'
import { RandomGalgameButton } from '../carousel/RandomGalgameButton'
import { KunCarousel } from '../carousel/KunCarousel'
import { Share2 } from 'lucide-react'
import { Coffee } from 'lucide-react'
import { Ship } from 'lucide-react'
import { Code } from 'lucide-react'
import { Server } from 'lucide-react'

export const HomeHero = () => {
  const posts = getKunPosts()

  return (
    <div className="w-full flex flex-col sm:flex-row gap-6">
      {/* 左侧 Card 组件 - 调整高度 */}
      <div className="w-full sm:w-1/2 overflow-hidden">
        {/* 主模块容器 - 调整高度与右侧一致 */}
        <div className="relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden group h-[300px]">
          <Card className="border-none bg-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r from-blue-500 to-blue-600 h-full">
            <CardBody className="p-6 md:p-10 h-full flex flex-col justify-center relative">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                {/* 左侧文字区域 */}
                <div className="text-center md:text-left z-10 transition-all duration-500 group-hover:text-white flex-1">
                  <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
                    高质量资源
                  </h1>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    与您分享
                  </h2>
                  <p className="text-gray-500 text-lg group-hover:text-blue-100">
                    NEKOTAKU
                  </p>
                </div>

                {/* 右侧图标区域 - 动态排列 */}
                <div className="relative w-full md:w-1/2 h-48 md:h-64 z-10 flex-shrink-0">
                  {/* 红色分享图标 - 左上角，较大 */}
                  <div className="absolute top-2 left-2 w-20 h-20 md:w-28 md:h-28 bg-red-500 rounded-xl flex items-center justify-center shadow-xl transform rotate-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 z-30">
                    <Share2 className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>

                  {/* 黄色JS图标 - 右上角，中等大小 */}
                  <div className="absolute top-8 right-4 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-xl flex items-center justify-center shadow-xl transform -rotate-6 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-3 z-20">
                    <Code className="w-8 h-8 md:w-12 md:h-12 text-black font-bold" />
                  </div>

                  {/* 白色咖啡图标 - 左下角，中等大小 */}
                  <div className="absolute bottom-8 left-6 w-18 h-18 md:w-26 md:h-26 bg-white rounded-xl flex items-center justify-center shadow-xl transform rotate-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 z-20">
                    <Coffee className="w-9 h-9 md:w-12 md:h-12 text-amber-700" />
                  </div>

                  {/* 蓝色船图标 - 右下角，较大 */}
                  <div className="absolute bottom-2 right-2 w-20 h-20 md:w-28 md:h-28 bg-blue-500 rounded-xl flex items-center justify-center shadow-xl transform -rotate-12 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 z-15">
                    <Ship className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>

                  {/* 黑色Node图标 - 中心偏右，最大 */}
                  <div className="absolute top-1/2 right-1/4 w-20 h-20 md:w-32 md:h-32 bg-gray-900 rounded-xl flex items-center justify-center shadow-xl transform rotate-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-9 z-10">
                    <Server className="w-10 h-10 md:w-16 md:h-16 text-green-400" />
                  </div>

                  {/* 新增：紫色数据库图标 - 中心偏左，中等大小 */}
                  <div className="absolute top-1/3 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-purple-600 rounded-xl flex items-center justify-center shadow-xl transform -rotate-9 transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6 z-20">
                    <svg className="w-8 h-8 md:w-12 md:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>

                  {/* 新增：绿色Git图标 - 右上角，小一些 */}
                  <div className="absolute top-4 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-green-600 rounded-xl flex items-center justify-center shadow-xl transform rotate-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-15 z-30">
                    <svg className="w-7 h-7 md:w-10 md:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* 随便逛逛按钮 - 悬停时显示 */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
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