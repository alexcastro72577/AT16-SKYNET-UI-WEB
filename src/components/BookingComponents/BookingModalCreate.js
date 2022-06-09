import React, { useState } from 'react';
import { Button, Modal, Space, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import POST_BOOKING from "../../apollo_client/graphql/booking_service/mutation/postBooking"; 
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

const BookingModalCreate = () => {
  const [createBooking] = useMutation(POST_BOOKING)

  //Forms functions
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const description_value= values.description
    const subject_value= values.subject
    const personId_value= values.personId
    const resourceId_value= values.resourceId
    const date_value= values.date
    const endTime_value= values.endTime
    const startTime_value= values.startTime
    const state_value= values.state
    const type_value= values.type
    createBooking ({variables: {description_value, subject_value, personId_value, resourceId_value, date_value, endTime_value, startTime_value, state_value, type_value}});
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
        <Space>
        <PlusCircleOutlined /> Add Booking
        </Space>
    </Button>
       <Modal
        visible={isModalVisible}
        title="New Booking"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        ]}
      >
        {/*Inicio del Formulario*/}
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
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
        <Button type='default'>...</Button>
        <Form.Item
          name="resourceId"
          label="ResourceId"
          Button="..."
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

export default BookingModalCreate;