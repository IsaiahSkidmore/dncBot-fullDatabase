
interface ModalProps {
    message: string;
    onClose: () => void;
  }
  
  const Modal: React.FC<ModalProps> = ({ message, onClose }) => {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <p>{message}</p>
        </div>

      </div>
    );
  };
  
  export default Modal;