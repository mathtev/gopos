import { SingleValue } from 'react-select';
import AsyncSelect from 'react-select/async';
import { Category, ServiceResponse, Tax } from '../services/goposService/types';

export type SelectOption = { label: string; value: number };

interface SelectAsyncProps {
  selectedValue?: SelectOption;
  getData: (name: string) => ServiceResponse<Category[]> | ServiceResponse<Tax[]>;
  handleSelectChange: (SelectOption: SelectOption) => void;
  name?: string;
}

const CustomAsyncSelect: React.FC<SelectAsyncProps> = ({
  getData,
  selectedValue,
  handleSelectChange,
  name,
}) => {
  const loadData = (match: string) => {
    return getData(match)
      .then((resp) => {
        return resp?.map((x, idx: number) => ({ label: x.name, value: x.id }));
      })
      .catch((e: Error) => console.error(e.message));
  };

  const onChange = (newValue: SingleValue<SelectOption>) => {
    if (newValue) 
      handleSelectChange(newValue);
  };

  return (
    <AsyncSelect
      name={name}
      defaultOptions
      value={selectedValue}
      loadOptions={loadData}
      onChange={onChange}
    />
  );
};

export default CustomAsyncSelect;
