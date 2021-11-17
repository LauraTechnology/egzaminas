import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
    const [inputs, setInputs] = useState({
        id: "",
        product: "",
        quantity: "",
        price: "",
    });
  
    const control = (e, what) => {
      const inputsCopy = { ...inputs };
      inputsCopy[what] = e.target.value;
      setInputs(inputsCopy);
    };
  
    useEffect(() => {
      setInputs({
        id: modalInputs.id,
        product: modalInputs.product,
        quantity: modalInputs.quantity,
        price: modalInputs.price,
      });
    }, [modalInputs]);
  
    const handleEdit = () => {
      edit(
        {
            id: inputs.tidh,
            product: inputs.product,
            quantity: inputs.quantity,
            price: inputs.price,
        },
        modalInputs.id
      );
    };
  
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        style={{
          display: showModal ? "block" : "none",
          opacity: showModal ? "1" : "0",
        }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit X
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={hide}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label for="th1" className="col-form-label">
                  id
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="th1"
                    value={inputs.id}
                    onChange={(e) => control(e, "id")}
                    placeholder="Enter id"
                  />
                </div>
                <div className="form-group">
                  <label for="th2" className="col-form-label">
                  product
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th2"
                    value={inputs.product}
                    onChange={(e) => control(e, "product")}
                    placeholder="Enter product"
                  />
                </div>
                <div className="form-group">
                  <label for="th3" className="col-form-label">
                  quantity
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="th3"
                    value={inputs.quantity}
                    onChange={(e) => control(e, "quantity")}
                    placeholder="Enter quantity"
                  />
                </div>
  
                <div className="form-group">
                  <label for="th4" className="col-form-label">
                  price
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="th4"
                    value={inputs.price}
                    onChange={(e) => control(e, "price")}
                    placeholder="Enter price"
                  />
                </div>
  
                <div class="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={hide}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleEdit}
                  >
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  export default Modal;
  