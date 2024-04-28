"use client";

import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./faq.css";

const Faq = () => {
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetchFaq();
  }, []);

  const fetchFaq = async () => {
    try {
      const response = await fetch(
        //  "https://createnary-server.onrender.com/faq"
        "http://localhost:8000/faq"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch faq");
      }
      const responseFaq = await response.json();
      console.log("Response Faq:", responseFaq); // Log response data
      setFaq(responseFaq);
    } catch (error) {
      console.error("Error fetching faq:", error);
    }
  };
  return (
    <div className="sm:px-[16px] xsm:px-[16px] md:px-[40px] lg:px-[70px] xl:px-[120px] pb-10">
      <h1 className="font-semibold md:text-center md:text-[22px] text-[18px] pt-[70px]">
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <p className="md:text-center">
        Quick answers to questions you may have. Can't find what you're looking
        for?
      </p>
      <p className="text-center text-blue-600 hidden md:block cursor-pointer">
        Check out our full documentation
      </p>
      <div className="mt-[50px]">
        {faq.map((item, index) => (
          <div key={index}>
            <Accordion className="bg-[#d6d6d6]  rounded-xl mt-2 cursor-pointer">
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                {item.question}
              </AccordionSummary>
              <AccordionDetails className="text-slate-700 font-normal ">
                {item.answer}
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
