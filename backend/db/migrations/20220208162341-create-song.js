"use strict";
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("Songs", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            userId: {
                allowNull: false,
                type: Sequelize.INTEGER,
            },
            playlistId: {
                type: Sequelize.INTEGER,
            },
            url: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            title: {
                allowNull: false,
                type: Sequelize.STRING(100),
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn("now"),
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("Songs");
    },
};
