'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const PhoneBrand = app.model.define('phone_brand', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
    },
    description: {
      type: STRING,
    },
    logo: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    createdAt: {
      type: DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
    updatedAt: {
      type: DATE,
      get() {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss');
      },
    },
  }, {
    freezeTableName: true, // 使用数据库里的真实表名
    underscored: false, // 不使用下划线
  });
  PhoneBrand.associate = function() {
    app.model.PhoneBrand.hasMany(app.model.Phone, { as: 'phone' });
  };
  return PhoneBrand;
};
