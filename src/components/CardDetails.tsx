import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface CardDetailsProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}

const CardDetails: React.FC<CardDetailsProps> = ({ title, description }) => {
  return (
    <Card className="py-5 h-[10dvh] w-[19dvw] bg-white  rounded-lg border">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
    </Card>
  );
};

export default CardDetails;
