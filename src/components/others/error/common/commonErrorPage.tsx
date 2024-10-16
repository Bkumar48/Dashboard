import { ImagePath } from "@/constant";
import { CommonErrorPageType } from "@/types/pageType";
import React from "react";
import { Button, Col, Container } from "reactstrap";

const CommonErrorPage: React.FC<CommonErrorPageType> = ({
  error,
  color,
  src,
}) => {
  const BackToHomePage: string = "BACK TO HOME PAGE";
  const ErrorContent: string =
    "The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.";

  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <img
            className="img-100 h-auto"
            src={`${ImagePath}/other-images/${src}.gif`}
            alt=""
          />
          <div className="error-heading">
            <h2 className={`headline font-${color}`}>{error}</h2>
          </div>
          <Col md="8" className="offset-md-2">
            <p className="sub-content">{ErrorContent}</p>
          </Col>
          <div>
            <Button
              size="lg"
              tag="a"
              color={`${color}-gradien`}
              href={`/dashboard`}
            >
              {BackToHomePage}
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default CommonErrorPage;