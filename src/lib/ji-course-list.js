/**
 * Created by liu on 2017/4/15.
 */

const logger = require('./logger');
const JICourse = require('./ji-course');
const JICourseGroup = require('./ji-course-group');

class JICourseList {

    constructor() {
        this.CATEGORY = require('./ji-course-category');
        this.dict = new Map();
    }

    add(code, credit, name = '', name_ch = '') {
        if (this.dict.has(code)) {
            logger.info(`(${code}) Course code redefined, trying to append information`);
            let flag = true;
            let course = this.dict.get(code);
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
            this.dict.set(code, new JICourse(code, credit, name, name_ch));
        }
        return this.dict.get(code);
    }

    get(code) {
        if (!(code instanceof Array)) {
            return this.dict.get(code);
        }
        let data = [];
        code.forEach(value => {
            if (this.dict.has(value)) {
                data.push(this.dict.get(value));
            }
        });
        return new JICourseGroup(data);
    }

    getCategoryAll(category) {

        console.log(this.dict.size);

        this.dict.forEach(function (value) {
            
        });

    }

}

const Instance = new JICourseList();

module.exports = Instance;

