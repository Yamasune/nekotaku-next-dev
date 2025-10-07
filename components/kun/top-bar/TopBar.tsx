'use client'

import { useEffect, useState } from 'react'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle
} from '@heroui/navbar'
import Link from 'next/link'
import { KunTopBarBrand } from './Brand'
import { KunTopBarUser } from './User'
import { usePathname } from 'next/navigation'
import { kunNavItem } from '~/constants/top-bar'
import { KunMobileMenu } from './KunMobileMenu'

export const KunTopBar = () => {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showGameName, setShowGameName] = useState(false)
  const [gameName, setGameName] = useState('')

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  // 检测是否在游戏资源页面
  const isGamePage = pathname.startsWith('/') && pathname !== '/' && !pathname.startsWith('/admin') && !pathname.startsWith('/doc') && !pathname.startsWith('/tag') && !pathname.startsWith('/galgame') && !pathname.startsWith('/resource') && !pathname.startsWith('/search') && !pathname.startsWith('/user') && !pathname.startsWith('/login') && !pathname.startsWith('/register') && !pathname.startsWith('/apply') && !pathname.startsWith('/message') && !pathname.startsWith('/comment') && !pathname.startsWith('/settings') && !pathname.startsWith('/edit') && !pathname.startsWith('/auth') && !pathname.startsWith('/friend-link') && !pathname.startsWith('/redirect')

  // 滚动监听
  useEffect(() => {
    if (!isGamePage) return

    const handleScroll = () => {
      // 查找游戏信息区域
      const gameInfoElement = document.querySelector('.flex.flex-col.gap-4.p-6.md\\:col-span-2')
      if (gameInfoElement) {
        const rect = gameInfoElement.getBoundingClientRect()
        const isVisible = rect.top >= 0 && rect.bottom > 0

        if (!isVisible) {
          // 当游戏信息区域不可见时，显示游戏名称
          const titleElement = gameInfoElement.querySelector('h1')
          if (titleElement) {
            setGameName(titleElement.textContent || '')
            setShowGameName(true)
          }
        } else {
          // 当游戏信息区域可见时，显示导航按钮
          setShowGameName(false)
        }
      }
    }

    // 初始检查
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isGamePage])

  return (
    <Navbar
      maxWidth="xl"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      classNames={{ wrapper: 'px-3 sm:px-6' }}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <li className="h-full">
          <NavbarMenuToggle />
        </li>
      </NavbarContent>

      <KunTopBarBrand />

      <NavbarContent className="hidden gap-3 sm:flex justify-center">
        <div className="relative min-h-[2.5rem] flex items-center justify-center">
          {/* 游戏标题 */}
          <div
            className={`transition-all duration-300 ease-in-out absolute inset-0 flex items-center justify-center ${isGamePage && showGameName
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2'
              }`}
          >
            <span className="text-foreground font-bold truncate max-w-xs">
              {gameName}
            </span>
          </div>

          {/* 导航按钮 */}
          <div
            className={`transition-all duration-300 ease-in-out flex gap-3 ${isGamePage && showGameName
              ? 'opacity-0 translate-y-2'
              : 'opacity-100 translate-y-0'
              }`}
          >
            {kunNavItem.map((item) => (
              <NavbarItem key={item.href} isActive={pathname === item.href}>
                <Link
                  className={
                    pathname === item.href ? 'text-primary' : 'text-foreground'
                  }
                  href={item.href}
                >
                  {item.name}
                </Link>
              </NavbarItem>
            ))}
          </div>
        </div>
      </NavbarContent>

      <KunTopBarUser />

      <KunMobileMenu />
    </Navbar>
  )
}
