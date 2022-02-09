import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import NewSong from "./NewSong";

function AddSongModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Upload your song</button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <NewSong />
                </Modal>
            )}
        </>
    );
}

export default AddSongModal;
