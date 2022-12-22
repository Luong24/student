


import { baseService } from './baseService';

class ManageStudentService extends baseService {

    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }

    addStudent = (dataStudent) => {
        return this.post(`employee`, dataStudent)
    }

    getList = () => {
        return this.get(`employee?page=0&size=15`)
    }

    getDetail = (id) => {
        return this.get(`employee/${id}`)
    }

    updateStudent = (id, data) => {
        return this.put(`employee/${id}`, data)
    }

    delStudent = (id) => {
        return this.delete(`employee/${id}`)
    }
}


export const manageStudentService = new ManageStudentService();
