import React, {KeyboardAvoidingView, TextInput} from 'react-native';

type SearchProps = {
  value: string;
  label: string;
  onChange: () => void;
};

export const Search = ({value = '', label, onChange}: SearchProps) => {
  return (
    <KeyboardAvoidingView>
      <TextInput value={value} placeholder={label} onChangeText={onChange} />;
    </KeyboardAvoidingView>
  );
};
