import React, {useState} from 'react'
import Button from '@material-ui/core/Button'
import classes from './Paginator.module.css'
import ButtonGroup from '@material-ui/core/ButtonGroup'





const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10}) => {

  let pagesCount = Math.ceil(totalUsersCount / pageSize)
  

  let pages = []
  for (let i = 1; i < pagesCount; i++) {
    pages.push(i)
  }

  let portionCount = Math.ceil(pagesCount / portionSize)
  let [portionNumber, setPortionNumber] = useState(1)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
  let rightPortionPageNumber = portionNumber * portionSize


  return (
      <div>
        {portionNumber > 1 &&
        <button onClick={ ()=> {setPortionNumber(portionNumber - 1)}}>prev</button>}
        <ButtonGroup>
          {
            pages
            .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
            .map(page => {
              return <Button className={currentPage === page && classes.selectedPage}
                              onClick={ (e) => {
                              onPageChanged(page)
                              }}>{page}
                      </Button>
              
            })
          }
        </ButtonGroup>
        {portionCount > portionNumber &&
        <button onClick={ ()=> {setPortionNumber(portionNumber + 1)}}>next</button>}
      </div>
  
  )
}

export default Paginator
