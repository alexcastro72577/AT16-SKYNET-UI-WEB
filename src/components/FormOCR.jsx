import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import M_CONVERT_OCR from '../apollo_client/graphql/convert_service/mutations/m_convert_ocr.js'

import './FormOCRStyles.css'

const FormOCR = ()=>{

    const [ file, setFile ] = useState(null)
    const [ language, setLanguage ] = useState('')
    const [ format, setFormat ] = useState('')
    const [ converter, setConverter ] = useState('')
    const [ message, setMessage ] = useState('')

    const [convert_ocr, { data, loading, error }] = useMutation(M_CONVERT_OCR)
    
    const actionSubmit = e => {
        e.preventDefault();
        convert_ocr({
            variables:{
                file: file[0],
                language: language,
                format: format,
                converter: converter
            }
        })
        setMessage(data.convert_ocr.post.message)
    }

    if (loading) return <div>Loading.......</div>;
    if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

    if (data) {
        console.log(data)
        console.log(data.convert_ocr.post.message)
    }
    
    return(
    <div className="form-main">
        <div className="form-inputs">
            <div className="form-inputs-main"
                >
                <div className="form-input">
                    <label>Language :</label>
                    <input placeholder="language"
                    className = "inputs"
                    onChange = { e => setLanguage(e.target.value)}/>
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
                    onChange = { e => setConverter(e.target.value)}/>
                </div>
                <div className="form-input">
                    <input
                    className = "inputs"
                    type="file"
                    name="load_file"
                    id="btn_load_file"
                    onChange = { e => {
                        setFile(e.target.files)
                        console.log("imagen")
                        console.log(file[0])
                        }}/>
                </div>
                <div className="form-input">
                    <button
                    className = "inputs"
                    onClick={actionSubmit}>Convert File</button>
                </div>
            </div>
            <label className="style-link">Link : </label>
            <a href = {message}>{message}</a>
                    
        </div>
        <div className="main-graph">
            <div className="load-graph">
                Aqui las imagenes
                <img id="preview"  />
            </div>
            <div className="result-graph">
                Result Graph
            </div>
        </div>
        <div className=""></div>
    </div>
    )
}

export default FormOCR;
