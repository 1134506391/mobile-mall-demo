/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : mobile_mall

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2019-05-28 14:34:41
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin_user
-- ----------------------------
DROP TABLE IF EXISTS `admin_user`;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `username` varchar(255) DEFAULT NULL COMMENT '管理员名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `status` int(1) DEFAULT '1' COMMENT '0: 无效,1:有效',
  `isAdmin` int(1) DEFAULT '1' COMMENT '0:超级管理员,1:普通管理员',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  `roleId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='管理员表';

-- ----------------------------
-- Table structure for client_user
-- ----------------------------
DROP TABLE IF EXISTS `client_user`;
CREATE TABLE `client_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `username` varchar(255) DEFAULT NULL COMMENT '用户名',
  `password` varchar(255) DEFAULT NULL COMMENT '密码',
  `avatar` varchar(255) DEFAULT NULL COMMENT '头像',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号码',
  `address` varchar(255) DEFAULT NULL COMMENT '收货地址',
  `status` int(1) DEFAULT '1' COMMENT '0: 无效,1:有效',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='前台用户表';

-- ----------------------------
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单id',
  `orderNumber` varchar(255) DEFAULT NULL COMMENT '订单编号',
  `totalPrice` float(9,2) NOT NULL COMMENT '总价',
  `clientUserId` int(11) NOT NULL COMMENT '用户id',
  `address` varchar(255) DEFAULT NULL COMMENT '用户收货地址',
  `payStatus` int(1) DEFAULT '0' COMMENT '0: 未支付,1:已支付',
  `payType` int(1) DEFAULT '0' COMMENT '1: 微信支付,2:支付宝支付',
  `status` int(1) DEFAULT '0' COMMENT '0: 已下单,1:已付款,2:已配货,3:已发货,4:交易成功,5:退货,6:取消',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COMMENT='订单表';

-- ----------------------------
-- Table structure for order_item
-- ----------------------------
DROP TABLE IF EXISTS `order_item`;
CREATE TABLE `order_item` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单子表id',
  `orderId` varchar(255) NOT NULL COMMENT '订单表id',
  `productId` int(11) DEFAULT NULL COMMENT '订单货物id',
  `productTitle` varchar(255) DEFAULT NULL COMMENT '订单货物标题',
  `productImg` varchar(255) DEFAULT NULL COMMENT '订单货物图片',
  `productPrice` float(9,2) NOT NULL COMMENT '订单货物价格',
  `productNumber` int(9) NOT NULL COMMENT '订单货物数量',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COMMENT='订单子表';

-- ----------------------------
-- Table structure for phone
-- ----------------------------
DROP TABLE IF EXISTS `phone`;
CREATE TABLE `phone` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '手机id',
  `title` varchar(255) DEFAULT NULL COMMENT '手机标题',
  `description` varchar(255) DEFAULT NULL COMMENT '手机描述',
  `imgUrl` varchar(255) DEFAULT NULL COMMENT '手机图片地址',
  `price` float(9,2) DEFAULT NULL COMMENT '手机价格,最大长度为9，整数位是6位，小数位是2位',
  `number` int(11) DEFAULT NULL COMMENT '手机库存数量',
  `status` int(1) DEFAULT '1' COMMENT '0: 无效,1:有效',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  `phoneBrandId` int(11) DEFAULT NULL COMMENT '品牌id',
  `checked` int(1) DEFAULT '0' COMMENT '购物车是否选中,0:false,1:true',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COMMENT='手机表';

-- ----------------------------
-- Table structure for phone_brand
-- ----------------------------
DROP TABLE IF EXISTS `phone_brand`;
CREATE TABLE `phone_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '手机品牌id',
  `title` varchar(255) DEFAULT NULL COMMENT '手机品牌标题',
  `description` varchar(255) DEFAULT NULL COMMENT '手机品牌描述',
  `logo` varchar(255) DEFAULT NULL COMMENT '手机品牌图标',
  `status` int(1) DEFAULT '1' COMMENT '0: 无效,1:有效',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='手机品牌表';

-- ----------------------------
-- Table structure for role
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '角色id',
  `title` varchar(255) DEFAULT NULL COMMENT '角色标题',
  `description` varchar(255) DEFAULT NULL COMMENT '角色描述',
  `status` int(1) DEFAULT '1' COMMENT '0: 无效,1:有效',
  `createdAt` datetime DEFAULT NULL COMMENT '创建时间',
  `updatedAt` datetime DEFAULT NULL COMMENT '更改时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `title` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='角色表';
