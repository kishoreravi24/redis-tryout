# Redis

* Nosql database but not like mongoDB document based one this is key-value pair based like json.
* Unlike sql database or nosql this doesn't store the values on disks instead on the working memory RAM.
* Not used as persistent database so not for storing purpose but for caching purpose.
* Store the data on database to access for the time have REDIS easy to access ( I mean faster, no.. way faster to access).

### Install ?

```
apt install redis
```

### Check

```
redis-server
stop: sudo service redis-server stop
start: redis-server
```

### Access/Commands

```
redis-cli
SET KEY VALUE: SET name kishore 
GET KEY: GET name // "kishore"
SET KEY VALUE: SET age 25
GET KEY: GET age // "25"
RETURN KEYS: KEYS * // List keys
PURGE: flushall
KEY EXPIRE: expire name 10
```
### List

```
LPUSH mylist item1
LPUSH mylist item2
LPUSH mylist item3

LRANGE mylist 0-1
```

### Hash

```
HSET myhash field1 value1
HSET myhash field2 value2
HSET myhash field3 value3

HGET myhash
```

### Set

```
SADD myset member1
SADD myset member2
SADD myset member3

SMEMBERS myset
```

