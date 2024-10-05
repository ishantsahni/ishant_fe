import axios from "axios";
import { useState } from "react";

function FileUpload({ onFileUpload }) {
    const [file, setFile] = useState(null);

    const handleFileChange = async (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);

        // Start file upload
        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const res = await axios.post("http://localhost:4000/upload", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            const fileUrl = res?.data?.fileUrl;

            // Pass the URL to Formik
            onFileUpload(fileUrl);
        } catch (error) {
            console.error("file upload error", error);
        }

    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
        </div>
    )
};

export default FileUpload;