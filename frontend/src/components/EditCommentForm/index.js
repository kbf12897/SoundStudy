import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Modal } from "../../context/Modal";
import EditComment from "./EditComment";
import "./EditCommentModal.css";

function EditCommentModal({ props }) {
    const [showModal, setShowModal] = useState(false);
    const sessionUser = useSelector((state) => state.session.user);


    return (
        <>
            {sessionUser.id === props.comment.userId && <button
                className="edit-modal-button"
                onClick={() => setShowModal(true)}
            >
                edit
            </button>}
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <EditComment props={props.comment} modalClose={setShowModal} />
                </Modal>
            )}
        </>
    );
}

export default EditCommentModal;
