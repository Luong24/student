
import { history } from '../../App';
import { manageStudentService } from './../../services/ManageStudent';
import { message } from 'antd';



export const AddPStudentAction = (dataStudent) => {
    return async dispatch => {
        try {
            const result = await manageStudentService.addStudent(dataStudent);
            if (result.status === 200) {
                await message.success("Thêm mới thành công!")
            }
            else {
                message.error("Thêm mới thất bại!")
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const GetListStudentAction = () => {
    return async dispatch => {
        try {
            const result = await manageStudentService.getList();
            if (result.status === 200) {
                dispatch({
                    type: 'GET_LIST',
                    dataStudent: result.data.data
                })
            }
            else {
                message.error("Không lấy được học sinh!")
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}


export const GetDetailStudentAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageStudentService.getDetail(id);
            if (result.status === 200) {
                dispatch({
                    type: 'GET_DETAIL',
                    dataDetail: result.data
                })
            }
            else {
                message.error("Không lấy được sản phẩm!")
            }
        } catch (error) {
            console.log('error', error.response?.data)
        }
    }
}

export const UpdateStudentAction = (id, data) => {
    return async dispatch => {
        try {

            const result = await manageStudentService.updateStudent(id, data);
            if (result.status === 200) {
                await message.success("Cập nhật thành công!")
                history.push('/')
            }
            else {
                message.error("Cập nhật thất bại!")
            }
        } catch (error) {
            message.error("Cập nhật thất bại!!")
            console.log('error', error.response?.data)

        }
    }
}


export const DeleteStudentAction = (id) => {
    return async dispatch => {
        try {
            const result = await manageStudentService.delStudent(id);
            if (result.status === 200) {
                message.success('Xóa thành công!')
                history.push(`/`)
                dispatch(GetListStudentAction())
            }
            else {
                message.warning('Xóa thất bại!')
            }

        } catch (error) {
            message.warning('Xóa thất bại!')
            console.log('error', error.response?.data)

        }
    }
}