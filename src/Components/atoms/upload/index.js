import React from 'react'
import './upload.scss'

const Upload = ({img, ...rest}) => {
    return (
        <div className="upload">
            {img && <img src={img} className="preview" alt="Preview" />}
            <input type="file" {...rest} />
        </div>
    )
}

export default Upload
