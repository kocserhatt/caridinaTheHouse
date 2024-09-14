"use client";

import Image from "next/image";
import ProductPage from "./post/page";
import { Container } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <ProductPage />
    </Container>
  );
}
