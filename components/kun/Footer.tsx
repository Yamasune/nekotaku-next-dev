'use client'

import { kunMoyuMoe } from '~/config/moyu-moe'
import Link from 'next/link'
import Image from 'next/image'
import { Discord } from './icons/Discord'

export const KunFooter = () => {
  return (
    <footer className="w-full mt-8 text-sm border-t border-divider">
      <div className="px-2 mx-auto sm:px-6 max-w-7xl">
        <div className="flex flex-wrap justify-center gap-4 py-6 md:justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/favicon.webp"
              alt={kunMoyuMoe.titleShort}
              width={30}
              height={30}
            />
            <span>Copyright © 2025 {kunMoyuMoe.titleShort}</span>
          </Link>

          <div className="flex space-x-8">
            <Link href="/doc" className="flex items-center">
              使用指南
            </Link>
            <Link
              href={kunMoyuMoe.domain.nav}
              target="_blank"
              className="flex items-center"
            >
              导航页面
            </Link>

            <Link href="/friend-link" className="flex items-center">
              友情链接
            </Link>
          </div>

          <div className="flex space-x-8">
            <Link
              href="https://to.acgn.im/dPIgGJ6ntm"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
            </Link>
            <Link
              href={kunMoyuMoe.domain.discord_group}
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
