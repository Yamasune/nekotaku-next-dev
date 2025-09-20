import { Card, CardBody, CardHeader } from '@heroui/card'
import { Resources } from '~/components/patch/resource/Resource'

interface Props {
  id: number
  vndbId: string
}

export const ResourceTab = ({ id, vndbId }: Props) => {
  return (
    <Card className="p-1 sm:p-8">
      <CardHeader className="p-4">
        <h2 className="text-2xl font-medium">资源链接</h2>
      </CardHeader>
      <CardBody className="p-4">
        <div className="space-y-2 text-default-600">
          <p>
            注意：本站的 Galgame 资源及补丁均来自互联网或用户上传,
            请自行鉴别资源安全性。
          </p>
          <p>
            如果您要发布资源，请您选择正确的资源分类，并仔细编写注意事项，
            以免其它用户产生困扰。
          </p>
        </div>

        <Resources id={Number(id)} vndbId={vndbId} />
      </CardBody>
    </Card>
  )
}
