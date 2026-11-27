"use client";

import { useState } from "react";
import Modal from "./Modal";

export default function NoblePayModal() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="btn-primary text-sm"
      >
        Learn More
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="NoblePay"
      >
        <p className="mb-6">
          NoblePay is a digital payment platform for everyday payments across Africa. It makes it easy to top up airtime and data and to pay bills, including electricity, in one place.
        </p>
        
        <div className="flex gap-4">
          <a
            href="https://www.noblepay.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm"
          >
            Visit NoblePay ↗
          </a>
          
          <button
            onClick={() => setIsModalOpen(false)}
            className="btn-secondary text-sm"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
}
