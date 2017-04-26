/**
 * Created by liu on 2017/4/15.
 */

const logger = require('./logger');
const CATEGORY = require('./ji-course-category');

class JICourse {

    constructor(code, credit, name = '', name_ch = '') {
        this.code = code;
        this.credit = credit;
        this.name = name;
        this.name_ch = name_ch;
        this.degree = {};
    }

    category(degree_arr, category_arr) {

        if (!(degree_arr instanceof Array)) degree_arr = [degree_arr];
        if (!(category_arr instanceof Array)) category_arr = [category_arr];

        for (let i = 0; i < degree_arr.length; i++) {
            let degree = degree_arr[i];
            if (!this.degree.hasOwnProperty(degree)) {
                this.degree[degree] = [];
            }
            for (let j = 0; j < category_arr.length; j++) {
                let category = category_arr[j];
                if (!CATEGORY.hasOwnProperty(category)) {
                    logger.error(`(${this.code}) Category "${category}" undefined for ${degree} Degree`);
                }
                let flag = true;
                for (let k = 0; k < this.degree[degree].length; k++) {
                    if (this.degree[degree][k] === category) {
                        logger.warn(`(${this.code}) Category "${category}" redefined for ${degree} Degree`);
                        flag = false;
                        break;
                    }
                }
                if (flag) {
                    this.degree[degree].push(category);
                }
            }
        }
        return this;
    }

    prerequisite() {

    }

    corequisite() {

    }

}

module.exports = JICourse;