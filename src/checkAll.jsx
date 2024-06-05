import { Checkbox } from "antd";
import { useEffect, useState } from "react";

const data = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];
const App = () => {
  // chức năng checkbox nhiều
  const [initCheck, setInitCheck] = useState([]);
  const [checkFull, setCheckFull] = useState([]);
  const [listCheck, setListCheck] = useState([]);
  useEffect(() => {
    setInitCheck(data.map((_) => false));
    setCheckFull(data.map((_) => true));
    setListCheck(data.map((_) => false));
  }, [data]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    console.log("change list");

    let counter = 0;
    listCheck.forEach((item) => {
      counter = item ? counter + 1 : counter;
    });
    setSelected(counter !== 0);
    setIndeterminate(counter < listCheck.length && counter > 0);
    setCheckAll(counter === listCheck.length);
    // vì thay đổi list[index] rồi setList nhưng khong chạy hàm nên thêm refresh
  }, [listCheck]);
  const changeOne = (e, index) => {
    let checked = e.target.checked;
    let newListCheck = [...listCheck];
    newListCheck[index] = checked;
    setListCheck(newListCheck);
    console.log("change one");
  };
  const changeAll = () => {
    setListCheck(checkAll ? initCheck : checkFull);
    console.log("change all");
  };
  console.log(listCheck, selected, indeterminate, checkAll);
  return (
    <>
      <p>App</p>
      <div>
        <Checkbox
          onChange={changeAll}
          indeterminate={indeterminate}
          checked={checkAll}
        >
          All
        </Checkbox>
        <div className="flex flex-col">
          {data.map((item, index) => {
            return (
              <div key={item.id}>
                <Checkbox
                  checked={listCheck[index]}
                  onChange={(e) => changeOne(e, index)}
                >
                  {item.id}
                </Checkbox>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
