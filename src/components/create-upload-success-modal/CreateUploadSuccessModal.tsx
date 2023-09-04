import React from 'react';
import UploadSuccessImage from '../../assets/images/uploadsuccess.png';
import '../../components/create-upload-success-modal/_create-upload-success-modal.scss';

const CreateUploadSuccessModal = () => {
    return (
        <div className="uploaded-image-container">
            <div className="margin-container">
                <img
                    src={UploadSuccessImage}
                    alt="Sample Image"
                    className="uploaded-image"
                />
            </div>
            <p className="uploaded-image-text">
                Your Data Sources has been Successfully Uploaded.
                <br />
                We will mail you once the results are ready
            </p>
        </div>
    );
};

export default CreateUploadSuccessModal;
