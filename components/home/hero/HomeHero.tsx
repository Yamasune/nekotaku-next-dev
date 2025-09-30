import { Card, CardBody } from '@heroui/card'
import { getKunPosts } from '../carousel/mdx'
import { RandomGalgameButton } from '../carousel/RandomGalgameButton'
import { KunCarousel } from '../carousel/KunCarousel'

// 假设使用的图标（如果实际项目中有对应图标库，可替换）
import { Share2 } from 'lucide-react' // 替代分享图标
import { Coffee } from 'lucide-react' // 替代咖啡图标
import { Ship } from 'lucide-react' // 替代船图标
import { Code } from 'lucide-react' // 替代JS图标
import { Server } from 'lucide-react' // 替代Node图标

export const HomeHero = () => {
  const posts = getKunPosts()

  return (
    <div className="w-full sm:w-1/2 overflow-hidden">
      {/* 主模块容器 - 带悬停动画效果 */}
      <div className="relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden group mb-8">
        <Card className="border-none bg-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r from-blue-500 to-blue-600 scrollbar-hide">
          <CardBody className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* 左侧文字区域 */}
              <div className="text-center md:text-left z-10 transition-all duration-500 group-hover:text-white">
                <h1 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-4">
                  生活明朗
                </h1>
                <h2 className="text-4xl md:text-4xl lg:text-6xl font-bold mb-6">
                  万物可爱
                </h2>
                <p className="text-gray-500 text-lg group-hover:text-blue-100">
                  NEKOTAKU
                </p>
              </div>

              {/* 右侧图标区域 - 斜向排列 */}
              <div className="relative w-full md:w-1/2 h-48 md:h-64 z-10">
                {/* 红色分享图标 */}
                <div className="absolute top-0 left-1/4 w-16 h-16 md:w-24 md:h-24 bg-red-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <Share2 className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                {/* 黄色JS图标 */}
                <div className="absolute top-10 left-1/2 w-16 h-16 md:w-24 md:h-24 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 transition-transform duration-300 group-hover:scale-110">
                  <Code className="w-8 h-8 md:w-12 md:h-12 text-black" />
                </div>
                {/* 白色咖啡图标 */}
                <div className="absolute bottom-10 left-1/3 w-16 h-16 md:w-24 md:h-24 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-12 transition-transform duration-300 group-hover:scale-110">
                  <Coffee className="w-8 h-8 md:w-12 md:h-12 text-amber-700" />
                </div>
                {/* 蓝色船图标 */}
                <div className="absolute bottom-0 left-2/3 w-16 h-16 md:w-24 md:h-24 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <Ship className="w-8 h-8 md:w-12 md:h-12 text-white" />
                </div>
                {/* 黑色Node图标 */}
                <div className="absolute top-1/2 right-0 w-16 h-16 md:w-24 md:h-24 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg transform rotate-9 transition-transform duration-300 group-hover:scale-110">
                  <Server className="w-8 h-8 md:w-12 md:h-12 text-green-400" />
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
                <span>随便逛逛</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </RandomGalgameButton>
            </div>
          </CardBody>
        </Card>
      </div>

      <div className="grid grid-cols-3 gap-3 sm:gap-6">
        <KunHomeNavigationItems buttonSize="lg" />
      </div>
    </div>


      {/* 保留轮播组件，保持原有内容展示 */ }
  <KunCarousel posts={posts} />
    </div >
  )
}