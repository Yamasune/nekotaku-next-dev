'use client'

import { z } from 'zod'
import { Controller } from 'react-hook-form'
import { Select, SelectItem } from '@heroui/select'
import { patchResourceCreateSchema } from '~/validations/patch'
import { useUserStore } from '~/store/userStore'
import { storageTypes } from '~/constants/resource'
import type { ControlType, ErrorType } from '../share'

export type ResourceFormData = z.infer<typeof patchResourceCreateSchema>

interface Props {
  section: string
  control: ControlType
  errors: ErrorType
}

export const ResourceTypeSelect = ({ section, control, errors }: Props) => {
  const user = useUserStore((state) => state.user)

  const calcDisabledKeys = () => {
    if (user.role >= 2) {
      return []  // 角色大于等于2时，所有选项可用
    }
    return ['link']  // 角色小于2时，禁用link选项
  }

  return (
    <div className="space-y-2">
      <h3 className="text-lg font-medium">选择存储类型</h3>
      <p className="text-sm text-default-500">
        确定您的资源体积大小以便选择合适的存储方式
      </p>

      <Controller
        name="storage"
        control={control}
        render={({ field }) => (
          <Select
            label="请选择您的资源存储类型"
            selectedKeys={[field.value]}
            onSelectionChange={(key) => {
              field.onChange(Array.from(key).join(''))
            }}
            disabledKeys={calcDisabledKeys()}
            isInvalid={!!errors.storage}
            errorMessage={errors.storage?.message}
          >
            {storageTypes.map((type) => (
              <SelectItem key={type.value} textValue={type.label}>
                <div className="flex flex-col">
                  <span className="text">{type.label}</span>
                  <span className="text-small text-default-500">
                    {type.description}
                  </span>
                </div>
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  )
}
