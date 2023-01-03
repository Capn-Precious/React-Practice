import { useState } from 'react';
import Emoji from "./Emoji";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeHandler() {
        setModalIsOpen(false);
    }

    return <div className={'card'}>
        <h2>{<Emoji symbol={'✨'}/>}{props.title}{<Emoji symbol={'✨'}/>}</h2>
        <div className={'actions'}>
            <button className={'btn'} onClick={deleteHandler}>Delete</button>
        </div>
        {/*if modal is open is true, render modal else do nothing */}

        {modalIsOpen && <Modal onCancel={closeHandler} onConfirm={closeHandler}/>}
        {modalIsOpen && <Backdrop onClick={closeHandler}/>}
    </div>;
}

export default Todo;
