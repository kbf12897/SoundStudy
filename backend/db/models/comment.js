"use strict";
module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        "Comment",
        {
            userId: DataTypes.INTEGER,
            songId: DataTypes.INTEGER,
            commentBody: DataTypes.STRING,
        },
        {}
    );
    Comment.associate = function (models) {
        Comment.belongsTo(models.User, { foreignKey: "userId" });
        Comment.belongsTo(models.Song, { foreignKey: "songId" });
    };
    return Comment;
};
