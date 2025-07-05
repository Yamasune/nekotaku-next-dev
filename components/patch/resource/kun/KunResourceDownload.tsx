'use client'

import DOMPurify from 'isomorphic-dompurify'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { KunUser } from '~/components/kun/floating-card/KunUser'
import { Download, ChevronDown, ChevronUp } from 'lucide-react'
import { formatDistanceToNow } from '~/utils/formatDistanceToNow'
import { KunResourceDownloadCard } from './KunDownloadCard'
import { markdownToHtml } from './markdownToHtml'
import { formatDate } from '~/utils/time'
import type { KunPatchResourceResponse } from '~/types/api/kun/moyu-moe'

interface Props {
  resource: KunPatchResourceResponse
}

const COLLAPSED_HEIGHT_PX = 96

export const KunResourceDownload = ({ resource }: Props) => {
  const [showLinks, setShowLinks] = useState<Record<number, boolean>>({})
  const [note, setNote] = useState('')

  const [isNoteExpanded, setIsNoteExpanded] = useState(false)
  const [isNoteOverflowing, setIsNoteOverflowing] = useState(false)
  const noteContentRef = useRef<HTMLDivElement>(null)

  const toggleLinks = (resourceId: number) => {
    setShowLinks((prev) => ({
      ...prev,
      [resourceId]: !prev[resourceId]
    }))
  }

  const getResourceNoteHtml = async () => {
    const html = await markdownToHtml(resource.note)
    const safeHtml = DOMPurify.sanitize(html)
    setNote(safeHtml)
  }

  useEffect(() => {
    getResourceNoteHtml()
  }, [])

  useLayoutEffect(() => {
    const element = noteContentRef.current
    if (element) {
      if (element.scrollHeight > COLLAPSED_HEIGHT_PX) {
        setIsNoteOverflowing(true)
      } else {
        setIsNoteOverflowing(false)
      }
    }
  }, [note])

  return (
    <div className="space-y-2">
      {resource.name && !resource.note && (
        <p className="mt-2 whitespace-pre-wrap">{resource.name}</p>
      )}

      {resource.note && (
        <div className="w-full">
          <div className="flex flex-col">
            <h3 className="font-medium">
              {resource.name ? resource.name : '资源备注'}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              该补丁资源最后更新于 {formatDistanceToNow(resource.update_time)}
            </p>
          </div>

          <div className="relative mt-2">
            <div
              ref={noteContentRef}
              className={`kun-prose max-w-none overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: isNoteExpanded ? '' : `${COLLAPSED_HEIGHT_PX}px`
              }}
            >
              <div
                dangerouslySetInnerHTML={{
                  __html: note
                }}
              />
            </div>

            {isNoteOverflowing && !isNoteExpanded && (
              <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent dark:from-gray-900" />
            )}
          </div>

          {isNoteOverflowing && (
            <Button
              variant="light"
              color="primary"
              className="px-2 py-1 mt-1 text-sm"
              onPress={() => setIsNoteExpanded(!isNoteExpanded)}
            >
              {isNoteExpanded ? (
                <>
                  <ChevronUp className="mr-1 size-4" />
                  收起备注
                </>
              ) : (
                <>
                  <ChevronDown className="mr-1 size-4" />
                  展开全部备注
                </>
              )}
            </Button>
          )}
        </div>
      )}

      <div className="flex justify-between">
        <KunUser
          user={resource.user}
          userProps={{
            name: resource.user.name,
            description: `发布于 ${formatDate(resource.created, { isPrecise: true, isShowYear: true })}`,
            avatarProps: {
              showFallback: true,
              src: resource.user.avatar,
              name: resource.user.name.charAt(0).toUpperCase()
            }
          }}
        />

        <div className="flex gap-2">
          <Button
            color="primary"
            variant="flat"
            isIconOnly
            aria-label={`下载 Galgame 补丁资源`}
            onPress={() => toggleLinks(resource.id)}
          >
            <Download className="size-4" />
          </Button>
        </div>
      </div>

      {showLinks[resource.id] && (
        <KunResourceDownloadCard resource={resource} />
      )}
    </div>
  )
}
