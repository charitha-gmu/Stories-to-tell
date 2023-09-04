"use strict";
exports.__esModule = true;
var react_1 = require("react");
var file_png_1 = require("../../assets/images/file.png");
var CreateUploadSuccessModal_1 = require("../../components/create-upload-success-modal/CreateUploadSuccessModal");
var CreateScreen = function () {
    var _a = react_1.useState(), selectedFile = _a[0], setSelectedFile = _a[1];
    var setUploadedImage = react_1.useState()[0];
    var _b = react_1.useState(false), isUploaded = _b[0], setIsUploaded = _b[1];
    var _c = react_1.useState(''), error = _c[0], setError = _c[1];
    // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setSelectedFile(event.target.files && event.target.files[0]);
    // };
    var handleInputClick = function (e) {
        e.target.value = '';
        setError('');
    };
    var handleInputChange = function (e) {
        var fileName = e.target.files[0];
        var allowedExtensions = /(\.csv)$/i;
        if (allowedExtensions.exec(fileName.name)) {
            setSelectedFile(fileName);
            setError('');
        }
        else {
            setError('Please upload a csv file');
        }
    };
    var handleUpload = function () {
        // Perform file upload logic here
        setUploadedImage(URL.createObjectURL(selectedFile));
        setIsUploaded(true);
    };
    return (react_1["default"].createElement("div", { className: "create-job-container" },
        react_1["default"].createElement("p", null, "Please Upload Data Source"),
        react_1["default"].createElement("div", { className: "button-to-upload" },
            react_1["default"].createElement("form", null,
                react_1["default"].createElement("input", { type: "file", accept: "text/csv", id: "input-file", onChange: handleInputChange, onClick: handleInputClick }),
                react_1["default"].createElement("label", { htmlFor: "input-file", id: "label-file" }, "Browse files to upload"))),
        selectedFile && !error && (react_1["default"].createElement("div", { className: "uploaded-file" },
            react_1["default"].createElement("img", { src: file_png_1["default"], className: "icon-file" }),
            react_1["default"].createElement("span", null, selectedFile === null || selectedFile === void 0 ? void 0 : selectedFile.name))),
        error ? (react_1["default"].createElement("div", { className: "message-block error-message" }, error)) : null,
        react_1["default"].createElement("button", { className: "upload-button", onClick: handleUpload, disabled: !selectedFile }, "Upload File"),
        react_1["default"].createElement("br", null),
        isUploaded && react_1["default"].createElement(CreateUploadSuccessModal_1["default"], null)));
};
exports["default"] = CreateScreen;
