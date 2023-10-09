import { HeaderProps } from "../../types/PropsData";
import Logo from "../Logo";
import SearchForm from "../Form/SearchForm";
import AppsDropdown from "./AppsDropdown";
import { StyledHeader, StyledLeftGroup, StyledRightGroup } from "./styles";
import { UserAvatar } from "../../styles/styles";

function Header({ altAvatar, srcAvatar, hiddenSearch }: HeaderProps) {
  return (
    <StyledHeader>
      {!hiddenSearch && (
        <StyledLeftGroup>
          <Logo />
          <SearchForm hideButton />
        </StyledLeftGroup>
      )}
      <StyledRightGroup>
        <AppsDropdown />
        <UserAvatar src={srcAvatar} alt={altAvatar} />
      </StyledRightGroup>
    </StyledHeader>
  );
}
export default Header;
