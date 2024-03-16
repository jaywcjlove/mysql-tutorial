Awesome MySQL
===

这是一个MySQL软件库和资源列表清单。部分资源搜集来源于[shlomi-noach/awesome-mysql](https://github.com/shlomi-noach/awesome-mysql)，它的[中文翻译](https://github.com/jobbole/awesome-mysql-cn)在这里，没有完全fork过来，没有完全拷贝，是因为部分排版比较丑陋，部分工具慢慢搜集理解。

## 说明

![Open-Source Software][OSS Icon] 表示**开源**标示，点击进入**开源**仓库；  
![Freeware][Freeware Icon] 表示**免费**标示，或者个人**免费**；  
![hot][hot Icon] 表示**热门**的资源标示；  
![tuijian][tuijian Icon] 表示**推荐**资源标示；  
![必备][bibei Icon] 表示**必备**资源标示；  
![1 star][red Icon] 表示强烈推荐的，星星的数量来表达强烈的程度；

<!--idoc:ignore:start-->

## 目录

- [手册文档](#手册文档)
- [分析工具](#分析工具)
- [GUI](#gui)
- [服务器](#服务器)
- [备份](#备份)
- [官方资料](#官方资料)
- [优秀文章](#优秀文章)

<!--idoc:ignore:end-->

## 手册文档

_这里是一些非官方的手册文档_

- http://www.w3school.com.cn/sql/index.asp
- http://www.1keydata.com/cn/sql/sql-count.php
- http://www.runoob.com/mysql/mysql-tutorial.html

## 分析工具

_性能，结构和数据分析工具_

* [Anemometer](https://github.com/box/Anemometer) - 一个 SQL 慢查询监控器。
* [innodb-ruby](https://github.com/jeremycole/innodb_ruby) - 一个对 InooDB 格式文件的解析器，用于 Ruby 语言。
* [innotop](https://github.com/innotop/innotop) - 一个具备多种特性和可扩展性的 MySQL 版 'top' 工具。
* [pstop](https://github.com/sjmudd/ps-top) - 一个针对 MySQL 的类 top 程序，用于收集，汇总以及展示来自 performance_schema 的信息。
* [mysql-statsd](https://github.com/db-art/mysql-statsd) - 一个收集 MySQL 信息的 Python 守护进程，并通过 StatsD 发送到 Graphite。
* [sql.ohrz.net](https://sql.ohrz.net) - SQL语句解读服务，支持高亮显示解析结果中表名、字段名、子查询语句等在原文中对应的位置。

## GUI

_这里是搜集的一些 MySQL 的客户端，也有命令行客户端。_

* [TablePlus](https://tableplus.io/) - 支持PostgreSQL，MySQL，RedShift，MariaDB ...各种数据库的高颜值客户端。[![Open-Source Software][OSS Icon]](https://github.com/sequelpro/sequelpro) ![Freeware][Freeware Icon] ![hot][hot Icon] ![必备][bibei Icon]
* [Sequel Pro](http://www.sequelpro.com/) - 一个MySQL数据库管理软件。[![Open-Source Software][OSS Icon]](https://github.com/sequelpro/sequelpro) ![Freeware][Freeware Icon] ![hot][hot Icon]
* [MySQL Workbench](http://dev.mysql.com/downloads/workbench/) - MySQL数据库官方管理软件。提供给数据库管理员和开发人员进行数据库设计和建模的集成工具环境；SQL 开发；数据库管理。
* [Navicat](https://www.navicat.com/products/navicat-for-mysql) - 同样跨平台，同时支持多个数据库系统（MySQL、SQL Server、Oracle）。
* [ElectroCRUD](http://garrylachman.github.io/ElectroCRUD/) - MySQL数据库CRUD应用程序。[![Open-Source Software][OSS Icon]](https://github.com/garrylachman/ElectroCRUD) ![Freeware][Freeware Icon]
* [Chrome MySQL Admin](https://www.eisbahn.jp/chrome_mysql_admin) - 一个Chrome插件，是MySQL开发的跨平台、可视化数据库工具。[![Open-Source Software][OSS Icon]](https://github.com/yoichiro/chrome_mysql_admin) ![Freeware][Freeware Icon]
* [Adminer](https://www.adminer.org/) - 一个 PHP 编写的数据库管理工具。[![Open-Source Software][OSS Icon]](https://github.com/vrana/adminer) ![Freeware][Freeware Icon]
* [HeidiSQL](http://www.heidisql.com/) - Windows 下的 MySQL 图形化管理工具。[![Open-Source Software][OSS Icon]](https://github.com/HeidiSQL/HeidiSQL) ![Freeware][Freeware Icon]
* [phpMyAdmin](https://www.phpmyadmin.net/) - 一个 PHP 写成的开源软件，意图对 web 上的 MySQL 进行管理。[![Open-Source Software][OSS Icon]](https://github.com/phpmyadmin/phpmyadmin)
* [mycli](https://github.com/dbcli/mycli) - 为MySQL命令行客户端，提供语法高亮和提示功能的工具！
[![Open-Source Software][OSS Icon]](https://github.com/dbcli/mycli) ![Freeware][Freeware Icon] ![tuijian][tuijian Icon] ![star 5][star5 Icon]
* [dbdiagram](https://dbdiagram.io/) - 创建数据库的实体-关系图的工具。


## 服务器

_MySQL服务器的衍生品_

* [MariaDB](https://github.com/MariaDB/server) - MySQL server 的一个由社区开发的分支。
* [MySQL Server & MySQL Cluster](https://github.com/mysql/mysql-server) - Oracle 官方的 MySQL server 和 MySQL 集群分布。
* [Percona Server](https://launchpad.net/percona-server) - 一个加强版的 MySQL 替代品
* [WebScaleSQL](https://github.com/webscalesql/webscalesql-5.6) - WebScaleSQL，5.6 版本，基于 MySQL 5.6 社区版本。

## 备份

_备份/存储/恢复 工具_

* [MyDumper](https://launchpad.net/mydumper) - 逻辑的，并行的 MySQL 备份/转储工具。
* [MySQLDumper](http://www.mysqldumper.net/) - 基于 web 的开源备份工具-对于共享虚拟主机非常有用。
* [mysqldump-secure](https://github.com/cytopia/mysqldump-secure) - 将加密，压缩，日志，黑名单和 Nagios 监控一体化的 mysqldump 安全脚本。
* [Percona Xtrabackup](https://www.percona.com/doc/percona-xtrabackup) - 针对 MySQL 的一个开源热备份实用程序——在服务器的备份期间不会锁定你的数据库。


## 官方资料

_官方的一些网站和文章_

* MySQL官网：http://www.mysql.com/
* MySQL开发者主页：http://dev.mysql.com/
* MySQL社区：http://www.mysqlpub.com/
* [What is MySQL?](http://dev.mysql.com/doc/refman/5.7/en/what-is-mysql.html)
* [密码验证插件](http://dev.mysql.com/doc/refman/5.6/en/validate-password-plugin.html)

## 优秀文章

_一些优秀的文章_

* [MySQL索引背后的数据结构及算法原理](http://blog.codinglabs.org/articles/theory-of-mysql-index.html)
* [MySQL数据库引擎](http://www.cnblogs.com/0201zcr/p/5296843.html)
* [Nodejs连接MySQL数据库](http://xieyufei.com/2016/11/15/Nodejs-Connect-Mysql.html)
* [MySQL优化](http://blog.csdn.net/qq_22329521/article/details/54801950)
* [10分钟让你明白MySQL是如何利用索引的](http://fordba.com/spend-10-min-to-understand-how-mysql-use-index.html)
* [一个MySQL 5.7 分区表性能下降的案例分析](https://mp.weixin.qq.com/s/K3RpSBAIWFwGCIWyfF0QPA)
* [一个不可思议的MySQL慢查分析与解决](http://fordba.com/optimize-an-amazing-mysql-slowlog.html)


**[⬆ 返回顶部](#awesome-mysql)**


[OSS Icon]: https://jaywcjlove.github.io/sb/ico/min-oss.svg
[Freeware Icon]: https://jaywcjlove.github.io/sb/ico/min-free.svg
[hot Icon]: https://jaywcjlove.github.io/sb/ico/min-hot.svg
[tuijian Icon]: https://jaywcjlove.github.io/sb/ico/min-tuijian.svg
[bibei Icon]: https://jaywcjlove.github.io/sb/ico/min-bibei.svg
[red Icon]: https://jaywcjlove.github.io/sb/star/red.svg
[star0 Icon]: https://jaywcjlove.github.io/sb/star/red0.svg
[star1 Icon]: https://jaywcjlove.github.io/sb/star/red1.svg
[star2 Icon]: https://jaywcjlove.github.io/sb/star/red2.svg
[star3 Icon]: https://jaywcjlove.github.io/sb/star/red3.svg
[star4 Icon]: https://jaywcjlove.github.io/sb/star/red4.svg
[star5 Icon]: https://jaywcjlove.github.io/sb/star/red5.svg
