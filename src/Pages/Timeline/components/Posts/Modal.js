import axios from 'axios';
import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components';
import BASE_URL from '../../../../constants/URL';


export function ModalPost({ modalIsOpen, setIsOpen, afterOpenModal, closeModal, openModal, setUpdate, token, id }) {

    const [load, setLoad] = useState(false)
    async function deletePost(postId, token) {
        const authorization = {
            headers: {
                authorization: `Bearer ${token}`,
            },
        };

        try {
            setLoad(true);
            await axios.delete(`${BASE_URL}/delete-post/${postId}`, authorization);
        } catch (error) {
            alert("Não foi possível excluir o post!");
        }

        setUpdate(true);
        setLoad(true);
        closeModal();
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <StyleModalDelete >

                {load ? (
                    <>
                    <h1>
                        deleting...
                    </h1>
                    </>
                ) : (
                    <>
                        <h1>
                            Are you sure you want to delete this post?
                        </h1>
                        <div>
                            <Button colorFont='#1877F2' backColor="#FFFFFF" onClick={(() => closeModal())}>No, go back</Button>
                            <Button colorFont='#FFFFFF' backColor="#1877F2" onClick={() => deletePost(id, token)}>Yes, delete it</Button>
                        </div>
                    </>
                )
                }
            </StyleModalDelete >
        </Modal >
    )
}


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: '#333333;'
    },
};

const StyleModalDelete = styled.div`
    box-sizing: border-box;
    width: 597px;
    height: 262px;
    background: #333333;
    border-radius: 50px;

    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 27px;

    font-family: 'Lato';
    font-style: normal;
    
    h1{
        font-size: 34px;
        line-height: 41px;
        text-align: center;
        color: #FFFFFF;

        width: 338px;
        height: 82px;
    }
`

const Button = styled.button`

    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.colorFont};
    
    width: 134px;
    height: 37px;
    background: ${props => props.backColor} ;
    border-radius: 5px;
    margin:13px;
`