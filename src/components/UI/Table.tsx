import React, { PropsWithChildren, Dispatch, SetStateAction, ReactElement } from "react";
import Paper from "@material-ui/core/Paper";
import TableToolbar from "../UI/TableToolbar";
import TableContainer from "@material-ui/core/TableContainer";
import {default as MuiTable} from "@material-ui/core/Table";
import TableHead from "./TableHead";
import TableBody from "@material-ui/core/TableBody";
import useClient from "../../hooks/useClient";
import useGetDoc from "../../hooks/useGeDoc";
import { IDocument, IEntityFormState } from "../../types";
import { TableRow } from "@material-ui/core";
import { IOccupantForm } from "../Occupant/types";
import { WithImage } from "../../hooks/types";


interface TableProps<T, TFormState> {
  data: T[] | undefined;
  formState: TFormState;
  fetchUri: string,
  entity: "guarant" | "bien" | "locataire",
  columns: string[];
  children: (form: TFormState, setForm: Dispatch<SetStateAction<TFormState>>) => ReactElement
}

export default function Table<T extends IDocument,TFormState extends IEntityFormState<TForm>, TForm extends WithImage>({data,formState, fetchUri,entity,columns, children}: PropsWithChildren<TableProps<T, TFormState>>) {
  const [entities, setEntities] = React.useState(data);
  const [entitiesSelected, setEntitiesSelected] = React.useState<string[]>([]);
  const [form, setForm] = React.useState<TFormState>(formState);
  const client = useClient();
  const { getDocID, getDocObjID } = useGetDoc();


  const onInsertUpdate = async () => {
    const updatedState = await client.insertUpdate<TForm, T>({
      form: form.data,
      entities,
      entity: entity,
      isUpdating: form.isUpdating,
      uri: fetchUri
    })
  };
  const onDelete = () => {};
  const cancelUpdate = () => {};
  const handleInsert = () => setForm({...form, open: true, isUpdating: false});
  const handleUpdate = () => {};
  const toggleSelect = () => {};

  console.log("ENTITIES : ", entities)

  return (
    <Paper style={{ width: "100%" }}>
      <TableToolbar
        formOpen={form.open}
        isUpdating={form.isUpdating}
        selectedCount={entitiesSelected.length}
        handleInsert={handleInsert}
        handleUpdate={handleUpdate}
        cancelUpdate={cancelUpdate}
        onInsertUpdate={onInsertUpdate}
        onDelete={onDelete}
      />
      <TableContainer style={{height: '80vh'}}>
          <MuiTable>
                <TableHead columns={columns} />
                <TableBody>
                    {

                        children && children(form, setForm)
                    }
                </TableBody>
          </MuiTable>
      </TableContainer>
    </Paper>
  );
}
