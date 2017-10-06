/**
 * Created by liu on 17-4-15.
 */
const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');
logger.info('Adding Engineering Foundation ...');

// Intro
course_list.add('VG100', 4, 'Intro to Engineering', '工程导论');
course_list.add('VG101', 4, 'Intro to Computers & Programming', '计算机导论');

// Chemistry
course_list.add('VC209', 4, 'Chemistry', '大学化学'); // Newly added in FA2017
course_list.add('VC210', 4, 'Chemistry', '大学化学');
course_list.add('VC211', 1, 'Chemistry Lab', '普通化学实验');

// Physics
course_list.add('VP140', 4, 'Physics I', '普通物理 (1)');
course_list.add('VP240', 4, 'Physics II', '普通物理 (2)');

course_list.add('VP160', 4, 'Honors Physics I', '强化物理 (1)');
course_list.add('VP260', 4, 'Honors Physics II', '强化物理 (2)');

course_list.add('VP141', 1, 'Physics Lab I', '普通物理实验 (1)');
course_list.add('VP241', 1, 'Physics Lab II', '普通物理实验 (2)');

// Maths
course_list.add('VV115', 4, 'Calculus I', '微积分 (1)');
course_list.add('VV116', 4, 'Calculus II', '微积分 (2)');
course_list.add('VV215', 4, 'Calculus III', '微积分 (3)');
course_list.add('VV216', 4, 'Calculus IV', '微积分 (4)');

course_list.add('VV155', 4, 'Applied Calculus I'); // Deprecated, renamed to VV115 in Fall 2016
course_list.add('VV156', 4, 'Applied Calculus II', '高等数学A1');
course_list.add('VV255', 4, 'Applied Calculus III', '高等数学A2');
course_list.add('VV256', 4, 'Applied Calculus IV', '线性代数和微分方程A');

course_list.add('VV186', 4, 'Honors Mathematics II', '高等数学B1');
course_list.add('VV285', 4, 'Honors Mathematics III', '高等数学B2');
course_list.add('VV286', 4, 'Honors Mathematics IV', '线性代数和微分方程B');

// ECE only
course_list.add('VE203', 4, 'Discrete Mathematics', '离散数学');

// ME only
course_list.add('VV214', 4, 'Linear Algebra', '线性代数');
