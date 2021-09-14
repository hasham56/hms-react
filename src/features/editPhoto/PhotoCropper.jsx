import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

export const PhotoCropper = ({ setImage, imagePreview }) => {
    
    const [cropper, setCropper] = useState()

    const getCropData = () => {
        if (typeof cropper !== "undefined") {
            setImage(cropper.getCroppedCanvas().toDataURL());
        }
    }

    return (
        <div>
            <Cropper
                style={{ height: '400px', width: "100%" }}
                zoomTo={0.5}
                initialAspectRatio={1}
                preview=".img-preview"
                src={imagePreview}
                viewMode={1}
                minCropBoxHeight={10}
                minCropBoxWidth={10}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                onInitialized={(instance) => {
                    setCropper(instance)
                }}
                guides={false}
            />
        </div>
    )
}