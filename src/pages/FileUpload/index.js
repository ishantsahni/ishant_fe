import axios from "axios";
import { useState } from "react";

function FileUpload() {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post("http://localhost:4000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log("file upload response", res?.data);
        } catch (error) {
            console.error("file upload error", error);
        }

    }


    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleFileUpload}>Upload</button>
        </div>
    )
};

export default FileUpload;