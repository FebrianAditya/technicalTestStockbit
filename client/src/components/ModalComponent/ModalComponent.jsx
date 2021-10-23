import React from "react"
import { Modal } from "antd"
import { CardComponent } from ".."

const ModalComponent = ({openModal, fromChildren}) => {

    const handleCancel = () => {
        fromChildren(false)
    }

    return (
        <>
            <Modal
                visible={openModal}
                onCancel={handleCancel}
                closable={false}
                footer={false}
                centered
                width={286}
            >
                <CardComponent />
            </Modal>
        </>
    )
}

export default ModalComponent