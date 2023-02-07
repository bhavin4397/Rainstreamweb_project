import { useState, useEffect } from "react";
import './App.css'
import Form from "./Form/Form";
import Data from "./Form/Data";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Popup from "./Form/Popup";
import Page from './Form/Page1'

const  App=()=> {
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    gender: "",
    hobbies: ""
  });
  const [getList, setList] = useState([]);
  const [getindex, setIndex] = useState(-1);
  const [show, setShow] = useState(false);
  const [getedit, setEdit] = useState(false);
  const [getMessage,setMessage]=useState("")
  const [getMessF,setMessF]=useState(false)
  const [inputValue,setInputValue]=useState("")
  const [flag1,setflag1]=useState(false);
  const [newDataList,setDataList]=useState([]);
  const [flag2,setflag2]=useState(false);


  const onChangeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onEmptyField = () => {
    setData({
      name: "",
      email: "",
      mobile: "",
      gender: "",
      hobbies: ""
    });
  };

  const onSubmitHandler = () => {
    
      setList([...getList, data]);
      onEmptyField();
      setShow(false);
      setMessF(true)
      setMessage("Sucessfully added")
      setTimeout(()=>{
        setMessF(false)
        setMessage('')
      },2000)
      
      
  };

  const onDeleteHandler = (index) => {
    let list = getList;
    list.splice(index, 1);
    setList([...list]);
  };

  const onEditHandler = (index) => {
    setIndex(index);
    setData(getList[index]);
    setShow(true);
    setEdit(true);
  };

  const onEditSubmit = () => {
    let list = getList;
    list[getindex] = data;
    setList([...list]);
    setShow(false);
    setMessF(true);
    setMessage("successFully updated")
    setTimeout(()=>{
      setMessF(false);
      setMessage('')
    },2000)
    
  };

  const onResetHandler = () => {
    onEmptyField();
  };

  const handleClose = () => {
    setShow(false);
    onEmptyField();
  };
  const handleShow = () => {
    setShow(true);
    setEdit(false);
    onEmptyField();
  };

  const onSearchhandler=(event)=>{
    setInputValue(event.target.value)
}

useEffect(() => {
  search()  
}, [inputValue])

function search(){
  if(inputValue==""){
    let list=getList
    setflag2(true)
    setList([...list])
    setflag1(false)
  }else{
    let updatelist=getList.filter((x)=>x.name.includes(inputValue))
    setflag1(true)
    setDataList([...updatelist])
    setflag2(false)
    
  }
}

  return (
    <div className="App">
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Registration</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onSearchhandler}
            />
            {/*  */}
            <Button variant="primary" onClick={handleShow}>
              Add Contact
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body className="App">
                <Form
                  value={data}
                  onChangeHandler={onChangeHandler}
                  onSubmitHandler={onSubmitHandler}
                  onResetHandler={onResetHandler}
                  getedit={getedit}
                  onEditSubmit={onEditSubmit}
                />
              </Modal.Body>
            </Modal>
          </form>
        </div>
      </nav>
      {/*  */}

      {flag2 && <Data
        list={getList}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
        inputValue={inputValue}
      />}
{ flag1 && <Data
        list={newDataList}
        onDeleteHandler={onDeleteHandler}
        onEditHandler={onEditHandler}
        inputValue={inputValue}
      />}
      {getMessF && <Popup getMessage={getMessage}/>}
      <Page/>
    </div>
  );
}

export default App;