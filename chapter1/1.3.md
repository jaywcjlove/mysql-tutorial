
什么是MySQL
===

MySQL（官方发音为英语发音：`/maɪ ˌɛskjuːˈɛl/` `My S-Q-L`，但也经常读作英语发音：`/maɪ ˈsiːkwəl/` `My Sequel`）原本是一个开放源代码的关系数据库管理系统（DBMS），原开发者为瑞典的`MySQL AB`公司，该公司于2008年被昇阳微系统（Sun Microsystems）收购。2009年，甲骨文公司（Oracle）收购昇阳微系统公司，MySQL成为Oracle旗下产品。在本教程中，会让大家快速掌握MySQL的基本知识，并轻松使用MySQL数据库。

### MySQL 介绍

MySQL在过去由于性能高、成本低、可靠性好，已经成为最流行的开源数据库，因此被广泛地应用在Internet上的中小型网站中，是最流行的关系型数据库管理系统，在WEB应用方面MySQL是最好的RDBMS(Relational Database Management System：关系数据库管理系统)应用软件之一。随着MySQL的不断成熟，它也逐渐用于更多大规模网站和应用，比如维基百科、Google和Facebook等网站。

但被甲骨文公司收购后，Oracle大幅调涨MySQL商业版的售价，且甲骨文公司不再支持另一个自由软件项目OpenSolaris的发展，因此导致自由软件社区们对于Oracle是否还会持续支持MySQL社区版（MySQL之中唯一的免费版本）有所隐忧，因此原先一些使用MySQL的开源软件逐渐转向其它的数据库。例如维基百科已于2013年正式宣布将从MySQL迁移到`MariaDB`数据库。MySQL的创始人麦克尔·维德纽斯以MySQL为基础，成立分支计划[MariaDB](https://github.com/MariaDB/server)。

### MySQL 发展历史

很多人以为MySQL是最近15年内才出现的数据库，其实MySQL数据库的历史可以追溯到1979年，那时 Bill Gates 退学没多久，微软公司也才刚刚起步，而Larry的Oracle公司也才成立不久。那时有一个天才程序员 Monty Widenius 用 BASIC 设计了一个报表工具，过了不久，又将此工具使用 C 语言重写，移植到 UNIX 平台，当时只是一个底层的面向报表存储引擎名叫Unireg。

- 1985年，瑞典的几位志同道合小伙子(David Axmark、Allan Larsson 和Monty Widenius) 成立了一家公司，这就是MySQL AB 的前身。
- 1990年，TcX公司的客户中开始有人要求为他的API提供SQL支持。当时有人提议直接使用商用数据库，但是Monty觉得商用数据库的速度难以令人满意。于是，他直接借助于mSQL的代码，将它集成到自己的存储引擎中。令人失望的是，效果并不太令人满意，于是，Monty雄心大起，决心自己重写一个SQL支持。
- 1996年，MySQL 1.0发布，它只面向一小拨人，相当于内部发布。
- 1996年10月，MySQL 3.11.1发布(MySQL没有2.x版本)，最开始只提供Solaris下的二进制版本。一个月后，Linux版本出现了。
- 1999～2000年，MySQL AB公司在瑞典成立。Monty雇了几个人与Sleepycat合作，开发出了Berkeley DB引擎，因为BDB支持事务处理，所以MySQL从此开始支持事务处理了。
- 2003年12月，MySQL 5.0版本发布，提供了视图、存储过程等功能。
- 2008年1月16日，Sun（太阳微系统）正式收购MySQL。
- 2009年4月20日，甲骨文公司宣布以每股9.50美元，74亿美元的总额收购Sun电脑公司。
- 2010年12月，MySQL 5.5发布，其主要新特性包括半同步的复制及对SIGNAL/RESIGNAL的异常处理功能的支持，最重要的是InnoDB存储引擎终于变为当前MySQL的默认存储引擎。
- 2013年6月18日，甲骨文公司修改MySQL授权协议，移除了GPL。但随后有消息称这是一个bug。


### MySQL 版本

`MySQL`针对不同的用户，分了`社区版`和`企业服务器版`，还提供一些其它版本，是属于`MySQL`相关工具。

1. MySQL Community Server 社区版本，开源免费，但不提供官方技术支持。
2. MySQL Enterprise Edition 企业版本，需付费，可以试用30天。
3. MySQL Cluster 集群版，开源免费。可将几个MySQL Server封装成一个Server。
4. MySQL Cluster CGE 高级集群版，需付费。
5. MySQL Workbench（GUI TOOL）一款专为MySQL设计的ER/数据库建模工具。

> MySQL Workbench是著名的数据库设计工具DBDesigner4的继任者。MySQL Workbench又分为两个版本，分别是社区版（MySQL Workbench OSS）、商用版（MySQL Workbench SE）。

MySQL 版本命命机制由三个数字组成，例如`mysql-5.6.33-osx10.11-x86_64.tar.gz`

- 第一个数字（5）主版本号：当你做了不兼容的 API 修改，
- 第二个数字（7）次版本号：当你做了向下兼容的功能性新增，合计，主要和次要的数字构成发布系列号。该系列号描述了稳定的特征集。
- 第三个数字（1）修订号：当你做了向下兼容的问题修正。这是一个新的bugfix释放增加。在大多数情况下，在一系列最新版本是最好的选择。

> Github 上面有[语义化版本标准](http://semver.org/lang/zh-CN/), 开源仓库[mojombo/semver](https://github.com/mojombo/semver)，上面的版本命名大致是跟语义化版本标准差不多，你可以看语义化版本标准来学习版本名机制。通过语义化版本标准来理解MySQL版本命命机制。

### MySQL 的优势

- 使用C和C++编写，并使用了多种编译器进行测试，保证源代码的可移植性。
- 支持AIX、BSDi、FreeBSD、HP-UX、Linux、Mac OS、Novell NetWare、NetBSD、OpenBSD、OS/2 Wrap、Solaris、Windows等多种操作系统。
- 为多种编程语言提供了API。这些编程语言包括C、C++、C#、VB.NET、Delphi、Eiffel、Java、Perl、PHP、Python、Ruby和Tcl等。
- 支持多线程，充分利用CPU资源，支持多用户。
- 优化的SQL查询算法，有效地提高查询速度。
- 既能够作为一个单独的应用程序在客户端服务器网络环境中运行，也能够作为一个程序库而嵌入到其他的软件中。
- 提供多语言支持，常见的编码如中文的GB 2312、BIG5、日文的Shift JIS等都可以用作数据表名和数据列名。
- 提供TCP/IP、ODBC和JDBC等多种数据库连接途径。
- 提供用于管理、检查、优化数据库操作的管理工具。
- 可以处理拥有上千万条记录的大型数据库。
