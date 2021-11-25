import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
    const [inputs, setInputs] = useState({
        registration_code: "",
        is_busy: "",
        last_use_time: "",
        total_ride_kilometers: "",
    });
  
    const control = (e, what) => {
      const inputsCopy = { ...inputs };
      inputsCopy[what] = e.target.value;
      setInputs(inputsCopy);
    };
  
    useEffect(() => {
      setInputs({
        registration_code: modalInputs.registration_code,
        is_busy: modalInputs.is_busy,
        last_use_time: modalInputs.last_use_time,
        total_ride_kilometers: modalInputs.total_ride_kilometers,
      });
    }, [modalInputs]);
  
    const handleEdit = () => {
      edit(
        {
            is_busy: inputs.is_busy,
            last_use_time: inputs.last_use_time,
            total_ride_kilometers: inputs.total_ride_kilometers,
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
                  <label htmlFor="id" className="col-form-label">
                  id
                  </label>
                 
                </div>



                <div className="form-group">
                  <label htmlFor="is_busy" className="col-form-label">
                  is_busy
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="is_busy"
                    value={inputs.is_busy}
                    onChange={(e) => control(e, "is_busy")}
                    placeholder="Enter is_busy"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="last_use_time" className="col-form-label">
                  last_use_time
                  </label>
                  <input
                    className="form-control"
                    type="date"
                    id="last_use_time"
                    value={inputs.last_use_time}
                    onChange={(e) => control(e, "last_use_time")}
                    placeholder="Enter last_use_time"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="total_ride_kilometers" className="col-form-label">
                  total_ride_kilometers
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="total_ride_kilometers"
                    value={inputs.total_ride_kilometers}
                    onChange={(e) => control(e, "total_ride_kilometers")}
                    placeholder="Enter total_ride_kilometers"
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
  