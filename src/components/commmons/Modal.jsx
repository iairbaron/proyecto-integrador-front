import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    border: '10px solid #9EDE82',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({ children, textButton }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className="mt-1 bg-[#9EDE82] text-white py-2 px-4 rounded-md hover:bg-[#9EAA] hover:text-[#9EDE82]  focus:outline-none">
                {textButton}
            </button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {children}
                </Box>
            </Modal>
        </div>
    );
}
