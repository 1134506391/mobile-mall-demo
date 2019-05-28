'use strict';

const Controller = require('egg').Controller;

class RoleController extends Controller {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.service.role.findAll();
    ctx.body = result;
  }
  async findOne() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await ctx.service.role.findOne(id);
    ctx.body = result;
  }
  async create() {
    const { ctx } = this;
    const body = await ctx.request.body;
    await ctx.service.role.create(body);
    ctx.body = '创建成功';
  }
  async destroy() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.role.destroy(id);
    ctx.status = 200;
  }
  async update() {
    const { ctx } = this;
    const body = await ctx.request.body;
    await ctx.service.role.update(body);
    ctx.body = '修改成功';
  }
}

module.exports = RoleController;
