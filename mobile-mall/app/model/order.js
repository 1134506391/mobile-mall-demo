'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE, FLOAT } = app.Sequelize;
  const Order = app.model.define('order', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderNumber: {
      type: STRING,
    },
    totalPrice: {
      type: FLOAT(9, 2),
    },
    clientUserId: {
      type: INTEGER,
    },
    address: {
      type: STRING,
    },
    payStatus: {
      type: INTEGER,
    },
    payType: {
      type: INTEGER,
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
  Order.associate = function() {
    app.model.Order.belongsTo(app.model.ClientUser, { as: 'clientUser' });
    app.model.Order.hasMany(app.model.OrderItem, { as: 'orderItem' });
  };

  return Order;
};
