import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditSong from "./EditSong";
import "./EditSongModal.css";

function EditSongModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="edit-modal-button"
                onClick={() => setShowModal(true)}
            >
                Edit song
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditSong />
                </Modal>
            )}
        </>
    );
}

export default EditSongModal;
