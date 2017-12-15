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
		}
	})

	Users.associate = function(models) {
		Users.hasMany(models.Games)
	}

	return Users
}