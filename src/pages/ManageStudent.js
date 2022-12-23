import React, { Fragment, useEffect, useState } from 'react'
import { Table, Modal, Pagination } from 'antd';
import ModelCreate from '../components/ModelCreate';
import { useDispatch, useSelector } from 'react-redux';
import { GetListStudentAction } from '../redux/Action/ManageStudentAction';
import { BsPencilSquare } from 'react-icons/bs';
import { history } from '../App';
import { _home, _student } from '../utils/Settings/configPath';

export default function ManageStudent() {

    const dispatch = useDispatch();

    const { lstStudent } = useSelector(state => state.ManageStudentReducer);

    const onChange = (page, pageSize) => {
        dispatch(GetListStudentAction(page - 1))
        history.push(`${_home}/${page}`)
    }

    useEffect(() => {
        dispatch(GetListStudentAction(0))
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
        window.reload();
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



    const columns = [
        {
            title: 'Tên đăng nhập',
            dataIndex: 'username',
        },
        {
            title: 'Họ tên',
            dataIndex: 'firstname',
            render: (text, item) => {
                return <Fragment>
                    {`${item.firstname} ${item.lastname}`}
                </Fragment>
            }
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
        },
        {
            title: '',
            dataIndex: 'id',
            render: (text, item) => {
                return <div className='flex'>
                    <button className='mx-4 text-green-500 hover:text-green-900' title='Sửa' onClick={() => {
                        history.push(`${_student}/${item.id}`)
                    }}>
                        <BsPencilSquare style={{ fontSize: 25 }} />
                    </button>
                </div>
            },
        },
    ];
    return (
        <div className='my-20 mx-48'>
            <h1 className='text-center text-3xl font-bold'>
                Hệ thống Quản lý sinh viên
            </h1>
            <button type="primary" onClick={showModal} className='border py-2 px-4 rounded-md text-lg font-bold hover:bg-green-500 hover:text-white'>
                Tạo mới
            </button>

            <Modal width='50%' title="Tạo mới" open={isModalOpen} footer={null}>
                <ModelCreate onCancel={handleCancel} onOk={handleOk} />
            </Modal>
            <div className='my-8'>
                <Table dataSource={lstStudent.data} columns={columns} key='' pagination={false} />;
                <div className='text-end'>
                    <Pagination defaultCurrent={1} total={lstStudent.total_count} onChange={onChange} />
                </div>
            </div>
        </div>
    )
}
