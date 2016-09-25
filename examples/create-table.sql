-- NOT NULL 不能为空
-- unsigned 是指数值类型只能为正数。
-- DEFAULT 默认值

CREATE TABLE `user_accounts` (
  `id`             int(100) unsigned NOT NULL AUTO_INCREMENT,
  `name`           varchar(32)       NOT NULL DEFAULT '' COMMENT '姓名',
  `sex`            tinyint(32)       NOT NULL DEFAULT 0  COMMENT '性别：0,保密；1,男；2,女',
  `mobile`         varchar(20)       NOT NULL DEFAULT '' COMMENT '手机',
  `create_at`      timestamp(6)      NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `update_at`      timestamp(6)      NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  -- 创建唯一索引，不允许重复
  UNIQUE INDEX idx_user_mobile(`mobile`),
  PRIMARY KEY (`id`)
)
ENGINE=InnoDB DEFAULT CHARSET=utf8
COMMENT='用户表信息';