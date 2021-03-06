# 题目
## 编写一个解析命令行参数的程序。

传入的参数包含“标记”和“值”，标记的组成是字母，前面加上横线（例如：-p），每个标记会有值与之对应。


例如：处理下面的字符串，用合适的类型取出参数值。
``` javascript
-l true -p 8080 -d /usr/log
```
>* 参数l（logging，代表“是否记录日志”）：true（布尔型）
>* 参数p（port，代表“端口号”）：8080（整数型）
>* 参数d（directory，代表“日志输出目录”）：“/usr/log”（字符串型）

-------
### 进阶1：参数值可以省略，解析结果中给出默认值
``` javascript
-l -p 8080 -d /usr/log
```

>* 参数l的值省略，解析结果 {l: false}

-------
### 进阶2：参数值可以为 数组/类似数组 类型
``` javascript
-l -p 8080 -d /usr/log -r 1,2,-3,0 -f a,b,c
注意：r参数中有负数，同样带有横线，容易和参数混淆
```

>* 参数r解析结果 {r: [1, 2, -3, 0]}
>* 参数f解析结果 {f: ['a', 'b', 'c']}


