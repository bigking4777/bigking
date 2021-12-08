---
title: 优惠券
date: 2021-01-22 
categories: 
  - components
tags: 
  - ticket
---
# 基础的一张优惠券
一个优惠券
<ClientOnly>
  <TicketBase
      height='60px'
      title="一张普通的优惠券">
    </TicketBase>
</ClientOnly>

# 一个特别的优惠卷

自己加点文字进去
<ClientOnly>
  <TicketLone
      radius="10px"
      num="6"
    >
      <div slot="left">这是</div>
      <div slot="right">一张特别一点的优惠券</div>
    </TicketLone>
</ClientOnly>
 