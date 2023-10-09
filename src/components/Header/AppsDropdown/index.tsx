import { useState, useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { StyledAppsIcon } from "../../Search/styles";
import { LABELS, ROUTES } from "../../../constants";
import { StyledDropdownItem, StyledDropdownMenu } from "../styles";

function AppsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div style={{ position: "relative" }} ref={dropdownRef}>
      <StyledAppsIcon onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <StyledDropdownMenu>
          <StyledDropdownItem
            href={ROUTES.MY_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> {LABELS.LINKEDIN}
          </StyledDropdownItem>
          <StyledDropdownItem
            href={ROUTES.MY_LAST_CHALLENGE}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> {LABELS.MY_LAST_CHALLENGE}
          </StyledDropdownItem>
        </StyledDropdownMenu>
      )}
    </div>
  );
}

export default AppsDropdown;
