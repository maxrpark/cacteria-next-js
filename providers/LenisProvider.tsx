import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

const LenisProvider: React.FC<Props> = ({ children }) => {
  return <ReactLenis root>{children}</ReactLenis>;
};

export default LenisProvider;
