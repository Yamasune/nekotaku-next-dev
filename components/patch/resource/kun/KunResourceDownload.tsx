'use client'

import DOMPurify from 'isomorphic-dompurify'
import { useEffect, useState } from 'react'
import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { KunUser } from '~/components/kun/floating-card/KunUser'
import { Download } from 'lucide-react'
import { formatDistanceToNow } from '~/utils/formatDistanceToNow'
import { KunResourceDownloadCard } from './KunDownloadCard'
import { markdownToHtml } from './markdownToHtml'
import { formatDate } from '~/utils/time'
import type { KunPatchResourceResponse } from '~/types/api/kun/moyu-moe'

interface Props {
  resource: KunPatchResourceResponse
}

export const KunResourceDownload = ({ resource }: Props) => {
  const [showLinks, setShowLinks] = useState<Record<number, boolean>>({})
  const [note, setNote] = useState('')

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

  return (
    <div className="space-y-2">
      {resource.name && !resource.note && (
        <p className="mt-2 whitespace-pre-wrap">{resource.name}</p>
      )}

      {resource.note && (
        <Accordion
          fullWidth={true}
          className="p-0"
          itemClasses={{
            base: 'p-0 w-full',
            title: 'font-normal text-medium',
            trigger: 'p-0 flex items-center',
            indicator: 'text-medium',
            content: 'text-small px-2 whitespace-pre-wrap'
          }}
        >
          <AccordionItem
            key="1"
            aria-label="资源备注"
            subtitle={`该补丁资源最后更新于 ${formatDistanceToNow(resource.update_time)} - 点击查看备注`}
            title={resource.name ? resource.name : '资源备注'}
            classNames={{
              content: 'whitespace-normal'
            }}
          >
            <div
              dangerouslySetInnerHTML={{
                __html: note
              }}
              className="kun-prose max-w-none"
            />
          </AccordionItem>
        </Accordion>
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
