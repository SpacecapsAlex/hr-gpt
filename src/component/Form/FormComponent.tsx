/* eslint-disable max-lines */
import { FC, useEffect, useState } from 'react';
import { FormComponentType } from '../../types/types';
import { CheckBoxComponent } from '../CheckBox/CheckBoxComponent';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { InputComponent } from '../Input/Input';
import { RadioButtonGroup } from '../RadioButton/RadioButtonGroup';
import { SelectList } from '../SelectList/SelectList';
import { Button } from '../Button/Button';
import { convertDate } from '../../utils/utils';

const doubleField = () => console.log('doubleField');

export const FormComponent: FC<FormComponentType> = ({
  formItems,
  handleFinish,
  classNameWrapper,
  classNameItem,
  buttonText,
}) => {
  const [formValue, setFormValue] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    formItems.forEach((item) => {
      setFormValue(Object.assign(formValue, { [item.name]: item.value }));
    });
  }, []);
  const handleChange = (name: string, value: string | boolean | number) => {
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  return (
    <form className={classNameWrapper}>
      {formItems.map((formItem, index) => (
        <div
          key={index}
          className={classNameItem}
          style={
            formItem.break
              ? { flexBasis: '100%' }
              : { flexBasis: formItem.flexBasis }
          }
        >
          {formItem.itemType === 'checkBox' && (
            <CheckBoxComponent
              handleChange={(value) => handleChange(formItem.name, value)}
              checkBoxText={formItem.itemText ?? ''}
              className={''}
            />
          )}
          {formItem.addButton && (
            <Button
              onClick={() => doubleField()}
              text={formItem.addButtonText}
            />
          )}
          {formItem.itemType === 'datePicker' && (
            <DatePickerComponent
              handleChange={(value) => {
                handleChange(formItem.name, convertDate(value));
              }}
              defaultDate={formItem.defaultValue ?? ''}
              label={formItem.label}
              mode={formItem.modeDate}
              value={
                formValue[
                  Object.keys(formValue).filter(
                    (key) => key === formItem.name,
                  )[0]
                ] ?? formItem.defaultValue
              }
            />
          )}
          {formItem.itemType === 'input' && (
           <div>
             <div>{formItem.label}</div>
              <InputComponent
              placeholder={formItem.placeholder ?? ''}
              handleChange={(value) => handleChange(formItem.name, value)}
              value={
                formValue[
                  Object.keys(formValue).filter(
                    (key) => key === formItem.name,
                  )[0]
                ] ?? formItem.value
              }
            />
           </div>
          )}
          {formItem.itemType === 'radio' && (
            <RadioButtonGroup
              options={formItem.options ?? []}
              handleChange={(value) => handleChange(formItem.name, value)}
              defaultValue={formItem.defaultValue}
              value={
                formValue[
                  Object.keys(formValue).filter(
                    (key) => key === formItem.name,
                  )[0]
                ] ?? formItem.defaultValue
              }
            />
          )}
          {formItem.itemType === 'select' && (
            <SelectList
              defaultValue={formItem.defaultValue}
              options={formItem.options ?? []}
              value={
                formValue[
                  Object.keys(formValue).filter(
                    (key) => key === formItem.name,
                  )[0]
                ]
              }
              isDisabled={formItem.isDisabled}
              isLoading={formItem.isLoading}
              isAbleClear={formItem.isAbleClear}
              isSearch={formItem.isSearch}
              handleChange={(value: string) => handleChange(formItem.name, value)}
              handleSearch={formItem.handleSearch}
              placeholder={formItem.placeholder}
              mode={formItem.mode}
            />
          )}
        </div>
      ))}
      <Button onClick={() => handleFinish(formValue)} text={buttonText} />
    </form>
  );
};
