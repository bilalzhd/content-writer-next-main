'use client';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch('/api/engines').then(res => res.json())

function ModelSelection() {
  const {data: models, isLoading } = useSWR('models', fetchModels);
  const {data: model, mutate: setModel} = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })
   
  return (
    <div className='mt-2'>
      <Select className='mt-2'
      defaultValue={models}
      options={models?.modelOptions}
      placeholder={model}
      isSearchable
      isLoading={isLoading}
      menuPosition='fixed'
      classNames={{
        control: (state) => "bg-[#434654] border-[#434654]",
      }}
      onChange={e => setModel(e.value)}
      />
    </div>
  )
}

export default ModelSelection