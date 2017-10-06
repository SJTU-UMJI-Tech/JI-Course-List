const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');

const PS = [
    'VE215', 'VE216', 'VE230', 'VE270', 'VE280',
    'VE311', 'VE300', 'VE320', 'VE370', 'VE401', 'VE450', 'VE496'
];

course_list.get('VE203').category('ECE', 'EF');
course_list.get(PS).category('ECE', 'PS');

course_list.getCategoryAll();