(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{546:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"经典拖拽了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经典拖拽了"}},[a._v("#")]),a._v(" 经典拖拽了")]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"title"}),s("h1",{attrs:{id:"首先看看官网得拖拽例子"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首先看看官网得拖拽例子"}},[a._v("#")]),a._v(" 首先看看官网得拖拽例子")])]),s("h2",{attrs:{id:"series-graph-draggable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#series-graph-draggable"}},[a._v("#")]),a._v(" series-graph.draggable")]),a._v(" "),s("p",[a._v("节点是否可拖拽，只在使用力引导布局的时候有用。")]),a._v(" "),s("p",[a._v("OKOK,于是我这么做了")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('series: [\n          {\n            type: "graph",\n            layout: "force",\n            draggable: true,\n            }\n]\n')])])]),s("p",[a._v("其他细节省略了，不要在意细节")]),a._v(" "),s("h3",{attrs:{id:"结果如下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#结果如下"}},[a._v("#")]),a._v(" 结果如下")]),a._v(" "),s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("graph",{attrs:{basic:"",echartsId:"echartsYtBasic"}})],1),a._v(" "),s("h1",{attrs:{id:"很明显-这不是我想要-的结果"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#很明显-这不是我想要-的结果"}},[a._v("#")]),a._v(" 很明显，这不是我想要~ 的结果")]),a._v(" "),s("h3",{attrs:{id:"为啥节点拖拽之后会弹回去啊"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为啥节点拖拽之后会弹回去啊"}},[a._v("#")]),a._v(" 为啥节点拖拽之后会弹回去啊？")]),a._v(" "),s("h3",{attrs:{id:"经过我苦苦翻阅文档-查阅资料-疯狂百度几小时之后-我"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#经过我苦苦翻阅文档-查阅资料-疯狂百度几小时之后-我"}},[a._v("#")]),a._v(" 经过我苦苦翻阅文档，查阅资料，疯狂百度几小时之后，我")]),a._v(" "),s("h1",{attrs:{id:"找到了"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#找到了"}},[a._v("#")]),a._v(" 找到了！")]),a._v(" "),s("h2",{attrs:{id:"series-graph-fixed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#series-graph-fixed"}},[a._v("#")]),a._v(" series-graph.fixed")]),a._v(" "),s("p",[a._v("节点位置是否固定!!!!\n为毛这么重要的东西在文档上找不到啊？")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('series: [\n          {\n            type: "graph",\n            layout: "force",\n            draggable: true,\n            fixed: true\n            }\n]\n')])])]),s("p",[a._v("你以为结束了？nonononononononon，还是不行的哦")]),a._v(" "),s("h2",{attrs:{id:"因为你没给每个节点加上坐标值-加了fixed后-每个节点都要有自己的坐标值才行奥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#因为你没给每个节点加上坐标值-加了fixed后-每个节点都要有自己的坐标值才行奥"}},[a._v("#")]),a._v(" 因为你没给每个节点加上坐标值，加了fixed后，每个节点都要有自己的坐标值才行奥")]),a._v(" "),s("h3",{attrs:{id:"okok-我加-这边给每个节点加上坐标-就像排位置一样-之后想排成什么样子都可以在这里去给坐标-但是具体的位置就要靠你自己去算了-还是挺有意思的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#okok-我加-这边给每个节点加上坐标-就像排位置一样-之后想排成什么样子都可以在这里去给坐标-但是具体的位置就要靠你自己去算了-还是挺有意思的"}},[a._v("#")]),a._v(" OKOK，我加 （这边给每个节点加上坐标，就像排位置一样，之后想排成什么样子都可以在这里去给坐标，但是具体的位置就要靠你自己去算了，还是挺有意思的）")]),a._v(" "),s("h3",{attrs:{id:"加完之后-大功告成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加完之后-大功告成"}},[a._v("#")]),a._v(" 加完之后，大功告成")]),a._v(" "),s("h2",{attrs:{id:"太年轻-太简单了-事情往往都是一波三折的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#太年轻-太简单了-事情往往都是一波三折的"}},[a._v("#")]),a._v(" 太年轻，太简单了！事情往往都是一波三折的")]),a._v(" "),s("h3",{attrs:{id:"因为你加了fixed-所以所有节点都被固定了-所以不好意思-你的节点这时候是拖不动的-但是去掉fixed-你的节点是不固定的-拖了之后会弹回来-陷入了循环-这时候产生了一种奇怪的现象-我需要fixed-但是我又不需要fixed-我需要draggable-但是我又不需要draggable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#因为你加了fixed-所以所有节点都被固定了-所以不好意思-你的节点这时候是拖不动的-但是去掉fixed-你的节点是不固定的-拖了之后会弹回来-陷入了循环-这时候产生了一种奇怪的现象-我需要fixed-但是我又不需要fixed-我需要draggable-但是我又不需要draggable"}},[a._v("#")]),a._v(" 因为你加了fixed，所以所有节点都被固定了，所以不好意思，你的节点这时候是拖不动的，但是去掉fixed，你的节点是不固定的，拖了之后会弹回来，陷入了循环，这时候产生了一种奇怪的现象，我需要fixed，但是我又不需要fixed，我需要draggable，但是我又不需要draggable")]),a._v(" "),s("p",[a._v("怎么办怎么办？我陷入了苦思，主要是实在百度不到了")]),a._v(" "),s("h3",{attrs:{id:"终于-我想到了-canvas就是一个画布-东西都是画上去的-也就是说我加了fixed和draggable之后-我拖动节点-如果可以获取到节点的坐标-在松开鼠标之后-把节点坐标更新-再重新把整个echarts画一遍不就欧克了-so-easy嘛"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#终于-我想到了-canvas就是一个画布-东西都是画上去的-也就是说我加了fixed和draggable之后-我拖动节点-如果可以获取到节点的坐标-在松开鼠标之后-把节点坐标更新-再重新把整个echarts画一遍不就欧克了-so-easy嘛"}},[a._v("#")]),a._v(" 终于，我想到了，canvas就是一个画布，东西都是画上去的，也就是说我加了fixed和draggable之后，我拖动节点，如果可以获取到节点的坐标，在松开鼠标之后，把节点坐标更新，再重新把整个echarts画一遍不就欧克了？so easy嘛")]),a._v(" "),s("h2",{attrs:{id:"好-怎么获取坐标呢"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#好-怎么获取坐标呢"}},[a._v("#")]),a._v(" 好，怎么获取坐标呢？")]),a._v(" "),s("h3",{attrs:{id:"这边具体过程忘记了-在on-mouseup-里面的回调里可以获得-但是有坑-网上有些回答的坐标不是正确的坐标-用了之后位置会偏到十万八千里去-甚至你的图会突然消失-因为图被拉得很大很大"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#这边具体过程忘记了-在on-mouseup-里面的回调里可以获得-但是有坑-网上有些回答的坐标不是正确的坐标-用了之后位置会偏到十万八千里去-甚至你的图会突然消失-因为图被拉得很大很大"}},[a._v("#")]),a._v(' 这边具体过程忘记了，在on("mouseup")里面的回调里可以获得，但是有坑，网上有些回答的坐标不是正确的坐标，用了之后位置会偏到十万八千里去，甚至你的图会突然消失，因为图被拉得很大很大')]),a._v(" "),s("p",[a._v("总之，用这个")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('chartInstance._chartsMap[\n            "_ec_\\u0000series\\u00000\\u00000_series.graph"\n          ]._symbolDraw._data._itemLayouts\n')])])]),s("p",[a._v("chartInstance是你获取得图表实例")]),a._v(" "),s("h1",{attrs:{id:"至此-大功告成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#至此-大功告成"}},[a._v("#")]),a._v(" 至此，大功告成")]),a._v(" "),s("div",[s("graph",{staticStyle:{margin:"auto"},attrs:{echartsId:"echartsYt"}})],1),a._v(" "),s("h2",{attrs:{id:"坑还是有几个的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#坑还是有几个的"}},[a._v("#")]),a._v(" 坑还是有几个的")]),a._v(" "),s("ul",[s("li",[a._v("你把节点拖出视图之外，节点会一下回弹回来")])]),a._v(" "),s("blockquote",[s("p",[a._v("我的解决方案是加一个开关来检测鼠标是在视图内松开的还是在外面松开的，在外面松开的就重新画一遍，但是会把所有的都重新画一边，所以暂时没加上")])]),a._v(" "),s("ul",[s("li",[a._v("有没有发现，鼠标在某些地方是拖不动整张图的，因为这种地方的x轴和y轴上没有节点也没有线，所以拖不动")])]),a._v(" "),s("blockquote",[s("p",[a._v("我的解决方案是加一个名字很长很长的关系，连接着俩个透明的节点，这个名字也是透明，这样就会把echarts撑的很大，但是如果你的名字太长了，浏览器会卡，感觉不是很好的解决方案，暂时也没加上，虽然之前测试提出来之后就是这么做的")])])])}),[],!1,null,null,null);t.default=r.exports}}]);