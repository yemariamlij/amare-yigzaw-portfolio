import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

function ProjectCard({ imgPath, title, description }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <Card className="project-card-view">
        {/* Image clickable */}
        <Card.Img
          variant="top"
          src={imgPath}
          alt="card-img"
          onClick={handleOpen}
          style={{ cursor: "pointer" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>{description}</Card.Text>
        </Card.Body>
      </Card>

      {/* Modal to show full image */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body style={{ padding: 0 }}>
          <img
            src={imgPath}
            alt="project-full"
            style={{ width: "100%", height: "auto" }}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
