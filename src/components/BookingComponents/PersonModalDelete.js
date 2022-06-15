import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import DELETE_PERSON from "../../apollo_client/graphql/booking_service/mutation/deletePersons"; 
import { useMutation } from '@apollo/client';

const PersonModalDelete = (props) => {
  const [deletePerson] = useMutation(DELETE_PERSON)

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = ()=> {
    setIsModalVisible(false);
    console.log("este es el id")
    console.log(props)
    const id= props.id
    deletePerson ({variables: {id}});
    handleCancel()
    
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal}>
      <DeleteOutlined /> 
      </Button>
      <Modal title="Delete Person" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <DeleteOutlined /> Are you sure to remove this item?
      </Modal>
    </>
  );
};
export default PersonModalDelete;