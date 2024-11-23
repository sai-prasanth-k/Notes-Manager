import React from 'react'
import { useState } from 'react';
import { FormCardPage,FormSelect, FormContainer, FormHeading, FormInput, FormLabel, InputContainer, FormButton } from './styledComponent'

const Form = ({onAdd}) => {
  const [formData, setformData] = useState({
    title: '',
    category: 'WORK',
    description: '',
  });

  const handleChanges = (e) => {
    setformData({...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/notes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      onAdd(data)
      console.log(response);
      setformData({title: '', category: 'WORK', description: ''});
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormCardPage>
      <FormContainer onSubmit={handleSubmit}>
        <FormHeading className='add-transaction-heading'>Add Transaction</FormHeading>
        <InputContainer>
          <FormLabel htmlFor="title">TITLE</FormLabel>
          <FormInput className='input-field' type="texxt" id="title" name="title" onChange={handleChanges} value={formData.title} placeholder='Enter the title' />
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="description">DESCRIPTION</FormLabel>
          <FormInput className='input-field' type="text" id="description" name="description" value={formData.description} onChange={handleChanges} placeholder='Enter the description' />
        </InputContainer>
        <InputContainer>
          <FormLabel htmlFor="category">CATEGORY</FormLabel>
          <FormSelect className='input-field' name="category" value={formData.category} onChange={handleChanges} id="category">
            <option value="WORK">WORK</option>
            <option value="PERSONAL">PERSONAL</option>
            <option value="OTHERS">OTHERS</option>
          </FormSelect>
        </InputContainer>
        <FormButton className='add-btn' type='submit'>ADD</FormButton>
      </FormContainer>
    </FormCardPage>
  )
}

export default Form