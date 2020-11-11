import React, { PropsWithChildren } from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { default as MuiSelect } from "@material-ui/core/Select";
import useClient from '../../hooks/useClient'
import { IDocument, IFetchState } from "../../types";


interface SelectProps<TEntity> {
  label?: string;
  currentValue:  string;
  name?: string
  data: TEntity[] | undefined
  messageEmpty: string
  onDataFetched: (name: string, data: TEntity[]) => void
}

export default function SelectAsync<TEntity extends IDocument>({ label, currentValue, name, data,messageEmpty, onDataFetched, children }:  PropsWithChildren<SelectProps<TEntity>>) {
  const client = useClient()


  const fetchEntities = async () => {
      const entitiesFetched = await client.getAll<TEntity>({uri: "/guarantors"})
      onDataFetched("guarantors", entitiesFetched)
  }




  return (
    <FormControl variant="outlined"  fullWidth>
      <InputLabel>{label}</InputLabel>
      <MuiSelect value={currentValue} label={label} onFocus={() => !data && fetchEntities()}>
        {data && data.length > 0 ? children && children : <MenuItem value={messageEmpty}>{messageEmpty}</MenuItem> }
      </MuiSelect>
    </FormControl>
  );
}