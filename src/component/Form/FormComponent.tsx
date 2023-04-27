import { Button } from 'antd';
import {
  FC, useCallback, useEffect, useState,
} from 'react';
import { FormComponentType } from '../../types/types';
import { CheckBoxComponent } from '../CheckBox/CheckBoxComponent';
import { DatePickerComponent } from '../DatePicker/DatePicker';
import { InputComponent } from '../Input/Input';
import { RadioButtonGroup } from '../RadioButton/RadioButtonGroup';
import { SelectListComponent } from '../SelectList/SelectList';

export const FormComponent: FC<FormComponentType> = ({
  formItems,
  handleFinish,
}) => {
  const [formValue, setFormValue] = useState<{ [key:string]: any }>({});
  useEffect(() => {
    formItems.forEach((item) => {
      console.log(item.name, item.value);
      setFormValue((prevState) => { Object.assign(prevState, { [item.name]: item.value }); });
      debugger; // eslint-disable-line no-debugger
    });
  }, []);
  //  console.log(formValue);
  const handleChange = useCallback(
    (name: string, value: string | boolean | number) => {
      setFormValue({
        ...formValue,
        [name]: value,
      });
    },
    [formValue],
  );
  return (
    <form action="">
      {formItems.map((formItem) => (
        <div>
          {formItem.itemType === 'checkBox' && (
            <CheckBoxComponent
              handleChange={(value) => handleChange(formItem.name, value)}
              checkBoxText={formItem.itemText ?? ''}
              className={''}
            />
          )}
           {formItem.itemType === 'datePicker' && (
            <DatePickerComponent
            handleChange={(value) => handleChange(formItem.name, value)}
              defaultDate={formItem.defaultValue ?? ''}
              value={Object.keys(formValue).filter((key) => key === formItem.name)[0]}
            />
           )}
          {formItem.itemType === 'input' && (
            <InputComponent
              placeholder={formItem.placeholder ?? ''}
              handleChange={(value) => handleChange(formItem.name, value)}
              value={''}
            />
          )}
          {formItem.itemType === 'radio' && (
            <RadioButtonGroup
              options={formItem.options ?? []}
              handleChange={(value) => handleChange(formItem.name, value)}
              defaultValue={formItem.defaultValue}
            />
          )}
          {formItem.itemType === 'select' && (
            <SelectListComponent
              defaultValue={formItem.defaultValue ?? ''}
              options={formItem.options ?? []}
              value={
                Object.keys(formValue).filter((key) => key === formItem.name)[0]
              }
              isDisabled={formItem.isDisabled}
              isLoading={formItem.isLoading}
              isAbleClear={formItem.isAbleClear}
              isSearch={formItem.isSearch}
              handleChange={(value) => handleChange(formItem.name, value)}
              handleSearch={formItem.handleSearch}
              placeholder={formItem.placeholder}
              mode={formItem.mode}
            />
          )}
        </div>
      ))}
      <Button onClick={() => handleFinish(formValue)} />
    </form>
  );
};
