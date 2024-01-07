"use client";
import { useState } from "react";

export const useToggleModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  return [isOpen, toggleModal];
};
