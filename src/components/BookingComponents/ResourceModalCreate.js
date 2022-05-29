import { Button, Modal } from 'antd';
import { useState } from 'react';
import ResourceForm from './ResourceForm';
import {
  PlusCircleOutlined
} from '@ant-design/icons';
import { Space } from 'antd';



const ResourceModalCreate = () => {
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
        <PlusCircleOutlined /> Add resource
        </Space>
      </Button>
      <Modal title="New Resource" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ResourceForm/>
      </Modal>
    </>
  );
};

export default ResourceModalCreate;