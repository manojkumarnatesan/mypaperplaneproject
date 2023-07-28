import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <div class="modal show" style={{ display: "block" }}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">404 Not Found</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
                Unfortunately the page you are looking for has been moved or
                deleted
              </p>
            </div>
            <div class="d-grid mx-auto col-4 col-sm-6">
              <Link to="/" class="btn btn-primary">
                GO TO HomePage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
