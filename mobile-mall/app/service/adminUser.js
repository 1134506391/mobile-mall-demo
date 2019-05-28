'use strict';

const Service = require('egg').Service;

class AdminUserService extends Service {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.model.AdminUser.findAll();
    return result;
  }
  async findOne(id) {
    const { ctx } = this;
    const result = await ctx.model.AdminUser.findAll({
      where: {
        id,
      },
    });
    return result[0];
  }
  async create(adminUser) {
    const { ctx } = this;
    return ctx.model.AdminUser.create(adminUser);
  }
  async update(newAdminUser) {
    const { ctx } = this;
    const id = newAdminUser.id;
    const adminUser = await ctx.model.AdminUser.findAll({
      where: {
        id,
      },
    });
    if (!adminUser) {
      ctx.throw(404, 'adminUser not found');
    }
    await adminUser[0].update(newAdminUser);
  }
  async destroy(id) {
    const { ctx } = this;
    const adminUser = await ctx.model.AdminUser.findAll({
      where: {
        id,
      },
    });
    if (!adminUser) {
      ctx.throw(404, 'adminUser not found');
    }
    adminUser[0].destroy();
  }
}

module.exports = AdminUserService;
