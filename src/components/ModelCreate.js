import React, { useState } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Space, DatePicker, Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { AddPStudentAction } from '../redux/Action/ManageStudentAction';


export default function ModelCreate(props) {
    const dispatch = useDispatch();
    const onChangeDate = (date, dateString) => {
        formik.setFieldValue('birthday', dateString)
    };
    const [value, setValue] = useState();
    const onChangeGender = (e) => {
        formik.setFieldValue('gender', e.target.value);
        setValue(e.target.value);
    };

    const formik = useFormik({
        initialValues: {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            address: '',
            birthday: '',
            gender: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .required("Không được trống !"),

            firstname: Yup.string()
                .required("Không được trống !"),

            lastname: Yup.string()
                .required("Không được trống !"),

            email: Yup.string()
                .email("Email không chính xác!")
                .required("Không được trống !"),

            phone: Yup.string()
                .matches(/(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, {
                    message: "Số điện thoại chưa đúng",
                    excludeEmptyString: false,
                })
                .required("Không được trống !"),

            birthday: Yup.string()
                .required("Không được trống !"),

            gender: Yup.string()
                .required("Không được trống !"),

        }),
        onSubmit: values => {

            dispatch(AddPStudentAction(values))

        }
    })
    return (
        <div className='mx-20'>
            <form onSubmit={formik.handleSubmit}>
                <div className='my-4'>
                    <div>Tên đăng nhập(*):</div>
                    <input type='text' name='username' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Tên đăng nhập...' />
                    {formik.errors.username && formik.touched.username && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.username}</p>
                    )}
                </div>
                <div className='my-4'>
                    <div>Họ đệm(*):</div>
                    <input type='text' name='firstname' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Họ đệm...' />
                    {formik.errors.firstname && formik.touched.firstname && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.firstname}</p>
                    )}
                </div>
                <div className='my-4'>
                    <div>Tên(*):</div>
                    <input type='text' name='lastname' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Tên...' />
                    {formik.errors.lastname && formik.touched.lastname && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.lastname}</p>
                    )}
                </div>
                <div className='my-4'>
                    <div>Email(*):</div>
                    <input type='text' name='email' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Email...' />
                    {formik.errors.email && formik.touched.email && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.email}</p>
                    )}
                </div>

                <div className='my-4'>
                    <div>Điện thoại(*):</div>
                    <input type='text' name='phone' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Số điện thoại...' />
                    {formik.errors.phone && formik.touched.phone && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.phone}</p>
                    )}
                </div>

                <div className='my-4'>
                    <div>Địa chỉ:</div>
                    <input type='text' name='address' onChange={formik.handleChange} className='p-2 px-4 border w-full rounded drop-shadow-lg hover:border-green-500 focus:outline-none focus:border focus:border-green-500' placeholder='Địa chỉ...' />
                </div>
                <div className='my-4'>
                    <div>Ngày sinh(*):</div>
                    <Space direction="vertical">
                        <DatePicker name='birthday' size='large' onChange={onChangeDate} />
                    </Space>
                    {formik.errors.birthday && formik.touched.birthday && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.birthday}</p>
                    )}
                </div>

                <div className='my-4'>
                    <div>Giới tính(*):</div>
                    <Radio.Group name='gender' onChange={onChangeGender} value={value}>
                        <Radio value={1}>Nam</Radio>
                        <Radio value={0}>Nữ</Radio>
                    </Radio.Group>
                    {formik.errors.gender && formik.touched.gender && (
                        <p className='m-0 mt-1 text-red-600'>{formik.errors.gender}</p>
                    )}
                </div>
                <div className='text-end mt-16'>
                    <button type='button' onClick={props.onCancel} className='mx-4 border rounded w-24 h-10 text-lg font-medium hover:text-white hover:bg-red-500' >Đóng</button>
                    <button type='submit' onClick={props.onOk} className='border rounded w-24 h-10 text-lg font-medium hover:text-white hover:bg-green-500' >Thêm</button>
                </div>
            </form>


        </div>
    )
}
