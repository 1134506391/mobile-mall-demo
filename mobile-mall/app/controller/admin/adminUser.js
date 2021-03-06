'use strict';
const fs = require('fs');
const pump = require('mz-modules/pump');
const Controller = require('egg').Controller;

class AdminUserController extends Controller {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.service.adminUser.findAll();
    ctx.body = result;
  }
  async findOne() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await ctx.service.adminUser.findOne(id);
    ctx.body = result;
  }
  async create() {
    const { ctx } = this;
    const parts = ctx.multipart({ autoFields: true });
    let files = {};
    let stream;
    while ((stream = await parts()) != null) {
      if (!stream.filename) {
        break;
      }
      const fieldname = stream.fieldname; // file表单的名字
      // 上传图片的目录
      const dir = await ctx.service.tool.getUploadFile(stream.filename);
      const target = dir.uploadDir;
      const writeStream = fs.createWriteStream(target);

      await pump(stream, writeStream);
      files = Object.assign(files, {
        [fieldname]: dir.saveDir,
      });
    }
    const adminUser = Object.assign(files, JSON.parse(parts.field.data));
    const result = await ctx.service.adminUser.create(adminUser);
    ctx.body = result;
  }
  async destroy() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    await ctx.service.adminUser.destroy(id);
    ctx.status = 200;
  }
  async update() {
    const { ctx } = this;
    const body = await ctx.request.body;
    await ctx.service.adminUser.update(body);
    ctx.body = '修改成功';
  }
}

module.exports = AdminUserController;
