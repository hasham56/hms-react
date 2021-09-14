import React, { useState } from 'react'
import './modal.scss'
import { Button, Modal } from 'semantic-ui-react'
import { PhotoDropzone } from './PhotoDropzone'
import { PhotoCropper } from './PhotoCropper'

export const EditPhotoModal = ({ open, setOpen }) => {

    const [files, setFiles] = useState([])
    const [image, setImage] = useState(null)

    const cancelUpload = () => {
        setFiles([])
        setImage(null)
        setOpen(false)
    }

    const uploadImage = () => {
        setOpen(false)
    }
    
    return (
        <Modal
            dimmer='blurring'
            closeOnDimmerClick={false}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            closeIcon
            open={open}
            className='edit-photo-modal'
            >
            <Modal.Header className='title'>Upload Your Profile Picture</Modal.Header>
            <Modal.Content>
                <Modal.Description style={{textAlign: 'center'}}>
                    {files.length === 0 ?
                        <PhotoDropzone setFiles={setFiles} /> :
                        <PhotoCropper setImage={setImage} imagePreview={files[0].preview} />}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Cancel"
                    icon='checkmark'
                    onClick={() => cancelUpload()}
                    className='btn-primary handle-btn'
                />
                <Button
                    content="Save"
                    icon='checkmark'
                    onClick={() => uploadImage()}
                    className='btn-secondary handle-btn'
                />
            </Modal.Actions>
            </Modal>
    )
}