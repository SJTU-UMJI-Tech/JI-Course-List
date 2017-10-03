/**
 * Created by liu on 2017/4/15.
 */

const logger = require('./logger');
const JICourse = require('./ji-course');
const JICourseGroup = require('./ji-course-group');

class JICourseList {

    constructor() {
        this.CATEGORY = require('./ji-course-category');
        this.dict = {};
    }

    add(code, credit, name = '', name_ch = '') {
        if (this.dict.hasOwnProperty(code)) {
            logger.info(`(${code}) Course code redefined, trying to append information`);
            let flag = true;
            let course = this.dict[code];
            if (course.credit !== credit) {
                logger.warn(`(${code}) Credit "${credit}" not matching the previous definition "${course.credit}"`);
                flag = false;
            }
            if (!course.name) course.name = name;
            else if (name && course.name !== name) {
                logger.warn(`(${code}) Name "${name}" not matching the previous definition "${course.name}"`);
                flag = false;
            }
            if (!course.name_ch) course.name_ch = name_ch;
            else if (name_ch && course.name_ch !== name_ch) {
                logger.warn(`(${code}) Chinese Name "${name_ch}" not matching the previous definition "${course.name_ch}"`);
                flag = false;
            }
            if (flag) {
                logger.info(`(${code}) Appended without warnings`);
            }
        } else {
            this.dict[code] = new JICourse(code, credit, name, name_ch);
        }
        return this.dict[code];
    }

    get(code) {
        if (!(code instanceof Array)) {
            return this.dict[code];
        }
        let data = [];
        code.forEach(value => {
            if (this.dict.hasOwnProperty(value)) {
                data.push(this.dict[value]);
            }
        });
        return new JICourseGroup(data);
    }
}

const Instance = new JICourseList();

module.exports = Instance;

