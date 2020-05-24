const DbUtils = {};
module.exports = DbUtils;

DbUtils.paginate = ({ page, pageSize }) => {

    const offset = page * pageSize;
    const limit = pageSize;

    return {
        offset,
        limit
    }
    
};