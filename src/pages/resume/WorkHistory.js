import React from "react";
import "./style.css";
import { Container, Row, Col } from "react-bootstrap";

export const WorkHistory = ({ jobInfo }) => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <h2 className="rale display-6">Work History</h2>
      </div>
      <Row className="mb-5">
        {jobInfo.map((entry, i) => {
          return (
            <Container key={i} className="mb-5">
              <Row className="align-items-baseline">
                <Col sm="4">
                  <h3 className="rale">{entry.company}</h3>
                </Col>
                <Col sm="4">
                  <h5 className="rale">{entry.jobtitle}</h5>
                </Col>
                <Col sm="4">
                  <h6 className="rale">{entry.date}</h6>
                </Col>
                <hr className="t_border mb-4 ml-0 text-left" />
              </Row>
              <ul className="resume">
                {entry.bullets.map((bullet, i) => {
                  return (
                    <li key={i} className="mb-2">{bullet}</li>
                  )
                })}
              </ul>
              <Row>
              </Row>
            </Container>
          )
        })}
      </Row>
    </Container>
  )
}