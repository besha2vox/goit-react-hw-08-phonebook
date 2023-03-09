import { LoaderBackdrop } from './Loader.styled';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <Oval
        height={80}
        width={80}
        color="#aaaaaa"
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#555555"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderBackdrop>
  );
};

export default Loader;
