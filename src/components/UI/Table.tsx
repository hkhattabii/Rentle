import React, {
  PropsWithChildren,
  Dispatch,
  SetStateAction,
  ReactElement,
} from "react";
import Paper from "@material-ui/core/Paper";
import TableToolbar from "../UI/TableToolbar";
import TableContainer from "@material-ui/core/TableContainer";
import { default as MuiTable } from "@material-ui/core/Table";
import TableHead from "./TableHead";
import TableBody from "@material-ui/core/TableBody";
import useClient from "../../hooks/useClient";
import useGetDoc, { GetDocIDFunc } from "../../hooks/useGeDoc";
import { IDocument, IEntityFormState } from "../../types";
import { WithImage } from "../../hooks/types";

interface TableProps<T extends IDocument, TForm extends WithImage> {
  data: T[] | undefined;
  formState: IEntityFormState<TForm>;
  fetchUri: string;
  entity: "guarant" | "bien" | "locataire" | "bail";
  columns: string[];
  toolbarComponent?: ReactElement;
  children: (
    form: IEntityFormState<TForm>,
    setForm: Dispatch<SetStateAction<IEntityFormState<TForm>>>,
    toggleSelect: (currentValue: boolean, entityChecked: string) => void,
    getDocID: GetDocIDFunc,
    entitiesSelected: string[],
    entities: T[] | undefined
  ) => ReactElement;
}

export default function Table<T extends IDocument, TForm extends WithImage>({
  data,
  formState,
  fetchUri,
  entity,
  columns,
  toolbarComponent,
  children,
}: PropsWithChildren<TableProps<T, TForm>>) {
  const [entities, setEntities] = React.useState(data);
  const [entitiesSelected, setEntitiesSelected] = React.useState<string[]>([]);
  const [form, setForm] = React.useState<IEntityFormState<TForm>>(formState);
  const client = useClient();
  const { getDocID, getDocObjID } = useGetDoc();

  const onInsertUpdate = async () => {
    const updatedState = await client.insertUpdate<TForm, T>({
      form: form.data,
      entities,
      entity: entity,
      isUpdating: form.isUpdating,
      uri: fetchUri,
    });
    setEntities(updatedState);
    setForm(formState);
    setEntitiesSelected([]);
  };
  const onDelete = async () => {
    const updatedState = await client.delete<T>({
      entityIDS: entitiesSelected,
      entities,
      uri: fetchUri,
    });
    setEntities(updatedState);
    setForm(formState);
  };
  const onGenerate = async (type: "Contract" | "GuarantorDeposit") => {
    const id = entitiesSelected[0];
    switch (type) {
      case "Contract":
        client.generateDocuments(id);
        break;
      case "GuarantorDeposit":
        client.guarantorDeposit(id);
    }
  };
  const cancelUpdate = () =>
    setForm({ ...form, open: false, isUpdating: false });
  const handleInsert = () =>
    setForm({ ...form, open: true, isUpdating: false });
  const handleUpdate = () => {
    if (entities) {
      const entity: T | undefined = getDocObjID(entities, entitiesSelected[0]);
      if (entity)
        setForm({ data: entity as any, open: true, isUpdating: true });
    }
  };
  const toggleSelect = (currentValue: boolean, entityChecked: string) => {
    if (currentValue) setEntitiesSelected([...entitiesSelected, entityChecked]);
    else
      setEntitiesSelected(
        entitiesSelected.filter(
          (entitySelected) => entitySelected !== entityChecked
        )
      );
  };

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
        onGenerate={onGenerate}
        component={toolbarComponent}
      />
      <TableContainer style={{ height: "80vh" }}>
        <MuiTable>
          <TableHead columns={columns} />
          <TableBody>
            {children &&
              children(
                form,
                setForm,
                toggleSelect,
                getDocID,
                entitiesSelected,
                entities
              )}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </Paper>
  );
}
