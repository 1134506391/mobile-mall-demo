'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE, FLOAT } = app.Sequelize;
  const Phone = app.model.define('phone', {
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
    imgUrl: {
      type: STRING,
    },
    price: {
      type: FLOAT(9, 2),
    },
    number: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    checked: {
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
    phoneBrandId: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true, // 使用数据库里的真实表名
    underscored: false, // 不使用下划线
  });
  Phone.associate = function() {
    app.model.Phone.belongsTo(app.model.PhoneBrand, { as: 'phoneBrand' });
  };
  return Phone;
};
