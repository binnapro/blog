---
nav: 前端
group:
  title: js
  order: 1
order: 0
---

# 二进制掩码

## lodash 案例

```jsx | pure
var CLONE_DEEP_FLAG    = 1,
    CLONE_FLAT_FLAG    = 2,
    CLONE_SYMBOLS_FLAG = 4;

function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;
  ...
  ...
  ...
  return result;
}
```

只看上述代码 1~3 行的值，确实很迷糊。但是我们看它的名字，看完名字大概就知道，其实这 3 个数字代表了三种场景。而 3 种场景，用 3 个数字来代表，就和我们平时给组件区分类型一样（虽然我不让你们这么写）。
所以 1~3 行还是好理解的，但是 7~8 行呢？`&` 👿

## & |

标题是一些运算符，他们操纵的是`二进制`(遇到 2 进一位，所以不像 10 进制，2 进制只有 0 和 1，而 10 进制有 0 到 9)，这点很重要。

```javascript | pure
var a = 0; // 0000   0
var a = 1; // 0001   2^0
var a = 2; // 0010   2^1
var a = 3; // 0011   2^1+2^0
var a = 4; // 0100   2^2
var a = 5; // 0101   2^2+2^0
var a = 6; // 0110   2^2+2^1
var a = 7; // 0111   2^2+2^1+2^0
var a = 8; // 1000   2^3
```

```jsx | pure
|
| 0
0 | 0
1 | 1
1 |
| --- | --- | --- | --- |
| & 与 | 0 | 0 | 1 |
| &#124; 或 | 0 | 1 | 1 |
```

```jsx | pure
1 & 2 = 0;   // 0001 & 0010    0000
4 & 8 = 0;   // 0100 & 1000    0000
3 & 5 = 1;   // 0011 & 0101    0001
```

```jsx | pure
1 & 2 = 3;    // 0001 | 0010   0011
4 & 8 = 12;   // 0100 | 1000   1100
3 & 5 = 7;    // 0011 | 0101   0111
```

## 栗子

```jsx | pure
// 假设一个系统有4种权限：增 删 改 查
// 有个用户有权限：增 删 改
var auth = { add: true, del: true, upadte: true, read: false };
// 或者
var add = 1,
  del = 2,
  update = 3,
  read = 4;
var auth = [1, 2, 3];
// 等等写法，都没啥问题！！！

// ===================== 如果是这样呢  =====================
var ADD = 1,
  DEL = 2,
  UPDATE = 4,
  READ = 8;
var authAddDel = ADD | DEL;
var authAll = ADD | DEL | UPDATE | READ;

if (authAddDel & (ADD === ADD)) {
  // 可以直接判断是否大于0
  console.log('有新增权限');
}
```

原因如下

```jsx | pure
  0001  ->  1
| 0010  ->  2
------
  0011  ->  3  |     0011  ->  3
& 0001  ->  1  |   & 0010  ->  2
------         |   ------
  0001  ->  1  |     0010  ->  2

1 | 2 = 3;
3 & 1 === 1; // 说明含有1
3 & 2 === 2; // 说明含有2
```

将 ADD 和 DEL 这些设置成 1 2 4 8 是也是特意的，用 1bit（1 个直接等于 8 位 bit）来占用一种功能（每一位代表一种功能）。

```jsx | pure
3 | 5 = 7;
7 & 1 === 1;  // 因为3包含了2和1；5包含了4和1。
7 & 2 === 2;
7 & 4 === 4;
```
