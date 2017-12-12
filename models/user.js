module.exports = function(sequelize, DataTypes) {
	var Users = sequelize.define('Users', {
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50],
				isEmail: true
			}
		},
		firstname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50],
				isAlphanumeric: true
			}
		},
		lastname: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50],
				isAlphanumeric: true
			}
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1,50],
				isAlphanumeric: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			// validate: {
			// 	len: [1,50],
			// 	isAlphanumeric: true
			// }
		},
		game_id: {
			type: DataTypes.INTEGER,
			allowNull: true,
		}
	})

	// Users.associate = function(models) {
	// 	Users.hasOne(models.Games, {
	// 		foreignKey: {
	// 			allowNull: false
	// 		},
	// 		targetKey: id
	// 	})
	// }

	return Users
}