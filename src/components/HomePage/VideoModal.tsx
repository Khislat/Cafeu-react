import { useCafeuContext } from "../../context/CafeuContext";
import { Modal } from "react-bootstrap";

const VideoModal = () => {
  const { closeVideoModal, isVideoModalOpen } = useCafeuContext();
  const embedUrl = `https://www.youtube.com/embed/vP7X4HcDTwk`;
  return (
    <Modal
      id="video-overlay"
      show={isVideoModalOpen}
      onHide={closeVideoModal}
      className={`video-overlay ${isVideoModalOpen ? "active" : ""}`}
      size="lg"
      centered
    >
      <Modal.Header className="video-overlay-close">
        <button className="video-modal-close-btn" onClick={closeVideoModal}>
          x
        </button>
      </Modal.Header>
      <Modal.Body>
        <iframe
          className="video-modal-iframe"
          src={embedUrl}
          allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Modal.Body>
    </Modal>
  );
};

export default VideoModal;
