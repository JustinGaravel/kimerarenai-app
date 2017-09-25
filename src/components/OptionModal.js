import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleSelectedOption}
  >
    <h3>選択枝</h3>
    { props.selectedOption && <p>{ props.selectedOption }</p>}
    <button
    autoFocus
    onClick={props.handleSelectedOption}
    >
      Ok
    </button>
  </Modal>
);

export default OptionModal;