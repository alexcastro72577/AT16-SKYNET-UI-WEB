import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import M_CONVERT_WAPTXT from '../apollo_client/graphql/convert_service/mutations/m_convert_waptxt.js'

import './FormOCRStyles.css'

const FormWavTxt = ()=>{

    const [ file, setFile ] = useState(null)
    const [ language_in, setLanguage_in ] = useState('')
    const [ format, setFormat ] = useState('')
    const [ converter, setConverter ] = useState('')
    const [ message, setMessage ] = useState('')

    const [convert_waptxt, { data, loading, error }] = useMutation(M_CONVERT_WAPTXT)
    
    const actionSubmit = e => {
        e.preventDefault();
        convert_waptxt({
            variables:{
                file: file,
                format: format,
                convert: "WavTxt",
                language_in: language_in
            }
        })
        console.log("hola variables", convert_waptxt)
        setMessage(data.convert_waptxt.post.message)
    }

    if (loading) return <div>Loading.......</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

    if (data) {
        console.log("data")
        console.log(data.convert_waptxt.post.message)
    }
    const vaciarLista = (e) => {
        e.preventDefault();
        setFile(null)
        setMessage("")
      }
    
    return(
    <div className="form-main">
        <div className="form-inputs">
            <div className="form-inputs-main"
                >
                <div className="form-input">
                    <label>Input Language :</label>
                    <input placeholder="language"
                    className = "inputs"
                    onChange = { e => setLanguage_in(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Format :</label>
                    <input placeholder="format"
                    className = "inputs"
                    onChange = { e => setFormat(e.target.value)}/>
                </div>
                <div className="form-input">
                    <label>Convert : </label>
                    <input placeholder="convert"
                    className = "inputs"
                    value="WavTxt"
                    />
                </div>
            </div>                    
        </div>
        <div className="main-graph">
            <div className="load-graph">
            <input className="button" type="file" 
            onChange={(e) => setFile(
                e.target.files[0])}></input>
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
    )
}

export default FormWavTxt;
