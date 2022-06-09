import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import M_CONVERT_AUDIO from "../apollo_client/graphql/convert_service/mutations/m_convert_audio.js";

import "./FormOCRStyles.css";


const FormAudio = () => {
  const [file, setFile] = useState(null);
  const [acodex, setAcodex] = useState("");
  const [bitrate, setBitrate] = useState("");
  const [sample_rate, setSample_rate] = useState("");
  const [audio_channel, setAudio_channel] = useState("");
  const [format, setFormat] = useState("");
  const [converter, setConverter] = useState("");
  const [message, setMessage] = useState("");

  const [convert_audio, { data, loading, error }] =
    useMutation(M_CONVERT_AUDIO);

  function actionSubmit() {
    convert_audio({
      variables: {
        file: file,
        acodex: acodex,
        bitrate: bitrate,
        sample_rate: sample_rate,
        audio_channel: audio_channel,
        format: format,
        convert: "Audio"
      }
    });
   setMessage(data.convert_audio.post.message);
  };

  if (loading) return <div>Loading.......</div>;
  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  if (data) {
    console.log(data);
    console.log(data.convert_audio.post.message);
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
              <label>Input Acodex :</label>
              <input
                placeholder="Acodex"
                className="inputs"
                onChange={(e) => setAcodex(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Input Bitrate :</label>
              <input
                placeholder="Bitrate"
                className="inputs"
                onChange={(e) => setBitrate(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-input">
              <label>Input Sample Rate :</label>
              <input
                placeholder="Sample Rate"
                className="inputs"
                onChange={(e) => setSample_rate(e.target.value)}
              />
            </div>
            <div className="form-input">
              <label>Input Audio Channel :</label>
              <input
                placeholder="Audio Channel"
                className="inputs"
                onChange={(e) => setAudio_channel(e.target.value)}
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
                value="Audio"
                onChange={(e) => setConverter(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="main-graph">
        <div className="load-graph">
        <input className="button" type="file" onChange={(e) => setFile(e.target.files[0])}></input>
        { file ? <audio autoplay controls className="image" alt="Preview" height="200" width="70%" src={URL.createObjectURL(file)}/>
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

export default FormAudio;
