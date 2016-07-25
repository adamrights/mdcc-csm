var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Staff Model
 * ==========
 */
var Staff = new keystone.List('Staff');

Staff.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
	password: { type: Types.Password, initial: true, required: true },
}, 'Permissions', {
	isAdmin: { type: Boolean, label: 'Can access Keystone', index: true },
});

// Provide access to Keystone
Staff.schema.virtual('canAccessKeystone').get(function () {
	return this.isAdmin;
});


/**
 * Relationships
 */
Staff.relationship({ ref: 'Post', path: 'posts', refPath: 'author' });


/**
 * Registration
 */
Staff.defaultColumns = 'name, email, isAdmin';
Staff.register();
