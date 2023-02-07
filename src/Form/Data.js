import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ButtonGroup from 'react-bootstrap/ButtonGroup';


const Data = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  


  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Student Name</th>
            <th scope="col">Email</th>
            <th scope="col">Mobile No.</th>
            <th scope="col">Gender</th>
            <th scope="col">Hobbies</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Bhavin</td>
            <td>Test@test.com</td>
            <td>8460316055</td>
            <td>Male</td>
            <td>Cricket</td>
            <td>
            <ButtonGroup  className="mb-2">
              <Button
                variant="primary"
                
              >
                Edit
              </Button>
              <Button variant="primary" >
                Delete
              </Button>
              </ButtonGroup>
            </td>
          </tr>
          {props.list.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 2}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.mobile}</td>
                <td>{data.gender}</td>
                <td>{data.hobbies}</td>
                <td>
                <ButtonGroup  className="mb-2">
                  <Button
                    variant="primary"
                    onClick={() => props.onEditHandler(index)}
                  >
                    Edit
                  </Button>
                  <Button variant="primary" onClick={handleShow}>
                    Delete
                  </Button>
                  </ButtonGroup>
                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Delete
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Are you sure you want to delete?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Cancel
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => {
                          props.onDeleteHandler(index);
                          setShow(false);
                        }}
                      >
                        Delete
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Data;
