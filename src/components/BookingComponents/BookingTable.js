import BookingModalUpdate from './BookingModalUpdate';
import BookingModalDelete from './BookingModalDelete';
import { Space, Table,} from 'antd';



const columns = [
  {
    title: 'Description',
    dataIndex: ['details','description'],
    key: 'description',
    
  },
  {
    title: 'Subject',
    dataIndex: ['details','subject'],
    key: 'subject',
    
  },
  {
    title: 'PersonId',
    dataIndex: ['person','id'],
    key: 'personId',
    
  },
  {
    title: 'ResourceId',
    dataIndex: ['resource','id'],
    key: 'resourceId',
    
  },
  {
    title: 'Date',
    dataIndex: ['schedule','date'],
    key: 'date',
    
  },
  {
    title: 'End_time',
    dataIndex: ['schedule','end_time'],
    key: 'endTime',
    
  },
  {
    title: 'Start_time',
    dataIndex: ['schedule','start_time'],
    key: 'startTime',
    
  },
  {
    title: 'State',
    dataIndex: 'state',
    key: 'state',
    
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    
  },
  
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <BookingModalUpdate id={record._id} 
        description={record.details.description}
        subject={record.details.subject}
        personId={record.person.id}
        resourceId={record.resource.id}
        date={record.date}
        endTime={record.end_time}
        startTime={record.start_time}
        state={record.state}
        type={record.type}
        
        />
        <BookingModalDelete id={record._id}/>
        {console.log(record.details.description)}
        
      </Space>
    ),
  },
];

const BookingTable = (props) => <Table columns={columns} dataSource={props.returnData.listPostsBooking.posts} />;

export default BookingTable;