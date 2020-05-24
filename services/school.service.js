const SchoolService = {};
module.exports = SchoolService;

const schoolRepository = require("../repository/school.repository");

SchoolService.list = async (user, page, pageSize) => {

    const result = await schoolRepository.list(user, page, pageSize);

    return result;

}

SchoolService.getByid = async (user, schoolId) => {

    const result = await schoolRepository.getById(user, schoolId);

    return result;

}