import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@headlessui/react';

export default function SqlEditor() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const executeQuery = (data) => {
    console.log(data.query);
  };

  return (
    <div className="h-full w-full bg-gray-200 rounded p-2 flex flex-col space-y-2">
      <h2 className="text-2xl font-bold text-gray-700">Query Editor</h2>
      <form onSubmit={handleSubmit(executeQuery)} className="flex flex-col space-y-2 h-full">
        <div className="flex-grow relative">
          <textarea 
            {...register('query', { required: true })} 
            placeholder="Enter your query here" 
            className={`w-full h-full p-2 rounded border ${errors.query ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none`}
            onKeyUp={(event) => {
              if (event.key === 'Enter') {
                handleSubmit(executeQuery)();
              }
            }}
          />
          {errors.query && <p className="text-red-500  p-2 text-xs mt-1 absolute bottom-0">Query is required</p>}
        </div>
        <Button 
          type="submit" 
          className="flex-none bg-gray-700 text-white rounded p-2 hover:bg-gray-600 transition duration-200"
        >
          Run
        </Button>
      </form>
    </div>
  );
}