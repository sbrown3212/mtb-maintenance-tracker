import React, { useState } from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';

const NewBuildForm = ({ setBuildsData, setDisplayForm }) => {
  const [ name, setName ] = useState('');
  const [ newPartsSelected, setNewPartsSelected ] = useState(true);

  const userId = useSelector((state) => state.userId)

  const handleNewBuild = async (e) => {
    e.preventDefault();

    const bodyObj = {
      buildName: name,
      userId: userId,
      createNewParts: newPartsSelected
    };

    const res = await axios.post('/api/new-build', bodyObj);

    if (res.data.success) {
      setBuildsData(res.data.builds);
      setName('');
      setDisplayForm(false);
    }
  };

  const handleNewPartsChange = () => {
    setNewPartsSelected(!newPartsSelected)
  }

  return (
    <form onSubmit={handleNewBuild}>
      <div>
        <input
          value={name}
          type="text" 
          placeholder='Build name'
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="create-new-parts">Create new parts for this build?</label>
        <input
          value={newPartsSelected}
          type="checkbox"
          checked={newPartsSelected}
          id="create-new-parts"
          onChange={handleNewPartsChange}
        />
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  )
}

export default NewBuildForm