import '../styles/App.css';
import { useState } from 'react';
import dataApi from "../services/api";
import Card from './Card';

import { Route, Routes } from "react-router-dom";

function App() {

  const [dataCard, setDataCard] = useState({
    palette: "1",
    name: "",
    job: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
    photo: "data:image/png;base64,2342ba..."
  });
  const [dataResult, setDataResult] = useState({});
  const updateAvatar = (avatar) => {
    setDataCard({
      ...dataCard,
      photo: avatar,
    });
  };

  const [collapseDesign, setCollapseDesign] = useState('');
  const [collapseFill, setCollapseFill] = useState('collapsed');
  const [collapseShare, setCollapseShare] = useState('collapsed');
  const [rotateDesign, setRotateDesign] = useState('rotate');
  const [rotateFill, setRotateFill] = useState('');
  const [rotateShare, setRotateShare] = useState('');

  const handleCollapse = (legendId) => {
    const idCollapse = legendId;

    if (idCollapse === 'id-design') {
      if (collapseDesign === 'collapsed') {
        setCollapseDesign('');
        setCollapseFill('collapsed');
        setCollapseShare('collapsed');
      } else {
        setCollapseDesign('collapsed');
      }
      if (rotateDesign === '') {
        setRotateDesign('rotate');
        setRotateFill('');
        setRotateShare('');
      } else {
        setRotateDesign('');
      }
    }
    if (idCollapse === 'id-fill') {
      if (collapseFill === 'collapsed') {
        setCollapseFill('');
        setCollapseDesign('collapsed');
        setCollapseShare('collapsed');
      } else {
        setCollapseFill('collapsed');
      }
      if (rotateFill === '') {
        setRotateFill('rotate');
        setRotateDesign('');
        setRotateShare('');
      } else {
        setRotateFill('');
      }
    }
    if (idCollapse === 'id-share') {
      if (collapseShare === 'collapsed') {
        setCollapseShare('');
        setCollapseFill('collapsed');
        setCollapseDesign('collapsed');
      } else {
        setCollapseShare('collapsed');
      }
      if (rotateShare === '') {
        setRotateShare('rotate');
        setRotateFill('');
        setRotateDesign('');
      } else {
        setRotateShare('');
      }
    }
  };

  const handleInput = (data) => {
    setDataCard({
      ...dataCard,
      [data.name]: data.value
    });
  }

  const handleClickCreateCard = (ev) => {
    ev.preventDefault();
    //ejecutar el fetch para llamar hacer un petición al servidor
    dataApi(dataCard).then(info => {
      console.log(info)
      setDataResult(info);
    });
  }

  return (
    <>

      <Card
        dataCard={dataCard}
        dataResult={dataResult}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        updateAvatar={updateAvatar}
        collapseDesign={collapseDesign}
        collapseFill={collapseFill}
        collapseShare={collapseShare}
        handleCollapse={handleCollapse}

      />
    </>
  );
}

export default App;
