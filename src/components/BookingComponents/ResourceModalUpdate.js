import { useState } from 'react';
import { Button, Modal, Form, Input, Space } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import UPDATE_RESOURCE from "../../apollo_client/graphql/booking_service/mutation/updateResources"; 
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


const ResourceModalUpdate = (props) => {
  const [updateResource] = useMutation(UPDATE_RESOURCE)
  //Form functions
  const [form] = Form.useForm();
  form.setFieldsValue({
      id: props.id,
      name: props.name,
      type: props.type,
      model: props.model,
      state: props.state
  });  
  const onFinish = (values) => {
    console.log("Nuevos Valores:")
    console.log(values)
    const id= values.id
    const name1= values.name
    const type1= values.type
    const model1= values.model
    const state1= values.state
    updateResource ({variables: {id, name1, type1, model1, state1}});
    handleCancel()
   
  };
  const onReset = () => {
    form.resetFields()
    handleCancel()
  };

  //Modal Functions
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
        title="Update Resource"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
        ]}
      >
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
              Update
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Cancel
            </Button>
          </Form.Item>

          </Form>    
      </Modal>
    </>
  );
};

export default ResourceModalUpdate;