/**
 * Created by liu on 17-4-20.
 */
const course_list = require('../lib/ji-course-list');
const logger = require('../lib/logger');
logger.info('Adding Program Subject ...');

// ECE (43 credits)
course_list.add('VE215', 4, 'Intro to Circuits', '电路设计导论');
course_list.add('VE216', 4, 'Intro to Signals and Systems', '信号与系统处理');
course_list.add('VE230', 4, 'Electromagnetics I', '电磁学 (1)');
course_list.add('VE270', 4, 'Introduction to Logic Design ', '逻辑设计导论');
course_list.add('VE280', 4, 'Programming & Elementary Data Structures', '程序设计与数据结构');
course_list.add('VE311', 4, 'Electronic Circuits', '电子电路');
course_list.add('VE300', 1, 'Technical Communication', '科技写作与交流');
course_list.add('VE320', 4, 'Intro to Semiconductor Devices', '半导体器件导论');
course_list.add('VE370', 4, 'Intro to Computer Organization', '计算机组成件导论');
course_list.add('VE401', 4, 'Probabilistic Methods in Engineering', '工程概率方法');
course_list.add('VE450', 4, 'Major Design Experience (MDE)', '系统设计与实现');
course_list.add('VE496', 4, 'Advanced Technical Communication', '高级科技写作与交流');

// ME (50 credits)
course_list.add('VE215', 4, 'Intro to Circuits', '电路设计导论');
course_list.add('VM020', 1, 'Machineshop Training', '金工实习 (1)');
course_list.add('VM211', 4, 'Intro to Solid Mechanics', '固体力学');
course_list.add('VM235', 3, 'Thermodynamics', '工程热力学 (1)');
course_list.add('VM240', 4, 'Intro to Dynamics and Vibrations', '动力学与振动导论');
course_list.add('VM250', 4, 'Design and Manufacturing I ', '设计与制造 (1)');
course_list.add('VM320', 3, 'Fluid Mechanics', '流体力学');
course_list.add('VM335', 3, 'Heat Transfer', '传热学');
course_list.add('VM350', 4, 'Design and Manufacturing II', '设计与制造 (2)');
course_list.add('VM360', 4, 'Modeling, Analysis and Control of Dynamic Systems', '动态系统建模分析与控制');
course_list.add('VM382', 4, 'Mechanical Behavior of Materials', '材料机械性能');
course_list.add('VM395', 4, 'Laboratory I', '实验 (1)');
course_list.add('VM450', 4, 'Design and Manufacturing III', '设计与制造 (3)');
course_list.add('VM495', 4, 'Laboratory II', '实验 (2)');

