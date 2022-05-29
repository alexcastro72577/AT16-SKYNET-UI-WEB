import { Button, Modal } from 'antd';
import { useState } from 'react';
import ResourceForm from './ResourceForm';
import {
  EditOutlined
} from '@ant-design/icons';
import { Space } from 'antd';



const ResourceModalUpdate = (props) => {
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
      <Modal title="Update Resource" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <ResourceForm resource_name={props.resource_name}/>
      </Modal>
    </>
  );
};

export default ResourceModalUpdate;