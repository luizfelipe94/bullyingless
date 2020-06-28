export default class DbUtils {

    static paginate({ page, pageSize }: any) {

        const offset = page * pageSize;
        const limit = pageSize;

        return {
            offset,
            limit
        }
        
    }

}