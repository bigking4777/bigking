---
title: clip-path
date: 2021-12-24 
categories: 
  - components
tags: 
  - css

---


# 先上效果
<div>
<clipBox headerText='盒子头'>
<div style='height:100%;display:flex;justify-content:center;align-items:center;font-size:24px;font-weight:blod'>
让花成花，让树成树
</div>
</clipBox>
</div>

# 实现方法

### 利用clip-path将一块区域裁剪，但是任然占据高度，没有脱离文档流，算是做这种类型的盒子的一种思路吧