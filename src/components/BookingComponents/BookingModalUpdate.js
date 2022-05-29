import { Button, Modal } from 'antd';
import { useState } from 'react';
import BookingForm from './BookingForm';
import {
  EditOutlined
} from '@ant-design/icons';
import { Space } from 'antd';


const BookingModalUpdate = () => {
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
      <Space><EditOutlined /></Space>
      </Button>
      <Modal title="Update Booking" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <BookingForm/>
      </Modal>
    </>
  );
};

export default BookingModalUpdate;