interface AlistLinkData {
  code: number
  data: {
    key: string
    locked: boolean
    is_dir: boolean
    create_date: Date
    downloads: number
    views: number
    expire: number
    preview: boolean
    creator: {
      key: string
      nick: string
      group_name: string
    }
    source: {
      name: string
      size: number
    }
  }
  msg: string
}

interface AlistObjects {
  id: string
  name: string
  path: string
  thumb: boolean
  size: number
  type: string
  date: string
  create_date: string
  key: string
  source_enabled: boolean
}

interface AlistListData {
  code: number
  data: {
    objects: AlistObjects[]
  }
  msg: string
}

export const fetchLinkData = async (link: string) => {
  const key = link.split('/').pop()
  const apiUrl = `https://www.nullcloud.top/api/v3/share/info/${key}`
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    const data: AlistLinkData = await response.json()
    return data
  } catch (error) {
    return null
  }
}

export const fetchListData = async (link: string) => {
  const key = link.split('/').pop()
  const apiUrl = `https://www.nullcloud.top/api/v3/share/list/${key}`
  try {
    const response = await fetch(apiUrl)
    if (!response.ok) {
      throw new Error(`Failed to fetch list: ${response.statusText}`)
    }
    const data: AlistListData = await response.json()

    if (data.code === 0 && data.data.objects && data.data.objects.length > 0) {
      const totalSize = data.data.objects.reduce(
        (sum, obj) => sum + obj.size,
        0
      )
      return totalSize
    }

    return null
  } catch (error) {
    return null
  }
}
