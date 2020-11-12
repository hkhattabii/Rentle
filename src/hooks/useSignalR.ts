import * as signalR from "@aspnet/signalr";
import { useDispatch } from "react-redux";
import { onDueAlarm } from '../store/reducer'
import { ILease } from "../types";

const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/alarm")
  .build();

export default function useSignalR(): () => void {
  const dispatch = useDispatch()
  const start = () => {
    connection
      .start()
      .then(() =>
        console.log("The signal R connection wast established successfully")
      )
      .catch((err) =>
        console.log("Error while establishing the connection : ", err)
      );
    connection.on("sendAlarm", (data: ILease[]) => {
        dispatch(onDueAlarm({leases: data}))
    })
  };

  return start
}
