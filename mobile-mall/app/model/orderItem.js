'use strict';
const moment = require('moment');
module.exports = app => {
  const { INTEGER, STRING, DATE, FLOAT } = app.Sequelize;
  const OrderItem = app.model.define('order_item', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    orderId: {
      type: STRING,
    },
    productId: {
      type: INTEGER,
    },
    productTitle: {
      type: STRING,
    },
    productImg: {
      type: STRING,
    },
    productPrice: {
      type: FLOAT(9, 2),
    },
    productNumber: {
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
  OrderItem.associate = function() {
    app.model.OrderItem.belongsTo(app.model.Order, { as: 'order' });
  };
  return OrderItem;
};
