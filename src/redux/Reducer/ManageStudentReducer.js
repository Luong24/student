

const initialState = {
    lstStudent: [],
    detailStudent: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export const ManageStudentReducer = (state = initialState, action) => {
    switch (action.type) {

        case "GET_LIST": {
            state.lstStudent = action.dataStudent
            return { ...state }
        }

        case "GET_DETAIL": {
            state.detailStudent = action.dataDetail
            return { ...state }
        }

        default:
            return state
    }
}
