'use strict';
const crypto = require('crypto');
const Service = require('egg').Service;

class OrderService extends Service {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.Order.findAll();
    return result;
  }
  async findByUserId(id) {
    const { ctx } = this;
    const result = await ctx.model.Order.findAll({
      where: {
        id,
      },
    });
    return result[0];
  }
  async create(body) {
    const { ctx } = this;
    const orderNumber = await ctx.service.tool.orderNumber();
    const totalPrice = body.totalPrice;
    const clientUserId = body.clientUserId;
    const address = body.address;
    // 生成订单
    const orderResult = await ctx.model.Order.create({
      orderNumber,
      totalPrice,
      clientUserId,
      address,
    });
    // 生成子订单
    if (orderResult) {
      const produces = body.produce;
      for (let i = 0; i < produces.length; i++) {
        const json = {
          orderId: orderResult.id,
          productId: produces[i].id,
          productTitle: produces[i].title,
          productImg: produces[i].imgUrl,
          productPrice: produces[i].price,
          productNumber: produces[i].number,
        };
        await ctx.model.OrderItem.create(json);
      }
    }
  }

  async orderToPay(id) {
    const { ctx } = this;
    const result = await ctx.model.Order.findAll({
      where: {
        id,
      },
    });
    if (result) {
      await result[0].update({
        payStatus: 1,
      });
    }
    return 200;
  }
  async getMD5(pwd) {
    const md5 = crypto.createHash('md5');
    const result = md5.update(pwd).digest('hex');
    console.log(result);
    return result;
  }
}

module.exports = OrderService;
