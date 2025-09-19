import Redis from 'ioredis'

const KUN_PATCH_REDIS_PREFIX = 'kun:nekotaku'

export const redis = new Redis({
  port: parseInt(process.env.REDIS_PORT!),
  host: process.env.REDIS_HOST,
  password: process.env.REDIS_PASSWORD || undefined // Use undefined if password is empty
})

export const setKv = async (key: string, value: string, time?: number) => {
  const keyString = `${KUN_PATCH_REDIS_PREFIX}:${key}`
  if (time) {
    await redis.setex(keyString, time, value)
  } else {
    await redis.set(keyString, value)
  }
}

export const getKv = async (key: string) => {
  const keyString = `${KUN_PATCH_REDIS_PREFIX}:${key}`
  const value = await redis.get(keyString)
  return value
}

export const delKv = async (key: string) => {
  const keyString = `${KUN_PATCH_REDIS_PREFIX}:${key}`
  await redis.del(keyString)
}
