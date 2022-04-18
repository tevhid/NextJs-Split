import Tr from './body/tr';
import Td from './body/td';

const GridBody = (props) => {
    const {
        row,
        column,
    } = props;

    return (      
          <tbody>
            {row?.map((item,index) => {
              if (column?.length > 0) {    
                console.log(item);              
                return (
                  <Tr key={index} uid={item.uid}>
                    {
                      column.map((filterItem,index) => {                        
                        if (filterItem.status) {
                          console.log(`buradayım. ${item} item[filterItem.field] : ${filterItem.field}`); 
                          return (
                            <Td key={index}>
                              {item[filterItem.field]}
                            </Td>
                          )
                        }
                      })
                    }
                  </Tr>
                )                
              }else {
                return (
                  <Tr key={index} uid={item.uid}>
                    {
                      
                      Object.keys(item).map((value,index) => {                       
                        return (
                          <Td key={index}>
                            {item[value]}
                          </Td>
                        )
                      })
                    }
                  </Tr>
                )
              }              
            }) }               
          </tbody>      
    ) 
}

export default GridBody;

/*
propTypes: {
  row: PropTypes.array,
  column: PropTypes.array,
}
*/