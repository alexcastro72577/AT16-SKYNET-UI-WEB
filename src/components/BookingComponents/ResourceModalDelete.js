import { Button, Modal} from 'antd';
import { useState } from 'react';
import { DeleteOutlined} from '@ant-design/icons';
import DELETE_RESOURCE from "../../apollo_client/graphql/booking_service/mutation/deleteResources"; 
import { useMutation } from '@apollo/client';

const ResourceModalDelete = (props) => {
  const [deleteResource] = useMutation(DELETE_RESOURCE)

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = ()=> {
    setIsModalVisible(false);
    console.log("este es el id")
    console.log(props)
    const id= props.id
    deleteResource ({variables: {id}});
    //
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
      <Modal title="Delete Resource" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <DeleteOutlined /> Are you sure to remove this item?
      </Modal>
    </>
  );
};
export default ResourceModalDelete;





