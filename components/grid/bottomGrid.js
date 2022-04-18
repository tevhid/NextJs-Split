import { v4 as uidV4 } from 'uuid';
import {useState,useEffect,useCallback, useMemo} from 'react';
import GridTable from './table/table';
import GridThead from "./table/thead"
import GridBody from "./table/body"
import axios from 'axios';
import AddRow from './addRow';

const BottomGrid = (props) => {
  const {
    data,
    columns,
    filter,
  } = props;

  const [gridData, setGridData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);   
  const [gridCol, setGridCol] = useState([]);
  
  /** static data - grid column */
  const gridColumn = useMemo(() => {
    return [
      {
        id: uidV4(),
        name: "Id",
        field: "id",
        sortable: true,
        filterable: true,
        status: true,
        width: "200px",
      },
      {
        id: uidV4(),
        name: "Kontrat",
        field: "contract",
        sortable: true,
        filterable: true,
        status: true,
        width: "200px",
      },
      {
        id: uidV4(),
        name: "Teklif",
        field: "bidding",
        sortable: true,
        filterable: true,
        status: true,
        width: "200px",
      },
      {
        id: uidV4(),
        name: "Data",
        field: "data",
        sortable: true,
        filterable: true,
        status: true,
        width: "200px",
      }
    ]
  }, []);


  /* data set*/
  useEffect(() => {      
    const getApi = async()=>{
      const response = await axios.get('http://localhost:3000/api/data');
      const getData = await response.data;
      await getData.map((item) => {
        item.uid = uidV4();
        return item;
      });
      setGridData(getData);
      setTotalCount(getData.length);
      setGridCol(gridColumn);    
      return getData;
    }
    getApi();
  }, [])


  /** addRow */
  const [show, setShow] = useState(false);
   
  const onAddRow = useCallback(() => {
    if(!show){
      setShow(true);
    }
  }, [show])


  /** 
   * There are many methods of getting the form.
   * I preferred the form submit event
   * 
   * It can be caught from the change event of the form elements. or reducer can be used.
   */
  const onFormSubmit = useCallback((e) => {
      e.preventDefault();
      const newData = {
          uid: uidV4(),
          id: e.target.elements?.id?.value.toString(),
          contract: e.target.elements?.contract?.value.toString(),
          bidding: e.target.elements?.bidding?.value.toString(),
          data: e.target.elements?.data?.value.toString(),
      }
      const newGridData = [...gridData, newData];
      setGridData(newGridData);
      setTotalCount(newGridData.length);
      setShow(false);
      e.target.reset();
  }, [gridData])
  

  if(!gridData.length){
    return <div>Loading...</div>
  }

  return (
      <>
          <GridTable>
            <GridThead column={gridCol}/>               
            <GridBody row={gridData} column={gridCol}/>              
          </GridTable>
          <AddRow show={show} onFormSubmit={onFormSubmit} onAddRow={onAddRow}/>

      </>
  )
}

export default BottomGrid

/* 
propTypes: {
  data: PropTypes.array,
  columns: PropTypes.array,
  filter: PropTypes.array,
}
*/