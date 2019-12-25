# 题目
## 编写一个控制小车移动的程序
假设你在火星探索团队中负责软件开发，现在你要给登录火星的探索车编写控制程序，根据地球发送的控制指令来控制探索车的行动。

探索车收到的指令分飞四类：
>* 探索区域信息：告知探索车，整片区域的长度（X）和宽度（Y）有多大。
>* 初始话信息：探索车的降落地点（x,y）和朝向（N，S，E，W）信息。
>* 移动指令：探索车可以前进（F）。
>* 转向指令：探索车可以左转90度（L）或右转90都（R）。

由于地球和火星之间的距离遥远，指令必须要批量的发送，探索车完成批指令之后，再回报自己所在的位置坐标和朝向。