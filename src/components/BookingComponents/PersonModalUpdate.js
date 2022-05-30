import React, { useState } from 'react';
import { Button, Modal, Space, Form, Input } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UPDATE_PERSON from "../../apollo_client/graphql/booking_service/mutation/updatePersons"; 
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


const PersonModalUpdate = (props) => {
  // Change mutation tyoe for Update person
  const [updatePerson] = useMutation(UPDATE_PERSON)

  //Forms functions
  const [form] = Form.useForm();
  form.setFieldsValue({
    id: props.id,
    name: props.name,
    age: props.age,
    city: props.city,
    country: props.country,
    gender: props.gender
  });  
  const onFinish = (values) => {
    console.log(values);
    const id = values.id
    const name1= values.name
    const age1= values.age
    const city1= values.city
    const country1= values.country
    const gender1= values.gender
    // Change mutation script
    updatePerson ({variables: {id, name1, age1, city1, country1, gender1}});
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
        title="Update Person"
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

export default PersonModalUpdate;