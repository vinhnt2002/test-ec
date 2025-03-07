"use client";
import SizeGuideModal from "@/components/Modal/SizeGuideModal";
import SocialProductCopyModal from "@/components/Modal/SocialProductCopyModal";
import { useEffect, useState } from "react";

const ModalProviders = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <SizeGuideModal />
      <SocialProductCopyModal/>
    </>
  );
};

export default ModalProviders;
