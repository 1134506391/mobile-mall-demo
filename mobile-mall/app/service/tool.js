'use strict';

const path = require('path');
const fs = require('fs');
const mkdirp = require('mz-modules/mkdirp');
const pump = require('mz-modules/pump');
const sd = require('silly-datetime');
const Service = require('egg').Service;

class ToolService extends Service {
  // 订单生成
  async orderNumber() {
    // 获取当前时间
    const d = new Date();
    const nowTime = d.getTime();
    // 生成4位数的随机数
    let randomStr = '';
    for (let i = 0; i < 4; i++) {
      randomStr += Math.floor(Math.random() * 10);
    }
    return nowTime.toString() + randomStr.toString();
  }
  // 表单里上传数据和图片
  async getUploadFile(filename) {
    // 1、获取当前日期     20180920
    const day = sd.format(new Date(), 'YYYYMMDD');
    // 2、创建图片保存的路径
    const dir = path.join(this.config.uploadDir, day);
    await mkdirp(dir);
    let d = new Date();
    d = d.getTime(); /* 毫秒数*/
    // 返回图片保存的路径
    const uploadDir = path.join(dir, d + path.extname(filename));
    // app\public\admin\upload\20180914\1536895331444.png
    return {
      uploadDir,
      saveDir: uploadDir.slice(3).replace(/\\/g, '/'),
    };
  }
  //   上传图片和表单
  //   async uploadFromAndImg() {
  //     const { ctx } = this;
  //     const parts = ctx.multipart({ autoFields: true });
  //     let files = {};
  //     let stream;
  //     while ((stream = await parts()) != null) {
  //       if (!stream.filename) {
  //         break;
  //       }
  //       const fieldname = stream.fieldname; // file表单的名字
  //       // 上传图片的目录
  //       const dir = await ctx.service.tool.getUploadFile(stream.filename);
  //       const target = dir.uploadDir;
  //       const writeStream = fs.createWriteStream(target);

  //       await pump(stream, writeStream);
  //       files = Object.assign(files, {
  //         [fieldname]: dir.saveDir,
  //       });
  //     }
  //     const result = Object.assign(files, JSON.parse(parts.field.data));
  //     return result;
  //   }

}

module.exports = ToolService;
