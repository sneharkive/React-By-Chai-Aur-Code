import React, { useState } from 'react'

import { useSearchParams } from 'react-router-dom'

export const Home = () => {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId')

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }
  }

  return (
    <div>
      <div className="flex gap-7">
        <input
          className="px-4 rounded-2xl my-2"
          type="text"
          placeholder="Enter Title Here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button 
        onClick={createPaste}
        className="px-4 rounded-2xl my-2">
          {pasteId ? 'Update Ny Paste' : 'Create My Paste'}
        </button>
      </div>

      <div className='mt-8'>
        <textarea
        className='rounded-2xl min-w-[500px] p-5'
          value={value}
          placeholder="Enter Context"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>
    </div>
  )
}
