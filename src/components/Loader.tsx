import { Skeleton } from 'primereact/skeleton';

function Loader() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
      <div className='custom-skeleton p-4'>
        <Skeleton width='100%' height='150px'></Skeleton>
      </div>
    </div>
  );
}

export default Loader;
