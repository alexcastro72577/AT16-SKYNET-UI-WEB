import PersonModalUpdate from './PersonModalUpdate';
import PersonModalDelete from './PersonModalDelete';
import { Space, Table,} from 'antd';



const columns = [
  {
    title: 'Name',
    dataIndex: 'person_full_name',
    key: 'name',
    
  },
  {
    title: 'Age',
    dataIndex: 'person_age',
    key: 'age',
    
  },
  {
    title: 'City',
    dataIndex: 'person_city',
    key: 'city',
    
  },
  {
    title: 'Country',
    dataIndex: 'person_country',
    key: 'country',
    
  },
  {
    title: 'Gender',
    dataIndex: 'person_gender',
    key: 'gender',
    
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <PersonModalUpdate id={record._id} 
        name={record.person_full_name}
        age={record.person_age}
        city={record.person_city}
        country={record.person_country}
        gender={record.person_gender}
        />
        <PersonModalDelete id={record._id}/>
      </Space>
    ),
  },
];

const PersonTable = (props) => <Table columns={columns} dataSource={props.returnData.listPostsPerson.posts} />;

export default PersonTable;