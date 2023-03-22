import { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import { faqs } from "./mock";
import {
  StyledContent,
  StyledTitle,
  StyledWrapper,
  theme,
} from "./Accordion.style";
import { IconExpandMore } from "../../atoms/Icons/navigation";
import { ThemeProvider } from "@mui/material/styles";

function SimpleAccordion() {
  const [isExpanded, setIsExpanded] = useState<string | false>("");

  const handleChangeEvent =
    (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
      setIsExpanded(newExpanded ? panel : false);
    };

  const accordionList = faqs.map((faq) => {
    const { id, title, content } = faq;
    return (
      <Accordion onChange={handleChangeEvent(id)} expanded={isExpanded === id}>
        <AccordionSummary expandIcon={<IconExpandMore />}>
          <StyledTitle variant="h6">{title}</StyledTitle>
        </AccordionSummary>
        <StyledContent variant="body1">{content}</StyledContent>
      </Accordion>
    );
  });

  return (
    <ThemeProvider theme={theme}>
      <StyledWrapper>
        <h1>Frequently asked questions</h1>
        {accordionList}
      </StyledWrapper>
    </ThemeProvider>
  );
}

export default SimpleAccordion;
