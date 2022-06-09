import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import M_CONVERT_VIDEO from "../apollo_client/graphql/convert_service/mutations/m_convert_video.js";

import "./FormOCRStyles.css";


const FormVideo = () => {
  const [file, setFile] = useState(null);
  const [frame, setFrame] = useState("");
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");
  const [format, setFormat] = useState("");
  const [converter, setConverter] = useState("");
  const [message, setMessage] = useState("");

  const [convert_video, { data, loading, error }] =
    useMutation(M_CONVERT_VIDEO);

  function actionSubmit() {
    convert_video({
      variables: {
        file: file,
        frame: frame,
        height: height,
        width: width,
        color: color,
        format: format,
        convert: "Video"
      }
    });
   setMessage(data.convert_video.post.message);
  };

  if (loading) return <div>Loading.......</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  if (data) {
    console.log(data);
    console.log(data.convert_video.post.message);
  }
  const vaciarLista = (e) => {
    e.preventDefault();
    setFile(null)
    setMessage("")
  }

  return (
    <div className="form-main">
      <div className="form-inputs">
        <div className="form-inputs-main">
          <div className="row">
            <div className="form-input">
              <label>Input Color :</label>
              <input
                placeholder="Color"
                className="inputs"
                onChange={(e) => setColor(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Input Frame :</label>
              <input
                placeholder="Frame"
                className="inputs"
                onChange={(e) => setFrame(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-input">
              <label>Input Height :</label>
              <input
                placeholder="height"
                className="inputs"
                onChange={(e) => setHeight(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Input Width :</label>
              <input
                placeholder="width"
                className="inputs"
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-input">
              <label>Format :</label>
              <input
                placeholder="format"
                className="inputs"
                onChange={(e) => setFormat(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Convert: </label>
              <input
                placeholder="convert"
                className="inputs"
                value="Video"
                onChange={(e) => setConverter(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-graph">
        <div className="load-graph">
        <input className="button" type="file" onChange={(e) => setFile(e.target.files[0])}></input>
        { file ? <video autoplay controls className="image" alt="Preview" height="200" width="70%" src={URL.createObjectURL(file)}/>
        : null}  
        { file ? <button className="btnconvert" onClick={actionSubmit}>
        Convert File
        </button>
        : null}
        { file ? <button className="btnrefresh" onClick={vaciarLista}>
        Refresh
        </button>
        : null}         
        </div>
        <div className="result-graph">
          { message ? <button className="btndownload">
            <a href={message} target="_blank" rel="noopener noreferrer">CLICK DOWNLOAD FILE</a>
        </button>: ""}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default FormVideo;
