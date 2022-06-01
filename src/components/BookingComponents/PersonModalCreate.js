import React, { useState } from 'react';
import { Button, Modal, Space, Form, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import POST_PERSONS from "../../apollo_client/graphql/booking_service/mutation/postPersons"; 
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


const PersonModalCreate = () => {
  const [createPerson] = useMutation(POST_PERSONS)

  //Forms functions
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const name_value= values.name
    const age_value= values.age
    const city_value= values.city
    const country_value= values.country
    const gender_value= values.gender
    createPerson ({variables: {name_value, age_value, city_value, country_value, gender_value}});
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
        <PlusCircleOutlined /> Add Person
        </Space>
      </Button>
       <Modal
        visible={isModalVisible}
        title="New Person"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        ]}
      >
        {/*Inicio del Formulario*/}
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
        <Form.Item
          name="name"
          label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="age"
          label="Age"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="city"
          label="City"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="country"
          label="Country"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="gender"
          label="Gender"
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

export default PersonModalCreate;