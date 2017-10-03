const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');

const PS = [
    'VE215', 'VM020', 'VM211', 'VM235', 'VM240', 'VM250',
    'VM320', 'VM335', 'VM350', 'VM360', 'VM382', 'VM395', 'VM450', 'VM495'
];

course_list.get('VV214').category('ME', 'EF');
course_list.get(PS).category('ME', 'PS');

