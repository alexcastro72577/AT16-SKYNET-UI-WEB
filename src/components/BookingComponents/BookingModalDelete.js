import { Button, Modal, Space } from 'antd';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';
import DELETE_BOOKING from "../../apollo_client/graphql/booking_service/mutation/deleteBooking"; 
import { useMutation } from '@apollo/client';

const BookingModalDelete = (props) => {
  const [deleteBooking] = useMutation(DELETE_BOOKING)

  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = ()=> {
    setIsModalVisible(false);
    console.log("este es el id")
    console.log(props)
    const id= props.id
    deleteBooking ({variables: {id}});
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
      <Modal title="Delete Booking" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      <DeleteOutlined /> Are you sure to remove this item?
      </Modal>
    </>
  );
};
export default BookingModalDelete;