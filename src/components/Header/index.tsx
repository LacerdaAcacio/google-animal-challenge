import { HeaderProps } from "../../types/PropsData";
import { StyledAppsIcon, StyledHeader, UserAvatar } from "../Search/styles";
import Logo from "../Logo";
import SearchForm from "../Form/SearchForm";

function Header({
  altAvatar,
  srcAvatar,
  hiddenSearch, // ...headerProps
}: HeaderProps) {
  // const copyright = showCopyRight ? "©" : "";
  // const avatar = faker.image.avatar();
  return (
    <StyledHeader>
      {!hiddenSearch && (
        <>
          <Logo />
          {/* <StyledSearchInput {...headerProps} /> */}
          <SearchForm hideButton />
        </>
      )}
      <StyledAppsIcon />
      <UserAvatar src={srcAvatar} alt={altAvatar} />
    </StyledHeader>
  );
}
export default Header;
