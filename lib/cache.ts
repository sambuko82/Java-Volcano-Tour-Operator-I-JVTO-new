import { createClient, type RedisClientType } from 'redis';

let redisClient: RedisClientType | null = null;

export async function getRedisClient(): Promise<RedisClientType> {
  if (redisClient && redisClient.isOpen) {
    return redisClient;
  }

  redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379',
  });

  redisClient.on('error', (err) => {
    console.error('Redis Client Error', err);
  });

  redisClient.on('connect', () => {
    console.log('Redis client connected');
  });

  try {
    await redisClient.connect();
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
    // Don't throw—allow app to run without Redis in development
  }

  return redisClient;
}

export async function cacheGet<T>(key: string): Promise<T | null> {
  try {
    const client = await getRedisClient();
    if (!client.isOpen) {
      return null;
    }
    const value = await client.get(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.error(`Cache get error for key ${key}:`, error);
    return null; // Graceful fallback on cache error
  }
}

export async function cacheSet<T>(
  key: string,
  value: T,
  ttlSeconds: number = 3600
): Promise<void> {
  try {
    const client = await getRedisClient();
    if (!client.isOpen) {
      return;
    }
    await client.setEx(key, ttlSeconds, JSON.stringify(value));
  } catch (error) {
    console.error(`Cache set error for key ${key}:`, error);
    // Don't throw—cache failure shouldn't break the app
  }
}

export async function cacheDelete(key: string): Promise<void> {
  try {
    const client = await getRedisClient();
    if (!client.isOpen) {
      return;
    }
    await client.del(key);
  } catch (error) {
    console.error(`Cache delete error for key ${key}:`, error);
  }
}

export async function cacheInvalidatePattern(pattern: string): Promise<void> {
  try {
    const client = await getRedisClient();
    if (!client.isOpen) {
      return;
    }
    const keys = await client.keys(pattern);
    if (keys.length > 0) {
      await client.del(keys);
    }
  } catch (error) {
    console.error(`Cache invalidate pattern error for ${pattern}:`, error);
  }
}

export async function closeRedisClient(): Promise<void> {
  if (redisClient && redisClient.isOpen) {
    await redisClient.quit();
  }
}
