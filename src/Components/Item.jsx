function Item({ data, modal, remove }) {
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
        <td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
        </td>
        <td>
        <button className="btn btn-danger" onClick={() => remove(data.id)}>
          Delete
        </button>
        </td>
      </tr>
    );
  }
  
  export default Item;
  