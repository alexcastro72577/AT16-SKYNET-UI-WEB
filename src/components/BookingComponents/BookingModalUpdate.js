import React, { useState } from 'react';
import { Button, Modal, Space, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UPDATE_BOOKING from "../../apollo_client/graphql/booking_service/mutation/updateBooking"; 
import { useMutation } from '@apollo/client';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const BookingModalUpdate = (props) => {
  // Change mutation tyoe for Update person
  const [updateBooking] = useMutation(UPDATE_BOOKING)

  //Forms functions
  const [form] = Form.useForm();
  form.setFieldsValue({
    id: props.id,
    description: props.description,
    personId: props.personId,
    resourceId: props.resourceId,
    date: props.date,
    endTime: props.endTime,
    startTime: props.startTime,
    state: props.state,
    type: props.type
  });  
  const onFinish = (values) => {
    console.log(values);
    const id = values.id
    const description_value= values.description
    const subject_value= values.subject
    const personId_value= values.personId
    const resourceId_value= values.resourceId
    const date_value= values.date
    const endTime_value= values.endTime
    const startTime_value= values.startTime
    const state_value= values.state
    const type_value= values.type
    // Change mutation script
    updateBooking ({variables: {id, description_value: description_value, subject_value: subject_value, personId_value: personId_value, resourceId_value: resourceId_value, date_value: date_value, endTime_value: endTime_value, startTime_value: startTime_value, state_value: state_value, type_value: type_value}});
    handleCancel()
  };
  const onReset = () => {
    form.resetFields();
    handleCancel()
  };


  //Modal functions
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
       <Modal
        visible={isModalVisible}
        title="Update Booking"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        ]}
      >
        {/*Inicio del Formulario*/}
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="id"
           hidden>
            <Input />
          </Form.Item>
          <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="subject"
          label="Subject"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="personId"
          label="PersonId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="resourceId"
          label="ResourceId"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="date"
          label="Date"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="endTime"
          label="EndTime"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="startTime"
          label="StartTime"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="state"
          label="State"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="type"
          label="Type"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Cancel
          </Button>
        </Form.Item>

        </Form>

        {/*Fin del Formulario*/}
        
      </Modal>
    </>
  );
};

export default BookingModalUpdate;