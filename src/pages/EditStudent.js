import { DatePicker, Popconfirm, Radio, Space } from 'antd';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteStudentAction, GetDetailStudentAction, UpdateStudentAction } from '../redux/Action/ManageStudentAction';
import { history } from '../App';
import moment from 'moment';

export default function EditStudent(props) {
    var { id } = props.match.params;

    const dispatch = useDispatch();

    const { detailStudent } = useSelector(state => state.ManageStudentReducer);

    useEffect(() => {
        dispatch(GetDetailStudentAction(id))
    }, [])

    const onChangeDate = (date) => {
        let birthDay = moment(date);
        console.log('first', birthDay)
        formik.setFieldValue('birthday', birthDay)
    };
    const [value, setValue] = useState();
    const onChangeGender = (e) => {
        formik.setFieldValue('gender', e.target.value);
        setValue(e.target.value);
    };

    const cancel = (e) => {
        console.log(e);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: detailStudent?.username,
            firstname: detailStudent?.firstname,
            lastname: detailStudent?.lastname,
            email: detailStudent?.email,
            phone: detailStudent?.phone,
            address: detailStudent?.address,
            birthday: detailStudent?.birthday,
            gender: detailStudent?.gender,
        },
        // validationSchema: Yup.object({
        //     username: Yup.string()
        //         .min(2, "Tên đăng nhập quá ngắn!")
        //         .max(50, "Tên đăng nhập quá dài!")
        //         .required("Không được trống !"),

        //     firstname: Yup.string()
        //         .required("Không được trống !"),

        //     lastname: Yup.string()
        //         .required("Không được trống !"),

        //     email: Yup.string()
        //         .email("Email không chính xác!")
        //         .required("Không được trống !"),

        //     phone: Yup.string()
        //         .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
        //             message: "Số điện thoại chưa đúng",
        //             excludeEmptyString: false,
        //         })
        //         .required("Không được trống !"),

        //     birthday: Yup.string()
        //         .required("Không được trống !"),

        //     gender: Yup.string()
        //         .required("Không được trống !"),

        // }),
        onSubmit: values => {

            dispatch(UpdateStudentAction(id, values))

            // console.log('first', values)

        }
    })
    return (
        <div className='mx-48 my-20'>
            <h1 className='text-center text-3xl font-bold'>Chỉnh sửa thông tin</h1>
            <div className='flex justify-center'>
                <div className='w-1/2'>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='my-4'>
                            <div>Tên đăng nhập(*):</div>
                            <input type='text' name='username' onChange={formik.handleChange} value={formik.values.username} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Tên đăng nhập...' />
                            {/* {formik.errors.username && formik.touched.username && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.username}</p>
                    )} */}
                        </div>
                        <div className='my-4'>
                            <div>Họ đệm(*):</div>
                            <input type='text' name='firstname' onChange={formik.handleChange} value={formik.values.firstname} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Họ đệm...' />
                            {/* {formik.errors.firstname && formik.touched.firstname && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.firstname}</p>
                    )} */}
                        </div>
                        <div className='my-4'>
                            <div>Tên(*):</div>
                            <input type='text' name='lastname' onChange={formik.handleChange} value={formik.values.lastname} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Tên...' />
                            {/* {formik.errors.lastname && formik.touched.lastname && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.lastname}</p>
                    )} */}
                        </div>
                        <div className='my-4'>
                            <div>Email(*):</div>
                            <input type='text' name='email' onChange={formik.handleChange} value={formik.values.email} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Email...' />
                            {/* {formik.errors.email && formik.touched.email && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.email}</p>
                    )} */}
                        </div>

                        <div className='my-4'>
                            <div>Điện thoại(*):</div>
                            <input type='text' name='phone' onChange={formik.handleChange} value={formik.values.phone} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Số điện thoại...' />
                            {/* {formik.errors.phone && formik.touched.phone && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.phone}</p>
                    )} */}
                        </div>

                        <div className='my-4'>
                            <div>Địa chỉ:</div>
                            <input type='text' name='address' onChange={formik.handleChange} value={formik.values.address} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Địa chỉ...' />
                        </div>
                        <div className='my-4'>
                            <div>Ngày sinh(*):</div>
                            <Space direction="vertical">
                                <DatePicker name='birthday' size='large' onChange={onChangeDate} value={moment(formik.values.birthday)} />
                            </Space>
                            {/* {formik.errors.Material && formik.touched.Material && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.Material}</p>
                    )} */}
                        </div>

                        <div className='my-4'>
                            <div>Giới tính(*):</div>
                            <Radio.Group name='gender' onChange={onChangeGender} value={formik.values.gender}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={0}>Nữ</Radio>
                            </Radio.Group>
                            {/* {formik.errors.gender && formik.touched.gender && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.gender}</p>
                    )} */}
                        </div>
                        <div className='text-end mt-16'>
                            <button type='button' onClick={() => {
                                history.push('/')
                            }} className='border rounded w-24 h-10 text-lg font-medium' >Đóng</button>
                            <button type='button' className='mx-4 border rounded w-24 h-10 text-lg font-medium hover:text-white hover:bg-red-500' >
                                <Popconfirm
                                    title="Bạn có chắc muốn xóa không?"
                                    onConfirm={() => { dispatch(DeleteStudentAction(id)) }}
                                    onCancel={cancel}
                                    okText="Có"
                                    cancelText="Không"
                                >
                                    Xóa
                                </Popconfirm></button>
                            <button type='submit' className='border rounded w-24 h-10 text-lg font-medium hover:text-white hover:bg-green-500' >Cập nhật</button>
                        </div>
                    </form>

                </div>
            </div>

        </div>
    )
}
