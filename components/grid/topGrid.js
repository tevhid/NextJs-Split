import { v4 as uidV4 } from 'uuid';
import {useState,useEffect,useCallback, useMemo} from 'react';
import GridFilter from "./filter"
import GridTable from './table/table';
import GridThead from "./table/thead"
import GridBody from "./table/body"
import axios from 'axios';

const TopGrid = (props) => {
  const {
    data,
    columns,
    filter,
  } = props;

  const [gridData, setGridData] = useState([]);
  const [gridFilterData, setGridFilterData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);   
  const [gridCol, setGridCol] = useState([]);
  const [gridFilter, setGridFilter] = useState([]);
  
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
      const getFilter = [...new Set(await getData.map((item) => item.contract))];
      setGridFilter(getFilter);
      setGridFilterData(getData);   
      return getData;
    }
    getApi();
  }, [])

  
  /* grid column filter and set*/
  const onSettingsMenuItemsClick = useCallback((e) => {
      const filterColumn = gridCol.map((item) => {
        if (item.field === e.target.name) {         
          item.status = e.target.checked;
        }
        return item;        
      });
      setGridCol(filterColumn);        
  },[gridCol]);


  /* grid filter and set*/
  const onFilterChange = useCallback((e) => { 
    const filterData = gridFilterData.filter((item) => {
      return item.contract.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setGridData(filterData);
  },[gridData]);
   
  
  // if (gridData.length === 0) {
  //   return <div>Loading...</div>
  // }

    return (
        <>
            <GridFilter 
              column={gridCol} 
              onSettingsMenuItemsClick={onSettingsMenuItemsClick} 
              filter={gridFilter}
              onFilterChange={onFilterChange}/>
            <GridTable>
              <GridThead column={gridCol}/>               
              <GridBody row={gridData} column={gridCol}/>              
            </GridTable>
        </>
    )
}

export default TopGrid