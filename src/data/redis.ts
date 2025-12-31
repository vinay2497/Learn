import { TopicData } from '@/types';

export const redisData: TopicData = {
  name: 'Redis',
  description: 'In-memory data store for caching, messaging, and real-time applications',
  icon: '🔴',
  color: '#DC382D',
  gradient: 'from-red-500 via-red-600 to-rose-600',
  commands: [
    // ============ CONNECTION ============
    { id: 'redis-1', command: 'redis-cli', description: 'Connect to Redis server', example: 'redis-cli -h localhost -p 6379', category: 'Connection', difficulty: 'beginner' },
    { id: 'redis-2', command: 'AUTH <password>', description: 'Authenticate to Redis', example: 'AUTH mysecretpassword', category: 'Connection', difficulty: 'beginner' },
    { id: 'redis-3', command: 'SELECT <db>', description: 'Select database (0-15)', example: 'SELECT 1', category: 'Connection', difficulty: 'beginner' },
    { id: 'redis-4', command: 'PING', description: 'Test connection', example: 'PING → PONG', category: 'Connection', difficulty: 'beginner' },
    { id: 'redis-5', command: 'QUIT', description: 'Close connection', example: 'QUIT', category: 'Connection', difficulty: 'beginner' },

    // ============ STRINGS ============
    { id: 'redis-6', command: 'SET key value', description: 'Set string value', example: 'SET name "John"', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-7', command: 'GET key', description: 'Get string value', example: 'GET name', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-8', command: 'SETNX key value', description: 'Set only if not exists', example: 'SETNX lock "acquired"', category: 'Strings', difficulty: 'intermediate' },
    { id: 'redis-9', command: 'SETEX key seconds value', description: 'Set with expiration', example: 'SETEX session 3600 "data"', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-10', command: 'MSET key1 val1 key2 val2', description: 'Set multiple keys', example: 'MSET a 1 b 2 c 3', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-11', command: 'MGET key1 key2', description: 'Get multiple keys', example: 'MGET a b c', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-12', command: 'INCR key', description: 'Increment integer', example: 'INCR counter', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-13', command: 'INCRBY key amount', description: 'Increment by amount', example: 'INCRBY counter 5', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-14', command: 'DECR key', description: 'Decrement integer', example: 'DECR counter', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-15', command: 'APPEND key value', description: 'Append to string', example: 'APPEND name " Doe"', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-16', command: 'STRLEN key', description: 'Get string length', example: 'STRLEN name', category: 'Strings', difficulty: 'beginner' },
    { id: 'redis-17', command: 'GETRANGE key start end', description: 'Get substring', example: 'GETRANGE name 0 3', category: 'Strings', difficulty: 'intermediate' },

    // ============ LISTS ============
    { id: 'redis-18', command: 'LPUSH key value', description: 'Push to left of list', example: 'LPUSH queue "task1"', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-19', command: 'RPUSH key value', description: 'Push to right of list', example: 'RPUSH queue "task2"', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-20', command: 'LPOP key', description: 'Pop from left', example: 'LPOP queue', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-21', command: 'RPOP key', description: 'Pop from right', example: 'RPOP queue', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-22', command: 'LRANGE key start stop', description: 'Get range of elements', example: 'LRANGE queue 0 -1', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-23', command: 'LLEN key', description: 'Get list length', example: 'LLEN queue', category: 'Lists', difficulty: 'beginner' },
    { id: 'redis-24', command: 'LINDEX key index', description: 'Get element by index', example: 'LINDEX queue 0', category: 'Lists', difficulty: 'intermediate' },
    { id: 'redis-25', command: 'LSET key index value', description: 'Set element at index', example: 'LSET queue 0 "newtask"', category: 'Lists', difficulty: 'intermediate' },
    { id: 'redis-26', command: 'BLPOP key timeout', description: 'Blocking left pop', example: 'BLPOP queue 30', category: 'Lists', difficulty: 'intermediate' },
    { id: 'redis-27', command: 'BRPOP key timeout', description: 'Blocking right pop', example: 'BRPOP queue 30', category: 'Lists', difficulty: 'intermediate' },

    // ============ SETS ============
    { id: 'redis-28', command: 'SADD key member', description: 'Add to set', example: 'SADD tags "redis" "cache"', category: 'Sets', difficulty: 'beginner' },
    { id: 'redis-29', command: 'SMEMBERS key', description: 'Get all members', example: 'SMEMBERS tags', category: 'Sets', difficulty: 'beginner' },
    { id: 'redis-30', command: 'SISMEMBER key member', description: 'Check membership', example: 'SISMEMBER tags "redis"', category: 'Sets', difficulty: 'beginner' },
    { id: 'redis-31', command: 'SREM key member', description: 'Remove member', example: 'SREM tags "old"', category: 'Sets', difficulty: 'beginner' },
    { id: 'redis-32', command: 'SCARD key', description: 'Get set size', example: 'SCARD tags', category: 'Sets', difficulty: 'beginner' },
    { id: 'redis-33', command: 'SUNION key1 key2', description: 'Union of sets', example: 'SUNION tags1 tags2', category: 'Sets', difficulty: 'intermediate' },
    { id: 'redis-34', command: 'SINTER key1 key2', description: 'Intersection of sets', example: 'SINTER tags1 tags2', category: 'Sets', difficulty: 'intermediate' },
    { id: 'redis-35', command: 'SDIFF key1 key2', description: 'Difference of sets', example: 'SDIFF tags1 tags2', category: 'Sets', difficulty: 'intermediate' },
    { id: 'redis-36', command: 'SPOP key', description: 'Remove random member', example: 'SPOP tags', category: 'Sets', difficulty: 'intermediate' },
    { id: 'redis-37', command: 'SRANDMEMBER key count', description: 'Get random members', example: 'SRANDMEMBER tags 3', category: 'Sets', difficulty: 'intermediate' },

    // ============ HASHES ============
    { id: 'redis-38', command: 'HSET key field value', description: 'Set hash field', example: 'HSET user:1 name "John"', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-39', command: 'HGET key field', description: 'Get hash field', example: 'HGET user:1 name', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-40', command: 'HMSET key f1 v1 f2 v2', description: 'Set multiple fields', example: 'HMSET user:1 name "John" age 30', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-41', command: 'HMGET key field1 field2', description: 'Get multiple fields', example: 'HMGET user:1 name age', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-42', command: 'HGETALL key', description: 'Get all fields and values', example: 'HGETALL user:1', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-43', command: 'HDEL key field', description: 'Delete field', example: 'HDEL user:1 age', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-44', command: 'HEXISTS key field', description: 'Check field exists', example: 'HEXISTS user:1 name', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-45', command: 'HKEYS key', description: 'Get all field names', example: 'HKEYS user:1', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-46', command: 'HVALS key', description: 'Get all values', example: 'HVALS user:1', category: 'Hashes', difficulty: 'beginner' },
    { id: 'redis-47', command: 'HINCRBY key field amount', description: 'Increment field', example: 'HINCRBY user:1 age 1', category: 'Hashes', difficulty: 'intermediate' },

    // ============ SORTED SETS ============
    { id: 'redis-48', command: 'ZADD key score member', description: 'Add to sorted set', example: 'ZADD leaderboard 100 "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-49', command: 'ZRANGE key start stop', description: 'Get range by index (asc)', example: 'ZRANGE leaderboard 0 -1', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-50', command: 'ZREVRANGE key start stop', description: 'Get range by index (desc)', example: 'ZREVRANGE leaderboard 0 9', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-51', command: 'ZSCORE key member', description: 'Get member score', example: 'ZSCORE leaderboard "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-52', command: 'ZRANK key member', description: 'Get member rank (asc)', example: 'ZRANK leaderboard "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-53', command: 'ZREVRANK key member', description: 'Get member rank (desc)', example: 'ZREVRANK leaderboard "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-54', command: 'ZINCRBY key increment member', description: 'Increment score', example: 'ZINCRBY leaderboard 10 "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-55', command: 'ZREM key member', description: 'Remove member', example: 'ZREM leaderboard "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-56', command: 'ZCARD key', description: 'Get sorted set size', example: 'ZCARD leaderboard', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'redis-57', command: 'ZRANGEBYSCORE key min max', description: 'Get by score range', example: 'ZRANGEBYSCORE leaderboard 50 100', category: 'Sorted Sets', difficulty: 'advanced' },

    // ============ KEYS ============
    { id: 'redis-58', command: 'KEYS pattern', description: 'Find keys by pattern', example: 'KEYS user:*', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-59', command: 'EXISTS key', description: 'Check if key exists', example: 'EXISTS mykey', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-60', command: 'DEL key', description: 'Delete key', example: 'DEL mykey', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-61', command: 'EXPIRE key seconds', description: 'Set expiration', example: 'EXPIRE session 3600', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-62', command: 'TTL key', description: 'Get time to live', example: 'TTL session', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-63', command: 'PERSIST key', description: 'Remove expiration', example: 'PERSIST session', category: 'Keys', difficulty: 'intermediate' },
    { id: 'redis-64', command: 'RENAME key newkey', description: 'Rename key', example: 'RENAME old new', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-65', command: 'TYPE key', description: 'Get key type', example: 'TYPE mykey', category: 'Keys', difficulty: 'beginner' },
    { id: 'redis-66', command: 'SCAN cursor', description: 'Iterate keys (safe)', example: 'SCAN 0 MATCH user:* COUNT 100', category: 'Keys', difficulty: 'intermediate' },
    { id: 'redis-67', command: 'EXPIREAT key timestamp', description: 'Set expiration (Unix time)', example: 'EXPIREAT key 1735689600', category: 'Keys', difficulty: 'intermediate' },

    // ============ PUB/SUB ============
    { id: 'redis-68', command: 'SUBSCRIBE channel', description: 'Subscribe to channel', example: 'SUBSCRIBE notifications', category: 'Pub/Sub', difficulty: 'intermediate' },
    { id: 'redis-69', command: 'PUBLISH channel message', description: 'Publish message', example: 'PUBLISH notifications "Hello"', category: 'Pub/Sub', difficulty: 'intermediate' },
    { id: 'redis-70', command: 'UNSUBSCRIBE channel', description: 'Unsubscribe from channel', example: 'UNSUBSCRIBE notifications', category: 'Pub/Sub', difficulty: 'intermediate' },
    { id: 'redis-71', command: 'PSUBSCRIBE pattern', description: 'Subscribe with pattern', example: 'PSUBSCRIBE news:*', category: 'Pub/Sub', difficulty: 'intermediate' },

    // ============ TRANSACTIONS ============
    { id: 'redis-72', command: 'MULTI', description: 'Start transaction', example: 'MULTI', category: 'Transactions', difficulty: 'intermediate' },
    { id: 'redis-73', command: 'EXEC', description: 'Execute transaction', example: 'EXEC', category: 'Transactions', difficulty: 'intermediate' },
    { id: 'redis-74', command: 'DISCARD', description: 'Discard transaction', example: 'DISCARD', category: 'Transactions', difficulty: 'intermediate' },
    { id: 'redis-75', command: 'WATCH key', description: 'Watch key for changes', example: 'WATCH balance', category: 'Transactions', difficulty: 'advanced' },

    // ============ SERVER ============
    { id: 'redis-76', command: 'INFO', description: 'Get server info', example: 'INFO memory', category: 'Server', difficulty: 'beginner' },
    { id: 'redis-77', command: 'DBSIZE', description: 'Get key count', example: 'DBSIZE', category: 'Server', difficulty: 'beginner' },
    { id: 'redis-78', command: 'FLUSHDB', description: 'Delete all keys in DB', example: 'FLUSHDB', category: 'Server', difficulty: 'advanced' },
    { id: 'redis-79', command: 'FLUSHALL', description: 'Delete all keys in all DBs', example: 'FLUSHALL', category: 'Server', difficulty: 'advanced' },
    { id: 'redis-80', command: 'SAVE', description: 'Synchronous save to disk', example: 'SAVE', category: 'Server', difficulty: 'intermediate' },
    { id: 'redis-81', command: 'BGSAVE', description: 'Background save to disk', example: 'BGSAVE', category: 'Server', difficulty: 'intermediate' },
    { id: 'redis-82', command: 'CONFIG GET parameter', description: 'Get config value', example: 'CONFIG GET maxmemory', category: 'Server', difficulty: 'intermediate' },
    { id: 'redis-83', command: 'CONFIG SET parameter value', description: 'Set config value', example: 'CONFIG SET maxmemory 1gb', category: 'Server', difficulty: 'advanced' },
    { id: 'redis-84', command: 'CLIENT LIST', description: 'List connected clients', example: 'CLIENT LIST', category: 'Server', difficulty: 'intermediate' },
    { id: 'redis-85', command: 'SLOWLOG GET count', description: 'Get slow queries', example: 'SLOWLOG GET 10', category: 'Server', difficulty: 'intermediate' },
  ],

  flashcards: [
    // ============ BASICS ============
    { id: 'fc-redis-1', front: 'What is Redis?', back: 'Remote Dictionary Server - an open-source, in-memory data structure store.\n\nUsed as:\n- Database\n- Cache\n- Message broker\n- Queue\n\nFeatures: Single-threaded, sub-millisecond latency, persistence options.', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-redis-2', front: 'What data structures does Redis support?', back: 'Strings: Binary-safe, up to 512MB\nLists: Linked lists of strings\nSets: Unordered unique strings\nSorted Sets: Sets with scores\nHashes: Field-value pairs (like objects)\nStreams: Append-only log\nBitmaps: Bit operations on strings\nHyperLogLog: Probabilistic counting', category: 'Basics', difficulty: 'beginner' },
    { id: 'fc-redis-3', front: 'Why is Redis so fast?', back: '1. In-memory storage (no disk I/O for reads)\n2. Single-threaded (no context switching)\n3. Simple data structures\n4. Non-blocking I/O multiplexing\n5. Written in C\n6. Efficient protocol (RESP)\n\nTypical latency: <1ms', category: 'Basics', difficulty: 'intermediate' },
    { id: 'fc-redis-4', front: 'What is the default Redis port?', back: '6379\n\nOther common ports:\n- 16379: Cluster bus\n- 26379: Sentinel', category: 'Basics', difficulty: 'beginner' },

    // ============ STRINGS ============
    { id: 'fc-redis-5', front: 'What are Redis Strings used for?', back: 'Most versatile data type. Use cases:\n- Caching (session data, HTML pages)\n- Counters (INCR/DECR)\n- Rate limiting\n- Distributed locks (SETNX)\n- Storing JSON/serialized objects\n\nMax size: 512MB', category: 'Strings', difficulty: 'beginner' },
    { id: 'fc-redis-6', front: 'What is the difference between SET and SETNX?', back: 'SET: Always sets the value (overwrites)\n\nSETNX: Set if Not eXists - only sets if key doesn\'t exist.\nReturns 1 if set, 0 if key existed.\n\nUsed for distributed locks:\nSETNX lock:resource "owner" EX 30', category: 'Strings', difficulty: 'intermediate' },
    { id: 'fc-redis-7', front: 'How do you implement a counter in Redis?', back: 'INCR key: Increment by 1\nINCRBY key 5: Increment by 5\nDECR key: Decrement by 1\nDECRBY key 5: Decrement by 5\nINCRBYFLOAT key 1.5: Float increment\n\nAtomic operations - safe for concurrent access.', category: 'Strings', difficulty: 'beginner' },

    // ============ LISTS ============
    { id: 'fc-redis-8', front: 'What are Redis Lists used for?', back: 'Doubly-linked list of strings. Use cases:\n- Message queues (LPUSH + RPOP)\n- Activity feeds\n- Recent items (capped lists)\n- Inter-process communication\n\nO(1) push/pop at ends, O(n) for middle access.', category: 'Lists', difficulty: 'beginner' },
    { id: 'fc-redis-9', front: 'How do you implement a queue with Redis Lists?', back: 'Simple Queue (FIFO):\n- Producer: RPUSH queue "task"\n- Consumer: LPOP queue\n\nBlocking Queue:\n- Consumer: BLPOP queue 0\n(Blocks until item available)\n\nReliable Queue:\n- BRPOPLPUSH source dest timeout', category: 'Lists', difficulty: 'intermediate' },
    { id: 'fc-redis-10', front: 'What is LRANGE 0 -1?', back: 'Gets ALL elements in a list.\n\n0 = first index\n-1 = last index (negative indexing)\n\nLRANGE mylist 0 -1\n→ Returns entire list\n\nLRANGE mylist 0 9\n→ Returns first 10 elements', category: 'Lists', difficulty: 'beginner' },

    // ============ SETS ============
    { id: 'fc-redis-11', front: 'What are Redis Sets used for?', back: 'Unordered collection of unique strings. Use cases:\n- Tagging\n- Unique visitors tracking\n- Friend lists / followers\n- Real-time analytics\n\nOperations: Union, Intersection, Difference\nO(1) add/remove/membership check', category: 'Sets', difficulty: 'beginner' },
    { id: 'fc-redis-12', front: 'How do you find common elements between two sets?', back: 'SINTER set1 set2\n→ Returns intersection (common elements)\n\nSINTERSTORE dest set1 set2\n→ Stores result in dest\n\nUse case: Find mutual friends\nSINTER friends:user1 friends:user2', category: 'Sets', difficulty: 'intermediate' },

    // ============ HASHES ============
    { id: 'fc-redis-13', front: 'What are Redis Hashes used for?', back: 'Field-value pairs - like objects/dictionaries.\n\nUse cases:\n- User profiles: HSET user:1 name "John" age 30\n- Counters: HINCRBY stats pageviews 1\n- Object storage (more memory-efficient than JSON strings)\n\nCan have 4 billion fields per hash.', category: 'Hashes', difficulty: 'beginner' },
    { id: 'fc-redis-14', front: 'Why use Hashes instead of separate String keys?', back: 'Memory Efficiency:\n- Hash with 100 fields uses less memory than 100 separate strings\n- Redis uses special encoding for small hashes\n\nAtomicity:\n- Update multiple fields: HMSET user:1 f1 v1 f2 v2\n\nOrganization:\n- All user data under one key', category: 'Hashes', difficulty: 'intermediate' },

    // ============ SORTED SETS ============
    { id: 'fc-redis-15', front: 'What are Redis Sorted Sets used for?', back: 'Sets with a score for each member. Ordered by score.\n\nUse cases:\n- Leaderboards\n- Priority queues\n- Rate limiters\n- Time-series data\n- Ranking systems\n\nO(log n) add/remove, O(log n + m) range queries', category: 'Sorted Sets', difficulty: 'intermediate' },
    { id: 'fc-redis-16', front: 'How do you create a leaderboard with Redis?', back: 'Add scores:\nZADD leaderboard 100 "player1"\nZADD leaderboard 200 "player2"\n\nTop 10:\nZREVRANGE leaderboard 0 9 WITHSCORES\n\nPlayer rank:\nZREVRANK leaderboard "player1"\n\nIncrement score:\nZINCRBY leaderboard 50 "player1"', category: 'Sorted Sets', difficulty: 'intermediate' },

    // ============ EXPIRATION ============
    { id: 'fc-redis-17', front: 'How does key expiration work in Redis?', back: 'EXPIRE key seconds: Set TTL in seconds\nEXPIREAT key timestamp: Set Unix expiration time\nPEXPIRE key milliseconds: TTL in milliseconds\n\nTTL key: Check remaining time (-1 = no expiry, -2 = key doesn\'t exist)\n\nPERSIST key: Remove expiration', category: 'Keys', difficulty: 'beginner' },
    { id: 'fc-redis-18', front: 'How does Redis delete expired keys?', back: 'Two strategies:\n\n1. Passive (Lazy) Deletion:\n- Key checked on access\n- If expired, deleted and null returned\n\n2. Active Deletion:\n- Every 100ms, samples 20 random keys\n- Deletes expired ones\n- Repeats if >25% were expired\n\nNever blocks for too long.', category: 'Keys', difficulty: 'advanced' },

    // ============ PERSISTENCE ============
    { id: 'fc-redis-19', front: 'What are Redis persistence options?', back: 'RDB (Redis Database):\n- Point-in-time snapshots\n- Compact, faster restarts\n- Some data loss possible\n\nAOF (Append Only File):\n- Logs every write operation\n- More durable\n- Larger files, slower restart\n\nBoth: RDB for backups + AOF for durability', category: 'Persistence', difficulty: 'intermediate' },
    { id: 'fc-redis-20', front: 'What is the difference between SAVE and BGSAVE?', back: 'SAVE:\n- Synchronous\n- Blocks Redis until complete\n- Use only when downtime is OK\n\nBGSAVE:\n- Background save\n- Forks a child process\n- Redis continues serving requests\n- Preferred for production', category: 'Persistence', difficulty: 'intermediate' },

    // ============ PUB/SUB ============
    { id: 'fc-redis-21', front: 'How does Redis Pub/Sub work?', back: 'Publisher sends messages to channels:\nPUBLISH news:sports "Goal scored!"\n\nSubscribers listen to channels:\nSUBSCRIBE news:sports\n\nPattern subscribe:\nPSUBSCRIBE news:*\n\nNote: Messages not persisted - subscribers must be connected to receive.', category: 'Pub/Sub', difficulty: 'intermediate' },

    // ============ TRANSACTIONS ============
    { id: 'fc-redis-22', front: 'How do Redis transactions work?', back: 'MULTI: Start transaction\n... commands queued ...\nEXEC: Execute all atomically\n\nDISCARD: Cancel transaction\n\nNote: No rollback - if one fails, others still execute.\n\nWATCH key: Optimistic locking - EXEC fails if key changed.', category: 'Transactions', difficulty: 'intermediate' },
    { id: 'fc-redis-23', front: 'What is WATCH used for in Redis?', back: 'Optimistic locking for transactions.\n\nWATCH balance\nval = GET balance\nMULTI\nSET balance (val - 100)\nEXEC\n\nIf another client modifies balance between WATCH and EXEC, EXEC returns nil (transaction aborted).\n\nUNWATCH: Cancel all watches', category: 'Transactions', difficulty: 'advanced' },

    // ============ CACHING ============
    { id: 'fc-redis-24', front: 'What are common caching patterns with Redis?', back: 'Cache-Aside:\n1. Check cache\n2. If miss, read DB, store in cache\n\nWrite-Through:\n- Write to cache and DB together\n\nWrite-Behind:\n- Write to cache, async DB update\n\nRead-Through:\n- Cache handles DB reads automatically', category: 'Caching', difficulty: 'intermediate' },
    { id: 'fc-redis-25', front: 'What is cache stampede and how to prevent it?', back: 'Problem: Popular key expires → many concurrent DB queries\n\nSolutions:\n1. Lock: Only one fetches, others wait\n   SETNX lock:key 1 EX 30\n\n2. Early recompute: Refresh before expiry\n\n3. Probabilistic expiry: Random TTL offsets\n\n4. Never expire: Background refresh', category: 'Caching', difficulty: 'advanced' },

    // ============ MEMORY ============
    { id: 'fc-redis-26', front: 'How do you check Redis memory usage?', back: 'INFO memory\n\nKey metrics:\n- used_memory: Total allocated\n- used_memory_rss: OS view (includes fragmentation)\n- maxmemory: Configured limit\n- mem_fragmentation_ratio: RSS/used (1.0-1.5 normal)\n\nMEMORY USAGE key: Memory for specific key', category: 'Memory', difficulty: 'intermediate' },
    { id: 'fc-redis-27', front: 'What are Redis eviction policies?', back: 'When maxmemory reached:\n\nnoeviction: Return errors (default)\nallkeys-lru: Remove least recently used\nvolatile-lru: LRU among keys with TTL\nallkeys-lfu: Remove least frequently used\nvolatile-lfu: LFU among keys with TTL\nallkeys-random: Random removal\nvolatile-random: Random among TTL keys\nvolatile-ttl: Remove nearest expiry', category: 'Memory', difficulty: 'intermediate' },

    // ============ CLUSTER ============
    { id: 'fc-redis-28', front: 'What is Redis Cluster?', back: 'Horizontal scaling with automatic sharding.\n\n- Data split across multiple nodes (16384 hash slots)\n- Automatic failover with replicas\n- Minimum 3 master nodes recommended\n- Some limitations: multi-key ops need same slot\n\nUse hash tags for same slot: {user}:1, {user}:2', category: 'Cluster', difficulty: 'advanced' },
    { id: 'fc-redis-29', front: 'What is Redis Sentinel?', back: 'High availability for Redis.\n\nFeatures:\n- Monitors master and replicas\n- Automatic failover\n- Client notification\n- Configuration provider\n\nRequires 3+ Sentinel instances for quorum.\nDifferent from Cluster: no sharding, just HA.', category: 'Cluster', difficulty: 'advanced' },

    // ============ BEST PRACTICES ============
    { id: 'fc-redis-30', front: 'What are Redis key naming best practices?', back: 'Use colons as separators:\nuser:1000:profile\nuser:1000:followers\n\nKeep keys short but meaningful:\nobject-type:id:field\n\nUse consistent naming across app.\n\nAvoid KEYS in production (use SCAN).\n\nDocument your key schema.', category: 'Best Practices', difficulty: 'beginner' },
    { id: 'fc-redis-31', front: 'Why should you avoid KEYS command in production?', back: 'KEYS pattern scans ALL keys - O(n).\n\nBlocks Redis while running:\n- 1M keys = several seconds\n- 100M keys = minutes\n\nUse SCAN instead:\nSCAN 0 MATCH user:* COUNT 100\n\nIterates incrementally, doesn\'t block.', category: 'Best Practices', difficulty: 'intermediate' },
    { id: 'fc-redis-32', front: 'How do you implement rate limiting with Redis?', back: 'Sliding Window with Sorted Sets:\nZADD rate:user:1 timestamp timestamp\nZREMRANGEBYSCORE rate:user:1 0 (now-60s)\nZCARD rate:user:1\n\nFixed Window with INCR:\nINCR rate:user:1:minute_bucket\nEXPIRE rate:user:1:minute_bucket 60', category: 'Best Practices', difficulty: 'advanced' },
  ],

  quizQuestions: [
    // ============ BASICS ============
    {
      id: 'q-redis-1',
      question: 'What is the default port for Redis?',
      options: ['3306', '5432', '6379', '27017'],
      correctAnswer: 2,
      explanation: '6379 is the default Redis port. 3306 is MySQL, 5432 is PostgreSQL, 27017 is MongoDB.',
      category: 'Basics'
    },
    {
      id: 'q-redis-2',
      question: 'Why is Redis so fast?',
      options: ['Multi-threaded processing', 'In-memory storage', 'Stored on SSD', 'Complex indexing'],
      correctAnswer: 1,
      explanation: 'Redis stores all data in memory, eliminating disk I/O latency for reads and writes.',
      category: 'Basics'
    },
    {
      id: 'q-redis-3',
      question: 'Which is NOT a Redis data structure?',
      options: ['List', 'Hash', 'Table', 'Sorted Set'],
      correctAnswer: 2,
      explanation: 'Table is not a Redis data structure. Redis supports Strings, Lists, Sets, Sorted Sets, Hashes, Streams, etc.',
      category: 'Basics'
    },

    // ============ STRINGS ============
    {
      id: 'q-redis-4',
      question: 'What does SETNX do?',
      options: ['Sets value and returns old', 'Sets only if key exists', 'Sets only if key does NOT exist', 'Sets with expiration'],
      correctAnswer: 2,
      explanation: 'SETNX (SET if Not eXists) only sets the value if the key doesn\'t already exist. Used for distributed locks.',
      category: 'Strings'
    },
    {
      id: 'q-redis-5',
      question: 'What command increments a value atomically?',
      options: ['ADD', 'INCREMENT', 'INCR', 'PLUS'],
      correctAnswer: 2,
      explanation: 'INCR atomically increments a numeric string value by 1. INCRBY increments by a specific amount.',
      category: 'Strings'
    },

    // ============ LISTS ============
    {
      id: 'q-redis-6',
      question: 'Which commands implement a FIFO queue?',
      options: ['LPUSH + LPOP', 'RPUSH + RPOP', 'LPUSH + RPOP or RPUSH + LPOP', 'SET + GET'],
      correctAnswer: 2,
      explanation: 'FIFO (First In, First Out) can be achieved with LPUSH + RPOP or RPUSH + LPOP.',
      category: 'Lists'
    },
    {
      id: 'q-redis-7',
      question: 'What does LRANGE mylist 0 -1 return?',
      options: ['First element', 'Last element', 'All elements', 'Error'],
      correctAnswer: 2,
      explanation: '0 is the first index, -1 is the last index. LRANGE 0 -1 returns all elements in the list.',
      category: 'Lists'
    },

    // ============ SETS ============
    {
      id: 'q-redis-8',
      question: 'What command finds common elements between two sets?',
      options: ['SUNION', 'SINTER', 'SDIFF', 'SMEMBERS'],
      correctAnswer: 1,
      explanation: 'SINTER returns the intersection (common elements) of multiple sets.',
      category: 'Sets'
    },
    {
      id: 'q-redis-9',
      question: 'What is unique about Redis Sets?',
      options: ['Ordered by insertion', 'Allow duplicates', 'All members are unique', 'Limited to 100 items'],
      correctAnswer: 2,
      explanation: 'Redis Sets contain only unique members. Adding a duplicate has no effect.',
      category: 'Sets'
    },

    // ============ HASHES ============
    {
      id: 'q-redis-10',
      question: 'What command gets all fields and values from a hash?',
      options: ['HGET', 'HMGET', 'HGETALL', 'HKEYS'],
      correctAnswer: 2,
      explanation: 'HGETALL returns all field-value pairs in a hash.',
      category: 'Hashes'
    },
    {
      id: 'q-redis-11',
      question: 'Why use Hashes instead of JSON strings?',
      options: ['Faster parsing', 'More memory efficient and can update individual fields', 'Supports more data types', 'Better security'],
      correctAnswer: 1,
      explanation: 'Hashes are more memory efficient for small hashes and allow updating individual fields without retrieving the entire object.',
      category: 'Hashes'
    },

    // ============ SORTED SETS ============
    {
      id: 'q-redis-12',
      question: 'What makes Sorted Sets different from Sets?',
      options: ['Allow duplicates', 'Each member has a score', 'Limited size', 'String keys only'],
      correctAnswer: 1,
      explanation: 'Sorted Sets associate a score with each member, ordering elements by score.',
      category: 'Sorted Sets'
    },
    {
      id: 'q-redis-13',
      question: 'Which command gets the top 10 from a leaderboard?',
      options: ['ZRANGE leaderboard 0 9', 'ZREVRANGE leaderboard 0 9', 'ZTOP leaderboard 10', 'ZGET leaderboard 10'],
      correctAnswer: 1,
      explanation: 'ZREVRANGE returns members in descending order by score. 0-9 gives the top 10.',
      category: 'Sorted Sets'
    },

    // ============ EXPIRATION ============
    {
      id: 'q-redis-14',
      question: 'What does TTL return for a key without expiration?',
      options: ['0', '-1', '-2', 'Error'],
      correctAnswer: 1,
      explanation: 'TTL returns -1 if the key exists but has no expiration, -2 if the key doesn\'t exist.',
      category: 'Keys'
    },
    {
      id: 'q-redis-15',
      question: 'How do you remove expiration from a key?',
      options: ['UNEXPIRE', 'TTL -1', 'PERSIST', 'EXPIRE 0'],
      correctAnswer: 2,
      explanation: 'PERSIST removes the expiration from a key, making it permanent.',
      category: 'Keys'
    },

    // ============ PERSISTENCE ============
    {
      id: 'q-redis-16',
      question: 'Which persistence method logs every write operation?',
      options: ['RDB', 'AOF', 'Both', 'Neither'],
      correctAnswer: 1,
      explanation: 'AOF (Append Only File) logs every write operation. RDB creates point-in-time snapshots.',
      category: 'Persistence'
    },
    {
      id: 'q-redis-17',
      question: 'What is the difference between SAVE and BGSAVE?',
      options: ['SAVE is faster', 'BGSAVE blocks Redis', 'SAVE blocks Redis, BGSAVE runs in background', 'No difference'],
      correctAnswer: 2,
      explanation: 'SAVE blocks Redis until complete. BGSAVE forks a child process and runs in background.',
      category: 'Persistence'
    },

    // ============ TRANSACTIONS ============
    {
      id: 'q-redis-18',
      question: 'What command starts a Redis transaction?',
      options: ['BEGIN', 'START', 'MULTI', 'TRANSACTION'],
      correctAnswer: 2,
      explanation: 'MULTI starts a transaction. Commands are queued until EXEC executes them atomically.',
      category: 'Transactions'
    },
    {
      id: 'q-redis-19',
      question: 'What does WATCH do in Redis transactions?',
      options: ['Monitors performance', 'Provides optimistic locking', 'Logs commands', 'Blocks other clients'],
      correctAnswer: 1,
      explanation: 'WATCH implements optimistic locking. If the watched key changes before EXEC, the transaction fails.',
      category: 'Transactions'
    },

    // ============ MEMORY ============
    {
      id: 'q-redis-20',
      question: 'What eviction policy removes least recently used keys?',
      options: ['noeviction', 'allkeys-lru', 'volatile-ttl', 'allkeys-random'],
      correctAnswer: 1,
      explanation: 'allkeys-lru removes the least recently used keys when maxmemory is reached.',
      category: 'Memory'
    },

    // ============ BEST PRACTICES ============
    {
      id: 'q-redis-21',
      question: 'Why should you avoid KEYS command in production?',
      options: ['It\'s deprecated', 'It blocks Redis and scans all keys', 'It\'s slow to type', 'It uses too much memory'],
      correctAnswer: 1,
      explanation: 'KEYS scans ALL keys in the database, blocking Redis. Use SCAN for production.',
      category: 'Best Practices'
    },
    {
      id: 'q-redis-22',
      question: 'What is the recommended key naming convention?',
      options: ['CamelCase', 'Colons as separators (object:id:field)', 'Underscores only', 'No convention'],
      correctAnswer: 1,
      explanation: 'Using colons as separators (e.g., user:1000:profile) is the standard Redis convention.',
      category: 'Best Practices'
    },

    // ============ PUB/SUB ============
    {
      id: 'q-redis-23',
      question: 'Are Redis Pub/Sub messages persisted?',
      options: ['Yes, always', 'Yes, with AOF', 'No, subscribers must be connected', 'Only for 24 hours'],
      correctAnswer: 2,
      explanation: 'Pub/Sub messages are not persisted. Subscribers must be connected to receive messages.',
      category: 'Pub/Sub'
    },

    // ============ CLUSTER ============
    {
      id: 'q-redis-24',
      question: 'What is Redis Sentinel used for?',
      options: ['Sharding', 'High availability and failover', 'Monitoring only', 'Data compression'],
      correctAnswer: 1,
      explanation: 'Redis Sentinel provides high availability with automatic failover, not sharding.',
      category: 'Cluster'
    },
    {
      id: 'q-redis-25',
      question: 'How many hash slots does Redis Cluster use?',
      options: ['1024', '4096', '16384', '65536'],
      correctAnswer: 2,
      explanation: 'Redis Cluster uses 16384 hash slots distributed across master nodes.',
      category: 'Cluster'
    },
  ],
};

