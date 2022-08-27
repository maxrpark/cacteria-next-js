import { shareIcons } from "../../public/shareIconsData";

interface Props {
  productID: string;
}

const ShareIconsSingleProduct: React.FC<Props> = ({ productID }) => {
  return (
    <section className='d-flex p-4 p-lg-0 mt-lg-4 justify-content-start align-items-center gap-2'>
      <h2 className='m-0 text-center'>Share:</h2>
      {shareIcons.map((icon: any) => {
        const { Wrapper, Icon, url, id, hashtag } = icon;
        return (
          <div key={id}>
            <Wrapper url={url + productID} hashtag={hashtag}>
              <Icon size={32} round />
            </Wrapper>
          </div>
        );
      })}
    </section>
  );
};

export default ShareIconsSingleProduct;
