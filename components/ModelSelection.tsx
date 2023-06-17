'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('api/engines').then(res => res.json())

function ModelSelection() {
  const {data: models, isLoading } = useSWR('models', fetchModels);
   
  return (
    <div>
      <Select className='mt-2'
      // defaultValue={models}
      isSearchable
      isLoading={isLoading}
      menuPosition='fixed'
      // classNames={{
      //   control: state
      // }}
      />
    </div>
  )
}

export default ModelSelection