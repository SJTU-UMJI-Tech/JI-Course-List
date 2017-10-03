const logger = require('./logger');

class JICourseGroup {

    constructor(courses) {
        this.courses = courses;
    }

    category(degree_arr, category_arr) {
        this.courses.forEach((value) => {
            value.category(degree_arr, category_arr);
        });
    }

}

module.exports = JICourseGroup;