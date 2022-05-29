import { Button, Modal } from 'antd';
import { useState } from 'react';
import PersonForm from './PersonForm';
import {
  PlusCircleOutlined
} from '@ant-design/icons';
import { Space } from 'antd';


const PersonModalCreate = () => {
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
        <PlusCircleOutlined /> Add person
        </Space>
      </Button>
      <Modal title="New Person" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <PersonForm/>
      </Modal>
    </>
  );
};

export default PersonModalCreate;