import { shareIcons } from "../../public/shareIconsData";

const ShareIconsSingleProduct: React.FC = () => {
  return (
    <section className='d-flex justify-content-start align-items-center gap-2'>
      <h2>Share:</h2>
      {shareIcons.map((icon: any) => {
        const { Wrapper, Icon, url, id, hashtag } = icon;
        return (
          <div key={id}>
            <Wrapper url={url} hashtag={hashtag}>
              <Icon size={32} round />
            </Wrapper>
          </div>
        );
      })}
    </section>
  );
};

export default ShareIconsSingleProduct;
