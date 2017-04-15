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
initCourse('VG100', 4, 'Intro to Engineering', '工程导论');
initCourse('VG101', 4, 'Intro to Computers & Programming', '计算机导论');

// Chemistry
initCourse('VC210', 4, 'Chemistry', '普通化学');
initCourse('VC211', 4, 'Chemistry Lab', '普通化学实验');

// Physics
initCourse('VP140', 4, 'Physics I', '普通物理 (1)');
initCourse('VP240', 4, 'Physics II', '普通物理 (2)');

initCourse('VP160', 4, 'Honors Physics I', '强化物理 (1)');
initCourse('VP260', 4, 'Honors Physics II', '强化物理 (2)');

initCourse('VP141', 1, 'Physics Lab I', '普通物理实验 (1)');
initCourse('VP241', 1, 'Physics Lab II', '普通物理实验 (2)');

// Maths
initCourse('VV115', 4, 'Calculus I', '微积分 (1)');
initCourse('VV116', 4, 'Calculus II', '微积分 (2)');
initCourse('VV215', 4, 'Calculus III', '微积分 (3)');
initCourse('VV216', 4, 'Calculus IV', '微积分 (4)');

initCourse('VV155', 4, 'Applied Calculus I'); // Deprecated, renamed to VV115 in Fall 2016
initCourse('VV156', 4, 'Applied Calculus II', '高等数学A1');
initCourse('VV255', 4, 'Applied Calculus III', '高等数学A2');
initCourse('VV256', 4, 'Applied Calculus IV', '线性代数和微分方程A');

initCourse('VV186', 4, 'Honors Mathematics II', '高等数学B1');
initCourse('VV285', 4, 'Honors Mathematics III', '高等数学B2');
initCourse('VV286', 4, 'Honors Mathematics IV', '线性代数和微分方程B');

// ECE only
course_list.add('VE203', 4, 'Discrete Mathematics', '离散数学').category('ECE', 'EF');

// ME only
course_list.add('VV214', 4, 'Linear Algebra', '线性代数').category('ME', 'EF');