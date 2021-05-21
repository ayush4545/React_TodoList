import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const MiniProject = () => {
  return (
    <>
      <h1 className='text-center my-5'>Welcome to Website</h1>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card" style={{width: '18rem'}}>
              <img src="https://picsum.photos/200/300" className="card-img-top" style={{height:'250px'}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div clssName="card" style={{width: '18rem'}}>
              <img src="https://picsum.photos/id/237/200/300" className="card-img-top"  style={{height:'250px'}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
          <div className="col-sm">
            <div clssName="card" style={{width: '18rem'}}>
              <img src="https://picsum.photos/seed/picsum/200/300" className="card-img-top" style={{height:'250px'}} alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniProject;
