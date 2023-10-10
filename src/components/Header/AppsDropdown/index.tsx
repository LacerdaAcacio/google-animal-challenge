import { useState, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LABELS, ROUTES } from "../../../constants";
import {
  StyledAppsIcon,
  StyledDropdownItem,
  StyledDropdownMenu,
  StyledDropdownContainer,
} from "../styles";
import useOutsideClick from "../../../hooks/useOutsideClick";

function AppsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const { MY_LINKEDIN, MY_LAST_CHALLENGE } = ROUTES;

  return (
    <StyledDropdownContainer ref={dropdownRef}>
      <StyledAppsIcon onClick={() => setIsOpen((prev: boolean) => !prev)} />
      {isOpen && (
        <StyledDropdownMenu>
          <StyledDropdownItem
            href={MY_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> {LABELS.LINKEDIN}
          </StyledDropdownItem>
          <StyledDropdownItem
            href={MY_LAST_CHALLENGE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> {LABELS.MY_LAST_CHALLENGE}
          </StyledDropdownItem>
        </StyledDropdownMenu>
      )}
    </StyledDropdownContainer>
  );
}

export default AppsDropdown;
