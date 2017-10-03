/**
 * Created by liu on 17-4-14.
 */
const fs = require('fs');
const path = require('path');
const course_list = require('./lib/ji-course-list');
const logger = require('./lib/logger');

require('./courses/engineering-foundation');
require('./courses/program-subject');

// console.log(course_list);

let result = {
    "course": {},
    "degree": {
        "ECE": {
            "name": "Electrics and Computer Engineering",
            "credit": {"EF": 39, "IB": 16, "PS": 43, "CE": 4, "UTE": 7, "FTE": 12, "GE": 7, "SJTU": 22},
            "credit-dd": {"CE": 0, "IB": 8, "FTE": 16}
        },
        "ME": {
            "name": "Mechanical Engineering",
            "credit": {"EF": 39, "IB": 16, "PS": 50, "AM": 3, "FTE": 11, "GE": 9, "SJTU": 22}
        }
    },
    "category": require('./lib/ji-course-category')
};

for (const course_code in course_list.dict) {
    const course = course_list.dict[course_code];
    result.course[course_code] = course.serialize();
}

const dist = path.resolve(__dirname, '..', 'dist');
fs.writeFileSync(path.resolve(dist, 'course.json'), JSON.stringify(result, null, 2));

// module.exports = course_list;

