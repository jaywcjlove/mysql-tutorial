
Centos平台安装与卸载MySQL
===

这里简单的介绍几种Linux平台(Centos)/Mac安装MySQL，基本上大同小异，通过一些平台的软件管理工具来快速安装MySQL。

在 Centos6 中直接使用 yum 命令去安装 mysql，极为简单，接下来介绍在Centos6中 通过 yum工具安装 mysql 的步骤。

### 检查是否已安装

```bash
# 检查 MySQL 是否已安装
yum list installed | grep mysql
yum list installed mysql*

# 查看当前 mysql 版本，看是否已安装
mysql --version
rpm -qa | grep mysql
```

### 更新安装源

经过查看你可以开始安装了，直接使用 yum 命令去安装 mysql，按之前可以先看一下源的版本，如果源的版本过低，可以在[这里下载](http://dev.mysql.com/downloads/repo/yum/)开发版新的源，发布吧源[在这里](http://repo.mysql.com/yum/)更新，在安装的过程可以编辑`vim /etc/yum.repos.d/mysql-community.repo`选择发布系列版本，编辑如下，其中参数`enabled`的值为 0 的表示禁用，更改为 1 的时候你就可以默认安装 5.7，否则安装的将是 5.6 版。

```bash
# 安装如果上面编辑前没有看到你想要的版本
# 可以更新源
# ===== CentOS6 =====
# wget http://dev.mysql.com/get/mysql57-community-release-el6-8.noarch.rpm
# ===== CentOS7 =====
wget http://dev.mysql.com/get/mysql-community-release-el7-5.noarch.rpm
yum localinstall mysql-community-release-el7-5.noarch.rpm

# 卸载方法
rpm -e mysql-community-common-5.7.16-1.el6.x86_64

```

### 检查是否下载成功

```bash
[root@localhost yum.repos.d]# yum repolist enabled | grep "mysql.*-community.*"
mysql-connectors-community/x86_64       MySQL Connectors Community           36
mysql-tools-community/x86_64            MySQL Tools Community                47
mysql56-community/x86_64                MySQL 5.6 Community Server          327
```

### 查看版本

选择要启用 MySQL 版本查看 MySQL 版本，执行

```bash
yum repolist all | grep mysql
```

可以看到 5.5， 5.7 版本是默认禁用的，因为现在最新的稳定版是 5.6

```bash
[root@localhost yum.repos.d]# yum repolist all | grep mysql
mysql-connectors-community/x86_64 MySQL Connectors Community      enabled:    36
mysql-connectors-community-source MySQL Connectors Community - So disabled
mysql-tools-community/x86_64      MySQL Tools Community           enabled:    47
mysql-tools-community-source      MySQL Tools Community - Source  disabled
mysql55-community/x86_64          MySQL 5.5 Community Server      disabled
mysql55-community-source          MySQL 5.5 Community Server - So disabled
mysql56-community/x86_64          MySQL 5.6 Community Server      enabled:   327
mysql56-community-source          MySQL 5.6 Community Server - So disabled
mysql57-community-dmr/x86_64      MySQL 5.7 Community Server Deve disabled
mysql57-community-dmr-source      MySQL 5.7 Community Server Deve disabled
```

### 启动指定版本

可以通过类似下面的语句来启动某些版本

```bash
yum-config-manager --disable mysql56-community
yum-config-manager --enable mysql57-community-dmr
```

或者通过修改 `/etc/yum.repos.d/mysql-community.repo` 文件。

```bash
# Note: MySQL 5.7 is currently in development. For use at your own risk.
# Please read with sub pages: https://dev.mysql.com/doc/relnotes/mysql/5.7/en/
[mysql57-community-dmr]
name=MySQL 5.7 Community Server Development Milestone Release
baseurl=http://repo.mysql.com/yum/mysql-5.7-community/el/7/$basearch/
enabled=1
gpgcheck=1
gpgkey=file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
```

其中 `enabled=0` 是指禁用，`enabled=1` 指启用。  
注意： 任何时候，只能启用一个版本。

查看当前启用的版本

```bash
[root@localhost yum.repos.d]# yum repolist enabled | grep mysql
mysql-connectors-community/x86_64 MySQL Connectors Community                 36
mysql-tools-community/x86_64      MySQL Tools Community                      47
mysql57-community-dmr/x86_64      MySQL 5.7 Community Server Development    187
```

### 安装MySQL

```bash
yum install mysql-server

Retrieving key from file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Importing GPG key 0x5072E1F5:
 Userid     : "MySQL Release Engineering <mysql-build@oss.oracle.com>"
 Fingerprint: a4a9 4068 76fc bd3c 4567 70c8 8c71 8d3b 5072 e1f5
 Package    : mysql-community-release-el7-5.noarch (installed)
 From       : file:/etc/pki/rpm-gpg/RPM-GPG-KEY-mysql
Is this ok [y/N]: y

## 遇到上述提示，输入 y 继续，执行完成会提示“完毕！”。此时MySQL 安装完成，它包含了 mysql-community-server、mysql-community-client、mysql-community-common、mysql-community-libs 四个包。

......

Installed:
  mysql-community-libs.x86_64 0:5.7.18-1.el7  mysql-community-libs-compat.x86_64 0:5.7.18-1.el7  mysql-community-server.x86_64 0:5.7.18-1.el7

Dependency Installed:
  mysql-community-client.x86_64 0:5.7.18-1.el7   mysql-community-common.x86_64 0:5.7.18-1.el7   net-tools.x86_64 0:2.0-0.17.20131004git.el7

Replaced:
  mariadb-libs.x86_64 1:5.5.44-2.el7.centos
```

执行

```bash
rpm -qi mysql-community-server.x86_64 0:5.6.24-3.el7
```

### 查看安装目录

```bash
whereis mysql

mysql: /usr/bin/mysql /usr/lib64/mysql /usr/share/mysql /usr/share/man/man1/mysql.1.gz
```

可以看到 MySQL 的安装目录是 /usr/bin/

### MariaDB切换MySQL

Centos7 上面默认是 MariaDB 不是MySQL了，所以 Centos6 安装会报错。在 Centos7 中，运行下面命令安装就不会有错误了，但是你的数据库被换成了MariaDB，MariaDB登录链接SQL语句等几乎一样。

```shell
# 安装 mariadb-server
yum install mariadb-server -y

# 启动 mariadb
systemctl start mariadb.service
systemctl enable mariadb.service
```

那在 Centos7 中默认安装 MySQL 会报错误，大概是我下面这样样子：

```bash
--> 正在处理依赖关系 libmysqlclient.so.18(libmysqlclient_18)(64bit)，它被软件包 2:postfix-2.10.1-6.el7.x86_64 需要
---> 软件包 mysql-community-libs.x86_64.0.5.7.16-1.el6 将被 舍弃
--> 解决依赖关系完成
错误：软件包：2:postfix-2.10.1-6.el7.x86_64 (@anaconda)
          需要：libmysqlclient.so.18(libmysqlclient_18)(64bit)
          正在删除: 1:mariadb-libs-5.5.50-1.el7_2.x86_64 (@updates)
              libmysqlclient.so.18(libmysqlclient_18)(64bit)
          取代，由: mysql-community-libs-5.7.16-1.el6.x86_64 (mysql57-community)
             ....
```

如果你非要用 MySQL 那你先卸载 **yum remove mariadb** 和 **yum remove mysql-libs** 重新进行安装 **yum install mysql-server** 或许可解决 Centos7 安装mysql报上面错误的问题，具体问题还得具体看。

```shell
# 卸载 mariadb 和 mysql-libs
yum remove mariadb
yum remove mysql-libs
# 安装mysql
yum install mysql-server
```

**安装发生依赖错误**

```bash
--> Finished Dependency Resolution
Error: Package: mysql-community-server-5.7.19-1.el6.x86_64 (mysql57-community)
           Requires: libsasl2.so.2()(64bit)
 You could try using --skip-broken to work around the problem
 You could try running: rpm -Va --nofiles --nodigest
```

通过更新来解决

```bash
yum update
# 通过提示来解决错误，80%软件不能用，或者部分功能不能用
# 不建议下面方式解决
yum install mysql-server --skip-broken
rpm -Va --nofiles --nodiges
```


## 卸载 MySQL 软件

### 卸载mysql

通过下面这条命令查看本地mysql安装包

```bash
# Linux查看
rpm -qa | grep -i mysql

# 输出结果
perl-DBD-MySQL-4.013-3.el6.x86_64
mysql-community-libs-5.6.33-2.el6.x86_64
mysql-community-release-el6-5.noarch
mysql-community-client-5.6.33-2.el6.x86_64
compat-mysql51-5.1.54-1.el6.remi.x86_64
mysql-community-server-5.6.33-2.el6.x86_64
mysql-community-common-5.6.33-2.el6.x86_64
```

你下面命令将它删除

```bash
rpm -e mysql-community-server-5.6.33-2.el6.x86_64
rpm -e compat-mysql51-5.1.54-1.el6.remi.x86_64
```


### 删除mysql服务

```bash
chkconfig --list | grep -i mysql
chkconfig --del mysql
```

### 删除分散mysql文件夹

清空相关mysql的所有目录以及文件，`whereis mysql` 或者 `find / -name mysql` 找到所有文件夹。

```bash
rm -rf /usr/lib/mysql
rm -rf /usr/share/mysql
rm -rf /usr/my.cnf
```
