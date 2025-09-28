import { Chip } from '@heroui/chip'
import {
  SUPPORTED_LANGUAGE_MAP,
  SUPPORTED_PLATFORM_MAP
} from '~/constants/resource'
import { cn } from '~/utils/cn'

const SUPPORTED_TYPE_MAP: Record<string, string> = {
  all: '全部类型',
  manual: '人工翻译补丁',
  ai: 'AI 翻译补丁',
  machine_polishing: '机翻润色',
  machine: '机翻补丁',
  save: '全 CG 存档',
  crack: '破解补丁',
  fix: '修正补丁',
  mod: '魔改补丁',
  other: '其它'
}

interface Props {
  types: string[]
  languages: string[]
  platforms: string[]
  modelName?: string
  className?: string
  size?: 'lg' | 'md' | 'sm'
}

export const KunPatchAttribute = ({
  types,
  languages,
  platforms,
  modelName = '',
  className = '',
  size = 'md'
}: Props) => {
  return (
    <div
      className={cn('flex gap-2 overflow-x-auto scrollbar-hide', className)}
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none'
      }}
    >
      {types.map((type) => (
        <Chip key={type} variant="flat" color="primary" size={size} className="flex-shrink-0">
          {SUPPORTED_TYPE_MAP[type]}
        </Chip>
      ))}
      {languages.map((lang) => (
        <Chip key={lang} variant="flat" color="secondary" size={size} className="flex-shrink-0">
          {SUPPORTED_LANGUAGE_MAP[lang]}
        </Chip>
      ))}
      {platforms.map((platform) => (
        <Chip key={platform} variant="flat" color="success" size={size} className="flex-shrink-0">
          {SUPPORTED_PLATFORM_MAP[platform]}
        </Chip>
      ))}
      {modelName && (
        <Chip variant="flat" color="danger" size={size} className="flex-shrink-0">
          {modelName}
        </Chip>
      )}
    </div>
  )
}
