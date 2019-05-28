'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const PhoneImg = app.model.define('phone_img', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: STRING,
    },
    imgUrl: {
      type: STRING,
    },
    status: {
      type: INTEGER,
    },
    createdAt: DATE,
    updatedAt: DATE,
    roleId: {
      type: INTEGER,
    },
  }, {
    freezeTableName: true, // 使用数据库里的真实表名
    underscored: false, // 不使用下划线
  });
    //   User.associate = function() {
    //     app.model.User.belongsTo(app.model.Role, { as: 'role' });
    //   };
  return PhoneImg;
};
