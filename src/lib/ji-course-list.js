/**
 * Created by liu on 2017/4/15.
 */

const logger = require('./logger');
const JICourse = require('./ji-course');

class JICourseList {

    constructor() {
        this.CATEGORY = require('./ji-course-category');
        this.dict = {};
    }

    add(code, credit, name = '', name_ch = '') {
        if (this.dict.hasOwnProperty(code)) {
            logger.warn(`Course code ${code} redefined`);
            return;
        }
        let course = new JICourse(code, credit, name, name_ch);
        this.dict[code] = course;
        return course;
    }
}

const Instance = new JICourseList();

module.exports = Instance;

