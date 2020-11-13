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
    like_time BIGINT      #喜欢时间
);
/**创建用户关注表**/
CREATE TABLE lc_attention(
    aid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    attention_id INT       #关注编号
);
/**创建用户好友表**/
CREATE TABLE lc_friends(
    fid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    friends_id INT,
    friends_uname VARCHAR(32) #好友用户名
);
/**创建用户作品表**/
CREATE TABLE lc_production(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    family_id INT,
    production_id INT
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
    family_detaile_id INT,
    title VARCHAR(128),         #主标题
    name VARCHAR(128),          #作品名称
    details VARCHAR(1024),      #作品详细说明
    issue_time BIGINT,          #发布时间
    is_open BOOLEAN,            #是否公开
    author_id INT,              #作者编号
    look_count INT              #浏览次数
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
  look_count INT,
  author_name VARCHAR(128),
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
(NULL, '无人区玫瑰', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'pick 赵小棠', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'capper', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '重庆马思唯', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '贝贝', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '橘黄色的柠檬', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '加拿大的花', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'vava', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '芜湖大司马', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'ranran', '123456', 'ranran@123.com', '13593301454', 'img/avatar/default.png', '董沛然', '0'),
(NULL, '我爱冠希', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, 'lele', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
(NULL, '-pule-', '123456', 'lele@qq.com', '19185391324', 'img/avatar/default.png', '蒲乐', '1'),
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
(NULL,'颜色搭配',6);
/**作品表添加作品**/
INSERT INTO lc_fashion VALUES
(NULL,2,11,'潮鞋','nike blazer mid 灰黑白 迷彩','Kris这组太帅了，发出来给你们看看，配饰z真的很重要，这组菱形耳环虽然很简约，但是搭配这种风格是真的帅！！！！','1605077575362',true,1,18676),
(NULL,2,11,'潮鞋','Adidas 三叶草 新款 高帮','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,10584),
(NULL,2,10,'潮鞋','nike air max 97 x undftd联名','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,25647),
(NULL,2,7,'潮鞋','万斯 新款 吴亦凡同款 板鞋','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,26984),
(NULL,1,6,'配饰','耳机项链 复古 潮流 配饰','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,16876),
(NULL,1,6,'配饰','海尔兄弟 工艺品吊坠 潮流','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,1576),
(NULL,1,6,'配饰','hip-hop 潮流嘻哈 饰品','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,18676),
(NULL,1,6,'配饰','卡洛奇饰品 街头潮人锁骨链','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,18176),
(NULL,5,24,'帽子','GD同款 鸭舌帽 潮流','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,14676),
(NULL,5,26,'帽子','渔夫帽 吴亦凡同款 潮流','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,13076),
(NULL,5,23,'帽子','针织帽 GD同款 新款','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,11676),
(NULL,5,25,'帽子','陈冠希代言 男帽 新款','Kris这组太帅了，发出来给你们看看，','1605077575362',true,1,11576);

/**首页精选作品**/
INSERT INTO lc_index_product VALUES
(NULL,'nike blazer mid 灰黑白 迷彩',18677,'无人区玫瑰','./img/list/1.jpg','detail.html?fid=1',1,1,1),
(NULL,'Adidas 三叶草 新款 高帮',14567,'pick 赵小棠','./img/list/2.jpg','detail.html?fid=2',2,2,2),
(NULL,'nike air max 97 x undftd联名',14547,'橘黄色的柠檬','./img/list/3.jpg','detail.html?fid=3',3,3,3),
(NULL,'万斯 新款 吴亦凡同款 板鞋',15471,'含了巧克力','./img/list/4.jpg','detail.html?fid=4',4,4,4),
(NULL,'耳机项链 复古 潮流 配饰',12677,'加拿大的花','./img/list/acc1.jpg','detail.html?fid=5',5,5,5),
(NULL,'海尔兄弟 工艺品吊坠 潮流',15782,'capper','./img/list/acc2.jpg','detail.html?fid=6',6,6,6),
(NULL,'hip-hop 潮流嘻哈 饰品',11627,'芜湖大司马','./img/list/acc3.jpg','detail.html?fid=7',7,7,7),
(NULL,'卡洛奇饰品 街头潮人锁骨链',18672,'vava','./img/list/acc4.jpg','detail.html?fid=8',8,8,8),
(NULL,'GD同款 鸭舌帽 潮流',11377,'快竖起耳朵','./img/list/cap1.jpg','detail.html?fid=9',9,9,9),
(NULL,'渔夫帽 吴亦凡同款 潮流',4334,'别靠近我这里','./img/list/cap2.jpg','detail.html?fid=10',10,10,10),
(NULL,'针织帽 GD同款 新款',8272,'冠希哥好帅','./img/list/cap3.jpg','detail.html?fid=11',11,11,11),
(NULL,'陈冠希代言 男帽 新款',9673,'贝贝','./img/list/cap4.jpg','detail.html?fid=12',12,12,12);
/****/
/****/
/****/