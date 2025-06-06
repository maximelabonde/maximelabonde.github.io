import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Alert, Button, Form, Spinner } from "react-bootstrap";
// Config
import { formspreeUrl } from "../config";
// Util
import { postData } from "../utils";

// #region styled-components
const StyledForm = styled.div`
  .form-control {
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(var(--bs-body-color-rgb), 0.03)"
        : "var(--bs-gray-dark)"};
  }
`;
// #endregion

// #region component
const ContactForm = () => {
  const [isValidated, setIsValidated] = React.useState(false);
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [danger, setDanger] = React.useState(false);
  const [dangerMessage, setDangerMessage] = React.useState(null);
  const theme = useSelector(selectMode);

  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    setSuccess(false);
    setDanger(false);
    setDangerMessage(null);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setIsValidated(true);
    const { name, email, message } = form.elements;
    const data = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    if (form.checkValidity()) {
      event.preventDefault();
      event.persist();
      setIsProcessing(true);
      try {
        const response = await postData(formspreeUrl, data);
        if (!response.ok) {
          throw new Error(`${response.status}: check formspreeUrl in data.js`);
        }
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setSuccess(true);
      } catch (error) {
        setIsProcessing(false);
        setIsValidated(false);
        event.target.reset();
        setDangerMessage(error.message);
        setDanger(true);
      }
    }
  };

  return (
    <StyledForm>
      <Form noValidate validated={isValidated} onSubmit={handleSubmit}>
        <Form.Group className="mx-auto mb-3 form-group" controlId="name">
          <Form.Label>Nom</Form.Label>
          <Form.Control required type="text" placeholder="Votre nom" />
          <Form.Control.Feedback type="invalid">
            <h5>Le nom doit comporter au moins un caractère.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto mb-3 form-group" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            pattern="^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$"
            placeholder="abc@example.com"
          />
          <Form.Control.Feedback type="invalid">
            <h5>Veuillez entrer une adresse email valide.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto mb-3 form-group" controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control required as="textarea" placeholder="Votre message..." />
          <Form.Control.Feedback type="invalid">
            <h5>Veuillez fournir un message valide.</h5>
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mx-auto text-center form-group">
          {formspreeUrl && (
            <Button
              size="lg"
              variant={theme === "light" ? "outline-dark" : "outline-light"}
              type="submit"
              disabled={isProcessing}
              className="my-4"
            >
              Envoyer{" "}
              {isProcessing && (
                <Spinner animation="border" variant="success" size="sm" />
              )}
            </Button>
          )}
          <Alert
            show={success}
            variant="success"
            onClose={() => setSuccess(false)}
            dismissible
          >
            <Alert.Heading>Succès ! Je vous contacterai bientôt.</Alert.Heading>
          </Alert>
          <Alert
            show={danger}
            variant="danger"
            onClose={() => setDanger(false)}
            dismissible
          >
            <Alert.Heading>{dangerMessage}</Alert.Heading>
          </Alert>
          <Alert show={!formspreeUrl} variant="danger">
            <Alert.Heading>
              You must provide a valid formspree url in src/config.js
            </Alert.Heading>
          </Alert>
        </Form.Group>
      </Form>
    </StyledForm>
  );
};
// #endregion

export default ContactForm;
