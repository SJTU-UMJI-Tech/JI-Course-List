/**
 * Created by liu on 17-4-15.
 */
const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');
logger.info('Reading Engineering Foundation ...');

function initCourse(code, credit, name = '', name_ch = '') {
    return course_list.add(code, credit, name, name_ch).category(['ECE', 'ME'], 'EF');
}

// Intro
initCourse('VG100', 4, 'Intro to Engineering', '导论');
initCourse('VG101', 4, 'Intro to Computers & Programming', '计算机导论');

// Chemistry
initCourse('VC210', 4, 'Chemistry');
initCourse('VC211', 4, 'Chemistry Lab');

// Physics
initCourse('VP140', 4, 'Physics I');
initCourse('VP240', 4, 'Physics II');

initCourse('VP160', 4, 'Honors Physics I');
initCourse('VP260', 4, 'Honors Physics II');

initCourse('VP141', 1, 'Physics Lab I');
initCourse('VP241', 1, 'Physics Lab II');

// Maths
initCourse('VV115', 4, 'Calculus I');
initCourse('VV116', 4, 'Calculus II');
initCourse('VV215', 4, 'Calculus III');
initCourse('VV216', 4, 'Calculus IV');

initCourse('VV155', 4, 'Applied Calculus I'); // Deprecated, renamed to VV115 in Fall 2016
initCourse('VV156', 4, 'Applied Calculus II');
initCourse('VV255', 4, 'Applied Calculus III');
initCourse('VV256', 4, 'Applied Calculus IV');

initCourse('VV186', 4, 'Honors Mathematics II');
initCourse('VV285', 4, 'Honors Mathematics III');
initCourse('VV286', 4, 'Honors Mathematics IV');

// ECE only
course_list.add('VE203', 4, 'Discrete Mathematics').category('ECE', 'EF');

// ME only
course_list.add('VV214', 4, 'Linear Algebra').category('ME', 'EF');