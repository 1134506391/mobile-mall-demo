'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 前台登录
  router.post('/api/clientLogin', controller.admin.login.clientLogin);
  // 后台登录
  router.post('/api/adminLogin', controller.admin.login.adminLogin);

  // 手机品牌
  router.get('/api/phoneBrand', controller.admin.phoneBrand.findAll);
  router.post('/api/phoneBrand', controller.admin.phoneBrand.create);
  router.delete('/api/phoneBrand/:id', controller.admin.phoneBrand.test1);

  // 手机
  router.get('/api/phone', controller.admin.phone.findAll);
  router.get('/api/phone/:id', controller.admin.phone.findOne);
  router.post('/api/phone', controller.admin.phone.create);
  router.delete('/api/phone/:id', controller.admin.phone.destroy);
  router.put('/api/phone', controller.admin.phone.update);

  // 角色
  router.get('/api/role', controller.admin.role.findAll);
  router.post('/api/role', controller.admin.role.create);
  router.delete('/api/role/:id', controller.admin.role.destroy);
  router.put('/api/role', controller.admin.role.update);

  // 订单
  router.get('/api/order/:clientUserId', controller.admin.order.findByUserId);
  router.post('/api/order', controller.admin.order.create);
  router.post('/api/orderToPay', controller.admin.order.orderToPay);
  router.get('/api/getOrderInfo', controller.admin.order.getOrderInfo);
  router.get('/api/orderCurl', controller.admin.order.orderCurl);
  // router.get('/tosubmit', controller.admin.order.tosubmit);

  // 管理员
  router.get('/api/adminUser', controller.admin.adminUser.findAll);
  router.get('/api/adminUser/:id', controller.admin.adminUser.findOne);
  router.post('/api/adminUser', controller.admin.adminUser.create);
  router.delete('/api/adminUser/:id', controller.admin.adminUser.destroy);
  router.put('/api/adminUser', controller.admin.adminUser.update);
  // 用户
  router.get('/api/clientUser', controller.admin.clientUser.findAll);
  router.get('/api/clientUser/:id', controller.admin.clientUser.findOne);
  router.post('/api/clientUser', controller.admin.clientUser.create);
  router.delete('/api/clientUser/:id', controller.admin.clientUser.destroy);
  router.put('/api/clientUser', controller.admin.clientUser.update);
};
