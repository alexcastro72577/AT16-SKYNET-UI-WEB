import { Button, Modal } from 'antd';
import { useState } from 'react';
import BookingForm from './BookingForm';
import {
  PlusCircleOutlined
} from '@ant-design/icons';
import { Space } from 'antd';


const BookingModalCreate = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      <Space>
        <PlusCircleOutlined /> Add booking
        </Space>
      </Button>
      <Modal title="New Booking" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BookingForm/>
      </Modal>
    </>
  );
};

export default BookingModalCreate;