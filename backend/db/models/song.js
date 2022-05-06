"use strict";
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define(
        "Song",
        {
            userId: DataTypes.INTEGER,
            playlistId: DataTypes.INTEGER,
            songImg: DataTypes.STRING,
            url: DataTypes.STRING,
            title: DataTypes.STRING,
        },
        {}
    );
    Song.associate = function (models) {
        Song.belongsTo(models.User, { foreignKey: "userId" });
        Song.belongsTo(models.Playlist, { foreignKey: "playlistId" });
        Song.hasMany(models.Comment, { foreignKey: "songId" });
    };
    return Song;
};
