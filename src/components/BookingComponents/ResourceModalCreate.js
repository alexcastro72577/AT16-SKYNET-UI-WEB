import React, {useState} from 'react';
import { Button, Modal, Form, Input, Space } from 'antd';
import {PlusCircleOutlined} from '@ant-design/icons';
import POST_RESOURCES from "../../apollo_client/graphql/booking_service/mutation/postResources"; 
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


const ResourceModalCreate = () => {
  const [createResource] = useMutation(POST_RESOURCES)

  //Forms functions
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    const name_value= values.name
    const type_value= values.type
    const model_value= values.model
    const state_value= values.state
    createResource ({variables: {name_value: name_value, type_value: type_value, model_value: model_value, state_value: state_value}});
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
        <PlusCircleOutlined /> Add Resource
        </Space>
      </Button>
      <Modal
        visible={isModalVisible}
        title="New Resource"
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
        <Form.Item
          name="model"
          label="Model"
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

export default ResourceModalCreate;