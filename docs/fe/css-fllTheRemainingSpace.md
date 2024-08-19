---
nav: 前端
group:
  title: css
  order: 0
order: 0
---

# 填充剩余空间

### div 左右排列,填满 width 剩余空间

利用**BFC**,左边定宽定高,比如侧栏,右边占据剩余空间,用**float:left**定义左边 div 的**BFC**,用**overfow:hidden**来定义右边 div 的**BFC**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div style="width:500px;border:1px solid #ddd;height:500px">
      <div style="float:left;height:100px;width:100px;background:green;">
        hah
      </div>

      <div style="overflow:hidden;background:yellow">nihao</div>
    </div>
  </body>
</html>
```

结果

![image.png](https://raw.githubusercontent.com/binnapro/pics/main/dumiblog/1723968840397-88c5420d-8a5c-4ddb-b851-e028b30c71c6-20240818231717401.png)

### div 垂直排列,填满 height 剩余空间

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
  </head>

  <body>
    <div
      style="background:gold;overflow: hidden;width:100px;position: relative;height: 100px;"
    >
      <div style="width:20px;background:red;height:50px;">1</div>

      <div
        style="width:30px;background:green;position: absolute;top:20px;bottom:0;"
      ></div>
    </div>
  </body>
</html>
```

结果

<img src="https://raw.githubusercontent.com/binnapro/pics/main/dumiblog/1723968889938-0a647999-745b-4d60-9b04-097b3141a801.png" alt="image.png" style="zoom: 25%;" />

### div 左右排列,填满 height 剩余空间

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>

    <style>
      .box {
        margin-bottom: -800px;
        border: 1px solid black;
      }
      .box div {
        float: left;
      }
    </style>
  </head>

  <body>
    <div style="background:gold;overflow: hidden;width:500px;" class="box">
      <div style="width:30%;background:red;height:200px;">1</div>

      <div style="width:50%;background:green;height:300px;">2</div>

      <div style="width:10%;background:gray;height:700px;">3</div>
    </div>
  </body>
</html>
```

结果

<img src="https://raw.githubusercontent.com/binnapro/pics/main/dumiblog/1723968910558-5eb22ac6-9bc4-419f-9aa8-99f3945399c4.png" alt="image.png" style="zoom:25%;" />

### 修改方式

```html
.box div{ padding-bottom: 1000px; margin-bottom: -1000px; }
```

<img src="https://raw.githubusercontent.com/binnapro/pics/main/dumiblog/1723968923001-c7a687ed-ad03-4fef-a2ae-552ff34d1a54.png" alt="image.png" style="zoom:25%;" />
