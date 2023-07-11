import { Button, Center, Container, Table } from "@mantine/core";
import styles from "./table.module.css";
import { table } from "console";
import { Buttonmenu } from "../Buttonmenu";
export function Demo() {
  const elements = [
    { id: 1, day: "月曜日" },
    { id: 2, day: "火曜日" },
    { id: 3, day: "水曜日" },
    { id: 4, day: "木曜日" },
    { id: 5, day: "金曜日" },
    { id: 6, day: "土曜日" },
    { id: 7, day: "日曜日" },
  ];

  return (
    <>
      <Container size="xl" className={styles.table_continer}>
        <Table style={{ border: "1px solid #ccc" }}>
          <tbody>
            <tr>
              {elements.map((element) => {
                return (
                  <th
                    key={element.id}
                    className={styles.table_day}
                    style={{ textAlign: "center" }}
                  >
                    {element.day}
                  </th>
                );
              })}
            </tr>
            <tr>
              {elements.map((element) => {
                return (
                  <td
                    key={element.id}
                    className={styles.table_div}
                    style={{ border: "1px solid #ccc" }}
                  >
                    <div> </div>
                  </td>
                );
              })}
            </tr>
            <tr>
              {elements.map((element) => {
                return (
                  <th
                    key={element.id}
                    className={styles.table_button}
                    style={{ textAlign: "center" }}
                  >
                    <Buttonmenu />
                  </th>
                );
              })}
            </tr>
            <tr>
              {elements.map((element) => {
                return (
                  <td
                    key={element.id}
                    className={styles.table_total}
                    style={{ border: "1px solid #ccc" }}
                  >
                    <dl>
                      <dt>合計</dt>-<dd></dd>
                    </dl>
                  </td>
                );
              })}
            </tr>
          </tbody>
        </Table>
      </Container>
    </>
  );
}
