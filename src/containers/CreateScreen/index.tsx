import React, { useState } from 'react';
import FileImage from '../../assets/images/file.png';
import CreateUploadSuccessModal from '../../components/create-upload-success-modal/CreateUploadSuccessModal';

const CreateScreen = () => {
    const [selectedFile, setSelectedFile] = useState<any>();
    const [setUploadedImage] = useState<any>();
    const [isUploaded, setIsUploaded] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedFile(event.target.files && event.target.files[0]);
    // };

    const handleInputClick = (e: any) => {
        e.target.value = '';
        setError('');
    };

    const handleInputChange = (e: any) => {
        const fileName = e.target.files[0];
        const allowedExtensions = /(\.csv)$/i;
        if (allowedExtensions.exec(fileName.name)) {
            setSelectedFile(fileName);
            setError('');
        } else {
            setError('Please upload a csv file');
        }
    };

    const handleUpload = () => {
        // Perform file upload logic here
        setUploadedImage(URL.createObjectURL(selectedFile));
        setIsUploaded(true);
    };

    return (
        <div className="create-job-container">
            <p>Please Upload Data Source</p>
            <div className="button-to-upload">
                <form>
                    <input
                        type="file"
                        accept="text/csv"
                        id="input-file"
                        onChange={handleInputChange}
                        onClick={handleInputClick}
                    />
                    <label htmlFor="input-file" id="label-file">
                        Browse files to upload
                    </label>
                </form>
            </div>
            {selectedFile && !error && (
                <div className="uploaded-file">
                    <img src={FileImage} className="icon-file" />
                    <span>{selectedFile?.name}</span>
                </div>
            )}

            {error ? (
                <div className="message-block error-message">{error}</div>
            ) : null}
            <button
                className="upload-button"
                onClick={handleUpload}
                disabled={!selectedFile}
            >
                Upload File
            </button>

            <br />
            {isUploaded && <CreateUploadSuccessModal />}
        </div>
    );
};

export default CreateScreen;
