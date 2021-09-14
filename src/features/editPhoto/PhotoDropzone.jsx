import React, { useCallback } from 'react'
import { Icon, Header } from 'semantic-ui-react'
import { useDropzone } from 'react-dropzone'

export const PhotoDropzone = ({setFiles}) => {

    const dropzoneActive = {
        border: 'dashed 2px #00acb1',
        backgroundColor: '#98d7d9',
        transition: 'background 0.5s ease'
    }

    const onDrop = useCallback(acceptedFiles => {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
            preview: URL.createObjectURL(file)
        })))
    }, [setFiles])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

    return (
        <div {...getRootProps()}
            className='dropzone'
            style={isDragActive ?
                {...dropzoneActive } :
                {}}>
            <input {...getInputProps()} />
            <div className='dropzone-content'>
                {isDragActive ?
                    '' :
                    <Icon className='upload-icon' name='upload' size='massive' />}
                <Header className='drop-image' content={isDragActive ?
                    'Drop image here!' :
                    'Drop image here or click to upload!'} />
            </div>
        </div>
    )
}