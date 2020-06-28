export default interface Repository<T> {
    list(user: any, page: number, pageSize: number): Promise<T>;
    // getById(id: number): Promise<T>;
    // save(t: T): Promise<T>;
    // update(t: T): Promise<T>;
    // delete(t: T): Promise<any>;
}