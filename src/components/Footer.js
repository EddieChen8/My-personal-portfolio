import React from "react";
import { Container, Row, Column, FooterLink, Heading } from "./FooterStyles";

import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Heading>About me</Heading>
          <FooterLink href="#">Aim</FooterLink>
          <FooterLink href="#">Vision</FooterLink>
          <FooterLink href="#">Testimonials</FooterLink>
        </Column>
        <Column>
          <Heading>Jobs</Heading>
          <FooterLink href="#">Internships</FooterLink>
          <FooterLink href="#">Part-time</FooterLink>
          <FooterLink href="#">Full-time</FooterLink>
        </Column>
        <Column>
          <Heading>Contact Us</Heading>
          <FooterLink href="#">Sydeney</FooterLink>
          <FooterLink href="#">Adelaide</FooterLink>
          <FooterLink href="#">Peking</FooterLink>
          <FooterLink href="#">Shanghai</FooterLink>
        </Column>
        <Column>
          <Heading>Social Media</Heading>
          <FooterLink href="#">
            <div>
              <img
                src={navIcon1}
                alt="ins"
                style={{ marginLeft: "20px", width: "20px", height: "20px" }}
              />
            </div>
          </FooterLink>
          <FooterLink href="#">
            <div>
              <img
                src={navIcon2}
                alt="ins"
                style={{ marginLeft: "20px", width: "20px", height: "20px" }}
              />
            </div>
          </FooterLink>
          <FooterLink href="#">
            <div>
              <img
                src={navIcon3}
                alt="ins"
                style={{ marginLeft: "20px", width: "20px", height: "20px" }}
              />
            </div>
          </FooterLink>
        </Column>
      </Row>
    </Container>
  );
};
export default Footer;
