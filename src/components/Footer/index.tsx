import { FooterProps } from "../../types/PropsData";

function Footer({
  label,
  version,
  showCopyRight,
  ...footerProps
}: FooterProps) {
  const copyright = showCopyRight ? "©" : "";
  return (
    // <footer {...footerProps}>
    //   <p>
    //     {copyright} {label} {version}
    //   </p>
    // </footer>
    <footer {...footerProps}>
      <div>
        {/* {copyright} */}
        {`${copyright}${label}`}
      </div>
      <div>{version}</div>
    </footer>
  );
}
export default Footer;
