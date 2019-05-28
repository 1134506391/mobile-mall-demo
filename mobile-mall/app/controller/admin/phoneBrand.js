'use strict';
const fs = require('fs');
const path = require('path');
const pump = require('mz-modules/pump');
const Controller = require('egg').Controller;

class PhoneBrandController extends Controller {
  async findAll() {
    const { ctx } = this;
    const result = await ctx.service.phoneBrand.findAll();
    ctx.body = result;
  }
  async findOne() {
    const { ctx } = this;
    const id = ctx.helper.parseInt(ctx.params.id);
    ctx.body = await ctx.service.phoneBrand.findOne(id);
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
    const phoneBrand = Object.assign(files, JSON.parse(parts.field.data));

    const result = await this.ctx.service.phoneBrand.create(phoneBrand);
    this.ctx.body = result;
  }
  async update() {
    const ctx = this.ctx;
    const id = ctx.helper.parseInt(ctx.params.id);
    const body = ctx.request.body;
    ctx.body = await ctx.service.phoneBrand.update({ id, updates: body });
  }
  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.service.phoneBrand.destroy(id);
    ctx.status = 200;
  }
  async test1() {
    const { ctx } = this;
    const id = ctx.params.id;
    const phoneBrands = await ctx.model.PhoneBrands.findAll({
      where: {
        id,
      },
    });
    await phoneBrands[0].destroy();
  }
}

module.exports = PhoneBrandController;
