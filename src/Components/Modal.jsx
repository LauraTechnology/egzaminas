import { useEffect, useState } from "react";

function Modal({ showModal, hide, modalInputs, edit }) {
    const [inputs, setInputs] = useState({
        id: "",
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
        id: modalInputs.id,
        registration_code: modalInputs.registration_code,
        is_busy: modalInputs.is_busy,
        last_use_time: modalInputs.last_use_time,
        total_ride_kilometers: modalInputs.total_ride_kilometers,
      });
    }, [modalInputs]);
  
    const handleEdit = () => {
      edit(
        {
            id: inputs.id,
            registration_code: inputs.registration_code,
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
                  <label htmlFor="th1" className="col-form-label">
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
                  <label htmlFor="th2" className="col-form-label">
                  registration_code
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="th2"
                    value={inputs.registration_code}
                    onChange={(e) => control(e, "registration_code")}
                    placeholder="Enter registration_code"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="th3" className="col-form-label">
                  is_busy
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="th3"
                    value={inputs.is_busy}
                    onChange={(e) => control(e, "is_busy")}
                    placeholder="Enter is_busy"
                  />
                </div>
  
                <div className="form-group">
                  <label htmlFor="th4" className="col-form-label">
                  last_use_time
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    id="th4"
                    value={inputs.last_use_time}
                    onChange={(e) => control(e, "last_use_time")}
                    placeholder="Enter last_use_time"
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
  