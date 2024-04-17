"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";

import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="w-full h-[700px] bg-[#f8f9fb] text-black">
      <h1 className="text-center py-4 text-2xl font-semibold">
        {" "}
        FREQUENTLY ASKED QUESTIONS
      </h1>
      <p className="text-center mt-4 text-lg">
        Quick answers to questions you may have. Can’t find what you're looking
        for?
      </p>
      <p className="text-center mt-2 text-[#4a508e] text-lg">
        Check out our full documentation
      </p>
      <div className="flex justify-center items-center">
        <div className="w-[55%]">
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-4">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              How much does it cost to set up a store?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              What kind of digital products can I sell?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Do I need technical skills to use the platform?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              No, not at all! Our platform is designed with user-friendliness in
              mind. You can easily navigate and set up your store without any
              technical expertise. It's as simple as a few clicks to get
              started!
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Is there a limit to the number of products I can list?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              How do I receive payments for my sales?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Can I sell internationally on this marketplace?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-[#b2b5cf] rounded-xl mt-2">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              What support and resources are available for sellers?
            </AccordionSummary>
            <AccordionDetails className="font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
