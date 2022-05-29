import { Button, Modal } from 'antd';
import { Space } from 'antd';
import { ExclamationCircleOutlined, DeleteOutlined } from '@ant-design/icons';

const { confirm } = Modal;

const showConfirm = () => {
  confirm({
    title: 'Do you Want to delete these items?',
    icon: <ExclamationCircleOutlined />,
    content: 'Some descriptions',

    onOk() {
      console.log('OK');
    },

    onCancel() {
      console.log('Cancel');
    },
  });
};


const PersonModalDelete = () => (
  <Space wrap>
    <Button onClick={showConfirm} type="primary" danger><DeleteOutlined /></Button>
  </Space>
);

export default PersonModalDelete;