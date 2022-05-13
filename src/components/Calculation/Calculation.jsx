import React from "react";

const Calculation = () => {
  return (
    <div className="calculation-wrapper">
      <div className="calculation-heading">
        <h5>Calculation</h5>
        <div className="entity-heading p-1">
          Entity ID: 1001 | NATIONAL INSUARANCE COMPANY
        </div>
        <div className="entity-heading p-1">Tax Name: GST 4</div>
        <div className="entity-heading p-1">Calculation Code: CCCID123</div>
      </div>

      <div className="calculation-method-wrapper m-3">
        <div className="calculation-heading-container d-flex ">
          <div className="calc-name-wrapper">
            <div className="calc-name-heading">Tax Name</div>
            <div className="calc-name-container mt-3">GST 4</div>
          </div>
          <div className="calc-name-wrapper">
            <div className="calc-name-container">Calculation Code</div>
            <div className="calc-name-container mt-3">CCCID123</div>
          </div>
          <div className="calc-name-wrapper">
            <div className="calc-name-container">Calculation Method</div>
            <div className="calc-name-container mt-3">F1N * F2N + F3N</div>
          </div>
        </div>

        <div className="calculation-code-wrapper mt-4">
          <div className="mb-3 col-6 pe-3">
            <label for="calculation" className="form-label">
              Calculation Code
            </label>
            <input
              type="email"
              className="form-control"
              id="calculation"
              placeholder="Calc122"
            />
          </div>

          <div className="field-type-container mb-3 d-flex">
            <div class="col-6 pe-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
            <div class="col-6 ps-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
          </div>
          <div className="field-type-container mb-3 d-flex">
            <div class="col-6 pe-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
            <div class="col-6 ps-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
          </div>
          <div className="field-type-container mb-3 d-flex">
            <div class="col-6 pe-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
            <div class="col-6 ps-3">
              <label for="disabledSelect" className="form-label">
                Field 1 Type: F1T
              </label>
              <select id="disabledSelect" className="form-select">
                <option>Standard</option>
                <option>Disabled select</option>
              </select>
            </div>
          </div>

          <div className="calculation-bottom-wrapper">
            <div className="calculation-bottom-heading my-4">
              <h6>Calculation Method</h6>
            </div>
            <div className="calculation-method d-flex">
              <div class="col-2">
                <label for="disabledSelect" className="form-label">
                  Choose Field Name
                </label>
                <select id="disabledSelect" className="form-select">
                  <option>Standard</option>
                  <option>Disabled select</option>
                </select>
              </div>
              <div class="col-2">
                <label for="disabledSelect" className="form-label">
                  Choose operation
                </label>
                <select id="disabledSelect" className="form-select">
                  <option>Standard</option>
                  <option>Disabled select</option>
                </select>
              </div>

              <div className="calc-name-wrapper">
                <div className="calc-name-container">Feild Name</div>
                <div className="calc-name-container mt-3">F2N</div>
              </div>
            </div>
          </div>

          <button className="btn btn-primary mt-3 px-3">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Calculation;
