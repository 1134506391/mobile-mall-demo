'use strict';

const Controller = require('egg').Controller;

class OrderController extends Controller {
  async findByUserId() {
    const { ctx } = this;
    const clientUserId = ctx.helper.parseInt(ctx.params.clientUserId);
    const result = await ctx.model.ClientUser.findAll({
      where: {
        clientUserId,
      },
    });
    ctx.body = result;
  }
  async create() {
    const { ctx } = this;
    const body = ctx.request.body;
    const result = await ctx.service.order.create(body);
    ctx.body = result;
  }

  async orderToPay() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.request.body.id);
    const result = await ctx.service.order.orderToPay(id);
    ctx.body = result;
  }
  async getOrderInfo() {
    const { ctx } = this;
    const uid = '0b0beb8f0cb945167e84ef2b';
    const token = '4aec2b9e880fe04c53113e9062713ccd';
    const price = 0.01;
    const istype = 2;
    const notify_url = 'http://blog.pengyongjie.top/detail2';
    const return_url = 'http://blog.pengyongjie.top/news';
    const orderid = 201710192542;
    const orderuid = 'xxx@aaa.com';
    const goodsname = '0.01元小商品';

    const stringKey = goodsname + istype + notify_url + orderid + orderuid + price + return_url + token + uid;
    const key = await ctx.service.order.getMD5(stringKey);
    const order = {
      uid,
      price,
      istype,
      notify_url,
      return_url,
      orderid,
      orderuid,
      key,
      goodsname,
    };
    console.log('ccccc');
    console.log(order);
    await this.ctx.render('tosubmit', {
      order,
    });
  }

  async orderCurl() {
    const { ctx } = this;
    const res = await ctx.curl({
      url: 'https://pay.sxhhjc.cn',
      json: true,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        format: { uid: '0b0beb8f0cb945167e84ef2b', price: 0.01, istype: 2, notify_url: 'http://www.aaa.com/paysapi_notify', return_url: 'http://www.aaa.com/paysapi_return', orderid: 201710192541, orderuid: 'xxx@aaa.com', key: '1cdbf278f706a654bc15f5c5fa010df0', goodsname: '0.01元小商品' },
      },

    });
    console.log('qqqqqqqq');
    console.log(res);
    // ctx.body = res.data;
    // ctx.body = JSON.stringify(res);
    ctx.body = JSON.parse(JSON.stringify(res.data));
  }
  // async tosubmit() {
  //   await this.ctx.render('tosubmit');
  // }

}

module.exports = OrderController;
