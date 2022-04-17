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
                return (
                  <Tr key={index} uid={item.uid}>
                    {
                      column?.map((filterItem,index) => {
                        if (filterItem.status && filterItem.field === Object.keys(item)[index]) {
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
              }              
            }) }               
          </tbody>      
    ) 
}

export default GridBody;