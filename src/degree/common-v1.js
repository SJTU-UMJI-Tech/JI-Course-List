const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');

const EF = [
    'VG100', 'VG101',
    'VC209','VC210', 'VC211',
    'VP140', 'VP160', 'VP141',
    'VP240', 'VP260', 'VP241',
    'VV116', 'VV215', 'VV216',
    'VV156', 'VV255', 'VV256',
    'VV186', 'VV285', 'VV286',
];

course_list.get(EF).category('all', 'EF');
