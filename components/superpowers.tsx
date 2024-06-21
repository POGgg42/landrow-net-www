import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
export const Superpowers = () => {
        
    return (
      <Accordion>
        <AccordionItem key="1" aria-label="Process Development" title="🛠Process Development">
        <p className="text-left">A detail-oriented professional who understands how operations impact efficiency and profits.</p>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Leadership" title="👑Leadership">
        <p className="text-left">A leader who is willing to lead through service, clear communication, and collaboration.</p>
        </AccordionItem>
        <AccordionItem key="3" aria-label="Solutions Mindset" title="💡Solutions Mindset">
        <p className="text-left">Creative problem-solver who strategically seeks outside-the-box solutions.</p>
        </AccordionItem>
        <AccordionItem key="4" aria-label="Collaborative" title="🤝Collaborative">
        <p className="text-left">Innovator who uses available resources in order to bring the best options and opportunities to the table.</p>
        </AccordionItem>
        <AccordionItem key="5" aria-label="Personal Accountability" title="✅Personal Accountability">
        <p className="text-left">A driven determination to embrace and accept responsibility for any assigned challenge.</p>
        </AccordionItem>
        <AccordionItem key="6" aria-label="Team Development" title="🏋️‍♂️Team Developmentorative">
        <p className="text-left">Strategically mentor and coach individuals, and develop plans designed to highlight individuals' unique needs to both challenge and grow them personally and professionally.</p>
        </AccordionItem>
      </Accordion>
    );
  }
