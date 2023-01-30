# FIL+ SCAN
## 介绍
FIL+ SCAN 是一个浏览FIL相关数据的面板
![image.png](https://note.youdao.com/yws/res/11232/WEBRESOURCE3fccec0b499e7ec3d96500c09d1d93c7)
## 特性
1. 支持查看大数据总览 包括以下数据 全网当日使用、全网累计使用，支持按日期进行数据搜索。
2. 公证人相关数据 包含公证人排名、公证人地址、社区至公证人、公证人至客户、未分配的DC以及对应的详情，支持按照公证人地址进行数据筛选搜索。
3. 客户相关的数据 包含排名、客户地址、客户获取DC值、DC分配值、已使用DC、未使用DC以及对应的详情，支持按照客户地址进行数据搜索。
4、S.P.相关数据 包含排名、存储节点号、客户地址、调整算力、已封装DC以及详情，支持按照节点号进行数据搜索

## 如何下载
```
git clone https://github.com/benhaixu/FILSCAN.git
```
## 如何开发和部署
```shell
#  安装依赖
npm install 
# 启动开发模式
npm run dev
# 启动生产模式
npm run prod
```
## 网站说明
网站采用前后端分离模式，本项目为前端视图代码，语言为vue+js+html。
如有数据定制化需求，请联系项目管理员，我们需要开放对应数据的查询接口。
## 待完成
以下特性待完成
数据概览部分：
全网当日新增解锁、全网累计解锁、全网新增授予、全网累计授予、全网新增申请、全网累计申请