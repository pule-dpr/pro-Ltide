/**创建lc数据库**/
SET NAMES UTF8;
DROP DATABASE IF EXISTS lc;
CREATE DATABASE lc CHARSET=UTF8;
USE lc;
/**创建用户信息表**/
CREATE TABLE lc_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    email VARCHAR(64),
    phone VARCHAR(16),
    avatar VARCHAR(128),        #头像图片路径
    user_name VARCHAR(32),      #用户名，如王小明
    gender INT                  #性别  0-女  1-男 -1-保密
);
/**创建用户喜欢表**/
CREATE TABLE lc_like(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    fashion_id INT,         #作品编号
    like_time BIGINT ,      #喜欢时间
);
/**创建用户关注表**/
CREATE TABLE lc_attention(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    attention_id INT,       #关注编号
);
/**创建用户好友表**/
CREATE TABLE lc_friends(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    friends_id INT,
    friends_uname VARCHAR(32),  #好友用户名
);
/**创建用户作品表**/
CREATE TABLE lc_production(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    family_id INT,
    production_id INT,
);
/**创建作品类别表**/
CREATE TABLE lc_fashion_family(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32)
);
/**创建作品详细类别表**/
CREATE TABLE lc_fashion_detailed_family(
    did INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(32),
    family_id INT
);
/**创建作品表**/
CREATE TABLE lc_fashion(
    lid INT PRIMARY KEY AUTO_INCREMENT,
    family_id INT,
    title VARCHAR(128),         #主标题
    subtitle VARCHAR(128),      #副标题
    name VARCHAR(128),          #作品名称
    details VARCHAR(1024),      #作品详细说明
    issue_time BIGINT,          #发布时间
    is_open BOOLEAN,            #是否公开
    author_id INT               #作者编号
);
/**创建图片表**/
CREATE TABLE lc_fashion_pic(
  fid INT PRIMARY KEY AUTO_INCREMENT,
  fashion_id INT,             #作品编号
  sm VARCHAR(128),            #小图片路径
  md VARCHAR(128),            #中图片路径
  lg VARCHAR(128)             #大图片路径
);
/****首页轮播广告作品****/
CREATE TABLE lc_index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页作品****/
CREATE TABLE lc_index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);
/*******************/
/******数据导入******/
/*******************/
/**用户信息**/
INSERT INTO lc_user VALUES
(NULL, 'lele', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'ranran', '123456', 'ranran@123.com', '13593301454', 'img/avatar/default.png', '董沛然', '0'),
(NULL, 'lala', '123456', 'lala@qq.com', '18484309810', 'img/avatar/default.png', '王小拉', '0'),
(NULL, 'yaya', '123456', 'yaya@qq.com', '18198680674', 'img/avatar/default.png', '秦小雅', '0');
/**作品类别家族**/
INSERT INTO lc_fashion_family VALUES
(NULL,'配饰'),
(NULL,'潮鞋'),
(NULL,'潮袜'),
(NULL,'风格'),
(NULL,'帽子'),
(NULL,'小知识');
/**作品详细类别家族**/
INSERT INTO lc_fashion_detailed_family VALUES
(NULL,'earrings',1),
(NULL,'bag',1),
(NULL,'hanging',1),
(NULL,'watches',1),
(NULL,'hand',1),
(NULL,'necklace',1),
(NULL,'板鞋',2),
(NULL,'马丁靴',2),
(NULL,'皮鞋',2),
(NULL,'潮牌鞋',2),
(NULL,'高帮鞋',2),
(NULL,'休闲鞋',2),
(NULL,'老爹鞋',2),
(NULL,'袜子',3),
(NULL,'休闲',4),
(NULL,'日系',4),
(NULL,'韩风',4),
(NULL,'复古',4),
(NULL,'简约',4),
(NULL,'商务',4),
(NULL,'嘻哈',4),
(NULL,'运动',4),
(NULL,'针织帽',5),
(NULL,'鸭舌帽',5),
(NULL,'板帽',5),
(NULL,'渔夫帽',5),
(NULL,'穿搭知识',6),
(NULL,'颜色搭配',6),
/****/
/****/
/****/
/****/
/****/