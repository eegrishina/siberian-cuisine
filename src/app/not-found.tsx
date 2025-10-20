"use client";

import { Button } from "@heroui/react";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="font-header text-8xl font-bold">404</div>
      <h1 className="text-3xl font-bold tracking-tight">
        К сожалению, страница не найдена
      </h1>
      <div className="pt-6">
        <Button
          as={Link}
          color="primary"
          variant="flat"
          className="bg-brown-300 text-white hover:bg-brown-200"
          href="/"
        >
          Вернуться на главную
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
