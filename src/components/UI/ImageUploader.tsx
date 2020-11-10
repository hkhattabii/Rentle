import Button from '@material-ui/core/Button'
import React from 'react'


interface ImageUploaderProps {
    onUpload: (file: File) => void
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
    const inputEl = React.useRef<HTMLInputElement>(null)


    const handleClick = () => {
        if (inputEl && inputEl.current) inputEl.current.click();
    }

    const handleChhange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && onUpload(e.target.files[0])
    }

    return (
        <div>
           <input type="file" ref={inputEl} onChange={handleChhange} style={{display: 'none'}}  />
           <Button variant="text" onClick={handleClick}>Téléverser</Button>
        </div>
    )
}
