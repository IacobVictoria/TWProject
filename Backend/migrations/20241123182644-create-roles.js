"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("roles", {
      id: {
        type: Sequelize.UUID, 
        defaultValue: Sequelize.UUIDV4, 
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.ENUM("USER", "ORGANIZATOR"), 
        allowNull: false,
        unique: true, 
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("roles");
  },
};