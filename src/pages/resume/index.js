import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta, resume } from "../../content_option";
import { WorkHistory } from "./WorkHistory";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>{" "}
            {/*<hr className="t_border my-4 ml-0 text-left" />*/}
          </Col>
        </Row>
        <WorkHistory jobInfo={resume.jobInfo} />
      </Container>
    </HelmetProvider>
  );
};
