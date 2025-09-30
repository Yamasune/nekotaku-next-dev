import { Card, CardBody } from '@heroui/card'
import { RandomGalgameButton } from '../carousel/RandomGalgameButton'
import { Share2 } from 'lucide-react'
import { Coffee } from 'lucide-react'
import { Code } from 'lucide-react'
import { HardDrive } from 'lucide-react'
import { Layout } from 'lucide-react'

export const HomeHero = () => {
  return (
    <div className="w-full sm:w-1/2 overflow-hidden">
      {/* 主模块容器 - 带悬停动画效果，去除滚动条 */}
      <div className="relative transition-all duration-700 ease-in-out rounded-xl overflow-hidden group mb-8 scrollbar-hide">
        <Card className="border-none bg-white transition-all duration-700 ease-in-out group-hover:bg-gradient-to-r from-purple-500 to-blue-600">
          <CardBody className="p-6 md:p-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* 左侧文字区域 */}
              <div className="text-center md:text-left z-10 transition-all duration-500 group-hover:text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                  生活明朗
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  万物可爱。
                </h2>
                <p className="text-gray-500 text-lg group-hover:text-purple-100">
                  ANHEYU.COM
                </p>
              </div>

              {/* 右侧图标区域 - 斜向排列，匹配新图标样式 */}
              <div className="relative w-full md:w-2/5 h-40 md:h-56 z-10">
                {/* 红色分享图标 */}
                <div className="absolute top-0 right-1/4 w-14 h-14 md:w-20 md:h-20 bg-red-500 rounded-lg flex items-center justify-center shadow-lg transform rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <Share2 className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                {/* 黄色代码图标 */}
                <div className="absolute top-8 right-1/2 w-14 h-14 md:w-20 md:h-20 bg-yellow-400 rounded-lg flex items-center justify-center shadow-lg transform -rotate-3 transition-transform duration-300 group-hover:scale-110">
                  <Code className="w-6 h-6 md:w-10 md:h-10 text-black" />
                </div>
                {/* 白色咖啡图标 */}
                <div className="absolute bottom-8 right-1/3 w-14 h-14 md:w-20 md:h-20 bg-white rounded-lg flex items-center justify-center shadow-lg transform rotate-12 transition-transform duration-300 group-hover:scale-110">
                  <Coffee className="w-6 h-6 md:w-10 md:h-10 text-amber-700" />
                </div>
                {/* 蓝色硬盘图标 */}
                <div className="absolute bottom-0 right-1/5 w-14 h-14 md:w-20 md:h-20 bg-blue-500 rounded-lg flex items-center justify-center shadow-lg transform -rotate-6 transition-transform duration-300 group-hover:scale-110">
                  <HardDrive className="w-6 h-6 md:w-10 md:h-10 text-white" />
                </div>
                {/* 黑色布局图标 */}
                <div className="absolute top-1/3 right-0 w-14 h-14 md:w-20 md:h-20 bg-gray-900 rounded-lg flex items-center justify-center shadow-lg transform rotate-9 transition-transform duration-300 group-hover:scale-110">
                  <Layout className="w-6 h-6 md:w-10 md:h-10 text-green-400" />
                </div>
              </div>
            </div>

            {/* 随便逛逛按钮 - 悬停时显示 */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <RandomGalgameButton
                className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-6 py-4 rounded-full font-medium shadow-lg flex items-center gap-2"
                color="primary"
                variant="solid"
              >
                <span>随便逛逛</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </RandomGalgameButton>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}