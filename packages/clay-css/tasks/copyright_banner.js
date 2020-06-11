var fs = require('fs');
var path = require('path');

module.exports = {
	metadata: {
		version: JSON.parse(
			fs.readFileSync(path.join(__dirname, '../package.json'))
		).version,
		year: (new Date()).getFullYear()
	},
	TPL_C_LICENSE: [
		'/**',
		'* Clay <%= version %>',
		'*',
		'* SPDX-FileCopyrightText: © 2020 Liferay, Inc.',
		'*',
		'* SPDX-License-Identifier: BSD-3-Clause',
		'*/',
		''
	].join('\n'),
	TPL_SVG_C_LICENSE: [
		'<!--',
		'* Clay <%= version %>',
		'*',
		'* SPDX-FileCopyrightText: © 2020 Liferay, Inc.',
		'*',
		'* SPDX-License-Identifier: BSD-3-Clause',
		'-->',
		''
	].join('\n')
};
