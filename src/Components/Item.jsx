function Item({ data, modal }) {
    const showEdit = () => {
      modal(data);
    };
  
    return (
      <tr>
        <td>{data.id}</td>
        <td>{data.product}</td>
        <td>{data.quantity}</td>
        <td>{data.price}</td>
        <button className="btn btn-primary" onClick={showEdit}>
          Edit
        </button>
      </tr>
    );
  }
  
  export default Item;
  