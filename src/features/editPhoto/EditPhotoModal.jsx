import React, { useState } from 'react'
import cuid from 'cuid'
import './modal.scss'
import { Button, Modal } from 'semantic-ui-react'
import { getFileExtension } from '../../app/common/utils/utils';
import { PhotoDropzone } from './PhotoDropzone'
import { PhotoCropper } from './PhotoCropper'
import { updatePhotoSource } from './photoReducer'
import { useDispatch } from 'react-redux'

export const EditPhotoModal = ({ open, setOpen }) => {

    const [files, setFiles] = useState([])
    const [cropper, setCropper] = useState()

    const dispatch = useDispatch()

    const cancelUpload = () => {
        setFiles([])
        dispatch(updatePhotoSource({
            photoSource: null,
            filename: ''
        }))
        setOpen(false)
    }

    const uploadImage = async () => {
        if (typeof cropper !== "undefined") {
            const filename = cuid() + '.' + getFileExtension(files[0].name)
            
            dispatch(updatePhotoSource({
                    photoSource: cropper.getCroppedCanvas(),
                    filename: filename
            }))
        }
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
                        <PhotoCropper imagePreview={files[0].preview} setCropper={setCropper} />}
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content='Cancel'
                    icon='checkmark'
                    onClick={() => cancelUpload()}
                    className='btn-primary handle-btn'
                />
                <Button
                    content='Done'
                    icon='checkmark'
                    onClick={() => uploadImage()}
                    className='btn-secondary handle-btn'
                />
            </Modal.Actions>
            </Modal>
    )
}