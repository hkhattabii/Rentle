import React from "react";
import Paper from "@material-ui/core/Paper";
import TableToolbar from "../UI/TableToolbar";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import GuarantorHead from "./GuarantorHead";
import GuarantorCell from './GuarantorCell'
import guarantorFormState from "./formState";
import useClient from "../../hooks/useClient";
import useGetDoc from "../../hooks/useGeDoc";
import { IGuarantor } from "../../types";
import { IGuarantorForm, IGuarantorFormState } from "./types";
import GuarantorForm from "./GuarantorForm";



interface GuarantorTableProps {
  data: IGuarantor[] | undefined;
}

export default function GuarantorTable({ data }: GuarantorTableProps) {
  const [guarantors, setGuarantors] = React.useState(data);
  const [guarantorsSelected, setGuarantorSelected] = React.useState<string[]>([]);
  const [form, setForm] = React.useState<IGuarantorFormState>(guarantorFormState);
  const client = useClient();
  const { getDocID, getDocObjID } = useGetDoc();

  const onInsertUpdate = async () => {
    const updatedState = await client.insertUpdate<IGuarantorForm, IGuarantor>({
      form: form.data,
      entities: guarantors,
      entity: "guarant",
      isUpdating: form.isUpdating,
      uri: "/guarantors"
    })
    setGuarantors(updatedState)
  };
  const onDelete = async () => {
    const updatedState = await client.delete<IGuarantor>({
      entityIDS: guarantorsSelected,
      entities: guarantors,
      uri: "/guarantors"
    })
    setGuarantors(updatedState)
  };
  const cancelUpdate = () => setForm({...form, open: false, isUpdating: false});
  const handleInsert = () => setForm({...form, open: true})
  const handleUpdate = () => {
    if (guarantors) {
      const guarantor: IGuarantor | undefined = getDocObjID(guarantors, guarantorsSelected[0])
      if (guarantor) setForm({data: guarantor, open: true, isUpdating: true})
    }
  };
  const toggleSelect = (currentValue: boolean, guarantorChecked: string) => {
    if (currentValue) setGuarantorSelected([...guarantorsSelected, guarantorChecked])
    else setGuarantorSelected(guarantorsSelected.filter(guarantorSelected => guarantorSelected !== guarantorChecked))
  };

  return (
    <Paper style={{ width: "100%" }}>
      <TableToolbar
        formOpen={form.open}
        isUpdating={form.isUpdating}
        selectedCount={guarantorsSelected.length}
        handleInsert={handleInsert}
        handleUpdate={handleUpdate}
        cancelUpdate={cancelUpdate}
        onInsertUpdate={onInsertUpdate}
        onDelete={onDelete}
      />
      <TableContainer style={{height: '80vh'}}>
          <Table>
              <GuarantorHead />
              <TableBody>
                {
                  form.open && !form.isUpdating && <GuarantorForm form={form} setForm={setForm} />
                }
                  {
                      guarantors && guarantors.map((guarantor: IGuarantor) => {
                          const isSelected = getDocID(guarantorsSelected, guarantor.id)
                          if (form.isUpdating && guarantorsSelected[0] === guarantor.id) return <GuarantorForm key={guarantor.id} form={form} setForm={setForm} />
                          return <GuarantorCell key={guarantor.id} selected={Boolean(isSelected)} onSelect={toggleSelect} guarantor={guarantor} />
                      })
                  }
              </TableBody>
          </Table>
      </TableContainer>
    </Paper>
  );
}
