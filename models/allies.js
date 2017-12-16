module.exports = function(sequelize, DataTypes) {
	var Allies = sequelize.define('Allies', {
		name: {
			type: DataTypes.STRING
		},
		race: {
			type: DataTypes.STRING
		},
		age: {
			type: DataTypes.INTEGER
		},
		class: {
			type: DataTypes.STRING
		},
		weapon: {
			type: DataTypes.STRING
		},
		attack_value: {
			type: DataTypes.INTEGER
		},
		defense_value: {
			type: DataTypes.INTEGER
		},
		health: {
			type: DataTypes.INTEGER
		}
	})

	return Allies
}