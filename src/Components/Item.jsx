function Item({ data, modal }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.registration_code}</td>
        <td>{data.is_busy}</td>
        <td>{data.last_use_time}</td>
        <td>{data.total_ride_kilometers}</td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
      </tr>
    );
  }
  
  export default Item;
  