interface Props {
  allCategories: string[];
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Filters: React.FC<Props> = ({ allCategories, handleClick }) => {
  return (
    <section className='d-flex gap-2 justify-content-center align-items-center m-3'>
      {allCategories.map((category: string) => {
        return (
          <button
            type='submit'
            key={category}
            name='category'
            value={category}
            onClick={handleClick}
            className='h-100 btn btn btn-outline-secondary item-product'
          >
            {category}
          </button>
        );
      })}
    </section>
  );
};

export default Filters;
