import React from 'react';
import axios from 'axios';
import { ParserStateType } from '../state/atom/parserState';
import { Tags } from '../component';

export const ParserExample = () => {
  const [localData, setLocalData] = React.useState<ParserStateType>({});
  const [file, setFile] = React.useState<File | null>(null);

  const handleClick = () => {
    axios({
      method: 'post',
      url: 'https://localhost:7002/Parser/UploadFile',
      data: { file },
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then((response) => {
        setLocalData(response.data);
      })
      .catch(() => {
        console.log('error');
      });
  };

  const handleChange = (files: FileList | null) => {
    if (files) {
      setFile(files[0]);
    }
  };

  if (!localData.firstName) {
    return (
      <div>
        <button onClick={handleClick}>Send</button>
        <input type='file' onChange={(e) => handleChange(e.target.files)} />
      </div>
    );
  }

  return (
    <div>
      <button onClick={handleClick}>Send</button>
      <input type='file' onChange={(e) => handleChange(e.target.files)} />
      <h1 style={{ textAlign: 'center', fontSize: '28px' }}>Parser Example</h1>
      <div className='flex'>
        <label>Имя - {localData.firstName}</label>
      </div>
      <div className='flex'>
        <label>Отчество - {localData.surName}</label>
      </div>
      <div className='flex'>
        <label>Возраст - {localData.age}</label>
      </div>
      <div className='flex'>
        <label>Гражданство - {localData.citizenship}</label>
      </div>
      <div className='flex'>
        <label>Страна - {localData.country}</label>
      </div>
      <div className='flex'>
        <label>Город - {localData.city}</label>
      </div>
      <div className='flex'>
        <label>Уровень - {localData.level}</label>
      </div>
      <br/>
      <label>Языки</label>
      <div>
        {
          localData.languages?.map((item, index) => (
            <div key={index} className='flex ml-10'>
              <label>{item.name}</label>
              <label> - </label>
              <label>{item.level}</label>
            </div>
          ))
        }
      </div>
      <br/>
      <div className='flex'>
        <label>Опыт - </label>
        <label>{localData.yearOfSkill}</label>
        <label>.</label>
        <label>{localData.monthOfSkill}</label>
      </div>
      <br/>
      <label>Образование</label>
      <div>
        {
          localData.institute?.map((item, index) => (
            <div key={index} className='flex ml-10'>
              <label>{item}</label>
            </div>
          ))
        }
      </div>
      <br/>
      <label>Навыки</label>
      <div className='w-1/2 ml-10'>
        <Tags tagsValue={localData.skills} isClosable={false} />
      </div>
      <br/>
      <label>Проекты</label>
      <div>
        {
          localData.userProjects?.map((item, index) => (
            <div key={index} className='ml-10'>
              <div>
                <label>{item.name}</label>
              </div>
              <div>
                <label>{item.time}</label>
              </div>
              <div>
                <label>{item.position}</label>
              </div>
              <div>
                <label>{item.description}</label>
              </div>
              <div>
                <ul>
                  {
                    item.someInformation?.map((item1, index1) => (
                      <li className='ml-5 flex' key={index1}>
                        <label>* </label>
                        <label>{item1}</label>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className='flex'>
                <Tags isClosable={false} tagsValue={item.technologies} />
              </div>
              <br/>
              <hr/>
              <br/>
            </div>
          ))
        }
      </div>
    </div>
  );
};
