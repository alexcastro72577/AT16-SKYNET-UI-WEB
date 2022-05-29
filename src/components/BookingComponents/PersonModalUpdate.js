import { Button, Modal } from 'antd';
import { useState } from 'react';
import PersonForm from './PersonForm';
import {
  EditOutlined
} from '@ant-design/icons';
import { Space } from 'antd';


const PersonModalUpdate = () => {
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
      <Modal title="Update Person" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PersonForm/>
      </Modal>
    </>
  );
};

export default PersonModalUpdate;