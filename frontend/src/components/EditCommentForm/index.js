import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditComment from "./EditComment";
import "./EditCommentModal.css";

function EditCommentModal({ props }) {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="edit-modal-button"
                onClick={() => setShowModal(true)}
            >
                edit
            </button>
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditComment props={props.comment} modalClose={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentModal;
