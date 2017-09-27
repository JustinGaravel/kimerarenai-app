import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    onRequestClose={props.handleSelectedOption}
    closeTimeoutMS={250}
    className="modal"
  >
    <h3 className="modal__title">結果</h3>
    { props.selectedOption && <p className="modal__body">{ props.selectedOption }</p>}
    <div
      className="button__container"
    >
      <button
      className="button button__confirm"
      autoFocus
      onClick={props.handleSelectedOption}
      >
        Ok
      </button>
      <button
      className="button"
      onClick={props.handlePick}
      >
        やり直す
      </button>
    </div>
  </Modal>
);

export default OptionModal;